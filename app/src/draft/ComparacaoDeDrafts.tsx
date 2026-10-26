import { comparar, EIXOS, LIMIAR_DE_VANTAGEM, pontos, pontuarEixos, resumoComparativo, type HeroiNoTime, type LimitesDeNormalizacao, type Vantagem } from "./eixos";

const pct = (valor: number) => `${pontos(valor)}%`;
const VEREDITO: Readonly<Record<Vantagem, { texto: string; classe: string }>> = {
  meu: { texto: "você na frente", classe: "a-favor" },
  deles: { texto: "adversário na frente", classe: "contra" },
  parelho: { texto: "parelho", classe: "" },
};

function BarraDeEixo({ valor, classe, rotulo }: { valor: number; classe: string; rotulo: string }) {
  return (
    <span className="draft-eixo-barra" role="img" aria-label={`${rotulo}: ${pct(valor)}`}>
      <i className={classe} style={{ width: pct(valor) }} />
    </span>
  );
}

type Props = Readonly<{ meuTime: readonly HeroiNoTime[]; timeInimigo: readonly HeroiNoTime[]; limites: LimitesDeNormalizacao }>;

/** Em que cada draft é mais forte: luta, farm, push, pickoff, early, sustain, cada um com a conta por trás. */
export function ComparacaoDeDrafts({ meuTime, timeInimigo, limites }: Props) {
  if (meuTime.length === 0 && timeInimigo.length === 0) return null;
  const meuEixos = pontuarEixos(meuTime, limites);
  const eixosInimigo = pontuarEixos(timeInimigo, limites);
  const comparacoes = comparar(meuEixos, eixosInimigo);
  const resumo = resumoComparativo(comparacoes);

  return (
    <section className="draft-comparacao" aria-label="Comparação dos drafts">
      <h2>Ponto de força dos dois drafts</h2>
      <p className="draft-explicacao">
        Cada eixo é a média de números reais de partidas de pro e das habilidades dos heróis no OpenDota, não uma nota inventada.
        Cada número vai de 0 a 100 (percentil entre os 127 heróis do patch); menos de {LIMIAR_DE_VANTAGEM} pontos de diferença conta como parelho.
        Falta herói para pontuar um eixo? Ele some do cálculo, não vira zero.
      </p>
      {resumo && <p className="draft-resumo-comparacao">{resumo}</p>}
      <ul className="draft-eixos">
        {comparacoes.map((c) => {
          const eixo = EIXOS[c.eixo];
          const veredito = VEREDITO[c.vantagem];
          return (
            <li key={c.eixo} className="draft-eixo">
              <div className="draft-eixo-topo">
                <span>{eixo.titulo}</span>
                <span className={`numero ${veredito.classe}`}>{pontos(c.meu)} × {pontos(c.deles)} · {veredito.texto}</span>
              </div>
              <BarraDeEixo valor={c.meu} classe="draft-barra-aliado" rotulo="Seu time" />
              <BarraDeEixo valor={c.deles} classe="draft-barra-inimigo" rotulo="Time inimigo" />
              <details className="draft-porque">
                <summary>Como é calculado</summary>
                <p>{eixo.comoCalcular}</p>
              </details>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
