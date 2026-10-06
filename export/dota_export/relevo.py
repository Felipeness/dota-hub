"""Relevo aproximado do mapa a partir das feições do basemap: bases altas, rio baixo, rampas suaves."""
from PIL import Image, ImageDraw, ImageFilter

from . import fontes

TAMANHO = 512
TOM = {"base": 255, "chao": 128, "rio": 40}
RAMPAS = {"radiant": ("ramp_rad_bot", "ramp_rad_mid", "ramp_rad_top"),
          "dire": ("ramp_dire_top", "ramp_dire_mid", "ramp_dire_bot")}
CANTO = {"radiant": (0.0, 0.0), "dire": (1.0, 1.0)}
RAIO_RAMPA = 0.035


def _ponto(id_: str) -> tuple[float, float]:
    basemap, _ = fontes.gps()
    f = basemap.feature_index()[id_]
    return (f["x"], f["y"])


def _px(ponto: tuple[float, float], tamanho: int) -> tuple[float, float]:
    return (ponto[0] * tamanho, (1 - ponto[1]) * tamanho)


def poligono_da_base(lado: str) -> list[tuple[float, float]]:
    rampas = [_ponto(i) for i in RAMPAS[lado]]
    cx, cy = CANTO[lado]
    return [(cx, cy), (rampas[0][0], cy), *rampas, (cx, rampas[-1][1])]


def _mascara_das_rampas(tamanho: int) -> Image.Image:
    mascara = Image.new("L", (tamanho, tamanho), 0)
    desenho, r = ImageDraw.Draw(mascara), RAIO_RAMPA * tamanho
    for x, y in (_px(_ponto(i), tamanho) for ids in RAMPAS.values() for i in ids):
        desenho.ellipse([x - r, y - r, x + r, y + r], fill=255)
    return mascara.filter(ImageFilter.GaussianBlur(r / 2))


def relevo(tamanho: int = TAMANHO) -> Image.Image:
    basemap, _ = fontes.gps()
    img = Image.new("L", (tamanho, tamanho), TOM["chao"])
    desenho = ImageDraw.Draw(img)
    for rio in basemap.features()["river"]:
        desenho.line([_px(p, tamanho) for p in rio["points"]], fill=TOM["rio"],
                     width=max(1, round(rio["largura_n"] * tamanho)), joint="curve")
    for lado in RAMPAS:
        desenho.polygon([_px(p, tamanho) for p in poligono_da_base(lado)], fill=TOM["base"])
    penhasco = img.filter(ImageFilter.GaussianBlur(tamanho / 256))
    rampa = img.filter(ImageFilter.GaussianBlur(tamanho / 40))
    return Image.composite(rampa, penhasco, _mascara_das_rampas(tamanho))


def grade(img: Image.Image, n: int = 64) -> dict:
    pequeno = img.resize((n, n), Image.Resampling.BILINEAR)
    return {"tamanho": n, "alturas": [round(v / 255, 2) for v in pequeno.get_flattened_data()]}
