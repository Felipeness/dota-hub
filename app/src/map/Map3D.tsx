import { OrbitControls, Html, Line } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import type { Objetivo, Rota } from "../data/schemas";
import type { MapViewProps } from "./MapView";
import { normToWorld } from "./coords";
import { texturaDoMapa } from "./textura";

type Vetor = [number, number, number];

const TAMANHO = 100;
const GRANDES = new Set(["roshan", "tormentor", "ancient"]);

// As cores vêm de tokens.css para o 3D seguir o mesmo visual do mapa plano.
function corDoToken(nome: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(nome).trim();
}

function Chao() {
  const textura = useLoader(TextureLoader, texturaDoMapa(window.innerWidth));
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[TAMANHO, TAMANHO]} />
      <meshStandardMaterial map={textura} />
    </mesh>
  );
}

type GotaProps = { objetivo: Objetivo; cor: string; ativo: boolean; onSelecionar: (id: string) => void };

// Gota: cone com a ponta no chão e esfera em cima, como o marcador do mapa plano.
function Gota({ objetivo, cor, ativo, onSelecionar }: GotaProps) {
  const [x, , z] = normToWorld([objetivo.x, objetivo.y], TAMANHO);
  const escala = (GRANDES.has(objetivo.tipo) ? 1.5 : 1) * (ativo ? 1.35 : 1);
  return (
    <group position={[x, 0, z]} scale={escala} onClick={(e) => { e.stopPropagation(); onSelecionar(objetivo.id); }}>
      <mesh position={[0, 1, 0]} rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.7, 2, 10]} />
        <meshStandardMaterial color={cor} emissive={cor} emissiveIntensity={ativo ? 0.6 : 0.1} />
      </mesh>
      <mesh position={[0, 2.2, 0]}>
        <sphereGeometry args={[0.85, 12, 10]} />
        <meshStandardMaterial color={cor} emissive={cor} emissiveIntensity={ativo ? 0.6 : 0.1} />
      </mesh>
    </group>
  );
}

const noChao = ([x, y]: [number, number]): Vetor => {
  const [wx, , wz] = normToWorld([x, y], TAMANHO);
  return [wx, 0.4, wz];
};

function TracadoRota({ rota, cor }: { rota: Rota; cor: string }) {
  const origem = rota.passos.find((p) => p.n === rota.fuga?.de_passo);
  return (
    <>
      {rota.caminhos.map((c, i) => <Line key={i} points={c.map(noChao)} color={cor} lineWidth={4} />)}
      {rota.fuga && origem && (
        <Line points={[noChao([origem.x, origem.y]), noChao([rota.fuga.x, rota.fuga.y])]} color={corDoToken("--cor-texto")} lineWidth={2} dashed dashSize={1.2} gapSize={1} />
      )}
      {rota.passos.map((p) => {
        const [x, , z] = noChao([p.x, p.y]);
        return (
          <Html key={p.n} position={[x, 2.5, z]} center zIndexRange={[10, 0]}>
            <span className="passo-no-mapa"><span className={`passo passo-${p.risco}`}>{p.n}</span><span className="passo-minuto">{p.minuto}</span></span>
          </Html>
        );
      })}
    </>
  );
}

export function Map3D({ objetivos, rota, selecionado, onSelecionar }: MapViewProps) {
  const corLado: Record<Objetivo["lado"], string> = { radiant: corDoToken("--cor-radiant"), dire: corDoToken("--cor-dire"), neutro: corDoToken("--cor-neutro") };
  const destaque = corDoToken("--cor-destaque");
  return (
    <Canvas className="mapa-3d" camera={{ position: [0, 100, 78], fov: 45 }} dpr={[1, 2]}>
      <color attach="background" args={[corDoToken("--cor-fundo")]} />
      <ambientLight intensity={1.1} />
      <directionalLight position={[30, 60, 20]} intensity={0.6} />
      <Chao />
      {objetivos.map((o) => (
        <Gota key={o.id} objetivo={o} ativo={o.id === selecionado} cor={o.id === selecionado ? destaque : corLado[o.lado]} onSelecionar={onSelecionar} />
      ))}
      {rota && <TracadoRota rota={rota} cor={destaque} />}
      <OrbitControls enablePan maxPolarAngle={Math.PI / 2.4} minDistance={20} maxDistance={140} />
    </Canvas>
  );
}
