import type { z } from "zod";
import { normalizar } from "../routes/filtros";
import { juntarFrescor, type Consultar } from "./consulta";
import { erroAoVivo, falha, ok, type RespostaAoVivo } from "./erros";
import {
  buscaFonte, heroisDaContaFonte, jogadorFonte, nomesDeHeroisFonte, partidasRecentesFonte, timesFonte, vitoriasFonte,
  type PartidaRecenteFonte, type TimeFonte,
} from "./fonte/schemas";
import type { Busca, Frescor, Lane, PartidaDaConta, ResumoConta, TimeEncontrado } from "./tipos";

export const VALIDADE_S = {
  perfil: 3_600, busca: 3_600, time: 3_600, recentes: 600, partida: 7 * 24 * 3_600, constantes: 24 * 3_600,
} as const;
export const LANE_POR_PAPEL: Readonly<Record<number, Lane>> = { 1: "safe", 2: "mid", 3: "off", 4: "selva" };
const MEDALHAS = ["Herald", "Guardian", "Crusader", "Archon", "Legend", "Ancient", "Divine", "Immortal"] as const;
const MAXIMO_DE_HEROIS = 10;
const MAXIMO_DE_RESULTADOS = 10;
const TEXTO_MINIMO = 2;
const TEXTO_MAXIMO = 64;

type Nomes = z.infer<typeof nomesDeHeroisFonte>;
type Partes = Readonly<{
  id: number; jogador: z.infer<typeof jogadorFonte>; vitorias: z.infer<typeof vitoriasFonte>;
  herois: z.infer<typeof heroisDaContaFonte>; recentes: readonly PartidaRecenteFonte[]; nomes: Nomes; frescor: Frescor;
}>;

export function lerId(texto: string, maximoDeDigitos = 12): number | null {
  const limpo = texto.trim();
  return new RegExp(`^\\d{1,${maximoDeDigitos}}$`).test(limpo) ? Number(limpo) : null;
}

export function nomeDaMedalha(rankTier: number | null | undefined): string | null {
  if (!rankTier) return null;
  const medalha = MEDALHAS[Math.floor(rankTier / 10) - 1];
  if (!medalha) return null;
  const estrelas = rankTier % 10;
  return medalha === "Immortal" || estrelas === 0 ? medalha : `${medalha} ${estrelas}`;
}

export const venceu = (p: Pick<PartidaRecenteFonte, "player_slot" | "radiant_win">): boolean | null =>
  p.radiant_win === null ? null : (p.player_slot < 128) === p.radiant_win;

const laneDoPapel = (papel: number | null | undefined): Lane | null => (papel == null ? null : LANE_POR_PAPEL[papel] ?? null);
const nomeDoHeroi = (nomes: Nomes, id: number) => nomes[String(id)]?.localized_name ?? `Herói ${id}`;

function partidaDaConta(p: PartidaRecenteFonte, nomes: Nomes): PartidaDaConta {
  return {
    id: String(p.match_id), heroi: nomeDoHeroi(nomes, p.hero_id), venceu: venceu(p),
    abates: p.kills, mortes: p.deaths, assistencias: p.assists, duracaoS: p.duration, inicio: p.start_time,
    lane: laneDoPapel(p.lane_role), analisada: p.version != null,
  };
}

export function montarResumo({ id, jogador, vitorias, herois, recentes, nomes, frescor }: Partes): ResumoConta {
  return {
    conta: { id, nome: jogador.profile?.personaname ?? `Conta ${id}`, medalha: nomeDaMedalha(jogador.rank_tier) },
    totais: { partidas: vitorias.win + vitorias.lose, vitorias: vitorias.win },
    ultimas: { partidas: recentes.length, vitorias: recentes.filter((p) => venceu(p) === true).length },
    herois: [...herois].sort((a, b) => b.games - a.games).slice(0, MAXIMO_DE_HEROIS)
      .map((h) => ({ heroi: nomeDoHeroi(nomes, h.hero_id), partidas: h.games, vitorias: h.win })),
    partidas: recentes.map((p) => partidaDaConta(p, nomes)),
    temDadosPublicos: recentes.length > 0,
    frescor,
  };
}

export const consultarNomesDeHerois = (consultar: Consultar) =>
  consultar({ caminho: "/constants/heroes", schema: nomesDeHeroisFonte, validadeS: VALIDADE_S.constantes });

export async function resumoDaConta(consultar: Consultar, id: number): Promise<RespostaAoVivo<ResumoConta>> {
  const jogador = await consultar({ caminho: `/players/${id}`, schema: jogadorFonte, validadeS: VALIDADE_S.perfil });
  if (!jogador.ok) return jogador;
  if (!jogador.dados.valor.profile) return falha(erroAoVivo("NAO_ENCONTRADO"));
  const [vitorias, herois, recentes, nomes] = await Promise.all([
    consultar({ caminho: `/players/${id}/wl`, schema: vitoriasFonte, validadeS: VALIDADE_S.perfil }),
    consultar({ caminho: `/players/${id}/heroes`, schema: heroisDaContaFonte, validadeS: VALIDADE_S.recentes }),
    consultar({ caminho: `/players/${id}/recentMatches`, schema: partidasRecentesFonte, validadeS: VALIDADE_S.recentes }),
    consultarNomesDeHerois(consultar),
  ]);
  if (!vitorias.ok) return vitorias;
  if (!herois.ok) return herois;
  if (!recentes.ok) return recentes;
  if (!nomes.ok) return nomes;
  return ok(montarResumo({
    id, jogador: jogador.dados.valor, vitorias: vitorias.dados.valor, herois: herois.dados.valor,
    recentes: recentes.dados.valor, nomes: nomes.dados.valor,
    frescor: juntarFrescor(jogador.dados.frescor, vitorias.dados.frescor, herois.dados.frescor, recentes.dados.frescor),
  }));
}

export function consultaDeBusca(texto: string): RespostaAoVivo<string> {
  const limpo = texto.trim();
  if (limpo.length < TEXTO_MINIMO || limpo.length > TEXTO_MAXIMO) return falha(erroAoVivo("ENTRADA_INVALIDA"));
  return ok(limpo);
}

export function timeEncontrado(t: TimeFonte): TimeEncontrado {
  return { id: t.team_id, nome: t.name ?? `Time ${t.team_id}`, vitorias: t.wins, derrotas: t.losses };
}

function timesComNome(times: readonly TimeFonte[], texto: string): TimeEncontrado[] {
  const alvo = normalizar(texto);
  return times.filter((t) => t.name !== null && normalizar(t.name).includes(alvo))
    .sort((a, b) => (b.last_match_time ?? 0) - (a.last_match_time ?? 0))
    .slice(0, MAXIMO_DE_RESULTADOS).map(timeEncontrado);
}

export async function buscar(consultar: Consultar, texto: string): Promise<RespostaAoVivo<Busca>> {
  const consulta = consultaDeBusca(texto);
  if (!consulta.ok) return consulta;
  const [contas, times] = await Promise.all([
    consultar({ caminho: `/search?q=${encodeURIComponent(consulta.dados)}`, schema: buscaFonte, validadeS: VALIDADE_S.busca }),
    consultar({ caminho: "/teams", schema: timesFonte, validadeS: VALIDADE_S.constantes }),
  ]);
  if (!contas.ok) return contas;
  if (!times.ok) return times;
  return ok({
    contas: contas.dados.valor.slice(0, MAXIMO_DE_RESULTADOS).map((c) => ({
      id: c.account_id, nome: c.personaname ?? `Conta ${c.account_id}`, ultimaPartida: c.last_match_time,
    })),
    times: timesComNome(times.dados.valor, consulta.dados),
    frescor: juntarFrescor(contas.dados.frescor, times.dados.frescor),
  });
}
