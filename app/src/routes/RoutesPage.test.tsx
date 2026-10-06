import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import type { Indice, Rota, RotaResumo } from "../data/schemas";
import { RoutesPage } from "./RoutesPage";

const rota: Rota = {
  id: "MA-R-01", pdf: "06", lado: "radiant", pergunta: "Onde farmo no minuto 6 se não posso pegar wave?", titulo: "Minuto 6", secao: "",
  janela: { de: "6:00", ate: "7:00" }, estado: { minuto: 6, nivel: "5" }, origem: "real", replay: "8123",
  passos: [{ n: 1, alvo: "a", x: 0.39, y: 0.24, rotulo: "MEDIUM R6", minuto: "6:09", acao: "Saia da caixa.", risco: "seguro" }],
  caminhos: [], fuga: null, proxima: ["MA-R-02"], se: [], interrupcao: [], porque: "",
};
const resumo: RotaResumo = { id: rota.id, pdf: rota.pdf, lado: rota.lado, pergunta: rota.pergunta, titulo: rota.titulo, janela: rota.janela, heroi: null };
const indice: Indice = { colunas: ["lane impossível"], radiant: [{ minuto: 6, cenarios: { "lane impossível": { id: "MA-R-01", nota: "vindo do triângulo: MA-R-08" } } }], dire: [] };
let arquivos: Record<string, unknown> = {};

beforeEach(() => {
  arquivos = { "/data/rotas_resumo.json": [resumo], "/data/rotas/MA-R-01.json": rota, "/data/indice.json": indice, "/data/objetivos.json": [] };
  vi.stubGlobal("fetch", (path: string) =>
    Promise.resolve(path in arquivos ? new Response(JSON.stringify(arquivos[path])) : new Response("", { status: 404 })));
  Element.prototype.scrollIntoView = vi.fn();
});
afterEach(() => vi.unstubAllGlobals());

const renderizar = () => render(
  <MemoryRouter initialEntries={["/rotas"]}>
    <Routes><Route path="/rotas" element={<RoutesPage />} /><Route path="/rotas/:id" element={<RoutesPage />} /></Routes>
  </MemoryRouter>,
);

it("abre a rota da célula em três toques e leva a tela até o mapa", async () => {
  renderizar();
  fireEvent.click(await screen.findByRole("button", { name: "Radiant" }));
  fireEvent.click(screen.getByRole("button", { name: "6" }));
  fireEvent.click(screen.getByRole("button", { name: "lane impossível" }));
  expect(await screen.findByRole("heading", { name: rota.pergunta })).toBeInTheDocument();
  expect(screen.getByText("vindo do triângulo: MA-R-08")).toBeInTheDocument();
  expect(screen.getByText("ROTA REAL · replay 8123")).toBeInTheDocument();
  expect(within(screen.getByRole("list", { name: "Passos da rota" })).getByText(/Saia da caixa./)).toBeInTheDocument();
  expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
});

it("mostra o mapa antes de escolher e deixa a situação desligada até ter lado e minuto", async () => {
  renderizar();
  expect(await screen.findByText(/a rota aparece aqui no mapa/)).toBeInTheDocument();
  expect(screen.getByAltText("Mapa do Dota 7.41")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "lane impossível" })).toBeDisabled();
  fireEvent.click(screen.getByRole("button", { name: "Radiant" }));
  fireEvent.click(screen.getByRole("button", { name: "6" }));
  expect(screen.getByRole("button", { name: "lane impossível" })).toBeEnabled();
});

it("lista 20 rotas por vez", async () => {
  arquivos["/data/rotas_resumo.json"] = Array.from({ length: 45 }, (_, i) => ({ ...resumo, id: `MA-R-${10 + i}`, pergunta: `Pergunta ${i}` }));
  renderizar();
  const lista = await screen.findByRole("list", { name: "Rotas" });
  expect(within(lista).getAllByRole("listitem")).toHaveLength(20);
  expect(screen.getByText("45 rotas")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Mostrar mais 20" }));
  expect(within(lista).getAllByRole("listitem")).toHaveLength(40);
  fireEvent.click(screen.getByRole("button", { name: "Mostrar mais 5" }));
  expect(within(lista).getAllByRole("listitem")).toHaveLength(45);
});
