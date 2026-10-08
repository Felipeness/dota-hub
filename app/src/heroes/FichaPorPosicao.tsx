import ReactMarkdown from "react-markdown";
import { Link, useSearchParams } from "react-router";
import type { Ficha, ItemDaFicha, PosicaoDaFicha } from "../data/schemas";
import { ListaDeFontes } from "../layout/Fontes";
import { minutoDoItem, posicaoDoParametro } from "./catalogo";
import { DetalheDoPorque, IconeDoItem, Secao, TopoDoHeroi } from "./partes";

const PARAMETRO_DA_POSICAO = "pos";

/** Nota com mais de um parágrafo (texto antes e depois dos itens) vira um <p> por parágrafo. */
function Nota({ texto }: { texto: string | null }) {
  if (!texto) return null;
  return texto.split("\n\n").map((paragrafo) => <p key={paragrafo} className="painel-nota">{paragrafo}</p>);
}

function Minuto({ texto }: { texto: string | null }) {
  if (!texto) return null;
  const { tempo, base } = minutoDoItem(texto);
  return <><span className="tempo">{tempo}</span>{base && <span className="tempo-base"> {base}</span>}</>;
}

const temDetalhe = (item: Pick<ItemDaFicha, "detalhe" | "contra" | "combo" | "fontes">) =>
  Boolean(item.detalhe || item.contra || item.combo || item.fontes.length > 0);

/** Um item da build na linha do tempo: ícone, minuto e porquê à vista; detalhe, contra, combo e fontes ao expandir. */
function ItemDaBuild({ item }: { item: ItemDaFicha }) {
  return (
    <li>
      <IconeDoItem item={item.item} nome={item.nome} />
      <div>
        <strong>{item.nome}</strong> <Minuto texto={item.minuto} />
        {item.porque && <p className="item-porque">{item.porque}</p>}
        {item.quando && <p>{item.quando}</p>}
        {temDetalhe(item) && <details className="recolhivel"><summary>Ver detalhe</summary><DetalheDoPorque porque={item} /></details>}
      </div>
    </li>
  );
}

/** Situacional: o "Resolve contra" fica à vista, porque é ele que decide trocar a build padrão. */
function Situacional({ item }: { item: ItemDaFicha }) {
  const resto = { ...item, contra: null };
  return (
    <li>
      <IconeDoItem item={item.item} nome={item.nome} />
      <div>
        <strong>{item.nome}</strong> <Minuto texto={item.minuto} />
        {item.quando && <p>{item.quando}</p>}
        {item.contra && <p className="item-contra"><strong>Resolve contra:</strong> {item.contra}</p>}
        {item.porque && <p className="item-porque">{item.porque}</p>}
        {temDetalhe(resto) && <details className="recolhivel"><summary>Ver detalhe</summary><DetalheDoPorque porque={resto} /></details>}
      </div>
    </li>
  );
}

function ItensIniciais({ posicao }: { posicao: PosicaoDaFicha }) {
  const iniciais = posicao.itens_iniciais;
  if (!iniciais) return null;
  return (
    <Secao titulo="Itens iniciais" aberta>
      {iniciais.itens.length > 0 && (
        <ul className="itens-iniciais">
          {iniciais.itens.map((i, n) => <li key={`${i.item}-${n}`}><IconeDoItem item={i.item} nome={i.nome} />{i.nome}</li>)}
        </ul>
      )}
      <Nota texto={iniciais.nota} />
      {posicao.fontes.length > 0 && <p className="fonte">Fontes: <ListaDeFontes fontes={posicao.fontes} /></p>}
    </Secao>
  );
}

function PainelDaPosicao({ posicao }: { posicao: PosicaoDaFicha }) {
  return (
    <div className="painel-texto">
      {posicao.quando_pegar && <Secao titulo="Quando pegar" aberta><p>{posicao.quando_pegar}</p></Secao>}
      <ItensIniciais posicao={posicao} />
      <Secao titulo="Build" aberta contagem={posicao.build.length}>
        <Nota texto={posicao.nota_build} />
        {posicao.build.length > 0 && (
          <>
            <p className="painel-nota">Na ordem de compra. O minuto e a amostra vêm da fonte de cada item.</p>
            <ol className="cartoes-texto">{posicao.build.map((i, n) => <ItemDaBuild key={`${n}-${i.nome}`} item={i} />)}</ol>
          </>
        )}
      </Secao>
      {(posicao.situacionais.length > 0 || posicao.nota_situacionais) && (
        <Secao titulo="Situacionais" aberta contagem={posicao.situacionais.length}>
          <Nota texto={posicao.nota_situacionais} />
          <ul className="cartoes-texto">{posicao.situacionais.map((i, n) => <Situacional key={`${n}-${i.nome}`} item={i} />)}</ul>
        </Secao>
      )}
    </div>
  );
}

function AbasDePosicao({ ficha }: { ficha: Ficha }) {
  const [busca, setBusca] = useSearchParams();
  const pedida = posicaoDoParametro(busca.get(PARAMETRO_DA_POSICAO));
  // A primeira posição do frontmatter é a principal do herói: é ela que abre quando a URL não escolhe outra.
  const atual = ficha.posicoes.find((p) => p.posicao === pedida) ?? ficha.posicoes[0];
  if (!atual) return null;
  const escolher = (n: number) => setBusca({ [PARAMETRO_DA_POSICAO]: String(n) }, { replace: true });
  return (
    <>
      <div role="tablist" aria-label="Posição" className="abas-pilula">
        {ficha.posicoes.map((p) => (
          <button key={p.posicao} id={`aba-pos-${p.posicao}`} role="tab" aria-selected={p === atual}
            aria-controls={`painel-pos-${p.posicao}`} onClick={() => escolher(p.posicao)}>
            Pos {p.posicao} <span className="aba-funcao">{p.funcao}</span>
          </button>
        ))}
      </div>
      <div role="tabpanel" id={`painel-pos-${atual.posicao}`} aria-labelledby={`aba-pos-${atual.posicao}`}>
        <PainelDaPosicao posicao={atual} />
      </div>
    </>
  );
}

export function FichaPorPosicao({ ficha }: { ficha: Ficha }) {
  return (
    <article className="ficha-heroi">
      <TopoDoHeroi id={ficha.id} nome={ficha.nome} sobretitulo="Herói · ficha por posição" resumo={ficha.resumo}>
        <ul className="pilulas" aria-label="Posições">
          {ficha.posicoes.map((p) => <li key={p.posicao}><span className="pilula">Pos {p.posicao} · {p.funcao}</span></li>)}
        </ul>
      </TopoDoHeroi>
      <AbasDePosicao ficha={ficha} />
      <div className="painel-texto">
        <Secao titulo="Roshan"><ReactMarkdown>{ficha.roshan}</ReactMarkdown></Secao>
        {ficha.extras.map((e) => <Secao key={e.titulo} titulo={e.titulo}><ReactMarkdown>{e.texto}</ReactMarkdown></Secao>)}
      </div>
      <details className="recolhivel fonte">
        <summary>Fontes</summary>
        <p>Patch {ficha.patch}. <ListaDeFontes fontes={ficha.fontes} /></p>
      </details>
      <p>
        <Link to={`/confronto?contra=${ficha.hero_id}`}>Como jogar contra {ficha.nome}</Link>
        {" · "}
        <Link to="/herois">Todos os heróis</Link>
      </p>
    </article>
  );
}
