import { destinoDoLink, lugaresDoTermo, montarCatalogo } from "./links";

const catalogo = montarCatalogo({
  termos: [{ id: "aegis" }], herois: [{ id: "medusa" }], rotas: [{ id: "MA-R-01" }],
  objetivos: [{ id: "roshan_pit_top", tipo: "roshan" }],
});

it.each([
  { id: "aegis", destino: "/glossario/aegis" },
  { id: "medusa", destino: "/herois/medusa" },
  { id: "MA-R-01", destino: "/rotas/MA-R-01" },
  { id: "roshan", destino: "/mapa/roshan_pit_top" },
  { id: "nada", destino: null },
])("link $id vai para $destino", ({ id, destino }) => {
  expect(destinoDoLink(id, catalogo)).toBe(destino);
});

it("acha os lugares do termo pelo id ou pelo tipo do objetivo", () => {
  const objetivos = [{ id: "roshan_pit_top", tipo: "roshan" }, { id: "rad_ancient", tipo: "ancient" }, { id: "dire_ancient", tipo: "ancient" }];
  expect(lugaresDoTermo(["roshan", "stack"], objetivos).map((o) => o.id)).toEqual(["roshan_pit_top"]);
  expect(lugaresDoTermo(["rad_ancient"], objetivos).map((o) => o.id)).toEqual(["rad_ancient"]);
});
