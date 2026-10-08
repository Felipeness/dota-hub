import json
from pathlib import Path

import pytest

from dota_export import fichas, validar

RAIZ = Path(__file__).resolve().parents[2]
CONTEUDO = RAIZ / "content" / "fichas"
INDICE_DOS_GUIAS = RAIZ / "app" / "public" / "data" / "herois.json"

TEXTO = """---
id: ficha-axe
titulo: "Axe"
heroi: Axe
patch: 7.41
posicoes: [3, 1]
fontes:
- dota-imortal/data/opendota/items.json
- https://dota2protracker.com/hero/legacy/Axe
---

## Resumo

Axe é um iniciador de Força.

## Pos 3 (offlane)

- quando pegar: contra lane de ataque automático.
- itens iniciais: tango, circlet, gauntlets (pra 2x Bracer)
- fonte: dota-imortal/data/opendota/items.json

### Build

#### Blade Mail (blade_mail)
- minuto: 12:12 (mediana)
- porque: devolve o dano do Call.
- detalhe: reflete 85%.
- nota: a passiva devolve 15%.
- contra: carries de ataque automático.
- combo: Call e Blade Mail.
- fonte: items.json (blade_mail); dota2protracker.com/builds/axe-pos3-1

#### Boots of Speed / Arcane Boots (`arcane_boots`)
- minute: 8
- porque: mana pro `Call`.

#### Blink Dagger
- porque: fecha o alcance curto.

#### Gravekeeper's Cloak (passiva, já no kit)
- porque: reduz dano em camadas.

Shard também aparece, sem bloco próprio.

### Situacionais

#### Orchid Malevolence / Bloodthorn (orchid / bloodthorn)
- contra: herói que foge com magia.

#### Solar Crest (solar_crest, via Pavise)
- quando: contra dano físico.

## Pos 1 (carry)

- build: a build da Pos 3 vale igual.

## Combos

- **Call** e Blade Mail.

## Roshan

Sem solo registrado.

Fonte: dota-roshan-solo/data/solos.json
"""


@pytest.fixture(scope="module")
def axe():
    return fichas.ficha("axe", TEXTO)


def test_ficha_usa_o_id_do_app_e_guarda_o_nome_interno(axe):
    assert (axe["id"], axe["nome"], axe["nome_interno"], axe["hero_id"]) == ("axe", "Axe", "axe", 2)


def test_posicoes_seguem_a_ordem_do_frontmatter_com_a_principal_primeiro(axe):
    assert [(p["posicao"], p["funcao"]) for p in axe["posicoes"]] == [(3, "offlane"), (1, "carry")]


def test_item_da_build_traz_todos_os_campos_com_fonte_legivel(axe):
    assert axe["posicoes"][0]["build"][0] == {
        "item": "blade_mail", "nome": "Blade Mail", "minuto": "12:12 (mediana)", "quando": None,
        "porque": "devolve o dano do Call.", "detalhe": "reflete 85%. a passiva devolve 15%.",
        "contra": "carries de ataque automático.", "combo": "Call e Blade Mail.",
        "fontes": ["items.json (blade_mail)", "https://dota2protracker.com/builds/axe-pos3-1"],
    }


@pytest.mark.parametrize(("indice", "item", "nome"), [
    (1, "arcane_boots", "Boots of Speed / Arcane Boots"),
    (2, "blink", "Blink Dagger"),
    (3, None, "Gravekeeper's Cloak (passiva, já no kit)"),
])
def test_titulo_do_bloco_aceita_crase_nome_sem_slug_e_passiva(axe, indice, item, nome):
    bloco = axe["posicoes"][0]["build"][indice]
    assert (bloco["item"], bloco["nome"]) == (item, nome)


def test_minute_vale_como_minuto_e_a_crase_some_do_texto(axe):
    boots = axe["posicoes"][0]["build"][1]
    assert (boots["minuto"], boots["porque"]) == ("8", "mana pro Call.")


def test_paragrafo_solto_vira_nota_da_subsecao(axe):
    assert axe["posicoes"][0]["nota_build"] == "Shard também aparece, sem bloco próprio."


def test_situacional_aceita_slug_duplo_e_nota_no_titulo(axe):
    orchid, solar = axe["posicoes"][0]["situacionais"]
    assert (orchid["item"], orchid["contra"]) == ("orchid", "herói que foge com magia.")
    assert (solar["item"], solar["nome"], solar["quando"]) == ("solar_crest", "Solar Crest (via Pavise)", "contra dano físico.")


def test_itens_iniciais_viram_icones_e_o_comentario_fica_na_nota(axe):
    pos3 = axe["posicoes"][0]
    assert pos3["itens_iniciais"] == {
        "itens": [{"item": "tango", "nome": "Tango"}, {"item": "circlet", "nome": "Circlet"}, {"item": "gauntlets", "nome": "Gauntlets of Strength"}],
        "nota": "Tango, Circlet, Gauntlets of Strength (pra 2x Bracer)"}
    assert pos3["fontes"] == ["items.json do OpenDota (patch 7.41)"]


@pytest.mark.parametrize(("linha", "itens", "tem_nota"), [
    ("tango, branches, faerie_fire", ["tango", "branches", "faerie_fire"], False),
    ("amostra mínima: tango e clarity se repetem", [], True),
    ("branches, tango (69), faerie_fire. Fonte: itemPopularity tango 96", ["branches", "tango", "faerie_fire"], True),
])
def test_so_a_lista_que_abre_a_linha_vira_icone(linha, itens, tem_nota):
    resultado = fichas.itens_iniciais(linha)
    assert [i["item"] for i in resultado["itens"]] == itens and (resultado["nota"] is not None) == tem_nota


def test_posicao_sem_build_usa_a_nota(axe):
    pos1 = axe["posicoes"][1]
    assert (pos1["build"], pos1["nota_build"]) == ([], "a build da Pos 3 vale igual.")


def test_resumo_roshan_e_extras_nao_mostram_caminho_local(axe):
    assert axe["resumo"] == "Axe é um iniciador de Força."
    assert axe["roshan"] == "Sem solo registrado.\n\nFonte: replays de Roshan solo (solos.json)"
    assert axe["extras"] == [{"titulo": "Combos", "texto": "- **Call** e Blade Mail."}]
    assert axe["fontes"] == ["items.json do OpenDota (patch 7.41)", "https://dota2protracker.com/hero/legacy/Axe"]


def test_ficha_passa_no_schema(axe):
    validar.validar("ficha", axe)


@pytest.mark.parametrize(("velho", "novo", "erro"), [
    ("posicoes: [3, 1]", "posicoes: [3]", "posicoes"),
    ("- porque: mana pro `Call`.", "porque: mana pro Call.", "fora do formato"),
    ("#### Blink Dagger\n", "#### Adaga Mágica\n", "sem slug"),
    ("(blade_mail)", "(blade_mal)", "fora do items.json"),
    ("- minute: 8", "- minute: 8\n- minuto: 9", "repetido"),
    ("## Pos 1 (carry)\n\n- build: a build da Pos 3 vale igual.", "## Pos 1 (carry)\n\n- quando pegar: sempre.", "sem build"),
])
def test_formato_quebrado_aponta_o_problema(velho, novo, erro):
    with pytest.raises(ValueError, match=erro):
        fichas.ficha("axe", TEXTO.replace(velho, novo))


def test_heroi_fora_do_heroes_json_falha():
    with pytest.raises(ValueError, match="heroes.json"):
        fichas.ficha("nao_existe", TEXTO)


@pytest.fixture(scope="module")
def todas():
    return fichas.carregar(CONTEUDO)


def test_conteudo_publicado_tem_105_fichas_validas_sem_caminho_local(todas):
    assert len(todas) == 105
    for f in todas:
        validar.validar("ficha", f)
    texto = json.dumps(todas, ensure_ascii=False)
    assert "C:/" not in texto and "Users/felip" not in texto


def test_cada_posicao_publicada_tem_build_ou_nota(todas):
    assert all(p["build"] or p["nota_build"] for f in todas for p in f["posicoes"])


@pytest.mark.skipif(not INDICE_DOS_GUIAS.exists(), reason="sem o export dos guias em app/public/data")
def test_catalogo_cobre_todos_os_herois_com_guia_ou_ficha(todas):
    guias = json.loads(INDICE_DOS_GUIAS.read_text(encoding="utf-8"))
    catalogo = fichas.catalogo(guias, todas)
    validar.validar("herois_catalogo", catalogo)
    assert {e["pagina"] for e in catalogo if e["id"] == "luna"} == {"guia"}
    zeus = next(e for e in catalogo if e["nome_interno"] == "zuus")
    assert (zeus["id"], zeus["pagina"], zeus["posicoes"]) == ("zeus", "ficha", [2])


def test_catalogo_sem_pagina_para_um_heroi_falha(todas):
    with pytest.raises(ValueError, match="sem guia nem ficha"):
        fichas.catalogo([], todas)
