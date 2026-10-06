import { render, screen } from "@testing-library/react";
import type { ConteudoItem } from "../data/schemas";
import { SoloRoshan } from "./SoloRoshan";

const solo = (id: string, extras: Record<string, string | string[]>): ConteudoItem => ({
  id, titulo: id, patch: "7.41", fontes: ["Liquipedia"], secoes: { basico: "Passo a passo.", avancado: null },
  origem: { basico: null, avancado: null }, links: [], extras,
});

it("marca recomendado e visto em replay", () => {
  render(<SoloRoshan solos={[
    solo("Ursa", { origem: "recomendado", nivel: "7", minuto: "9:00", itens: ["Vladmir's Offering"] }),
    solo("Huskar", { origem: "replay", replay: "9022767300", nivel: "11", minuto: "14:30", itens: ["Armlet"] }),
  ]} />);
  expect(screen.getByText("recomendado")).toBeInTheDocument();
  expect(screen.getByText("visto em replay 9022767300")).toBeInTheDocument();
  expect(screen.getByText(/nível 7 · 9:00/)).toBeInTheDocument();
});

it("sem nenhum solo avisa que ainda não foi escrito", () => {
  render(<SoloRoshan solos={[]} />);
  expect(screen.getByText("Ainda não escrito.")).toBeInTheDocument();
});
