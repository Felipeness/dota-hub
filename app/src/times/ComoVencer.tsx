import { useState } from "react";
import { TextoComTermos } from "../glossary/Termo";
import { urlDoRetrato } from "../heroes/resumo";
import type { Chaves, Confianca, FatorChave } from "./schemas";

const ROTULO_CONFIANCA = { alta: "alta", media: "média", baixa: "baixa" } as const satisfies Record<Confianca, string>;
// Os 3 primeiros bans trazem a queda quando o adversário bane em destaque; os demais, em linha.
const BANS_EM_DESTAQUE = 3;
const BANS_VISIVEIS = 6;

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

const ROTULO_CONTEXTO: Readonly<Record<string, string>> = {
  vs_counter: "vs counter", sem_counter: "sem counter", como_azarao: "como azarão", como_favorito: "como favorito",
  lane_perdida: "lane perdida", atras_15: "atrás aos 15", pickado_por_ultimo: "último pick",
};
// forca_contexto: a vantagem do herói se mantém nos jogos ruins (resiste) ou só aparece nos bons (favoravel).
const SELO_DO_CONTEXTO = {
  resiste: { classe: "chave-selo-confirmado", texto: "resiste ao contexto" },
  favoravel: { classe: "chave-selo-indicio", texto: "vence pelo contexto" },
  indefinido: { classe: "chave-selo-nao", texto: "contexto indefinido" },
} as const satisfies Record<NonNullable<Ban["forca_contexto"]>, { classe: string; texto: string }>;
const MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
const nomeDoMes = (anoMes: string) => MESES[Number(anoMes.slice(5, 7)) - 1] ?? anoMes;
const dataCurta = (iso: string) => `${iso.slice(8, 10)}/${iso.slice(5, 7)}`;

// Barras por mês da taxa de jogos em que o herói foi banido contra eles; explica por que o pick sumiu.
function BansPorMes({ meses, ultimoPick }: { meses: NonNullable<Ban["bans_contra_por_mes"]>; ultimoPick: string | undefined }) {
  const ordenados = Object.entries(meses).toSorted(([a], [b]) => a.localeCompare(b));
  const pico = ordenados.reduce<[string, number] | null>((melhor, [mes, m]) => (!melhor || m.pct > melhor[1] ? [mes, m.pct] : melhor), null);
  const nota = [ultimoPick && `último pick ${dataCurta(ultimoPick)}`, pico && pico[1] > 0 && `banido contra eles em ${pct(pico[1])} dos jogos de ${nomeDoMes(pico[0])}`]
    .filter(Boolean).join("; ");
  return (
    <span className="chave-meses">
      <span className="chave-meses-barras" role="img" aria-label={`Bans contra eles por mês: ${ordenados.map(([mes, m]) => `${nomeDoMes(mes)} ${pct(m.pct)}`).join(", ")}`}>
        {ordenados.map(([mes, m]) => <i key={mes} title={`${nomeDoMes(mes)}: ${m.n} de ${m.jogos} jogos`} style={{ height: `${Math.max(6, m.pct * 100)}%` }} />)}
      </span>
      {nota && <span className="chave-papel"><TextoComTermos texto={nota} /></span>}
    </span>
  );
}

function CartaoBanir({ ban, destaque }: { ban: Ban; destaque: boolean }) {
  const banido = ban.quando_banido_pelo_adv_wr;
  const selo = SELO_DO_BAN(ban.ban_confirma);
  const contexto = Object.entries(ban.contexto_vitorias ?? {});
  return (
    <li className={`chave-heroi${destaque ? " chave-heroi-destaque" : ""}`} title={ban.texto}>
      <RetratoDoHeroi nome={ban.heroi} />
      <div>
        <strong>{ban.heroi}{ban.quem_joga ? ` do ${ban.quem_joga}` : ""}</strong>
        {ban.placar_jogador && <span className="chave-placar numero">{ban.placar_jogador}</span>}
        {ban.papel && <span className="chave-papel">{ban.papel}</span>}
        {temValor(banido) && (
          <span className={destaque ? "chave-queda" : "chave-wr numero"}>
            banido pelo adversário: vence <b>{pct(banido)}</b>{temValor(ban.n_banido) ? ` (n=${ban.n_banido})` : ""}
          </span>
        )}
        <span className="chave-wr numero">com ele {pct(ban.wr_com)} · sem {pct(ban.wr_sem)} ({pp(ban.efeito_pp)})</span>
        {ban.placar_60d && <span className="chave-papel">últimos 60 dias {ban.placar_60d}</span>}
        {ban.bans_contra_por_mes && <BansPorMes meses={ban.bans_contra_por_mes} ultimoPick={ban.ultimo_pick} />}
        {contexto.length > 0 && (
          <span className="chave-contexto" aria-label="Vitórias por situação">
            {contexto.map(([chave, placar]) => (
              <span key={chave} className="chave-chip"><TextoComTermos texto={ROTULO_CONTEXTO[chave] ?? chave.replaceAll("_", " ")} /> {placar}</span>
            ))}
          </span>
        )}
        {ban.leitura_contexto && <span className="chave-leitura"><TextoComTermos texto={ban.leitura_contexto} /></span>}
        <span className="chave-selos">
          <span className={`chave-selo ${ban.ban_confirma === true ? "chave-selo-confirmado" : "chave-selo-indicio"}`}>{ban.ban_confirma === true ? "confirmado" : "indício"}</span>
          {ban.ban_confirma !== true && <span className={`chave-selo ${selo.classe}`}><TextoComTermos texto={selo.texto} /></span>}
          {ban.forca_contexto && <span className={`chave-selo ${SELO_DO_CONTEXTO[ban.forca_contexto].classe}`}><TextoComTermos texto={SELO_DO_CONTEXTO[ban.forca_contexto].texto} /></span>}
        </span>
        <SeloConfianca confianca={ban.confianca} n={ban.n_com} />
      </div>
    </li>
  );
}

// Seis bans à vista; o resto atrás de "ver mais" (o arquivo traz até 12, herói × jogador).
function BansSugeridos({ bans }: { bans: readonly Ban[] }) {
  const [todos, setTodos] = useState(false);
  const visiveis = todos ? bans : bans.slice(0, BANS_VISIVEIS);
  return (
    <>
      <ul className="chave-herois">
        {visiveis.map((b, k) => <CartaoBanir key={`${b.heroi}:${b.quem_joga ?? ""}`} ban={b} destaque={k < BANS_EM_DESTAQUE} />)}
      </ul>
      {bans.length > BANS_VISIVEIS && (
        <button type="button" className="chave-mais" aria-expanded={todos} onClick={() => setTodos((t) => !t)}>
          {todos ? "Ver menos" : `Ver mais ${bans.length - BANS_VISIVEIS} bans`}
        </button>
      )}
    </>
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

// correlacao: pode ser efeito do jogo (ex.: time já perdendo joga pior), não causa; provavel: o efeito se mantém mesmo controlando o estado do jogo aos 15 min.
const CAUSALIDADE: Readonly<Record<string, { texto: string; classe: string; titulo: string }>> = {
  correlacao: { texto: "correlação", classe: "chave-selo-indicio", titulo: "pode ser efeito do jogo (ex.: já estar perdendo), não causa" },
  provavel: { texto: "provável causa", classe: "chave-selo-confirmado", titulo: "o efeito se mantém mesmo controlando o estado do jogo aos 15 min" },
};

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
      <span className="chave-fator">{fator.fator}{fator.padrao_da_liga ? <em> · <TextoComTermos texto="padrão da liga" /></em> : null}</span>
      <span className="chave-barra" aria-hidden="true"><i style={{ width: `${(Math.abs(fator.efeito_pp) / maior) * 100}%` }} /></span>
      <span className="chave-efeito numero">{pp(fator.efeito_pp)}</span>
      <FaixaDoWinRate fator={fator} />
      <span className="chave-wr numero">
        vence {pct(fator.wr_com)} com (n={fator.n_com}) · {pct(fator.wr_sem)} sem (n={fator.n_sem})
        {temValor(fator.ic_baixo) && temValor(fator.ic_alto) ? ` · IC ${pct(fator.ic_baixo)} a ${pct(fator.ic_alto)}` : ""}
      </span>
      {temValor(fator.vs_liga_pp) && <span className="chave-liga"><TextoComTermos texto={comparacaoComLiga(fator.vs_liga_pp, lado)} /></span>}
      {fator.causalidade && (() => {
        const selo = CAUSALIDADE[fator.causalidade] ?? { texto: fator.causalidade, classe: "chave-selo-nao", titulo: "" };
        return (
          <span className="chave-selos">
            <span className={`chave-selo ${selo.classe}`} title={selo.titulo}><TextoComTermos texto={selo.texto} /></span>
            {temValor(fator.efeito_dentro_estado_pp) && (
              <span className="chave-papel">
                <TextoComTermos texto={`mesmo em jogos no mesmo estado aos 15 min, o efeito continua em ${pp(fator.efeito_dentro_estado_pp)}`} />
              </span>
            )}
          </span>
        );
      })()}
      <SeloConfianca confianca={fator.confianca} n={fator.n_com} />
    </li>
  );
}

// Barra de efeito proporcional ao maior efeito das duas colunas, para comparar fatores lado a lado.
function ListaDeFatores({ titulo, fatores, maior, lado }: { titulo: string; fatores: readonly FatorChave[]; maior: number; lado: Lado }) {
  const ordenados = fatores.toSorted((a, b) => Math.abs(b.efeito_pp) - Math.abs(a.efeito_pp));
  return (
    <section id={`chaves-${lado}`} className={`chave-fatores chave-fatores-${lado}`} aria-label={titulo}>
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
      {chaves.historico && <span className="selo chave-historico"><TextoComTermos texto="histórico: roster de antes da TI" /></span>}
      <p className="chave-resumo"><TextoComTermos texto={chaves.resumo_para_vencer} /></p>
      {chaves.banir.length > 0 && (
        <section id="chaves-banir" aria-label="Bans sugeridos">
          <h3>Bans sugeridos</h3>
          {!algumConfirmado && <p className="chave-aviso">Nenhum ban passa no teste estatístico com esta amostra; estes são os heróis com mais sinal.</p>}
          <BansSugeridos bans={chaves.banir} />
        </section>
      )}
      <div className="chave-colunas">
        <ListaDeFatores titulo="Aumenta a chance de vitória deles" fatores={chaves.fatores_vitoria} maior={maior} lado="vitoria" />
        <ListaDeFatores titulo="Aumenta a chance de derrota deles" fatores={chaves.fatores_derrota} maior={maior} lado="derrota" />
      </div>
      {chaves.herois_contra.length > 0 && (
        <section id="chaves-contra" aria-label="Pickar contra eles">
          <h3>Pickar contra eles</h3>
          <ul className="chave-herois">{chaves.herois_contra.map((h) => <CartaoContra key={h.heroi} heroi={h} />)}</ul>
        </section>
      )}
      {estilos.length > 0 && (
        <section aria-label="Estilo que funciona contra">
          <h3>Estilo que funciona contra</h3>
          <ul className="chave-estilos">
            {estilos.map((e) => (
              <li key={e.cluster}><strong><TextoComTermos texto={e.cluster} /></strong> {temValor(e.excesso_pp) && <span className="chave-efeito numero">{pp(e.excesso_pp)}</span>} <TextoComTermos texto={e.texto} /></li>
            ))}
          </ul>
        </section>
      )}
      {chaves.contexto_liga && <p className="chave-nota"><strong><TextoComTermos texto="Padrão da liga." /></strong> <TextoComTermos texto={chaves.contexto_liga} /></p>}
      {chaves.recorte && <p className="chave-nota"><TextoComTermos texto={`Recorte: ${chaves.recorte}.`} /></p>}
    </section>
  );
}
