import { useState, type FormEvent } from "react";
import { Link, useNavigate, useSearchParams } from "react-router";
import { useData } from "../data/useData";
import { CAMINHO_INDICE, indiceAtlasSchema } from "../times/schemas";
import { buscar, lerConta } from "./contas";
import { ErroAoVivoView } from "./ErroAoVivo";
import { dataCurta } from "./formato";
import { FrescorView } from "./Frescor";
import type { Busca } from "./tipos";
import { useAoVivo } from "./useAoVivo";

// Exemplos clicáveis: contas de pros do atlas (rosters.csv do dota-tier1), um time e o formato do número da conta.
const EXEMPLOS = [
  { rotulo: "Yatoro", detalhe: "Team Spirit, pos 1", valor: "321580662" },
  { rotulo: "Larl", detalhe: "Team Spirit, pos 2", valor: "106305042" },
  { rotulo: "Saksa", detalhe: "Team Yandex, pos 4", valor: "103735745" },
  { rotulo: "Team Spirit", detalhe: "time", valor: "Team Spirit" },
  { rotulo: "302214028", detalhe: "número da conta", valor: "302214028" },
] as const;

export function AoVivoPage() {
  const [params, setParams] = useSearchParams();
  const navegar = useNavigate();
  const consulta = params.get("q") ?? "";
  const [texto, setTexto] = useState(consulta);
  const busca = useAoVivo(consulta ? `busca:${consulta}` : null, (consultar) => buscar(consultar, consulta));

  // Conta (número ou link do perfil) vai direto para a conta; o resto vira busca por nome.
  function procurar(valor: string) {
    setTexto(valor);
    const conta = lerConta(valor);
    if (conta !== null) {
      navegar(`/ao-vivo/contas/${conta}`);
      return;
    }
    setParams({ q: valor.trim() });
  }

  function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    procurar(texto);
  }

  return (
    <>
      <h1>Busca ao vivo</h1>
      <Explicacao />
      <form role="search" onSubmit={enviar}>
        <input type="search" aria-label="Conta (nome ou número) ou time" placeholder="Nome do jogador, número da conta ou time"
          value={texto} onChange={(e) => setTexto(e.target.value)} />
        <button type="submit">Buscar</button>
      </form>
      {!consulta && <Exemplos onEscolher={procurar} />}
      {busca.estado === "carregando" && <p role="status" className="ao-vivo-carregando">Buscando no OpenDota…</p>}
      {busca.estado === "erro" && <ErroAoVivoView erro={busca.erro} onTentar={busca.tentarDeNovo} />}
      {busca.estado === "ok" && <Resultados busca={busca.dados} consulta={consulta} onAtualizar={busca.tentarDeNovo} />}
    </>
  );
}

function Explicacao() {
  return (
    <div className="ao-vivo-explicacao">
      <p>Consulta o OpenDota agora, sem cadastro, e mostra os números de hoje, não os do export.</p>
      <dl>
        <div><dt>Dá para buscar</dt><dd>jogador pelo nome do perfil, pelo número da conta ou pelo link do perfil no Dotabuff, OpenDota ou STRATZ; time pelo nome.</dd></div>
        <div><dt>No resultado</dt><dd>medalha, taxa de vitória, heróis mais jogados, partidas recentes e a rota aproximada de cada partida no mapa.</dd></div>
      </dl>
    </div>
  );
}

function Exemplos({ onEscolher }: { onEscolher: (valor: string) => void }) {
  return (
    <section className="ao-vivo-exemplos" aria-labelledby="titulo-exemplos">
      <h2 id="titulo-exemplos">Experimente</h2>
      <ul className="pilulas">
        {EXEMPLOS.map((e) => (
          <li key={e.valor}>
            <button type="button" className="pilula" onClick={() => onEscolher(e.valor)}>
              {e.rotulo} <span className="ao-vivo-exemplo-detalhe">{e.detalhe}</span>
            </button>
          </li>
        ))}
      </ul>
      <p className="ao-vivo-dica">O número da sua conta: no Dota 2, abra o seu perfil; é o <strong>ID de amigo</strong> (Friend ID).</p>
    </section>
  );
}

function Resultados({ busca, consulta, onAtualizar }: { busca: Busca; consulta: string; onAtualizar: () => void }) {
  const atlas = useData(CAMINHO_INDICE, indiceAtlasSchema);
  if (busca.contas.length + busca.times.length === 0) {
    return (
      <p className="ao-vivo-vazio">
        Nada encontrado para {consulta}. Tente o nome exato do perfil, o número da conta (ID de amigo) ou o nome completo do time, como Team Spirit.
      </p>
    );
  }
  // Time do resultado que também está no atlas Tier 1 ganha o atalho para a análise.
  const analiseDoTime = (idOpenDota: number) =>
    atlas.estado === "ok" ? atlas.dados.times.find((t) => t.team_ids.includes(idOpenDota)) : undefined;
  return (
    <>
      <FrescorView frescor={busca.frescor} onAtualizar={onAtualizar} />
      {/* Times primeiro: são poucos e precisos; contas com o mesmo nome costumam ser dezenas. */}
      {busca.times.length > 0 && (
        <ul className="cartoes" aria-label="Times">
          {busca.times.map((t) => {
            const analise = analiseDoTime(t.id);
            return (
              <li key={t.id} className="ao-vivo-time">
                <Link to={`/ao-vivo/times/${t.id}`}><strong>{t.nome}</strong><span>{t.vitorias} V · {t.derrotas} D</span></Link>
                {analise && <Link className="ao-vivo-atlas" to={`/times/${analise.id}`}>Ver análise do time</Link>}
              </li>
            );
          })}
        </ul>
      )}
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
    </>
  );
}
