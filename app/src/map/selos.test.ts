import type { Passo } from "../data/schemas";
import { caminhoDaFuga, selosDaRota, trechosDaRota } from "./selos";

const passo = (n: number, x: number, y: number, extra: Partial<Passo> = {}): Passo => ({
  n, alvo: "a", x, y, rotulo: `P${n}`, minuto: `${n}:00`, acao: "", risco: "seguro", ...extra,
});

it("junta no mesmo selo os passos do mesmo lugar, no centro deles", () => {
  const selos = selosDaRota([passo(1, 0.8, 0.2, { lugar: 0 }), passo(2, 0.5, 0.5, { lugar: 1 }), passo(3, 0.82, 0.2, { lugar: 0 })]);
  expect(selos).toHaveLength(2);
  expect(selos[0]?.passos.map((p) => p.n)).toEqual([1, 3]);
  expect(selos[0]?.x).toBeCloseTo(0.81);
});

it("sem lugar, junta só os passos na mesma posição", () => {
  expect(selosDaRota([passo(1, 0.1, 0.1), passo(2, 0.1, 0.1), passo(3, 0.2, 0.1)])).toHaveLength(2);
});

it("marca o trecho de teleporte como salto e pula o trecho vazio do mesmo lugar", () => {
  const rota = {
    passos: [passo(1, 0, 0), passo(2, 0, 0), passo(3, 1, 1, { via: "tp" })],
    caminhos: [[], [[0, 0], [1, 1]]] satisfies [number, number][][],
  };
  expect(trechosDaRota(rota)).toEqual([{ pontos: [[0, 0], [1, 1]], salto: true }]);
});

it("fuga usa o caminho exportado e cai na reta sem ele", () => {
  const passos = [passo(1, 0.1, 0.2)];
  const fuga = { de_passo: 1, x: 0.3, y: 0.4, rotulo: "FUGA: T1" };
  expect(caminhoDaFuga({ passos, caminhos: [], fuga })).toEqual([[0.1, 0.2], [0.3, 0.4]]);
  expect(caminhoDaFuga({ passos, caminhos: [], fuga: { ...fuga, caminho: [[0.1, 0.2], [0.2, 0.3], [0.3, 0.4]] } })).toHaveLength(3);
});
