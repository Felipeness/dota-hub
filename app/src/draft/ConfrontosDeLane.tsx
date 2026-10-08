import { Link } from "react-router";
import { analiseSchema, blocoContra, caminhoDaAnalise, porcentagem, taxaDeVitoria } from "../confronto/analise";
import { useData } from "../data/useData";
import type { HeroId } from "./guia";
import type { HeroiDraft } from "./pontuacao";
import { Retrato } from "./Retrato";
import { LANE_DA_POSICAO, ROTULO_DA_LANE, type Lane, type PosicaoId, type SlotDeHeroi } from "./posicoesPro";

type Par = Readonly<{ titulo: string; laneMinha: Lane; laneDoOponente: Lane; meu: HeroiDraft; oponente: HeroiDraft }>;

const heroiNaPosicao = (slots: readonly SlotDeHeroi[], porId: ReadonlyMap<HeroId, HeroiDraft>, posicao: PosicaoId): HeroiDraft | undefined => {
  const slot = slots.find((s) => s.posicao === posicao);
  return slot ? porId.get(slot.heroId) : undefined;
};

function montarPares(aliados: readonly SlotDeHeroi[], inimigos: readonly SlotDeHeroi[], porId: ReadonlyMap<HeroId, HeroiDraft>): Par[] {
  const pos = (slots: readonly SlotDeHeroi[], posicao: PosicaoId) => heroiNaPosicao(slots, porId, posicao);
  const candidatos: readonly [string, PosicaoId, PosicaoId][] = [
    ["Sua safelane contra a offlane deles", 1, 3],
    ["Sua offlane contra a safelane deles", 3, 1],
    ["Mid contra mid", 2, 2],
  ];
  return candidatos.flatMap(([titulo, minhaPosicao, posicaoDele]) => {
    const meu = pos(aliados, minhaPosicao);
    const oponente = pos(inimigos, posicaoDele);
    if (!meu || !oponente) return [];
    return [{ titulo, laneMinha: LANE_DA_POSICAO[minhaPosicao], laneDoOponente: LANE_DA_POSICAO[posicaoDele], meu, oponente }];
  });
}

function ParDeLane({ par, paginas }: { par: Par; paginas: ReadonlyMap<HeroId, string> }) {
  const slug = paginas.get(par.meu.id);
  const analise = useData(slug ? caminhoDaAnalise(slug) : "/data/__sem_analise__.json", analiseSchema);
  const bloco = analise.estado === "ok" ? blocoContra(analise.dados, par.oponente.id) : null;
  return (
    <li className="draft-lane-par">
      <span className="draft-lane-titulo">{par.titulo}</span>
      <span className="draft-lane-confronto">
        <Retrato heroi={par.meu} className="draft-retrato draft-lane-retrato" />
        <strong>{par.meu.nome}</strong>
        <span className="draft-nota">{ROTULO_DA_LANE[par.laneMinha]} × {ROTULO_DA_LANE[par.laneDoOponente]}</span>
        <strong>{par.oponente.nome}</strong>
        <Retrato heroi={par.oponente} className="draft-retrato draft-lane-retrato" />
      </span>
      {bloco
        ? (
          <Link to={`/confronto/${par.meu.npc}/${par.oponente.npc}`} className="draft-nota">
            Análise de pro: {par.meu.nome} venceu {porcentagem(taxaDeVitoria(bloco))} ({bloco.jogos} jogos) · ver confronto
          </Link>
        )
        : <span className="draft-nota">Sem análise de pro para este confronto ainda.</span>}
    </li>
  );
}

type Props = Readonly<{
  aliados: readonly SlotDeHeroi[];
  inimigos: readonly SlotDeHeroi[];
  porId: ReadonlyMap<HeroId, HeroiDraft>;
  paginas: ReadonlyMap<HeroId, string>;
}>;

/** Os confrontos de lane que a posição de pro de cada herói resulta: sua safe x off deles, sua off x safe deles, mid x mid. */
export function ConfrontosDeLane({ aliados, inimigos, porId, paginas }: Props) {
  const pares = montarPares(aliados, inimigos, porId);
  if (pares.length === 0) return null;
  return (
    <section className="draft-lanes" aria-label="Confrontos de lane">
      <h2>Confrontos de lane</h2>
      <p className="draft-explicacao">Pela posição de pro de cada herói (quem fica na safelane, no mid e na offlane dos dois times).</p>
      <ul className="draft-lane-pares">
        {pares.map((par) => <ParDeLane key={par.titulo} par={par} paginas={paginas} />)}
      </ul>
    </section>
  );
}
