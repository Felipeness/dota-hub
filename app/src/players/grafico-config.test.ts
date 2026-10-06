import { configDoGrafico, formatarValor } from "./grafico-config";

const g = { id: "lh", titulo: "LH", tipo: "linha" as const, x: { rotulo: "minuto", valores: [0, 1] }, series: [{ nome: "Felipe", valores: [0, 4.5] }, { nome: "Satanic", valores: [0, null] }], unidade: "last hits", fonte: "f", nota: null };

it("vira gráfico de linha com uma série por amostra", () => {
  const c = configDoGrafico(g);
  expect(c.type).toBe("line");
  expect(c.data.labels).toEqual(["0", "1"]);
  expect(c.data.datasets.map((d) => d.label)).toEqual(["Felipe", "Satanic"]);
});

it("barra vira bar", () => {
  expect(configDoGrafico({ ...g, tipo: "barra" }).type).toBe("bar");
});

it.each([
  { valor: 53.4, unidade: "%", texto: "53,4%" },
  { valor: 4.5, unidade: "pp", texto: "4,5 pp" },
  { valor: 714, unidade: "jogos", texto: "714 jogos" },
])("formata $valor $unidade", ({ valor, unidade, texto }) => {
  expect(formatarValor(valor, unidade)).toBe(texto);
});
