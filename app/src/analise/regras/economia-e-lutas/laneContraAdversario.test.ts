import { contextoDaAmostra } from "./amostraDeTeste";
import { REGRA } from "./laneContraAdversario";

describe("laneContraAdversario, partida real", () => {
  it("não acusa nada: 3580 contra 3765 do adversário é só 5% de diferença, dentro da margem de 15%", () => {
    expect(REGRA.avaliar(contextoDaAmostra())).toEqual([]);
  });
});

describe("laneContraAdversario, casos sintéticos", () => {
  const ctxComOuro = (meu: number, dele: number) => {
    const ctx = contextoDaAmostra();
    const curvas10 = (ouro: number) => Array.from({ length: 11 }, (_, i) => (i === 10 ? ouro : 0));
    return {
      ...ctx,
      detalhe: {
        ...ctx.detalhe,
        curvas: { ...ctx.detalhe.curvas, ouro: curvas10(meu) },
        adversario: { heroi: ctx.detalhe.adversario!.heroi, curvas: { ...ctx.detalhe.adversario!.curvas, ouro: curvas10(dele) } },
      },
    };
  };

  it("acusa erro quando o adversário está 20% na frente", () => {
    const [achado] = REGRA.avaliar(ctxComOuro(1000, 1200));
    expect(achado).toMatchObject({ id: "lane-perdida-para-o-adversario", tipo: "erro", peso: "pesou" });
  });

  it("pesa muito quando o adversário está 40% na frente", () => {
    const [achado] = REGRA.avaliar(ctxComOuro(1000, 1400));
    expect(achado).toMatchObject({ id: "lane-perdida-para-o-adversario", tipo: "erro", peso: "pesou_muito" });
  });

  it("acusa acerto quando o jogador está 20% na frente do adversário", () => {
    const [achado] = REGRA.avaliar(ctxComOuro(1200, 1000));
    expect(achado).toMatchObject({ id: "lane-ganha-do-adversario", tipo: "acerto", peso: "leve" });
  });

  it("não acusa nada sem adversário direto identificado", () => {
    const ctx = contextoDaAmostra();
    expect(REGRA.avaliar({ ...ctx, detalhe: { ...ctx.detalhe, adversario: null } })).toEqual([]);
  });
});
