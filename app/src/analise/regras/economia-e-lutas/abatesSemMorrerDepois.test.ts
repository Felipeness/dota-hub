import { tempoDaPartida } from "../../../live/partida/detalhe";
import { contextoDaAmostra } from "./amostraDeTeste";
import { REGRA } from "./abatesSemMorrerDepois";

describe("abatesSemMorrerDepois, partida real", () => {
  it("acusa só o cluster de 41:08: o de 11:46 teve morte própria 45s antes (11:01, mesma luta, troca), não uma luta convertida", () => {
    const achados = REGRA.avaliar(contextoDaAmostra());
    expect(achados.map((a) => tempoDaPartida(Math.round((a.minuto ?? 0) * 60)))).toEqual(["41:08"]);
    expect(achados.every((a) => a.tipo === "acerto")).toBe(true);
  });

  it("não acusa o cluster de 18:03 a 18:03+90s: a morte de 18:50 cai dentro da janela de 3 min depois", () => {
    const achados = REGRA.avaliar(contextoDaAmostra());
    expect(achados.some((a) => (a.minuto ?? 0) > 18 && (a.minuto ?? 0) < 18.1)).toBe(false);
  });
});
