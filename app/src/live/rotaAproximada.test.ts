import type { Consultar } from "./consulta";
import { ok } from "./erros";
import { partidaFonte } from "./fonte/schemas";
import { celulaParaNorm, laneDasManchas, manchasDaLane, regiaoDoPonto, rotaDaPartida } from "./rotaAproximada";
import { PARTIDA, amostra, consultaGravada } from "./teste/gravados";

it("célula da grade vira o centro da célula normalizado", () => {
  expect(celulaParaNorm(57)).toBeCloseTo(0.5 / 142);
  expect(celulaParaNorm(128)).toBeCloseTo(71.5 / 142);
  expect(celulaParaNorm(300)).toBe(1);
});

it("manchas têm peso relativo à célula mais visitada", () => {
  expect(manchasDaLane({ "128": { "128": 10, "130": 5 } })).toEqual([
    { x: 0.504, y: 0.504, peso: 1 }, { x: 0.504, y: 0.518, peso: 0.5 },
  ]);
});

it.each([
  { ponto: { x: 0.5, y: 0.52 }, regiao: "meio" }, { ponto: { x: 0.15, y: 0.7 }, regiao: "cima" }, { ponto: { x: 0.8, y: 0.2 }, regiao: "baixo" },
])("$ponto fica em $regiao", ({ ponto, regiao }) => {
  expect(regiaoDoPonto(ponto)).toBe(regiao);
});

it.each([
  { lado: "radiant", x: 0.8, y: 0.18, lane: "safe" }, { lado: "dire", x: 0.8, y: 0.18, lane: "off" },
  { lado: "dire", x: 0.2, y: 0.8, lane: "safe" }, { lado: "radiant", x: 0.5, y: 0.5, lane: "mid" },
] as const)("$lado em ($x, $y) é $lane", ({ lado, x, y, lane }) => {
  expect(laneDasManchas([{ x, y, peso: 1 }], lado)).toBe(lane);
});

it("sem manchas não há lane", () => {
  expect(laneDasManchas([], "radiant")).toBeNull();
});

const frescor = { buscadoEm: 1, vencido: false };
const partida = (lanePos: unknown) => ({ match_id: 9, players: [{ account_id: 7, player_slot: 0, hero_id: 1, lane_pos: lanePos, lane_role: 1 }] });
const consultarCom = (dados: unknown): Consultar => async ({ schema }) => ok({ valor: schema.parse(dados), frescor });

it("rota da conta na partida, com a lane registrada pela fonte", async () => {
  const r = await rotaDaPartida(consultarCom(partida({ "170": { "80": 3 } })), "9", 7);
  expect(r).toMatchObject({ ok: true, dados: { partida: "9", conta: 7, analisada: true, laneDasManchas: "safe", laneRegistrada: "safe" } });
});

it("partida sem análise devolve analisada falso e sem manchas", async () => {
  const r = await rotaDaPartida(consultarCom(partida(null)), "9", 7);
  expect(r).toMatchObject({ ok: true, dados: { analisada: false, manchas: [], laneDasManchas: null } });
});

it("conta fora da partida é não encontrada", async () => {
  expect(await rotaDaPartida(consultarCom(partida(null)), "9", 8)).toMatchObject({ ok: false, erro: { codigo: "NAO_ENCONTRADO" } });
});

it("número de partida inválido nem consulta a fonte", async () => {
  // vi.fn<Consultar>() perde o genérico de Consultar no tsc; o contador mantém o tipo.
  let consultas = 0;
  const consultar: Consultar = (pedido) => { consultas += 1; return consultarCom(partida(null))(pedido); };
  expect(await rotaDaPartida(consultar, "abc", 7)).toMatchObject({ ok: false, erro: { codigo: "ENTRADA_INVALIDA" } });
  expect(consultas).toBe(0);
});

it("rota real gravada tem manchas dentro do mapa", async () => {
  const jogador = partidaFonte.parse(amostra("partida")).players.find((p) => p.account_id && p.lane_pos);
  const r = await rotaDaPartida(consultaGravada(), String(PARTIDA), jogador?.account_id ?? 0);
  expect(r.ok && r.dados.analisada).toBe(true);
  expect(r.ok && r.dados.manchas.every((m) => m.x >= 0 && m.x <= 1 && m.y >= 0 && m.y <= 1)).toBe(true);
});
