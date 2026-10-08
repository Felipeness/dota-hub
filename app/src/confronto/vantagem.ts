import type { MatchupsFonte, PopularidadeFonte } from "./fonte";

export type Veredito = "sua" | "dele" | "equilibrado" | "pouco-dado" | "sem-dado";
export type Vantagem = Readonly<{ jogos: number; vitorias: number; taxa: number; margem: number; veredito: Veredito }>;

/** Abaixo disso a margem passa de ±22 pp e o número não diz nada. */
export const JOGOS_MINIMOS = 20;
const Z_95 = 1.96;

/** A sua taxa de vitória contra o inimigo, com margem de 95%. Só há vantagem quando a margem não cruza 50%. */
export function vantagem(matchups: MatchupsFonte, inimigoId: number): Vantagem {
  const linha = matchups.find((m) => m.hero_id === inimigoId);
  if (!linha || linha.games_played === 0) return { jogos: 0, vitorias: 0, taxa: 0, margem: 0, veredito: "sem-dado" };
  const taxa = linha.wins / linha.games_played;
  const margem = Z_95 * Math.sqrt((taxa * (1 - taxa)) / linha.games_played);
  return { jogos: linha.games_played, vitorias: linha.wins, taxa, margem, veredito: veredito(linha.games_played, taxa, margem) };
}

function veredito(jogos: number, taxa: number, margem: number): Veredito {
  if (jogos < JOGOS_MINIMOS) return "pouco-dado";
  if (taxa - margem > 0.5) return "sua";
  if (taxa + margem < 0.5) return "dele";
  return "equilibrado";
}

/** Quantas vezes o item aparece nas compras do herói, somando as fases do jogo. */
export function vezesComprado(popularidade: PopularidadeFonte, itemId: number): number {
  const chave = String(itemId);
  return Object.values(popularidade).reduce((total, fase) => total + (fase?.[chave] ?? 0), 0);
}
