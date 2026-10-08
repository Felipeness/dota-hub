import { useState } from "react";
import { Link, useParams } from "react-router";
import { heroiSchema, type Heroi } from "../data/schemas";
import { Indisponivel, useData } from "../data/useData";
import { TextoComTermos } from "../glossary/Termo";
import { lerId, resumoDaConta } from "../live/contas";
import { ErroAoVivoView } from "../live/ErroAoVivo";
import { dataCurta, minutos, textoDoResultado } from "../live/formato";
import { useAoVivo } from "../live/useAoVivo";
import { checklistAntes, checklistDepois, type ItemAntes, type ItemDepois } from "./dados";
import { buscarDadosReais } from "./fonte";
import "./checklist.css";

export function ChecklistHeroiPage() {
  const { heroi: id = "" } = useParams();
  const heroi = useData(`/data/herois/${id}.json`, heroiSchema);
  if (heroi.estado === "carregando") return <p>Carregando…</p>;
  if (heroi.estado === "indisponivel") return <Indisponivel motivo={heroi.motivo} />;
  return <ChecklistDoHeroi heroi={heroi.dados} />;
}

function ChecklistLinha({ ok, titulo, porque, onAlternar }: ItemDepois & Partial<ItemAntes> & { onAlternar?: () => void }) {
  const classe = ok === true ? "check-ok" : ok === false ? "check-falhou" : "check-neutro";
  const simbolo = ok === true ? "✓" : ok === false ? "✗" : "·";
  return (
    <li className={`checklist-item ${classe}`}>
      <details>
        <summary>
          <span className="checklist-marca" aria-hidden="true">{simbolo}</span> <TextoComTermos texto={titulo} />
          {onAlternar && (
            // Botão mora dentro do <summary> pra ficar na mesma linha; sem isso o clique também abre/fecha o <details>.
            <button
              type="button" className="checklist-feito" aria-pressed={ok === true}
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); onAlternar(); }}
            >
              Feito
            </button>
          )}
        </summary>
        <p><TextoComTermos texto={porque} /></p>
      </details>
    </li>
  );
}

function ChecklistAntesView({ itens }: { itens: readonly ItemAntes[] }) {
  const [marcados, setMarcados] = useState<ReadonlySet<string>>(new Set());
  const alternar = (id: string) => setMarcados((prev) => {
    const novo = new Set(prev);
    if (novo.has(id)) novo.delete(id); else novo.add(id);
    return novo;
  });
  return (
    <ul className="checklist-itens" aria-label="Antes da partida">
      {itens.map((item) => (
        <ChecklistLinha key={item.id} id={item.id} titulo={item.titulo} porque={item.porque}
          ok={marcados.has(item.id) ? true : null} onAlternar={() => alternar(item.id)} />
      ))}
    </ul>
  );
}

function PartidasRecentesDoHeroi({ conta, heroiId, onEscolher }: { conta: number; heroiId: string; onEscolher: (id: string) => void }) {
  const resumo = useAoVivo(`checklist-conta:${conta}`, (consultar) => resumoDaConta(consultar, conta));
  if (resumo.estado !== "ok") return null;
  const partidas = resumo.dados.partidas.filter((p) => p.retrato === heroiId);
  if (partidas.length === 0) return <p className="checklist-vazio">Nenhuma partida recente com esse herói nessa conta.</p>;
  return (
    <ul className="checklist-recentes" aria-label="Partidas recentes com esse herói">
      {partidas.map((p) => (
        <li key={p.id}>
          <button type="button" onClick={() => onEscolher(p.id)}>
            {textoDoResultado(p.venceu)} · {minutos(p.duracaoS)} · {dataCurta(p.inicio)}
          </button>
        </li>
      ))}
    </ul>
  );
}

function ChecklistDepoisView({ heroi, dados }: { heroi: Heroi; dados: Parameters<typeof checklistDepois>[1] }) {
  return (
    <ul className="checklist-itens" aria-label="Depois da partida">
      {checklistDepois(heroi, dados).map((item) => <ChecklistLinha key={item.id} {...item} />)}
    </ul>
  );
}

function FormularioDaPartida({ heroi }: { heroi: Heroi }) {
  const [conta, setConta] = useState("");
  const [partida, setPartida] = useState("");
  const contaId = lerId(conta);
  const partidaId = lerId(partida, 15);
  const itensDoGuia = heroi.guia.itens_core.map((i) => i.item);
  const chave = contaId !== null && partidaId !== null ? `checklist:${partida}:${conta}` : null;
  const resultado = useAoVivo(chave, (consultar) => buscarDadosReais(consultar, partida, contaId ?? 0, itensDoGuia));
  return (
    <>
      <form className="checklist-form" onSubmit={(e) => e.preventDefault()}>
        <label>Sua conta do OpenDota<input value={conta} onChange={(e) => setConta(e.target.value)} placeholder="account id" inputMode="numeric" /></label>
        <label>ID da partida<input value={partida} onChange={(e) => setPartida(e.target.value)} placeholder="match id" inputMode="numeric" /></label>
      </form>
      {contaId !== null && <PartidasRecentesDoHeroi conta={contaId} heroiId={heroi.id} onEscolher={setPartida} />}
      {resultado.estado === "carregando" && <p>Buscando a partida no OpenDota…</p>}
      {resultado.estado === "erro" && <ErroAoVivoView erro={resultado.erro} contexto="partida" onTentar={resultado.tentarDeNovo} />}
      {resultado.estado === "ok" && <ChecklistDepoisView heroi={heroi} dados={resultado.dados} />}
    </>
  );
}

function ChecklistDoHeroi({ heroi }: { heroi: Heroi }) {
  return (
    <article className="checklist-heroi">
      <div className="rotas-topo"><span className="sobretitulo">Checklist</span><h1>{heroi.nome}</h1></div>
      <section>
        <h2>Antes da partida</h2>
        <p className="checklist-legenda">Marque "Feito" conforme for cumprindo, durante o draft e a lane.</p>
        <ChecklistAntesView itens={checklistAntes(heroi)} />
      </section>
      <section>
        <h2>Depois da partida</h2>
        <p className="checklist-legenda">Cole o id da sua conta e da partida (ou escolha uma recente) pra comparar com o guia.</p>
        <FormularioDaPartida heroi={heroi} />
      </section>
      <p><Link to={`/herois/${heroi.id}`}>Ver a ficha completa de {heroi.nome}</Link></p>
    </article>
  );
}
