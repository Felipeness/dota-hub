// Lógica pura do minimapa que toca a partida até cada lance decisivo: o que está no mapa no instante t (fracionário,
// posições interpoladas entre as amostras de 1 s), quanto o relógio anda a cada quadro (rápido longe dos lances,
// 5x perto, pausa no segundo exato do lance) e para onde a câmera olha. O componente só desenha o que sai daqui.
import type { Objetivo } from "../data/schemas";
import type { Ponto } from "../map/coords";
import { wardAtiva, type Panorama, type WardNoPanorama } from "../live/partida/panorama";
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
  mortoEm: (slot: number, t: number) => boolean;
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
  const mortos = new Map(trajetos.herois.map((h) => [h.slot, h.mortes]));
  return {
    posicaoEm: (slot, t) => {
      const trilha = porSlot.get(slot);
      return trilha ? posicaoEm(trilha, t) : null;
    },
    vistoEm: (slot, t) => dentro(vistos.get(slot) ?? [], t),
    mortoEm: (slot, t) => dentro(mortos.get(slot) ?? [], t),
    mortes: trajetos.mortes.map((m) => ({ t: m.t, vitima: m.vitima, assassino: m.assassino ?? null, ponto: pontoDaGrade(m.x, m.y, trajetos.escala) })),
    smokes: trajetos.smokes.map((s) => ({ t: s.t, lado: ladoDoTime(s.time), herois: s.herois.map((h) => ({ slot: h.slot, ini: h.ini, fim: h.fim ?? null })) })),
    totais: trajetos.totais,
  };
}

/** Raio em unidades do mundo (Dota 2 Wiki 7.41: Observer 1600, Sentry 900 de true sight), na escala do minimapa (grade de 128 unidades, 142 células). */
const UNIDADES_POR_LADO_DO_MAPA = 128 * 142;
export const RAIO_DE_VISAO: Readonly<Record<WardNoPanorama["tipo"], number>> = {
  observer: 1600 / UNIDADES_POR_LADO_DO_MAPA,
  sentry: 900 / UNIDADES_POR_LADO_DO_MAPA,
};
/** O ✕ da morte some em 10 s. */
export const MORTE_VISIVEL_S = 10;
const ABATES_NO_FEED = 4;
export const RASTRO_S = 20;
/** Smoke sem fim registrado: o efeito dura até 35 s (Dota 2 Wiki: Smoke of Deceit). */
const DURACAO_DO_SMOKE_S = 35;
const FOLGA_DO_ANEL_DO_SMOKE = 0.02;

export type AbateNoFeed = Readonly<{
  t: number; matador: string | null; retratoDoMatador: string | null; vitima: string; retratoDaVitima: string; ladoDaVitima: Lado;
}>;
/** `idade` em segundos desde a morte, para o ✕ ir sumindo. */
export type MorteNoMapa = Readonly<{ t: number; ponto: Ponto; lado: Lado; minha: boolean; idade: number }>;
export type HeroiNoMapa = Readonly<{
  slot: number; ponto: Ponto; rastro: readonly Ponto[]; lado: Lado; retrato: string; nome: string; eu: boolean;
  /** Inimigo que o seu time não via nesse instante: aparece apagado. */
  escondido: boolean;
}>;
export type SmokeNoMapa = Readonly<{ t: number; centro: Ponto; raio: number; lado: Lado; nomes: readonly string[]; retratos: readonly string[] }>;
export type WardNoMapa = WardNoPanorama & Readonly<{ opacidade: number }>;
export type QuadroDoMapa = Readonly<{
  wards: readonly WardNoMapa[];
  torresCaidas: ReadonlySet<string>;
  mortes: readonly MorteNoMapa[];
  feed: readonly AbateNoFeed[];
  roshans: readonly Readonly<{ t: number; lado: Lado | null }>[];
  herois: readonly HeroiNoMapa[];
  smokes: readonly SmokeNoMapa[];
}>;

export type Quem = Readonly<{ lado: Lado; slot: number }>;
type Jogador = Panorama["jogadores"][number];
/** Uma morte vinda do replay (posição real de todas) ou do OpenDota (posição só dentro de luta). */
type Morte = Readonly<{ t: number; vitima: Jogador; matador: Jogador | null; nomeDoMatador: string | null; ponto: Ponto | null }>;

function mortesAte(panorama: Panorama, trajetos: TrajetosDoMapa | null, t: number): Morte[] {
  const porSlot = new Map(panorama.jogadores.map((j) => [j.slot, j]));
  const porNome = new Map(panorama.jogadores.map((j) => [j.heroi.nome, j]));
  if (trajetos) {
    return trajetos.mortes.filter((m) => m.t <= t).flatMap((m) => {
      const vitima = porSlot.get(m.vitima);
      const matador = m.assassino === null ? null : porSlot.get(m.assassino) ?? null;
      return vitima ? [{ t: m.t, vitima, matador, nomeDoMatador: matador?.heroi.nome ?? null, ponto: m.ponto }] : [];
    });
  }
  return panorama.jogadores.flatMap((j) => j.mortes.filter((m) => m.t <= t)
    .map((m) => ({ t: m.t, vitima: j, matador: m.matador ? porNome.get(m.matador) ?? null : null, nomeDoMatador: m.matador, ponto: m.ponto })));
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

/** Rastro: uma amostra por segundo nos últimos 20 s (só depois do último respawn), mais o ponto interpolado de agora. */
function rastroDe(trajetos: TrajetosDoMapa, slot: number, t: number, agora: Ponto): readonly Ponto[] {
  const segundos = Array.from({ length: RASTRO_S }, (_, i) => Math.floor(t) - RASTRO_S + 1 + i);
  const ultimoMorto = segundos.findLastIndex((s) => trajetos.mortoEm(slot, s));
  const amostras = segundos.slice(ultimoMorto + 1).map((s) => trajetos.posicaoEm(slot, s)).filter((p): p is Ponto => p !== null);
  return semSalto([...amostras, agora]);
}

/** Herói some só enquanto está morto (intervalos de morte do replay); envolvido no lance nunca aparece apagado. */
function heroisNoMapa(panorama: Panorama, trajetos: TrajetosDoMapa, t: number, { eu, envolvidos }: Olhar): HeroiNoMapa[] {
  return panorama.jogadores.flatMap((j) => {
    const ponto = trajetos.posicaoEm(j.slot, t);
    if (!ponto || trajetos.mortoEm(j.slot, t)) return [];
    return [{
      slot: j.slot, ponto, rastro: rastroDe(trajetos, j.slot, t, ponto), lado: j.lado, retrato: j.heroi.retrato, nome: j.heroi.nome,
      eu: j.slot === eu.slot, escondido: j.lado !== eu.lado && !envolvidos.has(j.slot) && !trajetos.vistoEm(j.slot, t),
    }];
  });
}

/** ~1500 unidades do mundo na escala do minimapa. */
const RAIO_DOS_ENVOLVIDOS = 1500 / (128 * 142);

/** Quem participou do lance: o matador da morte do jogador naquele segundo e quem estava a ~1500 unidades dele. */
export function envolvidosNoLance(lance: Lance, panorama: Panorama, trajetos: TrajetosDoMapa, eu: Quem): ReadonlySet<number> {
  const matadores = trajetos.mortes.filter((m) => m.vitima === eu.slot && Math.abs(m.t - lance.t) <= 2).flatMap((m) => (m.assassino === null ? [] : [m.assassino]));
  const meu = trajetos.posicaoEm(eu.slot, lance.t);
  const perto = meu ? panorama.jogadores.filter((j) => {
    const p = trajetos.posicaoEm(j.slot, lance.t);
    return p !== null && Math.hypot(p[0] - meu[0], p[1] - meu[1]) <= RAIO_DOS_ENVOLVIDOS;
  }).map((j) => j.slot) : [];
  return new Set([...matadores, ...perto]);
}

const centroDe = (pontos: readonly Ponto[]): Ponto =>
  [pontos.reduce((s, p) => s + p[0], 0) / pontos.length, pontos.reduce((s, p) => s + p[1], 0) / pontos.length];

function smokesNoMapa(panorama: Panorama, trajetos: TrajetosDoMapa, t: number): SmokeNoMapa[] {
  const porSlot = new Map(panorama.jogadores.map((j) => [j.slot, j]));
  return trajetos.smokes.flatMap((s) => {
    const sob = s.herois.filter((h) => h.ini <= t && t < (h.fim ?? h.ini + DURACAO_DO_SMOKE_S));
    const pontos = sob.map((h) => trajetos.posicaoEm(h.slot, t)).filter((p): p is Ponto => p !== null);
    if (pontos.length === 0) return [];
    const centro = centroDe(pontos);
    const raio = Math.max(...pontos.map((p) => Math.hypot(p[0] - centro[0], p[1] - centro[1]))) + FOLGA_DO_ANEL_DO_SMOKE;
    const jogadores = sob.flatMap((h) => porSlot.get(h.slot) ?? []);
    return [{ t: s.t, centro, raio, lado: s.lado, nomes: jogadores.map((j) => j.heroi.nome), retratos: jogadores.map((j) => j.heroi.retrato) }];
  });
}

/** De onde o mapa é olhado: o jogador, os trajetos (se houver) e quem está em destaque no lance pausado. */
export type Olhar = Readonly<{ eu: Quem; trajetos: TrajetosDoMapa | null; envolvidos: ReadonlySet<number> }>;
/** A ward vai sumindo nos últimos 30 s de vida. */
const FIM_DA_WARD_S = 30;

export function quadroEm(panorama: Panorama, t: number, olhar: Olhar): QuadroDoMapa {
  const { eu, trajetos } = olhar;
  const mortes = mortesAte(panorama, trajetos, t);
  return {
    wards: panorama.wards.filter((w) => wardAtiva(w, t)).map((w) => ({ ...w, opacidade: Math.min(1, (w.ate - t) / FIM_DA_WARD_S) })),
    torresCaidas: new Set(panorama.estruturas.filter((e) => e.t <= t && e.id !== null).map((e) => e.id ?? "")),
    mortes: mortes.flatMap((m) => (m.ponto && t - m.t < MORTE_VISIVEL_S
      ? [{ t: m.t, ponto: m.ponto, lado: m.vitima.lado, minha: m.vitima.slot === eu.slot, idade: t - m.t }] : [])),
    feed: [...mortes].sort((a, b) => b.t - a.t).slice(0, ABATES_NO_FEED).map((m) => ({
      t: m.t, matador: m.nomeDoMatador, retratoDoMatador: m.matador?.heroi.retrato ?? null,
      vitima: m.vitima.heroi.nome, retratoDaVitima: m.vitima.heroi.retrato, ladoDaVitima: m.vitima.lado,
    })),
    roshans: panorama.roshans.filter((r) => r.t <= t),
    herois: trajetos ? heroisNoMapa(panorama, trajetos, t, olhar) : [],
    smokes: trajetos ? smokesNoMapa(panorama, trajetos, t) : [],
  };
}

/* Relógio contínuo: segundos de partida por segundo real. */
export const VELOCIDADES = [1, 5, 15, 30, 60] as const;
export type Velocidade = (typeof VELOCIDADES)[number];
export const VELOCIDADE_PADRAO: Velocidade = 30;
/** Nos 20 s antes de um lance o relógio cai para 5x (ou menos, se a escolhida for menor). */
const PERTO_DO_LANCE_S = 20;
const VELOCIDADE_PERTO = 5;
/** Quanto tempo real o relógio fica parado no segundo exato do lance para dar tempo de ler o card. */
export const PAUSA_NO_LANCE_MS = 6_000;

export function velocidadeEm(t: number, lances: readonly Lance[], escolhida: Velocidade): number {
  const perto = lances.some((l) => l.t > t && l.t - t <= PERTO_DO_LANCE_S);
  return perto ? Math.min(escolhida, VELOCIDADE_PERTO) : escolhida;
}

export type Relogio = Readonly<{ t: number; tocando: boolean; pausaRestanteMs: number; ultimoLance: number | null }>;
type Passo = Readonly<{ ms: number; lances: readonly Lance[]; fim: number; velocidade: Velocidade }>;

/** Um quadro do relógio tocando: anda pela velocidade, para no segundo do próximo lance e segura a pausa; para no fim. */
export function avancar(relogio: Relogio, { ms, lances, fim, velocidade }: Passo): Relogio {
  if (!relogio.tocando) return relogio;
  if (relogio.pausaRestanteMs > 0) return { ...relogio, pausaRestanteMs: Math.max(0, relogio.pausaRestanteMs - ms) };
  const proximo = lances.find((l) => l.t > relogio.t && l.t !== relogio.ultimoLance);
  const andou = relogio.t + velocidadeEm(relogio.t, lances, velocidade) * (ms / 1_000);
  if (proximo && andou >= proximo.t) return { ...relogio, t: proximo.t, pausaRestanteMs: PAUSA_NO_LANCE_MS, ultimoLance: proximo.t };
  if (andou >= fim) return { ...relogio, t: fim, tocando: false };
  return { ...relogio, t: andou };
}

/* Câmera: fecha no lance ativo, mapa inteiro entre eles. */
const ANTES_DO_LANCE_S = 20;
const DEPOIS_DO_LANCE_S = 25;
const ZOOM_NO_LANCE = 2.7;
/** Heróis a até esta distância do jogador no lance entram no enquadramento. */
const RAIO_DO_LANCE = 0.12;
export type Camera = Readonly<{ centro: Ponto; zoom: number }>;
export const MAPA_INTEIRO: Camera = { centro: [0.5, 0.5], zoom: 1 };

export const lanceAtivoEm = (t: number, lances: readonly Lance[]): Lance | null =>
  lances.find((l) => t >= l.t - ANTES_DO_LANCE_S && t <= l.t + DEPOIS_DO_LANCE_S) ?? null;

/** Centro do jogador e de quem estava perto dele no segundo do lance (o replay sabe onde todos estavam). */
function centroNoReplay(trajetos: TrajetosDoMapa, panorama: Panorama, eu: Quem, t: number): Ponto | null {
  const meu = trajetos.posicaoEm(eu.slot, t);
  if (!meu) return null;
  const perto = panorama.jogadores.flatMap((j) => {
    const p = trajetos.posicaoEm(j.slot, t);
    return p && Math.hypot(p[0] - meu[0], p[1] - meu[1]) <= RAIO_DO_LANCE ? [p] : [];
  });
  return centroDe([meu, ...perto]);
}

/** Foco do lance: o jogador e quem estava perto (replay); senão, a posição da morte; senão, a estrutura que caiu logo depois. */
export function focoDoLance(lance: Lance, panorama: Panorama, objetivos: readonly Objetivo[], eu: Quem, trajetos: TrajetosDoMapa | null): Ponto | null {
  const noReplay = trajetos && centroNoReplay(trajetos, panorama, eu, lance.t);
  if (noReplay) return noReplay;
  const posicao = lance.achado.evidencias.posicaoNoMapa;
  if (posicao) return [posicao.x, posicao.y];
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

/** Meia-vida da aproximação da câmera: chega a ~97% do alvo em ~1 s, com freada suave. */
const MEIA_VIDA_DA_CAMERA_MS = 200;
const PERTO_O_BASTANTE = 1e-3;

/** Aproxima a câmera do alvo por um quadro de `ms` (amortecimento exponencial: sem degrau, sem passar do ponto). */
export function aproximarCamera(atual: Camera, alvo: Camera, ms: number): Camera {
  const fator = 1 - 0.5 ** (ms / MEIA_VIDA_DA_CAMERA_MS);
  const proximo: Camera = {
    centro: [atual.centro[0] + (alvo.centro[0] - atual.centro[0]) * fator, atual.centro[1] + (alvo.centro[1] - atual.centro[1]) * fator],
    zoom: atual.zoom + (alvo.zoom - atual.zoom) * fator,
  };
  return cameraChegou(proximo, alvo) ? alvo : proximo;
}

export const cameraChegou = (a: Camera, b: Camera) =>
  Math.abs(a.zoom - b.zoom) < PERTO_O_BASTANTE && Math.hypot(a.centro[0] - b.centro[0], a.centro[1] - b.centro[1]) < PERTO_O_BASTANTE;

/** Janela visível no SVG (y para baixo), de lado 1/zoom, centrada na câmera. */
export function janelaDaCamera({ centro, zoom }: Camera): Readonly<{ x: number; y: number; lado: number }> {
  const lado = 1 / zoom;
  return { x: centro[0] - lado / 2, y: 1 - centro[1] - lado / 2, lado };
}

/** Rótulo do lance no card: gravidade pelo peso do achado. */
export function rotuloDoLance(lance: Lance): string {
  if (lance.achado.tipo === "acerto") return "Acerto";
  return { pesou_muito: "Erro grave", pesou: "Erro", leve: "Erro leve" }[lance.achado.peso];
}

/** Os títulos dos achados terminam em ", 24:58"; no card o horário já está no sobretítulo. */
export const tituloSemTempo = (titulo: string) => titulo.replace(/,\s*\d+:\d{2}$/, "");
