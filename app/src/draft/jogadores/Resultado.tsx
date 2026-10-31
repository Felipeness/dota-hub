// Resultado da tela de 10 contas. Sem selo de urgência e sem número sem faixa: quando as faixas se sobrepõem, a tela diz que não dá para decidir.
import type { HeroId } from "../guia";
import { formatarPp, type HeroiDraft } from "../pontuacao";
import { ROTULO_DA_POSICAO } from "../posicoesPro";
import type {
  AvisoDeConta, BanRecomendado, Chance, EscolhaDoDraft, Intervalo, LeituraDaVantagem, PickRecomendado, PicksDoJogador, RecomendacaoDoDraft,
} from "../recomendacaoDeDraft";
import { Retrato } from "../Retrato";
import { ContaNaLista } from "./ContaNaLista";
import type { ContaQueFalhou } from "./situacao";

export type NomesDosHerois = ReadonlyMap<HeroId, HeroiDraft>;
export type IdentidadeMostrada = Readonly<{ nome: string; avatar: string | null }>;

type Props = Readonly<{
  recomendacao: RecomendacaoDoDraft;
  herois: NomesDosHerois;
  identidade: (conta: number) => IdentidadeMostrada;
  falhas: readonly ContaQueFalhou[];
  bansFeitos: readonly HeroId[];
  onBanir: (heroi: HeroId) => void;
  onDesbanir: (heroi: HeroId) => void;
}>;

const LEITURA: Readonly<Record<LeituraDaVantagem, string>> = {
  acima_da_base: "Acima do que a conta costuma fazer",
  abaixo_da_base: "Abaixo do que a conta costuma fazer",
  indefinido: "Não dá para dizer",
};

export const entre = ({ baixo, alto }: Intervalo) => `entre ${formatarPp(baixo)} e ${formatarPp(alto)}`;
const pct = (fracao: number) => `${Math.round(fracao * 100)}%`;
const nomeDe = (herois: NomesDosHerois, id: HeroId) => herois.get(id)?.nome ?? `Herói ${id}`;

function RetratoDoHeroi({ herois, id }: { herois: NomesDosHerois; id: HeroId }) {
  const heroi = herois.get(id);
  return heroi ? <Retrato heroi={heroi} /> : <span className="draft-retrato" aria-hidden="true" />;
}

function BotaoJaBanido({ heroi, onBanir, nome }: { heroi: HeroId; onBanir: (heroi: HeroId) => void; nome: string }) {
  return <button type="button" onClick={() => onBanir(heroi)} aria-label={`Marcar ${nome} como já banido`}>Já foi banido</button>;
}

export function HeroisBanidos({ bansFeitos, herois, onBanir, onDesbanir }: Pick<Props, "bansFeitos" | "herois" | "onBanir" | "onDesbanir">) {
  const livres = [...herois.values()].filter((h) => !bansFeitos.includes(h.id)).toSorted((a, b) => a.nome.localeCompare(b.nome));
  return (
    <section className="jog-banidos" aria-labelledby="jog-banidos-titulo">
      <h2 id="jog-banidos-titulo">Heróis já banidos</h2>
      <p className="draft-nota">Marque os banidos no draft real e a recomendação é refeita sem eles.</p>
      {bansFeitos.length > 0 && (
        <ul className="jog-chips">
          {bansFeitos.map((id) => (
            <li key={id}>
              <span>{nomeDe(herois, id)}</span>
              <button type="button" onClick={() => onDesbanir(id)} aria-label={`Desfazer o ban de ${nomeDe(herois, id)}`}>Desfazer</button>
            </li>
          ))}
        </ul>
      )}
      <label className="jog-adicionar">
        <span>Adicionar herói banido</span>
        <select value="" onChange={(e) => { const id = Number(e.target.value); if (herois.has(id)) onBanir(id); }}>
          <option value="">Escolher herói…</option>
          {livres.map((h) => <option key={h.id} value={h.id}>{h.nome}</option>)}
        </select>
      </label>
    </section>
  );
}

function ItemDeBan({ ban, posicao, herois, identidade, onBanir }: {
  ban: BanRecomendado; posicao: number | null; herois: NomesDosHerois; identidade: Props["identidade"]; onBanir: Props["onBanir"];
}) {
  const nome = nomeDe(herois, ban.heroi);
  return (
    <li className="draft-sugestao">
      <div className="draft-sugestao-topo">
        {posicao !== null && <span className="numero draft-posicao">{posicao}</span>}
        <RetratoDoHeroi herois={herois} id={ban.heroi} />
        <span className="draft-sugestao-nome">
          <strong>{nome}</strong>
          <span className="numero">Motivo: {identidade(ban.jogador).nome}</span>
        </span>
        <BotaoJaBanido heroi={ban.heroi} onBanir={onBanir} nome={nome} />
      </div>
      <p className="jog-nota-numero">
        <span className="numero">{formatarPp(ban.notaPp)}</span> para o time inimigo, {entre(ban.intervaloPp)}
      </p>
      <p className="draft-motivo-texto">{ban.motivo}</p>
    </li>
  );
}

function Bans({ bans, herois, identidade, onBanir }: Pick<Props, "herois" | "identidade" | "onBanir"> & { bans: RecomendacaoDoDraft["bans"] }) {
  const decidido = bans.decisao === "decidido";
  return (
    <section className="draft-coluna" aria-labelledby="jog-bans-titulo">
      <h2 id="jog-bans-titulo">O que banir</h2>
      {bans.itens.length === 0 && (
        <p className="jog-veredito" role="status">Nenhum ban mostra efeito claro. As contas inimigas não têm histórico suficiente para apontar um herói.</p>
      )}
      {bans.itens.length > 0 && !decidido && (
        <p className="jog-veredito" role="status">
          Não dá para decidir entre esses bans: as faixas se sobrepõem, então a ordem pode ser só ruído. Use a lista como pista, não como ranking.
        </p>
      )}
      {decidido && <p className="jog-veredito jog-decidido" role="status">O primeiro ban tem vantagem clara sobre os outros.</p>}
      <ul className="draft-sugestoes">
        {bans.itens.map((ban, i) => (
          <ItemDeBan key={ban.heroi} ban={ban} posicao={decidido ? i + 1 : null} herois={herois} identidade={identidade} onBanir={onBanir} />
        ))}
      </ul>
    </section>
  );
}

function ItemDePick({ pick, herois, onBanir }: { pick: PickRecomendado; herois: NomesDosHerois; onBanir: Props["onBanir"] }) {
  const nome = nomeDe(herois, pick.heroi);
  return (
    <li className="draft-sugestao">
      <div className="draft-sugestao-topo">
        <RetratoDoHeroi herois={herois} id={pick.heroi} />
        <span className="draft-sugestao-nome">
          <strong>{nome}</strong>
          <span className="numero">{LEITURA[pick.leitura]}</span>
        </span>
        <BotaoJaBanido heroi={pick.heroi} onBanir={onBanir} nome={nome} />
      </div>
      <p className="jog-nota-numero"><span className="numero">{formatarPp(pick.vantagemPp)}</span> sobre o normal da conta, {entre(pick.intervaloPp)}</p>
      <p className="draft-motivo-texto">{pick.motivo}</p>
    </li>
  );
}

function PicksDaConta({ doJogador, herois, identidade, falhou, onBanir }: {
  doJogador: PicksDoJogador; herois: NomesDosHerois; identidade: Props["identidade"]; falhou: boolean; onBanir: Props["onBanir"];
}) {
  const { picks, decisao, conta } = doJogador;
  return (
    <article className="jog-conta-picks">
      <ContaNaLista nome={identidade(conta).nome} avatar={identidade(conta).avatar} detalhe={`conta ${conta}`} />
      {falhou && <p className="jog-aviso-conta">Não consegui buscar esta conta. Ela entra como sem dados.</p>}
      {!falhou && picks.length === 0 && (
        <p className="jog-aviso-conta">Sem dados suficientes: perfil privado, conta nova ou nenhum herói com 5 jogos públicos.</p>
      )}
      {picks.length > 0 && decisao === "nao_da_para_decidir" && (
        <p className="jog-veredito" role="status">Nenhum herói se destaca com segurança: as faixas se sobrepõem ao normal da conta.</p>
      )}
      {picks.length > 0 && (
        <ul className="draft-sugestoes">{picks.map((pick) => <ItemDePick key={pick.heroi} pick={pick} herois={herois} onBanir={onBanir} />)}</ul>
      )}
    </article>
  );
}

function Picks({ picks, herois, identidade, falhas, onBanir }: Pick<Props, "herois" | "identidade" | "falhas" | "onBanir"> & { picks: RecomendacaoDoDraft["picks"] }) {
  const quemFalhou = new Set(falhas.map((f) => f.conta));
  return (
    <section aria-labelledby="jog-picks-titulo" className="jog-secao">
      <h2 id="jog-picks-titulo">Picks de cada aliado</h2>
      <p className="draft-nota">Vantagem é a diferença para o que a própria conta costuma ganhar. Só entram heróis com 5 jogos ou mais.</p>
      <div className="jog-picks">
        {picks.map((p) => <PicksDaConta key={p.conta} doJogador={p} herois={herois} identidade={identidade} falhou={quemFalhou.has(p.conta)} onBanir={onBanir} />)}
      </div>
    </section>
  );
}

function FraseDaChance({ chance }: { chance: Chance }) {
  const faixa = `entre ${pct(chance.baixo)} e ${pct(chance.alto)}`;
  if (chance.decisao === "decidido") {
    return <p className="jog-veredito jog-decidido" role="status">Chance estimada de vitória: <strong>{pct(chance.estimativa)}</strong>, {faixa}.</p>;
  }
  return (
    <p className="jog-veredito" role="status">
      Sem favorito claro: a estimativa é {pct(chance.estimativa)}, {faixa}, e a faixa inclui 50%. É o normal, porque o matchmaking equilibra os jogos.
    </p>
  );
}

function LinhaDoDraft({ escolha, herois, identidade, semDados }: { escolha: EscolhaDoDraft; herois: NomesDosHerois; identidade: Props["identidade"]; semDados: boolean }) {
  return (
    <li className="draft-sugestao">
      <div className="draft-sugestao-topo">
        <RetratoDoHeroi herois={herois} id={escolha.heroi} />
        <span className="draft-sugestao-nome">
          <strong>{nomeDe(herois, escolha.heroi)}</strong>
          <span className="numero">{ROTULO_DA_POSICAO[escolha.posicao]} · {identidade(escolha.conta).nome}</span>
        </span>
      </div>
      {semDados
        ? <p className="jog-aviso-conta">Sem dados desta conta: o herói vale só pela força média dele.</p>
        : <p className="jog-nota-numero"><span className="numero">{formatarPp(escolha.vantagemPp)}</span> sobre o normal da conta, {entre(escolha.intervaloPp)}</p>}
      <p className="draft-motivo-texto">{escolha.motivo}</p>
    </li>
  );
}

function MelhorDraftView({ melhorDraft, herois, identidade, semDados }: Pick<Props, "herois" | "identidade"> & { melhorDraft: RecomendacaoDoDraft["melhorDraft"]; semDados: ReadonlySet<number> }) {
  return (
    <section aria-labelledby="jog-draft-titulo" className="jog-secao">
      <h2 id="jog-draft-titulo">Melhor draft para o seu time</h2>
      <p className="draft-nota">Um herói por aliado, sem repetir, na posição que os heróis da conta costumam ocupar entre os pros.</p>
      <FraseDaChance chance={melhorDraft.chance} />
      <ul className="draft-sugestoes jog-draft">
        {melhorDraft.escolhas.map((e) => <LinhaDoDraft key={e.conta} escolha={e} herois={herois} identidade={identidade} semDados={semDados.has(e.conta)} />)}
      </ul>
    </section>
  );
}

function Avisos({ avisos, identidade }: { avisos: readonly AvisoDeConta[]; identidade: Props["identidade"] }) {
  if (avisos.length === 0) return null;
  const lado = { aliado: "seu time", inimigo: "time inimigo" } as const;
  return (
    <section aria-labelledby="jog-avisos-titulo" className="jog-secao">
      <h2 id="jog-avisos-titulo">Avisos por conta</h2>
      <ul className="jog-avisos">
        {avisos.map((a) => (
          <li key={`${a.conta}:${a.tipo}`}><strong>{identidade(a.conta).nome}</strong> ({lado[a.lado]}): {a.texto}</li>
        ))}
      </ul>
    </section>
  );
}

export function Resultado({ recomendacao, herois, identidade, falhas, bansFeitos, onBanir, onDesbanir }: Props) {
  const quemFalhou = new Set(falhas.map((f) => f.conta));
  const avisos = recomendacao.avisos.filter((a) => !quemFalhou.has(a.conta));
  const semDados = new Set(recomendacao.avisos.filter((a) => a.tipo === "sem_dados").map((a) => a.conta));
  return (
    <div className="jog-resultado">
      <HeroisBanidos bansFeitos={bansFeitos} herois={herois} onBanir={onBanir} onDesbanir={onDesbanir} />
      <Bans bans={recomendacao.bans} herois={herois} identidade={identidade} onBanir={onBanir} />
      <Picks picks={recomendacao.picks} herois={herois} identidade={identidade} falhas={falhas} onBanir={onBanir} />
      <MelhorDraftView melhorDraft={recomendacao.melhorDraft} herois={herois} identidade={identidade} semDados={semDados} />
      <Avisos avisos={avisos} identidade={identidade} />
    </div>
  );
}
