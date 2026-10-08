import { amostra } from "./amostras/gravadas";
import { matchupsFonte, popularidadeFonte } from "./fonte";
import { vantagem, vezesComprado } from "./vantagem";

const linha = (games_played: number, wins: number) => [{ hero_id: 1, games_played, wins }];

it.each([
  { nome: "vence com folga", jogos: 400, vitorias: 240, veredito: "sua" },
  { nome: "perde com folga", jogos: 400, vitorias: 160, veredito: "dele" },
  { nome: "margem cruza 50%", jogos: 100, vitorias: 55, veredito: "equilibrado" },
  { nome: "amostra pequena", jogos: 12, vitorias: 11, veredito: "pouco-dado" },
  { nome: "sem jogos", jogos: 0, vitorias: 0, veredito: "sem-dado" },
])("$nome vira $veredito", ({ jogos, vitorias, veredito }) => {
  expect(vantagem(linha(jogos, vitorias), 1).veredito).toBe(veredito);
});

it("inimigo fora da lista não tem dado", () => {
  expect(vantagem(linha(100, 50), 2).veredito).toBe("sem-dado");
});

it("lê o confronto real do Slark contra o Dark Seer (id 55)", () => {
  const v = vantagem(matchupsFonte.parse(amostra("matchups-93")), 55);
  expect(v.jogos).toBeGreaterThan(0);
  expect(v.taxa).toBeCloseTo(v.vitorias / v.jogos);
});

it("soma as compras do item em todas as fases", () => {
  expect(vezesComprado({ start_game_items: { "16": 3 }, mid_game_items: { "16": 2 } }, 16)).toBe(5);
  expect(vezesComprado(popularidadeFonte.parse(amostra("popularidade-93")), 999_999)).toBe(0);
});
