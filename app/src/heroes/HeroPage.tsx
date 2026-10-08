import { Link, useParams } from "react-router";
import { conteudoSchema, heroiSchema, objetivosSchema } from "../data/schemas";
import { dadosOuVazio, Indisponivel, useData } from "../data/useData";
import { SoloRoshan } from "../roshan/SoloRoshan";
import { FichaHeroi } from "./FichaHeroi";

export function HeroPage() {
  const { id = "" } = useParams();
  const heroi = useData(`/data/herois/${id}.json`, heroiSchema);
  const objetivos = useData("/data/objetivos.json", objetivosSchema);
  const solos = useData("/data/roshan_solo.json", conteudoSchema);
  if (heroi.estado === "carregando") return <p>Carregando…</p>;
  if (heroi.estado === "indisponivel") return <Indisponivel motivo={heroi.motivo} />;
  const doHeroi = dadosOuVazio(solos).filter((s) => s.extras["heroi"] === heroi.dados.nome);
  return <><FichaHeroi heroi={heroi.dados} objetivos={dadosOuVazio(objetivos)} solos={doHeroi} roshan={<SoloRoshan solos={doHeroi} />} />
    <p><Link to={`/confronto?contra=${heroi.dados.hero_id}`}>Como jogar contra {heroi.dados.nome}</Link></p>
    <p><Link to={`/checklist/${heroi.dados.id}`}>Checklist de antes e depois da partida</Link></p></>;
}
