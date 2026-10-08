import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import type { Ficha, ItemDaFicha } from "../data/schemas";
import { FichaPorPosicao } from "./FichaPorPosicao";

const item = (extra: Partial<ItemDaFicha>): ItemDaFicha => ({
  item: "blink", nome: "Blink Dagger", minuto: null, quando: null, porque: null, detalhe: null, contra: null, combo: null, fontes: [], ...extra,
});

const ficha: Ficha = {
  id: "axe", nome: "Axe", nome_interno: "axe", hero_id: 2, patch: "7.41", resumo: "Axe é um iniciador de Força. Pune quem bate nele.",
  posicoes: [
    {
      posicao: 3, funcao: "offlane", quando_pegar: "Contra lane de ataque automático.",
      itens_iniciais: { itens: [{ item: "tango", nome: "Tango" }, { item: "gauntlets", nome: "Gauntlets of Strength" }], nota: null },
      fontes: [], nota_build: null,
      build: [item({
        item: "blade_mail", nome: "Blade Mail", minuto: "12:12 (mediana, 113 de 137 jogos)", porque: "Devolve o dano do Call.",
        detalhe: "Reflete 85%.", combo: "Call e Blade Mail.", fontes: ["https://dota2protracker.com/builds/axe-pos3-1"],
      })],
      nota_situacionais: null,
      situacionais: [item({ item: "lotus_orb", nome: "Lotus Orb", contra: "Doom e hex.", detalhe: "Só devolve." })],
    },
    {
      posicao: 1, funcao: "carry", quando_pegar: null, itens_iniciais: null, fontes: [],
      nota_build: "A build da Pos 3 vale igual.", build: [], nota_situacionais: null, situacionais: [],
    },
  ],
  roshan: "Sem solo **registrado**.", extras: [{ titulo: "Combos", texto: "- Call e Blade Mail." }], fontes: ["https://liquipedia.net/dota2/Axe"],
};

const abrir = (url = "/herois/axe") => render(<MemoryRouter initialEntries={[url]}><FichaPorPosicao ficha={ficha} /></MemoryRouter>);

it("abre na posição principal com quando pegar, itens iniciais com ícone e a build", () => {
  abrir();
  expect(screen.getByRole("tab", { name: /Pos 3/ })).toHaveAttribute("aria-selected", "true");
  expect(screen.getByText("Contra lane de ataque automático.")).toBeVisible();
  const iniciais = screen.getByText("Gauntlets of Strength").closest("li");
  expect(iniciais?.querySelector("img")).toHaveAttribute("src", "/data/retratos/itens/gauntlets.webp");
  expect(screen.getByText("Devolve o dano do Call.")).toBeVisible();
  expect(screen.getByText("12:12")).toBeVisible();
  expect(screen.getByText(/mediana, 113 de 137 jogos/)).toBeVisible();
});

it("deixa detalhe, combo e fontes do item atrás de ver detalhe", () => {
  abrir();
  const blade = screen.getByText("Blade Mail").closest("li");
  if (!blade) throw new Error("item Blade Mail não renderizado");
  expect(within(blade).getByText("Reflete 85%.")).not.toBeVisible();
  fireEvent.click(within(blade).getByText("Ver detalhe"));
  expect(within(blade).getByText("Reflete 85%.")).toBeVisible();
  expect(within(blade).getByRole("link", { name: "dota2protracker.com/builds/axe-pos3-1" })).toBeInTheDocument();
});

it("mostra o situacional com o resolve contra à vista", () => {
  abrir();
  const lotus = screen.getByText("Lotus Orb").closest("li");
  if (!lotus) throw new Error("situacional Lotus Orb não renderizado");
  expect(within(lotus).getByText("Doom e hex.")).toBeVisible();
  expect(within(lotus).getAllByText(/Resolve contra/)).toHaveLength(1);
});

it("troca de posição pela aba e abre a posição pedida na URL", () => {
  abrir();
  fireEvent.click(screen.getByRole("tab", { name: /Pos 1/ }));
  expect(screen.getByText("A build da Pos 3 vale igual.")).toBeInTheDocument();
  expect(screen.queryByText("Devolve o dano do Call.")).not.toBeInTheDocument();
});

it("respeita ?pos= da URL", () => {
  abrir("/herois/axe?pos=1");
  expect(screen.getByRole("tab", { name: /Pos 1/ })).toHaveAttribute("aria-selected", "true");
});

it("traz Roshan e as seções extras em markdown e o link pra jogar contra", () => {
  abrir();
  expect(screen.getByText("registrado").tagName).toBe("STRONG");
  expect(screen.getByRole("heading", { name: "Combos" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Como jogar contra Axe" })).toHaveAttribute("href", "/confronto?contra=2");
});
