import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import type { Indice, Rota } from "../data/schemas";
import { RoutesPage } from "./RoutesPage";

const rota: Rota = {
  id: "MA-R-01", pdf: "06", lado: "radiant", pergunta: "Onde farmo no minuto 6 se não posso pegar wave?", titulo: "Minuto 6", secao: "",
  janela: { de: "6:00", ate: "7:00" }, estado: { minuto: 6, nivel: "5" }, origem: "real", replay: "8123",
  passos: [{ n: 1, alvo: "a", x: 0.39, y: 0.24, rotulo: "MEDIUM R6", minuto: "6:09", acao: "Saia da caixa.", risco: "seguro" }],
  caminhos: [], fuga: null, proxima: ["MA-R-02"], se: [], interrupcao: [], porque: "",
};
const indice: Indice = { colunas: ["lane impossível"], radiant: [{ minuto: 6, cenarios: { "lane impossível": { id: "MA-R-01", nota: "vindo do triângulo: MA-R-08" } } }], dire: [] };
const arquivos: Record<string, unknown> = { "/data/rotas.json": [rota], "/data/indice.json": indice, "/data/objetivos.json": [] };

beforeEach(() => {
  vi.stubGlobal("fetch", (path: string) => Promise.resolve(new Response(JSON.stringify(arquivos[path]))));
});
afterEach(() => vi.unstubAllGlobals());

it("abre a rota da célula em três toques", async () => {
  render(
    <MemoryRouter initialEntries={["/rotas"]}>
      <Routes><Route path="/rotas" element={<RoutesPage />} /><Route path="/rotas/:id" element={<RoutesPage />} /></Routes>
    </MemoryRouter>,
  );
  fireEvent.click(await screen.findByRole("button", { name: "Radiant" }));
  fireEvent.click(screen.getByRole("button", { name: "6" }));
  fireEvent.click(screen.getByRole("button", { name: "lane impossível" }));
  expect(await screen.findByRole("heading", { name: rota.pergunta })).toBeInTheDocument();
  expect(screen.getByText("vindo do triângulo: MA-R-08")).toBeInTheDocument();
  expect(screen.getByText("ROTA REAL · replay 8123")).toBeInTheDocument();
  expect(screen.getByRole("cell", { name: "Saia da caixa." })).toBeInTheDocument();
});
