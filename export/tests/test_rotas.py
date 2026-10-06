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


# O app desenha o que o PDF desenha (gps.layout): teleporte é salto, fuga segue o caminho real e passos no mesmo
# lugar dividem um selo. Cada teste abaixo trava um tipo de divergência achado na auditoria contra os PDFs.
@pytest.fixture(scope="module")
def por_id() -> dict[str, dict]:
    return {r["id"]: r for r in rotas.carregar_rotas()}


@pytest.mark.parametrize(("rota_id", "passo", "via"), [("AM-R-03", 3, "tp"), ("AM-R-10", 4, "portal")])
def test_trecho_de_teleporte_e_salto_reto_e_nao_caminho_andando(por_id, rota_id, passo, via):
    r = por_id[rota_id]
    assert r["passos"][passo - 1]["via"] == via
    assert len(r["caminhos"][passo - 2]) == 2


def test_nenhum_teleporte_vira_caminho_andando(por_id):
    saltos = [(r["id"], c) for r in por_id.values() for p, c in zip(r["passos"][1:], r["caminhos"]) if p["via"]]
    assert len(saltos) >= 40
    assert all(len(c) == 2 for _, c in saltos)


def test_fuga_a_pe_segue_o_caminho_real_da_origem_ao_alvo(por_id):
    fuga = por_id["G-R-02"]["fuga"]
    origem = por_id["G-R-02"]["passos"][fuga["de_passo"] - 1]
    assert fuga["via"] is None and len(fuga["caminho"]) > 2
    assert fuga["caminho"][0] == pytest.approx([origem["x"], origem["y"]], abs=0.01)
    assert fuga["caminho"][-1] == pytest.approx([fuga["x"], fuga["y"]], abs=0.01)


def test_fuga_por_tp_e_salto(por_id):
    fuga = por_id["M-R-01"]["fuga"]
    assert fuga["via"] == "tp" and len(fuga["caminho"]) == 2


def test_passos_no_mesmo_lugar_dividem_o_selo_e_nao_tem_seta(por_id):
    assert [p["lugar"] for p in por_id["ML-R-02"]["passos"]] == [0, 1, 2, 0]
    assert por_id["JG-R-02"]["caminhos"][2] == []
    for r in por_id.values():
        for a, b, c in zip(r["passos"], r["passos"][1:], r["caminhos"]):
            assert (a["lugar"] == b["lugar"]) == (c == []), r["id"]
