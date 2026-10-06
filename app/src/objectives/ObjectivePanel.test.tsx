import { fireEvent, render, screen } from "@testing-library/react";
import { ObjectivePanel } from "./ObjectivePanel";

const camp = { id: "rad_safe_small_1", tipo: "camp", nome: "Pequeno do pull", x: 0.7, y: 0.2, lado: "radiant" as const, detalhes: {} };
const conteudo = [{ id: "camp", titulo: "Camp", patch: "7.41", fontes: ["Liquipedia"], secoes: { basico: "Camps nascem a cada minuto.", avancado: null }, links: [] }];

it("mostra o básico e, sem avançado, avisa que ainda não foi escrito", () => {
  render(<ObjectivePanel objetivo={camp} conteudo={conteudo} onFechar={() => {}} />);
  expect(screen.getByText("Camps nascem a cada minuto.")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("tab", { name: "Avançado" }));
  expect(screen.getByText("Ainda não escrito.")).toBeInTheDocument();
  expect(screen.getByText(/Liquipedia/)).toBeInTheDocument();
});
