import { buscar, construirIndice, sugerir } from "./index";

const termos = [
  { id: "roshan", titulo: "Roshan", patch: "7.41", fontes: [], secoes: { basico: "Chefe neutro do rio.", avancado: null }, links: [] },
  { id: "pull", titulo: "Pull", patch: "7.41", fontes: [], secoes: { basico: "Puxar o camp para a wave.", avancado: null }, links: [] },
];
const busca = construirIndice({ rotas: [], objetivos: [], termos });

it("acha com prefixo, acento e caixa diferentes", () => {
  for (const q of ["rosh", "Roshán", "ROSHAN"]) expect(buscar(busca, q)[0]?.id).toBe("roshan");
});
it("sem resultado sugere termos parecidos", () => {
  expect(buscar(busca, "pulll")).toEqual([]);
  expect(sugerir(busca, "pulll")).toContain("Pull");
});
it("responde rápido", () => {
  const t0 = performance.now();
  buscar(busca, "ro");
  expect(performance.now() - t0).toBeLessThan(300);
});
