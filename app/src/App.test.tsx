import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Shell } from "./layout/Shell";

it("mostra o nome do app", () => {
  vi.stubGlobal("fetch", vi.fn(() => new Promise(() => {})));
  render(<MemoryRouter><Shell /></MemoryRouter>);
  expect(screen.getByText("Dota Hub")).toBeInTheDocument();
  vi.unstubAllGlobals();
});
