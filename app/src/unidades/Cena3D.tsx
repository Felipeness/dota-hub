import { Bounds, OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { foscar } from "./materiais";

const SEM_DRACO = false;
const prefereMenosMovimento = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

type ModeloProps = { url: string; parado: boolean; aoCarregar?: () => void };

function Modelo({ url, parado, aoCarregar }: ModeloProps) {
  const { scene, animations } = useGLTF(url, SEM_DRACO);
  const { actions, names } = useAnimations(animations, scene);
  useEffect(() => {
    foscar(scene);
    aoCarregar?.();
  }, [scene, aoCarregar]);
  useEffect(() => {
    const nome = names[0];
    const acao = nome ? actions[nome] : null;
    if (!acao) return;
    acao.setEffectiveTimeScale(parado ? 0 : 1).play();
    return () => { acao.stop(); };
  }, [actions, names, parado]);
  return <primitive object={scene} />;
}

export type Cena3DProps = { url: string; girarSozinho?: boolean; aoCarregar?: () => void };

export function Cena3D({ url, girarSozinho = !prefereMenosMovimento(), aoCarregar }: Cena3DProps) {
  const [girando, setGirando] = useState(girarSozinho);
  useEffect(() => () => useGLTF.clear(url), [url]);
  return (
    <>
      <Canvas camera={{ fov: 35 }} dpr={[1, 2]}>
        <hemisphereLight args={["#fff4e0", "#202830", 2.6]} />
        <directionalLight position={[3, 5, 4]} intensity={3} />
        <Bounds fit clip observe margin={1.2}>
          <Modelo url={url} parado={!girando} aoCarregar={aoCarregar} />
        </Bounds>
        <OrbitControls makeDefault autoRotate={girando} enablePan={false} />
      </Canvas>
      {girarSozinho && (
        <button className="modelo-girar pilula" aria-pressed={girando} onClick={() => setGirando((g) => !g)}>
          {girando ? "Parar o giro" : "Girar"}
        </button>
      )}
    </>
  );
}
