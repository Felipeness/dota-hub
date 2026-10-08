import { useState } from "react";
import { Link, useParams, useSearchParams } from "react-router";
import { heroiSchema, type Heroi } from "../../data/schemas";
import { useData } from "../../data/useData";
import { urlDoRetrato } from "../../heroes/resumo";
import { lerId } from "../contas";
import { erroAoVivo, mensagemDoErro } from "../erros";
import { ErroAoVivoView } from "../ErroAoVivo";
import { nomeDaLane, textoDoResultado } from "../formato";
import { FrescorView } from "../Frescor";
import { useAoVivo } from "../useAoVivo";
import { BuildDaPartida, IconeOuIniciais } from "./BuildDaPartida";
import { CurvaDaPartida, type Serie } from "./CurvaDaPartida";
import { detalheDaPartida, type Curvas as CurvasDoJogador, type DetalheDaPartida } from "./detalhe";
import { janelasDaPartida, type IdJanela } from "./janelas";
import { resumoDaPartida, type DadosPro } from "./resumo";
import { RotaPorTempo } from "./RotaPorTempo";
import "./partida.css";

export function PartidaPage() {
  const { id = "" } = useParams();
  const [params] = useSearchParams();
  const conta = lerId(params.get("conta") ?? "");
  if (conta === null || lerId(id, 15) === null) return <p role="alert">{mensagemDoErro(erroAoVivo("ENTRADA_INVALIDA"))}</p>;
  return <PartidaAoVivo partida={id} conta={conta} />;
}

function PartidaAoVivo({ partida, conta }: { partida: string; conta: number }) {
  const detalhe = useAoVivo(`partida:${partida}:${conta}`, (consultar) => detalheDaPartida(consultar, partida, conta));
  if (detalhe.estado === "parado" || detalhe.estado === "carregando") return <p className="ao-vivo-carregando">Buscando a partida no OpenDota…</p>;
  if (detalhe.estado === "erro") return <ErroAoVivoView erro={detalhe.erro} contexto="partida" onTentar={detalhe.tentarDeNovo} />;
  return <Partida detalhe={detalhe.dados} onAtualizar={detalhe.tentarDeNovo} />;
}

/** Linha dos pros com mais jogos e last hits aos 10 min; a linha do Felipe não é referência. */
function dadosPro(heroi: Heroi): DadosPro {
  const [linha] = heroi.pros.linhas.filter((l) => l.jogador !== "Felipe" && l.lh10 !== null).sort((a, b) => b.jogos - a.jogos);
  return { itensCore: heroi.guia.itens_core, lh10: linha?.lh10 ?? null };
}

function Partida({ detalhe, onAtualizar }: { detalhe: DetalheDaPartida; onAtualizar: () => void }) {
  const [janela, setJanela] = useState<IdJanela>("0-10");
  const ficha = useData(`/data/herois/${detalhe.heroi.retrato}.json`, heroiSchema);
  const pro = ficha.estado === "ok" ? dadosPro(ficha.dados) : null;
  return (
    <article className="partida">
      <Cabecalho detalhe={detalhe} temGuia={ficha.estado === "ok"} onAtualizar={onAtualizar} />
      <ul className="partida-resumo" aria-label="Resumo da partida">
        {resumoDaPartida(detalhe, pro).map((frase) => <li key={frase}>{frase}</li>)}
      </ul>
      {detalhe.draft.length > 0 && <DraftDaPartida draft={detalhe.draft} />}
      {detalhe.analisada ? (
        <>
          <SeletorDeJanela duracaoS={detalhe.duracaoS} janela={janela} onJanela={setJanela} />
          <Curvas detalhe={detalhe} janela={janela} />
          <VantagemDoTime detalhe={detalhe} janela={janela} />
          <RotaPorTempo detalhe={detalhe} janela={janela} />
          <BuildDaPartida detalhe={detalhe} pro={pro} />
        </>
      ) : (
        <p role="status" className="ao-vivo-vazio">
          Esta partida não foi analisada pelo OpenDota: só há placar, sem ouro por minuto, compras nem posições.
        </p>
      )}
      <p><Link to={`/ao-vivo/contas/${detalhe.conta}`}>Voltar para a conta</Link></p>
    </article>
  );
}

function Cabecalho({ detalhe, temGuia, onAtualizar }: { detalhe: DetalheDaPartida; temGuia: boolean; onAtualizar: () => void }) {
  const resultado = textoDoResultado(detalhe.venceu);
  const { adversario } = detalhe;
  return (
    <header className="partida-cabeca">
      <IconeOuIniciais src={detalhe.heroi.retrato ? urlDoRetrato(detalhe.heroi.retrato) : null} nome={detalhe.heroi.nome} classe="partida-retrato" />
      <div>
        <p className="partida-sobre">Partida {detalhe.partida} · {detalhe.lado === "radiant" ? "Radiant" : "Dire"}</p>
        <h1>{temGuia ? <Link to={`/herois/${detalhe.heroi.retrato}`}>{detalhe.heroi.nome}</Link> : detalhe.heroi.nome}</h1>
        <p className="partida-placar">
          <span className={`partida-resultado resultado-${detalhe.venceu === null ? "nenhum" : detalhe.venceu ? "vitoria" : "derrota"}`}>{resultado}</span>
          <span>{detalhe.abates}/{detalhe.mortes}/{detalhe.assistencias}</span>
          <span>{Math.floor(detalhe.duracaoS / 60)} min</span>
          <span>{nomeDaLane(detalhe.lane)}</span>
        </p>
        {adversario && (
          <p className="partida-adversario">
            <Link to={`/confronto/${detalhe.heroi.chave}/${adversario.heroi.chave}`}>Como jogar contra {adversario.heroi.nome}</Link>
          </p>
        )}
        {detalhe.eficienciaDeLanePct !== null && (
          <p className="partida-eficiencia">
            Eficiência de lane: {Math.round(detalhe.eficienciaDeLanePct)}%.
            <span className="partida-eficiencia-explicacao"> Ouro e experiência que você farmou contra o máximo possível na lane nesse período.</span>
          </p>
        )}
        <FrescorView frescor={detalhe.frescor} onAtualizar={onAtualizar} />
      </div>
    </header>
  );
}

function DraftDaPartida({ draft }: { draft: DetalheDaPartida["draft"] }) {
  return (
    <section className="partida-draft" aria-labelledby="titulo-draft">
      <h2 id="titulo-draft">Draft</h2>
      <ol className="partida-draft-lista" aria-label="Ordem do draft">
        {draft.map((p, i) => (
          <li key={i} className={p.seuTime ? "seu-time" : "time-inimigo"}>
            <IconeOuIniciais src={p.heroi.retrato ? urlDoRetrato(p.heroi.retrato) : null} nome={p.heroi.nome} classe="partida-draft-retrato" />
            <span>{p.heroi.nome}</span>
            <span className="partida-draft-tipo">{p.pick ? "pick" : "ban"}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

type SeletorProps = Readonly<{ duracaoS: number; janela: IdJanela; onJanela: (janela: IdJanela) => void }>;

function SeletorDeJanela({ duracaoS, janela, onJanela }: SeletorProps) {
  const opcoes = [...janelasDaPartida(duracaoS).map((j) => ({ id: j.id, rotulo: j.rotulo })), { id: "toda" as const, rotulo: "Partida toda" }];
  return (
    <nav className="partida-janelas" aria-label="Janela de tempo">
      {opcoes.map((o) => (
        <button key={o.id} type="button" aria-pressed={janela === o.id} onClick={() => onJanela(o.id)}>{o.rotulo}</button>
      ))}
    </nav>
  );
}

function series(detalhe: DetalheDaPartida, curva: (c: CurvasDoJogador) => readonly number[], porMinuto: number | null): Serie[] {
  const { adversario } = detalhe;
  const jogador = curva(detalhe.curvas);
  return [
    { nome: detalhe.heroi.nome, valores: jogador, estilo: "jogador" },
    ...(adversario ? [{ nome: `${adversario.heroi.nome} (lane)`, valores: curva(adversario.curvas), estilo: "adversario" } satisfies Serie] : []),
    ...(porMinuto === null ? [] : [{ nome: "Mediana do herói", valores: jogador.map((_, m) => Math.round(m * porMinuto)), estilo: "referencia" } satisfies Serie]),
  ];
}

function Curvas({ detalhe, janela }: { detalhe: DetalheDaPartida; janela: IdJanela }) {
  const { referencia } = detalhe;
  const ouro = series(detalhe, (c) => c.ouro, referencia?.ouroPorMin ?? null);
  const lh = series(detalhe, (c) => c.lh, referencia?.lhPorMin ?? null);
  const patrimonio = series(detalhe, (c) => c.patrimonio, null);
  return (
    <section className="partida-curvas" aria-labelledby="titulo-curvas">
      <h2 id="titulo-curvas">Ouro, patrimônio e last hits por minuto</h2>
      <div className="partida-curvas-grade">
        <CurvaDaPartida titulo="Ouro ganho" unidade="Ouro ganho no total (gold_t do OpenDota)" series={ouro} eventos={detalhe.eventos} duracaoS={detalhe.duracaoS} janela={janela} />
        <CurvaDaPartida titulo="Patrimônio" unidade="Ouro + valor dos itens (networth_t do OpenDota)" series={patrimonio} eventos={detalhe.eventos} duracaoS={detalhe.duracaoS} janela={janela} />
        <CurvaDaPartida titulo="Last hits" unidade="Last hits, com neutros" series={lh} eventos={detalhe.eventos} duracaoS={detalhe.duracaoS} janela={janela} />
      </div>
      {referencia && (
        <p className="partida-aviso">
          Mediana do herói = 50º percentil de ouro e last hits por minuto no /benchmarks do OpenDota (partidas públicas, não só pro),
          esticado em linha reta; serve de régua, não de curva real.
        </p>
      )}
    </section>
  );
}

function VantagemDoTime({ detalhe, janela }: { detalhe: DetalheDaPartida; janela: IdJanela }) {
  const { vantagemDoTime } = detalhe;
  if (vantagemDoTime.ouro.length === 0) return null;
  const serie = (valores: readonly number[]): Serie[] => [{ nome: "Seu time", valores, estilo: "jogador" }];
  return (
    <section className="partida-vantagem" aria-labelledby="titulo-vantagem">
      <h2 id="titulo-vantagem">Vantagem do time</h2>
      <p className="partida-vazio">Positivo = seu time na frente; negativo = o time inimigo na frente.</p>
      <div className="partida-curvas-grade">
        <CurvaDaPartida
          titulo="Vantagem de ouro" unidade="Diferença de ouro total entre os times (radiant_gold_adv do OpenDota)"
          series={serie(vantagemDoTime.ouro)} eventos={detalhe.eventos} duracaoS={detalhe.duracaoS} janela={janela}
        />
        <CurvaDaPartida
          titulo="Vantagem de experiência" unidade="Diferença de experiência total entre os times (radiant_xp_adv do OpenDota)"
          series={serie(vantagemDoTime.xp)} eventos={detalhe.eventos} duracaoS={detalhe.duracaoS} janela={janela}
        />
      </div>
    </section>
  );
}
