from PIL import Image

from dota_export import icones, jogo


def test_icones_disponiveis_e_gravados_em_64px(tmp_path):
    arquivo = jogo.vpk()
    disponiveis = icones.disponiveis(arquivo)
    assert {"roshan_slam", "black_dragon_fireball"} <= disponiveis
    assert "neutral_upgrade" not in disponiveis
    icones.atualizar(arquivo, {"roshan_slam", "black_dragon_fireball"}, tmp_path)
    with Image.open(tmp_path / "roshan_slam.webp") as imagem:
        assert imagem.size == (64, 64)
