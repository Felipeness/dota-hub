import { glifoDoTipo } from "./glifos";

it.each([
  { tipo: "torre", esperado: "▲" },
  { tipo: "runa", esperado: "✦" },
  { tipo: "tipo_desconhecido", esperado: "●" },
])("glifoDoTipo($tipo) devolve $esperado", ({ tipo, esperado }) => {
  expect(glifoDoTipo(tipo)).toBe(esperado);
});
