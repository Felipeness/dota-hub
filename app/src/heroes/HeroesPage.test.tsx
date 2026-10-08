import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { HeroesPage } from "./HeroesPage";

afterEach(() => vi.unstubAllGlobals());

const catalogo = [
  { id: "anti_mage", nome: "Anti-Mage", hero_id: 1, nome_interno: "antimage", atributo: "agi", posicoes: [1], pagina: "guia" },
  { id: "alchemist", nome: "Alchemist", hero_id: 73, nome_interno: "alchemist", atributo: "str", posicoes: [1], pagina: "guia" },
  { id: "zeus", nome: "Zeus", hero_id: 22, nome_interno: "zuus", atributo: "int", posicoes: [2], pagina: "ficha" },
  { id: "earthshaker", nome: "Earthshaker", hero_id: 7, nome_interno: "earthshaker", atributo: "str", posicoes: [2, 3, 4, 5], pagina: "ficha" },
];
const resumoLongo = "Alchemist é um carry de farm por ouro, não de luta. A innata Greevil's Greed soma ouro a cada abate (teto de 16 por abate).";
const guias = [
  { id: "anti_mage", nome: "Anti-Mage", hero_id: 1, patch: "7.41f", resumo: "Carry de farm.", tem_por_minuto: true },
  { id: "alchemist", nome: "Alchemist", hero_id: 73, patch: "7.41f", resumo: resumoLongo, tem_por_minuto: false },
];
const ARQUIVOS: Readonly<Record<string, unknown>> = { "/data/herois_catalogo.json": catalogo, "/data/herois.json": guias };

beforeEach(() => {
  vi.stubGlobal("fetch", (url: string) => Promise.resolve(new Response(JSON.stringify(ARQUIVOS[url] ?? null))));
});

const abrir = (url = "/herois") => render(<MemoryRouter initialEntries={[url]}><HeroesPage /></MemoryRouter>);
const grupo = (nome: RegExp) => screen.getByRole("region", { name: nome });

it("agrupa os heróis por posição e repete quem joga em várias", async () => {
  abrir();
  await screen.findByRole("heading", { name: /Pos 1 · Carry/ });
  expect(within(grupo(/Pos 2 · Mid/)).getAllByRole("link").map((l) => l.textContent)).toEqual([
    expect.stringContaining("Earthshaker"), expect.stringContaining("Zeus"),
  ]);
  expect(within(grupo(/Pos 5 · Suporte duro/)).getByRole("link", { name: /Earthshaker/ })).toBeInTheDocument();
});

it("diferencia guia completo de ficha e leva a ficha direto à aba da posição", async () => {
  abrir();
  const antiMage = await screen.findByRole("link", { name: /Anti-Mage/ });
  expect(antiMage).toHaveTextContent("guia completo");
  expect(antiMage).toHaveAttribute("href", "/herois/anti_mage");
  expect(antiMage.querySelector("img")).toHaveAttribute("src", "/data/retratos/herois/anti_mage.webp");
  const zeus = within(grupo(/Pos 2 · Mid/)).getByRole("link", { name: /Zeus/ });
  expect(zeus).toHaveTextContent("ficha por posição");
  expect(zeus).toHaveAttribute("href", "/herois/zeus?pos=2");
});

it("mostra o resumo e o selo de minuto a minuto só nos guias completos", async () => {
  abrir();
  const antiMage = await screen.findByRole("link", { name: /Anti-Mage/ });
  const alchemist = screen.getByRole("link", { name: /Alchemist/ });
  expect(antiMage).toHaveTextContent("minuto a minuto");
  expect(alchemist).not.toHaveTextContent("minuto a minuto");
  expect(alchemist.textContent).toMatch(/…$/);
  expect(alchemist.textContent).not.toMatch(/aba…$|abat…$/);
});

it("filtra por posição e atributo pela URL e pelos botões", async () => {
  abrir("/herois?pos=3");
  await screen.findByRole("heading", { name: /Pos 3 · Offlane/ });
  expect(screen.queryByRole("heading", { name: /Pos 1/ })).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Inteligência" }));
  expect(await screen.findByText(/Nenhum herói encontrado/)).toBeInTheDocument();
  fireEvent.click(within(screen.getByRole("group", { name: "Posição" })).getByRole("button", { name: "Todas" }));
  expect(await screen.findByRole("link", { name: /Zeus/ })).toBeInTheDocument();
});

it("acha o herói pelo nome interno do jogo no filtro de texto", async () => {
  abrir();
  await screen.findByRole("link", { name: /Anti-Mage/ });
  fireEvent.change(screen.getByRole("searchbox"), { target: { value: "zuus" } });
  expect(screen.getByRole("link", { name: /Zeus/ })).toBeInTheDocument();
  expect(screen.queryByRole("link", { name: /Anti-Mage/ })).not.toBeInTheDocument();
});
