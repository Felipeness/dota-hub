// Detecta sozinho o que o time inimigo do draft tem (controle, ilusões, cura, invisibilidade, evasão, dano mágico),
// reusando o motor de regras do confronto 1x1 (habilidades reais do OpenDota, nada digitado à mão).
import { provar, REGRAS, type MecanicaId } from "../confronto/mecanicas";
import type { Heroi } from "../confronto/modelo";
import type { HeroId, SituacaoId } from "./guia";

export type SituacaoDetectada = Readonly<{ situacao: SituacaoId; heroId: HeroId; heroNome: string; motivo: string }>;

/** Só as mecânicas que correspondem a uma situação da aba (silêncio/puro/fuga/passivas ficam de fora). */
const SITUACAO_DA_MECANICA: Readonly<Partial<Record<MecanicaId, SituacaoId>>> = {
  controle: "controle", ilusoes: "ilusoes", cura: "cura", invisibilidade: "invisibilidade", evasao: "evasao", magico: "magia",
};

/** Um inimigo do draft -> as situações que ele traz, cada uma com a prova (habilidade + trecho) que a confirma. */
function situacoesDoHeroi(heroi: Heroi): SituacaoDetectada[] {
  return REGRAS.flatMap((regra) => {
    const situacao = SITUACAO_DA_MECANICA[regra.id];
    if (!situacao) return [];
    const provas = heroi.habilidades.flatMap((h) => {
      const prova = provar(h, regra.detector);
      return prova ? [prova] : [];
    });
    if (provas.length < regra.minimo) return [];
    return [{ situacao, heroId: heroi.id, heroNome: heroi.nome, motivo: `${provas[0].habilidade}: ${provas[0].trecho}` }];
  });
}

export function situacoesDosInimigos(inimigos: readonly HeroId[], herois: readonly Heroi[]): readonly SituacaoDetectada[] {
  const porId = new Map(herois.map((h) => [h.id, h]));
  return inimigos.flatMap((id) => {
    const heroi = porId.get(id);
    return heroi ? situacoesDoHeroi(heroi) : [];
  });
}
