import { useNavigate, useParams } from "react-router";
import { conteudoSchema, objetivosSchema } from "../data/schemas";
import { Indisponivel, useData } from "../data/useData";
import { ObjectivePanel } from "../objectives/ObjectivePanel";
import { MapView } from "./MapView";
import { objetivoDaUrl } from "./objetivoDaUrl";

export function MapPage() {
  const objetivos = useData("/data/objetivos.json", objetivosSchema);
  const conteudo = useData("/data/objetivos_conteudo.json", conteudoSchema);
  const { id } = useParams();
  const navigate = useNavigate();

  if (objetivos.estado === "indisponivel") return <Indisponivel motivo={objetivos.motivo} />;
  if (objetivos.estado === "carregando") return <p>Carregando mapa…</p>;

  const aberto = id ? objetivoDaUrl(id, objetivos.dados) : undefined;
  const textos = conteudo.estado === "ok" ? conteudo.dados : [];
  return (
    <section className="pagina-mapa">
      <MapView objetivos={objetivos.dados} selecionado={aberto?.id ?? null} onSelecionar={(alvo) => navigate(`/mapa/${alvo}`)} />
      {id && !aberto && <p role="alert">Objetivo {id} não encontrado.</p>}
      {aberto && <ObjectivePanel key={aberto.id} objetivo={aberto} conteudo={textos} onFechar={() => navigate("/")} />}
    </section>
  );
}
