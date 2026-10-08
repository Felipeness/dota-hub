import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import { HeroPage } from "./HeroPage";

afterEach(() => vi.unstubAllGlobals());

const catalogo = [{ id: "zeus", nome: "Zeus", hero_id: 22, nome_interno: "zuus", atributo: "int", posicoes: [2], pagina: "ficha", resumo: "Nuker de Inteligência." }];
const ficha = {
  id: "zeus", nome: "Zeus", nome_interno: "zuus", hero_id: 22, patch: "7.41", resumo: "Nuker de Inteligência.",
  posicoes: [{ posicao: 2, funcao: "mid", quando_pegar: null, itens_iniciais: null, fontes: [], nota_build: "Sem build própria.", build: [], nota_situacionais: null, situacionais: [] }],
  roshan: "Sem solo.", extras: [], fontes: [],
};
const ARQUIVOS: Readonly<Record<string, unknown>> = { "/data/herois_catalogo.json": catalogo, "/data/fichas/zeus.json": ficha };

beforeEach(() => {
  vi.stubGlobal("fetch", (url: string) => Promise.resolve(new Response(JSON.stringify(ARQUIVOS[url] ?? null))));
});

const abrir = (url: string) => render(
  <MemoryRouter initialEntries={[url]}><Routes><Route path="/herois/:id" element={<HeroPage />} /></Routes></MemoryRouter>,
);

it("abre a ficha por posição do herói sem guia", async () => {
  abrir("/herois/zeus");
  expect(await screen.findByRole("heading", { name: "Zeus" })).toBeInTheDocument();
  expect(screen.getByText("Sem build própria.")).toBeInTheDocument();
});

it("redireciona o nome interno do jogo pro id do app", async () => {
  abrir("/herois/zuus");
  expect(await screen.findByRole("heading", { name: "Zeus" })).toBeInTheDocument();
});

it("avisa quando o herói não existe", async () => {
  abrir("/herois/nao_existe");
  expect(await screen.findByRole("alert")).toHaveTextContent("não encontrado");
});
