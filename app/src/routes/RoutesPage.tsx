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
      <Seletor rotulo="Lado" opcoes={LADOS.map((l) => ({ valor: l.id, rotulo: l.rotulo }))} atual={selecao.lado}
        onEscolher={(lado) => setSelecao({ lado })} />
      {selecao.lado && (
        <Seletor rotulo="Minuto" opcoes={MINUTOS.map((m) => ({ valor: m, rotulo: String(m) }))} atual={selecao.minuto}
          onEscolher={(minuto) => setSelecao({ ...selecao, minuto })} />
      )}
      {selecao.minuto !== undefined && (
        <Seletor rotulo="Situação" opcoes={indice.colunas.map((c) => ({ valor: c, rotulo: c }))} onEscolher={escolherSituacao} />
      )}
      {nota && <p className="nota-celula">{nota}</p>}
      {id && !aberta && <p role="alert">Rota {id} não encontrada.</p>}
      {aberta && <RouteDetail rota={aberta} objetivos={objetivos} onIrPara={irPara} />}
      <label>
        Procurar rota
        <input type="search" value={texto} onChange={(e) => setTexto(e.target.value)} />
      </label>
      <ul className="lista-rotas">
        {filtrarRotas(rotas, { ...selecao, texto }).map((r) => (
          <li key={r.id}><Link to={`/rotas/${r.id}`}>{r.id} · {r.pergunta}</Link></li>
        ))}
      </ul>
    </section>
  );
}

type Opcao<T> = { valor: T; rotulo: string };
type SeletorProps<T> = { rotulo: string; opcoes: Opcao<T>[]; atual?: T; onEscolher: (valor: T) => void };

function Seletor<T extends string | number>({ rotulo, opcoes, atual, onEscolher }: SeletorProps<T>) {
  return (
    <fieldset className="seletor">
      <legend>{rotulo}</legend>
      {opcoes.map((o) => (
        <button key={o.valor} aria-pressed={o.valor === atual} onClick={() => onEscolher(o.valor)}>{o.rotulo}</button>
      ))}
    </fieldset>
  );
}
