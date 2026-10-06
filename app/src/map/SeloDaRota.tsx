import type { Selo } from "./selos";

// Um número por visita lado a lado e os minutos juntos, como o selo em cápsula do PDF.
export function SeloDaRota({ selo }: { selo: Selo }) {
  const minutos = selo.passos.map((p) => p.minuto).filter(Boolean).join(" · ");
  return (
    <>
      {selo.passos.map((p) => <span key={p.n} className={`passo passo-${p.risco}`}>{p.n}</span>)}
      {minutos && <span className="passo-minuto">{minutos}</span>}
    </>
  );
}
