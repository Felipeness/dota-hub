import { iniciarReproducao, reproduzir } from "./reproducao";

const inicio = iniciarReproducao(600);

it.each([
  { nome: "parado não anda", estado: inicio, acao: { tipo: "avancar", dtMs: 1000 } as const, t: 0, tocando: false },
  { nome: "tocando anda na velocidade", estado: { ...inicio, tocando: true }, acao: { tipo: "avancar", dtMs: 1000 } as const, t: 16, tocando: true },
  { nome: "para no fim", estado: { ...inicio, tocando: true, t: 590 }, acao: { tipo: "avancar", dtMs: 1000 } as const, t: 600, tocando: false },
  { nome: "tocar no fim recomeça", estado: { ...inicio, t: 600 }, acao: { tipo: "alternar" } as const, t: 0, tocando: true },
  { nome: "ir limita ao fim", estado: inicio, acao: { tipo: "ir", t: 9999 } as const, t: 600, tocando: false },
])("$nome", ({ estado, acao, t, tocando }) => {
  expect(reproduzir(estado, acao)).toMatchObject({ t, tocando });
});

it("troca a velocidade", () => {
  expect(reproduzir(inicio, { tipo: "velocidade", v: 32 }).velocidade).toBe(32);
});
