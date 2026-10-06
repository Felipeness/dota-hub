import type { ConteudoItem } from "../data/schemas";
import { destinoDoLink } from "./destino";

const termo = (id: string, titulo: string): ConteudoItem =>
  ({ id, titulo, patch: "7.41", fontes: [], secoes: { basico: "", avancado: null }, origem: { basico: null, avancado: null }, links: [] });
const termos = [termo("pull", "Pull"), termo("camp", "Camp")];

it.each([
  ["pull", { to: "/glossario/pull", rotulo: "Pull" }],
  ["torre", { to: "/mapa/torre", rotulo: "torre no mapa" }],
])("leva o link %s ao destino certo", (link, esperado) => {
  expect(destinoDoLink(link, termos)).toEqual(esperado);
});
