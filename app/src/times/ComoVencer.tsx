import { useState } from "react";
import { urlDoRetrato } from "../heroes/resumo";
import type { Chaves, Confianca, FatorChave } from "./schemas";

const ROTULO_CONFIANCA = { alta: "alta", media: "média", baixa: "baixa" } as const satisfies Record<Confianca, string>;
// Os 3 primeiros bans trazem a queda quando o adversário bane em destaque; os demais, em linha.
const BANS_EM_DESTAQUE = 3;

// "Nature's Prophet" vira natures_prophet, o nome do arquivo de retrato.
const slugDoHeroi = (nome: string) => nome.toLowerCase().replaceAll("'", "").replace(/[^a-z0-9]+/g, "_").replace(/^_|_$/g, "");
// Uma palavra só (Pangolier) usa as duas primeiras letras; nome composto usa a inicial de cada parte.
const iniciais = (nome: string) => {
  const partes = nome.split(/[\s-]+/).filter(Boolean);
  return (partes.length === 1 ? nome.slice(0, 2) : partes.map((p) => p[0]).join("").slice(0, 2)).toUpperCase();
};
const pct = (v: number) => `${Math.round(v * 100)}%`;
const pp = (v: number) => `${v > 0 ? "+" : ""}${v.toLocaleString("pt-BR", { maximumFractionDigits: 1 })} pp`;
const temValor = (v: number | null | undefined): v is number => v !== null && v !== undefined;

// O app só tem retrato de parte dos heróis; sem arquivo, o cartão mostra as iniciais.
function RetratoDoHeroi({ nome }: { nome: string }) {
  const [semRetrato, setSemRetrato] = useState(false);
  if (semRetrato) return <span className="chave-retrato chave-iniciais" aria-hidden="true">{iniciais(nome)}</span>;
  return <img className="chave-retrato" src={urlDoRetrato(slugDoHeroi(nome))} alt="" width={64} height={36} onError={() => setSemRetrato(true)} />;
}

const SeloConfianca = ({ confianca, n }: { confianca: Confianca; n: number }) => (
  <span className={`chave-confianca selo-confianca-${confianca}`}>n={n} · confiança {ROTULO_CONFIANCA[confianca]}</span>
);

type Ban = Chaves["banir"][number];

// true passou no teste; false não passou; null ou ausente: banido poucas vezes contra eles para testar.
const SELO_DO_BAN = (confirma: Ban["ban_confirma"]) =>
  confirma === true ? { classe: "chave-selo-confirmado", texto: "ban confirmado" }
    : confirma === false ? { classe: "chave-selo-nao", texto: "ban não confirmado" }
      : { classe: "chave-selo-nao", texto: "ban não testado" };

function CartaoBanir({ ban, destaque }: { ban: Ban; destaque: boolean }) {
  const banido = ban.quando_banido_pelo_adv_wr;
  const selo = SELO_DO_BAN(ban.ban_confirma);
  return (
    <li className={`chave-heroi${destaque ? " chave-heroi-destaque" : ""}`} title={ban.texto}>
      <RetratoDoHeroi nome={ban.heroi} />
      <div>
        <strong>{ban.heroi}</strong>
        {ban.papel && <span className="chave-papel">{ban.papel}</span>}
        {temValor(banido) && (
          <span className={destaque ? "chave-queda" : "chave-wr numero"}>
            banido pelo adversário: vence <b>{pct(banido)}</b>{temValor(ban.n_banido) ? ` (n=${ban.n_banido})` : ""}
          </span>
        )}
        <span className="chave-wr numero">com ele {pct(ban.wr_com)} · sem {pct(ban.wr_sem)} ({pp(ban.efeito_pp)})</span>
        {ban.quem_joga && <span className="chave-papel">{ban.quem_joga}{ban.placar_60d ? ` · últimos 60 dias ${ban.placar_60d}` : ""}</span>}
        <span className="chave-selos">
          <span className="chave-selo chave-selo-indicio">{ban.ban_confirma === true ? "confirmado" : "indício"}</span>
          {ban.ban_confirma !== true && <span className={`chave-selo ${selo.classe}`}>{selo.texto}</span>}
        </span>
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
        <span className="chave-wr numero">ela vence {pct(heroi.wr_equipe_contra)}{temValor(heroi.esperado) ? ` (esperado ${pct(heroi.esperado)})` : ""}</span>
        <span className="chave-efeito numero">{pp(heroi.efeito_pp)}</span>
        <SeloConfianca confianca={heroi.confianca} n={heroi.n} />
      </div>
    </li>
  );
}

type Lado = "vitoria" | "derrota";

// Positivo pesa mais para eles nos fatores de vitória; negativo, nos de derrota (CONTRATO_CHAVES.md).
function comparacaoComLiga(vs: number, lado: Lado): string {
  const maisForte = lado === "vitoria" ? vs > 0 : vs < 0;
  return `${maisForte ? "mais forte" : "mais fraco"} para eles que para a liga: ${pp(vs)}`;
}

// Faixa do win rate com o fator: a barra vai de 0 a 100%, a faixa é o IC 95% e o traço é o win rate sem o fator.
function FaixaDoWinRate({ fator }: { fator: FatorChave }) {
  const { ic_baixo: baixo, ic_alto: alto } = fator;
  return (
    <span className="chave-faixa" role="img" aria-label={`vence ${pct(fator.wr_com)} com o fator${temValor(baixo) && temValor(alto) ? `, IC 95% ${pct(baixo)} a ${pct(alto)}` : ""}; ${pct(fator.wr_sem)} sem`}>
      {temValor(baixo) && temValor(alto) && <i className="chave-faixa-ic" style={{ left: pct(baixo), width: pct(alto - baixo) }} />}
      <i className="chave-faixa-sem" style={{ left: pct(fator.wr_sem) }} />
      <i className="chave-faixa-com" style={{ left: pct(fator.wr_com) }} />
    </span>
  );
}

function CartaoFator({ fator, maior, lado }: { fator: FatorChave; maior: number; lado: Lado }) {
  return (
    <li className="chave-fator-cartao" title={fator.texto}>
      <span className="chave-fator">{fator.fator}{fator.padrao_da_liga ? <em> · padrão da liga</em> : null}</span>
      <span className="chave-barra" aria-hidden="true"><i style={{ width: `${(Math.abs(fator.efeito_pp) / maior) * 100}%` }} /></span>
      <span className="chave-efeito numero">{pp(fator.efeito_pp)}</span>
      <FaixaDoWinRate fator={fator} />
      <span className="chave-wr numero">
        vence {pct(fator.wr_com)} com (n={fator.n_com}) · {pct(fator.wr_sem)} sem (n={fator.n_sem})
        {temValor(fator.ic_baixo) && temValor(fator.ic_alto) ? ` · IC ${pct(fator.ic_baixo)} a ${pct(fator.ic_alto)}` : ""}
      </span>
      {temValor(fator.vs_liga_pp) && <span className="chave-liga">{comparacaoComLiga(fator.vs_liga_pp, lado)}</span>}
      <SeloConfianca confianca={fator.confianca} n={fator.n_com} />
    </li>
  );
}

// Barra de efeito proporcional ao maior efeito das duas colunas, para comparar fatores lado a lado.
function ListaDeFatores({ titulo, fatores, maior, lado }: { titulo: string; fatores: readonly FatorChave[]; maior: number; lado: Lado }) {
  const ordenados = fatores.toSorted((a, b) => Math.abs(b.efeito_pp) - Math.abs(a.efeito_pp));
  return (
    <section className={`chave-fatores chave-fatores-${lado}`} aria-label={titulo}>
      <h3>{titulo}</h3>
      {ordenados.length === 0
        ? <p className="chave-vazio">Nenhum fator com evidência suficiente.</p>
        : <ol>{ordenados.map((f) => <CartaoFator key={f.fator} fator={f} maior={maior} lado={lado} />)}</ol>}
    </section>
  );
}

export function ComoVencer({ chaves, nome }: { chaves: Chaves; nome: string }) {
  const maior = Math.max(1, ...[...chaves.fatores_vitoria, ...chaves.fatores_derrota].map((f) => Math.abs(f.efeito_pp)));
  const estilos = chaves.estilos_contra.toSorted((a, b) => (a.excesso_pp ?? 0) - (b.excesso_pp ?? 0));
  const algumConfirmado = chaves.banir.some((b) => b.ban_confirma === true);
  return (
    <section className="chave" aria-labelledby="titulo-vencer">
      <h2 id="titulo-vencer">Como vencer a {nome}</h2>
      <p className="chave-resumo">{chaves.resumo_para_vencer}</p>
      {chaves.banir.length > 0 && (
        <section aria-label="Bans sugeridos">
          <h3>Bans sugeridos</h3>
          {!algumConfirmado && <p className="chave-aviso">Nenhum ban passa no teste estatístico com esta amostra; estes são os heróis com mais sinal.</p>}
          <ul className="chave-herois">{chaves.banir.map((b, k) => <CartaoBanir key={b.heroi} ban={b} destaque={k < BANS_EM_DESTAQUE} />)}</ul>
        </section>
      )}
      <div className="chave-colunas">
        <ListaDeFatores titulo="Aumenta a chance de vitória deles" fatores={chaves.fatores_vitoria} maior={maior} lado="vitoria" />
        <ListaDeFatores titulo="Aumenta a chance de derrota deles" fatores={chaves.fatores_derrota} maior={maior} lado="derrota" />
      </div>
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
            {estilos.map((e) => (
              <li key={e.cluster}><strong>{e.cluster}</strong> {temValor(e.excesso_pp) && <span className="chave-efeito numero">{pp(e.excesso_pp)}</span>} {e.texto}</li>
            ))}
          </ul>
        </section>
      )}
      {chaves.contexto_liga && <p className="chave-nota"><strong>Padrão da liga.</strong> {chaves.contexto_liga}</p>}
      {chaves.recorte && <p className="chave-nota">Recorte: {chaves.recorte}.</p>}
    </section>
  );
}
