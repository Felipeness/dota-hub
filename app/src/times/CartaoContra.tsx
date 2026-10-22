import type { Chaves } from "./schemas";
import { resumirContra, type LinhaDoResumo } from "./resumoContra";

function Linhas({ linhas, vazio }: { linhas: readonly LinhaDoResumo[]; vazio: string }) {
  if (linhas.length === 0) return <p className="contra-vazio">{vazio}</p>;
  return (
    <ol className="contra-linhas">
      {linhas.map((l) => (
        <li key={l.texto}>
          <span className="contra-texto">{l.texto}</span>
          {l.tag && <span className="contra-tag numero">{l.tag}</span>}
          <a className="contra-ver" href={`#${l.ancora}`}>ver detalhes</a>
        </li>
      ))}
    </ol>
  );
}

// Cartão do topo: o que fazer contra o time em linhas curtas; a estatística completa fica nos Detalhes.
export function CartaoContra({ chaves, nome }: { chaves: Chaves; nome: string }) {
  const resumo = resumirContra(chaves);
  return (
    <section className="contra-cartao" aria-labelledby="titulo-cartao-contra">
      <h2 id="titulo-cartao-contra">Contra a {nome}</h2>
      {resumo.historico && <p className="contra-nota">Histórico: roster de antes da TI.</p>}
      <div className="contra-blocos">
        <div className="contra-bloco contra-bloco-faca">
          <h3>Faça isso</h3>
          <Linhas linhas={resumo.facaIsso} vazio="Nenhum ponto fraco confirmado pelos dados." />
        </div>
        <div className="contra-bloco contra-bloco-preocupe">
          <h3>Se preocupe com isso</h3>
          <Linhas linhas={resumo.preocupe} vazio="Nenhuma força confirmada pelos dados." />
        </div>
        <div className="contra-bloco contra-bloco-draft">
          <h3>Draft</h3>
          <Linhas linhas={resumo.draft} vazio="" />
        </div>
      </div>
      <p className="contra-nota">Só entra aqui o que passou no teste com a amostra. Números: vitórias do time quando acontece, com n partidas.</p>
    </section>
  );
}
