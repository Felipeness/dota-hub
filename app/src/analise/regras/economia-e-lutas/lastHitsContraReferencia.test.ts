import type { Contexto } from "../../modelo";
import { contextoDaAmostra, PRO_DA_AMOSTRA } from "./amostraDeTeste";
import { REGRA } from "./lastHitsContraReferencia";

const comLh10 = (ctx: Contexto, lh10: number): Contexto =>
  ({ ...ctx, detalhe: { ...ctx.detalhe, curvas: { ...ctx.detalhe.curvas, lh: [0, ...Array(9).fill(0), lh10] } } });
const semPro = (ctx: Contexto): Contexto => ({ ...ctx, pro: null });

describe("lastHitsContraReferencia, partida real", () => {
  it("não acusa erro aos 10 min: 61 last hits fica dentro da faixa da mediana do pro (65), não da estimativa pública de ~96", () => {
    const achados = REGRA.avaliar(contextoDaAmostra());
    expect(achados.find((a) => a.id === "lh10-contra-referencia")).toBeUndefined();
  });

  it("não acusa nada aos 20 min: 195 last hits fica dentro da faixa da estimativa pública (~192)", () => {
    const achados = REGRA.avaliar(contextoDaAmostra());
    expect(achados.find((a) => a.id === "lh20-contra-referencia")).toBeUndefined();
  });
});

describe("lastHitsContraReferencia, casos sintéticos", () => {
  it("compara aos 10 min com a mediana real do pro e pode pesar muito", () => {
    const [achado] = REGRA.avaliar(comLh10(contextoDaAmostra(), 30)); // 30 < 65*0.6
    expect(achado).toMatchObject({ id: "lh10-contra-referencia", tipo: "erro", peso: "pesou_muito" });
    expect(achado?.evidencias.numeros).toMatchObject({ lastHits: 30, esperado: PRO_DA_AMOSTRA.lh10 });
    expect(achado?.titulo).toContain("mediana do pro");
  });

  it("acusa acerto quando o farm passa 10% da mediana do pro", () => {
    const [achado] = REGRA.avaliar(comLh10(contextoDaAmostra(), 72)); // 72 >= 65*1.1
    expect(achado).toMatchObject({ id: "lh10-contra-referencia", tipo: "acerto", peso: "leve" });
  });

  it("sem dado de pro, usa a estimativa pública, diz que é aproximada e não passa de 'pesou'", () => {
    const [achado] = REGRA.avaliar(comLh10(semPro(contextoDaAmostra()), 50)); // 50 < 96*0.6
    expect(achado).toMatchObject({ id: "lh10-contra-referencia", tipo: "erro", peso: "pesou" });
    expect(achado?.evidencias.numeros).toMatchObject({ esperado: 96 });
    expect(achado?.titulo).toContain("estimativa pública aproximada");
  });

  it("o que fazer não supõe que o herói era carry", () => {
    const [achado] = REGRA.avaliar(comLh10(contextoDaAmostra(), 30));
    expect(achado?.oQueFazer).not.toMatch(/carry/i);
  });

  it("não gera achado sem pro e sem referência pública", () => {
    const ctx = semPro(contextoDaAmostra());
    expect(REGRA.avaliar({ ...ctx, detalhe: { ...ctx.detalhe, referencia: null } })).toEqual([]);
  });
});
