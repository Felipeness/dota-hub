// Regra: buyback gasto bem na janela em que o Roshan do time inimigo volta a ficar disponível. Ver SPEC
// §"Famílias de regras" > objetivos-e-aegis.
import { tempoDaPartida } from "../../../live/partida/detalhe";
import type { Achado, Contexto, Regra } from "../../modelo";
import { FONTE_JANELA_RESPAWN, janelaDeRespawn } from "./janela";

/** Quanto tempo depois do buyback ainda conta a morte seguinte como "sem buyback pronto" (o custo sobe com o tempo e não recarrega na hora). */
const JANELA_DE_RASTREIO_DA_PROXIMA_MORTE_S = 10 * 60;

function buybackNaJanelaDoRoshan(ctx: Contexto): Achado[] {
  const roshansInimigos = ctx.detalhe.eventos.filter((e) => e.tipo === "roshan" && e.texto.includes("time inimigo"));
  const buybacks = ctx.detalhe.eventos.filter((e) => e.tipo === "buyback");
  const mortes = ctx.detalhe.eventos.filter((e) => e.tipo === "morte");
  return buybacks.flatMap((buyback): Achado[] => {
    const roshanQueAbriuAJanela = roshansInimigos.find((r) => {
      const janela = janelaDeRespawn(r.t);
      return buyback.t >= janela.inicio && buyback.t <= janela.fim;
    });
    if (!roshanQueAbriuAJanela) return [];
    const janela = janelaDeRespawn(roshanQueAbriuAJanela.t);
    const proximaMorte = mortes.find((m) => m.t > buyback.t && m.t - buyback.t <= JANELA_DE_RASTREIO_DA_PROXIMA_MORTE_S);
    return [{
      id: `buyback-janela-roshan-${buyback.t}`,
      tipo: "erro",
      minuto: buyback.t / 60,
      titulo: `Buyback gasto ${tempoDaPartida(buyback.t)}, bem na janela em que o Roshan do time inimigo voltava a ficar disponível`,
      oQueAconteceu:
        `Comprou o buyback em ${tempoDaPartida(buyback.t)}, entre ${tempoDaPartida(janela.inicio)} e ${tempoDaPartida(janela.fim)}, ` +
        `a janela de respawn depois do Roshan que o time inimigo pegou em ${tempoDaPartida(roshanQueAbriuAJanela.t)}` +
        (proximaMorte ? `; morreu de novo em ${tempoDaPartida(proximaMorte.t)}, sem outro buyback pronto a tempo.` : "."),
      oQueFazer:
        "Guardar o buyback para a luta do Roshan (ou para defender o high ground) em vez de usá-lo antes da janela se abrir; " +
        "o custo sobe conforme o jogo avança e ele não recarrega na hora.",
      porque:
        "O Roshan volta entre 8 e 11 minutos depois de morto; gastar o buyback bem quando essa janela abre deixa o time sem " +
        "esse recurso justamente na luta em que ele mais pesa (Aegis + ouro em bloco em disputa).",
      fontes: [FONTE_JANELA_RESPAWN, "buyback_log do OpenDota"],
      peso: "pesou",
      evidencias: { numeros: { buyback: buyback.t, janelaInicio: janela.inicio, janelaFim: janela.fim } },
    }];
  });
}

export const REGRAS: readonly Regra[] = [
  { id: "buyback-na-janela-do-roshan", familia: "objetivos-e-aegis", avaliar: buybackNaJanelaDoRoshan },
];
