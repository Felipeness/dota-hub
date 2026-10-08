import { useState } from "react";
import { Link } from "react-router";
import { conselhosDaSituacao, SITUACOES, situacoesComConselho, type Conselho, type GuiaDraft, type HeroId, type SituacaoId } from "./guia";
import type { HeroiDraft } from "./pontuacao";
import { Retrato } from "./Retrato";

const GRUPOS = [
  { tipo: "pegar", titulo: "Pegar", explicacao: "O guia do herói diz que ele vai bem contra isso." },
  { tipo: "evitar", titulo: "Evitar", explicacao: "O guia do herói diz que ele sofre contra isso." },
  { tipo: "item", titulo: "Itens", explicacao: "Item situacional que o guia indica para isso." },
] as const;

type Props = Readonly<{ guias: readonly GuiaDraft[]; porId: ReadonlyMap<HeroId, HeroiDraft>; paginas: ReadonlyMap<HeroId, string> }>;

function LinhaDoConselho({ conselho, porId, paginas }: { conselho: Conselho; porId: Props["porId"]; paginas: Props["paginas"] }) {
  const heroi = porId.get(conselho.heroId);
  const pagina = paginas.get(conselho.heroId);
  const nome = heroi?.nome ?? `herói ${conselho.heroId}`;
  return (
    <li className="draft-sugestao">
      <div className="draft-sugestao-topo">
        {heroi && <Retrato heroi={heroi} />}
        <strong>{conselho.tipo === "item" ? `${nome}: ${conselho.item}` : nome}</strong>
      </div>
      <p className="draft-linha">{conselho.trecho}</p>
      {conselho.texto !== conselho.trecho && (
        <details className="draft-porque">
          <summary>Trecho completo do guia</summary>
          <p>{conselho.texto}</p>
        </details>
      )}
      {pagina && <Link to={`/herois/${pagina}`}>Guia do {nome}</Link>}
    </li>
  );
}

export function Situacoes({ guias, porId, paginas }: Props) {
  const disponiveis = situacoesComConselho(guias);
  const [escolhida, setEscolhida] = useState<SituacaoId | null>(null);
  const atual = escolhida ?? disponiveis[0] ?? null;
  if (atual === null) return <p className="draft-nota">Nenhum guia cita uma situação ainda.</p>;
  const conselhos = conselhosDaSituacao(atual, guias);

  return (
    <section className="draft-situacoes" aria-label="Situações">
      <p className="draft-explicacao">
        O inimigo tem algo que incomoda? Escolha abaixo. Tudo vem dos guias dos 22 heróis do Hub (só aparece situação que algum guia cita).
      </p>
      <div className="draft-alternador draft-alternador-largo" role="group" aria-label="O inimigo tem">
        {SITUACOES.filter((s) => disponiveis.includes(s.id)).map((s) => (
          <button key={s.id} type="button" aria-pressed={atual === s.id} onClick={() => setEscolhida(s.id)}>{s.rotulo}</button>
        ))}
      </div>
      <div className="draft-colunas draft-colunas-3">
        {GRUPOS.map((g) => {
          const doGrupo = conselhos.filter((c) => c.tipo === g.tipo);
          if (doGrupo.length === 0) return null;
          return (
            <section key={g.tipo} className="draft-coluna" aria-label={g.titulo}>
              <h2>{g.titulo}</h2>
              <p className="draft-explicacao">{g.explicacao}</p>
              <ul className="draft-sugestoes">
                {doGrupo.map((c) => <LinhaDoConselho key={`${c.heroId}-${c.texto}`} conselho={c} porId={porId} paginas={paginas} />)}
              </ul>
            </section>
          );
        })}
      </div>
    </section>
  );
}
