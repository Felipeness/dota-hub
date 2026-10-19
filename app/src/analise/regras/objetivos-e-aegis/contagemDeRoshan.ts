// Regra: presença no Roshan — quem pegou quantos. É contexto, não erro do jogador (mesmo raciocínio de
// mortesEmDesvantagem.ts): o Roshan é decisão e disputa do time, e o OpenDota não diz quem estava no pit, quem
// chamou a jogada nem se o jogador estava longe por outra prioridade. Ver SPEC §"Famílias de regras" > objetivos-e-aegis.
import { tempoDaPartida } from "../../../live/partida/detalhe";
import type { Achado, Contexto, Regra } from "../../modelo";

const FONTE: readonly string[] = ["objectives[] do OpenDota (CHAT_MESSAGE_ROSHAN_KILL)"];

function contagemDeRoshan(ctx: Contexto): Achado[] {
  const roshans = ctx.detalhe.eventos.filter((e) => e.tipo === "roshan");
  if (roshans.length === 0) return [];
  const doInimigo = roshans.filter((e) => e.texto.includes("time inimigo"));
  const doSeuTime = roshans.filter((e) => e.texto.includes("seu time"));
  const diferenca = doInimigo.length - doSeuTime.length;
  if (diferenca <= 0) return []; // seu time empatou ou ganhou a corrida pelo Roshan; sem achado negativo aqui
  const horariosInimigo = doInimigo.map((e) => tempoDaPartida(e.t)).join(", ");
  const horariosSeuTime = doSeuTime.map((e) => tempoDaPartida(e.t)).join(", ");
  return [{
    id: "contagem-de-roshan",
    tipo: "contexto",
    minuto: null,
    titulo: `O time inimigo pegou ${doInimigo.length} Roshan${doInimigo.length > 1 ? "s" : ""} e o seu, ${doSeuTime.length}`,
    oQueAconteceu:
      `Roshan do time inimigo em ${horariosInimigo}` +
      (doSeuTime.length > 0 ? `; o seu time pegou em ${horariosSeuTime}.` : "; o seu time não pegou nenhum."),
    oQueFazer:
      "Antes de cada janela de respawn (8 a 11 min depois da morte anterior do Roshan), decidir com o time se vai contestar: " +
      "farmar perto do pit com visão nele em vez de ficar espalhado pelo mapa, ou abrir mão de propósito e defender outra coisa " +
      "em vez de perder a disputa sem decidir.",
    porque:
      `Cada Roshan dá Aegis (uma ressurreição) e ouro/XP em bloco para quem participa; perder essa disputa ${doInimigo.length} a ` +
      `${doSeuTime.length} financia o time inimigo repetidamente sem contrapartida.`,
    fontes: FONTE,
    peso: diferenca >= 2 ? "pesou_muito" : "pesou",
    evidencias: { numeros: { roshansDoTimeInimigo: doInimigo.length, roshansDoSeuTime: doSeuTime.length } },
  }];
}

export const REGRAS: readonly Regra[] = [
  { id: "contagem-de-roshan", familia: "objetivos-e-aegis", avaliar: contagemDeRoshan },
];
