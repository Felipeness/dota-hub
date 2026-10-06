import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import type { Heroi } from "../data/schemas";
import { FichaHeroi } from "./FichaHeroi";

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

it("mostra o guia e troca para power spikes e pros", () => {
  render(<MemoryRouter><FichaHeroi heroi={heroi} objetivos={[]} solos={[]} /></MemoryRouter>);
  expect(screen.getByText("Carry de jogo longo.")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("tab", { name: "Power spikes" }));
  expect(screen.getByText("Null Talisman e Magic Wand")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("tab", { name: "Pros" }));
  expect(screen.getByRole("cell", { name: "Satanic" })).toBeInTheDocument();
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
