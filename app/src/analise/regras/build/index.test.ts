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

  it("acusa só Daedalus (Greater Crit) como item core nunca montado, não Crystalys também: é o mesmo gap de build (nunca chegou no crit tardio), não dois", () => {
    const ids = achados().map((a) => a.id);
    expect(ids).toContain("build-core-ausente-greater_crit");
    expect(ids).not.toContain("build-core-ausente-lesser_crit");
  });

  it("Daedalus sai em só 27% das partidas pro: diz a porcentagem real, não 'na maioria', e pesa menos", () => {
    const ausente = achados().find((a) => a.id === "build-core-ausente-greater_crit");
    expect(ausente?.porque).toContain("em 27% das partidas (137 de 503)");
    expect(ausente?.porque).not.toContain("maioria");
    expect(ausente?.peso).toBe("pesou");
    expect(ausente?.oQueAconteceu).toMatch(/\d+:\d{2} min/);
  });

  it("item core em mais da metade das partidas pro continua 'na maioria' e pesa muito", () => {
    const semButterfly = { ...contextoDaAmostra() };
    const ctx = { ...semButterfly, detalhe: { ...semButterfly.detalhe, compras: semButterfly.detalhe.compras.filter((c) => c.chave !== "butterfly") } };
    const ausente = REGRAS.flatMap((regra) => regra.avaliar(ctx)).find((a) => a.id === "build-core-ausente-butterfly");
    expect(ausente?.porque).toContain("na maioria das partidas (376 de 503)");
    expect(ausente?.peso).toBe("pesou_muito");
  });

  it("só diz 'no tempo certo (ou antes)' quando saiu antes da mediana; depois dela, dentro da margem, diz isso", () => {
    const porId = new Map(achados().map((a) => [a.id, a]));
    expect(porId.get("build-core-no-tempo-aghanims_shard")?.titulo).toContain("no tempo certo (ou antes)");
    // Yasha aos 12,6 min contra mediana de 11: depois, mas dentro da margem de 3 min.
    expect(porId.get("build-core-no-tempo-yasha")?.titulo).toBe("Yasha saiu depois da mediana do pro, mas dentro da margem aceitável");
  });

  it("não acusa Yasha, Manta e Aghanim's Shard: dentro da margem ou adiantados", () => {
    const ids = achados().map((a) => a.id);
    expect(ids).not.toContain("build-core-atrasado-yasha");
    expect(ids).not.toContain("build-core-ausente-yasha");
    expect(ids).toContain("build-core-no-tempo-aghanims_shard"); // comprado aos 26,9min, antes da mediana de 32min
  });
});

describe("itemSituacionalContraDraft", () => {
  it("acusa uma vez só a falta de resposta a controle e dano mágico: Pipe (dano mágico de AA e Necrophos) está contido no BKB", () => {
    const faltou = achados().filter((a) => a.id.startsWith("build-situacional-faltou-"));
    expect(faltou.map((a) => a.id)).toEqual(["build-situacional-faltou-2:controle,magico"]);
    expect(faltou[0]?.titulo).toContain("dano mágico");
    expect(faltou[0]?.oQueFazer).toContain("Black King Bar");
    expect(faltou[0]?.oQueFazer).toMatch(/Pipe|Glimmer Cape|Eternal Shroud|Hood Of Defiance|Mage Slayer/);
  });

  it("não acusa falta de resposta a um risco que o item comprado já cobre inteiro", () => {
    const ctx = contextoDaAmostra();
    const comBkb: Contexto = {
      ...ctx,
      detalhe: { ...ctx.detalhe, compras: [...ctx.detalhe.compras, { t: 1_500, chave: "black_king_bar", nome: "Black King Bar", custo: 4_050, grande: true }] },
    };
    const situacionais = REGRAS.flatMap((r) => r.avaliar(comBkb)).filter((a) => a.id.startsWith("build-situacional-"));
    expect(situacionais.filter((a) => a.tipo === "erro")).toEqual([]);
    expect(situacionais.some((a) => a.titulo.startsWith("Black King Bar"))).toBe(true);
  });
});

describe("itemGrandeComOuroNoBolso", () => {
  it("acusa 3 mortes com ouro acumulado antes de item grande (28:33 Force Staff, 31:38 Butterfly, 46:10 Diffusal Blade); não 16:06 Manta, comprado só 4s depois da morte", () => {
    const erros = achados().filter((a) => a.id.startsWith("build-ouro-no-bolso-"));
    const minutos = erros.map((a) => tempoDaPartida(Math.round((a.minuto ?? 0) * 60))).sort();
    expect(minutos).toEqual(["28:33", "31:38", "46:10"]);
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

  it("não acusa quando há um buyback entre a compra anterior e a morte: o ouro foi pro buyback, não ficou parado", () => {
    const ctx = contextoDaAmostra();
    const ctxComBuyback: Contexto = {
      ...ctx,
      detalhe: { ...ctx.detalhe, eventos: [...ctx.detalhe.eventos, { t: 1860, tipo: "buyback", texto: "Buyback", ponto: null }] },
    };
    const ids = REGRAS.flatMap((r) => r.avaliar(ctxComBuyback)).map((a) => a.id);
    expect(ids).not.toContain("build-ouro-no-bolso-1898"); // 31:38 (1898s), buyback cai entre a compra anterior e essa morte
  });
});

describe("itemForaDeContexto", () => {
  it("não acusa Skadi (justificado: 2 heróis de cura) nem Manta/Butterfly (itens core, certos com qualquer draft)", () => {
    const ids = achados().map((a) => a.id);
    expect(ids.some((id) => id.startsWith("build-fora-de-contexto-skadi"))).toBe(false);
    expect(ids.some((id) => id.startsWith("build-fora-de-contexto-manta"))).toBe(false);
    expect(ids.some((id) => id.startsWith("build-fora-de-contexto-butterfly"))).toBe(false);
  });

  it("não acusa Linken's Sphere: Doom e Necrophos (Reaper's Scythe, alvo único bloqueável) somam 2 de controle, o mínimo da regra", () => {
    const ids = achados().map((a) => a.id);
    expect(ids.some((id) => id.startsWith("build-fora-de-contexto-sphere"))).toBe(false);
    const acertoDeControle = achados().find((a) => a.id === "build-situacional-acerto-2:controle");
    expect(acertoDeControle?.titulo).toContain("Sphere");
  });

  it("acusa só 1 vez a cadeia Diffusal Blade -> Disperser (upgrade), não 2: o componente foi consumido no item final", () => {
    const ids = achados().filter((a) => a.id.startsWith("build-fora-de-contexto-"));
    expect(ids).toHaveLength(1);
    expect(ids[0]?.id).toBe("build-fora-de-contexto-disperser-2878");
  });
});
