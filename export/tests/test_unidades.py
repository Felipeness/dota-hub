from collections import Counter

import pytest

from dota_export import fontes, icones, jogo, unidades, validar


@pytest.fixture(scope="module")
def base():
    arquivo = jogo.vpk()
    return unidades.Jogo.dos_arquivos(jogo.textos(arquivo), icones.disponiveis(arquivo))


@pytest.fixture(scope="module")
def fichas(base):
    return unidades.todas(base, fontes.farm(), [])


def _por_id(fichas, id_):
    return next(f for f in fichas if f["id"] == id_)


def test_roshan_tem_os_numeros_do_glossario_do_jogo(fichas):
    n = _por_id(fichas, "roshan")["numeros"]
    assert (n["vida"], n["regeneracao"], n["ouro_min"], n["ouro_max"], n["xp"], n["intervalo_ataque"], n["dano_min"],
            n["alcance_ataque"], n["velocidade"], n["armadura"], n["resistencia_magica"]) == (
        6000, 20, 200, 290, 400, 2, 75, 150, 270, 30, 55)


def test_habilidades_do_roshan_em_portugues_na_ordem_do_jogo(fichas):
    nomes = [h["nome"] for h in _por_id(fichas, "roshan")["habilidades"]]
    assert nomes == ["Rugido Vingativo", "Porrada", "Força do Imortal", "Pancada", "Bloqueio de Magias", "Arremessar"]


def test_porrada_do_roshan(fichas):
    slam = next(h for h in _por_id(fichas, "roshan")["habilidades"] if h["id"] == "roshan_slam")
    assert slam["nome_en"] == "Slam" and slam["icone"] == "roshan_slam"
    assert slam["descricao"].endswith("A Porrada causa 100% de dano a mais contra criaturas.")
    assert {"rotulo": "Recarga", "valor": "10 s"} in slam["condicoes"]
    assert {"rotulo": "Retardo", "valor": "50%"} in slam["valores"]


def test_cobertura_do_741(fichas):
    assert Counter(f["grupo"] for f in fichas) == {"chefe": 2, "lane": 24, "selva": 45}
    assert all(f["modelo"] for f in fichas)
    assert len({f["modelo"] for f in fichas}) == 59
    tipos = unidades.tipos_de_camp(fontes.farm())
    assert len(tipos) == 26
    ids = {f["id"] for f in fichas}
    assert all(u["id"] in ids for t in tipos for u in t["unidades"])


def test_tormentor_sem_vida_fixa_e_com_tabela_do_escudo(fichas):
    t = _por_id(fichas, "tormentor")
    assert t["nome"] == "Tormenta"
    assert t["numeros"]["vida"] is None and t["numeros"]["ataque"] == "sem ataque" and t["numeros"]["dano_min"] is None
    assert t["crescimento"]["tipo"] == "tabela" and t["crescimento"]["linhas"][0][:2] == [20, 4000]


def test_selva_cresce_a_cada_7_30_e_o_crescimento_nao_vira_habilidade(fichas):
    c = _por_id(fichas, "kobold")["crescimento"]
    assert (c["tipo"], c["a_cada_s"], c["vida"], c["armadura"], c["nivel_max"]) == ("por_nivel", 450, 30, 0.5, 30)
    internas = {"neutral_upgrade", "roshan_inherent_buffs", "miniboss_inherent_buffs"}
    assert not any(h["id"] in internas for f in fichas for h in f["habilidades"])


def test_creep_de_lane_super_e_mega(fichas):
    mega = _por_id(fichas, "creep_badguys_melee_upgraded_mega")
    assert mega["lado"] == "dire" and mega["papel"] == "creep corpo a corpo, mega, Dire"
    assert _por_id(fichas, "goodguys_siege")["papel"] == "creep de cerco, normal, Radiant"


def test_fichas_indice_e_camps_validos(fichas):
    tipos = unidades.tipos_de_camp(fontes.farm())
    for f in fichas:
        validar.validar("unidade", f)
    indice = unidades.indice(fichas, tipos)
    validar.validar("unidades", indice)
    validar.validar("camps", tipos)
    kobold = next(u for u in indice if u["id"] == "kobold")
    assert kobold["camps"] == ["kobold"] and kobold["habilidades"][0]["nome"]


def test_conteudo_de_habilidade_inexistente_falha(base):
    texto = {"id": "nao_existe", "secoes": {"basico": "x", "avancado": None}, "fontes": ["f"], "origem": {"basico": None, "avancado": None}}
    with pytest.raises(ValueError, match="nao_existe"):
        unidades.todas(base, fontes.farm(), [texto])
