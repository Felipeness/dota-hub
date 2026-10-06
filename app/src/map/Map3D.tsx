import { OrbitControls, Html, Line } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { relevoSchema, type Objetivo } from "../data/schemas";
import { useData } from "../data/useData";
import type { MapViewProps, Tracado } from "./MapView";
import { alturaEm, normToWorld, type Ponto } from "./coords";
import { texturaDoMapa } from "./textura";
import { opacidadeDaMancha, type Marca, type Trilha } from "./trilhas";

type Vetor = [number, number, number];
type NoChao = (p: Ponto, acima: number) => Vetor;

const TAMANHO = 100;
const ESCALA_RELEVO = 4;
// 255 segmentos: a malha acompanha a imagem de relevo de 512 px sem pesar no celular.
const SEGMENTOS = 255;
const GRANDES = new Set(["roshan", "tormentor", "ancient"]);

// As cores vêm de tokens.css para o 3D seguir o mesmo visual do mapa plano.
function corDoToken(nome: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(nome).trim();
}

// Calibradas na captura de 1440×900: os quatro cantos do tabuleiro cabem no quadro com pouca sobra em cima.
// Inclinação de uns 13°; mais inclinada, a borda de baixo (perto da câmera) abre além do quadro e corta as bases.
// Se a captura mostrar borda cortada ou sobra, ajuste aqui e capture de novo.
const POSICAO_DA_CAMERA: Vetor = [0, 144, 36];
const CAMERA = { position: POSICAO_DA_CAMERA, fov: 42 };
const ALVO_DA_CAMERA: Vetor = [0, 0, 2];
// A câmera inicial fica a 148 do alvo; o limite precisa passar disso para o zoom não puxar a vista no primeiro toque.
const DISTANCIA_MAXIMA = 170;

function Chao() {
  const [textura, relevo] = useLoader(TextureLoader, [texturaDoMapa(window.innerWidth), "/data/relevo_512.png"]);
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[TAMANHO, TAMANHO, SEGMENTOS, SEGMENTOS]} />
      <meshStandardMaterial map={textura} displacementMap={relevo} displacementScale={ESCALA_RELEVO} />
    </mesh>
  );
}

// A mesma grade do relevo, em JSON, diz a altura do chão para pousar marcadores e linhas sobre ele.
function useNoChao(): NoChao {
  const relevo = useData("/data/relevo.json", relevoSchema);
  return (p, acima) => {
    const [x, , z] = normToWorld(p, TAMANHO);
    const chao = relevo.estado === "ok" ? alturaEm(relevo.dados, p) * ESCALA_RELEVO : 0;
    return [x, chao + acima, z];
  };
}

type GotaProps = { objetivo: Objetivo; cor: string; ativo: boolean; noChao: NoChao; onSelecionar: (id: string) => void };

// Gota: cone com a ponta no chão e esfera em cima, como o marcador do mapa plano.
function Gota({ objetivo, cor, ativo, noChao, onSelecionar }: GotaProps) {
  const escala = (GRANDES.has(objetivo.tipo) ? 1.5 : 1) * (ativo ? 1.35 : 1);
  return (
    <group position={noChao([objetivo.x, objetivo.y], 0)} scale={escala} onClick={(e) => { e.stopPropagation(); onSelecionar(objetivo.id); }}>
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

function TracadoRota({ rota, cor, noChao }: { rota: Tracado; cor: string; noChao: NoChao }) {
  const origem = rota.passos.find((p) => p.n === rota.fuga?.de_passo);
  return (
    <>
      {rota.caminhos.map((c, i) => <Line key={i} points={c.map((p) => noChao(p, 0.4))} color={cor} lineWidth={4} />)}
      {rota.fuga && origem && (
        <Line points={[noChao([origem.x, origem.y], 0.4), noChao([rota.fuga.x, rota.fuga.y], 0.4)]} color={corDoToken("--cor-texto")} lineWidth={2} dashed dashSize={1.2} gapSize={1} />
      )}
      {rota.passos.map((p) => (
        <Html key={p.n} position={noChao([p.x, p.y], 2.5)} center zIndexRange={[10, 0]}>
          <span className="passo-no-mapa"><span className={`passo passo-${p.risco}`}>{p.n}</span>{p.minuto && <span className="passo-minuto">{p.minuto}</span>}</span>
        </Html>
      ))}
    </>
  );
}

type TrilhasProps = { trilhas: Trilha[]; corLado: Record<Trilha["lado"], string>; destaque: string; noChao: NoChao };

function Trilhas({ trilhas, corLado, destaque, noChao }: TrilhasProps) {
  return (
    <>
      {trilhas.filter((t) => t.rastro.length >= 2).map((t) => (
        <Line key={t.id} points={t.rastro.map((p) => noChao(p, 0.6))} color={corLado[t.lado]} lineWidth={t.destaque ? 4 : 2} />
      ))}
      {trilhas.map((t) => t.atual && (
        <mesh key={`agora-${t.id}`} position={noChao(t.atual, 1)}>
          <sphereGeometry args={[t.destaque ? 1.1 : 0.8, 12, 12]} />
          <meshStandardMaterial color={t.destaque ? destaque : corLado[t.lado]} />
        </mesh>
      ))}
    </>
  );
}

function Marcas({ marcas, noChao }: { marcas: Marca[]; noChao: NoChao }) {
  return marcas.map((m) => (
    <Html key={m.id} position={noChao([m.x, m.y], 1.5)} center zIndexRange={[10, 0]}>
      <span role="img" aria-label={m.rotulo} title={m.rotulo} className={`marca marca-${m.tipo} marca-${m.lado}`} />
    </Html>
  ));
}

export function Map3D({ objetivos, rota, trilhas = [], marcas = [], manchas = [], selecionado, onSelecionar }: MapViewProps) {
  const noChao = useNoChao();
  const corLado: Record<Objetivo["lado"], string> = { radiant: corDoToken("--cor-radiant"), dire: corDoToken("--cor-dire"), neutro: corDoToken("--cor-neutro") };
  const destaque = corDoToken("--cor-destaque");
  // O Canvas põe height: 100% em linha no próprio elemento; a proporção quadrada fica no div em volta.
  return (
    <div className="mapa-3d">
      <Canvas camera={CAMERA} dpr={[1, 2]}>
        <color attach="background" args={[corDoToken("--cor-fundo")]} />
        <ambientLight intensity={1.1} />
        <directionalLight position={[30, 60, 20]} intensity={0.6} />
        <Chao />
        {objetivos.map((o) => (
          <Gota key={o.id} objetivo={o} ativo={o.id === selecionado} cor={o.id === selecionado ? destaque : corLado[o.lado]} noChao={noChao} onSelecionar={onSelecionar} />
        ))}
        {rota && <TracadoRota rota={rota} cor={destaque} noChao={noChao} />}
        <Trilhas trilhas={trilhas} corLado={corLado} destaque={destaque} noChao={noChao} />
        <Marcas marcas={marcas} noChao={noChao} />
        {manchas.map((m) => (
          <mesh key={`mancha-${m.x}-${m.y}`} position={noChao([m.x, m.y], 0.3)} rotation={[-Math.PI / 2, 0, 0]}>
            <circleGeometry args={[0.9, 16]} />
            <meshBasicMaterial color={destaque} transparent opacity={opacidadeDaMancha(m.peso)} />
          </mesh>
        ))}
        <OrbitControls target={ALVO_DA_CAMERA} enablePan maxPolarAngle={Math.PI / 2.4} minDistance={20} maxDistance={DISTANCIA_MAXIMA} />
      </Canvas>
    </div>
  );
}
