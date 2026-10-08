from pathlib import Path

import pytest

from dota_export import conteudo, roshan, validar

SOLO = Path(__file__).resolve().parents[2] / "content" / "roshan_solo"


@pytest.mark.parametrize(("aliados", "esperado"), [
    ([], 0),
    ([(0.5, 0.5)], 1),
    ([(0.5, 0.5), (0.9, 0.9)], 1),
])
def test_conta_aliados_dentro_do_raio(aliados, esperado):
    assert roshan.aliados_perto((0.5, 0.55), aliados) == esperado


@pytest.fixture(scope="module")
def kills():
    return roshan.todas()


def test_mortes_de_roshan_dos_replays(kills):
    validar.validar("roshan_replays", kills)
    assert len(kills) >= 40
    assert all(k["solo"] == (k["aliados_perto"] == 0) for k in kills)


def test_solo_tem_fonte_legivel_do_741():
    solos = conteudo.carregar(SOLO)
    ids = {s["id"] for s in solos}
    assert {"roshan-solo-huskar", "roshan-solo-ursa", "roshan-solo-morphling"} <= ids
    for s in solos:
        assert s["patch"] == "7.41"
        # Além dos replays, os solos citam os dados da pesquisa e páginas da web; caminho da máquina não vai pro site.
        assert s["fontes"] and not [f for f in s["fontes"] if "C:/" in f], s["id"]
        assert s["secoes"]["basico"] and s["secoes"]["avancado"]


def test_solo_marca_cada_replay_da_lista():
    # O frontmatter traz "replay: id1, id2, ..." numa linha só; cada id vira uma marca.
    huskar = next(s for s in conteudo.carregar(SOLO) if s["id"] == "roshan-solo-huskar")
    assert huskar["origem"]["basico"]["replays"] == [f.removeprefix("replay ") for f in huskar["fontes"]]
    assert huskar["extras"]["heroi"] == "Huskar"
    assert huskar["extras"]["solos"] == "58"
