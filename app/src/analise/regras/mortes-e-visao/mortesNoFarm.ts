// Mortes entre 8 e 20 min: janela clássica de farm/rotação, onde morrer custa mais do que em qualquer outra fase.
// Ver SPEC §mortes-e-visao ("morte no farm 8-20").
import { tempoDaPartida } from "../../../live/partida/detalhe";
import type { Achado, Contexto, Regra } from "../../modelo";

const INICIO_S = 8 * 60;
const FIM_S = 20 * 60;
const FONTE = "deaths_log do OpenDota, filtrado entre 8:00 e 20:00";

function pesoPorQuantidade(n: number): "leve" | "pesou" | "pesou_muito" {
  if (n >= 4) return "pesou_muito";
  if (n >= 3) return "pesou";
  return "leve";
}

function mortesNoFarm(ctx: Contexto): Achado[] {
  const mortes = ctx.detalhe.eventos.filter((e) => e.tipo === "morte" && e.t >= INICIO_S && e.t <= FIM_S);
  if (mortes.length < 2) return [];
  const minutos = mortes.map((m) => tempoDaPartida(m.t)).join(", ");
  return [{
    id: "mortes-no-farm",
    tipo: "erro",
    minuto: mortes[0] ? mortes[0].t / 60 : null,
    titulo: `${mortes.length} mortes entre 8 e 20 minutos`,
    oQueAconteceu: `Você morreu ${mortes.length} vezes na janela de 8 a 20 minutos (${minutos}), a fase em que ` +
      "cada morte ainda custa caro: o seu respawn e o ouro que vira item pro time inimigo.",
    oQueFazer:
      "Nessa janela, priorize ficar vivo sobre forçar uma troca: recue ao ver dois ou mais inimigos sumidos do " +
      "seu lado do mapa, e só se exponha com visão colocada antes.",
    porque:
      "Cada morte nesses minutos custa o dobro: o farm perdido respawnando e o farm que o inimigo ganha com o " +
      "ouro do seu abate, logo na fase em que a diferença de item ainda decide o meio-jogo.",
    fontes: [FONTE],
    peso: pesoPorQuantidade(mortes.length),
    evidencias: { numeros: { mortes: mortes.length } },
  }];
}

export const REGRA: Regra = { id: "mortes-no-farm", familia: "mortes-e-visao", avaliar: mortesNoFarm };
