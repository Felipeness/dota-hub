import { useState } from "react";
import ReactMarkdown from "react-markdown";
import type { ConteudoItem, Marca, Objetivo } from "../data/schemas";

export function conteudoDoObjetivo(o: Objetivo, conteudo: ConteudoItem[]): ConteudoItem | null {
  return conteudo.find((c) => c.id === o.id) ?? conteudo.find((c) => c.id === o.tipo) ?? null;
}

export function rotuloOrigem(marca: Marca): string | null {
  if (!marca) return null;
  if (marca.tipo === "recomendado") return "Recomendado.";
  const [unico, ...resto] = marca.replays;
  if (resto.length === 0) return `Visto em replay ${unico}.`;
  return `Visto em ${marca.replays.length} replays: ${marca.replays.join(", ")}.`;
}

type Aba = "basico" | "avancado";
const ABAS = [
  { id: "basico", rotulo: "Básico" },
  { id: "avancado", rotulo: "Avançado" },
] as const satisfies ReadonlyArray<{ id: Aba; rotulo: string }>;

type Props = { objetivo: Objetivo; conteudo: ConteudoItem[]; onFechar: () => void };

export function ObjectivePanel({ objetivo, conteudo, onFechar }: Props) {
  const [aba, setAba] = useState<Aba>("basico");
  const item = conteudoDoObjetivo(objetivo, conteudo);
  const texto = item?.secoes[aba] ?? null;
  const origem = item ? rotuloOrigem(item.origem[aba]) : null;
  return (
    <aside className="painel" aria-label={objetivo.nome}>
      <header>
        <h2>{objetivo.nome}</h2>
        <button onClick={onFechar} aria-label="Fechar">×</button>
      </header>
      <div role="tablist">
        {ABAS.map(({ id, rotulo }) => (
          <button key={id} role="tab" aria-selected={aba === id} onClick={() => setAba(id)}>{rotulo}</button>
        ))}
      </div>
      <div role="tabpanel" className="painel-texto">
        {texto ? <ReactMarkdown>{texto}</ReactMarkdown> : "Ainda não escrito."}
      </div>
      {item && (
        <footer>
          {origem && <p className="origem">{origem}</p>}
          Patch {item.patch}. Fontes: {item.fontes.join("; ")}
        </footer>
      )}
    </aside>
  );
}
