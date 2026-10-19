import type { Consultar } from "../live/consulta";
import { erroAoVivo, falha, ok } from "../live/erros";
import { carregarPartidaParaAnalise, pedirAnaliseDaPartida } from "./carregar";

const PARTIDA = "9046905170";
const CONTA = 329255797;
const SEM_ESPERA = async () => {};

/** Consultar falso: cada chamada a /matches/:id devolve a próxima entrada de `respostasDaPartida`, na ordem. */
function consultarFalso(respostasDaPartida: readonly boolean[]): Consultar {
  let chamada = 0;
  return (async (pedido: { caminho: string }) => {
    // detalheDaPartida também busca constantes (heróis, itens, benchmarks); vazio basta, a regra não usa esses dados.
    // Benchmarks é tolerado como ausente (a referência de mediana vira null, sem quebrar o resto do detalhe).
    if (pedido.caminho.startsWith("/benchmarks")) return falha(erroAoVivo("NAO_ENCONTRADO"));
    if (!pedido.caminho.startsWith(`/matches/${PARTIDA}`)) return ok({ valor: {}, frescor: { buscadoEm: 0, vencido: false } });
    const analisada = respostasDaPartida[Math.min(chamada, respostasDaPartida.length - 1)];
    chamada += 1;
    return ok({
      valor: { match_id: Number(PARTIDA), duration: 100, radiant_win: true, objectives: [], teamfights: [],
        radiant_gold_adv: [], radiant_xp_adv: [], picks_bans: [],
        players: [{ account_id: CONTA, player_slot: 0, hero_id: 94, lane_role: null, lane_efficiency_pct: null,
          kills: 0, deaths: 0, assists: 0, gold_t: analisada ? [0] : [], xp_t: [], lh_t: [], networth_t: [],
          purchase_log: [], kills_log: [], deaths_log: [], runes_log: [], obs_log: [], sen_log: [], buyback_log: [],
          ability_upgrades_arr: [], neutral_item_history: [] }] },
      frescor: { buscadoEm: 0, vencido: false },
    });
  }) as Consultar;
}

it("devolve direto quando a partida já está analisada, sem pedir análise nem esperar", async () => {
  const postar = vi.fn();
  const resposta = await carregarPartidaParaAnalise(consultarFalso([true]), PARTIDA, CONTA, { postar, esperar: SEM_ESPERA });
  expect(resposta.ok && resposta.dados.analisada).toBe(true);
  expect(postar).not.toHaveBeenCalled();
});

it("pede a análise e faz polling até a partida ficar analisada", async () => {
  const postar = vi.fn(async () => new Response(JSON.stringify({ job: { jobId: 1 } })));
  const tentativas: number[] = [];
  const resposta = await carregarPartidaParaAnalise(
    consultarFalso([false, false, true]), PARTIDA, CONTA, { postar, esperar: SEM_ESPERA, aoTentarDeNovo: (t) => tentativas.push(t) },
  );
  expect(postar).toHaveBeenCalledWith(expect.stringContaining(`/request/${PARTIDA}`), expect.objectContaining({ method: "POST" }));
  expect(resposta.ok && resposta.dados.analisada).toBe(true);
  expect(tentativas).toEqual([1, 2]);
});

it("devolve a partida sem análise completa quando o polling esgota, em vez de travar", async () => {
  const postar = vi.fn(async () => new Response(JSON.stringify({ job: { jobId: 1 } })));
  const resposta = await carregarPartidaParaAnalise(consultarFalso([false]), PARTIDA, CONTA, { postar, esperar: SEM_ESPERA });
  expect(resposta.ok && resposta.dados.analisada).toBe(false);
});

it("pedirAnaliseDaPartida devolve false sem lançar quando o POST falha", async () => {
  const postar = vi.fn(async () => { throw new Error("rede fora"); });
  await expect(pedirAnaliseDaPartida(PARTIDA, postar)).resolves.toBe(false);
});
