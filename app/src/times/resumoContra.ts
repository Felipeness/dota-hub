import type { Chaves, FatorChave } from "./schemas";

// O cartão "Contra a X" do topo da página: poucas linhas de jogador, cada uma com o número que a sustenta.
// Tudo sai de chaves.json; aqui só se escolhe, ordena e traduz o nome do fator em ação. Nada é inventado.

/** Seção dos detalhes para onde cada linha aponta (ids no ComoVencer). */
export type Ancora = "chaves-derrota" | "chaves-vitoria" | "chaves-banir" | "chaves-contra";
export type LinhaDoResumo = { texto: string; tag: string | null; ancora: Ancora };
export type ResumoContra = {
  facaIsso: LinhaDoResumo[]; preocupe: LinhaDoResumo[]; draft: LinhaDoResumo[]; historico: boolean;
};

const MAXIMO_FACA = 3;
const MAXIMO_PREOCUPE = 2;
const MAXIMO_BANS = 2;
const MAXIMO_PICKS = 2;
// Peso da amostra no ranking: n/(n + 15) encolhe efeitos medidos em poucas partidas (n=15 vale metade).
const AMOSTRA_MEIA_FORCA = 15;

const pct = (v: number) => `${Math.round(v * 100)}%`;

// Confiança baixa = IC 95% do efeito cruza zero (CONTRATO_CHAVES.md): não vai para o cartão.
const confirmado = (item: { confianca: string }) => item.confianca !== "baixa";

const forca = (f: FatorChave) => {
  const n = Math.min(f.n_com, f.n_sem);
  return Math.abs(f.efeito_pp) * (n / (n + AMOSTRA_MEIA_FORCA));
};

type Traducao = readonly [RegExp, (m: RegExpExecArray) => string];

// Fatores que derrubam o time: viram o que você deve fazer.
const ACAO_CONTRA_DERROTA: readonly Traducao[] = [
  [/^perde a troca de kills até 10 min$/, () => "Ganhe a troca de kills nos 10 primeiros min"],
  [/^pos (\d) morre 3\+ vezes até 15 min$/, (m) => `Mate o pos ${m[1]} deles 3+ vezes até os 15 min`],
  [/^safe lane perdida às 10:00$/, () => "Vença a safe lane deles com a sua offlane até os 10 min"],
  [/^mid perdido às 10:00$/, () => "Ganhe o mid até os 10 min"],
  [/^offlane perdida às 10:00$/, () => "Vença a offlane deles com a sua safe lane até os 10 min"],
  [/^adversário faz a 1ª torre$/, () => "Derrube a primeira torre do jogo"],
];

// Fatores que fazem o time vencer: viram o que você precisa impedir.
const ACAO_CONTRA_VITORIA: readonly Traducao[] = [
  [/^mid ganho às 10:00$/, () => "Segure o mid nos 10 primeiros min"],
  [/^offlane ganha às 10:00$/, () => "Não perca a sua safe lane para a offlane deles"],
  [/^vence a troca de kills até 10 min$/, () => "Não perca a troca de kills nos 10 primeiros min"],
  [/^faz a 1ª torre do jogo$/, () => "Não entregue a primeira torre do jogo"],
  [/^BKB do carry antes dos 24 min$/, () => "Atrase a BKB do carry deles para depois dos 24 min"],
  [/^Smoke antes dos 10 min$/, () => "Vigie smoke deles antes dos 10 min"],
];

// Fator novo sem tradução: aparece com o próprio nome, sem frase inventada.
function traduzir(fator: string, tabela: readonly Traducao[], prefixo: string): string {
  for (const [padrao, frase] of tabela) {
    const m = padrao.exec(fator);
    if (m) return frase(m);
  }
  return `${prefixo}: ${fator}`;
}

// "só" apenas quando, com o fator, o time perde a maioria dos jogos; "vencem só 55%" seria enganoso.
const tagDoFator = (f: FatorChave) => `vencem${f.wr_com < 0.5 && f.efeito_pp < 0 ? " só" : ""} ${pct(f.wr_com)} · n=${f.n_com}`;

function linhasDeFatores(fatores: readonly FatorChave[], lado: "derrota" | "vitoria", maximo: number): LinhaDoResumo[] {
  const tabela = lado === "derrota" ? ACAO_CONTRA_DERROTA : ACAO_CONTRA_VITORIA;
  const prefixo = lado === "derrota" ? "Busque" : "Impeça";
  return fatores.filter(confirmado).toSorted((a, b) => forca(b) - forca(a)).slice(0, maximo).map((f) => ({
    texto: traduzir(f.fator, tabela, prefixo), tag: tagDoFator(f), ancora: `chaves-${lado}`,
  }));
}

function linhasDoDraft(chaves: Chaves): LinhaDoResumo[] {
  const bans = chaves.banir.filter((b) => b.ban_confirma === true).slice(0, MAXIMO_BANS).map((b): LinhaDoResumo => ({
    texto: `Bana ${b.heroi}${b.quem_joga ? ` do ${b.quem_joga}` : ""}`,
    tag: typeof b.quando_banido_pelo_adv_wr === "number" && typeof b.n_banido === "number"
      ? `banido, vencem ${pct(b.quando_banido_pelo_adv_wr)} · n=${b.n_banido}` : null,
    ancora: "chaves-banir",
  }));
  const picks = chaves.herois_contra.filter(confirmado).toSorted((a, b) => a.efeito_pp - b.efeito_pp).slice(0, MAXIMO_PICKS)
    .map((h): LinhaDoResumo => ({ texto: `Pegue ${h.heroi}`, tag: `contra ele vencem ${pct(h.wr_equipe_contra)} · n=${h.n}`, ancora: "chaves-contra" }));
  if (bans.length + picks.length === 0) return [{ texto: "Nenhum ban ou pick confirmado pelos dados", tag: null, ancora: "chaves-banir" }];
  const semBan: LinhaDoResumo[] = bans.length === 0 ? [{ texto: "Nenhum ban confirmado pelos dados", tag: null, ancora: "chaves-banir" }] : [];
  return [...bans, ...semBan, ...picks];
}

export function resumirContra(chaves: Chaves): ResumoContra {
  return {
    facaIsso: linhasDeFatores(chaves.fatores_derrota, "derrota", MAXIMO_FACA),
    preocupe: linhasDeFatores(chaves.fatores_vitoria, "vitoria", MAXIMO_PREOCUPE),
    draft: linhasDoDraft(chaves),
    historico: chaves.historico === true,
  };
}
