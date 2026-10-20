// Família build: cruza a build comprada com o core de pro do herói, o draft inimigo e o ouro gasto. Ver
// docs/analise-partida/SPEC.md §"Famílias de regras" > build.
import type { Regra } from "../../modelo";
import { itemContraInimigos } from "./itemContraInimigos";
import { itemCoreAtrasado } from "./itemCoreAtrasado";
import { itemForaDeContexto } from "./itemForaDeContexto";
import { itemGrandeComOuroNoBolso } from "./itemGrandeComOuroNoBolso";
import { itemSituacionalContraDraft } from "./itemSituacionalContraDraft";

export const REGRAS: readonly Regra[] = [
  { id: "build-item-contra-inimigos", familia: "build", avaliar: itemContraInimigos },
  { id: "build-item-core-atrasado", familia: "build", avaliar: itemCoreAtrasado },
  { id: "build-item-situacional-contra-draft", familia: "build", avaliar: itemSituacionalContraDraft },
  { id: "build-item-grande-com-ouro-no-bolso", familia: "build", avaliar: itemGrandeComOuroNoBolso },
  { id: "build-item-fora-de-contexto", familia: "build", avaliar: itemForaDeContexto },
];
