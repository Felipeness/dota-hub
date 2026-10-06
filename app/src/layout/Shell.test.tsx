import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Rodape } from "./Shell";

it("rodapé mostra a data da exportação e o patch", () => {
  render(<MemoryRouter><Rodape meta={{ exportado_em: "2026-10-06T13:00:00+00:00", patch: "7.41", contagens: { rotas: 1, objetivos: 1, termos: 1 } }} /></MemoryRouter>);
  expect(screen.getByText("Dados de 06/10/2026 · patch 7.41")).toBeInTheDocument();
});
