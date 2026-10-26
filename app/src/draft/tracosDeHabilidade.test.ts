import { readFileSync } from "node:fs";
import { heroi } from "../confronto/amostras/gravadas";
import { aghanimFonte, habilidadesDosHeroisFonte, habilidadesFonte, heroisFonte } from "../confronto/fonte";
import { comAghanim, montarHerois, type Heroi } from "../confronto/modelo";
import { SEM_TRACOS, type TracosDeHabilidade } from "./eixos";
import { tracosDoHeroi } from "./tracosDeHabilidade";

it("acha controle de alvo único no Voodoo (Hex) do Lion, behavior Unit Target", () => {
  expect(tracosDoHeroi(heroi("lion")).controleAlvoUnico).toBe(true);
});

it("acha fuga no Slark, igual ao Confronto 1x1 (mecanicas.test.ts)", () => {
  expect(tracosDoHeroi(heroi("slark")).fuga).toBe(true);
});

it("acha cura no Life Stealer", () => {
  expect(tracosDoHeroi(heroi("life_stealer")).cura).toBe(true);
});

it("acha controle em área na Chronosphere do Faceless Void (AOE, stun)", () => {
  expect(tracosDoHeroi(heroi("faceless_void")).controleEmArea).toBe(true);
});

it("Phantom Lancer da amostra não tem controle nem cura (mecanicas.test.ts: só ilusões e evasão)", () => {
  const tracos = tracosDoHeroi(heroi("phantom_lancer"));
  expect(tracos.controleEmArea).toBe(false);
  expect(tracos.controleAlvoUnico).toBe(false);
  expect(tracos.cura).toBe(false);
});

// Os 127 heróis das constantes espelhadas em public/ (scripts/espelhar-constantes.mjs), não a amostra podada.
const CONSTANTES = "public/data/opendota/constants";
const ler = (nome: string): unknown => JSON.parse(readFileSync(`${CONSTANTES}/${nome}.json`, "utf-8"));
const TODOS = comAghanim(
  montarHerois(heroisFonte.parse(ler("heroes")), habilidadesDosHeroisFonte.parse(ler("hero_abilities")), habilidadesFonte.parse(ler("abilities"))),
  aghanimFonte.parse(ler("aghs_desc")),
);
const doPatch = (chave: string): Heroi => {
  const achado = TODOS.find((h) => h.chave === chave);
  if (!achado) throw new Error(`herói ${chave} fora das constantes`);
  return achado;
};
const com = (...tracos: ReadonlyArray<keyof TracosDeHabilidade>): TracosDeHabilidade =>
  ({ ...SEM_TRACOS, ...Object.fromEntries(tracos.map((t) => [t, true])) });

it.each<[string, TracosDeHabilidade]>([
  ["lycan", com("cura", "fuga")],
  ["beastmaster", com("controleEmArea", "controleAlvoUnico", "danoEmArea", "cura")],
  ["death_prophet", com("danoEmArea", "cura")],
  ["shadow_shaman", com("controleAlvoUnico", "danoEmArea")],
  ["lion", com("controleEmArea", "controleAlvoUnico", "danoEmArea")],
  ["axe", com("controleEmArea", "danoEmArea")],
  ["puck", com("controleEmArea", "danoEmArea", "fuga")],
  ["storm_spirit", com("controleAlvoUnico", "danoEmArea", "fuga")],
  ["antimage", com("danoEmArea", "fuga")],
  ["queenofpain", com("danoEmArea", "cura", "fuga")],
  ["weaver", com("danoEmArea", "cura", "fuga")],
  ["riki", com("danoEmArea", "fuga")],
  ["necrolyte", com("controleAlvoUnico", "danoEmArea", "cura")],
  ["omniknight", com("danoEmArea", "cura")],
  ["dazzle", com("danoEmArea", "cura")],
  ["undying", com("danoEmArea", "cura")],
  ["disruptor", com("controleEmArea", "danoEmArea")],
  ["techies", com("controleEmArea", "danoEmArea", "fuga")],
  ["templar_assassin", com("danoEmArea", "fuga")],
  ["pangolier", com("controleEmArea", "danoEmArea", "fuga")],
  ["snapfire", com("controleEmArea", "danoEmArea", "fuga")],
  ["abyssal_underlord", com("controleEmArea", "danoEmArea", "fuga")],
  ["nyx_assassin", com("controleEmArea", "danoEmArea", "fuga")],
  ["crystal_maiden", com("controleAlvoUnico", "danoEmArea")],
  ["terrorblade", com("controleEmArea", "danoEmArea")],
])("%s tem os traços de habilidade do patch", (chave, esperado) => {
  expect(tracosDoHeroi(doPatch(chave))).toEqual(esperado);
});

it("cobre o patch inteiro sem sumir com nenhum traço (contagem de 127 heróis)", () => {
  const quantos = (traco: keyof TracosDeHabilidade) => TODOS.filter((h) => tracosDoHeroi(h)[traco]).length;
  expect(TODOS).toHaveLength(127);
  expect(quantos("fuga")).toBeGreaterThanOrEqual(35);
  expect(quantos("controleEmArea")).toBeGreaterThanOrEqual(45);
  expect(quantos("controleAlvoUnico")).toBeGreaterThanOrEqual(45);
  expect(quantos("danoEmArea")).toBeGreaterThanOrEqual(70);
  expect(quantos("cura")).toBeGreaterThanOrEqual(30);
});
