import type { ReactNode } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router";
import { ErroAoVivoView } from "../live/ErroAoVivo";
import { FrescorView } from "../live/Frescor";
import { useAoVivo } from "../live/useAoVivo";
import { carregarBase } from "./carregar";
import { Confronto } from "./Confronto";
import { acharHeroi, urlDoRetrato, type Heroi, type Item } from "./modelo";
import "./confronto.css";

/** Com os dois heróis a URL é /confronto/meu/inimigo; com um só, ele fica na query (?meu= ou ?contra=). */
export function destinoDoConfronto(meu: Heroi | null, inimigo: Heroi | null): string {
  if (meu && inimigo) return `/confronto/${meu.chave}/${inimigo.chave}`;
  const busca = new URLSearchParams();
  if (meu) busca.set("meu", meu.chave);
  if (inimigo) busca.set("contra", inimigo.chave);
  const query = busca.toString();
  return query ? `/confronto?${query}` : "/confronto";
}

export function ConfrontoPage() {
  const base = useAoVivo("confronto:constantes", carregarBase);
  if (base.estado === "parado" || base.estado === "carregando") return <p>Buscando heróis e habilidades no OpenDota…</p>;
  if (base.estado === "erro") return <ErroAoVivoView erro={base.erro} onTentar={base.tentarDeNovo} />;
  return (
    <ConfrontoEscolhido herois={base.dados.herois} itens={base.dados.itens}>
      <FrescorView frescor={base.dados.frescor} onAtualizar={base.tentarDeNovo} />
    </ConfrontoEscolhido>
  );
}

type Escolha = Readonly<{
  herois: readonly Heroi[];
  itens: ReadonlyMap<string, Item>;
  children: ReactNode;
}>;

function ConfrontoEscolhido({ herois, itens, children }: Escolha) {
  const parametros = useParams();
  const [busca] = useSearchParams();
  const navegar = useNavigate();
  const meu = acharHeroi(herois, parametros["meu"] ?? busca.get("meu") ?? undefined);
  const inimigo = acharHeroi(herois, parametros["inimigo"] ?? busca.get("contra") ?? undefined);
  const ir = (novoMeu: Heroi | null, novoInimigo: Heroi | null) => navegar(destinoDoConfronto(novoMeu, novoInimigo));

  return (
    <article className="cf">
      <header className="cf-topo">
        <p className="sobretitulo">Confronto 1x1</p>
        <h1>Como jogar contra</h1>
        <p className="cf-sub">Escolha o seu herói e o inimigo. Tudo aqui sai das habilidades e partidas registradas no OpenDota.</p>
      </header>
      <div className="cf-escolha">
        <SeletorDeHeroi rotulo="Seu herói" herois={herois} escolhido={meu} onEscolher={(h) => ir(h, inimigo)} />
        <button type="button" className="cf-trocar" onClick={() => ir(inimigo, meu)} aria-label="Trocar os heróis de lado">⇄</button>
        <SeletorDeHeroi rotulo="Inimigo" herois={herois} escolhido={inimigo} onEscolher={(h) => ir(meu, h)} />
      </div>
      <datalist id="cf-herois">{herois.map((h) => <option key={h.id} value={h.nome} />)}</datalist>
      {children}
      {meu && inimigo && meu.id !== inimigo.id && <Confronto meu={meu} inimigo={inimigo} itens={itens} />}
      {meu && inimigo && meu.id === inimigo.id && <p role="status">Escolha dois heróis diferentes.</p>}
    </article>
  );
}

type Seletor = Readonly<{ rotulo: string; herois: readonly Heroi[]; escolhido: Heroi | null; onEscolher: (h: Heroi) => void }>;

function SeletorDeHeroi({ rotulo, herois, escolhido, onEscolher }: Seletor) {
  const escolherPeloNome = (nome: string) => {
    const achado = herois.find((h) => h.nome.toLowerCase() === nome.trim().toLowerCase());
    if (achado) onEscolher(achado);
  };
  return (
    <label className="cf-seletor">
      <span className="sobretitulo">{rotulo}</span>
      {escolhido
        ? <img className="cf-retrato" src={urlDoRetrato(escolhido)} alt="" width={128} height={72} />
        : <span className="cf-retrato cf-retrato-vazio" aria-hidden="true">?</span>}
      <input
        key={escolhido?.id ?? "nenhum"}
        type="search" list="cf-herois" placeholder="Digite o nome"
        defaultValue={escolhido?.nome ?? ""}
        onChange={(e) => escolherPeloNome(e.currentTarget.value)}
      />
    </label>
  );
}
