// Família momentos: lances com o contexto da partida inteira (respawn dos 10 heróis, torres, Aegis), base dos
// "lances que decidiram o jogo". Uma regra por arquivo; este index só agrega pro formato que registro.ts espera.
import type { Regra } from "../../modelo";
import { REGRA as morteEmInferioridade } from "./morteEmInferioridade";

export const REGRAS: readonly Regra[] = [morteEmInferioridade];
