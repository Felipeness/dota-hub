import type { Trajetos } from "../replay/trajetos";
import { doMinimapa, iconesDoLance, lerTempo } from "./lance";
import { pontosDeWard } from "./wardsDosPros";

// Grade 57 + 71 = centro do minimapa (0,5); escala 1 para ler fácil.
const trajetos: Trajetos = {
  v: 1, match: 1, build: 1, escala: 1, t0: 0, duracao: 100,
  herois: [
    { slot: 0, heroi: "furion", time: 2, xy: [128, 128, 0, 0, 0, 0], mortes: [], visto: [], niveis: [], lh: [] },
    { slot: 128, heroi: "axe", time: 3, xy: [57, 57], mortes: [], visto: [], niveis: [], lh: [] },
  ],
  wards: [
    { t: 0, tipo: "obs", time: 2, x: 57, y: 199 },
    { t: 0, fim: 1, tipo: "sen", time: 3, x: 57, y: 57 },
    { t: 5, tipo: "sen", time: 3, x: 199, y: 57 },
  ],
  smokes: [], mortes: [], torres: [], totais: { wards: 3, smokes: 0, mortes: 0 },
};

it.each([
  { texto: "28:33", segundos: 1713 },
  { texto: " 0:05 ", segundos: 5 },
  { texto: "95", segundos: 95 },
  { texto: "1:75", segundos: null },
  { texto: "abc", segundos: null },
])("lerTempo($texto) = $segundos", ({ texto, segundos }) => {
  expect(lerTempo(texto)).toBe(segundos);
});

it("doMinimapa inverte o y", () => {
  expect(doMinimapa([0.25, 0.75])).toEqual([250, 250]);
});

it("o lance traz as wards vivas e os heróis com posição no segundo, com o retrato traduzido", () => {
  const icones = iconesDoLance(trajetos, 2, (interno) => (interno === "furion" ? "natures_prophet" : interno));
  expect(icones).toEqual([
    { peca: { tipo: "observer", time: "radiant" }, ponto: [0, 0] },
    { peca: { tipo: "heroi", heroi: "natures_prophet", time: "radiant" }, ponto: [500, 500] },
  ]);
});

it("pontos de ward agrupam colocações próximas e descartam as raras", () => {
  const ward = (x: number) => ({ x, y: 0.5, lado: "radiant" as const, tipo: "observer" });
  const pontos = pontosDeWard([ward(0.5), ward(0.501), ward(0.499), ward(0.9)]);
  expect(pontos).toEqual([{ ponto: [500, 500], tipo: "observer", lado: "radiant", vezes: 3 }]);
});
