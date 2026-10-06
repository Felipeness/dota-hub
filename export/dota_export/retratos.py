"""Retrato dos heróis e ícone dos itens: decodificados do jogo instalado e gravados em webp."""
import json
import tempfile
from pathlib import Path

from PIL import Image

from . import fontes, jogo

SUFIXO = "_png.vtex_c"
PASTA_HEROIS = "panorama/images/heroes/"
PASTA_ITENS = "panorama/images/items/"
TAMANHO_RETRATO = (128, 72)
TAMANHO_ITEM = (64, 47)


def nomes_no_jogo(fichas: list[dict]) -> dict[str, str]:
    """Id do herói no app (anti_mage) para o nome no jogo (npc_dota_hero_antimage), pelo hero_id da OpenDota."""
    por_numero = {h["id"]: h["name"] for h in json.loads(fontes.HEROIS_OPENDOTA.read_text(encoding="utf-8"))}
    faltando = [f["id"] for f in fichas if f["hero_id"] not in por_numero]
    if faltando:
        raise ValueError(f"herói sem nome no jogo: {', '.join(faltando)}")
    return {f["id"]: por_numero[f["hero_id"]] for f in fichas}


def _converter(arquivo_vpk: Path, pasta: str, saida_por_nome: dict[str, Path], tamanho: tuple[int, int]) -> None:
    # ponytail: imagem do jogo muda quase nunca; só grava o que falta. Apague a pasta para refazer todas.
    faltando = {nome: saida for nome, saida in saida_por_nome.items() if not saida.exists()}
    if not faltando:
        return
    no_jogo = {c.removeprefix(pasta).removesuffix(SUFIXO) for c in jogo.listar(arquivo_vpk, pasta) if c.endswith(SUFIXO)}
    ausentes = sorted(set(faltando) - no_jogo)
    if ausentes:
        raise ValueError(f"sem imagem no jogo: {', '.join(ausentes)}")
    with tempfile.TemporaryDirectory() as tmp:
        jogo.extrair(arquivo_vpk, [f"{pasta}{nome}{SUFIXO}" for nome in sorted(faltando)], Path(tmp), decompilar=True)
        for nome, saida in faltando.items():
            saida.parent.mkdir(parents=True, exist_ok=True)
            with Image.open(Path(tmp) / pasta / f"{nome}_png.png") as imagem:
                imagem.convert("RGBA").resize(tamanho, Image.Resampling.LANCZOS).save(saida, quality=85)


def atualizar_herois(arquivo_vpk: Path, nomes: dict[str, str], destino: Path) -> None:
    _converter(arquivo_vpk, PASTA_HEROIS, {nome: destino / f"{app_id}.webp" for app_id, nome in nomes.items()}, TAMANHO_RETRATO)


def atualizar_itens(arquivo_vpk: Path, itens: set[str], destino: Path) -> None:
    _converter(arquivo_vpk, PASTA_ITENS, {item: destino / f"{item}.webp" for item in itens}, TAMANHO_ITEM)
