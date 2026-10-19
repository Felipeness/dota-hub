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
  it("acusa as 3 mortes pro Ursa como erro (16:06, 31:38, 46:10)", () => {
    const encontrado = achados().find((a) => a.id.toLowerCase() === "mortes-repetidas-morte para ursa");
    expect(encontrado).toBeDefined();
    expect(encontrado?.tipo).toBe("erro");
    expect(encontrado?.evidencias.numeros?.vezes).toBe(3);
  });

  it("não acusa undying, doom bringer nem necrolyte: só 2 mortes cada, abaixo do limiar de 3", () => {
    const repetidas = achados().filter((a) => a.id.startsWith("mortes-repetidas-"));
    expect(repetidas).toHaveLength(1);
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
