import { CAMERA_INTEIRA, interpolarPassos, itemNoPonto, pontaDaSeta, zoomNoPonto } from "./geometria";
import type { Passo } from "./quadro";

const passo: Passo = {
  nota: "",
  icones: [{ id: "h", peca: { tipo: "heroi", heroi: "axe", time: "radiant" }, ponto: [500, 500] }],
  tracos: [
    { id: "linha", tipo: "linha", pontos: [[100, 100], [300, 100]], cor: "ouro", espessura: "fina" },
    { id: "circulo", tipo: "circulo", centro: [800, 800], raio: 50, cor: "azul", espessura: "media" },
    { id: "texto", tipo: "texto", ponto: [100, 700], texto: "gank", cor: "branco" },
    { id: "livre", tipo: "livre", pontos: [[600, 100], [650, 150], [700, 100]], cor: "rosa", espessura: "grossa" },
  ],
};

it.each([
  { ponto: [200, 104], esperado: "linha", caso: "perto da linha" },
  { ponto: [200, 130], esperado: null, caso: "longe da linha" },
  { ponto: [850, 800], esperado: "circulo", caso: "na borda do círculo" },
  { ponto: [800, 800], esperado: null, caso: "no meio do círculo vazio" },
  { ponto: [130, 700], esperado: "texto", caso: "dentro da caixa do texto" },
  { ponto: [650, 152], esperado: "livre", caso: "no traço livre" },
  { ponto: [510, 490], esperado: "h", caso: "em cima do herói" },
] as const)("itemNoPonto acha $esperado $caso", ({ ponto, esperado }) => {
  expect(itemNoPonto(passo, ponto, { tolerancia: 6, escala: 1, icones: true })).toBe(esperado);
});

it("itemNoPonto ignora ícones quando pedido (borracha só de traços)", () => {
  expect(itemNoPonto(passo, [500, 500], { tolerancia: 6, escala: 1, icones: false })).toBeNull();
});

it("a ponta da seta fica no fim e aponta para trás", () => {
  const [ponta, a, b] = pontaDaSeta([0, 0], [100, 0], 6);
  expect(ponta).toEqual([100, 0]);
  expect(a[0]).toBeLessThan(100);
  expect(a[1]).toBeCloseTo(-b[1]);
});

it("zoom mantém o foco parado e respeita os limites", () => {
  const perto = zoomNoPonto(CAMERA_INTEIRA, 2, [250, 250]);
  expect(perto).toEqual({ lado: 500, x: 125, y: 125 });
  expect(zoomNoPonto(perto, 0.1, [0, 0])).toEqual(CAMERA_INTEIRA);
  expect(zoomNoPonto(CAMERA_INTEIRA, 100, [1000, 1000]).lado).toBe(125);
});

it("interpolar anda com quem existe nos dois passos, some e aparece com os outros", () => {
  const de: Passo = { ...passo, icones: [...passo.icones, { id: "sai", peca: { tipo: "runa", runa: "bounty" }, ponto: [0, 0] }] };
  const para: Passo = { ...passo, icones: [{ ...passo.icones[0]!, ponto: [600, 400] }, { id: "entra", peca: { tipo: "courier", time: "dire" }, ponto: [9, 9] }] };
  const meio = interpolarPassos(de, para, 0.5);
  expect(meio.map((i) => [i.icone.id, i.icone.ponto, i.opacidade])).toEqual([
    ["h", [550, 450], 1], ["sai", [0, 0], 0.5], ["entra", [9, 9], 0.5],
  ]);
});
