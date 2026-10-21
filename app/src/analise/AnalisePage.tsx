import { nomeDaLane, nomeDaPosicao } from "../live/formato";
import { useState, type FormEvent } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router";
import { analiseSchema, caminhoDaAnalise } from "../confronto/analise";
import { useData } from "../data/useData";
import { lerId } from "../live/contas";
import { ErroAoVivoView } from "../live/ErroAoVivo";
import type { DetalheDaPartida } from "../live/partida/detalhe";
import { useAoVivo } from "../live/useAoVivo";
import { AnalisePosJogo } from "./componentes/AnalisePosJogo";
import { LancesDecisivos } from "./componentes/LancesDecisivos";
import { carregarPartidaParaAnalise } from "./carregar";
import { construirContexto } from "./contexto";
import { avaliarRegras } from "./motor";
import { CAMINHO_PRO_POSICOES, proPorPosicaoSchema } from "./pro";
import { REGISTRO_DE_REGRAS } from "./registro";
import { escolherLances } from "./lancesDecisivos";
import { montarRelatorio } from "./relatorio";
import "./analise.css";

export function AnalisePage() {
  const { matchId } = useParams();
  const [params] = useSearchParams();
  const conta = lerId(params.get("conta") ?? "");
  if (!matchId) return <FormularioDeAnalise />;
  if (lerId(matchId, 15) === null || conta === null) {
    return (
      <article className="analise-pagina">
        <FormularioDeAnalise matchIdInicial={matchId} contaInicial={params.get("conta") ?? ""} />
        <p role="alert" className="analise-aviso">{avisoDaEntrada(matchId, params.get("conta"))}</p>
      </article>
    );
  }
  return <AnaliseDeUmaPartida matchId={matchId} conta={conta} />;
}

/** A busca ao vivo fala de "2 letras"; aqui a pessoa precisa saber qual dos dois números falta ou está errado. */
export function avisoDaEntrada(matchId: string, conta: string | null): string {
  if (lerId(matchId, 15) === null) return "O número da partida não parece válido: use só os dígitos, ex. 9046905170.";
  if (!conta) return "Falta a sua conta: com ela sabemos qual dos 10 jogadores analisar.";
  return "O número da conta não parece válido: use o ID de amigo do Dota, ex. 329255797.";
}

function FormularioDeAnalise({ matchIdInicial = "", contaInicial = "" }: { matchIdInicial?: string; contaInicial?: string }) {
  const navegar = useNavigate();
  const [matchId, setMatchId] = useState(matchIdInicial);
  const [conta, setConta] = useState(contaInicial);

  function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    if (lerId(matchId, 15) === null || lerId(conta) === null) return;
    navegar(`/analise/${matchId.trim()}?conta=${conta.trim()}`);
  }

  return (
    <article className="analise-pagina">
      <h1>Análise pós-jogo</h1>
      <p className="analise-explicacao">
        Cola o id da partida e a sua conta do OpenDota. Se a partida ainda não foi analisada, pedimos a análise e
        esperamos até um minuto; depois disso, tenta de novo manualmente.
      </p>
      <form onSubmit={enviar} className="analise-formulario">
        <label className="campo">Partida<input type="text" inputMode="numeric" value={matchId} onChange={(e) => setMatchId(e.target.value)} placeholder="ex. 9046905170" /></label>
        <label className="campo">Sua conta (ID de amigo)<input type="text" inputMode="numeric" value={conta} onChange={(e) => setConta(e.target.value)} placeholder="ex. 329255797" /></label>
        <button type="submit" className="analise-enviar">Analisar</button>
      </form>
    </article>
  );
}

function AnaliseDeUmaPartida({ matchId, conta }: { matchId: string; conta: number }) {
  const [tentativa, setTentativa] = useState(0);
  const estado = useAoVivo(
    `analise:${matchId}:${conta}`,
    (consultar) => carregarPartidaParaAnalise(consultar, matchId, conta, { aoTentarDeNovo: setTentativa }),
  );
  if (estado.estado === "parado" || estado.estado === "carregando") {
    return <p className="ao-vivo-carregando">{tentativa > 0 ? `Pedindo a análise ao OpenDota… (tentativa ${tentativa})` : "Buscando a partida no OpenDota…"}</p>;
  }
  if (estado.estado === "erro") return <ErroAoVivoView erro={estado.erro} contexto="partida" onTentar={estado.tentarDeNovo} />;
  if (!estado.dados.analisada) {
    return (
      <article className="analise-pagina">
        <p role="status" className="ao-vivo-vazio">
          O OpenDota ainda não terminou de analisar esta partida. <button type="button" onClick={estado.tentarDeNovo}>Tentar de novo</button>
        </p>
      </article>
    );
  }
  return <RelatorioDaPartida detalhe={estado.dados} />;
}

function RelatorioDaPartida({ detalhe }: { detalhe: DetalheDaPartida }) {
  // content/confrontos nomeia o arquivo pelo slug do nome localizado (retrato), não pela chave interna do OpenDota:
  // 19/127 heróis divergem entre as duas (ex. "antimage" vs "anti_mage"), e usar a chave faz ctx.pro virar null
  // em silêncio pra esses heróis, sem avisar que faltou dado pra build-core/build-fora-de-contexto.
  const pro = useData(caminhoDaAnalise(detalhe.heroi.retrato), analiseSchema);
  const proPosicoes = useData(CAMINHO_PRO_POSICOES, proPorPosicaoSchema);
  const ctx = construirContexto(detalhe, pro.estado === "ok" ? pro.dados : null, proPosicoes.estado === "ok" ? proPosicoes.dados : null);
  const relatorio = montarRelatorio(avaliarRegras(ctx, REGISTRO_DE_REGRAS));
  return (
    <article className="analise-pagina">
      <h1>Análise de {detalhe.heroi.nome}, partida {detalhe.partida}</h1>
      <p className="analise-posicao" title="Deduzida da lane e de quem tinha mais last hits nela aos 10 min">
        {nomeDaLane(detalhe.lane)} · {nomeDaPosicao(detalhe.posicao)}
      </p>
      <p><Link to={`/ao-vivo/partidas/${detalhe.partida}?conta=${detalhe.conta}`}>Ver a partida completa</Link></p>
      <LancesDecisivos detalhe={detalhe} escolha={escolherLances(detalhe, relatorio.achados)} />
      <AnalisePosJogo ctx={ctx} relatorio={relatorio} />
    </article>
  );
}
