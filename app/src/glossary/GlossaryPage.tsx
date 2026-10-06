import { Link, useParams } from "react-router";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import { conteudoSchema, type ConteudoItem } from "../data/schemas";
import { Indisponivel, useData } from "../data/useData";
import { normalizar } from "../routes/filtros";

const porTitulo = (a: ConteudoItem, b: ConteudoItem) => a.titulo.localeCompare(b.titulo, "pt-BR");

function TermoAberto({ termo }: { termo: ConteudoItem }) {
  return (
    <article>
      <h2>{termo.titulo}</h2>
      <ReactMarkdown>{termo.secoes.basico}</ReactMarkdown>
      {termo.links.length > 0 && (
        <ul aria-label="Relacionados">
          {termo.links.map((link) => <li key={link}><Link to={link}>{link}</Link></li>)}
        </ul>
      )}
      <footer>Patch {termo.patch}. Fontes: {termo.fontes.join("; ")}</footer>
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
  const lista = dados.dados.filter((t) => normalizar(t.titulo).includes(texto)).toSorted(porTitulo);

  return (
    <main>
      <h1>Glossário</h1>
      <input
        type="search" value={filtro} aria-label="Filtrar termos"
        placeholder="Filtrar termos" onChange={(e) => setFiltro(e.target.value)}
      />
      <ul>
        {lista.map((t) => <li key={t.id}><Link to={`/glossario/${t.id}`}>{t.titulo}</Link></li>)}
      </ul>
      {id && (termo ? <TermoAberto termo={termo} /> : <p>Termo não encontrado.</p>)}
    </main>
  );
}
