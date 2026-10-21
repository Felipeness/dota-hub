// Seção "Sua build": linha do tempo das suas compras contra a build dos pros neste draft, vereditos e as sequências.
import { minutos } from "../../confronto/analise";
import { urlDoItem } from "../../confronto/modelo";
import { BuildsPossiveis, SequenciaDeBuild, type Passo } from "../../confronto/SequenciaDeBuild";
import { listaDeNomes } from "../regras/build/matchupDePro";
import type { ItemDaLinhaPro, MinhaCompra, SuaBuild } from "../suaBuild";

const PASSO_DO_EIXO = 5;
/** Com o eixo em 560 px+ e 50 min, 4 min são ~45 px: o ícone (32 px) com folga. */
const DISTANCIA_MINIMA_MIN = 4;
const ANDAR_PX = 50;

type ComAndar<T> = T & Readonly<{ andar: number }>;

/** Põe cada item no primeiro andar livre, pra dois itens em minutos próximos não se sobreporem. */
function empilhar<T extends { minuto: number }>(itens: readonly T[]): ComAndar<T>[] {
  const ultimoPorAndar: number[] = [];
  return [...itens].sort((a, b) => a.minuto - b.minuto).map((item) => {
    const livre = ultimoPorAndar.findIndex((ultimo) => item.minuto - ultimo >= DISTANCIA_MINIMA_MIN);
    const andar = livre === -1 ? ultimoPorAndar.length : livre;
    ultimoPorAndar[andar] = item.minuto;
    return { ...item, andar };
  });
}

const fimDoEixo = (build: SuaBuild) =>
  Math.ceil(Math.max(build.duracaoMin, ...build.pros.map((p) => p.minuto)) / PASSO_DO_EIXO) * PASSO_DO_EIXO;

export function SuaBuildView({ build, heroi }: { build: SuaBuild | null; heroi: string }) {
  return (
    <section className="sua-build" aria-labelledby="titulo-sua-build">
      <h2 id="titulo-sua-build">Sua build</h2>
      {build ? <Conteudo build={build} heroi={heroi} /> : (
        <p>Poucas partidas pro de {heroi} contra este draft (menos de 20 somando os inimigos) para comparar a build.</p>
      )}
    </section>
  );
}

function Conteudo({ build, heroi }: { build: SuaBuild; heroi: string }) {
  const [principal, ...outras] = build.builds;
  return (
    <>
      <p className="sua-build-sub">
        Comparada com {build.jogos.toLocaleString("pt-BR")} partidas pro de {heroi} contra {listaDeNomes(build.inimigos)} (somadas por inimigo).
      </p>
      <LinhaDasCompras build={build} />
      {build.vereditos.length > 0 && (
        <ol className="sua-build-vereditos" aria-label="O que pesou na build">
          {build.vereditos.map((v) => (
            <li key={v.id} className={`sua-build-veredito sua-build-${v.peso}`}>
              <p>{v.texto}</p>
              {v.porque && <p className="sua-build-porque"><b>Por quê:</b> {v.porque}</p>}
            </li>
          ))}
        </ol>
      )}
      <div className="sua-build-sequencias">
        <p className="sua-build-rotulo">Sua sequência</p>
        <SequenciaDeBuild rotulo="Sua sequência" passos={passosMeus(build.minhas, principal?.sequencia ?? [])} />
        {principal && (
          <>
            <p className="sua-build-rotulo">Sequência dos pros contra esse draft</p>
            <SequenciaDeBuild rotulo="Sequência dos pros contra esse draft" passos={passosDosPros(principal.sequencia, build.minhas)} />
          </>
        )}
      </div>
      {build.builds.length > 0 && (
        <details className="sua-build-outras">
          <summary>{outras.length > 0 ? `As ${build.builds.length} builds dos pros contra esse draft` : "A build dos pros contra esse draft"}, com vitória e variações</summary>
          <BuildsPossiveis builds={build.builds} />
        </details>
      )}
    </>
  );
}

/** Sua ordem, com a posição do item na sequência dos pros quando ela é outra (aí a diferença de ordem salta). */
function passosMeus(minhas: readonly MinhaCompra[], dosPros: readonly { chave: string }[]): Passo[] {
  return minhas.map((m, i) => {
    const posicaoPro = dosPros.findIndex((p) => p.chave === m.chave);
    const ordem = posicaoPro !== -1 && posicaoPro !== i ? ` · pros: ${posicaoPro + 1}º` : "";
    return { chave: m.chave, nome: m.nome, minuto: m.minuto, marca: m.marca, nota: `${m.nota}${ordem}` };
  });
}

function passosDosPros(sequencia: readonly { chave: string; nome: string; minuto: number }[], minhas: readonly MinhaCompra[]): Passo[] {
  return sequencia.map((s) => (minhas.some((m) => m.chave === s.chave) ? s : { ...s, marca: "faltou", nota: "você não fez" }));
}

function LinhaDasCompras({ build }: { build: SuaBuild }) {
  const fim = fimDoEixo(build);
  const x = (minuto: number) => (100 * Math.min(minuto, fim)) / fim;
  const minhas = empilhar(build.minhas);
  const pros = empilhar(build.pros);
  const andaresMeus = Math.max(1, ...minhas.map((m) => m.andar + 1));
  const andaresPros = Math.max(1, ...pros.map((p) => p.andar + 1));
  const ligacoes = build.minhas.flatMap((m) => {
    const pro = build.pros.find((p) => p.chave === m.chave);
    return pro ? [{ chave: m.chave, de: x(m.minuto), para: x(pro.minuto), marca: m.marca }] : [];
  });
  return (
    <div className="sb-tl" role="group" aria-label="Suas compras e as dos pros no eixo de minutos">
      <div className="sb-tl-pista">
        <p className="sb-tl-nome">Você</p>
        <ol aria-label="Suas compras" className="sb-tl-linha" style={{ height: andaresMeus * ANDAR_PX }}>
          {minhas.map((m) => (
            <li key={m.chave} className={`sb-tl-item sb-tl-${m.marca}`} style={{ left: `${x(m.minuto)}%`, bottom: m.andar * ANDAR_PX }}
              title={`${m.nome}: ${minutos(m.minuto)} min, ${m.nota}`}>
              <img src={urlDoItem(m.chave)} alt={m.nome} width={32} height={24} loading="lazy" />
              <span className="numero">{m.marca === "atrasado" ? m.nota : `${Math.round(m.minuto)}'`}</span>
            </li>
          ))}
        </ol>
        <svg className="sb-tl-ligacoes" viewBox="0 0 100 10" preserveAspectRatio="none" aria-hidden="true">
          {ligacoes.map((l) => <line key={l.chave} x1={l.de} y1={0} x2={l.para} y2={10} className={`sb-tl-ligacao-${l.marca}`} vectorEffect="non-scaling-stroke" />)}
        </svg>
        <ol aria-label="Build dos pros contra esse draft" className="sb-tl-linha sb-tl-linha-pros" style={{ height: andaresPros * ANDAR_PX }}>
          {pros.map((p) => <ItemDosPros key={p.chave} item={p} x={x(p.minuto)} />)}
        </ol>
        <p className="sb-tl-nome">Pros contra esse draft</p>
        <ol className="sb-tl-eixo" aria-hidden="true">
          {Array.from({ length: fim / PASSO_DO_EIXO + 1 }, (_, i) => i * PASSO_DO_EIXO).map((m) => <li key={m} style={{ left: `${x(m)}%` }}>{m}</li>)}
        </ol>
      </div>
      <p className="sb-tl-legenda">
        <span className="sb-tl-chave-no-tempo">no tempo</span> <span className="sb-tl-chave-atrasado">atrasado</span>{" "}
        <span className="sb-tl-chave-rara">pros quase não fazem</span> <span className="sb-tl-chave-faltou">faltou</span>
      </p>
    </div>
  );
}

function ItemDosPros({ item, x }: { item: ComAndar<ItemDaLinhaPro>; x: number }) {
  const percentual = `${Math.round(100 * item.fracao)}%`;
  return (
    <li className={item.feito ? "sb-tl-item sb-tl-pro" : "sb-tl-item sb-tl-pro sb-tl-faltou"} style={{ left: `${x}%`, top: item.andar * ANDAR_PX }}
      title={`${item.nome}: pros aos ${minutos(item.minuto)} min em ${percentual} das partidas${item.feito ? "" : "; você não fez"}`}>
      <img src={urlDoItem(item.chave)} alt={item.nome} width={32} height={24} loading="lazy" />
      <span className="numero">{Math.round(item.minuto)}' · {percentual}</span>
    </li>
  );
}
