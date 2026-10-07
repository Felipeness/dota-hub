import { hora } from "./formato";
import type { Frescor } from "./tipos";

export function FrescorView({ frescor, onAtualizar }: { frescor: Frescor; onAtualizar: () => void }) {
  if (!frescor.vencido) return <p className="frescor">Dados de {hora(frescor.buscadoEm)}.</p>;
  return (
    <p className="frescor vencido" role="status">
      A fonte não respondeu; mostrando dados de {hora(frescor.buscadoEm)}.{" "}
      <button type="button" onClick={onAtualizar}>Atualizar</button>
    </p>
  );
}
