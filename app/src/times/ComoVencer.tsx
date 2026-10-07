import { useState } from "react";
import { urlDoRetrato } from "../heroes/resumo";
import type { Chaves, Confianca, FatorChave } from "./schemas";

const ROTULO_CONFIANCA = { alta: "alta", media: "média", baixa: "baixa" } as const satisfies Record<Confianca, string>;

// "Nature's Prophet" vira natures_prophet, o nome do arquivo de retrato.
const slugDoHeroi = (nome: string) => nome.toLowerCase().replaceAll("'", "").replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
// Uma palavra só (Pangolier) usa as duas primeiras letras; nome composto usa a inicial de cada parte.
const iniciais = (nome: string) => {
  const partes = nome.split(/[\s-]+/).filter(Boolean);
  return (partes.length === 1 ? nome.slice(0, 2) : partes.map((p) => p[0]).join("").slice(0, 2)).toUpperCase();
};
const pct = (v: number) => `${Math.round(v * 100)}%`;
const pp = (v: number) => `${v > 0 ? "+" : ""}${v.toLocaleString("pt-BR", { maximumFractionDigits: 1 })} pp`;

// O app só tem retrato de parte dos heróis; sem arquivo, o cartão mostra as iniciais.
function RetratoDoHeroi({ nome }: { nome: string }) {
  const [semRetrato, setSemRetrato] = useState(false);
  if (semRetrato) return <span className="chave-retrato chave-iniciais" aria-hidden="true">{iniciais(nome)}</span>;
  return <img className="chave-retrato" src={urlDoRetrato(slugDoHeroi(nome))} alt="" width={64} height={36} onError={() => setSemRetrato(true)} />;
}

const SeloConfianca = ({ confianca, n }: { confianca: Confianca; n: number }) => (
  <span className={`chave-confianca selo-confianca-${confianca}`}>n={n} · confiança {ROTULO_CONFIANCA[confianca]}</span>
);

function CartaoBanir({ ban }: { ban: Chaves["banir"][number] }) {
  const banido = ban.quando_banido_pelo_adv_wr;
  return (
    <li className="chave-heroi" title={ban.texto}>
      <RetratoDoHeroi nome={ban.heroi} />
      <div>
        <strong>{ban.heroi}</strong>
        {ban.papel && <span className="chave-papel">{ban.papel}</span>}
        {banido !== null && banido !== undefined && <span className="chave-wr numero">banido: vence {pct(banido)} (n={ban.n_banido ?? 0})</span>}
        <span className="chave-wr numero">com {pct(ban.wr_com)} · sem {pct(ban.wr_sem)}</span>
        <span className="chave-efeito numero">{pp(ban.efeito_pp)} com ele</span>
        <SeloConfianca confianca={ban.confianca} n={ban.n_com} />
      </div>
    </li>
  );
}

function CartaoContra({ heroi }: { heroi: Chaves["herois_contra"][number] }) {
  return (
    <li className="chave-heroi" title={heroi.texto}>
      <RetratoDoHeroi nome={heroi.heroi} />
      <div>
        <strong>{heroi.heroi}</strong>
        <span className="chave-wr numero">ela vence {pct(heroi.wr_equipe_contra)}{heroi.esperado === undefined ? "" : ` (esperado ${pct(heroi.esperado)})`}</span>
        <span className="chave-efeito numero">{pp(heroi.efeito_pp)}</span>
        <SeloConfianca confianca={heroi.confianca} n={heroi.n} />
      </div>
    </li>
  );
}

// Barra proporcional ao maior efeito das duas colunas, para comparar fatores lado a lado.
function ListaDeFatores({ titulo, fatores, maior, lado }: { titulo: string; fatores: readonly FatorChave[]; maior: number; lado: "vitoria" | "derrota" }) {
  const ordenados = fatores.toSorted((a, b) => Math.abs(b.efeito_pp) - Math.abs(a.efeito_pp));
  return (
    <section className={`chave-fatores chave-fatores-${lado}`} aria-label={titulo}>
      <h3>{titulo}</h3>
      {ordenados.length === 0 ? <p className="chave-vazio">Sem fator medido.</p> : (
        <ol>
          {ordenados.map((f) => (
            <li key={f.fator} title={f.texto}>
              <span className="chave-fator">{f.fator}{f.padrao_da_liga ? <em> · padrão da liga</em> : null}</span>
              <span className="chave-barra" aria-hidden="true"><i style={{ width: `${(Math.abs(f.efeito_pp) / maior) * 100}%` }} /></span>
              <span className="chave-efeito numero">{pp(f.efeito_pp)}</span>
              <span className="chave-wr numero">vence {pct(f.wr_com)} com · {pct(f.wr_sem)} sem</span>
              <SeloConfianca confianca={f.confianca} n={f.n_com} />
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

export function ComoVencer({ chaves, nome }: { chaves: Chaves; nome: string }) {
  const maior = Math.max(1, ...[...chaves.fatores_vitoria, ...chaves.fatores_derrota].map((f) => Math.abs(f.efeito_pp)));
  const estilos = chaves.estilos_contra.toSorted((a, b) => a.excesso_pp - b.excesso_pp);
  return (
    <section className="chave" aria-labelledby="titulo-vencer">
      <h2 id="titulo-vencer">Como vencer a {nome}</h2>
      <p className="chave-resumo">{chaves.resumo_para_vencer}</p>
      {chaves.banir.length > 0 && (
        <section aria-label="Banir">
          <h3>Banir</h3>
          <ul className="chave-herois">{chaves.banir.map((b) => <CartaoBanir key={b.heroi} ban={b} />)}</ul>
        </section>
      )}
      {chaves.herois_contra.length > 0 && (
        <section aria-label="Pickar contra eles">
          <h3>Pickar contra eles</h3>
          <ul className="chave-herois">{chaves.herois_contra.map((h) => <CartaoContra key={h.heroi} heroi={h} />)}</ul>
        </section>
      )}
      {estilos.length > 0 && (
        <section aria-label="Estilo que funciona contra">
          <h3>Estilo que funciona contra</h3>
          <ul className="chave-estilos">
            {estilos.map((e) => <li key={e.cluster}><strong>{e.cluster}</strong> <span className="chave-efeito numero">{pp(e.excesso_pp)}</span> {e.texto}</li>)}
          </ul>
        </section>
      )}
      <div className="chave-colunas">
        <ListaDeFatores titulo="Aumenta a chance de vitória deles" fatores={chaves.fatores_vitoria} maior={maior} lado="vitoria" />
        <ListaDeFatores titulo="Aumenta a chance de derrota deles" fatores={chaves.fatores_derrota} maior={maior} lado="derrota" />
      </div>
      {(chaves.contexto_liga || chaves.recorte) && (
        <p className="chave-nota">{[chaves.recorte && `Recorte: ${chaves.recorte}.`, chaves.contexto_liga].filter(Boolean).join(" ")}</p>
      )}
    </section>
  );
}
