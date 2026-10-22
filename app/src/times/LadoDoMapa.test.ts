import { MAPA_VAZIO, escolhaDoLado, notaDoLado } from "./LadoDoMapa";

it.each([
  { valor: "dire", esperado: "dire" },
  { valor: "radiant", esperado: "radiant" },
  { valor: "ambos", esperado: "ambos" },
  { valor: null, esperado: "ambos" },
  { valor: "DIRE", esperado: "ambos" },
])("lê ?lado=$valor como $esperado", ({ valor, esperado }) => {
  expect(escolhaDoLado(valor)).toBe(esperado);
});

const lado = (lado: "radiant" | "dire", partidas: number) => ({ estado: "ok" as const, dados: { lado, partidas, convencoes: "", mapa: MAPA_VAZIO } });

it.each([
  { caso: "ambos", nota: notaDoLado("ambos", null, 140), texto: /^140 partidas; as de Dire aparecem espelhadas/, alerta: null },
  { caso: "dire com amostra", nota: notaDoLado("dire", lado("dire", 95), 140), texto: /^Como Dire: 95 partidas, no mapa real \(base em cima à direita\)/, alerta: null },
  { caso: "radiant com n pequeno", nota: notaDoLado("radiant", lado("radiant", 12), 140), texto: /^Como Radiant: 12 partidas/,
    alerta: "n pequeno: só 12 partidas deste lado. Leia como indício." },
  { caso: "carregando", nota: notaDoLado("dire", { estado: "carregando" }, 140), texto: /^Carregando o mapa de Dire/, alerta: null },
])("descreve o mapa escolhido: $caso", ({ nota, texto, alerta }) => {
  expect(nota.texto).toMatch(texto);
  expect(nota.alerta).toBe(alerta);
});
