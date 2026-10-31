"""Imprime em markdown o JSON de backtest.py, para colar no documento de design."""
import json
import sys


def ic(par, casas=2):
    return f"[{par[0]:+.{casas}f}, {par[1]:+.{casas}f}]"


def imprimir(segmento: dict) -> None:
    print(f"\n## {segmento['segmento']}: {segmento['contas']} contas, {segmento['linhas']} linhas; teste {segmento['linhas_de_teste']} linhas em {segmento['contas_de_teste']} contas, vitória {segmento['taxa_de_vitoria_teste']:.3f}\n")
    print("| modelo | log-loss | Brier | Δ log-loss vs constante (×1000) | IC95 | ECE | inclinação |\n|---|---|---|---|---|---|---|")
    for m in segmento["resultado"]:
        print(f"| {m['modelo']} | {m['logloss']:.4f} | {m['brier']:.4f} | {1000 * m['delta_vs_base']:+.2f} | {ic((1000 * m['ic_baixo'], 1000 * m['ic_alto']))} | {m['ece']:.4f} | {m['inclinacao']:.2f} |")
    print("\nParâmetros da última janela:", json.dumps(segmento["parametros"], ensure_ascii=False))
    print("\nComparações pareadas (×1000, negativo = a primeira perde menos):")
    for c in segmento["pareadas"]:
        print(f"- {c['a']} − {c['b']}: {1000 * c['delta']:+.2f} [{1000 * c['ic'][0]:+.2f}, {1000 * c['ic'][1]:+.2f}]")
    print("\nBeta-binomial contra constante por jogos no herói (×1000):")
    for faixa, v in segmento["por_jogos_no_heroi"].items():
        d = v["delta_vs_base"]
        print(f"- {faixa}: {v['linhas']} linhas, {1000 * d[0]:+.2f} [{1000 * d[1]:+.2f}, {1000 * d[2]:+.2f}]")
    print("\n| nota, dentro da conta | inclinação | IC95 | terço de cima − de baixo (pp) | IC95 | linhas |\n|---|---|---|---|---|---|")
    for nome, v in segmento["utilidade_vantagem"].items():
        print(f"| {nome} | {v['inclinacao']:.2f} | {ic(v['inclinacao_ic'])} | {v['terco_de_cima_menos_de_baixo_pp']:+.2f} | {ic(v['terco_ic_pp'])} | {v['linhas']} |")
    print("\nExperiência:", json.dumps(segmento["experiencia"]))
    print("Por medalha:", json.dumps(segmento["por_medalha"]))
    print("\nSinal do IC95:", json.dumps(segmento["sinal"]))
    print("Cobertura:", json.dumps(segmento["cobertura"]))
    picks = segmento["picks_e_bans"]
    print(f"\nPick: meia-vida {picks['melhor_mv_jogos']} jogos, alfa {picks['melhor_alfa']}, {picks['linhas']} linhas\n")
    print("| ranking | log-loss | top1 | top3 | top5 | top10 | MRR |\n|---|---|---|---|---|---|---|")
    for nome, r in picks["rank"].items():
        ll = f"{r['ll']['media']:.3f}" if "ll" in r else "n/a"
        print(f"| {nome} | {ll} | " + " | ".join(f"{100 * r[f'top{k}']['media']:.1f}%" for k in (1, 3, 5, 10)) + f" | {r['rr']['media']:.3f} |")
    print("\n| lista de 3 bans | acerto do pick | IC95 | excesso capturado (pp por partida) | IC95 | p×valor menos esta lista | IC95 |\n|---|---|---|---|---|---|---|")
    for nome, b in picks["bans"].items():
        print(f"| {nome} | {100 * b['acerto']['media']:.1f}% | [{100 * b['acerto']['ic'][0]:.1f}, {100 * b['acerto']['ic'][1]:.1f}] | {b['captura_pp']['media']:+.3f} | {ic(b['captura_pp']['ic'], 3)} | {b['ganho_do_p_vezes_valor_pp']['media']:+.3f} | {ic(b['ganho_do_p_vezes_valor_pp']['ic'], 3)} |")


def imprimir_times(segmento: dict) -> None:
    times = segmento["times_completos"]
    print(f"\nPartidas com as 10 contas: {times['partidas']} (treino {times['treino']}, teste {times['teste']})\n")
    print("| modelo | log-loss | Δ vs constante (×1000) | EP | Brier | acerto | ECE | inclinação | coefs |\n|---|---|---|---|---|---|---|---|---|")
    for nome, m in times["modelos"].items():
        print(f"| {nome} | {m['logloss']:.4f} | {1000 * m['delta_vs_constante']:+.2f} | {1000 * m['delta_ep']:.2f} | {m['brier']:.4f} | {100 * m['acerto']:.1f}% | {m['ece']:.3f} | {m['inclinacao']:.2f} | {m['coefs']} |")


if __name__ == "__main__":
    for segmento in json.loads(open(sys.argv[1], encoding="utf-8").read()):
        imprimir(segmento)
        imprimir_times(segmento)
