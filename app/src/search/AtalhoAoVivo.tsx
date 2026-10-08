import { Link } from "react-router";
import { lerId } from "../live/contas";

const TEXTO_MINIMO = 2;

/** Número de conta vai direto para a conta, sem consultar a busca da fonte (spec, jornada 1). */
function destino(texto: string): string {
  const conta = lerId(texto);
  return conta === null ? `/ao-vivo?q=${encodeURIComponent(texto)}` : `/ao-vivo/contas/${conta}`;
}

export function AtalhoAoVivo({ consulta, ativo = false, onIr }: { consulta: string; ativo?: boolean; onIr: () => void }) {
  const texto = consulta.trim();
  if (texto.length < TEXTO_MINIMO) return null;
  return (
    <li className={ativo ? "atalho-ao-vivo ativo" : "atalho-ao-vivo"} data-navegavel>
      <Link to={destino(texto)} onClick={onIr}>Buscar ao vivo: “{texto}”</Link>
    </li>
  );
}
