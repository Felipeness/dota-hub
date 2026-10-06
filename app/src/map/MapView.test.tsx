/// <reference types="node" />
import { fireEvent, render, screen } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { MapView } from "./MapView";

const rosh = { id: "roshan_pit_top", tipo: "roshan", nome: "Roshan", x: 0.326, y: 0.638, lado: "neutro" as const, detalhes: {} };

it("sem WebGL cai para o mapa plano e o objeto continua clicável", () => {
  const onSelecionar = vi.fn();
  render(<MapView objetivos={[rosh]} onSelecionar={onSelecionar} forcarPlano />);
  fireEvent.click(screen.getByRole("button", { name: "Roshan" }));
  expect(onSelecionar).toHaveBeenCalledWith("roshan_pit_top");
});

it("mapa plano pede a imagem em modo CORS, igual ao loader da textura 3D, para baixar uma vez só", () => {
  render(<MapView objetivos={[]} onSelecionar={() => {}} forcarPlano />);
  expect(screen.getByAltText("Mapa do Dota 7.41")).toHaveAttribute("crossorigin", "anonymous");
});

it("mapa plano mostra a posição atual da trilha e a marca", () => {
  const trilha = { id: "1:0", rotulo: "Lou", lado: "radiant" as const, destaque: true, rastro: [[0.1, 0.2] as [number, number]], atual: [0.1, 0.2] as [number, number] };
  const marca = { id: "m", x: 0.2, y: 0.3, tipo: "morte" as const, lado: "radiant" as const, rotulo: "Morte de sven" };
  render(<MapView objetivos={[]} trilhas={[trilha]} marcas={[marca]} onSelecionar={() => {}} forcarPlano />);
  expect(screen.getByRole("img", { name: "Lou" })).toBeInTheDocument();
  expect(screen.getByRole("img", { name: "Morte de sven" })).toBeInTheDocument();
});

it("marca de morte desenha o × e o CSS não tem byte de controle", () => {
  const css = readFileSync("src/styles.css", "utf-8");
  expect(css).toContain(String.raw`.marca-morte::before { content: "\d7"; }`);
  expect(css).not.toMatch(/[\u0000-\u0008]/);
});
