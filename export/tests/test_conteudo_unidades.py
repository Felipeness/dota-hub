from pathlib import Path

from dota_export import conteudo, fontes, icones, jogo, unidades

PASTA = Path(__file__).resolve().parents[2] / "content" / "unidades"
OBRIGATORIAS = {"roshan_spell_block", "roshan_bash", "roshan_slam", "roshan_revengeroar", "roshan_grab_and_throw",
                "roshan_devotion", "miniboss_reflect", "miniboss_unyielding_shield", "miniboss_radiance",
                "satyr_trickster_purge", "black_dragon_fireball", "centaur_khan_war_stomp"}


def test_textos_com_fonte_origem_e_patch():
    itens = conteudo.carregar(PASTA)
    assert OBRIGATORIAS <= {i["id"] for i in itens}
    for i in itens:
        assert i["fontes"], i["id"]
        assert i["origem"]["basico"] is not None, i["id"]
        assert i["patch"] == "7.41", i["id"]


def test_cada_texto_aponta_para_uma_habilidade_visivel():
    arquivo = jogo.vpk()
    base = unidades.Jogo.dos_arquivos(jogo.textos(arquivo), icones.disponiveis(arquivo))
    fichas = unidades.todas(base, fontes.farm(), conteudo.carregar(PASTA))
    com_texto = {h["id"] for f in fichas for h in f["habilidades"] if h["o_que_muda"]}
    assert OBRIGATORIAS <= com_texto
