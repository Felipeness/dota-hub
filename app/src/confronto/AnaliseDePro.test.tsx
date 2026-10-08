/// <reference types="node" />
import { render, screen, within } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { MemoryRouter } from "react-router";
import { AnaliseDePro } from "./AnaliseDePro";

const MORPHLING = { id: 10, chave: "morphling", nome: "Morphling" };
const ALCHEMIST = { id: 73, chave: "alchemist", nome: "Alchemist" };
const LION = { id: 26, chave: "lion", nome: "Lion" };

function abrir(meu: typeof MORPHLING, inimigo: typeof MORPHLING) {
  vi.stubGlobal("fetch", async (url: string) => new Response(readFileSync(`public${url}`, "utf-8"), { headers: { "content-type": "application/json" } }));
  return render(<MemoryRouter><AnaliseDePro meu={meu} inimigo={inimigo} /></MemoryRouter>);
}

afterEach(() => vi.unstubAllGlobals());

it("mostra o bloco do seu herói com placar e porquê, e o lado dele recolhido", async () => {
  abrir(MORPHLING, ALCHEMIST);
  const analise = await screen.findByRole("region", { name: "Análise de pro" });
  expect(within(analise).getByText("29%")).toBeInTheDocument();
  expect(within(analise).getAllByText(/Morphling venceu 9 de 31 partidas pro/)[0]).toBeVisible();
  expect(within(analise).getAllByText("Por que importa:")[0]).toBeVisible();
  const outroLado = within(analise).getByText("Visto do lado dele").closest("details");
  expect(outroLado).not.toHaveAttribute("open");
  expect(within(analise).getAllByText(/^Fontes: Partidas pro 7\.40-7\.41 \(OpenDota\)/)[0]).toBeVisible();
  expect(analise).not.toHaveTextContent(/pro_dados|C:\//);
});

it("sem bloco para o par, explica a cobertura e leva aos oponentes analisados", async () => {
  abrir(MORPHLING, LION);
  const analise = await screen.findByRole("region", { name: "Análise de pro" });
  expect(analise).toHaveTextContent("A análise de pro cobre os confrontos mais relevantes de cada herói");
  expect(within(analise).getByRole("link", { name: "Alchemist" })).toHaveAttribute("href", "/confronto/morphling/alchemist");
  expect(within(analise).queryByText("Visto do lado dele")).not.toBeInTheDocument();
});

it("a linha do tempo põe os itens dos dois heróis e destaca a janela do primeiro item-chave", async () => {
  abrir(MORPHLING, ALCHEMIST);
  const linha = await screen.findByRole("region", { name: "Linha do tempo de power spike" });
  const meus = within(linha).getByRole("list", { name: "Itens do Morphling" });
  expect(within(meus).getAllByRole("img").map((i) => i.getAttribute("alt"))).toEqual(
    ["Power Treads", "Vladmir's Offering", "Yasha", "Manta Style", "Dragon Lance", "Butterfly", "Black King Bar"]);
  expect(within(linha).getByRole("list", { name: "Itens do Alchemist" })).toHaveTextContent("13,9");
  expect(within(linha).getByText("Janela do Morphling:").parentElement).toHaveTextContent(
    "Vladmir's Offering aos 10,7 min, e o Alchemist só fecha o primeiro (Radiance) aos 13,9.");
});
