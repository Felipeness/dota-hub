import pytest

from dota_export import amigos, validar


def _destaque(painel, rotulo):
    return next(d["valor"] for d in painel["destaques"] if d["rotulo"] == rotulo)


@pytest.fixture(scope="module")
def paineis():
    return {"leonardo": amigos.leonardo(), "hane": amigos.hane(), "yuma": amigos.yuma()}


def test_paineis_validam(paineis):
    for painel in paineis.values():
        validar.validar("painel", painel)


def test_leonardo_bate_com_o_resumo(paineis):
    leo = paineis["leonardo"]
    assert _destaque(leo, "Partidas") == 714
    assert _destaque(leo, "Vitórias") == 53.4
    assert _destaque(leo, "Invoker no mid · Partidas") == 232
    assert any("Invoker no mid ganha 66%" in a["texto"] for a in leo["achados"])


def test_hane_usa_o_filtro_de_certeza_do_relatorio(paineis):
    assert _destaque(paineis["hane"], "Pos 4 · Vitórias") == 57.7
    assert _destaque(paineis["hane"], "Pos 5 · Vitórias") == 51.9


def test_yuma_v2_traz_o_elo(paineis):
    assert _destaque(paineis["yuma"], "Jogos com Elo") == 315
    assert _destaque(paineis["yuma"], "Acima do esperado pelo Elo") == 4.5


def test_achados_pulam_titulo_em_negrito(tmp_path):
    arquivo = tmp_path / "r.md"
    arquivo.write_text("**Título**\n\n**Ponto.** Texto.\n- item um\n1. passo\nlinha solta\n", encoding="utf-8")
    textos = [a["texto"] for a in amigos.achados_do_resumo(arquivo, "r.md")]
    assert textos == ["Ponto. Texto.", "item um", "passo"]
