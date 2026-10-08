import { useState } from "react";
import { Link } from "react-router";
import { Indisponivel, useData } from "../data/useData";
import { TextoComTermos } from "../glossary/Termo";
import { CAMINHO_INDICE, chavesSchema, indiceAtlasSchema, type Chaves } from "../times/schemas";
import type { HeroId } from "./guia";
import { formatarPp, type HeroiDraft } from "./pontuacao";
import { Retrato } from "./Retrato";

const pct = (fracao: number) => `${Math.round(fracao * 100)}%`;

type Acoes = Readonly<{
  porNome: ReadonlyMap<string, HeroiDraft>;
  ocupado: (id: HeroId) => boolean;
  onBanir: (id: HeroId) => void;
  onPegar: (id: HeroId) => void;
}>;

function BotaoDoHeroi({ nome, rotulo, acoes, onAcao }: { nome: string; rotulo: string; acoes: Acoes; onAcao: (id: HeroId) => void }) {
  const heroi = acoes.porNome.get(nome);
  if (!heroi) return null;
  return <button type="button" disabled={acoes.ocupado(heroi.id)} onClick={() => onAcao(heroi.id)}>{rotulo}</button>;
}

function CabecaDoHeroi({ nome, porNome }: { nome: string; porNome: Acoes["porNome"] }) {
  const heroi = porNome.get(nome);
  return <>{heroi && <Retrato heroi={heroi} />}<strong>{nome}</strong></>;
}

function Ban({ ban, acoes }: { ban: Chaves["banir"][number]; acoes: Acoes }) {
  const placar = ban.placar_jogador ?? ban.quem_joga;
  return (
    <li className="draft-sugestao">
      <div className="draft-sugestao-topo">
        <CabecaDoHeroi nome={ban.heroi} porNome={acoes.porNome} />
        <span className="numero draft-pp a-favor-deles">{formatarPp(ban.efeito_pp)} para eles</span>
        <BotaoDoHeroi nome={ban.heroi} rotulo="Banir" acoes={acoes} onAcao={acoes.onBanir} />
      </div>
      <p className="draft-linha">
        Vencem <span className="numero">{pct(ban.wr_com)}</span> com ele ({ban.n_com} jogos) e <span className="numero">{pct(ban.wr_sem)}</span> sem ({ban.n_sem}).
        {ban.papel && <> <TextoComTermos texto={`Papel: ${ban.papel}.`} /></>}
      </p>
      {placar && <p className="draft-linha">Placar do jogador: {placar}{ban.placar_60d && <>; últimos 60 dias: {ban.placar_60d}</>}.</p>}
      <details className="draft-porque">
        <summary>Por quê, em detalhe (confiança {ban.confianca})</summary>
        <p><TextoComTermos texto={ban.texto} /></p>
        {ban.leitura_contexto && <p><TextoComTermos texto={ban.leitura_contexto} /></p>}
      </details>
    </li>
  );
}

function HeroiContra({ heroi, acoes }: { heroi: Chaves["herois_contra"][number]; acoes: Acoes }) {
  return (
    <li className="draft-sugestao">
      <div className="draft-sugestao-topo">
        <CabecaDoHeroi nome={heroi.heroi} porNome={acoes.porNome} />
        <span className="numero draft-pp">{formatarPp(heroi.efeito_pp)} para eles</span>
        <BotaoDoHeroi nome={heroi.heroi} rotulo="Pegar" acoes={acoes} onAcao={acoes.onPegar} />
      </div>
      <p className="draft-linha">Contra ele vencem <span className="numero">{pct(heroi.wr_equipe_contra)}</span> em {heroi.n} jogos.</p>
      <details className="draft-porque">
        <summary>Por quê, em detalhe (confiança {heroi.confianca})</summary>
        <p><TextoComTermos texto={heroi.texto} /></p>
      </details>
    </li>
  );
}

function RecomendacoesDoTime({ id, acoes }: { id: string; acoes: Acoes }) {
  const chaves = useData(`/data/times_atlas/${id}.chaves.json`, chavesSchema);
  if (chaves.estado === "carregando") return <p>Carregando…</p>;
  if (chaves.estado === "indisponivel") return <Indisponivel motivo={chaves.motivo} />;
  const { banir, herois_contra: contra, resumo_para_vencer: resumo, historico } = chaves.dados;
  return (
    <>
      {historico && <span className="selo"><TextoComTermos texto="histórico: roster de antes da TI" /></span>}
      <p className="draft-explicacao"><TextoComTermos texto={resumo} /></p>
      <div className="draft-colunas">
        <section className="draft-coluna" aria-label="Bans contra o time">
          <h2>Banir</h2>
          <p className="draft-explicacao">Heróis com que o time vence mais do que sem, pelas partidas analisadas no atlas.</p>
          {banir.length === 0 ? <p className="draft-nota">O atlas não achou ban com dado para este time.</p>
            : <ol className="draft-sugestoes">{banir.map((b) => <Ban key={b.heroi} ban={b} acoes={acoes} />)}</ol>}
        </section>
        <section className="draft-coluna" aria-label="Heróis contra o time">
          <h2>Pegar contra eles</h2>
          <p className="draft-explicacao"><TextoComTermos texto="Heróis do adversário contra os quais o time vence menos do que o esperado." /></p>
          {contra.length === 0 ? <p className="draft-nota">O atlas não achou herói com dado contra este time.</p>
            : <ol className="draft-sugestoes">{contra.map((h) => <HeroiContra key={h.heroi} heroi={h} acoes={acoes} />)}</ol>}
        </section>
      </div>
      <Link to={`/times/${id}`}>Análise completa do time</Link>
    </>
  );
}

export function ContraTime(acoes: Acoes) {
  const indice = useData(CAMINHO_INDICE, indiceAtlasSchema);
  const [timeId, setTimeId] = useState("");
  if (indice.estado === "carregando") return <p>Carregando…</p>;
  if (indice.estado === "indisponivel") return <Indisponivel motivo={indice.motivo} />;
  return (
    <section className="draft-contra-time" aria-label="Contra um time tier 1">
      <label className="campo">
        Time adversário
        <select value={timeId} onChange={(e) => setTimeId(e.target.value)}>
          <option value="">Escolha o time</option>
          {indice.dados.times.map((t) => <option key={t.id} value={t.id}>{t.nome}</option>)}
        </select>
      </label>
      {timeId !== "" && <RecomendacoesDoTime id={timeId} acoes={acoes} />}
    </section>
  );
}
