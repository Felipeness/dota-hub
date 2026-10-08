import type { HeroiDoCatalogo } from "../data/schemas";
import { acharNoCatalogo, agruparPorPosicao, filtrarCatalogo, minutoDoItem, posicaoDoParametro } from "./catalogo";

const heroi = (id: string, nome: string, extra: Partial<HeroiDoCatalogo> = {}): HeroiDoCatalogo => ({
  id, nome, hero_id: 1, nome_interno: id, atributo: "str", posicoes: [3], pagina: "ficha", ...extra,
});

const catalogo = [
  heroi("zeus", "Zeus", { nome_interno: "zuus", atributo: "int", posicoes: [2] }),
  heroi("axe", "Axe"),
  heroi("luna", "Luna", { atributo: "agi", posicoes: [1], pagina: "guia" }),
  heroi("earthshaker", "Earthshaker", { posicoes: [2, 3, 4, 5] }),
];

const ids = (herois: readonly HeroiDoCatalogo[]) => herois.map((h) => h.id);

it.each([
  { filtro: { texto: "", posicao: null, atributo: null }, esperado: ["zeus", "axe", "luna", "earthshaker"] },
  { filtro: { texto: "zuus", posicao: null, atributo: null }, esperado: ["zeus"] },
  { filtro: { texto: "", posicao: 3, atributo: null }, esperado: ["axe", "earthshaker"] },
  { filtro: { texto: "", posicao: null, atributo: "agi" }, esperado: ["luna"] },
  { filtro: { texto: "earth", posicao: 5, atributo: "str" }, esperado: ["earthshaker"] },
] as const)("filtra por texto, posição e atributo juntos ($esperado)", ({ filtro, esperado }) => {
  expect(ids(filtrarCatalogo(catalogo, filtro))).toEqual(esperado);
});

it("agrupa por posição em ordem, repete quem joga em várias e ordena pelo nome", () => {
  const grupos = agruparPorPosicao(catalogo, null);
  expect(grupos.map((g) => [g.posicao, ids(g.herois)])).toEqual([
    [1, ["luna"]], [2, ["earthshaker", "zeus"]], [3, ["axe", "earthshaker"]], [4, ["earthshaker"]], [5, ["earthshaker"]],
  ]);
});

it("com posição escolhida mostra só o grupo dela e some com grupo vazio", () => {
  expect(agruparPorPosicao(catalogo, 4).map((g) => g.posicao)).toEqual([4]);
  expect(agruparPorPosicao([heroi("axe", "Axe")], 1)).toEqual([]);
});

it.each([
  { id: "zeus", esperado: "zeus" },
  { id: "zuus", esperado: "zeus" },
  { id: "nao_existe", esperado: null },
])("acha o herói pelo id do app ou pelo nome interno ($id)", ({ id, esperado }) => {
  expect(acharNoCatalogo(catalogo, id)?.id ?? null).toBe(esperado);
});

it.each([
  { valor: "3", esperado: 3 },
  { valor: "9", esperado: null },
  { valor: "abc", esperado: null },
  { valor: null, esperado: null },
])("lê a posição do parâmetro da URL ($valor)", ({ valor, esperado }) => {
  expect(posicaoDoParametro(valor)).toBe(esperado);
});

it.each([
  { texto: "12:12 (mediana, 113 de 137 jogos)", tempo: "12:12", base: "mediana, 113 de 137 jogos" },
  { texto: "5,8", tempo: "5:48", base: null },
  { texto: "13", tempo: "13:00", base: null },
  { texto: "45,6", tempo: "45:36", base: null },
  { texto: "por volta de 25 a 30 min (OpenDota itemTimings)", tempo: "por volta de 25 a 30 min", base: "OpenDota itemTimings" },
  { texto: "4-6", tempo: "4-6", base: null },
])("separa o horário da base do minuto ($texto)", ({ texto, tempo, base }) => {
  expect(minutoDoItem(texto)).toEqual({ tempo, base });
});
