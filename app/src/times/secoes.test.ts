import { ordenarSecoes, type Bloco } from "./secoes";

const secao = (id: string) => ({ id, titulo: id, texto_md: "", confianca: "alta" as const });
const nomes = (blocos: Bloco[]) => blocos.map((b) => (b.tipo === "secao" ? b.secao.id : "[bloco assinatura]"));

it("abre com identidade e DNA, segue o contrato, põe as desconhecidas antes e fecha com correções e método", () => {
  const ids = ["correcoes", "smoke", "nova_b", "metodo", "draft", "dna", "nova_a", "identidade", "limitacoes"].map(secao);
  expect(nomes(ordenarSecoes(ids))).toEqual([
    "identidade", "dna", "draft", "smoke", "[bloco assinatura]", "nova_b", "nova_a", "correcoes", "metodo", "limitacoes",
  ]);
});

it("troca a seção de texto da assinatura pelo bloco estruturado, uma vez só e no lugar dela", () => {
  const ids = ["assinatura", "dna", "derrota", "tres_niveis"].map(secao);
  expect(nomes(ordenarSecoes(ids))).toEqual(["dna", "derrota", "[bloco assinatura]", "tres_niveis"]);
});
