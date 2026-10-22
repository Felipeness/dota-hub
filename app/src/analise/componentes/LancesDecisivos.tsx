// Topo da análise: "N lances decidiram o jogo", o player do minimapa, os cards dos lances, o que o jogador fez bem
// e o único hábito para treinar. Os textos vêm dos achados do motor (fato + horário), sem frase de efeito.
import { useEffect, useState } from "react";
import { objetivosSchema } from "../../data/schemas";
import { useData } from "../../data/useData";
import { tempoDaPartida, type DetalheDaPartida } from "../../live/partida/detalhe";
import type { LancesDecisivos as Escolha } from "../lancesDecisivos";
import { pedirTrajetos, type CodigoDeErro } from "../../replay/trajetos";
import { mapaDosTrajetos, tituloSemTempo, type TrajetosDoMapa } from "../replayDosLances";
import { useContagem } from "./movimento";
import { CardDoLance, ReplayDosLances } from "./ReplayDosLances";

type Props = Readonly<{ detalhe: DetalheDaPartida; escolha: Escolha }>;
type EstadoDoReplay =
  | Readonly<{ estado: "carregando" }>
  | Readonly<{ estado: "ok"; trajetos: TrajetosDoMapa }>
  | Readonly<{ estado: "erro"; erro: CodigoDeErro }>;

/** Lê o replay da partida (6 a 10 s na primeira vez, cache depois); erro cai no mapa só com dados do OpenDota. */
function useTrajetos(partida: string): EstadoDoReplay {
  const [estado, setEstado] = useState<EstadoDoReplay>({ estado: "carregando" });
  useEffect(() => {
    const controle = new AbortController();
    setEstado({ estado: "carregando" });
    void pedirTrajetos(partida, controle.signal).then((resultado) => {
      if (controle.signal.aborted) return;
      setEstado(resultado.ok ? { estado: "ok", trajetos: mapaDosTrajetos(resultado.trajetos) } : { estado: "erro", erro: resultado.erro });
    });
    return () => controle.abort();
  }, [partida]);
  return estado;
}

const AVISO_DO_ERRO: Readonly<Record<CodigoDeErro, string>> = {
  replay_indisponivel: "a Valve não guarda mais o replay desta partida",
  match_invalido: "número de partida inválido para o leitor de replay",
  tempo_esgotado: "o leitor de replay demorou demais",
  sem_conexao: "sem conexão com o leitor de replay",
  upstream: "o servidor de replays da Valve não respondeu",
  interno: "erro no leitor de replay",
  formato: "o replay veio num formato inesperado",
  muitas_analises: "muitas análises de replay, tente em alguns minutos",
};

export function LancesDecisivos({ detalhe, escolha }: Props) {
  const objetivos = useData("/data/objetivos.json", objetivosSchema);
  const replay = useTrajetos(detalhe.partida);
  const trajetos = replay.estado === "ok" ? replay.trajetos : null;
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
      <p className="lances-dica">Aperte Tocar: o mapa anda e para em cada lance.</p>
      <NumerosDaPartida detalhe={detalhe} trajetos={trajetos} />
      {replay.estado === "carregando" && <p role="status" className="replay-aviso">Lendo o replay da partida para desenhar os heróis (até ~10 s na primeira vez)…</p>}
      {replay.estado === "erro" && (
        <p role="status" className="replay-aviso">
          Sem trajetos dos heróis: {AVISO_DO_ERRO[replay.erro]}. O mapa mostra só o que o OpenDota registra.
        </p>
      )}
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
                <span>{tituloSemTempo(l.achado.titulo)}</span>
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

function NumerosDaPartida({ detalhe, trajetos }: { detalhe: DetalheDaPartida; trajetos: TrajetosDoMapa | null }) {
  const { panorama } = detalhe;
  const mortes = trajetos?.totais.mortes ?? panorama.jogadores.reduce((soma, j) => soma + j.mortes.length, 0);
  return (
    <dl className="lances-numeros">
      <Numero rotulo="heróis" valor={panorama.jogadores.length} />
      <Numero rotulo="segundos de partida" valor={detalhe.duracaoS} />
      <Numero rotulo="wards" valor={trajetos?.totais.wards ?? panorama.wards.length} />
      {trajetos && <Numero rotulo="smokes" valor={trajetos.totais.smokes} />}
      <Numero rotulo="mortes" valor={mortes} />
    </dl>
  );
}

function Numero({ rotulo, valor }: { rotulo: string; valor: number }) {
  const atual = useContagem(valor);
  return <div><dt>{rotulo}</dt><dd>{atual.toLocaleString("pt-BR")}</dd></div>;
}
