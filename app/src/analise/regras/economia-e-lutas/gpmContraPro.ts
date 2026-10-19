// Regra: GPM final comparado à média do herói no pro (mesma fonte de placarPorArea.ts/areaFarm — content export,
// public/data/pro_posicoes.json). Ver SPEC §economia-e-lutas / farm.
import { AMOSTRA_MINIMA } from "../../pro";
import type { Achado, Contexto, Peso, Regra } from "../../modelo";

/** Mesma margem desta própria regra usada como referência pelas regras irmãs (laneContraAdversario.ts). */
const MARGEM = 0.1;
const LIMIAR_ERRO_GRAVE = 0.6;
const FONTE =
  "pro_posicoes.json (export/dota_export/pro_posicoes.py só repassa; gpm_medio é calculado fora, via SQL direto " +
  "no OpenDota explorer sobre partidas pro 7.40/7.41, ver campo 'metodo' do próprio arquivo), qualquer posição";

const pesoDoErro = (razao: number): Peso => (razao < LIMIAR_ERRO_GRAVE ? "pesou_muito" : "pesou");

function gpmContraPro(ctx: Contexto): Achado[] {
  const gpm = ctx.detalhe.gpm;
  const proDoHeroi = ctx.proDoHeroi;
  if (gpm === null || !proDoHeroi || proDoHeroi.forca.n < AMOSTRA_MINIMA) return [];

  const media = proDoHeroi.forca.gpm_medio;
  const razao = gpm / media;
  const numeros = { gpm: Math.round(gpm), mediaPro: Math.round(media), n: proDoHeroi.forca.n, razao: Number(razao.toFixed(2)) };

  if (razao >= 1 + MARGEM) {
    return [{
      id: "gpm-acima-do-pro", tipo: "acerto", minuto: null,
      titulo: `GPM final de ${numeros.gpm}, acima da média do herói no pro (${numeros.mediaPro})`,
      oQueAconteceu: `Terminou a partida com ${numeros.gpm} de ouro/min; a média de pro com este herói ` +
        `(n=${numeros.n}, qualquer posição) é ${numeros.mediaPro}.`,
      oQueFazer: "Manter esse ritmo de farm entre lutas: é ele que paga o item que falta na janela certa.",
      porque: "GPM final acima da média de pro do próprio herói mostra que o tempo fora de luta foi bem " +
        "aproveitado, mesmo numa partida perdida.",
      fontes: [FONTE], peso: "leve", evidencias: { numeros },
    }];
  }
  if (razao < 1 - MARGEM) {
    return [{
      id: "gpm-abaixo-do-pro", tipo: "erro", minuto: null,
      titulo: `GPM final de ${numeros.gpm}, abaixo da média do herói no pro (${numeros.mediaPro})`,
      oQueAconteceu: `Terminou a partida com ${numeros.gpm} de ouro/min; a média de pro com este herói ` +
        `(n=${numeros.n}, qualquer posição) é ${numeros.mediaPro}.`,
      oQueFazer: "Usar os minutos sem luta pra puxar jungle ou lane em vez de rodar o mapa sem objetivo: cada " +
        "minuto parado sem farmar é GPM que não volta.",
      porque: "GPM final abaixo da média de pro do próprio herói, seja por tempo parado, rotas longas sem farm " +
        "ou por ter sido impedido de farmar pelo próprio draft inimigo.",
      fontes: [FONTE], peso: pesoDoErro(razao), evidencias: { numeros },
    }];
  }
  return [];
}

export const REGRA: Regra = { id: "gpm-contra-pro", familia: "economia-e-farm", avaliar: gpmContraPro };
