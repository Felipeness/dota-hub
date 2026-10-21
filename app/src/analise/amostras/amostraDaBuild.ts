// Helper de teste: a partida 9046905170 (Medusa pos1) com o purchase_log real e os itens reais (ver regras/build/
// index.test.ts), mais o confronto da Medusa gerado em public/data, pra família build e a seção "Sua build".
import { readFileSync } from "node:fs";
import { analiseSchema } from "../../confronto/analise";
import { partidaFonte } from "../../live/fonte/schemas";
import { montarDetalhe, type DetalheDaPartida } from "../../live/partida/detalhe";
import type { Contexto } from "../modelo";

const ler = (caminho: string): unknown => JSON.parse(readFileSync(caminho, "utf-8"));
const HEROIS_USADOS = {
  "94": { id: 94, name: "npc_dota_hero_medusa", localized_name: "Medusa" },
  "85": { id: 85, name: "npc_dota_hero_undying", localized_name: "Undying" },
  "69": { id: 69, name: "npc_dota_hero_doom_bringer", localized_name: "Doom" },
  "68": { id: 68, name: "npc_dota_hero_ancient_apparition", localized_name: "Ancient Apparition" },
  "36": { id: 36, name: "npc_dota_hero_necrolyte", localized_name: "Necrophos" },
  "70": { id: 70, name: "npc_dota_hero_ursa", localized_name: "Ursa" },
};

export function detalheDaAmostraDaBuild(): DetalheDaPartida {
  const resposta = montarDetalhe({
    partida: partidaFonte.parse(ler(`${__dirname}/partida-9046905170-build.json`)), conta: 329255797, benchmarks: null,
    frescor: { buscadoEm: 0, vencido: false },
    constantes: { herois: HEROIS_USADOS, itens: ler(`${__dirname}/itens-partida-9046905170.json`) as never, idsDeHabilidades: {}, habilidades: {} },
  });
  if (!resposta.ok) throw new Error(resposta.erro.codigo);
  return resposta.dados;
}

export const PRO_MEDUSA = analiseSchema.parse(ler(`${__dirname}/../../../public/data/confrontos/medusa.json`));

export function contextoDaAmostraDaBuild(porqueDosItens: Readonly<Record<string, string>> = {}): Contexto {
  const detalhe = detalheDaAmostraDaBuild();
  return { detalhe, pro: PRO_MEDUSA, proDoHeroi: null, meuHeroi: detalhe.heroi, inimigos: detalhe.inimigos, porqueDosItens };
}
