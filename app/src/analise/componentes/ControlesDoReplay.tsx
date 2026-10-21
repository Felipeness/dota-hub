// Barra de controles do player por cima do mapa, como num player de vídeo: barra de progresso com os lances
// marcados e prévia ao passar o mouse, lance anterior, tocar/pausar, próximo lance, tempo, velocidade e tela cheia.
import { useState, type PointerEvent, type ReactNode } from "react";
import { tempoDaPartida } from "../../live/partida/detalhe";
import type { Lance } from "../lancesDecisivos";
import { VELOCIDADES, type Velocidade } from "../replayDosLances";
import { rotuloDoMarcador } from "./ContextoDaPartida";

/** Lance a até 15 s do ponto apontado na barra entra na prévia. */
const PERTO_NA_PREVIA_S = 15;

type Props = Readonly<{
  t: number; fim: number; tocando: boolean; velocidade: Velocidade; lances: readonly Lance[]; visivel: boolean;
  onTocar: () => void; onIr: (t: number) => void; onLance: (sentido: -1 | 1) => void;
  onVelocidade: (v: Velocidade) => void; onTelaCheia: () => void;
}>;

export function ControlesDoReplay(props: Props) {
  const { t, fim, tocando, velocidade, lances, visivel, onTocar, onLance, onVelocidade, onTelaCheia } = props;
  const [menuAberto, setMenuAberto] = useState(false);
  const temAnterior = lances.some((l) => l.t < Math.floor(t));
  const temProximo = lances.some((l) => l.t > Math.ceil(t));
  return (
    <div className={`controles${visivel || menuAberto ? " visiveis" : ""}`} onClick={(e) => e.stopPropagation()}>
      <BarraDeProgresso {...props} />
      <div className="controles-linha">
        <BotaoDeIcone rotulo="Lance anterior (J)" onClick={() => onLance(-1)} desligado={!temAnterior}><IconeAnterior /></BotaoDeIcone>
        <BotaoDeIcone rotulo={tocando ? "Pausar (K)" : "Tocar (K)"} onClick={onTocar} principal pressionado={tocando}>
          {tocando ? <IconePausa /> : <IconeTocar />}
        </BotaoDeIcone>
        <BotaoDeIcone rotulo="Próximo lance (L)" onClick={() => onLance(1)} desligado={!temProximo}><IconeProximo /></BotaoDeIcone>
        <p className="controles-tempo"><span>{tempoDaPartida(Math.floor(t))}</span> / {tempoDaPartida(fim)}</p>
        <div className="controles-velocidade">
          <button type="button" className="controles-botao controles-texto" aria-haspopup="menu" aria-expanded={menuAberto}
            title="Velocidade" aria-label={`Velocidade: ${velocidade}x`} onClick={() => setMenuAberto((a) => !a)}>
            {velocidade}x
          </button>
          {menuAberto && (
            <ul role="menu" className="controles-menu" aria-label="Velocidade">
              {VELOCIDADES.map((v) => (
                <li key={v} role="none">
                  <button type="button" role="menuitemradio" aria-checked={v === velocidade} onClick={() => { onVelocidade(v); setMenuAberto(false); }}>
                    {v}x
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <BotaoDeIcone rotulo="Tela cheia (F)" onClick={onTelaCheia}><IconeTelaCheia /></BotaoDeIcone>
      </div>
    </div>
  );
}

function BarraDeProgresso({ t, fim, lances, onIr }: Props) {
  const [previa, setPrevia] = useState<number | null>(null);
  const [arrastando, setArrastando] = useState(false);
  const fracao = (s: number) => `${(Math.min(fim, Math.max(0, s)) / fim) * 100}%`;
  const apontar = (e: PointerEvent<HTMLDivElement>) => {
    const caixa = e.currentTarget.getBoundingClientRect();
    setPrevia(Math.round(((e.clientX - caixa.left) / caixa.width) * fim));
  };
  const tempoDaBolha = arrastando ? t : previa;
  const lanceDaBolha = tempoDaBolha === null ? undefined : lances.find((l) => Math.abs(l.t - tempoDaBolha) <= PERTO_NA_PREVIA_S);
  const ativo = lances.find((l) => Math.abs(l.t - t) < 1);
  return (
    <div className="progresso" onPointerMove={apontar} onPointerLeave={() => setPrevia(null)}>
      <div className="progresso-trilho" aria-hidden="true">
        <div className="progresso-tocado" style={{ width: fracao(t) }} />
        {lances.map((l) => (
          <span key={l.t} className={`progresso-lance progresso-lance-${l.achado.tipo}${l === ativo ? " ativo" : ""}`} style={{ left: fracao(l.t) }}>
            {l === ativo && <span className="progresso-lance-rotulo">{tempoDaPartida(l.t)}</span>}
          </span>
        ))}
        <span className="progresso-cabeca" style={{ left: fracao(t) }} />
      </div>
      <input type="range" min={0} max={fim} step={1} value={Math.round(t)} className="progresso-entrada"
        onChange={(e) => onIr(Number(e.target.value))}
        onPointerDown={() => setArrastando(true)} onPointerUp={() => setArrastando(false)} onBlur={() => setArrastando(false)}
        aria-label="Tempo da partida" aria-valuetext={`${tempoDaPartida(Math.round(t))} de ${tempoDaPartida(fim)}`} />
      {tempoDaBolha !== null && (
        <div className="progresso-bolha" style={{ left: fracao(tempoDaBolha) }} role="presentation">
          {lanceDaBolha ? rotuloDoMarcador(lanceDaBolha) : tempoDaPartida(tempoDaBolha)}
        </div>
      )}
    </div>
  );
}

type PropsDoBotao = Readonly<{
  rotulo: string; onClick: () => void; children: ReactNode; principal?: boolean; desligado?: boolean; pressionado?: boolean;
}>;

function BotaoDeIcone({ rotulo, onClick, children, principal = false, desligado = false, pressionado }: PropsDoBotao) {
  return (
    <button type="button" className={`controles-botao${principal ? " principal" : ""}`} aria-label={rotulo} title={rotulo}
      onClick={onClick} disabled={desligado} aria-pressed={pressionado}>
      {children}
    </button>
  );
}

const Icone = ({ d }: { d: string }) => <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d={d} /></svg>;
export const IconeTocar = () => <Icone d="M8 5v14l11-7z" />;
export const IconePausa = () => <Icone d="M6 5h4v14H6zM14 5h4v14h-4z" />;
const IconeAnterior = () => <Icone d="M6 6h2v12H6zM9.5 12l8.5 6V6z" />;
const IconeProximo = () => <Icone d="M16 6h2v12h-2zM6 18l8.5-6L6 6z" />;
const IconeTelaCheia = () => <Icone d="M5 5h5v2H7v3H5zM14 5h5v5h-2V7h-3zM5 14h2v3h3v2H5zM17 14h2v5h-5v-2h3z" />;
