import type { Relevo } from "../data/schemas";

export type Ponto = [number, number];

// "+ 0" normaliza -0 para 0 (toEqual distingue os dois).
export function normToWorld([x, y]: Ponto, tamanho = 100): [number, number, number] {
  return [(x - 0.5) * tamanho + 0, 0, (0.5 - y) * tamanho + 0];
}

export function normToPercent([x, y]: Ponto): { left: string; top: string } {
  return { left: `${x * 100}%`, top: `${(1 - y) * 100}%` };
}

const limitar = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

// A grade guarda as linhas de cima para baixo (j = 0 é o topo do mapa), por isso o y é invertido.
export function alturaEm(relevo: Relevo, [x, y]: Ponto): number {
  const n = relevo.tamanho;
  const i = limitar(Math.floor(x * n), 0, n - 1);
  const j = limitar(Math.floor((1 - y) * n), 0, n - 1);
  return relevo.alturas[j * n + i] ?? 0;
}
