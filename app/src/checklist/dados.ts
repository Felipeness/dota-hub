import type { Heroi } from "../data/schemas";
import { itensCoreNaLinhaDoTempo } from "../heroes/resumo";
import { dadosPro } from "../live/partida/resumo";
import type { DadosDaPartidaReal } from "./fonte";

export type ItemAntes = Readonly<{ id: string; titulo: string; porque: string }>;
/** `ok: null` = guia sem alvo pra comparar (mostra o dado real sem veredito). */
export type ItemDepois = Readonly<{ id: string; titulo: string; ok: boolean | null; porque: string }>;

const TOLERANCIA_ITEM_MIN = 2;
const MAXIMO_DE_ITENS = 4;
const NIVEL_7 = /N[ií]vel\s*7\b/;

export function checklistAntes(heroi: Heroi): readonly ItemAntes[] {
  const { guia } = heroi;
  const itensIniciais = guia.lane.itens_iniciais.join(" ");
  return [
    { id: "bom-quando", titulo: "Pegar se o inimigo tiver", porque: guia.bom_quando.join(" ") },
    { id: "evitar-quando", titulo: "Evitar se o inimigo tiver", porque: guia.evitar_quando.join(" ") },
    { id: "itens-iniciais", titulo: "Itens iniciais", porque: itensIniciais },
    { id: "objetivo-lane", titulo: "Objetivo da lane (10 min)", porque: guia.lane.objetivo },
    { id: "condicao-farmar", titulo: "Quando ir pra selva", porque: guia.condicao_para_farmar.explicacao },
    ...itensCoreNaLinhaDoTempo(guia.itens_core).slice(0, MAXIMO_DE_ITENS).map((item): ItemAntes => ({
      id: `item-${item.item}`,
      titulo: item.minuto_alvo === null ? `Comprar: ${item.nome_curto}` : `Comprar: ${item.nome_curto} até ${item.minuto_alvo} min`,
      porque: item.base,
    })),
  ];
}

/** Primeiro power spike do guia que cita "Nível 7" explicitamente; sem isso não há alvo (nada inventado). */
export function minutoAlvoDoNivel7(heroi: Heroi): number | null {
  return heroi.power_spikes.find((s) => NIVEL_7.test(s.marco))?.minuto ?? null;
}

function itemNoPrazo(alvo: number | null, real: number | null): boolean | null {
  if (alvo === null || real === null) return null;
  return real <= alvo + TOLERANCIA_ITEM_MIN;
}

function itemDeChecklist(item: Heroi["guia"]["itens_core"][number], real: DadosDaPartidaReal): ItemDepois {
  const minutoReal = real.itens.get(item.item) ?? null;
  const ok = itemNoPrazo(item.minuto_alvo, minutoReal);
  const alvoTexto = item.minuto_alvo === null ? "sem alvo de minuto no guia" : `alvo ${item.minuto_alvo} min`;
  const realTexto = minutoReal === null ? "não comprado nessa partida" : `comprado aos ${minutoReal.toFixed(1)} min`;
  return { id: `item-${item.item}`, titulo: item.nome_curto, ok, porque: `${alvoTexto}, ${realTexto}.` };
}

export function checklistDepois(heroi: Heroi, real: DadosDaPartidaReal): readonly ItemDepois[] {
  const pro = dadosPro(heroi);
  const nivel7Alvo = minutoAlvoDoNivel7(heroi);
  const itens: ItemDepois[] = itensCoreNaLinhaDoTempo(heroi.guia.itens_core).slice(0, MAXIMO_DE_ITENS)
    .map((item) => itemDeChecklist(item, real));
  return [
    {
      id: "lh10", titulo: "Last hits aos 10 min",
      ok: pro.lh10 === null || real.lh10 === null ? null : real.lh10 >= pro.lh10,
      porque: pro.lh10 === null ? "guia sem referência de last hits dos pros pra esse herói."
        : `pros fazem ${pro.lh10.toFixed(1)}, você fez ${real.lh10 ?? "sem dado"}.`,
    },
    {
      id: "nivel7", titulo: "Nível 7",
      ok: nivel7Alvo === null ? null : real.nivel7Minuto !== null && real.nivel7Minuto <= nivel7Alvo,
      porque: nivel7Alvo === null ? "guia sem power spike de nível 7 pra esse herói."
        : `alvo ${nivel7Alvo} min, você chegou ${real.nivel7Minuto === null ? "depois do fim da partida registrada" : `aos ${real.nivel7Minuto} min`}.`,
    },
    {
      id: "mortes-antes-10", titulo: "Mortes antes dos 10 min",
      ok: real.mortesAntesDos10 === 0,
      porque: real.mortesAntesDos10 === 0 ? "nenhuma morte na fase de lane." : `${real.mortesAntesDos10} morte(s) antes dos 10 min.`,
    },
    ...itens,
  ];
}
