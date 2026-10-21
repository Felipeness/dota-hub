/// <reference types="node" />
import { readFileSync } from "node:fs";
import { analiseSchema, type ContraInimigo } from "./analise";
import { buildsPossiveis, itensDosPros, ordemDosPros, ordemEntre } from "./buildsDosPros";

const MEDUSA = analiseSchema.parse(JSON.parse(readFileSync(`${__dirname}/../../public/data/confrontos/medusa.json`, "utf-8")));
const contra = (chave: string): ContraInimigo => {
  const dado = MEDUSA.contra_inimigo[chave];
  if (!dado) throw new Error(`sem ${chave}`);
  return dado;
};

it("monta as builds da Medusa contra Doom com a Butterfly como caminho mais comum", () => {
  const builds = buildsPossiveis([contra("doom_bringer")], MEDUSA.nomes_dos_itens);
  expect(builds.map((b) => b.destaque.chave)).toEqual(["butterfly", "mjollnir", "skadi"]);
  expect(builds[0]?.sequencia.map((s) => s.chave).slice(0, 3)).toEqual(["power_treads", "manta", "butterfly"]);
  expect(builds.every((b) => b.sequencia.every((s, i, todos) => i === 0 || (todos[i - 1]?.minuto ?? 0) <= s.minuto))).toBe(true);
});

it("lista os itens sem componente que vira outro item, em ordem de minuto", () => {
  const itens = itensDosPros([contra("doom_bringer")], MEDUSA.nomes_dos_itens);
  expect(itens.some((i) => i.chave === "yasha")).toBe(false);
  expect(itens.find((i) => i.chave === "manta")?.nome).toBe("Manta Style");
});

const C = (ordem: ContraInimigo["ordem"]): ContraInimigo => ({ jogos: 10, vitorias: 5, itens: [], builds: [], ordem });

it.each([
  { nome: "um inimigo", contras: [C([{ a: "butterfly", b: "skadi", a_antes: 7, ambos: 10 }])], antes: "butterfly", antesEm: 7, ambos: 10 },
  {
    nome: "soma dois inimigos com a ordem invertida no arquivo",
    contras: [C([{ a: "butterfly", b: "skadi", a_antes: 6, ambos: 10 }]), C([{ a: "skadi", b: "butterfly", a_antes: 9, ambos: 10 }])],
    antes: "skadi", antesEm: 13, ambos: 20,
  },
])("ordemDosPros: $nome", ({ contras, antes, antesEm, ambos }) => {
  expect(ordemEntre(ordemDosPros(contras), "skadi", "butterfly")).toMatchObject({ antes, antesEm, ambos });
});
