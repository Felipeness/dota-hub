import { type RefObject, useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router";
import { dadosOuVazio, Indisponivel, useData } from "../data/useData";
import { conteudoSchema, heroisCatalogoSchema, jogadoresSchema, objetivosSchema, rotasResumoSchema, timesSchema, unidadesSchema } from "../data/schemas";
import { CAMINHO_INDICE, indiceAtlasSchema } from "../times/schemas";
import { AtalhoAoVivo } from "./AtalhoAoVivo";
import { type Achado, buscar, construirIndice, sugerir } from "./index";

const ETIQUETA = {
  rota: "Rota", objetivo: "Objetivo", termo: "Termo", heroi: "Herói", jogador: "Jogador", time: "Time", atlas: "Atlas", unidade: "Unidade", habilidade: "Habilidade",
} as const satisfies Record<Achado["tipo"], string>;

// Os dados da busca só baixam quando a pessoa vai buscar, para não pesar na primeira tela.
const ROTULO_BUSCA = "Buscar no Dota Hub: herói, time, rota, unidade…";

export function SearchBox() {
  const [ativa, setAtiva] = useState(false);
  const [consulta, setConsulta] = useState("");
  const [ativo, setAtivo] = useState(-1);
  const lista = useRef<HTMLUListElement>(null);
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
  // Zera o item ativo a cada digitação: o resultado em destaque mudou.
  useEffect(() => setAtivo(-1), [consulta]);

  function navegarResultados(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Escape") return setAtiva(false);
    const itens = lista.current?.querySelectorAll("li[data-navegavel]");
    if (!itens || itens.length === 0) return;
    if (e.key === "ArrowDown") { e.preventDefault(); setAtivo((i) => (i + 1) % itens.length); return; }
    if (e.key === "ArrowUp") { e.preventDefault(); setAtivo((i) => (i - 1 + itens.length) % itens.length); return; }
    if (e.key === "Enter" && ativo >= 0) { e.preventDefault(); itens[ativo]?.querySelector("a")?.click(); }
  }

  return (
    <div className="busca" onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setAtiva(false); }}>
      <label className="busca-campo">
        <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7" /><path d="M20 20l-4-4" /></svg>
        <input
          ref={campo} type="search" role="searchbox" value={consulta}
          aria-label={ROTULO_BUSCA} placeholder={ROTULO_BUSCA}
          aria-expanded={ativa} aria-controls="busca-resultados"
          onFocus={() => setAtiva(true)}
          onChange={(e) => { setConsulta(e.target.value); setAtiva(true); }}
          onKeyDown={navegarResultados}
        />
        <kbd aria-hidden="true">/</kbd>
      </label>
      {ativa && <Resultados consulta={consulta} ativo={ativo} listaRef={lista} limpar={() => setConsulta("")} />}
    </div>
  );
}

function estaDigitando(alvo: EventTarget | null): boolean {
  return alvo instanceof HTMLElement && (alvo.isContentEditable || ["INPUT", "TEXTAREA", "SELECT"].includes(alvo.tagName));
}

function Resultados({ consulta, ativo, listaRef, limpar }: {
  consulta: string; ativo: number; listaRef: RefObject<HTMLUListElement | null>; limpar: () => void;
}) {
  const rotas = useData("/data/rotas_resumo.json", rotasResumoSchema);
  const objetivos = useData("/data/objetivos.json", objetivosSchema);
  const termos = useData("/data/glossario.json", conteudoSchema);
  // Os opcionais (1B e unidades): um arquivo que falta só tira aquele tipo da busca.
  const herois = useData("/data/herois_catalogo.json", heroisCatalogoSchema);
  const jogadores = useData("/data/jogadores.json", jogadoresSchema);
  const times = useData("/data/times.json", timesSchema);
  const unidades = useData("/data/unidades.json", unidadesSchema);
  const atlas = useData(CAMINHO_INDICE, indiceAtlasSchema);
  const opcionaisProntos = [herois, jogadores, times, unidades, atlas].every((e) => e.estado !== "carregando");

  const busca = useMemo(
    () => rotas.estado === "ok" && objetivos.estado === "ok" && termos.estado === "ok" && opcionaisProntos
      ? construirIndice({
        rotas: rotas.dados, objetivos: objetivos.dados, termos: termos.dados,
        herois: dadosOuVazio(herois), jogadores: dadosOuVazio(jogadores), times: dadosOuVazio(times),
        unidades: dadosOuVazio(unidades), atlas: atlas.estado === "ok" ? atlas.dados.times : [],
      })
      : null,
    [rotas, objetivos, termos, herois, jogadores, times, unidades, atlas, opcionaisProntos],
  );

  const indisponivel = [rotas, objetivos, termos].find((e) => e.estado === "indisponivel");
  if (indisponivel) return <Indisponivel motivo={indisponivel.motivo} />;
  if (!consulta.trim()) return null;
  if (!busca) return <p id="busca-resultados">Carregando a busca.</p>;

  const achados = buscar(busca, consulta);
  if (achados.length === 0) {
    const parecidos = sugerir(busca, consulta);
    // Uma lista só: a mensagem e o atalho dividem a mesma caixa suspensa.
    return (
      <ul id="busca-resultados" ref={listaRef} aria-live="polite" onMouseDown={(e) => e.preventDefault()}>
        <li className="busca-nada">Nada encontrado.{parecidos.length > 0 && ` Você quis dizer: ${parecidos.join(", ")}?`}</li>
        <AtalhoAoVivo consulta={consulta} ativo={ativo === 0} onIr={limpar} />
      </ul>
    );
  }
  // O Safari não dá foco ao link no clique: o preventDefault mantém o foco no campo e a lista não some antes do click.
  return (
    <ul id="busca-resultados" ref={listaRef} aria-live="polite" onMouseDown={(e) => e.preventDefault()}>
      {achados.map((a, i) => (
        <li key={`${a.tipo}:${a.id}`} data-navegavel className={i === ativo ? "ativo" : undefined}>
          <span className="etiqueta-com-icone">
            {a.icone && <img className="busca-icone" src={a.icone} alt="" width={24} height={24} />}
            <span className="etiqueta">{ETIQUETA[a.tipo]}</span>
          </span>
          <Link to={a.link} onClick={limpar}>{a.titulo}</Link>
        </li>
      ))}
      <AtalhoAoVivo consulta={consulta} ativo={ativo === achados.length} onIr={limpar} />
    </ul>
  );
}
