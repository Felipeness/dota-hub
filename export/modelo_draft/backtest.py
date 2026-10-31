"""Backtest do modelo de draft por jogador: compara previsão de resultado, ranking de heróis e previsão de pick.

Tudo é walk-forward: a linha de uma partida só enxerga partidas anteriores daquela conta. Os hiperparâmetros e
coeficientes de cada janela de teste saem só do que veio antes da origem da janela (rolling origin), e os
intervalos vêm de bootstrap por conta, porque partidas da mesma conta não são independentes.

    python export/modelo_draft/backtest.py --tier1 C:/caminho/dota-tier1
"""
import argparse
import json
import sys
from collections import deque
from dataclasses import dataclass
from pathlib import Path

import numpy as np
from scipy import sparse
from sklearn.linear_model import LogisticRegression

import dados as fonte

MAX_HEROI = fonte.MAX_HEROI
JANELA_DIAS = 15
JANELAS = 8
DIAS_DE_AJUSTE = 180
BOOTSTRAPS = 2000
EPS = 1e-6
MEIAS_VIDAS_DIAS = (float("inf"), 365.0, 180.0, 90.0)
HISTORICOS_CURTOS = (100, 300)
FORCA_DA_BASE = (20, 50, 100, 200, 500, 1000, 2000)
FORCA_DO_HEROI = (5, 10, 20, 40, 80, 160, 320, 640, 1280, 5000)
CS_DA_HIERARQUICA = (0.01, 0.03, 0.1, 0.3, 1.0)
CS_DA_TABELA = (0.003, 0.01, 0.03, 0.1)
DIAS_DA_TABELA = 365
MEIA_VIDA_DA_TABELA = 120
JANELA_DA_META_DIAS = 30
PRIOR_DA_META = 100
FORCA_DO_PAR = 200
MEIAS_VIDAS_PICK_JOGOS = (10, 25, 50, 100, 200, float("inf"))
ALFAS_PICK = (0.5, 1.0, 2.0, 5.0, 10.0, 20.0, 40.0)
TOP_PICK = (1, 3, 5, 10)
BANS_NA_LISTA = 3
JOGOS_MINIMOS_PARA_RANKING = 5
JOGOS_MINIMOS_NA_COBERTURA = 8
MINIMO_DE_PARTIDAS_COMPLETAS = 100
SEMENTE = 20261031


def logit(p):
    p = np.clip(p, EPS, 1 - EPS)
    return np.log(p / (1 - p))


def expit(x):
    return 1 / (1 + np.exp(-x))


@dataclass(frozen=True)
class Janela:
    inicio: int
    fim: int


def janelas_de_teste(dia_final: int) -> list[Janela]:
    fins = [dia_final - JANELA_DIAS * i for i in range(JANELAS)]
    return [Janela(fim - JANELA_DIAS, fim) for fim in reversed(fins)]


def estatisticas_por_linha(L) -> dict[str, np.ndarray]:
    """Contagens que cada linha enxergava antes de a partida acontecer, por conta, no modo walk-forward."""
    total = len(L)
    saida = {"n_j": np.zeros(total), "v_j": np.zeros(total), "n_jh": np.zeros(total), "v_jh": np.zeros(total), "dias_sem": np.full(total, 1e4)}
    for mv in MEIAS_VIDAS_DIAS[1:]:
        for chave in ("n_j", "v_j", "n_jh", "v_jh"):
            saida[f"{chave}_{mv:.0f}"] = np.zeros(total)
    for k in HISTORICOS_CURTOS:
        saida[f"n_jh_u{k}"] = np.zeros(total)
        saida[f"v_jh_u{k}"] = np.zeros(total)
        saida[f"n_j_u{k}"] = np.zeros(total)
        saida[f"v_j_u{k}"] = np.zeros(total)
    meias_vidas = MEIAS_VIDAS_DIAS[1:]
    fronteiras = np.flatnonzero(np.diff(L.conta)) + 1
    for inicio, fim in zip(np.r_[0, fronteiras], np.r_[fronteiras, total]):
        _preencher_conta(L, inicio, fim, saida, meias_vidas)
    return saida


def _preencher_conta(L, inicio, fim, saida, meias_vidas):
    n_j = v_j = 0.0
    por_heroi: dict[int, list[float]] = {}
    ultimo_dia: dict[int, int] = {}
    dec_j = {mv: [0.0, 0.0, 0.0] for mv in meias_vidas}
    dec_h: dict[tuple[float, int], list[float]] = {}
    recentes = {k: deque() for k in HISTORICOS_CURTOS}
    cont_h = {k: {} for k in HISTORICOS_CURTOS}
    cont_j = {k: [0, 0] for k in HISTORICOS_CURTOS}
    for i in range(inicio, fim):
        h, venceu, dia = int(L.heroi[i]), int(L.vitoria[i]), int(L.dia[i])
        n_h, v_h = por_heroi.get(h, (0.0, 0.0))
        saida["n_j"][i], saida["v_j"][i], saida["n_jh"][i], saida["v_jh"][i] = n_j, v_j, n_h, v_h
        if h in ultimo_dia:
            saida["dias_sem"][i] = dia - ultimo_dia[h]
        for mv in meias_vidas:
            estado_j = dec_j[mv]
            fator_j = 2 ** (-(dia - estado_j[2]) / mv)
            nd_j, vd_j = estado_j[0] * fator_j, estado_j[1] * fator_j
            estado_h = dec_h.get((mv, h), [0.0, 0.0, dia])
            fator_h = 2 ** (-(dia - estado_h[2]) / mv)
            nd_h, vd_h = estado_h[0] * fator_h, estado_h[1] * fator_h
            sufixo = f"_{mv:.0f}"
            saida["n_j" + sufixo][i], saida["v_j" + sufixo][i] = nd_j, vd_j
            saida["n_jh" + sufixo][i], saida["v_jh" + sufixo][i] = nd_h, vd_h
            dec_j[mv] = [nd_j + 1, vd_j + venceu, dia]
            dec_h[(mv, h)] = [nd_h + 1, vd_h + venceu, dia]
        for k in HISTORICOS_CURTOS:
            n_u, v_u = cont_h[k].get(h, (0, 0))
            saida[f"n_jh_u{k}"][i], saida[f"v_jh_u{k}"][i] = n_u, v_u
            saida[f"n_j_u{k}"][i], saida[f"v_j_u{k}"][i] = cont_j[k]
            recentes[k].append((h, venceu))
            cont_h[k][h] = (n_u + 1, v_u + venceu)
            cont_j[k] = [cont_j[k][0] + 1, cont_j[k][1] + venceu]
            if len(recentes[k]) > k:
                h_velho, v_velho = recentes[k].popleft()
                n_v, v_v = cont_h[k][h_velho]
                cont_h[k][h_velho] = (n_v - 1, v_v - v_velho)
                cont_j[k] = [cont_j[k][0] - 1, cont_j[k][1] - v_velho]
        por_heroi[h] = (n_h + 1, v_h + venceu)
        ultimo_dia[h] = dia
        n_j, v_j = n_j + 1, v_j + venceu


def meta_dos_herois(L) -> tuple[np.ndarray, int]:
    """Logit da taxa de vitória de cada herói nos JANELA_DA_META_DIAS antes de cada dia, encolhida para 50%."""
    dia_base = int(L.dia.min())
    dias = int(L.dia.max()) - dia_base + 2
    jogos, vitorias = np.zeros((dias, MAX_HEROI)), np.zeros((dias, MAX_HEROI))
    np.add.at(jogos, (L.dia - dia_base, L.heroi), 1)
    np.add.at(vitorias, (L.dia - dia_base, L.heroi), L.vitoria)
    acum_j = np.vstack([np.zeros(MAX_HEROI), np.cumsum(jogos, axis=0)])
    acum_v = np.vstack([np.zeros(MAX_HEROI), np.cumsum(vitorias, axis=0)])
    atras = np.maximum(np.arange(dias) - JANELA_DA_META_DIAS, 0)
    n = acum_j[:-1] - acum_j[atras]
    v = acum_v[:-1] - acum_v[atras]
    return logit((v + PRIOR_DA_META / 2) / (n + PRIOR_DA_META)), dia_base


def efeitos_de_par(L, antes: np.ndarray) -> np.ndarray:
    """Quanto o herói ganha ou perde contra cada inimigo, além da força dos dois, só com partidas de `antes`."""
    linhas = np.flatnonzero(antes)
    h = np.repeat(L.heroi[linhas], 5)
    e = L.inimigos[linhas].ravel()
    v = np.repeat(L.vitoria[linhas], 5)
    jogos, vitorias = np.zeros((MAX_HEROI, MAX_HEROI)), np.zeros((MAX_HEROI, MAX_HEROI))
    np.add.at(jogos, (h, e), 1)
    np.add.at(vitorias, (h, e), v)
    forca = logit((vitorias.sum(1) + 50) / (jogos.sum(1) + 100))
    par = logit((vitorias + FORCA_DO_PAR / 2) / (jogos + FORCA_DO_PAR))
    esperado = forca[:, None] * jogos / (jogos + FORCA_DO_PAR) - forca[None, :] * jogos / (jogos + FORCA_DO_PAR)
    return par - esperado


class Tabela:
    """Matrizes e configuração dos modelos com tabela de heróis, reaproveitadas entre janelas."""

    def __init__(self, L, c: float, pares_pro: np.ndarray):
        self.unica, self.separada, self.c, self.pares_pro = linhas_da_tabela(L, False), linhas_da_tabela(L, True), c, pares_pro
        self.congelada = None

    def congelada_em(self, ajuste) -> None:
        self.congelada = ajuste


def pares_de_pro(caminho: Path) -> np.ndarray:
    """Efeito de par em logit vindo de confrontos_pares.json, encolhido para zero."""
    bruto = json.loads(caminho.read_text(encoding="utf-8"))
    efeito = np.zeros((MAX_HEROI, MAX_HEROI))
    for heroi, rivais in bruto.items():
        for rival, placar in rivais.items():
            jogos, vitorias = placar[0], placar[1]
            efeito[int(heroi), int(rival)] = logit((vitorias + FORCA_DO_PAR / 2) / (jogos + FORCA_DO_PAR))
    return efeito


@dataclass(frozen=True)
class Previsao:
    p: np.ndarray
    params: str


def base_do_jogador(f, sufixo: str, forca: float, media: float) -> np.ndarray:
    return (f["v_j" + sufixo] + forca * media) / (f["n_j" + sufixo] + forca)


def eb(f, sufixo: str, forca_base: float, forca_heroi: float, media: float) -> np.ndarray:
    mu = base_do_jogador(f, sufixo, forca_base, media)
    return (f["v_jh" + sufixo] + forca_heroi * mu) / (f["n_jh" + sufixo] + forca_heroi)


def perda(y, p) -> float:
    p = np.clip(p, EPS, 1 - EPS)
    return float(-(y * np.log(p) + (1 - y) * np.log(1 - p)).mean())


def melhor_eb(f, y, ajuste, media, sufixos=("",)) -> tuple[str, float, float, float]:
    candidatos = [(perda(y[ajuste], eb({k: v[ajuste] for k, v in f.items()}, s, a, k_h, media)), s, a, k_h)
                  for s in sufixos for a in FORCA_DA_BASE for k_h in FORCA_DO_HEROI]
    _, sufixo, a, k_h = min(candidatos)
    return sufixo, a, k_h, 0.0


def melhor_base(f, y, ajuste, media) -> float:
    fatia = {k: v[ajuste] for k, v in f.items()}
    return min(FORCA_DA_BASE, key=lambda a: perda(y[ajuste], base_do_jogador(fatia, "", a, media)))


def escore_do_concorrente(f) -> np.ndarray:
    """N²/(N²+18) × winrate ponderado × recência × frequência; recência e frequência foram reconstruídas (ver o doc)."""
    n = f["n_jh"]
    confianca = n ** 2 / (n ** 2 + 18)
    winrate = np.divide(f["v_jh_90"], f["n_jh_90"], out=np.full_like(n, 0.5), where=f["n_jh_90"] > 0)
    recencia = 2 ** (-f["dias_sem"] / 90)
    frequencia = np.divide(n, f["n_j"], out=np.zeros_like(n), where=f["n_j"] > 0)
    return confianca * winrate * recencia * frequencia


def platt(x_ajuste, y_ajuste, x_teste) -> np.ndarray:
    modelo = LogisticRegression(C=1e6, max_iter=500).fit(x_ajuste, y_ajuste)
    return modelo.predict_proba(x_teste)[:, 1]


def hierarquica(L, treino, teste, c: float) -> np.ndarray:
    """Logística esparsa com efeitos de jogador, herói, jogador×herói e heróis dos dois lados, encolhidos por L2 por grupo."""
    contas, conta_i = np.unique(L.conta, return_inverse=True)
    pares, par_i = np.unique(L.conta * MAX_HEROI + L.heroi, return_inverse=True)
    n = len(L)
    linhas = np.arange(n)
    blocos = [
        sparse.csr_matrix((np.full(n, 0.2), (linhas, conta_i)), shape=(n, len(contas))),
        sparse.csr_matrix((np.full(n, 0.3), (linhas, L.heroi)), shape=(n, MAX_HEROI)),
        sparse.csr_matrix((np.full(n, 0.3), (linhas, par_i)), shape=(n, len(pares))),
        sparse.csr_matrix((np.full(4 * n, 0.1), (np.repeat(linhas, 4), L.aliados.ravel())), shape=(n, MAX_HEROI)),
        sparse.csr_matrix((np.full(5 * n, -0.1), (np.repeat(linhas, 5), L.inimigos.ravel())), shape=(n, MAX_HEROI)),
    ]
    X = sparse.hstack(blocos, format="csr")
    pesos = 2.0 ** (-(L.dia[treino].max() - L.dia[treino]) / 180)
    modelo = LogisticRegression(C=c, max_iter=200, solver="lbfgs").fit(X[treino], L.vitoria[treino], sample_weight=pesos)
    return modelo.predict_proba(X[teste])[:, 1]


def linhas_da_tabela(L, separada: bool):
    """Efeitos de herói com sinal: +1 para quem está do lado da conta, -1 para o outro lado."""
    n = len(L)
    linhas = np.arange(n)
    meu = sparse.csr_matrix((np.ones(n), (linhas, L.heroi)), shape=(n, MAX_HEROI))
    ali = sparse.csr_matrix((np.ones(4 * n), (np.repeat(linhas, 4), L.aliados.ravel())), shape=(n, MAX_HEROI))
    ini = sparse.csr_matrix((-np.ones(5 * n), (np.repeat(linhas, 5), L.inimigos.ravel())), shape=(n, MAX_HEROI))
    return sparse.hstack([meu, ali, ini], format="csr") if separada else (meu + ali + ini).tocsr()


def ajustar_tabela(X_herois, extras, y, treino, dias, c: float) -> tuple[np.ndarray, float]:
    """Logística L2 com os efeitos de herói e colunas extras; devolve coeficientes e intercepto."""
    X = sparse.hstack([sparse.csr_matrix(extras), X_herois], format="csr")
    pesos = 2.0 ** (-(dias[treino].max() - dias[treino]) / MEIA_VIDA_DA_TABELA)
    modelo = LogisticRegression(C=c, max_iter=300).fit(X[treino], y[treino], sample_weight=pesos)
    return modelo.coef_[0], float(modelo.intercept_[0])


def aplicar_tabela(X_herois, extras, coefs, intercepto, teste) -> np.ndarray:
    return expit(intercepto + extras[teste] @ coefs[:extras.shape[1]] + X_herois[teste] @ coefs[extras.shape[1]:])


def escolher_c_tabela(L, f, media, origem: int) -> float:
    """Validação nos 30 dias antes da primeira janela de teste, mesma regra da hierárquica."""
    corte = origem - 30
    y = L.vitoria.astype(float)
    treino = (L.dia < corte) & (L.dia >= corte - DIAS_DA_TABELA)
    validacao = (L.dia >= corte) & (L.dia < origem)
    s, a, k, _ = melhor_eb(f, y, (L.dia < corte) & (L.dia >= corte - DIAS_DE_AJUSTE), media)
    extras = (logit(eb(f, s, a, k, media)) - logit(base_do_jogador(f, s, a, media)))[:, None]
    X = linhas_da_tabela(L, False)

    def erro(c):
        coefs, intercepto = ajustar_tabela(X, extras, y, treino, L.dia, c)
        return perda(y[validacao], aplicar_tabela(X, extras, coefs, intercepto, validacao))

    return min(CS_DA_TABELA, key=erro)


def escolher_c_hierarquica(L, origem: int) -> float:
    """Validação nos 30 dias antes da primeira janela de teste: nada do teste entra na escolha."""
    corte = origem - 30
    treino = (L.dia < corte) & (L.dia >= corte - 2 * 365)
    validacao = (L.dia >= corte) & (L.dia < origem)
    y = L.vitoria[validacao].astype(float)
    return min(CS_DA_HIERARQUICA, key=lambda c: perda(y, hierarquica(L, treino, validacao, c)))


def prever_janela(L, f, meta, dia_base, janela: Janela, c_hierarquica: float | None, tabela) -> dict[str, Previsao]:
    y = L.vitoria.astype(float)
    antes = L.dia < janela.inicio
    teste = (L.dia >= janela.inicio) & (L.dia < janela.fim)
    ajuste = antes & (L.dia >= janela.inicio - DIAS_DE_AJUSTE)
    media = float(y[antes].mean())
    t = {k: v[teste] for k, v in f.items()}
    saida: dict[str, Previsao] = {"constante": Previsao(np.full(teste.sum(), media), f"{media:.4f}")}

    a = melhor_base(f, y, ajuste, media)
    saida["linha_de_base"] = Previsao(base_do_jogador(t, "", a, media), f"a={a}")

    bruto = np.divide(t["v_jh"], t["n_jh"], out=base_do_jogador(t, "", a, media), where=t["n_jh"] > 0)
    saida["a_bruto"] = Previsao(np.clip(bruto, 0.01, 0.99), "sem jogos usa a linha de base")

    escore = escore_do_concorrente(f)
    saida["b_concorrente"] = Previsao(platt(escore[ajuste, None], y[ajuste], escore[teste, None]), "calibrado por Platt")
    com_conf = (f["n_jh"] ** 2 / (f["n_jh"] ** 2 + 18)) * np.divide(f["v_jh_90"], f["n_jh_90"], out=np.full_like(f["n_jh"], 0.5), where=f["n_jh_90"] > 0)
    saida["b2_conf_x_wr"] = Previsao(platt(com_conf[ajuste, None], y[ajuste], com_conf[teste, None]), "só N²/(N²+18) × winrate, Platt")

    s, a_eb, k_eb, _ = melhor_eb(f, y, ajuste, media)
    saida["c_beta_binomial"] = Previsao(eb(t, s, a_eb, k_eb, media), f"a={a_eb} k={k_eb}")
    s_r, a_r, k_r, _ = melhor_eb(f, y, ajuste, media, tuple(f"_{mv:.0f}" for mv in MEIAS_VIDAS_DIAS[1:]) + ("",))
    saida["c2_beta_binomial_recencia"] = Previsao(eb(t, s_r, a_r, k_r, media), f"sufixo={s_r} a={a_r} k={k_r}")
    for k in HISTORICOS_CURTOS:
        sufixo = f"_u{k}"
        s_k, a_k, k_k, _ = melhor_eb(f, y, ajuste, media, (sufixo,))
        saida[f"c3_beta_binomial_ultimos_{k}"] = Previsao(eb(t, s_k, a_k, k_k, media), f"a={a_k} k={k_k}")

    mu = logit(base_do_jogador(f, s_r, a_r, media))
    vantagem = logit(eb(f, s_r, a_r, k_r, media)) - mu
    g = lambda herois: meta[L.dia - dia_base, herois]
    g_h = g(L.heroi)
    g_ali = g(L.aliados.T).sum(0)
    g_ini = g(L.inimigos.T).sum(0)
    # Pares só de antes da janela de ajuste: senão a própria linha entra no efeito e o coeficiente vira vazamento.
    par = efeitos_de_par(L, L.dia < janela.inicio - DIAS_DE_AJUSTE)
    soma_par = par[L.heroi[:, None], L.inimigos].sum(1)

    def logistica(colunas, c=1.0):
        X = np.column_stack(colunas)
        modelo = LogisticRegression(C=c, max_iter=500).fit(X[ajuste], y[ajuste])
        return modelo.predict_proba(X[teste])[:, 1], np.r_[modelo.intercept_, modelo.coef_[0]]

    p_v, b_v = logistica([vantagem])
    saida["e3_constante_mais_vantagem"] = Previsao(p_v, "coefs=" + ",".join(f"{v:.3f}" for v in b_v))
    p_vm, b_vm = logistica([vantagem, g_h + g_ali - g_ini])
    saida["e4_vantagem_mais_meta"] = Previsao(p_vm, "coefs=" + ",".join(f"{v:.3f}" for v in b_vm))
    p_e, b_e = logistica([mu, vantagem, g_h + g_ali - g_ini])
    saida["e_eb_mais_meta"] = Previsao(p_e, "coefs=" + ",".join(f"{v:.3f}" for v in b_e))
    p_h, b_h = logistica([g_h, g_ali, g_ini])
    saida["e2_so_herois_da_partida"] = Previsao(p_h, "coefs=" + ",".join(f"{v:.3f}" for v in b_h))
    log_n = np.log1p(f["n_jh"]) - np.log1p(f["n_jh"][ajuste]).mean()
    log_dias = np.log1p(f["dias_sem"]) - np.log1p(f["dias_sem"][ajuste]).mean()
    p_d, b_d = logistica([mu, vantagem, g_h, g_ali, g_ini, soma_par, vantagem * log_n, vantagem * log_dias], c=0.1)
    saida["d_logistica_regularizada"] = Previsao(p_d, "coefs=" + ",".join(f"{v:.3f}" for v in b_d))
    treino_t = antes & (L.dia >= janela.inicio - DIAS_DA_TABELA)
    so_vantagem = vantagem[:, None]
    com_mu = np.column_stack([vantagem, mu])
    com_exp = np.column_stack([vantagem, np.log1p(f["n_jh"])])
    for nome_t, X_t, extras, c in (
        ("f1_vantagem_tabela", tabela.unica, so_vantagem, tabela.c),
        ("f2_vantagem_tabela_base", tabela.unica, com_mu, tabela.c),
        ("f3_vantagem_tabela_experiencia", tabela.unica, com_exp, tabela.c),
        ("f4_vantagem_tres_tabelas", tabela.separada, so_vantagem, tabela.c / 3),
    ):
        coefs, intercepto = ajustar_tabela(X_t, extras, y, treino_t, L.dia, c)
        saida[nome_t] = Previsao(aplicar_tabela(X_t, extras, coefs, intercepto, teste), f"c={c} intercepto={intercepto:.3f} extras=" + ",".join(f"{v:.3f}" for v in coefs[:extras.shape[1]]))
    if tabela.congelada is None:
        tabela.congelada_em(ajustar_tabela(tabela.unica, com_exp, y, treino_t, L.dia, tabela.c))
    coefs, intercepto = tabela.congelada
    saida["f3c_tabela_congelada"] = Previsao(aplicar_tabela(tabela.unica, com_exp, coefs, intercepto, teste), "tabela da primeira origem")
    par_pro = tabela.pares_pro[L.heroi[:, None], L.inimigos].sum(1)[:, None]
    com_par = np.column_stack([vantagem, par_pro])
    coefs, intercepto = ajustar_tabela(tabela.unica, com_par, y, treino_t, L.dia, tabela.c)
    saida["f5_tabela_pares_pro"] = Previsao(aplicar_tabela(tabela.unica, com_par, coefs, intercepto, teste), f"extras={coefs[0]:.3f},{coefs[1]:.4f}")
    if c_hierarquica is not None:
        treino_h = antes & (L.dia >= janela.inicio - 2 * 365)
        saida["d2_hierarquica_esparsa"] = Previsao(hierarquica(L, treino_h, teste, c_hierarquica), f"congelada na origem, C={c_hierarquica}")
    return saida


def calibracao(y, p) -> tuple[float, float]:
    """(ECE em 10 grupos de mesmo tamanho, inclinação da regressão logística de y em logit(p))."""
    ordem = np.argsort(p)
    grupos = np.array_split(ordem, 10)
    ece = sum(len(g) * abs(y[g].mean() - p[g].mean()) for g in grupos) / len(y)
    x = logit(p)[:, None]
    inclinacao = LogisticRegression(C=1e6, max_iter=300).fit(x, y).coef_[0][0] if np.ptp(x) > 0 else float("nan")
    return float(ece), float(inclinacao)


def por_conta(valores, conta_i, contas):
    return np.bincount(conta_i, weights=valores, minlength=contas)


def diferenca_com_ic(perda_a, perda_b, conta_i, contas, rng) -> tuple[float, float, float]:
    """Diferença média de perda (a − b) com IC95 por bootstrap de contas."""
    soma = por_conta(perda_a - perda_b, conta_i, contas)
    n = por_conta(np.ones_like(perda_a), conta_i, contas)
    amostras = rng.multinomial(contas, np.full(contas, 1 / contas), size=BOOTSTRAPS)
    medias = (amostras @ soma) / (amostras @ n)
    return float(soma.sum() / n.sum()), float(np.quantile(medias, 0.025)), float(np.quantile(medias, 0.975))


def perda_pontual(y, p):
    p = np.clip(p, EPS, 1 - EPS)
    return -(y * np.log(p) + (1 - y) * np.log(1 - p))


def tabela_de_resultado(y, previsoes, conta_i, contas, rng) -> list[dict]:
    referencia = perda_pontual(y, previsoes["constante"])
    linhas = []
    for nome, p in previsoes.items():
        delta, baixo, alto = diferenca_com_ic(perda_pontual(y, p), referencia, conta_i, contas, rng)
        ece, inclinacao = calibracao(y, p)
        linhas.append({"modelo": nome, "logloss": perda(y, p), "brier": float(((p - y) ** 2).mean()), "delta_vs_base": delta,
                       "ic_baixo": baixo, "ic_alto": alto, "ece": ece, "inclinacao": inclinacao})
    return linhas


def centrar_na_conta(valores, conta_i, contas):
    medias = por_conta(valores, conta_i, contas) / np.maximum(por_conta(np.ones_like(valores), conta_i, contas), 1)
    return valores - medias[conta_i]


PARES_COMPARADOS = (
    ("f3_vantagem_tabela_experiencia", "c_beta_binomial"), ("f3_vantagem_tabela_experiencia", "b_concorrente"),
    ("f3_vantagem_tabela_experiencia", "d_logistica_regularizada"), ("f3_vantagem_tabela_experiencia", "d2_hierarquica_esparsa"), ("f3_vantagem_tabela_experiencia", "f1_vantagem_tabela"),
    ("f2_vantagem_tabela_base", "f1_vantagem_tabela"), ("f5_tabela_pares_pro", "f1_vantagem_tabela"), ("f3c_tabela_congelada", "f3_vantagem_tabela_experiencia"),
    ("c2_beta_binomial_recencia", "c_beta_binomial"), ("c_beta_binomial", "b_concorrente"),
)


def comparacoes_pareadas(y, previsoes, conta_i, contas, rng) -> list[dict]:
    saida = []
    for a, b in PARES_COMPARADOS:
        delta, baixo, alto = diferenca_com_ic(perda_pontual(y, previsoes[a]), perda_pontual(y, previsoes[b]), conta_i, contas, rng)
        saida.append({"a": a, "b": b, "delta": delta, "ic": [baixo, alto]})
    return saida


def utilidade_da_vantagem(y, vantagens, n_jh, conta_i, contas, rng) -> dict:
    """Dentro de uma mesma conta, herói com nota maior vence mais depois? Centrar na conta tira o nível do jogador,
    que entraria dos dois lados da comparação como ruído em comum. Inclinação ≈ 1 = a vantagem vale o que promete."""
    saida = {}
    amostras = rng.multinomial(contas, np.full(contas, 1 / contas), size=BOOTSTRAPS)
    linhas = n_jh >= JOGOS_MINIMOS_PARA_RANKING
    e = centrar_na_conta(y[linhas], conta_i[linhas], contas)
    c = conta_i[linhas]
    for nome, adv in vantagens.items():
        x = centrar_na_conta(adv[linhas], c, contas)
        soma_xy, soma_xx = por_conta(x * e, c, contas), por_conta(x * x, c, contas)
        inclinacoes = (amostras @ soma_xy) / (amostras @ soma_xx)
        topo, fundo = np.quantile(x, 2 / 3), np.quantile(x, 1 / 3)
        s_a, n_a = por_conta((x >= topo) * e, c, contas), por_conta((x >= topo) * 1.0, c, contas)
        s_b, n_b = por_conta((x <= fundo) * e, c, contas), por_conta((x <= fundo) * 1.0, c, contas)
        dif = (amostras @ s_a) / (amostras @ n_a) - (amostras @ s_b) / (amostras @ n_b)
        saida[nome] = {
            "inclinacao": float(soma_xy.sum() / soma_xx.sum()), "inclinacao_ic": [float(q) for q in np.quantile(inclinacoes, [0.025, 0.975])],
            "terco_de_cima_menos_de_baixo_pp": float(100 * (s_a.sum() / n_a.sum() - s_b.sum() / n_b.sum())),
            "terco_ic_pp": [float(100 * q) for q in np.quantile(dif, [0.025, 0.975])], "linhas": int(linhas.sum()),
        }
    return saida


def efeito_de_experiencia(y, t, conta_i, contas, rng) -> dict:
    """Taxa de vitória por jogos anteriores no herói, centrada na conta: conforto existe mesmo sem vantagem medida?"""
    amostras = rng.multinomial(contas, np.full(contas, 1 / contas), size=BOOTSTRAPS)
    e = centrar_na_conta(y, conta_i, contas)
    saida = {}
    for faixa, (baixo, alto) in {"0": (0, 0), "1-4": (1, 4), "5-19": (5, 19), "20-59": (20, 59), "60+": (60, 10**9)}.items():
        marcados = (t["n_jh"] >= baixo) & (t["n_jh"] <= alto)
        s, n = por_conta(marcados * e, conta_i, contas), por_conta(marcados * 1.0, conta_i, contas)
        medias = (amostras @ s) / np.maximum(amostras @ n, 1)
        saida[faixa] = {"linhas": int(marcados.sum()), "excesso_pp": float(100 * s.sum() / max(n.sum(), 1)), "ic_pp": [float(100 * q) for q in np.quantile(medias, [0.025, 0.975])]}
    return saida


def inclinacao_por_medalha(L, teste, y, adv, n_jh) -> dict:
    saida = {}
    for faixa, (baixo, alto) in {"ate_legend": (1, 59), "ancient": (60, 69), "divine": (70, 79), "immortal": (80, 89)}.items():
        marcados = (L.medalha[teste] >= baixo) & (L.medalha[teste] <= alto) & (n_jh >= JOGOS_MINIMOS_PARA_RANKING)
        if marcados.sum() < 500:
            continue
        contas_faixa, c = np.unique(L.conta[teste][marcados], return_inverse=True)
        x = centrar_na_conta(adv[marcados], c, len(contas_faixa))
        e = centrar_na_conta(y[marcados], c, len(contas_faixa))
        saida[faixa] = {"linhas": int(marcados.sum()), "contas": len(contas_faixa), "inclinacao": float((x * e).sum() / (x * x).sum())}
    return saida


def sinal_certo(y, mu, p_eb, n_jh, k, conta_i, contas, rng) -> dict:
    """Quando o IC95 da vantagem não cruza zero, o sinal se confirma nas partidas seguintes?"""
    erro = 1.96 * np.sqrt(p_eb * (1 - p_eb) / (n_jh + k + 1))
    saida = {}
    amostras = rng.multinomial(contas, np.full(contas, 1 / contas), size=BOOTSTRAPS)
    for nome, marcados in (("acima_da_base", p_eb - erro > mu), ("abaixo_da_base", p_eb + erro < mu), ("indefinido", np.abs(p_eb - mu) <= erro)):
        s = por_conta(marcados * (y - mu), conta_i, contas)
        n = por_conta(marcados * 1.0, conta_i, contas)
        medias = (amostras @ s) / np.maximum(amostras @ n, 1)
        saida[nome] = {"linhas": int(marcados.sum()), "excesso_pp": float(100 * s.sum() / max(n.sum(), 1)),
                       "ic_pp": [float(100 * q) for q in np.quantile(medias, [0.025, 0.975])]}
    return saida


def cobertura_do_intervalo(L, teste, p_eb, n_jh, k) -> dict:
    """Pares jogador×herói com jogos no teste: o intervalo preditivo cobre a taxa observada depois?"""
    chaves = L.conta[teste] * MAX_HEROI + L.heroi[teste]
    unicos, primeiro, inverso, jogos = np.unique(chaves, return_index=True, return_inverse=True, return_counts=True)
    vitorias = np.bincount(inverso, weights=L.vitoria[teste])
    p, n = p_eb[primeiro], n_jh[primeiro]
    vale = jogos >= JOGOS_MINIMOS_NA_COBERTURA
    variancia = p * (1 - p) / (n + k + 1) + p * (1 - p) / jogos
    dentro = np.abs(vitorias / jogos - p) <= 1.96 * np.sqrt(variancia)
    return {"pares": int(vale.sum()), "cobertura_95": float(dentro[vale].mean())}


def varrer_picks(L, teste_dia_ini, ajuste_ini, media, k_h, a_b, forca) -> dict:
    """Passa por cada conta mantendo vetores por herói; avalia pick (ajuste + teste) e listas de ban (teste)."""
    ajuste_dia = (L.dia >= ajuste_ini) & (L.dia < teste_dia_ini)
    teste_dia = L.dia >= teste_dia_ini
    q = np.bincount(L.heroi[L.dia < teste_dia_ini], minlength=MAX_HEROI) + 1.0
    q[0] = 0
    q = q / q.sum()
    decaimentos = [(mv, 1.0 if mv == float("inf") else 2 ** (-1 / mv)) for mv in MEIAS_VIDAS_PICK_JOGOS]
    grade = {(mv, alfa): [] for mv, _ in decaimentos for alfa in ALFAS_PICK}
    medidas_grade = {chave: {"ll": 0.0, "n": 0} for chave in grade}
    registros = _varrer_ajuste(L, ajuste_dia, decaimentos, q, medidas_grade)
    melhor = min(registros, key=lambda chave: registros[chave])
    resultados = _varrer_teste(L, teste_dia, melhor, dict(decaimentos), q, media, k_h, a_b, forca)
    return {"melhor_mv_jogos": melhor[0], "melhor_alfa": melhor[1], **resultados}


def _varrer_ajuste(L, ajuste_dia, decaimentos, q, medidas):
    fronteiras = np.flatnonzero(np.diff(L.conta)) + 1
    for inicio, fim in zip(np.r_[0, fronteiras], np.r_[fronteiras, len(L)]):
        cont = {mv: np.zeros(MAX_HEROI) for mv, _ in decaimentos}
        massa = {mv: 0.0 for mv, _ in decaimentos}
        for i in range(inicio, fim):
            h = L.heroi[i]
            if ajuste_dia[i]:
                for (mv, alfa), medida in medidas.items():
                    p = (cont[mv][h] + alfa * q[h]) / (massa[mv] + alfa)
                    medida["ll"] -= np.log(max(p, 1e-9))
                    medida["n"] += 1
            for mv, d in decaimentos:
                cont[mv] *= d
                cont[mv][h] += 1
                massa[mv] = massa[mv] * d + 1
    return {chave: m["ll"] / max(m["n"], 1) for chave, m in medidas.items()}


def _top_acertos(escores, h, ks):
    ordem = np.argsort(-escores)
    posicao = int(np.flatnonzero(ordem == h)[0]) + 1
    return posicao, {k: int(posicao <= k) for k in ks}


def _varrer_teste(L, teste_dia, melhor, decaimentos, q, media, k_h, a_b, forca):
    mv, alfa = melhor
    d = decaimentos[mv]
    nomes = ("global", "historico_todo", "recencia_jogos", "concorrente")
    rank = {nome: {"rr": [], **{f"top{k}": [] for k in TOP_PICK}, "ll": []} for nome in nomes}
    bans = {nome: {"captura": [], "acerto": []} for nome in ("frequencia", "winrate_bruto", "concorrente", "p_vezes_vantagem", "p_vezes_valor")}
    conta_teste = []
    fronteiras = np.flatnonzero(np.diff(L.conta)) + 1
    for inicio, fim in zip(np.r_[0, fronteiras], np.r_[fronteiras, len(L)]):
        n, v = np.zeros(MAX_HEROI), np.zeros(MAX_HEROI)
        cont = np.zeros(MAX_HEROI)
        massa = 0.0
        n_j = v_j = 0.0
        ultimo = np.full(MAX_HEROI, -1e4)
        for i in range(inicio, fim):
            h, y, dia = int(L.heroi[i]), int(L.vitoria[i]), int(L.dia[i])
            if teste_dia[i] and n_j >= 1:
                mu = (v_j + a_b * media) / (n_j + a_b)
                p_hist = (n + alfa * q) / (n_j + alfa)
                p_rec = (cont + alfa * q) / (massa + alfa)
                p_eb = (v + k_h * mu) / (n + k_h)
                adv = p_eb - mu
                resto = np.maximum(1 - p_rec, 1e-6)
                v_todos = (p_rec * adv).sum()
                sem = (v_todos - p_rec * adv) / resto
                remove = p_rec * (adv - sem)
                valor = forca[0] * (logit(p_eb) - logit(mu)) + forca[1] * np.log1p(n) + forca[2]
                v_valor = (p_rec * valor).sum()
                sem_valor = (v_valor - p_rec * valor) / resto
                remove_valor = p_rec * (valor - sem_valor)
                wr = np.divide(v, n, out=np.zeros(MAX_HEROI), where=n >= 3)
                conf = n ** 2 / (n ** 2 + 18)
                recencia = 2 ** (-(dia - ultimo) / 90)
                comp = conf * np.divide(v, np.maximum(n, 1)) * recencia * (n / n_j)
                for nome, escores, pr in (("global", q, q), ("historico_todo", p_hist, p_hist), ("recencia_jogos", p_rec, p_rec), ("concorrente", comp + q * 1e-9, None)):
                    posicao, acertos = _top_acertos(escores, h, TOP_PICK)
                    rank[nome]["rr"].append(1 / posicao)
                    for k, acerto in acertos.items():
                        rank[nome][f"top{k}"].append(acerto)
                    if pr is not None:
                        rank[nome]["ll"].append(-np.log(max(pr[h], 1e-9)))
                for nome, escores in (("frequencia", p_rec), ("winrate_bruto", wr), ("concorrente", comp), ("p_vezes_vantagem", remove), ("p_vezes_valor", remove_valor)):
                    lista = np.argpartition(-escores, BANS_NA_LISTA)[:BANS_NA_LISTA]
                    acertou = h in lista
                    bans[nome]["acerto"].append(int(acertou))
                    bans[nome]["captura"].append(float(acertou) * (y - mu))
                conta_teste.append(L.conta[i])
            n[h] += 1
            v[h] += y
            cont *= d
            cont[h] += 1
            massa = massa * d + 1
            n_j += 1
            v_j += y
            ultimo[h] = dia
    return {"rank": rank, "bans": bans, "conta_teste": np.array(conta_teste)}


def resumir_picks(picks, rng) -> dict:
    contas, conta_i = np.unique(picks["conta_teste"], return_inverse=True)
    amostras = rng.multinomial(len(contas), np.full(len(contas), 1 / len(contas)), size=BOOTSTRAPS)
    n = por_conta(np.ones(len(conta_i)), conta_i, len(contas))

    def com_ic(valores):
        soma = por_conta(np.asarray(valores, dtype=float), conta_i, len(contas))
        medias = (amostras @ soma) / (amostras @ n)
        return {"media": float(soma.sum() / n.sum()), "ic": [float(q) for q in np.quantile(medias, [0.025, 0.975])]}

    rank = {nome: {chave: com_ic(valores) for chave, valores in r.items() if len(valores)} for nome, r in picks["rank"].items()}
    bans = {nome: {"acerto": com_ic(r["acerto"]), "captura_pp": com_ic(100 * np.array(r["captura"]))} for nome, r in picks["bans"].items()}
    referencia = 100 * np.array(picks["bans"]["p_vezes_valor"]["captura"])
    for nome, r in picks["bans"].items():
        bans[nome]["ganho_do_p_vezes_valor_pp"] = com_ic(referencia - 100 * np.array(r["captura"]))
    return {"melhor_mv_jogos": picks["melhor_mv_jogos"], "melhor_alfa": picks["melhor_alfa"], "rank": rank, "bans": bans, "linhas": len(conta_i)}


def times_completos(L, f, meta, dia_base, parametros_eb: tuple[float, float], media: float) -> dict:
    """Soma das 10 contas numa partida inteira, nas partidas em que as 10 estão na amostra: testa a chance do draft."""
    a, k = parametros_eb
    mu = base_do_jogador(f, "", a, media)
    vantagem = logit(eb(f, "", a, k, media)) - logit(mu)
    g_h = meta[L.dia - dia_base, L.heroi]
    sinal = 2.0 * L.radiant - 1
    ids, inverso, contagem = np.unique(L.match_id, return_inverse=True, return_counts=True)
    somar = lambda valores: np.bincount(inverso, weights=valores * sinal)
    # A vitória do radiant sai de qualquer linha: quem é radiant e venceu, ou dire e perdeu.
    radiant_venceu = np.zeros(len(ids))
    radiant_venceu[inverso] = (L.vitoria == L.radiant).astype(float)
    dia = np.zeros(len(ids), dtype=np.int64)
    dia[inverso] = L.dia
    completas = (contagem == 10) & (somar(np.ones(len(L))) == 0)
    X = np.column_stack([somar(logit(mu)), somar(vantagem), somar(g_h)])[completas]
    y, dia = radiant_venceu[completas], dia[completas]
    if len(y) < MINIMO_DE_PARTIDAS_COMPLETAS:
        return {"partidas": int(len(y)), "treino": 0, "teste": 0, "modelos": {}}
    ordem = np.argsort(dia)
    X, y = X[ordem], y[ordem]
    corte = len(y) // 2
    modelos = {"constante": None, "so_jogadores": [0], "so_vantagem_no_heroi": [1], "so_herois": [2], "jogadores_e_vantagem": [0, 1], "tudo": [0, 1, 2]}
    saida = {"partidas": int(len(y)), "treino": corte, "teste": int(len(y) - corte), "modelos": {}}
    for nome, colunas in modelos.items():
        if colunas is None:
            p = np.full(len(y) - corte, y[:corte].mean())
            coefs = [float(y[:corte].mean())]
        else:
            modelo = LogisticRegression(C=1.0, max_iter=500).fit(X[:corte][:, colunas], y[:corte])
            p = modelo.predict_proba(X[corte:][:, colunas])[:, 1]
            coefs = [float(v) for v in np.r_[modelo.intercept_, modelo.coef_[0]]]
        ece, inclinacao = calibracao(y[corte:], p)
        erro = perda_pontual(y[corte:], p)
        delta = erro - perda_pontual(y[corte:], np.full(len(y) - corte, y[:corte].mean()))
        saida["modelos"][nome] = {"delta_vs_constante": float(delta.mean()), "delta_ep": float(delta.std() / np.sqrt(len(delta))), "logloss": float(erro.mean()), "ep": float(erro.std() / np.sqrt(len(erro))), "brier": float(((p - y[corte:]) ** 2).mean()),
                                  "acerto": float(((p > 0.5) == y[corte:]).mean()), "ece": ece, "inclinacao": inclinacao, "coefs": coefs}
    return saida


def recorte(L, mascara):
    return fonte.Linhas(**{campo: getattr(L, campo)[mascara] for campo in L.__dataclass_fields__})


def avaliar_segmento(nome: str, L, usar_hierarquica: bool, pares_pro: np.ndarray) -> dict:
    rng = np.random.default_rng(SEMENTE)
    f = estatisticas_por_linha(L)
    meta, dia_base = meta_dos_herois(L)
    janelas = janelas_de_teste(int(L.dia.max()))
    acumulado: dict[str, list[np.ndarray]] = {}
    parametros: dict[str, list[str]] = {}
    indices = []
    c_hierarquica = escolher_c_hierarquica(L, janelas[0].inicio) if usar_hierarquica else None
    media_inicial = float(L.vitoria[L.dia < janelas[0].inicio].mean())
    tabela = Tabela(L, escolher_c_tabela(L, f, media_inicial, janelas[0].inicio), pares_pro)
    for janela in janelas:
        indices.append(np.flatnonzero((L.dia >= janela.inicio) & (L.dia < janela.fim)))
        for modelo, previsao in prever_janela(L, f, meta, dia_base, janela, c_hierarquica, tabela).items():
            acumulado.setdefault(modelo, []).append(previsao.p)
            parametros.setdefault(modelo, []).append(previsao.params)
        print(f"{nome}: janela {janela} pronta", flush=True)
    # Cada janela vem em ordem de conta: y, contas e previsões têm de seguir esta mesma ordem de índices.
    teste = np.concatenate(indices)
    previsoes = {modelo: np.concatenate(p) for modelo, p in acumulado.items()}
    y = L.vitoria[teste].astype(float)
    contas_unicas, conta_i = np.unique(L.conta[teste], return_inverse=True)
    contas = len(contas_unicas)

    # Hiperparâmetros da primeira origem: nada das janelas de teste entra nas métricas auxiliares.
    k_inicial = int(parametros["c_beta_binomial"][0].split("k=")[1])
    a_inicial = int(parametros["c_beta_binomial"][0].split("a=")[1].split()[0])
    media = float(L.vitoria[L.dia < janelas[0].inicio].mean())
    t = {k: v[teste] for k, v in f.items()}
    mu = previsoes["linha_de_base"]
    p_eb = previsoes["c_beta_binomial"]
    bruto = np.divide(t["v_jh"], t["n_jh"], out=mu.copy(), where=t["n_jh"] > 0)
    vantagens = {"bruto": bruto - mu, "beta_binomial": p_eb - mu, "beta_binomial_recencia": previsoes["c2_beta_binomial_recencia"] - mu,
                 "concorrente": escore_do_concorrente(t)}

    coefs_congelados, _ = tabela.congelada
    picks = varrer_picks(L, janelas[0].inicio, janelas[0].inicio - 60, media, k_inicial, a_inicial, (coefs_congelados[0], coefs_congelados[1], coefs_congelados[2:]))
    por_faixa = {}
    for faixa, (baixo, alto) in {"0": (0, 0), "1-4": (1, 4), "5-19": (5, 19), "20+": (20, 10**9)}.items():
        marcados = (t["n_jh"] >= baixo) & (t["n_jh"] <= alto)
        por_faixa[faixa] = {"linhas": int(marcados.sum()), "delta_vs_base": diferenca_com_ic(
            perda_pontual(y[marcados], p_eb[marcados]), perda_pontual(y[marcados], previsoes["constante"][marcados]), conta_i[marcados], contas, rng)}
    return {
        "segmento": nome, "linhas": int(len(L)), "contas": int(len(set(L.conta))), "linhas_de_teste": int(len(teste)), "contas_de_teste": contas,
        "taxa_de_vitoria_teste": float(y.mean()), "periodo_teste": [int(janelas[0].inicio), int(janelas[-1].fim)],
        "parametros": {m: p[-1] for m, p in parametros.items()},
        "resultado": tabela_de_resultado(y, previsoes, conta_i, contas, rng),
        "pareadas": comparacoes_pareadas(y, previsoes, conta_i, contas, rng),
        "por_jogos_no_heroi": por_faixa,
        "utilidade_vantagem": utilidade_da_vantagem(y, vantagens, t["n_jh"], conta_i, contas, rng),
        "experiencia": efeito_de_experiencia(y, t, conta_i, contas, rng),
        "por_medalha": inclinacao_por_medalha(L, teste, y, p_eb - mu, t["n_jh"]),
        "sinal": sinal_certo(y, mu, p_eb, t["n_jh"], k_inicial, conta_i, contas, rng),
        "cobertura": cobertura_do_intervalo(L, teste, p_eb, t["n_jh"], k_inicial),
        "picks_e_bans": resumir_picks(picks, rng),
        "times_completos": times_completos(L, f, meta, dia_base, (a_inicial, k_inicial), media),
    }


def main() -> None:
    argumentos = argparse.ArgumentParser()
    argumentos.add_argument("--tier1", type=Path, required=True)
    argumentos.add_argument("--saida", type=Path, required=True)
    argumentos.add_argument("--pares", type=Path, required=True)
    argumentos.add_argument("--sem-hierarquica", action="store_true")
    opcoes = argumentos.parse_args()
    sys.path.insert(0, str(opcoes.tier1 / "tools"))
    import od

    L = fonte.carregar(od)
    print(f"{len(L)} linhas em {len(set(L.conta))} contas", flush=True)
    pares = pares_de_pro(opcoes.pares)
    resultados = []
    eh_pro = L.origem == "pro"
    for nome, mascara in (("ranqueada", ~eh_pro), ("pro", eh_pro)):
        if mascara.sum() > 0:
            resultados.append(avaliar_segmento(nome, recorte(L, mascara), not opcoes.sem_hierarquica, pares))
    opcoes.saida.write_text(json.dumps(resultados, indent=1), encoding="utf-8")


if __name__ == "__main__":
    main()
