// Ponte entre as constantes do OpenDota (habilidades, app/src/confronto) e os eixos do draft (eixos.ts).
// Controle, cura e fuga usam exatamente as mesmas regras do Confronto 1x1 (REGRAS em mecanicas.ts) para não
// ter duas definições do que é "controle" no Hub; área e alvo único vêm do campo behavior do próprio OpenDota.
import { provar, REGRAS } from "../confronto/mecanicas";
import { ehPassiva, temDano, type Heroi } from "../confronto/modelo";
import type { TracosDeHabilidade } from "./eixos";

function regraObrigatoria(id: string) {
  const regra = REGRAS.find((r) => r.id === id);
  if (!regra) throw new Error(`regra "${id}" não existe em mecanicas.ts`);
  return regra;
}

const DETECTOR_CONTROLE = regraObrigatoria("controle").detector;
const DETECTOR_CURA = regraObrigatoria("cura").detector;
const DETECTOR_FUGA = regraObrigatoria("fuga").detector;

const ativa = (h: Heroi["habilidades"][number]) => !ehPassiva(h);
const eAlvoEmArea = (h: Heroi["habilidades"][number]) => h.comportamento.includes("AOE");
const eAlvoUnico = (h: Heroi["habilidades"][number]) => h.comportamento.includes("Unit Target");
const eControle = (h: Heroi["habilidades"][number]) => provar(h, DETECTOR_CONTROLE) !== null;

export function tracosDoHeroi(heroi: Heroi): TracosDeHabilidade {
  const ativas = heroi.habilidades.filter(ativa);
  return {
    controleEmArea: ativas.some((h) => eAlvoEmArea(h) && eControle(h)),
    controleAlvoUnico: ativas.some((h) => eAlvoUnico(h) && eControle(h)),
    danoEmArea: ativas.some((h) => eAlvoEmArea(h) && temDano(h)),
    cura: heroi.habilidades.some((h) => provar(h, DETECTOR_CURA) !== null),
    fuga: ativas.some((h) => provar(h, DETECTOR_FUGA) !== null),
  };
}
