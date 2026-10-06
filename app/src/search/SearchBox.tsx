import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router";
import { dadosOuVazio, Indisponivel, useData } from "../data/useData";
import { conteudoSchema, heroisSchema, jogadoresSchema, objetivosSchema, rotasResumoSchema, timesSchema, unidadesSchema } from "../data/schemas";
import { type Achado, buscar, construirIndice, sugerir } from "./index";

const ETIQUETA = {
  rota: "Rota", objetivo: "Objetivo", termo: "Termo", heroi: "Herói", jogador: "Jogador", time: "Time", unidade: "Unidade", habilidade: "Habilidade",
} as const satisfies Record<Achado["tipo"], string>;

// Os dados da busca só baixam quando a pessoa vai buscar, para não pesar na primeira tela.
export function SearchBox() {
  const [ativa, setAtiva] = useState(false);
  const [consulta, setConsulta] = useState("");
  const campo = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const focarComBarra = (e: KeyboardEvent) => {
      if (e.key !== "/" || estaDigitando(e.target)) return;
      e.preventDefault();
      campo.current?.focus();
    };
    document.addEventListener("keydown", focarComBarra);
    return () => document.removeEventListener("keydown", focarComBarra);
  }, []);
  return (
    <div className="busca" onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setAtiva(false); }}>
      <label className="busca-campo">
        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
        <input
          ref={campo} type="search" role="searchbox" value={consulta}
          aria-label="Buscar herói, rota, objetivo ou termo" placeholder="Buscar herói, rota, objetivo ou termo"
          onFocus={() => setAtiva(true)}
          onChange={(e) => { setConsulta(e.target.value); setAtiva(true); }}
          onKeyDown={(e) => { if (e.key === "Escape") setAtiva(false); }}
        />
        <kbd aria-hidden="true">/</kbd>
      </label>
      {ativa && <Resultados consulta={consulta} limpar={() => setConsulta("")} />}
    </div>
  );
}

function estaDigitando(alvo: EventTarget | null): boolean {
  return alvo instanceof HTMLElement && (alvo.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(alvo.tagName));
}

function Resultados({ consulta, limpar }: { consulta: string; limpar: () => void }) {
  const rotas = useData("/data/rotas_resumo.json", rotasResumoSchema);
  const objetivos = useData("/data/objetivos.json", objetivosSchema);
  const termos = useData("/data/glossario.json", conteudoSchema);
  // Os opcionais (1B e unidades): um arquivo que falta só tira aquele tipo da busca.
  const herois = useData("/data/herois.json", heroisSchema);
  const jogadores = useData("/data/jogadores.json", jogadoresSchema);
  const times = useData("/data/times.json", timesSchema);
  const unidades = useData("/data/unidades.json", unidadesSchema);
  const opcionaisProntos = [herois, jogadores, times, unidades].every((e) => e.estado !== "carregando");

  const busca = useMemo(
    () => rotas.estado === "ok" && objetivos.estado === "ok" && termos.estado === "ok" && opcionaisProntos
      ? construirIndice({
        rotas: rotas.dados, objetivos: objetivos.dados, termos: termos.dados,
        herois: dadosOuVazio(herois), jogadores: dadosOuVazio(jogadores), times: dadosOuVazio(times),
        unidades: dadosOuVazio(unidades),
      })
      : null,
    [rotas, objetivos, termos, herois, jogadores, times, unidades, opcionaisProntos],
  );

  const indisponivel = [rotas, objetivos, termos].find((e) => e.estado === "indisponivel");
  if (indisponivel) return <Indisponivel motivo={indisponivel.motivo} />;
  if (!consulta.trim()) return null;
  if (!busca) return <p>Carregando a busca.</p>;

  const achados = buscar(busca, consulta);
  if (achados.length === 0) {
    const parecidos = sugerir(busca, consulta);
    return <p>Nada encontrado.{parecidos.length > 0 && ` Você quis dizer: ${parecidos.join(", ")}?`}</p>;
  }
  // O Safari não dá foco ao link no clique: o preventDefault mantém o foco no campo e a lista não some antes do click.
  return (
    <ul onMouseDown={(e) => e.preventDefault()}>
      {achados.map((a) => (
        <li key={`${a.tipo}:${a.id}`}>
          <span className="etiqueta">{ETIQUETA[a.tipo]}</span>{" "}
          <Link to={a.link} onClick={limpar}>{a.titulo}</Link>
        </li>
      ))}
    </ul>
  );
}
