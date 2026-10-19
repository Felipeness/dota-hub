// Regra: GPM final comparado à média do herói no pro (mesma fonte de placarPorArea.ts/areaFarm — content export,
// public/data/pro_posicoes.json). Ver SPEC §economia-e-lutas / farm.
import { AMOSTRA_MINIMA } from "../../pro";
import type { Achado, Contexto, Regra } from "../../modelo";

/** Mesma margem de placarPorArea.ts (±10% da média do pro). */
const MARGEM = 0.1;
const FONTE = "pro_posicoes.json (export/dota_export/confrontos.py, partidas pro do herói, qualquer posição)";

function gpmContraPro(ctx: Contexto): Achado[] {
  const minutos = ctx.detalhe.duracaoS / 60;
  const ouroFinal = ctx.detalhe.curvas.ouro.at(-1);
  const proDoHeroi = ctx.proDoHeroi;
  if (ouroFinal === undefined || minutos <= 0 || !proDoHeroi || proDoHeroi.forca.n < AMOSTRA_MINIMA) return [];

  const gpm = ouroFinal / minutos;
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
      porque: "GPM final abaixo da média de pro do próprio herói indica tempo parado ou rotas longas sem farm " +
        "no caminho.",
      fontes: [FONTE], peso: "pesou", evidencias: { numeros },
    }];
  }
  return [];
}

export const REGRA: Regra = { id: "gpm-contra-pro", familia: "economia-e-farm", avaliar: gpmContraPro };
