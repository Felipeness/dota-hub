"""Mortes de Roshan nos replays lidos e quantos aliados do matador estavam perto naquele segundo."""
import math

from . import fontes, trajetorias

UNIDADES_POR_NORM = 18176
RAIO_NORM = 1500 / UNIDADES_POR_NORM  # 1.500 unidades: o raio de luta usado nos padrões dos replays


def aliados_perto(matador: tuple[float, float], aliados: list[tuple[float, float]], raio: float = RAIO_NORM) -> int:
    return sum(1 for a in aliados if math.dist(matador, a) <= raio)


def _aliados_vivos(pos: dict, times: dict[int, int], matador: int, t: int) -> list[tuple[float, float]]:
    companheiros = (s for s, time in times.items() if time == times[matador] and s != matador)
    return [(p[0], p[1]) for s in companheiros if (p := pos.get((s, t))) and p[2]]


def _kill(match_id: int, evento: dict, pos: dict, times: dict[int, int]) -> dict:
    t, slot = int(evento["t"]), evento["slot"]
    matador = pos.get((slot, t))
    perto = aliados_perto(matador[:2], _aliados_vivos(pos, times, slot, t)) if matador else None
    return {"match_id": str(match_id), "minuto": round(evento["t"] / 60, 1), "heroi": evento["heroi"],
            "lado": trajetorias.lado(times[slot]), "aliados_perto": perto, "solo": perto == 0}


def kills(pasta) -> list[dict]:
    meta, linhas, eventos = trajetorias.ler_replay(pasta)
    pos = trajetorias.posicoes(linhas)
    times = {j["slot"]: j["time"] for j in meta["jogadores"]}
    return [_kill(meta["match_id"], e, pos, times) for e in eventos if e["tipo"] == "roshan" and e.get("slot") in times]


def todas() -> list[dict]:
    return [k for pasta in sorted(fontes.REPLAYS.iterdir()) if pasta.is_dir() for k in kills(pasta)]
