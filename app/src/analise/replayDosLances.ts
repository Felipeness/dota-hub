// Lógica pura do minimapa que toca a partida até cada lance decisivo: o que está no mapa no instante t, quanto o
// relógio anda a cada passo (rápido longe dos lances, devagar perto, pausa no lance) e para onde a câmera olha.
// O componente só desenha o que sai daqui.
import type { Objetivo } from "../data/schemas";
import type { Ponto } from "../map/coords";
import { estaMorto, wardAtiva, type Panorama, type WardNoPanorama } from "../live/partida/panorama";
import type { Lado } from "../live/rotaAproximada";
import { pontoDaGrade, posicaoEm, trilhas, type Trajetos } from "../replay/trajetos";
import type { Lance } from "./lancesDecisivos";

/**
 * O que o minimapa usa dos trajetos lidos do replay (app/src/replay/trajetos.ts): posição de cada slot do OpenDota
 * por segundo (normalizada 0-1, origem embaixo à esquerda), se o time inimigo via o herói, mortes com a posição
 * real e smokes. Sem replay, o mapa fica só com o que o OpenDota sabe: wards, torres, mortes em luta e Roshan.
 */
export type TrajetosDoMapa = Readonly<{
  posicaoEm: (slot: number, t: number) => Ponto | null;
  vistoEm: (slot: number, t: number) => boolean;
  mortes: readonly Readonly<{ t: number; vitima: number; assassino: number | null; ponto: Ponto }>[];
  smokes: readonly Readonly<{ t: number; lado: Lado; herois: readonly Readonly<{ slot: number; ini: number; fim: number | null }>[] }>[];
  totais: Readonly<{ wards: number; smokes: number; mortes: number }>;
}>;

const ladoDoTime = (time: 2 | 3): Lado => (time === 2 ? "radiant" : "dire");
const dentro = (intervalos: readonly (readonly [number, number])[], t: number) => intervalos.some(([de, ate]) => de <= t && t < ate);

/** Adapta o JSON do replay para o minimapa; o formato e as unidades estão em replay/README.md. */
export function mapaDosTrajetos(trajetos: Trajetos): TrajetosDoMapa {
  const porSlot = new Map(trilhas(trajetos).map((trilha) => [trilha.slot, trilha]));
  const vistos = new Map(trajetos.herois.map((h) => [h.slot, h.visto]));
  return {
    posicaoEm: (slot, t) => {
      const trilha = porSlot.get(slot);
      return trilha ? posicaoEm(trilha, t) : null;
    },
    vistoEm: (slot, t) => dentro(vistos.get(slot) ?? [], t),
    mortes: trajetos.mortes.map((m) => ({ t: m.t, vitima: m.vitima, assassino: m.assassino ?? null, ponto: pontoDaGrade(m.x, m.y, trajetos.escala) })),
    smokes: trajetos.smokes.map((s) => ({ t: s.t, lado: ladoDoTime(s.time), herois: s.herois.map((h) => ({ slot: h.slot, ini: h.ini, fim: h.fim ?? null })) })),
    totais: trajetos.totais,
  };
}

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
/** Smoke sem fim registrado: o efeito dura até 35 s (Dota 2 Wiki: Smoke of Deceit). */
const DURACAO_DO_SMOKE_S = 35;

export type AbateNoFeed = Readonly<{ t: number; matador: string | null; vitima: string; retratoDaVitima: string; ladoDaVitima: Lado }>;
export type MorteNoMapa = Readonly<{ t: number; ponto: Ponto; lado: Lado; minha: boolean }>;
export type HeroiNoMapa = Readonly<{
  slot: number; ponto: Ponto; rastro: readonly Ponto[]; lado: Lado; retrato: string; nome: string; eu: boolean; morto: boolean;
  /** Inimigo que o seu time não via nesse instante: aparece apagado. */
  escondido: boolean;
}>;
export type SmokeNoMapa = Readonly<{ t: number; centro: Ponto; lado: Lado; nomes: readonly string[]; retratos: readonly string[] }>;
export type QuadroDoMapa = Readonly<{
  wards: readonly WardNoPanorama[];
  torresCaidas: ReadonlySet<string>;
  mortes: readonly MorteNoMapa[];
  feed: readonly AbateNoFeed[];
  roshans: readonly Readonly<{ t: number; lado: Lado | null }>[];
  herois: readonly HeroiNoMapa[];
  smokes: readonly SmokeNoMapa[];
}>;

type Quem = Readonly<{ lado: Lado; slot: number }>;
type Jogador = Panorama["jogadores"][number];
/** Uma morte vinda do replay (posição real de todas) ou do OpenDota (posição só dentro de luta). */
type Morte = Readonly<{ t: number; vitima: Jogador; matador: string | null; ponto: Ponto | null }>;

function mortesAte(panorama: Panorama, trajetos: TrajetosDoMapa | null, t: number): Morte[] {
  const porSlot = new Map(panorama.jogadores.map((j) => [j.slot, j]));
  if (trajetos) {
    return trajetos.mortes.filter((m) => m.t <= t).flatMap((m) => {
      const vitima = porSlot.get(m.vitima);
      const matador = m.assassino === null ? null : porSlot.get(m.assassino)?.heroi.nome ?? null;
      return vitima ? [{ t: m.t, vitima, matador, ponto: m.ponto }] : [];
    });
  }
  return panorama.jogadores.flatMap((j) => j.mortes.filter((m) => m.t <= t).map((m) => ({ t: m.t, vitima: j, matador: m.matador, ponto: m.ponto })));
}

/** Mais que isso num segundo é teleporte ou respawn na fonte: o rastro recomeça dali, sem riscar o mapa inteiro. */
const SALTO_NUM_SEGUNDO = 0.05;
function semSalto(rastro: readonly Ponto[]): readonly Ponto[] {
  const ultimoSalto = rastro.findLastIndex((p, i) => {
    const antes = rastro[i - 1];
    return antes !== undefined && Math.hypot(p[0] - antes[0], p[1] - antes[1]) > SALTO_NUM_SEGUNDO;
  });
  return ultimoSalto === -1 ? rastro : rastro.slice(ultimoSalto);
}

function heroisNoMapa(panorama: Panorama, trajetos: TrajetosDoMapa, t: number, eu: Quem): HeroiNoMapa[] {
  return panorama.jogadores.flatMap((j) => {
    const ponto = trajetos.posicaoEm(j.slot, t);
    if (!ponto) return [];
    const rastro = semSalto(Array.from({ length: RASTRO_S }, (_, i) => trajetos.posicaoEm(j.slot, t - RASTRO_S + i)).filter((p): p is Ponto => p !== null));
    return [{
      slot: j.slot, ponto, rastro, lado: j.lado, retrato: j.heroi.retrato, nome: j.heroi.nome, eu: j.slot === eu.slot,
      morto: j.mortes.some((m) => estaMorto(m, t)),
      escondido: j.lado !== eu.lado && !trajetos.vistoEm(j.slot, t),
    }];
  });
}

const centroDe = (pontos: readonly Ponto[]): Ponto =>
  [pontos.reduce((s, p) => s + p[0], 0) / pontos.length, pontos.reduce((s, p) => s + p[1], 0) / pontos.length];

function smokesNoMapa(panorama: Panorama, trajetos: TrajetosDoMapa, t: number): SmokeNoMapa[] {
  const porSlot = new Map(panorama.jogadores.map((j) => [j.slot, j]));
  return trajetos.smokes.flatMap((s) => {
    const sob = s.herois.filter((h) => h.ini <= t && t < (h.fim ?? h.ini + DURACAO_DO_SMOKE_S));
    const pontos = sob.map((h) => trajetos.posicaoEm(h.slot, t)).filter((p): p is Ponto => p !== null);
    if (pontos.length === 0) return [];
    const jogadores = sob.flatMap((h) => porSlot.get(h.slot) ?? []);
    return [{ t: s.t, centro: centroDe(pontos), lado: s.lado, nomes: jogadores.map((j) => j.heroi.nome), retratos: jogadores.map((j) => j.heroi.retrato) }];
  });
}

export function quadroEm(panorama: Panorama, t: number, eu: Quem, trajetos: TrajetosDoMapa | null): QuadroDoMapa {
  const mortes = mortesAte(panorama, trajetos, t);
  return {
    wards: panorama.wards.filter((w) => wardAtiva(w, t)),
    torresCaidas: new Set(panorama.estruturas.filter((e) => e.t <= t && e.id !== null).map((e) => e.id ?? "")),
    mortes: mortes.flatMap((m) => (m.ponto && t - m.t < MORTE_VISIVEL_S ? [{ t: m.t, ponto: m.ponto, lado: m.vitima.lado, minha: m.vitima.slot === eu.slot }] : [])),
    feed: [...mortes].sort((a, b) => b.t - a.t).slice(0, ABATES_NO_FEED)
      .map((m) => ({ t: m.t, matador: m.matador, vitima: m.vitima.heroi.nome, retratoDaVitima: m.vitima.heroi.retrato, ladoDaVitima: m.vitima.lado })),
    roshans: panorama.roshans.filter((r) => r.t <= t),
    herois: trajetos ? heroisNoMapa(panorama, trajetos, t, eu) : [],
    smokes: trajetos ? smokesNoMapa(panorama, trajetos, t) : [],
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

/** Foco do lance: posição registrada da morte; senão, o herói no replay; senão, a estrutura do time que caiu logo depois. */
export function focoDoLance(lance: Lance, panorama: Panorama, objetivos: readonly Objetivo[], eu: Quem, trajetos: TrajetosDoMapa | null): Ponto | null {
  const posicao = lance.achado.evidencias.posicaoNoMapa;
  if (posicao) return [posicao.x, posicao.y];
  const noReplay = trajetos?.posicaoEm(eu.slot, lance.t);
  if (noReplay) return noReplay;
  const estrutura = panorama.estruturas.find((e) => e.lado === eu.lado && e.t >= lance.t && e.t - lance.t <= 90 && e.id !== null);
  const objetivo = estrutura && objetivos.find((o) => o.id === estrutura.id);
  return objetivo ? [objetivo.x, objetivo.y] : null;
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
