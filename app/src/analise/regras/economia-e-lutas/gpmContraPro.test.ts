import { contextoDaAmostra } from "./amostraDeTeste";
import { REGRA } from "./gpmContraPro";

describe("gpmContraPro, partida real", () => {
  it("acusa acerto com o gold_per_min do OpenDota: 897 contra média de pro de ~684 (n=504)", () => {
    const [achado] = REGRA.avaliar(contextoDaAmostra());
    expect(achado).toMatchObject({ id: "gpm-acima-do-pro", tipo: "acerto", peso: "leve" });
    expect(achado?.evidencias.numeros).toMatchObject({ gpm: 897, mediaPro: 684, n: 504 });
  });
});

describe("gpmContraPro, casos sintéticos", () => {
  const ctxComGpm = (gpm: number | null) => {
    const ctx = contextoDaAmostra();
    return { ...ctx, detalhe: { ...ctx.detalhe, gpm } };
  };

  it("acusa erro quando o GPM fica abaixo de 90% da média do pro (684 de média)", () => {
    const [achado] = REGRA.avaliar(ctxComGpm(500)); // < 684*0.9
    expect(achado).toMatchObject({ id: "gpm-abaixo-do-pro", tipo: "erro", peso: "pesou" });
  });

  it("pesa muito (pesou_muito) quando o GPM fica abaixo de 60% da média do pro, não só 'pesou' fixo", () => {
    const [achado] = REGRA.avaliar(ctxComGpm(300)); // razão ~0,44 < 0,6
    expect(achado).toMatchObject({ id: "gpm-abaixo-do-pro", tipo: "erro", peso: "pesou_muito" });
  });

  it("não acusa nada sem GPM na partida", () => {
    expect(REGRA.avaliar(ctxComGpm(null))).toEqual([]);
  });

  it("não acusa nada sem amostra de pro suficiente (n abaixo de AMOSTRA_MINIMA)", () => {
    const ctx = contextoDaAmostra();
    const semAmostra = { ...ctx, proDoHeroi: { ...ctx.proDoHeroi!, forca: { ...ctx.proDoHeroi!.forca, n: 2 } } };
    expect(REGRA.avaliar(semAmostra)).toEqual([]);
  });
});
