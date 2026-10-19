// Ordena os achados e monta o resumo "o que mais pesou" e os 3 treinos sugeridos.
import { O_QUE_NAO_VEMOS, PESO_EM_NUMERO, type Achado } from "./modelo";

const MAXIMO_DE_TREINOS = 3;

export type Relatorio = Readonly<{
  achados: readonly Achado[];
  erros: readonly Achado[];
  acertos: readonly Achado[];
  resumo: string;
  treinos: readonly string[];
  oQueNaoVemos: readonly string[];
}>;

/** Mais pesado primeiro; no empate, o mais cedo na partida primeiro (afeta mais o resto do jogo). */
function porPesoDepoisPorMinuto(a: Achado, b: Achado): number {
  const diferencaDePeso = PESO_EM_NUMERO[b.peso] - PESO_EM_NUMERO[a.peso];
  if (diferencaDePeso !== 0) return diferencaDePeso;
  return (a.minuto ?? Number.POSITIVE_INFINITY) - (b.minuto ?? Number.POSITIVE_INFINITY);
}

function resumoDoQueMaisPesou(erros: readonly Achado[]): string {
  if (erros.length === 0) return "Nenhum erro encontrado pelo motor de regras nesta partida.";
  const [primeiro] = erros;
  if (!primeiro) return "Nenhum erro encontrado pelo motor de regras nesta partida.";
  const resto = erros.length - 1;
  const sufixo = resto > 0 ? ` Mais ${resto} ${resto === 1 ? "ponto" : "pontos"} abaixo, em ordem de peso.` : "";
  return `O que mais pesou: ${primeiro.titulo}.${sufixo}`;
}

/** Erros mais pesados primeiro, sem repetir a mesma regra (um treino por causa, não por ocorrência). */
function treinosSugeridos(erros: readonly Achado[]): string[] {
  const vistos = new Set<string>();
  const treinos: string[] = [];
  for (const erro of erros) {
    const causa = erro.id.replace(/-\d+(\.\d+)?$/, "");
    if (vistos.has(causa)) continue;
    vistos.add(causa);
    treinos.push(erro.oQueFazer ?? erro.titulo);
    if (treinos.length === MAXIMO_DE_TREINOS) break;
  }
  return treinos;
}

export function montarRelatorio(achados: readonly Achado[]): Relatorio {
  const ordenados = [...achados].sort(porPesoDepoisPorMinuto);
  const erros = ordenados.filter((a) => a.tipo === "erro");
  const acertos = ordenados.filter((a) => a.tipo === "acerto");
  return { achados: ordenados, erros, acertos, resumo: resumoDoQueMaisPesou(erros), treinos: treinosSugeridos(erros), oQueNaoVemos: O_QUE_NAO_VEMOS };
}
