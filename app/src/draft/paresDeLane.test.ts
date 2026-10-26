import { frasePlacar, paresSchema, placarDoPar } from "./paresDeLane";

const PARES = paresSchema.parse({ "128": { "120": [392, 216] }, "46": { "85": [196, 104, 1] } });

describe("placarDoPar", () => {
  it.each([
    { nome: "par só com números", meu: 128, oponente: 120, esperado: { jogos: 392, vitorias: 216, analiseEscrita: false } },
    { nome: "par com análise escrita", meu: 46, oponente: 85, esperado: { jogos: 196, vitorias: 104, analiseEscrita: true } },
    { nome: "par sem partidas", meu: 128, oponente: 1, esperado: null },
    { nome: "herói fora do arquivo", meu: 999, oponente: 120, esperado: null },
  ])("lê o $nome", ({ meu, oponente, esperado }) => {
    expect(placarDoPar(PARES, meu, oponente)).toEqual(esperado);
  });
});

describe("frasePlacar", () => {
  it.each([
    { jogos: 392, vitorias: 216, frase: "Snapfire vence 55,1% contra Pangolier em 392 partidas pro" },
    { jogos: 30, vitorias: 15, frase: "Snapfire vence 50% contra Pangolier em 30 partidas pro" },
    { jogos: 29, vitorias: 20, frase: "Snapfire vence 69% contra Pangolier em 29 partidas pro (amostra pequena)" },
    { jogos: 1, vitorias: 1, frase: "Snapfire vence 100% contra Pangolier em 1 partida pro (amostra pequena)" },
  ])("escreve $jogos jogos como: $frase", ({ jogos, vitorias, frase }) => {
    expect(frasePlacar("Snapfire", "Pangolier", { jogos, vitorias, analiseEscrita: false })).toBe(frase);
  });
});

describe("paresSchema", () => {
  it("recusa placar com marca diferente de 1", () => {
    expect(paresSchema.safeParse({ "1": { "2": [10, 5, 2] } }).success).toBe(false);
  });
});
