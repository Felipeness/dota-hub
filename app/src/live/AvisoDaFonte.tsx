import { useEstadoDaFila } from "./servicos";
import { useSegundosAte } from "./useSegundosAte";

export function AvisoDaFonte() {
  const { pausadaAte, motivo } = useEstadoDaFila();
  const faltam = useSegundosAte(pausadaAte);
  if (faltam <= 0 || motivo === null) return null;
  const texto = motivo === "dia"
    ? `A fonte atingiu o limite do dia. A busca ao vivo volta em cerca de ${Math.ceil(faltam / 3_600)} h.`
    : `A fonte pediu para esperar. Tentando de novo em ${faltam} s.`;
  return <p role="status" className="aviso-da-fonte">{texto}</p>;
}
