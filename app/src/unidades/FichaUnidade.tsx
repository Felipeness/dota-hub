import ReactMarkdown from "react-markdown";
import type { Crescimento, Habilidade, Unidade } from "../data/schemas";
import { GradeNumeros, rotuloOrigem } from "../objectives/ObjectivePanel";
import { gradeDeNumeros, textoDoCrescimento } from "./ficha";
import { VisualizadorUnidade } from "./VisualizadorUnidade";
import "./unidades.css";

const paragrafos = (texto: string) => texto.split(/\n{2,}/).filter((p) => p.trim());
const fmt = (n: number) => n.toLocaleString("pt-BR");

function Icone({ habilidade }: { habilidade: Habilidade }) {
  if (habilidade.icone) return <img className="habilidade-icone" src={`/data/icones/${habilidade.icone}.webp`} alt="" width={48} height={48} />;
  return <span className="habilidade-icone habilidade-icone-vazio" aria-hidden="true">{habilidade.nome.charAt(0)}</span>;
}

function OQueMuda({ texto }: { texto: Habilidade["o_que_muda"] }) {
  if (!texto) return <p className="o-que-muda o-que-muda-vazio">O que isso muda para você: ainda não escrito.</p>;
  return (
    <div className="o-que-muda">
      <h5>O que isso muda para você</h5>
      <ReactMarkdown>{texto.texto}</ReactMarkdown>
      <p className="fonte">{rotuloOrigem(texto.origem)} Fontes: {texto.fontes.join("; ")}</p>
    </div>
  );
}

function ItemHabilidade({ habilidade: h }: { habilidade: Habilidade }) {
  return (
    <li id={h.id} className="habilidade" aria-label={h.nome}>
      <Icone habilidade={h} />
      <div>
        <h4>{h.nome} {h.nome_en && <span className="nome-en">({h.nome_en})</span>}</h4>
        {h.texto_em_ingles && <span className="selo">texto em inglês</span>}
        {paragrafos(h.descricao).map((p) => <p key={p}>{p}</p>)}
        {h.notas.map((n) => <p key={n} className="nota">{n}</p>)}
        <dl className="condicoes">
          {[...h.condicoes, ...h.valores].map(({ rotulo, valor }) => (
            <div key={`${rotulo}:${valor}`}><dt>{rotulo}</dt><dd>{valor}</dd></div>
          ))}
        </dl>
        <OQueMuda texto={h.o_que_muda} />
      </div>
    </li>
  );
}

function CrescimentoDaUnidade({ crescimento }: { crescimento: NonNullable<Crescimento> }) {
  if (crescimento.tipo === "por_nivel") return <p className="crescimento">{textoDoCrescimento(crescimento)}</p>;
  return (
    <div className="tabela-rolavel">
      <table className="crescimento-tabela" aria-label="Como fica mais forte com o tempo">
        <caption>Como fica mais forte com o tempo</caption>
        <thead><tr>{crescimento.colunas.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
        <tbody>{crescimento.linhas.map((l) => <tr key={l[0]}>{l.map((v, i) => <td key={crescimento.colunas[i]}>{fmt(v)}</td>)}</tr>)}</tbody>
      </table>
      <p className="fonte">Fonte: {crescimento.fonte}</p>
    </div>
  );
}

export function FichaUnidade({ unidade }: { unidade: Unidade }) {
  return (
    <article className="ficha-unidade" aria-label={unidade.nome}>
      <VisualizadorUnidade modelo={unidade.modelo} nome={unidade.nome} />
      <header>
        <span className={`sobretitulo lado-${unidade.lado}`}>{unidade.papel}</span>
        <h2>{unidade.nome}</h2>
      </header>
      <GradeNumeros numeros={gradeDeNumeros(unidade.numeros)} />
      {unidade.crescimento && <CrescimentoDaUnidade crescimento={unidade.crescimento} />}
      <section aria-label="Habilidades">
        <h3 className="sobretitulo">Habilidades</h3>
        <ul className="habilidades">{unidade.habilidades.map((h) => <ItemHabilidade key={h.id} habilidade={h} />)}</ul>
      </section>
      <footer className="fonte">Patch {unidade.patch} · Fontes: {unidade.fontes.join("; ")}</footer>
    </article>
  );
}
