import type { Ponto } from "../../map/coords";
import type { CorDesenho, Desenho, FormaPino, Mancha } from "../../map/trilhas";
import type { EventoDaPartida, TipoDeEvento } from "./detalhe";
import type { AmostraDaTrilha } from "./replay";

export const JANELAS = [
  { id: "0-10", rotulo: "0 a 10 min", trecho: "entre 0 e 10 min", de: -Infinity, ate: 600, cor: "radiant" },
  { id: "10-20", rotulo: "10 a 20 min", trecho: "entre 10 e 20 min", de: 600, ate: 1_200, cor: "info" },
  { id: "20-30", rotulo: "20 a 30 min", trecho: "entre 20 e 30 min", de: 1_200, ate: 1_800, cor: "destaque" },
  { id: "30+", rotulo: "30 min em diante", trecho: "depois dos 30 min", de: 1_800, ate: Infinity, cor: "dire" },
] as const satisfies readonly Readonly<{ id: string; rotulo: string; trecho: string; de: number; ate: number; cor: CorDesenho }>[];

export type Janela = (typeof JANELAS)[number];
export type IdJanela = Janela["id"] | "toda";
export type EventoNumerado = EventoDaPartida & Readonly<{ n: number }>;

const MARCA_DE_MINUTO_S = 120;
/** Andando, ninguém cruza 15% do mapa em 5 s: um salto maior é TP, blink longo ou renascer, e a linha não liga os pontos. */
const SALTO_MAXIMO = 0.15;
const RAIO_DO_EVENTO = 0.013;
const RAIO_DO_CAMP = 0.012;

const COR_DO_EVENTO: Record<TipoDeEvento, CorDesenho> = {
  abate: "radiant", morte: "dire", item: "texto", roshan: "neutro", torre: "neutro", observer: "destaque", sentry: "info",
  runa: "info", buyback: "dire", smoke: "neutro", camp: "texto", "aegis-consumida": "neutro",
};
const FORMA_DO_EVENTO: Partial<Record<TipoDeEvento, FormaPino>> = { observer: "losango", sentry: "losango", camp: "quadrado" };

/** Pré-jogo (tempo negativo) conta na primeira janela. */
export const janelasDaPartida = (duracaoS: number): Janela[] => JANELAS.filter((j) => j.de < duracaoS);

export function estaNaJanela(janela: IdJanela, t: number): boolean {
  if (janela === "toda") return true;
  const { de, ate } = JANELAS.find((j) => j.id === janela) ?? JANELAS[0];
  return de <= t && t < ate;
}

export const janelaDoTempo = (t: number): Janela => JANELAS.find((j) => t < j.ate) ?? JANELAS[JANELAS.length - 1];

/**
 * Numera na ordem do tempo; camps ficam fora da lista numerada (são dezenas) e aparecem só no mapa e na contagem.
 * "aegis-consumida" é sinal interno pras regras de análise (quando o portador morre com a Aegis antes de expirar),
 * nunca um evento visível da partida: sem ponto no mapa e sem entrada própria no OpenDota, não entra na timeline.
 */
export function eventosDaJanela(eventos: readonly EventoDaPartida[], janela: IdJanela): EventoNumerado[] {
  return eventos.filter((e) => e.tipo !== "camp" && e.tipo !== "aegis-consumida" && estaNaJanela(janela, e.t))
    .sort((a, b) => a.t - b.t).map((e, i) => ({ ...e, n: i + 1 }));
}

function pinoDoEvento(e: EventoNumerado & { ponto: Ponto }): Desenho {
  return {
    tipo: "pino", id: `evento-${e.n}`, x: e.ponto[0], y: e.ponto[1], cor: COR_DO_EVENTO[e.tipo], raio: RAIO_DO_EVENTO,
    opacidade: 1, rotulo: `${e.n}. ${e.texto}`, clicavel: true, conteudo: String(e.n), forma: FORMA_DO_EVENTO[e.tipo] ?? "circulo",
  };
}

const temPonto = <T extends { ponto: Ponto | null }>(e: T): e is T & { ponto: Ponto } => e.ponto !== null;

const saltou = (a: Ponto, b: Ponto) => Math.hypot(a[0] - b[0], a[1] - b[1]) > SALTO_MAXIMO;

/** Trechos contínuos (morte e teleporte cortam a linha), cada um na cor da janela em que está. */
export function trechosDaTrilha(trilha: readonly AmostraDaTrilha[], janela: IdJanela): Desenho[] {
  const trechos: { cor: CorDesenho; pontos: Ponto[] }[] = [];
  let anterior: AmostraDaTrilha | null = null;
  for (const amostra of trilha) {
    if (amostra.t < 0 || !estaNaJanela(janela, amostra.t)) { anterior = null; continue; }
    const cor = janelaDoTempo(amostra.t).cor;
    const continua = anterior?.ponto && amostra.ponto && janelaDoTempo(anterior.t).cor === cor && !saltou(anterior.ponto, amostra.ponto);
    if (amostra.ponto && continua) trechos.at(-1)?.pontos.push(amostra.ponto);
    else if (amostra.ponto) trechos.push({ cor, pontos: anterior?.ponto && !saltou(anterior.ponto, amostra.ponto) ? [anterior.ponto, amostra.ponto] : [amostra.ponto] });
    anterior = amostra;
  }
  return trechos.map((t, i) => ({ tipo: "linha", id: `trilha-${i}`, pontos: t.pontos, cor: t.cor, espessura: 0.004 }));
}

function marcasDeMinuto(trilha: readonly AmostraDaTrilha[], janela: IdJanela): Desenho[] {
  return trilha.filter((a) => a.t > 0 && a.t % MARCA_DE_MINUTO_S === 0 && estaNaJanela(janela, a.t)).flatMap((a): Desenho[] => (a.ponto
    ? [{ tipo: "pino", id: `minuto-${a.t}`, x: a.ponto[0], y: a.ponto[1], cor: janelaDoTempo(a.t).cor, raio: 0.004, opacidade: 0.9,
      rotulo: `${a.t / 60} min`, clicavel: false, texto: `${a.t / 60}'` }]
    : []));
}

type Rota = Readonly<{ eventos: readonly EventoNumerado[]; camps: readonly EventoDaPartida[]; trilha: readonly AmostraDaTrilha[]; janela: IdJanela }>;

export function desenhosDaRota({ eventos, camps, trilha, janela }: Rota): Desenho[] {
  const campsNaJanela = camps.filter((c) => estaNaJanela(janela, c.t)).filter(temPonto).map((c, i): Desenho => ({
    tipo: "pino", id: `camp-${i}`, x: c.ponto[0], y: c.ponto[1], cor: COR_DO_EVENTO.camp, raio: RAIO_DO_CAMP, opacidade: 0.8,
    rotulo: c.texto, clicavel: false, forma: "quadrado",
  }));
  return [...trechosDaTrilha(trilha, janela), ...marcasDeMinuto(trilha, janela), ...campsNaJanela, ...eventos.filter(temPonto).map(pinoDoEvento)];
}

/** As posições de lane do OpenDota cobrem só a fase de lane: o mapa de calor aparece nas janelas que a incluem. */
export const manchasDaJanela = (manchas: readonly Mancha[], janela: IdJanela) => (janela === "0-10" || janela === "toda" ? manchas : []);
