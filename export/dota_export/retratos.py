"""Retrato dos heróis e ícone dos itens: decodificados do jogo instalado e gravados em webp."""
import json
import re
import sys
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


def id_no_app(nome_localizado: str) -> str:
    """Nome do herói vira o id usado no app: "Nature's Prophet" -> natures_prophet, "Anti-Mage" -> anti_mage."""
    sem_apostrofo = nome_localizado.lower().replace("'", "")
    return re.sub(r"[^a-z0-9]+", "_", sem_apostrofo).strip("_")


def todos_os_herois() -> dict[str, str]:
    """Todos os heróis da lista da OpenDota, não só os que têm ficha no app: cards de ban e pick usam qualquer um."""
    herois = json.loads(fontes.HEROIS_OPENDOTA.read_text(encoding="utf-8"))
    return {id_no_app(h["localized_name"]): h["name"] for h in herois}


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


if __name__ == "__main__":
    # python -m dota_export.retratos [pasta]: só os retratos de todos os heróis, sem rodar o export inteiro.
    destino = Path(sys.argv[1]) if len(sys.argv) > 1 else Path(__file__).resolve().parents[2] / "app" / "public" / "data" / "retratos" / "herois"
    atualizar_herois(jogo.vpk(), todos_os_herois(), destino)
    print(f"ok: {len(list(destino.glob('*.webp')))} retratos em {destino}")
