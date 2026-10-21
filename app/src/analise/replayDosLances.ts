// Lógica pura do minimapa que toca a partida até cada lance decisivo: o que está no mapa no instante t, quanto o
// relógio anda a cada passo (rápido longe dos lances, devagar perto, pausa no lance) e para onde a câmera olha.
// O componente só desenha o que sai daqui.
import type { Objetivo } from "../data/schemas";
import type { Ponto } from "../map/coords";
import { estaMorto, wardAtiva, type Panorama, type WardNoPanorama } from "../live/partida/panorama";
import type { Lado } from "../live/rotaAproximada";
import type { Lance } from "./lancesDecisivos";

/**
 * Costura para os trajetos lidos do replay (app/src/replay/trajetos.ts, feito à parte): quem tiver os dados entrega
 * a posição normalizada (0-1, origem embaixo à esquerda) de cada slot do OpenDota por segundo. Sem ela, o mapa fica
 * só com o que o OpenDota sabe: wards, torres, mortes em luta e Roshan.
 */
export type TrajetosDoMapa = Readonly<{
  posicaoEm: (slot: number, t: number) => Ponto | null;
  smokes?: readonly Readonly<{ t: number; lado: Lado; slots: readonly number[] }>[];
}>;

/** Visão em unidades do mundo (Dota 2 Wiki 7.41: Observer 1600, Sentry 900 de true sight), na escala do mapa (grade de 128 unidades, 142 células). */
const UNIDADES_POR_LADO_DO_MAPA = 128 * 142;
export const RAIO_DE_VISAO: Readonly<Record<WardNoPanorama["tipo"], number>> = {
  observer: 1600 / UNIDADES_POR_LADO_DO_MAPA,
  sentry: 900 / UNIDADES_POR_LADO_DO_MAPA,
};
/** Uma morte fica marcada no mapa por 90 s; mais que isso vira poluição. */
const MORTE_VISIVEL_S = 90;
const ABATES_NO_FEED = 4;
const RASTRO_S = 25;

export type AbateNoFeed = Readonly<{ t: number; matador: string | null; vitima: string; retratoDaVitima: string; ladoDaVitima: Lado }>;
export type MorteNoMapa = Readonly<{ t: number; ponto: Ponto; lado: Lado; minha: boolean }>;
export type HeroiNoMapa = Readonly<{ slot: number; ponto: Ponto; rastro: readonly Ponto[]; lado: Lado; retrato: string; nome: string; eu: boolean; morto: boolean }>;
export type QuadroDoMapa = Readonly<{
  wards: readonly WardNoPanorama[];
  torresCaidas: ReadonlySet<string>;
  mortes: readonly MorteNoMapa[];
  feed: readonly AbateNoFeed[];
  roshans: readonly Readonly<{ t: number; lado: Lado | null }>[];
  herois: readonly HeroiNoMapa[];
  smokes: readonly Readonly<{ centro: Ponto; lado: Lado }>[];
}>;

type Quem = Readonly<{ lado: Lado; slot: number }>;

function heroisNoMapa(panorama: Panorama, trajetos: TrajetosDoMapa, t: number, eu: Quem): HeroiNoMapa[] {
  return panorama.jogadores.flatMap((j) => {
    const ponto = trajetos.posicaoEm(j.slot, t);
    if (!ponto) return [];
    const rastro = Array.from({ length: RASTRO_S }, (_, i) => trajetos.posicaoEm(j.slot, t - RASTRO_S + i)).filter((p): p is Ponto => p !== null);
    return [{
      slot: j.slot, ponto, rastro, lado: j.lado, retrato: j.heroi.retrato, nome: j.heroi.nome, eu: j.slot === eu.slot,
      morto: j.mortes.some((m) => estaMorto(m, t)),
    }];
  });
}

const centroDe = (pontos: readonly Ponto[]): Ponto =>
  [pontos.reduce((s, p) => s + p[0], 0) / pontos.length, pontos.reduce((s, p) => s + p[1], 0) / pontos.length];

/** Smoke dura até 35 s ou até revelar; sem o fim na fonte, o anel fica 35 s. */
const DURACAO_DO_SMOKE_S = 35;

function smokesNoMapa(trajetos: TrajetosDoMapa, t: number): QuadroDoMapa["smokes"] {
  return (trajetos.smokes ?? []).filter((s) => s.t <= t && t < s.t + DURACAO_DO_SMOKE_S).flatMap((s) => {
    const pontos = s.slots.map((slot) => trajetos.posicaoEm(slot, t)).filter((p): p is Ponto => p !== null);
    return pontos.length > 0 ? [{ centro: centroDe(pontos), lado: s.lado }] : [];
  });
}

export function quadroEm(panorama: Panorama, t: number, eu: Quem, trajetos: TrajetosDoMapa | null): QuadroDoMapa {
  const mortes = panorama.jogadores.flatMap((j) => j.mortes.filter((m) => m.t <= t).map((m) => ({ j, m })));
  return {
    wards: panorama.wards.filter((w) => wardAtiva(w, t)),
    torresCaidas: new Set(panorama.estruturas.filter((e) => e.t <= t && e.id !== null).map((e) => e.id ?? "")),
    mortes: mortes.flatMap(({ j, m }) => (m.ponto && t - m.t < MORTE_VISIVEL_S ? [{ t: m.t, ponto: m.ponto, lado: j.lado, minha: j.slot === eu.slot }] : [])),
    feed: [...mortes].sort((a, b) => b.m.t - a.m.t).slice(0, ABATES_NO_FEED)
      .map(({ j, m }) => ({ t: m.t, matador: m.matador, vitima: j.heroi.nome, retratoDaVitima: j.heroi.retrato, ladoDaVitima: j.lado })),
    roshans: panorama.roshans.filter((r) => r.t <= t),
    herois: trajetos ? heroisNoMapa(panorama, trajetos, t, eu) : [],
    smokes: trajetos ? smokesNoMapa(trajetos, t) : [],
  };
}

/* Relógio: segundos de partida por segundo real, pela distância até o próximo lance. */
const FAIXAS_DE_VELOCIDADE: readonly (readonly [number, number])[] = [[150, 48], [60, 24], [25, 12], [10, 5], [0, 2]];
/** Quanto tempo real o relógio fica parado em cada lance para dar tempo de ler o card. */
export const PAUSA_NO_LANCE_MS = 6_000;

export function velocidadeEm(t: number, lances: readonly Lance[]): number {
  const proximo = lances.find((l) => l.t >= t);
  const distancia = proximo ? proximo.t - t : Number.POSITIVE_INFINITY;
  return FAIXAS_DE_VELOCIDADE.find(([acima]) => distancia > acima)?.[1] ?? 2;
}

export type Relogio = Readonly<{ t: number; tocando: boolean; pausaRestanteMs: number; ultimoLance: number | null }>;

/** Um passo do relógio tocando: anda pela velocidade, para no próximo lance e segura a pausa; para no fim. */
export function avancar(relogio: Relogio, passoMs: number, lances: readonly Lance[], fim: number): Relogio {
  if (!relogio.tocando) return relogio;
  if (relogio.pausaRestanteMs > 0) return { ...relogio, pausaRestanteMs: Math.max(0, relogio.pausaRestanteMs - passoMs) };
  const proximo = lances.find((l) => l.t > relogio.t && l.t !== relogio.ultimoLance);
  const andou = relogio.t + velocidadeEm(relogio.t, lances) * (passoMs / 1_000);
  if (proximo && andou >= proximo.t) return { ...relogio, t: proximo.t, pausaRestanteMs: PAUSA_NO_LANCE_MS, ultimoLance: proximo.t };
  if (andou >= fim) return { ...relogio, t: fim, tocando: false };
  return { ...relogio, t: andou };
}

/* Câmera: zoom no lance ativo, mapa inteiro entre eles. */
const ANTES_DO_LANCE_S = 25;
const DEPOIS_DO_LANCE_S = 30;
const ZOOM_NO_LANCE = 2.6;
export type Camera = Readonly<{ centro: Ponto; zoom: number }>;
export const MAPA_INTEIRO: Camera = { centro: [0.5, 0.5], zoom: 1 };

export const lanceAtivoEm = (t: number, lances: readonly Lance[]): Lance | null =>
  lances.find((l) => t >= l.t - ANTES_DO_LANCE_S && t <= l.t + DEPOIS_DO_LANCE_S) ?? null;

/** Foco do lance: posição registrada da morte; senão, a estrutura do time que caiu logo depois; senão, o herói no replay. */
export function focoDoLance(lance: Lance, panorama: Panorama, objetivos: readonly Objetivo[], eu: Quem, trajetos: TrajetosDoMapa | null): Ponto | null {
  const posicao = lance.achado.evidencias.posicaoNoMapa;
  if (posicao) return [posicao.x, posicao.y];
  const estrutura = panorama.estruturas.find((e) => e.lado === eu.lado && e.t >= lance.t && e.t - lance.t <= 90 && e.id !== null);
  const objetivo = estrutura && objetivos.find((o) => o.id === estrutura.id);
  if (objetivo) return [objetivo.x, objetivo.y];
  return trajetos?.posicaoEm(eu.slot, lance.t) ?? null;
}

const limitar = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

export function cameraPara(foco: Ponto | null): Camera {
  if (!foco) return MAPA_INTEIRO;
  const margem = 0.5 / ZOOM_NO_LANCE;
  return { centro: [limitar(foco[0], margem, 1 - margem), limitar(foco[1], margem, 1 - margem)], zoom: ZOOM_NO_LANCE };
}

/** Rótulo do lance no card: gravidade pelo peso do achado. */
export function rotuloDoLance(lance: Lance): string {
  if (lance.achado.tipo === "acerto") return "Acerto";
  return { pesou_muito: "Erro grave", pesou: "Erro", leve: "Erro leve" }[lance.achado.peso];
}
