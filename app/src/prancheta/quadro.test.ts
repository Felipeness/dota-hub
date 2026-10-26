import { estadoInicial, passoAtual, reduzir, RAIO_DA_VISAO, type Acao, type Estado, type Peca } from "./quadro";

const radiantAxe: Peca = { tipo: "heroi", heroi: "axe", time: "radiant" };
const aplicar = (acoes: readonly Acao[], estado: Estado = estadoInicial()) => acoes.reduce(reduzir, estado);
const seta: Acao = { tipo: "desenhar", traco: { tipo: "seta", pontos: [[10, 10], [200.4, 300.6]], cor: "ouro", espessura: "media" } };

it("coloca ícones com ids novos e arredonda o ponto", () => {
  const estado = aplicar([{ tipo: "colocar", peca: radiantAxe, ponto: [10.6, 20.2] }, { tipo: "colocar", peca: radiantAxe, ponto: [5000, -3] }]);
  expect(passoAtual(estado).icones.map((i) => [i.id, i.ponto])).toEqual([["i0", [11, 20]], ["i1", [1000, 0]]]);
});

it("desfaz e refaz na ordem e uma ação nova apaga o refazer", () => {
  const estado = aplicar([{ tipo: "colocar", peca: radiantAxe, ponto: [1, 1] }, seta, { tipo: "desfazer" }]);
  expect(passoAtual(estado).tracos).toHaveLength(0);
  expect(passoAtual(reduzir(estado, { tipo: "refazer" })).tracos[0]).toMatchObject({ tipo: "seta", pontos: [[10, 10], [200, 301]] });
  const outra = reduzir(estado, { tipo: "limpar", alvo: "icones" });
  expect(outra.futuro).toHaveLength(0);
});

it.each([
  { alvo: "tracos", icones: 1, tracos: 0 },
  { alvo: "icones", icones: 0, tracos: 1 },
  { alvo: "tudo", icones: 0, tracos: 0 },
] as const)("limpar $alvo deixa $icones ícone(s) e $tracos traço(s)", ({ alvo, icones, tracos }) => {
  const passo = passoAtual(aplicar([{ tipo: "colocar", peca: radiantAxe, ponto: [1, 1] }, seta, { tipo: "limpar", alvo }]));
  expect([passo.icones.length, passo.tracos.length]).toEqual([icones, tracos]);
});

it("passo novo herda os ícones (mesmo id) sem traços; duplicar copia tudo", () => {
  const base = aplicar([{ tipo: "colocar", peca: radiantAxe, ponto: [1, 1] }, seta, { tipo: "anotar", nota: "gank" }]);
  const novo = reduzir(base, { tipo: "novoPasso" });
  expect(novo.atual).toBe(1);
  expect(passoAtual(novo)).toEqual({ icones: passoAtual(base).icones, tracos: [], nota: "" });
  expect(passoAtual(reduzir(base, { tipo: "duplicarPasso" }))).toEqual(passoAtual(base));
});

it("mover só mexe no passo atual", () => {
  const estado = aplicar([{ tipo: "colocar", peca: radiantAxe, ponto: [1, 1] }, { tipo: "novoPasso" }, { tipo: "mover", id: "i0", ponto: [500, 500] }]);
  expect(estado.presente.passos.map((p) => p.icones[0]?.ponto)).toEqual([[1, 1], [500, 500]]);
});

it("remover passo volta para o anterior e o último passo só é esvaziado", () => {
  const dois = aplicar([{ tipo: "novoPasso" }, { tipo: "removerPasso" }]);
  expect([dois.presente.passos.length, dois.atual]).toEqual([1, 0]);
  const um = aplicar([{ tipo: "colocar", peca: radiantAxe, ponto: [1, 1] }, { tipo: "removerPasso" }]);
  expect(um.presente.passos).toEqual([{ icones: [], tracos: [], nota: "" }]);
});

it("anotar não entra no histórico", () => {
  const estado = aplicar([{ tipo: "anotar", nota: "a" }, { tipo: "anotar", nota: "ab" }]);
  expect([estado.passado.length, passoAtual(estado).nota]).toEqual([0, "ab"]);
});

it("carregar lance troca os ícones do passo atual e mantém os traços", () => {
  const estado = aplicar([seta, { tipo: "carregarLance", icones: [{ peca: radiantAxe, ponto: [1, 2] }, { peca: { tipo: "observer", time: "dire" }, ponto: [3, 4] }], nota: "lance" }]);
  const passo = passoAtual(estado);
  expect(passo.icones.map((i) => i.id)).toEqual(["i1", "i2"]);
  expect([passo.tracos.length, passo.nota, estado.presente.seq]).toEqual([1, "lance", 3]);
});

it("raio das wards em unidades do quadro (1600 e 900 do jogo)", () => {
  expect(RAIO_DA_VISAO.observer).toBeCloseTo(88.03, 1);
  expect(RAIO_DA_VISAO.sentry).toBeCloseTo(49.52, 1);
});
