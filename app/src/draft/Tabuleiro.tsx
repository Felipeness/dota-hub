import { useState } from "react";
import { adicionar, estaNoDraft, ladoCheio, LIMITES, remover, type Lado } from "./estado";
import type { HeroId } from "./guia";
import { PosicaoDoSlot } from "./PosicaoDoSlot";
import type { PosicaoId, SlotDeHeroi } from "./posicoesPro";
import { ATRIBUTOS, NOME_DO_ATRIBUTO, type Atributo, type Draft, type HeroiDraft } from "./pontuacao";
import { Retrato } from "./Retrato";

const ROTULO: Readonly<Record<Lado, string>> = { aliados: "Seu time", inimigos: "Inimigo", bans: "Bans" };
const LADOS: readonly Lado[] = ["aliados", "inimigos", "bans"];
const VAZIO: Draft = { aliados: [], inimigos: [], bans: [] };
const TODOS = "todos";

/** Funções do OpenDota que aparecem nos heróis carregados, na ordem em que surgem pela primeira vez. */
function funcoesPresentes(herois: readonly HeroiDraft[]): string[] {
  return [...new Set(herois.flatMap((h) => h.funcoes))];
}

const paraAtributo = (valor: string): Atributo | typeof TODOS => ATRIBUTOS.find((a) => a === valor) ?? TODOS;

/** Posição e lane de cada herói do time, pela ficha de pro; ausente enquanto a ficha de pro não carregou. */
export type PosicoesPorLado = Readonly<Partial<Record<"aliados" | "inimigos", readonly SlotDeHeroi[]>>>;
export type TrocarPosicao = (lado: "aliados" | "inimigos", heroId: HeroId, posicao: PosicaoId) => void;

type Props = Readonly<{
  herois: readonly HeroiDraft[];
  porId: ReadonlyMap<HeroId, HeroiDraft>;
  draft: Draft;
  onMudar: (draft: Draft) => void;
  posicoes?: PosicoesPorLado;
  onTrocarPosicao?: TrocarPosicao;
}>;

function Fileira({ lado, draft, porId, onMudar, slots, onTrocarPosicao }: Omit<Props, "herois" | "posicoes" | "onTrocarPosicao"> & {
  lado: Lado; slots?: readonly SlotDeHeroi[]; onTrocarPosicao?: (heroId: HeroId, posicao: PosicaoId) => void;
}) {
  const vagas = lado === "bans" ? [] : Array.from({ length: LIMITES[lado] - draft[lado].length });
  return (
    <div className={`draft-fileira draft-${lado}`}>
      <h2 className="sobretitulo">{ROTULO[lado]} <span className="numero">{draft[lado].length}/{LIMITES[lado]}</span></h2>
      <ul className="draft-vagas">
        {draft[lado].map((id) => {
          const heroi = porId.get(id);
          if (!heroi) return null;
          const slot = slots?.find((s) => s.heroId === id);
          return (
            <li key={id}>
              <button type="button" className="draft-vaga" onClick={() => onMudar(remover(draft, id))} aria-label={`Tirar ${heroi.nome} de ${ROTULO[lado]}`}>
                <Retrato heroi={heroi} />
                <span>{heroi.nome}</span>
              </button>
              {slot && onTrocarPosicao && <PosicaoDoSlot slot={slot} onTrocar={(posicao) => onTrocarPosicao(id, posicao)} />}
            </li>
          );
        })}
        {vagas.map((_, i) => <li key={`vaga-${i}`} className="draft-vaga vazia" aria-hidden="true" />)}
        {lado === "bans" && draft.bans.length === 0 && <li className="draft-nota">Nenhum ban ainda.</li>}
      </ul>
    </div>
  );
}

export function Tabuleiro({ herois, porId, draft, onMudar, posicoes, onTrocarPosicao }: Props) {
  const [ladoAtivo, setLadoAtivo] = useState<Lado>("inimigos");
  const [filtro, setFiltro] = useState("");
  const [funcao, setFuncao] = useState<string>(TODOS);
  const [atributo, setAtributo] = useState<Atributo | typeof TODOS>(TODOS);
  const termo = filtro.trim().toLowerCase();
  const visiveis = herois
    .filter((h) => termo === "" || h.nome.toLowerCase().includes(termo))
    .filter((h) => funcao === TODOS || h.funcoes.includes(funcao))
    .filter((h) => atributo === TODOS || h.atributo === atributo);
  const cheio = ladoCheio(draft, ladoAtivo);

  return (
    <section className="draft-tabuleiro" aria-label="Draft">
      <div className="draft-times">
        {LADOS.map((lado) => {
          if (lado === "bans") return <Fileira key={lado} lado={lado} draft={draft} porId={porId} onMudar={onMudar} />;
          const onTrocarPosicaoDoLado = onTrocarPosicao
            ? (heroId: HeroId, posicao: PosicaoId) => onTrocarPosicao(lado, heroId, posicao)
            : undefined;
          return (
            <Fileira
              key={lado} lado={lado} draft={draft} porId={porId} onMudar={onMudar}
              slots={posicoes?.[lado]} onTrocarPosicao={onTrocarPosicaoDoLado}
            />
          );
        })}
      </div>
      <div className="draft-escolha">
        <div className="draft-alternador" role="group" aria-label="Adicionar o herói tocado em">
          {LADOS.map((lado) => (
            <button key={lado} type="button" aria-pressed={ladoAtivo === lado} onClick={() => setLadoAtivo(lado)}>{ROTULO[lado]}</button>
          ))}
        </div>
        <div className="draft-filtros">
          <input type="search" aria-label="Filtrar heróis" placeholder="Buscar herói" value={filtro} onChange={(e) => setFiltro(e.target.value)} />
          <select aria-label="Filtrar por função" value={funcao} onChange={(e) => setFuncao(e.target.value)}>
            <option value={TODOS}>Toda função</option>
            {funcoesPresentes(herois).map((f) => <option key={f} value={f}>{f}</option>)}
          </select>
          <select aria-label="Filtrar por atributo" value={atributo} onChange={(e) => setAtributo(paraAtributo(e.target.value))}>
            <option value={TODOS}>Todo atributo</option>
            {ATRIBUTOS.map((a) => <option key={a} value={a}>{NOME_DO_ATRIBUTO[a]}</option>)}
          </select>
        </div>
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
