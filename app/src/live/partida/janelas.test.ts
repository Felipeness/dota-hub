import type { EventoDaPartida } from "./detalhe";
import { desenhosDaRota, estaNaJanela, eventosDaJanela, janelasDaPartida, manchasDaJanela, trechosDaTrilha } from "./janelas";

const evento = (t: number, tipo: EventoDaPartida["tipo"] = "abate", ponto: EventoDaPartida["ponto"] = null): EventoDaPartida =>
  ({ t, tipo, texto: `${tipo} ${t}`, ponto });

it.each([
  { janela: "0-10", t: -60, dentro: true }, { janela: "0-10", t: 599, dentro: true }, { janela: "0-10", t: 600, dentro: false },
  { janela: "10-20", t: 600, dentro: true }, { janela: "30+", t: 5_000, dentro: true }, { janela: "toda", t: 9_999, dentro: true },
] as const)("t=$t na janela $janela: $dentro", ({ janela, t, dentro }) => {
  expect(estaNaJanela(janela, t)).toBe(dentro);
});

it("partida de 25 min não tem a janela de 30 em diante", () => {
  expect(janelasDaPartida(25 * 60).map((j) => j.id)).toEqual(["0-10", "10-20", "20-30"]);
});

it("numera os eventos da janela na ordem do tempo e deixa os camps fora da lista", () => {
  const eventos = [evento(900, "morte"), evento(650), evento(700, "camp"), evento(1_500)];
  expect(eventosDaJanela(eventos, "10-20").map((e) => [e.n, e.t, e.tipo])).toEqual([[1, 650, "abate"], [2, 900, "morte"]]);
});

it("só eventos com posição viram pino, com o número dentro", () => {
  const eventos = eventosDaJanela([evento(100, "observer", [0.3, 0.4]), evento(200)], "0-10");
  const pinos = desenhosDaRota({ eventos, camps: [], trilha: [], janela: "0-10" });
  expect(pinos).toEqual([expect.objectContaining({ tipo: "pino", x: 0.3, y: 0.4, conteudo: "1", rotulo: "1. observer 100", forma: "losango" })]);
});

it("a trilha quebra na morte e muda de cor quando muda de janela", () => {
  const trilha = [
    { t: 590, ponto: [0.1, 0.1] as const }, { t: 595, ponto: null }, { t: 600, ponto: [0.2, 0.2] as const },
    { t: 605, ponto: [0.3, 0.3] as const }, { t: 610, ponto: [0.4, 0.4] as const },
  ].map((a) => ({ t: a.t, ponto: a.ponto && ([a.ponto[0], a.ponto[1]] as [number, number]) }));
  const trechos = trechosDaTrilha(trilha, "toda");
  expect(trechos.map((t) => t.tipo === "linha" && [t.cor, t.pontos.length])).toEqual([["radiant", 1], ["info", 3]]);
  expect(trechosDaTrilha(trilha, "0-10")).toHaveLength(1);
});

it("o mapa de calor da lane só aparece na janela de 0 a 10 e na partida toda", () => {
  const manchas = [{ x: 0.5, y: 0.5, peso: 1 }];
  expect(manchasDaJanela(manchas, "0-10")).toBe(manchas);
  expect(manchasDaJanela(manchas, "toda")).toBe(manchas);
  expect(manchasDaJanela(manchas, "10-20")).toEqual([]);
});
