// Regra: ouro aos 10 min comparado ao adversário direto de lane (mesmo papel, inverso — já calculado em
// detalhe.ts/adversarioDeLane). Ver SPEC §economia-e-lutas / lane.
import { tempoDaPartida } from "../../../live/partida/detalhe";
import type { Achado, Contexto, Peso, Regra } from "../../modelo";

const MINUTO = 10;
/** Mais frouxa que o ±10% de placarPorArea.ts porque é 1x1 (menos amostra, mais ruído) e não distribuição de pro. */
const MARGEM = 0.15;
const MARGEM_GRAVE = 0.35;
const FONTE = "gold_t do OpenDota, próprio jogador e adversário direto de lane (mesmo papel, times opostos)";

const diferencaRelativa = (meu: number, dele: number) => (meu === 0 ? 0 : (dele - meu) / meu);
const pesoDaDiferenca = (diferenca: number): Peso => (diferenca >= MARGEM_GRAVE ? "pesou_muito" : "pesou");

function laneContraAdversario(ctx: Contexto): Achado[] {
  const adversario = ctx.detalhe.adversario;
  const meuOuro = ctx.detalhe.curvas.ouro[MINUTO];
  const ouroAdversario = adversario?.curvas.ouro[MINUTO];
  if (!adversario || meuOuro === undefined || ouroAdversario === undefined) return [];

  const diferenca = diferencaRelativa(meuOuro, ouroAdversario);
  const numeros = { meuOuro, ouroAdversario, diferencaPct: Math.round(diferenca * 100) };
  const tempo = tempoDaPartida(MINUTO * 60);

  if (diferenca >= MARGEM) {
    return [{
      id: "lane-perdida-para-o-adversario", tipo: "erro", minuto: MINUTO,
      titulo: `Perdeu a lane para ${adversario.heroi.nome}: ${ouroAdversario} de ouro contra ${meuOuro} aos 10 min`,
      oQueAconteceu: `Aos ${tempo}, ${adversario.heroi.nome} (adversário direto de lane) tinha ${ouroAdversario} ` +
        `de ouro contra ${meuOuro} seus, ${numeros.diferencaPct}% a mais.`,
      oQueFazer: "Jogar a lane mais segura (ficar atrás da wave, pedir visão ou puxar o suporte pra ajudar) em " +
        "vez de contestar last hit com um adversário que já bate mais forte nessa fase.",
      porque: "Ouro aos 10 min no confronto direto de lane é o sinal mais limpo de quem ganhou essa fase; sair " +
        "atrás nesse ponto atrasa o timing do primeiro item.",
      fontes: [FONTE], peso: pesoDaDiferenca(diferenca), evidencias: { numeros },
    }];
  }
  if (-diferenca >= MARGEM) {
    return [{
      id: "lane-ganha-do-adversario", tipo: "acerto", minuto: MINUTO,
      titulo: `Ganhou a lane de ${adversario.heroi.nome}: ${meuOuro} de ouro contra ${ouroAdversario} aos 10 min`,
      oQueAconteceu: `Aos ${tempo}, tinha ${meuOuro} de ouro contra ${ouroAdversario} do adversário direto de ` +
        `lane, ${Math.round(-diferenca * 100)}% a mais.`,
      oQueFazer: "Repetir a leitura: segurar essa agressividade de lane sempre que o início der essa vantagem de novo.",
      porque: "Sair na frente do adversário direto aos 10 min garante o primeiro item core mais rápido e empurra " +
        "a lane pra cima.",
      fontes: [FONTE], peso: "leve", evidencias: { numeros },
    }];
  }
  return [];
}

export const REGRA: Regra = { id: "lane-contra-adversario", familia: "economia-e-farm", avaliar: laneContraAdversario };
