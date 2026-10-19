// Regra: morte com o time já em forte desvantagem de ouro (radiant_gold_adv/vantagemDoTime). É contexto, não erro
// do jogador: a regra não sabe se ele iniciou a luta, estava isolado ou defendia uma estrutura, só que o placar do
// time já estava ruim; tratar como erro próprio carimbaria quase toda morte de uma partida perdida como culpa
// individual. É um proxy, não a vantagem numérica real da luta: o OpenDota não lista quem estava vivo e presente
// em cada luta (ver O_QUE_NAO_VEMOS em modelo.ts), mas a vantagem de ouro do time no minuto é um campo oficial e
// aponta pro mesmo risco: lutar quando o time inteiro já está perdendo custa mais caro (buyback mais caro relativo
// ao patrimônio, menos gente pra reagir). Limiares (-1500/-3000/-6000) são um corte de ouro absoluto pro jogo
// inteiro, sem normalizar por fase (uma desvantagem de 3-4k pesa mais aos 16 min que aos 50 min); fica como
// limitação conhecida, não corrigida aqui. Ver SPEC §economia-e-lutas / lutas.
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
      tipo: "contexto", minuto: morte.t / 60,
      titulo: `Morreu com o time ${Math.abs(vantagemNoMinuto)} de ouro atrás, ${tempoDaPartida(morte.t)}`,
      oQueAconteceu: `${morte.texto} em ${tempoDaPartida(morte.t)}; nesse minuto o time já estava ` +
        `${Math.abs(vantagemNoMinuto)} de ouro atrás do time adversário.`,
      oQueFazer: null,
      porque: "Contexto da morte, não um erro à parte dela: uma luta perdida custa mais pro time que já está " +
        "atrás (buyback mais caro relativo ao patrimônio, menos gente pra reagir), então essa desvantagem ajuda " +
        "a entender o resultado, sem presumir que o jogador tinha como evitar a luta.",
      fontes: [FONTE], peso: pesoDaMorte,
      evidencias: { numeros: { minuto, vantagemDeOuroDoTime: vantagemNoMinuto } },
    }];
  });
}

export const REGRA: Regra = { id: "mortes-em-desvantagem-de-ouro", familia: "lutas", avaliar: mortesEmDesvantagem };
