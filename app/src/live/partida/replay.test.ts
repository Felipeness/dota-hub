import { comPosicaoDoReplay, eventosDoReplay, pontoNoTempo, trilhaDoJogador } from "./replay";
import { replayDaPartidaSchema, type ReplayDaPartida } from "./replaySchema";

const replay: ReplayDaPartida = {
  match_id: "9", passo_s: 5, inicio_s: 0,
  herois: [{ slot: 129, heroi: "slark", conta: 7, xy: [100, 200, -1, -1, 300, 400] }],
  camps: [{ t: 400, slot: 129, x: 0.2, y: 0.3, creeps: 3 }, { t: 410, slot: 0, x: 0.5, y: 0.5, creeps: 2 }],
  smokes: [{ t: 900, slot: 129, x: 0.4, y: 0.6 }], wards: [], compras: [],
};

it("trilha do jogador traz o tempo de cada amostra e null quando morto", () => {
  expect(trilhaDoJogador(replay, 129)).toEqual([{ t: 0, ponto: [0.1, 0.2] }, { t: 5, ponto: null }, { t: 10, ponto: [0.3, 0.4] }]);
  expect(trilhaDoJogador(replay, 1)).toEqual([]);
});

it("ponto no tempo usa a amostra mais perto e fica dentro da partida", () => {
  const trilha = trilhaDoJogador(replay, 129);
  expect(pontoNoTempo(trilha, 9)).toEqual([0.3, 0.4]);
  expect(pontoNoTempo(trilha, 999)).toEqual([0.3, 0.4]);
  expect(pontoNoTempo(trilha, 6)).toBeNull();
});

it("abate sem posição ganha a do replay; ward mantém a do OpenDota", () => {
  const trilha = trilhaDoJogador(replay, 129);
  const eventos = comPosicaoDoReplay([
    { t: 0, tipo: "abate", texto: "a", ponto: null }, { t: 0, tipo: "observer", texto: "w", ponto: [0.9, 0.9] },
  ], trilha);
  expect(eventos.map((e) => e.ponto)).toEqual([[0.1, 0.2], [0.9, 0.9]]);
});

it("camps e smokes do replay viram eventos só do jogador", () => {
  expect(eventosDoReplay(replay, 129).map((e) => [e.tipo, e.t])).toEqual([["camp", 400], ["smoke", 900]]);
});

it("schema recusa xy ímpar e posição fora do mapa", () => {
  expect(replayDaPartidaSchema.safeParse({ ...replay, herois: [{ ...replay.herois[0], xy: [1] }] }).success).toBe(false);
  expect(replayDaPartidaSchema.safeParse({ ...replay, smokes: [{ t: 1, slot: 1, x: 2, y: 0 }] }).success).toBe(false);
});
