import { celulaParaNorm, laneDasManchas, manchasDaLane, regiaoDoPonto } from "./rotaAproximada";

it("célula da grade vira o centro da célula normalizado", () => {
  expect(celulaParaNorm(57)).toBeCloseTo(0.5 / 142);
  expect(celulaParaNorm(128)).toBeCloseTo(71.5 / 142);
  expect(celulaParaNorm(300)).toBe(1);
});

it("manchas têm peso relativo à célula mais visitada", () => {
  expect(manchasDaLane({ "128": { "128": 10, "130": 5 } })).toEqual([
    { x: 0.504, y: 0.504, peso: 1 }, { x: 0.504, y: 0.518, peso: 0.5 },
  ]);
});

it.each([
  { ponto: { x: 0.5, y: 0.52 }, regiao: "meio" }, { ponto: { x: 0.15, y: 0.7 }, regiao: "cima" }, { ponto: { x: 0.8, y: 0.2 }, regiao: "baixo" },
])("$ponto fica em $regiao", ({ ponto, regiao }) => {
  expect(regiaoDoPonto(ponto)).toBe(regiao);
});

it.each([
  { lado: "radiant", x: 0.8, y: 0.18, lane: "safe" }, { lado: "dire", x: 0.8, y: 0.18, lane: "off" },
  { lado: "dire", x: 0.2, y: 0.8, lane: "safe" }, { lado: "radiant", x: 0.5, y: 0.5, lane: "mid" },
] as const)("$lado em ($x, $y) é $lane", ({ lado, x, y, lane }) => {
  expect(laneDasManchas([{ x, y, peso: 1 }], lado)).toBe(lane);
});

it("sem manchas não há lane", () => {
  expect(laneDasManchas([], "radiant")).toBeNull();
});
