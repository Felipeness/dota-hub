import { render, screen } from "@testing-library/react";
import App from "./App";

it("mostra o nome do app", () => {
  render(<App />);
  expect(screen.getByText("Dota Hub")).toBeInTheDocument();
});
