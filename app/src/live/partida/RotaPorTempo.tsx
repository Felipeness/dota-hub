import { useState } from "react";
import { objetivosSchema } from "../../data/schemas";
import { useData } from "../../data/useData";
import { MapView } from "../../map/MapView";
import { nomeDaLane } from "../formato";
import { tempoDaPartida, type DetalheDaPartida } from "./detalhe";
import { desenhosDaRota, estaNaJanela, eventosDaJanela, manchasDaJanela, type EventoNumerado, type IdJanela } from "./janelas";
import { comPosicaoDoReplay, eventosDoReplay, geracaoLocalDisponivel, gerarReplayLocal, trilhaDoJogador, urlDoReplay } from "./replay";
import { replayDaPartidaSchema } from "./replaySchema";

type Props = Readonly<{ detalhe: DetalheDaPartida; janela: IdJanela }>;
type Geracao = { estado: "parada" } | { estado: "gerando" } | { estado: "erro"; erro: string };

export function RotaPorTempo({ detalhe, janela }: Props) {
  const [versao, setVersao] = useState(0);
  const [selecionado, setSelecionado] = useState<string | null>(null);
  const replay = useData(`${urlDoReplay(detalhe.partida)}?v=${versao}`, replayDaPartidaSchema);
  const objetivos = useData("/data/objetivos.json", objetivosSchema);
  const temReplay = replay.estado === "ok";
  const trilha = temReplay ? trilhaDoJogador(replay.dados, detalhe.slot) : [];
  const todos = temReplay
    ? [...comPosicaoDoReplay(detalhe.eventos, trilha), ...eventosDoReplay(replay.dados, detalhe.slot)]
    : detalhe.eventos;
  const eventos = eventosDaJanela(todos, janela);
  const camps = todos.filter((e) => e.tipo === "camp");
  return (
    <section className="partida-rota" aria-labelledby="titulo-rota">
      <h2 id="titulo-rota">Rota por tempo</h2>
      <AvisoDaRota temReplay={temReplay} detalhe={detalhe} />
      <div className="partida-rota-grade">
        <MapView
          forcarPlano
          objetivos={objetivos.estado === "ok" ? objetivos.dados : []}
          manchas={temReplay ? [] : manchasDaJanela(detalhe.manchasDaLane, janela)}
          desenhos={desenhosDaRota({ eventos, camps, trilha, janela })}
          selecionado={selecionado}
          onSelecionar={setSelecionado}
        />
        <ListaDeEventos eventos={eventos} campsNaJanela={camps.filter((c) => estaNaJanela(janela, c.t)).length}
          selecionado={selecionado} onSelecionar={setSelecionado} />
      </div>
      {!temReplay && geracaoLocalDisponivel() && <GerarReplay partida={detalhe.partida} onGerado={() => setVersao((v) => v + 1)} />}
    </section>
  );
}

function AvisoDaRota({ temReplay, detalhe }: { temReplay: boolean; detalhe: DetalheDaPartida }) {
  if (temReplay) {
    return (
      <p className="partida-aviso">
        Rota real, lida do replay: posição a cada 5 s, colorida pela janela de tempo, com o minuto marcado a cada 2 min.
        Camps limpos são os quadrados pequenos; abates, mortes e runas ficam no ponto onde o jogador estava.
      </p>
    );
  }
  return (
    <p className="partida-aviso">
      <strong>Aproximado.</strong> O OpenDota não guarda a posição contínua. A mancha é a posição da fase de lane (0 a ~10 min,
      lane pelo mapa: {nomeDaLane(detalhe.laneDoMapa)}); wards e mortes em lutas têm posição registrada; abates, runas, itens e
      buybacks só têm o tempo e aparecem na lista sem pino. A rota completa minuto a minuto só vem do replay.
    </p>
  );
}

type ListaProps = Readonly<{ eventos: readonly EventoNumerado[]; campsNaJanela: number; selecionado: string | null; onSelecionar: (id: string) => void }>;

function ListaDeEventos({ eventos, campsNaJanela, selecionado, onSelecionar }: ListaProps) {
  if (eventos.length === 0) return <p className="partida-vazio">Nenhum evento registrado nesta janela.</p>;
  return (
    <div className="partida-eventos">
      <ol aria-label="Eventos da janela">
        {eventos.map((e) => {
          const id = `evento-${e.n}`;
          return (
            <li key={id} className={`evento-${e.tipo}`} aria-current={selecionado === id ? "true" : undefined}>
              <button type="button" className="link" onClick={() => onSelecionar(id)} disabled={!e.ponto}>
                <span className="evento-numero">{e.n}</span>
                <span className="evento-tempo">{tempoDaPartida(e.t)}</span>
                <span className="evento-texto">{e.texto}</span>
                {!e.ponto && <span className="evento-sem-ponto">sem posição</span>}
              </button>
            </li>
          );
        })}
      </ol>
      {campsNaJanela > 0 && <p className="partida-vazio">{campsNaJanela} camps limpos nesta janela (quadrados pequenos no mapa).</p>}
    </div>
  );
}

function GerarReplay({ partida, onGerado }: { partida: string; onGerado: () => void }) {
  const [geracao, setGeracao] = useState<Geracao>({ estado: "parada" });
  const gerar = async () => {
    setGeracao({ estado: "gerando" });
    const resultado = await gerarReplayLocal(partida);
    if (!resultado.ok) return setGeracao({ estado: "erro", erro: resultado.erro });
    setGeracao({ estado: "parada" });
    onGerado();
  };
  return (
    <div className="partida-gerar">
      <button type="button" onClick={() => void gerar()} disabled={geracao.estado === "gerando"}>
        {geracao.estado === "gerando" ? "Baixando e lendo o replay…" : "Gerar rota completa pelo replay (local)"}
      </button>
      <p className="partida-vazio">
        Só no modo dev: baixa o replay da Valve (dezenas de MB), lê com o leitor local e grava a rota em public/data/partidas.
      </p>
      {geracao.estado === "erro" && <p role="alert">Não deu para gerar a rota: {geracao.erro}.</p>}
    </div>
  );
}
