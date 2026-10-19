// Visão: quantas wards (observer/sentry) o jogador colocou, e onde. Ver SPEC §mortes-e-visao ("visão").
// Tempo de vida da ward é pendência (obs_left_log/sen_left_log não estão no schema hoje, ver fontes.ts); sem esse
// campo, não dá pra afirmar se a ward morreu antes do tempo ou durou a partida toda — fica de fora do achado.
import { tempoDaPartida } from "../../../live/partida/detalhe";
import type { Achado, Contexto, Regra } from "../../modelo";

const FONTE_WARDS = "obs_log / sen_log do OpenDota (próprio jogador; wards de aliados não são visíveis aqui)";
const FONTE_ROSHAN = "objectives[] do OpenDota (CHAT_MESSAGE_ROSHAN_KILL)";

function semWardsContraRoshan(ctx: Contexto, totalWards: number): Achado | null {
  if (totalWards > 0) return null;
  const roshansInimigos = ctx.detalhe.eventos.filter((e) => e.tipo === "roshan" && e.texto.includes("time inimigo"));
  if (roshansInimigos.length === 0) return null;
  const minutos = roshansInimigos.map((r) => tempoDaPartida(r.t)).join(", ");
  return {
    id: "sem-wards-contra-roshan",
    tipo: "erro",
    minuto: null,
    titulo: `0 wards colocadas na partida toda; o time inimigo pegou Roshan ${roshansInimigos.length}x`,
    oQueAconteceu: `Você não colocou nenhuma observer ou sentry a partida toda, e o time inimigo pegou o Roshan ` +
      `${roshansInimigos.length} vez(es) (${minutos}) sem nenhuma ward sua perto da pit para avisar a tentativa.`,
    oQueFazer:
      "Mesmo como carry, comprar uma observer antes de farmar perto da pit do Roshan (rio, tri inimiga) custa 1 " +
      "slot e 100g e dá o único aviso antecipado de que o time inimigo está montando pro Roshan.",
    porque:
      "Sem visão própria perto da pit, a primeira informação de que o Roshan caiu é o chat; a essa altura a Aegis " +
      "já está com o inimigo e a janela de reagir já passou.",
    fontes: [FONTE_WARDS, FONTE_ROSHAN],
    peso: "pesou",
    evidencias: { numeros: { wardsColocadas: 0, roshansDoInimigo: roshansInimigos.length } },
  };
}

function listaDeWards(ctx: Contexto): Achado | null {
  const observers = ctx.detalhe.eventos.filter((e) => e.tipo === "observer");
  const sentries = ctx.detalhe.eventos.filter((e) => e.tipo === "sentry");
  const total = observers.length + sentries.length;
  if (total === 0) return null;
  const pontos = [...observers, ...sentries].filter((w) => w.ponto !== null);
  return {
    id: "wards-colocadas",
    tipo: "contexto",
    minuto: null,
    titulo: `${observers.length} observer e ${sentries.length} sentry colocadas`,
    oQueAconteceu: `Você colocou ${observers.length} observer e ${sentries.length} sentry na partida, nos minutos ` +
      [...observers, ...sentries].map((w) => tempoDaPartida(w.t)).join(", ") + ".",
    oQueFazer: null,
    porque: "Contagem direta de obs_log/sen_log; não inclui wards de aliados nem o tempo de vida de cada ward " +
      "(ver pendência do núcleo).",
    fontes: [FONTE_WARDS],
    peso: "leve",
    evidencias: { numeros: { observers: observers.length, sentries: sentries.length }, posicaoNoMapa: pontos[0]?.ponto ? { x: pontos[0].ponto[0], y: pontos[0].ponto[1] } : null },
  };
}

function wardsColocadas(ctx: Contexto): Achado[] {
  const observers = ctx.detalhe.eventos.filter((e) => e.tipo === "observer").length;
  const sentries = ctx.detalhe.eventos.filter((e) => e.tipo === "sentry").length;
  const total = observers + sentries;
  const achados = [semWardsContraRoshan(ctx, total), listaDeWards(ctx)];
  return achados.filter((a): a is Achado => a !== null);
}

export const REGRA: Regra = { id: "wards-colocadas", familia: "mortes-e-visao", avaliar: wardsColocadas };
