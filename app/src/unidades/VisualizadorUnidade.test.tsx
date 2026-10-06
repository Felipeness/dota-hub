import { fireEvent, render, screen } from "@testing-library/react";
import { VisualizadorUnidade } from "./VisualizadorUnidade";

const webgl = vi.hoisted(() => ({ hasWebGL: vi.fn(() => true) }));
vi.mock("../map/webgl", () => webgl);
const cena = vi.hoisted(() => ({ falhar: false }));
vi.mock("./Cena3D", () => ({
  Cena3D: ({ url }: { url: string }) => {
    if (cena.falhar) throw new Error("rede caiu");
    return `cena ${url}`;
  },
}));

afterEach(() => {
  webgl.hasWebGL.mockReturnValue(true);
  cena.falhar = false;
  vi.restoreAllMocks();
});

it("mostra a cena 3D quando o aparelho tem 3D", async () => {
  render(<VisualizadorUnidade modelo="roshan" nome="Roshan" />);
  expect(await screen.findByText("cena /data/modelos/roshan.glb")).toBeInTheDocument();
  expect(screen.getByRole("figure", { name: "Modelo 3D de Roshan, girando" })).toBeInTheDocument();
});

it("sem 3D mostra a imagem parada", () => {
  webgl.hasWebGL.mockReturnValue(false);
  render(<VisualizadorUnidade modelo="roshan" nome="Roshan" />);
  expect(screen.getByRole("img", { name: "Imagem do modelo de Roshan" })).toHaveAttribute("src", "/data/posters/roshan.jpg");
});

it("modelo que falha avisa e tenta de novo com outra url", async () => {
  vi.spyOn(console, "error").mockImplementation(() => {});
  cena.falhar = true;
  render(<VisualizadorUnidade modelo="roshan" nome="Roshan" />);
  expect(await screen.findByText("Modelo indisponível.")).toBeInTheDocument();
  cena.falhar = false;
  fireEvent.click(screen.getByRole("button", { name: "Tentar de novo" }));
  expect(await screen.findByText("cena /data/modelos/roshan.glb?tentativa=1")).toBeInTheDocument();
});

it("unidade sem modelo avisa sem botão de tentar", () => {
  render(<VisualizadorUnidade modelo={null} nome="Nova unidade" />);
  expect(screen.getByText("Modelo indisponível.")).toBeInTheDocument();
  expect(screen.queryByRole("button")).toBeNull();
});
