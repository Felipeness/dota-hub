import { Link } from "react-router";
import { useData } from "../data/useData";
import { agruparPorPlacar, analiseSchema, caminhoDaAnalise, porcentagem, taxaDeVitoria, type BlocoDeConfronto } from "./analise";
import "./confronto.css";

type Heroi = Readonly<{ id: string; nome: string; nome_interno: string }>;

/** Bloco curto da página do herói: os oponentes com análise de pro, separados pelo placar, cada um levando ao confronto. */
export function ConfrontosAnalisados({ heroi }: { heroi: Heroi }) {
  const analise = useData(caminhoDaAnalise(heroi.id), analiseSchema);
  if (analise.estado !== "ok") return null;
  const { melhores, piores } = agruparPorPlacar(analise.dados.confrontos);
  return (
    <section className="cf-bloco cf-analisados" aria-labelledby="confrontos-analisados">
      <h2 id="confrontos-analisados">Confrontos analisados</h2>
      <p className="cf-sub">Placar do {heroi.nome} em partidas pro 7.40 e 7.41. Abra um confronto para ver janelas, itens e como jogar.</p>
      <Grupo titulo="Melhores" heroi={heroi} blocos={melhores} />
      <Grupo titulo="Piores" heroi={heroi} blocos={piores} />
    </section>
  );
}

function Grupo({ titulo, heroi, blocos }: { titulo: string; heroi: Heroi; blocos: readonly BlocoDeConfronto[] }) {
  if (blocos.length === 0) return null;
  return (
    <>
      <h3 className="cf-fase">{titulo}</h3>
      <ul className="cf-oponentes">
        {blocos.map((b) => (
          <li key={b.oponente.id}>
            <Link to={`/confronto/${heroi.nome_interno}/${b.oponente.nome_interno}`}>
              {b.oponente.nome} <span className="numero">{porcentagem(taxaDeVitoria(b))}</span>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
