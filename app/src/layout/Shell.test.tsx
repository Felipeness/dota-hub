import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Rodape, Shell } from "./Shell";

afterEach(() => vi.unstubAllGlobals());

it("rodapé mostra a data da exportação e o patch", () => {
  render(<MemoryRouter><Rodape meta={{ exportado_em: "2026-10-06T13:00:00+00:00", patch: "7.41", contagens: { rotas: 1, objetivos: 1, termos: 1 } }} /></MemoryRouter>);
  expect(screen.getByText("Dados de 06/10/2026 · patch 7.41")).toBeInTheDocument();
});

it("topo mostra o selo do patch e as abas de navegação", async () => {
  const meta = { exportado_em: "2026-10-06T13:00:00+00:00", patch: "7.41", contagens: { rotas: 1, objetivos: 1, termos: 1 } };
  vi.stubGlobal("fetch", () => Promise.resolve(new Response(JSON.stringify(meta))));
  render(<MemoryRouter><Shell /></MemoryRouter>);
  expect(await screen.findByLabelText("Patch 7.41")).toBeInTheDocument();
  const nav = screen.getByRole("navigation", { name: "Principal" });
  for (const aba of ["Mapa", "Rotas", "Heróis", "Jogadores", "Glossário"]) expect(nav).toContainElement(screen.getByRole("link", { name: aba }));
});

it("a tecla / leva o foco para a busca", () => {
  vi.stubGlobal("fetch", vi.fn(() => new Promise(() => {})));
  render(<MemoryRouter><Shell /></MemoryRouter>);
  fireEvent.keyDown(document.body, { key: "/" });
  expect(screen.getByRole("searchbox")).toHaveFocus();
});
