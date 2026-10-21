// O que estava acontecendo na partida no instante do player: placar e heróis no topo (como a barra do jogo), a
// curva de vantagem de ouro com os lances e a linha do tempo, e o último evento embaixo do mapa. Atualizados ~4x
// por segundo, não a cada quadro.
import { memo, type MouseEvent } from "react";
import { tempoDaPartida } from "../../live/partida/detalhe";
import type { Lance } from "../lancesDecisivos";
import { rotuloDoLance, tituloSemTempo, vantagemEm, type EventoNoLetreiro, type HeroiNoPlacar, type Placar } from "../replayDosLances";
import { retrato } from "./MapaDoReplay";

const ouroCurto = (v: number) => `${(Math.abs(v) / 1_000).toLocaleString("pt-BR", { maximumFractionDigits: 1, minimumFractionDigits: 1 })}k`;

export const PlacarDoTopo = memo(function PlacarDoTopo({ placar, vantagem }: { placar: Placar; vantagem: number | null }) {
  const nosFrente = (vantagem ?? 0) >= 0;
  return (
    <div className="placar-topo" aria-label="Placar no instante do player">
      <ol className="placar-time placar-nosso" aria-label="Seu time">{placar.nosso.map((h) => <HeroiDoPlacar key={h.slot} heroi={h} />)}</ol>
      <div className="placar-centro">
        <p className="placar-abates" aria-label={`Abates: seu time ${placar.abatesNosso}, inimigo ${placar.abatesDeles}`}>
          <span className="placar-nosso-num">{placar.abatesNosso}</span><span aria-hidden="true">×</span><span className="placar-deles-num">{placar.abatesDeles}</span>
        </p>
        {vantagem !== null && (
          <p className={`placar-ouro ${nosFrente ? "placar-ouro-nosso" : "placar-ouro-deles"}`}>
            {nosFrente ? "+" : "−"}{ouroCurto(vantagem)} {nosFrente ? "seu time" : "inimigo"}
          </p>
        )}
      </div>
      <ol className="placar-time placar-deles" aria-label="Time inimigo">{placar.deles.map((h) => <HeroiDoPlacar key={h.slot} heroi={h} />)}</ol>
    </div>
  );
});

function HeroiDoPlacar({ heroi }: { heroi: HeroiNoPlacar }) {
  const morto = heroi.voltaEmS !== null;
  const descricao = `${heroi.nome}${heroi.eu ? " (você)" : ""}${heroi.nivel !== null ? `, nível ${heroi.nivel}` : ""}${morto ? `, morto, volta em ${heroi.voltaEmS} s` : ""}`;
  return (
    <li className={`placar-heroi${morto ? " morto" : ""}${heroi.eu ? " eu" : ""}`} title={descricao} aria-label={descricao}>
      <img src={retrato(heroi.retrato)} alt="" />
      {heroi.nivel !== null && <span className="placar-nivel">{heroi.nivel}</span>}
      {morto && <span className="placar-volta">{heroi.voltaEmS}</span>}
    </li>
  );
}

const LARGURA = 1_000;
const ALTURA = 64;
const MEIO = ALTURA / 2;
const MARCA_A_CADA_S = 10 * 60;
const FOLGA_DO_FIM_S = 4 * 60;

/** Curva de vantagem de ouro da partida inteira, no mesmo eixo x da barra do player: verde acima de zero (seu time), vermelho abaixo. */
export const GraficoDaVantagem = memo(function GraficoDaVantagem(
  { ouro, duracaoS, t, lances, onIr }: { ouro: readonly number[]; duracaoS: number; t: number; lances: readonly Lance[]; onIr: (t: number) => void },
) {
  const xDe = (s: number) => (Math.max(0, s) / duracaoS) * LARGURA;
  const maior = Math.max(1_000, ...ouro.map(Math.abs));
  const pontos = ouro.map((v, minuto) => `${xDe(minuto * 60)},${MEIO - (v / maior) * (MEIO - 2)}`).join(" ");
  const fimX = xDe(Math.min(duracaoS, (ouro.length - 1) * 60));
  const area = `0,${MEIO} ${pontos} ${fimX},${MEIO}`;
  // Marca de 10 em 10 min, sem a que ficaria encostada no rótulo do fim.
  const marcas = Array.from({ length: Math.floor(duracaoS / MARCA_A_CADA_S) + 1 }, (_, i) => i * MARCA_A_CADA_S)
    .filter((s) => duracaoS - s >= FOLGA_DO_FIM_S);
  const aoClicar = (e: MouseEvent<HTMLDivElement>) => {
    const caixa = e.currentTarget.getBoundingClientRect();
    onIr(Math.round(((e.clientX - caixa.left) / caixa.width) * duracaoS));
  };
  const agora = vantagemEm(ouro, t);
  return (
    <figure className="grafico-vantagem">
      <figcaption>
        Vantagem de ouro do seu time{agora !== null && <> em {tempoDaPartida(Math.floor(t))}: <strong>{agora >= 0 ? "+" : "−"}{ouroCurto(agora)}</strong></>}
      </figcaption>
      <div className="grafico-vantagem-area" onClick={aoClicar}>
        <svg viewBox={`0 0 ${LARGURA} ${ALTURA}`} preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <clipPath id="vantagem-acima"><rect x={0} y={0} width={LARGURA} height={MEIO} /></clipPath>
            <clipPath id="vantagem-abaixo"><rect x={0} y={MEIO} width={LARGURA} height={MEIO} /></clipPath>
          </defs>
          <line x1={0} x2={LARGURA} y1={MEIO} y2={MEIO} className="grafico-zero" vectorEffect="non-scaling-stroke" />
          <polygon points={area} className="grafico-nosso" clipPath="url(#vantagem-acima)" />
          <polygon points={area} className="grafico-deles" clipPath="url(#vantagem-abaixo)" />
          {lances.map((l) => (
            <line key={l.t} x1={xDe(l.t)} x2={xDe(l.t)} y1={0} y2={ALTURA} className={`grafico-lance grafico-lance-${l.achado.tipo}`} vectorEffect="non-scaling-stroke" />
          ))}
          <line x1={xDe(t)} x2={xDe(t)} y1={0} y2={ALTURA} className="grafico-agulha" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
      <ol className="grafico-eixo" aria-hidden="true">
        {marcas.map((s) => <li key={s} style={{ left: `${(s / duracaoS) * 100}%` }}>{tempoDaPartida(s)}</li>)}
        <li className="grafico-eixo-fim" style={{ left: "100%" }}>{tempoDaPartida(duracaoS)}</li>
      </ol>
    </figure>
  );
});

export const Letreiro = memo(function Letreiro({ evento }: { evento: EventoNoLetreiro | null }) {
  return (
    <p className={`letreiro${evento ? ` letreiro-${evento.tipo}` : ""}`} aria-live="off">
      {evento ? <><span className="letreiro-tempo">{tempoDaPartida(evento.t)}</span> {evento.texto}</> : "Antes do primeiro evento da partida."}
    </p>
  );
});

/** Texto do marcador e da prévia: "28:33 · Erro grave · Morreu com o time em 4 contra 5". */
export const rotuloDoMarcador = (l: Lance) => `${tempoDaPartida(l.t)} · ${rotuloDoLance(l)} · ${tituloSemTempo(l.achado.titulo)}`;
