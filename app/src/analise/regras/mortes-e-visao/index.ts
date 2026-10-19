// Família mortes-e-visao: onde e para quem o jogador morreu, padrões de morte e visão própria colocada.
// Uma regra por arquivo (ver SPEC §mortes-e-visao); este index só agrega pro formato que registro.ts espera.
import type { Regra } from "../../modelo";
import { REGRA as mapaDeMortes } from "./mapaDeMortes";
import { REGRA as mortesNoFarm } from "./mortesNoFarm";
import { REGRA as mortesRepetidas } from "./mortesRepetidas";
import { REGRA as wardsColocadas } from "./wardsColocadas";

export const REGRAS: readonly Regra[] = [mapaDeMortes, mortesRepetidas, mortesNoFarm, wardsColocadas];
