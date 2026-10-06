"""Mapa 7.41 para o app: textura em que UV = coordenada normalizada, e os objetos clicáveis."""
import importlib

import numpy as np
from PIL import Image

from . import fontes

TIPO_POR_GRUPO = {"roshan": "roshan", "tormentors": "tormentor", "towers": "torre", "barracks": "barracks",
                  "camps": "camp", "runes": "runa", "lotus_pools": "lotus", "watchers": "watcher",
                  "shops": "loja", "twin_gates": "twin_gate", "ancients": "ancient", "fountains": "fonte"}
CAMPOS_TOPO = ("id", "nome_pt", "x", "y", "side")
LADOS = {"radiant", "dire"}


def textura_alinhada(tamanho: int) -> Image.Image:
    basemap, _ = fontes.gps()
    fonte = Image.open(fontes.MAP_IMAGE).convert("RGB")
    u = (np.arange(tamanho) + 0.5) / tamanho
    xs, ys = np.meshgrid(u, 1 - u)
    px, py = basemap.norm_to_px(xs, ys)
    w, h = fonte.size
    px, py = np.clip(px, 0, w - 1).astype(int), np.clip(py, 0, h - 1).astype(int)
    return Image.fromarray(np.asarray(fonte)[py, px])


def _tipo(grupo: str, feicao: dict) -> str | None:
    if grupo == "other":
        return "outpost" if feicao.get("tipo") == "outpost" else None
    return TIPO_POR_GRUPO.get(grupo)


def objetos() -> list[dict]:
    basemap, _ = fontes.gps()
    camp_label = importlib.import_module("maplib").camp_label
    saida = []
    for grupo, itens in basemap.features().items():
        for f in itens:
            tipo = _tipo(grupo, f)
            if tipo is None or "x" not in f:
                continue
            detalhes = {k: v for k, v in f.items() if k not in CAMPOS_TOPO}
            if tipo == "camp":
                detalhes["codigo"] = camp_label(f["id"])
            lado = f.get("side") if f.get("side") in LADOS else "neutro"
            saida.append({"id": f["id"], "tipo": tipo, "nome": f.get("nome_pt", f["id"]),
                          "x": f["x"], "y": f["y"], "lado": lado, "detalhes": detalhes})
    return saida
