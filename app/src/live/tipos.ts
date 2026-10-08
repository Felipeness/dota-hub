export type Frescor = Readonly<{ buscadoEm: number; vencido: boolean }>;
export type Lane = "safe" | "mid" | "off" | "selva";

export type ContaEncontrada = Readonly<{ id: number; nome: string; ultimaPartida: string | null }>;
export type TimeEncontrado = Readonly<{ id: number; nome: string; vitorias: number; derrotas: number }>;
export type Busca = Readonly<{ contas: readonly ContaEncontrada[]; times: readonly TimeEncontrado[]; frescor: Frescor }>;

/** acima/abaixo da mediana do herói no /benchmarks do OpenDota; nivel null = sem benchmark para comparar. */
export type NivelComparado = "acima" | "abaixo";
export type ComparacaoMetrica = Readonly<{ valor: number; medianaDoHeroi: number | null; nivel: NivelComparado | null }>;
export type ComparacaoDaPartida = Readonly<{ ouro: ComparacaoMetrica; xp: ComparacaoMetrica; lh: ComparacaoMetrica }>;

export type PartidaDaConta = Readonly<{
  id: string; heroi: string; retrato: string; venceu: boolean | null; abates: number; mortes: number; assistencias: number;
  duracaoS: number; inicio: number; lane: Lane | null; analisada: boolean; comparacao: ComparacaoDaPartida;
}>;
type Placar = Readonly<{ partidas: number; vitorias: number }>;
/** Percentil do jogador com esse herói, do /players/{id}/rankings do OpenDota (100 = entre os melhores). */
export type HeroiForte = Readonly<{ heroi: string; retrato: string; percentil: number }>;
export type ItemDoResumo = Readonly<{ metrica: string; abaixo: number; total: number }>;
export type ResumoConta = Readonly<{
  conta: Readonly<{ id: number; nome: string; medalha: string | null }>;
  totais: Placar;
  ultimas: Placar;
  herois: readonly Readonly<{ heroi: string; retrato: string; partidas: number; vitorias: number }>[];
  partidas: readonly PartidaDaConta[];
  heroisMaisFortes: readonly HeroiForte[];
  oQueMelhorar: readonly ItemDoResumo[];
  temDadosPublicos: boolean;
  frescor: Frescor;
}>;

export type PartidaDoTime = Readonly<{
  id: string; venceu: boolean | null; adversario: string; campeonato: string | null; inicio: number; duracaoS: number;
}>;
export type ResumoTime = Readonly<{
  time: TimeEncontrado;
  jogadores: readonly Readonly<{ id: number; nome: string; partidas: number; vitorias: number }>[];
  partidas: readonly PartidaDoTime[];
  frescor: Frescor;
}>;
