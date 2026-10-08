import { useState, type ReactNode } from "react";
import { Link } from "react-router";
import { indiceSchema, minutoComoTexto, rotaSchema, rotasResumoSchema, type ConteudoItem, type Fase, type Heroi, type Objetivo } from "../data/schemas";
import { Indisponivel, useData } from "../data/useData";
import { IconeOuIniciais } from "../live/partida/BuildDaPartida";
import { ListaPassos } from "../routes/RouteDetail";
import type { Lado } from "../routes/filtros";
import { MapView } from "../map/MapView";
import { objetivosDosPassos, variacoesDaFase } from "./fases";
import { destaquesDoHeroi, dividirResumo, itensCoreNaLinhaDoTempo, urlDoRetrato } from "./resumo";

const urlDoIconeDeItem = (item: string) => `/data/retratos/itens/${item}.webp`;

const ABAS = { guia: "Guia", spikes: "Power spikes", rotas: "Rotas", pros: "Pros", roshan: "Roshan" } as const;
type Aba = keyof typeof ABAS;

type Props = { heroi: Heroi; objetivos: Objetivo[]; solos: ConteudoItem[]; roshan?: ReactNode };

const semAcao = () => {};
const numero = (n: number) => n.toLocaleString("pt-BR");

const Lista = ({ itens }: { itens: readonly string[] }) => <ul>{itens.map((i) => <li key={i}>{i}</li>)}</ul>;

type SecaoProps = { titulo: string; aberta?: boolean; contagem?: number; children: ReactNode };

/** Seção fechada sem contagem no título é indistinguível de uma seção vazia; por isso o número no resumo. */
function Secao({ titulo, aberta = false, contagem, children }: SecaoProps) {
  return (
    <details className="recolhivel" open={aberta}>
      <summary><h3 className="sobretitulo">{titulo}{contagem !== undefined && ` (${contagem})`}</h3></summary>
      {children}
    </details>
  );
}

function Topo({ heroi }: { heroi: Heroi }) {
  const { abertura, resto } = dividirResumo(heroi.resumo);
  return (
    <header className="ficha-topo">
      <img className="retrato" src={urlDoRetrato(heroi.id)} alt="" width={128} height={72} />
      <div><span className="sobretitulo">Herói</span><h1>{heroi.nome}</h1></div>
      <p className="abertura">{abertura}</p>
      <dl className="destaques">
        {destaquesDoHeroi(heroi).map(([rotulo, valor]) => <div key={rotulo}><dt>{rotulo}</dt><dd>{valor}</dd></div>)}
      </dl>
      {resto && <details className="recolhivel"><summary>Ler o resumo completo</summary><p>{resto}</p></details>}
    </header>
  );
}

function Fontes({ heroi }: { heroi: Heroi }) {
  return (
    <details className="recolhivel fonte">
      <summary>Fontes e confiança</summary>
      <p>Patch {heroi.patch}. Confiança: {heroi.confianca}. Fontes: {heroi.fontes.join("; ")}</p>
    </details>
  );
}

/** Um item da build: ícone, nome curto e minuto num resumo escaneável; a estatística completa fica atrás de "ver detalhe". */
function ItemDaBuild({ item }: { item: Heroi["guia"]["itens_core"][number] }) {
  return (
    <li>
      <IconeOuIniciais src={urlDoIconeDeItem(item.item)} nome={item.nome_curto} classe="build-icone" />
      <div>
        <strong>{item.nome_curto}</strong>{" "}
        <span className="tempo">{item.minuto_alvo === null ? "sem minuto" : minutoComoTexto(item.minuto_alvo)}</span>
        <details className="recolhivel">
          <summary>Ver detalhe (tempo dos pros, D2PT e sua média)</summary>
          <p>{item.nome}</p>
          <p>{item.base}</p>
        </details>
      </div>
    </li>
  );
}

function Situacional({ item }: { item: Heroi["guia"]["itens_situacionais"][number] }) {
  return (
    <li>
      <IconeOuIniciais src={urlDoIconeDeItem(item.item)} nome={item.nome} classe="build-icone" />
      <div><strong>{item.nome}</strong><p>{item.quando}</p></div>
    </li>
  );
}

function AbaGuia({ heroi }: { heroi: Heroi }) {
  const { guia } = heroi;
  const itensDaBuild = itensCoreNaLinhaDoTempo(guia.itens_core);
  return (
    <div className="painel-texto">
      <Secao titulo="Quando pegar" aberta contagem={guia.bom_quando.length}><Lista itens={guia.bom_quando} /></Secao>
      <Secao titulo="Quando evitar" aberta contagem={guia.evitar_quando.length}>
        <Lista itens={guia.evitar_quando} />
        <h4 className="sobretitulo">Momento do draft</h4>
        <p>{guia.momento_do_draft}</p>
      </Secao>
      <Secao titulo="Lane">
        <p>{guia.lane.objetivo}</p>
        <h4 className="sobretitulo">Itens iniciais</h4>
        <Lista itens={guia.lane.itens_iniciais} />
        <h4 className="sobretitulo">Dicas de lane</h4>
        <Lista itens={guia.lane.dicas} />
      </Secao>
      <Secao titulo="Quando começar a farmar a selva"><p>{guia.condicao_para_farmar.explicacao}</p></Secao>
      <Secao titulo="Itens" aberta contagem={itensDaBuild.length}>
        <p className="painel-nota">Linha do tempo da build, do item mais cedo ao mais tarde. O minuto é o alvo observado nos replays dos pros.</p>
        <ol className="cartoes-texto">{itensDaBuild.map((i) => <ItemDaBuild key={i.item} item={i} />)}</ol>
      </Secao>
      <Secao titulo="Situacionais" contagem={guia.itens_situacionais.length}>
        <p className="painel-nota">Contra quem ou quando pegar cada item em vez da build padrão.</p>
        <ul className="cartoes-texto">{guia.itens_situacionais.map((i) => <Situacional key={i.item} item={i} />)}</ul>
      </Secao>
      <Secao titulo="Habilidades">
        <ol>{guia.skill_build.map((s) => <li key={`${s.nivel}-${s.skill}`}>Nível {s.nivel}: {s.skill}</li>)}</ol>
      </Secao>
      <Secao titulo="Depois dos 20 min"><Lista itens={guia.depois_dos_20} /></Secao>
      <Secao titulo="Erros comuns" contagem={guia.erros_comuns.length}><Lista itens={guia.erros_comuns} /></Secao>
    </div>
  );
}

function AbaSpikes({ heroi }: { heroi: Heroi }) {
  return (
    <>
      <ol className="linha-do-tempo">
        {heroi.power_spikes.map((s) => (
          <li key={`${s.faixa}-${s.marco}`}>
            <span className="tempo">{s.faixa}</span>
            <div><strong>{s.marco}</strong><p>{s.o_que_fazer}</p></div>
          </li>
        ))}
      </ol>
      {heroi.por_minuto
        ? (
          <div className="tabela-rolavel">
            <table>
              <thead><tr><th>Min</th><th>Nível</th><th>Habilidade</th><th>Item</th><th>Próximo marco</th><th>Objetivo de farm</th></tr></thead>
              <tbody>{heroi.por_minuto.map((m) => (
                <tr key={m.minuto}>
                  <td>{m.minuto}</td><td>{m.nivel}</td><td>{m.habilidade}</td><td>{m.item}</td>
                  <td>{m.proximo_spike}</td><td>{m.objetivo_farm}</td>
                </tr>
              ))}</tbody>
            </table>
          </div>
        )
        : <p className="painel-nota">Tabela minuto a minuto ainda não disponível para este herói.</p>}
    </>
  );
}

const PLANO_DO_GUIA = "guia";

function AbaRotas({ heroi, objetivos }: { heroi: Heroi; objetivos: Objetivo[] }) {
  const [lado, setLado] = useState<Lado>("radiant");
  const [indice, setIndice] = useState(0);
  const [variacao, setVariacao] = useState(PLANO_DO_GUIA);
  const fases = heroi.rotas[lado];
  const fase = fases[indice] ?? fases[0] ?? null;
  const trocarLado = (novo: Lado) => { setLado(novo); setIndice(0); setVariacao(PLANO_DO_GUIA); };
  const trocarFase = (nova: number) => { setIndice(nova); setVariacao(PLANO_DO_GUIA); };
  return (
    <div className="ficha-rotas">
      <div role="group" aria-label="Lado" className="seletor-opcoes seletor-botoes">
        {(["radiant", "dire"] as const).map((l) => (
          <button key={l} aria-pressed={lado === l} onClick={() => trocarLado(l)}>{l === "radiant" ? "Radiant" : "Dire"}</button>
        ))}
      </div>
      <div role="group" aria-label="Fase" className="seletor-opcoes seletor-pilulas">
        {fases.map((f, i) => <button key={f.janela} aria-pressed={i === indice} onClick={() => trocarFase(i)}>{f.janela}</button>)}
      </div>
      {fase && (
        <>
          <Variacoes fase={fase} lado={lado} heroi={heroi.id} atual={variacao} onEscolher={setVariacao} />
          {variacao === PLANO_DO_GUIA
            ? <PlanoDoGuia fase={fase} objetivos={objetivos} />
            : <RotaDaVariacao key={variacao} id={variacao} objetivos={objetivos} />}
        </>
      )}
      <RotasRelacionadas ids={heroi.rotas_relacionadas} />
    </div>
  );
}

type VariacoesProps = { fase: Fase; lado: Lado; heroi: string; atual: string; onEscolher: (id: string) => void };

function Variacoes({ fase, lado, heroi, atual, onEscolher }: VariacoesProps) {
  const indice = useData("/data/indice.json", indiceSchema);
  const rotas = useData("/data/rotas_resumo.json", rotasResumoSchema);
  for (const d of [indice, rotas]) if (d.estado === "indisponivel") return <Indisponivel motivo={d.motivo} />;
  if (indice.estado !== "ok" || rotas.estado !== "ok") return null;
  const variacoes = variacoesDaFase(fase, lado, { indice: indice.dados, rotas: rotas.dados, heroi });
  return (
    <div role="group" aria-label="Se o jogo for assim" className="seletor-opcoes seletor-pilulas">
      <button aria-pressed={atual === PLANO_DO_GUIA} onClick={() => onEscolher(PLANO_DO_GUIA)}>Plano do guia</button>
      {variacoes.map((v) => <button key={v.id} aria-pressed={atual === v.id} onClick={() => onEscolher(v.id)}>{v.rotulo}</button>)}
    </div>
  );
}

function PlanoDoGuia({ fase, objetivos }: { fase: Fase; objetivos: Objetivo[] }) {
  return (
    <>
      <p className="abertura">{fase.objetivo}</p>
      <div className="rota-mapa"><MapView objetivos={objetivosDosPassos(fase.passos, objetivos)} rota={fase} onSelecionar={semAcao} /></div>
      <ListaPassos passos={fase.passos} />
    </>
  );
}

function RotaDaVariacao({ id, objetivos }: { id: string; objetivos: Objetivo[] }) {
  const rota = useData(`/data/rotas/${id}.json`, rotaSchema);
  if (rota.estado === "carregando") return <p>Carregando a rota…</p>;
  if (rota.estado === "indisponivel") return <Indisponivel motivo={rota.motivo} />;
  const { pergunta, passos, fuga } = rota.dados;
  return (
    <>
      <p className="abertura">{pergunta} <Link to={`/rotas/${id}`}>Abrir em Rotas</Link></p>
      <div className="rota-mapa"><MapView objetivos={objetivosDosPassos(passos, objetivos)} rota={rota.dados} onSelecionar={semAcao} /></div>
      <ListaPassos passos={passos} fuga={fuga} />
    </>
  );
}

function RotasRelacionadas({ ids }: { ids: readonly string[] }) {
  if (ids.length === 0) return null;
  return (
    <details className="recolhivel">
      <summary>Rotas do PDF 06 que citam este herói ({ids.length})</summary>
      <ul className="pilulas">{ids.map((id) => <li key={id}><Link className="pilula" to={`/rotas/${id}`}>{id}</Link></li>)}</ul>
    </details>
  );
}

function AbaPros({ heroi }: { heroi: Heroi }) {
  return (
    <>
      <div className="tabela-rolavel">
        <table>
          <thead><tr><th>Jogador</th><th>Jogos</th><th>Vitórias</th><th>LH aos 10</th></tr></thead>
          <tbody>{heroi.pros.linhas.map((l) => (
            <tr key={l.jogador}>
              <td>{l.jogador}</td><td>{l.jogos}</td><td>{l.vitorias ?? "sem dado"}</td>
              <td>{l.lh10 === null ? "sem dado" : numero(l.lh10)}</td>
            </tr>
          ))}</tbody>
        </table>
      </div>
      {heroi.pros.leitura && <p>{heroi.pros.leitura}</p>}
    </>
  );
}

export function FichaHeroi({ heroi, objetivos, solos, roshan }: Props) {
  const [aba, setAba] = useState<Aba>("guia");
  const conteudo: Record<Aba, () => ReactNode> = {
    guia: () => <AbaGuia heroi={heroi} />,
    spikes: () => <AbaSpikes heroi={heroi} />,
    rotas: () => <AbaRotas heroi={heroi} objetivos={objetivos} />,
    pros: () => <AbaPros heroi={heroi} />,
    roshan: () => (solos.length > 0 && roshan ? roshan : <p>Ainda não escrito.</p>),
  };
  return (
    <article className="ficha-heroi">
      <Topo heroi={heroi} />
      <div role="tablist" className="abas-pilula">
        {(Object.keys(ABAS) as Aba[]).map((a) => (
          <button key={a} id={`aba-${a}`} role="tab" aria-selected={aba === a} aria-controls={`painel-${a}`} onClick={() => setAba(a)}>
            {ABAS[a]}
          </button>
        ))}
      </div>
      <div role="tabpanel" id={`painel-${aba}`} aria-labelledby={`aba-${aba}`}>{conteudo[aba]()}</div>
      <Fontes heroi={heroi} />
    </article>
  );
}
