import type { Achado } from "./modelo";
import { montarRelatorio } from "./relatorio";

const achado = (parcial: Partial<Achado> & Pick<Achado, "id" | "tipo" | "peso">): Achado => ({
  minuto: null, titulo: parcial.id, oQueAconteceu: "", oQueFazer: null, porque: "", fontes: [], evidencias: {}, ...parcial,
});

it("ordena por peso (pesou_muito primeiro) e, no empate, pelo minuto mais cedo", () => {
  const leve = achado({ id: "leve", tipo: "erro", peso: "leve", minuto: 5 });
  const muitoTarde = achado({ id: "muito-tarde", tipo: "erro", peso: "pesou_muito", minuto: 40 });
  const muitoCedo = achado({ id: "muito-cedo", tipo: "erro", peso: "pesou_muito", minuto: 10 });
  const relatorio = montarRelatorio([leve, muitoTarde, muitoCedo]);
  expect(relatorio.achados.map((a) => a.id)).toEqual(["muito-cedo", "muito-tarde", "leve"]);
});

it("separa erros e acertos e resume o erro de maior peso no topo", () => {
  const erroGrande = achado({ id: "erro-grande", tipo: "erro", peso: "pesou_muito", titulo: "Morreu com a Aegis ativa", oQueFazer: "Evitar lutar sozinho" });
  const acerto = achado({ id: "acerto-1", tipo: "acerto", peso: "pesou" });
  const relatorio = montarRelatorio([erroGrande, acerto]);
  expect(relatorio.erros).toEqual([erroGrande]);
  expect(relatorio.acertos).toEqual([acerto]);
  expect(relatorio.resumo).toContain("Morreu com a Aegis ativa");
});

it("resume sem erro nenhum quando a partida só tem acertos", () => {
  const relatorio = montarRelatorio([achado({ id: "acerto-1", tipo: "acerto", peso: "leve" })]);
  expect(relatorio.resumo).toBe("Nenhum erro encontrado pelo motor de regras nesta partida.");
  expect(relatorio.treinos).toEqual([]);
});

it("sugere no máximo 3 treinos, sem repetir a mesma regra em ocorrências diferentes", () => {
  const erros = [1, 2, 3, 4].map((t) => achado({ id: `mortes-com-aegis-ativa-${t}`, tipo: "erro", peso: "pesou_muito", oQueFazer: "Evitar lutar sozinho perto do Roshan" }));
  const relatorio = montarRelatorio(erros);
  expect(relatorio.treinos).toEqual(["Evitar lutar sozinho perto do Roshan"]);
});

it("sempre devolve a lista fixa do que a análise não vê", () => {
  expect(montarRelatorio([]).oQueNaoVemos.length).toBeGreaterThan(0);
});
