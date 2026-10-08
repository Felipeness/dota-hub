import type { Heroi, Spike } from "../data/schemas";
import { destaquesDoHeroi, dividirResumo, itensCoreNaLinhaDoTempo, linhaDoTempoDaBuild, urlDoRetrato } from "./resumo";

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
    { item: "power_treads", nome_curto: "Power Treads", nome: "Power Treads (1.400), alvo 6:54", minuto_alvo: 6.9, base: "", porque: null },
    { item: "sem_minuto", nome_curto: "Sem minuto", nome: "Sem minuto", minuto_alvo: null, base: "", porque: null },
    { item: "bfury", nome_curto: "Battle Fury", nome: "Battle Fury, alvo 13:48", minuto_alvo: 13.8, base: "", porque: null },
    { item: "yasha", nome_curto: "Yasha", nome: "Yasha, alvo 17:12", minuto_alvo: 17.2, base: "", porque: null },
    { item: "manta", nome_curto: "Manta Style", nome: "Manta Style, alvo 20:00", minuto_alvo: 20, base: "", porque: null },
  ],
};

it("destaca o nível de entrar na selva e os três primeiros itens com minuto, pelo nome curto", () => {
  expect(destaquesDoHeroi({ guia })).toEqual([
    ["Selva a partir do", "nível 6 · 7:54"], ["Power Treads", "6:54"], ["Battle Fury", "13:48"], ["Yasha", "17:12"],
  ]);
});

it("sem minuto típico, a selva mostra só o nível", () => {
  const semMinuto = { ...guia, condicao_para_farmar: { nivel: 6, minuto_tipico: null, explicacao: "" }, itens_core: [] };
  expect(destaquesDoHeroi({ guia: semMinuto })).toEqual([["Selva a partir do", "nível 6"]]);
});

it("quando nenhum item core tem minuto_alvo, mostra os itens sem horário em vez de sumir", () => {
  const semMinutoAlgum = {
    ...guia,
    itens_core: [
      { item: "a", nome_curto: "Item A", nome: "Item A", minuto_alvo: null, base: "", porque: null },
      { item: "b", nome_curto: "Item B", nome: "Item B", minuto_alvo: null, base: "", porque: null },
    ],
  };
  expect(destaquesDoHeroi({ guia: semMinutoAlgum })).toEqual([
    ["Selva a partir do", "nível 6 · 7:54"], ["Item A", "sem minuto"], ["Item B", "sem minuto"],
  ]);
});

it("ordena os itens core por minuto_alvo, deixando os sem minuto por último", () => {
  const itens = [
    { item: "manta", nome_curto: "Manta Style", nome: "", minuto_alvo: 18.6, base: "", porque: null },
    { item: "diffusal", nome_curto: "Diffusal Blade", nome: "", minuto_alvo: null, base: "", porque: null },
    { item: "power_treads", nome_curto: "Power Treads", nome: "", minuto_alvo: 6, base: "", porque: null },
  ];
  expect(itensCoreNaLinhaDoTempo(itens).map((i) => i.item)).toEqual(["power_treads", "manta", "diffusal"]);
});

it("junta itens e power spikes numa linha do tempo só, por minuto, sem repetir o spike já citado como porquê de um item", () => {
  const itens = [
    { item: "power_treads", nome_curto: "Power Treads", nome: "Power Treads", minuto_alvo: 6, base: "",
      porque: { texto: "Treads cedo.", fonte: "Power spike: Power Treads (6:00)" } },
    { item: "manta", nome_curto: "Manta Style", nome: "Manta Style", minuto_alvo: 20, base: "", porque: null },
  ];
  const spikes: Spike[] = [
    { minuto: 6, faixa: "6:00", marco: "Power Treads", o_que_fazer: "Treads cedo." },
    { minuto: 8, faixa: "8:00", marco: "Nível 6: combo pronto", o_que_fazer: "Combo liberado." },
  ];
  expect(linhaDoTempoDaBuild(itens, spikes).map((e) => (e.tipo === "item" ? e.item.item : e.spike.marco))).toEqual([
    "power_treads", "Nível 6: combo pronto", "manta",
  ]);
});

it("na linha do tempo, item e spike sem minuto vão para o fim", () => {
  const itens = [{ item: "sem_minuto", nome_curto: "Sem minuto", nome: "", minuto_alvo: null, base: "", porque: null }];
  const spikes: Spike[] = [{ minuto: null, faixa: "fim do jogo", marco: "Late game", o_que_fazer: "x" }];
  const linha = linhaDoTempoDaBuild(itens, spikes);
  expect(linha.map((e) => e.minuto)).toEqual([null, null]);
});

it("monta a URL do retrato pelo id do herói", () => {
  expect(urlDoRetrato("anti_mage")).toBe("/data/retratos/herois/anti_mage.webp");
});
