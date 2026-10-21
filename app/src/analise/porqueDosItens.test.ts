import { readFileSync } from "node:fs";
import { fichaSchema, heroiSchema } from "../data/schemas";
import { porqueDosItens } from "./porqueDosItens";

const ler = (caminho: string) => JSON.parse(readFileSync(`public/data/${caminho}`, "utf-8"));

it("usa o porquê tático do guia completo (Medusa: Power Treads e Manta)", () => {
  const porque = porqueDosItens(heroiSchema.parse(ler("herois/medusa.json")), null, 1);
  expect(porque.power_treads).toMatch(/intervalo de ataque/);
  expect(porque.manta).toMatch(/ilusões/);
});

it("sem guia, usa a ficha da posição jogada", () => {
  const ficha = fichaSchema.parse(ler("fichas/abaddon.json"));
  const posicao = ficha.posicoes[0]?.posicao ?? null;
  expect(Object.keys(porqueDosItens(null, ficha, posicao)).length).toBeGreaterThan(0);
});

it("sem guia nem ficha, não inventa", () => {
  expect(porqueDosItens(null, null, 1)).toEqual({});
});
