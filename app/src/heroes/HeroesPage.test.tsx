import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { HeroesPage } from "./HeroesPage";

afterEach(() => vi.unstubAllGlobals());

const stubHerois = (herois: unknown[]) => vi.stubGlobal("fetch", () => Promise.resolve(new Response(JSON.stringify(herois))));

it("mostra o retrato do herói ao lado do nome", async () => {
  const herois = [{ id: "anti_mage", nome: "Anti-Mage", hero_id: 1, patch: "7.41f", resumo: "Carry de farm.", tem_por_minuto: false }];
  stubHerois(herois);
  render(<MemoryRouter><HeroesPage /></MemoryRouter>);
  const link = await screen.findByRole("link", { name: /Anti-Mage/ });
  expect(link.querySelector("img")).toHaveAttribute("src", "/data/retratos/herois/anti_mage.webp");
});

it("corta o resumo no último espaço, nunca no meio da palavra", async () => {
  const resumo = "Alchemist é um carry de farm por ouro, não de luta. A innata Greevil's Greed soma ouro a cada abate (teto de 16 por abate).";
  const herois = [{ id: "alchemist", nome: "Alchemist", hero_id: 73, patch: "7.41f", resumo, tem_por_minuto: false }];
  stubHerois(herois);
  render(<MemoryRouter><HeroesPage /></MemoryRouter>);
  const link = await screen.findByRole("link", { name: /Alchemist/ });
  expect(link.textContent).toMatch(/…$/);
  expect(link.textContent).not.toMatch(/aba…$|abat…$/);
});

it("mostra o selo de minuto a minuto só para quem tem a tabela", async () => {
  const herois = [
    { id: "morphling", nome: "Morphling", hero_id: 10, patch: "7.41f", resumo: "Guia.", tem_por_minuto: true },
    { id: "alchemist", nome: "Alchemist", hero_id: 73, patch: "7.41f", resumo: "Guia.", tem_por_minuto: false },
  ];
  stubHerois(herois);
  render(<MemoryRouter><HeroesPage /></MemoryRouter>);
  const morphling = await screen.findByRole("link", { name: /Morphling/ });
  const alchemist = await screen.findByRole("link", { name: /Alchemist/ });
  expect(morphling.textContent).toContain("minuto a minuto");
  expect(alchemist.textContent).not.toContain("minuto a minuto");
});

it("avisa quando o filtro não encontra nenhum herói", async () => {
  const herois = [{ id: "anti_mage", nome: "Anti-Mage", hero_id: 1, patch: "7.41f", resumo: "Carry.", tem_por_minuto: false }];
  stubHerois(herois);
  render(<MemoryRouter><HeroesPage /></MemoryRouter>);
  await screen.findByRole("link", { name: /Anti-Mage/ });
  fireEvent.change(screen.getByRole("searchbox"), { target: { value: "pudge" } });
  expect(await screen.findByText(/Nenhum herói encontrado/)).toBeInTheDocument();
  expect(screen.queryByRole("link", { name: /Anti-Mage/ })).not.toBeInTheDocument();
});
