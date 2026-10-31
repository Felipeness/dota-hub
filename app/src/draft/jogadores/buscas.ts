// Busca por conta no OpenDota, com poucas chamadas ao mesmo tempo. Cada conta falha sozinha: o erro de uma não derruba as outras.
import { useEffect, useEffectEvent, useState } from "react";
import { VALIDADE_S } from "../../live/contas";
import type { Consultar } from "../../live/consulta";
import { erroAoVivo, ok, type ErroAoVivo, type RespostaAoVivo } from "../../live/erros";
import { jogadorFonte } from "../../live/fonte/schemas";
import { registrarNoConsole } from "../../live/registro";
import { useServicosAoVivo } from "../../live/servicos";
import { caminhoDoHistorico, historicoDaContaFonte, paraHistorico } from "../historicoDaConta";
import type { Historico } from "../modeloDeJogador";

export const SIMULTANEAS_NO_PERFIL = 4;
export const SIMULTANEAS_NO_HISTORICO = 3;

export type EstadoDaBusca<T> =
  | { readonly estado: "carregando" }
  | { readonly estado: "ok"; readonly dados: T }
  | { readonly estado: "erro"; readonly erro: ErroAoVivo };

export type IdentidadeDaConta = Readonly<{ nome: string | null; avatar: string | null; medalha: number | null }>;
export type Buscar<T> = (consultar: Consultar, conta: number) => Promise<RespostaAoVivo<T>>;
export type Buscas<T> = Readonly<{ estados: ReadonlyMap<number, EstadoDaBusca<T>>; tentarDeNovo: () => void }>;

const CARREGANDO = { estado: "carregando" } as const;

export const buscarIdentidade: Buscar<IdentidadeDaConta> = async (consultar, conta) => {
  const resposta = await consultar({ caminho: `/players/${conta}`, schema: jogadorFonte, validadeS: VALIDADE_S.perfil });
  if (!resposta.ok) return resposta;
  const { profile, rank_tier } = resposta.dados.valor;
  return ok({ nome: profile?.personaname ?? null, avatar: profile?.avatarfull ?? null, medalha: rank_tier ?? null });
};

export const buscarHistorico: Buscar<Historico> = async (consultar, conta) => {
  const resposta = await consultar({ caminho: caminhoDoHistorico(conta), schema: historicoDaContaFonte, validadeS: VALIDADE_S.perfil });
  return resposta.ok ? ok(paraHistorico(conta, resposta.dados.valor)) : resposta;
};

/** Os trabalhadores puxam da mesma fila até ela acabar: nunca passa de `simultaneas` tarefas abertas. */
export async function rodarComLimite<T>(itens: readonly T[], simultaneas: number, tarefa: (item: T) => Promise<void>): Promise<void> {
  const restantes = [...itens];
  const trabalhador = async () => {
    for (let item = restantes.shift(); item !== undefined; item = restantes.shift()) await tarefa(item);
  };
  await Promise.all(Array.from({ length: Math.min(simultaneas, itens.length) }, trabalhador));
}

function manterProntos<T>(contas: readonly number[], antes: ReadonlyMap<number, EstadoDaBusca<T>>): ReadonlyMap<number, EstadoDaBusca<T>> {
  return new Map(contas.map((conta): [number, EstadoDaBusca<T>] => {
    const anterior = antes.get(conta);
    return [conta, anterior?.estado === "ok" ? anterior : CARREGANDO];
  }));
}

/** Cache e fila do OpenDota vêm de `consultar`: repetir uma conta já buscada não gasta chamada. */
export function useBuscasPorConta<T>(contas: readonly number[], buscar: Buscar<T>, simultaneas: number): Buscas<T> {
  const { consultar } = useServicosAoVivo();
  const [estados, setEstados] = useState<ReadonlyMap<number, EstadoDaBusca<T>>>(new Map());
  const [tentativa, setTentativa] = useState(0);
  const executar = useEffectEvent((conta: number) => buscar(consultar, conta));
  const chave = contas.join(",");

  useEffect(() => {
    let vivo = true;
    setEstados((antes) => manterProntos(contas, antes));
    const guardar = (conta: number, estado: EstadoDaBusca<T>) => {
      if (vivo) setEstados((antes) => new Map(antes).set(conta, estado));
    };
    const buscarUma = async (conta: number) => {
      if (!vivo) return;
      const resposta = await executar(conta).catch((causa: unknown): RespostaAoVivo<T> => {
        registrarNoConsole({ nivel: "error", operacao: "draft-contas", codigo: "INTERNO", detalhe: String(causa) });
        return { ok: false, erro: erroAoVivo("INTERNO") };
      });
      guardar(conta, resposta.ok ? { estado: "ok", dados: resposta.dados } : { estado: "erro", erro: resposta.erro });
    };
    void rodarComLimite(contas, simultaneas, buscarUma);
    return () => { vivo = false; };
  }, [chave, tentativa]);

  return { estados, tentarDeNovo: () => setTentativa((n) => n + 1) };
}
