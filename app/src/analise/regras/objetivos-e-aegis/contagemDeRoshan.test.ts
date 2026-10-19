import { contextoDaAmostra } from "./amostraDeTeste";
import { REGRAS } from "./contagemDeRoshan";

it("acusa 3 Roshans do time inimigo contra 0 do seu time, com os três horários (ref. Dotaflix: 26:23, 38:30, 48:16)", () => {
  const [achado] = REGRAS.flatMap((regra) => regra.avaliar(contextoDaAmostra()));
  expect(achado?.titulo).toBe("O time inimigo pegou 3 Roshans e o seu, 0");
  expect(achado?.oQueAconteceu).toContain("26:23, 38:30, 48:16");
  expect(achado?.tipo).toBe("contexto"); // disputa do time, não erro individual
  expect(achado?.peso).toBe("pesou_muito");
  expect(achado?.evidencias.numeros).toEqual({ roshansDoTimeInimigo: 3, roshansDoSeuTime: 0 });
});

it("não acusa nada quando o seu time empata ou ganha a corrida pelo Roshan", () => {
  const ctx = contextoDaAmostra();
  const semRoshan = { ...ctx, detalhe: { ...ctx.detalhe, eventos: ctx.detalhe.eventos.filter((e) => e.tipo !== "roshan") } };
  expect(REGRAS.flatMap((regra) => regra.avaliar(semRoshan))).toEqual([]);
});
