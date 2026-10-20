import type { Lane } from "./tipos";

const NOME_DA_LANE: Record<Lane, string> = { safe: "safe lane", mid: "mid", off: "offlane", selva: "selva" };

export const nomeDaLane = (lane: Lane | null) => (lane ? NOME_DA_LANE[lane] : "sem dado");
const NOME_DA_POSICAO: Readonly<Record<number, string>> = {
  1: "pos 1 · carry", 2: "pos 2 · mid", 3: "pos 3 · offlane", 4: "pos 4 · suporte", 5: "pos 5 · suporte",
};

export const nomeDaPosicao = (posicao: number | null) => (posicao === null ? "posição sem dado" : NOME_DA_POSICAO[posicao] ?? "posição sem dado");
export const porcentagem = (vitorias: number, partidas: number) =>
  (partidas ? `${Math.round((100 * vitorias) / partidas)}%` : "sem partidas");
export const minutos = (segundos: number) => `${Math.floor(segundos / 60)} min`;
export const textoDoResultado = (venceu: boolean | null) => {
  if (venceu === null) return "sem resultado";
  return venceu ? "vitória" : "derrota";
};
export const hora = (ms: number) => new Date(ms).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
export const dataCurta = (segundos: number) => new Date(segundos * 1_000).toLocaleDateString("pt-BR");
