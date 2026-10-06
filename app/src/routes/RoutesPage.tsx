import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import type { Indice, Objetivo, Rota } from "../data/schemas";
import { indiceSchema, objetivosSchema, rotasSchema } from "../data/schemas";
import { Indisponivel, useData } from "../data/useData";
import { filtrarRotas, rotaDaCelula, type Lado } from "./filtros";
import { RouteDetail } from "./RouteDetail";

const LADOS = [
  { id: "radiant", rotulo: "Radiant" },
  { id: "dire", rotulo: "Dire" },
] as const satisfies ReadonlyArray<{ id: Lado; rotulo: string }>;
const MINUTOS = Array.from({ length: 27 }, (_, i) => i + 4);

export function RoutesPage() {
  const rotas = useData("/data/rotas.json", rotasSchema);
  const indice = useData("/data/indice.json", indiceSchema);
  const objetivos = useData("/data/objetivos.json", objetivosSchema);
  for (const d of [rotas, indice, objetivos]) if (d.estado === "indisponivel") return <Indisponivel motivo={d.motivo} />;
  if (rotas.estado !== "ok" || indice.estado !== "ok" || objetivos.estado !== "ok") return <p>Carregando rotas…</p>;
  return <Rotas rotas={rotas.dados} indice={indice.dados} objetivos={objetivos.dados} />;
}

type Selecao = { lado?: Lado; minuto?: number };

function Rotas({ rotas, indice, objetivos }: { rotas: Rota[]; indice: Indice; objetivos: Objetivo[] }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selecao, setSelecao] = useState<Selecao>({});
  const [nota, setNota] = useState<string | null>(null);
  const [texto, setTexto] = useState("");
  const aberta = id ? rotas.find((r) => r.id === id) : undefined;
  const irPara = (destino: string) => navigate(`/rotas/${destino}`);

  const escolherSituacao = (coluna: string) => {
    if (!selecao.lado || selecao.minuto === undefined) return;
    const celula = rotaDaCelula(indice, selecao.lado, selecao.minuto, coluna);
    setNota(celula.nota);
    if (celula.id) irPara(celula.id);
  };

  return (
    <section className="rotas">
      <header className="rotas-topo">
        <span className="sobretitulo">GPS de farm · 3 toques</span>
        <h1>Que horas são e o que o jogo mostra?</h1>
      </header>
      <div className="seletores">
        <Seletor rotulo="1 · Lado" estilo="botoes" opcoes={LADOS.map((l) => ({ valor: l.id, rotulo: l.rotulo }))} atual={selecao.lado}
          onEscolher={(lado) => setSelecao({ ...selecao, lado })} />
        <Seletor rotulo="2 · Minuto" estilo="minutos" opcoes={MINUTOS.map((m) => ({ valor: m, rotulo: String(m) }))} atual={selecao.minuto}
          onEscolher={(minuto) => setSelecao({ ...selecao, minuto })} />
      </div>
      <Seletor rotulo="3 · Situação" estilo="pilulas" opcoes={indice.colunas.map((c) => ({ valor: c, rotulo: c }))} onEscolher={escolherSituacao} />
      {nota && <p className="nota-celula">{nota}</p>}
      {id && !aberta && <p role="alert">Rota {id} não encontrada.</p>}
      {aberta && <RouteDetail rota={aberta} objetivos={objetivos} onIrPara={irPara} />}
      <label className="campo">
        <span>Procurar rota</span>
        <input type="search" value={texto} onChange={(e) => setTexto(e.target.value)} />
      </label>
      <ul className="lista-rotas">
        {filtrarRotas(rotas, { ...selecao, texto }).map((r) => (
          <li key={r.id}><Link to={`/rotas/${r.id}`}><span className="numero">{r.id}</span> {r.pergunta}</Link></li>
        ))}
      </ul>
    </section>
  );
}

type Opcao<T> = { valor: T; rotulo: string };
type SeletorProps<T> = { rotulo: string; estilo: "botoes" | "minutos" | "pilulas"; opcoes: Opcao<T>[]; atual?: T; onEscolher: (valor: T) => void };

function Seletor<T extends string | number>({ rotulo, estilo, opcoes, atual, onEscolher }: SeletorProps<T>) {
  return (
    <fieldset className={`seletor seletor-${estilo}`}>
      <legend>{rotulo}</legend>
      <div className="seletor-opcoes">
        {opcoes.map((o) => (
          <button key={o.valor} aria-pressed={o.valor === atual} onClick={() => onEscolher(o.valor)}>{o.rotulo}</button>
        ))}
      </div>
    </fieldset>
  );
}
