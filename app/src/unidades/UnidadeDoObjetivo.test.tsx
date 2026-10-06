import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { UnidadeDoObjetivo } from "./UnidadeDoObjetivo";

vi.mock("./FichaUnidade", () => ({ FichaUnidade: ({ unidade }: { unidade: { nome: string } }) => `ficha de ${unidade.nome}` }));

const objetivo = (tipo: string, detalhes: Record<string, unknown> = {}) => ({ id: `${tipo}_1`, tipo, nome: tipo, x: 0.5, y: 0.5, lado: "neutro" as const, detalhes });
const arquivos: Record<string, unknown> = {
  "/data/unidades/roshan.json": { id: "roshan", nome: "Roshan" },
  "/data/camps.json": [
    { id: "kobold", nome: "Kobold", tamanho: "small", terreno: "seco", unidades: [{ id: "kobold", qtd: 3 }, { id: "kobold_taskmaster", qtd: 1 }], ouro: [40, 50], xp: 89 },
    { id: "centaur", nome: "Centaur", tamanho: "medium", terreno: "seco", unidades: [{ id: "centaur_khan", qtd: 1 }], ouro: [60, 70], xp: 100 },
  ],
  "/data/unidades.json": [
    { id: "kobold", nome: "Kobold", grupo: "selva", papel: "", lado: "neutro", modelo: "k", camps: ["kobold"], habilidades: [] },
    { id: "kobold_taskmaster", nome: "Capataz Kobold", grupo: "selva", papel: "", lado: "neutro", modelo: "k2", camps: ["kobold"], habilidades: [] },
  ],
};

vi.mock("../data/schemas", async (original) => {
  const real = await original<typeof import("../data/schemas")>();
  return { ...real, unidadeSchema: real.unidadeSchema.pick({ id: true, nome: true }) };
});

beforeEach(() => vi.stubGlobal("fetch", (path: string) => Promise.resolve(new Response(JSON.stringify(arquivos[path])))));
afterEach(() => vi.unstubAllGlobals());

it("Roshan mostra a ficha da unidade", async () => {
  render(<MemoryRouter><UnidadeDoObjetivo objetivo={objetivo("roshan")} /></MemoryRouter>);
  expect(await screen.findByText("ficha de Roshan")).toBeInTheDocument();
});

it("camp pequeno seco lista os tipos possíveis com as unidades e quantidades", async () => {
  render(<MemoryRouter><UnidadeDoObjetivo objetivo={objetivo("camp", { tipo: "small", anfibio: false })} /></MemoryRouter>);
  expect(await screen.findByRole("heading", { name: "Kobold" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "3× Kobold" })).toHaveAttribute("href", "/glossario/unidades/kobold");
  expect(screen.getByRole("link", { name: "1× Capataz Kobold" })).toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: "Centaur" })).toBeNull();
});

it("torre não mostra nada", () => {
  const { container } = render(<MemoryRouter><UnidadeDoObjetivo objetivo={objetivo("torre")} /></MemoryRouter>);
  expect(container).toBeEmptyDOMElement();
});
