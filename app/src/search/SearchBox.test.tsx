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
