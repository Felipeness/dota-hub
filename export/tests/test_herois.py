import gzip
import json

import pytest

from dota_export import herois, validar


@pytest.fixture(scope="module")
def fichas():
    return herois.todos()


def test_exporta_os_22_herois_validos_e_leves(fichas):
    assert len(fichas) == 22
    for ficha in fichas:
        validar.validar("heroi", ficha)
        # Orçamento no tamanho que trafega (gzip): o texto do guia sozinho já passa de 80 KB cru em alguns heróis.
        assert len(gzip.compress(json.dumps(ficha, ensure_ascii=False, separators=(",", ":")).encode())) < 80_000, ficha["id"]
    validar.validar("herois", herois.indice(fichas))


def test_medusa_traz_os_numeros_do_guia(fichas):
    medusa = next(f for f in fichas if f["id"] == "medusa")
    assert medusa["hero_id"] == 94
    assert medusa["guia"]["condicao_para_farmar"]["minuto_tipico"] == 7.9
    assert medusa["power_spikes"][0]["marco"] == "Null Talisman (505) e Magic Wand"
    linhas = {l["jogador"]: l for l in medusa["pros"]["linhas"]}
    assert linhas["Felipe"]["lh10"] == 57.0
    assert linhas["Satanic"]["lh10"] == 62
    assert linhas["Yatoro"]["lh10"] == 71


def test_cada_fase_tem_um_caminho_entre_passos(fichas):
    for ficha in fichas:
        for fases in ficha["rotas"].values():
            for fase in fases:
                assert len(fase["caminhos"]) == len(fase["passos"]) - 1, (ficha["id"], fase["janela"])


def test_por_minuto_so_existe_nos_herois_do_pool(fichas):
    por_id = {f["id"]: f for f in fichas}
    assert [m["minuto"] for m in por_id["sven"]["por_minuto"]] == list(range(4, 31))
    assert por_id["medusa"]["por_minuto"] is None


def test_power_spike_com_minuto_em_texto_vira_faixa():
    spike = herois.spike({"minuto": "20-25", "marco": "BKB", "o_que_fazer": "Lute."})
    assert spike == {"minuto": None, "faixa": "20-25", "marco": "BKB", "o_que_fazer": "Lute."}


def test_alvo_desconhecido_diz_heroi_lado_e_janela():
    fase = {"de": 0, "ate": 7.5, "objetivo": "x", "passos": [{"alvo": "nao_existe", "minuto": "0:00"}]}
    with pytest.raises(ValueError, match="medusa radiant 0:00-7:30"):
        herois.fase("medusa", "radiant", fase)


def test_janela_em_texto_vira_minutos_e_fim_vira_nulo():
    bruta = {"de": "30:00", "ate": "fim", "objetivo": "x", "passos": [{"alvo": "lane_bot", "x": 0.8, "y": 0.2}]}
    fase = herois.fase("phantom_lancer", "dire", bruta)
    assert (fase["de"], fase["ate"], fase["janela"]) == (30, None, "30:00-fim")
