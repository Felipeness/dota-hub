// "Sua build": as suas compras grandes contra a build dos pros do mesmo herói contra este draft (contra_inimigo do
// confronto, somando os 5 inimigos como matchupDePro), item a item, e até 4 vereditos concretos com horário.
import { buildsPossiveis, itensDosPros, ordemDosPros, ordemEntre, type BuildPossivel, type ItemDosPros } from "../confronto/buildsDosPros";
import type { Marca } from "../confronto/SequenciaDeBuild";
import { tempoDaPartida } from "../live/partida/detalhe";
import { PESO_EM_NUMERO, type Contexto, type Peso } from "./modelo";
import { ITEM_FINAL_DO_COMPONENTE } from "./regras/build/componentesDeItem";
import { FRACAO_DE_CORE, FRACAO_DE_ESCOLHA, FRACAO_RARA, matchupDePro, type Matchup } from "./regras/build/matchupDePro";

/** Item comprado que vira outro na mesma build: na sequência só aparece o final. Force Staff -> Hurricane Pike não
 * entra em ITEM_FINAL_DO_COMPONENTE porque lá ele mudaria o julgamento do Force Staff de suporte. */
const VIRA_OUTRO_ITEM: Readonly<Record<string, string>> = { ...ITEM_FINAL_DO_COMPONENTE, force_staff: "hurricane_pike" };

const MAXIMO_DE_VEREDITOS = 4;
/** Item que os pros fazem nesta fração das partidas e você não fez vira veredito (Daedalus em 27%). */
const FRACAO_DE_FALTA = 0.25;
/** Alternativa citada no lugar de um item raro: escolha de pelo menos esta fração dos pros. */
const FRACAO_DA_ALTERNATIVA = 0.15;
/** A ordem dos pros só vale como regra quando a maioria é clara. */
const MAIORIA_DA_ORDEM = 0.6;
const MARGEM_MINIMA_MIN = 3;
const MARGEM_PROPORCIONAL = 0.3;
const limiteDeAtraso = (minutoPro: number) => Math.max(MARGEM_MINIMA_MIN, minutoPro * MARGEM_PROPORCIONAL);

export type MinhaCompra = Readonly<{
  chave: string; nome: string; minuto: number; marca: Marca;
  /** Minuto mediano dos pros quando o item é escolha comum deles (30%+); null fora disso. */
  minutoPro: number | null;
  fracaoPro: number | null;
  nota: string;
}>;
export type ItemDaLinhaPro = ItemDosPros & Readonly<{ feito: boolean }>;
export type VereditoDaBuild = Readonly<{ id: string; peso: Peso; minuto: number | null; texto: string; porque: string | null }>;

export type SuaBuild = Readonly<{
  inimigos: readonly string[];
  jogos: number;
  minhas: readonly MinhaCompra[];
  /** Itens de 30%+ dos pros, em ordem de minuto; `feito` diz se você também fez. */
  pros: readonly ItemDaLinhaPro[];
  builds: readonly BuildPossivel[];
  vereditos: readonly VereditoDaBuild[];
  duracaoMin: number;
}>;

type Compra = Readonly<{ chave: string; nome: string; minuto: number }>;

/** Primeira compra de cada item que conta como build: item grande ou item que os pros do herói fecham. */
function minhasCompras(ctx: Contexto, matchup: Matchup): Compra[] {
  const vistas = new Map<string, Compra>();
  for (const c of ctx.detalhe.compras) {
    if (vistas.has(c.chave) || c.chave.startsWith("recipe_")) continue;
    if (c.grande || matchup.conhecidos.has(c.chave)) vistas.set(c.chave, { chave: c.chave, nome: c.nome, minuto: c.t / 60 });
  }
  const compras = [...vistas.values()];
  return compras.filter((c) => {
    const final = VIRA_OUTRO_ITEM[c.chave];
    return !(final && vistas.has(final));
  });
}

const minutoInteiro = (m: number) => Math.round(m);
const porcentagem = (fracao: number) => `${Math.round(100 * fracao)}%`;
const relogio = (minuto: number) => tempoDaPartida(Math.round(minuto * 60));

function julgar(compra: Compra, matchup: Matchup, pros: ReadonlyMap<string, ItemDosPros>): MinhaCompra {
  const pro = pros.get(compra.chave);
  const fracaoPro = matchup.conhecidos.has(compra.chave) ? (matchup.itens.get(compra.chave)?.fracao ?? 0) : null;
  const base = { ...compra, fracaoPro, minutoPro: null };
  if (pro && pro.fracao >= FRACAO_DE_ESCOLHA) {
    const atraso = compra.minuto - pro.minuto;
    return atraso > limiteDeAtraso(pro.minuto)
      ? { ...base, minutoPro: pro.minuto, marca: "atrasado", nota: `+${minutoInteiro(atraso)} min` }
      : { ...base, minutoPro: pro.minuto, marca: "no-tempo", nota: `pros ${minutoInteiro(pro.minuto)}'` };
  }
  if (fracaoPro === null || fracaoPro <= FRACAO_RARA) return { ...base, marca: "rara", nota: "pros quase não fazem" };
  return { ...base, marca: "escolha", nota: `${porcentagem(fracaoPro)} dos pros` };
}

type Insumos = Readonly<{
  minhas: readonly MinhaCompra[];
  todosOsPros: readonly ItemDosPros[];
  ordem: ReturnType<typeof ordemDosPros>;
  porque: Readonly<Record<string, string>>;
  duracaoMin: number;
}>;

/** Pares de item comum dos pros que você fez na ordem contrária à da maioria deles. */
function inversoes({ minhas, ordem }: Insumos) {
  const comuns = minhas.filter((m) => (m.fracaoPro ?? 0) >= FRACAO_DE_ESCOLHA);
  return comuns.flatMap((primeiro, i) => comuns.slice(i + 1).flatMap((depois) => {
    const dosPros = ordemEntre(ordem, primeiro.chave, depois.chave);
    const inverteu = dosPros?.antes === depois.chave && dosPros.antesEm / dosPros.ambos >= MAIORIA_DA_ORDEM;
    return dosPros && inverteu ? [{ cedo: primeiro, tarde: depois, fracao: dosPros.antesEm / dosPros.ambos }] : [];
  }));
}

function vereditosDeAtraso(insumos: Insumos): VereditoDaBuild[] {
  const trocas = inversoes(insumos);
  return insumos.minhas.flatMap((m) => {
    if (m.marca !== "atrasado" || m.minutoPro === null) return [];
    const passouNaFrente = trocas.find((t) => t.tarde.chave === m.chave);
    const ordem = passouNaFrente ? `: faltou puxar antes de ${passouNaFrente.cedo.nome}` : "";
    const atraso = m.minuto - m.minutoPro;
    return [{
      id: `atrasado-${m.chave}`, peso: atraso > 2 * limiteDeAtraso(m.minutoPro) ? "pesou_muito" : "pesou", minuto: m.minuto,
      texto: `${m.nome} saiu ${relogio(m.minuto)}, os pros fazem aos ${minutoInteiro(m.minutoPro)} (${porcentagem(m.fracaoPro ?? 0)} das partidas)${ordem}.`,
      porque: insumos.porque[m.chave] ?? null,
    }];
  });
}

function vereditosDeOrdem(insumos: Insumos): VereditoDaBuild[] {
  return inversoes(insumos)
    .filter((t) => t.tarde.marca !== "atrasado")
    .map((t) => ({
      id: `ordem-${t.tarde.chave}-${t.cedo.chave}`, peso: "leve", minuto: t.cedo.minuto,
      texto: `${t.cedo.nome} (${relogio(t.cedo.minuto)}) saiu antes de ${t.tarde.nome} (${relogio(t.tarde.minuto)}): ` +
        `os pros fazem ${t.tarde.nome} primeiro em ${porcentagem(t.fracao)} das partidas com os dois.`,
      porque: insumos.porque[t.tarde.chave] ?? null,
    }));
}

const naoFeito = (minhas: readonly MinhaCompra[]) => (chave: string) => !minhas.some((m) => m.chave === chave);

/** Escolha comum dos pros que você não fez, no minuto mais perto da compra rara: o que eles fazem naquele espaço. */
function alternativa({ minhas, todosOsPros }: Insumos, minuto: number): ItemDosPros | null {
  const candidatas = todosOsPros.filter((p) => p.fracao >= FRACAO_DA_ALTERNATIVA && naoFeito(minhas)(p.chave));
  return [...candidatas].sort((a, b) => Math.abs(a.minuto - minuto) - Math.abs(b.minuto - minuto))[0] ?? null;
}

function vereditosDeItemRaro(insumos: Insumos): (VereditoDaBuild & { citado: string | null })[] {
  return insumos.minhas.filter((m) => m.marca === "rara").map((m) => {
    const outro = alternativa(insumos, m.minuto);
    const fracao = m.fracaoPro === null ? "fora das compras dos pros" : `${porcentagem(m.fracaoPro)} dos pros`;
    const resposta = outro ? `: os pros respondem com ${outro.nome} (${porcentagem(outro.fracao)}, ~${minutoInteiro(outro.minuto)} min)` : "";
    return {
      id: `rara-${m.chave}`, peso: "pesou", minuto: m.minuto,
      texto: `${m.nome} (${relogio(m.minuto)}) quase não aparece contra esse draft (${fracao})${resposta}.`,
      porque: outro ? (insumos.porque[outro.chave] ?? null) : null,
      citado: outro?.chave ?? null,
    };
  });
}

function vereditosDeFalta(insumos: Insumos, jaCitados: ReadonlySet<string>): VereditoDaBuild[] {
  return insumos.todosOsPros
    .filter((p) => p.fracao >= FRACAO_DE_FALTA && p.minuto < insumos.duracaoMin && naoFeito(insumos.minhas)(p.chave) && !jaCitados.has(p.chave))
    .map((p) => ({
      id: `faltou-${p.chave}`, peso: p.fracao >= FRACAO_DE_CORE ? "pesou_muito" : "pesou", minuto: null,
      texto: `${p.nome} nunca saiu (${porcentagem(p.fracao)} dos pros, por volta de ${minutoInteiro(p.minuto)} min).`,
      porque: insumos.porque[p.chave] ?? null,
    }));
}

const porPesoDepoisMinuto = (a: VereditoDaBuild, b: VereditoDaBuild) =>
  PESO_EM_NUMERO[b.peso] - PESO_EM_NUMERO[a.peso] || (a.minuto ?? Infinity) - (b.minuto ?? Infinity);

export function vereditosDaBuild(insumos: Insumos): VereditoDaBuild[] {
  const raros = vereditosDeItemRaro(insumos);
  // O item que já aparece como "os pros respondem com X" não vira um segundo veredito de "X nunca saiu".
  const citados = new Set(raros.flatMap((r) => (r.citado ? [r.citado] : [])));
  return [...vereditosDeAtraso(insumos), ...vereditosDeFalta(insumos, citados), ...raros.map(({ citado: _, ...v }) => v), ...vereditosDeOrdem(insumos)]
    .sort(porPesoDepoisMinuto)
    .slice(0, MAXIMO_DE_VEREDITOS);
}

/** Null sem amostra pro suficiente contra este draft (ver JOGOS_MINIMOS_DO_MATCHUP). */
export function avaliarSuaBuild(ctx: Contexto): SuaBuild | null {
  const matchup = matchupDePro(ctx);
  if (!matchup || !ctx.pro) return null;
  const contra = ctx.pro.contra_inimigo;
  const contras = ctx.inimigos.flatMap((i) => {
    const dado = Object.hasOwn(contra, i.chave) ? contra[i.chave] : undefined;
    return dado ? [dado] : [];
  });
  const nomes = ctx.pro.nomes_dos_itens;
  const todosOsPros = itensDosPros(contras, nomes);
  const porChave = new Map(todosOsPros.map((p) => [p.chave, p]));
  const minhas = minhasCompras(ctx, matchup).map((c) => julgar(c, matchup, porChave));
  const duracaoMin = ctx.detalhe.duracaoS / 60;
  const insumos = { minhas, todosOsPros, ordem: ordemDosPros(contras), porque: ctx.porqueDosItens ?? {}, duracaoMin };
  return {
    inimigos: matchup.inimigos, jogos: matchup.jogos, minhas, duracaoMin,
    pros: todosOsPros.filter((p) => p.fracao >= FRACAO_DE_ESCOLHA).map((p) => ({ ...p, feito: !naoFeito(minhas)(p.chave) })),
    builds: buildsPossiveis(contras, nomes),
    vereditos: vereditosDaBuild(insumos),
  };
}
