import { act, renderHook, waitFor } from "@testing-library/react";
import type { ReactNode } from "react";
import { ok, type RespostaAoVivo } from "./erros";
import { ProvedorAoVivo } from "./ProvedorAoVivo";
import { servicosGravados } from "./teste/gravados";
import { useAoVivo } from "./useAoVivo";

const wrapper = ({ children }: { children: ReactNode }) => <ProvedorAoVivo servicos={servicosGravados()}>{children}</ProvedorAoVivo>;

it("carrega, mostra o resultado e carrega de novo quando pedem", async () => {
  const carregar = vi.fn(async () => ok(1));
  const { result } = renderHook(() => useAoVivo("chave", carregar), { wrapper });
  expect(result.current.estado).toBe("carregando");
  await waitFor(() => expect(result.current).toMatchObject({ estado: "ok", dados: 1 }));
  act(() => result.current.tentarDeNovo());
  await waitFor(() => expect(carregar).toHaveBeenCalledTimes(2));
});

it("sem chave fica parado e não carrega", () => {
  const carregar = vi.fn(async () => ok(1));
  const { result } = renderHook(() => useAoVivo(null, carregar), { wrapper });
  expect(result.current.estado).toBe("parado");
  expect(carregar).not.toHaveBeenCalled();
});

it("resposta da chave antiga não sobrescreve a da chave nova", async () => {
  let soltarAntiga: (valor: RespostaAoVivo<string>) => void = () => {};
  const antiga = new Promise<RespostaAoVivo<string>>((resolve) => { soltarAntiga = resolve; });
  const { result, rerender } = renderHook(
    ({ chave }) => useAoVivo(chave, async () => (chave === "a" ? antiga : ok("nova"))),
    { wrapper, initialProps: { chave: "a" } },
  );
  rerender({ chave: "b" });
  await waitFor(() => expect(result.current).toMatchObject({ estado: "ok", dados: "nova" }));
  await act(async () => { soltarAntiga(ok("antiga")); });
  expect(result.current).toMatchObject({ estado: "ok", dados: "nova" });
});

it("exceção inesperada vira erro interno e vai para o console", async () => {
  const noConsole = vi.spyOn(console, "error").mockImplementation(() => {});
  const { result } = renderHook(() => useAoVivo("x", async () => { throw new Error("bug"); }), { wrapper });
  await waitFor(() => expect(result.current).toMatchObject({ estado: "erro", erro: { codigo: "INTERNO" } }));
  expect(noConsole).toHaveBeenCalled();
  noConsole.mockRestore();
});
