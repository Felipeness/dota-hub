"""Treina os coeficientes publicados do modelo de draft, com a mesma receita que venceu o backtest.

Grava content/modelo_draft.json e a cópia servida em app/public/data/. A tabela de heróis envelhece (no backtest,
congelar por 120 dias custou 1,6 milésimo de log-loss), então vale treinar de novo a cada patch.

    python export/modelo_draft/treinar.py --tier1 C:/caminho/dota-tier1
"""
import argparse
import datetime
import json
import sys
from pathlib import Path

import numpy as np

import backtest as bt
import dados as fonte

RAIZ = Path(__file__).resolve().parents[2]
DESTINOS = (RAIZ / "content" / "modelo_draft.json", RAIZ / "app" / "public" / "data" / "modelo_draft.json")
C_DA_TABELA = 0.03
MEIA_VIDA_PICK_JOGOS = 25
ALFA_PICK = 10.0


def treinar(L) -> dict:
    f = bt.estatisticas_por_linha(L)
    y = L.vitoria.astype(float)
    dia_final = int(L.dia.max()) + 1
    ajuste = L.dia >= dia_final - bt.DIAS_DE_AJUSTE
    treino = L.dia >= dia_final - bt.DIAS_DA_TABELA
    media = float(y.mean())
    _, a, k, _ = bt.melhor_eb(f, y, ajuste, media)
    vantagem = bt.logit(bt.eb(f, "", a, k, media)) - bt.logit(bt.base_do_jogador(f, "", a, media))
    extras = np.column_stack([vantagem, np.log1p(f["n_jh"])])
    X = bt.linhas_da_tabela(L, False)
    coefs, _ = bt.ajustar_tabela(X, extras, y, treino, L.dia, C_DA_TABELA)
    herois = np.unique(L.heroi[treino])
    picks = np.bincount(L.heroi[treino], minlength=bt.MAX_HEROI)
    return {
        "gerado_em": datetime.date.fromtimestamp(int(L.t.max())).isoformat(),
        "amostra": {"contas": int(len(set(L.conta))), "partidas": int(treino.sum())},
        "taxaMedia": round(media, 4), "forcaDaBase": a, "forcaDoHeroi": k,
        "pesoDaVantagem": round(float(coefs[0]), 4), "pesoDaExperiencia": round(float(coefs[1]), 4),
        "experienciaMedia": round(float(np.log1p(f["n_jh"][treino]).mean()), 4),
        "meiaVidaDoPickJogos": MEIA_VIDA_PICK_JOGOS, "alfaDoPick": ALFA_PICK,
        "forcaDoHeroiNoPatch": {str(h): round(float(coefs[2 + h]), 4) for h in herois},
        "parcelaDePicks": {str(h): round(float(picks[h] / picks.sum()), 5) for h in herois},
    }


def main() -> None:
    argumentos = argparse.ArgumentParser()
    argumentos.add_argument("--tier1", type=Path, required=True)
    raiz = argumentos.parse_args().tier1
    sys.path.insert(0, str(raiz / "tools"))
    import od

    L = fonte.carregar(od)
    modelo = treinar(bt.recorte(L, L.origem != "pro"))
    texto = json.dumps(modelo, ensure_ascii=False, separators=(",", ":"))
    for destino in DESTINOS:
        destino.write_text(texto, encoding="utf-8")
    print({chave: valor for chave, valor in modelo.items() if not isinstance(valor, dict)}, len(texto))


if __name__ == "__main__":
    main()
