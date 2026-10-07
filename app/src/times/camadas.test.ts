import type { Desenho } from "../map/trilhas";
import exemploA from "./amostras/time-exemplo-a.json";
import { CAMADAS, TODAS_AS_INTENCOES, desenhosDoMapa, itensDoMapa, janelaDoTempo, naJanela, pontaDaSeta, resultadoPrincipal, type Camada, type Filtro, type FiltroJanela } from "./camadas";
import { mapaAtlasSchema, type MapaAtlas } from "./schemas";

const mapa = mapaAtlasSchema.parse(exemploA.mapa);
const filtro = (camadas: readonly Camada[], janela: FiltroJanela = "todas", intencao = TODAS_AS_INTENCOES): Filtro =>
  ({ camadas: new Set(camadas), janela, intencao });
const ids = (m: MapaAtlas, f: Filtro) => itensDoMapa(m, f).map((i) => i.id);
const pinos = (desenhos: Desenho[]) => desenhos.flatMap((d) => (d.tipo === "pino" ? [d] : []));

it.each([
  { item: "10-15", filtro: "10-15", visivel: true },
  { item: "10-15", filtro: "0-5", visivel: false },
  { item: "10-15", filtro: "todas", visivel: true },
  { item: "todas", filtro: "25-30", visivel: true },
  { item: "35-40", filtro: "30+", visivel: false },
] as const)("item da janela $item no filtro $filtro aparece: $visivel", ({ item, filtro: f, visivel }) => {
  expect(naJanela(item, f)).toBe(visivel);
});

it.each([
  { tempo: "0:45", janela: "0-5" }, { tempo: "4:59", janela: "0-5" }, { tempo: "5:00", janela: "5-10" },
  { tempo: "29:10", janela: "25-30" }, { tempo: "30:00", janela: "30+" }, { tempo: "52:00", janela: "30+" },
])("o minuto $tempo cai na janela $janela", ({ tempo, janela }) => {
  expect(janelaDoTempo(tempo)).toBe(janela);
});

it("a janela filtra wards, smokes, lutas e o farm pelo minuto", () => {
  expect(ids(mapa, filtro(["wards", "smokes", "lutas", "farm"], "0-5"))).toEqual(["wards:2", "farm:pos1:0", "farm:pos1:1", "farm:pos2:0"]);
  expect(ids(mapa, filtro(["wards", "smokes"], "10-15"))).toEqual(["wards:0", "wards:1", "smokes:0"]);
});

it("zona agregada em todas aparece em qualquer janela e objetivos não dependem da janela", () => {
  expect(ids(mapa, filtro(["zonas", "objetivos"], "30+"))).toEqual(["zonas:0", "zonas:2", "objetivos:0", "objetivos:1"]);
});

it("a intenção escolhida deixa só os wards dela", () => {
  expect(ids(mapa, filtro(["wards"], "todas", "roshan"))).toEqual(["wards:0"]);
});

it("camada desligada não desenha nada", () => {
  expect(desenhosDoMapa(mapa, filtro([]), null)).toEqual([]);
  expect(CAMADAS).toHaveLength(7);
});

// O contrato já entrega Dire espelhado para o lado Radiant; o app não pode espelhar de novo.
it("desenha cada coordenada como chegou, sem espelhar de novo", () => {
  const smoke = { ...mapa.smokes[0], x: 0.9, y: 0.85, destino_x: 0.7, destino_y: 0.6 };
  const espelhado: MapaAtlas = { ...mapa, smokes: [smoke] };
  const desenhos = desenhosDoMapa(espelhado, filtro(["smokes"]), null);
  expect(pinos(desenhos)[0]).toMatchObject({ id: "smokes:0", x: 0.9, y: 0.85 });
  const rastro = desenhos.find((d) => d.id === "smokes:0:rastro");
  expect(rastro?.tipo === "linha" && rastro.pontos).toEqual([[0.9, 0.85], [0.7, 0.6]]);
});

it("o calor conta as linhas de baixo para cima e some abaixo do limiar", () => {
  const calor = { janela: "todas", grade: 2, valores: [[1, 0], [0, 0.04]] };
  const desenhos = desenhosDoMapa({ ...mapa, calor }, filtro(["calor"]), null);
  expect(pinos(desenhos)).toEqual([expect.objectContaining({ x: 0.25, y: 0.25, clicavel: false })]);
});

it("o objetivo só desenha o preparo quando está aberto", () => {
  const fechado = desenhosDoMapa(mapa, filtro(["objetivos"]), null);
  const aberto = desenhosDoMapa(mapa, filtro(["objetivos"]), "objetivos:0");
  expect(fechado.some((d) => d.id.includes("preparo"))).toBe(false);
  expect(pinos(aberto).filter((p) => p.id.startsWith("objetivos:0:preparo")).map((p) => p.texto)).toEqual(["-150s push", "-90s ward", "-45s smoke"]);
});

it("o painel do objetivo traz o preparo em ordem de tempo", () => {
  const embaralhado = { ...mapa.objetivos[0], preparo: [...mapa.objetivos[0].preparo].reverse() };
  const [item] = itensDoMapa({ ...mapa, objetivos: [embaralhado] }, filtro(["objetivos"]));
  expect(item?.preparo?.map((p) => p.t_rel_s)).toEqual([-150, -90, -45]);
});

it("a cor do smoke segue o resultado mais comum", () => {
  expect(resultadoPrincipal({ kill: 0.1, objetivo: 0.2, nada: 0.1, falhou: 0.6 })).toBe("falhou");
  expect(resultadoPrincipal({ kill: 0.43, objetivo: 0.29, nada: 0.14, falhou: 0.14 })).toBe("kill");
});

it("a ponta da seta termina no destino", () => {
  expect(pontaDaSeta([0, 0], [1, 0])[1]).toEqual([1, 0]);
});

it("o marcador do objetivo fica por cima dos outros pinos", () => {
  const desenhos = pinos(desenhosDoMapa(mapa, filtro(["objetivos", "farm"]), null));
  expect(desenhos.filter((p) => p.porCima).map((p) => p.id)).toEqual(["objetivos:0", "objetivos:1"]);
});
