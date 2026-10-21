// O que os pros de um herói compram contra um ou mais inimigos (contra_inimigo do confronto, content/pro_contra):
// itens com frequência e minuto, builds possíveis em ordem e a ordem entre pares de itens. Mais de um inimigo (o draft
// de uma partida) soma as partidas de cada um, como matchupDePro: a mesma partida contra dois deles conta duas vezes.
import { ITEM_FINAL_DO_COMPONENTE } from "../analise/regras/build/componentesDeItem";
import type { ContraInimigo } from "./analise";

export type ItemDosPros = Readonly<{ chave: string; nome: string; n: number; fracao: number; minuto: number }>;
export type PassoDaBuild = Readonly<{ chave: string; nome: string; minuto: number; fracao: number }>;
export type BuildPossivel = Readonly<{
  /** Item que separa esta build das outras (o 3º item da Butterfly vs o da Mjollnir), pra nomear. */
  destaque: PassoDaBuild;
  jogos: number;
  vitorias: number;
  /** Das partidas pro somadas, quantas seguiram esta build. */
  fracaoDosJogos: number;
  sequencia: readonly PassoDaBuild[];
  /** Itens de 15-40% das partidas da build: escolha situacional, não parte fixa. */
  opcoes: readonly PassoDaBuild[];
}>;
export type OrdemDosPros = Readonly<{ antes: string; depois: string; antesEm: number; ambos: number }>;

type Nomes = Readonly<Record<string, string>>;
type Contado = Readonly<{ chave: string; n: number; mediana: number }>;

/** Em lista de item, décimo de ponto percentual é ruído: inteiro lê mais rápido. */
export const porcentagemInteira = (fracao: number) => `${Math.round(100 * fracao)}%`;

const FRACAO_NA_SEQUENCIA = 0.4;
const FRACAO_DE_OPCAO = 0.15;
const OPCOES_MAXIMAS = 3;
const BUILDS_MAXIMAS = 3;
const FRACAO_MINIMA_DA_BUILD = 0.05;

const ehComponente = (chave: string) => Object.hasOwn(ITEM_FINAL_DO_COMPONENTE, chave);
const totalDeJogos = (contras: readonly ContraInimigo[]) => contras.reduce((soma, c) => soma + c.jogos, 0);

/** Soma n e aproxima a mediana conjunta pela média das medianas pesada por n (mesma simplificação de matchupDePro). */
function somar(itens: readonly Contado[]): Contado[] {
  const porChave = new Map<string, { n: number; soma: number }>();
  for (const { chave, n, mediana } of itens) {
    const antes = porChave.get(chave) ?? { n: 0, soma: 0 };
    porChave.set(chave, { n: antes.n + n, soma: antes.soma + n * mediana });
  }
  return [...porChave].map(([chave, { n, soma }]) => ({ chave, n, mediana: soma / n }));
}

const porMinuto = <T extends { minuto: number; chave: string }>(a: T, b: T) => a.minuto - b.minuto || a.chave.localeCompare(b.chave);

/** Itens fechados que os pros fazem contra esses inimigos (sem componente que vira outro item), por minuto mediano. */
export function itensDosPros(contras: readonly ContraInimigo[], nomes: Nomes): ItemDosPros[] {
  const jogos = totalDeJogos(contras);
  if (jogos === 0) return [];
  return somar(contras.flatMap((c) => c.itens))
    .filter((i) => !ehComponente(i.chave))
    .map((i) => ({ chave: i.chave, nome: nomes[i.chave] ?? i.chave, n: i.n, fracao: i.n / jogos, minuto: i.mediana }))
    .sort(porMinuto);
}

const passo = (nomes: Nomes, jogos: number) => (i: Contado): PassoDaBuild =>
  ({ chave: i.chave, nome: nomes[i.chave] ?? i.chave, minuto: i.mediana, fracao: i.n / jogos });

type Grupo = Readonly<{ chave: string; jogos: number; vitorias: number; itens: readonly Contado[] }>;

const chaveDaBuild = (build: ContraInimigo["builds"][number]) => [...build.chave].sort().join("+");

function agrupar(contras: readonly ContraInimigo[]): Grupo[] {
  const grupos = new Map<string, Grupo>();
  for (const build of contras.flatMap((c) => c.builds)) {
    const chave = chaveDaBuild(build);
    const antes = grupos.get(chave) ?? { chave, jogos: 0, vitorias: 0, itens: [] };
    grupos.set(chave, {
      chave, jogos: antes.jogos + build.jogos, vitorias: antes.vitorias + build.vitorias,
      itens: [...antes.itens, ...build.sequencia, ...build.opcoes],
    });
  }
  return [...grupos.values()];
}

type Montada = Omit<BuildPossivel, "destaque"> & Readonly<{ itensDaChave: readonly string[] }>;

function montarBuild(grupo: Grupo, total: number, nomes: Nomes): Montada {
  // ponytail: item abaixo de 15% numa build de um inimigo não vem no arquivo, então somar inimigos subconta o item;
  // fica bom enquanto a build principal é a mesma contra quase todos (o caso comum).
  const itens = somar(grupo.itens).map(passo(nomes, grupo.jogos));
  return {
    itensDaChave: grupo.chave.split("+"), jogos: grupo.jogos, vitorias: grupo.vitorias, fracaoDosJogos: grupo.jogos / total,
    sequencia: itens.filter((i) => i.fracao >= FRACAO_NA_SEQUENCIA).sort(porMinuto),
    opcoes: itens.filter((i) => i.fracao >= FRACAO_DE_OPCAO && i.fracao < FRACAO_NA_SEQUENCIA)
      .sort((a, b) => b.fracao - a.fracao).slice(0, OPCOES_MAXIMAS).sort(porMinuto),
  };
}

/** Item da chave da build (os primeiros itens) que menos aparece na chave das outras; no empate, o mais tardio. */
function destaqueDe(build: Montada, todas: readonly Montada[]): PassoDaBuild | undefined {
  const emOutras = (chave: string) => todas.filter((b) => b !== build && b.itensDaChave.includes(chave)).length;
  const daChave = build.sequencia.filter((s) => build.itensDaChave.includes(s.chave));
  return [...daChave].sort((a, b) => emOutras(a.chave) - emOutras(b.chave) || b.minuto - a.minuto)[0] ?? build.sequencia.at(-1);
}

/** Até 3 builds, da mais seguida para a menos; cada uma com a sequência em ordem de minuto e as opções. */
export function buildsPossiveis(contras: readonly ContraInimigo[], nomes: Nomes): BuildPossivel[] {
  const total = totalDeJogos(contras);
  if (total === 0) return [];
  const montadas = agrupar(contras)
    .filter((g) => g.jogos >= FRACAO_MINIMA_DA_BUILD * total)
    .sort((a, b) => b.jogos - a.jogos || a.chave.localeCompare(b.chave))
    .slice(0, BUILDS_MAXIMAS)
    .map((g) => montarBuild(g, total, nomes));
  return montadas.flatMap((montada) => {
    const destaque = destaqueDe(montada, montadas);
    const { jogos, vitorias, fracaoDosJogos, sequencia, opcoes } = montada;
    return destaque ? [{ destaque, jogos, vitorias, fracaoDosJogos, sequencia, opcoes }] : [];
  });
}

const chaveDoPar = (x: string, y: string) => (x < y ? `${x}|${y}` : `${y}|${x}`);

/** Par de itens -> qual vem antes na maioria das partidas pro com os dois. Chave: os dois slugs em ordem alfabética. */
export function ordemDosPros(contras: readonly ContraInimigo[]): ReadonlyMap<string, OrdemDosPros> {
  const somados = new Map<string, { x: string; y: string; xAntes: number; ambos: number }>();
  for (const { a, b, a_antes, ambos } of contras.flatMap((c) => c.ordem)) {
    const [x, y] = a < b ? [a, b] : [b, a];
    const xAntes = a === x ? a_antes : ambos - a_antes;
    const antes = somados.get(chaveDoPar(x, y)) ?? { x, y, xAntes: 0, ambos: 0 };
    somados.set(chaveDoPar(x, y), { x, y, xAntes: antes.xAntes + xAntes, ambos: antes.ambos + ambos });
  }
  return new Map([...somados].map(([chave, { x, y, xAntes, ambos }]): [string, OrdemDosPros] => [chave,
    2 * xAntes >= ambos ? { antes: x, depois: y, antesEm: xAntes, ambos } : { antes: y, depois: x, antesEm: ambos - xAntes, ambos }]));
}

export function ordemEntre(ordem: ReadonlyMap<string, OrdemDosPros>, x: string, y: string): OrdemDosPros | null {
  return ordem.get(chaveDoPar(x, y)) ?? null;
}
