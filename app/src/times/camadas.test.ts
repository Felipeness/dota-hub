import type { Desenho } from "../map/trilhas";
import exemploA from "./amostras/time-exemplo-a.json";
import { CAMADAS, COR_DESFECHO, SETAS_POR_PADRAO, TODAS_AS_INTENCOES, desfechoDaLuta, desfechoDaWard, desfechoDoSmoke, desenhosDoMapa, itensDoMapa, janelaDoTempo, linhasDoPreparo, naJanela, nomeDoObjetivo, pontaDaSeta, type Camada, type Filtro, type FiltroJanela } from "./camadas";
import { mapaAtlasSchema, type MapaAtlas } from "./schemas";

const mapa = mapaAtlasSchema.parse(exemploA.mapa);
const filtro = (camadas: readonly Camada[], janela: FiltroJanela = "todas", intencao = TODAS_AS_INTENCOES): Filtro =>
  ({ camadas: new Set(camadas), janela, intencao });
const ids = (m: MapaAtlas, f: Filtro) => itensDoMapa(m, f).map((i) => i.id);
const pinos = (desenhos: Desenho[]) => desenhos.flatMap((d) => (d.tipo === "pino" ? [d] : []));

it.each([
  { item: "10-15", filtro: "10-15", visivel: true },
  { item: "10-15", filtro: "0-5", visivel: false },
  { item: "10-15", filtro: "todas", visivel: false },
  { item: "todas", filtro: "todas", visivel: true },
  { item: "todas", filtro: "25-30", visivel: false },
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

it("o filtro todas mostra só os agregados, sem somar as janelas, e o farm inteiro", () => {
  expect(ids(mapa, filtro(["wards", "smokes", "lutas"]))).toEqual(["wards:3", "smokes:2", "lutas:2"]);
  expect(ids(mapa, filtro(["farm"]))).toHaveLength(7);
});

it("a janela filtra wards, smokes, lutas e o farm pelo minuto", () => {
  expect(ids(mapa, filtro(["wards", "smokes", "lutas", "farm"], "0-5"))).toEqual(["wards:2", "farm:pos1:0", "farm:pos1:1", "farm:pos2:0"]);
  expect(ids(mapa, filtro(["wards", "smokes"], "10-15"))).toEqual(["wards:0", "wards:1", "smokes:0"]);
});

it("objetivos não dependem da janela", () => {
  expect(ids(mapa, filtro(["zonas", "objetivos"], "30+"))).toEqual(["objetivos:0", "objetivos:1"]);
});

it("a intenção escolhida deixa só os wards dela", () => {
  expect(ids(mapa, filtro(["wards"], "10-15", "roshan"))).toEqual(["wards:0"]);
});

it("camada desligada não desenha nada", () => {
  expect(desenhosDoMapa(mapa, filtro([]), null)).toEqual([]);
  expect(CAMADAS).toHaveLength(7);
});

// O contrato já entrega Dire espelhado para o lado Radiant; o app não pode espelhar de novo.
it("desenha cada coordenada como chegou, sem espelhar de novo", () => {
  const smoke = { ...mapa.smokes[0], x: 0.9, y: 0.85, destino_x: 0.7, destino_y: 0.6 };
  const espelhado: MapaAtlas = { ...mapa, smokes: [smoke] };
  const desenhos = desenhosDoMapa(espelhado, filtro(["smokes"], "10-15"), null);
  expect(pinos(desenhos)[0]).toMatchObject({ id: "smokes:0", x: 0.9, y: 0.85 });
  const rastro = desenhos.find((d) => d.id === "smokes:0:rastro");
  expect(rastro?.tipo === "linha" && rastro.pontos).toEqual([[0.9, 0.85], [0.7, 0.6]]);
});

it("o calor conta as linhas de baixo para cima e some abaixo do limiar", () => {
  const calor = { janela: "todas", grade: 2, valores: [[1, 0], [0, 0.04]] };
  const desenhos = desenhosDoMapa({ ...mapa, calor }, filtro(["calor"]), null);
  expect(pinos(desenhos)).toEqual([expect.objectContaining({ x: 0.25, y: 0.25, clicavel: false })]);
});

it("o calor usa a grade da janela escolhida e some na janela sem grade", () => {
  const na1015 = pinos(desenhosDoMapa(mapa, filtro(["calor"], "10-15"), null));
  expect(na1015).toEqual([expect.objectContaining({ id: "calor:12:3" })]);
  expect(desenhosDoMapa(mapa, filtro(["calor"], "0-5"), null)).toEqual([]);
});

it("por padrão mostra só os smokes mais repetidos, e todos quando pedido", () => {
  const muitos = Array.from({ length: SETAS_POR_PADRAO + 5 }, (_, n) => ({ ...mapa.smokes[0], janela: "todas", n: n + 1 }));
  const smokes = ids({ ...mapa, smokes: muitos }, filtro(["smokes"]));
  expect(smokes).toHaveLength(SETAS_POR_PADRAO);
  expect(smokes[0]).toBe(`smokes:${SETAS_POR_PADRAO + 4}`);
  expect(ids({ ...mapa, smokes: muitos }, { ...filtro(["smokes"]), maximoDeSetas: null })).toHaveLength(SETAS_POR_PADRAO + 5);
});

it("a seta mais repetida é a mais grossa e a linha do smoke é tracejada", () => {
  const smokes = [{ ...mapa.smokes[0], janela: "todas", n: 10 }, { ...mapa.smokes[0], janela: "todas", n: 2 }];
  const linhas = desenhosDoMapa({ ...mapa, smokes }, filtro(["smokes"]), null).flatMap((d) => (d.tipo === "linha" && d.id.endsWith(":rastro") ? [d] : []));
  expect(linhas.map((l) => l.tracejada)).toEqual([true, true]);
  expect(linhas[0]?.espessura).toBeGreaterThan(4 * (linhas[1]?.espessura ?? 1) / 2);
});

it.each([
  { camada: "wards", forma: "losango" }, { camada: "objetivos", forma: "roshan" }, { camada: "farm", forma: "quadrado" },
] as const)("cada camada tem a sua forma: $camada vira $forma", ({ camada, forma }) => {
  expect(pinos(desenhosDoMapa(mapa, filtro([camada], camada === "wards" ? "10-15" : "todas"), null))[0]?.forma).toBe(forma);
});

it("a sentry é o losango vazado e a cor da ward vem de quanto ela é destruída", () => {
  const [obs, sen] = pinos(desenhosDoMapa(mapa, filtro(["wards"], "10-15"), null));
  expect([obs?.vazado, sen?.vazado]).toEqual([false, true]);
  expect(desfechoDaWard(0.2)).toBe("certo");
  expect(desfechoDaWard(0.8)).toBe("errado");
  expect(desfechoDaWard(undefined)).toBe("neutro");
});

it("a luta traz a % dentro e a cor pela vitória, com faixa neutra perto de 50%", () => {
  const [luta] = pinos(desenhosDoMapa(mapa, filtro(["lutas"]), null));
  expect(luta).toMatchObject({ conteudo: "62%", cor: COR_DESFECHO.certo });
  expect([desfechoDaLuta(0.7), desfechoDaLuta(0.5), desfechoDaLuta(0.3)]).toEqual(["certo", "neutro", "errado"]);
});

it("o objetivo só desenha o preparo quando está aberto", () => {
  const fechado = desenhosDoMapa(mapa, filtro(["objetivos"]), null);
  const aberto = desenhosDoMapa(mapa, filtro(["objetivos"]), "objetivos:0");
  expect(fechado.some((d) => d.id.includes("preparo"))).toBe(false);
  expect(pinos(aberto).filter((p) => p.id.startsWith("objetivos:0:preparo")).map((p) => p.texto)).toEqual(["-150s push", "-90s ward 40%", "-45s smoke 30%"]);
});

it("o painel do objetivo traz o preparo em ordem de tempo", () => {
  const embaralhado = { ...mapa.objetivos[0], preparo: [...mapa.objetivos[0].preparo].reverse() };
  const [item] = itensDoMapa({ ...mapa, objetivos: [embaralhado] }, filtro(["objetivos"]));
  expect(item?.preparo?.map((p) => p.t_rel_s)).toEqual([-150, -90, -90, -45]);
});

it("a linha do tempo junta as ações de cada faixa e fecha no objetivo", () => {
  expect(linhasDoPreparo(mapa.objetivos[0]?.preparo ?? [])).toEqual([
    { t: -150, texto: "push" }, { t: -90, texto: "ward 40% · presença 1,5 heróis" }, { t: -45, texto: "smoke 30%" }, { t: 0, texto: "objetivo" },
  ]);
  expect(linhasDoPreparo([{ t_rel_s: 0, acao: "smoke", freq: 0.2 }])).toEqual([{ t: 0, texto: "smoke 20% · objetivo" }]);
});

it("a cor do smoke junta kill e objetivo como certo, falhou como errado, farm e nada como neutro", () => {
  expect(desfechoDoSmoke({ kill: 0.1, objetivo: 0.2, farm: 0, nada: 0.1, falhou: 0.6 })).toBe("errado");
  expect(desfechoDoSmoke({ kill: 0.3, objetivo: 0.2, farm: 0.2, nada: 0.2, falhou: 0.1 })).toBe("certo");
  expect(desfechoDoSmoke({ kill: 0.1, objetivo: 0.1, farm: 0.4, nada: 0.3, falhou: 0.1 })).toBe("neutro");
});

it.each([
  { tipo: "roshan", grupo: "roshan_top", nome: "Roshan (fosso de cima)" },
  { tipo: "torre", grupo: "t2_mid", nome: "Torre T2 mid" },
  { tipo: "torre", grupo: "t4", nome: "Torre T4" },
  { tipo: "roshan", grupo: undefined, nome: "roshan" },
  { tipo: "portal", grupo: "gate_x", nome: "gate_x" },
])("o objetivo $grupo se chama $nome", ({ tipo, grupo, nome }) => {
  expect(nomeDoObjetivo(tipo, grupo)).toBe(nome);
});

it("a ponta da seta termina no destino", () => {
  expect(pontaDaSeta([0, 0], [1, 0])[1]).toEqual([1, 0]);
});

it("o marcador do objetivo fica por cima dos outros pinos", () => {
  const desenhos = pinos(desenhosDoMapa(mapa, filtro(["objetivos", "farm"]), null));
  expect(desenhos.filter((p) => p.porCima).map((p) => p.id)).toEqual(["objetivos:0", "objetivos:1"]);
});

it("smoke sem destino desenha só a origem, sem seta", () => {
  const smoke = { ...mapa.smokes[0], janela: "todas", destino_x: null, destino_y: null };
  const desenhos = desenhosDoMapa({ ...mapa, smokes: [smoke] }, filtro(["smokes"]), null);
  expect(desenhos.map((d) => d.id)).toEqual(["smokes:0"]);
});
