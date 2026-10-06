import { fireEvent, render, screen } from "@testing-library/react";
import { ControlesReplay } from "./MapaComCamadas";
import { iniciarReproducao } from "./reproducao";

it("botão toca e o controle de tempo leva ao minuto escolhido", () => {
  const despachar = vi.fn();
  render(<ControlesReplay estado={iniciarReproducao(600)} passoS={5} despachar={despachar} />);
  fireEvent.click(screen.getByRole("button", { name: "Tocar" }));
  expect(despachar).toHaveBeenCalledWith({ tipo: "alternar" });
  fireEvent.change(screen.getByRole("slider", { name: "Minuto do replay" }), { target: { value: "300" } });
  expect(despachar).toHaveBeenCalledWith({ tipo: "ir", t: 300 });
  expect(screen.getByText("0:00 / 10:00")).toBeInTheDocument();
});
