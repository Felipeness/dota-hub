import { Link, useParams } from "react-router";
import { lerId } from "./contas";
import { erroAoVivo, mensagemDoErro } from "./erros";
import { ErroAoVivoView } from "./ErroAoVivo";
import { dataCurta, textoDoResultado } from "./formato";
import { FrescorView } from "./Frescor";
import { resumoDoTime } from "./times";
import { useAoVivo } from "./useAoVivo";

export function TimeAoVivoPage() {
  const { id = "" } = useParams();
  const time = lerId(id);
  if (time === null) return <p role="alert">{mensagemDoErro(erroAoVivo("ENTRADA_INVALIDA"))}</p>;
  return <TimeAoVivo id={time} />;
}

function TimeAoVivo({ id }: { id: number }) {
  const time = useAoVivo(`time:${id}`, (consultar) => resumoDoTime(consultar, id));
  if (time.estado === "parado" || time.estado === "carregando") return <p>Buscando o time no OpenDota…</p>;
  if (time.estado === "erro") return <ErroAoVivoView erro={time.erro} contexto="time" onTentar={time.tentarDeNovo} />;
  const { dados } = time;
  return (
    <article>
      <header>
        <h1>{dados.time.nome}</h1>
        <p>{dados.time.vitorias} vitórias · {dados.time.derrotas} derrotas</p>
        <FrescorView frescor={dados.frescor} onAtualizar={time.tentarDeNovo} />
      </header>
      <h2>Jogadores atuais</h2>
      <ul aria-label="Jogadores atuais">
        {dados.jogadores.map((j) => <li key={j.id}><Link to={`/ao-vivo/contas/${j.id}`}>{j.nome}</Link> · {j.partidas} partidas</li>)}
      </ul>
      <h2>Últimas partidas</h2>
      <ul aria-label="Últimas partidas do time">
        {dados.partidas.map((p) => (
          <li key={p.id}>
            {textoDoResultado(p.venceu)} contra {p.adversario}{p.campeonato && ` · ${p.campeonato}`} · {dataCurta(p.inicio)}
          </li>
        ))}
      </ul>
    </article>
  );
}
