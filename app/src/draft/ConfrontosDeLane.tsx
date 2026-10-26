import { Link } from "react-router";
import { useData } from "../data/useData";
import type { HeroId } from "./guia";
import type { HeroiDraft } from "./pontuacao";
import { Retrato } from "./Retrato";
import { CAMINHO_PARES, frasePlacar, paresSchema, placarDoPar, type PlacarDoPar } from "./paresDeLane";
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

/** placar undefined: o arquivo de placares ainda não chegou (ou falhou), então não afirma que falta partida. */
function ParDeLane({ par, placar }: { par: Par; placar: PlacarDoPar | null | undefined }) {
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
      {placar
        ? (
          <Link to={`/confronto/${par.meu.npc}/${par.oponente.npc}`} className="draft-nota">
            {placar.analiseEscrita ? "Análise de pro: " : ""}{frasePlacar(par.meu.nome, par.oponente.nome, placar)} · {placar.analiseEscrita ? "ver análise" : "ver confronto"}
          </Link>
        )
        : placar === null && <span className="draft-nota">Sem partidas pro deste confronto ainda.</span>}
    </li>
  );
}

type Props = Readonly<{
  aliados: readonly SlotDeHeroi[];
  inimigos: readonly SlotDeHeroi[];
  porId: ReadonlyMap<HeroId, HeroiDraft>;
}>;

/** Os confrontos de lane que a posição de pro de cada herói resulta: sua safe x off deles, sua off x safe deles, mid x mid. */
export function ConfrontosDeLane({ aliados, inimigos, porId }: Props) {
  const placares = useData(CAMINHO_PARES, paresSchema);
  const pares = montarPares(aliados, inimigos, porId);
  if (pares.length === 0) return null;
  return (
    <section className="draft-lanes" aria-label="Confrontos de lane">
      <h2>Confrontos de lane</h2>
      <p className="draft-explicacao">Pela posição de pro de cada herói (quem fica na safelane, no mid e na offlane dos dois times).</p>
      <ul className="draft-lane-pares">
        {pares.map((par) => <ParDeLane key={par.titulo} par={par} placar={placares.estado === "ok" ? placarDoPar(placares.dados, par.meu.id, par.oponente.id) : undefined} />)}
      </ul>
    </section>
  );
}
