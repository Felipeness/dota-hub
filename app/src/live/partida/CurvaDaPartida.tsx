import { tempoDaPartida, type EventoDaPartida, type TipoDeEvento } from "./detalhe";
import { JANELAS, type IdJanela } from "./janelas";

export type Serie = Readonly<{ nome: string; valores: readonly number[]; estilo: "jogador" | "adversario" | "referencia" }>;
type Props = Readonly<{
  titulo: string; unidade: string; series: readonly Serie[]; eventos: readonly EventoDaPartida[]; duracaoS: number; janela: IdJanela;
}>;

const LARGURA = 640;
const ALTURA = 230;
const MARGEM = { esquerda: 46, direita: 12, topo: 10, baixo: 52 } as const;
const PASSO_DO_EIXO_X_MIN = 10;
const MARCAS_NO_EIXO_Y = 4;
const FAIXA_DOS_EVENTOS = ALTURA - 18;
/** Só estes tipos marcam o eixo: o que muda a curva (item, luta, Roshan). */
const TIPOS_NO_EIXO: readonly TipoDeEvento[] = ["item", "abate", "morte", "roshan"];
const ROTULO_DO_TIPO: Partial<Record<TipoDeEvento, string>> = { item: "Item grande", abate: "Abate", morte: "Morte", roshan: "Roshan" };

const larguraUtil = LARGURA - MARGEM.esquerda - MARGEM.direita;
const alturaUtil = ALTURA - MARGEM.topo - MARGEM.baixo;

/** Teto "redondo" do eixo y: 1, 2 ou 5 vezes uma potência de 10 por marca. */
function tetoDoEixo(maximo: number, marcas = MARCAS_NO_EIXO_Y): number {
  if (maximo <= 0) return marcas;
  const bruto = maximo / marcas;
  const potencia = 10 ** Math.floor(Math.log10(bruto));
  const passo = [1, 2, 5, 10].map((m) => m * potencia).find((p) => p >= bruto) ?? bruto;
  return passo * marcas;
}

function caminhoDaSerie(valores: readonly number[], fimMin: number, teto: number): string {
  return valores.map((v, minuto) => `${minuto === 0 ? "M" : "L"}${x(minuto, fimMin).toFixed(1)},${y(v, teto).toFixed(1)}`).join(" ");
}

const x = (minuto: number, fimMin: number) => MARGEM.esquerda + (Math.min(minuto, fimMin) / fimMin) * larguraUtil;
const y = (valor: number, teto: number) => MARGEM.topo + (1 - valor / teto) * alturaUtil;

function MarcaDoEvento({ evento, fimMin }: { evento: EventoDaPartida; fimMin: number }) {
  const cx = x(evento.t / 60, fimMin);
  const formas: Partial<Record<TipoDeEvento, string>> = {
    item: `M${cx - 4},${FAIXA_DOS_EVENTOS - 4}h8v8h-8z`,
    abate: `M${cx},${FAIXA_DOS_EVENTOS - 5}l5,9h-10z`,
    morte: `M${cx - 4},${FAIXA_DOS_EVENTOS - 4}l8,8m0,-8l-8,8`,
    roshan: `M${cx},${FAIXA_DOS_EVENTOS - 5}l5,5l-5,5l-5,-5z`,
  };
  return (
    <g className={`curva-evento curva-evento-${evento.tipo}`}>
      <title>{`${tempoDaPartida(evento.t)} · ${evento.texto}`}</title>
      {evento.tipo === "item" && <line x1={cx} x2={cx} y1={MARGEM.topo} y2={ALTURA - MARGEM.baixo} className="curva-guia" />}
      <path d={formas[evento.tipo]} />
    </g>
  );
}

function FaixaDaJanela({ janela, fimMin }: { janela: IdJanela; fimMin: number }) {
  const faixa = JANELAS.find((j) => j.id === janela);
  if (!faixa) return null;
  const inicio = x(Math.max(0, faixa.de / 60), fimMin);
  const fim = x(Math.min(fimMin, faixa.ate / 60), fimMin);
  return <rect className="curva-janela" x={inicio} y={MARGEM.topo} width={Math.max(0, fim - inicio)} height={alturaUtil} />;
}

export function CurvaDaPartida({ titulo, unidade, series, eventos, duracaoS, janela }: Props) {
  const fimMin = Math.max(1, duracaoS / 60);
  const teto = tetoDoEixo(Math.max(...series.flatMap((s) => s.valores), 0));
  const marcasY = Array.from({ length: MARCAS_NO_EIXO_Y + 1 }, (_, i) => (teto / MARCAS_NO_EIXO_Y) * i);
  const marcasX = Array.from({ length: Math.floor(fimMin / PASSO_DO_EIXO_X_MIN) + 1 }, (_, i) => i * PASSO_DO_EIXO_X_MIN);
  const noEixo = eventos.filter((e) => TIPOS_NO_EIXO.includes(e.tipo) && e.t >= 0);
  const descricao = `${titulo} por minuto: ${series.map((s) => `${s.nome} termina em ${s.valores.at(-1)?.toLocaleString("pt-BR") ?? "sem dado"}`).join("; ")}.`;
  return (
    <figure className="curva">
      <figcaption>
        <span className="curva-titulo">{titulo}</span>
        <span className="curva-legenda">
          {series.map((s) => <span key={s.nome} className={`curva-chave curva-${s.estilo}`}>{s.nome}</span>)}
        </span>
      </figcaption>
      <svg viewBox={`0 0 ${LARGURA} ${ALTURA}`} role="img" aria-label={descricao} className="curva-svg">
        <FaixaDaJanela janela={janela} fimMin={fimMin} />
        {marcasY.map((v) => (
          <g key={v} className="curva-grade">
            <line x1={MARGEM.esquerda} x2={LARGURA - MARGEM.direita} y1={y(v, teto)} y2={y(v, teto)} />
            <text x={MARGEM.esquerda - 6} y={y(v, teto) + 4} textAnchor="end">{v >= 1_000 ? `${v / 1_000}k` : v}</text>
          </g>
        ))}
        {marcasX.map((m) => (
          <text key={m} className="curva-eixo" x={x(m, fimMin)} y={ALTURA - MARGEM.baixo + 16} textAnchor="middle">{m}</text>
        ))}
        <text className="curva-eixo" x={LARGURA - MARGEM.direita} y={ALTURA - MARGEM.baixo + 16} textAnchor="end">min</text>
        {noEixo.map((e, i) => <MarcaDoEvento key={`${e.tipo}-${e.t}-${i}`} evento={e} fimMin={fimMin} />)}
        {series.map((s) => <path key={s.nome} className={`curva-linha curva-${s.estilo}`} d={caminhoDaSerie(s.valores, fimMin, teto)} />)}
      </svg>
      <p className="curva-rodape">
        {unidade}. Marcas embaixo: {TIPOS_NO_EIXO.map((t) => <span key={t} className={`curva-marca-legenda curva-evento-${t}`}>{ROTULO_DO_TIPO[t]}</span>)}
      </p>
    </figure>
  );
}
