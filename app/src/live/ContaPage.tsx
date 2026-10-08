import { Link, useParams } from "react-router";
import { urlDoRetrato } from "../heroes/resumo";
import { IconeOuIniciais } from "./partida/BuildDaPartida";
import { lerId, resumoDaConta } from "./contas";
import { erroAoVivo, mensagemDoErro } from "./erros";
import { ErroAoVivoView } from "./ErroAoVivo";
import { dataCurta, minutos, nomeDaLane, porcentagem, textoDoResultado } from "./formato";
import { FrescorView } from "./Frescor";
import type { ComparacaoMetrica, HeroiForte, ItemDoResumo, PartidaDaConta } from "./tipos";
import { useAoVivo } from "./useAoVivo";

const NOME_DA_METRICA = { ouro: "GPM", xp: "XPM", lh: "LH/min" } as const;

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
      {dados.oQueMelhorar.length > 0 && <OQueMelhorar itens={dados.oQueMelhorar} />}
      {dados.heroisMaisFortes.length > 0 && <HeroisMaisFortes herois={dados.heroisMaisFortes} />}
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
            <SelosDeBenchmark comparacao={p.comparacao} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

function SelosDeBenchmark({ comparacao }: { comparacao: PartidaDaConta["comparacao"] }) {
  return (
    <>
      {(["ouro", "xp", "lh"] as const).map((chave) => {
        const metrica: ComparacaoMetrica = comparacao[chave];
        if (metrica.nivel === null) return null;
        const classe = metrica.nivel === "acima" ? "selo-confianca-alta" : "selo-confianca-baixa";
        return (
          <span
            key={chave}
            className={`selo ${classe}`}
            title={`${NOME_DA_METRICA[chave]} ${Math.round(metrica.valor)} · mediana do herói ${Math.round(metrica.medianaDoHeroi ?? 0)} (/benchmarks do OpenDota)`}
          >
            {NOME_DA_METRICA[chave]} {metrica.nivel}
          </span>
        );
      })}
    </>
  );
}

function OQueMelhorar({ itens }: { itens: readonly ItemDoResumo[] }) {
  return (
    <section className="aviso-da-fonte" aria-labelledby="titulo-o-que-melhorar">
      <h2 id="titulo-o-que-melhorar">O que melhorar</h2>
      <ul>
        {itens.map((item) => (
          <li key={item.metrica}>
            {item.metrica} abaixo da mediana do herói em {item.abaixo} de {item.total} partidas recentes.
          </li>
        ))}
      </ul>
    </section>
  );
}

function HeroisMaisFortes({ herois }: { herois: readonly HeroiForte[] }) {
  return (
    <>
      <h2>Heróis mais fortes</h2>
      <ul aria-label="Heróis mais fortes">
        {herois.map((h) => (
          <li key={h.heroi} className="conta-heroi-nome">
            <IconeOuIniciais src={urlDoRetrato(h.retrato)} nome={h.heroi} classe="conta-heroi-retrato" />
            <strong>{h.heroi}</strong> {" · "}percentil {Math.round(h.percentil * 100)} entre os jogadores desse herói (/players/rankings do OpenDota)
          </li>
        ))}
      </ul>
    </>
  );
}
