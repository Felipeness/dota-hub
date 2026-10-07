import { expect, it } from "vitest";
import { converterReplay } from "./converterReplay.ts";

const cabecalho = "t,slot,heroi,gx,gy,vivo,nivel";
const linhas = [
  "-5,129,slark,128,128,1,1", "0,129,slark,128,128,1,1", "1,129,slark,129,128,1,1", "5,129,slark,199,57,1,1",
  "10,129,slark,130,130,0,1", "12,129,slark,140,140,1,1", "0,0,axe,64,64,1,1",
];
const eventos = [
  { t: 3, tipo: "morte_creep", slot: 129, categoria: "neutro" }, { t: 6, tipo: "morte_creep", slot: 129, categoria: "neutro" },
  { t: 40, tipo: "morte_creep", slot: 129, categoria: "neutro" }, { t: 4, tipo: "morte_creep", slot: 129, categoria: "lane" },
  { t: 2, tipo: "smoke", slot: 129, nome: "item_smoke_of_deceit", gx: 128, gy: 128 },
  { t: -50, tipo: "ward", slot: 0, nome: "observer", gx: 100, gy: 100 },
  { t: -80, tipo: "compra", slot: 129, nome: "item_tango" }, { t: 1, tipo: "dano", alvo: "x" },
];
const meta = { jogadores: [{ slot: 129, conta: 321580662, heroi: "slark" }, { slot: 0, conta: 0, heroi: "axe" }] };

const converter = () => converterReplay({
  matchId: "9", posicoesCsv: [cabecalho, ...linhas].join("\n"), eventosJsonl: eventos.map((e) => JSON.stringify(e)).join("\n"), metaJson: JSON.stringify(meta),
});

it("amostra a posição a cada 5 s a partir da buzina, com -1 quando morto ou sem dado", () => {
  const slark = converter().herois.find((h) => h.slot === 129);
  expect(slark?.xy).toEqual([500, 500, 1000, 0, -1, -1]);
  expect(converter().herois.find((h) => h.slot === 0)).toMatchObject({ conta: null, xy: [49, 49, -1, -1, -1, -1] });
});

it("neutros do mesmo herói em sequência viram um camp na posição dele", () => {
  expect(converter().camps).toEqual([
    { t: 3, slot: 129, x: expect.any(Number), y: expect.any(Number), creeps: 2 },
  ]);
});

it("smokes, wards e compras saem com tempo, slot e nome limpo", () => {
  const replay = converter();
  expect(replay.smokes).toEqual([{ t: 2, slot: 129, x: 0.5, y: 0.5 }]);
  expect(replay.wards).toEqual([{ t: -50, slot: 0, tipo: "observer", x: 0.303, y: 0.303 }]);
  expect(replay.compras).toEqual([{ t: -80, slot: 129, item: "tango" }]);
});
