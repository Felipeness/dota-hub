import { lazy, Suspense } from "react";
import type { Objetivo, Rota } from "../data/schemas";
import { MapFlat } from "./MapFlat";
import { hasWebGL } from "./webgl";

const Map3D = lazy(() => import("./Map3D").then((m) => ({ default: m.Map3D })));

export type MapViewProps = {
  objetivos: Objetivo[];
  rota?: Rota | null;
  selecionado?: string | null;
  onSelecionar: (id: string) => void;
  forcarPlano?: boolean;
};

export function MapView(props: MapViewProps) {
  if (props.forcarPlano || !hasWebGL()) return <MapFlat {...props} />;
  return (
    <Suspense fallback={<MapFlat {...props} />}>
      <Map3D {...props} />
    </Suspense>
  );
}
