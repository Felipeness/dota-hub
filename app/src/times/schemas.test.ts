import indice from "./amostras/indice.json";
import exemploA from "./amostras/time-exemplo-a.json";
import exemploB from "./amostras/time-exemplo-b.json";
import chavesA from "./amostras/time-exemplo-a.chaves.json";
import lanesA from "./amostras/time-exemplo-a.lanes.json";
import { chavesSchema, indiceAtlasSchema, lanesSchema, timeAtlasSchema } from "./schemas";

it("lê o índice de exemplo com os eixos vindos dos dados", () => {
  const lido = indiceAtlasSchema.parse(indice);
  expect(lido.times.map((t) => t.id)).toEqual(["time-exemplo-a", "time-exemplo-b"]);
  expect(lido.eixos.map((e) => e.id)).toEqual(["ritmo", "visao", "dependencia_hc"]);
});

it.each([
  { nome: "Time Exemplo A", dados: exemploA, nivel: "ok" },
  { nome: "Time Exemplo B", dados: exemploB, nivel: "low" },
])("lê o arquivo do $nome", ({ nome, dados, nivel }) => {
  const lido = timeAtlasSchema.parse(dados);
  expect(lido.nome).toBe(nome);
  expect(lido.amostra.nivel).toBe(nivel);
  expect(lido.mapa.calor?.valores).toHaveLength(lido.mapa.calor?.grade ?? -1);
});

it("completa camadas ausentes com listas vazias", () => {
  const { mapa: _mapa, ...resto } = exemploA;
  const lido = timeAtlasSchema.parse({ ...resto, mapa: {} });
  expect(lido.mapa).toEqual({ zonas: [], calor: null, calor_por_janela: [], wards: [], smokes: [], objetivos: [], lutas: [], farm: { pos1: [], pos2: [] } });
});

it.each([
  { caso: "coordenada fora do mapa", mapa: { wards: [{ ...exemploA.mapa.wards[0], x: 1.4 }] } },
  { caso: "tipo de ward desconhecido", mapa: { wards: [{ ...exemploA.mapa.wards[0], tipo: "dust" }] } },
  { caso: "preparo depois do objetivo", mapa: { objetivos: [{ ...exemploA.mapa.objetivos[0], preparo: [{ t_rel_s: 30, acao: "ward", x: 0.5, y: 0.5 }] }] } },
  { caso: "minuto de farm sem formato m:ss", mapa: { farm: { pos1: [{ t: "4min", x: 0.5, y: 0.5, rotulo: "lane" }] } } },
])("recusa $caso", ({ mapa }) => {
  expect(timeAtlasSchema.safeParse({ ...exemploA, mapa }).success).toBe(false);
});

it("recusa confiança fora de alta, média e baixa", () => {
  const secoes = [{ ...exemploA.secoes[0], confianca: "certeza" }];
  expect(timeAtlasSchema.safeParse({ ...exemploA, secoes }).success).toBe(false);
});

it("aceita presença sem posição no preparo e smoke sem a chave farm", () => {
  const objetivo = { ...exemploA.mapa.objetivos[0], preparo: [{ t_rel_s: -150, acao: "presenca", herois_perto_medio: 0.43 }] };
  const smoke = { ...exemploA.mapa.smokes[0], resultado: { kill: 0.5, objetivo: 0, nada: 0.5, falhou: 0 } };
  const lido = timeAtlasSchema.parse({ ...exemploA, mapa: { objetivos: [objetivo], smokes: [smoke] } });
  expect(lido.mapa.objetivos[0]?.preparo[0]).toEqual({ t_rel_s: -150, acao: "presenca", herois_perto_medio: 0.43 });
  expect(lido.mapa.smokes[0]?.resultado.farm).toBe(0);
});

it("lê as chaves de exemplo e recusa efeito sem n", () => {
  expect(chavesSchema.parse(chavesA).banir.map((b) => b.heroi).slice(0, 3)).toEqual(["Lone Druid", "Pangolier", "Io"]);
  const semN = { ...chavesA, fatores_vitoria: [{ fator: "x", wr_com: 0.5, wr_sem: 0.4, n_sem: 3, efeito_pp: 3, confianca: "alta", texto: "" }] };
  expect(chavesSchema.safeParse(semN).success).toBe(false);
});

it("lê as lanes e troca o semáforo da confiança pela escala do app", () => {
  const lidas = lanesSchema.parse(lanesA).lanes;
  expect(lidas.map((l) => l.confianca)).toEqual(["alta", "baixa"]);
  expect(lanesSchema.safeParse({ lanes: [{ ...lanesA.lanes[0], confianca: "verde" }] }).success).toBe(false);
});
