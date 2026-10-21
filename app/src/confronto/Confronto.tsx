import { TextoComTermos } from "../glossary/Termo";
import { ErroAoVivoView } from "../live/ErroAoVivo";
import { FrescorView } from "../live/Frescor";
import { useAoVivo, type EstadoAoVivo } from "../live/useAoVivo";
import { carregarEstatisticas, type Estatisticas } from "./carregar";
import type { PopularidadeFonte } from "./fonte";
import { AnaliseDePro, ComAnalisesDoPar } from "./AnaliseDePro";
import { filtrarCounters, type CounterUsado, type DadosDoPar } from "./countersDosPros";
import { ProsContraInimigo } from "./ProsContraInimigo";
import { dicasDoConfronto, type Dica, type Fase } from "./dicas";
import { analisarMecanicas, itensDoConfronto, type Achado } from "./mecanicas";
import { urlDoItem, type Heroi, type Item } from "./modelo";
import type { Recurso } from "./respostas";
import { vantagem, vezesComprado, type Vantagem, type Veredito } from "./vantagem";

type Props = Readonly<{ meu: Heroi; inimigo: Heroi; itens: ReadonlyMap<string, Item> }>;

export function Confronto({ meu, inimigo, itens }: Props) {
  const achados = analisarMecanicas(meu, inimigo, itens);
  const estatisticas = useAoVivo(`confronto:estatisticas:${meu.id}`, (consultar) => carregarEstatisticas(consultar, meu.id));
  return (
    <>
      <BlocoVantagem meu={meu} inimigo={inimigo} estatisticas={estatisticas} />
      <ComAnalisesDoPar meu={meu} inimigo={inimigo}>
        {({ minha, dele }) => (
          <>
            {minha && <ProsContraInimigo meuNome={meu.nome} inimigoNome={inimigo.nome} contra={minha.contra_inimigo[inimigo.chave] ?? null} nomes={minha.nomes_dos_itens} />}
            {minha && dele && <AnaliseDePro meu={meu} inimigo={inimigo} minha={minha} dele={dele} />}
            <BlocoMecanicas inimigo={inimigo} achados={achados} />
            <BlocoItens
              meu={meu} achados={achados} popularidade={estatisticas.estado === "ok" ? estatisticas.dados.popularidade : null}
              par={{ meuNome: meu.nome, inimigo, contra: minha?.contra_inimigo[inimigo.chave] ?? null, spikes: minha?.spikes ?? [] }}
            />
          </>
        )}
      </ComAnalisesDoPar>
      <BlocoDicas meu={meu} inimigo={inimigo} />
      <p className="cf-fontes">
        Fontes: OpenDota (constants/heroes, hero_abilities, abilities, items e aghs_desc; heroes/{meu.id}/matchups e itemPopularity)
        e a análise de partidas pro dos patches 7.40 e 7.41 (OpenDota explorer, partidas de liga).
        Os textos entre aspas são do próprio jogo, em inglês, como o OpenDota entrega.
      </p>
    </>
  );
}

const pct = (n: number) => `${(100 * n).toLocaleString("pt-BR", { maximumFractionDigits: 1 })}%`;
const pp = (n: number) => `${(100 * n).toLocaleString("pt-BR", { maximumFractionDigits: 1 })} pp`;
const inteiro = (n: number) => n.toLocaleString("pt-BR");

const VEREDITO: Record<Veredito, (meu: string, inimigo: string) => string> = {
  sua: (meu) => `Vantagem do ${meu}`,
  dele: (_, inimigo) => `Vantagem do ${inimigo}`,
  equilibrado: () => "Sem vantagem clara",
  "pouco-dado": () => "Poucos jogos para dizer",
  "sem-dado": () => "Sem jogos registrados",
};

type ParaVantagem = Readonly<{ meu: Heroi; inimigo: Heroi; estatisticas: EstadoAoVivo<Estatisticas> & { tentarDeNovo: () => void } }>;

function BlocoVantagem({ meu, inimigo, estatisticas }: ParaVantagem) {
  return (
      <section className="cf-bloco" aria-labelledby="cf-vantagem">
        <h2 id="cf-vantagem">Quem leva vantagem</h2>
        {(estatisticas.estado === "parado" || estatisticas.estado === "carregando") && <p>Buscando os jogos no OpenDota…</p>}
        {estatisticas.estado === "erro" && <ErroAoVivoView erro={estatisticas.erro} onTentar={estatisticas.tentarDeNovo} />}
        {estatisticas.estado === "ok" && (
          <>
            <Placar v={vantagem(estatisticas.dados.matchups, inimigo.id)} meu={meu} inimigo={inimigo} />
            <FrescorView frescor={estatisticas.dados.frescor} onAtualizar={estatisticas.tentarDeNovo} />
          </>
        )}
      </section>
  );
}

function Placar({ v, meu, inimigo }: { v: Vantagem; meu: Heroi; inimigo: Heroi }) {
  const fonte = `OpenDota, partidas de liga com ${meu.nome} contra ${inimigo.nome}: ${inteiro(v.jogos)} jogos`;
  if (v.veredito === "sem-dado") return <p className="cf-placar-veredito"><TextoComTermos texto={VEREDITO[v.veredito](meu.nome, inimigo.nome)} />. <small className="cf-fonte">{fonte}</small></p>;
  return (
    <div className={`cf-placar cf-placar-${v.veredito}`}>
      <p className="cf-placar-veredito"><TextoComTermos texto={VEREDITO[v.veredito](meu.nome, inimigo.nome)} /></p>
      <p className="cf-placar-numero numero">{pct(v.taxa)}</p>
      <p>de vitória do {meu.nome} em {inteiro(v.jogos)} jogos ({inteiro(v.vitorias)} vitórias), <TextoComTermos texto={`margem de ±${pp(v.margem)}.`} /></p>
      <details className="cf-detalhe">
        <summary>Como ler</summary>
        <p><TextoComTermos texto="A margem é o intervalo de 95% para esse número de jogos. Só chamamos de vantagem quando o intervalo inteiro fica de um lado dos 50%. Com menos de 20 jogos não damos veredito." /></p>
      </details>
      <small className="cf-fonte">{fonte}</small>
    </div>
  );
}

function BlocoMecanicas({ inimigo, achados }: { inimigo: Heroi; achados: readonly Achado[] }) {
  return (
    <section className="cf-bloco" aria-labelledby="cf-porque">
      <h2 id="cf-porque">Por que: o que o {inimigo.nome} faz</h2>
      {achados.length === 0 && <p>As habilidades dele não batem com nenhuma regra (invisibilidade, silêncio, controle, ilusões, cura, evasão, fuga, dano mágico ou puro).</p>}
      <ul className="cf-lista">
        {achados.map((a) => (
          <li key={a.id}>
            <details className="cf-cartao">
              <summary>
                <strong>{a.titulo}</strong>
                <span className="cf-chips">{a.evidencias.map((e) => <span key={e.habilidade} className="cf-chip">{e.habilidade}</span>)}</span>
              </summary>
              <p><TextoComTermos texto={a.porque} /></p>
              <ul className="cf-provas">
                {a.evidencias.map((e) => <li key={e.habilidade}><b>{e.habilidade}</b>: “{e.trecho}”</li>)}
              </ul>
              {a.observacoes.map((o) => <p key={o} className="cf-alerta"><TextoComTermos texto={o} /></p>)}
              {a.trunfos.length > 0 && (
                <p className="cf-trunfo">Do seu lado: <TextoComTermos texto={a.trunfos.map((t) => `${t.habilidade} (${t.trecho})`).join("; ")} /></p>
              )}
              {a.recursos.length > 0 && (
                <ul className="cf-provas">
                  {a.recursos.map((r) => <li key={r.id}><RecursoView recurso={r} /></li>)}
                </ul>
              )}
              <small className="cf-fonte">Fonte: OpenDota, constants/abilities (descrição, atributos, bkbpierce e dispellable).</small>
            </details>
          </li>
        ))}
      </ul>
    </section>
  );
}

function rotuloDaFonte(url: string): string {
  const { hostname, pathname } = new URL(url);
  const fim = pathname.split("/").filter(Boolean).at(-1);
  return fim ? `${hostname}, ${fim}` : hostname;
}

function RecursoView({ recurso }: { recurso: Recurso }) {
  return (
    <>
      <p><b>{recurso.rotulo}</b>: <TextoComTermos texto={recurso.resumo} /></p>
      <details className="cf-detalhe">
        <summary>Por que e de onde vem</summary>
        {recurso.detalhes.map((d) => <p key={d}><TextoComTermos texto={d} /></p>)}
        {recurso.prova && <p>“<TextoComTermos texto={recurso.prova} />”</p>}
        <small className="cf-fonte">
          {recurso.patch ? `Conferido no patch ${recurso.patch}. ` : ""}Fontes:{" "}
          {recurso.fontes.map((f, i) => (
            <span key={f}>{i > 0 && "; "}<a href={f} target="_blank" rel="noreferrer">{rotuloDaFonte(f)}</a></span>
          ))}
        </small>
      </details>
    </>
  );
}

type Itens = Readonly<{ meu: Heroi; achados: readonly Achado[]; popularidade: PopularidadeFonte | null; par: DadosDoPar }>;

function BlocoItens({ meu, achados, popularidade, par }: Itens) {
  const { usados, genericos } = filtrarCounters(itensDoConfronto(achados), par);
  if (usados.length === 0 && genericos.length === 0) return null;
  return (
    <section className="cf-bloco" aria-labelledby="cf-itens">
      <h2 id="cf-itens">Itens que viram o confronto</h2>
      {usados.length === 0 && <p>Nenhum counter genérico contra o {par.inimigo.nome} aparece nas compras dos pros de {meu.nome}: siga as builds acima.</p>}
      <ul className="cf-itens">
        {usados.map((c) => <CounterView key={c.item.chave} counter={c} meu={meu} par={par} popularidade={popularidade} />)}
      </ul>
      {genericos.length > 0 && (
        <details className="cf-cartao cf-genericos">
          <summary><strong>Counters genéricos que os pros quase não usam aqui</strong> <span className="cf-resumo">{genericos.map((g) => g.item.nome).join(", ")}</span></summary>
          <ul className="cf-provas">
            {genericos.map((g) => <li key={g.item.chave}><b>{g.item.nome}</b> ({g.mecanica.toLowerCase()}): <TextoComTermos texto={g.razao} /></li>)}
          </ul>
        </details>
      )}
    </section>
  );
}

type ParaCounter = Readonly<{ counter: CounterUsado; meu: Heroi; par: DadosDoPar; popularidade: PopularidadeFonte | null }>;

function CounterView({ counter: { item, motivo, prova, mecanica, fracaoPro }, meu, par, popularidade }: ParaCounter) {
  const compras = popularidade ? vezesComprado(popularidade, item.id) : 0;
  return (
    <li className="cf-item">
      <img src={urlDoItem(item.chave)} alt="" width={44} height={32} loading="lazy" />
      <div>
        <p><strong>{item.nome}</strong> <span className="cf-chip">{mecanica}</span></p>
        <p><TextoComTermos texto={motivo} /></p>
        {fracaoPro !== null && <p className="cf-pros-fracao">Os pros de {meu.nome} fazem em <b className="numero">{pct(fracaoPro)}</b> das partidas contra o {par.inimigo.nome}.</p>}
        <details className="cf-detalhe">
          <summary>De onde vem</summary>
          <p>“{prova}”</p>
          <small className="cf-fonte">
            Texto do item no OpenDota (constants/items).
            {compras > 0 && ` Comprado ${inteiro(compras)} vezes em partidas de liga de ${meu.nome} (OpenDota, itemPopularity).`}
          </small>
        </details>
      </div>
    </li>
  );
}

const FASES: ReadonlyArray<readonly [Fase, string]> = [["lane", "Na lane"], ["meio", "No meio do jogo"], ["luta", "Na luta"]];

function BlocoDicas({ meu, inimigo }: { meu: Heroi; inimigo: Heroi }) {
  const dicas = dicasDoConfronto(meu, inimigo);
  if (dicas.length === 0) return null;
  return (
    <section className="cf-bloco" aria-labelledby="cf-dicas">
      <h2 id="cf-dicas">Na prática</h2>
      {FASES.map(([fase, titulo]) => <GrupoDeDicas key={fase} titulo={titulo} dicas={dicas.filter((d) => d.fase === fase)} />)}
    </section>
  );
}

function GrupoDeDicas({ titulo, dicas }: { titulo: string; dicas: readonly Dica[] }) {
  if (dicas.length === 0) return null;
  return (
    <>
      <h3 className="cf-fase">{titulo}</h3>
      <ul className="cf-lista">
        {dicas.map((d) => <li key={d.texto} className="cf-dica"><p><TextoComTermos texto={d.texto} /></p><small className="cf-fonte">{d.fonte}</small></li>)}
      </ul>
    </>
  );
}
