import type { Heroi } from "../data/schemas";
import type { DadosDaPartidaReal } from "./fonte";
import { checklistAntes, checklistDepois, minutoAlvoDoNivel7 } from "./dados";

const heroi: Heroi = {
  id: "anti_mage", nome: "Anti-Mage", hero_id: 1, patch: "7.41f", resumo: "", confianca: "alta",
  guia: {
    bom_quando: ["Inimigo lento"], evitar_quando: ["Inimigo com controle"], momento_do_draft: "",
    lane: { objetivo: "50 last hits aos 10 min.", itens_iniciais: ["Tango, Quelling Blade"], dicas: [] },
    skill_build: [], itens_situacionais: [], depois_dos_20: [], erros_comuns: [],
    condicao_para_farmar: { nivel: 6, minuto_tipico: 8, explicacao: "" },
    itens_core: [
      { item: "power_treads", nome_curto: "Power Treads", nome: "Power Treads", minuto_alvo: 7, base: "base treads", spike: null, porque: null },
      { item: "bfury", nome_curto: "Battle Fury", nome: "Battle Fury", minuto_alvo: 14, base: "base bfury", spike: null, porque: null },
    ],
  },
  power_spikes: [
    { minuto: 8, faixa: "8:00", marco: "Nível 6: Mana Void", o_que_fazer: "" },
    { minuto: 9.4, faixa: "9:24", marco: "Nível 7: Mana Break 3/4", o_que_fazer: "" },
  ],
  por_minuto: null,
  rotas: { radiant: [], dire: [] },
  rotas_relacionadas: [],
  pros: { linhas: [{ jogador: "Yatoro", jogos: 10, vitorias: 5, lh10: 54 }], leitura: null },
  fontes: [],
};

it("monta o checklist antes com draft, itens iniciais, objetivo e itens core", () => {
  const itens = checklistAntes(heroi);
  expect(itens.map((i) => i.id)).toEqual([
    "bom-quando", "evitar-quando", "itens-iniciais", "objetivo-lane", "condicao-farmar", "item-power_treads", "item-bfury",
  ]);
  expect(itens.find((i) => i.id === "item-power_treads")?.titulo).toBe("Comprar: Power Treads até 7 min");
});

it("acha o alvo de nível 7 no power spike que cita o nível", () => {
  expect(minutoAlvoDoNivel7(heroi)).toBe(9.4);
});

it("retorna null quando nenhum power spike cita nível 7", () => {
  const semNivel7: Heroi = { ...heroi, power_spikes: [heroi.power_spikes[0]!] };
  expect(minutoAlvoDoNivel7(semNivel7)).toBeNull();
});

const dadosBons: DadosDaPartidaReal = {
  lh10: 60, mortesAntesDos10: 0, nivel7Minuto: 9,
  itens: new Map([["power_treads", 6.5], ["bfury", 13.9]]),
};

it("aprova o checklist depois quando a partida real bate ou supera os alvos do guia", () => {
  const itens = checklistDepois(heroi, dadosBons);
  expect(itens.find((i) => i.id === "lh10")?.ok).toBe(true);
  expect(itens.find((i) => i.id === "nivel7")?.ok).toBe(true);
  expect(itens.find((i) => i.id === "mortes-antes-10")?.ok).toBe(true);
  expect(itens.find((i) => i.id === "item-power_treads")?.ok).toBe(true);
  expect(itens.find((i) => i.id === "item-bfury")?.ok).toBe(true);
});

it("reprova itens comprados fora do prazo e morte antes dos 10 min", () => {
  const dadosFracos: DadosDaPartidaReal = {
    lh10: 30, mortesAntesDos10: 2, nivel7Minuto: 12,
    itens: new Map([["power_treads", 11]]),
  };
  const itens = checklistDepois(heroi, dadosFracos);
  expect(itens.find((i) => i.id === "lh10")?.ok).toBe(false);
  expect(itens.find((i) => i.id === "nivel7")?.ok).toBe(false);
  expect(itens.find((i) => i.id === "mortes-antes-10")?.ok).toBe(false);
  expect(itens.find((i) => i.id === "item-power_treads")?.ok).toBe(false);
  expect(itens.find((i) => i.id === "item-bfury")?.ok).toBeNull();
  expect(itens.find((i) => i.id === "item-bfury")?.porque).toContain("não comprado");
});

it("usa tolerância de 2 min pra considerar item comprado no prazo", () => {
  const noLimite: DadosDaPartidaReal = { lh10: null, mortesAntesDos10: 0, nivel7Minuto: null, itens: new Map([["power_treads", 9]]) };
  expect(checklistDepois(heroi, noLimite).find((i) => i.id === "item-power_treads")?.ok).toBe(true);
});
