import type { ReactNode } from "react";
import { TextoComTermos } from "../glossary/Termo";
import { ListaDeFontes } from "../layout/Fontes";
import { IconeOuIniciais } from "../live/partida/BuildDaPartida";
import { dividirResumo, urlDoRetrato } from "./resumo";

// Peças comuns ao guia completo (FichaHeroi) e à ficha por posição (FichaPorPosicao).

const urlDoIconeDeItem = (item: string) => `/data/retratos/itens/${item}.webp`;

/** Ícone exportado do jogo; sem slug (habilidade passiva na build) ou sem arquivo, as iniciais do nome. */
export function IconeDoItem({ item, nome }: { item: string | null; nome: string }) {
  return <IconeOuIniciais src={item === null ? null : urlDoIconeDeItem(item)} nome={nome} classe="build-icone" />;
}

type SecaoProps = { titulo: string; aberta?: boolean; contagem?: number; children: ReactNode };

/** Seção fechada sem contagem no título é indistinguível de uma seção vazia; por isso o número no resumo. */
export function Secao({ titulo, aberta = false, contagem, children }: SecaoProps) {
  return (
    <details className="recolhivel" open={aberta}>
      <summary><h3 className="sobretitulo">{titulo}{contagem !== undefined && ` (${contagem})`}</h3></summary>
      {children}
    </details>
  );
}

type Porque = Readonly<{ detalhe: string | null; contra: string | null; combo: string | null; fontes: readonly string[] }>;

/** Detalhe do porquê pesquisado: o "contra" vem destacado porque é o que decide a compra contra um herói específico. */
export function DetalheDoPorque({ porque }: { porque: Porque }) {
  return (
    <>
      {porque.detalhe && <p><TextoComTermos texto={porque.detalhe} /></p>}
      {porque.contra && <p className="item-contra"><strong><TextoComTermos texto="Resolve contra:" /></strong> <TextoComTermos texto={porque.contra} /></p>}
      {porque.combo && <p><strong><TextoComTermos texto="Combo:" /></strong> <TextoComTermos texto={porque.combo} /></p>}
      {porque.fontes.length > 0 && <p className="fonte">Fontes: <ListaDeFontes fontes={porque.fontes} /></p>}
    </>
  );
}

type TopoProps = Readonly<{ id: string; nome: string; sobretitulo: string; resumo: string; children?: ReactNode }>;

/** Retrato, nome e a primeira frase do resumo em destaque; o resto do resumo fica recolhido. */
export function TopoDoHeroi({ id, nome, sobretitulo, resumo, children }: TopoProps) {
  const { abertura, resto } = dividirResumo(resumo);
  return (
    <header className="ficha-topo">
      <img className="retrato" src={urlDoRetrato(id)} alt="" width={128} height={72} />
      <div><span className="sobretitulo">{sobretitulo}</span><h1>{nome}</h1></div>
      <p className="abertura"><TextoComTermos texto={abertura} /></p>
      {children}
      {resto && <details className="recolhivel"><summary>Ler o resumo completo</summary><p><TextoComTermos texto={resto} /></p></details>}
    </header>
  );
}
