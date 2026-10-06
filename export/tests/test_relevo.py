import pytest

from dota_export import relevo, validar


def _altura(img, x, y):
    return img.getpixel((min(img.width - 1, int(x * img.width)), min(img.height - 1, int((1 - y) * img.height)))) / 255


@pytest.fixture(scope="module")
def img():
    return relevo.relevo(256)


def test_poligono_da_base_radiant_vai_do_canto_ate_as_rampas():
    pontos = relevo.poligono_da_base("radiant")
    assert pontos[0] == (0.0, 0.0)
    assert (0.268, 0.303) in pontos


def test_base_alta_rio_baixo_selva_no_meio(img):
    assert _altura(img, 0.09, 0.124) > 0.9
    assert _altura(img, 0.92, 0.90) > 0.9
    assert _altura(img, 0.476, 0.505) < 0.3
    assert 0.4 < _altura(img, 0.40, 0.30) < 0.6


def test_rampa_fica_entre_o_chao_e_a_base(img):
    assert 0.55 < _altura(img, 0.268, 0.303) < 0.95


def test_grade_tem_n_ao_quadrado_alturas():
    g = relevo.grade(relevo.relevo(128), 16)
    validar.validar("relevo", g)
    assert len(g["alturas"]) == 256
