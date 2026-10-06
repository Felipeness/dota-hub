import pytest

from dota_export import jogadores, validar


def _destaque(painel: dict, rotulo: str) -> float:
    return next(d["valor"] for d in painel["destaques"] if d["rotulo"] == rotulo)


@pytest.fixture(scope="module")
def paineis():
    return [jogadores.felipe(), *(jogadores.pro_compare(c) for c in ("satanic", "yatoro", "watson")),
            *jogadores.pros_de_replay()]


def test_slug_tira_acento_e_simbolo():
    assert jogadores.slug("医者watson`") == "watson"
    assert jogadores.slug("Team Spirit") == "team-spirit"
    assert jogadores.slug("PARAGUAY ") == "paraguay"


def test_todos_os_paineis_validam_e_series_batem_com_o_eixo(paineis):
    for painel in paineis:
        validar.validar("painel", painel)
        for g in painel["graficos"]:
            assert all(len(s["valores"]) == len(g["x"]["valores"]) for s in g["series"]), (painel["id"], g["id"])
    validar.validar("jogadores", jogadores.indice(paineis))


def test_felipe_traz_os_numeros_do_compare_pros(paineis):
    felipe = paineis[0]
    assert _destaque(felipe, "Felipe solo · Partidas") == 41
    assert _destaque(felipe, "Felipe solo · Last hits aos 10 min") == 52.8
    assert _destaque(felipe, "Felipe party · Last hits aos 10 min") == 54.6


def test_satanic_tem_time_replays_e_estilo(paineis):
    satanic = next(p for p in paineis if p["id"] == "satanic")
    assert satanic["time"] == "PARIVISION"
    assert _destaque(satanic, "Satanic · Partidas") == 94
    assert {"9021397264", "8944612322"} <= set(satanic["replays"])
    assert satanic["achados"]


def test_pros_de_replay_incluem_skiter_e_nao_repetem_os_tres(paineis):
    ids = {p["id"] for p in jogadores.pros_de_replay()}
    assert "skiter" in ids
    assert not ids & {"satanic", "yatoro", "watson"}
    skiter = next(p for p in paineis if p["id"] == "skiter")
    assert skiter["replays"] == ["9015977795"]


def test_times_juntam_quem_jogou_junto(paineis):
    times = {t["id"]: t for t in jogadores.times(paineis)}
    validar.validar("times", list(times.values()))
    assert "yatoro" in times["team-spirit"]["jogadores"]
    assert "satanic" in times["parivision"]["jogadores"]
