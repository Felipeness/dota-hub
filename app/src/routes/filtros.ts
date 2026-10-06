import type { Indice, RotaResumo } from "../data/schemas";

export type Lado = "radiant" | "dire";
export type FiltroRotas = { lado?: Lado; minuto?: number; texto?: string; pdf?: RotaResumo["pdf"] };
type Filtravel = Pick<RotaResumo, "id" | "lado" | "pdf" | "pergunta" | "titulo" | "janela">;

export const normalizar = (s: string) => s.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
export const minutoDaJanela = (mmss?: string) => (mmss ? Number(mmss.split(":")[0]) : NaN);

const naJanela = (r: Filtravel, minuto: number) => {
  const de = minutoDaJanela(r.janela.de);
  return de <= minuto && minuto < Math.max(minutoDaJanela(r.janela.ate), de + 1);
};

export function rotaDaCelula(indice: Indice, lado: Lado, minuto: number, coluna: string) {
  const celula = indice[lado].find((l) => l.minuto === minuto)?.cenarios[coluna];
  return celula ?? { id: null, nota: "sem rota para este minuto" };
}

export function filtrarRotas<T extends Filtravel>(rotas: readonly T[], f: FiltroRotas): T[] {
  const texto = f.texto ? normalizar(f.texto) : null;
  return rotas.filter((r) =>
    (!f.lado || r.lado === f.lado) &&
    (!f.pdf || r.pdf === f.pdf) &&
    (f.minuto === undefined || naJanela(r, f.minuto)) &&
    (!texto || normalizar(`${r.id} ${r.pergunta} ${r.titulo}`).includes(texto)));
}
