import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes, useLocation } from "react-router";
import { Shell } from "../layout/Shell";
import { RedirecionarParaAPrancheta, ROTA_ANTIGA_DA_PRANCHETA, ROTA_DA_PRANCHETA } from "./rota";

function OndeEstou() {
  const { pathname, search, hash } = useLocation();
  return <output>{`${pathname}${search}${hash}`}</output>;
}

it.each([
  { caso: "quadro compartilhado", entrada: "/prancheta#q=abc", saida: "/drawmap#q=abc" },
  { caso: "lance da análise", entrada: "/prancheta?partida=8123&t=1713", saida: "/drawmap?partida=8123&t=1713" },
  { caso: "sem nada", entrada: "/prancheta", saida: "/drawmap" },
])("redireciona /prancheta para /drawmap mantendo o endereço ($caso)", ({ entrada, saida }) => {
  render(
    <MemoryRouter initialEntries={[entrada]}>
      <Routes>
        <Route path={ROTA_ANTIGA_DA_PRANCHETA} element={<RedirecionarParaAPrancheta />} />
        <Route path={ROTA_DA_PRANCHETA} element={<OndeEstou />} />
      </Routes>
    </MemoryRouter>,
  );
  expect(screen.getByRole("status")).toHaveTextContent(saida);
});

it("o menu leva a Prancheta para /drawmap", () => {
  vi.stubGlobal("fetch", vi.fn(() => new Promise(() => {})));
  render(<MemoryRouter><Shell /></MemoryRouter>);
  expect(screen.getByRole("link", { name: "Prancheta" })).toHaveAttribute("href", "/drawmap");
  vi.unstubAllGlobals();
});
