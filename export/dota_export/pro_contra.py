"""Itens que os pros fecham com cada herói CONTRA cada herói inimigo: content/pro_contra/<nome interno>.json.

    python -m dota_export.pro_contra            # busca o que falta no cache e regrava content/pro_contra/
    python -m dota_export.pro_contra medusa     # só os heróis citados

Uma consulta ao OpenDota explorer por herói (partidas de liga dos últimos 18 meses): cada linha é uma partida do
herói com o resultado, os 5 inimigos e o purchase_log. A resposta crua fica em export/.cache/pro_contra/<id>.json.gz
(fora do git) pra que rodar de novo não busque de novo; o agregado, pequeno, é o que vai pro content/.
"""
import gzip
import json
import statistics
import sys
import time
import urllib.parse
import urllib.request
from collections import defaultdict
from pathlib import Path

from . import fontes
from .confrontos import AVULSOS, CUSTO_DE_ITEM_FECHADO, CUSTO_RELEVANTE

RAIZ = Path(__file__).resolve().parents[2]
CACHE = RAIZ / "export" / ".cache" / "pro_contra"
DESTINO = RAIZ / "content" / "pro_contra"
EXPLORER = "https://api.opendota.com/api/explorer"
FONTE = "OpenDota explorer, partidas de liga (leagueid > 0) dos últimos 18 meses, purchase_log do herói por inimigo"
JANELA_DIAS = 548
TEMPO_MAXIMO_S = 180
TENTATIVAS = 4
PAUSA_ENTRE_CONSULTAS_S = 3
JOGOS_MINIMOS_CONTRA = 5
# Builds: partidas agrupadas pelos primeiros itens (sem ordem), que é onde a build de um herói costuma se dividir
# (Butterfly vs Mjollnir como 3º item de carry); dentro do grupo a sequência sai do minuto mediano de cada item.
# Suporte varia muito mais cedo: com 3 itens o maior grupo fica com 7% das partidas, então cai para 2.
ITENS_NA_CHAVE_DA_BUILD = (3, 2)
FRACAO_DO_MAIOR_GRUPO = 0.25
BUILDS_MAXIMAS = 3
FRACAO_MINIMA_DA_BUILD = 0.05
JOGOS_MINIMOS_DA_BUILD = 5
FRACAO_NA_SEQUENCIA = 0.4
FRACAO_DE_OPCAO = 0.15
OPCOES_MAXIMAS = 3
ITENS_MAXIMOS_NA_SEQUENCIA = 8
# Ordem entre dois itens só é comparada quando os dois são escolha comum dos pros contra o inimigo.
FRACAO_PARA_ORDEM = 0.3

SQL = """SELECT pm.match_id, (pm.player_slot < 128) = m.radiant_win AS win,
(SELECT array_agg(e.hero_id) FROM player_matches e
 WHERE e.match_id = pm.match_id AND (e.player_slot < 128) <> (pm.player_slot < 128)) AS inimigos,
pm.purchase_log
FROM player_matches pm JOIN matches m ON m.match_id = pm.match_id
WHERE pm.hero_id = {hero_id} AND m.start_time >= {desde} AND m.leagueid > 0"""


def item_relevante(slug: str, item: dict) -> bool:
    """Item fechado de 1000+ de ouro que não é consumível: o que entra numa build e dá pra comparar com pro."""
    custo = item.get("cost") or 0
    consumivel = "consumable" in (item.get("qual") or "")
    fechado = bool(item.get("components")) or slug in AVULSOS or (custo >= CUSTO_DE_ITEM_FECHADO and item.get("qual") != "secret_shop")
    return fechado and not consumivel and custo >= CUSTO_RELEVANTE


def primeiras_compras(purchase_log: list[dict] | None, relevantes: frozenset[str]) -> dict[str, float]:
    """slug -> minuto da primeira compra, só dos itens relevantes."""
    compras: dict[str, float] = {}
    for compra in purchase_log or []:
        if compra["key"] in relevantes and compra["key"] not in compras:
            compras[compra["key"]] = compra["time"] / 60
    return compras


def build_da_partida(compras: dict[str, float], componentes: dict[str, frozenset[str]]) -> list[str]:
    """Itens na ordem de compra, sem o componente que virou outro item da mesma partida (Yasha que virou Manta) e
    sem receita: é a build que o jogador enxerga no inventário."""
    usados = {c for slug in compras for c in componentes.get(slug, frozenset())}
    return [slug for slug, _ in sorted(compras.items(), key=lambda par: par[1])
            if slug not in usados and not slug.startswith("recipe_")]


def agregar(partidas: list[dict], relevantes: frozenset[str], nome_interno: dict[int, str],
            componentes: dict[str, frozenset[str]] | None = None) -> dict[str, dict]:
    """Inimigo (nome interno) -> jogos, vitórias, por item em quantas partidas o pro fechou e a mediana do minuto, as
    builds mais comuns e a ordem entre os itens comuns. Partida sem purchase_log (não parseada) fica de fora: não
    dá pra saber o que foi comprado."""
    por_inimigo: dict[str, list[tuple[dict[str, float], list[str], bool]]] = defaultdict(list)
    for partida in partidas:
        if not partida.get("purchase_log"):
            continue
        compras = primeiras_compras(partida["purchase_log"], relevantes)
        jogada = (compras, build_da_partida(compras, componentes or {}), bool(partida["win"]))
        for inimigo in {nome_interno[i] for i in partida.get("inimigos") or [] if i in nome_interno}:
            por_inimigo[inimigo].append(jogada)
    return {inimigo: _contra(jogadas) for inimigo, jogadas in sorted(por_inimigo.items()) if len(jogadas) >= JOGOS_MINIMOS_CONTRA}


def _contra(jogadas: list[tuple[dict[str, float], list[str], bool]]) -> dict:
    minutos: dict[str, list[float]] = defaultdict(list)
    for compras, _, _ in jogadas:
        for slug, minuto in compras.items():
            minutos[slug].append(minuto)
    builds = [build for _, build, _ in jogadas]
    return {"jogos": len(jogadas), "vitorias": sum(win for _, _, win in jogadas), "itens": _itens(minutos),
            "builds": builds_comuns(jogadas), "ordem": ordem_dos_itens(builds, len(jogadas))}


def _grupos(jogadas: list[tuple[dict[str, float], list[str], bool]], itens_na_chave: int):
    grupos: dict[frozenset[str], list[tuple[dict[str, float], list[str], bool]]] = defaultdict(list)
    for jogada in jogadas:
        if len(jogada[1]) >= itens_na_chave:
            grupos[frozenset(jogada[1][:itens_na_chave])].append(jogada)
    return sorted(grupos.items(), key=lambda par: (-len(par[1]), sorted(par[0])))


def builds_comuns(jogadas: list[tuple[dict[str, float], list[str], bool]]) -> list[dict]:
    """Até 3 builds: partidas com os mesmos 3 primeiros itens (em qualquer ordem), ou 2 quando com 3 nenhum grupo junta
    25% das partidas. Cada build lista a chave do grupo, em ordem de minuto mediano os itens que aparecem em 40%+ das
    partidas dela (sequência) e os de 15-40% (opções situacionais)."""
    ordenados = []
    for itens_na_chave in ITENS_NA_CHAVE_DA_BUILD:
        ordenados = _grupos(jogadas, itens_na_chave)
        if ordenados and len(ordenados[0][1]) >= FRACAO_DO_MAIOR_GRUPO * len(jogadas):
            break
    minimo = max(JOGOS_MINIMOS_DA_BUILD, FRACAO_MINIMA_DA_BUILD * len(jogadas))
    return [{"chave": sorted(chave), **_build(grupo)} for chave, grupo in ordenados[:BUILDS_MAXIMAS] if len(grupo) >= minimo]


def _build(grupo: list[tuple[dict[str, float], list[str], bool]]) -> dict:
    minutos: dict[str, list[float]] = defaultdict(list)
    for compras, build, _ in grupo:
        for slug in build:
            minutos[slug].append(compras[slug])
    itens = sorted(({"chave": slug, "n": len(ms), "mediana": round(statistics.median(ms), 1)} for slug, ms in minutos.items()),
                   key=lambda i: (i["mediana"], i["chave"]))
    sequencia = [i for i in itens if i["n"] >= FRACAO_NA_SEQUENCIA * len(grupo)][:ITENS_MAXIMOS_NA_SEQUENCIA]
    opcoes = sorted((i for i in itens if FRACAO_DE_OPCAO * len(grupo) <= i["n"] < FRACAO_NA_SEQUENCIA * len(grupo)),
                    key=lambda i: (-i["n"], i["chave"]))[:OPCOES_MAXIMAS]
    return {"jogos": len(grupo), "vitorias": sum(win for _, _, win in grupo), "sequencia": sequencia,
            "opcoes": sorted(opcoes, key=lambda i: (i["mediana"], i["chave"]))}


def ordem_dos_itens(builds: list[list[str]], jogos: int) -> list[dict]:
    """Para cada par de itens que os pros fazem em 30%+ das partidas: em quantas partidas fizeram os dois e em quantas
    o primeiro (`a`) veio antes. `a` é o que vem antes na maioria; empate fica na ordem alfabética."""
    contagem: dict[str, int] = defaultdict(int)
    for build in builds:
        for slug in build:
            contagem[slug] += 1
    comuns = sorted(slug for slug, n in contagem.items() if n >= FRACAO_PARA_ORDEM * jogos)
    pares = []
    for indice, x in enumerate(comuns):
        for y in comuns[indice + 1:]:
            com_os_dois = [b for b in builds if x in b and y in b]
            if not com_os_dois:
                continue
            x_antes = sum(b.index(x) < b.index(y) for b in com_os_dois)
            a, b, a_antes = (x, y, x_antes) if 2 * x_antes >= len(com_os_dois) else (y, x, len(com_os_dois) - x_antes)
            pares.append({"a": a, "b": b, "a_antes": a_antes, "ambos": len(com_os_dois)})
    return pares


def _itens(por_item: dict[str, list[float]]) -> list[dict]:
    return sorted(({"chave": slug, "n": len(ms), "mediana": round(statistics.median(ms), 1)} for slug, ms in por_item.items()),
                  key=lambda i: (-i["n"], i["chave"]))


def _consultar(sql: str) -> list[dict]:
    url = f"{EXPLORER}?sql={urllib.parse.quote(sql)}"
    # Sem User-Agent o Cloudflare do OpenDota devolve 403 pro urllib.
    pedido = urllib.request.Request(url, headers={"User-Agent": "dota-hub-export"})
    ultimo_erro: Exception | None = None
    for tentativa in range(TENTATIVAS):
        try:
            with urllib.request.urlopen(pedido, timeout=TEMPO_MAXIMO_S) as resposta:
                corpo = json.load(resposta)
            if corpo.get("err"):
                raise RuntimeError(str(corpo["err"])[:200])
            return corpo["rows"]
        except (OSError, RuntimeError, ValueError) as erro:
            ultimo_erro = erro
            print(f"   tentativa {tentativa + 1}: {erro}", file=sys.stderr)
            time.sleep(30 * (tentativa + 1))
    raise RuntimeError(f"explorer: {ultimo_erro}")


def partidas(hero_id: int, desde: int) -> list[dict]:
    """Linhas cruas do explorer pro herói, do cache quando já buscadas."""
    arquivo = CACHE / f"{hero_id}.json.gz"
    if arquivo.exists():
        return json.loads(gzip.decompress(arquivo.read_bytes()))
    linhas = _consultar(SQL.format(hero_id=hero_id, desde=desde))
    CACHE.mkdir(parents=True, exist_ok=True)
    arquivo.write_bytes(gzip.compress(json.dumps(linhas, separators=(",", ":")).encode("utf-8")))
    time.sleep(PAUSA_ENTRE_CONSULTAS_S)
    return linhas


def main(escolhidos: list[str]) -> None:
    herois = json.loads(fontes.HEROIS_OPENDOTA.read_text(encoding="utf-8"))
    itens = json.loads(fontes.ITENS.read_text(encoding="utf-8"))
    relevantes = frozenset(slug for slug, item in itens.items() if item_relevante(slug, item))
    componentes = {slug: frozenset(item.get("components") or []) for slug, item in itens.items()}
    nome_interno = {h["id"]: h["name"].removeprefix("npc_dota_hero_") for h in herois}
    desde = int(time.time()) - JANELA_DIAS * 86400
    DESTINO.mkdir(parents=True, exist_ok=True)
    for hero_id, interno in sorted(nome_interno.items()):
        if escolhidos and interno not in escolhidos:
            continue
        print(f"{interno} ({hero_id})", flush=True)
        dados = {"hero_id": hero_id, "fonte": FONTE, "contra": agregar(partidas(hero_id, desde), relevantes, nome_interno, componentes)}
        (DESTINO / f"{interno}.json").write_text(json.dumps(dados, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")


if __name__ == "__main__":
    main(sys.argv[1:])
