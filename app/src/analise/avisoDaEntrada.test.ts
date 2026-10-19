import { avisoDaEntrada } from "./AnalisePage";

it.each([
  { nome: "partida inválida", partida: "abc", conta: "329255797", trecho: "número da partida" },
  { nome: "sem conta", partida: "9046905170", conta: null, trecho: "Falta a sua conta" },
  { nome: "conta inválida", partida: "9046905170", conta: "xyz", trecho: "número da conta" },
])("explica o que falta: $nome", ({ partida, conta, trecho }) => {
  expect(avisoDaEntrada(partida, conta)).toContain(trecho);
});
