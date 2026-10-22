import { ESCOLHAS, ROTULO_LADO, type EscolhaDeLado, type NotaDoLado } from "./mapaPorLado";

type Props = { lado: EscolhaDeLado; nota: NotaDoLado; onEscolher: (lado: EscolhaDeLado) => void };

export function SeletorDeLado({ lado, nota, onEscolher }: Props) {
  return (
    <div className="atlas-lado">
      <div className="alternador" role="group" aria-label="Lado do mapa">
        {ESCOLHAS.map((e) => (
          <button key={e} className={`atlas-lado-${e}`} aria-pressed={lado === e} onClick={() => onEscolher(e)}>{ROTULO_LADO[e]}</button>
        ))}
      </div>
      <p className="atlas-lado-nota">{nota.texto}</p>
      {nota.alerta && <p className="atlas-lado-alerta" role="status">{nota.alerta}</p>}
    </div>
  );
}
