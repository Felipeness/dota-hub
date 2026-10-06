import { normToPercent, normToWorld } from "./coords";

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
