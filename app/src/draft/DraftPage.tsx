import { useMemo, useState } from "react";
import { useSearchParams } from "react-router";
import { carregarBase } from "../confronto/carregar";
import type { Heroi } from "../confronto/modelo";
import { useData } from "../data/useData";
import { ErroAoVivoView } from "../live/ErroAoVivo";
import { useAoVivo } from "../live/useAoVivo";
import { ComparacaoDeDrafts } from "./ComparacaoDeDrafts";
import { ConfrontosDeLane } from "./ConfrontosDeLane";
import { ContraTime } from "./ContraTime";
import { useGuias, useHeroStats, useMatchups, type Guias } from "./dados";
import { calcularLimites, SEM_TRACOS, type HeroiNoTime } from "./eixos";
import { adicionar, escreverDraft, estaNoDraft, lerDraft, type Lado } from "./estado";
import { extrairMencoes, type HeroId } from "./guia";
import { sugerir, type Contexto, type Draft, type HeroiDraft } from "./pontuacao";
import {
  atribuirPosicoes, CAMINHO_PRO_POSICOES, indexarPorHeroId, proPosicoesSchema, trocarPosicao,
  type HeroiPro, type PosicaoId, type SlotDeHeroi,
} from "./posicoesPro";
import { Situacoes } from "./Situacoes";
import { situacoesDosInimigos } from "./situacoesDoInimigo";
import { Sugestoes } from "./Sugestoes";
import { Tabuleiro } from "./Tabuleiro";
import { tracosDoHeroi } from "./tracosDeHabilidade";
import "./draft.css";

const SUGESTOES = 8;
const ABAS = [
  { id: "draft", rotulo: "Simulador" },
  { id: "time", rotulo: "Contra time tier 1" },
  { id: "situacoes", rotulo: "Situações" },
] as const;
type Aba = (typeof ABAS)[number]["id"];

function useDraftNaUrl(validos: ReadonlySet<HeroId>): [Draft, (draft: Draft) => void] {
  const [params, setParams] = useSearchParams();
  return [lerDraft(params, validos), (draft) => setParams(escreverDraft(draft), { replace: true })];
}

/** Atribuição automática (maximiza a probabilidade de pro) mais as trocas manuais do jogador para este time. */
function usePosicoesDoTime(heroIds: readonly HeroId[], porHeroIdPro: ReadonlyMap<HeroId, HeroiPro> | null): [readonly SlotDeHeroi[], (heroId: HeroId, posicao: PosicaoId) => void] {
  const [overrides, setOverrides] = useState<ReadonlyMap<HeroId, PosicaoId>>(new Map());
  const trocar = (heroId: HeroId, posicao: PosicaoId) => setOverrides((antes) => new Map(antes).set(heroId, posicao));
  if (!porHeroIdPro) return [[], trocar];
  const automatica = atribuirPosicoes(heroIds, porHeroIdPro);
  const slots = [...overrides].reduce((atribuicao, [heroId, posicao]) => trocarPosicao(atribuicao, heroId, posicao, porHeroIdPro), automatica);
  return [slots, trocar];
}

/** Ficha de força de pro + traços de habilidade por posição, só dos heróis que já têm as duas fontes carregadas. */
function montarTime(slots: readonly SlotDeHeroi[], porHeroIdPro: ReadonlyMap<HeroId, HeroiPro> | null, porHeroIdHabilidade: ReadonlyMap<HeroId, Heroi> | null): HeroiNoTime[] {
  return slots.flatMap((slot): HeroiNoTime[] => {
    const pro = porHeroIdPro?.get(slot.heroId);
    if (!pro) return [];
    const habilidade = porHeroIdHabilidade?.get(slot.heroId);
    return [{ forca: pro.forca, tracos: habilidade ? tracosDoHeroi(habilidade) : SEM_TRACOS, posicao: slot.posicao }];
  });
}

function Painel({ herois, guias }: { herois: readonly HeroiDraft[]; guias: Guias }) {
  const porId = new Map(herois.map((h) => [h.id, h]));
  const [draft, mudarDraft] = useDraftNaUrl(new Set(porId.keys()));
  const [aba, setAba] = useState<Aba>("draft");
  const { matchups, carregando, erro, tentarDeNovo } = useMatchups([...draft.aliados, ...draft.inimigos]);
  // ~28 mil buscas de nome nos textos dos guias: o app não usa o React Compiler, então guarda à mão.
  const mencoes = useMemo(() => guias.guias.flatMap((g) => extrairMencoes(g, herois)), [guias, herois]);
  const contexto: Contexto = { herois: porId, matchups, mencoes };
  // Mesma chave de cache do Confronto 1x1: quem já visitou lá não baixa as habilidades de novo.
  const base = useAoVivo("confronto:constantes", carregarBase);
  const detectadas = useMemo(
    () => (base.estado === "ok" ? situacoesDosInimigos(draft.inimigos, base.dados.herois) : []),
    [base, draft.inimigos],
  );
  const guiasPorId = new Map(guias.guias.map((g) => [g.heroId, g]));
  const colocar = (lado: Lado) => (id: HeroId) => mudarDraft(adicionar(draft, lado, id));

  const posPro = useData(CAMINHO_PRO_POSICOES, proPosicoesSchema);
  const porHeroIdPro = posPro.estado === "ok" ? indexarPorHeroId(posPro.dados) : null;
  const limites = useMemo(() => calcularLimites(posPro.estado === "ok" ? posPro.dados.herois.map((h) => h.forca) : []), [posPro]);
  const porHeroIdHabilidade = useMemo(() => (base.estado === "ok" ? new Map(base.dados.herois.map((h) => [h.id, h])) : null), [base]);
  const [slotsAliados, trocarPosicaoAliados] = usePosicoesDoTime(draft.aliados, porHeroIdPro);
  const [slotsInimigos, trocarPosicaoInimigos] = usePosicoesDoTime(draft.inimigos, porHeroIdPro);
  const onTrocarPosicao = (lado: "aliados" | "inimigos", heroId: HeroId, posicao: PosicaoId) =>
    (lado === "aliados" ? trocarPosicaoAliados : trocarPosicaoInimigos)(heroId, posicao);

  return (
    <>
      <div className="draft-alternador draft-abas" role="group" aria-label="Seções do draft">
        {ABAS.map((a) => <button key={a.id} type="button" aria-pressed={aba === a.id} onClick={() => setAba(a.id)}>{a.rotulo}</button>)}
      </div>
      {guias.falhas > 0 && <p className="draft-nota" role="status">{guias.falhas} guia(s) não carregaram; os motivos do guia desses heróis ficam de fora.</p>}
      {aba === "draft" && (
        <>
          <Tabuleiro
            herois={herois} porId={porId} draft={draft} onMudar={mudarDraft}
            posicoes={{ aliados: slotsAliados, inimigos: slotsInimigos }} onTrocarPosicao={onTrocarPosicao}
          />
          {erro && <ErroAoVivoView erro={erro} onTentar={tentarDeNovo} />}
          {carregando && <p className="draft-nota" role="status">Buscando confrontos no OpenDota…</p>}
          <ConfrontosDeLane aliados={slotsAliados} inimigos={slotsInimigos} porId={porId} />
          <ComparacaoDeDrafts
            meuTime={montarTime(slotsAliados, porHeroIdPro, porHeroIdHabilidade)}
            timeInimigo={montarTime(slotsInimigos, porHeroIdPro, porHeroIdHabilidade)}
            limites={limites}
          />
          <div className="draft-colunas">
            <Sugestoes
              titulo="Melhores picks"
              explicacao="Ordem pela soma dos motivos, em pontos percentuais de vitória. Confronto: partidas profissionais do OpenDota contra cada inimigo. Guia: o que o guia do herói (ou do aliado, ou do inimigo) diz sobre este draft. Função: o que falta no seu time. Patch: vitória na faixa Divine."
              sugestoes={sugerir(contexto, draft, "pick", SUGESTOES)}
              acao="Pegar"
              onAcao={colocar("aliados")}
              guias={guiasPorId}
              paginas={guias.paginas}
              linkDoConfronto={porId}
            />
            <Sugestoes
              titulo="Banir"
              explicacao="Quem mais ameaça o seu draft: vence dos seus heróis, os guias deles temem, combina com o inimigo ou é forte no patch."
              sugestoes={sugerir(contexto, draft, "ban", SUGESTOES)}
              acao="Banir"
              onAcao={colocar("bans")}
              guias={guiasPorId}
              paginas={guias.paginas}
            />
          </div>
        </>
      )}
      {aba === "time" && (
        <ContraTime
          porNome={new Map(herois.map((h) => [h.nome, h]))}
          ocupado={(id) => estaNoDraft(draft, id)}
          onBanir={colocar("bans")}
          onPegar={colocar("aliados")}
        />
      )}
      {aba === "situacoes" && <Situacoes guias={guias.guias} porId={porId} paginas={guias.paginas} detectadas={detectadas} />}
    </>
  );
}

export function DraftPage() {
  const [herois, tentarDeNovo] = useHeroStats();
  const guias = useGuias();
  return (
    <section className="draft">
      <div className="rotas-topo"><span className="sobretitulo">Draft</span><h1>Simulador de draft</h1></div>
      <p className="draft-explicacao">
        Monte os dois times e os bans. A lista mostra o que pegar e o que banir, sempre com o porquê e de onde veio o número.
      </p>
      <p className="draft-nota">
        Em all pick de pub o draft não é tão coordenado assim. O que ajuda de verdade: o confronto 1x1 contra o herói que mais te
        ameaça (cada pick já traz esse link) e o modo contra time tier 1 na aba ao lado. O simulador completo fica para quando
        o seu time e o inimigo já estão fechados.
      </p>
      {herois.estado === "erro" && <ErroAoVivoView erro={herois.erro} onTentar={tentarDeNovo} />}
      {(herois.estado === "carregando" || guias === null) && herois.estado !== "erro" && <p>Carregando…</p>}
      {herois.estado === "ok" && guias !== null && <Painel herois={herois.herois} guias={guias} />}
    </section>
  );
}
