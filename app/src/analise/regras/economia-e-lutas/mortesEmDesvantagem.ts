// Regra: morrer enquanto o time já estava em forte desvantagem de ouro (radiant_gold_adv/vantagemDoTime). É um
// proxy, não a vantagem numérica real da luta: o OpenDota não lista quem estava vivo e presente em cada luta
// (ver O_QUE_NAO_VEMOS em modelo.ts), mas a vantagem de ouro do time no minuto é um campo oficial e aponta pro
// mesmo risco — lutar quando o time inteiro já está perdendo custa mais caro (buyback mais caro relativo ao
// patrimônio, menos gente pra reagir). Ver SPEC §economia-e-lutas / lutas.
import { tempoDaPartida } from "../../../live/partida/detalhe";
import type { Achado, Contexto, Peso, Regra } from "../../modelo";

const LIMIAR_LEVE = -1_500;
const LIMIAR_PESOU = -3_000;
const LIMIAR_PESOU_MUITO = -6_000;
const FONTE = "radiant_gold_adv do OpenDota (vantagem de ouro do time, por minuto)";

function peso(vantagem: number): Peso | null {
  if (vantagem <= LIMIAR_PESOU_MUITO) return "pesou_muito";
  if (vantagem <= LIMIAR_PESOU) return "pesou";
  if (vantagem <= LIMIAR_LEVE) return "leve";
  return null;
}

function mortesEmDesvantagem(ctx: Contexto): Achado[] {
  const mortes = ctx.detalhe.eventos.filter((e) => e.tipo === "morte");
  const vantagem = ctx.detalhe.vantagemDoTime.ouro;
  return mortes.flatMap((morte): Achado[] => {
    const minuto = Math.floor(morte.t / 60);
    const vantagemNoMinuto = vantagem[minuto];
    if (vantagemNoMinuto === undefined) return [];
    const pesoDaMorte = peso(vantagemNoMinuto);
    if (!pesoDaMorte) return [];
    return [{
      id: `morte-em-desvantagem-${morte.t}`,
      tipo: "erro", minuto: morte.t / 60,
      titulo: `Morreu com o time ${Math.abs(vantagemNoMinuto)} de ouro atrás, ${tempoDaPartida(morte.t)}`,
      oQueAconteceu: `${morte.texto} em ${tempoDaPartida(morte.t)}; nesse minuto o time já estava ` +
        `${Math.abs(vantagemNoMinuto)} de ouro atrás do time adversário.`,
      oQueFazer: "Com o time inteiro nessa desvantagem, jogar pelo não risco: segurar posição e esperar o " +
        "reforço ou o item que falta em vez de se expor numa luta que custa mais caro pra quem já está atrás.",
      porque: "Uma luta perdida custa mais pro time que já está atrás: o buyback fica mais caro relativo ao " +
        "patrimônio e sobra menos gente pra reagir. Morrer nesse momento amplia a desvantagem em vez de estabilizar.",
      fontes: [FONTE], peso: pesoDaMorte,
      evidencias: { numeros: { minuto, vantagemDeOuroDoTime: vantagemNoMinuto } },
    }];
  });
}

export const REGRA: Regra = { id: "mortes-em-desvantagem-de-ouro", familia: "lutas", avaliar: mortesEmDesvantagem };
