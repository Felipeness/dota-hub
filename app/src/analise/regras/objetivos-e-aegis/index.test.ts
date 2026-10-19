import { readFileSync } from "node:fs";
import { montarDetalhe, tempoDaPartida } from "../../../live/partida/detalhe";
import { partidaFonte } from "../../../live/fonte/schemas";
import type { Contexto } from "../../modelo";
import { REGRAS } from "./index";

// Partida real 9046905170 (Medusa, pos1, derrota 16/9/14 em 50:46), reduzida ao necessário para esta família:
// objectives (só Roshan), o teamfight da luta final e os logs da própria Medusa. Ver docs/analise-partida/SPEC.md,
// critério de aceitação com a partida de referência.
const PARTIDA = JSON.parse(readFileSync(`${__dirname}/../../amostras/partida-9046905170.json`, "utf-8"));
const SEM_CONSTANTES = { herois: {}, itens: {}, idsDeHabilidades: {}, habilidades: {} };

function contextoDaAmostra(): Contexto {
  const partida = partidaFonte.parse(PARTIDA);
  const resposta = montarDetalhe({ partida, conta: 329255797, constantes: SEM_CONSTANTES, benchmarks: null, frescor: { buscadoEm: 0, vencido: false } });
  if (!resposta.ok) throw new Error(resposta.erro.codigo);
  return { detalhe: resposta.dados, pro: null, proDoHeroi: null, meuHeroi: resposta.dados.heroi, inimigos: resposta.dados.inimigos };
}

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

it("expõe a posição da morte quando ela cai dentro de um teamfight, e null quando não cai", () => {
  const achados = REGRAS.flatMap((regra) => regra.avaliar(contextoDaAmostra()));
  const [primeira, segunda] = achados;
  expect(primeira?.evidencias.posicaoNoMapa).toBeNull(); // 28:33 não está em nenhum teamfight na amostra reduzida
  expect(segunda?.evidencias.posicaoNoMapa).not.toBeNull(); // 49:51 cai dentro do teamfight 2972-3022 incluído na amostra
});
