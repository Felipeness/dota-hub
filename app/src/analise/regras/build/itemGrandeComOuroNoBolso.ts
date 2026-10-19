// Família build: item grande comprado pouco depois de uma morte, quando o ouro ganho desde a última compra até
// a morte já cobria boa parte do custo do item. Estimativa com margem: usa `curvas.ouro` (gold_t, ouro ganho no
// total), não o ouro parado na mão no instante exato — o OpenDota expõe isso em `deaths_log[].gold_lost`, mas o
// schema do núcleo (`live/fonte/schemas.ts`) ainda não captura esse campo (ver pendência no retorno desta tarefa).
// Por isso o número aqui é "ouro ganho no período", um piso do que já estava disponível, nunca o valor exato
// perdido na morte.
import { tempoDaPartida } from "../../../live/partida/detalhe";
import type { Achado, Contexto, Evidencia } from "../../modelo";

const JANELA_MAXIMA_S = 10 * 60; // tempo entre morrer e a compra, pra ainda contar como "já tinha o ouro"
const RAZAO_MINIMA = 0.25; // pelo menos 1/4 do custo já estava disponível antes de morrer
const OURO_MINIMO = 800; // piso absoluto: ganho pequeno é ruído, não achado

const FONTE =
  "DetalheDaPartida.curvas.ouro (gold_t do OpenDota) e compras/mortes da própria partida; estimativa com margem, " +
  "não o gold_lost exato (ver 'o que não vemos').";

const minutoIndice = (segundos: number) => Math.max(0, Math.floor(segundos / 60));
const ouroEm = (curva: readonly number[], segundos: number) => curva[Math.min(minutoIndice(segundos), curva.length - 1)] ?? 0;
const minutos = (n: number) => n.toLocaleString("pt-BR", { maximumFractionDigits: 1 });

type Candidato = Readonly<{ morteT: number; compraT: number; nome: string; custo: number; ganho: number; razao: number }>;

function candidato(ctx: Contexto, compra: Contexto["detalhe"]["compras"][number]): Candidato | null {
  if (!compra.grande || compra.custo === null) return null;
  const mortesAntes = ctx.detalhe.eventos.filter((e) => e.tipo === "morte" && e.t < compra.t && compra.t - e.t <= JANELA_MAXIMA_S);
  const morte = mortesAntes.at(-1);
  if (!morte) return null;
  const comprasAntesDaMorte = ctx.detalhe.compras.filter((c) => c.t < morte.t);
  const desde = comprasAntesDaMorte.at(-1)?.t ?? 0;
  const ganho = ouroEm(ctx.detalhe.curvas.ouro, morte.t) - ouroEm(ctx.detalhe.curvas.ouro, desde);
  return { morteT: morte.t, compraT: compra.t, nome: compra.nome, custo: compra.custo, ganho, razao: ganho / compra.custo };
}

/** Uma morte pode "qualificar" vários itens grandes depois dela; conta só o primeiro, pra não repetir o mesmo achado. */
function primeiroPorMorte(candidatos: readonly Candidato[]): Candidato[] {
  const porMorte = new Map<number, Candidato>();
  for (const c of candidatos) {
    const atual = porMorte.get(c.morteT);
    if (!atual || c.compraT < atual.compraT) porMorte.set(c.morteT, c);
  }
  return [...porMorte.values()];
}

function achado(c: Candidato): Achado {
  const minutoMorte = c.morteT / 60;
  const minutoCompra = c.compraT / 60;
  const evidencias: Evidencia = { numeros: { ganho: c.ganho, custo: c.custo, razao: Number(c.razao.toFixed(2)), minutoMorte, minutoCompra } };
  return {
    id: `build-ouro-no-bolso-${c.morteT}`,
    tipo: "erro",
    minuto: minutoMorte,
    titulo: `Morreu já com ouro pra boa parte do ${c.nome}, ${tempoDaPartida(c.morteT)}`,
    oQueAconteceu:
      `Entre a compra anterior e essa morte (${tempoDaPartida(c.morteT)}), ganhou pelo menos ${c.ganho} de ouro; ` +
      `o ${c.nome} (custo ${c.custo}) saiu só ${minutos(minutoCompra - minutoMorte)} min depois, em ${tempoDaPartida(c.compraT)}.`,
    oQueFazer: `Voltar pra base e gastar o ouro acumulado antes de arriscar a vida sem o item pronto; o que está parado na mão vira ouro pro inimigo se você morrer.`,
    porque:
      `Ouro parado não ajuda na luta e ainda financia quem te matar; gastar antes de arriscar transforma esse mesmo ouro em poder (vida, dano, utilidade) ` +
      `que estaria disponível na morte, em vez de perdido.`,
    fontes: [FONTE],
    peso: c.razao >= 1 ? "pesou_muito" : c.razao >= 0.5 ? "pesou" : "leve",
    evidencias,
  };
}

export function itemGrandeComOuroNoBolso(ctx: Contexto): Achado[] {
  const candidatos = ctx.detalhe.compras.flatMap((c) => {
    const resultado = candidato(ctx, c);
    return resultado ? [resultado] : [];
  });
  return primeiroPorMorte(candidatos)
    .filter((c) => c.ganho >= OURO_MINIMO && c.razao >= RAZAO_MINIMA)
    .map(achado);
}
