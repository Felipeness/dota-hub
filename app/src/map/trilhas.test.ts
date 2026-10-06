import type { Trajetoria } from "../data/schemas";
import { marcasNoTempo, pontoEm, trilhasNoTempo } from "./trilhas";

const replay: Trajetoria = {
  match_id: "1", passo_s: 5, fim_s: 10, focos: [0],
  herois: [{ slot: 0, heroi: "sven", lado: "radiant", jogador: "Lou", xy: [100, 200, -1, -1, 300, 400] }],
  wards: [{ t: 0, ate: 6, x: 0.5, y: 0.5, lado: "dire", tipo: "observer" }],
  mortes: [{ t: 5, x: 0.2, y: 0.3, heroi: "sven", lado: "radiant" }],
};

it("converte milésimos e trata morto como ausente", () => {
  expect(pontoEm([100, 200], 0)).toEqual([0.1, 0.2]);
  expect(pontoEm([-1, -1], 0)).toBeNull();
  expect(pontoEm([100, 200], 3)).toBeNull();
});

it("monta rastro e posição atual sem os pontos de morto", () => {
  const [trilha] = trilhasNoTempo(replay, 10, 60);
  expect(trilha).toMatchObject({ rotulo: "Lou", destaque: true, atual: [0.3, 0.4] });
  expect(trilha?.rastro).toEqual([[0.1, 0.2], [0.3, 0.4]]);
  expect(trilhasNoTempo(replay, 5)[0]?.atual).toBeNull();
});

it("mostra ward só enquanto existe e morte por 20 s", () => {
  expect(marcasNoTempo(replay, 3).map((m) => m.tipo).sort()).toEqual(["ward"]);
  expect(marcasNoTempo(replay, 7).map((m) => m.tipo)).toEqual(["morte"]);
});
