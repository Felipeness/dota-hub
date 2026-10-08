import { useState } from "react";
import { adicionar, estaNoDraft, ladoCheio, LIMITES, remover, type Lado } from "./estado";
import type { HeroId } from "./guia";
import type { Draft, HeroiDraft } from "./pontuacao";
import { Retrato } from "./Retrato";

const ROTULO: Readonly<Record<Lado, string>> = { aliados: "Seu time", inimigos: "Inimigo", bans: "Bans" };
const LADOS: readonly Lado[] = ["aliados", "inimigos", "bans"];
const VAZIO: Draft = { aliados: [], inimigos: [], bans: [] };

type Props = Readonly<{
  herois: readonly HeroiDraft[];
  porId: ReadonlyMap<HeroId, HeroiDraft>;
  draft: Draft;
  onMudar: (draft: Draft) => void;
}>;

function Fileira({ lado, draft, porId, onMudar }: Omit<Props, "herois"> & { lado: Lado }) {
  const vagas = lado === "bans" ? [] : Array.from({ length: LIMITES[lado] - draft[lado].length });
  return (
    <div className={`draft-fileira draft-${lado}`}>
      <h2 className="sobretitulo">{ROTULO[lado]} <span className="numero">{draft[lado].length}/{LIMITES[lado]}</span></h2>
      <ul className="draft-vagas">
        {draft[lado].map((id) => {
          const heroi = porId.get(id);
          if (!heroi) return null;
          return (
            <li key={id}>
              <button type="button" className="draft-vaga" onClick={() => onMudar(remover(draft, id))} aria-label={`Tirar ${heroi.nome} de ${ROTULO[lado]}`}>
                <Retrato heroi={heroi} />
                <span>{heroi.nome}</span>
              </button>
            </li>
          );
        })}
        {vagas.map((_, i) => <li key={`vaga-${i}`} className="draft-vaga vazia" aria-hidden="true" />)}
        {lado === "bans" && draft.bans.length === 0 && <li className="draft-nota">Nenhum ban ainda.</li>}
      </ul>
    </div>
  );
}

export function Tabuleiro({ herois, porId, draft, onMudar }: Props) {
  const [ladoAtivo, setLadoAtivo] = useState<Lado>("inimigos");
  const [filtro, setFiltro] = useState("");
  const termo = filtro.trim().toLowerCase();
  const visiveis = termo === "" ? herois : herois.filter((h) => h.nome.toLowerCase().includes(termo));
  const cheio = ladoCheio(draft, ladoAtivo);

  return (
    <section className="draft-tabuleiro" aria-label="Draft">
      <div className="draft-times">
        {LADOS.map((lado) => <Fileira key={lado} lado={lado} draft={draft} porId={porId} onMudar={onMudar} />)}
      </div>
      <div className="draft-escolha">
        <div className="draft-alternador" role="group" aria-label="Adicionar o herói tocado em">
          {LADOS.map((lado) => (
            <button key={lado} type="button" aria-pressed={ladoAtivo === lado} onClick={() => setLadoAtivo(lado)}>{ROTULO[lado]}</button>
          ))}
        </div>
        <input type="search" aria-label="Filtrar heróis" placeholder="Buscar herói" value={filtro} onChange={(e) => setFiltro(e.target.value)} />
        {cheio && <p className="draft-nota" role="status">{ROTULO[ladoAtivo]} está completo. Toque num herói acima para tirar.</p>}
        <ul className="draft-grade" aria-label={`Heróis para ${ROTULO[ladoAtivo]}`}>
          {visiveis.map((h) => (
            <li key={h.id}>
              <button
                type="button"
                className="draft-opcao"
                disabled={cheio || estaNoDraft(draft, h.id)}
                onClick={() => { onMudar(adicionar(draft, ladoAtivo, h.id)); setFiltro(""); }}
                title={h.nome}
              >
                <Retrato heroi={h} />
                <span>{h.nome}</span>
              </button>
            </li>
          ))}
        </ul>
        {LADOS.some((lado) => draft[lado].length > 0) && (
          <button type="button" className="link" onClick={() => onMudar(VAZIO)}>Limpar draft</button>
        )}
      </div>
    </section>
  );
}
