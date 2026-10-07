import { useState } from "react";
import { tempoDaPartida, type Compra, type DetalheDaPartida, type NivelDeHabilidade } from "./detalhe";
import { explicarItem } from "./porQueItem";

/** Comprados aos montes e sem decisão de build: viram uma linha de contagem. */
const CONSUMIVEIS: ReadonlySet<string> = new Set([
  "tango", "flask", "clarity", "enchanted_mango", "faerie_fire", "tpscroll", "ward_observer", "ward_sentry", "ward_dispenser",
  "dust", "smoke_of_deceit", "blood_grenade", "tome_of_knowledge",
]);

// Uma palavra só usa as duas primeiras letras; nome composto usa a inicial de cada parte.
const iniciais = (nome: string) => {
  const partes = nome.split(/[\s'-]+/).filter(Boolean);
  return (partes.length === 1 ? nome.slice(0, 2) : partes.map((p) => p[0]).join("").slice(0, 2)).toUpperCase();
};

/** Só ícones que o app já exportou do jogo; sem arquivo, as iniciais. Nada vem de CDN. */
export function IconeOuIniciais({ src, nome, classe }: { src: string | null; nome: string; classe: string }) {
  const [semIcone, setSemIcone] = useState(src === null);
  if (semIcone || src === null) return <span className={`${classe} iniciais`} aria-hidden="true">{iniciais(nome)}</span>;
  return <img className={classe} src={src} alt="" onError={() => setSemIcone(true)} />;
}

const iconeDoItem = (chave: string) => `/data/retratos/itens/${chave}.webp`;

function OrdemDeCompra({ compras }: { compras: readonly Compra[] }) {
  const itens = compras.filter((c) => !CONSUMIVEIS.has(c.chave));
  const consumiveis = compras.filter((c) => CONSUMIVEIS.has(c.chave))
    .reduce((contagem, c) => contagem.set(c.nome, (contagem.get(c.nome) ?? 0) + 1), new Map<string, number>());
  return (
    <div className="build-bloco">
      <h3>Ordem de compra</h3>
      <ol className="build-compras" aria-label="Ordem de compra">
        {itens.map((c, i) => (
          <li key={`${c.chave}-${c.t}-${i}`} className={c.grande ? "grande" : undefined}>
            <IconeOuIniciais src={iconeDoItem(c.chave)} nome={c.nome} classe="build-icone" />
            <span className="build-nome">{c.nome}</span>
            <span className="build-tempo">{tempoDaPartida(c.t)}</span>
          </li>
        ))}
      </ol>
      {consumiveis.size > 0 && (
        <p className="partida-vazio">Consumíveis: {[...consumiveis].map(([nome, n]) => `${n}× ${nome}`).join(", ")}.</p>
      )}
    </div>
  );
}

function PorQueItem({ detalhe }: { detalhe: DetalheDaPartida }) {
  // Item grande, ou pequeno com motivo (dust contra invisível); cada item uma vez, na primeira compra.
  const cartoes = detalhe.compras
    .filter((c, i, todas) => todas.findIndex((o) => o.chave === c.chave) === i)
    .map((compra) => ({ compra, explicacao: explicarItem(compra.chave, detalhe.inimigos) }))
    .filter(({ compra, explicacao }) => compra.grande || explicacao?.motivo);
  if (cartoes.length === 0) return null;
  return (
    <div className="build-bloco">
      <h3>Por que esse item</h3>
      <p className="partida-vazio">
        Função do item pelo dicionário do app; o motivo é inferido pelas tags dos heróis inimigos e vem marcado como provável.
      </p>
      <ul className="build-porque">
        {cartoes.map(({ compra, explicacao }) => (
          <li key={compra.chave}>
            <div className="build-porque-cabeca">
              <IconeOuIniciais src={iconeDoItem(compra.chave)} nome={compra.nome} classe="build-icone" />
              <strong>{compra.nome}</strong>
              <span className="build-tempo">{tempoDaPartida(compra.t)}</span>
            </div>
            <p>{explicacao ? `Serve para: ${explicacao.funcao}.` : "Item fora do dicionário do app: sem explicação."}</p>
            {explicacao?.motivo && <p className="build-motivo">{explicacao.motivo}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Neutros({ detalhe }: { detalhe: DetalheDaPartida }) {
  if (detalhe.neutros.length === 0) return null;
  return (
    <div className="build-bloco">
      <h3>Itens neutros</h3>
      <ol className="build-compras" aria-label="Itens neutros">
        {detalhe.neutros.map((n) => (
          <li key={`${n.chave}-${n.t}`}>
            <IconeOuIniciais src={iconeDoItem(n.chave)} nome={n.nome} classe="build-icone" />
            <span className="build-nome">{n.nome}</span>
            <span className="build-tempo">{n.tier === null ? "" : `tier ${n.tier} · `}{tempoDaPartida(n.t)}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

function SkillBuild({ habilidades }: { habilidades: readonly NivelDeHabilidade[] }) {
  if (habilidades.length === 0) return null;
  const linhas = [...new Map(habilidades.filter((h) => !h.talento).map((h) => [h.chave, h.nome])).entries()];
  const talentos = habilidades.filter((h) => h.talento);
  const niveis = habilidades.map((h) => h.nivel);
  return (
    <div className="build-bloco">
      <h3>Skill build</h3>
      <div className="build-skills" role="region" aria-label="Skill build por nível" tabIndex={0}>
        <table>
          <thead><tr><th scope="col">Habilidade</th>{niveis.map((n) => <th key={n} scope="col">{n}</th>)}</tr></thead>
          <tbody>
            {linhas.map(([chave, nome]) => (
              <tr key={chave}>
                <th scope="row"><span className="build-habilidade"><span className="iniciais">{iniciais(nome)}</span>{nome}</span></th>
                {habilidades.map((h) => <td key={h.nivel}>{h.chave === chave ? <span className="build-ponto" aria-label={`nível ${h.nivel}`}>●</span> : ""}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {talentos.length > 0 && (
        <ul className="build-talentos">{talentos.map((t) => <li key={t.nivel}><span className="build-tempo">nível {t.nivel}</span> {t.nome}</li>)}</ul>
      )}
    </div>
  );
}

export function BuildDaPartida({ detalhe }: { detalhe: DetalheDaPartida }) {
  return (
    <section className="partida-build" aria-labelledby="titulo-build">
      <h2 id="titulo-build">Build e itens</h2>
      <OrdemDeCompra compras={detalhe.compras} />
      <PorQueItem detalhe={detalhe} />
      <Neutros detalhe={detalhe} />
      <SkillBuild habilidades={detalhe.habilidades} />
    </section>
  );
}
