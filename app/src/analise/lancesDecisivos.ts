// Escolhe os lances que decidiram o jogo a partir dos achados do motor: peso do achado mais o impacto medido na
// partida (ouro do time que virou nos 2 min seguintes, estruturas e Roshan perdidos ou ganhos logo depois). Também
// separa o que o jogador fez bem e UM hábito para treinar, com a janela de tempo tirada da própria partida.
import { tempoDaPartida, type DetalheDaPartida } from "../live/partida/detalhe";
import { PESO_EM_NUMERO, type Achado } from "./modelo";

export const MAXIMO_DE_LANCES = 8;
const MAXIMO_DE_ACERTOS_NOS_LANCES = 2;
const MAXIMO_DE_ACERTOS_EM_DESTAQUE = 3;
/** Dois achados a menos de 30 s um do outro são o mesmo lance (ex. a morte e a torre que caiu por ela). */
const MESMO_LANCE_S = 30;
const JANELA_DE_ESTRUTURA_S = 90;
const JANELA_DE_ROSHAN_S = 120;
const MINUTOS_DE_EFEITO_NO_OURO = 2;
/** No empate de um mesmo lance, vence o achado que cita horários de respawn e torre (o mais concreto). */
const MAIS_CONCRETOS: readonly string[] = ["morte-em-inferioridade"];
const BONUS_DE_CONCRETO = 0.5;
const OURO_POR_PONTO = 1_000;
const TETO_DO_OURO = 5;

/** `relacionados`: outros achados do mesmo tipo no mesmo meio minuto, que viram uma linha "também neste lance". */
export type Lance = Readonly<{ achado: Achado; t: number; impacto: number; relacionados: readonly Achado[] }>;
export type Treino = Readonly<{ titulo: string; texto: string; de: number; ate: number }>;
export type LancesDecisivos = Readonly<{ lances: readonly Lance[]; fezBem: readonly Lance[]; treino: Treino | null }>;

type ComTempo = Achado & Readonly<{ minuto: number }>;
const temTempo = (a: Achado): a is ComTempo => a.minuto !== null;

/** Ouro que o time perdeu (erro) ou ganhou (acerto) do minuto do lance até 2 min depois, em pontos de 1.000. */
function viradaDeOuro(detalhe: DetalheDaPartida, achado: ComTempo): number {
  const ouro = detalhe.vantagemDoTime.ouro;
  const minuto = Math.floor(achado.minuto);
  const antes = ouro[minuto];
  const depois = ouro[Math.min(minuto + MINUTOS_DE_EFEITO_NO_OURO, ouro.length - 1)];
  if (antes === undefined || depois === undefined) return 0;
  const aFavor = achado.tipo === "acerto" ? depois - antes : antes - depois;
  return Math.min(TETO_DO_OURO, Math.max(0, aFavor / OURO_POR_PONTO));
}

/** Estruturas e Roshans logo depois: do seu time num erro, do inimigo num acerto. */
function objetivosDepois(detalhe: DetalheDaPartida, achado: ComTempo): number {
  const t = achado.minuto * 60;
  const perdeu = achado.tipo === "erro";
  const ladoQuePerde = perdeu ? detalhe.lado : detalhe.lado === "radiant" ? "dire" : "radiant";
  const estruturas = detalhe.panorama.estruturas.filter((e) => e.lado === ladoQuePerde && e.t >= t && e.t - t <= JANELA_DE_ESTRUTURA_S);
  const roshans = detalhe.panorama.roshans.filter((r) => r.lado !== null && (r.lado === detalhe.lado) !== perdeu && r.t >= t && r.t - t <= JANELA_DE_ROSHAN_S);
  return estruturas.length + roshans.length * 2;
}

export function impactoDoLance(detalhe: DetalheDaPartida, achado: ComTempo): number {
  const concreto = MAIS_CONCRETOS.some((prefixo) => achado.id.startsWith(prefixo)) ? BONUS_DE_CONCRETO : 0;
  return PESO_EM_NUMERO[achado.peso] * 2 + viradaDeOuro(detalhe, achado) + objetivosDepois(detalhe, achado) + concreto;
}

const mesmoLance = (a: Lance, b: Lance) => Math.abs(a.t - b.t) < MESMO_LANCE_S;

/** Maior impacto primeiro, sem dois lances no mesmo meio minuto; os que ficaram de fora viram `relacionados`. */
function semRepetir(candidatos: readonly Lance[], limite: number): Lance[] {
  const porImpacto = [...candidatos].sort((a, b) => b.impacto - a.impacto || a.t - b.t);
  const escolhidos = porImpacto.reduce<Lance[]>((lista, lance) =>
    lista.length >= limite || lista.some((e) => mesmoLance(e, lance)) ? lista : [...lista, lance], []);
  return escolhidos.map((lance) => ({
    ...lance,
    relacionados: porImpacto.filter((outro) => outro !== lance && mesmoLance(outro, lance)).map((outro) => outro.achado),
  }));
}

const lancesDoTipo = (detalhe: DetalheDaPartida, achados: readonly Achado[], tipo: Achado["tipo"]): Lance[] =>
  achados.filter(temTempo).filter((a) => a.tipo === tipo)
    .map((achado) => ({ achado, t: Math.round(achado.minuto * 60), impacto: impactoDoLance(detalhe, achado), relacionados: [] }));

export function escolherLances(detalhe: DetalheDaPartida, achados: readonly Achado[]): LancesDecisivos {
  const acertos = semRepetir(lancesDoTipo(detalhe, achados, "acerto"), MAXIMO_DE_ACERTOS_EM_DESTAQUE);
  const acertosNosLances = acertos.slice(0, MAXIMO_DE_ACERTOS_NOS_LANCES);
  const erros = semRepetir(lancesDoTipo(detalhe, achados, "erro"), MAXIMO_DE_LANCES - acertosNosLances.length);
  return {
    lances: [...erros, ...acertosNosLances].sort((a, b) => a.t - b.t),
    fezBem: acertos,
    treino: treinoDaPartida(detalhe, achados.filter((a) => a.tipo === "erro")),
  };
}

type Tema = "mortes" | "visao" | "build" | "objetivos" | "farm";
/** Prefixo do id do achado → tema do treino. O primeiro prefixo que casar vence. */
const TEMA_DO_ACHADO: readonly (readonly [string, Tema])[] = [
  ["build-ouro-no-bolso", "build"], ["build-", "build"],
  ["morte-em-inferioridade", "mortes"], ["torre-perdida-apos-morte", "mortes"], ["aegis-ativa", "mortes"],
  ["mortes-no-farm", "mortes"], ["mortes-repetidas", "mortes"],
  ["sem-wards", "visao"], ["wards-colocadas", "visao"],
  ["buyback-janela-roshan", "objetivos"], ["contagem-de-roshan", "objetivos"],
  ["gpm-", "farm"], ["lh10-", "farm"], ["lane-", "farm"],
];
const temaDo = (achado: Achado): Tema | null => TEMA_DO_ACHADO.find(([prefixo]) => achado.id.startsWith(prefixo))?.[1] ?? null;

const ANTECEDENCIA_S = 90;
type Janela = Readonly<{ de: number; ate: number }>;
const antesDe = (t: number): Janela => ({ de: Math.max(0, t - ANTECEDENCIA_S), ate: t });
const faixa = ({ de, ate }: Janela) => `entre ${tempoDaPartida(de)} e ${tempoDaPartida(ate)}`;

/** Cada tema vira um hábito com pergunta concreta; a janela é a do primeiro erro do tema nesta partida. */
type Base = Readonly<{ janela: Janela; erros: readonly ComTempo[]; detalhe: DetalheDaPartida }>;
const HABITO_DO_TEMA: Readonly<Record<Tema, (base: Base) => Omit<Treino, "de" | "ate">>> = {
  mortes: ({ janela, erros }) => {
    const mortes = new Set(erros.map((e) => Math.round(e.minuto * 60))).size;
    return {
    titulo: "Contar quem está vivo antes de avançar",
    texto: `${capitalizar(faixa(janela))}, antes de passar da sua torre, olhe o placar e o minimapa: quantos aliados ` +
      "estão vivos e quantos inimigos aparecem? Com menos gente viva ou dois inimigos sumidos, fique na torre até o " +
      `respawn. Nesta partida, ${mortes} ${mortes === 1 ? "morte apontada" : "mortes apontadas"} pela análise; a primeira às ${tempoDaPartida(janela.ate)}.`,
    };
  },
  visao: ({ janela }) => ({
    titulo: "Ward antes do objetivo",
    texto: `${capitalizar(faixa(janela))}, compre uma observer e coloque no caminho do Roshan ou da torre que o inimigo ` +
      "vai atacar, antes de ele chegar lá.",
  }),
  build: ({ janela, erros }) => ({
    titulo: "Decidir o próximo item antes de lutar",
    texto: `${capitalizar(faixa(janela))}, a cada volta à base, olhe os 5 heróis inimigos e o ouro no bolso: compre o ` +
      `item ou o componente que responde a eles antes da próxima luta. Primeiro lance de build: ${erros[0]?.titulo ?? ""}.`,
  }),
  objetivos: ({ janela }) => ({
    titulo: "Relógio do Roshan",
    texto: `${capitalizar(faixa(janela))}, anote quando o Roshan inimigo morreu: ele volta entre 8 e 11 min depois. ` +
      "Nessa janela, guarde ouro para buyback e fique perto do poço com o time.",
  }),
  farm: ({ janela, detalhe }) => ({
    titulo: "Last hit na lane",
    texto: `${capitalizar(faixa(janela))}, a cada minuto confira os last hits no placar. Nesta partida, aos 10:00, ` +
      `você tinha ${detalhe.curvas.lh[10] ?? "?"}${detalhe.referencia ? `; a mediana do herói é ${Math.round(detalhe.referencia.lhPorMin * 10)}` : ""}.`,
  }),
};

const capitalizar = (texto: string) => texto.charAt(0).toUpperCase() + texto.slice(1);

/** Primeiro Roshan do inimigo dá a janela dos temas sem instante próprio (visão, contagem de Roshan). */
function janelaDoTema(detalhe: DetalheDaPartida, erros: readonly ComTempo[]): Janela {
  const [primeiro] = erros;
  if (primeiro) return antesDe(Math.round(primeiro.minuto * 60));
  const roshanInimigo = detalhe.panorama.roshans.find((r) => r.lado !== null && r.lado !== detalhe.lado);
  return antesDe(roshanInimigo?.t ?? 10 * 60);
}

export function treinoDaPartida(detalhe: DetalheDaPartida, erros: readonly Achado[]): Treino | null {
  const pontos = erros.reduce((soma, erro) => {
    const tema = temaDo(erro);
    return tema ? soma.set(tema, (soma.get(tema) ?? 0) + PESO_EM_NUMERO[erro.peso]) : soma;
  }, new Map<Tema, number>());
  const [tema] = [...pontos.entries()].sort((a, b) => b[1] - a[1])[0] ?? [];
  if (!tema) return null;
  const doTema = erros.filter((e) => temaDo(e) === tema).filter(temTempo).sort((a, b) => a.minuto - b.minuto);
  const janela = janelaDoTema(detalhe, doTema);
  return { ...HABITO_DO_TEMA[tema]({ janela, erros: doTema, detalhe }), ...janela };
}
