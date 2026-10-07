import { Html, Line, MapControls } from "@react-three/drei";
import { Canvas, useLoader, type ThreeEvent } from "@react-three/fiber";
import { useEffect, useRef, useState, type ComponentRef } from "react";
import { PerspectiveCamera, TextureLoader } from "three";
import { relevoSchema, type Objetivo } from "../data/schemas";
import { useData } from "../data/useData";
import type { MapViewProps, Tracado } from "./MapView";
import { alturaEm, normToWorld, type Ponto } from "./coords";
import { caixaDoFoco, distanciaParaEnquadrar, foiArraste, posicaoDaCamera, prenderAlvo, type Caixa } from "./navegacao";
import { SeloDaRota } from "./SeloDaRota";
import { caminhoDaFuga, selosDaRota, trechosDaRota } from "./selos";
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

// A posição é provisória: o enquadramento ajusta a distância ao tamanho real do quadro antes do primeiro uso.
const CAMERA = { position: posicaoDaCamera({ x: 0, y: 0 }, 150), fov: 42 };
const TABULEIRO_INTEIRO: Caixa = { centro: { x: 0, y: 0 }, lado: TAMANHO };
// Perto o bastante para ler um acampamento; longe fica limitado a um pouco além do enquadramento inicial.
const DISTANCIA_MINIMA = 12;
const FOLGA_DO_AFASTAMENTO = 1.35;
// 60° a partir da vertical: dá para inclinar e ver o relevo sem a câmera passar por baixo do chão.
const INCLINACAO_MAXIMA = Math.PI / 3;

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

// O fiber dispara onClick mesmo depois de um arraste; e.delta diz quanto o ponteiro andou desde o aperto.
function aoClicarGota(e: ThreeEvent<MouseEvent>, selecionar: () => void) {
  e.stopPropagation();
  if (!foiArraste(e.delta)) selecionar();
}

type GotaProps = { objetivo: Objetivo; cor: string; ativo: boolean; noChao: NoChao; onSelecionar: (id: string) => void };

// Gota: cone com a ponta no chão e esfera em cima, como o marcador do mapa plano.
function Gota({ objetivo, cor, ativo, noChao, onSelecionar }: GotaProps) {
  const escala = (GRANDES.has(objetivo.tipo) ? 1.5 : 1) * (ativo ? 1.35 : 1);
  return (
    <group position={noChao([objetivo.x, objetivo.y], 0)} scale={escala} onClick={(e) => aoClicarGota(e, () => onSelecionar(objetivo.id))}>
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
  const fuga = caminhoDaFuga(rota);
  return (
    <>
      {trechosDaRota(rota).map((t, i) => (
        <Line key={i} points={t.pontos.map((p) => noChao(p, 0.4))} color={cor} lineWidth={4} dashed={t.salto} dashSize={1.5} gapSize={1} />
      ))}
      {fuga.length >= 2 && (
        <Line points={fuga.map((p) => noChao(p, 0.4))} color={corDoToken("--cor-texto")} lineWidth={2} dashed dashSize={1.2} gapSize={1} />
      )}
      {selosDaRota(rota.passos).map((selo) => (
        <Html key={selo.chave} position={noChao([selo.x, selo.y], 2.5)} center zIndexRange={[10, 0]}>
          <span className="passo-no-mapa"><SeloDaRota selo={selo} /></span>
        </Html>
      ))}
    </>
  );
}

const pontosDaRota = (rota: Tracado): Ponto[] => [
  ...rota.caminhos.flat(),
  ...rota.passos.map((p): Ponto => [p.x, p.y]),
  ...caminhoDaFuga(rota),
];

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

type Controles = ComponentRef<typeof MapControls>;

function enquadrar(controles: Controles, caixa: Caixa) {
  const camera = controles.object;
  if (!(camera instanceof PerspectiveCamera)) return;
  const distancia = distanciaParaEnquadrar({ tamanho: caixa.lado, fovVerticalGraus: camera.fov, aspecto: camera.aspect });
  controles.maxDistance = Math.max(distancia, distanciaParaEnquadrar({ tamanho: TAMANHO, fovVerticalGraus: camera.fov, aspecto: camera.aspect })) * FOLGA_DO_AFASTAMENTO;
  controles.target.set(caixa.centro.x, 0, caixa.centro.y);
  camera.position.set(...posicaoDaCamera(caixa.centro, distancia));
  controles.update();
}

// Depois de cada movimento, alvo e câmera andam juntos de volta para dentro do tabuleiro.
function manterNoTabuleiro(controles: Controles) {
  const { target, object } = controles;
  const preso = prenderAlvo({ x: target.x, y: target.z }, TAMANHO / 2);
  const dx = preso.x - target.x;
  const dz = preso.y - target.z;
  if (dx === 0 && dz === 0) return;
  target.x += dx;
  target.z += dz;
  object.position.x += dx;
  object.position.z += dz;
}

// Arrastar move o mapa, a roda aproxima no ponto do cursor, botão direito ou Ctrl+arrastar giram e inclinam.
// No toque: um dedo move, pinça aproxima entre os dedos e dois dedos giram.
function Navegacao({ caixa, pedido }: { caixa: Caixa; pedido: number }) {
  const controles = useRef<Controles>(null);
  // Só os números da caixa entram nas dependências: um objeto novo com os mesmos valores não tira a vista do lugar.
  const { centro: { x, y }, lado } = caixa;
  useEffect(() => {
    if (controles.current) enquadrar(controles.current, { centro: { x, y }, lado });
  }, [x, y, lado, pedido]);
  return (
    <MapControls ref={controles} makeDefault enableDamping zoomToCursor
      minDistance={DISTANCIA_MINIMA} minPolarAngle={0} maxPolarAngle={INCLINACAO_MAXIMA}
      onChange={() => { if (controles.current) manterNoTabuleiro(controles.current); }} />
  );
}

export function Map3D({ objetivos, rota, trilhas = [], marcas = [], manchas = [], selecionado, onSelecionar, children }: MapViewProps) {
  const noChao = useNoChao();
  const [pedidoDeCentralizar, setPedidoDeCentralizar] = useState(0);
  const caixa = rota ? caixaDoFoco(pontosDaRota(rota), TAMANHO) : TABULEIRO_INTEIRO;
  const corLado: Record<Objetivo["lado"], string> = { radiant: corDoToken("--cor-radiant"), dire: corDoToken("--cor-dire"), neutro: corDoToken("--cor-neutro") };
  const destaque = corDoToken("--cor-destaque");
  // O Canvas põe height: 100% em linha no próprio elemento; o tamanho do quadro vem do div em volta.
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
        <Navegacao caixa={caixa} pedido={pedidoDeCentralizar} />
      </Canvas>
      <button className="botao-centralizar" onClick={() => setPedidoDeCentralizar((n) => n + 1)}>Centralizar</button>
      {children}
    </div>
  );
}
