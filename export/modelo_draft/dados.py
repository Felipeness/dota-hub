"""Lê do cache de dota-tier1 os históricos coletados por coletar.py e devolve uma linha por conta × partida."""
import json
from dataclasses import dataclass
from pathlib import Path

import numpy as np

from coletar import ARQUIVO_AMOSTRA, caminho_do_historico

MODOS_VALIDOS = {1, 2, 3, 4, 5, 16, 22}
LOBBIES_VALIDOS = {0, 1, 2, 5, 6, 7}
MAX_HEROI = 160
DIA_S = 86_400


@dataclass(frozen=True)
class Linhas:
    conta: np.ndarray
    origem: np.ndarray
    medalha: np.ndarray
    match_id: np.ndarray
    dia: np.ndarray
    t: np.ndarray
    heroi: np.ndarray
    vitoria: np.ndarray
    radiant: np.ndarray
    aliados: np.ndarray
    inimigos: np.ndarray

    def __len__(self) -> int:
        return len(self.conta)


def _herois_da_partida(partida: dict) -> tuple[list[int], list[int]] | None:
    """Heróis de quem joga junto e dos cinco do outro lado; None se a partida veio incompleta."""
    herois = partida.get("heroes") or {}
    meu_lado = partida["player_slot"] < 128
    aliados = [h["hero_id"] for slot, h in herois.items() if (int(slot) < 128) == meu_lado and int(slot) != partida["player_slot"]]
    inimigos = [h["hero_id"] for slot, h in herois.items() if (int(slot) < 128) != meu_lado]
    return (aliados, inimigos) if len(aliados) == 4 and len(inimigos) == 5 and all(aliados + inimigos) else None


def _valida(partida: dict) -> bool:
    return (
        partida.get("game_mode") in MODOS_VALIDOS
        and partida.get("lobby_type") in LOBBIES_VALIDOS
        and partida.get("radiant_win") is not None
        and (partida.get("leaver_status") or 0) <= 1
        and 0 < partida.get("hero_id", 0) < MAX_HEROI
    )


def _caminho_no_cache(od, conta: int) -> Path:
    return od._cache_path("od", caminho_do_historico(conta))


def carregar(od) -> Linhas:
    amostra = json.loads(ARQUIVO_AMOSTRA.read_text(encoding="utf-8"))
    linhas: list[tuple] = []
    for conta, info in amostra.items():
        arquivo = _caminho_no_cache(od, int(conta))
        if not arquivo.exists():
            continue
        for partida in json.loads(arquivo.read_text(encoding="utf-8")):
            herois = _herois_da_partida(partida) if _valida(partida) else None
            if herois is None:
                continue
            venceu = (partida["player_slot"] < 128) == partida["radiant_win"]
            linhas.append((int(conta), info["origem"], info["medalha"] or 0, partida["match_id"], partida["start_time"],
                           partida["hero_id"], int(venceu), int(partida["player_slot"] < 128), *herois[0], *herois[1]))
    linhas.sort(key=lambda linha: (linha[0], linha[4]))
    colunas = list(zip(*linhas))
    t = np.array(colunas[4], dtype=np.int64)
    return Linhas(
        conta=np.array(colunas[0], dtype=np.int64), origem=np.array(colunas[1]), medalha=np.array(colunas[2], dtype=np.int32),
        match_id=np.array(colunas[3], dtype=np.int64), dia=t // DIA_S, t=t, heroi=np.array(colunas[5], dtype=np.int32),
        vitoria=np.array(colunas[6], dtype=np.int8), radiant=np.array(colunas[7], dtype=np.int8),
        aliados=np.array(colunas[8:12], dtype=np.int32).T, inimigos=np.array(colunas[12:17], dtype=np.int32).T,
    )
