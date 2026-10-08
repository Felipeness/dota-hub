import { Link } from "react-router";
import type { GuiaDraft, HeroId } from "./guia";
import { formatarPp, type HeroiDraft, type Motivo, type Sugestao, type TipoDeMotivo } from "./pontuacao";
import { Retrato } from "./Retrato";

const MOTIVOS_VISIVEIS = 3;
const ETIQUETA: Readonly<Record<TipoDeMotivo, string>> = { matchup: "Confronto", guia: "Guia", funcao: "Função", patch: "Patch" };

type Props = Readonly<{
  titulo: string;
  explicacao: string;
  sugestoes: readonly Sugestao[];
  acao: string;
  onAcao: (id: HeroId) => void;
  guias: ReadonlyMap<HeroId, GuiaDraft>;
  paginas: ReadonlyMap<HeroId, string>;
  /** Só nos picks: o link do 1x1 contra o inimigo mais perigoso faz sentido para o seu lado do draft. */
  linkDoConfronto?: ReadonlyMap<HeroId, HeroiDraft>;
}>;

function LinhaDeMotivo({ motivo, comDetalhe }: { motivo: Motivo; comDetalhe: boolean }) {
  return (
    <li className={motivo.pp >= 0 ? "a-favor" : "contra"}>
      <span className="draft-etiqueta">{ETIQUETA[motivo.tipo]}</span>
      <span className="draft-motivo-texto">
        {motivo.curto} <span className="numero draft-pp">{formatarPp(motivo.pp)}</span>
        {comDetalhe && <span className="draft-detalhe">{motivo.detalhe}</span>}
      </span>
    </li>
  );
}

function Cartao({ sugestao, posicao, acao, onAcao, guia, pagina, inimigoPerigoso }: {
  sugestao: Sugestao; posicao: number; acao: string; onAcao: (id: HeroId) => void;
  guia: GuiaDraft | undefined; pagina: string | undefined; inimigoPerigoso: HeroiDraft | undefined;
}) {
  const { heroi, nota, motivos } = sugestao;
  return (
    <li className="draft-sugestao">
      <div className="draft-sugestao-topo">
        <span className="numero draft-posicao">{posicao}</span>
        <Retrato heroi={heroi} />
        <span className="draft-sugestao-nome"><strong>{heroi.nome}</strong><span className="numero">soma {formatarPp(nota)}</span></span>
        <button type="button" onClick={() => onAcao(heroi.id)}>{acao}</button>
      </div>
      {motivos.length === 0
        ? <p className="draft-nota">Sem motivo com dado: só aparece porque não tem nada contra.</p>
        : <ul className="draft-motivos">{motivos.slice(0, MOTIVOS_VISIVEIS).map((m) => <LinhaDeMotivo key={m.curto} motivo={m} comDetalhe={false} />)}</ul>}
      {inimigoPerigoso && (
        <Link to={`/confronto/${heroi.npc}/${inimigoPerigoso.npc}`} className="draft-nota">
          Como jogar {heroi.nome} contra {inimigoPerigoso.nome}
        </Link>
      )}
      {(motivos.length > 0 || guia || pagina) && (
        <details className="draft-porque">
          <summary>Por quê, em detalhe</summary>
          <ul className="draft-motivos">{motivos.map((m) => <LinhaDeMotivo key={m.curto} motivo={m} comDetalhe />)}</ul>
          {guia && <p className="draft-momento"><strong>Momento do draft, pelo guia:</strong> {guia.momento}</p>}
          {pagina && <Link to={`/herois/${pagina}`}>{guia ? "Guia completo" : "Ficha"} do {heroi.nome}</Link>}
        </details>
      )}
    </li>
  );
}

export function Sugestoes({ titulo, explicacao, sugestoes, acao, onAcao, guias, paginas, linkDoConfronto }: Props) {
  return (
    <section className="draft-coluna" aria-label={titulo}>
      <h2>{titulo}</h2>
      <p className="draft-explicacao">{explicacao}</p>
      <ol className="draft-sugestoes">
        {sugestoes.map((s, i) => (
          <Cartao
            key={s.heroi.id} sugestao={s} posicao={i + 1} acao={acao} onAcao={onAcao}
            guia={guias.get(s.heroi.id)} pagina={paginas.get(s.heroi.id)}
            inimigoPerigoso={s.maisPerigoso !== null ? linkDoConfronto?.get(s.maisPerigoso) : undefined}
          />
        ))}
      </ol>
    </section>
  );
}
