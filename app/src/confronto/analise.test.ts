/// <reference types="node" />
import { readFileSync } from "node:fs";
import { agruparPorPlacar, analiseSchema, blocoContra, primeiraFrase, taxaDeVitoria, type BlocoDeConfronto } from "./analise";

const analise = (id: string) => analiseSchema.parse(JSON.parse(readFileSync(`public/data/confrontos/${id}.json`, "utf-8")));

it("lê o arquivo exportado do Morphling com placar, texto e fontes legíveis", () => {
  const alchemist = blocoContra(analise("morphling"), 73);
  expect(alchemist).toMatchObject({ oponente: { nome: "Alchemist", nome_interno: "alchemist" }, vitorias: 9, jogos: 31 });
  expect(alchemist?.fontes).toContain("Partidas pro 7.40-7.41 (OpenDota)");
  expect(alchemist?.janelas).not.toMatch(/pro_dados|C:\//);
});

it("devolve null quando o herói não tem bloco contra o outro", () => {
  expect(blocoContra(analise("morphling"), 26)).toBeNull();
});

it("recusa arquivo sem confronto", () => {
  const vazio = { ...JSON.parse(readFileSync("public/data/confrontos/morphling.json", "utf-8")), confrontos: [] };
  expect(analiseSchema.safeParse(vazio).success).toBe(false);
});

const bloco = (nome: string, vitorias: number, jogos: number) =>
  ({ ...analise("morphling").confrontos[0], oponente: { id: nome, nome, nome_interno: nome, hero_id: 0 }, vitorias, jogos }) satisfies BlocoDeConfronto;

it("separa melhores e piores pelo placar, do mais forte pro mais fraco de cada lado", () => {
  const { melhores, piores } = agruparPorPlacar([bloco("a", 10, 20), bloco("b", 30, 40), bloco("c", 5, 20), bloco("d", 9, 20)]);
  expect(melhores.map((b) => b.oponente.nome)).toEqual(["b", "a"]);
  expect(piores.map((b) => b.oponente.nome)).toEqual(["c", "d"]);
  expect(taxaDeVitoria(bloco("x", 1, 4))).toBe(0.25);
});

it.each([
  { texto: "Primeira. Segunda.", previa: "Primeira." },
  { texto: "Até 7.41 vale; depois muda.", previa: "Até 7.41 vale;" },
  { texto: "Frase única sem ponto", previa: "Frase única sem ponto" },
])("primeiraFrase($texto) é $previa", ({ texto, previa }) => {
  expect(primeiraFrase(texto)).toBe(previa);
});
