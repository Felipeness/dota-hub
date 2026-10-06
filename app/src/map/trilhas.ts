import type { Trajetoria } from "../data/schemas";
import type { Ponto } from "./coords";

export type Lado = "radiant" | "dire";
export type Trilha = { id: string; rotulo: string; lado: Lado; destaque: boolean; rastro: Ponto[]; atual: Ponto | null };
export type Marca = { id: string; x: number; y: number; tipo: "ward" | "morte"; lado: Lado; rotulo: string };

const MORTE_VISIVEL_S = 20;
const RASTRO_PADRAO_S = 60;

// xy vem em milésimos, aos pares por passo; -1 marca o herói morto naquele passo.
export function pontoEm(xy: readonly number[], indice: number): Ponto | null {
  const x = xy[indice * 2];
  const y = xy[indice * 2 + 1];
  if (x === undefined || y === undefined || x < 0 || y < 0) return null;
  return [x / 1000, y / 1000];
}

const ehPonto = (p: Ponto | null): p is Ponto => p !== null;

export function trilhasNoTempo(replay: Trajetoria, t: number, rastroS = RASTRO_PADRAO_S): Trilha[] {
  const atual = Math.floor(Math.min(Math.max(t, 0), replay.fim_s) / replay.passo_s);
  const inicio = Math.max(0, atual - Math.floor(rastroS / replay.passo_s));
  const indices = Array.from({ length: atual - inicio + 1 }, (_, k) => inicio + k);
  return replay.herois.map((h) => ({
    id: `${replay.match_id}:${h.slot}`,
    rotulo: h.jogador ?? h.heroi,
    lado: h.lado,
    destaque: replay.focos.includes(h.slot),
    rastro: indices.map((i) => pontoEm(h.xy, i)).filter(ehPonto),
    atual: pontoEm(h.xy, atual),
  }));
}

export function marcasNoTempo(replay: Trajetoria, t: number): Marca[] {
  const wards = replay.wards
    .filter((w) => w.t <= t && t < w.ate)
    .map((w): Marca => ({ id: `ward-${w.t}-${w.x}-${w.y}`, x: w.x, y: w.y, tipo: "ward", lado: w.lado, rotulo: `${w.tipo} ${w.lado}` }));
  const mortes = replay.mortes
    .filter((m) => m.t <= t && t < m.t + MORTE_VISIVEL_S)
    .map((m): Marca => ({ id: `morte-${m.t}-${m.heroi}`, x: m.x, y: m.y, tipo: "morte", lado: m.lado, rotulo: `Morte de ${m.heroi}` }));
  return [...wards, ...mortes];
}
