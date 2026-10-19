import { readFileSync } from "node:fs";
import { montarDetalhe, tempoDaPartida } from "../../../live/partida/detalhe";
import { partidaFonte } from "../../../live/fonte/schemas";
import type { Contexto } from "../../modelo";
import { REGRAS } from "./index";

// Partida real 9046905170 (Medusa, pos1, derrota 16/9/14 em 50:46), reduzida ao necessário pra build: purchase_log,
// deaths_log e gold_t completos da própria Medusa; os outros 9 jogadores só com hero_id/player_slot (pro montar o
// draft inimigo). Baixada com curl de api.opendota.com/api/matches/9046905170. Ver SPEC, critérios de aceitação.
const PARTIDA = JSON.parse(readFileSync(`${__dirname}/../../amostras/partida-9046905170-build.json`, "utf-8"));
const PRO_MEDUSA = JSON.parse(readFileSync(`${__dirname}/../../../../public/data/confrontos/medusa.json`, "utf-8"));
// Custo e componentes reais dos itens que aparecem no purchase_log desta partida (api.opendota.com/api/constants/items);
// sem isso `compras[].custo`/`.grande` ficam todos null/false e as regras de build não têm o que avaliar.
const ITENS_DA_PARTIDA = JSON.parse(readFileSync(`${__dirname}/../../amostras/itens-partida-9046905170.json`, "utf-8"));

// Nomes reais só dos 6 heróis que a família build usa (Medusa + os 5 do draft inimigo); os 4 do próprio time não
// entram em DetalheDaPartida.inimigos, então não precisam de entrada aqui.
const HEROIS_USADOS = {
  "94": { id: 94, name: "npc_dota_hero_medusa", localized_name: "Medusa" },
  "85": { id: 85, name: "npc_dota_hero_undying", localized_name: "Undying" },
  "69": { id: 69, name: "npc_dota_hero_doom_bringer", localized_name: "Doom" },
  "68": { id: 68, name: "npc_dota_hero_ancient_apparition", localized_name: "Ancient Apparition" },
  "36": { id: 36, name: "npc_dota_hero_necrolyte", localized_name: "Necrophos" },
  "70": { id: 70, name: "npc_dota_hero_ursa", localized_name: "Ursa" },
};
const CONSTANTES = { herois: HEROIS_USADOS, itens: ITENS_DA_PARTIDA, idsDeHabilidades: {}, habilidades: {} };

function contextoDaAmostra(pro = PRO_MEDUSA): Contexto {
  const partida = partidaFonte.parse(PARTIDA);
  const resposta = montarDetalhe({ partida, conta: 329255797, constantes: CONSTANTES, benchmarks: null, frescor: { buscadoEm: 0, vencido: false } });
  if (!resposta.ok) throw new Error(resposta.erro.codigo);
  return { detalhe: resposta.dados, pro, proDoHeroi: null, meuHeroi: resposta.dados.heroi, inimigos: resposta.dados.inimigos };
}

function achados() {
  const ctx = contextoDaAmostra();
  return REGRAS.flatMap((regra) => regra.avaliar(ctx));
}

it("acha o draft inimigo real (Undying, Doom, Ancient Apparition, Necrophos, Ursa)", () => {
  const ctx = contextoDaAmostra();
  expect(ctx.inimigos.map((i) => i.chave).sort()).toEqual(
    ["ancient_apparition", "doom_bringer", "necrolyte", "undying", "ursa"].sort(),
  );
});

describe("itemCoreAtrasado", () => {
  it("acusa o Butterfly atrasado (comprado aos 36:20, mediana de pro 22,2 min)", () => {
    const erro = achados().find((a) => a.id === "build-core-atrasado-butterfly");
    expect(erro).toBeDefined();
    expect(erro?.tipo).toBe("erro");
    expect(erro?.evidencias.numeros?.minutoMedianoPro).toBe(22.2);
  });

  it("acusa Lesser Crit (Crystalys) e Greater Crit (Daedalus) como itens core nunca montados", () => {
    const ids = achados().map((a) => a.id);
    expect(ids).toContain("build-core-ausente-lesser_crit");
    expect(ids).toContain("build-core-ausente-greater_crit");
  });

  it("não acusa Yasha, Manta e Aghanim's Shard: dentro da margem ou adiantados", () => {
    const ids = achados().map((a) => a.id);
    expect(ids).not.toContain("build-core-atrasado-yasha");
    expect(ids).not.toContain("build-core-ausente-yasha");
    expect(ids).toContain("build-core-no-tempo-aghanims_shard"); // comprado aos 26,9min, antes da mediana de 32min
  });
});

describe("itemSituacionalContraDraft", () => {
  it("acusa a falta de resposta a dano mágico (Ancient Apparition + Necrophos, 2 heróis mágicos)", () => {
    const erro = achados().find((a) => a.tipo === "erro" && a.id.startsWith("build-situacional-faltou-2:magico"));
    expect(erro).toBeDefined();
    expect(erro?.oQueFazer).toMatch(/Pipe|Glimmer Cape|Eternal Shroud|Hood Of Defiance|Mage Slayer/);
  });

  it("também acusa a falta de BKB: a mesma regra conta 2 heróis mágicos (AA e Necrophos), não precisa de 2 de controle", () => {
    const erro = achados().find((a) => a.id === "build-situacional-faltou-2:controle,magico");
    expect(erro?.oQueFazer).toContain("Black King Bar");
  });
});

describe("itemGrandeComOuroNoBolso", () => {
  it("acusa as 4 mortes com ouro acumulado antes de item grande (16:06 Manta, 28:33 Force Staff, 31:38 Butterfly, 46:10 Diffusal Blade)", () => {
    const erros = achados().filter((a) => a.id.startsWith("build-ouro-no-bolso-"));
    const minutos = erros.map((a) => tempoDaPartida(Math.round((a.minuto ?? 0) * 60))).sort();
    expect(minutos).toEqual(["16:06", "28:33", "31:38", "46:10"]);
  });

  it("46:10 pesa muito: ouro ganho (7539) mais que cobre o Diffusal Blade (2500)", () => {
    const erro = achados().find((a) => a.id.startsWith("build-ouro-no-bolso-") && a.minuto !== null && Math.abs(a.minuto - 2770 / 60) < 0.01);
    expect(erro?.peso).toBe("pesou_muito");
    expect(erro?.evidencias.numeros?.ganho).toBe(7539);
  });

  it("não acusa a compra do Skadi (1130): ganho de ouro no período foi zero", () => {
    const ids = achados().map((a) => a.id);
    expect(ids.some((id) => id === "build-ouro-no-bolso-1130")).toBe(false);
  });
});

describe("itemForaDeContexto", () => {
  it("não acusa Skadi (justificado: 2 heróis de cura) nem Manta/Butterfly (itens core, certos com qualquer draft)", () => {
    const ids = achados().map((a) => a.id);
    expect(ids.some((id) => id.startsWith("build-fora-de-contexto-skadi"))).toBe(false);
    expect(ids.some((id) => id.startsWith("build-fora-de-contexto-manta"))).toBe(false);
    expect(ids.some((id) => id.startsWith("build-fora-de-contexto-butterfly"))).toBe(false);
  });

  it("acusa Linken's Sphere: contra é 2+ de controle, só tem 1 (Doom), e não é item core de Medusa", () => {
    const ids = achados().map((a) => a.id);
    expect(ids.some((id) => id.startsWith("build-fora-de-contexto-sphere"))).toBe(true);
  });
});
