import type { Consultar } from "./consulta";
import { ok } from "./erros";
import { SPIRIT, consultaGravada } from "./teste/gravados";
import { resumoDoTime } from "./times";

const frescor = { buscadoEm: 1, vencido: false };
const respostas: Readonly<Record<string, unknown>> = {
  "/teams/5": { team_id: 5, name: "Team Spirit", wins: 10, losses: 4, last_match_time: 1 },
  "/teams/5/players": [
    { account_id: 1, name: "Yatoro", games_played: 50, wins: 30, is_current_team_member: true },
    { account_id: 2, name: "Antigo", games_played: 80, wins: 40, is_current_team_member: false },
  ],
  "/teams/5/matches": Array.from({ length: 25 }, (_, i) => ({
    match_id: i, radiant_win: true, radiant: i % 2 === 0, duration: 2000, start_time: 100 - i, league_name: "TI", opposing_team_name: null,
  })),
  "/teams/6": null,
};
const consultar: Consultar = async ({ caminho, schema }) => ok({ valor: schema.parse(respostas[caminho]), frescor });

it("time com jogadores atuais e 20 partidas, venceu pelo lado", async () => {
  const r = await resumoDoTime(consultar, 5);
  expect(r.ok && r.dados.time).toEqual({ id: 5, nome: "Team Spirit", vitorias: 10, derrotas: 4 });
  expect(r.ok && r.dados.jogadores.map((j) => j.nome)).toEqual(["Yatoro"]);
  expect(r.ok && r.dados.partidas).toHaveLength(20);
  expect(r.ok && r.dados.partidas.slice(0, 2).map((p) => p.venceu)).toEqual([true, false]);
  expect(r.ok && r.dados.partidas[0]?.adversario).toBe("adversário sem nome");
});

it("time vazio na fonte é não encontrado", async () => {
  expect(await resumoDoTime(consultar, 6)).toMatchObject({ ok: false, erro: { codigo: "NAO_ENCONTRADO" } });
});

it("time real gravado tem nome, jogadores atuais e partidas", async () => {
  const r = await resumoDoTime(consultaGravada(), SPIRIT);
  expect(r.ok && r.dados.time.nome.length).toBeGreaterThan(0);
  expect(r.ok && r.dados.jogadores.length).toBeGreaterThan(0);
  expect(r.ok && r.dados.partidas.length).toBeGreaterThan(0);
});
