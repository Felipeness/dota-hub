import ReactMarkdown from "react-markdown";
import type { ConteudoItem } from "../data/schemas";
import { textoExtra } from "../glossary/filtros";

export function rotuloDaOrigem(solo: ConteudoItem): string {
  return textoExtra(solo, "origem") === "replay" ? `visto em replay ${textoExtra(solo, "replay") ?? ""}` : "recomendado";
}

const itensDo = (solo: ConteudoItem): string[] => {
  const itens = solo.extras["itens"];
  return Array.isArray(itens) ? itens : [];
};

export function SoloRoshan({ solos }: { solos: ConteudoItem[] }) {
  return (
    <section aria-label="Solo de Roshan por herói" className="solo-roshan">
      <h3 className="sobretitulo">Solo de Roshan por herói</h3>
      {solos.length === 0 && <p>Ainda não escrito.</p>}
      <ul className="solo-lista">
        {solos.map((s) => (
          <li key={s.id}>
            <details>
              <summary>
                <strong>{s.titulo}</strong> <span className={`selo selo-${textoExtra(s, "origem") ?? "recomendado"}`}>{rotuloDaOrigem(s)}</span>
                <span className="numero"> · nível {textoExtra(s, "nivel")} · {textoExtra(s, "minuto")}</span>
              </summary>
              <p>Itens: {itensDo(s).join(", ")}</p>
              <ReactMarkdown>{s.secoes.basico}</ReactMarkdown>
              {s.secoes.avancado && <ReactMarkdown>{s.secoes.avancado}</ReactMarkdown>}
              <p className="fonte">Patch {s.patch}. Fontes: {s.fontes.join("; ")}</p>
            </details>
          </li>
        ))}
      </ul>
    </section>
  );
}
