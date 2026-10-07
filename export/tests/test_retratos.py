import pytest
from PIL import Image

from dota_export import jogo, retratos


def test_nome_no_jogo_vem_do_hero_id():
    assert retratos.nomes_no_jogo([{"id": "anti_mage", "hero_id": 1}]) == {"anti_mage": "npc_dota_hero_antimage"}


def test_hero_id_desconhecido_diz_qual():
    with pytest.raises(ValueError, match="herói sem nome no jogo: inventado"):
        retratos.nomes_no_jogo([{"id": "inventado", "hero_id": 99999}])


def test_grava_retrato_do_heroi_e_icone_do_item(tmp_path):
    arquivo = jogo.vpk()
    retratos.atualizar_herois(arquivo, {"anti_mage": "npc_dota_hero_antimage"}, tmp_path / "herois")
    retratos.atualizar_itens(arquivo, {"abyssal_blade"}, tmp_path / "itens")
    with Image.open(tmp_path / "herois" / "anti_mage.webp") as retrato:
        assert retrato.size == retratos.TAMANHO_RETRATO
    with Image.open(tmp_path / "itens" / "abyssal_blade.webp") as icone:
        assert icone.size == retratos.TAMANHO_ITEM


def test_imagem_que_falta_no_jogo_diz_qual(tmp_path):
    with pytest.raises(ValueError, match="sem imagem no jogo: item_que_nao_existe"):
        retratos.atualizar_itens(jogo.vpk(), {"item_que_nao_existe"}, tmp_path)


@pytest.mark.parametrize(("nome", "esperado"), [
    ("Anti-Mage", "anti_mage"), ("Nature's Prophet", "natures_prophet"), ("Queen of Pain", "queen_of_pain"), ("Kez", "kez"),
])
def test_id_no_app_segue_o_nome_localizado(nome, esperado):
    assert retratos.id_no_app(nome) == esperado


def test_todos_os_herois_cobre_a_lista_da_opendota():
    nomes = retratos.todos_os_herois()
    assert nomes["anti_mage"] == "npc_dota_hero_antimage"
    assert len(nomes) >= 127
