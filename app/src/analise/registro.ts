// Registro automático: cada pasta em regras/ exporta `REGRAS: readonly Regra[]`; nenhuma lista manual pra manter
// em dia. Adicionar uma família nova = criar regras/<nome>/index.ts com esse export, nada mais.
import type { Regra } from "./modelo";

type ModuloDeRegras = Readonly<{ REGRAS: readonly Regra[] }>;

const modulos = import.meta.glob<ModuloDeRegras>("./regras/*/index.ts", { eager: true });

export const REGISTRO_DE_REGRAS: readonly Regra[] = Object.values(modulos).flatMap((modulo) => modulo.REGRAS);
