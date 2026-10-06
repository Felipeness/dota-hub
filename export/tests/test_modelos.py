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
    (["idle_sleeping", "sleeping_lying_to_idle", "idle", "victory_idle"], "idle"),
])
def test_escolhe_a_animacao_parada(nomes, esperado):
    assert modelos.escolher_parada(nomes) == esperado


CTRL_CREEP_BAD_MELEE = """
		{
			m_Name = "creep_bad_melee_model"
			m_nMeshIndex = 0
		},
		{
			m_Name = "creep_bad_melee_cavern"
			m_nMeshIndex = 1
		},
"""
DATA_CREEP_BAD_MELEE = """
	m_refMeshGroupMasks = [ 1, 8 ]
	m_refLODGroupMasks = [ 255, 255 ]
	m_nDefaultMeshGroupMask = 5
"""
DATA_TROLL_DARK_A = """
	m_refMeshGroupMasks = 
	[
		1, 1, 4, 4,
		16, 16,
	]
	m_refLODGroupMasks = 
	[
		1, 2, 1, 2,
		1, 2,
	]
	m_nDefaultMeshGroupMask = 21
"""
CTRL_TROLL_DARK_A = "".join(f'm_Name = "{n}"\n\t\t\tm_nMeshIndex = {i}\n' for i, n in enumerate(
    ["corpo", "corpo_lod1", "machado_d", "machado_d_lod1", "machado_e", "machado_e_lod1"]))


def test_esconde_a_malha_de_grupo_desligado_por_padrao():
    # O creep melee do Dire traz a variante "cavern" num grupo de corpo que o jogo deixa vazio.
    assert modelos.malhas_visiveis(CTRL_CREEP_BAD_MELEE, DATA_CREEP_BAD_MELEE) == ["creep_bad_melee_model"]


def test_sem_malha_escondida_nao_filtra_nada():
    # LOD 1 fica de fora sozinho no export; só um grupo desligado pede a lista de malhas.
    assert modelos.malhas_visiveis(CTRL_TROLL_DARK_A, DATA_TROLL_DARK_A) is None


def test_falha_quando_todas_as_malhas_estao_desligadas():
    data = DATA_CREEP_BAD_MELEE.replace("m_nDefaultMeshGroupMask = 5", "m_nDefaultMeshGroupMask = 2")
    with pytest.raises(ValueError, match="nenhuma malha de LOD 0"):
        modelos.malhas_visiveis(CTRL_CREEP_BAD_MELEE, data)


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


def test_exporta_o_porta_bandeira_do_dire_em_pe_e_sem_a_variante_cavern(tmp_path):
    modelos.exportar(jogo.vpk(), "models/creeps/lane_creeps/creep_bad_melee/creep_bad_flagbearer.vmdl", tmp_path)
    final = tmp_path / "creep_bad_flagbearer.glb"
    assert modelos.animacoes(final) == ["idle"]
    assert modelos.malhas(final) == ["creep_bad_melee_model"]
