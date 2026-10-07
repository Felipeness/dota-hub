import type { Consultar } from "./consulta";
import { buscar, consultaDeBusca, lerConta, lerId, montarResumo, nomeDaMedalha, resumoDaConta, venceu } from "./contas";
import { ok } from "./erros";
import { YATORO, consultaGravada } from "./teste/gravados";

const frescor = { buscadoEm: 10, vencido: false };
const partida = (slot: number, radiantWin: boolean | null, extra = {}) => ({
  match_id: 1, player_slot: slot, radiant_win: radiantWin, hero_id: 8, start_time: 100, duration: 1800,
  kills: 5, deaths: 2, assists: 7, lane_role: 1, version: 21, ...extra,
});
const nomes = { "8": { id: 8, localized_name: "Juggernaut" }, "1": { id: 1, localized_name: "Anti-Mage" } };

it.each([
  { slot: 0, radiantWin: true, esperado: true },
  { slot: 128, radiantWin: true, esperado: false },
  { slot: 130, radiantWin: false, esperado: true },
  { slot: 0, radiantWin: null, esperado: null },
])("slot $slot com radiant_win $radiantWin venceu = $esperado", ({ slot, radiantWin, esperado }) => {
  expect(venceu(partida(slot, radiantWin))).toBe(esperado);
});

it.each([
  { rankTier: null, nome: null }, { rankTier: 11, nome: "Herald 1" }, { rankTier: 62, nome: "Ancient 2" }, { rankTier: 72, nome: "Divine 2" },
  { rankTier: 80, nome: "Immortal" }, { rankTier: 95, nome: null },
])("medalha $rankTier é $nome", ({ rankTier, nome }) => {
  expect(nomeDaMedalha(rankTier)).toBe(nome);
});

it.each([
  { texto: " 321580662 ", id: 321580662 }, { texto: "abc", id: null }, { texto: "1".repeat(13), id: null }, { texto: "", id: null },
])("lerId('$texto') = $id", ({ texto, id }) => {
  expect(lerId(texto)).toBe(id);
});

it.each([
  { texto: "321580662", id: 321580662 },
  { texto: "https://www.dotabuff.com/players/321580662", id: 321580662 },
  { texto: "opendota.com/players/106305042/matches", id: 106305042 },
  { texto: "https://stratz.com/players/103735745?x=1", id: 103735745 },
  { texto: "https://www.dotabuff.com/esports/teams/7119388", id: null },
  { texto: "Yatoro", id: null },
])("lerConta('$texto') = $id", ({ texto, id }) => {
  expect(lerConta(texto)).toBe(id);
});

it("monta o resumo com 10 heróis, nomes, medalha, lane e partidas sem análise", () => {
  const resumo = montarResumo({
    id: 7, jogador: { profile: { account_id: 7, personaname: "Ness" }, rank_tier: 62 },
    vitorias: { win: 60, lose: 40 },
    herois: Array.from({ length: 12 }, (_, i) => ({ hero_id: i + 1, games: 20 - i, win: 10 })),
    recentes: [partida(0, true), partida(129, true, { lane_role: null, version: null })],
    nomes, frescor,
  });
  expect(resumo.conta).toEqual({ id: 7, nome: "Ness", medalha: "Ancient 2" });
  expect(resumo.totais).toEqual({ partidas: 100, vitorias: 60 });
  expect(resumo.ultimas).toEqual({ partidas: 2, vitorias: 1 });
  expect(resumo.herois).toHaveLength(10);
  expect(resumo.herois[0]).toEqual({ heroi: "Anti-Mage", partidas: 20, vitorias: 10 });
  expect(resumo.partidas[0]).toMatchObject({ heroi: "Juggernaut", venceu: true, lane: "safe", analisada: true });
  expect(resumo.partidas[1]).toMatchObject({ venceu: false, lane: null, analisada: false });
  expect(resumo.temDadosPublicos).toBe(true);
});

it("conta privada (sem partidas públicas) fica sem dados públicos", () => {
  const resumo = montarResumo({
    id: 7, jogador: { profile: { account_id: 7, personaname: null }, rank_tier: null }, vitorias: { win: 0, lose: 0 },
    herois: [], recentes: [], nomes, frescor,
  });
  expect(resumo.conta.nome).toBe("Conta 7");
  expect(resumo.temDadosPublicos).toBe(false);
});

it("conta sem perfil gasta só uma consulta e devolve não encontrado", async () => {
  const caminhos: string[] = [];
  const consultar: Consultar = async ({ caminho, schema }) => {
    caminhos.push(caminho);
    return ok({ valor: schema.parse({ rank_tier: null }), frescor });
  };
  expect(await resumoDaConta(consultar, 1)).toMatchObject({ ok: false, erro: { codigo: "NAO_ENCONTRADO" } });
  expect(caminhos).toEqual(["/players/1"]);
});

it("conta que a fonte não conhece (404) devolve não encontrado", async () => {
  expect(await resumoDaConta(consultaGravada(), 4_294_967_200)).toMatchObject({ ok: false, erro: { codigo: "NAO_ENCONTRADO" } });
});

it("resumo da conta real gravada tem 10 heróis e as partidas recentes", async () => {
  const r = await resumoDaConta(consultaGravada(), YATORO);
  expect(r.ok && r.dados.herois).toHaveLength(10);
  expect(r.ok && r.dados.partidas.length).toBeGreaterThan(0);
  expect(r.ok && r.dados.temDadosPublicos).toBe(true);
});

it.each([
  { texto: "a", valida: false }, { texto: "  ", valida: false }, { texto: "x".repeat(65), valida: false }, { texto: " yatoro ", valida: true },
])("consulta '$texto' válida = $valida", ({ texto, valida }) => {
  expect(consultaDeBusca(texto).ok).toBe(valida);
});

it("busca devolve até 10 contas e os times cujo nome contém o texto, sem acento", async () => {
  const consultar: Consultar = async ({ caminho, schema }) => ok({
    valor: schema.parse(caminho.startsWith("/search")
      ? Array.from({ length: 12 }, (_, i) => ({ account_id: i, personaname: `spirit ${i}`, last_match_time: null }))
      : [{ team_id: 1, name: "Team Spírit", wins: 5, losses: 1, last_match_time: 5 }, { team_id: 2, name: "Outro", wins: 0, losses: 0, last_match_time: 9 }]),
    frescor,
  });
  const r = await buscar(consultar, "SPIRIT");
  expect(r.ok && r.dados.contas).toHaveLength(10);
  expect(r.ok && r.dados.times.map((t) => t.id)).toEqual([1]);
});

it("busca real gravada acha contas pelo nome", async () => {
  const r = await buscar(consultaGravada(), "yatoro");
  expect(r.ok && r.dados.contas.length).toBeGreaterThan(0);
});
