// Desenho em SVG de tudo que vai no quadro. Cor, traço e fonte vão em atributos (não em classes CSS) porque o PNG
// é gerado serializando este mesmo SVG, e uma imagem SVG não enxerga a folha de estilo da página.
import type { ReactNode } from "react";
import type { Objetivo } from "../data/schemas";
import { urlDoRetrato } from "../heroes/resumo";
import { caixaDoTexto, fimDaHasteDaSeta, pontaDaSeta, TAMANHO_DO_TEXTO } from "./geometria";
import { CORES, ESPESSURAS, RAIO_DA_VISAO, raioDaPeca, type Estrutura, type Icone, type NovoTraco, type Peca, type Runa, type Time } from "./quadro";
import type { PontoDeWard } from "./wardsDosPros";

export const COR_DO_TIME: Readonly<Record<Time, string>> = { radiant: "#5bbf7a", dire: "#e0675a" };
const COR_NEUTRA = "#b08cff";
const CONTORNO = "#0a0e11";
export const FONTE_DO_QUADRO = "'IBM Plex Sans', system-ui, sans-serif";
const ID_DO_CIRCULO = "pr-circulo";

export const INFO_DAS_RUNAS: Readonly<Record<Runa, { nome: string; sigla: string; cor: string }>> = {
  bounty: { nome: "Bounty", sigla: "B", cor: "#e8b73c" },
  agua: { nome: "Água", sigla: "Á", cor: "#4aa8ff" },
  sabedoria: { nome: "Sabedoria", sigla: "S", cor: "#9b7bff" },
  velocidade: { nome: "Velocidade (haste)", sigla: "V", cor: "#ff5a4a" },
  dano_dobrado: { nome: "Dano dobrado", sigla: "DD", cor: "#3d78ff" },
  arcana: { nome: "Arcana", sigla: "Ar", cor: "#d45cff" },
  ilusao: { nome: "Ilusão", sigla: "Il", cor: "#f5d547" },
  invisibilidade: { nome: "Invisibilidade", sigla: "In", cor: "#9fd8ff" },
  regeneracao: { nome: "Regeneração", sigla: "R", cor: "#45d46b" },
  escudo: { nome: "Escudo", sigla: "Es", cor: "#e9e4d8" },
};

export const NOME_DA_ESTRUTURA: Readonly<Record<Estrutura, string>> = { torre: "Torre", barracks: "Barracks", ancient: "Ancient", outpost: "Outpost" };

type Forma = "triangulo" | "quadrado" | "estrela" | "losango" | "circulo" | "hexagono";
const FORMA_DA_ESTRUTURA: Readonly<Record<Estrutura, Forma>> = { torre: "triangulo", barracks: "quadrado", ancient: "estrela", outpost: "losango" };

function pontosDaForma(forma: Exclude<Forma, "circulo">, r: number): string {
  const poligono = (lados: number, giro: number, raio: (i: number) => number) =>
    Array.from({ length: lados }, (_, i) => {
      const a = giro + (i * 2 * Math.PI) / lados;
      return `${(raio(i) * Math.cos(a)).toFixed(1)},${(raio(i) * Math.sin(a)).toFixed(1)}`;
    }).join(" ");
  const formas: Readonly<Record<Exclude<Forma, "circulo">, () => string>> = {
    triangulo: () => poligono(3, -Math.PI / 2, () => r * 1.15),
    quadrado: () => poligono(4, Math.PI / 4, () => r * 1.2),
    estrela: () => poligono(10, -Math.PI / 2, (i) => (i % 2 === 0 ? r * 1.25 : r * 0.55)),
    losango: () => poligono(4, 0, () => r * 1.15),
    hexagono: () => poligono(6, 0, () => r),
  };
  return formas[forma]();
}

function Marca({ forma, r, cor, opacidade = 1 }: { forma: Forma; r: number; cor: string; opacidade?: number }) {
  if (forma === "circulo") return <circle r={r} fill={cor} stroke={CONTORNO} strokeWidth={2} opacity={opacidade} />;
  return <polygon points={pontosDaForma(forma, r)} fill={cor} stroke={CONTORNO} strokeWidth={2} strokeLinejoin="round" opacity={opacidade} />;
}

export function DefsDoQuadro() {
  return (
    <defs>
      <clipPath id={ID_DO_CIRCULO} clipPathUnits="objectBoundingBox"><circle cx={0.5} cy={0.5} r={0.5} /></clipPath>
    </defs>
  );
}

function Retrato({ href, r }: { href: string; r: number }) {
  return <image href={href} x={-r} y={-r} width={r * 2} height={r * 2} preserveAspectRatio="xMidYMid slice" clipPath={`url(#${ID_DO_CIRCULO})`} />;
}

function Ward({ time, r, item }: { time: Time; r: number; item: string }) {
  return (
    <>
      <circle r={r + 2} fill={CONTORNO} stroke={COR_DO_TIME[time]} strokeWidth={3} />
      <Retrato href={`/data/retratos/itens/${item}.webp`} r={r - 1} />
    </>
  );
}

function desenharPeca(peca: Peca, r: number): ReactNode {
  switch (peca.tipo) {
    case "heroi":
      return (
        <>
          <circle r={r + 3} fill={COR_DO_TIME[peca.time]} stroke={CONTORNO} strokeWidth={1.5} />
          <circle r={r} fill={CONTORNO} />
          <Retrato href={urlDoRetrato(peca.heroi)} r={r} />
        </>
      );
    case "observer":
    case "sentry":
      return <Ward time={peca.time} r={r} item={peca.tipo === "observer" ? "ward_observer" : "ward_sentry"} />;
    case "courier":
      return (
        <>
          <circle r={r} fill={CONTORNO} stroke={COR_DO_TIME[peca.time]} strokeWidth={3} />
          <path d={`M${-r * 0.5},${r * 0.1} q${r * 0.5},${-r * 0.75} ${r},0 l${-r * 0.12},${r * 0.45} h${-r * 0.76} z`}
            fill={COR_DO_TIME[peca.time]} stroke={COR_DO_TIME[peca.time]} strokeWidth={2} strokeLinejoin="round" />
        </>
      );
    case "runa": {
      const info = INFO_DAS_RUNAS[peca.runa];
      return (
        <>
          <circle r={r} fill={info.cor} stroke={CONTORNO} strokeWidth={2.5} />
          <text textAnchor="middle" dominantBaseline="central" fontFamily={FONTE_DO_QUADRO} fontWeight={700} fontSize={info.sigla.length > 1 ? r * 0.95 : r * 1.2} fill={CONTORNO}>{info.sigla}</text>
        </>
      );
    }
    case "estrutura":
      return <Marca forma={FORMA_DA_ESTRUTURA[peca.estrutura]} r={r} cor={COR_DO_TIME[peca.time]} />;
  }
}

export function IconeSvg({ icone, escala, opacidade = 1 }: { icone: Pick<Icone, "peca" | "ponto">; escala: number; opacidade?: number }) {
  return (
    <g transform={`translate(${icone.ponto[0]} ${icone.ponto[1]})`} opacity={opacidade}>
      {desenharPeca(icone.peca, raioDaPeca(icone.peca, escala))}
    </g>
  );
}

/** Miniatura da peça para os botões do painel. */
export function PecaEmMiniatura({ peca }: { peca: Peca }) {
  const r = raioDaPeca(peca, 1);
  const lado = r * 2 + 10;
  return (
    <svg viewBox={`${-lado / 2} ${-lado / 2} ${lado} ${lado}`} width={32} height={32} aria-hidden="true">
      {desenharPeca(peca, r)}
    </svg>
  );
}

/** Círculo da visão da observer e do true sight da sentry, por baixo dos ícones. */
export function RaioDaWard({ icone }: { icone: Icone }) {
  const { peca } = icone;
  if (peca.tipo !== "observer" && peca.tipo !== "sentry") return null;
  const cor = peca.tipo === "observer" ? "#f2d26b" : "#6fb6ff";
  return <circle cx={icone.ponto[0]} cy={icone.ponto[1]} r={RAIO_DA_VISAO[peca.tipo]} fill={cor} fillOpacity={0.1} stroke={cor} strokeOpacity={0.55} strokeWidth={1.5} strokeDasharray="6 5" />;
}

export function TracoSvg({ traco, opacidade = 1 }: { traco: NovoTraco; opacidade?: number }) {
  const cor = CORES[traco.cor];
  if (traco.tipo === "texto") {
    const caixa = caixaDoTexto({ ...traco, id: "" });
    return (
      <g opacity={opacidade}>
        <rect x={caixa.x - 5} y={caixa.y - 3} width={caixa.largura + 10} height={caixa.altura + 6} rx={6} fill={CONTORNO} fillOpacity={0.72} />
        <text x={traco.ponto[0]} y={traco.ponto[1]} dominantBaseline="central" fontFamily={FONTE_DO_QUADRO} fontWeight={600} fontSize={TAMANHO_DO_TEXTO} fill={cor}>{traco.texto}</text>
      </g>
    );
  }
  const largura = ESPESSURAS[traco.espessura];
  const comum = { fill: "none", stroke: cor, strokeWidth: largura, strokeLinecap: "round", strokeLinejoin: "round", opacity: opacidade } as const;
  if (traco.tipo === "circulo") return <circle cx={traco.centro[0]} cy={traco.centro[1]} r={traco.raio} {...comum} />;
  const pontos = traco.pontos.map((p) => p.join(",")).join(" ");
  if (traco.tipo === "livre") return <polyline points={pontos} {...comum} />;
  const [a, b] = [traco.pontos[0], traco.pontos.at(-1)];
  if (!a || !b) return null;
  if (traco.tipo === "linha") return <line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} {...comum} strokeDasharray={`${largura * 2.6} ${largura * 2.2}`} />;
  const fim = fimDaHasteDaSeta(a, b, largura);
  return (
    <g opacity={opacidade}>
      <line x1={a[0]} y1={a[1]} x2={fim[0]} y2={fim[1]} {...comum} opacity={1} />
      <polygon points={pontaDaSeta(a, b, largura).map((p) => p.join(",")).join(" ")} fill={cor} stroke={cor} strokeWidth={largura / 2} strokeLinejoin="round" />
    </g>
  );
}

export const CAMADAS = ["torres", "estruturas", "camps", "runas", "wards"] as const;
export type Camadas = Readonly<Record<(typeof CAMADAS)[number], boolean>>;
export const ROTULO_DAS_CAMADAS: Readonly<Record<keyof Camadas, string>> = {
  torres: "Torres e tronos", wards: "Wards dos pros", estruturas: "Estruturas", camps: "Camps neutros", runas: "Runas",
};

type Camada = Exclude<keyof Camadas, "wards">;
const CAMADA_DO_TIPO: Readonly<Record<string, { camada: Camada; forma: Forma; r: number }>> = {
  torre: { camada: "torres", forma: "triangulo", r: 9 },
  ancient: { camada: "torres", forma: "estrela", r: 15 },
  barracks: { camada: "estruturas", forma: "quadrado", r: 7 },
  fonte: { camada: "estruturas", forma: "hexagono", r: 12 },
  loja: { camada: "estruturas", forma: "circulo", r: 7 },
  outpost: { camada: "estruturas", forma: "losango", r: 9 },
  roshan: { camada: "estruturas", forma: "hexagono", r: 11 },
  tormentor: { camada: "estruturas", forma: "losango", r: 10 },
  twin_gate: { camada: "estruturas", forma: "circulo", r: 8 },
  watcher: { camada: "estruturas", forma: "circulo", r: 5 },
  lotus: { camada: "estruturas", forma: "circulo", r: 6 },
  camp: { camada: "camps", forma: "losango", r: 7 },
  runa: { camada: "runas", forma: "circulo", r: 7 },
};

const corDoObjetivo = (o: Objetivo) => {
  if (o.tipo === "runa") return o.id.includes("bounty") ? INFO_DAS_RUNAS.bounty.cor : o.id.includes("wisdom") ? INFO_DAS_RUNAS.sabedoria.cor : INFO_DAS_RUNAS.agua.cor;
  return o.lado === "neutro" ? COR_NEUTRA : COR_DO_TIME[o.lado];
};

/** Camadas do mapa com os dados reais do site: objetivos.json e os pontos de ward das partidas pro. */
export function CamadasDoMapa({ camadas, objetivos, pontosDeWard }: { camadas: Camadas; objetivos: readonly Objetivo[]; pontosDeWard: readonly PontoDeWard[] }) {
  const maisVezes = pontosDeWard[0]?.vezes ?? 1;
  return (
    <g pointerEvents="none">
      {objetivos.map((o) => {
        const estilo = CAMADA_DO_TIPO[o.tipo];
        if (!estilo || !camadas[estilo.camada]) return null;
        return (
          <g key={o.id} transform={`translate(${(o.x * 1000).toFixed(1)} ${((1 - o.y) * 1000).toFixed(1)})`}>
            <Marca forma={estilo.forma} r={estilo.r} cor={corDoObjetivo(o)} opacidade={0.92} />
          </g>
        );
      })}
      {camadas.wards && pontosDeWard.map((w) => (
        <circle key={`${w.tipo}-${w.lado}-${w.ponto.join("-")}`} cx={w.ponto[0]} cy={w.ponto[1]} r={4 + 5 * (w.vezes / maisVezes)}
          fill={w.tipo === "observer" ? "#f2d26b" : "#6fb6ff"} fillOpacity={0.35 + 0.5 * (w.vezes / maisVezes)} stroke={COR_DO_TIME[w.lado]} strokeWidth={1.5} />
      ))}
    </g>
  );
}
