import type { Numeros, TipoCamp, UnidadeResumo } from "../data/schemas";
import { agruparUnidades, gradeDeNumeros, textoDoCrescimento, tiposDoCamp } from "./ficha";

const ROSHAN: Numeros = {
  vida: 6000, regeneracao: 20, mana: 0, regeneracao_mana: 0, armadura: 30, resistencia_magica: 55, dano_min: 75, dano_max: 75,
  intervalo_ataque: 2, alcance_ataque: 150, ataque: "corpo a corpo", velocidade: 270, ouro_min: 200, ouro_max: 290, xp: 400,
  visao_dia: 1400, visao_noite: 1400,
};

it("monta a grade de números como o glossário do jogo", () => {
  expect(gradeDeNumeros(ROSHAN)).toEqual([
    ["Vida", "6.000"], ["Regeneração", "20"], ["Armadura", "30"], ["Resistência mágica", "55%"], ["Dano", "75"],
    ["Intervalo de ataque", "2,0"], ["Alcance de ataque", "150"], ["Ataque", "corpo a corpo"], ["Velocidade", "270"],
    ["Ouro", "200 a 290"], ["XP", "400"], ["Visão", "1.400"],
  ]);
});

it("esconde vida e ataque que o jogo não define (Tormentor)", () => {
  const tormentor: Numeros = { ...ROSHAN, vida: null, dano_min: null, dano_max: null, intervalo_ataque: null, alcance_ataque: null, ataque: "sem ataque", mana: 300, visao_dia: 1200, visao_noite: 800 };
  const rotulos = gradeDeNumeros(tormentor).map(([r]) => r);
  expect(rotulos).not.toContain("Vida");
  expect(rotulos).not.toContain("Dano");
  expect(gradeDeNumeros(tormentor)).toContainEqual(["Mana", "300"]);
  expect(gradeDeNumeros(tormentor)).toContainEqual(["Visão", "1.200 de dia, 800 de noite"]);
});

it("descreve o crescimento da selva", () => {
  expect(textoDoCrescimento({ tipo: "por_nivel", a_cada_s: 450, vida: 30, dano: 3, armadura: 0.5, vel_ataque: 5, ouro: 1, xp: 5, nivel_max: 30 }))
    .toBe("A cada 7:30 de jogo: +30 de vida, +3 de dano, +0,5 de armadura, +5 de velocidade de ataque, +1 de ouro e +5 de XP, até o nível 30.");
});

const tipo = (id: string, tamanho: TipoCamp["tamanho"], terreno: TipoCamp["terreno"], unidade: string): TipoCamp =>
  ({ id, nome: id, tamanho, terreno, unidades: [{ id: unidade, qtd: 1 }], ouro: [10, 20], xp: 50 });
const TIPOS = [tipo("kobold", "small", "seco", "kobold"), tipo("pollywog", "small", "inundado", "tadpole"),
  tipo("centaur", "medium", "seco", "centaur_khan"), tipo("froglet", "medium", "inundado", "froglet")];
const camp = (tamanho: string, anfibio: boolean) => ({ id: "c", tipo: "camp", nome: "c", x: 0, y: 0, lado: "radiant" as const, detalhes: { tipo: tamanho, anfibio } });

it.each([
  { tamanho: "small", anfibio: false, esperado: ["kobold"] },
  { tamanho: "medium", anfibio: false, esperado: ["centaur"] },
  { tamanho: "small", anfibio: true, esperado: ["pollywog"] },
  { tamanho: "medium", anfibio: true, esperado: ["froglet"] },
])("camp $tamanho anfíbio=$anfibio pode nascer como $esperado", ({ tamanho, anfibio, esperado }) => {
  expect(tiposDoCamp(camp(tamanho, anfibio), TIPOS).map((t) => t.id)).toEqual(esperado);
});

const resumo = (id: string, grupo: UnidadeResumo["grupo"], camps: string[]): UnidadeResumo =>
  ({ id, nome: id, grupo, papel: "", lado: "neutro", modelo: id, camps, habilidades: [] });

it("agrupa as unidades como a tela Unidades mostra", () => {
  const grupos = agruparUnidades([resumo("kobold", "selva", ["kobold"]), resumo("roshan", "chefe", []),
    resumo("tadpole", "selva", ["pollywog"]), resumo("creep_goodguys_melee", "lane", [])], TIPOS);
  expect(grupos.map((g) => [g.titulo, g.unidades.map((u) => u.id)])).toEqual([
    ["Roshan e Tormentor", ["roshan"]], ["Creeps de lane", ["creep_goodguys_melee"]],
    ["Selva: pequeno", ["kobold"]], ["Selva: anfíbio", ["tadpole"]],
  ]);
});

it("unidade de selva sem camp conhecido vai para o grupo sem camp", () => {
  const grupos = agruparUnidades([resumo("kobold", "selva", ["kobold"]), resumo("perdido", "selva", ["camp_inexistente"])], TIPOS);
  expect(grupos.map((g) => [g.titulo, g.unidades.map((u) => u.id)])).toEqual([
    ["Selva: pequeno", ["kobold"]], ["Selva: sem camp", ["perdido"]],
  ]);
});
