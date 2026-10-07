import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import { ProvedorAoVivo } from "../ProvedorAoVivo";
import { PARTIDA, YATORO, servicosGravados } from "../teste/gravados";
import { PartidaPage } from "./PartidaPage";

function abrir(caminho: string, substituicoes: Readonly<Record<string, unknown>> = {}) {
  return render(
    <ProvedorAoVivo servicos={servicosGravados(substituicoes)}>
      <MemoryRouter initialEntries={[caminho]}>
        <Routes><Route path="/ao-vivo/partidas/:id" element={<PartidaPage />} /></Routes>
      </MemoryRouter>
    </ProvedorAoVivo>,
  );
}

const caminho = `/ao-vivo/partidas/${PARTIDA}?conta=${YATORO}`;

it("partida real gravada mostra herói, resumo, curvas, rota e build", async () => {
  abrir(caminho);
  expect(await screen.findByRole("heading", { level: 1, name: "Slark" })).toBeInTheDocument();
  const resumo = screen.getByRole("list", { name: "Resumo da partida" });
  expect(within(resumo).getByText("Vitória em 46 min de Slark, 13/5/12, safe lane.")).toBeInTheDocument();
  expect(within(resumo).getByText(/Perdeu a lane contra Necrophos/)).toBeInTheDocument();
  expect(screen.getAllByRole("img", { name: /Ouro ganho por minuto|Last hits por minuto/ })).toHaveLength(2);
  expect(screen.getByRole("list", { name: "Ordem de compra" })).toHaveTextContent("Diffusal Blade");
  expect(screen.getByRole("heading", { name: "Por que esse item" })).toBeInTheDocument();
  expect(screen.getByRole("region", { name: "Skill build por nível" })).toBeInTheDocument();
});

it("trocar a janela filtra e renumera os eventos", async () => {
  abrir(caminho);
  await screen.findByRole("heading", { level: 1, name: "Slark" });
  fireEvent.click(screen.getByRole("button", { name: "0 a 10 min" }));
  const eventos = screen.getByRole("list", { name: "Eventos da janela" });
  expect(within(eventos).getByText("Abate: Necrophos")).toBeInTheDocument();
  expect(within(eventos).queryByText("Butterfly")).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "30 min em diante" }));
  expect(within(screen.getByRole("list", { name: "Eventos da janela" })).getByText("Butterfly")).toBeInTheDocument();
});

it("sem o replay local a rota avisa que é aproximada", async () => {
  abrir(caminho);
  expect(await screen.findByText(/A rota completa minuto a minuto só vem do replay\./)).toBeInTheDocument();
});

it("partida sem análise mostra só o placar e o aviso", async () => {
  const semAnalise = { match_id: PARTIDA, duration: 1_800, radiant_win: true, players: [{ account_id: YATORO, player_slot: 0, hero_id: 93, kills: 1, deaths: 2, assists: 3 }] };
  abrir(caminho, { [`/matches/${PARTIDA}`]: semAnalise });
  expect(await screen.findByText(/Esta partida não foi analisada pelo OpenDota/)).toBeInTheDocument();
  expect(screen.queryByRole("list", { name: "Ordem de compra" })).not.toBeInTheDocument();
});

it("conta inválida na URL avisa sem consultar", () => {
  abrir(`/ao-vivo/partidas/${PARTIDA}?conta=abc`);
  expect(screen.getByRole("alert")).toBeInTheDocument();
});
