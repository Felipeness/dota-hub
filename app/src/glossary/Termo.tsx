import { useId, useState, type KeyboardEvent } from "react";
import { Link } from "react-router";
import { conteudoSchema, type ConteudoItem } from "../data/schemas";
import { useData } from "../data/useData";
import { marcarTermos } from "./annotate";
import "./termo.css";

function Balao({ termo, id }: { termo: ConteudoItem; id: string }) {
  return (
    <span role="tooltip" id={id} className="termo-balao">
      <strong>{termo.titulo}</strong>
      <span>{termo.secoes.basico}</span>
      <Link to={`/glossario/${termo.id}`}>ver no glossário</Link>
    </span>
  );
}

function TermoMarcado({ termo, children }: { termo: ConteudoItem; children: string }) {
  const [aberto, setAberto] = useState(false);
  const idBalao = useId();
  const fechar = () => setAberto(false);
  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Escape") fechar();
  };
  return (
    <span className="termo-com-balao">
      <button
        type="button"
        className="termo-marcado"
        aria-describedby={aberto ? idBalao : undefined}
        onMouseEnter={() => setAberto(true)}
        onMouseLeave={fechar}
        onFocus={() => setAberto(true)}
        onBlur={fechar}
        onKeyDown={onKeyDown}
      >
        {children}
      </button>
      {aberto && <Balao termo={termo} id={idBalao} />}
    </span>
  );
}

// Presentacional e pura: recebe o glossário já carregado, fácil de testar sem mocar fetch.
export function MarcarTexto({ texto, termos }: { texto: string; termos: readonly ConteudoItem[] }) {
  if (termos.length === 0) return <>{texto}</>;
  const trechos = marcarTermos(texto, termos);
  return (
    <>
      {trechos.map((t, i) =>
        t.termo ? <TermoMarcado key={i} termo={t.termo}>{t.texto}</TermoMarcado> : <span key={i}>{t.texto}</span>,
      )}
    </>
  );
}

// Carrega o glossário (fetch cacheado pelo navegador, igual ao resto do app) e aplica MarcarTexto.
// Enquanto carrega ou se o glossário está indisponível, mostra o texto puro: nunca quebra a tela por isso.
export function TextoComTermos({ texto }: { texto: string }) {
  const glossario = useData("/data/glossario.json", conteudoSchema);
  return <MarcarTexto texto={texto} termos={glossario.estado === "ok" ? glossario.dados : []} />;
}
