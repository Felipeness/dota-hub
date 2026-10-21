import { contextoDaAmostraDaBuild } from "./amostras/amostraDaBuild";
import type { MinhaCompra } from "./suaBuild";
import { avaliarSuaBuild, vereditosDaBuild } from "./suaBuild";

const PORQUE = { butterfly: "Evasão e agilidade contra os físicos do draft.", greater_crit: "Dano crítico que fecha a luta." };

function suaBuild() {
  const build = avaliarSuaBuild(contextoDaAmostraDaBuild(PORQUE));
  if (!build) throw new Error("sem build");
  return build;
}

it("julga cada compra grande da Medusa contra os pros desse draft", () => {
  const marcas = Object.fromEntries(suaBuild().minhas.map((m) => [m.chave, m.marca]));
  expect(marcas).toMatchObject({ power_treads: "no-tempo", manta: "no-tempo", butterfly: "atrasado", sphere: "rara" });
  expect(Object.keys(marcas)).not.toContain("yasha");
  expect(Object.keys(marcas)).not.toContain("force_staff");
});

it("dá no máximo 4 vereditos, o Butterfly atrasado primeiro com a troca de ordem com a Skadi", () => {
  const { vereditos } = suaBuild();
  expect(vereditos.length).toBeLessThanOrEqual(4);
  expect(vereditos[0]?.texto).toBe("Butterfly saiu 36:20, os pros fazem aos 22 (63% das partidas): faltou puxar antes de Eye of Skadi.");
  expect(vereditos[0]?.porque).toBe(PORQUE.butterfly);
  expect(vereditos.map((v) => v.texto)).toContainEqual(expect.stringMatching(/^Linken's Sphere \(41:46\) quase não aparece contra esse draft \(1% dos pros\): os pros respondem com Daedalus/));
  expect(vereditos.filter((v) => v.texto.startsWith("Daedalus nunca saiu"))).toHaveLength(0);
});

it("marca o que os pros fazem e você não fez", () => {
  expect(suaBuild().pros.filter((p) => !p.feito).map((p) => p.chave)).toEqual([]);
  expect(suaBuild().pros.map((p) => p.chave).slice(0, 3)).toEqual(["power_treads", "manta", "butterfly"]);
});

const compra = (chave: string, minuto: number, fracaoPro: number): MinhaCompra =>
  ({ chave, nome: chave, minuto, marca: "no-tempo", minutoPro: minuto, fracaoPro, nota: "" });

it.each([
  { nome: "ordem igual à dos pros não vira veredito", minhas: [compra("a", 10, 0.5), compra("b", 20, 0.5)], esperado: [] },
  {
    nome: "ordem contrária à maioria clara vira veredito leve",
    minhas: [compra("b", 10, 0.5), compra("a", 20, 0.5)],
    esperado: ["b (10:00) saiu antes de a (20:00): os pros fazem a primeiro em 80% das partidas com os dois."],
  },
])("ordem: $nome", ({ minhas, esperado }) => {
  const ordem = new Map([["a|b", { antes: "a", depois: "b", antesEm: 8, ambos: 10 }]]);
  const vereditos = vereditosDaBuild({ minhas, todosOsPros: [], ordem, porque: {}, duracaoMin: 40 });
  expect(vereditos.map((v) => v.texto)).toEqual(esperado);
});
