import json
import struct

import pytest

from dota_export import jogo, modelos


def _glb(gltf: dict) -> bytes:
    corpo = json.dumps(gltf).encode()
    corpo += b" " * (-len(corpo) % 4)
    return struct.pack("<III", 0x46546C67, 2, 20 + len(corpo)) + struct.pack("<II", len(corpo), 0x4E4F534A) + corpo


@pytest.mark.parametrize(("nomes", "esperado"), [
    (["roshan_run", "roshan_idle", "roshan_idle_spin"], "roshan_idle"),
    (["attack", "idle", "idle_longer"], "idle"),
    (["divine_sentinel_cube_spawn", "divine_sentinel_cube_idle_loop"], "divine_sentinel_cube_idle_loop"),
    (["tadpole_idle_CAPTURE", "tadpole_idle_var1", "tadpole_idle_long"], "tadpole_idle_var1"),
    (["witchdoctor_idle_portrait", "witchdoctor_idle_anim", "bonkers_witchdoctor_idle_anim"], "witchdoctor_idle_anim"),
    (["n_creep_vulture_a_idle_channel", "n_creep_vulture_a_idle_02", "n_creep_vulture_a_idle_01"], "n_creep_vulture_a_idle_02"),
    (["run", "attack"], None),
])
def test_escolhe_a_animacao_parada(nomes, esperado):
    assert modelos.escolher_parada(nomes) == esperado


def test_le_os_nomes_das_animacoes_do_glb(tmp_path):
    glb = tmp_path / "a.glb"
    glb.write_bytes(_glb({"asset": {"version": "2.0"}, "animations": [{"name": "idle"}, {"name": "run"}]}))
    assert modelos.animacoes(glb) == ["idle", "run"]


def test_arquivo_que_nao_e_glb_falha(tmp_path):
    falso = tmp_path / "a.glb"
    falso.write_bytes(b"nada disso")
    with pytest.raises(ValueError, match="não é glb"):
        modelos.animacoes(falso)


def test_tamanho_acima_do_limite_falha(tmp_path):
    (tmp_path / "grande.glb").write_bytes(b"0" * (modelos.LIMITE_BYTES + 1))
    with pytest.raises(ValueError, match="grande"):
        modelos.conferir_tamanhos(tmp_path, ["grande"])


def test_exporta_o_roshan_otimizado_com_a_animacao_parada(tmp_path):
    modelos.exportar(jogo.vpk(), "models/creeps/roshan/roshan.vmdl", tmp_path)
    final = tmp_path / "roshan.glb"
    assert final.stat().st_size <= modelos.LIMITE_BYTES
    assert modelos.animacoes(final) == ["roshan_idle"]
