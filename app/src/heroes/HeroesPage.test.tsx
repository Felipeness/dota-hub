import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { HeroesPage } from "./HeroesPage";

afterEach(() => vi.unstubAllGlobals());

it("mostra o retrato do herói ao lado do nome", async () => {
  const herois = [{ id: "anti_mage", nome: "Anti-Mage", hero_id: 1, patch: "7.41f", resumo: "Carry de farm.", tem_por_minuto: false }];
  vi.stubGlobal("fetch", () => Promise.resolve(new Response(JSON.stringify(herois))));
  render(<MemoryRouter><HeroesPage /></MemoryRouter>);
  const link = await screen.findByRole("link", { name: /Anti-Mage/ });
  expect(link.querySelector("img")).toHaveAttribute("src", "/data/retratos/herois/anti_mage.webp");
});
