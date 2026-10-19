import { tempoDaPartida } from "../../../live/partida/detalhe";
import { contextoDaAmostra } from "./amostraDeTeste";
import { REGRA } from "./abatesSemMorrerDepois";

describe("abatesSemMorrerDepois, partida real", () => {
  it("acusa só os 2 clusters de abate que não tiveram morte própria nos 3 minutos seguintes (11:46 e 41:08)", () => {
    const achados = REGRA.avaliar(contextoDaAmostra());
    expect(achados.map((a) => tempoDaPartida(Math.round((a.minuto ?? 0) * 60)))).toEqual(["11:46", "41:08"]);
    expect(achados.every((a) => a.tipo === "acerto")).toBe(true);
  });

  it("não acusa o cluster de 18:03 a 18:03+90s: a morte de 18:50 cai dentro da janela de 3 min depois", () => {
    const achados = REGRA.avaliar(contextoDaAmostra());
    expect(achados.some((a) => (a.minuto ?? 0) > 18 && (a.minuto ?? 0) < 18.1)).toBe(false);
  });
});
