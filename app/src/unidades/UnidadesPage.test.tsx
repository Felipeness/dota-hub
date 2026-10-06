import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import { UnidadesPage } from "./UnidadesPage";

vi.mock("./FichaUnidade", () => ({ FichaUnidade: ({ unidade }: { unidade: { nome: string } }) => `ficha de ${unidade.nome}` }));

const resumo = (id: string, nome: string, grupo: string, camps: string[] = []) => ({ id, nome, grupo, papel: "", lado: "neutro", modelo: id, camps, habilidades: [] });
const arquivos: Record<string, unknown> = {
  "/data/unidades.json": [resumo("roshan", "Roshan", "chefe"), resumo("kobold", "Kobold", "selva", ["kobold"])],
  "/data/camps.json": [{ id: "kobold", nome: "Kobold", tamanho: "small", terreno: "seco", unidades: [{ id: "kobold", qtd: 3 }], ouro: [40, 50], xp: 89 }],
  "/data/unidades/kobold.json": {
    id: "kobold", id_jogo: "npc_dota_neutral_kobold", nome: "Kobold", grupo: "selva", papel: "monstro da selva", lado: "neutro",
    numeros: { vida: 240, regeneracao: 0.5, mana: 0, regeneracao_mana: 0, armadura: 0, resistencia_magica: 0, dano_min: 14, dano_max: 17,
      intervalo_ataque: 2, alcance_ataque: 100, ataque: "corpo a corpo", velocidade: 270, ouro_min: 3, ouro_max: 5, xp: 14, visao_dia: 800, visao_noite: 800 },
    habilidades: [], crescimento: null, modelo: "n_creep_kobold_c", patch: "7.41", fontes: ["jogo"],
  },
};

beforeEach(() => {
  vi.stubGlobal("fetch", (path: string) => Promise.resolve(
    path in arquivos ? new Response(JSON.stringify(arquivos[path])) : new Response("", { status: 404 })));
});
afterEach(() => vi.unstubAllGlobals());

const abrir = (url: string) => render(
  <MemoryRouter initialEntries={[url]}><Routes><Route path="/glossario/unidades/:id?" element={<UnidadesPage />} /></Routes></MemoryRouter>,
);

it("lista as unidades agrupadas e abre a ficha", async () => {
  abrir("/glossario/unidades/kobold");
  expect(await screen.findByRole("heading", { name: "Roshan e Tormentor" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Selva: pequeno" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Kobold" })).toHaveAttribute("aria-current", "page");
  expect(await screen.findByText("ficha de Kobold")).toBeInTheDocument();
});

it("ficha que não carrega mostra dados indisponíveis e mantém a lista", async () => {
  abrir("/glossario/unidades/roshan");
  expect(await screen.findByRole("alert")).toHaveTextContent("Dados indisponíveis");
  expect(screen.getByRole("link", { name: "Kobold" })).toBeInTheDocument();
});

it("sem camps.json mostra dados indisponíveis em vez de agrupar a selva errado", async () => {
  vi.stubGlobal("fetch", (path: string) => Promise.resolve(path === "/data/camps.json"
    ? new Response("", { status: 404 }) : new Response(JSON.stringify(arquivos[path]))));
  abrir("/glossario/unidades");
  expect(await screen.findByRole("alert")).toHaveTextContent("Dados indisponíveis");
  expect(screen.queryByRole("heading", { name: "Selva: pequeno" })).not.toBeInTheDocument();
});
