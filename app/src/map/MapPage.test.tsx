import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import { MapPage } from "./MapPage";

const rosh = { id: "roshan_pit_top", tipo: "roshan", nome: "Poço do Roshan", x: 0.3, y: 0.6, lado: "neutro", detalhes: {} };
const arquivos: Record<string, unknown> = {
  "/data/objetivos.json": [rosh], "/data/objetivos_conteudo.json": [], "/data/roshan_solo.json": [], "/data/replays.json": [],
};

beforeEach(() => {
  vi.stubGlobal("fetch", (path: string) =>
    Promise.resolve(path in arquivos ? new Response(JSON.stringify(arquivos[path])) : new Response("", { status: 404 })));
});
afterEach(() => vi.unstubAllGlobals());

const renderizar = () => render(<MemoryRouter initialEntries={["/"]}><Routes><Route path="/" element={<MapPage />} /></Routes></MemoryRouter>);

it("o botão Camadas abre e fecha o grupo de camadas", async () => {
  renderizar();
  const botao = await screen.findByRole("button", { name: "Camadas" });
  const grupo = screen.getByRole("group", { name: "Camadas do mapa" });
  expect(botao).toHaveAttribute("aria-expanded", "false");
  expect(grupo).toHaveAttribute("data-aberta", "false");
  fireEvent.click(botao);
  expect(botao).toHaveAttribute("aria-expanded", "true");
  expect(grupo).toHaveAttribute("data-aberta", "true");
});

it("esconder uma camada tira os marcadores dela do mapa", async () => {
  renderizar();
  expect(await screen.findByRole("button", { name: "Poço do Roshan" })).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /^Roshan\s*1$/ }));
  expect(screen.queryByRole("button", { name: "Poço do Roshan" })).not.toBeInTheDocument();
});
