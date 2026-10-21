// "O que você devia ter feito no geral": o erro mais pesado de cada área (build, mortes, objetivos e visão, farm),
// no topo da análise. Só junta os achados que as regras já produziram; nenhum número novo nasce aqui.
import { PESO_EM_NUMERO, type Achado, type Familia, type Regra } from "./modelo";
import type { VereditoDaBuild } from "./suaBuild";

export type Area = "build" | "mortes" | "objetivos" | "farm";
export type LinhaDoResumo = Readonly<{ area: Area; rotulo: string; texto: string }>;
export type AchadosDaRegra = Readonly<{ regra: Pick<Regra, "id" | "familia">; achados: readonly Achado[] }>;

const AREA_DA_FAMILIA: Readonly<Record<Familia, Area>> = {
  build: "build", "mortes-e-visao": "mortes", lutas: "mortes", "objetivos-e-aegis": "objetivos", "economia-e-farm": "farm",
};
/** Wards moram na família de mortes e visão, mas pro resumo visão anda junto com objetivo (Roshan sem ward). */
const AREA_DA_REGRA: Readonly<Record<string, Area>> = { "wards-colocadas": "objetivos" };

const ROTULO: Readonly<Record<Area, string>> = { build: "Build", mortes: "Mortes e posição", objetivos: "Objetivos e visão", farm: "Farm" };
const ORDEM: readonly Area[] = ["build", "mortes", "objetivos", "farm"];

const areaDa = ({ id, familia }: AchadosDaRegra["regra"]): Area => AREA_DA_REGRA[id] ?? AREA_DA_FAMILIA[familia];

const maisPesado = (a: Achado, b: Achado) =>
  PESO_EM_NUMERO[b.peso] - PESO_EM_NUMERO[a.peso] || (a.minuto ?? Infinity) - (b.minuto ?? Infinity);

function erroMaisPesado(porRegra: readonly AchadosDaRegra[], area: Area): Achado | null {
  const erros = porRegra.filter(({ regra }) => areaDa(regra) === area).flatMap(({ achados }) => achados.filter((a) => a.tipo === "erro"));
  return [...erros].sort(maisPesado)[0] ?? null;
}

/**
 * Uma linha por área com erro, na ordem build, mortes, objetivos, farm. A build usa o primeiro veredito da seção
 * "Sua build" (compara com os pros contra este draft); sem ele, o erro mais pesado das regras de build.
 */
export function resumoGeral(porRegra: readonly AchadosDaRegra[], vereditoDaBuild: VereditoDaBuild | null): LinhaDoResumo[] {
  return ORDEM.flatMap((area) => {
    const texto = area === "build" && vereditoDaBuild ? vereditoDaBuild.texto : erroMaisPesado(porRegra, area)?.titulo;
    return texto ? [{ area, rotulo: ROTULO[area], texto }] : [];
  });
}
