import type { Objetivo } from "../data/schemas";
import { objetivoDaUrl } from "./objetivoDaUrl";

const obj = (id: string, tipo: string): Objetivo => ({ id, tipo, nome: id, x: 0, y: 0, lado: "neutro", detalhes: {} });
const objetivos = [obj("roshan_pit_top", "roshan"), obj("roshan_pit_bot", "roshan")];

it.each([
  ["roshan_pit_bot", "roshan_pit_bot"],
  ["roshan", "roshan_pit_top"],
  ["nada", undefined],
])("resolve /mapa/%s", (id, esperado) => {
  expect(objetivoDaUrl(id, objetivos)?.id).toBe(esperado);
});
