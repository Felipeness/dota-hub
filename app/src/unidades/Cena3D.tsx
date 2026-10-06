import { Bounds, OrbitControls, useAnimations, useBounds, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { foscar } from "./materiais";
import { medirNaPose } from "./pose";

const SEM_DRACO = false;
const prefereMenosMovimento = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

type ModeloProps = { url: string; parado: boolean; aoCarregar?: () => void };

function Modelo({ url, parado, aoCarregar }: ModeloProps) {
  const { scene, animations } = useGLTF(url, SEM_DRACO);
  const { actions, names, mixer } = useAnimations(animations, scene);
  const enquadramento = useBounds();
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
  useEffect(() => {
    mixer.update(0);
    medirNaPose(scene);
    enquadramento.refresh(scene).clip().fit();
  }, [scene, mixer, enquadramento]);
  return <primitive object={scene} />;
}

// animar e mostrarGiro só ficam falsos na página dos pôsteres; a animação parada não depende do giro.
export type Cena3DProps = { url: string; girarSozinho?: boolean; animar?: boolean; mostrarGiro?: boolean; aoCarregar?: () => void };

export function Cena3D({ url, girarSozinho = !prefereMenosMovimento(), animar = true, mostrarGiro = true, aoCarregar }: Cena3DProps) {
  const [girando, setGirando] = useState(girarSozinho);
  useEffect(() => () => useGLTF.clear(url), [url]);
  return (
    <>
      <Canvas camera={{ fov: 35, position: [0, 1.5, 5] }} dpr={[1, 2]}>
        <hemisphereLight args={["#fff4e0", "#5a6470", 4]} />
        <directionalLight position={[2, 4, 6]} intensity={4.5} />
        <Bounds fit clip observe margin={1.2}>
          <Modelo url={url} parado={!animar} aoCarregar={aoCarregar} />
        </Bounds>
        <OrbitControls makeDefault autoRotate={girando} enablePan={false} />
      </Canvas>
      {mostrarGiro && (
        <button className="modelo-girar pilula" aria-pressed={girando} onClick={() => setGirando((g) => !g)}>
          {girando ? "Parar o giro" : "Girar"}
        </button>
      )}
    </>
  );
}
