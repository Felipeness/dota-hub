import { hasWebGL } from "./webgl";

it("testa o WebGL uma vez só e libera o contexto de teste", () => {
  const loseContext = vi.fn();
  const getContext = vi.fn(() => ({ getExtension: () => ({ loseContext }) }));
  const createElement = vi
    .spyOn(document, "createElement")
    .mockReturnValue({ getContext } as unknown as HTMLCanvasElement);

  expect(hasWebGL()).toBe(true);
  expect(hasWebGL()).toBe(true);

  expect(createElement).toHaveBeenCalledTimes(1);
  expect(loseContext).toHaveBeenCalledTimes(1);
  createElement.mockRestore();
});
