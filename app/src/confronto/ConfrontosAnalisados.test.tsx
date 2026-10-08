/// <reference types="node" />
import { render, screen, within } from "@testing-library/react";
import { readFileSync } from "node:fs";
import { MemoryRouter } from "react-router";
import { ConfrontosAnalisados } from "./ConfrontosAnalisados";

afterEach(() => vi.unstubAllGlobals());

it("lista os oponentes analisados em melhores e piores, cada um levando ao confronto", async () => {
  vi.stubGlobal("fetch", async (url: string) => new Response(readFileSync(`public${url}`, "utf-8"), { headers: { "content-type": "application/json" } }));
  render(<MemoryRouter><ConfrontosAnalisados heroi={{ id: "shadow_fiend", nome: "Shadow Fiend", nome_interno: "nevermore" }} /></MemoryRouter>);
  const bloco = await screen.findByRole("region", { name: "Confrontos analisados" });
  const links = within(bloco).getAllByRole("link");
  expect(links.length).toBeGreaterThan(5);
  expect(links.every((l) => l.getAttribute("href")?.startsWith("/confronto/nevermore/"))).toBe(true);
  expect(within(bloco).getByRole("heading", { name: "Melhores" })).toBeInTheDocument();
  expect(within(bloco).getByRole("heading", { name: "Piores" })).toBeInTheDocument();
});
