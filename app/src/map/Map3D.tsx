import { OrbitControls, Html, Line } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import type { Objetivo } from "../data/schemas";
import type { MapViewProps } from "./MapView";
import { normToWorld } from "./coords";
import { texturaDoMapa } from "./textura";

const TAMANHO = 100;
const ALTURA: Record<string, number> = { roshan: 4, tormentor: 4, torre: 3, barracks: 3, ancient: 5, fonte: 3 };
const COR_LADO: Record<Objetivo["lado"], string> = { radiant: "#5cc26b", dire: "#e05a47", neutro: "#b48cff" };
const COR_SELECIONADO = "#ffd166";

function Chao() {
  const textura = useLoader(TextureLoader, texturaDoMapa(window.innerWidth));
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[TAMANHO, TAMANHO]} />
      <meshStandardMaterial map={textura} />
    </mesh>
  );
}

export function Map3D({ objetivos, rota, selecionado, onSelecionar }: MapViewProps) {
  return (
    <Canvas className="mapa-3d" camera={{ position: [0, 70, 60], fov: 45 }} dpr={[1, 2]}>
      <ambientLight intensity={1.1} />
      <directionalLight position={[30, 60, 20]} intensity={0.6} />
      <Chao />
      {objetivos.map((o) => {
        const [x, , z] = normToWorld([o.x, o.y], TAMANHO);
        const h = ALTURA[o.tipo] ?? 1.5;
        return (
          <mesh key={o.id} position={[x, h / 2, z]} onClick={(e) => { e.stopPropagation(); onSelecionar(o.id); }}>
            <cylinderGeometry args={[0.6, 0.6, h, 12]} />
            <meshStandardMaterial color={o.id === selecionado ? COR_SELECIONADO : COR_LADO[o.lado]} />
          </mesh>
        );
      })}
      {rota?.caminhos.map((c, i) => (
        <Line key={i} points={c.map((p) => normToWorld(p, TAMANHO)).map(([x, , z]) => [x, 0.4, z] as [number, number, number])} color="#ff4fd8" lineWidth={4} />
      ))}
      {rota?.passos.map((p) => {
        const [x, , z] = normToWorld([p.x, p.y], TAMANHO);
        return <Html key={p.n} position={[x, 2.5, z]} center><span className={`passo passo-${p.risco}`}>{p.n}</span></Html>;
      })}
      <OrbitControls enablePan maxPolarAngle={Math.PI / 2.4} minDistance={20} maxDistance={140} />
    </Canvas>
  );
}
