from pathlib import Path

import pytest

from dota_export import ferramentas, jogo


def test_bibliotecas_le_o_libraryfolders(tmp_path):
    (tmp_path / "steamapps").mkdir()
    (tmp_path / "steamapps" / "libraryfolders.vdf").write_text(
        '"libraryfolders" { "0" { "path" "C:\\\\Steam" } "1" { "path" "D:\\\\SteamLibrary" "apps" { "570" "1" } } }',
        encoding="utf-8")
    assert jogo.bibliotecas(tmp_path) == [Path("C:/Steam"), Path("D:/SteamLibrary")]


def test_sem_dota_diz_onde_procurou(tmp_path, monkeypatch):
    monkeypatch.delenv("DOTA_VPK", raising=False)
    with pytest.raises(jogo.DotaNaoEncontrado, match="Dota 2 não encontrado. Procurei em:"):
        jogo.vpk(tmp_path)


def test_listar_le_caminho_e_crc(monkeypatch):
    saida = 'Added folder "x"\nmodels/a.vmdl_c CRC:00aa size:10\nmodels/b.vmdl_c CRC:00bb size:2\n'
    monkeypatch.setattr(jogo, "vrf", lambda *argumentos: saida)
    assert jogo.listar(Path("pak01_dir.vpk"), "models/") == {"models/a.vmdl_c": "00aa", "models/b.vmdl_c": "00bb"}


def test_hash_errado_do_vrf_falha():
    with pytest.raises(ValueError, match="hash do VRF 20.0 não confere"):
        ferramentas.conferir(b"outro arquivo")


def test_le_os_textos_do_dota_instalado():
    textos = jogo.textos(jogo.vpk())
    assert textos["unidades"]["DOTAUnits"]["npc_dota_roshan"]["StatusHealth"] == "6000"
    assert "npc_dota_roshan" in textos["textos_pt"]["lang"]["Tokens"]
    assert "DOTAAbilities" in textos["habilidades"]
