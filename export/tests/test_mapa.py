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
