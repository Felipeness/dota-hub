import { minutoDoNivel } from "./fonte";

const XP_POR_NIVEL = [0, 240, 640, 1160, 1760, 2440, 3200, 4000, 4900];

it("acha o minuto em que a xp acumulada passa o alvo do nível", () => {
  const xpT = [0, 200, 600, 1100, 1800, 2500, 3300, 4100, 5000];
  expect(minutoDoNivel(xpT, XP_POR_NIVEL, 7)).toBe(6);
});

it("retorna null quando a partida registrada acaba antes do nível", () => {
  const xpT = [0, 200, 600, 1100];
  expect(minutoDoNivel(xpT, XP_POR_NIVEL, 7)).toBeNull();
});

it("retorna null pra nível fora da tabela de constantes", () => {
  expect(minutoDoNivel([0, 300], XP_POR_NIVEL, 99)).toBeNull();
});
