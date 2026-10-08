import { useState } from "react";
import ReactMarkdown from "react-markdown";
import type { ConteudoItem } from "../data/schemas";
import { textoExtra } from "../glossary/filtros";
import { ListaDeFontes } from "../layout/Fontes";
import { ordenarSolos, quantosSolos, replaysDoSolo } from "./solos";

function GuiaDoSolo({ solo }: { solo: ConteudoItem }) {
  // Sem replay confirmado (ex.: Sven, só candidatos; Lifestealer, recomendado) o selo diria "Visto em 0 replays".
  const replays = replaysDoSolo(solo);
  return (
    <article className="solo-guia" aria-label={textoExtra(solo, "heroi") ?? solo.titulo}>
      {replays > 0 && <span className="selo selo-replay">Visto em {replays} replays</span>}
      <h4>Básico</h4>
      <ReactMarkdown>{solo.secoes.basico}</ReactMarkdown>
      {solo.secoes.avancado && <><h4>Avançado</h4><ReactMarkdown>{solo.secoes.avancado}</ReactMarkdown></>}
      <details className="solo-fontes">
        <summary>Patch {solo.patch}. Fontes</summary>
        <p className="fonte"><ListaDeFontes fontes={solo.fontes} /></p>
      </details>
    </article>
  );
}

export function SoloRoshan({ solos }: { solos: ConteudoItem[] }) {
  const ordenados = ordenarSolos(solos);
  const [escolhido, setEscolhido] = useState<string | null>(null);
  const unico = ordenados.length === 1 ? ordenados[0] : undefined;
  const aberto = unico ?? ordenados.find((s) => s.id === escolhido);
  return (
    <section aria-label="Solo de Roshan por herói" className="solo-roshan">
      <h3 className="sobretitulo">Solo de Roshan por herói</h3>
      {ordenados.length === 0 && <p>Ainda não escrito.</p>}
      {!unico && ordenados.length > 0 && (
        <div className="pilulas solo-herois">
          {ordenados.map((s) => (
            <button key={s.id} className="pilula" aria-pressed={s.id === escolhido} onClick={() => setEscolhido(s.id)}>
              {textoExtra(s, "heroi") ?? s.titulo}<span className="numero">{quantosSolos(s)} solos</span>
            </button>
          ))}
        </div>
      )}
      {aberto && <GuiaDoSolo solo={aberto} />}
    </section>
  );
}
