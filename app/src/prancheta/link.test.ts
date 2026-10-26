// @vitest-environment node
import { codificar, codigoDoHash, comSalvo, decodificar, hashDoQuadro, lerJson } from "./link";
import { NOMES_DAS_CORES, RUNAS, type Passo, type Ponto, type Quadro } from "./quadro";

// Gerador simples com semente (mulberry32): o teste de propriedade é reprodutível sem dependência nova.
function aleatorio(semente: number) {
  let s = semente;
  return () => {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function quadroAleatorio(r: () => number): Quadro {
  const inteiro = (max: number) => Math.floor(r() * (max + 1));
  const ponto = (): Ponto => [inteiro(1000), inteiro(1000)];
  const de = <T,>(lista: readonly T[]): T => lista[inteiro(lista.length - 1)] ?? lista[0]!;
  const passo = (): Passo => ({
    nota: "nota ção ✓ ".repeat(inteiro(3)),
    icones: Array.from({ length: inteiro(12) }, (_, i) => ({
      id: `i${i}`, ponto: ponto(),
      peca: de([{ tipo: "heroi", heroi: "anti_mage", time: "dire" }, { tipo: "runa", runa: de(RUNAS) }, { tipo: "sentry", time: "radiant" }] as const),
    })),
    tracos: Array.from({ length: inteiro(6) }, (_, i) => de([
      { id: `t${i}`, tipo: "livre", pontos: Array.from({ length: 2 + inteiro(40) }, ponto), cor: de(NOMES_DAS_CORES), espessura: "fina" },
      { id: `t${i}`, tipo: "circulo", centro: ponto(), raio: 1 + inteiro(300), cor: de(NOMES_DAS_CORES), espessura: "grossa" },
      { id: `t${i}`, tipo: "texto", ponto: ponto(), texto: "rota & smoke", cor: "ouro" },
    ] as const)),
  });
  return { v: 1, seq: inteiro(500), passos: Array.from({ length: 1 + inteiro(5) }, passo) };
}

it("codificar e decodificar devolvem o mesmo quadro (100 quadros aleatórios)", async () => {
  const r = aleatorio(42);
  for (let i = 0; i < 100; i++) {
    const quadro = quadroAleatorio(r);
    const codigo = await codificar(quadro);
    expect(codigo).toMatch(/^[A-Za-z0-9_-]+$/);
    expect(await decodificar(codigo)).toEqual({ ok: true, quadro });
  }
});

it.each([
  { caso: "base64 quebrado", codigo: "!!!" },
  { caso: "deflate inválido", codigo: "AAAA" },
])("decodificar recusa $caso", async ({ codigo }) => {
  expect((await decodificar(codigo)).ok).toBe(false);
});

it.each([
  { caso: "JSON quebrado", texto: "{", motivo: "não é um JSON válido" },
  { caso: "versão errada", texto: JSON.stringify({ v: 2, seq: 0, passos: [{ icones: [], tracos: [], nota: "" }] }), motivo: "formato de prancheta inválido" },
  { caso: "ponto fora do mapa", texto: JSON.stringify({ v: 1, seq: 0, passos: [{ icones: [{ id: "a", peca: { tipo: "courier", time: "dire" }, ponto: [1001, 0] }], tracos: [], nota: "" }] }), motivo: "formato de prancheta inválido" },
])("lerJson recusa $caso", ({ texto, motivo }) => {
  expect(lerJson(texto)).toEqual({ ok: false, motivo });
});

it("o hash leva e devolve o código", () => {
  expect(codigoDoHash(hashDoQuadro("abc"))).toBe("abc");
  expect(codigoDoHash("#outra")).toBeNull();
});

it("salvar com o mesmo nome substitui e vai para o topo", () => {
  const quadro: Quadro = { v: 1, seq: 0, passos: [{ icones: [], tracos: [], nota: "" }] };
  const lista = comSalvo([{ nome: "a", em: "1", quadro }, { nome: "b", em: "1", quadro }], { nome: "b", em: "2", quadro });
  expect(lista.map((s) => [s.nome, s.em])).toEqual([["b", "2"], ["a", "1"]]);
});
