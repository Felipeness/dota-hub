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


COMPONENTES = {"manta": frozenset({"yasha", "ultimate_orb"}), "disperser": frozenset({"diffusal_blade", "eagle"})}


def test_build_da_partida_tira_componente_que_virou_item_e_receita():
    compras = {"yasha": 10.0, "power_treads": 6.0, "manta": 14.0, "recipe_travel_boots": 30.0, "diffusal_blade": 20.0}
    assert pro_contra.build_da_partida(compras, COMPONENTES) == ["power_treads", "manta", "diffusal_blade"]


def _jogada(win: bool, *itens: tuple[str, float]) -> tuple[dict[str, float], list[str], bool]:
    compras = dict(itens)
    return compras, [slug for slug, _ in sorted(itens, key=lambda par: par[1])], win


def test_builds_agrupam_pelos_tres_primeiros_itens_e_separam_sequencia_de_opcao():
    principal = [_jogada(True, ("treads", 6), ("manta", 15), ("butterfly", 22), ("skadi", 28), ("daedalus", 35))] * 6
    variante = [_jogada(False, ("treads", 6), ("butterfly", 14), ("manta", 18), ("skadi", 30), ("disperser", 34))] * 2
    outra = [_jogada(False, ("treads", 7), ("manta", 16), ("mjollnir", 21))] * 5
    curta = [_jogada(False, ("treads", 7))]
    builds = pro_contra.builds_comuns(principal + variante + outra + curta)
    assert [(b["jogos"], b["vitorias"]) for b in builds] == [(8, 6), (5, 0)]
    assert [i["chave"] for i in builds[0]["sequencia"]] == ["treads", "manta", "butterfly", "skadi", "daedalus"]
    assert [i["chave"] for i in builds[0]["opcoes"]] == ["disperser"]
    assert builds[0]["sequencia"][1] == {"chave": "manta", "n": 8, "mediana": 15.0}


def test_builds_ignoram_grupo_pequeno():
    jogadas = [_jogada(True, ("a", 1), ("b", 2), ("c", 3))] * 20 + [_jogada(True, ("a", 1), ("b", 2), ("d", 3))] * 4
    assert len(pro_contra.builds_comuns(jogadas)) == 1


def test_ordem_compara_pares_de_itens_comuns_pela_maioria():
    builds = [["manta", "butterfly", "skadi"]] * 3 + [["manta", "skadi", "butterfly"]] + [["manta"]] * 4 + [["manta", "raro"]] * 2
    assert pro_contra.ordem_dos_itens(builds, 10) == [
        {"a": "manta", "b": "butterfly", "a_antes": 4, "ambos": 4},
        {"a": "butterfly", "b": "skadi", "a_antes": 3, "ambos": 4},
        {"a": "manta", "b": "skadi", "a_antes": 4, "ambos": 4},
    ]
