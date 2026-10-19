import { tempoDaPartida } from "../../../live/partida/detalhe";
import type { Contexto } from "../../modelo";
import { contextoDaAmostra } from "./amostraDeTeste";
import { REGRAS } from "./aegisAtiva";

it("acusa as duas mortes da Medusa dentro da janela de Aegis do time inimigo (28:33 e 49:51, ref. Dotaflix)", () => {
  const achados = REGRAS.flatMap((regra) => regra.avaliar(contextoDaAmostra()));
  const minutos = achados.map((a) => tempoDaPartida(Math.round((a.minuto ?? 0) * 60)));
  expect(minutos).toEqual(["28:33", "49:51"]);
  expect(achados.every((a) => a.tipo === "erro" && a.peso === "pesou_muito")).toBe(true);
});

it("não acusa a morte de 31:38: fora da janela de 5 min do Roshan anterior (315 s, 15 s além do limite)", () => {
  const achados = REGRAS.flatMap((regra) => regra.avaliar(contextoDaAmostra()));
  expect(achados.some((a) => a.minuto !== null && Math.abs(a.minuto - 31.6) < 0.1)).toBe(false);
});

it("não acusa a morte quando o portador já morreu com a Aegis antes (ela foi consumida, não está mais ativa)", () => {
  const ctx = contextoDaAmostra();
  const ctxComPortadorMorto: Contexto = {
    ...ctx,
    detalhe: {
      ...ctx.detalhe,
      eventos: [
        ...ctx.detalhe.eventos,
        { t: 1583, tipo: "roshan", texto: "Roshan pelo time inimigo", ponto: null },
        { t: 1650, tipo: "aegis-consumida", texto: "Aegis consumida: Ursa morreu com ela", ponto: null },
        { t: 1700, tipo: "morte", texto: "Morte para Doom", ponto: null },
      ],
    },
  };
  const achados = REGRAS.flatMap((regra) => regra.avaliar(ctxComPortadorMorto));
  expect(achados.some((a) => a.minuto !== null && Math.abs(a.minuto - 1700 / 60) < 0.01)).toBe(false);
});

it("expõe a posição da morte quando ela cai dentro de um teamfight, e null quando não cai", () => {
  const achados = REGRAS.flatMap((regra) => regra.avaliar(contextoDaAmostra()));
  const [primeira, segunda] = achados;
  expect(primeira?.evidencias.posicaoNoMapa).toBeNull(); // 28:33 não está em nenhum teamfight na amostra reduzida
  expect(segunda?.evidencias.posicaoNoMapa).not.toBeNull(); // 49:51 cai dentro do teamfight 2972-3022 incluído na amostra
});
