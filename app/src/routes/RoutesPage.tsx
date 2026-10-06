import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import type { Indice, Objetivo, RotaResumo } from "../data/schemas";
import { indiceSchema, objetivosSchema, rotaSchema, rotasResumoSchema } from "../data/schemas";
import { Indisponivel, useData } from "../data/useData";
import { MapView } from "../map/MapView";
import { filtrarRotas, rotaDaCelula, type Lado } from "./filtros";
import { RouteDetail } from "./RouteDetail";

const LADOS = [
  { id: "radiant", rotulo: "Radiant" },
  { id: "dire", rotulo: "Dire" },
] as const satisfies ReadonlyArray<{ id: Lado; rotulo: string }>;
const MINUTOS = Array.from({ length: 27 }, (_, i) => i + 4);
const POR_PAGINA = 20;
const ID_DO_MAPA = "rota-aberta";

export function RoutesPage() {
  const rotas = useData("/data/rotas_resumo.json", rotasResumoSchema);
  const indice = useData("/data/indice.json", indiceSchema);
  const objetivos = useData("/data/objetivos.json", objetivosSchema);
  for (const d of [rotas, indice, objetivos]) if (d.estado === "indisponivel") return <Indisponivel motivo={d.motivo} />;
  if (rotas.estado !== "ok" || indice.estado !== "ok" || objetivos.estado !== "ok") return <p>Carregando rotas…</p>;
  return <Rotas rotas={rotas.dados} indice={indice.dados} objetivos={objetivos.dados} />;
}

type Selecao = { lado?: Lado; minuto?: number; situacao?: string };
type RotasProps = { rotas: RotaResumo[]; indice: Indice; objetivos: Objetivo[] };

// No celular o mapa fica abaixo dos seletores: depois do terceiro toque a tela desce até ele.
const mostrarOMapa = () => document.getElementById(ID_DO_MAPA)?.scrollIntoView({ block: "start" });
const ROTULO_DO_LADO: Record<Lado, string> = { radiant: "Radiant", dire: "Dire" };

function celulaDaSelecao(indice: Indice, { lado, minuto, situacao }: Selecao) {
  if (!lado || minuto === undefined || !situacao) return null;
  return rotaDaCelula(indice, lado, minuto, situacao);
}

const descreverSelecao = ({ lado, minuto, situacao }: Selecao) =>
  [lado && ROTULO_DO_LADO[lado], minuto !== undefined && `minuto ${minuto}`, situacao].filter(Boolean).join(", ");

const rotuloDaContagem = (n: number) => (n === 1 ? "1 rota" : `${n.toLocaleString("pt-BR")} rotas`);

function Rotas({ rotas, indice, objetivos }: RotasProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selecao, setSelecao] = useState<Selecao>({});
  const [texto, setTexto] = useState("");
  const [limite, setLimite] = useState(POR_PAGINA);
  const rolarQuandoAbrir = useRef(false);
  const irPara = (destino: string) => navigate(`/rotas/${destino}`);
  const temLadoEMinuto = selecao.lado !== undefined && selecao.minuto !== undefined;
  const celula = celulaDaSelecao(indice, selecao);
  // Com a situação marcada, a lista mostra a rota da célula; sem ela, as rotas do lado e da janela do minuto.
  const filtradas = filtrarRotas(rotas, celula ? { id: celula.id, texto } : { ...selecao, texto });

  // Com os três toques dados, a rota da célula abre no mapa; marcar ou trocar qualquer um deles reaplica.
  const filtrar = (nova: Selecao) => {
    setSelecao(nova);
    setLimite(POR_PAGINA);
    const destino = celulaDaSelecao(indice, nova)?.id;
    if (destino === undefined) return;
    // Célula sem rota: o mapa deixa de mostrar a rota anterior, que já não responde à pergunta.
    if (destino === null) {
      if (id) navigate("/rotas");
      return;
    }
    if (destino === id) return mostrarOMapa();
    rolarQuandoAbrir.current = true;
    irPara(destino);
  };
  const alternarSituacao = (coluna: string) =>
    filtrar({ ...selecao, situacao: coluna === selecao.situacao ? undefined : coluna });

  useEffect(() => {
    if (!id || !rolarQuandoAbrir.current) return;
    rolarQuandoAbrir.current = false;
    mostrarOMapa();
  }, [id]);

  return (
    <section className="rotas">
      {/* No desktop escolha e lista viram uma coluna que rola sozinha; abaixo disso o wrapper some (display: contents). */}
      <div className="rotas-filtros">
      <div className="rotas-escolha">
        <header className="rotas-topo">
          <span className="sobretitulo">GPS de farm · 3 toques</span>
          <h1>Que horas são e o que o jogo mostra?</h1>
        </header>
        <Seletor rotulo="1 · Lado" estilo="botoes" opcoes={LADOS.map((l) => ({ valor: l.id, rotulo: l.rotulo }))} atual={selecao.lado}
          onEscolher={(lado) => filtrar({ ...selecao, lado })} />
        <Seletor rotulo="2 · Minuto" estilo="minutos" opcoes={MINUTOS.map((m) => ({ valor: m, rotulo: String(m) }))} atual={selecao.minuto}
          onEscolher={(minuto) => filtrar({ ...selecao, minuto })} />
        <Seletor rotulo={temLadoEMinuto ? "3 · Situação" : "3 · Situação (escolha lado e minuto antes)"} estilo="pilulas" desligado={!temLadoEMinuto}
          opcoes={indice.colunas.map((c) => ({ valor: c, rotulo: c }))} atual={selecao.situacao} onEscolher={alternarSituacao} />
        {celula?.nota && <p className="nota-celula">{celula.nota}</p>}
      </div>
      <div className="rotas-lista">
        <label className="campo">
          <span>Procurar rota</span>
          <input type="search" value={texto} onChange={(e) => { setTexto(e.target.value); setLimite(POR_PAGINA); }} />
        </label>
        <p className="contagem" aria-live="polite">{rotuloDaContagem(filtradas.length)}</p>
        {filtradas.length === 0
          ? <p className="rotas-vazio">{selecao.situacao ? `Não há rota para ${descreverSelecao(selecao)}.` : "Nenhuma rota com esses filtros."}</p>
          : (
            <ul className="lista-rotas" aria-label="Rotas">
              {filtradas.slice(0, limite).map((r) => (
                <li key={r.id}>
                  <Link to={`/rotas/${r.id}`} aria-current={r.id === id ? "page" : undefined}><span className="numero">{r.id}</span> {r.pergunta}</Link>
                </li>
              ))}
            </ul>
          )}
        {filtradas.length > limite && (
          <button className="pilula" onClick={() => setLimite(limite + POR_PAGINA)}>Mostrar mais {Math.min(POR_PAGINA, filtradas.length - limite)}</button>
        )}
      </div>
      </div>
      <div className="rotas-mapa" id={ID_DO_MAPA}>
        {id ? <RotaAberta id={id} objetivos={objetivos} onIrPara={irPara} /> : <MapaSemRota objetivos={objetivos} />}
      </div>
    </section>
  );
}

function RotaAberta({ id, objetivos, onIrPara }: { id: string; objetivos: Objetivo[]; onIrPara: (id: string) => void }) {
  const rota = useData(`/data/rotas/${id}.json`, rotaSchema);
  if (rota.estado === "carregando") return <p className="rotas-dica">Carregando a rota…</p>;
  if (rota.estado === "indisponivel") return <p role="alert">Rota {id} não encontrada.</p>;
  return <RouteDetail rota={rota.dados} objetivos={objetivos} onIrPara={onIrPara} />;
}

function MapaSemRota({ objetivos }: { objetivos: Objetivo[] }) {
  const navigate = useNavigate();
  return (
    <>
      <p className="rotas-dica">Escolha lado, minuto e situação: a rota aparece aqui no mapa.</p>
      <div className="rota-mapa"><MapView objetivos={objetivos} onSelecionar={(alvo) => navigate(`/mapa/${alvo}`)} /></div>
    </>
  );
}

type Opcao<T> = { valor: T; rotulo: string };
type SeletorProps<T> = {
  rotulo: string; estilo: "botoes" | "minutos" | "pilulas"; opcoes: Opcao<T>[]; atual?: T;
  desligado?: boolean; onEscolher: (valor: T) => void;
};

function Seletor<T extends string | number>({ rotulo, estilo, opcoes, atual, desligado = false, onEscolher }: SeletorProps<T>) {
  return (
    <fieldset className={`seletor seletor-${estilo}`} disabled={desligado}>
      <legend>{rotulo}</legend>
      <div className="seletor-opcoes">
        {opcoes.map((o) => (
          <button key={o.valor} aria-pressed={o.valor === atual} onClick={() => onEscolher(o.valor)}>{o.rotulo}</button>
        ))}
      </div>
    </fieldset>
  );
}
