import type { ContraInimigo } from "./analise";
import { filtrarCounters, type Counter } from "./countersDosPros";

const counter = (chave: string): Counter => ({
  item: { id: 1, chave, nome: chave, texto: "", custo: 0 } as unknown as Counter["item"], motivo: "m", prova: "p", mecanica: "Prende ou atordoa",
});
const CONTRA: ContraInimigo = {
  jogos: 100, vitorias: 50, builds: [], ordem: [],
  itens: [{ chave: "manta", n: 90, mediana: 15 }, { chave: "sphere", n: 12, mediana: 30 }, { chave: "glimmer_cape", n: 2, mediana: 20 }],
};
const par = (inimigo: string, contra: ContraInimigo | null = CONTRA) =>
  ({ meuNome: "Medusa", inimigo: { chave: inimigo, nome: inimigo }, contra, spikes: [] });

it.each([
  { chave: "black_king_bar", inimigo: "doom_bringer", usado: false, razao: /atravessa imunidade/ },
  { chave: "black_king_bar", inimigo: "lina", usado: false, razao: /0% das partidas/ },
  { chave: "glimmer_cape", inimigo: "lina", usado: false, razao: /2% das partidas/ },
  { chave: "sphere", inimigo: "lina", usado: true, razao: null },
  { chave: "manta", inimigo: "doom_bringer", usado: true, razao: null },
])("$chave contra $inimigo: usado=$usado", ({ chave, inimigo, usado, razao }) => {
  const { usados, genericos } = filtrarCounters([counter(chave)], par(inimigo));
  expect(usados.length === 1).toBe(usado);
  if (razao) expect(genericos[0]?.razao).toMatch(razao);
});

it("ordena os usados pelo que os pros mais fazem e mantém item da build geral sem dado do par", () => {
  const { usados } = filtrarCounters([counter("sphere"), counter("manta")], par("lina"));
  expect(usados.map((u) => u.item.chave)).toEqual(["manta", "sphere"]);
  const semPar = filtrarCounters([counter("manta")], { ...par("lina", null), spikes: [{ item: "manta", nome: "Manta", minuto: 15, n: 9, chave: true }] });
  expect(semPar.usados).toHaveLength(1);
});
