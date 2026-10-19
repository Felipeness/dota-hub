// 3+ mortes isoladas pro mesmo herói inimigo: padrão de rota ou de visão explorado, não acaso. Só conta morte
// isolada (fora de teamfight, ponto === null); morte dentro de uma luta em equipe é perda de luta/posicionamento,
// um problema diferente, já coberto por mapaDeMortes.ts, e o conselho de "mude a rota/ward" não se aplica a ela.
// Ver SPEC §mortes-e-visao.
import { tempoDaPartida } from "../../../live/partida/detalhe";
import type { Achado, Contexto, Regra } from "../../modelo";

const LIMIAR_PARA_ERRO = 3;
const FONTE = "deaths_log do OpenDota, agrupado pelo herói matador (campo key), só mortes isoladas (fora de teamfight)";
// Rótulos de fallback de nomeDoMatador (detalhe.ts) que não são heróis: nunca agrupar sob eles como "mesmo herói".
const MATADORES_SEM_HEROI = new Set(["Morte para torre", "Morte para creep ou neutro"]);

function mortesRepetidas(ctx: Contexto): Achado[] {
  const mortes = ctx.detalhe.eventos.filter((e) => e.tipo === "morte" && e.ponto === null && !MATADORES_SEM_HEROI.has(e.texto));
  const porMatador = new Map<string, typeof mortes>();
  for (const morte of mortes) {
    const lista = porMatador.get(morte.texto) ?? [];
    porMatador.set(morte.texto, [...lista, morte]);
  }
  return [...porMatador.entries()].flatMap(([matador, doMatador]): Achado[] => {
    if (doMatador.length < LIMIAR_PARA_ERRO) return [];
    const minutos = doMatador.map((m) => tempoDaPartida(m.t)).join(", ");
    const primeiro = doMatador[0];
    return [{
      id: `mortes-repetidas-${matador}`,
      tipo: "erro",
      minuto: primeiro ? primeiro.t / 60 : null,
      titulo: `${doMatador.length}x ${matador.toLowerCase()} na partida`,
      oQueAconteceu: `Você morreu ${doMatador.length} vezes para o mesmo herói: ${matador.toLowerCase()}, em ${minutos}.`,
      oQueFazer:
        "A segunda vez já é sinal de rota ou de visão explorada por esse herói específico; mude a rota ou a ward " +
        "depois da primeira morte, em vez de repetir o mesmo caminho.",
      porque:
        "Morrer repetidamente para o mesmo inimigo é o adversário encontrando (e reaproveitando) uma janela real " +
        "de rota, visão ou timing contra você; cada repetição baixa a chance de ser coincidência.",
      fontes: [FONTE],
      peso: doMatador.length >= LIMIAR_PARA_ERRO + 1 ? "pesou_muito" : "pesou",
      evidencias: { numeros: { vezes: doMatador.length } },
    }];
  });
}

export const REGRA: Regra = { id: "mortes-repetidas", familia: "mortes-e-visao", avaliar: mortesRepetidas };
