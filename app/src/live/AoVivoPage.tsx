import { useState, type FormEvent } from "react";
import { Link, useNavigate, useSearchParams } from "react-router";
import { buscar, lerId } from "./contas";
import { ErroAoVivoView } from "./ErroAoVivo";
import { dataCurta } from "./formato";
import { FrescorView } from "./Frescor";
import type { Busca } from "./tipos";
import { useAoVivo } from "./useAoVivo";

export function AoVivoPage() {
  const [params, setParams] = useSearchParams();
  const navegar = useNavigate();
  const consulta = params.get("q") ?? "";
  const [texto, setTexto] = useState(consulta);
  const busca = useAoVivo(consulta ? `busca:${consulta}` : null, (consultar) => buscar(consultar, consulta));

  function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const conta = lerId(texto);
    if (conta !== null) {
      navegar(`/ao-vivo/contas/${conta}`);
      return;
    }
    setParams({ q: texto.trim() });
  }

  return (
    <>
      <h1>Busca ao vivo</h1>
      <form role="search" onSubmit={enviar}>
        <input type="search" aria-label="Conta (nome ou número) ou time" value={texto} onChange={(e) => setTexto(e.target.value)} />
        <button type="submit">Buscar</button>
      </form>
      {busca.estado === "carregando" && <p>Buscando no OpenDota…</p>}
      {busca.estado === "erro" && <ErroAoVivoView erro={busca.erro} onTentar={busca.tentarDeNovo} />}
      {busca.estado === "ok" && <Resultados busca={busca.dados} consulta={consulta} onAtualizar={busca.tentarDeNovo} />}
    </>
  );
}

function Resultados({ busca, consulta, onAtualizar }: { busca: Busca; consulta: string; onAtualizar: () => void }) {
  if (busca.contas.length + busca.times.length === 0) return <p>Nada encontrado para {consulta}.</p>;
  return (
    <>
      <FrescorView frescor={busca.frescor} onAtualizar={onAtualizar} />
      {busca.contas.length > 0 && (
        <ul className="cartoes" aria-label="Contas">
          {busca.contas.map((c) => (
            <li key={c.id}>
              <Link to={`/ao-vivo/contas/${c.id}`}>
                <strong>{c.nome}</strong>
                {c.ultimaPartida && <span>última partida {dataCurta(Date.parse(c.ultimaPartida) / 1_000)}</span>}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {busca.times.length > 0 && (
        <ul className="cartoes" aria-label="Times">
          {busca.times.map((t) => (
            <li key={t.id}>
              <Link to={`/ao-vivo/times/${t.id}`}><strong>{t.nome}</strong><span>{t.vitorias} V · {t.derrotas} D</span></Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
