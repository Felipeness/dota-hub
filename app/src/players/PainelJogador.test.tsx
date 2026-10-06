import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import type { Painel } from "../data/schemas";
import { PainelJogador } from "./PainelJogador";

const painel: Painel = {
  id: "leonardo", nome: "Leonardo", tipo: "amigo", time: null, amostra: "714 partidas", fontes: ["partidas.csv"],
  destaques: [{ rotulo: "Vitórias", valor: 53.4, unidade: "%", fonte: "partidas.csv" }],
  graficos: [{ id: "h", titulo: "Vitória por horário", tipo: "barra", x: { rotulo: "", valores: ["16-18 (92)"] }, series: [{ nome: "Vitória", valores: [62] }], unidade: "%", fonte: "partidas.csv", nota: null }],
  achados: [{ texto: "Invoker no mid ganha 66%.", fonte: "resumo" }], replays: ["9027486175"],
};

it("mostra destaques formatados, tabela do gráfico, achados e link do replay", () => {
  render(<MemoryRouter><PainelJogador painel={painel} /></MemoryRouter>);
  expect(screen.getByText("53,4%")).toBeInTheDocument();
  expect(screen.getByRole("cell", { name: "16-18 (92)" })).toBeInTheDocument();
  expect(screen.getByText("Invoker no mid ganha 66%.")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /9027486175/ })).toHaveAttribute("href", "/?replay=9027486175");
});
