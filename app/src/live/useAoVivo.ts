import { useEffect, useEffectEvent, useState } from "react";
import type { Consultar } from "./consulta";
import { erroAoVivo, type ErroAoVivo, type RespostaAoVivo } from "./erros";
import { registrarNoConsole } from "./registro";
import { useServicosAoVivo } from "./servicos";

export type EstadoAoVivo<T> =
  | { readonly estado: "parado" }
  | { readonly estado: "carregando" }
  | { readonly estado: "ok"; readonly dados: T }
  | { readonly estado: "erro"; readonly erro: ErroAoVivo };

type Carregar<T> = (consultar: Consultar) => Promise<RespostaAoVivo<T>>;

/** `chave` identifica a consulta (null = nada a buscar); `carregar` pode mudar a cada render sem disparar nova busca. */
export function useAoVivo<T>(chave: string | null, carregar: Carregar<T>): EstadoAoVivo<T> & { tentarDeNovo: () => void } {
  const { consultar } = useServicosAoVivo();
  const [estado, setEstado] = useState<EstadoAoVivo<T>>({ estado: "parado" });
  const [tentativa, setTentativa] = useState(0);
  const executar = useEffectEvent(() => carregar(consultar));

  useEffect(() => {
    if (chave === null) return;
    let vivo = true;
    setEstado({ estado: "carregando" });
    executar()
      .then((resposta) => {
        if (vivo) setEstado(resposta.ok ? { estado: "ok", dados: resposta.dados } : { estado: "erro", erro: resposta.erro });
      })
      .catch((causa: unknown) => {
        registrarNoConsole({ nivel: "error", operacao: "busca-ao-vivo", codigo: "INTERNO", detalhe: String(causa) });
        if (vivo) setEstado({ estado: "erro", erro: erroAoVivo("INTERNO") });
      });
    return () => { vivo = false; };
  }, [chave, tentativa]);

  const tentarDeNovo = () => setTentativa((n) => n + 1);
  return chave === null ? { estado: "parado", tentarDeNovo } : { ...estado, tentarDeNovo };
}
