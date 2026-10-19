import { contextoDaAmostra } from "./amostraDeTeste";
import { REGRA } from "./lastHitsContraReferencia";

describe("lastHitsContraReferencia, partida real", () => {
  it("acusa erro aos 10 min: 61 last hits contra mediana de ~96 (9,62/min)", () => {
    const [achado] = REGRA.avaliar(contextoDaAmostra());
    expect(achado?.id).toBe("lh10-contra-referencia");
    expect(achado?.tipo).toBe("erro");
    expect(achado?.peso).toBe("pesou");
    expect(achado?.evidencias.numeros).toMatchObject({ lastHits: 61, esperado: 96 });
  });

  it("não acusa nada aos 20 min: 195 last hits fica dentro da faixa da mediana (~192), nem erro nem acerto", () => {
    const achados = REGRA.avaliar(contextoDaAmostra());
    expect(achados.find((a) => a.id === "lh20-contra-referencia")).toBeUndefined();
  });
});

describe("lastHitsContraReferencia, casos sintéticos", () => {
  const ctxComLhEReferencia = (lh10: number) => {
    const ctx = contextoDaAmostra();
    return { ...ctx, detalhe: { ...ctx.detalhe, curvas: { ...ctx.detalhe.curvas, lh: [0, ...Array(9).fill(0), lh10] } } };
  };

  it("acusa acerto quando o farm passa 10% da mediana", () => {
    const achados = REGRA.avaliar(ctxComLhEReferencia(110)); // mediana ~96, 110 >= 96*1.1
    expect(achados[0]).toMatchObject({ id: "lh10-contra-referencia", tipo: "acerto", peso: "leve" });
  });

  it("pesa muito quando o farm fica abaixo de 60% da mediana", () => {
    const achados = REGRA.avaliar(ctxComLhEReferencia(50)); // mediana ~96, 50 < 96*0.6
    expect(achados[0]).toMatchObject({ id: "lh10-contra-referencia", tipo: "erro", peso: "pesou_muito" });
  });

  it("não gera achado sem referência pública (benchmarks ausente)", () => {
    const ctx = contextoDaAmostra();
    const semReferencia = { ...ctx, detalhe: { ...ctx.detalhe, referencia: null } };
    expect(REGRA.avaliar(semReferencia)).toEqual([]);
  });
});
