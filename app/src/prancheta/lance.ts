// "Carregar um lance": os 10 heróis na posição real do replay num segundo da partida e as wards vivas nele.
import { pontoDaGrade, posicaoEm, trilhas, type Trajetos } from "../replay/trajetos";
import type { Ponto as PontoDoMinimapa } from "../map/coords";
import { LADO_DO_QUADRO, arredondar, type NovoIcone, type Ponto, type Time } from "./quadro";

/** Vida das wards quando o replay não registra o fim (observer 6 min, sentry 7 min). */
const VIDA_DA_WARD_S = { obs: 360, sen: 420 } as const;
const TIME_DO_REPLAY: Readonly<Record<2 | 3, Time>> = { 2: "radiant", 3: "dire" };

/** O minimapa tem a origem embaixo; o quadro, em cima. */
export const doMinimapa = ([x, y]: PontoDoMinimapa): Ponto => arredondar([x * LADO_DO_QUADRO, (1 - y) * LADO_DO_QUADRO]);

export const tempoDoLance = (t: number) => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, "0")}`;

/** "28:33" ou "1713" (segundos) viram segundos; null se não der para ler. */
export function lerTempo(texto: string): number | null {
  const partes = /^\s*(?:(\d{1,3}):)?(\d{1,4})\s*$/.exec(texto);
  if (!partes) return null;
  const minutos = Number(partes[1] ?? 0);
  const segundos = Number(partes[2]);
  if (partes[1] !== undefined && segundos >= 60) return null;
  return minutos * 60 + segundos;
}

/**
 * Ícones do lance: herói com posição gravada no segundo `t` e ward colocada antes de `t` que ainda não acabou.
 * `idDoRetrato` traduz o nome interno do replay (furion) para o id do retrato do site (natures_prophet).
 */
export function iconesDoLance(trajetos: Trajetos, t: number, idDoRetrato: (interno: string) => string): NovoIcone[] {
  const herois = trilhas(trajetos).flatMap((trilha): NovoIcone[] => {
    const ponto = posicaoEm(trilha, t);
    return ponto ? [{ peca: { tipo: "heroi", heroi: idDoRetrato(trilha.heroi), time: TIME_DO_REPLAY[trilha.time] }, ponto: doMinimapa(ponto) }] : [];
  });
  const wards = trajetos.wards
    .filter((w) => w.t <= t && t < (w.fim ?? w.t + VIDA_DA_WARD_S[w.tipo]))
    .map((w): NovoIcone => ({
      peca: { tipo: w.tipo === "obs" ? "observer" : "sentry", time: TIME_DO_REPLAY[w.time] },
      ponto: doMinimapa(pontoDaGrade(w.x, w.y, trajetos.escala)),
    }));
  return [...wards, ...herois];
}
