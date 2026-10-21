// Build como sequência lida de relance: ícone, nome e minuto de cada item em ordem, com seta entre eles. Usada no
// confronto (builds dos pros contra um herói) e na análise pós-jogo (a sua build ao lado da dos pros).
import { minutos, porcentagem } from "./analise";
import type { BuildPossivel } from "./buildsDosPros";
import { urlDoItem } from "./modelo";
import "./sequenciaDeBuild.css";

/** Como o item se compara com os pros; só a análise da partida usa, a sequência dos pros fica neutra. */
export type Marca = "no-tempo" | "atrasado" | "rara" | "escolha" | "faltou";

export type Passo = Readonly<{ chave: string; nome: string; minuto: number | null; marca?: Marca; nota?: string }>;

export const minutoCurto = (minuto: number) => `${Math.round(minuto)}'`;

export function SequenciaDeBuild({ passos, rotulo }: { passos: readonly Passo[]; rotulo: string }) {
  return (
    <ol className="sb" aria-label={rotulo}>
      {passos.map((p, i) => (
        <li key={p.chave} className={p.marca ? `sb-passo sb-${p.marca}` : "sb-passo"}>
          <span className="sb-ordem numero" aria-hidden="true">{i + 1}</span>
          <img src={urlDoItem(p.chave)} alt="" width={40} height={30} loading="lazy" />
          <span className="sb-nome">{p.nome}</span>
          {p.minuto !== null && <span className="sb-minuto numero">{minutoCurto(p.minuto)}</span>}
          {p.nota && <span className="sb-nota">{p.nota}</span>}
        </li>
      ))}
    </ol>
  );
}

const vitoria = (b: BuildPossivel) => (b.jogos > 0 ? ` · ${porcentagem(b.vitorias / b.jogos)} de vitória` : "");

/** As builds que os pros seguem, cada uma com a fatia das partidas, a vitória e o que varia nela. */
export function BuildsPossiveis({ builds }: { builds: readonly BuildPossivel[] }) {
  if (builds.length === 0) return null;
  return (
    <ol className="sb-builds">
      {builds.map((b, i) => (
        <li key={b.destaque.chave} className="sb-build">
          <p className="sb-build-titulo">
            <strong>{i === 0 ? "Mais comum" : `Variação ${i}`}: caminho {b.destaque.nome}</strong>
            <span className="sb-build-numeros numero">{porcentagem(b.fracaoDosJogos)} das partidas ({b.jogos}){vitoria(b)}</span>
          </p>
          <SequenciaDeBuild rotulo={`Caminho ${b.destaque.nome}`} passos={b.sequencia.map((s) => (s.fracao < 0.95 ? { ...s, nota: porcentagem(s.fracao) } : s))} />
          {b.opcoes.length > 0 && (
            <p className="sb-opcoes">
              <span className="sb-opcoes-rotulo">Situacional</span>{" "}
              {b.opcoes.map((o) => `${o.nome} (${porcentagem(o.fracao)}, ~${minutos(o.minuto)} min)`).join(" · ")}
            </p>
          )}
        </li>
      ))}
    </ol>
  );
}
