import { Fragment } from "react";

// O export já trocou caminho local por nome legível e completou "https://"; aqui só vira link o que é URL.
const ENDERECO = /(https?:\/\/[^\s)]+)/;
const semEsquema = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "");

// split com grupo de captura devolve as URLs nas posições ímpares.
function Fonte({ texto }: { texto: string }) {
  return texto.split(ENDERECO).map((parte, i) => i % 2 === 1
    ? <a key={i} href={parte} target="_blank" rel="noreferrer">{semEsquema(parte)}</a>
    : <Fragment key={i}>{parte}</Fragment>);
}

/** Fontes separadas por ";", com as URLs clicáveis. A lista é estática, então o índice serve de chave. */
export function ListaDeFontes({ fontes }: { fontes: readonly string[] }) {
  return fontes.map((f, i) => <Fragment key={i}>{i > 0 && "; "}<Fonte texto={f} /></Fragment>);
}
