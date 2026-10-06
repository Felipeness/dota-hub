import re
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


@pytest.mark.skip(reason="pendente: nenhuma fonte confirma solo de Roshan no 7.41 (ver task-5-report.md)")
def test_solo_tem_os_herois_da_spec_e_mais_tres():
    ids = {c["id"] for c in conteudo.carregar(SOLO)}
    assert {"ursa", "huskar", "morphling"} <= ids
    assert len(ids) >= 6


def test_cada_solo_tem_origem_nivel_minuto_itens_e_fonte(kills):
    solos_vistos = {k["match_id"] for k in kills if k["solo"]}
    for item in conteudo.carregar(SOLO):
        extras = item["extras"]
        assert extras["origem"] in {"recomendado", "replay"}, item["id"]
        assert extras["nivel"].isdigit(), item["id"]
        assert re.fullmatch(r"\d{1,2}:\d{2}", extras["minuto"]), item["id"]
        assert extras["itens"] and item["fontes"] and item["patch"] == "7.41", item["id"]
        if extras["origem"] == "replay":
            assert extras["replay"] in solos_vistos, item["id"]
