export type Frescor = Readonly<{ buscadoEm: number; vencido: boolean }>;
export type Lane = "safe" | "mid" | "off" | "selva";

export type ContaEncontrada = Readonly<{ id: number; nome: string; ultimaPartida: string | null }>;
export type TimeEncontrado = Readonly<{ id: number; nome: string; vitorias: number; derrotas: number }>;
export type Busca = Readonly<{ contas: readonly ContaEncontrada[]; times: readonly TimeEncontrado[]; frescor: Frescor }>;

export type PartidaDaConta = Readonly<{
  id: string; heroi: string; venceu: boolean | null; abates: number; mortes: number; assistencias: number;
  duracaoS: number; inicio: number; lane: Lane | null; analisada: boolean;
}>;
type Placar = Readonly<{ partidas: number; vitorias: number }>;
export type ResumoConta = Readonly<{
  conta: Readonly<{ id: number; nome: string; medalha: string | null }>;
  totais: Placar;
  ultimas: Placar;
  herois: readonly Readonly<{ heroi: string; partidas: number; vitorias: number }>[];
  partidas: readonly PartidaDaConta[];
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
