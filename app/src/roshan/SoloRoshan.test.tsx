import { fireEvent, render, screen } from "@testing-library/react";
import type { ConteudoItem } from "../data/schemas";
import { SoloRoshan } from "./SoloRoshan";

const solo = (heroi: string, solos: string, replays: string[]): ConteudoItem => ({
  id: `roshan-solo-${heroi.toLowerCase()}`, titulo: `Solo de Roshan: ${heroi}`, patch: "7.41",
  fontes: replays.map((r) => `replay ${r}`), secoes: { basico: `Básico do ${heroi}.`, avancado: `Avançado do ${heroi}.` },
  origem: { basico: { tipo: "replay", replays }, avancado: { tipo: "replay", replays } }, links: [], extras: { heroi, solos },
});
const ursa = solo("Ursa", "8", ["1", "2"]);
const huskar = solo("Huskar", "58", ["3", "4", "5"]);

it("lista os heróis com o Huskar primeiro e o n de solos", () => {
  render(<SoloRoshan solos={[ursa, huskar]} />);
  const botoes = screen.getAllByRole("button");
  expect(botoes.map((b) => b.textContent)).toEqual(["Huskar58 solos", "Ursa8 solos"]);
  expect(screen.queryByText("Básico do Huskar.")).not.toBeInTheDocument();
});

it("ao escolher um herói mostra o básico, o avançado e quantos replays", () => {
  render(<SoloRoshan solos={[ursa, huskar]} />);
  fireEvent.click(screen.getByRole("button", { name: /Huskar/ }));
  expect(screen.getByRole("button", { name: /Huskar/ })).toHaveAttribute("aria-pressed", "true");
  expect(screen.getByText("Visto em 3 replays")).toBeInTheDocument();
  expect(screen.getByText("Básico do Huskar.")).toBeInTheDocument();
  expect(screen.getByText("Avançado do Huskar.")).toBeInTheDocument();
});

it("usa o nome do herói no aria-label em vez do título bruto com aspas", () => {
  const comAspas: ConteudoItem = { ...solo("Beastmaster", "7", ["1"]), titulo: '"Solo de Roshan: Beastmaster"' };
  render(<SoloRoshan solos={[comAspas]} />);
  expect(screen.getByRole("article", { name: "Beastmaster" })).toBeInTheDocument();
});

it("com um herói só abre direto, sem lista", () => {
  render(<SoloRoshan solos={[ursa]} />);
  expect(screen.queryByRole("button")).not.toBeInTheDocument();
  expect(screen.getByText("Visto em 2 replays")).toBeInTheDocument();
  expect(screen.getByText("Básico do Ursa.")).toBeInTheDocument();
});

it("sem nenhum solo avisa que ainda não foi escrito", () => {
  render(<SoloRoshan solos={[]} />);
  expect(screen.getByText("Ainda não escrito.")).toBeInTheDocument();
});

it("sem replay confirmado não mostra o selo de replays", () => {
  render(<SoloRoshan solos={[solo("Sven", "0", [])]} />);
  expect(screen.queryByText(/Visto em/)).not.toBeInTheDocument();
  expect(screen.getByText("Básico do Sven.")).toBeInTheDocument();
});

it("fonte com URL vira link", () => {
  const comLink: ConteudoItem = { ...ursa, fontes: ["replay 1", "https://liquipedia.net/dota2/Roshan"] };
  render(<SoloRoshan solos={[comLink]} />);
  expect(screen.getByRole("link", { name: "liquipedia.net/dota2/Roshan" })).toHaveAttribute("href", "https://liquipedia.net/dota2/Roshan");
});
