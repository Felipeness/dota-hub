import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import type { Consultar } from "../live/consulta";
import { ok } from "../live/erros";
import { ProvedorAoVivo } from "../live/ProvedorAoVivo";
import { filaSemIntervalo } from "../live/teste/gravados";
import { DraftPage } from "./DraftPage";

const HEROSTATS = [
  { id: 2, name: "npc_dota_hero_axe", localized_name: "Axe", roles: ["Initiator", "Disabler"], "7_pick": 10_000, "7_win": 5_000 },
  { id: 26, name: "npc_dota_hero_lion", localized_name: "Lion", roles: ["Support", "Disabler"], "7_pick": 10_000, "7_win": 5_100 },
  { id: 8, name: "npc_dota_hero_juggernaut", localized_name: "Juggernaut", roles: ["Carry"], "7_pick": 10_000, "7_win": 4_900 },
];
// Axe venceu 60 de 200 contra o Lion.
const MATCHUPS_DO_AXE = [{ hero_id: 26, games_played: 200, wins: 60 }, { hero_id: 8, games_played: 200, wins: 100 }];

const RESPOSTAS: Record<string, unknown> = { "/heroStats": HEROSTATS, "/heroes/2/matchups": MATCHUPS_DO_AXE };
const consultar: Consultar = async (pedido) => ok({ valor: pedido.schema.parse(RESPOSTAS[pedido.caminho]), frescor: { buscadoEm: 0, vencido: false } });

beforeEach(() => {
  vi.stubGlobal("fetch", async () => new Response("[]", { headers: { "content-type": "application/json" } }));
});
afterEach(() => vi.unstubAllGlobals());

it("põe o herói tocado no time inimigo e explica o pick pelo confronto", async () => {
  render(
    <ProvedorAoVivo servicos={{ fila: filaSemIntervalo(), consultar }}>
      <MemoryRouter initialEntries={["/draft"]}><DraftPage /></MemoryRouter>
    </ProvedorAoVivo>,
  );
  const grade = await screen.findByRole("list", { name: "Heróis para Inimigo" });
  fireEvent.click(within(grade).getByTitle("Axe"));
  expect(await screen.findAllByText(/Vence 70,0% contra Axe/)).not.toHaveLength(0);
  const picks = screen.getByRole("region", { name: "Melhores picks" });
  expect(within(picks).getAllByRole("listitem")[0]).toHaveTextContent("Lion");
});
