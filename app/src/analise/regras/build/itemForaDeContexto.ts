// Família build: item comprado cuja função de counter (porQueItem.ts) não casa com nenhum herói do draft inimigo
// (motivo null com os 5 heróis conferidos, não por falta de dado). Sugere, no lugar, um item de um grupo que o
// draft pedia e ficou sem resposta (contraDraft.ts).
import type { Achado, Contexto } from "../../modelo";
import { gruposDeContra, gruposJustificados, nomeDoItem, type InimigoParaRegra } from "./contraDraft";
import { explicarItem, ITENS_CURADOS } from "../../../live/partida/porQueItem";
import { FONTES_DAS_TAGS } from "../../../live/partida/tagsDosHerois";
import { ITEM_FINAL_DO_COMPONENTE } from "./componentesDeItem";

/**
 * Primeiro grupo justificado ainda sem resposta NO MOMENTO da compra avaliada (não no estado final da build) e
 * ainda não usado como sugestão pra outra compra desta mesma partida; sem isso, compras diferentes recebem
 * literalmente a mesma sugestão reciclada.
 */
function alternativa(
  grupos: readonly ReturnType<typeof gruposJustificados>[number][],
  compradasAntes: ReadonlySet<string>,
  jaSugeridos: Set<string>,
): string | null {
  const semResposta = grupos.find((g) => !g.chaves.some((c) => compradasAntes.has(c)) && !jaSugeridos.has(g.assinatura));
  if (!semResposta) return null;
  jaSugeridos.add(semResposta.assinatura);
  const chave = semResposta.chaves[0];
  return chave ? `${nomeDoItem(chave)} (${ITENS_CURADOS[chave]?.funcao ?? ""})` : null;
}

export function itemForaDeContexto(ctx: Contexto): Achado[] {
  const inimigos: InimigoParaRegra[] = ctx.inimigos.map((i) => ({ chave: i.chave, nome: i.nome }));
  const grupos = gruposDeContra(inimigos);
  const justificados = gruposJustificados(grupos);
  const compradasNaPartida = new Set(ctx.detalhe.compras.map((c) => c.chave));
  // Item core do herói (content/confrontos, spikes chave=true) é certo de comprar com qualquer draft; não é
  // "slot desperdiçado" só porque a função de counter do catálogo não bate com os 5 inimigos desta partida.
  const chavesCore = new Set((ctx.pro?.spikes ?? []).filter((s) => s.chave).map((s) => s.item));
  const jaSugeridos = new Set<string>();

  return ctx.detalhe.compras.flatMap((compra): Achado[] => {
    if (chavesCore.has(compra.chave)) return [];
    // Componente consumido num upgrade posterior (ex. Diffusal Blade -> Disperser): a decisão de compra já foi
    // avaliada no item final, não é um segundo slot desperdiçado.
    const itemFinal = ITEM_FINAL_DO_COMPONENTE[compra.chave];
    if (itemFinal && compradasNaPartida.has(itemFinal)) return [];
    const item = ITENS_CURADOS[compra.chave];
    if (!item?.contra) return [];
    const explicacao = explicarItem(compra.chave, inimigos);
    const foraDeContexto = explicacao?.motivo === null && explicacao.semDadoDe.length === 0;
    if (!foraDeContexto) return [];
    const minutoCompra = compra.t / 60;
    const compradasAntes = new Set(ctx.detalhe.compras.filter((c) => c.t <= compra.t).map((c) => c.chave));
    const sugestao = alternativa(justificados, compradasAntes, jaSugeridos);
    return [{
      id: `build-fora-de-contexto-${compra.chave}-${compra.t}`,
      tipo: "erro",
      minuto: minutoCompra,
      titulo: `${compra.nome} não respondia a nada do draft inimigo`,
      oQueAconteceu: `Montou ${compra.nome} (${item.funcao}), mas nenhum dos 5 inimigos justifica essa compra.`,
      oQueFazer: sugestao ? `No lugar, ${sugestao}.` : "Gastar esse slot num item que resolva algo do draft inimigo ou um item core.",
      porque: "Um item de counter só paga o investimento quando o que ele resolve está no jogo; sem isso é gasto de ouro e de slot de inventário.",
      fontes: FONTES_DAS_TAGS,
      peso: "leve",
      evidencias: { numeros: { custo: compra.custo ?? 0 } },
    }];
  });
}
