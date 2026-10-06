import json

import pytest

from dota_export import fontes, trajetorias, validar


def test_reduzir_amostra_a_cada_passo_e_marca_morto():
    linhas = [{"t": "0", "slot": "0", "gx": "57", "gy": "57", "vivo": "1"},
              {"t": "3", "slot": "0", "gx": "100", "gy": "100", "vivo": "1"},
              {"t": "5", "slot": "0", "gx": "199", "gy": "199", "vivo": "0"}]
    assert trajetorias.reduzir(linhas, passo_s=5, ate_s=10) == ({0: [0, 0, -1, -1]}, 5)


def test_antes_da_buzina_fica_de_fora():
    linhas = [{"t": "-5", "slot": "0", "gx": "57", "gy": "57", "vivo": "1"},
              {"t": "0", "slot": "0", "gx": "128", "gy": "128", "vivo": "1"}]
    assert trajetorias.reduzir(linhas, passo_s=5, ate_s=10) == ({0: [500, 500]}, 0)


@pytest.fixture(scope="module")
def exportados():
    return [trajetorias.replay(p) for p in sorted(fontes.REPLAYS.iterdir()) if p.is_dir()]


def test_todos_os_replays_validam_e_ficam_leves(exportados):
    assert len(exportados) == 28
    for r in exportados:
        validar.validar("trajetoria", r)
        assert len(r["herois"]) == 10, r["match_id"]
        assert len(json.dumps(r, separators=(",", ":")).encode()) < 60_000, r["match_id"]
    validar.validar("replays", trajetorias.indice(exportados))


def test_foco_vem_da_rota_real_e_dos_padroes(exportados):
    por_id = {r["match_id"]: r for r in exportados}
    assert 0 in por_id["9027486175"]["focos"]
    assert set(por_id["9022767300"]["focos"]) == {4, 128}


def test_ward_some_quando_acaba(exportados):
    for r in exportados:
        assert all(w["t"] <= w["ate"] <= r["fim_s"] for w in r["wards"]), r["match_id"]
