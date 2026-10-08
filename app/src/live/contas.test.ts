import type { Consultar } from "./consulta";
import {
  buscar, consultaDeBusca, heroisMaisFortes, lerConta, lerId, montarResumo, nomeDaMedalha, resumoDaConta, resumoDoQueMelhorar, venceu,
} from "./contas";
import { ok } from "./erros";
import type { BenchmarksFonte } from "./fonte/schemas";
import { YATORO, consultaGravada } from "./teste/gravados";
import type { PartidaDaConta } from "./tipos";

const frescor = { buscadoEm: 10, vencido: false };
const partida = (slot: number, radiantWin: boolean | null, extra = {}) => ({
  match_id: 1, player_slot: slot, radiant_win: radiantWin, hero_id: 8, start_time: 100, duration: 1800,
  kills: 5, deaths: 2, assists: 7, gold_per_min: 450, xp_per_min: 600, last_hits: 150, hero_damage: 8_000, hero_healing: 0,
  lane_role: 1, version: 21, ...extra,
});
const nomes = { "8": { id: 8, name: "npc_dota_hero_juggernaut", localized_name: "Juggernaut" }, "1": { id: 1, name: "npc_dota_hero_antimage", localized_name: "Anti-Mage" } };
const percentisDe = (p50: number) => [{ percentile: 0.5, value: p50 }];
const benchmarksDoHeroi = (heroId: number, gpm: number, xpm: number, lh: number): BenchmarksFonte => ({
  hero_id: heroId, result: { gold_per_min: percentisDe(gpm), xp_per_min: percentisDe(xpm), last_hits_per_min: percentisDe(lh) },
});
const partidaComComparacao = (nivel: "acima" | "abaixo" | null): PartidaDaConta => {
  const metrica = { valor: 0, medianaDoHeroi: nivel === null ? null : 0, nivel };
  return { id: "1", heroi: "Juggernaut", retrato: "juggernaut", venceu: true, abates: 0, mortes: 0, assistencias: 0, duracaoS: 0, inicio: 0, lane: null, analisada: true, comparacao: { ouro: metrica, xp: metrica, lh: metrica } };
};

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
  expect(resumo.herois[0]).toEqual({ heroi: "Anti-Mage", retrato: "anti_mage", partidas: 20, vitorias: 10 });
  expect(resumo.partidas[0]).toMatchObject({ heroi: "Juggernaut", retrato: "juggernaut", venceu: true, lane: "safe", analisada: true });
  expect(resumo.partidas[1]).toMatchObject({ venceu: false, lane: null, analisada: false });
  expect(resumo.temDadosPublicos).toBe(true);
  // Sem benchmarksPorHeroi/ranking, o comparativo e os heróis mais fortes ficam vazios, mas o resumo não falha.
  expect(resumo.partidas[0]?.comparacao).toEqual({
    ouro: { valor: 450, medianaDoHeroi: null, nivel: null }, xp: { valor: 600, medianaDoHeroi: null, nivel: null },
    lh: { valor: 150 / 30, medianaDoHeroi: null, nivel: null },
  });
  expect(resumo.heroisMaisFortes).toEqual([]);
  expect(resumo.oQueMelhorar).toEqual([]);
});

it("com benchmark do herói, compara GPM/XPM/LH e marca acima ou abaixo da mediana", () => {
  const resumo = montarResumo({
    id: 7, jogador: { profile: { account_id: 7, personaname: "Ness" }, rank_tier: null }, vitorias: { win: 0, lose: 0 },
    herois: [],
    // Acima em ouro e xp (mediana 400/550), abaixo em LH (last_hits 150 em 1800s = 5/min, mediana 8).
    recentes: [partida(0, true)],
    nomes, frescor,
    benchmarksPorHeroi: new Map([[8, benchmarksDoHeroi(8, 400, 550, 8)]]),
  });
  expect(resumo.partidas[0]?.comparacao).toEqual({
    ouro: { valor: 450, medianaDoHeroi: 400, nivel: "acima" }, xp: { valor: 600, medianaDoHeroi: 550, nivel: "acima" },
    lh: { valor: 5, medianaDoHeroi: 8, nivel: "abaixo" },
  });
});

it("heroisMaisFortes ordena pelo percentil (e pelo score no empate) e limita a 5", () => {
  const ranking = [
    { hero_id: 1, score: 100, percent_rank: 1 }, { hero_id: 2, score: 50, percent_rank: 0.9 },
    { hero_id: 8, score: 200, percent_rank: 1 }, { hero_id: 3, score: 10, percent_rank: 0.2 },
    { hero_id: 4, score: 1, percent_rank: 0.1 }, { hero_id: 5, score: 1, percent_rank: 0.05 },
  ];
  const fortes = heroisMaisFortes(ranking, nomes);
  expect(fortes).toHaveLength(5);
  expect(fortes[0]).toEqual({ heroi: "Juggernaut", retrato: "juggernaut", percentil: 1 });
  expect(fortes[1]).toEqual({ heroi: "Anti-Mage", retrato: "anti_mage", percentil: 1 });
});

it("heroisMaisFortes sem ranking devolve lista vazia", () => {
  expect(heroisMaisFortes(null, nomes)).toEqual([]);
});

it("resumoDoQueMelhorar só lista métricas abaixo da mediana na maioria das partidas comparáveis", () => {
  const partidas = [partidaComComparacao("abaixo"), partidaComComparacao("abaixo"), partidaComComparacao("acima")];
  expect(resumoDoQueMelhorar(partidas)).toEqual([
    { metrica: "Ouro por minuto", abaixo: 2, total: 3 }, { metrica: "XP por minuto", abaixo: 2, total: 3 },
    { metrica: "Last hits por minuto", abaixo: 2, total: 3 },
  ]);
});

it("resumoDoQueMelhorar ignora partidas sem benchmark e não aponta nada quando a maioria está acima", () => {
  expect(resumoDoQueMelhorar([partidaComComparacao("acima"), partidaComComparacao(null)])).toEqual([]);
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

it("resumo da conta real gravada compara a primeira partida com o benchmark do herói e lista os heróis mais fortes", async () => {
  const r = await resumoDaConta(consultaGravada(), YATORO);
  // Primeira partida (hero_id 93): gold_per_min 738 e xp_per_min 1155 acima da mediana (526/765); last_hits 491 em 2765s = 10,65/min, acima de 5,72.
  expect(r.ok && r.dados.partidas[0]?.comparacao).toMatchObject({
    ouro: { nivel: "acima" }, xp: { nivel: "acima" }, lh: { nivel: "acima" },
  });
  expect(r.ok && r.dados.heroisMaisFortes.length).toBeGreaterThan(0);
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
