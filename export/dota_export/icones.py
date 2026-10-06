"""Ícones das habilidades: decodifica do jogo e grava em webp de 64 px."""
import tempfile
from pathlib import Path

from PIL import Image

from . import jogo

PASTA = "panorama/images/spellicons/"
SUFIXO = "_png.vtex_c"
TAMANHO = 64


def disponiveis(arquivo_vpk: Path) -> frozenset[str]:
    return frozenset(c.removeprefix(PASTA).removesuffix(SUFIXO) for c in jogo.listar(arquivo_vpk, PASTA) if c.endswith(SUFIXO))


def atualizar(arquivo_vpk: Path, ids: set[str], destino: Path) -> None:
    # ponytail: ícone muda quase nunca; só grava o que falta. Apague a pasta para refazer todos.
    destino.mkdir(parents=True, exist_ok=True)
    faltando = sorted(i for i in ids if not (destino / f"{i}.webp").exists())
    if not faltando:
        return
    with tempfile.TemporaryDirectory() as tmp:
        jogo.extrair(arquivo_vpk, [f"{PASTA}{i}{SUFIXO}" for i in faltando], Path(tmp), decompilar=True)
        for i in faltando:
            with Image.open(Path(tmp) / PASTA / f"{i}_png.png") as imagem:
                imagem.convert("RGBA").resize((TAMANHO, TAMANHO), Image.Resampling.LANCZOS).save(destino / f"{i}.webp", quality=85)
