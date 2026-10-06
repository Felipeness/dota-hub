import { render, screen } from "@testing-library/react";
import type { Passo } from "../data/schemas";
import { ListaPassos } from "./RouteDetail";

const passo = (n: number, extra: Partial<Passo> = {}): Passo => ({
  n, alvo: "a", x: 0.5, y: 0.5, rotulo: "T1 BOT", minuto: "5:00", acao: "volte", risco: "seguro", ...extra,
});

it("mostra a etiqueta do PDF no passo alcançado por teleporte", () => {
  render(<ListaPassos passos={[passo(1), passo(2, { via: "tp" }), passo(3, { via: "portal", rotulo: "TWIN GATE" })]} />);
  expect(screen.getByText("TP T1 BOT")).toBeInTheDocument();
  expect(screen.getByText("PORTAL TWIN GATE")).toBeInTheDocument();
});
