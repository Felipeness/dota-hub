"""Onde ficam os projetos de análise (só leitura) e como importar o motor do GPS deles."""
import importlib
import sys
from pathlib import Path
from types import ModuleType

DESKTOP = Path.home() / "Desktop"
IMORTAL = DESKTOP / "dota-imortal"
FEATURES = IMORTAL / "work" / "map_features_corrigido.json"
MAP_IMAGE = IMORTAL / "work" / "ref" / "mapa" / "game_map_7.41.jpg"
GPS_SPECS = IMORTAL / "work" / "gps" / "specs"
MINUTO_SPECS = IMORTAL / "work" / "minuto" / "specs"
ESTUDOS_SPECS = IMORTAL / "work" / "minuto" / "estudos" / "specs"
CADEIA = IMORTAL / "work" / "minuto" / "cadeia.json"


def gps() -> tuple[ModuleType, ModuleType]:
    src = str(IMORTAL / "src")
    if src not in sys.path:
        sys.path.insert(0, src)
    return importlib.import_module("gps.basemap"), importlib.import_module("gps.paths")


WORK = IMORTAL / "work"
POWER_SPIKES = WORK / "minuto" / "power_spikes.json"
COMPARE_PROS = WORK / "compare_pros.json"
REPLAYS = WORK / "minuto" / "replays"
PADROES_PRO = (WORK / "minuto" / "padroes_pro.json", WORK / "minuto" / "padroes_pro_extra.json")
ITENS = IMORTAL / "data" / "opendota" / "items.json"
LEONARDO = DESKTOP / "dota-leonardo"
HANE = DESKTOP / "dota-hane"
YUMA = DESKTOP / "dota-yuma"


def guias_de_heroi() -> list[Path]:
    return sorted(WORK.glob("hero_*_corrigido.json"))
