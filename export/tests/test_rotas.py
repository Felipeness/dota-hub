import pytest
from dota_export import rotas, validar

def test_resolve_as_tres_formas_de_alvo():
    assert rotas.resolver_alvo("rad_safe_small_1") == (0.724, 0.221)
    assert rotas.resolver_alvo({"x": 0.5, "y": 0.4}) == (0.5, 0.4)
    x, y = rotas.resolver_alvo("lane_top:0.55")
    assert 0 <= x <= 1 and 0 <= y <= 1

def test_alvo_desconhecido_diz_qual():
    with pytest.raises(ValueError, match="alvo desconhecido: xyz"):
        rotas.resolver_alvo("xyz")

def test_carrega_todas_as_rotas_do_03_e_do_06():
    todas = rotas.carregar_rotas()
    ids = {r["id"] for r in todas}
    assert {"G-R-02", "MA-R-01", "MT-D-51", "RR-D-02"} <= ids
    assert len(todas) >= 500
    validar.validar("rotas", todas)

def test_passos_tem_caminho_entre_eles():
    r = next(r for r in rotas.carregar_rotas() if r["id"] == "MA-R-01")
    assert len(r["caminhos"]) == len(r["passos"]) - 1
    assert all(len(c) >= 2 for c in r["caminhos"])

def test_indice_tem_minutos_4_a_30_e_11_colunas():
    ind = rotas.indice()
    validar.validar("indice", ind)
    assert [l["minuto"] for l in ind["radiant"]] == list(range(4, 31))
    assert len(ind["colunas"]) == 11
