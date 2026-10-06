import type { Fase, HeroiResumo, Indice, Objetivo, Passo, RotaResumo, Spike } from "../data/schemas";
import { minutoDaJanela, normalizar, rotaDaCelula, type Lado } from "../routes/filtros";

// Fase sem fim (ate null) vale até o fim do jogo.
export function faseNoMinuto(fases: readonly Fase[], minuto: number): Fase | null {
  return fases.find((f) => f.de <= minuto && minuto < (f.ate ?? Infinity)) ?? null;
}

export function proximoSpike(spikes: readonly Spike[], minuto: number): Spike | null {
  return spikes.find((s) => s.minuto !== null && s.minuto >= minuto) ?? null;
}

export function filtrarHerois(herois: readonly HeroiResumo[], texto: string): HeroiResumo[] {
  const alvo = normalizar(texto.trim());
  return herois.filter((h) => normalizar(`${h.nome} ${h.id}`).includes(alvo));
}

export function objetivosDosPassos(passos: readonly Pick<Passo, "alvo">[], objetivos: readonly Objetivo[]): Objetivo[] {
  const alvos = new Set(passos.map((p) => p.alvo));
  return objetivos.filter((o) => alvos.has(o.id));
}

export type Variacao = { id: string; rotulo: string };
type FontesDeVariacao = { indice: Indice; rotas: readonly RotaResumo[]; heroi: string };
const PRIMEIRO_MINUTO_DO_INDICE = 4;

const comecaNaFase = (r: RotaResumo, fase: Pick<Fase, "de" | "ate">) => {
  const inicio = minutoDaJanela(r.janela.de);
  return inicio >= fase.de && inicio < (fase.ate ?? Infinity);
};

function juntarPorId(variacoes: readonly Variacao[]): Variacao[] {
  const rotulos = new Map<string, string[]>();
  for (const { id, rotulo } of variacoes) rotulos.set(id, [...(rotulos.get(id) ?? []), rotulo]);
  return [...rotulos].map(([id, nomes]) => ({ id, rotulo: nomes.join(", ") }));
}

// Variações da fase: as rotas do guia do herói (PDF 05) que começam nela e a rota de cada situação do índice
// no minuto em que a fase começa (o índice vai do minuto 4 ao 30).
export function variacoesDaFase(fase: Pick<Fase, "de" | "ate">, lado: Lado, { indice, rotas, heroi }: FontesDeVariacao): Variacao[] {
  const doGuia = rotas
    .filter((r) => r.heroi === heroi && r.lado === lado && comecaNaFase(r, fase))
    .map((r) => ({ id: r.id, rotulo: r.titulo || r.pergunta }));
  const minuto = Math.max(PRIMEIRO_MINUTO_DO_INDICE, Math.ceil(fase.de));
  const daSituacao = indice.colunas.flatMap((coluna) => {
    const { id } = rotaDaCelula(indice, lado, minuto, coluna);
    return id ? [{ id, rotulo: coluna }] : [];
  });
  return juntarPorId([...doGuia, ...daSituacao]);
}
