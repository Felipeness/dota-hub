"""Painéis de Leonardo, Hane e Yuma (v2) com os mesmos filtros dos relatórios de cada projeto."""
import csv
import re
from collections import defaultdict
from pathlib import Path

from . import fontes
from .jogadores import destaque

MARCADOR = re.compile(r"^(\*\*|- |\d+\. )")
LIMPA = re.compile(r"\*\*|^- |^\d+\. ")
CERTEZA_DO_RELATORIO = ("alta", "media")
FAIXAS_DE_MORTE = ("0", "1", "2", "3", "4+")


def _csv(caminho: Path) -> list[dict]:
    with caminho.open(encoding="utf-8", newline="") as arquivo:
        return list(csv.DictReader(arquivo))


def _venceu(linha: dict) -> bool:
    return linha["vitoria"] == "True"


def pct_vitoria(linhas: list[dict]) -> float | None:
    return round(100 * sum(map(_venceu, linhas)) / len(linhas), 1) if linhas else None


def _grupos(linhas: list[dict], chave) -> dict[str, list[dict]]:
    grupos: dict[str, list[dict]] = defaultdict(list)
    for linha in linhas:
        grupos[chave(linha)].append(linha)
    return grupos


def _barras(id_: str, titulo: str, grupos: dict[str, list[dict]], fonte: str) -> dict:
    """Uma série de vitória (%); o número de partidas vai no rótulo para não misturar unidades."""
    rotulos = list(grupos)
    return {"id": id_, "titulo": titulo, "tipo": "barra",
            "x": {"rotulo": "", "valores": [f"{r} ({len(grupos[r])})" for r in rotulos]},
            "series": [{"nome": "Vitória", "valores": [pct_vitoria(grupos[r]) for r in rotulos]}],
            "unidade": "%", "fonte": fonte, "nota": "entre parênteses, o número de partidas"}


def _mais_jogados(grupos: dict[str, list[dict]], n: int) -> dict[str, list[dict]]:
    return dict(sorted(grupos.items(), key=lambda item: -len(item[1]))[:n])


def achados_do_resumo(caminho: Path, fonte: str) -> list[dict]:
    linhas = [l.strip() for l in caminho.read_text(encoding="utf-8").splitlines()]
    uteis = [l for l in linhas if MARCADOR.match(l) and not (l.startswith("**") and l.endswith("**"))]
    return [{"texto": LIMPA.sub("", l).strip(), "fonte": fonte} for l in uteis]


def _destaques_de_heroi(linhas: list[dict], heroi: str, fonte: str) -> list[dict]:
    jogos = [l for l in linhas if l["heroi"] == heroi]
    return [destaque(f"{heroi} no mid · Partidas", len(jogos), "jogos", fonte),
            destaque(f"{heroi} no mid · Vitórias", pct_vitoria(jogos), "%", fonte)]


def leonardo() -> dict:
    fonte = "dota-leonardo/data/partidas.csv"
    todas = _csv(fontes.LEONARDO / "data" / "partidas.csv")
    mid = [l for l in todas if l["e_mid_inferido"] == "True"]
    ultimas = sorted(todas, key=lambda l: int(l["start_time_utc"]))[-20:]
    cronologica = sorted(todas, key=lambda l: int(l["start_time_utc"]))
    sessao = _grupos([l for l in todas if l["pos_sessao"] and int(l["pos_sessao"]) <= 7], lambda l: l["pos_sessao"])
    return {
        "id": "leonardo", "nome": "Leonardo", "tipo": "amigo", "time": None,
        "amostra": f"{len(todas)} partidas no OpenDota (set/2025 a out/2026)",
        "fontes": [fonte, "dota-leonardo/work/resumo-para-o-leonardo.md"],
        "destaques": [destaque("Partidas", len(todas), "jogos", fonte), destaque("Vitórias", pct_vitoria(todas), "%", fonte),
                      *_destaques_de_heroi(mid, "Invoker", fonte), *_destaques_de_heroi(mid, "Snapfire", fonte),
                      destaque("Vitórias nas últimas 20", sum(map(_venceu, ultimas)), "jogos", fonte)],
        "graficos": [
            _barras("vitoria_por_heroi_mid", "Vitória por herói no mid (10 mais jogados)",
                    _mais_jogados(_grupos(mid, lambda l: l["heroi"]), 10), fonte),
            _barras("vitoria_por_horario", "Vitória por faixa de horário",
                    dict(sorted(_grupos(todas, lambda l: l["faixa_2h"]).items())), fonte),
            _barras("vitoria_por_posicao_na_sessao", "Vitória pela posição da partida na sessão",
                    dict(sorted(sessao.items(), key=lambda item: int(item[0]))), fonte),
            {"id": "mmr_estimado", "titulo": "MMR estimado ao longo do tempo", "tipo": "linha",
             "x": {"rotulo": "data", "valores": [l["data"] for l in cronologica]},
             "series": [{"nome": "MMR estimado", "valores": [float(l["mmr_acumulado_est"]) for l in cronologica]}],
             "unidade": "MMR", "fonte": fonte, "nota": "estimado com +25 por vitória e -25 por derrota; a smurf não entra"},
        ],
        "achados": achados_do_resumo(fontes.LEONARDO / "work" / "resumo-para-o-leonardo.md",
                                     "dota-leonardo/work/resumo-para-o-leonardo.md"),
        "replays": [],
    }


def _faixa_de_morte(linha: dict) -> str:
    mortes = int(float(linha["mortes_antes_10"]))
    return "4+" if mortes >= 4 else str(mortes)


def _vitoria_por_faixa_de_morte(por_posicao: dict[str, list[dict]], fonte: str) -> dict:
    def serie(linhas: list[dict]) -> list[float | None]:
        grupos = _grupos([l for l in linhas if l["mortes_antes_10"]], _faixa_de_morte)
        return [pct_vitoria(grupos.get(f, [])) for f in FAIXAS_DE_MORTE]
    return {"id": "vitoria_por_mortes_antes_10", "titulo": "Vitória pelo número de mortes até os 10 min", "tipo": "barra",
            "x": {"rotulo": "mortes até os 10 min", "valores": list(FAIXAS_DE_MORTE)},
            "series": [{"nome": f"Pos {p}", "valores": serie(linhas)} for p, linhas in por_posicao.items()],
            "unidade": "%", "fonte": fonte, "nota": "Pos 4 e Pos 5 com certeza de posição alta ou média"}


def _destaques_de_posicao(posicao: str, linhas: list[dict], fonte: str) -> list[dict]:
    com_mortes = [l for l in linhas if l["mortes_antes_10"]]
    poucas = [l for l in com_mortes if float(l["mortes_antes_10"]) <= 1]
    muitas = [l for l in com_mortes if float(l["mortes_antes_10"]) >= 3]
    return [destaque(f"Pos {posicao} · Partidas", len(linhas), "jogos", fonte),
            destaque(f"Pos {posicao} · Vitórias", pct_vitoria(linhas), "%", fonte),
            destaque(f"Pos {posicao} · Vitórias com 0 ou 1 morte até os 10", pct_vitoria(poucas), "%", fonte),
            destaque(f"Pos {posicao} · Vitórias com 3 ou mais mortes até os 10", pct_vitoria(muitas), "%", fonte)]


def hane() -> dict:
    fonte = "dota-hane/data/partidas.csv (filtros de dota-hane/src/estatistica.py)"
    base = [l for l in _csv(fontes.HANE / "data" / "partidas.csv")
            if l["heroi_valido"] == "True" and l["abandonou"] != "True"]
    suporte = [l for l in base if l["certeza_posicao"] in CERTEZA_DO_RELATORIO]
    por_posicao = {p: [l for l in suporte if l["posicao"] == p] for p in ("4", "5")}
    return {
        "id": "hane", "nome": "Hane", "tipo": "amigo", "time": None,
        "amostra": f"{len(base)} partidas no OpenDota e 3 replays lidos segundo a segundo",
        "fontes": [fonte, "dota-hane/work/resumo-para-o-hane.md", "dota-hane/work/estatistica.md"],
        "destaques": [destaque("Partidas analisadas", len(base), "jogos", fonte),
                      *(d for p, linhas in por_posicao.items() for d in _destaques_de_posicao(p, linhas, fonte))],
        "graficos": [_vitoria_por_faixa_de_morte(por_posicao, fonte),
                     {"id": "vitoria_por_ano", "titulo": "Vitória por ano", "tipo": "barra",
                      "x": {"rotulo": "ano", "valores": sorted({l["ano"] for l in suporte})},
                      "series": [{"nome": f"Pos {p}", "valores": [pct_vitoria([l for l in linhas if l["ano"] == ano])
                                                                  for ano in sorted({l["ano"] for l in suporte})]}
                                 for p, linhas in por_posicao.items()],
                      "unidade": "%", "fonte": fonte, "nota": None}],
        "achados": achados_do_resumo(fontes.HANE / "work" / "resumo-para-o-hane.md", "dota-hane/work/resumo-para-o-hane.md"),
        "replays": [],
    }


def _comparacao(metrica: str, titulo: str, unidade: str, casas: int) -> dict:
    fonte = "dota-yuma/data/v2/herois_comparacao.csv"
    linhas = [l for l in _csv(fontes.YUMA / "data" / "v2" / "herois_comparacao.csv")
              if l["metrica"] == metrica and l["recorte"] == "7.40/7.41" and l["suficiente"] == "True"]
    linhas = sorted(linhas, key=lambda l: -int(l["n_yuma"]))[:12]
    return {"id": f"comparacao_{metrica}", "titulo": titulo, "tipo": "barra",
            "x": {"rotulo": "herói", "valores": [f"{l['heroi']} ({l['n_yuma']})" for l in linhas]},
            "series": [{"nome": "Yuma", "valores": [round(float(l["yuma"]), casas) for l in linhas]},
                       {"nome": "Pos1 pro no mesmo herói", "valores": [round(float(l["comp"]), casas) for l in linhas]}],
            "unidade": unidade, "fonte": fonte, "nota": "7.40 e 7.41; entre parênteses, os jogos do Yuma no herói"}


def yuma() -> dict:
    fonte_elo = "dota-yuma/data/v2/herois_elo.csv"
    elo = _csv(fontes.YUMA / "data" / "v2" / "herois_elo.csv")
    geral = next(l for l in elo if l["heroi"].startswith("(todos"))
    por_heroi = sorted((l for l in elo if not l["heroi"].startswith("(todos") and int(l["n"]) >= 10),
                       key=lambda l: -int(l["n"]))
    return {
        "id": "yuma", "nome": "Yuma", "tipo": "pro", "time": None,
        "amostra": "452 replays do Yuma contra 575 de 68 pos1 no mesmo herói (7.40 e 7.41)",
        "fontes": [fonte_elo, "dota-yuma/data/v2/herois_comparacao.csv", "dota-yuma/work/v2/resumo-yuma-v2.md"],
        "destaques": [destaque("Jogos com Elo", int(geral["n"]), "jogos", fonte_elo),
                      destaque("Vitórias", round(100 * float(geral["vitoria"]), 1), "%", fonte_elo),
                      destaque("Vitória esperada pelo Elo", round(100 * float(geral["esperado"]), 1), "%", fonte_elo),
                      destaque("Acima do esperado pelo Elo", round(100 * float(geral["acima"]), 1), "pp", fonte_elo)],
        "graficos": [_comparacao("lh_min", "Last hits por minuto no mesmo herói", "last hits por min", 1),
                     _comparacao("gpm", "GPM no mesmo herói", "ouro por min", 0),
                     {"id": "elo_por_heroi", "titulo": "Vitória acima do esperado pelo Elo, por herói", "tipo": "barra",
                      "x": {"rotulo": "herói", "valores": [f"{l['heroi']} ({l['n']})" for l in por_heroi]},
                      "series": [{"nome": "Acima do esperado", "valores": [round(100 * float(l["acima"]), 1) for l in por_heroi]}],
                      "unidade": "pp", "fonte": fonte_elo, "nota": "heróis com 10 ou mais jogos com Elo"}],
        "achados": achados_do_resumo(fontes.YUMA / "work" / "v2" / "resumo-yuma-v2.md", "dota-yuma/work/v2/resumo-yuma-v2.md"),
        "replays": [],
    }
