import type { CSSProperties } from "react";
import type { CorDesenho, FormaPino } from "../map/trilhas";
import { CAMADAS, COR_DESFECHO, type Camada, type FiltroJanela } from "./camadas";
import { leituraDaCamada } from "./leitura";
import type { MapaAtlas } from "./schemas";

type Simbolo =
  | { tipo: "pino"; forma: FormaPino; cor: CorDesenho; vazado?: boolean; conteudo?: string; rotulo: string }
  | { tipo: "seta"; cor: CorDesenho; rotulo: string }
  | { tipo: "trilha"; tracejada: boolean; rotulo: string }
  | { tipo: "mancha"; rotulo: string };

type Legenda = { titulo: string; simbolos: readonly Simbolo[]; comoLer: string };

const NEUTRO = COR_DESFECHO.neutro;

const LEGENDA: Record<Camada, Legenda> = {
  calor: {
    titulo: "Calor", simbolos: [{ tipo: "mancha", rotulo: "tempo dos heróis" }],
    comoLer: "Quanto mais forte o brilho, mais tempo o time passou ali. Não é resultado, é presença.",
  },
  zonas: {
    titulo: "Zonas", simbolos: [{ tipo: "pino", forma: "circulo", cor: NEUTRO, vazado: true, rotulo: "zona" }],
    comoLer: "Anel maior = mais tempo do time na zona. As principais trazem o nome ao lado.",
  },
  wards: {
    titulo: "Wards",
    simbolos: [
      { tipo: "pino", forma: "losango", cor: NEUTRO, rotulo: "observer" },
      { tipo: "pino", forma: "losango", cor: NEUTRO, vazado: true, rotulo: "sentry" },
    ],
    comoLer: "Losango cheio é observer, vazado é sentry; maior = mais wards por partida. Verde sobrevive, vermelho costuma ser destruída.",
  },
  smokes: {
    titulo: "Smokes",
    simbolos: [
      { tipo: "seta", cor: COR_DESFECHO.certo, rotulo: "kill ou objetivo" },
      { tipo: "seta", cor: COR_DESFECHO.errado, rotulo: "falhou" },
      { tipo: "seta", cor: NEUTRO, rotulo: "farm ou nada" },
    ],
    comoLer: "O ponto é onde o smoke foi usado, a ponta da seta é onde ele quebrou. Seta mais grossa = mais vezes.",
  },
  objetivos: {
    titulo: "Objetivos",
    simbolos: [
      { tipo: "pino", forma: "roshan", cor: "texto-2", rotulo: "Roshan" },
      { tipo: "pino", forma: "tormentor", cor: "texto-2", rotulo: "Tormentor" },
      { tipo: "pino", forma: "torre", cor: "texto-2", rotulo: "torre" },
    ],
    comoLer: "Clique num ícone: o mapa traça o preparo (wards e smokes) e o painel mostra a linha do tempo até o objetivo.",
  },
  lutas: {
    titulo: "Lutas",
    simbolos: [
      { tipo: "pino", forma: "circulo", cor: COR_DESFECHO.certo, conteudo: "%", rotulo: "vence" },
      { tipo: "pino", forma: "circulo", cor: COR_DESFECHO.errado, conteudo: "%", rotulo: "perde" },
    ],
    comoLer: "O número é a % de lutas vencidas naquele lugar; círculo maior = mais lutas. Cinza fica perto de 50%.",
  },
  farm: {
    titulo: "Farm",
    simbolos: [
      { tipo: "pino", forma: "quadrado", cor: "texto-2", conteudo: "4", rotulo: "pos 1" },
      { tipo: "pino", forma: "circulo", cor: "texto-2", conteudo: "4", rotulo: "pos 2" },
      { tipo: "trilha", tracejada: false, rotulo: "trilha pos 1" },
      { tipo: "trilha", tracejada: true, rotulo: "trilha pos 2" },
    ],
    comoLer: "Siga os números: cada um é o minuto do jogo em que o herói costuma estar ali.",
  },
};

const CONTROLES: ReadonlyArray<readonly [string, string]> = [
  ["Camadas", "ligam e desligam o que o mapa desenha; a legenda e as frases acompanham."],
  ["Janela", "mostra só o que acontece naquele intervalo de minutos; Todas é o agregado da partida."],
  ["Setas", "por padrão só os smokes mais repetidos; Mostrar todas traz o resto."],
  ["2.5D e Plano", "relevo inclinado ou mapa chapado; arraste para mover, roda ou pinça para aproximar."],
  ["Centralizar", "volta o mapa ao enquadramento inicial."],
];

const corDoToken = (cor: CorDesenho): CSSProperties & Record<"--cor-desenho", string> => ({ "--cor-desenho": `var(--cor-${cor})` });

function SimboloDaLegenda({ simbolo }: { simbolo: Simbolo }) {
  if (simbolo.tipo === "mancha") return <span className="legenda-mancha" aria-hidden="true" />;
  if (simbolo.tipo === "seta" || simbolo.tipo === "trilha") {
    const cor = simbolo.tipo === "seta" ? `var(--cor-${simbolo.cor})` : "var(--cor-texto-2)";
    const tracejada = simbolo.tipo === "seta" || simbolo.tracejada;
    return (
      <svg className="legenda-linha" viewBox="0 0 34 12" aria-hidden="true">
        {simbolo.tipo === "seta" && <circle cx="4" cy="6" r="3" fill={cor} />}
        <line x1="6" y1="6" x2="30" y2="6" stroke={cor} strokeWidth="2.5" strokeDasharray={tracejada ? "4 3" : undefined} />
        {simbolo.tipo === "seta" && <polyline points="25,1.5 31,6 25,10.5" fill="none" stroke={cor} strokeWidth="2.5" />}
      </svg>
    );
  }
  const classes = ["pino", "pino-legenda", `pino-forma-${simbolo.forma}`, simbolo.vazado && "pino-vazado"].filter(Boolean).join(" ");
  return (
    <span className={classes} style={corDoToken(simbolo.cor)} aria-hidden="true">
      <span className="pino-corpo" />
      {simbolo.conteudo && <span className="pino-conteudo">{simbolo.conteudo}</span>}
    </span>
  );
}

type Props = { mapa: MapaAtlas; camadas: ReadonlySet<Camada>; janela: FiltroJanela };

export function LeituraDoMapa({ mapa, camadas, janela }: Props) {
  const ligadas = CAMADAS.filter((c) => camadas.has(c));
  return (
    <details className="atlas-leitura" open>
      <summary>O que este mapa mostra</summary>
      <p className="atlas-leitura-escala">
        A forma diz a camada; a cor diz o desfecho:
        <span><i style={corDoToken(COR_DESFECHO.certo)} /> deu certo</span>
        <span><i style={corDoToken(COR_DESFECHO.errado)} /> deu errado</span>
        <span><i style={corDoToken(COR_DESFECHO.neutro)} /> neutro</span>
      </p>
      {ligadas.length === 0 && <p className="atlas-leitura-vazio">Nenhuma camada ligada. Escolha uma acima do mapa.</p>}
      <ul className="atlas-leitura-camadas">
        {ligadas.map((c) => (
          <li key={c}>
            <h3>{LEGENDA[c].titulo}</h3>
            <ul className="atlas-leitura-simbolos" aria-label={`Símbolos de ${LEGENDA[c].titulo}`}>
              {LEGENDA[c].simbolos.map((s) => <li key={s.rotulo}><SimboloDaLegenda simbolo={s} />{s.rotulo}</li>)}
            </ul>
            <p className="atlas-leitura-dado">{leituraDaCamada(c, mapa, janela)}</p>
            <p className="atlas-leitura-como">{LEGENDA[c].comoLer}</p>
          </li>
        ))}
      </ul>
      <details className="atlas-leitura-controles">
        <summary>O que cada controle faz</summary>
        <dl>{CONTROLES.map(([nome, texto]) => <div key={nome}><dt>{nome}</dt><dd>{texto}</dd></div>)}</dl>
      </details>
    </details>
  );
}
