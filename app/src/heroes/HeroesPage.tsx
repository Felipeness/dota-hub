import { useState } from "react";
import { Link, useSearchParams } from "react-router";
import { ATRIBUTOS_DE_HEROI, heroisCatalogoSchema, heroisSchema, POSICOES, type AtributoDeHeroi, type HeroiDoCatalogo, type HeroiResumo, type Posicao } from "../data/schemas";
import { indiceDeConfrontosSchema } from "../confronto/analise";
import { dadosOuVazio, Indisponivel, useData } from "../data/useData";
import { agruparPorPosicao, filtrarCatalogo, posicaoDoParametro, ROTULO_DA_POSICAO, ROTULO_DO_ATRIBUTO } from "./catalogo";
import { urlDoRetrato } from "./resumo";

const LIMITE_RESUMO = 120;

// Corta no último espaço antes do limite para não quebrar palavra no meio.
function resumoCurto(texto: string): string {
  if (texto.length <= LIMITE_RESUMO) return texto;
  const cortado = texto.slice(0, LIMITE_RESUMO);
  const ultimoEspaco = cortado.lastIndexOf(" ");
  return `${cortado.slice(0, ultimoEspaco > 0 ? ultimoEspaco : LIMITE_RESUMO).trimEnd()}…`;
}

const atributoDoParametro = (valor: string | null): AtributoDeHeroi | null => ATRIBUTOS_DE_HEROI.find((a) => a === valor) ?? null;

type CartaoProps = Readonly<{ heroi: HeroiDoCatalogo; posicao: Posicao; guia: HeroiResumo | undefined; confrontos: number }>;

/** Ficha leva direto à aba da posição do grupo em que foi clicada; guia completo vai sempre pro mesmo lugar. */
function CartaoDoHeroi({ heroi, posicao, guia, confrontos }: CartaoProps) {
  const destino = heroi.pagina === "ficha" ? `/herois/${heroi.id}?pos=${posicao}` : `/herois/${heroi.id}`;
  return (
    <li>
      <Link to={destino}>
        <img className="retrato" src={urlDoRetrato(heroi.id)} alt="" width={64} height={36} loading="lazy" />
        <span className="heroi-texto">
          <strong>{heroi.nome}</strong>
          <span className="selos-heroi">
            {heroi.pagina === "guia"
              ? <span className="selo selo-destaque">guia completo</span>
              : <span className="selo">ficha por posição</span>}
            {guia?.tem_por_minuto && <span className="selo selo-destaque">minuto a minuto</span>}
            {confrontos > 0 && <span className="selo">{confrontos} confrontos analisados</span>}
          </span>
          <span>{resumoCurto(heroi.resumo)}</span>
        </span>
      </Link>
    </li>
  );
}

type FiltroProps<T extends string | number> = Readonly<{
  rotulo: string; opcoes: readonly T[]; rotulos: Readonly<Record<T, string>>; atual: T | null; onEscolher: (valor: T | null) => void;
}>;

function FiltroDePilulas<T extends string | number>({ rotulo, opcoes, rotulos, atual, onEscolher }: FiltroProps<T>) {
  return (
    <div role="group" aria-label={rotulo} className="seletor-opcoes seletor-pilulas">
      <button aria-pressed={atual === null} onClick={() => onEscolher(null)}>Todas</button>
      {opcoes.map((o) => <button key={o} aria-pressed={atual === o} onClick={() => onEscolher(o)}>{rotulos[o]}</button>)}
    </div>
  );
}

export function HeroesPage() {
  const catalogo = useData("/data/herois_catalogo.json", heroisCatalogoSchema);
  const guias = useData("/data/herois.json", heroisSchema);
  const confrontos = useData("/data/confrontos_indice.json", indiceDeConfrontosSchema);
  const [busca, setBusca] = useSearchParams();
  const [texto, setTexto] = useState("");
  if (catalogo.estado === "carregando") return <p>Carregando…</p>;
  if (catalogo.estado === "indisponivel") return <Indisponivel motivo={catalogo.motivo} />;
  const posicao = posicaoDoParametro(busca.get("pos"));
  const atributo = atributoDoParametro(busca.get("atributo"));
  const trocar = (chave: string, valor: string | number | null) => setBusca((atual) => {
    const nova = new URLSearchParams(atual);
    if (valor === null) nova.delete(chave);
    else nova.set(chave, String(valor));
    return nova;
  }, { replace: true });
  const guiaPorId = new Map(dadosOuVazio(guias).map((g) => [g.id, g]));
  const confrontosPorId = confrontos.estado === "ok" ? confrontos.dados : {};
  const encontrados = filtrarCatalogo(catalogo.dados, { texto, posicao, atributo });
  const grupos = agruparPorPosicao(encontrados, posicao);
  const comGuia = catalogo.dados.filter((h) => h.pagina === "guia").length;
  return (
    <section className="herois">
      <div className="rotas-topo"><span className="sobretitulo">Guias e fichas</span><h1>Heróis</h1></div>
      <p className="herois-cobertura">
        {catalogo.dados.length} heróis: {comGuia} com guia completo e {catalogo.dados.length - comGuia} com ficha por posição (build, situacionais e Roshan).
      </p>
      <input type="search" aria-label="Filtrar heróis" placeholder="Filtrar heróis" value={texto} onChange={(e) => setTexto(e.target.value)} />
      <FiltroDePilulas rotulo="Posição" opcoes={POSICOES} rotulos={ROTULO_DA_POSICAO} atual={posicao} onEscolher={(p) => trocar("pos", p)} />
      <FiltroDePilulas rotulo="Atributo" opcoes={ATRIBUTOS_DE_HEROI} rotulos={ROTULO_DO_ATRIBUTO} atual={atributo} onEscolher={(a) => trocar("atributo", a)} />
      <p aria-live="polite" className="herois-contagem">{encontrados.length} {encontrados.length === 1 ? "herói" : "heróis"}</p>
      {grupos.length === 0
        ? <p className="rotas-vazio">Nenhum herói encontrado com esse filtro. Limpe o texto ou escolha “Todas” para ver a lista inteira.</p>
        : grupos.map((g) => (
          <section key={g.posicao} className="grupo-posicao" aria-labelledby={`grupo-pos-${g.posicao}`}>
            <h2 id={`grupo-pos-${g.posicao}`}>{ROTULO_DA_POSICAO[g.posicao]} <span className="herois-contagem">{g.herois.length}</span></h2>
            <ul className="grade-herois">
              {g.herois.map((h) => <CartaoDoHeroi key={h.id} heroi={h} posicao={g.posicao} guia={guiaPorId.get(h.id)} confrontos={confrontosPorId[h.id] ?? 0} />)}
            </ul>
          </section>
        ))}
    </section>
  );
}
