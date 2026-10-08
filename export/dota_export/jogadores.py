"""Painéis de jogador num formato só (destaques, gráficos, achados) e os times formados por eles."""
import json
import re
import unicodedata
from collections import defaultdict
from functools import cache

from . import fontes

FONTE_COMPARE = "dota-imortal/work/compare_pros.json"
FONTE_PADROES = "dota-imortal/work/minuto/padroes_pro.json e padroes_pro_extra.json"
AMOSTRAS = {"felipe_solo": "Felipe solo", "felipe_party": "Felipe party",
            "satanic": "Satanic", "yatoro": "Yatoro", "watson": "Watson"}
PROS_COM_PAINEL_PROPRIO = frozenset({"satanic", "yatoro", "watson"})
CURVAS = {"lh_t": ("Last hits acumulados até cada minuto", "last hits"),
          "gold_t": ("Ouro ganho até cada minuto", "ouro"),
          "xp_t": ("XP ganha até cada minuto", "XP")}
DESTAQUES_DA_TABELA = (("lh10", "Last hits aos 10 min", "last hits"), ("gpm", "GPM", "ouro por min"),
                       ("mortes", "Mortes por jogo", "mortes"))


def slug(texto: str) -> str:
    ascii_ = unicodedata.normalize("NFKD", texto).encode("ascii", "ignore").decode().lower()
    return re.sub(r"[^a-z0-9]+", "-", ascii_).strip("-")


def destaque(rotulo: str, valor: float, unidade: str, fonte: str) -> dict:
    return {"rotulo": rotulo, "valor": valor, "unidade": unidade, "fonte": fonte}


@cache
def _compare() -> dict:
    return json.loads(fontes.COMPARE_PROS.read_text(encoding="utf-8"))


@cache
def jogadores_de_replay() -> tuple[dict, ...]:
    return tuple(j for caminho in fontes.PADROES_PRO
                 for j in json.loads(caminho.read_text(encoding="utf-8"))["jogadores"])


def _arredondar(valores: list) -> list:
    return [None if v is None else round(v, 1) for v in valores]


def _media(metrica: str, amostra: str) -> float:
    linha = next(t for t in _compare()["tabela"] if t["id"] == metrica)
    return round(linha[amostra]["media"], 1)


def _destaques(amostra: str) -> list[dict]:
    dados, nome = _compare()["amostras"][amostra], AMOSTRAS[amostra]
    return [destaque(f"{nome} · Partidas", dados["n"], "jogos", dados["criterio"]),
            destaque(f"{nome} · Vitórias", round(100 * dados["vitorias"] / dados["n"], 1), "%", FONTE_COMPARE),
            *(destaque(f"{nome} · {rotulo}", _media(metrica, amostra), unidade, FONTE_COMPARE)
              for metrica, rotulo, unidade in DESTAQUES_DA_TABELA)]


def _curvas(amostras: list[str]) -> list[dict]:
    curvas = _compare()["curvas"]
    return [{"id": chave, "titulo": titulo, "tipo": "linha",
             "x": {"rotulo": "minuto", "valores": curvas[chave]["minutos"]},
             "series": [{"nome": AMOSTRAS[a], "valores": _arredondar(curvas[chave][a]["media"])} for a in amostras],
             "unidade": unidade, "fonte": FONTE_COMPARE, "nota": "média de cada amostra"}
            for chave, (titulo, unidade) in CURVAS.items()]


def _mortes_por_fase(amostras: list[str]) -> dict:
    mortes = _compare()["mortes_por_fase"]
    return {"id": "mortes_por_fase", "titulo": "Mortes por 10 min em cada fase", "tipo": "barra",
            "x": {"rotulo": "fase", "valores": mortes["fases"]},
            "series": [{"nome": AMOSTRAS[a], "valores": [round(f["mortes_por_10min_na_fase"], 2) for f in mortes[a]["por_fase"]]}
                       for a in amostras],
            "unidade": "mortes por 10 min", "fonte": FONTE_COMPARE, "nota": None}


def _achados_de_lista(chave: str, prefixo: str) -> list[dict]:
    return [{"texto": f"{prefixo}: {item['tema']}. {item['numeros']}", "fonte": FONTE_COMPARE}
            for item in _compare()["listas"][chave]]


def replays_do_jogador(nome: str) -> list[str]:
    alvo = slug(nome)
    return sorted({str(j["match_id"]) for j in jogadores_de_replay() if alvo in slug(j["jogador"])})


def felipe() -> dict:
    amostras = ["felipe_solo", "felipe_party", "satanic", "yatoro", "watson"]
    return {"id": "felipe", "nome": "Felipe", "tipo": "amigo", "time": None,
            "amostra": "Felipe de pos1 em ranqueada (LH aos 10 de 30 ou mais), solo e party, contra Satanic, Yatoro e Watson",
            "fontes": [FONTE_COMPARE],
            "destaques": _destaques("felipe_solo") + _destaques("felipe_party"),
            "graficos": [*_curvas(amostras), _mortes_por_fase(amostras)],
            "achados": _achados_de_lista("felipe_faz_pior", "Faz pior")
                       + _achados_de_lista("felipe_faz_melhor_ou_igual", "Faz melhor ou igual"),
            "replays": []}


def pro_compare(chave: str) -> dict:
    estilo = _compare()["estilos"][chave]
    comparadas = ["felipe_solo", chave]
    return {"id": chave, "nome": AMOSTRAS[chave], "tipo": "pro", "time": estilo["time"], "amostra": estilo["amostra"],
            "fontes": [FONTE_COMPARE, FONTE_PADROES],
            "destaques": _destaques(chave),
            "graficos": [*_curvas(comparadas), _mortes_por_fase(comparadas)],
            "achados": [{"texto": f"{p['ponto']}. {p['numeros']}", "fonte": FONTE_COMPARE} for p in estilo["pontos"]]
                       + [{"texto": f"Para copiar: {c}", "fonte": FONTE_COMPARE} for c in estilo["copiar"]],
            "replays": replays_do_jogador(AMOSTRAS[chave])}


def _painel_de_replay(partidas: list[dict]) -> dict:
    nome = partidas[0]["jogador"]
    rotulos = [f"{p['data']} {p['heroi']}" for p in partidas]
    return {"id": slug(nome), "nome": nome, "tipo": "pro",
            "time": next((p["time"].strip() for p in partidas if p.get("time")), None),
            "amostra": f"{len(partidas)} {'replay' if len(partidas) == 1 else 'replays'} de liga "
                       f"{'lido' if len(partidas) == 1 else 'lidos'} segundo a segundo",
            "fontes": [FONTE_PADROES],
            "destaques": [destaque("Replays lidos", len(partidas), "jogos", FONTE_PADROES),
                          destaque("Vitórias", sum(p["resultado"] == "vitória" for p in partidas), "vitórias", FONTE_PADROES)],
            "graficos": [{"id": "farm_por_replay", "titulo": "Last hits de lane e de neutro por replay", "tipo": "barra",
                          "x": {"rotulo": "partida", "valores": rotulos},
                          "series": [{"nome": "Lane", "valores": [p["lh_lane"] for p in partidas]},
                                     {"nome": "Neutros", "valores": [p["lh_neutro"] for p in partidas]}],
                          "unidade": "last hits", "fonte": FONTE_PADROES, "nota": "minutos 4 a 30 de cada replay"}],
            "achados": [{"texto": f"Amostra pequena ({len(partidas)} "
                                   f"{'replay' if len(partidas) == 1 else 'replays'}): dá para ver os números, "
                                   "mas não para tirar um padrão confiável do jogo dele.", "fonte": FONTE_PADROES}],
            "replays": sorted({str(p["match_id"]) for p in partidas})}


def pros_de_replay() -> list[dict]:
    por_nome: dict[str, list[dict]] = defaultdict(list)
    for jogador in jogadores_de_replay():
        por_nome[slug(jogador["jogador"])].append(jogador)
    return [_painel_de_replay(partidas) for nome, partidas in sorted(por_nome.items())
            if nome not in PROS_COM_PAINEL_PROPRIO]


def indice(paineis: list[dict]) -> list[dict]:
    return [{"id": p["id"], "nome": p["nome"], "tipo": p["tipo"], "time": p["time"], "amostra": p["amostra"]}
            for p in paineis]


def times(paineis: list[dict]) -> list[dict]:
    time_atual = {p["id"]: p["time"].strip() for p in paineis if p["time"]}
    membros: dict[str, set[str]] = defaultdict(set)
    for id_, nome in time_atual.items():
        membros[nome].add(id_)
    for chave, lista in _compare()["times_nas_partidas"].items():
        for nome, _ in lista:
            nome = nome.strip()
            if chave in time_atual and nome != time_atual[chave]:
                continue  # time antigo do jogador: o painel dele já mostra o time atual
            membros[nome].add(chave)
    return [{"id": slug(nome), "nome": nome, "jogadores": sorted(ids), "fonte": f"{FONTE_COMPARE}; {FONTE_PADROES}"}
            for nome, ids in sorted(membros.items())]
