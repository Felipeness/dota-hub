// Panorama da partida inteira, não só do jogador analisado: mortes e respawn dos 10 heróis, wards dos dois times,
// estruturas derrubadas e Roshans. É o que a análise pós-jogo usa para dizer "dois aliados estavam mortos" e o
// que o minimapa com linha do tempo desenha.
import type { Ponto } from "../../map/coords";
import type { JogadorDaPartidaFonte, PartidaFonte } from "../fonte/schemas";
import { celulaParaNorm, type Lado } from "../rotaAproximada";
import type { HeroiNaPartida } from "./detalhe";

export type MorteNoPanorama = Readonly<{
  t: number;
  /** Instante em que o herói volta: time_dead do OpenDota quando existe, senão a tabela de respawn por nível. */
  voltaEm: number | null;
  /** Nome do herói matador; null para torre, creep ou neutro. */
  matador: string | null;
  /** Só morte dentro de um teamfight tem posição (deaths_pos); fora dele, null. */
  ponto: Ponto | null;
}>;
export type JogadorNoPanorama = Readonly<{ slot: number; heroi: HeroiNaPartida; lado: Lado; mortes: readonly MorteNoPanorama[] }>;
export type WardNoPanorama = Readonly<{ tipo: "observer" | "sentry"; lado: Lado; ponto: Ponto; de: number; ate: number }>;
export type Linha = "top" | "mid" | "bot";
export type EstruturaCaida = Readonly<{
  t: number;
  /** Dono da estrutura (quem perdeu). */
  lado: Lado;
  /** id em public/data/objetivos.json (rad_mid_t2, dire_bot_rax...); null para o que não está lá. */
  id: string | null;
  /** "T2 do meio", "Barracks de baixo", "T4", "Ancient". */
  nome: string;
  linha: Linha | null;
  tier: number | null;
}>;
export type RoshanNoPanorama = Readonly<{ t: number; lado: Lado | null; aegisAte: number | null }>;
export type Panorama = Readonly<{
  jogadores: readonly JogadorNoPanorama[];
  wards: readonly WardNoPanorama[];
  estruturas: readonly EstruturaCaida[];
  roshans: readonly RoshanNoPanorama[];
}>;

export type IndiceDeHerois = Readonly<{ porId: (id: number) => HeroiNaPartida; porChave: (chave: string) => HeroiNaPartida | null }>;

/** Duração no jogo sem ninguém destruir antes (Dota 2 Wiki: Observer Ward 360 s, Sentry Ward 420 s em 7.41). */
export const DURACAO_DA_WARD_S: Readonly<Record<WardNoPanorama["tipo"], number>> = { observer: 360, sentry: 420 };

/**
 * Respawn por nível (índice 0 = nível 1), usado só quando o OpenDota não traz time_dead. Base: Dota 2 Wiki, Respawn
 * (tabela por nível, nível 25+ = 100 s); os níveis 1-5 de 7.41 (12 + 3 por nível) e o resto foram conferidos contra
 * o time_dead real de 3 partidas 7.41 (9046905170, 9053220717, 9045457251). Não conta Reaper's Scythe nem buyback.
 */
export const RESPAWN_POR_NIVEL_S: readonly number[] = [12, 15, 18, 21, 24, 26, 28, 30, 32, 34, 36, 44, 46, 48, 50, 52, 54, 65, 70, 75, 80, 85, 90, 95, 100];
const RESPAWN_MAXIMO_S = 100;
/** Aegis of the Immortal expira 5 min depois de pega (Dota 2 Wiki: Roshan, estável em 7.41). */
const JANELA_DE_AEGIS_S = 5 * 60;
const PREFIXO_DO_HEROI = "npc_dota_hero_";
const ROSHAN = "CHAT_MESSAGE_ROSHAN_KILL";
const AEGIS = "CHAT_MESSAGE_AEGIS";
const TIME_RADIANT = 2;
const SLOTS_DO_RADIANT = 128;

export const ladoDoSlot = (slot: number): Lado => (slot < SLOTS_DO_RADIANT ? "radiant" : "dire");

/** Nível no instante t, interpolando a xp acumulada por minuto (xp_t) contra a xp exigida por nível. */
export function nivelNoTempo(xpT: readonly number[], xpPorNivel: readonly number[], t: number): number | null {
  if (xpT.length === 0 || xpPorNivel.length === 0) return null;
  const minuto = Math.max(0, Math.floor(t / 60));
  const antes = xpT[Math.min(minuto, xpT.length - 1)] ?? 0;
  const depois = xpT[Math.min(minuto + 1, xpT.length - 1)] ?? antes;
  const xp = antes + (depois - antes) * (t / 60 - minuto);
  return xpPorNivel.filter((exigida) => xp >= exigida).length || 1;
}

export const respawnDoNivel = (nivel: number): number => RESPAWN_POR_NIVEL_S[nivel - 1] ?? RESPAWN_MAXIMO_S;

type Morte = Readonly<{ time: number; key: string; time_dead: number | null }>;

function voltaDaMorte(morte: Morte, jogador: JogadorDaPartidaFonte, xpPorNivel: readonly number[] | null): number | null {
  if (morte.time_dead !== null) return morte.time + morte.time_dead;
  const nivel = xpPorNivel ? nivelNoTempo(jogador.xp_t, xpPorNivel, morte.time) : null;
  if (nivel === null) return null;
  const volta = morte.time + respawnDoNivel(nivel);
  const buyback = jogador.buyback_log.find((b) => b.time > morte.time && b.time < volta);
  return buyback?.time ?? volta;
}

/** deaths_log quando a fonte traz; senão, as mortes saem do kills_log dos inimigos (partidas antigas). */
export function mortesDaFonte(partida: PartidaFonte, jogador: JogadorDaPartidaFonte, herois: IndiceDeHerois): readonly Morte[] {
  if (jogador.deaths_log.length > 0) return jogador.deaths_log;
  const chaveDoJogador = `${PREFIXO_DO_HEROI}${herois.porId(jogador.hero_id).chave}`;
  return partida.players.filter((p) => ladoDoSlot(p.player_slot) !== ladoDoSlot(jogador.player_slot))
    .flatMap((p) => p.kills_log.filter((k) => k.key === chaveDoJogador)
      .map((k) => ({ time: k.time, key: `${PREFIXO_DO_HEROI}${herois.porId(p.hero_id).chave}`, time_dead: null })))
    .sort((a, b) => a.time - b.time);
}

export function pontosDasMortes(partida: PartidaFonte, indice: number): (t: number) => Ponto | null {
  return (t) => {
    const luta = partida.teamfights.find((l) => l.start <= t && t <= l.end);
    const celulas = Object.entries(luta?.players[indice]?.deaths_pos ?? {}).flatMap(([x, ys]) => Object.keys(ys).map((y) => [x, y] as const));
    const [celula] = celulas;
    return celula ? [celulaParaNorm(Number(celula[0])), celulaParaNorm(Number(celula[1]))] : null;
  };
}

function jogadoresDoPanorama(partida: PartidaFonte, herois: IndiceDeHerois, xpPorNivel: readonly number[] | null): JogadorNoPanorama[] {
  return partida.players.map((jogador, indice) => {
    const pontoDaMorte = pontosDasMortes(partida, indice);
    return {
      slot: jogador.player_slot, heroi: herois.porId(jogador.hero_id), lado: ladoDoSlot(jogador.player_slot),
      mortes: mortesDaFonte(partida, jogador, herois).map((m) => ({
        t: m.time, voltaEm: voltaDaMorte(m, jogador, xpPorNivel), matador: herois.porChave(m.key)?.nome ?? null, ponto: pontoDaMorte(m.time),
      })),
    };
  });
}

type WardDaFonte = JogadorDaPartidaFonte["obs_log"][number];

function wardsDoJogador(jogador: JogadorDaPartidaFonte): WardNoPanorama[] {
  const lado = ladoDoSlot(jogador.player_slot);
  const montar = (tipo: WardNoPanorama["tipo"], saidas: readonly WardDaFonte[]) => (w: WardDaFonte): WardNoPanorama => {
    const saida = w.ehandle === undefined ? undefined : saidas.find((s) => s.ehandle === w.ehandle && s.time >= w.time);
    return { tipo, lado, ponto: [celulaParaNorm(w.x), celulaParaNorm(w.y)], de: w.time, ate: saida?.time ?? w.time + DURACAO_DA_WARD_S[tipo] };
  };
  return [...jogador.obs_log.map(montar("observer", jogador.obs_left_log)), ...jogador.sen_log.map(montar("sentry", jogador.sen_left_log))];
}

const NOME_DA_LINHA: Readonly<Record<Linha, string>> = { top: "de cima", mid: "do meio", bot: "de baixo" };
const PREFIXO_DO_ID: Readonly<Record<Lado, string>> = { radiant: "rad", dire: "dire" };
const ESTRUTURA = /^npc_dota_(goodguys|badguys)_(?:tower([1-3])_(top|mid|bot)|(tower4)|(?:melee|range)_rax_(top|mid|bot)|(fort))$/;
const ehLinha = (v: string | undefined): v is Linha => v === "top" || v === "mid" || v === "bot";

/** key de building_kill (npc_dota_goodguys_tower2_mid) vira a estrutura; a 2ª T4 do mesmo time é a de baixo. */
function estruturaDaChave(chave: string, t: number, t4JaCaidas: number): EstruturaCaida | null {
  const partes = ESTRUTURA.exec(chave);
  if (!partes) return null;
  const [, dono, tier, linhaDaTorre, t4, linhaDoQuartel, ancient] = partes;
  const lado: Lado = dono === "goodguys" ? "radiant" : "dire";
  const prefixo = PREFIXO_DO_ID[lado];
  if (ehLinha(linhaDaTorre)) {
    return { t, lado, id: `${prefixo}_${linhaDaTorre}_t${tier}`, nome: `T${tier} ${NOME_DA_LINHA[linhaDaTorre]}`, linha: linhaDaTorre, tier: Number(tier) };
  }
  if (t4) return { t, lado, id: `${prefixo}_t4_${t4JaCaidas === 0 ? "top" : "bot"}`, nome: "T4", linha: null, tier: 4 };
  if (ehLinha(linhaDoQuartel)) return { t, lado, id: `${prefixo}_${linhaDoQuartel}_rax`, nome: `Barracks ${NOME_DA_LINHA[linhaDoQuartel]}`, linha: linhaDoQuartel, tier: null };
  if (ancient) return { t, lado, id: `${prefixo}_ancient`, nome: "Ancient", linha: null, tier: null };
  return null;
}

function estruturasCaidas(partida: PartidaFonte): EstruturaCaida[] {
  const derrubadas = partida.objectives.filter((o) => o.type === "building_kill" && o.key).sort((a, b) => a.time - b.time);
  return derrubadas.reduce<EstruturaCaida[]>((caidas, o) => {
    const dono: Lado = o.key?.includes("_goodguys_") ? "radiant" : "dire";
    const t4JaCaidas = caidas.filter((c) => c.tier === 4 && c.lado === dono).length;
    const estrutura = estruturaDaChave(o.key ?? "", o.time, t4JaCaidas);
    return estrutura ? [...caidas, estrutura] : caidas;
  }, []);
}

/** A Aegis acaba no que vier primeiro: 5 min depois de pega ou a primeira morte de quem pegou (reencarnou). */
function roshansDaPartida(partida: PartidaFonte): RoshanNoPanorama[] {
  return partida.objectives.filter((o) => o.type === ROSHAN).map((roshan) => {
    const lado = roshan.team === undefined ? null : roshan.team === TIME_RADIANT ? "radiant" : "dire";
    const pickup = partida.objectives.find((o) => o.type === AEGIS && Math.abs(o.time - roshan.time) <= 5 && o.player_slot !== undefined);
    if (pickup?.player_slot === undefined) return { t: roshan.time, lado, aegisAte: null };
    const expira = roshan.time + JANELA_DE_AEGIS_S;
    const portador = partida.players.find((p) => p.player_slot === pickup.player_slot);
    const morte = portador?.deaths_log.find((d) => d.time > roshan.time && d.time < expira);
    return { t: roshan.time, lado, aegisAte: morte?.time ?? expira };
  });
}

export function montarPanorama(partida: PartidaFonte, herois: IndiceDeHerois, xpPorNivel: readonly number[] | null): Panorama {
  return {
    jogadores: jogadoresDoPanorama(partida, herois, xpPorNivel),
    wards: partida.players.flatMap(wardsDoJogador).sort((a, b) => a.de - b.de),
    estruturas: estruturasCaidas(partida),
    roshans: roshansDaPartida(partida),
  };
}

/** Consultas sobre o panorama num instante; puras, usadas pela análise e pelo minimapa. */
export const estaMorto = (morte: MorteNoPanorama, t: number) => morte.t <= t && t < (morte.voltaEm ?? morte.t);
export const wardAtiva = (ward: WardNoPanorama, t: number) => ward.de <= t && t < ward.ate;
export const nomeDaLinha = (linha: Linha) => NOME_DA_LINHA[linha];
