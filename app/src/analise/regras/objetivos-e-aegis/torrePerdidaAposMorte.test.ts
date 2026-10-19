import { contextoDaAmostra } from "./amostraDeTeste";
import { REGRAS } from "./torrePerdidaAposMorte";

it("liga a torre T1 safe perdida em 11:38 à morte em 11:01 (ref. Dotaflix: 2ª morte custou T1 safe)", () => {
  const [achado] = REGRAS.flatMap((regra) => regra.avaliar(contextoDaAmostra()));
  expect(achado?.titulo).toBe("Torre caiu 0:37 depois de uma morte, 11:01");
  expect(achado?.tipo).toBe("erro");
  expect(achado?.evidencias.numeros).toEqual({ minutoDaMorte: 11 + 1 / 60, torresPerdidas: 1 });
});

it("agrupa várias torres caídas depois da mesma morte em 1 achado", () => {
  const ctx = contextoDaAmostra();
  const tresTorres = {
    ...ctx,
    detalhe: {
      ...ctx.detalhe,
      eventos: ctx.detalhe.eventos.filter((e) => e.tipo !== "torre" && e.tipo !== "morte").concat([
        { t: 1800, tipo: "morte" as const, texto: "Morte para X", ponto: null },
        { t: 1804, tipo: "torre" as const, texto: "Torre perdida", ponto: null },
        { t: 1839, tipo: "torre" as const, texto: "Torre perdida", ponto: null },
        { t: 1860, tipo: "torre" as const, texto: "Torre perdida", ponto: null },
      ]),
    },
  };
  const [achado] = REGRAS.flatMap((regra) => regra.avaliar(tresTorres));
  expect(achado?.titulo).toBe("3 torres caíram nos 90 s depois de uma morte, 30:00");
  expect(achado?.evidencias.numeros).toEqual({ minutoDaMorte: 30, torresPerdidas: 3 });
});

it("não acusa torre destruída pelo próprio time", () => {
  const ctx = contextoDaAmostra();
  const soTorreAliada = {
    ...ctx,
    detalhe: { ...ctx.detalhe, eventos: ctx.detalhe.eventos.filter((e) => e.tipo !== "torre").concat([{ t: 700, tipo: "torre" as const, texto: "Torre destruída pelo seu time", ponto: null }]) },
  };
  expect(REGRAS.flatMap((regra) => regra.avaliar(soTorreAliada))).toEqual([]);
});

it("não conta a mesma torre duas vezes quando duas mortes próximas abrem janelas que se sobrepõem", () => {
  const ctx = contextoDaAmostra();
  const duasMortesUmaTorre = {
    ...ctx,
    detalhe: {
      ...ctx.detalhe,
      eventos: ctx.detalhe.eventos.filter((e) => e.tipo !== "torre" && e.tipo !== "morte").concat([
        { t: 1519, tipo: "morte" as const, texto: "Morte para Ursa", ponto: null },
        { t: 1575, tipo: "morte" as const, texto: "Morte para Timbersaw", ponto: null },
        { t: 1598, tipo: "torre" as const, texto: "Torre perdida", ponto: null },
      ]),
    },
  };
  const achados = REGRAS.flatMap((regra) => regra.avaliar(duasMortesUmaTorre));
  expect(achados).toHaveLength(1);
  expect(achados[0]?.evidencias.numeros?.minutoDaMorte).toBeCloseTo(1519 / 60, 5); // atribuída à 1ª morte que abriu a janela
});

it("não acusa quando a torre cai fora da janela de 90 s depois da última morte", () => {
  const ctx = contextoDaAmostra();
  const torreTardia = {
    ...ctx,
    detalhe: {
      ...ctx.detalhe,
      eventos: ctx.detalhe.eventos.filter((e) => e.tipo !== "torre" && e.tipo !== "morte")
        .concat([{ t: 100, tipo: "morte" as const, texto: "Morte para X", ponto: null }, { t: 100 + 91, tipo: "torre" as const, texto: "Torre perdida", ponto: null }]),
    },
  };
  expect(REGRAS.flatMap((regra) => regra.avaliar(torreTardia))).toEqual([]);
});

it("não afirma que a lane ficou sem defesa: diz que é correlação no tempo, sem dado de posição", () => {
  const achados = REGRAS.flatMap((regra) => regra.avaliar(contextoDaAmostra()));
  expect(achados.length).toBeGreaterThan(0);
  for (const achado of achados) {
    expect(achado.oQueAconteceu).not.toContain("sem ninguém pra defender");
    expect(achado.oQueAconteceu).toContain("correlação no tempo");
  }
});
