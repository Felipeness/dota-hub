import indice from "./amostras/indice.json";
import exemploA from "./amostras/time-exemplo-a.json";
import exemploB from "./amostras/time-exemplo-b.json";
import { indiceAtlasSchema, timeAtlasSchema } from "./schemas";

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
  expect(lido.mapa).toEqual({ zonas: [], calor: null, wards: [], smokes: [], objetivos: [], lutas: [], farm: { pos1: [], pos2: [] } });
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
