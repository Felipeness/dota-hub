import { alturaEm, normToPercent, normToWorld } from "./coords";

it("centro do mapa vai para a origem do mundo", () => {
  expect(normToWorld([0.5, 0.5])).toEqual([0, 0, 0]);
});
it("Radiant (canto de baixo à esquerda) fica em x negativo e z positivo", () => {
  const [x, , z] = normToWorld([0, 0], 100);
  expect(x).toBe(-50); expect(z).toBe(50);
});
it("percentual da imagem plana inverte o y", () => {
  expect(normToPercent([0.25, 0.75])).toEqual({ left: "25%", top: "25%" });
});

it("altura vem da célula da grade, com y de baixo para cima", () => {
  const relevo = { tamanho: 2, alturas: [0.1, 0.2, 0.3, 0.4] };
  expect(alturaEm(relevo, [0.25, 0.75])).toBe(0.1);
  expect(alturaEm(relevo, [0.75, 0.25])).toBe(0.4);
  expect(alturaEm(relevo, [1, 0])).toBe(0.4);
});
