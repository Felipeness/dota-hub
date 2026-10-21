// Topo da análise: "N lances decidiram o jogo", o player do minimapa, os cards dos lances, o que o jogador fez bem
// e o único hábito para treinar. Os textos vêm dos achados do motor (fato + horário), sem frase de efeito.
import { useState } from "react";
import { objetivosSchema } from "../../data/schemas";
import { useData } from "../../data/useData";
import { tempoDaPartida, type DetalheDaPartida } from "../../live/partida/detalhe";
import type { LancesDecisivos as Escolha } from "../lancesDecisivos";
import type { TrajetosDoMapa } from "../replayDosLances";
import { useContagem } from "./movimento";
import { CardDoLance, ReplayDosLances } from "./ReplayDosLances";

type Props = Readonly<{ detalhe: DetalheDaPartida; escolha: Escolha; trajetos?: TrajetosDoMapa | null }>;

export function LancesDecisivos({ detalhe, escolha, trajetos = null }: Props) {
  const objetivos = useData("/data/objetivos.json", objetivosSchema);
  const [pedido, setPedido] = useState<{ t: number; n: number } | null>(null);
  const verNoMapa = (t: number) => {
    setPedido((anterior) => ({ t, n: (anterior?.n ?? 0) + 1 }));
    document.getElementById("replay-dos-lances")?.scrollIntoView({ block: "start" });
  };
  const { lances, fezBem, treino } = escolha;
  if (lances.length === 0) return null;
  return (
    <section className="lances" aria-labelledby="titulo-lances">
      <h2 id="titulo-lances">{lances.length === 1 ? "1 lance decidiu o jogo" : `${lances.length} lances decidiram o jogo`}</h2>
      <NumerosDaPartida detalhe={detalhe} />
      <div id="replay-dos-lances">
        <ReplayDosLances detalhe={detalhe} lances={lances} objetivos={objetivos.estado === "ok" ? objetivos.dados : []} trajetos={trajetos} pedido={pedido} />
      </div>
      <details className="lances-todos">
        <summary>Ler os {lances.length} lances em sequência</summary>
        <ol className="lances-lista">
          {lances.map((l) => (
            <li key={l.t}>
              <CardDoLance lance={l} progressivo={false} />
              <button type="button" className="link" onClick={() => verNoMapa(l.t)}>Ver no mapa ({tempoDaPartida(l.t)})</button>
            </li>
          ))}
        </ol>
      </details>
      {fezBem.length > 0 && (
        <div className="lances-bem">
          <h3>E o que você fez bem</h3>
          <ul>
            {fezBem.map((l) => (
              <li key={l.t}>
                <button type="button" className="link lances-tempo" onClick={() => verNoMapa(l.t)}>{tempoDaPartida(l.t)}</button>
                <span>{l.achado.titulo}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      {treino && (
        <div className="lances-treino">
          <h3>O que treinar na próxima</h3>
          <p className="lances-treino-titulo">{treino.titulo}</p>
          <p>{treino.texto}</p>
          <button type="button" className="link" onClick={() => verNoMapa(treino.de)}>
            Ver {tempoDaPartida(treino.de)} a {tempoDaPartida(treino.ate)} no mapa
          </button>
        </div>
      )}
    </section>
  );
}

function NumerosDaPartida({ detalhe }: { detalhe: DetalheDaPartida }) {
  const { panorama } = detalhe;
  const mortes = panorama.jogadores.reduce((soma, j) => soma + j.mortes.length, 0);
  return (
    <dl className="lances-numeros">
      <Numero rotulo="heróis" valor={panorama.jogadores.length} />
      <Numero rotulo="segundos de partida" valor={detalhe.duracaoS} />
      <Numero rotulo="wards" valor={panorama.wards.length} />
      <Numero rotulo="mortes" valor={mortes} />
    </dl>
  );
}

function Numero({ rotulo, valor }: { rotulo: string; valor: number }) {
  const atual = useContagem(valor);
  return <div><dt>{rotulo}</dt><dd>{atual.toLocaleString("pt-BR")}</dd></div>;
}
