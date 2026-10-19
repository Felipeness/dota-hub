import { tempoDaPartida } from "../../../live/partida/detalhe";
import { contextoDaAmostra } from "./amostraDeTeste";
import { REGRAS } from "./buybackNaJanelaDoRoshan";

it("acusa o buyback de 46:57, dentro da janela aberta pelo Roshan de 38:30 (46:30-49:30), com a morte de 49:51 na sequência", () => {
  const achados = REGRAS.flatMap((regra) => regra.avaliar(contextoDaAmostra()));
  expect(achados).toHaveLength(1);
  const [achado] = achados;
  expect(tempoDaPartida(Math.round((achado!.minuto ?? 0) * 60))).toBe("46:57");
  expect(achado!.oQueAconteceu).toContain("entre 46:30 e 49:30");
  expect(achado!.oQueAconteceu).toContain("morreu de novo em 49:51");
  expect(achado!.tipo).toBe("erro");
});

it("não acusa o buyback de 32:08: cai antes da janela aberta pelo Roshan de 26:23 (34:23-37:23)", () => {
  const achados = REGRAS.flatMap((regra) => regra.avaliar(contextoDaAmostra()));
  expect(achados.some((a) => tempoDaPartida(Math.round((a.minuto ?? 0) * 60)) === "32:08")).toBe(false);
});
