"""Rotas dos PDFs 03 e 06 com coordenadas, caminhos andando e o índice minuto × situação."""
import json
from functools import cache
from pathlib import Path

from . import fontes


def _ler(caminho: Path) -> dict:
    return json.loads(caminho.read_text(encoding="utf-8"))


def resolver_alvo(alvo) -> tuple[float, float]:
    if isinstance(alvo, dict):
        return (float(alvo["x"]), float(alvo["y"]))
    basemap, _ = fontes.gps()
    try:
        x, y = basemap.resolve(alvo)
    except (KeyError, ValueError) as erro:
        raise ValueError(f"alvo desconhecido: {alvo}") from erro
    return (round(float(x), 4), round(float(y), 4))


@cache
def _caminho(a: tuple[float, float], b: tuple[float, float]) -> list[list[float]]:
    _, paths = fontes.gps()
    pts = paths.path_between(a, b).points
    return [[round(float(x), 4), round(float(y), 4)] for x, y in pts]


def _arquivos() -> list[tuple[str, Path]]:
    return ([("03", p) for p in sorted(fontes.GPS_SPECS.glob("*.json")) if not p.name.startswith("Z_")]
            + [("06", p) for p in sorted(fontes.MINUTO_SPECS.glob("*.json"))]
            + [("06", p) for p in sorted(fontes.ESTUDOS_SPECS.glob("*.json"))])


def _passo(rota_id: str, p: dict) -> dict:
    try:
        x, y = resolver_alvo(p["alvo"])
    except ValueError as erro:
        raise ValueError(f"{rota_id} passo {p['n']}: {erro}") from erro
    return {"n": p["n"], "alvo": p["alvo"] if isinstance(p["alvo"], str) else "ponto",
            "x": x, "y": y, "rotulo": p.get("rotulo", ""), "minuto": p.get("minuto", ""),
            "acao": p.get("acao", ""), "risco": p.get("risco", "seguro")}


def _fuga(fuga: dict | None) -> dict | None:
    if not fuga:
        return None
    x, y = resolver_alvo(fuga["para"])
    return {"de_passo": fuga["de_passo"], "x": x, "y": y, "rotulo": fuga.get("rotulo", "FUGA")}


def _rota(pdf: str, secao: dict, r: dict) -> dict:
    passos = [_passo(r["id"], p) for p in r["passos"]]
    return {
        "id": r["id"], "pdf": pdf, "lado": r["lado"], "pergunta": r["pergunta"],
        "titulo": r.get("titulo_curto", ""), "secao": f"{secao.get('numero', '')} {secao.get('titulo', '')}".strip(),
        "janela": r.get("janela", {}), "estado": r.get("estado"), "origem": r.get("origem", "recomendada"),
        "replay": str(r["replay"]) if r.get("replay") else None, "passos": passos,
        "caminhos": [_caminho((a["x"], a["y"]), (b["x"], b["y"])) for a, b in zip(passos, passos[1:])],
        "fuga": _fuga(r.get("fuga")), "proxima": list(r.get("proxima", [])),
        "se": [{"condicao": s["condicao"], "rota": s.get("rota")} for s in r.get("se", [])],
        "interrupcao": [{"condicao": i["condicao"], "acao": i.get("acao", ""), "rota": i.get("rota")}
                        for i in r.get("interrupcao", [])],
        "porque": r.get("porque", ""),
    }


def carregar_rotas() -> list[dict]:
    return [_rota(pdf, secao, r) for pdf, arq in _arquivos()
            for secao in _ler(arq).get("secoes", []) for r in secao.get("rotas", [])]


def _linhas(cadeia: dict, lado: str) -> list[dict]:
    return [{"minuto": l["minuto"],
             "cenarios": {c: {"id": v.get("id"), "nota": v.get("nota") or v.get("na")} for c, v in l["cenarios"].items()}}
            for l in cadeia[lado]["tabela"]]


def indice() -> dict:
    cadeia = _ler(fontes.CADEIA)
    return {"colunas": cadeia["colunas"], "radiant": _linhas(cadeia, "radiant"), "dire": _linhas(cadeia, "dire")}
