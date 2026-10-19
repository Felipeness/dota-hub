// Família economia-e-lutas: lane, farm e teamfights (desvantagem de ouro, abates convertidos). Uma regra por
// arquivo (ver SPEC §economia-e-lutas); este index só agrega pro formato que registro.ts espera.
import type { Regra } from "../../modelo";
import { REGRA as abatesSemMorrerDepois } from "./abatesSemMorrerDepois";
import { REGRA as gpmContraPro } from "./gpmContraPro";
import { REGRA as laneContraAdversario } from "./laneContraAdversario";
import { REGRA as lastHitsContraReferencia } from "./lastHitsContraReferencia";
import { REGRA as mortesEmDesvantagem } from "./mortesEmDesvantagem";

export const REGRAS: readonly Regra[] = [
  lastHitsContraReferencia, laneContraAdversario, gpmContraPro, mortesEmDesvantagem, abatesSemMorrerDepois,
];
