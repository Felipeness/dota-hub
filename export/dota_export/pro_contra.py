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


def agregar(partidas: list[dict], relevantes: frozenset[str], nome_interno: dict[int, str]) -> dict[str, dict]:
    """Inimigo (nome interno) -> jogos, vitórias e, por item, em quantas partidas o pro fechou e a mediana do minuto.
    Partida sem purchase_log (não parseada) fica de fora: não dá pra saber o que foi comprado."""
    jogos: dict[str, int] = defaultdict(int)
    vitorias: dict[str, int] = defaultdict(int)
    minutos: dict[str, dict[str, list[float]]] = defaultdict(lambda: defaultdict(list))
    for partida in partidas:
        if not partida.get("purchase_log"):
            continue
        compras = primeiras_compras(partida["purchase_log"], relevantes)
        for inimigo in {nome_interno[i] for i in partida.get("inimigos") or [] if i in nome_interno}:
            jogos[inimigo] += 1
            vitorias[inimigo] += bool(partida["win"])
            for slug, minuto in compras.items():
                minutos[inimigo][slug].append(minuto)
    return {inimigo: {"jogos": n, "vitorias": vitorias[inimigo], "itens": _itens(minutos[inimigo])}
            for inimigo, n in sorted(jogos.items()) if n >= JOGOS_MINIMOS_CONTRA}


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
    nome_interno = {h["id"]: h["name"].removeprefix("npc_dota_hero_") for h in herois}
    desde = int(time.time()) - JANELA_DIAS * 86400
    DESTINO.mkdir(parents=True, exist_ok=True)
    for hero_id, interno in sorted(nome_interno.items()):
        if escolhidos and interno not in escolhidos:
            continue
        print(f"{interno} ({hero_id})", flush=True)
        dados = {"hero_id": hero_id, "fonte": FONTE, "contra": agregar(partidas(hero_id, desde), relevantes, nome_interno)}
        (DESTINO / f"{interno}.json").write_text(json.dumps(dados, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")


if __name__ == "__main__":
    main(sys.argv[1:])
