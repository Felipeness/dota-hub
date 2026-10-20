// Família build: o que os pros do mesmo herói compram contra os heróis inimigos desta partida
// (content/pro_contra via export/dota_export/pro_contra.py, campo `contra_inimigo` do confronto).
import type { Contexto } from "../../modelo";
import { ITEM_FINAL_DO_COMPONENTE } from "./componentesDeItem";

/** Abaixo disso, somando todos os inimigos com dado, a frequência do item é ruído e nenhuma regra afirma nada. */
export const JOGOS_MINIMOS_DO_MATCHUP = 20;
/** Os pros fazem o item na maioria clara das partidas contra esses heróis: faltar ou atrasar é erro. */
export const FRACAO_DE_CORE = 0.6;
/** Escolha comum dos pros nesse confronto: fazer no tempo é acerto, faltar não é erro. */
export const FRACAO_DE_ESCOLHA = 0.3;
/** Os pros quase nunca fazem o item contra esses heróis. */
export const FRACAO_RARA = 0.05;

export type ItemDoMatchup = Readonly<{ chave: string; nome: string; n: number; fracao: number; mediana: number }>;

export type Matchup = Readonly<{
  /** Nomes dos inimigos que têm partidas pro contra o herói, na ordem do draft. */
  inimigos: readonly string[];
  /** Soma dos jogos contra cada inimigo: uma partida contra dois deles conta duas vezes (ver matchupDePro). */
  jogos: number;
  itens: ReadonlyMap<string, ItemDoMatchup>;
  /** Itens que os pros já fecharam com o herói contra qualquer inimigo: só eles dá pra chamar de "quase nunca". */
  conhecidos: ReadonlySet<string>;
}>;

type Acumulado = Readonly<{ n: number; somaDeMinutos: number }>;

/**
 * Junta as partidas pro do herói contra cada inimigo desta partida que tem dado. Simplificação: os jogos são somados
 * por inimigo (a mesma partida contra Doom e Necrophos entra duas vezes) e a mediana do conjunto é aproximada pela
 * média das medianas de cada inimigo pesada pelo número de compras. Null sem amostra mínima.
 */
export function matchupDePro(ctx: Contexto): Matchup | null {
  const contra = ctx.pro?.contra_inimigo ?? {};
  const comDado = ctx.inimigos.flatMap((inimigo) => {
    const dado = Object.hasOwn(contra, inimigo.chave) ? contra[inimigo.chave] : undefined;
    return dado ? [{ nome: inimigo.nome, dado }] : [];
  });
  const jogos = comDado.reduce((soma, { dado }) => soma + dado.jogos, 0);
  if (jogos < JOGOS_MINIMOS_DO_MATCHUP) return null;

  const acumulados = new Map<string, Acumulado>();
  for (const item of comDado.flatMap(({ dado }) => dado.itens)) {
    const antes = acumulados.get(item.chave) ?? { n: 0, somaDeMinutos: 0 };
    acumulados.set(item.chave, { n: antes.n + item.n, somaDeMinutos: antes.somaDeMinutos + item.n * item.mediana });
  }
  const nomes = ctx.pro?.nomes_dos_itens ?? {};
  const itens = new Map([...acumulados].map(([chave, { n, somaDeMinutos }]): [string, ItemDoMatchup] => [chave, {
    chave, nome: nomes[chave] ?? chave, n, fracao: n / jogos, mediana: somaDeMinutos / n,
  }]));
  const conhecidos = new Set(Object.values(contra).flatMap((c) => c.itens.map((i) => i.chave)));
  return { inimigos: comDado.map(({ nome }) => nome), jogos, itens, conhecidos };
}

/** Componente que vira outro item (Yasha -> Manta): o matchup avalia só o item final. */
export const ehComponente = (chave: string) => Object.hasOwn(ITEM_FINAL_DO_COMPONENTE, chave);

/** Fração das partidas pro do matchup com o item; 0 pra item conhecido do herói que ninguém fez contra esses inimigos. */
export function fracaoNoMatchup(matchup: Matchup, chave: string): number | null {
  if (!matchup.conhecidos.has(chave)) return null;
  return matchup.itens.get(chave)?.fracao ?? 0;
}

/**
 * O matchup tem veredito próprio sobre o item (escolha comum dos pros contra estes inimigos ou quase nunca feito):
 * regras genéricas do mesmo item cedem a vez pra não repetir nem contradizer o achado com amostra do confronto.
 */
export function matchupJulgaOItem(matchup: Matchup | null, chave: string): boolean {
  if (!matchup || ehComponente(chave)) return false;
  const fracao = fracaoNoMatchup(matchup, chave);
  return fracao !== null && (fracao >= FRACAO_DE_ESCOLHA || fracao <= FRACAO_RARA);
}

export function listaDeNomes(nomes: readonly string[]): string {
  if (nomes.length <= 1) return nomes.join("");
  return `${nomes.slice(0, -1).join(", ")} e ${nomes.at(-1)}`;
}
