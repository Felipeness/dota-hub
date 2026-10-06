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

def test_rota_de_heroi_vem_do_pdf_05():
    # As specs H05_* moram na pasta do GPS, mas viram páginas do PDF 05 (guias de herói), não do 03.
    por_id = {r["id"]: r["pdf"] for r in rotas.carregar_rotas()}
    assert por_id["AM-D-05"] == "05"
    assert por_id["C-R-01"] == "03"
    assert por_id["MA-R-01"] == "06"


import json


def test_rota_do_pdf_05_sabe_de_qual_heroi_e():
    por_id = {r["id"]: r["heroi"] for r in rotas.carregar_rotas()}
    assert por_id["AM-R-11"] == "anti_mage"
    assert por_id["MA-R-01"] is None
    assert por_id["C-R-01"] is None


def test_resumo_tem_so_o_que_a_lista_usa_e_e_leve():
    leve = rotas.resumo(rotas.carregar_rotas())
    validar.validar("rotas_resumo", leve)
    assert set(leve[0]) == set(rotas.CAMPOS_RESUMO)
    assert len(json.dumps(leve, ensure_ascii=False).encode("utf-8")) < 400 * 1024
