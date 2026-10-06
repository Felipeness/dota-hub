import { useState, type ReactNode } from "react";
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

const LIMITE_VALOR_CURTO = 20;
const ROTULO_LADO: Record<Objetivo["lado"], string> = { radiant: "Radiant", dire: "Dire", neutro: "Neutro" };

// A grade mostra só o que cabe numa célula; frases longas já estão no texto do conteúdo.
export function numerosDoObjetivo(detalhes: Record<string, unknown>): [string, string][] {
  return Object.entries(detalhes).flatMap(([chave, valor]) => {
    const texto = valorCurto(valor);
    return texto === null ? [] : [[chave.replaceAll("_", " "), texto]];
  });
}

function valorCurto(valor: unknown): string | null {
  if (typeof valor === "number") return String(valor);
  if (typeof valor === "boolean") return valor ? "sim" : "não";
  if (typeof valor === "string" && valor.length <= LIMITE_VALOR_CURTO) return valor;
  return null;
}

const paragrafos = (texto: string) => texto.split(/\n{2,}/).filter((p) => p.trim());

type Aba = "basico" | "avancado";
const ABAS = [
  { id: "basico", rotulo: "Básico" },
  { id: "avancado", rotulo: "Avançado" },
] as const satisfies ReadonlyArray<{ id: Aba; rotulo: string }>;

type Props = { objetivo: Objetivo; conteudo: ConteudoItem[]; onFechar: () => void; children?: ReactNode };

export function ObjectivePanel({ objetivo, conteudo, onFechar, children }: Props) {
  const [aba, setAba] = useState<Aba>("basico");
  const item = conteudoDoObjetivo(objetivo, conteudo);
  const texto = item?.secoes[aba] ?? null;
  const origem = item ? rotuloOrigem(item.origem[aba]) : null;
  return (
    <aside className="painel" aria-label={objetivo.nome}>
      <div className="painel-alca" aria-hidden="true" />
      <header className="painel-topo">
        <div>
          <span className={`sobretitulo lado-${objetivo.lado}`}>{ROTULO_LADO[objetivo.lado]}</span>
          <h2>{objetivo.nome}</h2>
        </div>
        <button className="botao-icone" onClick={onFechar} aria-label="Fechar">
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div role="tablist" className="abas-pilula">
        {ABAS.map(({ id, rotulo }) => (
          <button key={id} role="tab" aria-selected={aba === id} onClick={() => setAba(id)}>{rotulo}</button>
        ))}
      </div>
      <div role="tabpanel" className="painel-texto">
        {aba === "basico" && <GradeNumeros numeros={numerosDoObjetivo(objetivo.detalhes)} />}
        {!texto && "Ainda não escrito."}
        {texto && aba === "basico" && <div><ReactMarkdown>{texto}</ReactMarkdown></div>}
        {texto && aba === "avancado" && <Cartoes texto={texto} />}
        {aba === "avancado" && children}
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

export function GradeNumeros({ numeros }: { numeros: [string, string][] }) {
  if (numeros.length === 0) return null;
  return (
    <dl className="grade-numeros">
      {numeros.map(([rotulo, valor]) => <div key={rotulo}><dt>{rotulo}</dt><dd>{valor}</dd></div>)}
    </dl>
  );
}

function Cartoes({ texto }: { texto: string }) {
  return (
    <ol className="cartoes">
      {paragrafos(texto).map((p, i) => (
        <li key={i}><span className="cartao-numero">{i + 1}</span><div><ReactMarkdown>{p}</ReactMarkdown></div></li>
      ))}
    </ol>
  );
}
