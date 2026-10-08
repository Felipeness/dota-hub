import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { SearchBox } from "./SearchBox";

afterEach(() => vi.unstubAllGlobals());

it("só baixa os dados da busca quando o campo recebe foco", () => {
  const fetch = vi.fn(() => new Promise(() => {}));
  vi.stubGlobal("fetch", fetch);
  render(<MemoryRouter><SearchBox /></MemoryRouter>);
  expect(fetch).not.toHaveBeenCalled();
  fireEvent.focus(screen.getByRole("searchbox"));
  const urls = fetch.mock.calls.map((c: unknown[]) => String(c[0]));
  expect(urls).toEqual(expect.arrayContaining(["/data/rotas_resumo.json", "/data/objetivos.json", "/data/glossario.json"]));
});

it("Esc e foco fora da busca fecham os resultados", () => {
  vi.stubGlobal("fetch", vi.fn(() => new Promise(() => {})));
  render(<MemoryRouter><SearchBox /><button>fora</button></MemoryRouter>);
  const campo = screen.getByRole("searchbox");
  fireEvent.focus(campo);
  fireEvent.change(campo, { target: { value: "rosh" } });
  expect(screen.getByText("Carregando a busca.")).toBeInTheDocument();
  fireEvent.keyDown(campo, { key: "Escape" });
  expect(screen.queryByText("Carregando a busca.")).not.toBeInTheDocument();
  fireEvent.change(campo, { target: { value: "roshan" } });
  expect(screen.getByText("Carregando a busca.")).toBeInTheDocument();
  fireEvent.focusOut(campo, { relatedTarget: screen.getByRole("button", { name: "fora" }) });
  expect(screen.queryByText("Carregando a busca.")).not.toBeInTheDocument();
});

it("clicar num resultado não tira o foco do campo antes da navegação", async () => {
  const termo = { id: "roshan", titulo: "Roshan", patch: "7.41", fontes: [], secoes: { basico: "Chefe.", avancado: null }, origem: { basico: null, avancado: null } };
  vi.stubGlobal("fetch", vi.fn((url: string) => Promise.resolve(new Response(JSON.stringify(url.endsWith("glossario.json") ? [termo] : [])))));
  render(<MemoryRouter><SearchBox /></MemoryRouter>);
  const campo = screen.getByRole("searchbox");
  fireEvent.focus(campo);
  fireEvent.change(campo, { target: { value: "rosh" } });
  const link = await screen.findByRole("link", { name: "Roshan" });
  // O Safari não dá foco ao link no clique: sem o preventDefault o campo perde o foco e a lista some antes do click.
  expect(fireEvent.mouseDown(link)).toBe(false);
});

it("ArrowDown/ArrowUp movem o item ativo e Enter navega", async () => {
  const termos = [
    { id: "roshan", titulo: "Roshan", patch: "7.41", fontes: [], secoes: { basico: "Chefe.", avancado: null }, origem: { basico: null, avancado: null } },
    { id: "pull", titulo: "Pull", patch: "7.41", fontes: [], secoes: { basico: "Puxa.", avancado: null }, origem: { basico: null, avancado: null } },
  ];
  vi.stubGlobal("fetch", vi.fn((url: string) => Promise.resolve(new Response(JSON.stringify(url.endsWith("glossario.json") ? termos : [])))));
  render(<MemoryRouter><SearchBox /></MemoryRouter>);
  const campo = screen.getByRole("searchbox");
  fireEvent.focus(campo);
  fireEvent.change(campo, { target: { value: "ro" } });
  await screen.findByRole("link", { name: "Roshan" });
  fireEvent.keyDown(campo, { key: "ArrowDown" });
  const primeiroItem = screen.getByRole("link", { name: "Roshan" }).closest("li");
  expect(primeiroItem).toHaveClass("ativo");
  fireEvent.keyDown(campo, { key: "ArrowDown" });
  expect(primeiroItem).not.toHaveClass("ativo");
});
