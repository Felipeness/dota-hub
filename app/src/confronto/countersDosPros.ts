// Filtra os counters genéricos (mecanicas.ts, por tipo de habilidade do inimigo) pelo que os pros do herói fazem
// contra esse inimigo: suporte não recebe item de carry e vice-versa, e item que não resolve fica de fora com o motivo.
import { controleAtravessaImunidade } from "../live/partida/tagsDosHerois";
import { porcentagem, type ContraInimigo, type SpikeDePro } from "./analise";
import type { ItemIndicado } from "./mecanicas";

/** Abaixo disso os pros do herói quase nunca fazem o item contra esse inimigo (mesmo corte de matchupDePro). */
export const FRACAO_RARA = 0.05;

export type Counter = ItemIndicado & Readonly<{ mecanica: string }>;
export type CounterUsado = Counter & Readonly<{ fracaoPro: number | null }>;
export type CounterGenerico = CounterUsado & Readonly<{ razao: string }>;
export type CountersFiltrados = Readonly<{ usados: readonly CounterUsado[]; genericos: readonly CounterGenerico[] }>;

export type DadosDoPar = Readonly<{
  meuNome: string;
  inimigo: Readonly<{ chave: string; nome: string }>;
  /** Partidas pro do herói contra este inimigo; null sem recorte (herói sem dado de pro). */
  contra: ContraInimigo | null;
  /** Itens que os pros fazem com o herói em geral (spikes do confronto). */
  spikes: readonly SpikeDePro[];
}>;

const BKB = "black_king_bar";

function fracaoContra(contra: ContraInimigo | null, chave: string): number | null {
  if (!contra) return null;
  return (contra.itens.find((i) => i.chave === chave)?.n ?? 0) / contra.jogos;
}

function razaoParaDescartar(counter: Counter, fracao: number | null, par: DadosDoPar): string | null {
  if (counter.item.chave === BKB && controleAtravessaImunidade(par.inimigo.chave)) {
    return `o controle principal do ${par.inimigo.nome} atravessa imunidade a magia: a BKB não segura.`;
  }
  const naBuildGeral = par.spikes.some((s) => s.item === counter.item.chave);
  if (naBuildGeral || (fracao !== null && fracao >= FRACAO_RARA)) return null;
  if (fracao === null) return `não aparece nas compras frequentes dos pros de ${par.meuNome}.`;
  return `os pros de ${par.meuNome} fazem em ${porcentagem(fracao)} das partidas contra ele.`;
}

/** Usados: os pros fazem (5%+ contra ele ou na build geral), mais feitos primeiro. Genéricos: o resto, com o motivo. */
export function filtrarCounters(counters: readonly Counter[], par: DadosDoPar): CountersFiltrados {
  const julgados = counters.map((c) => {
    const fracaoPro = fracaoContra(par.contra, c.item.chave);
    return { ...c, fracaoPro, razao: razaoParaDescartar(c, fracaoPro, par) };
  });
  const usados = julgados.flatMap(({ razao, ...c }) => (razao === null ? [c] : []))
    .sort((a, b) => (b.fracaoPro ?? 0) - (a.fracaoPro ?? 0));
  const genericos = julgados.flatMap((c) => (c.razao === null ? [] : [{ ...c, razao: c.razao }]));
  return { usados, genericos };
}
