// Onde e para quem: expõe a posição e o matador de cada morte. Ver SPEC §mortes-e-visao.
import { tempoDaPartida } from "../../../live/partida/detalhe";
import type { Achado, Contexto, Regra } from "../../modelo";

const FONTE_POSICAO = "deaths_pos do teamfight que contém o instante da morte (OpenDota)";

function mapaDeMortes(ctx: Contexto): Achado[] {
  const mortes = ctx.detalhe.eventos.filter((e) => e.tipo === "morte");
  return mortes.map((morte): Achado => {
    const minuto = morte.t / 60;
    const temPosicao = morte.ponto !== null;
    return {
      id: `mapa-de-mortes-${morte.t}`,
      tipo: "contexto",
      minuto,
      titulo: `${morte.texto}, ${tempoDaPartida(morte.t)}`,
      oQueAconteceu: temPosicao
        ? `${morte.texto} em ${tempoDaPartida(morte.t)}, dentro de uma luta em equipe com posição registrada no mapa.`
        : `${morte.texto} em ${tempoDaPartida(morte.t)}, fora de qualquer luta em equipe reconhecida pelo OpenDota ` +
          "(morte isolada, de rota ou de farm) — sem posição no mapa para essa morte.",
      oQueFazer: temPosicao
        ? "Reveja o replay desse instante para entender a rota do inimigo até essa posição; é o dado mais concreto " +
          "para decidir onde colocar observer na próxima partida."
        : null,
      porque: temPosicao
        ? "O OpenDota só registra a posição da morte (deaths_pos) quando ela cai dentro da janela de um teamfight " +
          "detectado; fora disso o campo vem vazio."
        : "Mortes isoladas (gank de rota, pick-off de farm) não entram em teamfights, então a fonte não guarda onde " +
          "no mapa elas aconteceram.",
      fontes: [FONTE_POSICAO],
      peso: "leve",
      evidencias: { numeros: { minuto }, posicaoNoMapa: morte.ponto ? { x: morte.ponto[0], y: morte.ponto[1] } : null },
    };
  });
}

export const REGRA: Regra = { id: "mapa-de-mortes", familia: "mortes-e-visao", avaliar: mapaDeMortes };
