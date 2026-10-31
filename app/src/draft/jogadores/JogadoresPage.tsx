// /draft/jogadores: cola 5 contas aliadas e 5 inimigas e recebe bans, picks por aliado e o melhor draft, tudo do histórico público de cada conta.
import { useMemo, useState, type ReactNode } from "react";
import { Link, useSearchParams } from "react-router";
import { useData } from "../../data/useData";
import { mensagemDoErro } from "../../live/erros";
import { ErroAoVivoView } from "../../live/ErroAoVivo";
import { useHeroStats } from "../dados";
import type { HeroId } from "../guia";
import { CAMINHO_MODELO_DRAFT, modeloDeDraftSchema, type Historico, type ModeloDeDraft } from "../modeloDeJogador";
import { CAMINHO_PRO_POSICOES, indexarPorHeroId, proPosicoesSchema, type HeroiPro } from "../posicoesPro";
import { recomendarDraft } from "../recomendacaoDeDraft";
import {
  buscarHistorico, buscarIdentidade, SIMULTANEAS_NO_HISTORICO, SIMULTANEAS_NO_PERFIL, useBuscasPorConta,
  type EstadoDaBusca, type IdentidadeDaConta,
} from "./buscas";
import { CamposDeContas } from "./CamposDeContas";
import {
  contasValidas, escreverEstadoDaUrl, estadoDosCampos, lerEstadoDaUrl, textosDosCampos, urlCompleta, validarCampos, type EstadoDaUrl,
} from "./contasDoDraft";
import { ContaNaLista } from "./ContaNaLista";
import { Resultado, type IdentidadeMostrada, type NomesDosHerois } from "./Resultado";
import { situacaoDaAnalise, type ContaQueFalhou, type Situacao } from "./situacao";
import "./jogadores.css";

const MAXIMO_DE_BANS = 14;

type Identidades = ReadonlyMap<number, EstadoDaBusca<IdentidadeDaConta>>;
type Dados = Readonly<{ modelo: ModeloDeDraft; posicoesPro: ReadonlyMap<HeroId, HeroiPro>; herois: NomesDosHerois }>;

const identidadeMostrada = (identidades: Identidades) => (conta: number): IdentidadeMostrada => {
  const estado = identidades.get(conta);
  return estado?.estado === "ok"
    ? { nome: estado.dados.nome ?? `Conta ${conta}`, avatar: estado.dados.avatar }
    : { nome: `Conta ${conta}`, avatar: null };
};

function textoDoHistorico(estado: EstadoDaBusca<Historico> | undefined): string {
  if (!estado || estado.estado === "carregando") return "Buscando partidas…";
  if (estado.estado === "erro") return "Não consegui buscar";
  const { length } = estado.dados.partidas;
  return length === 0 ? "Sem partidas públicas" : `${length.toLocaleString("pt-BR")} partidas públicas`;
}

function ProgressoPorConta({ contas, estados, identidade, aberto }: {
  contas: readonly number[]; estados: ReadonlyMap<number, EstadoDaBusca<Historico>>; identidade: (conta: number) => IdentidadeMostrada; aberto: boolean;
}) {
  return (
    <details className="draft-porque jog-progresso" open={aberto}>
      <summary>Histórico de cada conta</summary>
      <ul className="jog-lista-contas">
        {contas.map((conta) => (
          <li key={conta}>
            <ContaNaLista nome={identidade(conta).nome} avatar={identidade(conta).avatar} detalhe={textoDoHistorico(estados.get(conta))} />
          </li>
        ))}
      </ul>
    </details>
  );
}

function FalhasDeBusca({ falhas, identidade, onTentar }: { falhas: readonly ContaQueFalhou[]; identidade: (conta: number) => IdentidadeMostrada; onTentar: () => void }) {
  if (falhas.length === 0) return null;
  return (
    <div className="jog-falhas" role="alert">
      <p>
        {falhas.length === 1 ? "Uma conta não foi buscada" : `${falhas.length} contas não foram buscadas`}. Elas entram como sem dados e as outras seguem normalmente.
      </p>
      <ul>
        {falhas.map(({ conta, erro }) => <li key={conta}><strong>{identidade(conta).nome}</strong>: {mensagemDoErro(erro, "conta")}</li>)}
      </ul>
      <button type="button" onClick={onTentar}>Tentar de novo</button>
    </div>
  );
}

type PropsDaAnalise = Readonly<{
  situacao: Extract<Situacao, { fase: "pronta" }>;
  dados: Dados;
  bans: readonly HeroId[];
  identidade: (conta: number) => IdentidadeMostrada;
  onMudarBans: (bans: readonly HeroId[]) => void;
  onTentar: () => void;
}>;

function Analise({ situacao, dados, bans, identidade, onMudarBans, onTentar }: PropsDaAnalise) {
  const [agoraS] = useState(() => Math.floor(Date.now() / 1_000));
  const chaveDosBans = bans.join(",");
  const recomendacao = useMemo(
    () => recomendarDraft({
      aliados: situacao.aliados, inimigos: situacao.inimigos, modelo: dados.modelo, posicoesPro: dados.posicoesPro, agoraS,
      nomeDoHeroi: (id) => dados.herois.get(id)?.nome ?? `Herói ${id}`, bansFeitos: bans,
    }),
    [situacao, dados, agoraS, chaveDosBans],
  );
  const banir = (heroi: HeroId) => { if (!bans.includes(heroi)) onMudarBans([...bans, heroi].slice(0, MAXIMO_DE_BANS)); };
  return (
    <>
      <FalhasDeBusca falhas={situacao.falhas} identidade={identidade} onTentar={onTentar} />
      <Resultado
        recomendacao={recomendacao} herois={dados.herois} identidade={identidade} falhas={situacao.falhas}
        bansFeitos={bans} onBanir={banir} onDesbanir={(heroi) => onMudarBans(bans.filter((id) => id !== heroi))}
      />
    </>
  );
}

function useDadosDoModelo(): { dados: Dados | null; carregando: boolean; erro: ReactNode } {
  const [herois, tentarHerois] = useHeroStats();
  const modelo = useData(CAMINHO_MODELO_DRAFT, modeloDeDraftSchema);
  const pro = useData(CAMINHO_PRO_POSICOES, proPosicoesSchema);
  const dados = useMemo((): Dados | null => {
    if (herois.estado !== "ok" || modelo.estado !== "ok" || pro.estado !== "ok") return null;
    return { modelo: modelo.dados, posicoesPro: indexarPorHeroId(pro.dados), herois: new Map(herois.herois.map((h) => [h.id, h])) };
  }, [herois, modelo, pro]);
  const indisponivel = [modelo, pro].find((d) => d.estado === "indisponivel");
  const erro = herois.estado === "erro"
    ? <ErroAoVivoView erro={herois.erro} onTentar={tentarHerois} />
    : indisponivel?.estado === "indisponivel" ? <p role="alert">Dados do modelo indisponíveis. {indisponivel.motivo}</p> : null;
  return { dados, carregando: dados === null && erro === null, erro };
}

function Painel({ estado }: { estado: EstadoDaUrl }) {
  const [, setParams] = useSearchParams();
  const [textos, setTextos] = useState(() => textosDosCampos(estado));
  const campos = validarCampos(textos);
  const identidades = useBuscasPorConta(contasValidas(campos), buscarIdentidade, SIMULTANEAS_NO_PERFIL);
  const contasDaAnalise = urlCompleta(estado) ? [...estado.aliados, ...estado.inimigos] : [];
  const historicos = useBuscasPorConta(contasDaAnalise, buscarHistorico, SIMULTANEAS_NO_HISTORICO);
  // As contas da URL não mudam durante a vida do Painel (a página o recria quando mudam), então só os estados movem a situação.
  const situacao = useMemo(() => situacaoDaAnalise(estado, historicos.estados), [historicos.estados]);
  const modelo = useDadosDoModelo();
  const identidade = identidadeMostrada(identidades.estados);

  const mudarBans = (bans: readonly HeroId[]) => setParams(escreverEstadoDaUrl({ ...estado, bans }), { replace: true });
  const analisar = () => setParams(escreverEstadoDaUrl(estadoDosCampos(contasValidas(campos), estado.bans)));

  return (
    <>
      <CamposDeContas textos={textos} campos={campos} identidades={identidades.estados} onMudar={setTextos} onAnalisar={analisar} />
      {situacao.fase === "carregando" && (
        <p role="status" className="draft-nota">Buscando o histórico no OpenDota: {situacao.prontas} de {situacao.total} contas.</p>
      )}
      {situacao.fase !== "aguardando" && (
        <ProgressoPorConta contas={contasDaAnalise} estados={historicos.estados} identidade={identidade} aberto={situacao.fase === "carregando"} />
      )}
      {modelo.erro}
      {situacao.fase === "pronta" && modelo.carregando && <p role="status" className="draft-nota">Carregando o modelo…</p>}
      {situacao.fase === "pronta" && modelo.dados && (
        <Analise
          situacao={situacao} dados={modelo.dados} bans={estado.bans} identidade={identidade}
          onMudarBans={mudarBans} onTentar={historicos.tentarDeNovo}
        />
      )}
    </>
  );
}

export function JogadoresPage() {
  const [params] = useSearchParams();
  const estado = lerEstadoDaUrl(params);
  // Painel recomeça quando um link com outras contas é aberto; mudar só os bans não recarrega nada.
  return (
    <section className="draft jog">
      <div className="rotas-topo"><span className="sobretitulo">Draft</span><h1>Draft pelos 10 jogadores</h1></div>
      <p className="draft-explicacao">
        Cole as 5 contas do seu time e as 5 do time inimigo. A recomendação sai do histórico público de partidas de cada conta no OpenDota.
      </p>
      <p className="draft-nota">
        O matchmaking equilibra os times, então na maior parte das partidas nenhuma sugestão se destaca com segurança. Quando for o caso,
        a tela diz que não dá para decidir, e sempre mostra a faixa de cada número. Conta privada fica de fora: nada é estimado sobre ela.
      </p>
      <p className="draft-nota"><Link to="/draft">Voltar ao simulador de draft por heróis</Link></p>
      <Painel key={`${estado.aliados}|${estado.inimigos}`} estado={estado} />
    </section>
  );
}
