// Helper de teste: a partida de referência 9046905170 (Medusa pos1, derrota) com os 10 jogadores, wards dos dois
// times, estruturas e Roshans, reduzida aos campos que o panorama e os lances decisivos usam. Só a conta analisada
// fica no arquivo; as outras 9 viraram null. Heróis e xp por nível vêm das constantes espelhadas em public/.
import { readFileSync } from "node:fs";
import { nomesDeHeroisFonte, partidaFonte, xpPorNivelFonte } from "../../live/fonte/schemas";
import { montarDetalhe, type DetalheDaPartida } from "../../live/partida/detalhe";
import type { Contexto } from "../modelo";

export const CONTA_DA_AMOSTRA = 329255797;
const ler = (caminho: string): unknown => JSON.parse(readFileSync(caminho, "utf-8"));
const CONSTANTES = `${__dirname}/../../../public/data/opendota/constants`;

export function detalheDaAmostraCompleta(): DetalheDaPartida {
  const partida = partidaFonte.parse(ler(`${__dirname}/partida-9046905170-panorama.json`));
  const herois = nomesDeHeroisFonte.parse(ler(`${CONSTANTES}/heroes.json`));
  const xpPorNivel = xpPorNivelFonte.parse(ler(`${CONSTANTES}/xp_level.json`));
  const resposta = montarDetalhe({
    partida, conta: CONTA_DA_AMOSTRA, benchmarks: null, frescor: { buscadoEm: 0, vencido: false },
    constantes: { herois, itens: {}, idsDeHabilidades: {}, habilidades: {}, xpPorNivel },
  });
  if (!resposta.ok) throw new Error(resposta.erro.codigo);
  return resposta.dados;
}

export function contextoDaAmostraCompleta(): Contexto {
  const detalhe = detalheDaAmostraCompleta();
  return { detalhe, pro: null, proDoHeroi: null, meuHeroi: detalhe.heroi, inimigos: detalhe.inimigos };
}
