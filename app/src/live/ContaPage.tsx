import { Link, useParams, useSearchParams } from "react-router";
import { lerId, resumoDaConta } from "./contas";
import { erroAoVivo, mensagemDoErro } from "./erros";
import { ErroAoVivoView } from "./ErroAoVivo";
import { dataCurta, minutos, nomeDaLane, porcentagem, textoDoResultado } from "./formato";
import { FrescorView } from "./Frescor";
import { RotaDaPartida } from "./RotaDaPartida";
import type { PartidaDaConta } from "./tipos";
import { useAoVivo } from "./useAoVivo";

export function ContaPage() {
  const { id = "" } = useParams();
  const conta = lerId(id);
  if (conta === null) return <p role="alert">{mensagemDoErro(erroAoVivo("ENTRADA_INVALIDA"))}</p>;
  return <ContaAoVivo id={conta} />;
}

function ContaAoVivo({ id }: { id: number }) {
  const [params, setParams] = useSearchParams();
  const partidaAberta = params.get("partida");
  const conta = useAoVivo(`conta:${id}`, (consultar) => resumoDaConta(consultar, id));
  if (conta.estado === "parado" || conta.estado === "carregando") return <p>Buscando a conta no OpenDota…</p>;
  if (conta.estado === "erro") return <ErroAoVivoView erro={conta.erro} contexto="conta" onTentar={conta.tentarDeNovo} />;
  const { dados } = conta;
  const alternar = (partida: string) => setParams(partidaAberta === partida ? {} : { partida });
  return (
    <article className="conta-ao-vivo">
      <header>
        <h1>{dados.conta.nome}</h1>
        {dados.conta.medalha && <p>Medalha: {dados.conta.medalha}</p>}
        <FrescorView frescor={dados.frescor} onAtualizar={conta.tentarDeNovo} />
      </header>
      <dl className="destaques">
        <div><dt>Partidas</dt><dd>{dados.totais.partidas.toLocaleString("pt-BR")}</dd></div>
        <div><dt>Vitórias</dt><dd>{porcentagem(dados.totais.vitorias, dados.totais.partidas)}</dd></div>
        <div><dt>Últimas {dados.ultimas.partidas}</dt><dd>{porcentagem(dados.ultimas.vitorias, dados.ultimas.partidas)}</dd></div>
      </dl>
      <h2>Heróis mais jogados</h2>
      <table>
        <thead><tr><th>Herói</th><th>Partidas</th><th>Vitórias</th></tr></thead>
        <tbody>
          {dados.herois.map((h) => (
            <tr key={h.heroi}><td>{h.heroi}</td><td>{h.partidas}</td><td>{porcentagem(h.vitorias, h.partidas)}</td></tr>
          ))}
        </tbody>
      </table>
      <h2>Últimas partidas</h2>
      {dados.temDadosPublicos
        ? <ListaDePartidas partidas={dados.partidas} aberta={partidaAberta} conta={dados.conta.id} onAlternar={alternar} />
        : <p role="status">Esta conta não mostra partidas públicas. No Dota, ative "Expor dados públicos de partidas".</p>}
      <p><Link to="/ao-vivo">Nova busca</Link></p>
    </article>
  );
}

type ListaProps = { partidas: readonly PartidaDaConta[]; aberta: string | null; conta: number; onAlternar: (partida: string) => void };

function ListaDePartidas({ partidas, aberta, conta, onAlternar }: ListaProps) {
  return (
    <ul className="partidas" aria-label="Últimas partidas">
      {partidas.map((p) => (
        <li key={p.id}>
          <button type="button" aria-expanded={aberta === p.id} onClick={() => onAlternar(p.id)}>
            <strong>{p.heroi}</strong> {textoDoResultado(p.venceu)} · {p.abates}/{p.mortes}/{p.assistencias}
            {" · "}{minutos(p.duracaoS)} · {nomeDaLane(p.lane)} · {dataCurta(p.inicio)}
          </button>
          {aberta === p.id && <RotaDaPartida partida={p.id} conta={conta} />}
        </li>
      ))}
    </ul>
  );
}
