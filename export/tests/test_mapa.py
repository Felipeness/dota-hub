import io

import numpy as np

from dota_export import mapa, validar

def test_objetos_cobrem_os_tipos_do_mapa():
    tipos = {o["tipo"] for o in mapa.objetos()}
    assert {"roshan", "tormentor", "torre", "camp", "runa", "lotus", "watcher", "outpost", "loja", "twin_gate", "barracks"} <= tipos

def test_objetos_validam_no_schema():
    validar.validar("objetivos", mapa.objetos())

def test_camp_tem_codigo_curto():
    camp = next(o for o in mapa.objetos() if o["id"] == "rad_safe_small_1")
    assert camp["detalhes"]["codigo"] == "R1"

def test_textura_alinha_coordenada_normalizada():
    img = mapa.textura_alinhada(256)
    assert img.size == (256, 256)
    # a fonte Radiant (0,09; 0,124) fica no canto de baixo à esquerda da textura
    x, y = 0.09, 0.124
    assert img.getpixel((int(x * 256), int((1 - y) * 256))) != (0, 0, 0)

def test_textura_de_celular_cabe_na_meta_do_4g():
    arquivo = io.BytesIO()
    mapa.textura_alinhada(2048).save(arquivo, "JPEG", **mapa.JPEG)
    assert len(arquivo.getvalue()) < 900 * 1024

def test_borda_fora_da_imagem_vira_fundo_e_nao_repete_a_ultima_linha():
    img = np.asarray(mapa.textura_alinhada(512)).astype(int)
    for nome, grade in (("linha", img), ("coluna", img.transpose(1, 0, 2))):
        for i in range(1, grade.shape[0]):
            repete = np.abs(grade[i] - grade[i - 1]).mean() < 1
            fundo = (grade[i] == mapa.FORA_DO_MAPA).all()
            assert not repete or fundo, f"{nome} {i} repete a anterior: textura esticada"
