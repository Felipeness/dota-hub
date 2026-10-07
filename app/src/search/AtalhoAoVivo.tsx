import { Link } from "react-router";
import { lerId } from "../live/contas";

const TEXTO_MINIMO = 2;

/** Número de conta vai direto para a conta, sem consultar a busca da fonte (spec, jornada 1). */
function destino(texto: string): string {
  const conta = lerId(texto);
  return conta === null ? `/ao-vivo?q=${encodeURIComponent(texto)}` : `/ao-vivo/contas/${conta}`;
}

export function AtalhoAoVivo({ consulta, onIr }: { consulta: string; onIr: () => void }) {
  const texto = consulta.trim();
  if (texto.length < TEXTO_MINIMO) return null;
  return (
    <li className="atalho-ao-vivo">
      <Link to={destino(texto)} onClick={onIr}>Buscar ao vivo: “{texto}”</Link>
    </li>
  );
}
