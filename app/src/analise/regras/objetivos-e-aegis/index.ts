// Família objetivos-e-aegis: Roshan e a janela de Aegis. Ver SPEC §"Famílias de regras". Uma regra por arquivo;
// este índice só agrega o que o registro (../../registro.ts, import.meta.glob) espera encontrar.
import type { Regra } from "../../modelo";
import { REGRAS as AEGIS_ATIVA } from "./aegisAtiva";
import { REGRAS as BUYBACK_NA_JANELA_DO_ROSHAN } from "./buybackNaJanelaDoRoshan";
import { REGRAS as CONTAGEM_DE_ROSHAN } from "./contagemDeRoshan";
import { REGRAS as TORRE_PERDIDA_APOS_MORTE } from "./torrePerdidaAposMorte";

export const REGRAS: readonly Regra[] =
  [...AEGIS_ATIVA, ...CONTAGEM_DE_ROSHAN, ...BUYBACK_NA_JANELA_DO_ROSHAN, ...TORRE_PERDIDA_APOS_MORTE];
