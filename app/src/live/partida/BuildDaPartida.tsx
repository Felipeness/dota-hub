import { useState } from "react";
import { tempoDaPartida, type Compra, type DetalheDaPartida, type NivelDeHabilidade } from "./detalhe";
import { explicarItem } from "./porQueItem";
import { itemDoGuia, type DadosPro, type ItemCoreDoGuia } from "./resumo";

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

/** "Pros aos 23 min, você 2 min mais tarde" — null quando o guia não tem alvo de minuto pra esse item. */
function textoDoAlvoPro(compra: Compra, item: ItemCoreDoGuia): string | null {
  if (item.minuto_alvo === null) return null;
  const diferenca = Math.round(compra.t / 60 - item.minuto_alvo);
  const quando = diferenca === 0 ? "no tempo dos pros" : `${Math.abs(diferenca)} min mais ${diferenca < 0 ? "cedo" : "tarde"} que os pros`;
  return `Pros aos ${item.minuto_alvo} min, você ${quando}.`;
}

function CompraDaOrdem({ compra, pro }: { compra: Compra; pro: DadosPro | null }) {
  const item = itemDoGuia(compra, pro);
  const alvo = item && textoDoAlvoPro(compra, item);
  const linha = (
    <>
      <IconeOuIniciais src={iconeDoItem(compra.chave)} nome={compra.nome} classe="build-icone" />
      <span className="build-nome">{compra.nome}</span>
      <span className="build-tempo">{tempoDaPartida(compra.t)}</span>
    </>
  );
  if (!item) return <li className={compra.grande ? "grande" : undefined}>{linha}</li>;
  return (
    <li className={compra.grande ? "grande" : undefined}>
      <details className="build-detalhe">
        <summary>{linha}</summary>
        {alvo && <p className="build-alvo-pro">{alvo}</p>}
        <p className="build-base-pro">{item.base}</p>
      </details>
    </li>
  );
}

function OrdemDeCompra({ compras, pro }: { compras: readonly Compra[]; pro: DadosPro | null }) {
  const itens = compras.filter((c) => !CONSUMIVEIS.has(c.chave));
  const consumiveis = compras.filter((c) => CONSUMIVEIS.has(c.chave))
    .reduce((contagem, c) => contagem.set(c.nome, (contagem.get(c.nome) ?? 0) + 1), new Map<string, number>());
  return (
    <div className="build-bloco">
      <h3>Ordem de compra</h3>
      <p className="partida-vazio">Item com seta no canto abre e mostra o tempo mediano dos pros e o porquê do guia.</p>
      <ol className="build-compras" aria-label="Ordem de compra">
        {itens.map((c, i) => <CompraDaOrdem key={`${c.chave}-${c.t}-${i}`} compra={c} pro={pro} />)}
      </ol>
      {consumiveis.size > 0 && (
        <p className="partida-vazio">Consumíveis: {[...consumiveis].map(([nome, n]) => `${n}× ${nome}`).join(", ")}.</p>
      )}
    </div>
  );
}

function PorQueItem({ detalhe, pro }: { detalhe: DetalheDaPartida; pro: DadosPro | null }) {
  // Item grande, item do guia (itens_core do herói) ou pequeno com motivo (dust contra invisível); uma vez, na 1ª compra.
  const cartoes = detalhe.compras
    .filter((c, i, todas) => todas.findIndex((o) => o.chave === c.chave) === i)
    .map((compra) => ({ compra, explicacao: explicarItem(compra.chave, detalhe.inimigos), doGuia: itemDoGuia(compra, pro) }))
    .filter(({ compra, explicacao, doGuia }) => compra.grande || explicacao?.motivo || doGuia !== null);
  if (cartoes.length === 0) return null;
  return (
    <div className="build-bloco">
      <h3>Por que esse item</h3>
      <p className="partida-vazio">
        Função do item pelo dicionário do app; o motivo é inferido pelas tags dos heróis inimigos e vem marcado como provável.
      </p>
      <ul className="build-porque">
        {cartoes.map(({ compra, explicacao, doGuia }) => (
          <li key={compra.chave}>
            <details>
              <summary className="build-porque-cabeca">
                <IconeOuIniciais src={iconeDoItem(compra.chave)} nome={compra.nome} classe="build-icone" />
                <strong>{compra.nome}</strong>
                <span className="build-tempo">{tempoDaPartida(compra.t)}</span>
              </summary>
              <p>{explicacao ? `Serve para: ${explicacao.funcao}.` : "Item fora do dicionário do app: sem explicação."}</p>
              {explicacao?.motivo && <p className="build-motivo">{explicacao.motivo}</p>}
              {explicacao && explicacao.semDadoDe.length > 0 && (
                <p className="build-sem-dado">Ainda não temos tags de contra pra: {explicacao.semDadoDe.join(", ")}.</p>
              )}
              {doGuia && <p className="build-base-pro">{doGuia.base}</p>}
            </details>
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

export function BuildDaPartida({ detalhe, pro }: { detalhe: DetalheDaPartida; pro: DadosPro | null }) {
  return (
    <section className="partida-build" aria-labelledby="titulo-build">
      <h2 id="titulo-build">Build e itens</h2>
      <OrdemDeCompra compras={detalhe.compras} pro={pro} />
      <PorQueItem detalhe={detalhe} pro={pro} />
      <Neutros detalhe={detalhe} />
      <SkillBuild habilidades={detalhe.habilidades} />
    </section>
  );
}
