import type { Heroi } from "../data/schemas";
import { destaquesDoHeroi, dividirResumo, urlDoRetrato } from "./resumo";

it.each([
  { texto: "Carry de jogo longo. Pega Treads aos 6,9 min.", abertura: "Carry de jogo longo.", resto: "Pega Treads aos 6,9 min." },
  { texto: "Venceu 4.171 das 4.421 partidas (94%). Mid quase não existe.", abertura: "Venceu 4.171 das 4.421 partidas (94%).", resto: "Mid quase não existe." },
  { texto: "Uma frase só", abertura: "Uma frase só", resto: "" },
])("divide o resumo em abertura e resto: $abertura", ({ texto, abertura, resto }) => {
  expect(dividirResumo(texto)).toEqual({ abertura, resto });
});

const guia: Heroi["guia"] = {
  bom_quando: [], evitar_quando: [], momento_do_draft: "", lane: { objetivo: "", itens_iniciais: [], dicas: [] },
  skill_build: [], itens_situacionais: [], depois_dos_20: [], erros_comuns: [],
  condicao_para_farmar: { nivel: 6, minuto_tipico: 7.9, explicacao: "" },
  itens_core: [
    { item: "power_treads", nome: "Power Treads", minuto_alvo: 6.9, base: "" },
    { item: "sem_minuto", nome: "Sem minuto", minuto_alvo: null, base: "" },
    { item: "battlefury", nome: "Battle Fury", minuto_alvo: 13.8, base: "" },
    { item: "yasha", nome: "Yasha", minuto_alvo: 17.2, base: "" },
    { item: "manta", nome: "Manta Style", minuto_alvo: 20, base: "" },
  ],
};

it("destaca o nível de entrar na selva e os três primeiros itens com minuto", () => {
  expect(destaquesDoHeroi({ guia })).toEqual([
    ["Selva a partir do", "nível 6 · 7:54"], ["Power Treads", "6:54"], ["Battle Fury", "13:48"], ["Yasha", "17:12"],
  ]);
});

it("sem minuto típico, a selva mostra só o nível", () => {
  const semMinuto = { ...guia, condicao_para_farmar: { nivel: 6, minuto_tipico: null, explicacao: "" }, itens_core: [] };
  expect(destaquesDoHeroi({ guia: semMinuto })).toEqual([["Selva a partir do", "nível 6"]]);
});

it("monta a URL do retrato pelo id do herói", () => {
  expect(urlDoRetrato("anti_mage")).toBe("/data/retratos/herois/anti_mage.webp");
});
