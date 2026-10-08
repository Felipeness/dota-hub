"""Ficha de cada herói para o app: guia do PDF 05, power spikes, rotas do herói e números dos pros."""
import json
from functools import cache
from pathlib import Path

from . import fontes, rotas

PROS = (("dados_felipe", "Felipe"), ("dados_satanic", "Satanic"), ("dados_yatoro", "Yatoro"), ("dados_watson", "Watson"))
CAMPOS_POR_MINUTO = ("minuto", "nivel", "habilidade", "item", "proximo_spike", "objetivo_farm")


def _ler(caminho: Path) -> dict:
    return json.loads(caminho.read_text(encoding="utf-8"))


@cache
def _power_spikes() -> dict:
    return _ler(fontes.POWER_SPIKES)["herois"]


@cache
def _compare() -> dict:
    return _ler(fontes.COMPARE_PROS)


@cache
def _itens() -> dict:
    return _ler(fontes.ITENS)


def _numero(valor) -> float | None:
    if isinstance(valor, bool) or not isinstance(valor, (int, float)):
        return None
    return valor


def _mmss(minutos: float) -> str:
    total = round(minutos * 60)
    return f"{total // 60}:{total % 60:02d}"


def _minutos(valor) -> float | None:
    """Aceita 7.5 ou "7:30"; qualquer outro texto (o guia do Phantom Lancer usa "fim") vira None."""
    if isinstance(valor, str) and ":" in valor:
        minutos, segundos = valor.split(":")
        return int(minutos) + int(segundos) / 60
    return _numero(valor)


def _janela(de, ate) -> str:
    return "-".join(v if isinstance(v, str) else _mmss(v) for v in (de, ate))


def _rotulo(alvo: str) -> str:
    basemap, _ = fontes.gps()
    feicao = basemap.feature_of(alvo)
    return feicao.get("nome_pt", alvo) if feicao else alvo


def _passo(n: int, p: dict) -> dict:
    x, y = (p["x"], p["y"]) if "x" in p else rotas.resolver_alvo(p["alvo"])
    return {"n": n, "alvo": p["alvo"], "x": round(float(x), 4), "y": round(float(y), 4), "rotulo": _rotulo(p["alvo"]),
            "minuto": p.get("minuto", ""), "acao": p.get("acao", ""), "risco": "objetivo"}


def fase(heroi: str, lado: str, bruta: dict) -> dict:
    janela = bruta.get("janela") or _janela(bruta["de"], bruta["ate"])
    try:
        passos = [_passo(i, p) for i, p in enumerate(bruta["passos"], start=1)]
    except ValueError as erro:
        raise ValueError(f"{heroi} {lado} {janela}: {erro}") from erro
    caminhos = [rotas.caminho_andando((a["x"], a["y"]), (b["x"], b["y"])) for a, b in zip(passos, passos[1:])]
    return {"de": _minutos(bruta["de"]), "ate": _minutos(bruta["ate"]), "janela": janela, "objetivo": bruta["objetivo"],
            "passos": passos, "caminhos": caminhos}


def spike(bruto: dict) -> dict:
    minuto = _numero(bruto["minuto"])
    faixa = bruto.get("faixa") or (_mmss(minuto) if minuto is not None else str(bruto["minuto"]))
    return {"minuto": minuto, "faixa": faixa, "marco": bruto["marco"], "o_que_fazer": bruto["o_que_fazer"]}


def _nome_item(chave: str) -> str:
    return _itens().get(chave, {}).get("dname", chave)


def _guia(d: dict) -> dict:
    q, lane, itens, cf = d["quando_pegar"], d["lane"], d["itens"], d["condicao_para_farmar"]
    return {
        "bom_quando": q["bom_quando"], "evitar_quando": q["evitar_quando"], "momento_do_draft": q["momento_do_draft"],
        "lane": {"objetivo": lane["objetivo"], "itens_iniciais": lane["itens_iniciais"], "dicas": lane["dicas"]},
        "skill_build": [{"nivel": s["nivel"], "skill": s["skill"]} for s in d["skill_build"]],
        "itens_core": [{"item": i["item"], "nome_curto": _nome_item(i["item"]), "nome": i["nome"],
                        "minuto_alvo": _numero(i["minuto_alvo"]), "base": i["base_do_numero"]}
                       for i in itens["core"]],
        "itens_situacionais": [{"item": i["item"], "nome": i.get("nome") or _nome_item(i["item"]), "quando": i["quando"]}
                               for i in itens["situacionais"]],
        "condicao_para_farmar": {"nivel": cf["nivel"], "minuto_tipico": _numero(cf["minuto_tipico"]),
                                 "explicacao": cf["explicacao"]},
        "depois_dos_20": d["depois_dos_20"], "erros_comuns": d["erros_comuns"],
    }


def _por_minuto(heroi: str) -> list[dict] | None:
    dados = _power_spikes().get(heroi)
    if dados is None:
        return None
    return [{c: m[c] for c in CAMPOS_POR_MINUTO} for m in dados["por_minuto"]]


def _rotas_relacionadas(heroi: str, validas: frozenset[str]) -> list[str]:
    dados = _power_spikes().get(heroi)
    if dados is None:
        return []
    ids = {i for faixa in dados["rotas_por_faixa"].values() for lado in faixa["cadeia"].values() for i in lado}
    ids |= {v["id"] for faixa in dados["rotas_por_faixa"].values() for v in faixa.get("variantes", [])}
    return sorted(ids & validas)


def _linha_pro(rotulo: str, dados: dict) -> dict:
    return {"jogador": rotulo, "jogos": int(dados["jogos"]), "vitorias": dados.get("v", dados.get("vitorias")),
            "lh10": _numero(dados.get("lh10"))}


def _pros(d: dict) -> dict:
    linhas = [_linha_pro(rotulo, d[chave]) for chave, rotulo in PROS if chave in d]
    ref = d.get("referencia_pro_741")
    if ref and ref.get("jogos"):
        linhas.append({"jogador": "Pros no 7.41", "jogos": int(ref["jogos"]), "vitorias": ref.get("vitorias"),
                       "lh10": _numero(ref.get("lh10_mediana"))})
    blocos = _compare()["por_heroi"] + _compare()["herois_sem_pro"]
    leitura = next((b["leitura"] for b in blocos if b["heroi"] == d["hero"]), None)
    return {"linhas": linhas, "leitura": leitura}


def _fonte(f) -> str:
    return f if isinstance(f, str) else " | ".join(str(f[k]) for k in ("nome", "url", "uso", "confianca") if k in f)


def heroi(caminho: Path, rotas_validas: frozenset[str] = frozenset()) -> dict:
    d = _ler(caminho)
    hid = caminho.name.removeprefix("hero_").removesuffix("_corrigido.json")
    return {
        "id": hid, "nome": d["hero"], "hero_id": d["hero_id"], "patch": d["patch"], "resumo": d["resumo"],
        "confianca": d["confianca"], "guia": _guia(d), "power_spikes": [spike(s) for s in d["power_spikes"]],
        "por_minuto": _por_minuto(hid),
        "rotas": {"radiant": [fase(hid, "radiant", f) for f in d["rota_radiant"]],
                  "dire": [fase(hid, "dire", f) for f in d["rota_dire"]]},
        "rotas_relacionadas": _rotas_relacionadas(hid, rotas_validas),
        "pros": _pros(d), "fontes": [_fonte(f) for f in d["fontes"]],
    }


def todos(rotas_validas: frozenset[str] = frozenset()) -> list[dict]:
    return [heroi(c, rotas_validas) for c in fontes.guias_de_heroi()]


def indice(fichas: list[dict]) -> list[dict]:
    return [{"id": f["id"], "nome": f["nome"], "hero_id": f["hero_id"], "patch": f["patch"], "resumo": f["resumo"],
             "tem_por_minuto": f["por_minuto"] is not None} for f in fichas]


def itens_dos_guias(fichas: list[dict]) -> set[str]:
    """Slugs de item citados na build (core e situacionais) de cada ficha, pra exportar o ícone deles também.

    Alguns guias anotam o campo "item" com um rótulo livre em vez do slug da OpenDota
    (ex.: "neutros", "Satanic (5.050)", "disperser / diffusal_blade"): isso não tem imagem
    no jogo sob esse nome, então fica de fora em vez de quebrar o export.
    """
    citados = {i["item"] for f in fichas for i in (*f["guia"]["itens_core"], *f["guia"]["itens_situacionais"])}
    return citados & _itens().keys()
