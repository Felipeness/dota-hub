import { useEffect, useState } from "react";
import type { z } from "zod";
import { loadJson } from "./load";

export type EstadoDados<T> = { estado: "carregando" } | { estado: "ok"; dados: T } | { estado: "indisponivel"; motivo: string };

export function useData<T>(path: string, schema: z.ZodType<T>): EstadoDados<T> {
  const [estado, setEstado] = useState<EstadoDados<T>>({ estado: "carregando" });
  useEffect(() => {
    let vivo = true;
    loadJson(path, schema).then((r) => {
      if (vivo) setEstado(r.ok ? { estado: "ok", dados: r.dados } : { estado: "indisponivel", motivo: r.motivo });
    });
    return () => { vivo = false; };
  }, [path, schema]);
  return estado;
}

export function Indisponivel({ motivo }: { motivo: string }) {
  return <p role="alert" className="indisponivel">Dados indisponíveis. {motivo}</p>;
}
