from dota_export import fontes


def test_fontes_apontam_para_arquivos_que_existem():
    for caminho in (fontes.FEATURES, fontes.MAP_IMAGE, fontes.CADEIA, fontes.GPS_SPECS, fontes.MINUTO_SPECS):
        assert caminho.exists(), caminho


def test_gps_importa_basemap_e_paths():
    basemap, paths = fontes.gps()
    assert basemap.resolve("rad_safe_small_1") == (0.724, 0.221)
    assert paths.path_between((0.724, 0.221), (0.70, 0.25)).length > 0
