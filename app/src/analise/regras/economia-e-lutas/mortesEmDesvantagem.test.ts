import { tempoDaPartida } from "../../../live/partida/detalhe";
import { contextoDaAmostra } from "./amostraDeTeste";
import { REGRA } from "./mortesEmDesvantagem";

describe("mortesEmDesvantagem, partida real", () => {
  it("acusa 8 das 9 mortes (só a de 46:10 fica de fora, time só 1206 de ouro atrás nesse minuto)", () => {
    const achados = REGRA.avaliar(contextoDaAmostra());
    expect(achados).toHaveLength(8);
    expect(achados.some((a) => tempoDaPartida(Math.round((a.minuto ?? 0) * 60)) === "46:10")).toBe(false);
  });

  it("pesa muito nas mortes de 28:33, 31:38 e 49:51, quando o time estava 6k+ atrás", () => {
    const achados = REGRA.avaliar(contextoDaAmostra());
    const graves = achados.filter((a) => a.peso === "pesou_muito").map((a) => tempoDaPartida(Math.round((a.minuto ?? 0) * 60)));
    expect(graves).toEqual(["28:33", "31:38", "49:51"]);
  });

  it("todas as mortes acusadas são tipo erro, com a vantagem de ouro do time nas evidências", () => {
    const achados = REGRA.avaliar(contextoDaAmostra());
    expect(achados.every((a) => a.tipo === "erro" && typeof a.evidencias.numeros?.vantagemDeOuroDoTime === "number")).toBe(true);
  });
});
