# export/tests/test_conferencia.py
"""Critério 6 da spec: os números dos painéis batem com os relatórios de origem (23 números)."""
import pytest

from dota_export import amigos, herois, jogadores


@pytest.fixture(scope="module")
def paineis():
    return {"leonardo": amigos.leonardo(), "hane": amigos.hane(), "yuma": amigos.yuma(),
            "felipe": jogadores.felipe(), "satanic": jogadores.pro_compare("satanic")}


def _destaque(painel, rotulo):
    return next(d["valor"] for d in painel["destaques"] if d["rotulo"] == rotulo)


def _barra(painel, grafico_id, rotulo_x):
    g = next(g for g in painel["graficos"] if g["id"] == grafico_id)
    i = next(i for i, x in enumerate(g["x"]["valores"]) if str(x).startswith(rotulo_x))
    return g["series"][0]["valores"][i]


CASOS = [
    # (painel, rótulo do destaque, valor do relatório, casas para comparar, onde está no relatório)
    ("leonardo", "Partidas", 714, 0, "resumo-para-o-leonardo.md: 714 partidas"),
    ("leonardo", "Vitórias", 53.4, 1, "resumo-para-o-leonardo.md: 53,4%"),
    ("leonardo", "Invoker no mid · Partidas", 232, 0, "resumo: Invoker no mid (232 jogos)"),
    ("leonardo", "Invoker no mid · Vitórias", 66, 0, "resumo: Invoker no mid ganha 66%"),
    ("leonardo", "Snapfire no mid · Partidas", 74, 0, "resumo: Snapfire (74 jogos)"),
    ("leonardo", "Snapfire no mid · Vitórias", 68, 0, "resumo: Snapfire 68%"),
    ("leonardo", "Vitórias nas últimas 20", 5, 0, "resumo: últimas 20 foram 5 vitórias"),
    ("hane", "Pos 4 · Vitórias", 57.7, 1, "estatistica.md linha 39: Pos 4 57,7%"),
    ("hane", "Pos 5 · Vitórias", 51.9, 1, "estatistica.md linha 285: Pos 5 51,9%"),
    ("hane", "Pos 4 · Vitórias com 0 ou 1 morte até os 10", 66, 0, "resumo-para-o-hane.md: 66% de Pos 4"),
    ("hane", "Pos 5 · Vitórias com 0 ou 1 morte até os 10", 61, 0, "resumo: 61% de Pos 5"),
    ("hane", "Pos 4 · Vitórias com 3 ou mais mortes até os 10", 44, 0, "resumo: cai pra 44%"),
    ("hane", "Pos 5 · Vitórias com 3 ou mais mortes até os 10", 42, 0, "resumo: e 42%"),
    ("yuma", "Jogos com Elo", 315, 0, "resumo-yuma-v2.md: n=315"),
    ("yuma", "Acima do esperado pelo Elo", 4.5, 1, "resumo-yuma-v2.md: +4,5 pp"),
    ("felipe", "Felipe solo · Last hits aos 10 min", 52.8, 1, "compare_pros listas: Felipe 52,8 (solo)"),
    ("felipe", "Felipe party · Last hits aos 10 min", 54.6, 1, "compare_pros listas: 54,6 (party)"),
    ("felipe", "Felipe solo · Partidas", 41, 0, "compare_pros amostras.felipe_solo.n"),
    ("satanic", "Satanic · Last hits aos 10 min", 72.6, 1, "compare_pros listas: Satanic 72,6"),
    ("satanic", "Satanic · Partidas", 94, 0, "compare_pros estilos.satanic.amostra: 94 jogos"),
]


@pytest.mark.parametrize(("painel", "rotulo", "esperado", "casas", "onde"), CASOS)
def test_destaque_bate_com_o_relatorio(paineis, painel, rotulo, esperado, casas, onde):
    assert round(_destaque(paineis[painel], rotulo), casas) == esperado, onde


def test_melhor_horario_do_leonardo(paineis):
    assert round(_barra(paineis["leonardo"], "vitoria_por_horario", "16-18")) == 62  # resumo: 16 a 18 h (62%)


def test_yatoro_e_watson_lh10():
    assert _destaque(jogadores.pro_compare("yatoro"), "Yatoro · Last hits aos 10 min") == 70.6
    assert _destaque(jogadores.pro_compare("watson"), "Watson · Last hits aos 10 min") == 69.8


def test_medusa_do_felipe_no_guia():
    medusa = next(h for h in herois.todos() if h["id"] == "medusa")
    assert next(l for l in medusa["pros"]["linhas"] if l["jogador"] == "Felipe")["lh10"] == 57.0
