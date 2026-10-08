import type { DetalheDaPartida } from "./detalhe";
import { itemDoGuia, ouroCurto, resumoDaPartida } from "./resumo";

const minutos = (porMinuto: number, n = 31) => Array.from({ length: n }, (_, i) => i * porMinuto);
const base: DetalheDaPartida = {
  partida: "1", conta: 7, slot: 0, duracaoS: 46 * 60, venceu: true, analisada: true,
  heroi: { id: 93, chave: "slark", nome: "Slark", retrato: "slark" }, lado: "radiant", lane: "safe",
  abates: 13, mortes: 3, assistencias: 12, curvas: { ouro: minutos(500), lh: minutos(6), patrimonio: minutos(700) },
  adversario: {
    heroi: { id: 36, chave: "necrolyte", nome: "Necrophos", retrato: "necrophos" },
    curvas: { ouro: minutos(380), lh: minutos(3), patrimonio: minutos(560) },
  },
  inimigos: [], eventos: [
    { t: 1_250, tipo: "morte", texto: "Morte", ponto: null }, { t: 1_400, tipo: "morte", texto: "Morte", ponto: null },
    { t: 1_700, tipo: "morte", texto: "Morte", ponto: null },
  ],
  compras: [{ t: 1_060, chave: "diffusal_blade", nome: "Diffusal Blade", custo: 2_500, grande: true }],
  neutros: [], habilidades: [], manchasDaLane: [], laneDoMapa: "safe",
  referencia: { ouroPorMin: 526, lhPorMin: 5.7 }, frescor: { buscadoEm: 1, vencido: false },
  vantagemDoTime: { ouro: [], xp: [] }, eficienciaDeLanePct: null, draft: [],
};

it("resume resultado, lane, last hits, item principal e a janela com mais mortes", () => {
  expect(resumoDaPartida(base, null)).toEqual([
    "Vitória em 46 min de Slark, 13/3/12, safe lane.",
    "Ganhou a lane contra Necrophos (+1,2k de ouro aos 10 min).",
    "60 last hits aos 10 min; a mediana do herói no OpenDota é 57.",
    "Primeiro item grande: Diffusal Blade aos 17:40.",
    "Morreu 3 vezes entre 20 e 30 min.",
  ]);
});

it("com o guia pro, compara o item com o alvo e os last hits com os pros", () => {
  const pro = { itensCore: [{ nome: "Diffusal Blade (2500), alvo 13:00", minuto_alvo: 13, base: "Mediana 13 min." }], lh10: 61.5 };
  const frases = resumoDaPartida(base, pro);
  expect(frases).toContain("60 last hits aos 10 min; os pros fazem 61,5 com o herói.");
  expect(frases).toContain("Diffusal Blade aos 17:40, 5 min mais tarde que o alvo do guia pro (13:00).");
});

it("casa compra do item final com guia registrado como upgrade (Basher -> Abyssal)", () => {
  const pro = { itensCore: [{ nome: "Skull Basher -> Abyssal Blade", minuto_alvo: 37, base: "Mediana 37 min." }], lh10: null };
  const compra = { t: 2_220, chave: "abyssal_blade", nome: "Abyssal Blade", custo: 6_250, grande: true };
  expect(itemDoGuia(compra, pro)?.minuto_alvo).toBe(37);
});

it("sem guia pro, item do guia fica null", () => {
  const compra = { t: 2_220, chave: "abyssal_blade", nome: "Abyssal Blade", custo: 6_250, grande: true };
  expect(itemDoGuia(compra, null)).toBeNull();
});

it.each([
  { adversario: 480, frase: "Lane equilibrada contra Necrophos (+200 de ouro aos 10 min)." },
  { adversario: 600, frase: "Perdeu a lane contra Necrophos (−1k de ouro aos 10 min)." },
])("lane com o adversário a $adversario/min: $frase", ({ adversario, frase }) => {
  const d = { ...base, adversario: base.adversario && { ...base.adversario, curvas: { ouro: minutos(adversario), lh: [], patrimonio: [] } } };
  expect(resumoDaPartida(d, null)[1]).toBe(frase);
});

it("sem curvas, sem compras e sem mortes, fica só o que existe", () => {
  const d = { ...base, curvas: { ouro: [], lh: [], patrimonio: [] }, adversario: null, compras: [], mortes: 0, eventos: [] };
  expect(resumoDaPartida(d, null)).toEqual(["Vitória em 46 min de Slark, 13/0/12, safe lane.", "Não morreu nenhuma vez."]);
});

it("mortes espalhadas (1 por janela) não viram frase", () => {
  const eventos = [100, 700, 1_300].map((t) => ({ t, tipo: "morte" as const, texto: "Morte", ponto: null }));
  expect(resumoDaPartida({ ...base, eventos }, null).some((f) => f.startsWith("Morreu"))).toBe(false);
});

it.each([{ v: 1_234, t: "+1,2k" }, { v: -866, t: "−866" }, { v: 0, t: "+0" }])("ouro $v vira $t", ({ v, t }) => {
  expect(ouroCurto(v)).toBe(t);
});
