// Regra: abates que não foram seguidos de morte própria numa janela razoável — sinal de que a luta foi vencida
// e convertida (farm, push, reposicionamento) em vez de uma troca de vida por vida. Abates a menos de 90s um do
// outro contam como a mesma luta/sequência (cluster), pra não gerar um achado por kill numa mesma troca. Ver
// SPEC §economia-e-lutas / lutas (acertos a repetir).
import { tempoDaPartida } from "../../../live/partida/detalhe";
import type { Achado, Contexto, Regra } from "../../modelo";

const JANELA_DO_CLUSTER_S = 90;
const JANELA_SEM_MORRER_S = 3 * 60;
const FONTE = "kills_log e deaths_log do OpenDota (tempo entre o abate e a próxima morte do jogador)";

function clusters(tempos: readonly number[]): number[][] {
  return tempos.reduce<number[][]>((acc, t) => {
    const ultimo = acc.at(-1);
    if (ultimo && t - ultimo.at(-1)! <= JANELA_DO_CLUSTER_S) ultimo.push(t);
    else acc.push([t]);
    return acc;
  }, []);
}

function abatesSemMorrerDepois(ctx: Contexto): Achado[] {
  const tAbates = ctx.detalhe.eventos.filter((e) => e.tipo === "abate").map((e) => e.t);
  const tMortes = ctx.detalhe.eventos.filter((e) => e.tipo === "morte").map((e) => e.t);

  return clusters(tAbates).flatMap((cluster): Achado[] => {
    const inicio = cluster[0]!;
    const fimDaJanela = cluster.at(-1)! + JANELA_SEM_MORRER_S;
    const morreuNaJanela = tMortes.some((t) => t >= inicio && t <= fimDaJanela);
    if (morreuNaJanela) return [];

    const nAbates = cluster.length;
    return [{
      id: `abates-sem-morrer-${inicio}`,
      tipo: "acerto", minuto: inicio / 60,
      titulo: nAbates > 1
        ? `${nAbates} abates em sequência sem morrer depois, ${tempoDaPartida(inicio)}`
        : `Abate sem morrer depois, ${tempoDaPartida(inicio)}`,
      oQueAconteceu: `Participou de ${nAbates} abate(s) a partir de ${tempoDaPartida(inicio)} e ficou pelo menos ` +
        "3 minutos sem morrer: a luta foi convertida (farm, push ou reposicionamento) em vez de uma troca de " +
        "vida por vida.",
      oQueFazer: "Repetir: depois de ganhar uma luta ou pegar um abate limpo, usar a janela livre pra farmar ou " +
        "empurrar uma torre em vez de procurar a próxima troca.",
      porque: "Converter um abate em vantagem (farm, objetivo) sem devolver a própria vida é o que separa uma " +
        "luta boa de uma troca neutra.",
      fontes: [FONTE], peso: "leve",
      evidencias: { numeros: { minutoInicio: Number((inicio / 60).toFixed(1)), abates: nAbates } },
    }];
  });
}

export const REGRA: Regra = { id: "abates-sem-morrer-depois", familia: "lutas", avaliar: abatesSemMorrerDepois };
