import type { z } from "zod";
import type { Ponto } from "../../map/coords";
import type { Mancha } from "../../map/trilhas";
import { juntarFrescor, type Consultar } from "../consulta";
import { LANE_POR_PAPEL, VALIDADE_S, consultarNomesDeHerois, lerId, venceu } from "../contas";
import { erroAoVivo, falha, ok, type RespostaAoVivo } from "../erros";
import {
  benchmarksFonte, habilidadesFonte, idsDeHabilidadesFonte, itensFonte, partidaFonte,
  type BenchmarksFonte, type ItensFonte, type JogadorDaPartidaFonte, type PartidaFonte, type nomesDeHeroisFonte,
} from "../fonte/schemas";
import { celulaParaNorm, laneDasManchas, manchasDaLane, type Lado } from "../rotaAproximada";
import type { Frescor, Lane } from "../tipos";

export type HeroiNaPartida = Readonly<{ id: number; chave: string; nome: string; retrato: string }>;
export type TipoDeEvento = "abate" | "morte" | "item" | "roshan" | "torre" | "observer" | "sentry" | "runa" | "buyback" | "smoke" | "camp" | "aegis-consumida";
export type EventoDaPartida = Readonly<{ t: number; tipo: TipoDeEvento; texto: string; ponto: Ponto | null }>;
export type Compra = Readonly<{ t: number; chave: string; nome: string; custo: number | null; grande: boolean }>;
export type Neutro = Readonly<{ t: number; chave: string; nome: string; tier: number | null }>;
export type NivelDeHabilidade = Readonly<{ nivel: number; chave: string; nome: string; talento: boolean }>;
/** Índice = minuto da partida (0 = buzina). `ouro` é o ouro ganho no total (gold_t); `patrimonio` inclui o valor dos itens (networth_t). */
export type Curvas = Readonly<{ ouro: readonly number[]; lh: readonly number[]; patrimonio: readonly number[] }>;
/** Mediana do herói no /benchmarks do OpenDota (partidas públicas analisadas, não só pro). */
export type Referencia = Readonly<{ ouroPorMin: number; lhPorMin: number }>;
/** Índice = minuto. Positivo = o time do jogador na frente; negativo = o time inimigo na frente. */
export type VantagemDoTime = Readonly<{ ouro: readonly number[]; xp: readonly number[] }>;
export type PickOuBan = Readonly<{ heroi: HeroiNaPartida; pick: boolean; seuTime: boolean }>;

export type DetalheDaPartida = Readonly<{
  partida: string; conta: number; slot: number; duracaoS: number; venceu: boolean | null; analisada: boolean;
  heroi: HeroiNaPartida; lado: Lado; lane: Lane | null;
  /** Posição 1-5 deduzida da lane e do farm nela (o OpenDota não registra); null sem lane. */
  posicao: Posicao | null;
  abates: number; mortes: number; assistencias: number;
  /** gold_per_min do próprio OpenDota (o mesmo número da tela da partida); sem ele, a curva de ouro pela duração. */
  gpm: number | null;
  curvas: Curvas; adversario: Readonly<{ heroi: HeroiNaPartida; curvas: Curvas }> | null;
  inimigos: readonly HeroiNaPartida[]; eventos: readonly EventoDaPartida[]; compras: readonly Compra[];
  neutros: readonly Neutro[]; habilidades: readonly NivelDeHabilidade[]; manchasDaLane: readonly Mancha[];
  /** Lane deduzida das posições do laning; pode divergir da `lane` que a fonte registrou. */
  laneDoMapa: Lane | null;
  referencia: Referencia | null; frescor: Frescor;
  vantagemDoTime: VantagemDoTime;
  /** % de eficiência de farm na lane (ouro+xp vs. o máximo possível no período), direto do OpenDota; null sem dado. */
  eficienciaDeLanePct: number | null;
  /** Ordem real do draft (campo order do OpenDota); vazio em partidas sem picks_bans. */
  draft: readonly PickOuBan[];
}>;

type Nomes = z.infer<typeof nomesDeHeroisFonte>;
export type Constantes = Readonly<{
  herois: Nomes; itens: ItensFonte; idsDeHabilidades: Readonly<Record<string, string>>;
  habilidades: Readonly<Record<string, Readonly<{ dname: string | null }>>>;
}>;
type Entrada = Readonly<{
  partida: PartidaFonte; conta: number; constantes: Constantes; benchmarks: BenchmarksFonte | null; frescor: Frescor;
}>;

/** Item grande = montado (tem receita ou peças) e custa pelo menos isto; peça cara como Eaglesong não conta. */
export const CUSTO_DE_ITEM_GRANDE = 2_000;
const PREFIXO_DO_HEROI = "npc_dota_hero_";
const DIGITOS_DA_PARTIDA = 15;
const MINUTO_DA_LANE = 10;
const MEDIANA = 0.5;
const ROSHAN = "CHAT_MESSAGE_ROSHAN_KILL";
const AEGIS = "CHAT_MESSAGE_AEGIS";
/** Aegis of the Immortal expira 5 min depois de pega (Dota 2 Wiki / Liquipedia: Roshan; estável em 7.41, 7.41c/e/f). */
export const JANELA_DE_AEGIS_S = 5 * 60;
const TORRE = "building_kill";
/** key de building_kill começa com o dono da construção; o OpenDota não marca torre com um campo `team` próprio. */
const PREFIXO_DE_TORRE_RADIANT = "npc_dota_goodguys_tower";
const TIME_RADIANT = 2;
export type Posicao = 1 | 2 | 3 | 4 | 5;
/** Por papel do OpenDota (1 safe, 2 mid, 3 off, 4 selva): posição de quem mais farmou na lane e de quem acompanha. */
const POSICAO_NA_LANE: Readonly<Record<number, readonly [Posicao, Posicao]>> = { 1: [1, 5], 2: [2, 4], 3: [3, 4], 4: [4, 4] };
/** Adversário direto: core contra core da lane oposta (1x3, 2x2), suporte contra suporte (4x5). */
const POSICAO_ADVERSARIA: Readonly<Record<Posicao, Posicao>> = { 1: 3, 2: 2, 3: 1, 4: 5, 5: 4 };
/** Tipos de runa do OpenDota (constants/runes), na ordem do número. */
const RUNAS = ["Dano duplo", "Velocidade", "Ilusão", "Invisibilidade", "Regeneração", "Recompensa", "Arcana", "Água", "Sabedoria", "Escudo"];

const ladoDoSlot = (slot: number): Lado => (slot < 128 ? "radiant" : "dire");
export const tempoDaPartida = (s: number) => `${s < 0 ? "-" : ""}${Math.floor(Math.abs(s) / 60)}:${String(Math.abs(s) % 60).padStart(2, "0")}`;

/** "Nature's Prophet" vira natures_prophet, o nome do arquivo de retrato no app. */
export const slugDoHeroi = (nome: string) => nome.toLowerCase().replaceAll("'", "").replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");

function indiceDeHerois(nomes: Nomes) {
  const porNome = new Map(Object.values(nomes).map((h) => [h.name, h]));
  const montar = (h: Nomes[string]): HeroiNaPartida =>
    ({ id: h.id, chave: h.name.replace(PREFIXO_DO_HEROI, ""), nome: h.localized_name, retrato: slugDoHeroi(h.localized_name) });
  return {
    porId: (id: number): HeroiNaPartida => {
      const h = nomes[String(id)];
      return h ? montar(h) : { id, chave: String(id), nome: `Herói ${id}`, retrato: "" };
    },
    /** Chave do jogo (npc_dota_hero_slark); torre, creep ou Roshan voltam null. */
    porChave: (chave: string): HeroiNaPartida | null => {
      const h = porNome.get(chave);
      return h ? montar(h) : null;
    },
  };
}

const curvas = (j: JogadorDaPartidaFonte): Curvas => ({ ouro: j.gold_t, lh: j.lh_t, patrimonio: j.networth_t });

/** radiant_gold_adv/xp_adv são sempre do ponto de vista do Radiant; vira positivo = time do jogador. */
function vantagemDoTime(partida: PartidaFonte, lado: Lado): VantagemDoTime {
  const sinal = lado === "radiant" ? 1 : -1;
  return { ouro: partida.radiant_gold_adv.map((v) => v * sinal), xp: partida.radiant_xp_adv.map((v) => v * sinal) };
}

function draftDaPartida(partida: PartidaFonte, herois: ReturnType<typeof indiceDeHerois>, lado: Lado): PickOuBan[] {
  return [...partida.picks_bans].sort((a, b) => a.order - b.order)
    .map((p) => ({ heroi: herois.porId(p.hero_id), pick: p.is_pick, seuTime: ladoDoTimeNumerico(p.team) === lado }));
}

/** picks_bans.team do OpenDota: 0 Radiant, 1 Dire. */
const ladoDoTimeNumerico = (time: number): Lado => (time === 0 ? "radiant" : "dire");

const lastHitsNaLane = (j: JogadorDaPartidaFonte) => j.lh_t[MINUTO_DA_LANE] ?? j.lh_t.at(-1) ?? 0;

/** Na mesma lane do mesmo time, quem tem mais last hits aos 10 min é o core; o outro é o suporte. */
function posicaoNoTime(jogador: JogadorDaPartidaFonte, time: readonly JogadorDaPartidaFonte[]): Posicao | null {
  const posicoes = jogador.lane_role == null ? undefined : POSICAO_NA_LANE[jogador.lane_role];
  if (!posicoes) return null;
  const maisFarm = time.filter((j) => j.lane_role === jogador.lane_role).sort((a, b) => lastHitsNaLane(b) - lastHitsNaLane(a))[0];
  return maisFarm === jogador ? posicoes[0] : posicoes[1];
}

function adversarioDeLane(posicao: Posicao | null, inimigos: readonly JogadorDaPartidaFonte[]) {
  if (posicao === null) return null;
  const alvo = POSICAO_ADVERSARIA[posicao];
  return inimigos.find((i) => posicaoNoTime(i, inimigos) === alvo) ?? null;
}

function pontosDasMortes(partida: PartidaFonte, indice: number): (t: number) => Ponto | null {
  return (t) => {
    const luta = partida.teamfights.find((l) => l.start <= t && t <= l.end);
    const celulas = Object.entries(luta?.players[indice]?.deaths_pos ?? {}).flatMap(([x, ys]) => Object.keys(ys).map((y) => [x, y] as const));
    const [celula] = celulas;
    return celula ? [celulaParaNorm(Number(celula[0])), celulaParaNorm(Number(celula[1]))] : null;
  };
}

type Contexto = Readonly<{
  partida: PartidaFonte; jogador: JogadorDaPartidaFonte; indice: number; herois: ReturnType<typeof indiceDeHerois>; compras: readonly Compra[];
}>;

const nomeDoMatador = (herois: Contexto["herois"], chave: string) => herois.porChave(chave)?.nome ?? (chave.includes("tower") ? "torre" : "creep ou neutro");

function mortesDoJogador({ partida, jogador, herois }: Contexto): readonly Readonly<{ time: number; key: string }>[] {
  if (jogador.deaths_log.length > 0) return jogador.deaths_log;
  // Partida antiga sem deaths_log: as mortes saem do kills_log dos inimigos.
  const meuHeroi = herois.porId(jogador.hero_id).chave;
  return partida.players.filter((p) => ladoDoSlot(p.player_slot) !== ladoDoSlot(jogador.player_slot))
    .flatMap((p) => p.kills_log.filter((k) => k.key === `${PREFIXO_DO_HEROI}${meuHeroi}`)
      .map((k) => ({ time: k.time, key: `${PREFIXO_DO_HEROI}${herois.porId(p.hero_id).chave}` })));
}

/**
 * Quando o portador da Aegis do time inimigo (CHAT_MESSAGE_AEGIS, player_slot do pickup) morre antes dela expirar,
 * a Aegis acabou: emite um evento no instante dessa morte, pra `mortesComAegisInimigaAtiva` (aegisAtiva.ts) não
 * continuar contando uma Aegis já gasta pelo resto da janela de 5 min.
 */
function aegisConsumidaPeloInimigo(partida: PartidaFonte, herois: ReturnType<typeof indiceDeHerois>, meuTime: number): EventoDaPartida[] {
  const roshansInimigos = partida.objectives.filter((o) => o.type === ROSHAN && o.team !== undefined && o.team !== meuTime);
  return roshansInimigos.flatMap((roshan): EventoDaPartida[] => {
    const pickup = partida.objectives.find((o) => o.type === AEGIS && Math.abs(o.time - roshan.time) <= 5 && o.player_slot !== undefined);
    if (pickup?.player_slot === undefined) return [];
    const portador = partida.players.find((p) => p.player_slot === pickup.player_slot);
    if (!portador) return [];
    const morteDoPortador = portador.deaths_log.find((d) => d.time > roshan.time && d.time - roshan.time <= JANELA_DE_AEGIS_S);
    if (!morteDoPortador) return [];
    const nomeDoPortador = herois.porId(portador.hero_id).nome;
    return [{ t: morteDoPortador.time, tipo: "aegis-consumida", texto: `Aegis consumida: ${nomeDoPortador} morreu com ela`, ponto: null }];
  });
}

function eventosDoJogador(contexto: Contexto): EventoDaPartida[] {
  const { partida, jogador, indice, herois, compras } = contexto;
  const pontoDaMorte = pontosDasMortes(partida, indice);
  const meuTime = jogador.player_slot < 128 ? TIME_RADIANT : TIME_RADIANT + 1;
  const ward = (tipo: "observer" | "sentry") => (w: { time: number; x: number; y: number }): EventoDaPartida =>
    ({ t: w.time, tipo, texto: tipo === "observer" ? "Observer colocada" : "Sentry colocada", ponto: [celulaParaNorm(w.x), celulaParaNorm(w.y)] });
  const eventos: EventoDaPartida[] = [
    ...jogador.kills_log.map((k): EventoDaPartida => ({ t: k.time, tipo: "abate", texto: `Abate: ${herois.porChave(k.key)?.nome ?? k.key}`, ponto: null })),
    ...mortesDoJogador(contexto).map((m): EventoDaPartida => ({ t: m.time, tipo: "morte", texto: `Morte para ${nomeDoMatador(herois, m.key)}`, ponto: pontoDaMorte(m.time) })),
    ...compras.filter((c) => c.grande).map((c): EventoDaPartida => ({ t: c.t, tipo: "item", texto: c.nome, ponto: null })),
    ...partida.objectives.filter((o) => o.type === ROSHAN)
      .map((o): EventoDaPartida => ({ t: o.time, tipo: "roshan", texto: o.team === meuTime ? "Roshan pelo seu time" : "Roshan pelo time inimigo", ponto: null })),
    ...partida.objectives.filter((o) => o.type === TORRE && o.key?.includes("_tower"))
      .map((o): EventoDaPartida => {
        const torreDoRadiant = o.key?.startsWith(PREFIXO_DE_TORRE_RADIANT) ?? false;
        const meuLado = meuTime === TIME_RADIANT ? "radiant" : "dire";
        const perdidaPeloSeuTime = (torreDoRadiant && meuLado === "radiant") || (!torreDoRadiant && meuLado === "dire");
        return { t: o.time, tipo: "torre", texto: perdidaPeloSeuTime ? "Torre perdida" : "Torre destruída pelo seu time", ponto: null };
      }),
    ...jogador.obs_log.map(ward("observer")),
    ...jogador.sen_log.map(ward("sentry")),
    ...jogador.runes_log.map((r): EventoDaPartida => ({ t: r.time, tipo: "runa", texto: `Runa: ${RUNAS[Number(r.key)] ?? r.key}`, ponto: null })),
    ...jogador.buyback_log.map((b): EventoDaPartida => ({ t: b.time, tipo: "buyback", texto: "Buyback", ponto: null })),
    ...aegisConsumidaPeloInimigo(partida, herois, meuTime),
  ];
  return eventos.sort((a, b) => a.t - b.t);
}

function comprasDoJogador(jogador: JogadorDaPartidaFonte, itens: ItensFonte): Compra[] {
  return jogador.purchase_log.filter((p) => !p.key.startsWith("recipe_")).map((p) => {
    const item = itens[p.key];
    const custo = item?.cost ?? null;
    const grande = item?.components === true && custo !== null && custo >= CUSTO_DE_ITEM_GRANDE;
    return { t: p.time, chave: p.key, nome: item?.dname ?? p.key, custo, grande };
  });
}

// Talentos vêm com marcadores do jogo ("+{s:bonus_leash_duration}s Pounce Leash"); sobra só o texto.
const limparTalento = (nome: string) => nome.replace(/[+-]?\{s:[^}]*\}[%sx]?\s*/g, "").trim();

function habilidadesDoJogador(jogador: JogadorDaPartidaFonte, constantes: Constantes): NivelDeHabilidade[] {
  return jogador.ability_upgrades_arr.map((id, i) => {
    const chave = constantes.idsDeHabilidades[String(id)] ?? String(id);
    const nome = constantes.habilidades[chave]?.dname ?? null;
    const talento = chave.startsWith("special_bonus");
    if (!talento) return { nivel: i + 1, chave, nome: nome ?? `Habilidade ${id}`, talento };
    const texto = nome ? limparTalento(nome) : "";
    return { nivel: i + 1, chave, nome: texto ? `Talento: ${texto}` : "Talento", talento };
  });
}

function neutrosDoJogador(jogador: JogadorDaPartidaFonte, itens: ItensFonte): Neutro[] {
  return jogador.neutral_item_history.flatMap((n) => {
    if (!n.item_neutral) return [];
    const item = itens[n.item_neutral];
    return [{ t: n.time, chave: n.item_neutral, nome: item?.dname ?? n.item_neutral, tier: item?.tier ?? null }];
  });
}

function mediana(percentis: readonly Readonly<{ percentile: number; value: number }>[]): number | null {
  return percentis.find((p) => p.percentile === MEDIANA)?.value ?? null;
}

function referenciaDoHeroi(benchmarks: BenchmarksFonte | null): Referencia | null {
  if (!benchmarks) return null;
  const ouroPorMin = mediana(benchmarks.result.gold_per_min);
  const lhPorMin = mediana(benchmarks.result.last_hits_per_min);
  return ouroPorMin === null || lhPorMin === null ? null : { ouroPorMin, lhPorMin };
}

/** Fallback de partida sem gold_per_min: gold_t é ouro acumulado, então o último ponto dividido pela duração. */
function gpmDaCurva(ouro: readonly number[], duracaoS: number): number | null {
  const ouroFinal = ouro.at(-1);
  return ouroFinal === undefined || duracaoS <= 0 ? null : ouroFinal / (duracaoS / 60);
}

export function montarDetalhe({ partida, conta, constantes, benchmarks, frescor }: Entrada): RespostaAoVivo<DetalheDaPartida> {
  const indice = partida.players.findIndex((p) => p.account_id === conta);
  const jogador = partida.players[indice];
  if (!jogador) return falha(erroAoVivo("NAO_ENCONTRADO"));
  const herois = indiceDeHerois(constantes.herois);
  const lado = ladoDoSlot(jogador.player_slot);
  const inimigos = partida.players.filter((p) => ladoDoSlot(p.player_slot) !== lado);
  const posicao = posicaoNoTime(jogador, partida.players.filter((p) => ladoDoSlot(p.player_slot) === lado));
  const adversario = adversarioDeLane(posicao, inimigos);
  const compras = comprasDoJogador(jogador, constantes.itens);
  const manchas = jogador.lane_pos ? manchasDaLane(jogador.lane_pos) : [];
  return ok({
    partida: String(partida.match_id), conta, slot: jogador.player_slot, duracaoS: partida.duration,
    venceu: venceu({ player_slot: jogador.player_slot, radiant_win: partida.radiant_win }), analisada: jogador.gold_t.length > 0,
    heroi: herois.porId(jogador.hero_id), lado,
    lane: jogador.lane_role == null ? null : LANE_POR_PAPEL[jogador.lane_role] ?? null, posicao,
    abates: jogador.kills, mortes: jogador.deaths, assistencias: jogador.assists,
    gpm: jogador.gold_per_min ?? gpmDaCurva(jogador.gold_t, partida.duration),
    curvas: curvas(jogador),
    adversario: adversario && { heroi: herois.porId(adversario.hero_id), curvas: curvas(adversario) },
    inimigos: inimigos.map((i) => herois.porId(i.hero_id)),
    eventos: eventosDoJogador({ partida, jogador, indice, herois, compras }),
    compras, neutros: neutrosDoJogador(jogador, constantes.itens), habilidades: habilidadesDoJogador(jogador, constantes),
    manchasDaLane: manchas, laneDoMapa: laneDasManchas(manchas, lado),
    referencia: referenciaDoHeroi(benchmarks), frescor,
    vantagemDoTime: vantagemDoTime(partida, lado),
    eficienciaDeLanePct: jogador.lane_efficiency_pct,
    draft: draftDaPartida(partida, herois, lado),
  });
}

const constante = <T>(consultar: Consultar, caminho: string, schema: z.ZodType<T>) =>
  consultar({ caminho, schema, validadeS: VALIDADE_S.constantes });

/**
 * `ignorarCache` força uma rede nova em vez do guardado de 7 dias (sufixo de query, o OpenDota ignora chaves que
 * não conhece); usado pelo polling de `analise/carregar.ts` enquanto a partida ainda não foi analisada.
 */
export async function detalheDaPartida(
  consultar: Consultar, partidaId: string, conta: number, ignorarCache?: string,
): Promise<RespostaAoVivo<DetalheDaPartida>> {
  if (lerId(partidaId, DIGITOS_DA_PARTIDA) === null) return falha(erroAoVivo("ENTRADA_INVALIDA"));
  const caminhoDaPartida = ignorarCache ? `/matches/${partidaId}?_t=${ignorarCache}` : `/matches/${partidaId}`;
  const partida = await consultar({ caminho: caminhoDaPartida, schema: partidaFonte, validadeS: VALIDADE_S.partida });
  if (!partida.ok) return partida;
  const jogador = partida.dados.valor.players.find((p) => p.account_id === conta);
  if (!jogador) return falha(erroAoVivo("NAO_ENCONTRADO"));
  const [herois, itens, ids, habilidades, benchmarks] = await Promise.all([
    consultarNomesDeHerois(consultar),
    constante(consultar, "/constants/items", itensFonte),
    constante(consultar, "/constants/ability_ids", idsDeHabilidadesFonte),
    constante(consultar, "/constants/abilities", habilidadesFonte),
    constante(consultar, `/benchmarks?hero_id=${jogador.hero_id}`, benchmarksFonte),
  ]);
  if (!herois.ok) return herois;
  if (!itens.ok) return itens;
  if (!ids.ok) return ids;
  if (!habilidades.ok) return habilidades;
  return montarDetalhe({
    partida: partida.dados.valor, conta,
    constantes: { herois: herois.dados.valor, itens: itens.dados.valor, idsDeHabilidades: ids.dados.valor, habilidades: habilidades.dados.valor },
    // A referência é extra: sem ela a página mostra a partida sem a linha da mediana.
    benchmarks: benchmarks.ok ? benchmarks.dados.valor : null,
    frescor: juntarFrescor(partida.dados.frescor, herois.dados.frescor, itens.dados.frescor),
  });
}
