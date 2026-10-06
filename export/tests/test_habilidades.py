import pytest

from dota_export import habilidades

TEXTOS = habilidades.Textos(
    pt={"dota_tooltip_ability_x_slam": "Porrada",
        "dota_tooltip_ability_x_slam_description": "Em inglês: <b><font color='#F2A93E'>Slam</font></b>\\n \\nBate no chão num raio de %radius%. Causa %bonus%%% a mais.",
        "dota_tooltip_ability_x_slam_radius": "RAIO:",
        "dota_tooltip_ability_x_slam_slow": "%RETARDO:",
        "dota_tooltip_ability_x_slam_note0": "Não acerta construções."},
    en={"dota_tooltip_ability_x_bolt": "Bolt", "dota_tooltip_ability_x_bolt_description": "Hits one target."})
SLAM = {"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET", "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "SpellDispellableType": "SPELL_DISPELLABLE_YES", "AbilityManaCost": "0", "AbilityCooldown": "10.0",
        "AbilityCastPoint": "0.47 0.47 0.47 0.47",
        "AbilityValues": {"radius": {"value": "350"}, "slow": "50", "bonus": "100", "sem_rotulo": "7"}}


@pytest.mark.parametrize(("bruto", "esperado"), [
    ("10.0", "10"), ("0.47 0.47", "0,47"), ("8.0 9 10 12", "8 / 9 / 10 / 12"), ("-50", "-50"), ("abc", "abc"),
])
def test_por_nivel(bruto, esperado):
    assert habilidades.por_nivel(bruto) == esperado


def test_descricao_tira_o_nome_em_ingles_as_tags_e_troca_variaveis():
    bruta = TEXTOS.pt["dota_tooltip_ability_x_slam_description"]
    assert habilidades.descricao(bruta, {"radius": "350", "bonus": "100"}) == (
        "Bate no chão num raio de 350. Causa 100% a mais.", "Slam")


def test_condicoes_na_ordem_ativacao_numeros_e_categorias():
    assert habilidades.condicoes(SLAM) == [
        {"rotulo": "Ativação", "valor": "sem alvo"},
        {"rotulo": "Recarga", "valor": "10 s"},
        {"rotulo": "Tempo de conjuração", "valor": "0,47 s"},
        {"rotulo": "Dano", "valor": "mágico"},
        {"rotulo": "Dissipar", "valor": "sai com dissipação básica"},
    ]


def test_passiva_que_atravessa_imunidade_e_e_desligada_por_quebra():
    dados = {"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE", "SpellImmunityType": "SPELL_IMMUNITY_ENEMIES_YES",
             "SpellDispellableType": "SPELL_DISPELLABLE_YES_STRONG", "IsBreakable": "1"}
    assert habilidades.condicoes(dados) == [
        {"rotulo": "Ativação", "valor": "passiva"},
        {"rotulo": "Imunidade a magia", "valor": "atravessa imunidade a magia"},
        {"rotulo": "Dissipar", "valor": "só sai com dissipação forte"},
        {"rotulo": "Quebra", "valor": "desligada por quebra"},
    ]


def test_habilidade_completa_com_valores_rotulados_e_icone():
    h = habilidades.habilidade("x_slam", SLAM, TEXTOS, frozenset({"x_slam"}))
    assert h["nome"] == "Porrada" and h["nome_en"] == "Slam" and h["icone"] == "x_slam"
    assert h["valores"] == [{"rotulo": "Raio", "valor": "350"}, {"rotulo": "Retardo", "valor": "50%"}]
    assert h["notas"] == ["Não acerta construções."]
    assert h["texto_em_ingles"] is False and h["o_que_muda"] is None


def test_sem_texto_em_portugues_usa_o_ingles_e_marca():
    h = habilidades.habilidade("x_bolt", {}, TEXTOS, frozenset())
    assert (h["nome"], h["descricao"], h["texto_em_ingles"], h["icone"]) == ("Bolt", "Hits one target.", True, None)


def test_habilidade_sem_descricao_no_jogo_nao_aparece():
    assert habilidades.habilidade("neutral_upgrade", {}, TEXTOS, frozenset()) is None
