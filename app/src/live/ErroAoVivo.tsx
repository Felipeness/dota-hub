import { useState } from "react";
import { mensagemDoErro, type ContextoDoErro, type ErroAoVivo } from "./erros";
import { useSegundosAte } from "./useSegundosAte";

type Props = { erro: Pick<ErroAoVivo, "codigo" | "tenteEmS">; contexto?: ContextoDoErro; onTentar: () => void };

export function ErroAoVivoView({ erro, contexto, onTentar }: Props) {
  const [liberaEm] = useState(() => Date.now() + (erro.tenteEmS ?? 0) * 1_000);
  const faltam = useSegundosAte(liberaEm);
  const tenteEmS = erro.tenteEmS === null ? null : faltam;
  return (
    <div className="erro-ao-vivo">
      <p role="alert">{mensagemDoErro({ codigo: erro.codigo, tenteEmS }, contexto)}</p>
      <button type="button" onClick={onTentar} disabled={faltam > 0}>Tentar de novo</button>
    </div>
  );
}
