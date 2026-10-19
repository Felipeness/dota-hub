// Helper de teste compartilhado pelas regras desta família (não é uma regra, não exporta REGRA/REGRAS).
// Amostra própria em ./amostras (não a compartilhada em src/analise/amostras nem a de mortes-e-visao): cada
// família reduz a partida 9046905170 aos campos que as suas regras usam; esta precisa de gold_t/lh_t/radiant_gold_adv,
// que as outras amostras já existentes não guardam.
import { readFileSync } from "node:fs";
import { montarDetalhe } from "../../../live/partida/detalhe";
import { partidaFonte } from "../../../live/fonte/schemas";
import type { Analise } from "../../../confronto/analise";
import type { Contexto } from "../../modelo";
import type { HeroiDaPosicao } from "../../pro";

// Só os heróis que aparecem na amostra (a própria Medusa + as 5 chaves do time inimigo); sem isso
// herois.porId()/porChave() não resolve o nome e tudo cai no rótulo genérico.
const HEROIS_DA_AMOSTRA: readonly (readonly [number, string, string])[] = [
  [94, "npc_dota_hero_medusa", "Medusa"],
  [36, "npc_dota_hero_necrolyte", "Necrophos"],
  [68, "npc_dota_hero_ancient_apparition", "Ancient Apparition"],
  [85, "npc_dota_hero_undying", "Undying"],
  [69, "npc_dota_hero_doom_bringer", "Doom"],
  [70, "npc_dota_hero_ursa", "Ursa"],
];
const HEROIS = Object.fromEntries(
  HEROIS_DA_AMOSTRA.map(([id, name, localized_name]) => [String(id), { id, name, localized_name }]),
);
const CONSTANTES = { herois: HEROIS, itens: {}, idsDeHabilidades: {}, habilidades: {} };

const PARTIDA = JSON.parse(readFileSync(`${__dirname}/amostras/partida-9046905170.json`, "utf-8"));

/** proDoHeroi real da Medusa em app/public/data/pro_posicoes.json (forca.gpm_medio=683.82, forca.n=504). */
export const PRO_DO_HEROI_DA_AMOSTRA: HeroiDaPosicao = {
  hero_id: 94,
  slug: "medusa",
  posicoes: { n_total: 503, distribuicao: { pos1: { n: 498, fracao: 0.9901 } } },
  forca: {
    n: 504, gpm_medio: 683.8234, dano_torre_medio: 7103.9643, dano_heroi_medio: 24707.7401,
    cura_media: 13.5298, stuns_medio_s: 21.767, duracao_media_vitorias_min: 35.7709,
  },
};

/** Recorte de app/public/data/confrontos/medusa.json (content/pro_dados/medusa.json: resumo.n=503, resumo.lh10=65). */
export const PRO_DA_AMOSTRA: Analise = {
  id: "medusa", nome: "Medusa", nome_interno: "medusa", hero_id: 94, patch: "7.41", jogos_pro: 503, lh10: 65,
  spikes: [], confrontos: [],
};

export function contextoDaAmostra(): Contexto {
  const partida = partidaFonte.parse(PARTIDA);
  const resposta = montarDetalhe({ partida, conta: 329255797, constantes: CONSTANTES, benchmarks: null, frescor: { buscadoEm: 0, vencido: false } });
  if (!resposta.ok) throw new Error(resposta.erro.codigo);
  return {
    detalhe: { ...resposta.dados, referencia: { ouroPorMin: 611, lhPorMin: 9.622641509433961 } },
    pro: PRO_DA_AMOSTRA, proDoHeroi: PRO_DO_HEROI_DA_AMOSTRA, meuHeroi: resposta.dados.heroi, inimigos: resposta.dados.inimigos,
  };
}
