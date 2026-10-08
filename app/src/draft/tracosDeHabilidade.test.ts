import { heroi } from "../confronto/amostras/gravadas";
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
