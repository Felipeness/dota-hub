import { ITENS_CURADOS, explicarItem } from "./porQueItem";
import { TAGS, TAGS_DOS_HEROIS } from "./tagsDosHerois";

const heroi = (chave: string, nome = chave) => ({ chave, nome });

it.each([
  { item: "black_king_bar", inimigos: [heroi("lion", "Lion"), heroi("shadow_shaman", "Shadow Shaman")], cita: ["Lion", "Shadow Shaman"] },
  { item: "monkey_king_bar", inimigos: [heroi("phantom_assassin", "Phantom Assassin")], cita: ["Phantom Assassin"] },
  { item: "silver_edge", inimigos: [heroi("bristleback", "Bristleback"), heroi("spectre", "Spectre")], cita: ["Bristleback", "Spectre"] },
  { item: "spirit_vessel", inimigos: [heroi("necrolyte", "Necrophos")], cita: ["Necrophos"] },
  { item: "shivas_guard", inimigos: [heroi("huskar", "Huskar")], cita: ["Huskar"] },
  { item: "dust", inimigos: [heroi("riki", "Riki")], cita: ["Riki"] },
  { item: "gem", inimigos: [heroi("clinkz", "Clinkz")], cita: ["Clinkz"] },
])("$item cita os heróis inimigos que justificam a compra", ({ item, inimigos, cita }) => {
  const explicacao = explicarItem(item, inimigos);
  expect(explicacao?.motivo).toMatch(/^Provável motivo: o time inimigo tem /);
  cita.forEach((nome) => expect(explicacao?.motivo).toContain(nome));
});

it("BKB pede pelo menos 2 heróis de controle: um só não vira motivo", () => {
  expect(explicarItem("black_king_bar", [heroi("lion", "Lion"), heroi("sniper")])?.motivo).toBeNull();
});

it("BKB não conta controle que atravessa imunidade (Doom, Reaper's Scythe); Linken continua contando", () => {
  const inimigos = [heroi("necrolyte", "Necrophos"), heroi("doom_bringer", "Doom"), heroi("ancient_apparition", "Ancient Apparition")];
  expect(explicarItem("black_king_bar", inimigos)?.clausulas).toEqual([{ tag: "magico", herois: ["Necrophos", "Ancient Apparition"] }]);
  expect(explicarItem("sphere", inimigos)?.clausulas).toEqual([{ tag: "controle", herois: ["Necrophos", "Doom"] }]);
});

it("devolve só as cláusulas que bateram o mínimo, com os heróis de cada uma", () => {
  const inimigos = [heroi("lion", "Lion"), heroi("shadow_shaman", "Shadow Shaman"), heroi("sniper", "Sniper")];
  const explicacao = explicarItem("black_king_bar", inimigos);
  expect(explicacao?.clausulas).toEqual([{ tag: "controle", herois: ["Lion", "Shadow Shaman"] }]);
});

it("item sem regra que case mostra só a função", () => {
  expect(explicarItem("monkey_king_bar", [heroi("axe"), heroi("lion")]))
    .toEqual({ funcao: ITENS_CURADOS.monkey_king_bar?.funcao, motivo: null, clausulas: [], semDadoDe: [] });
  expect(explicarItem("blink", [heroi("riki")])).toMatchObject({ motivo: null, semDadoDe: [] });
});

it("herói sem tag conferida entra em semDadoDe em vez de silenciar o motivo", () => {
  const explicacao = explicarItem("monkey_king_bar", [heroi("heroi_nao_conferido", "Herói Novo")]);
  expect(explicacao?.motivo).toBeNull();
  expect(explicacao?.semDadoDe).toEqual(["Herói Novo"]);
});

it("herói conferido sem a tag não entra em semDadoDe", () => {
  const explicacao = explicarItem("monkey_king_bar", [heroi("axe")]);
  expect(explicacao?.semDadoDe).toEqual([]);
});

it("item fora do dicionário não tem explicação", () => {
  expect(explicarItem("item_inventado", [])).toBeNull();
  expect(explicarItem("constructor", [])).toBeNull();
});

it("o dicionário cobre ao menos 60 itens", () => {
  expect(Object.keys(ITENS_CURADOS).length).toBeGreaterThanOrEqual(60);
});

it("toda tag usada pelos heróis existe", () => {
  const usadas = new Set(Object.values(TAGS_DOS_HEROIS).flat());
  expect([...usadas].every((t) => (TAGS as readonly string[]).includes(t))).toBe(true);
});
