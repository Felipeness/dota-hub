import { render, screen, within } from "@testing-library/react";
import { detalheDaAmostraCompleta } from "../amostras/amostraCompleta";
import { contextoDaAmostraDaBuild } from "../amostras/amostraDaBuild";
import { REGISTRO_DE_REGRAS } from "../registro";
import { resumoGeral } from "../resumoGeral";
import { avaliarSuaBuild } from "../suaBuild";
import { ResumoGeral } from "./ResumoGeral";
import { SuaBuildView } from "./SuaBuild";

it("mostra as duas linhas no mesmo eixo, os vereditos e as duas sequências alinhadas", () => {
  render(<SuaBuildView build={avaliarSuaBuild(contextoDaAmostraDaBuild())} heroi="Medusa" />);
  const secao = screen.getByRole("region", { name: "Sua build" });
  const minhas = within(secao).getByRole("list", { name: "Suas compras" });
  expect(within(minhas).getByAltText("Butterfly").closest("li")).toHaveClass("sb-tl-atrasado");
  expect(within(minhas).getByAltText("Butterfly").closest("li")).toHaveTextContent("+14 min");
  expect(within(minhas).getByAltText("Linken's Sphere").closest("li")).toHaveClass("sb-tl-rara");
  expect(within(secao).getByRole("list", { name: "Build dos pros contra esse draft" })).toHaveTextContent("63%");
  const vereditos = within(secao).getByRole("list", { name: "O que pesou na build" });
  expect(within(vereditos).getAllByRole("listitem").length).toBeLessThanOrEqual(4);
  expect(vereditos).toHaveTextContent("faltou puxar antes de Eye of Skadi");
  const sua = within(secao).getByRole("list", { name: "Sua sequência" });
  expect(within(sua).getAllByRole("listitem")[0]).toHaveTextContent("Power Treads");
  expect(sua).toHaveTextContent("pros: 3º");
  expect(within(secao).getByRole("list", { name: "Sequência dos pros contra esse draft" })).toHaveTextContent(/Power Treads.*Manta Style.*Butterfly/);
});

it("sem amostra de pro contra o draft, explica em vez de comparar", () => {
  render(<SuaBuildView build={null} heroi="Medusa" />);
  expect(screen.getByRole("region", { name: "Sua build" })).toHaveTextContent("Poucas partidas pro de Medusa contra este draft");
});

it("o resumo geral junta o veredito da build e o erro mais pesado de mortes e de objetivos da partida real", () => {
  // Panorama tem lutas, Roshans e torres; o purchase_log da Medusa vem da amostra de build (a do panorama não tem).
  const daBuild = contextoDaAmostraDaBuild();
  const ctx = { ...daBuild, detalhe: { ...detalheDaAmostraCompleta(), compras: daBuild.detalhe.compras } };
  const porRegra = REGISTRO_DE_REGRAS.map((regra) => ({ regra, achados: regra.avaliar(ctx) }));
  render(<ResumoGeral linhas={resumoGeral(porRegra, avaliarSuaBuild(ctx)?.vereditos[0] ?? null)} />);
  const itens = within(screen.getByRole("region", { name: "O que você devia ter feito no geral" })).getAllByRole("listitem");
  expect(itens.map((i) => i.textContent)).toEqual([
    "BuildButterfly saiu 36:20, os pros fazem aos 22 (63% das partidas): faltou puxar antes de Eye of Skadi.",
    "Mortes e posição4 mortes entre 8 e 20 minutos",
    expect.stringMatching(/^Objetivos e visão/),
  ]);
});
