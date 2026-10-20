import pytest

from dota_export import confrontos, pro_contra
from test_confrontos import PRO, TEXTO

RELEVANTES = frozenset({"manta", "butterfly", "sphere"})
NOMES = {69: "doom_bringer", 36: "necrolyte", 1: "antimage"}


def _partida(win: bool, inimigos: list[int], compras: list[tuple[str, int]] | None) -> dict:
    log = None if compras is None else [{"key": k, "time": t} for k, t in compras]
    return {"match_id": 1, "win": win, "inimigos": inimigos, "purchase_log": log}


PARTIDAS = [
    _partida(True, [69, 36], [("branches", -90), ("manta", 900), ("manta", 1500), ("butterfly", 1320)]),
    _partida(False, [69], [("manta", 960), ("sphere", 1800)]),
    _partida(True, [69, 1], [("manta", 1020)]),
    _partida(True, [69, 36], None),
] + [_partida(False, [69], [("manta", 840)])] * 2


@pytest.mark.parametrize("item, relevante", [
    ({"cost": 4650, "components": ["yasha", "ultimate_orb"], "qual": "rare"}, True),
    ({"cost": 1000, "components": None, "qual": "consumable"}, False),
    ({"cost": 2050, "components": None, "qual": "secret_shop"}, False),
    ({"cost": 500, "components": ["x"], "qual": "common"}, False),
    ({"cost": None, "components": None, "qual": None}, False),
])
def test_item_relevante(item, relevante):
    assert pro_contra.item_relevante("x", item) is relevante


def test_primeira_compra_de_cada_item_relevante_em_minutos():
    log = [{"key": "manta", "time": 900}, {"key": "manta", "time": 1500}, {"key": "branches", "time": -90}]
    assert pro_contra.primeiras_compras(log, RELEVANTES) == {"manta": 15.0}


def test_agrega_por_inimigo_ignorando_partida_sem_log_e_inimigo_com_poucos_jogos():
    contra = pro_contra.agregar(PARTIDAS, RELEVANTES, NOMES)
    assert list(contra) == ["doom_bringer"]
    doom = contra["doom_bringer"]
    assert (doom["jogos"], doom["vitorias"]) == (5, 2)
    assert doom["itens"] == [{"chave": "manta", "n": 5, "mediana": 15.0},
                             {"chave": "butterfly", "n": 1, "mediana": 22.0},
                             {"chave": "sphere", "n": 1, "mediana": 30.0}]


def test_recorte_por_inimigo_entra_no_confronto_com_nome_dos_itens():
    contra = {"doom_bringer": {"jogos": 5, "vitorias": 2, "itens": [{"chave": "manta", "n": 5, "mediana": 15.0}]}}
    analise = confrontos.confronto("morphling", TEXTO, PRO, frozenset(), contra)
    assert analise["contra_inimigo"] == contra
    assert analise["nomes_dos_itens"] == {"manta": "Manta Style"}
