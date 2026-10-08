import { render, screen } from "@testing-library/react";
import { CurvaDaPartida, type Serie } from "./CurvaDaPartida";

const SEM_EVENTOS: never[] = [];

it("série só positiva parte o eixo do zero, sem marca negativa", () => {
  const series: Serie[] = [{ nome: "Ouro", valores: [0, 500, 1_200], estilo: "jogador" }];
  render(<CurvaDaPartida titulo="Ouro" unidade="u" series={series} eventos={SEM_EVENTOS} duracaoS={180} janela="toda" />);
  expect(screen.queryByText(/^-/)).not.toBeInTheDocument();
});

it("vantagem do time (série com negativo) centraliza o zero e marca os dois lados", () => {
  const series: Serie[] = [{ nome: "Vantagem", valores: [0, 1_000, -1_500], estilo: "jogador" }];
  render(<CurvaDaPartida titulo="Vantagem" unidade="u" series={series} eventos={SEM_EVENTOS} duracaoS={180} janela="toda" />);
  expect(screen.getAllByText("0").length).toBeGreaterThan(0);
  expect(screen.getAllByText(/^-/).length).toBeGreaterThan(0);
});
