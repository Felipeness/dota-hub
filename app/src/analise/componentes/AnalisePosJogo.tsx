import { useState } from "react";
import { MapView } from "../../map/MapView";
import type { Pino } from "../../map/trilhas";
import type { Categoria } from "../modelo";
import { placarPorArea } from "../placarPorArea";
import type { Relatorio } from "../relatorio";
import type { Contexto } from "../modelo";
import { AchadoCard } from "./AchadoCard";
import { PlacarPorArea } from "./PlacarPorArea";

type Filtro = Categoria | "todos";
const FILTROS: readonly Filtro[] = ["todos", "erro", "acerto"];
const ROTULO_DO_FILTRO: Readonly<Record<Filtro, string>> = { todos: "Todos", erro: "Erros", acerto: "Acertos", contexto: "Contexto" };

export function AnalisePosJogo({ ctx, relatorio }: { ctx: Contexto; relatorio: Relatorio }) {
  const [filtro, setFiltro] = useState<Filtro>("todos");
  const achados = filtro === "todos" ? relatorio.achados : relatorio.achados.filter((a) => a.tipo === filtro);
  return (
    <section className="analise" aria-labelledby="titulo-analise">
      <h2 id="titulo-analise">Análise pós-jogo</h2>
      <p className="analise-resumo">{relatorio.resumo}</p>
      {relatorio.treinos.length > 0 && (
        <div className="analise-treinos">
          <p className="analise-treinos-titulo">3 coisas para treinar</p>
          <ol>{relatorio.treinos.map((treino) => <li key={treino}>{treino}</li>)}</ol>
        </div>
      )}
      <h3>Placar por área</h3>
      <PlacarPorArea areas={placarPorArea(ctx)} />
      <MapaDasMortes ctx={ctx} />
      <nav className="analise-filtro" aria-label="Filtrar achados">
        {FILTROS.map((f) => (
          <button key={f} type="button" aria-pressed={filtro === f} onClick={() => setFiltro(f)}>{ROTULO_DO_FILTRO[f]}</button>
        ))}
      </nav>
      <ol className="analise-lista" aria-label="Achados da partida">
        {achados.map((achado) => <AchadoCard key={achado.id} achado={achado} />)}
      </ol>
      {achados.length === 0 && <p role="status" className="analise-vazio">Nenhum achado nesse filtro.</p>}
      <OQueNaoVemos itens={relatorio.oQueNaoVemos} />
    </section>
  );
}

function MapaDasMortes({ ctx }: { ctx: Contexto }) {
  const [selecionado, setSelecionado] = useState<string | null>(null);
  const mortes = ctx.detalhe.eventos.filter((e) => e.tipo === "morte" && e.ponto !== null);
  if (mortes.length === 0) return null;
  const pinos: Pino[] = mortes.map((m, i): Pino => ({
    tipo: "pino", id: `morte-${i}`, x: m.ponto?.[0] ?? 0, y: m.ponto?.[1] ?? 0, cor: "dire", raio: 0.015, opacidade: 0.9,
    rotulo: m.texto, clicavel: true, forma: "losango",
  }));
  return (
    <div className="analise-mapa">
      <h3>Onde morreu (só mortes dentro de uma luta têm posição)</h3>
      <MapView forcarPlano objetivos={[]} desenhos={pinos} selecionado={selecionado} onSelecionar={setSelecionado} />
    </div>
  );
}

function OQueNaoVemos({ itens }: { itens: readonly string[] }) {
  return (
    <details className="analise-nao-vemos">
      <summary>O que esta análise não vê</summary>
      <ul>{itens.map((item) => <li key={item}>{item}</li>)}</ul>
    </details>
  );
}
