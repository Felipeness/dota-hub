import { z } from "zod";
import type { Ponto } from "../../map/coords";
import { pontoEm } from "../../map/trilhas";
import { registrarNoConsole } from "../registro";
import type { EventoDaPartida, TipoDeEvento } from "./detalhe";
import type { ReplayDaPartida } from "./replaySchema";

export type AmostraDaTrilha = Readonly<{ t: number; ponto: Ponto | null }>;

const TEMPO_MAXIMO_DA_GERACAO_MS = 10 * 60_000;
/** Eventos do OpenDota sem posição que ganham a posição do jogador no replay. */
const POSICAO_PELO_REPLAY: ReadonlySet<TipoDeEvento> = new Set(["abate", "morte", "runa", "buyback"]);

export const urlDoReplay = (partida: string) => `/data/partidas/${partida}.json`;

/** O plugin do vite (só no `npm run dev`) liga esta variável; no build e sem o plugin o botão some. */
export const geracaoLocalDisponivel = () => import.meta.env.DEV && import.meta.env.VITE_REPLAY_LOCAL === "1";

export function trilhaDoJogador(replay: ReplayDaPartida, slot: number): AmostraDaTrilha[] {
  const heroi = replay.herois.find((h) => h.slot === slot);
  if (!heroi) return [];
  return Array.from({ length: heroi.xy.length / 2 }, (_, i) => ({ t: replay.inicio_s + i * replay.passo_s, ponto: pontoEm(heroi.xy, i) }));
}

export function pontoNoTempo(trilha: readonly AmostraDaTrilha[], t: number): Ponto | null {
  const [primeira, segunda] = trilha;
  if (!primeira || !segunda) return null;
  const indice = Math.round((t - primeira.t) / (segunda.t - primeira.t));
  return trilha[Math.min(Math.max(indice, 0), trilha.length - 1)]?.ponto ?? null;
}

export function comPosicaoDoReplay(eventos: readonly EventoDaPartida[], trilha: readonly AmostraDaTrilha[]): EventoDaPartida[] {
  return eventos.map((e) => (POSICAO_PELO_REPLAY.has(e.tipo) ? { ...e, ponto: pontoNoTempo(trilha, e.t) ?? e.ponto } : e));
}

export function eventosDoReplay(replay: ReplayDaPartida, slot: number): EventoDaPartida[] {
  const doJogador = <T extends { slot: number }>(lista: readonly T[]) => lista.filter((e) => e.slot === slot);
  return [
    ...doJogador(replay.camps).map((c): EventoDaPartida => ({ t: c.t, tipo: "camp", texto: `Camp limpo (${c.creeps} creeps)`, ponto: [c.x, c.y] })),
    ...doJogador(replay.smokes).map((s): EventoDaPartida => ({ t: s.t, tipo: "smoke", texto: "Smoke usada", ponto: [s.x, s.y] })),
  ];
}

export type ResultadoDaGeracao = { readonly ok: true } | { readonly ok: false; readonly erro: string };
const erroDoPlugin = z.object({ erro: z.string() });

export async function gerarReplayLocal(partida: string): Promise<ResultadoDaGeracao> {
  try {
    const resposta = await fetch(`/api/local/replay/${partida}`, { method: "POST", signal: AbortSignal.timeout(TEMPO_MAXIMO_DA_GERACAO_MS) });
    if (resposta.ok) return { ok: true };
    const corpo = erroDoPlugin.safeParse(await resposta.json().catch(() => null));
    return { ok: false, erro: corpo.success ? corpo.data.erro : `o servidor local respondeu ${resposta.status}` };
  } catch (causa) {
    registrarNoConsole({ nivel: "warn", operacao: "replay-local", codigo: null, detalhe: `${partida}: ${String(causa)}` });
    return { ok: false, erro: "o servidor local não respondeu" };
  }
}
