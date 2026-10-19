// Regra: torre(s) caída(s) pouco depois de uma morte do jogador. Ver SPEC §"Famílias de regras" > objetivos-e-aegis.
import { tempoDaPartida } from "../../../live/partida/detalhe";
import type { Achado, Contexto, Regra } from "../../modelo";

/**
 * Janela de correlação entre morte e queda de torre: sem número documentado em fonte externa, é o critério
 * próprio desta regra para "a torre caiu porque a lane ficou sem defesa", não uma mecânica do jogo.
 */
const JANELA_DE_TORRE_S = 90; // 1,5 min: janela curta de propósito, pra não confundir "time perdendo" com "essa torre caiu por essa morte"
const FONTE_TORRE = "objectives[] do OpenDota (building_kill), cruzado com deaths_log do jogador";

const emMinutos = (segundos: number) => segundos / 60;

/**
 * Agrupa por morte: uma luta perdida que custa 3 torres de uma vez é 1 achado, não 3 repetidos. Mortes são
 * processadas em ordem cronológica e cada torre só é atribuída à primeira morte que abriu a janela dela, pra duas
 * janelas de 90s que se sobrepõem (duas mortes próximas) não contarem a mesma queda de torre duas vezes.
 */
function torrePerdidaAposMorte(ctx: Contexto): Achado[] {
  const torresPerdidas = ctx.detalhe.eventos.filter((e) => e.tipo === "torre" && e.texto === "Torre perdida");
  const mortes = ctx.detalhe.eventos.filter((e) => e.tipo === "morte");
  const jaAtribuidas = new Set<(typeof torresPerdidas)[number]>();
  return mortes.flatMap((morte): Achado[] => {
    const torresDepois = torresPerdidas.filter((t) => !jaAtribuidas.has(t) && t.t >= morte.t && t.t - morte.t <= JANELA_DE_TORRE_S);
    if (torresDepois.length === 0) return [];
    torresDepois.forEach((t) => jaAtribuidas.add(t));
    const horarios = torresDepois.map((t) => tempoDaPartida(t.t)).join(", ");
    const minutoDaMorte = emMinutos(morte.t);
    const plural = torresDepois.length > 1;
    return [{
      id: `torre-perdida-apos-morte-${morte.t}`,
      tipo: "erro",
      minuto: minutoDaMorte,
      titulo: plural
        ? `${torresDepois.length} torres caíram nos 90 s depois de uma morte, ${tempoDaPartida(morte.t)}`
        : `Torre caiu ${tempoDaPartida(torresDepois[0].t - morte.t)} depois de uma morte, ${tempoDaPartida(morte.t)}`,
      oQueAconteceu:
        `${morte.texto} em ${tempoDaPartida(morte.t)} e ${plural ? "as torres caíram" : "a torre caiu"} em ${horarios}, ` +
        `sem ninguém pra defender a lane nesses segundos.`,
      oQueFazer:
        "Depois de morrer, voltar pra lane rápido ou pedir rotação de outro herói pra cobrir a torre: uma morte isolada " +
        "não devia custar a estrutura inteira.",
      porque:
        "Torre sem defensor cai rápido pra creeps ou pra um herói inimigo parado nela; o tempo morto do respawn é " +
        "justamente a janela em que isso acontece.",
      fontes: [FONTE_TORRE],
      peso: torresDepois.length >= 2 ? "pesou_muito" : "pesou",
      evidencias: { numeros: { minutoDaMorte, torresPerdidas: torresDepois.length } },
    }];
  });
}

export const REGRAS: readonly Regra[] = [
  { id: "torre-perdida-apos-morte", familia: "objetivos-e-aegis", avaliar: torrePerdidaAposMorte },
];
