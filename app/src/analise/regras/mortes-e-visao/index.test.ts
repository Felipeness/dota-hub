import { readFileSync } from "node:fs";
import { montarDetalhe, tempoDaPartida } from "../../../live/partida/detalhe";
import { partidaFonte } from "../../../live/fonte/schemas";
import type { Contexto } from "../../modelo";
import { REGRAS } from "./index";

// Partida real 9046905170 (Medusa, pos1, derrota 16/9/14 em 50:46), reduzida ao necessário para esta família:
// objectives (só Roshan), os 5 teamfights com deaths_pos da Medusa, e os logs da própria Medusa (deaths_log,
// obs_log, sen_log — os dois últimos vêm vazios: 0 wards colocadas de fato). Ver SPEC, critério de aceitação com
// a partida de referência.
const PARTIDA = JSON.parse(readFileSync(`${__dirname}/amostras/partida-9046905170.json`, "utf-8"));
// Só os heróis que aparecem na amostra (matadores da Medusa + ela mesma); sem isso herois.porChave() não resolve
// o nome e todas as mortes caem no mesmo rótulo genérico "creep ou neutro".
const HEROIS_DA_AMOSTRA: readonly (readonly [number, string, string])[] = [
  [94, "npc_dota_hero_medusa", "Medusa"], [85, "npc_dota_hero_undying", "Undying"], [13, "npc_dota_hero_ursa", "Ursa"],
  [69, "npc_dota_hero_doom_bringer", "Doom"], [36, "npc_dota_hero_necrolyte", "Necrophos"],
];
const HEROIS = Object.fromEntries(
  HEROIS_DA_AMOSTRA.map(([id, name, localized_name]) => [String(id), { id, name, localized_name }]),
);
const CONSTANTES = { herois: HEROIS, itens: {}, idsDeHabilidades: {}, habilidades: {} };

function contextoDaAmostra(): Contexto {
  const partida = partidaFonte.parse(PARTIDA);
  const resposta = montarDetalhe({ partida, conta: 329255797, constantes: CONSTANTES, benchmarks: null, frescor: { buscadoEm: 0, vencido: false } });
  if (!resposta.ok) throw new Error(resposta.erro.codigo);
  return { detalhe: resposta.dados, pro: null, proDoHeroi: null, meuHeroi: resposta.dados.heroi, inimigos: resposta.dados.inimigos };
}

function achados() {
  return REGRAS.flatMap((regra) => regra.avaliar(contextoDaAmostra()));
}

describe("mapaDeMortes", () => {
  it("gera um achado de contexto pra cada uma das 9 mortes da partida, com a posição quando ela existe", () => {
    const mapas = achados().filter((a) => a.id.startsWith("mapa-de-mortes-"));
    expect(mapas).toHaveLength(9);
    const comPosicao = mapas.filter((a) => a.evidencias.posicaoNoMapa !== null);
    // 18:50, 24:58, 31:38, 46:10 e 49:51 caem dentro de um teamfight na amostra reduzida.
    expect(comPosicao).toHaveLength(5);
    expect(comPosicao.map((a) => tempoDaPartida(Math.round((a.minuto ?? 0) * 60)))).toEqual(
      ["18:50", "24:58", "31:38", "46:10", "49:51"],
    );
  });

  it("não afirma posição pra morte fora de teamfight (8:34, a 1ª morte pro Undying)", () => {
    const mapas = achados().filter((a) => a.id.startsWith("mapa-de-mortes-"));
    const das834 = mapas.find((a) => tempoDaPartida(Math.round((a.minuto ?? 0) * 60)) === "8:34");
    expect(das834?.evidencias.posicaoNoMapa).toBeNull();
  });
});

describe("mortesRepetidas", () => {
  it("não acusa Ursa: das 3 mortes pra ela, só 1 é isolada (16:06); 31:38 e 46:10 são perda de teamfight, outro problema", () => {
    const repetidas = achados().filter((a) => a.id.startsWith("mortes-repetidas-"));
    expect(repetidas).toHaveLength(0);
  });

  it("acusa 3+ mortes isoladas pro mesmo herói (caso sintético), ignorando as de teamfight do mesmo matador", () => {
    const ctx = contextoDaAmostra();
    const matador = "Morte para zeus";
    const ctxComMortes: Contexto = {
      ...ctx,
      detalhe: {
        ...ctx.detalhe,
        eventos: [
          ...ctx.detalhe.eventos,
          { t: 100, tipo: "morte", texto: matador, ponto: null },
          { t: 200, tipo: "morte", texto: matador, ponto: null },
          { t: 300, tipo: "morte", texto: matador, ponto: null },
          { t: 400, tipo: "morte", texto: matador, ponto: [0.1, 0.1] }, // teamfight: não deve contar
        ],
      },
    };
    const achado = REGRAS.flatMap((r) => r.avaliar(ctxComMortes)).find((a) => a.id === `mortes-repetidas-${matador}`);
    expect(achado).toBeDefined();
    expect(achado?.evidencias.numeros?.vezes).toBe(3);
  });

  it("não agrupa mortes sem herói (torre, creep ou neutro) como se fosse 'o mesmo herói'", () => {
    const ctx = contextoDaAmostra();
    const ctxComMortesSemHeroi: Contexto = {
      ...ctx,
      detalhe: {
        ...ctx.detalhe,
        eventos: [
          ...ctx.detalhe.eventos,
          { t: 100, tipo: "morte", texto: "Morte para creep ou neutro", ponto: null },
          { t: 200, tipo: "morte", texto: "Morte para creep ou neutro", ponto: null },
          { t: 300, tipo: "morte", texto: "Morte para creep ou neutro", ponto: null },
        ],
      },
    };
    const ids = REGRAS.flatMap((r) => r.avaliar(ctxComMortesSemHeroi)).map((a) => a.id);
    expect(ids.some((id) => id.includes("creep ou neutro"))).toBe(false);
  });
});

describe("mortesNoFarm", () => {
  it("conta as 4 mortes entre 8 e 20 minutos (8:34, 11:01, 16:06, 18:50), igual ao Dotaflix (4 mortes até 20min)", () => {
    const achado = achados().find((a) => a.id === "mortes-no-farm");
    expect(achado?.evidencias.numeros?.mortes).toBe(4);
    expect(achado?.peso).toBe("pesou_muito");
    expect(achado?.tipo).toBe("erro");
  });
});

describe("wardsColocadas", () => {
  it("acusa 0 wards colocadas contra os 3 Roshans do time inimigo (26:23, 38:30, 48:16)", () => {
    const achado = achados().find((a) => a.id === "sem-wards-contra-roshan");
    expect(achado).toBeDefined();
    expect(achado?.evidencias.numeros?.roshansDoInimigo).toBe(3);
    expect(achado?.evidencias.numeros?.wardsColocadas).toBe(0);
  });

  it("não gera o achado de listagem de wards quando não há nenhuma colocada", () => {
    const achado = achados().find((a) => a.id === "wards-colocadas");
    expect(achado).toBeUndefined();
  });

  it("ainda acusa os 3 Roshans quando a única ward foi colocada DEPOIS de todos eles: ward tardia não é aviso de nenhum", () => {
    const ctx = contextoDaAmostra();
    const roshans = ctx.detalhe.eventos.filter((e) => e.tipo === "roshan");
    const depoisDoUltimo = Math.max(...roshans.map((r) => r.t)) + 60;
    const ctxComWardTardia: Contexto = {
      ...ctx,
      detalhe: {
        ...ctx.detalhe,
        eventos: [
          ...ctx.detalhe.eventos,
          { t: depoisDoUltimo, tipo: "observer", texto: "Observer colocada", ponto: [0.5, 0.5] },
        ],
      },
    };
    const achado = REGRAS.flatMap((r) => r.avaliar(ctxComWardTardia)).find((a) => a.id === "sem-wards-contra-roshan");
    expect(achado).toBeDefined();
    expect(achado?.evidencias.numeros?.roshansSemAviso).toBe(3); // antes do fix, a mera existência dessa ward suprimia o achado inteiro
  });

  it("não conta como 'sem aviso' o Roshan que teve ward colocada antes dele, só os que não tiveram", () => {
    const ctx = contextoDaAmostra();
    const roshans = [...ctx.detalhe.eventos.filter((e) => e.tipo === "roshan")].sort((a, b) => a.t - b.t);
    const entreOPrimeiroEOSegundo = (roshans[0]!.t + roshans[1]!.t) / 2;
    const ctxComWardNoMeio: Contexto = {
      ...ctx,
      detalhe: {
        ...ctx.detalhe,
        eventos: [
          ...ctx.detalhe.eventos,
          { t: entreOPrimeiroEOSegundo, tipo: "observer", texto: "Observer colocada", ponto: [0.5, 0.5] },
        ],
      },
    };
    const achado = REGRAS.flatMap((r) => r.avaliar(ctxComWardNoMeio)).find((a) => a.id === "sem-wards-contra-roshan");
    // só o 1º Roshan ficou sem nenhuma ward colocada antes dele; o 2º e o 3º têm essa ward antes.
    expect(achado?.evidencias.numeros?.roshansSemAviso).toBe(1);
  });

  it("lista observer e sentry com posição quando há wards colocadas (contexto sintético, não é a partida real)", () => {
    const ctx = contextoDaAmostra();
    const ctxComWard: Contexto = {
      ...ctx,
      detalhe: {
        ...ctx.detalhe,
        eventos: [
          ...ctx.detalhe.eventos,
          { t: 300, tipo: "observer", texto: "Observer colocada", ponto: [0.5, 0.5] },
        ],
      },
    };
    const achado = REGRAS.flatMap((r) => r.avaliar(ctxComWard)).find((a) => a.id === "wards-colocadas");
    expect(achado?.evidencias.numeros?.observers).toBe(1);
    expect(achado?.evidencias.posicaoNoMapa).toEqual({ x: 0.5, y: 0.5 });
  });
});
