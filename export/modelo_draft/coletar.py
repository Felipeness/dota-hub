"""Coleta a amostra do backtest do modelo de draft por jogador (docs/design/modelo-draft-10-ids.md).

Uma chamada por conta em /players/{id}/matches, sempre em série pelo helper com cache e pacing de
dota-tier1/tools/od.py. Duas origens: contas de ranqueada por faixa de medalha, tiradas de partidas
públicas já encerradas, e os pros do Atlas Tier 1. Rodar de novo só busca o que falta no cache.

    python export/modelo_draft/coletar.py --tier1 C:/caminho/dota-tier1
"""
import argparse
import csv
import json
import sys
from pathlib import Path

ARQUIVO_AMOSTRA = Path(__file__).resolve().parents[1] / ".cache" / "modelo_draft" / "amostra.json"
FAIXAS_DE_MEDALHA = (30, 40, 50, 60, 70, 80)
CONTAS_POR_FAIXA = 40
MAX_PARTIDAS_POR_FAIXA = 14
PARTIDAS_DE_HISTORICO = 1000
# Partidas de ~3 dias antes da coleta: as mais recentes de /publicMatches ainda vêm sem heróis nem duração.
MATCH_ID_ENCERRADO = 9_065_000_000
CAMPOS = ("hero_id", "start_time", "lobby_type", "game_mode", "lane_role", "party_size", "leaver_status", "heroes")


def caminho_do_historico(conta: int) -> str:
    campos = "&".join(f"project={campo}" for campo in CAMPOS)
    return f"players/{conta}/matches?limit={PARTIDAS_DE_HISTORICO}&significant=0&{campos}"


def contas_da_faixa(od, faixa: int) -> dict[int, int]:
    """conta -> rank_tier de quem jogou partidas públicas encerradas da faixa, até CONTAS_POR_FAIXA."""
    publicas = od.get("od", f"publicMatches?min_rank={faixa}&max_rank={faixa + 9}&less_than_match_id={MATCH_ID_ENCERRADO}") or []
    contas: dict[int, int] = {}
    for publica in publicas[:MAX_PARTIDAS_POR_FAIXA]:
        partida = od.get("od", f"matches/{publica['match_id']}") or {}
        for jogador in partida.get("players", []):
            conta, medalha = jogador.get("account_id"), jogador.get("rank_tier")
            if conta and medalha:
                contas[conta] = medalha
        if len(contas) >= CONTAS_POR_FAIXA:
            break
    return dict(list(contas.items())[:CONTAS_POR_FAIXA])


def contas_tier1(raiz: Path) -> list[int]:
    with (raiz / "data" / "jogadores_partida.csv").open(encoding="utf-8") as arquivo:
        return sorted({int(linha["account_id"]) for linha in csv.DictReader(arquivo) if linha["account_id"]})


def montar_amostra(od, raiz: Path) -> dict[str, dict]:
    if ARQUIVO_AMOSTRA.exists():
        return json.loads(ARQUIVO_AMOSTRA.read_text(encoding="utf-8"))
    amostra: dict[str, dict] = {str(conta): {"origem": "pro", "medalha": None} for conta in contas_tier1(raiz)}
    for faixa in FAIXAS_DE_MEDALHA:
        for conta, medalha in contas_da_faixa(od, faixa).items():
            amostra.setdefault(str(conta), {"origem": f"ranqueada_{faixa}", "medalha": medalha})
    ARQUIVO_AMOSTRA.parent.mkdir(parents=True, exist_ok=True)
    ARQUIVO_AMOSTRA.write_text(json.dumps(amostra), encoding="utf-8")
    return amostra


def main() -> None:
    argumentos = argparse.ArgumentParser()
    argumentos.add_argument("--tier1", type=Path, required=True)
    raiz = argumentos.parse_args().tier1
    sys.path.insert(0, str(raiz / "tools"))
    import od

    amostra = montar_amostra(od, raiz)
    print(f"{len(amostra)} contas na amostra", flush=True)
    for i, conta in enumerate(amostra, start=1):
        try:
            historico = od.get("od", caminho_do_historico(int(conta))) or []
        except od.QuotaExhausted as causa:
            print(f"cota do dia esgotada em {i}/{len(amostra)}: {causa}", flush=True)
            return
        print(f"{i}/{len(amostra)} {conta} {amostra[conta]['origem']}: {len(historico)} partidas", flush=True)


if __name__ == "__main__":
    main()
