import gzip
import json
from pathlib import Path

import pytest

from dota_export import herois, porque_itens, validar

CONTEUDO = Path(__file__).resolve().parents[2] / "content" / "porque_itens"

CORPO = """
## Manta Style (manta)
- porque: Duas imagens limpam a wave.
- detalhe: 2 imagens por 18 s.
- contra: Silencer: o dispel tira o Global Silence.
- combo: Manta + Vladmir's.
- fonte: morphling.json (itens_core.manta); dota-imortal/data/opendota/items.json; liquipedia.net/dota2/Manta_Style

## Sange and Yasha / Manta Style (sange_and_yasha / manta)
- porque: Status Resistance contra lentidão.
- fonte: tiny.json

## Magic Wand (opcional) (magic_wand)
- porque: Carga grátis de vida.
- detalhe: Até 20 cargas.
- nota: Não compre duas.

## Itens neutros (vários, sem slug único)
- porque: Tier 1 dá o melhor ganho por slot.
"""


@pytest.fixture(scope="module")
def indice():
    return porque_itens.indice(CORPO)


def test_secao_traz_os_campos_e_as_fontes_legiveis(indice):
    assert indice["manta"] == {
        "texto": "Duas imagens limpam a wave.", "detalhe": "2 imagens por 18 s.",
        "contra": "Silencer: o dispel tira o Global Silence.", "combo": "Manta + Vladmir's.",
        "fontes": ["morphling.json (itens_core.manta)", "items.json do OpenDota (patch 7.41)",
                   "https://liquipedia.net/dota2/Manta_Style"],
    }


def test_campos_opcionais_ausentes_viram_none_e_nota_completa_o_detalhe(indice):
    wand = indice["magic_wand"]
    assert wand["contra"] is None and wand["combo"] is None and wand["fontes"] == []
    assert wand["detalhe"] == "Até 20 cargas. Não compre duas."


def test_slug_exato_vale_mais_que_a_parte_de_uma_secao_combinada(indice):
    assert indice["manta"]["texto"] == "Duas imagens limpam a wave."
    assert indice["sange_and_yasha"]["texto"] == indice["sange_and_yasha / manta"]["texto"] == "Status Resistance contra lentidão."


@pytest.mark.parametrize(("rotulo", "esperado"), [
    ("manta", "Duas imagens limpam a wave."),
    ("Sange and Yasha / Manta Style", "Status Resistance contra lentidão."),
    ("Magic Wand (505)", "Carga grátis de vida."),
    ("neutros (7.41)", "Tier 1 dá o melhor ganho por slot."),
    ("Sange and Yasha (4.100) → Manta Style (4.650)", "Status Resistance contra lentidão."),
])
def test_busca_pelo_slug_ou_pelo_rotulo_livre_do_guia(indice, rotulo, esperado):
    assert porque_itens.buscar(indice, rotulo)["texto"] == esperado


def test_item_sem_secao_fica_sem_porque(indice):
    assert porque_itens.buscar(indice, "nao_comprar") is None


@pytest.mark.parametrize(("corpo", "erro"), [
    ("## Yasha (yasha)\n- detalhe: sem porquê.\n", "falta '- porque:'"),
    ("## Yasha (yasha)\n- porque: x.\nlinha solta\n", "linha fora do formato"),
    ("## Yasha (yasha)\n- porque: x.\n\n## Yasha de novo (yasha)\n- porque: y.\n", "seção repetida"),
])
def test_formato_quebrado_falha_com_o_motivo(corpo, erro):
    with pytest.raises(ValueError, match=erro):
        porque_itens.indice(corpo)


@pytest.fixture(scope="module")
def fichas():
    return {f["id"]: f for f in herois.todos(porques=porque_itens.carregar(CONTEUDO))}


def test_os_22_arquivos_casam_com_as_fichas_pelo_nome_do_heroi(fichas):
    assert set(porque_itens.carregar(CONTEUDO)) == {f["nome"] for f in fichas.values()}


def test_morphling_ganha_o_porque_pesquisado_e_mantem_o_power_spike(fichas):
    guia = fichas["morphling"]["guia"]
    manta = next(i for i in guia["itens_core"] if i["item"] == "manta")
    assert manta["porque"]["texto"].startswith("Duas imagens limpam uma wave")
    assert "Silencer" in manta["porque"]["contra"]
    assert manta["spike"] is None or manta["spike"]["fonte"].startswith("Power spike:")
    sphere = next(i for i in guia["itens_situacionais"] if i["item"] == "sphere")
    assert sphere["porque"]["contra"].startswith("Lion, Shadow Shaman")


def test_quase_todo_item_dos_22_guias_tem_porque(fichas):
    itens = [i for f in fichas.values() for i in (*f["guia"]["itens_core"], *f["guia"]["itens_situacionais"])]
    assert sum(1 for i in itens if i["porque"]) >= 415
    sem_caminho_local = [fonte for i in itens if i["porque"] for fonte in i["porque"]["fontes"] if ":/" in fonte and "://" not in fonte]
    assert sem_caminho_local == []


def test_ficha_com_porque_continua_no_orcamento_de_tamanho(fichas):
    for ficha in fichas.values():
        validar.validar("heroi", ficha)
        assert len(gzip.compress(json.dumps(ficha, ensure_ascii=False, separators=(",", ":")).encode())) < 80_000, ficha["id"]
