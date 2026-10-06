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
