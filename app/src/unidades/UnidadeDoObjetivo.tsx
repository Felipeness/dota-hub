import { Link } from "react-router";
import { campsSchema, unidadeSchema, unidadesSchema, type Objetivo } from "../data/schemas";
import { Indisponivel, useData } from "../data/useData";
import { tiposDoCamp } from "./ficha";
import { FichaUnidade } from "./FichaUnidade";

const UNIDADE_DO_TIPO: Readonly<Partial<Record<string, string>>> = { roshan: "roshan", tormentor: "tormentor" };

function FichaDoObjetivo({ id }: { id: string }) {
  const ficha = useData(`/data/unidades/${id}.json`, unidadeSchema);
  if (ficha.estado === "carregando") return <p>Carregando…</p>;
  if (ficha.estado === "indisponivel") return <Indisponivel motivo={ficha.motivo} />;
  return <FichaUnidade unidade={ficha.dados} />;
}

function TiposDoCamp({ camp }: { camp: Objetivo }) {
  const camps = useData("/data/camps.json", campsSchema);
  const unidades = useData("/data/unidades.json", unidadesSchema);
  if (camps.estado === "indisponivel") return <Indisponivel motivo={camps.motivo} />;
  if (camps.estado === "carregando") return <p>Carregando…</p>;
  const nomes = new Map(unidades.estado === "ok" ? unidades.dados.map((u) => [u.id, u.nome]) : []);
  return (
    <section aria-label="Pode nascer neste camp">
      <h3 className="sobretitulo">Pode nascer neste camp</h3>
      <ul className="camp-tipos">
        {tiposDoCamp(camp, camps.dados).map((t) => (
          <li key={t.id}>
            <h4>{t.nome}</h4>
            <ul className="pilulas">
              {t.unidades.map((u) => (
                <li key={u.id}><Link className="pilula" to={`/glossario/unidades/${u.id}`}>{u.qtd}× {nomes.get(u.id) ?? u.id}</Link></li>
              ))}
            </ul>
            <p className="fonte">Ouro {t.ouro[0]} a {t.ouro[1]} · XP {t.xp}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function UnidadeDoObjetivo({ objetivo }: { objetivo: Objetivo }) {
  const id = UNIDADE_DO_TIPO[objetivo.tipo];
  if (id) return <FichaDoObjetivo id={id} />;
  if (objetivo.tipo === "camp") return <TiposDoCamp camp={objetivo} />;
  return null;
}
