import { useEffect, useState } from "react";
import type { EstadoDados } from "../data/useData";
import { loadJson } from "../data/load";
import { LADOS, mapaAtlasSchema, mapaDoLadoSchema, type Lado, type MapaAtlas, type MapaDoLado } from "./schemas";

// Radiant e Dire: só as partidas daquele lado, em coordenadas reais (Dire sem espelhar). Ambos: o mapa do atlas,
// com as partidas de Dire espelhadas para o ponto de vista Radiant.
export type EscolhaDeLado = Lado | "ambos";
const ESCOLHAS: readonly EscolhaDeLado[] = [...LADOS, "ambos"];
const ROTULO: Record<EscolhaDeLado, string> = { radiant: "Radiant", dire: "Dire", ambos: "Ambos" };
const BASE: Record<Lado, string> = { radiant: "embaixo à esquerda", dire: "em cima à direita" };
// Abaixo disso, um lado tem poucas partidas para ler padrão; o mapa aparece com o aviso.
export const N_PEQUENO = 15;
export const MAPA_VAZIO: MapaAtlas = mapaAtlasSchema.parse({});

export const escolhaDoLado = (valor: string | null): EscolhaDeLado => ESCOLHAS.find((e) => e === valor) ?? "ambos";

export type NotaDoLado = { texto: string; alerta: string | null };

export function notaDoLado(lado: EscolhaDeLado, estado: EstadoDados<MapaDoLado> | null, partidasAmbos: number): NotaDoLado {
  if (lado === "ambos" || estado === null) {
    return { texto: `${partidasAmbos} partidas; as de Dire aparecem espelhadas, com a base do time sempre embaixo à esquerda.`, alerta: null };
  }
  if (estado.estado === "carregando") return { texto: `Carregando o mapa de ${ROTULO[lado]}…`, alerta: null };
  if (estado.estado === "indisponivel") return { texto: `Mapa de ${ROTULO[lado]} indisponível. ${estado.motivo}`, alerta: null };
  const { partidas } = estado.dados;
  return {
    texto: `Como ${ROTULO[lado]}: ${partidas} partidas, no mapa real (base ${BASE[lado]}). Os marcadores trazem os números; o texto escrito de cada um só existe em Ambos.`,
    alerta: partidas < N_PEQUENO ? `n pequeno: só ${partidas} partidas deste lado. Leia como indício.` : null,
  };
}

// Baixa só o lado escolhido; Ambos já vem no arquivo do time.
export function useMapaDoLado(id: string, lado: EscolhaDeLado): EstadoDados<MapaDoLado> | null {
  const chave = `${id}.${lado}`;
  const [carregado, setCarregado] = useState<{ chave: string; estado: EstadoDados<MapaDoLado> } | null>(null);
  useEffect(() => {
    if (lado === "ambos") return;
    let vivo = true;
    loadJson(`/data/times_atlas/${encodeURIComponent(id)}.${lado}.json`, mapaDoLadoSchema).then((r) => {
      if (vivo) setCarregado({ chave, estado: r.ok ? { estado: "ok", dados: r.dados } : { estado: "indisponivel", motivo: r.motivo } });
    });
    return () => { vivo = false; };
  }, [id, lado, chave]);
  if (lado === "ambos") return null;
  return carregado?.chave === chave ? carregado.estado : { estado: "carregando" };
}

type Props = { lado: EscolhaDeLado; nota: NotaDoLado; onEscolher: (lado: EscolhaDeLado) => void };

export function SeletorDeLado({ lado, nota, onEscolher }: Props) {
  return (
    <div className="atlas-lado">
      <div className="alternador" role="group" aria-label="Lado do mapa">
        {ESCOLHAS.map((e) => (
          <button key={e} className={`atlas-lado-${e}`} aria-pressed={lado === e} onClick={() => onEscolher(e)}>{ROTULO[e]}</button>
        ))}
      </div>
      <p className="atlas-lado-nota">{nota.texto}</p>
      {nota.alerta && <p className="atlas-lado-alerta" role="status">{nota.alerta}</p>}
    </div>
  );
}
