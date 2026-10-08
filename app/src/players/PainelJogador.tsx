import { Link } from "react-router";
import type { Painel } from "../data/schemas";
import { normalizar } from "../routes/filtros";
import { Grafico } from "./Grafico";
import { formatarValor } from "./grafico-config";

type Destaque = Painel["destaques"][number];
type Achado = Painel["achados"][number];

// mesmo slug do export (jogadores.slug): é o id do time em times.json
const idDoTime = (nome: string) => normalizar(nome).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

// rótulos como "Felipe solo · GPM" viram grupo "Felipe solo" + resto "GPM"
function grupoDoDestaque(rotulo: string): { grupo: string; resto: string } {
  const indice = rotulo.indexOf(" · ");
  return indice === -1 ? { grupo: "", resto: rotulo } : { grupo: rotulo.slice(0, indice), resto: rotulo.slice(indice + 3) };
}

function agruparDestaques(destaques: Destaque[]): Map<string, Destaque[]> {
  const grupos = new Map<string, Destaque[]>();
  for (const d of destaques) {
    const { grupo } = grupoDoDestaque(d.rotulo);
    grupos.set(grupo, [...(grupos.get(grupo) ?? []), d]);
  }
  return grupos;
}

function Destaques({ destaques }: { destaques: Destaque[] }) {
  const grupos = agruparDestaques(destaques);
  const comSubtitulo = grupos.size > 1;
  return (
    <>
      {[...grupos.entries()].map(([grupo, itens]) => (
        <div key={grupo || "_"}>
          {comSubtitulo && grupo && <h3>{grupo}</h3>}
          <dl className="destaques">
            {itens.map((d) => (
              <div key={d.rotulo}><dt>{comSubtitulo ? grupoDoDestaque(d.rotulo).resto : d.rotulo}</dt><dd>{formatarValor(d.valor, d.unidade)}</dd></div>
            ))}
          </dl>
        </div>
      ))}
    </>
  );
}

// algumas análises marcam o tipo do achado no começo do texto; usamos isso só para agrupar na tela
const CATEGORIA_POR_PREFIXO: [string, string][] = [
  ["Faz melhor ou igual", "Pontos fortes"], ["Faz pior", "Pontos a melhorar"], ["Para copiar", "Para copiar no seu jogo"],
];
const categoriaDoAchado = (texto: string) => CATEGORIA_POR_PREFIXO.find(([prefixo]) => texto.startsWith(prefixo))?.[1] ?? "O que a análise achou";

function agruparAchados(achados: Achado[]): Map<string, Achado[]> {
  const grupos = new Map<string, Achado[]>();
  for (const a of achados) {
    const categoria = categoriaDoAchado(a.texto);
    grupos.set(categoria, [...(grupos.get(categoria) ?? []), a]);
  }
  return grupos;
}

function Achados({ achados }: { achados: Achado[] }) {
  if (achados.length === 0) return null;
  return (
    <>
      {[...agruparAchados(achados).entries()].map(([categoria, itens]) => (
        <section key={categoria}><h2>{categoria}</h2><ul>{itens.map((a) => <li key={a.texto}>{a.texto}</li>)}</ul></section>
      ))}
    </>
  );
}

export function PainelJogador({ painel }: { painel: Painel }) {
  const fontesDosDestaques = [...new Set(painel.destaques.map((d) => d.fonte))];
  return (
    <article className="painel-jogador">
      <header>
        <span className="sobretitulo">{painel.tipo === "pro" ? "Profissional" : "Amigo"}</span>
        <h1>{painel.nome}</h1>
        {painel.time && <p><Link to={`/jogadores/times/${idDoTime(painel.time)}`}>{painel.time}</Link></p>}
        <p className="amostra">{painel.amostra}</p>
      </header>
      <Destaques destaques={painel.destaques} />
      {fontesDosDestaques.length === 1
        ? <p className="fonte">Fonte: {fontesDosDestaques[0]}</p>
        : <details className="recolhivel fonte"><summary>Fontes dos destaques</summary>
            <ul>{painel.destaques.map((d) => <li key={d.rotulo}>{d.rotulo}: {d.fonte}</li>)}</ul>
          </details>}
      {painel.graficos.map((g) => <Grafico key={g.id} grafico={g} />)}
      <Achados achados={painel.achados} />
      {painel.replays.length > 0 && (
        <section><h2>Replays no mapa</h2>
          <ul>{painel.replays.map((r) => <li key={r}><Link to={`/?replay=${r}`}>Ver o replay {r} no mapa</Link></li>)}</ul>
        </section>
      )}
      <details className="recolhivel fonte"><summary>Fontes</summary><p>{painel.fontes.join("; ")}</p></details>
    </article>
  );
}
