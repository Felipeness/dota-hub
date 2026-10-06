import type { ConteudoItem } from "../data/schemas";
import { filtrarTermos } from "./filtros";

const termo = (id: string, titulo: string, categoria: string): ConteudoItem =>
  ({ id, titulo, patch: "7.41", fontes: [], secoes: { basico: "", avancado: null }, origem: { basico: null, avancado: null }, links: [], extras: { categoria } });
const termos = [termo("bkb", "Black King Bar", "item"), termo("stack", "Stack", "farm")];

it("filtra por categoria e por texto sem acento", () => {
  expect(filtrarTermos(termos, { texto: "", categoria: "item" }).map((t) => t.id)).toEqual(["bkb"]);
  expect(filtrarTermos(termos, { texto: "STÁCK", categoria: null }).map((t) => t.id)).toEqual(["stack"]);
});
