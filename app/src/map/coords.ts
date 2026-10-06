export type Ponto = [number, number];

// "+ 0" normaliza -0 para 0 (toEqual distingue os dois).
export function normToWorld([x, y]: Ponto, tamanho = 100): [number, number, number] {
  return [(x - 0.5) * tamanho + 0, 0, (0.5 - y) * tamanho + 0];
}

export function normToPercent([x, y]: Ponto): { left: string; top: string } {
  return { left: `${x * 100}%`, top: `${(1 - y) * 100}%` };
}
