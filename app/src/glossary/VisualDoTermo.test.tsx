import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import type { ConteudoItem } from "../data/schemas";
import { IconeDoItem, VisualDoTermo } from "./VisualDoTermo";

const rosh = { id: "roshan_pit_top", tipo: "roshan", nome: "Poço do Roshan", x: 0.3, y: 0.6, lado: "neutro", detalhes: {} };
const aegis: ConteudoItem = {
  id: "aegis", titulo: "Aegis", patch: "7.41", fontes: [], secoes: { basico: "Volta à vida.", avancado: null },
  origem: { basico: null, avancado: null }, links: ["roshan"], extras: { categoria: "objetivo", unidade: "roshan" },
};

afterEach(() => vi.unstubAllGlobals());

it("mostra o ícone do item tirado do jogo", () => {
  render(<IconeDoItem item="abyssal_blade" nome="Abyssal Blade" />);
  expect(screen.getByAltText("Ícone de Abyssal Blade")).toHaveAttribute("src", "/data/retratos/itens/abyssal_blade.webp");
});

it("marca no mini mapa os lugares do termo e pede a ficha da unidade", async () => {
  const arquivos: Record<string, unknown> = { "/data/objetivos.json": [rosh] };
  vi.stubGlobal("fetch", (path: string) =>
    Promise.resolve(path in arquivos ? new Response(JSON.stringify(arquivos[path])) : new Response("", { status: 404 })));
  render(<MemoryRouter><VisualDoTermo termo={aegis} /></MemoryRouter>);
  expect(await screen.findByRole("button", { name: "Poço do Roshan" })).toBeInTheDocument();
  expect(screen.getByText("Onde fica no mapa")).toBeInTheDocument();
  expect(await screen.findByRole("alert")).toHaveTextContent("/data/unidades/roshan.json");
});

it("no termo que é um lugar do mapa, marca o próprio lugar e não os relacionados", async () => {
  const tormentor = { id: "tormentor_se", tipo: "tormentor", nome: "Tormentor SE", x: 0.9, y: 0.2, lado: "neutro", detalhes: {} };
  const arquivos: Record<string, unknown> = { "/data/objetivos.json": [rosh, tormentor] };
  vi.stubGlobal("fetch", (path: string) =>
    Promise.resolve(path in arquivos ? new Response(JSON.stringify(arquivos[path])) : new Response("", { status: 404 })));
  const roshan = { ...aegis, id: "roshan", titulo: "Roshan", links: ["aegis", "tormentor"], extras: { categoria: "objetivo" } };
  render(<MemoryRouter><VisualDoTermo termo={roshan} /></MemoryRouter>);
  expect(await screen.findByRole("button", { name: "Poço do Roshan" })).toBeInTheDocument();
  expect(screen.queryByRole("button", { name: "Tormentor SE" })).not.toBeInTheDocument();
});
