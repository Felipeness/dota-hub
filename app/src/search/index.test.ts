import type { ConteudoItem } from "../data/schemas";
import indice from "../times/amostras/indice.json";
import { indiceAtlasSchema } from "../times/schemas";
import { buscar, construirIndice, docsDeUnidades, sugerir } from "./index";

const termos: ConteudoItem[] = [
  { id: "roshan", titulo: "Roshan", patch: "7.41", fontes: [], secoes: { basico: "Chefe neutro do rio.", avancado: null }, origem: { basico: null, avancado: null }, links: [], extras: {} },
  { id: "pull", titulo: "Pull", patch: "7.41", fontes: [], secoes: { basico: "Puxar o camp para a wave.", avancado: null }, origem: { basico: null, avancado: null }, links: [], extras: {} },
  { id: "manta-style", titulo: "Manta Style", patch: "7.41", fontes: [], secoes: { basico: "Dá ilusões.", avancado: null }, origem: { basico: null, avancado: null }, links: [], extras: { item: "manta" } },
];
const busca = construirIndice({ rotas: [], objetivos: [], termos });

it("acha com prefixo, acento e caixa diferentes", () => {
  for (const q of ["rosh", "Roshán", "ROSHAN"]) expect(buscar(busca, q)[0]?.id).toBe("roshan");
});
it("termo de item carrega o ícone do item", () => {
  expect(buscar(busca, "manta")[0]).toMatchObject({ icone: "/data/retratos/itens/manta.webp" });
});
it("termo sem item não carrega ícone", () => {
  expect(buscar(busca, "roshan")[0]).toMatchObject({ icone: null });
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

it("acha herói, jogador e time", () => {
  const b = construirIndice({
    rotas: [], objetivos: [], termos: [],
    herois: [{ id: "medusa", nome: "Medusa", hero_id: 94, patch: "7.41f", resumo: "Carry de safelane.", tem_por_minuto: false }],
    jogadores: [{ id: "skiter", nome: "skiter", tipo: "pro", time: null, amostra: "1 replay" }],
    times: [{ id: "team-spirit", nome: "Team Spirit", jogadores: ["yatoro"], fonte: "" }],
  });
  expect(buscar(b, "medu")[0]).toMatchObject({ tipo: "heroi", link: "/herois/medusa" });
  expect(buscar(b, "skit")[0]).toMatchObject({ tipo: "jogador", link: "/jogadores/skiter" });
  expect(buscar(b, "spirit")[0]).toMatchObject({ tipo: "time", link: "/jogadores/times/team-spirit" });
});

it("acha o time do atlas pelo nome e pela tag", () => {
  const atlas = indiceAtlasSchema.parse(indice).times;
  const b = construirIndice({ rotas: [], objetivos: [], termos: [], atlas });
  expect(buscar(b, "exemplo b")[0]).toMatchObject({ tipo: "atlas", link: "/times/time-exemplo-b" });
  expect(buscar(b, "EXA")[0]).toMatchObject({ tipo: "atlas", titulo: "Time Exemplo A (EXA)" });
});

const unidades = [{ id: "roshan", nome: "Roshan", grupo: "chefe" as const, papel: "chefe neutro", lado: "neutro" as const, modelo: "roshan", camps: [],
  habilidades: [{ id: "roshan_slam", nome: "Porrada", nome_en: "Slam", icone: "roshan_slam" }] },
  { id: "kobold", nome: "Kobold", grupo: "selva" as const, papel: "monstro da selva", lado: "neutro" as const, modelo: "k", camps: ["kobold"], habilidades: [] }];

it.each([
  { consulta: "porrada", tipo: "habilidade", link: "/glossario/unidades/roshan#roshan_slam" },
  { consulta: "slam", tipo: "habilidade", link: "/glossario/unidades/roshan#roshan_slam" },
  { consulta: "kobo", tipo: "unidade", link: "/glossario/unidades/kobold" },
])("busca $consulta acha $tipo", ({ consulta, tipo, link }) => {
  const indice = construirIndice({ rotas: [], objetivos: [], termos: [], unidades });
  expect(buscar(indice, consulta)[0]).toMatchObject({ tipo, link });
});

it("habilidade repetida entra uma vez e aponta para a primeira unidade", () => {
  const golpe = { id: "golpe", nome: "Golpe", nome_en: "Bash", icone: null };
  const comum = { grupo: "selva" as const, papel: "", lado: "neutro" as const, camps: [] };
  const docs = docsDeUnidades([{ ...comum, id: "a", nome: "A", modelo: "a", habilidades: [golpe] },
    { ...comum, id: "b", nome: "B", modelo: "b", habilidades: [golpe] }]);
  expect(docs.filter((d) => d.tipo === "habilidade")).toEqual([expect.objectContaining({ id: "golpe", link: "/glossario/unidades/a#golpe" })]);
});
