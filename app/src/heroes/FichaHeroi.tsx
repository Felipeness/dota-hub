import { useState, type ReactNode } from "react";
import { Link } from "react-router";
import type { ConteudoItem, Heroi, Objetivo } from "../data/schemas";
import { MapView } from "../map/MapView";

const ABAS = { guia: "Guia", spikes: "Power spikes", rotas: "Rotas", pros: "Pros", roshan: "Roshan" } as const;
type Aba = keyof typeof ABAS;
type Lado = "radiant" | "dire";

type Props = { heroi: Heroi; objetivos: Objetivo[]; solos: ConteudoItem[]; roshan?: ReactNode };

const semAcao = () => {};
const numero = (n: number) => n.toLocaleString("pt-BR");

const Lista = ({ itens }: { itens: readonly string[] }) => <ul>{itens.map((i) => <li key={i}>{i}</li>)}</ul>;

function Secao({ titulo, children }: { titulo: string; children: ReactNode }) {
  return <section><h3 className="sobretitulo">{titulo}</h3>{children}</section>;
}

function AbaGuia({ heroi }: { heroi: Heroi }) {
  const { guia } = heroi;
  return (
    <div className="painel-texto">
      <Secao titulo="Quando pegar"><Lista itens={guia.bom_quando} /></Secao>
      <Secao titulo="Quando evitar"><Lista itens={guia.evitar_quando} /><p>{guia.momento_do_draft}</p></Secao>
      <Secao titulo="Lane"><p>{guia.lane.objetivo}</p><Lista itens={guia.lane.itens_iniciais} /><Lista itens={guia.lane.dicas} /></Secao>
      <Secao titulo="Quando começar a farmar a selva"><p>{guia.condicao_para_farmar.explicacao}</p></Secao>
      <Secao titulo="Itens">
        <ol>{guia.itens_core.map((i) => (
          <li key={i.nome}><strong>{i.nome}</strong>{i.minuto_alvo !== null && ` · ${numero(i.minuto_alvo)} min`}<small> {i.base}</small></li>
        ))}</ol>
      </Secao>
      <Secao titulo="Situacionais">
        <ul>{guia.itens_situacionais.map((i) => <li key={i.nome}><strong>{i.nome}</strong>: {i.quando}</li>)}</ul>
      </Secao>
      <Secao titulo="Habilidades">
        <ol>{guia.skill_build.map((s) => <li key={`${s.nivel}-${s.skill}`}>Nível {s.nivel}: {s.skill}</li>)}</ol>
      </Secao>
      <Secao titulo="Depois dos 20 min"><Lista itens={guia.depois_dos_20} /></Secao>
      <Secao titulo="Erros comuns"><Lista itens={guia.erros_comuns} /></Secao>
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
      {heroi.por_minuto && (
        <div className="tabela-rolavel">
          <table>
            <thead><tr><th>Min</th><th>Nível</th><th>Habilidade</th><th>Item</th><th>Objetivo de farm</th></tr></thead>
            <tbody>{heroi.por_minuto.map((m) => (
              <tr key={m.minuto}><td>{m.minuto}</td><td>{m.nivel}</td><td>{m.habilidade}</td><td>{m.item}</td><td>{m.objetivo_farm}</td></tr>
            ))}</tbody>
          </table>
        </div>
      )}
    </>
  );
}

function AbaRotas({ heroi, objetivos }: { heroi: Heroi; objetivos: Objetivo[] }) {
  const [lado, setLado] = useState<Lado>("radiant");
  const [indice, setIndice] = useState(0);
  const fases = heroi.rotas[lado];
  const fase = fases[indice] ?? fases[0] ?? null;
  const trocarLado = (novo: Lado) => { setLado(novo); setIndice(0); };
  return (
    <div className="ficha-rotas">
      <div role="group" aria-label="Lado" className="seletor-opcoes seletor-botoes">
        {(["radiant", "dire"] as const).map((l) => (
          <button key={l} aria-pressed={lado === l} onClick={() => trocarLado(l)}>{l === "radiant" ? "Radiant" : "Dire"}</button>
        ))}
      </div>
      <div role="group" aria-label="Fase" className="seletor-opcoes seletor-pilulas">
        {fases.map((f, i) => <button key={f.janela} aria-pressed={i === indice} onClick={() => setIndice(i)}>{f.janela}</button>)}
      </div>
      {fase && (
        <>
          <p>{fase.objetivo}</p>
          <div className="rota-mapa"><MapView objetivos={objetivos} rota={fase} onSelecionar={semAcao} /></div>
          <ol className="passos">{fase.passos.map((p) => (
            <li key={p.n}><span className="numero">{p.n}</span><div><strong>{p.rotulo}</strong> ({p.minuto}): {p.acao}</div></li>
          ))}</ol>
        </>
      )}
      {heroi.rotas_relacionadas.length > 0 && (
        <p>Rotas do PDF 06 para este herói: {heroi.rotas_relacionadas.map((id) => <Link key={id} to={`/rotas/${id}`}>{id} </Link>)}</p>
      )}
    </div>
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
      <header><span className="sobretitulo">Herói</span><h1>{heroi.nome}</h1><p>{heroi.resumo}</p></header>
      <div role="tablist" className="abas-pilula">
        {(Object.keys(ABAS) as Aba[]).map((a) => (
          <button key={a} role="tab" aria-selected={aba === a} onClick={() => setAba(a)}>{ABAS[a]}</button>
        ))}
      </div>
      <div role="tabpanel">{conteudo[aba]()}</div>
      <footer className="fonte">Patch {heroi.patch}. Confiança: {heroi.confianca} Fontes: {heroi.fontes.join("; ")}</footer>
    </article>
  );
}
