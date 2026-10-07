import { lazy, Suspense, type ReactNode } from "react";
import type { Objetivo, Rota } from "../data/schemas";
import { MapFlat } from "./MapFlat";
import type { Mancha, Marca, Trilha } from "./trilhas";
import { hasWebGL } from "./webgl";

const Map3D = lazy(() => import("./Map3D").then((m) => ({ default: m.Map3D })));

// A fuga é opcional para que um traçado de fase de herói (sem fuga) também desenhe no mapa.
export type Tracado = Pick<Rota, "passos" | "caminhos"> & { fuga?: Rota["fuga"] };

export type MapViewProps = {
  objetivos: Objetivo[];
  rota?: Tracado | null;
  trilhas?: Trilha[];
  marcas?: Marca[];
  manchas?: readonly Mancha[];
  selecionado?: string | null;
  onSelecionar: (id: string) => void;
  forcarPlano?: boolean;
  // Fica por cima do mapa, junto do botão Centralizar (por exemplo, os atalhos da tela Mapa).
  children?: ReactNode;
};

export function MapView(props: MapViewProps) {
  if (props.forcarPlano || !hasWebGL()) return <MapFlat {...props} />;
  return (
    <Suspense fallback={<MapFlat {...props} />}>
      <Map3D {...props} />
    </Suspense>
  );
}
