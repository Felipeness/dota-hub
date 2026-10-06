import { buscar, construirIndice, sugerir } from "./index";

const termos = [
  { id: "roshan", titulo: "Roshan", patch: "7.41", fontes: [], secoes: { basico: "Chefe neutro do rio.", avancado: null }, origem: { basico: null, avancado: null }, links: [] },
  { id: "pull", titulo: "Pull", patch: "7.41", fontes: [], secoes: { basico: "Puxar o camp para a wave.", avancado: null }, origem: { basico: null, avancado: null }, links: [] },
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
it("id exato de rota vem primeiro", () => {
  const rota = (id: string, pergunta: string, titulo: string) => ({
    id, pergunta, titulo, pdf: "06" as const, lado: "radiant" as const, secao: "", janela: {}, origem: "recomendada" as const,
    replay: null, passos: [], caminhos: [], fuga: null, proxima: [], se: [], interrupcao: [], porque: "",
  });
  const comRotas = construirIndice({
    rotas: [
      rota("M-R-01", "Mapa aberto do lado da bot: qual a rota mais agressiva?", "Mapa aberto · Radiant"),
      rota("M-D-01", "Mapa aberto do lado da top: qual a rota mais agressiva?", "Mapa aberto · Dire"),
      rota("MA-R-01", "Onde farmo no minuto 6 se não posso pegar wave?", "Minuto 6 · sem wave"),
    ],
    objetivos: [], termos: [],
  });
  expect(buscar(comRotas, "MA-R-01")[0]?.id).toBe("MA-R-01");
});
