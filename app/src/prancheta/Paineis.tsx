// Painéis em volta do quadro: ferramentas e opções (esquerda), heróis e peças do mapa (direita) e a barra de passos.
import { useState, type FormEvent, type ReactNode } from "react";
import type { HeroiDoCatalogo } from "../data/schemas";
import { ATRIBUTOS_DE_HEROI } from "../data/schemas";
import { urlDoRetrato } from "../heroes/resumo";
import { CAMADAS, INFO_DAS_RUNAS, NOME_DA_ESTRUTURA, PecaEmMiniatura, ROTULO_DAS_CAMADAS, type Camadas } from "./Pecas";
import {
  CORES, ESPESSURAS, ESTRUTURAS, NOMES_DAS_CORES, NOMES_DAS_ESPESSURAS, RUNAS, type AlvoDaLimpeza, type Cor, type Espessura, type Peca, type Time,
} from "./quadro";
import type { Ferramenta, Opcoes } from "./Tabuleiro";

type TipoDaFerramenta = Exclude<Ferramenta["tipo"], "colocar">;

const FERRAMENTAS: ReadonlyArray<{ tipo: TipoDaFerramenta; nome: string; tecla: string; icone: ReactNode }> = [
  { tipo: "selecionar", nome: "Selecionar e mover", tecla: "V", icone: <path d="M6 3l13 8-6 1.5L10 19z" /> },
  { tipo: "livre", nome: "Caneta", tecla: "P", icone: <path d="M4 20l4-1L19 8l-3-3L5 16zM14 7l3 3" /> },
  { tipo: "linha", nome: "Linha tracejada", tecla: "L", icone: <path d="M4 20L20 4" strokeDasharray="3 3" /> },
  { tipo: "seta", nome: "Seta", tecla: "A", icone: <path d="M5 19L19 5M10 5h9v9" /> },
  { tipo: "circulo", nome: "Círculo", tecla: "C", icone: <circle cx={12} cy={12} r={8} /> },
  { tipo: "texto", nome: "Texto", tecla: "T", icone: <path d="M5 5h14M12 5v14M9 19h6" /> },
  { tipo: "borracha", nome: "Borracha", tecla: "E", icone: <path d="M9 20h11M4 15l9-9 6 6-7 8H9z" /> },
];
export const TECLA_DA_FERRAMENTA: Readonly<Record<string, TipoDaFerramenta>> = Object.fromEntries(FERRAMENTAS.map((f) => [f.tecla.toLowerCase(), f.tipo]));

const NOME_DA_ESPESSURA: Readonly<Record<Espessura, string>> = { fina: "Fina", media: "Média", grossa: "Grossa" };
const NOME_DA_COR: Readonly<Record<Cor, string>> = { ouro: "Ouro", branco: "Branco", vermelho: "Vermelho", verde: "Verde", azul: "Azul", roxo: "Roxo", rosa: "Rosa" };
const NOME_DO_ATRIBUTO: Readonly<Record<(typeof ATRIBUTOS_DE_HEROI)[number], string>> = { str: "Força", agi: "Agilidade", int: "Inteligência", all: "Universal" };
const LIMPEZAS: ReadonlyArray<{ alvo: AlvoDaLimpeza; nome: string }> = [
  { alvo: "tracos", nome: "Traços" }, { alvo: "icones", nome: "Ícones" }, { alvo: "tudo", nome: "Tudo" },
];

export function Icone({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

export function BotaoDeIcone({ rotulo, onClick, pressionado, desligado, children }: { rotulo: string; onClick: () => void; pressionado?: boolean; desligado?: boolean; children: ReactNode }) {
  return (
    <button type="button" className="pr-botao-icone" aria-label={rotulo} title={rotulo} aria-pressed={pressionado} disabled={desligado} onClick={onClick}>
      <Icone>{children}</Icone>
    </button>
  );
}

type PropsDasFerramentas = Readonly<{
  ferramenta: Ferramenta; onFerramenta: (f: Ferramenta) => void;
  podeDesfazer: boolean; podeRefazer: boolean; onDesfazer: () => void; onRefazer: () => void;
  onZoom: (fator: number) => void; onTelaCheia: () => void;
}>;

export function BarraDeFerramentas(p: PropsDasFerramentas) {
  return (
    <div className="pr-ferramentas" role="toolbar" aria-label="Ferramentas">
      {FERRAMENTAS.map((f) => (
        <BotaoDeIcone key={f.tipo} rotulo={`${f.nome} (${f.tecla})`} pressionado={p.ferramenta.tipo === f.tipo} onClick={() => p.onFerramenta({ tipo: f.tipo })}>{f.icone}</BotaoDeIcone>
      ))}
      <span className="pr-separador" aria-hidden="true" />
      <BotaoDeIcone rotulo="Desfazer (Ctrl+Z)" desligado={!p.podeDesfazer} onClick={p.onDesfazer}><path d="M9 6L4 11l5 5M4 11h10a6 6 0 010 12" /></BotaoDeIcone>
      <BotaoDeIcone rotulo="Refazer (Ctrl+Y)" desligado={!p.podeRefazer} onClick={p.onRefazer}><path d="M15 6l5 5-5 5M20 11H10a6 6 0 000 12" /></BotaoDeIcone>
      <BotaoDeIcone rotulo="Aproximar (+)" onClick={() => p.onZoom(1.5)}><circle cx={11} cy={11} r={7} /><path d="M21 21l-5-5M8 11h6M11 8v6" /></BotaoDeIcone>
      <BotaoDeIcone rotulo="Afastar (-)" onClick={() => p.onZoom(1 / 1.5)}><circle cx={11} cy={11} r={7} /><path d="M21 21l-5-5M8 11h6" /></BotaoDeIcone>
      <BotaoDeIcone rotulo="Tela cheia (F)" onClick={p.onTelaCheia}><path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" /></BotaoDeIcone>
    </div>
  );
}

type PropsDasOpcoes = Readonly<{
  cor: Cor; onCor: (c: Cor) => void; espessura: Espessura; onEspessura: (e: Espessura) => void;
  onLimpar: (alvo: AlvoDaLimpeza) => void;
  camadas: Camadas; onCamada: (c: keyof Camadas, ligada: boolean) => void; avisoDasWards: string | null;
  opcoes: Opcoes; onOpcoes: (o: Opcoes) => void;
  lance: ReactNode;
}>;

export function PainelDeOpcoes(p: PropsDasOpcoes) {
  return (
    <div className="pr-opcoes">
      <fieldset className="pr-grupo">
        <legend>Cor</legend>
        <div className="pr-cores">
          {NOMES_DAS_CORES.map((c) => (
            <button key={c} type="button" className="pr-cor" style={{ background: CORES[c] }} aria-label={`Cor ${NOME_DA_COR[c]}`} title={NOME_DA_COR[c]}
              aria-pressed={p.cor === c} onClick={() => p.onCor(c)} />
          ))}
        </div>
      </fieldset>
      <fieldset className="pr-grupo">
        <legend>Espessura</legend>
        <div className="pr-linha-de-botoes">
          {NOMES_DAS_ESPESSURAS.map((e) => (
            <button key={e} type="button" className="pr-espessura" aria-label={`Espessura ${NOME_DA_ESPESSURA[e]}`} title={NOME_DA_ESPESSURA[e]} aria-pressed={p.espessura === e} onClick={() => p.onEspessura(e)}>
              <span style={{ height: ESPESSURAS[e] / 1.6 }} />
            </button>
          ))}
        </div>
      </fieldset>
      <fieldset className="pr-grupo">
        <legend>Limpar o passo</legend>
        <div className="pr-linha-de-botoes">
          {LIMPEZAS.map((l) => <button key={l.alvo} type="button" aria-label={`Limpar ${l.nome.toLowerCase()} do passo`} onClick={() => p.onLimpar(l.alvo)}>{l.nome}</button>)}
        </div>
      </fieldset>
      <fieldset className="pr-grupo">
        <legend>Camadas do mapa</legend>
        {CAMADAS.map((c) => (
          <label key={c} className="pr-marcar">
            <input type="checkbox" checked={p.camadas[c]} onChange={(e) => p.onCamada(c, e.currentTarget.checked)} />
            {ROTULO_DAS_CAMADAS[c]}
          </label>
        ))}
        {p.avisoDasWards && <p className="pr-dica" role="status">{p.avisoDasWards}</p>}
      </fieldset>
      <fieldset className="pr-grupo">
        <legend>Opções</legend>
        <label className="pr-marcar">
          <input type="checkbox" checked={p.opcoes.raioDasWards} onChange={(e) => p.onOpcoes({ ...p.opcoes, raioDasWards: e.currentTarget.checked })} />
          Visão das wards (obs 1600, sentry 900)
        </label>
        <label className="pr-marcar">
          <input type="checkbox" checked={p.opcoes.travarIcones} onChange={(e) => p.onOpcoes({ ...p.opcoes, travarIcones: e.currentTarget.checked })} />
          Travar ícones
        </label>
        <label className="pr-faixa">
          Tamanho dos heróis
          <input type="range" min={0.6} max={1.6} step={0.1} value={p.opcoes.escala} onChange={(e) => p.onOpcoes({ ...p.opcoes, escala: Number(e.currentTarget.value) })} />
        </label>
      </fieldset>
      {p.lance}
    </div>
  );
}

type EstadoDoLance = Readonly<{ estado: "parado" | "carregando" | "ok" | "erro"; texto: string }>;

export function FormularioDoLance({ estado, onCarregar }: { estado: EstadoDoLance; onCarregar: (partida: string, tempo: string) => void }) {
  const enviar = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dados = new FormData(e.currentTarget);
    onCarregar(String(dados.get("partida") ?? ""), String(dados.get("tempo") ?? ""));
  };
  return (
    <form className="pr-grupo pr-lance" onSubmit={enviar}>
      <h2>Carregar um lance</h2>
      <p className="pr-dica">Os 10 heróis e as wards de uma partida com replay, no segundo que você escolher.</p>
      <label className="campo">Partida<input name="partida" inputMode="numeric" pattern="[0-9]{1,12}" required placeholder="9046905170" /></label>
      <label className="campo">Tempo (min:seg)<input name="tempo" required placeholder="28:33" /></label>
      <button type="submit" disabled={estado.estado === "carregando"}>{estado.estado === "carregando" ? "Lendo o replay…" : "Carregar no passo"}</button>
      {estado.texto && <p className={`pr-dica${estado.estado === "erro" ? " indisponivel" : ""}`} role="status">{estado.texto}</p>}
    </form>
  );
}

type PropsDasPecas = Readonly<{
  herois: readonly HeroiDoCatalogo[];
  aba: "herois" | "mapa"; onAba: (a: "herois" | "mapa") => void;
  time: Time; onTime: (t: Time) => void;
  ferramenta: Ferramenta; onPeca: (p: Peca) => void;
}>;

const mesmaPeca = (f: Ferramenta, peca: Peca) => f.tipo === "colocar" && JSON.stringify(f.peca) === JSON.stringify(peca);
const normalizar = (texto: string) => texto.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

export function PainelDePecas(p: PropsDasPecas) {
  return (
    <div className="pr-pecas">
      <div className="abas-pilula" role="tablist" aria-label="Peças">
        <button type="button" role="tab" aria-selected={p.aba === "herois"} onClick={() => p.onAba("herois")}>Heróis</button>
        <button type="button" role="tab" aria-selected={p.aba === "mapa"} onClick={() => p.onAba("mapa")}>Mapa</button>
      </div>
      <div className="pr-times" role="group" aria-label="Time das peças">
        {(["radiant", "dire"] as const).map((t) => (
          <button key={t} type="button" className={`lado-${t}`} aria-pressed={p.time === t} onClick={() => p.onTime(t)}>
            <span className="ponto" aria-hidden="true" />{t === "radiant" ? "Radiant" : "Dire"}
          </button>
        ))}
      </div>
      <p className="pr-dica">Escolha uma peça e clique no mapa. Ela fica escolhida até o Esc.</p>
      {p.aba === "herois" ? <GradeDeHerois {...p} /> : <PecasDoMapa {...p} />}
    </div>
  );
}

function GradeDeHerois({ herois, time, ferramenta, onPeca }: PropsDasPecas) {
  const [busca, setBusca] = useState("");
  const [atributo, setAtributo] = useState<(typeof ATRIBUTOS_DE_HEROI)[number] | null>(null);
  const termo = normalizar(busca.trim());
  const filtrados = herois.filter((h) => (!atributo || h.atributo === atributo) && (!termo || normalizar(h.nome).includes(termo)));
  return (
    <>
      <input type="search" aria-label="Buscar herói" placeholder="Buscar herói" value={busca} onChange={(e) => setBusca(e.currentTarget.value)} />
      <div className="pr-atributos" role="group" aria-label="Atributo">
        {ATRIBUTOS_DE_HEROI.map((a) => (
          <button key={a} type="button" aria-pressed={atributo === a} onClick={() => setAtributo((atual) => (atual === a ? null : a))}>{NOME_DO_ATRIBUTO[a]}</button>
        ))}
      </div>
      <ul className="pr-grade-herois">
        {filtrados.map((h) => {
          const peca: Peca = { tipo: "heroi", heroi: h.id, time };
          return (
            <li key={h.id}>
              <button type="button" aria-label={h.nome} title={h.nome} aria-pressed={mesmaPeca(ferramenta, peca)} onClick={() => onPeca(peca)}>
                <img src={urlDoRetrato(h.id)} alt="" width={64} height={36} loading="lazy" />
              </button>
            </li>
          );
        })}
      </ul>
      {filtrados.length === 0 && <p className="pr-dica">Nenhum herói com esse filtro.</p>}
    </>
  );
}

function PecasDoMapa({ time, ferramenta, onPeca }: PropsDasPecas) {
  const grupos: ReadonlyArray<{ titulo: string; pecas: ReadonlyArray<{ peca: Peca; nome: string }> }> = [
    { titulo: "Wards e courier", pecas: [
      { peca: { tipo: "observer", time }, nome: "Observer ward" },
      { peca: { tipo: "sentry", time }, nome: "Sentry ward" },
      { peca: { tipo: "courier", time }, nome: "Courier" },
    ] },
    { titulo: "Runas", pecas: RUNAS.map((runa) => ({ peca: { tipo: "runa", runa }, nome: `Runa: ${INFO_DAS_RUNAS[runa].nome}` })) },
    { titulo: "Estruturas", pecas: ESTRUTURAS.map((estrutura) => ({ peca: { tipo: "estrutura", estrutura, time }, nome: NOME_DA_ESTRUTURA[estrutura] })) },
  ];
  return (
    <>
      {grupos.map((g) => (
        <section key={g.titulo} className="pr-grupo">
          <h2>{g.titulo}</h2>
          <ul className="pr-grade-pecas">
            {g.pecas.map(({ peca, nome }) => (
              <li key={nome}>
                <button type="button" aria-label={nome} title={nome} aria-pressed={mesmaPeca(ferramenta, peca)} onClick={() => onPeca(peca)}>
                  <PecaEmMiniatura peca={peca} />
                  <span>{nome.replace("Runa: ", "")}</span>
                </button>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}
