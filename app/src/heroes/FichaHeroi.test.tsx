import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import type { Heroi } from "../data/schemas";
import { FichaHeroi } from "./FichaHeroi";

const fetchOriginal = globalThis.fetch;

afterEach(() => vi.unstubAllGlobals());

const heroi: Heroi = {
  id: "medusa", nome: "Medusa", hero_id: 94, patch: "7.41f", resumo: "Carry de jogo longo.", confianca: "Média.",
  guia: {
    bom_quando: ["Time aguenta até 35 min."], evitar_quando: [], momento_do_draft: "Por último.",
    lane: { objetivo: "LH 22 aos 5.", itens_iniciais: [], dicas: [] }, skill_build: [], itens_core: [], itens_situacionais: [],
    condicao_para_farmar: { nivel: 6, minuto_tipico: 7.9, explicacao: "Nível 6." }, depois_dos_20: [], erros_comuns: [],
  },
  power_spikes: [{ minuto: 2.5, faixa: "2:30", marco: "Null Talisman e Magic Wand", o_que_fazer: "Compre antes do dano." }],
  por_minuto: null, rotas: { radiant: [], dire: [] }, rotas_relacionadas: [],
  pros: { linhas: [{ jogador: "Satanic", jogos: 5, vitorias: 3, lh10: 62 }], leitura: null }, fontes: ["herodata"],
};

it("mostra a lista de 'quando evitar' aberta e com contagem, mesmo quando o texto é longo", () => {
  const comEvitar: Heroi = {
    ...heroi,
    guia: { ...heroi.guia, evitar_quando: ["Contra silêncio longo.", "Sem salvamento contra iniciação em grupo."] },
  };
  render(<MemoryRouter><FichaHeroi heroi={comEvitar} objetivos={[]} solos={[]} /></MemoryRouter>);
  expect(screen.getByText("Quando evitar (2)")).toBeInTheDocument();
  expect(screen.getByText("Contra silêncio longo.")).toBeVisible();
  expect(screen.getByText("Sem salvamento contra iniciação em grupo.")).toBeVisible();
});

it("mostra o item da build com nome curto e ícone, não o texto longo do guia", () => {
  const comItem: Heroi = {
    ...heroi,
    guia: {
      ...heroi.guia,
      itens_core: [{
        item: "manta", nome_curto: "Manta Style",
        nome: "Manta Style (4.650: Yasha + Diadem), alvo 18:35", minuto_alvo: 18.6, base: "Pros 18:36 (58 de 63 jogos).",
      }],
    },
  };
  render(<MemoryRouter><FichaHeroi heroi={comItem} objetivos={[]} solos={[]} /></MemoryRouter>);
  expect(screen.getAllByText("Manta Style").length).toBeGreaterThan(0);
  expect(screen.getAllByText("18:36").length).toBeGreaterThan(0);
  expect(screen.queryByText(/4\.650: Yasha \+ Diadem/)).not.toBeVisible();
});

it("avisa quando não há tabela minuto a minuto para o herói", () => {
  render(<MemoryRouter><FichaHeroi heroi={heroi} objetivos={[]} solos={[]} /></MemoryRouter>);
  fireEvent.click(screen.getByRole("tab", { name: "Power spikes" }));
  expect(screen.getByText("Tabela minuto a minuto ainda não disponível para este herói.")).toBeInTheDocument();
});

it("mostra o guia e troca para power spikes e pros", () => {
  render(<MemoryRouter><FichaHeroi heroi={heroi} objetivos={[]} solos={[]} /></MemoryRouter>);
  expect(screen.getByText("Carry de jogo longo.")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("tab", { name: "Power spikes" }));
  expect(screen.getByText("Null Talisman e Magic Wand")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("tab", { name: "Pros" }));
  expect(screen.getByRole("cell", { name: "Satanic" })).toBeInTheDocument();
});

it("aba Power spikes mostra o próximo spike da tabela por minuto", () => {
  const comPorMinuto: Heroi = {
    ...heroi,
    por_minuto: [{ minuto: 4, nivel: "3", habilidade: "no nível 3: Blade Fury 2/4", item: "itens iniciais", proximo_spike: "Power Treads (em Agilidade) e nível 5 (~6:18 nos replays)", objetivo_farm: "Camps próximos." }],
  };
  render(<MemoryRouter><FichaHeroi heroi={comPorMinuto} objetivos={[]} solos={[]} /></MemoryRouter>);
  fireEvent.click(screen.getByRole("tab", { name: "Power spikes" }));
  expect(screen.getByRole("columnheader", { name: "Próximo marco" })).toBeInTheDocument();
  expect(screen.getByText("Power Treads (em Agilidade) e nível 5 (~6:18 nos replays)")).toBeInTheDocument();
});

it("aba Roshan avisa que ainda não foi escrita", () => {
  render(<MemoryRouter><FichaHeroi heroi={heroi} objetivos={[]} solos={[]} /></MemoryRouter>);
  fireEvent.click(screen.getByRole("tab", { name: "Roshan" }));
  expect(screen.getByText("Ainda não escrito.")).toBeInTheDocument();
});

it("abre com a primeira frase e os números e guarda o resto do resumo recolhido", () => {
  render(<MemoryRouter><FichaHeroi heroi={{ ...heroi, resumo: "Carry de jogo longo. Segunda frase com detalhe." }} objetivos={[]} solos={[]} /></MemoryRouter>);
  expect(screen.getByText("Carry de jogo longo.")).toBeInTheDocument();
  expect(screen.getByText("Segunda frase com detalhe.").closest("details")).not.toHaveAttribute("open");
  expect(screen.getByText("nível 6 · 7:54")).toBeInTheDocument();
  // alt="" tira o retrato da árvore de acessibilidade (é decorativo; o nome está no título), por isso o seletor de classe.
  expect(document.querySelector("img.retrato")).toHaveAttribute("src", "/data/retratos/herois/medusa.webp");
});

it("aba Rotas mostra só os alvos da fase e troca para a rota da situação", async () => {
  const torre = { id: "rad_bot_t1", tipo: "torre", nome: "T1 de baixo", x: 0.8, y: 0.2, lado: "radiant" as const, detalhes: {} };
  const camp = { ...torre, id: "rad_safe_small_1", tipo: "camp", nome: "Pequeno do pull" };
  const fase = { de: 0, ate: 8, janela: "0:00-8:00", objetivo: "Lane de baixo.", caminhos: [],
    passos: [{ n: 1, alvo: "rad_bot_t1", x: 0.8, y: 0.2, rotulo: "T1 de baixo", minuto: "", acao: "Segure a wave.", risco: "objetivo" }] };
  const rotaDaSituacao = {
    id: "ML-R-02", pdf: "06", lado: "radiant", pergunta: "Lane impossível no minuto 4: para onde vou?", titulo: "", secao: "",
    janela: { de: "4:00", ate: "5:00" }, estado: null, origem: "recomendada", replay: null,
    passos: [{ n: 1, alvo: "rad_safe_small_1", x: 0.7, y: 0.2, rotulo: "SMALL R1", minuto: "4:05", acao: "Puxe o camp.", risco: "seguro" }],
    caminhos: [], fuga: null, proxima: [], se: [], interrupcao: [], porque: "",
  };
  const arquivos: Record<string, unknown> = {
    "/data/indice.json": { colunas: ["lane impossível"], radiant: [{ minuto: 4, cenarios: { "lane impossível": { id: "ML-R-02", nota: null } } }], dire: [] },
    "/data/rotas_resumo.json": [], "/data/rotas/ML-R-02.json": rotaDaSituacao,
  };
  vi.stubGlobal("fetch", (path: string) => Promise.resolve(new Response(JSON.stringify(arquivos[path]))));
  render(<MemoryRouter><FichaHeroi heroi={{ ...heroi, rotas: { radiant: [fase], dire: [] } }} objetivos={[torre, camp]} solos={[]} /></MemoryRouter>);
  fireEvent.click(screen.getByRole("tab", { name: "Rotas" }));
  expect(within(screen.getByRole("list", { name: "Passos da rota" })).getByText(/Segure a wave./)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "T1 de baixo" })).toBeInTheDocument();
  expect(screen.queryByRole("button", { name: "Pequeno do pull" })).not.toBeInTheDocument();
  fireEvent.click(await screen.findByRole("button", { name: "lane impossível" }));
  expect(await screen.findByText(/Lane impossível no minuto 4/)).toBeInTheDocument();
  expect(within(screen.getByRole("list", { name: "Passos da rota" })).getByText(/Puxe o camp./)).toBeInTheDocument();
});

it("devolve o fetch original depois de um teste que o trocou", () => {
  expect(globalThis.fetch).toBe(fetchOriginal);
});
