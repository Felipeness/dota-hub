// Helper de teste compartilhado pelas regras desta família (não é uma regra, não exporta REGRAS).
import { readFileSync } from "node:fs";
import { montarDetalhe } from "../../../live/partida/detalhe";
import { partidaFonte } from "../../../live/fonte/schemas";
import type { Contexto } from "../../modelo";

// Partida real 9046905170 (Medusa, pos1, derrota 16/9/14 em 50:46), reduzida ao necessário para esta família:
// objectives (só Roshan), o teamfight da luta final e os logs da própria Medusa. Ver docs/analise-partida/SPEC.md,
// critério de aceitação com a partida de referência (Dotaflix).
const SEM_CONSTANTES = { herois: {}, itens: {}, idsDeHabilidades: {}, habilidades: {} };

export function contextoDaAmostra(): Contexto {
  const partida = partidaFonte.parse(JSON.parse(readFileSync(`${__dirname}/../../amostras/partida-9046905170.json`, "utf-8")));
  const resposta = montarDetalhe({ partida, conta: 329255797, constantes: SEM_CONSTANTES, benchmarks: null, frescor: { buscadoEm: 0, vencido: false } });
  if (!resposta.ok) throw new Error(resposta.erro.codigo);
  return { detalhe: resposta.dados, pro: null, proDoHeroi: null, meuHeroi: resposta.dados.heroi, inimigos: resposta.dados.inimigos };
}
