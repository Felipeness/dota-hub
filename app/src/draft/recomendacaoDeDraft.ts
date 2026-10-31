// Núcleo da tela de 10 contas: bans, picks por aliado, melhor draft e chance. Tudo puro em cima de modeloDeJogador.ts;
// a evidência de cada regra está em docs/design/modelo-draft-10-ids.md.
import type { HeroId } from "./guia";
import {
  comHeroisFora, expit, logitParaPp, perdaSemOHeroi, perfilDoJogador, valorEsperado, varianciaEsperada,
  type Historico, type ModeloDeDraft, type PerfilDoJogador, type ValorDoHeroi,
} from "./modeloDeJogador";
import { formatarPp } from "./pontuacao";
import { fracaoNaPosicao, permutacoes, POSICOES, type HeroiPro, type PosicaoId } from "./posicoesPro";

export type CincoContas = readonly [Historico, Historico, Historico, Historico, Historico];

export type EntradaDoDraft = Readonly<{
  aliados: CincoContas;
  inimigos: CincoContas;
  modelo: ModeloDeDraft;
  posicoesPro: ReadonlyMap<HeroId, HeroiPro>;
  nomeDoHeroi: (heroi: HeroId) => string;
  /** Agora em segundos Unix, de quem chama: o módulo não lê o relógio. */
  agoraS: number;
  /** Heróis já fora do draft. */
  bansFeitos?: readonly HeroId[];
  quantidadeDeBans?: number;
}>;

export type Intervalo = Readonly<{ baixo: number; alto: number }>;
/** "nao_da_para_decidir": os intervalos se sobrepõem, a ordem da lista pode ser só ruído. */
export type Decisao = "decidido" | "nao_da_para_decidir";

export type BanRecomendado = Readonly<{
  heroi: HeroId;
  /** Conta inimiga que mais perde com o ban. */
  jogador: number;
  /** Pontos percentuais de vitória que o ban tira do inimigo, descontado o que tira do seu time. */
  notaPp: number; intervaloPp: Intervalo; chanceDePick: number; jogos: number; vitorias: number; motivo: string;
}>;
export type ListaDeBans = Readonly<{ decisao: Decisao; itens: readonly BanRecomendado[] }>;

export type LeituraDaVantagem = "acima_da_base" | "abaixo_da_base" | "indefinido";
export type PickRecomendado = Readonly<{
  heroi: HeroId;
  /** Contra o que a própria conta faz pegando o de sempre. */
  vantagemPp: number; intervaloPp: Intervalo; leitura: LeituraDaVantagem; jogos: number; vitorias: number; motivo: string;
}>;
export type PicksDoJogador = Readonly<{ conta: number; decisao: Decisao; picks: readonly PickRecomendado[] }>;

export type EscolhaDoDraft = Readonly<{ conta: number; posicao: PosicaoId; heroi: HeroId; vantagemPp: number; intervaloPp: Intervalo; jogos: number; motivo: string }>;
export type Chance = Readonly<{ estimativa: number; baixo: number; alto: number; decisao: Decisao }>;
export type MelhorDraft = Readonly<{ escolhas: readonly EscolhaDoDraft[]; chance: Chance }>;

export type TipoDeAviso = "sem_dados" | "amostra_pequena" | "historico_antigo" | "historico_de_liga";
export type AvisoDeConta = Readonly<{ conta: number; lado: "aliado" | "inimigo"; tipo: TipoDeAviso; texto: string }>;

export type RecomendacaoDoDraft = Readonly<{
  bans: ListaDeBans;
  picks: readonly PicksDoJogador[];
  melhorDraft: MelhorDraft;
  avisos: readonly AvisoDeConta[];
}>;

const BANS_PADRAO = 5;
const PICKS_POR_JOGADOR = 5;
const Z_95 = 1.96;
/** Abaixo disso a conta perde de 3 a 5 pp de vitória por falta de prática, então o herói não entra como recomendação. */
const JOGOS_MINIMOS_NO_POOL = 5;
const JOGOS_DE_AMOSTRA_PEQUENA_NO_HEROI = 20;
const JOGOS_DE_AMOSTRA_PEQUENA = 30;
const DIAS_DE_HISTORICO_ANTIGO = 180;
const DIA_S = 86_400;
const FRACAO_MINIMA_NA_POSICAO = 0.1;
// Com heróis distintos, cada um dos 5 sempre acha um dos seus 5 melhores livre: a busca não precisa de mais candidatos.
const CANDIDATOS_POR_ALIADO = 5;
const AFINIDADE_MINIMA = 1e-4;

const somar = (valores: readonly number[]) => valores.reduce((soma, v) => soma + v, 0);
const intervalo = (centro: number, variancia: number): Intervalo => {
  const margem = Z_95 * Math.sqrt(variancia);
  return { baixo: centro - margem, alto: centro + margem };
};
const emPp = ({ baixo, alto }: Intervalo): Intervalo => ({ baixo: logitParaPp(baixo), alto: logitParaPp(alto) });
const pct = (fracao: number) => `${Math.round(fracao * 100)}%`;
const placar = ({ vitorias, jogos }: Pick<ValorDoHeroi, "vitorias" | "jogos">) => `${vitorias}V-${jogos - vitorias}D`;
const notaDePouco = (jogos: number) => (jogos < JOGOS_DE_AMOSTRA_PEQUENA_NO_HEROI ? ` Só ${jogos} jogos: pode ser ruído.` : "");

/** O primeiro lugar só está decidido se o intervalo dele fica acima de zero e acima do intervalo do segundo. */
function decidirTopo(itens: readonly Readonly<{ intervaloPp: Intervalo }>[]): Decisao {
  const [primeiro, segundo] = itens;
  if (!primeiro || primeiro.intervaloPp.baixo <= 0) return "nao_da_para_decidir";
  return !segundo || primeiro.intervaloPp.baixo > segundo.intervaloPp.alto ? "decidido" : "nao_da_para_decidir";
}

type Perda = Readonly<{ perfil: PerfilDoJogador; heroi: ValorDoHeroi; perda: number }>;

function perdasDe(perfis: readonly PerfilDoJogador[]): readonly Perda[] {
  return perfis.flatMap((perfil) => perfil.herois.map((heroi) => ({ perfil, heroi, perda: perdaSemOHeroi(perfil, heroi) })));
}

function porHeroi<T extends { heroi: ValorDoHeroi }>(itens: readonly T[]): ReadonlyMap<HeroId, readonly T[]> {
  return itens.reduce((grupos, item) => grupos.set(item.heroi.heroi, [...(grupos.get(item.heroi.heroi) ?? []), item]), new Map<HeroId, readonly T[]>());
}

const varianciaDoBan = (perdas: readonly Perda[]) => somar(perdas.map(({ heroi }) => heroi.chanceDePick ** 2 * heroi.variancia));

function recomendarBans(aliados: readonly PerfilDoJogador[], inimigos: readonly PerfilDoJogador[], nomeDoHeroi: (h: HeroId) => string, limite: number): ListaDeBans {
  const perdasDoAliado = porHeroi(perdasDe(aliados).filter(({ perfil }) => perfil.temDados));
  const candidatos = [...porHeroi(perdasDe(inimigos).filter(({ perfil }) => perfil.temDados))].flatMap(([id, doInimigo]): BanRecomendado[] => {
    const doAliado = perdasDoAliado.get(id) ?? [];
    const motivador = doInimigo.toSorted((a, b) => b.perda - a.perda)[0];
    const nota = somar(doInimigo.map((p) => p.perda)) - somar(doAliado.map((p) => p.perda));
    if (!motivador || motivador.perda <= 0 || nota <= 0) return [];
    const { heroi } = motivador;
    return [{
      heroi: id, jogador: motivador.perfil.conta, notaPp: logitParaPp(nota),
      intervaloPp: emPp(intervalo(nota, varianciaDoBan([...doInimigo, ...doAliado]))),
      chanceDePick: heroi.chanceDePick, jogos: heroi.jogos, vitorias: heroi.vitorias,
      motivo: `${nomeDoHeroi(id)} sai em ${pct(heroi.chanceDePick)} dos picks previstos dessa conta (${placar(heroi)}). Tirar custa ${formatarPp(logitParaPp(nota))} ao inimigo.${notaDePouco(heroi.jogos)}`,
    }];
  });
  const itens = candidatos.toSorted((a, b) => b.notaPp - a.notaPp).slice(0, limite);
  return { decisao: decidirTopo(itens), itens };
}

const noPool = (h: ValorDoHeroi) => h.jogos >= JOGOS_MINIMOS_NO_POOL;

function leituraDa({ baixo, alto }: Intervalo): LeituraDaVantagem {
  if (baixo > 0) return "acima_da_base";
  return alto < 0 ? "abaixo_da_base" : "indefinido";
}

const FRASE_DA_LEITURA: Readonly<Record<LeituraDaVantagem, string>> = {
  acima_da_base: "Acima da média da própria conta.",
  abaixo_da_base: "Abaixo da média da própria conta.",
  indefinido: "Não dá para dizer que é melhor que o de sempre.",
};

function recomendarPicksDe(perfil: PerfilDoJogador, nomeDoHeroi: (h: HeroId) => string): PicksDoJogador {
  const base = valorEsperado(perfil);
  const picks = perfil.herois.filter(noPool).map((h): PickRecomendado => {
    const vantagem = h.valor - base;
    const faixa = emPp(intervalo(vantagem, h.variancia));
    const leitura = leituraDa(faixa);
    return {
      heroi: h.heroi, vantagemPp: logitParaPp(vantagem), intervaloPp: faixa, leitura, jogos: h.jogos, vitorias: h.vitorias,
      motivo: `${nomeDoHeroi(h.heroi)}: ${placar(h)}, ${formatarPp(logitParaPp(vantagem))} sobre a linha de base. ${FRASE_DA_LEITURA[leitura]}${notaDePouco(h.jogos)}`,
    };
  }).toSorted((a, b) => b.vantagemPp - a.vantagemPp).slice(0, PICKS_POR_JOGADOR);
  return { conta: perfil.conta, decisao: decidirTopo(picks), picks };
}

function afinidade(perfil: PerfilDoJogador, posicao: PosicaoId, pro: ReadonlyMap<HeroId, HeroiPro>): number {
  return somar(perfil.herois.map((h) => h.chanceDePick * (fracaoNaPosicao(pro.get(h.heroi), posicao) ?? 0)));
}

/** Cada conta na posição que os heróis dela costumam ocupar nos pros; a atribuição conjunta resolve quem disputa a mesma. */
function posicoesProvaveis(aliados: readonly PerfilDoJogador[], pro: ReadonlyMap<HeroId, HeroiPro>): readonly PosicaoId[] {
  const pontuar = (posicoes: readonly PosicaoId[]) => somar(aliados.map((perfil, i) => {
    const posicao = posicoes[i];
    return posicao === undefined ? 0 : Math.log(Math.max(afinidade(perfil, posicao, pro), AFINIDADE_MINIMA));
  }));
  const pontuadas = permutacoes(POSICOES).map((posicoes) => ({ posicoes, pontos: pontuar(posicoes) }));
  return pontuadas.toSorted((a, b) => b.pontos - a.pontos)[0]?.posicoes ?? POSICOES;
}

type Candidato = Readonly<{ heroi: ValorDoHeroi; pontos: number }>;

/** Do filtro mais exigente ao mais frouxo: sem ninguém que sirva, uma conta sem pool de suporte ainda recebe um herói. */
function candidatosDoAliado(perfil: PerfilDoJogador, posicao: PosicaoId, pro: ReadonlyMap<HeroId, HeroiPro>, negacao: ReadonlyMap<HeroId, number>): readonly Candidato[] {
  const naPosicao = (h: ValorDoHeroi) => (fracaoNaPosicao(pro.get(h.heroi), posicao) ?? 0) >= FRACAO_MINIMA_NA_POSICAO;
  const filtros = [(h: ValorDoHeroi) => noPool(h) && naPosicao(h), naPosicao, () => true];
  const herois = filtros.map((filtro) => perfil.herois.filter(filtro)).find((lista) => lista.length >= CANDIDATOS_POR_ALIADO) ?? perfil.herois;
  return herois
    .map((heroi) => ({ heroi, pontos: heroi.valor + (negacao.get(heroi.heroi) ?? 0) }))
    .toSorted((a, b) => b.pontos - a.pontos)
    .slice(0, CANDIDATOS_POR_ALIADO);
}

type Busca = Readonly<{ herois: readonly ValorDoHeroi[]; pontos: number }>;

/** Melhor combinação sem herói repetido. No máximo 5^5 caminhos: a busca direta basta. */
function melhorCombinacao(candidatos: readonly (readonly Candidato[])[], usados: ReadonlySet<HeroId> = new Set()): Busca | null {
  const [doAliado, ...resto] = candidatos;
  if (!doAliado) return { herois: [], pontos: 0 };
  const opcoes = doAliado.filter(({ heroi }) => !usados.has(heroi.heroi)).flatMap(({ heroi, pontos }): Busca[] => {
    const seguinte = melhorCombinacao(resto, new Set([...usados, heroi.heroi]));
    return seguinte ? [{ herois: [heroi, ...seguinte.herois], pontos: pontos + seguinte.pontos }] : [];
  });
  return opcoes.toSorted((a, b) => b.pontos - a.pontos)[0] ?? null;
}

type Contribuicao = Readonly<{ valor: number; variancia: number }>;

const peloCostume = (perfil: PerfilDoJogador): Contribuicao => ({ valor: valorEsperado(perfil), variancia: varianciaEsperada(perfil) });

/** Conta sem dados não ganha crédito pelo herói sugerido: quem nunca jogou o herói perde cerca de 5 pp, e ela pode nunca ter jogado. */
const contribuicaoDoAliado = (perfil: PerfilDoJogador, heroi: ValorDoHeroi): Contribuicao => (perfil.temDados ? heroi : peloCostume(perfil));

function calcularChance(meus: readonly Contribuicao[], deles: readonly Contribuicao[]): Chance {
  const logitDoDraft = somar(meus.map((c) => c.valor)) - somar(deles.map((c) => c.valor));
  const { baixo, alto } = intervalo(logitDoDraft, somar([...meus, ...deles].map((c) => c.variancia)));
  return { estimativa: expit(logitDoDraft), baixo: expit(baixo), alto: expit(alto), decisao: baixo > 0 || alto < 0 ? "decidido" : "nao_da_para_decidir" };
}

function escolhaDoAliado(perfil: PerfilDoJogador, posicao: PosicaoId, heroi: ValorDoHeroi, nomeDoHeroi: (h: HeroId) => string): EscolhaDoDraft {
  const vantagem = heroi.valor - valorEsperado(perfil);
  const historico = perfil.temDados ? `${placar(heroi)} nessa conta` : "conta sem dados, vale só a força do herói";
  return {
    conta: perfil.conta, posicao, heroi: heroi.heroi, vantagemPp: logitParaPp(vantagem), intervaloPp: emPp(intervalo(vantagem, heroi.variancia)),
    jogos: heroi.jogos, motivo: `${nomeDoHeroi(heroi.heroi)} (${historico}).`,
  };
}

function montarMelhorDraft(aliados: readonly PerfilDoJogador[], inimigos: readonly PerfilDoJogador[], entrada: EntradaDoDraft): MelhorDraft {
  const posicoes = posicoesProvaveis(aliados, entrada.posicoesPro);
  // Pegar o herói que o inimigo queria também é tirá-lo dele; quanto, é o mesmo cálculo do ban.
  const negacao = new Map([...porHeroi(perdasDe(inimigos))].map(([id, perdas]) => [id, somar(perdas.map((p) => Math.max(p.perda, 0)))]));
  const candidatos = aliados.map((perfil, i) => candidatosDoAliado(perfil, posicoes[i] ?? 1, entrada.posicoesPro, negacao));
  const herois = melhorCombinacao(candidatos)?.herois ?? [];
  const pegos = new Set(herois.map((h) => h.heroi));
  const paresDoDraft = herois.flatMap((heroi, i) => {
    const perfil = aliados[i];
    return perfil ? [{ perfil, heroi, posicao: posicoes[i] ?? 1 }] : [];
  });
  return {
    escolhas: paresDoDraft.map(({ perfil, heroi, posicao }) => escolhaDoAliado(perfil, posicao, heroi, entrada.nomeDoHeroi)),
    chance: calcularChance(
      paresDoDraft.map(({ perfil, heroi }) => contribuicaoDoAliado(perfil, heroi)),
      inimigos.map((perfil) => peloCostume(comHeroisFora(perfil, pegos))),
    ),
  };
}

const TEXTO_DO_AVISO: Readonly<Record<TipoDeAviso, string>> = {
  sem_dados: "Sem partidas públicas: perfil privado, conta nova ou Immortal Draft acima de 8.500 MMR. Nada é estimado sobre essa conta, só entra a força média dos heróis.",
  amostra_pequena: "Poucas partidas públicas: as notas dessa conta ficam quase na média.",
  historico_antigo: "A última partida pública tem mais de 180 dias: o que ela joga hoje pode ser outro.",
  historico_de_liga: "Histórico público quase todo de liga. O modelo foi calibrado em ranqueada e vale menos aqui.",
};

function tiposDeAviso(perfil: PerfilDoJogador, agoraS: number): readonly TipoDeAviso[] {
  if (!perfil.temDados || perfil.ultimaPartida === null) return ["sem_dados"];
  const antigo = agoraS - perfil.ultimaPartida > DIAS_DE_HISTORICO_ANTIGO * DIA_S;
  return [
    ...(perfil.jogos < JOGOS_DE_AMOSTRA_PEQUENA ? ["amostra_pequena" as const] : []),
    ...(antigo ? ["historico_antigo" as const] : []),
    ...(perfil.deLiga ? ["historico_de_liga" as const] : []),
  ];
}

function avisosDe(perfis: readonly PerfilDoJogador[], lado: AvisoDeConta["lado"], agoraS: number): readonly AvisoDeConta[] {
  return perfis.flatMap((perfil) => tiposDeAviso(perfil, agoraS).map((tipo) => ({ conta: perfil.conta, lado, tipo, texto: TEXTO_DO_AVISO[tipo] })));
}

export function recomendarDraft(entrada: EntradaDoDraft): RecomendacaoDoDraft {
  const { modelo, nomeDoHeroi, agoraS, bansFeitos = [], quantidadeDeBans = BANS_PADRAO } = entrada;
  const fora = new Set(bansFeitos);
  const perfis = (contas: CincoContas) => contas.map((historico) => comHeroisFora(perfilDoJogador(historico, modelo), fora));
  const aliados = perfis(entrada.aliados);
  const inimigos = perfis(entrada.inimigos);
  const bans = recomendarBans(aliados, inimigos, nomeDoHeroi, quantidadeDeBans);
  const banidos = new Set(bans.itens.map((b) => b.heroi));
  const aliadosSemBans = aliados.map((perfil) => comHeroisFora(perfil, banidos));
  const inimigosSemBans = inimigos.map((perfil) => comHeroisFora(perfil, banidos));
  return {
    bans,
    picks: aliadosSemBans.map((perfil) => recomendarPicksDe(perfil, nomeDoHeroi)),
    melhorDraft: montarMelhorDraft(aliadosSemBans, inimigosSemBans, entrada),
    avisos: [...avisosDe(aliados, "aliado", agoraS), ...avisosDe(inimigos, "inimigo", agoraS)],
  };
}
