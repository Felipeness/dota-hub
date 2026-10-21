// "O que os pros de X fazem contra Y": vitória do par, builds em sequência e todos os itens frequentes, com minuto.
import { porcentagem, type ContraInimigo } from "./analise";
import { buildsPossiveis, itensDosPros, porcentagemInteira } from "./buildsDosPros";
import { urlDoItem } from "./modelo";
import { BuildsPossiveis } from "./SequenciaDeBuild";

/** Abaixo disso o item é exceção nas partidas pro do par e só polui a lista. */
const FRACAO_NA_LISTA = 0.1;

type Props = Readonly<{
  meuNome: string;
  inimigoNome: string;
  contra: ContraInimigo | null;
  nomes: Readonly<Record<string, string>>;
}>;

export function ProsContraInimigo({ meuNome, inimigoNome, contra, nomes }: Props) {
  const titulo = contra
    ? `O que os pros de ${meuNome} fazem contra ${inimigoNome} (${contra.jogos.toLocaleString("pt-BR")} partidas)`
    : `O que os pros de ${meuNome} fazem contra ${inimigoNome}`;
  return (
    <section className="cf-bloco" aria-labelledby="cf-pros-contra">
      <h2 id="cf-pros-contra">{titulo}</h2>
      {contra ? <Conteudo meuNome={meuNome} inimigoNome={inimigoNome} contra={contra} nomes={nomes} /> : (
        <p>Menos de 5 partidas de liga com {meuNome} contra {inimigoNome} nos últimos 18 meses: pouco para dizer o que os pros fazem.</p>
      )}
    </section>
  );
}

function Conteudo({ meuNome, inimigoNome, contra, nomes }: Props & { contra: ContraInimigo }) {
  const builds = buildsPossiveis([contra], nomes);
  const itens = itensDosPros([contra], nomes).filter((i) => i.fracao >= FRACAO_NA_LISTA);
  const taxa = contra.vitorias / contra.jogos;
  return (
    <>
      <p className="cf-pros-placar">
        <span className={`numero cf-pros-taxa ${taxa >= 0.5 ? "cf-pros-taxa-sua" : "cf-pros-taxa-dele"}`}>{porcentagem(taxa)}</span>{" "}
        de vitória do {meuNome}: {contra.vitorias.toLocaleString("pt-BR")} de {contra.jogos.toLocaleString("pt-BR")} partidas pro contra o {inimigoNome}.
      </p>
      {builds.length > 0 && (
        <>
          <h3 className="cf-fase">Builds dos pros contra {inimigoNome}</h3>
          <p className="cf-sub">Partidas agrupadas pelos primeiros itens (3, ou 2 quando a build varia cedo); a sequência mostra o minuto mediano e, quando nem todo jogo da build tem o item, em quantos ele aparece.</p>
          <BuildsPossiveis builds={builds} />
        </>
      )}
      <h3 className="cf-fase">Todos os itens frequentes</h3>
      <ul className="cf-pros-itens" aria-label={`Itens dos pros de ${meuNome} contra ${inimigoNome}`}>
        {itens.map((i) => (
          <li key={i.chave}>
            <img src={urlDoItem(i.chave)} alt="" width={36} height={27} loading="lazy" />
            <span className="cf-pros-item-nome">{i.nome}</span>
            <span className="numero cf-pros-item-num">{porcentagemInteira(i.fracao)} · {Math.round(i.minuto)} min</span>
          </li>
        ))}
      </ul>
      <small className="cf-fonte">
        Fonte: OpenDota explorer, partidas de liga dos últimos 18 meses com {meuNome} contra {inimigoNome}: primeira compra de cada item
        fechado (1000+ de ouro), em quantas partidas e no minuto mediano. Componente que vira outro item fica de fora.
      </small>
    </>
  );
}
