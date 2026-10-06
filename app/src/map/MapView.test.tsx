import { fireEvent, render, screen } from "@testing-library/react";
import { MapView } from "./MapView";

const rosh = { id: "roshan_pit_top", tipo: "roshan", nome: "Roshan", x: 0.326, y: 0.638, lado: "neutro" as const, detalhes: {} };

it("sem WebGL cai para o mapa plano e o objeto continua clicável", () => {
  const onSelecionar = vi.fn();
  render(<MapView objetivos={[rosh]} onSelecionar={onSelecionar} forcarPlano />);
  fireEvent.click(screen.getByRole("button", { name: "Roshan" }));
  expect(onSelecionar).toHaveBeenCalledWith("roshan_pit_top");
});
