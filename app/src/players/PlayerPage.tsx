import { useParams } from "react-router";
import { painelSchema } from "../data/schemas";
import { Indisponivel, useData } from "../data/useData";
import { PainelJogador } from "./PainelJogador";

export function PlayerPage() {
  const { id = "" } = useParams();
  const painel = useData(`/data/jogadores/${id}.json`, painelSchema);
  if (painel.estado === "carregando") return <p>Carregando…</p>;
  if (painel.estado === "indisponivel") return <Indisponivel motivo={painel.motivo} />;
  return <PainelJogador painel={painel.dados} />;
}
