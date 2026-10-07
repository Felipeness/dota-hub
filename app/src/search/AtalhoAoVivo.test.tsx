import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { AtalhoAoVivo } from "./AtalhoAoVivo";

it("com 2 letras ou mais leva para a busca ao vivo com o texto", () => {
  render(<MemoryRouter><ul><AtalhoAoVivo consulta="  Team Spirit " onIr={() => {}} /></ul></MemoryRouter>);
  expect(screen.getByRole("link", { name: "Buscar ao vivo: “Team Spirit”" })).toHaveAttribute("href", "/ao-vivo?q=Team%20Spirit");
});

it("com menos de 2 letras não aparece", () => {
  render(<MemoryRouter><ul><AtalhoAoVivo consulta="a" onIr={() => {}} /></ul></MemoryRouter>);
  expect(screen.queryByRole("link")).toBeNull();
});

it("número de conta leva direto para a conta, sem passar pela busca", () => {
  render(<MemoryRouter><ul><AtalhoAoVivo consulta=" 123456789 " onIr={() => {}} /></ul></MemoryRouter>);
  expect(screen.getByRole("link", { name: "Buscar ao vivo: “123456789”" })).toHaveAttribute("href", "/ao-vivo/contas/123456789");
});
