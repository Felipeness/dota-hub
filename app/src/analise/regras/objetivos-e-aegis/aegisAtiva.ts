// Regra: lutar/morrer com a Aegis do time inimigo ainda ativa. Ver SPEC §"Famílias de regras" > objetivos-e-aegis.
import { JANELA_DE_AEGIS_S, tempoDaPartida } from "../../../live/partida/detalhe";
import type { Achado, Contexto, Regra } from "../../modelo";

const FONTES_AEGIS: readonly string[] = [
  "objectives[] do OpenDota (CHAT_MESSAGE_ROSHAN_KILL)",
  "Dota 2 Wiki / Liquipedia: Roshan — Aegis of the Immortal expira em 5 minutos",
];

const emMinutos = (segundos: number) => segundos / 60;

function mortesComAegisInimigaAtiva(ctx: Contexto): Achado[] {
  const roshansInimigos = ctx.detalhe.eventos.filter((e) => e.tipo === "roshan" && e.texto.includes("time inimigo"));
  const mortes = ctx.detalhe.eventos.filter((e) => e.tipo === "morte");
  const aegisConsumidas = ctx.detalhe.eventos.filter((e) => e.tipo === "aegis-consumida");
  return mortes.flatMap((morte): Achado[] => {
    const roshanQueAtivouAAegis = roshansInimigos.find((r) => r.t <= morte.t && morte.t - r.t <= JANELA_DE_AEGIS_S);
    if (!roshanQueAtivouAAegis) return [];
    // Portador já morreu com a Aegis antes da morte avaliada: ela já foi gasta, não está mais ativa.
    const jaConsumida = aegisConsumidas.some((a) => a.t >= roshanQueAtivouAAegis.t && a.t <= morte.t);
    if (jaConsumida) return [];
    const minutoDaMorte = emMinutos(morte.t);
    const minutoDoRoshan = emMinutos(roshanQueAtivouAAegis.t);
    return [{
      id: `aegis-ativa-${morte.t}`,
      tipo: "erro",
      minuto: minutoDaMorte,
      titulo: `Morreu com a Aegis do time inimigo ainda ativa, ${tempoDaPartida(morte.t)}`,
      oQueAconteceu:
        `${morte.texto} em ${tempoDaPartida(morte.t)}, dentro dos 5 minutos depois do time inimigo pegar o Roshan ` +
        `em ${tempoDaPartida(roshanQueAtivouAAegis.t)}.`,
      oQueFazer:
        "Evitar lutar isolado ou entrar em luta sem saber quem está com a Aegis: o portador ressuscita uma vez, " +
        "com vida e mana cheias, e muda o número da luta sem aviso. Segurar as waves e evitar brigar nesses 5 minutos.",
      porque:
        "A Aegis of the Immortal ressuscita quem a tem, uma vez, dentro de 5 minutos da morte do Roshan; uma luta " +
        "que parecia favorável vira desvantagem quando esse herói volta no meio dela.",
      fontes: FONTES_AEGIS,
      peso: "pesou_muito",
      evidencias: { numeros: { minutoDaMorte, minutoDoRoshan }, posicaoNoMapa: morte.ponto ? { x: morte.ponto[0], y: morte.ponto[1] } : null },
    }];
  });
}

export const REGRAS: readonly Regra[] = [
  { id: "mortes-com-aegis-inimiga-ativa", familia: "objetivos-e-aegis", avaliar: mortesComAegisInimigaAtiva },
];
