import type { ReactNode } from "react";
import { Link } from "react-router";
import { heroisCatalogoSchema } from "../data/schemas";
import { dadosOuVazio, useData } from "../data/useData";
import {
  analiseSchema, blocoContra, caminhoDaAnalise, minutos, porcentagem, primeiraFrase, taxaDeVitoria,
  type Analise, type BlocoDeConfronto,
} from "./analise";
import { montarLinhaDoTempo, type Janela, type Marco } from "./linhaDoTempo";
import { urlDoItem, type Heroi } from "./modelo";

type HeroiDoPar = Pick<Heroi, "id" | "chave" | "nome">;
type Par = Readonly<{ meu: HeroiDoPar; inimigo: HeroiDoPar }>;

export type AnalisesDoPar = Readonly<{ minha: Analise | null; dele: Analise | null }>;
type ComAnalises = Par & Readonly<{ children: (analises: AnalisesDoPar) => ReactNode }>;

/**
 * Carrega a análise de pro dos dois heróis (arquivo pelo id do app, via catálogo) e entrega às seções que dependem
 * dela; herói sem arquivo chega como null, e as seções decidem o que mostrar sem o dado.
 */
export function ComAnalisesDoPar({ meu, inimigo, children }: ComAnalises) {
  const catalogo = useData("/data/herois_catalogo.json", heroisCatalogoSchema);
  if (catalogo.estado === "carregando") return <p>Carregando a análise de pro…</p>;
  const idDoApp = (h: HeroiDoPar) => dadosOuVazio(catalogo).find((c) => c.hero_id === h.id)?.id;
  return <AnalisesCarregadas idMeu={idDoApp(meu) ?? null} idDele={idDoApp(inimigo) ?? null}>{children}</AnalisesCarregadas>;
}

type Carregadas = Readonly<{ idMeu: string | null; idDele: string | null; children: ComAnalises["children"] }>;

function AnalisesCarregadas({ idMeu, idDele, children }: Carregadas) {
  // Sem id o caminho aponta pra um arquivo que não existe e cai em "indisponivel", que vira null abaixo.
  const minha = useData(caminhoDaAnalise(idMeu ?? "_sem_analise"), analiseSchema);
  const dele = useData(caminhoDaAnalise(idDele ?? "_sem_analise"), analiseSchema);
  if (minha.estado === "carregando" || dele.estado === "carregando") return <p>Carregando a análise de pro…</p>;
  return <>{children({ minha: minha.estado === "ok" ? minha.dados : null, dele: dele.estado === "ok" ? dele.dados : null })}</>;
}

/** Análise escrita de pro do par e a linha do tempo de power spike. */
export function AnaliseDePro({ meu, inimigo, minha, dele }: Analises) {
  return (
    <>
      <SecaoDaAnalise meu={meu} inimigo={inimigo} minha={minha} dele={dele} />
      <SecaoDaLinhaDoTempo meu={meu} inimigo={inimigo} minha={minha} dele={dele} />
    </>
  );
}

type Analises = Par & Readonly<{ minha: Analise; dele: Analise }>;

function SecaoDaAnalise({ meu, inimigo, minha, dele }: Analises) {
  const meuBloco = blocoContra(minha, inimigo.id);
  const blocoDele = blocoContra(dele, meu.id);
  return (
    <section className="cf-bloco" aria-labelledby="cf-pro">
      <h2 id="cf-pro">Análise de pro</h2>
      {meuBloco
        ? <BlocoView bloco={meuBloco} dono={meu.nome} outro={inimigo.nome} />
        : <SemAnalise meu={meu} inimigo={inimigo} analise={minha} />}
      {blocoDele && (
        <details className="cf-cartao cf-outro-lado">
          <summary><strong>Visto do lado dele</strong> <span className="cf-resumo">a análise do {inimigo.nome} contra o {meu.nome}</span></summary>
          <BlocoView bloco={blocoDele} dono={inimigo.nome} outro={meu.nome} />
        </details>
      )}
    </section>
  );
}

function SemAnalise({ meu, inimigo, analise }: { meu: HeroiDoPar; inimigo: HeroiDoPar; analise: Analise }) {
  const contra = analise.contra_inimigo[inimigo.chave];
  return (
    <>
      <p>
        Ainda não há texto de análise escrito para {meu.nome} contra {inimigo.nome}.
        {contra && ` Os números das ${contra.jogos.toLocaleString("pt-BR")} partidas pro do par (vitória, builds e itens) estão na seção "O que os pros de ${meu.nome} fazem contra ${inimigo.nome}", acima.`}
      </p>
      <p>Análise escrita do {meu.nome} existe contra:</p>
      <ul className="cf-oponentes">
        {analise.confrontos.map(({ oponente }) => (
          <li key={oponente.id}><Link to={`/confronto/${meu.chave}/${oponente.nome_interno}`}>{oponente.nome}</Link></li>
        ))}
      </ul>
    </>
  );
}

type Campo = Readonly<{ titulo: string; texto: string | null }>;

function BlocoView({ bloco, dono, outro }: { bloco: BlocoDeConfronto; dono: string; outro: string }) {
  const taxa = taxaDeVitoria(bloco);
  const campos: readonly Campo[] = [
    { titulo: "Janelas", texto: bloco.janelas },
    { titulo: `O que o ${outro} faz`, texto: bloco.ele_faz },
    { titulo: `O que o ${dono} faz`, texto: bloco.voce_faz },
    { titulo: "Itens que viram", texto: bloco.itens },
    { titulo: "Como jogar", texto: bloco.como_jogar },
  ];
  return (
    <div className="cf-analise">
      <div className={`cf-placar ${taxa >= 0.5 ? "cf-placar-sua" : "cf-placar-dele"}`}>
        <p className="cf-placar-numero numero">{porcentagem(taxa)}</p>
        <p>de vitória do {dono} em {bloco.jogos.toLocaleString("pt-BR")} partidas pro contra o {outro}.</p>
        <p className="cf-placar-texto">{bloco.placar}</p>
      </div>
      <p><b>Por que importa:</b> {bloco.por_que_importa}</p>
      <ul className="cf-lista">
        {campos.flatMap(({ titulo, texto }) => (texto ? [<li key={titulo}><CampoView titulo={titulo} texto={texto} /></li>] : []))}
      </ul>
      {bloco.fontes.length > 0 && <small className="cf-fonte">Fontes: {bloco.fontes.join("; ")}.</small>}
    </div>
  );
}

function CampoView({ titulo, texto }: { titulo: string; texto: string }) {
  const previa = primeiraFrase(texto);
  if (previa === texto) return <p className="cf-campo"><b>{titulo}:</b> {texto}</p>;
  return (
    <details className="cf-campo">
      <summary><b>{titulo}:</b> {previa} <span className="cf-mais">ver mais</span></summary>
      <p>{texto}</p>
    </details>
  );
}

function SecaoDaLinhaDoTempo({ meu, inimigo, minha, dele }: Analises) {
  const linha = montarLinhaDoTempo(minha.spikes, dele.spikes);
  const nomeDo = { meu: meu.nome, dele: inimigo.nome } as const;
  return (
    <section className="cf-bloco" aria-labelledby="cf-spikes">
      <h2 id="cf-spikes">Linha do tempo de power spike</h2>
      <p className="cf-sub">Itens fechados que os pros compram com cada herói, no minuto mediano das partidas de liga.</p>
      {linha.janela && <TextoDaJanela janela={linha.janela} nomeDo={nomeDo} />}
      <div className="cf-tl" role="group" aria-label="Itens no eixo de minutos">
        <div className="cf-tl-pista">
          {linha.janela && <FaixaDaJanela janela={linha.janela} fim={linha.fim} />}
          <Trilho marcos={linha.meus} lado="meu" nome={meu.nome} />
          <ol className="cf-tl-eixo" aria-hidden="true">
            {linha.marcas.map((m) => <li key={m} style={{ left: `${(100 * m) / linha.fim}%` }}>{m}</li>)}
          </ol>
          <Trilho marcos={linha.dele} lado="dele" nome={inimigo.nome} />
        </div>
      </div>
      <small className="cf-fonte">
        Fonte: Partidas pro 7.40-7.41 (OpenDota), {minha.jogos_pro.toLocaleString("pt-BR")} jogos do {meu.nome} e {dele.jogos_pro.toLocaleString("pt-BR")} do {inimigo.nome}.
        Entra item comprado em pelo menos 15% das partidas; componente e consumível ficam de fora.
      </small>
    </section>
  );
}

/** Altura de um andar de ícones (ícone, minuto e folga), em px. */
const ANDAR_PX = 52;

function Trilho({ marcos, lado, nome }: { marcos: readonly Marco[]; lado: Janela["dono"]; nome: string }) {
  const andares = Math.max(1, ...marcos.map((m) => m.linha + 1));
  // O meu cresce pra cima a partir do eixo; o dele, pra baixo.
  const borda = lado === "meu" ? "bottom" : "top";
  return (
    <div className={`cf-tl-trilho cf-tl-${lado}`}>
      <span className="cf-tl-nome">{nome}</span>
      <ol aria-label={`Itens do ${nome}`} style={{ height: andares * ANDAR_PX }}>
        {marcos.map((m) => (
          <li key={m.item} className={m.chave ? "cf-tl-item cf-tl-chave" : "cf-tl-item"} style={{ left: `${m.posicao}%`, [borda]: m.linha * ANDAR_PX }}
            title={`${m.nome}: minuto ${minutos(m.minuto)} (${m.n.toLocaleString("pt-BR")} partidas)`}>
            <img src={urlDoItem(m.item)} alt={m.nome} width={32} height={24} loading="lazy" />
            <span className="numero">{minutos(m.minuto)}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function FaixaDaJanela({ janela, fim }: { janela: Janela; fim: number }) {
  const estilo = { left: `${(100 * janela.de) / fim}%`, width: `${(100 * (janela.ate - janela.de)) / fim}%` };
  return <span className={`cf-tl-janela cf-tl-janela-${janela.dono}`} style={estilo} aria-hidden="true" />;
}

function TextoDaJanela({ janela, nomeDo }: { janela: Janela; nomeDo: Readonly<Record<Janela["dono"], string>> }) {
  const outro = janela.dono === "meu" ? nomeDo.dele : nomeDo.meu;
  const ate = janela.falta
    ? `e o ${outro} só fecha o primeiro (${janela.falta.nome}) aos ${minutos(janela.falta.minuto)}`
    : `e o ${outro} não tem item-chave entre as compras frequentes dos pros`;
  return (
    <p className={`cf-tl-legenda cf-tl-legenda-${janela.dono}`}>
      <b>Janela do {nomeDo[janela.dono]}:</b> {janela.item.nome} aos {minutos(janela.de)} min, {ate}.
    </p>
  );
}
