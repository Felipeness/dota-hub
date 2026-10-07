import type { CSSProperties } from "react";
import type { Pino } from "./trilhas";

type Props = { pino: Pino; ativo: boolean; estilo: CSSProperties; onSelecionar: (id: string) => void };

// O botão só posiciona e recebe o clique; a forma fica no corpo, para o losango girar sem girar o conteúdo.
export function BotaoDoPino({ pino, ativo, estilo, onSelecionar }: Props) {
  const classes = ["pino", `pino-forma-${pino.forma ?? "circulo"}`, pino.vazado && "pino-vazado", pino.porCima && "por-cima", ativo && "ativo"]
    .filter(Boolean).join(" ");
  return (
    <button className={classes} style={estilo} aria-label={pino.rotulo} title={pino.rotulo} aria-pressed={ativo} onClick={() => onSelecionar(pino.id)}>
      <span className="pino-corpo" aria-hidden="true" />
      {pino.conteudo && <span className="pino-conteudo" aria-hidden="true">{pino.conteudo}</span>}
    </button>
  );
}
