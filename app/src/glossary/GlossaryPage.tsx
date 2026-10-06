import { Link, useParams } from "react-router";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { conteudoSchema, type ConteudoItem } from "../data/schemas";
import { Indisponivel, useData } from "../data/useData";
import { normalizar } from "../routes/filtros";
import { destinoDoLink } from "./destino";

const porTitulo = (a: ConteudoItem, b: ConteudoItem) => a.titulo.localeCompare(b.titulo, "pt-BR");

// ponytail: agrupa pela letra até a Task 6 trazer a categoria de cada termo.
export function agruparPorLetra(termos: ConteudoItem[]): [string, ConteudoItem[]][] {
  const grupos = new Map<string, ConteudoItem[]>();
  for (const t of termos.toSorted(porTitulo)) {
    const letra = normalizar(t.titulo).charAt(0).toUpperCase();
    grupos.set(letra, [...(grupos.get(letra) ?? []), t]);
  }
  return [...grupos.entries()];
}

function TermoAberto({ termo, termos }: { termo: ConteudoItem; termos: ConteudoItem[] }) {
  return (
    <article className="termo">
      <span className="sobretitulo">Termo</span>
      <h1>{termo.titulo}</h1>
      <div className="termo-texto"><ReactMarkdown>{termo.secoes.basico}</ReactMarkdown></div>
      {termo.links.length > 0 && (
        <ul aria-label="Relacionados" className="pilulas">
          {termo.links.map((link) => destinoDoLink(link, termos)).map(({ to, rotulo }) => <li key={to}><Link className="pilula" to={to}>{rotulo}</Link></li>)}
        </ul>
      )}
      <footer className="fonte">Patch {termo.patch} · Fontes: {termo.fontes.join("; ")}</footer>
    </article>
  );
}

export function GlossaryPage() {
  const dados = useData("/data/glossario.json", conteudoSchema);
  const { id } = useParams();
  const [filtro, setFiltro] = useState("");

  if (dados.estado === "carregando") return <p>Carregando...</p>;
  if (dados.estado === "indisponivel") return <Indisponivel motivo={dados.motivo} />;

  const termo = dados.dados.find((t) => t.id === id);
  const texto = normalizar(filtro);
  const grupos = agruparPorLetra(dados.dados.filter((t) => normalizar(t.titulo).includes(texto)));

  return (
    <section className="glossario">
      <aside className="glossario-lista">
        <label className="campo">
          <span>Filtrar termos</span>
          <input type="search" value={filtro} placeholder="stack, pull, BKB…" onChange={(e) => setFiltro(e.target.value)} />
        </label>
        {grupos.map(([letra, itens]) => (
          <section key={letra} aria-label={`Letra ${letra}`}>
            <h2 className="sobretitulo">{letra}</h2>
            <ul>{itens.map((t) => <li key={t.id}><Link to={`/glossario/${t.id}`} aria-current={t.id === id ? "page" : undefined}>{t.titulo}</Link></li>)}</ul>
          </section>
        ))}
      </aside>
      {termo && <TermoAberto termo={termo} termos={dados.dados} />}
      {!termo && (
        <article className="termo">
          <span className="sobretitulo">Glossário</span>
          <h1>{id ? "Termo não encontrado." : "Escolha um termo."}</h1>
        </article>
      )}
    </section>
  );
}
