import { act, fireEvent, render, screen } from "@testing-library/react";
import { AvisoDaFonte } from "./AvisoDaFonte";
import { ErroAoVivoView } from "./ErroAoVivo";
import { FrescorView } from "./Frescor";
import { ProvedorAoVivo } from "./ProvedorAoVivo";
import { servicosGravados } from "./teste/gravados";

const MEIO_DIA = Date.UTC(2026, 9, 6, 12, 0, 0);
afterEach(() => { vi.useRealTimers(); });

it("aviso da fonte aparece na pausa por minuto, conta os segundos e some no fim", () => {
  vi.useFakeTimers({ now: MEIO_DIA });
  const servicos = servicosGravados();
  render(<ProvedorAoVivo servicos={servicos}><AvisoDaFonte /></ProvedorAoVivo>);
  expect(screen.queryByRole("status")).toBeNull();
  act(() => servicos.fila.limitou("minuto"));
  expect(screen.getByRole("status")).toHaveTextContent("A fonte pediu para esperar. Tentando de novo em 5 s.");
  act(() => { vi.advanceTimersByTime(2_000); });
  expect(screen.getByRole("status")).toHaveTextContent("Tentando de novo em 3 s.");
  act(() => { vi.advanceTimersByTime(3_000); });
  expect(screen.queryByRole("status")).toBeNull();
});

it("aviso da fonte no limite do dia fala em horas", () => {
  vi.useFakeTimers({ now: MEIO_DIA });
  const servicos = servicosGravados();
  render(<ProvedorAoVivo servicos={servicos}><AvisoDaFonte /></ProvedorAoVivo>);
  act(() => servicos.fila.limitou("dia"));
  expect(screen.getByRole("status")).toHaveTextContent("A fonte atingiu o limite do dia. A busca ao vivo volta em cerca de 12 h.");
});

it("erro com espera conta os segundos e só libera o botão no fim", () => {
  vi.useFakeTimers({ now: MEIO_DIA });
  const onTentar = vi.fn();
  render(<ErroAoVivoView erro={{ codigo: "LIMITE_FONTE", tenteEmS: 2 }} onTentar={onTentar} />);
  expect(screen.getByRole("alert")).toHaveTextContent("Volta a funcionar em 2 segundos.");
  expect(screen.getByRole("button", { name: "Tentar de novo" })).toBeDisabled();
  act(() => { vi.advanceTimersByTime(2_000); });
  expect(screen.getByRole("button", { name: "Tentar de novo" })).toBeEnabled();
  fireEvent.click(screen.getByRole("button", { name: "Tentar de novo" }));
  expect(onTentar).toHaveBeenCalledTimes(1);
});

it("erro sem espera libera o botão na hora e usa o contexto", () => {
  render(<ErroAoVivoView erro={{ codigo: "NAO_ENCONTRADO", tenteEmS: null }} contexto="time" onTentar={() => {}} />);
  expect(screen.getByRole("alert")).toHaveTextContent("Time não encontrado.");
  expect(screen.getByRole("button", { name: "Tentar de novo" })).toBeEnabled();
});

it("dado novo mostra a hora da busca", () => {
  render(<FrescorView frescor={{ buscadoEm: new Date(2026, 9, 6, 14, 5).getTime(), vencido: false }} onAtualizar={() => {}} />);
  expect(screen.getByText("Dados de 14:05.")).toBeInTheDocument();
  expect(screen.queryByRole("button", { name: "Atualizar" })).toBeNull();
});

it("dado vencido avisa que a fonte não respondeu e oferece atualizar", () => {
  const onAtualizar = vi.fn();
  render(<FrescorView frescor={{ buscadoEm: new Date(2026, 9, 6, 14, 5).getTime(), vencido: true }} onAtualizar={onAtualizar} />);
  expect(screen.getByRole("status")).toHaveTextContent("A fonte não respondeu; mostrando dados de 14:05.");
  fireEvent.click(screen.getByRole("button", { name: "Atualizar" }));
  expect(onAtualizar).toHaveBeenCalledTimes(1);
});
