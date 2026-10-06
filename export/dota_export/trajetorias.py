"""Replays lidos, reduzidos para o celular: posição de cada herói a cada PASSO_S segundos, wards e mortes."""
import csv
import json
from collections import defaultdict
from pathlib import Path

from . import fontes, jogadores

PASSO_S = 5
ATE_S = 30 * 60
AUSENTE = (-1, -1)
LADO = {2: "radiant", 3: "dire"}


def lado(time: int) -> str:
    return LADO[time]


def _norm(g: float) -> float:
    _, paths = fontes.gps()
    return (g - paths.GRID_ORIGIN) / paths.GRID_SCALE


def _mil(g: str | float) -> int:
    return min(1000, max(0, round(_norm(float(g)) * 1000)))


def reduzir(linhas, passo_s: int = PASSO_S, ate_s: int = ATE_S) -> tuple[dict[int, list[int]], int]:
    por_slot: dict[int, dict[int, tuple[int, int]]] = defaultdict(dict)
    for linha in linhas:
        t = int(linha["t"])
        if t < 0 or t > ate_s or t % passo_s:
            continue
        vivo = linha["vivo"] == "1"
        por_slot[int(linha["slot"])][t] = (_mil(linha["gx"]), _mil(linha["gy"])) if vivo else AUSENTE
    fim = max((t for pontos in por_slot.values() for t in pontos), default=0)
    tempos = range(0, fim + 1, passo_s)
    return {slot: [v for t in tempos for v in pontos.get(t, AUSENTE)] for slot, pontos in por_slot.items()}, fim


def ler_replay(pasta: Path) -> tuple[dict, list[dict], list[dict]]:
    meta = json.loads((pasta / "meta.json").read_text(encoding="utf-8"))
    with (pasta / "posicoes.csv").open(encoding="utf-8", newline="") as arquivo:
        linhas = list(csv.DictReader(arquivo))
    with (pasta / "eventos.jsonl").open(encoding="utf-8") as arquivo:
        eventos = [json.loads(l) for l in arquivo if l.strip()]
    return meta, linhas, eventos


def posicoes(linhas: list[dict]) -> dict[tuple[int, int], tuple[float, float, bool]]:
    return {(int(l["slot"]), int(l["t"])): (_norm(float(l["gx"])), _norm(float(l["gy"])), l["vivo"] == "1")
            for l in linhas}


def _nome_publico(nome: str | None) -> str | None:
    limpo = "".join(c for c in (nome or "") if c.isprintable() and c != "�").strip()
    return limpo or None


def _focos(pasta: Path, match_id: int) -> list[int]:
    slots = {j["slot"] for j in jogadores.jogadores_de_replay() if j["match_id"] == match_id}
    rota_real = pasta / "rota_real.json"
    if rota_real.exists():
        slots.add(json.loads(rota_real.read_text(encoding="utf-8"))["slot"])
    return sorted(slots)


def _wards(eventos: list[dict], fim_s: int) -> list[dict]:
    fins = {(e["gx"], e["gy"], e["nome"]): e["t"] for e in eventos if e["tipo"] == "ward_fim"}
    def ward(e: dict) -> dict:
        inicio = max(0, round(e["t"]))
        fim = min(fim_s, round(fins.get((e["gx"], e["gy"], e["nome"]), fim_s)))
        return {"t": inicio, "ate": max(inicio, fim), "x": round(_norm(e["gx"]), 3), "y": round(_norm(e["gy"]), 3),
                "lado": lado(e["time"]), "tipo": e["nome"]}
    return [ward(e) for e in eventos if e["tipo"] == "ward" and e["t"] <= fim_s]


def _morte(evento: dict, slot_do_heroi: dict[str, int], times: dict[int, int], pos: dict) -> dict | None:
    slot = slot_do_heroi.get(evento["alvo"])
    ponto = pos.get((slot, int(evento["t"])))
    if slot is None or ponto is None:
        return None
    return {"t": round(evento["t"]), "x": round(ponto[0], 3), "y": round(ponto[1], 3),
            "heroi": evento["alvo"], "lado": lado(times[slot])}


def _mortes(eventos: list[dict], meta: dict, pos: dict, fim_s: int) -> list[dict]:
    slot_do_heroi = {j["heroi"]: j["slot"] for j in meta["jogadores"]}
    times = {j["slot"]: j["time"] for j in meta["jogadores"]}
    candidatas = (e for e in eventos
                  if e["tipo"] == "morte_heroi" and not e.get("ilusao") and 0 <= e["t"] <= fim_s)
    return [m for e in candidatas if (m := _morte(e, slot_do_heroi, times, pos))]


def replay(pasta: Path) -> dict:
    meta, linhas, eventos = ler_replay(pasta)
    xy, fim = reduzir(linhas)
    return {
        "match_id": str(meta["match_id"]), "passo_s": PASSO_S, "fim_s": fim, "focos": _focos(pasta, meta["match_id"]),
        "herois": [{"slot": j["slot"], "heroi": j["heroi"], "lado": lado(j["time"]),
                    "jogador": _nome_publico(j.get("nome")), "xy": xy.get(j["slot"], [])}
                   for j in sorted(meta["jogadores"], key=lambda j: j["slot"])],
        "wards": _wards(eventos, fim), "mortes": _mortes(eventos, meta, posicoes(linhas), fim),
    }


def indice(exportados: list[dict]) -> list[dict]:
    por_partida = {str(j["match_id"]): j for j in jogadores.jogadores_de_replay()}
    def resumo(r: dict) -> dict:
        origem = por_partida.get(r["match_id"], {})
        herois = {h["slot"]: h for h in r["herois"]}
        return {"match_id": r["match_id"], "fim_s": r["fim_s"], "data": origem.get("data"), "liga": origem.get("liga"),
                "focos": [{"slot": s, "heroi": herois[s]["heroi"], "jogador": herois[s]["jogador"]} for s in r["focos"]]}
    return [resumo(r) for r in exportados]
