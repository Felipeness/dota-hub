import type { HeroId, Mencao } from "./guia";

// Nota de um herói para o draft = soma de pesos em pontos percentuais (pp) de vitória. Cada peso vira um motivo
// visível, então a ordem da lista sempre se explica pelo que está escrito no cartão.

export type Funcao = "Carry" | "Support" | "Initiator" | "Disabler" | "Nuker" | "Durable" | "Escape" | "Pusher";

export type HeroiDraft = Readonly<{
  id: HeroId;
  nome: string;
  /** Nome interno sem o prefixo npc_dota_hero_: é o nome do retrato no CDN da Valve. */
  npc: string;
  funcoes: readonly string[];
  /** Partidas na faixa Divine do OpenDota (heroStats, última semana). */
  divine: Readonly<{ jogos: number; vitorias: number }>;
}>;

export type Placar = Readonly<{ jogos: number; vitorias: number }>;
/** matchups.get(a).get(b): partidas profissionais em que `a` enfrentou `b`, com as vitórias de `a`. */
export type Matchups = ReadonlyMap<HeroId, ReadonlyMap<HeroId, Placar>>;

export type Draft = Readonly<{ aliados: readonly HeroId[]; inimigos: readonly HeroId[]; bans: readonly HeroId[] }>;

export type Contexto = Readonly<{
  herois: ReadonlyMap<HeroId, HeroiDraft>;
  matchups: Matchups;
  mencoes: readonly Mencao[];
}>;

export type TipoDeMotivo = "matchup" | "guia" | "funcao" | "patch";
export type Motivo = Readonly<{ tipo: TipoDeMotivo; pp: number; curto: string; detalhe: string }>;
export type Sugestao = Readonly<{ heroi: HeroiDraft; nota: number; motivos: readonly Motivo[] }>;

/** "pick": o herói é para o seu time. "ban": o herói é o que o inimigo pegaria contra você. */
export type Perspectiva = "pick" | "ban";

const MINIMO_DE_JOGOS_NO_MATCHUP = 20;
// Encolhe o matchup de amostra pequena para 50%: com 20 jogos vale 1/6 do desvio, com 200 vale 2/3.
const JOGOS_DE_ENCOLHIMENTO = 100;
const MINIMO_DE_JOGOS_NO_PATCH = 500;
const PP_DO_GUIA_SEM_NUMERO = 2;
const PP_DA_FUNCAO = 1.5;
const MOTIVO_IRRELEVANTE_PP = 0.3;

const pct = (fracao: number) => `${(fracao * 100).toFixed(1).replace(".", ",")}%`;
export const formatarPp = (pp: number) => `${pp > 0 ? "+" : pp < 0 ? "−" : ""}${Math.abs(pp).toFixed(1).replace(".", ",")} pp`;
const milhar = (n: number) => n.toLocaleString("pt-BR");
const nomeDe = (contexto: Contexto, id: HeroId) => contexto.herois.get(id)?.nome ?? `herói ${id}`;

/** Vitórias do `heroi` contra o `rival`, lidas do lado que tiver o matchup carregado. */
export function placarContra(matchups: Matchups, heroi: HeroId, rival: HeroId): Placar | null {
  const direto = matchups.get(heroi)?.get(rival);
  if (direto) return direto;
  const inverso = matchups.get(rival)?.get(heroi);
  return inverso ? { jogos: inverso.jogos, vitorias: inverso.jogos - inverso.vitorias } : null;
}

function motivoDeMatchup(contexto: Contexto, candidato: HeroId, rival: HeroId, perspectiva: Perspectiva): Motivo | null {
  const placar = placarContra(contexto.matchups, candidato, rival);
  if (!placar || placar.jogos < MINIMO_DE_JOGOS_NO_MATCHUP) return null;
  const taxa = placar.vitorias / placar.jogos;
  const pp = (taxa - 0.5) * 100 * (placar.jogos / (placar.jogos + JOGOS_DE_ENCOLHIMENTO));
  const rivalNome = nomeDe(contexto, rival);
  const alvo = perspectiva === "pick" ? rivalNome : `seu ${rivalNome}`;
  return {
    tipo: "matchup",
    pp,
    curto: `Vence ${pct(taxa)} contra ${alvo}`,
    detalhe: `Em ${milhar(placar.jogos)} partidas profissionais no OpenDota com ${nomeDe(contexto, candidato)} contra ${rivalNome}, `
      + `${nomeDe(contexto, candidato)} venceu ${milhar(placar.vitorias)} (${pct(taxa)}). Amostra pequena pesa menos na nota.`,
  };
}

/** De quem é cada lado: no ban, "aliados" do candidato são os inimigos do usuário. */
function lados(draft: Draft, perspectiva: Perspectiva) {
  return perspectiva === "pick"
    ? { aliados: draft.aliados, inimigos: draft.inimigos }
    : { aliados: draft.inimigos, inimigos: draft.aliados };
}

type Relacao = Readonly<{ favorece: boolean; frase: string }>;

/** Como a menção afeta o candidato e como dizer isso em uma linha. null = a menção não é sobre este draft. */
function relacaoDaMencao(m: Mencao, candidato: HeroId, aliados: readonly HeroId[], inimigos: readonly HeroId[], nome: (id: HeroId) => string): Relacao | null {
  const bom = m.lista === "bom";
  if (m.dono === candidato) {
    const noLadoCerto = m.lado === "inimigo" ? inimigos.includes(m.alvo) : aliados.includes(m.alvo);
    if (!noLadoCerto) return null;
    const frase = m.lado === "inimigo"
      ? `Guia: ${bom ? "bom" : "ruim"} contra ${nome(m.alvo)}`
      : `Guia: ${bom ? "combina" : "não combina"} com ${nome(m.alvo)}`;
    return { favorece: bom, frase };
  }
  if (m.alvo !== candidato) return null;
  if (m.lado === "aliado" && aliados.includes(m.dono)) {
    return { favorece: bom, frase: `Guia do ${nome(m.dono)}: ${bom ? "pede" : "não quer"} ${nome(candidato)} no time` };
  }
  if (m.lado === "inimigo" && inimigos.includes(m.dono)) {
    return { favorece: !bom, frase: `Guia do ${nome(m.dono)}: ${bom ? "gosta de enfrentar" : "sofre contra"} ${nome(candidato)}` };
  }
  return null;
}

function motivosDoGuia(contexto: Contexto, candidato: HeroId, draft: Draft, perspectiva: Perspectiva): Motivo[] {
  const { aliados, inimigos } = lados(draft, perspectiva);
  const nome = (id: HeroId) => nomeDe(contexto, id);
  return contexto.mencoes.flatMap((m): Motivo[] => {
    const relacao = relacaoDaMencao(m, candidato, aliados, inimigos, nome);
    if (!relacao) return [];
    const magnitude = m.pp === null ? PP_DO_GUIA_SEM_NUMERO : Math.abs(m.pp);
    const pp = relacao.favorece ? magnitude : -magnitude;
    const numero = m.pp === null ? "" : ` (${formatarPp(m.pp)})`;
    return [{ tipo: "guia", pp, curto: `${relacao.frase}${numero}`, detalhe: `Guia do ${nome(m.dono)}: ${m.texto}` }];
  });
}

const NOME_DA_FUNCAO: Record<string, string> = {
  Carry: "carry", Support: "suporte", Initiator: "iniciação", Disabler: "controle",
};
// Quantos heróis com a função um time costuma querer (funções do OpenDota, não posições).
const FUNCOES_QUE_O_TIME_QUER: Readonly<Record<string, number>> = { Support: 2, Carry: 1, Initiator: 1, Disabler: 1 };
const MAXIMO_DE_CARRIES = 2;

function motivosDeFuncao(contexto: Contexto, candidato: HeroiDraft, time: readonly HeroId[], perspectiva: Perspectiva): Motivo[] {
  if (time.length === 0) return [];
  const funcoesDoTime = time.flatMap((id) => contexto.herois.get(id)?.funcoes ?? []);
  const quantos = (funcao: string) => funcoesDoTime.filter((f) => f === funcao).length;
  const dono = perspectiva === "pick" ? "Seu time" : "O inimigo";
  const faltando = Object.entries(FUNCOES_QUE_O_TIME_QUER)
    .filter(([funcao, minimo]) => candidato.funcoes.includes(funcao) && quantos(funcao) < minimo)
    .map(([funcao]): Motivo => ({
      tipo: "funcao",
      pp: PP_DA_FUNCAO,
      curto: `${dono} ainda precisa de ${NOME_DA_FUNCAO[funcao] ?? funcao}`,
      detalhe: `Pelas funções do OpenDota, ${dono.toLowerCase()} tem ${quantos(funcao)} herói(s) com ${funcao} e o comum é ter ${FUNCOES_QUE_O_TIME_QUER[funcao]}. ${candidato.nome} tem essa função.`,
    }));
  const carryDemais = candidato.funcoes.includes("Carry") && !candidato.funcoes.includes("Support") && quantos("Carry") >= MAXIMO_DE_CARRIES;
  if (!carryDemais) return faltando;
  return [...faltando, {
    tipo: "funcao",
    pp: -PP_DA_FUNCAO,
    curto: `${dono} já tem ${quantos("Carry")} carries`,
    detalhe: `Pelas funções do OpenDota, ${dono.toLowerCase()} já tem ${quantos("Carry")} heróis Carry; mais um divide o farm.`,
  }];
}

function motivoDePatch(heroi: HeroiDraft): Motivo | null {
  const { jogos, vitorias } = heroi.divine;
  if (jogos < MINIMO_DE_JOGOS_NO_PATCH) return null;
  const taxa = vitorias / jogos;
  return {
    tipo: "patch",
    pp: (taxa - 0.5) * 100,
    curto: `${pct(taxa)} de vitória no Divine`,
    detalhe: `Na faixa Divine do OpenDota (heroStats, últimos dias), ${heroi.nome} venceu ${milhar(vitorias)} de ${milhar(jogos)} partidas.`,
  };
}

export function avaliar(contexto: Contexto, heroi: HeroiDraft, draft: Draft, perspectiva: Perspectiva): Sugestao {
  const { aliados, inimigos } = lados(draft, perspectiva);
  const motivos = [
    ...inimigos.map((rival) => motivoDeMatchup(contexto, heroi.id, rival, perspectiva)),
    ...motivosDoGuia(contexto, heroi.id, draft, perspectiva),
    ...motivosDeFuncao(contexto, heroi, aliados, perspectiva),
    motivoDePatch(heroi),
  ].filter((m): m is Motivo => m !== null);
  const nota = motivos.reduce((soma, m) => soma + m.pp, 0);
  const visiveis = motivos.filter((m) => Math.abs(m.pp) >= MOTIVO_IRRELEVANTE_PP).toSorted((a, b) => Math.abs(b.pp) - Math.abs(a.pp));
  return { heroi, nota, motivos: visiveis };
}

const ocupados = (draft: Draft) => new Set([...draft.aliados, ...draft.inimigos, ...draft.bans]);

/** Melhores picks para o seu time (perspectiva "pick") ou maiores ameaças a banir (perspectiva "ban"). */
export function sugerir(contexto: Contexto, draft: Draft, perspectiva: Perspectiva, limite: number): Sugestao[] {
  const fora = ocupados(draft);
  return [...contexto.herois.values()]
    .filter((h) => !fora.has(h.id))
    .map((h) => avaliar(contexto, h, draft, perspectiva))
    .toSorted((a, b) => b.nota - a.nota)
    .slice(0, limite);
}
