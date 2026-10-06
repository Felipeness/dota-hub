import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router";
import type { Objetivo } from "../data/schemas";
import { conteudoSchema, objetivosSchema } from "../data/schemas";
import { dadosOuVazio, Indisponivel, useData } from "../data/useData";
import { ObjectivePanel } from "../objectives/ObjectivePanel";
import { SoloRoshan } from "../roshan/SoloRoshan";
import { UnidadeDoObjetivo } from "../unidades/UnidadeDoObjetivo";
import { MapaComCamadas } from "../replays/MapaComCamadas";
import { SeletorReplay } from "../replays/SeletorReplay";
import { objetivoDaUrl } from "./objetivoDaUrl";

const ROTULO_TIPO: Record<string, string> = {
  roshan: "Roshan", tormentor: "Tormentor", torre: "Torres", barracks: "Barracks", ancient: "Ancients",
  fonte: "Fontes", loja: "Lojas", camp: "Camps", runa: "Runas", lotus: "Lótus",
  twin_gate: "Twin Gates", watcher: "Watchers", outpost: "Outposts",
};
const ATALHOS = ["roshan", "tormentor", "torre", "runa"] as const;
const LEGENDA = [
  { lado: "radiant", rotulo: "Radiant" },
  { lado: "dire", rotulo: "Dire" },
  { lado: "neutro", rotulo: "Neutro e objetivos" },
] as const satisfies ReadonlyArray<{ lado: Objetivo["lado"]; rotulo: string }>;

type Vista = "2.5d" | "plano";

function contagemPorTipo(objetivos: Objetivo[]): [string, number][] {
  const contagem = new Map<string, number>();
  for (const o of objetivos) contagem.set(o.tipo, (contagem.get(o.tipo) ?? 0) + 1);
  return [...contagem.entries()];
}

export function MapPage() {
  const objetivos = useData("/data/objetivos.json", objetivosSchema);
  const conteudo = useData("/data/objetivos_conteudo.json", conteudoSchema);
  const solos = useData("/data/roshan_solo.json", conteudoSchema);
  const { id } = useParams();
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const replayId = params.get("replay");
  const [ocultos, setOcultos] = useState<ReadonlySet<string>>(new Set());
  const [vista, setVista] = useState<Vista>("2.5d");

  if (objetivos.estado === "indisponivel") return <Indisponivel motivo={objetivos.motivo} />;
  if (objetivos.estado === "carregando") return <p>Carregando mapa…</p>;

  const todos = objetivos.dados;
  const aberto = id ? objetivoDaUrl(id, todos) : undefined;
  const textos = conteudo.estado === "ok" ? conteudo.dados : [];
  const visiveis = todos.filter((o) => !ocultos.has(o.tipo));
  const nomes = new Map(todos.map((o) => [o.id, o.nome]));
  // Leva a query junto para abrir um objetivo sem perder o replay escolhido.
  const abrir = (alvo: string) => navigate({ pathname: `/mapa/${alvo}`, search: params.toString() });
  const alternarCamada = (tipo: string) => setOcultos((atual) => {
    const proximo = new Set(atual);
    if (!proximo.delete(tipo)) proximo.add(tipo);
    return proximo;
  });

  return (
    <section className="pagina-mapa">
      <aside className="mapa-lateral">
        <div className="grupo">
          <h2 className="sobretitulo">Camadas</h2>
          <SeletorReplay valor={replayId} onMudar={(novo) => setParams(novo ? { replay: novo } : {})} />
          {contagemPorTipo(todos).map(([tipo, n]) => (
            <button key={tipo} className="camada" aria-pressed={!ocultos.has(tipo)} onClick={() => alternarCamada(tipo)}>
              <span className="camada-nome">{ROTULO_TIPO[tipo] ?? tipo}</span>
              <span className="numero">{n}</span>
            </button>
          ))}
        </div>
        <div className="grupo">
          <h2 className="sobretitulo">Vista</h2>
          <div className="alternador">
            <button aria-pressed={vista === "2.5d"} onClick={() => setVista("2.5d")}>2.5D</button>
            <button aria-pressed={vista === "plano"} onClick={() => setVista("plano")}>Plano</button>
          </div>
        </div>
        <div className="grupo legenda">
          <h2 className="sobretitulo">Legenda</h2>
          {LEGENDA.map(({ lado, rotulo }) => <span key={lado}><i className={`ponto lado-${lado}`} />{rotulo}</span>)}
        </div>
      </aside>
      <div className="mapa-centro">
        <div className="mapa-titulo">
          <span className="sobretitulo">Mapa</span>
          <span className="mapa-chamada">Clique num objetivo</span>
        </div>
        <MapaComCamadas replayId={replayId} objetivos={visiveis} selecionado={aberto?.id ?? null} onSelecionar={abrir} forcarPlano={vista === "plano"} />
        <nav className="atalhos pilulas" aria-label="Atalhos do mapa">
          {ATALHOS.map((tipo) => {
            const primeiro = todos.find((o) => o.tipo === tipo);
            if (!primeiro) return null;
            return <button key={tipo} className="pilula" aria-pressed={aberto?.tipo === tipo} onClick={() => abrir(primeiro.id)}>{ROTULO_TIPO[tipo]}</button>;
          })}
        </nav>
      </div>
      {id && !aberto && <p role="alert">Objetivo {id} não encontrado.</p>}
      {aberto
        ? <ObjectivePanel key={aberto.id} objetivo={aberto} conteudo={textos} nomes={nomes} unidade={<UnidadeDoObjetivo objetivo={aberto} />} onFechar={() => navigate({ pathname: "/", search: params.toString() })}>
            {aberto.tipo === "roshan" && <SoloRoshan solos={dadosOuVazio(solos)} />}
          </ObjectivePanel>
        : <aside className="painel painel-vazio"><p>Toque num marcador para ver o objetivo.</p></aside>}
    </section>
  );
}
