"""Rotas dos PDFs 03, 05 e 06 com coordenadas, o traçado do PDF (caminho andando ou salto de teleporte) e o índice
minuto × situação."""
import importlib
import json
from functools import cache
from pathlib import Path
from types import ModuleType

from . import fontes

CAMPOS_RESUMO = ("id", "pdf", "lado", "pergunta", "titulo", "janela", "heroi")


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
def caminho_andando(a: tuple[float, float], b: tuple[float, float]) -> list[list[float]]:
    _, paths = fontes.gps()
    try:
        pts = paths.path_between(a, b).points
    except ValueError:  # alvo sem chão andável por perto: o PDF desenha reta (gps.layout._leg_base)
        pts = [a, b]
    return [[round(float(x), 4), round(float(y), 4)] for x, y in pts]


@cache
def _layout() -> ModuleType:
    fontes.gps()  # põe o src do dota-imortal no path
    return importlib.import_module("gps.layout")


def _ponto(xy) -> tuple[float, float]:
    return (round(float(xy[0]), 4), round(float(xy[1]), 4))


def _trecho(a: tuple[float, float], b: tuple[float, float], via: str | None) -> list[list[float]]:
    """Como o PDF desenha o trecho: teleporte é salto reto (nunca roteado por terra); andando, o caminho real."""
    return [list(a), list(b)] if via else caminho_andando(a, b)


def _tracado(r: dict) -> tuple[list[str | None], list[int], list[list[list[float]]]]:
    """(via de chegada de cada passo, lugar de cada passo, um caminho por par de passos seguidos).

    Mesmo agrupamento do PDF (gps.layout): passos no mesmo alvo, ou duas posições de lane a até 900 unidades, são um
    lugar só, com um selo para todas as visitas; entre dois passos do mesmo lugar não há seta (caminho vazio)."""
    layout = _layout()
    steps = layout.route_steps(r)
    places = layout.group_places(steps)
    lugar = list(layout.place_index(places, len(steps)))
    centros = [_ponto(place.xy) for place in places]
    caminhos = [[] if a == b else _trecho(centros[a], centros[b], steps[i + 1].via)
                for i, (a, b) in enumerate(zip(lugar, lugar[1:]))]
    return [s.via for s in steps], lugar, caminhos


def _arquivos() -> list[tuple[str, Path]]:
    # H05_* mora na pasta do GPS, mas é impresso no PDF 05 (guias de herói).
    return ([("05" if p.name.startswith("H05_") else "03", p)
             for p in sorted(fontes.GPS_SPECS.glob("*.json")) if not p.name.startswith("Z_")]
            + [("06", p) for p in sorted(fontes.MINUTO_SPECS.glob("*.json"))]
            + [("06", p) for p in sorted(fontes.ESTUDOS_SPECS.glob("*.json"))])


def _heroi_do_arquivo(arq: Path) -> str | None:
    # H05_<id do herói>.json guarda as rotas do guia daquele herói (PDF 05).
    return arq.stem.removeprefix("H05_") if arq.name.startswith("H05_") else None


def _passo(rota_id: str, p: dict) -> dict:
    try:
        x, y = resolver_alvo(p["alvo"])
    except ValueError as erro:
        raise ValueError(f"{rota_id} passo {p['n']}: {erro}") from erro
    return {"n": p["n"], "alvo": p["alvo"] if isinstance(p["alvo"], str) else "ponto",
            "x": x, "y": y, "rotulo": p.get("rotulo", ""), "minuto": p.get("minuto", ""),
            "acao": p.get("acao", ""), "risco": p.get("risco", "seguro")}


def _fuga(fuga: dict | None, passos: list[dict]) -> dict | None:
    """Alvo da fuga e o traçado do PDF: a pé pelo caminho real (paths.escape_path) ou, com via tp, o salto do TP."""
    if not fuga:
        return None
    x, y = resolver_alvo(fuga["para"])
    origem = next(p for p in passos if p["n"] == fuga["de_passo"])
    via = fuga.get("via")
    return {"de_passo": fuga["de_passo"], "x": x, "y": y, "rotulo": fuga.get("rotulo", "FUGA"), "via": via,
            "caminho": _trecho((origem["x"], origem["y"]), (x, y), via)}


def _rota(pdf: str, secao: dict, r: dict, heroi: str | None) -> dict:
    base = [_passo(r["id"], p) for p in r["passos"]]  # alvo desconhecido para aqui, dizendo a rota e o passo
    vias, lugares, caminhos = _tracado(r)
    passos = [{**p, "via": via, "lugar": lugar} for p, via, lugar in zip(base, vias, lugares)]
    return {
        "id": r["id"], "pdf": pdf, "lado": r["lado"], "heroi": heroi, "pergunta": r["pergunta"],
        "titulo": r.get("titulo_curto", ""), "secao": f"{secao.get('numero', '')} {secao.get('titulo', '')}".strip(),
        "janela": r.get("janela", {}), "estado": r.get("estado"), "origem": r.get("origem", "recomendada"),
        "replay": str(r["replay"]) if r.get("replay") else None, "passos": passos,
        "caminhos": caminhos, "fuga": _fuga(r.get("fuga"), passos), "proxima": list(r.get("proxima", [])),
        "se": [{"condicao": s["condicao"], "rota": s.get("rota")} for s in r.get("se", [])],
        "interrupcao": [{"condicao": i["condicao"], "acao": i.get("acao", ""), "rota": i.get("rota")}
                        for i in r.get("interrupcao", [])],
        "porque": r.get("porque", ""),
    }


def carregar_rotas() -> list[dict]:
    return [_rota(pdf, secao, r, _heroi_do_arquivo(arq)) for pdf, arq in _arquivos()
            for secao in _ler(arq).get("secoes", []) for r in secao.get("rotas", [])]


def _linhas(cadeia: dict, lado: str) -> list[dict]:
    return [{"minuto": l["minuto"],
             "cenarios": {c: {"id": v.get("id"), "nota": v.get("nota") or v.get("na")} for c, v in l["cenarios"].items()}}
            for l in cadeia[lado]["tabela"]]


def indice() -> dict:
    cadeia = _ler(fontes.CADEIA)
    return {"colunas": cadeia["colunas"], "radiant": _linhas(cadeia, "radiant"), "dire": _linhas(cadeia, "dire")}


def resumo(todas: list[dict]) -> list[dict]:
    """O que a lista, a busca e o glossário usam, sem passos nem caminhos (o arquivo com tudo passa de 5 MB)."""
    return [{campo: r[campo] for campo in CAMPOS_RESUMO} for r in todas]
