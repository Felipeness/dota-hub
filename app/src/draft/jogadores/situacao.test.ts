import { describe, expect, it } from "vitest";
import { erroAoVivo } from "../../live/erros";
import type { Historico } from "../modeloDeJogador";
import type { EstadoDaBusca } from "./buscas";
import { situacaoDaAnalise } from "./situacao";

const URL_COMPLETA = { aliados: [1, 2, 3, 4, 5], inimigos: [6, 7, 8, 9, 10], bans: [] };
const historico = (conta: number): Historico => ({ conta, partidas: [{ heroi: 1, venceu: true, inicio: 1, deLiga: false }] });
const pronto = (conta: number): EstadoDaBusca<Historico> => ({ estado: "ok", dados: historico(conta) });
const estados = (porConta: Record<number, EstadoDaBusca<Historico>>) => new Map(Object.entries(porConta).map(([conta, estado]) => [Number(conta), estado]));
const todosProntos = Object.fromEntries([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((c) => [c, pronto(c)]));

describe("situacaoDaAnalise", () => {
  it("aguarda enquanto a URL não tem as 10 contas", () => {
    expect(situacaoDaAnalise({ aliados: [1, 2], inimigos: [], bans: [] }, estados({}))).toEqual({ fase: "aguardando" });
  });

  it.each([
    { nome: "nenhuma chegou", porConta: {}, prontas: 0 },
    { nome: "7 chegaram", porConta: Object.fromEntries([1, 2, 3, 4, 5, 6, 7].map((c) => [c, pronto(c)])), prontas: 7 },
    { nome: "falta só a última", porConta: { ...Object.fromEntries([1, 2, 3, 4, 5, 6, 7, 8, 9].map((c) => [c, pronto(c)])), 10: { estado: "carregando" as const } }, prontas: 9 },
  ])("carregando: $nome", ({ porConta, prontas }) => {
    expect(situacaoDaAnalise(URL_COMPLETA, estados(porConta))).toEqual({ fase: "carregando", prontas, total: 10 });
  });

  it("fica pronta sem falhas quando as 10 chegam", () => {
    const situacao = situacaoDaAnalise(URL_COMPLETA, estados(todosProntos));
    expect(situacao.fase).toBe("pronta");
    if (situacao.fase === "pronta") {
      expect(situacao.falhas).toEqual([]);
      expect(situacao.aliados.map((h) => h.conta)).toEqual([1, 2, 3, 4, 5]);
      expect(situacao.inimigos.map((h) => h.conta)).toEqual([6, 7, 8, 9, 10]);
    }
  });

  it("erro parcial: a conta que falhou entra vazia e aparece nas falhas, as outras seguem", () => {
    const erro = erroAoVivo("FONTE_INDISPONIVEL");
    const situacao = situacaoDaAnalise(URL_COMPLETA, estados({ ...todosProntos, 7: { estado: "erro", erro } }));
    expect(situacao.fase).toBe("pronta");
    if (situacao.fase === "pronta") {
      expect(situacao.falhas).toEqual([{ conta: 7, erro }]);
      expect(situacao.inimigos[1]).toEqual({ conta: 7, partidas: [] });
      expect(situacao.inimigos[0]?.partidas).toHaveLength(1);
    }
  });
});
