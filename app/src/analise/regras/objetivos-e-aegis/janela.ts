// Janela de respawn do Roshan: usada por mais de uma regra desta família (buyback, contagem), por isso
// extraída em vez de duplicada por arquivo.
/** Roshan volta aleatoriamente entre 8 e 11 minutos depois de morto (Dota 2 Wiki / Liquipedia: Roshan, estável em 7.41 e sub-patches). */
export const JANELA_RESPAWN_MIN_S = 8 * 60;
export const JANELA_RESPAWN_MAX_S = 11 * 60;

export const FONTE_JANELA_RESPAWN = "Dota 2 Wiki / Liquipedia: Roshan — respawna entre 8 e 11 minutos depois de morto";

/** Janela em que o Roshan morto em `tMorte` volta a ficar disponível. */
export function janelaDeRespawn(tMorte: number): Readonly<{ inicio: number; fim: number }> {
  return { inicio: tMorte + JANELA_RESPAWN_MIN_S, fim: tMorte + JANELA_RESPAWN_MAX_S };
}
