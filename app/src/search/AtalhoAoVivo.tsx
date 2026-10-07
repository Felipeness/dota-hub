import { Link } from "react-router";

const TEXTO_MINIMO = 2;

export function AtalhoAoVivo({ consulta, onIr }: { consulta: string; onIr: () => void }) {
  const texto = consulta.trim();
  if (texto.length < TEXTO_MINIMO) return null;
  return (
    <li className="atalho-ao-vivo">
      <Link to={`/ao-vivo?q=${encodeURIComponent(texto)}`} onClick={onIr}>Buscar ao vivo: “{texto}”</Link>
    </li>
  );
}
