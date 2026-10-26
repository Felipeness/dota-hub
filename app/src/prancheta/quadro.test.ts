import { acaoDoArrasto } from "./geometria";
import { estadoInicial, passoAtual, reduzir, RAIO_DA_VISAO, type Acao, type Estado, type NovoTraco, type Peca } from "./quadro";

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

it("transladar só mexe no passo atual", () => {
  const estado = aplicar([{ tipo: "colocar", peca: radiantAxe, ponto: [1, 1] }, { tipo: "novoPasso" }, { tipo: "transladar", id: "i0", dx: 499, dy: 499.4 }]);
  expect(estado.presente.passos.map((p) => p.icones[0]?.ponto)).toEqual([[1, 1], [500, 500]]);
});

const comTraco = (traco: NovoTraco) => aplicar([{ tipo: "desenhar", traco }]);
const tracoDepois = (traco: NovoTraco, acao: Acao) => passoAtual(reduzir(comTraco(traco), acao)).tracos[0];
const livre: NovoTraco = { tipo: "livre", pontos: [[10, 10], [20, 30], [40, 20]], cor: "ouro", espessura: "fina" };
const tracejada: NovoTraco = { tipo: "linha", pontos: [[100, 100], [200, 100]], cor: "ouro", espessura: "fina" };
const flecha: NovoTraco = { tipo: "seta", pontos: [[100, 100], [200, 100]], cor: "ouro", espessura: "fina" };
const roda: NovoTraco = { tipo: "circulo", centro: [500, 500], raio: 50, cor: "azul", espessura: "media" };
const rotulo: NovoTraco = { tipo: "texto", ponto: [300, 300], texto: "gank", cor: "branco" };

it.each([
  { caso: "livre anda inteiro", traco: livre, dx: 5, dy: 5, esperado: { pontos: [[15, 15], [25, 35], [45, 25]] } },
  { caso: "livre freia na borda sem deformar", traco: livre, dx: -50, dy: 0, esperado: { pontos: [[0, 10], [10, 30], [30, 20]] } },
  { caso: "linha anda as duas pontas", traco: tracejada, dx: 10.4, dy: -20, esperado: { pontos: [[110, 80], [210, 80]] } },
  { caso: "seta freia na borda direita", traco: flecha, dx: 900, dy: 0, esperado: { pontos: [[900, 100], [1000, 100]] } },
  { caso: "círculo anda o centro e mantém o raio", traco: roda, dx: -100, dy: 30, esperado: { centro: [400, 530], raio: 50 } },
  { caso: "texto anda o ponto", traco: rotulo, dx: 1, dy: -1, esperado: { ponto: [301, 299] } },
] as const)("transladar: $caso", ({ traco, dx, dy, esperado }) => {
  expect(tracoDepois(traco, { tipo: "transladar", id: "i0", dx, dy })).toMatchObject(esperado);
});

it.each([
  { caso: "raio do círculo pela borda", traco: roda, alca: "raio", ponto: [500, 620], esperado: { centro: [500, 500], raio: 120 } },
  { caso: "raio nunca abaixo do mínimo", traco: roda, alca: "raio", ponto: [501, 500], esperado: { raio: 4 } },
  { caso: "início da seta mira de novo", traco: flecha, alca: "inicio", ponto: [50, 60], esperado: { pontos: [[50, 60], [200, 100]] } },
  { caso: "fim da linha mira de novo", traco: tracejada, alca: "fim", ponto: [1200, 300.6], esperado: { pontos: [[100, 100], [1000, 301]] } },
  { caso: "texto não redimensiona", traco: rotulo, alca: "fim", ponto: [0, 0], esperado: { ponto: [300, 300] } },
  { caso: "livre não redimensiona", traco: livre, alca: "inicio", ponto: [0, 0], esperado: { pontos: [[10, 10], [20, 30], [40, 20]] } },
] as const)("ajustar: $caso", ({ traco, alca, ponto, esperado }) => {
  expect(tracoDepois(traco, { tipo: "ajustar", id: "i0", alca, ponto: [ponto[0], ponto[1]] })).toMatchObject(esperado);
});

it.each([
  { caso: "mover", arrasto: { id: "i0", alca: "mover", base: [500, 450], desde: [500, 450], agora: [560, 470] } },
  { caso: "redimensionar", arrasto: { id: "i0", alca: "raio", base: [550, 500], desde: [552, 501], agora: [600, 501] } },
] as const)("um arrasto ($caso) vira um passo de desfazer só", ({ arrasto }) => {
  const antes = comTraco(roda);
  const edicao = acaoDoArrasto({ ...arrasto, agora: arrasto.desde });
  expect(edicao).toBeNull();
  const acao = acaoDoArrasto(arrasto);
  if (!acao) throw new Error("arrasto sem ação");
  const depois = reduzir(antes, acao);
  expect(depois.passado).toHaveLength(antes.passado.length + 1);
  expect(passoAtual(depois).tracos[0]).not.toEqual(passoAtual(antes).tracos[0]);
  expect(reduzir(depois, { tipo: "desfazer" }).presente).toBe(antes.presente);
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
