import pytest

from dota_export import kv


def test_le_blocos_aninhados_e_ignora_comentarios():
    texto = '''
    "DOTAUnits"
    {
        // comentário
        "npc_dota_roshan"
        {
            "StatusHealth"  "6000"   // vida
            "AbilityValues" { "radius" { "value" "350" } }
        }
        "default_attack"  ""
    }'''
    assert kv.ler(texto) == {"DOTAUnits": {
        "npc_dota_roshan": {"StatusHealth": "6000", "AbilityValues": {"radius": {"value": "350"}}},
        "default_attack": ""}}


def test_chave_repetida_fica_com_o_ultimo_valor():
    assert kv.ler('"a" "1" "a" "2"') == {"a": "2"}


def test_chave_entre_aspas_nao_abre_bloco():
    assert kv.ler('"a" "{x}"') == {"a": "{x}"}


@pytest.mark.parametrize("texto", ['"a" { "b" "1"', "}", '{ "a" "1" }'])
def test_texto_mal_formado_falha(texto):
    with pytest.raises(ValueError):
        kv.ler(texto)
