import { ordenarSecoes } from "./secoes";

const secao = (id: string) => ({ id, titulo: id, texto_md: "", confianca: "alta" as const });

it("abre com identidade e DNA, segue o contrato, põe as desconhecidas antes e fecha com correções e método", () => {
  const ids = ["correcoes", "smoke", "nova_b", "metodo", "draft", "dna", "nova_a", "identidade", "limitacoes"].map(secao);
  expect(ordenarSecoes(ids).map((s) => s.id)).toEqual(["identidade", "dna", "draft", "smoke", "nova_b", "nova_a", "correcoes", "metodo", "limitacoes"]);
});
