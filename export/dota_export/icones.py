"""Ícones das habilidades: decodifica do jogo e grava em webp de 64 px."""
from pathlib import Path

from . import jogo

PASTA = "panorama/images/spellicons/"
SUFIXO = "_png.vtex_c"


def disponiveis(arquivo_vpk: Path) -> frozenset[str]:
    return frozenset(c.removeprefix(PASTA).removesuffix(SUFIXO) for c in jogo.listar(arquivo_vpk, PASTA) if c.endswith(SUFIXO))
