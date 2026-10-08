import { Link, useParams } from "react-router";
import { urlDoRetrato } from "../heroes/resumo";
import { IconeOuIniciais } from "./partida/BuildDaPartida";
import { lerId, resumoDaConta } from "./contas";
import { erroAoVivo, mensagemDoErro } from "./erros";
import { ErroAoVivoView } from "./ErroAoVivo";
import { dataCurta, minutos, nomeDaLane, porcentagem, textoDoResultado } from "./formato";
import { FrescorView } from "./Frescor";
import type { PartidaDaConta } from "./tipos";
import { useAoVivo } from "./useAoVivo";

export function ContaPage() {
  const { id = "" } = useParams();
  const conta = lerId(id);
  if (conta === null) return <p role="alert">{mensagemDoErro(erroAoVivo("ENTRADA_INVALIDA"))}</p>;
  return <ContaAoVivo id={conta} />;
}

function ContaAoVivo({ id }: { id: number }) {
  const conta = useAoVivo(`conta:${id}`, (consultar) => resumoDaConta(consultar, id));
  if (conta.estado === "parado" || conta.estado === "carregando") return <p>Buscando a conta no OpenDota…</p>;
  if (conta.estado === "erro") return <ErroAoVivoView erro={conta.erro} contexto="conta" onTentar={conta.tentarDeNovo} />;
  const { dados } = conta;
  return (
    <article className="conta-ao-vivo">
      <header>
        <h1>{dados.conta.nome}</h1>
        <p>Medalha: {dados.conta.medalha ?? "sem dado (perfil privado ou calibrando)"}</p>
        <FrescorView frescor={dados.frescor} onAtualizar={conta.tentarDeNovo} />
      </header>
      <dl className="destaques">
        <div><dt>Partidas</dt><dd>{dados.totais.partidas.toLocaleString("pt-BR")}</dd></div>
        <div><dt>Vitórias</dt><dd>{porcentagem(dados.totais.vitorias, dados.totais.partidas)}</dd></div>
        <div><dt>Últimas {dados.ultimas.partidas}</dt><dd>{porcentagem(dados.ultimas.vitorias, dados.ultimas.partidas)}</dd></div>
      </dl>
      <h2>Heróis mais jogados (histórico completo)</h2>
      <table>
        <thead><tr><th>Herói</th><th>Partidas</th><th>Vitórias</th></tr></thead>
        <tbody>
          {dados.herois.map((h) => (
            <tr key={h.heroi}>
              <td className="conta-heroi-nome">
                <IconeOuIniciais src={urlDoRetrato(h.retrato)} nome={h.heroi} classe="conta-heroi-retrato" />
                {h.heroi}
              </td>
              <td>{h.partidas}</td><td>{porcentagem(h.vitorias, h.partidas)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Últimas partidas</h2>
      {dados.temDadosPublicos
        ? <ListaDePartidas partidas={dados.partidas} conta={dados.conta.id} />
        : <p role="status">Esta conta não mostra partidas públicas. No Dota, ative "Expor dados públicos de partidas".</p>}
      <p><Link to="/ao-vivo">Nova busca</Link></p>
    </article>
  );
}

function ListaDePartidas({ partidas, conta }: { partidas: readonly PartidaDaConta[]; conta: number }) {
  return (
    <ul className="partidas" aria-label="Últimas partidas">
      {partidas.map((p) => (
        <li key={p.id}>
          <Link to={`/ao-vivo/partidas/${p.id}?conta=${conta}`}>
            <IconeOuIniciais src={urlDoRetrato(p.retrato)} nome={p.heroi} classe="conta-heroi-retrato" />
            <strong>{p.heroi}</strong> {textoDoResultado(p.venceu)} · K/D/A {p.abates}/{p.mortes}/{p.assistencias}
            {" · "}{minutos(p.duracaoS)}
            {" · "}<span title={p.lane ? undefined : "a fonte não registrou a lane dessa partida"}>{nomeDaLane(p.lane)}</span>
            {" · "}{dataCurta(p.inicio)}
            {!p.analisada && <span className="conta-partida-parcial" title="dados ainda não totalmente processados pela fonte"> · dados parciais</span>}
          </Link>
        </li>
      ))}
    </ul>
  );
}
