import { agruparPorLetra } from "./GlossaryPage";

const termo = (id: string, titulo: string) => ({ id, titulo, patch: "7.41", fontes: [], secoes: { basico: "", avancado: null }, origem: { basico: null, avancado: null }, links: [], extras: {} });

it("agrupa os termos pela letra inicial, sem acento, em ordem alfabética", () => {
  const grupos = agruparPorLetra([termo("b", "Bounty"), termo("a", "Aegis"), termo("e", "Écran"), termo("an", "Ancient")]);
  expect(grupos.map(([letra, itens]) => [letra, itens.map((t) => t.id)])).toEqual([["A", ["a", "an"]], ["B", ["b"]], ["E", ["e"]]]);
});
