import { Link, useParams } from "react-router";
import { useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import { conteudoSchema, heroisSchema, objetivosSchema, rotasResumoSchema, type ConteudoItem } from "../data/schemas";
import { dadosOuVazio, Indisponivel, useData } from "../data/useData";
import { normalizar } from "../routes/filtros";
import { CATEGORIAS, filtrarTermos, textoExtra } from "./filtros";
import { destinoDoLink, montarCatalogo } from "./links";

const porTitulo = (a: ConteudoItem, b: ConteudoItem) => a.titulo.localeCompare(b.titulo, "pt-BR");

export function agruparPorLetra(termos: ConteudoItem[]): [string, ConteudoItem[]][] {
  const grupos = new Map<string, ConteudoItem[]>();
  for (const t of termos.toSorted(porTitulo)) {
    const letra = normalizar(t.titulo).charAt(0).toUpperCase();
    grupos.set(letra, [...(grupos.get(letra) ?? []), t]);
  }
  return [...grupos.entries()];
}

const ROTULOS_CATEGORIA: ReadonlyMap<string, string> = new Map(Object.entries(CATEGORIAS));

const rotuloDaCategoria = (termo: ConteudoItem): string | null => {
  const categoria = textoExtra(termo, "categoria");
  return categoria && (ROTULOS_CATEGORIA.get(categoria) ?? categoria);
};

function Relacionados({ termo, termos }: { termo: ConteudoItem; termos: ConteudoItem[] }) {
  const herois = useData("/data/herois.json", heroisSchema);
  const rotas = useData("/data/rotas_resumo.json", rotasResumoSchema);
  const objetivos = useData("/data/objetivos.json", objetivosSchema);
  const catalogo = useMemo(
    () => montarCatalogo({ termos, herois: dadosOuVazio(herois), rotas: dadosOuVazio(rotas), objetivos: dadosOuVazio(objetivos) }),
    [termos, herois, rotas, objetivos],
  );
  const titulos = useMemo(() => new Map(termos.map((t) => [t.id, t.titulo])), [termos]);
  return (
    <ul aria-label="Relacionados" className="pilulas">
      {termo.links.map((link) => {
        const destino = destinoDoLink(link, catalogo);
        const rotulo = titulos.get(link) ?? link;
        return <li key={link}>{destino ? <Link className="pilula" to={destino}>{rotulo}</Link> : <span className="pilula">{rotulo}</span>}</li>;
      })}
    </ul>
  );
}

function TermoAberto({ termo, termos }: { termo: ConteudoItem; termos: ConteudoItem[] }) {
  const categoria = rotuloDaCategoria(termo);
  return (
    <article className="termo">
      <span className="sobretitulo">Termo</span>
      <div className="termo-titulo">
        <h1>{termo.titulo}</h1>
        {categoria && <span className="selo">{categoria}</span>}
      </div>
      <div className="termo-texto"><ReactMarkdown>{termo.secoes.basico}</ReactMarkdown></div>
      {termo.links.length > 0 && <Relacionados termo={termo} termos={termos} />}
      <footer className="fonte">Patch {termo.patch} · Fontes: {termo.fontes.join("; ")}</footer>
    </article>
  );
}

function FiltroCategorias({ categoria, onMudar }: { categoria: string | null; onMudar: (categoria: string | null) => void }) {
  return (
    <div className="filtro-categorias" role="group" aria-label="Categorias">
      <button aria-pressed={categoria === null} onClick={() => onMudar(null)}>Todas</button>
      {[...ROTULOS_CATEGORIA].map(([id, rotulo]) => (
        <button key={id} aria-pressed={categoria === id} onClick={() => onMudar(id)}>{rotulo}</button>
      ))}
    </div>
  );
}

export function GlossaryPage() {
  const dados = useData("/data/glossario.json", conteudoSchema);
  const { id } = useParams();
  const [texto, setTexto] = useState("");
  const [categoria, setCategoria] = useState<string | null>(null);

  if (dados.estado === "carregando") return <p>Carregando...</p>;
  if (dados.estado === "indisponivel") return <Indisponivel motivo={dados.motivo} />;

  const termo = dados.dados.find((t) => t.id === id);
  const grupos = agruparPorLetra(filtrarTermos(dados.dados, { texto, categoria }));

  return (
    <section className="glossario">
      <aside className="glossario-lista">
        <Link className="pilula" to="/glossario/unidades">Unidades: Roshan, creeps e selva</Link>
        <label className="campo">
          <span>Filtrar termos</span>
          <input type="search" value={texto} placeholder="stack, pull, BKB…" onChange={(e) => setTexto(e.target.value)} />
        </label>
        <FiltroCategorias categoria={categoria} onMudar={setCategoria} />
        {grupos.length === 0 && <p>Nenhum termo com esse filtro.</p>}
        {grupos.map(([letra, itens]) => (
          <section key={letra} aria-label={`Letra ${letra}`}>
            <h2 className="sobretitulo">{letra}</h2>
            <ul>{itens.map((t) => <li key={t.id}><Link to={`/glossario/${t.id}`} aria-current={t.id === id ? "page" : undefined}>{t.titulo}</Link></li>)}</ul>
          </section>
        ))}
      </aside>
      {termo && <TermoAberto key={termo.id} termo={termo} termos={dados.dados} />}
      {!termo && (
        <article className="termo">
          <span className="sobretitulo">Glossário</span>
          <h1>{id ? "Termo não encontrado." : "Escolha um termo."}</h1>
        </article>
      )}
    </section>
  );
}
