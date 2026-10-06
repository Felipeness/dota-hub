import type { Fase, HeroiResumo, Spike } from "../data/schemas";
import { normalizar } from "../routes/filtros";

// Fase sem fim (ate null) vale até o fim do jogo.
export function faseNoMinuto(fases: readonly Fase[], minuto: number): Fase | null {
  return fases.find((f) => f.de <= minuto && minuto < (f.ate ?? Infinity)) ?? null;
}

export function proximoSpike(spikes: readonly Spike[], minuto: number): Spike | null {
  return spikes.find((s) => s.minuto !== null && s.minuto >= minuto) ?? null;
}

export function filtrarHerois(herois: readonly HeroiResumo[], texto: string): HeroiResumo[] {
  const alvo = normalizar(texto.trim());
  return herois.filter((h) => normalizar(`${h.nome} ${h.id}`).includes(alvo));
}
