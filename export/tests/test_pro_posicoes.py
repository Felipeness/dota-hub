from pathlib import Path

from dota_export import pro_posicoes, validar

RAIZ = Path(__file__).resolve().parents[2]


def _carregar():
    return pro_posicoes.carregar(RAIZ / "content")


def test_valida_o_schema():
    validar.validar("pro_posicoes", _carregar())


def test_cobre_os_127_herois():
    dados = _carregar()
    assert len(dados["herois"]) == 127
    assert len({h["hero_id"] for h in dados["herois"]}) == 127


def test_slug_sem_prefixo_e_sem_maiuscula():
    for heroi in _carregar()["herois"]:
        assert not heroi["slug"].startswith("npc_dota_hero_")
        assert heroi["slug"] == heroi["slug"].lower()


def test_distribuicao_de_posicao_nao_passa_de_100_por_cento():
    # fracao = n da posicao / n_total; pode somar menos de 1 (laning atipico tira jogador do meio do ranking),
    # nunca mais.
    for heroi in _carregar()["herois"]:
        soma = sum(p["fracao"] for p in heroi["posicoes"]["distribuicao"].values())
        assert soma <= 1.0001


def test_vitoria_por_duracao_tem_as_tres_faixas():
    for heroi in _carregar()["herois"][:5]:
        faixas = heroi["forca"]["vitoria_por_duracao"]
        assert set(faixas) == {"menos_30min", "entre_30_40min", "mais_40min"}
