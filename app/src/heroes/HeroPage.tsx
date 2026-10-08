import { Link, Navigate, useLocation, useParams } from "react-router";
import { conteudoSchema, fichaSchema, heroiSchema, heroisCatalogoSchema, objetivosSchema } from "../data/schemas";
import { dadosOuVazio, Indisponivel, useData } from "../data/useData";
import { SoloRoshan } from "../roshan/SoloRoshan";
import { acharNoCatalogo } from "./catalogo";
import { FichaHeroi } from "./FichaHeroi";
import { FichaPorPosicao } from "./FichaPorPosicao";

/** /herois/:id abre o guia completo (22 heróis) ou a ficha por posição (os outros); o nome interno do jogo redireciona. */
export function HeroPage() {
  const { id = "" } = useParams();
  const { search } = useLocation();
  const catalogo = useData("/data/herois_catalogo.json", heroisCatalogoSchema);
  if (catalogo.estado === "carregando") return <p>Carregando…</p>;
  // Sem o catálogo, ainda dá pra abrir os guias completos pelo id.
  if (catalogo.estado === "indisponivel") return <PaginaDoGuia id={id} />;
  const heroi = acharNoCatalogo(catalogo.dados, id);
  if (!heroi) return <Indisponivel motivo={`Herói "${id}" não encontrado.`} />;
  if (heroi.id !== id) return <Navigate replace to={`/herois/${heroi.id}${search}`} />;
  return heroi.pagina === "guia" ? <PaginaDoGuia id={heroi.id} /> : <PaginaDaFicha id={heroi.id} />;
}

function PaginaDaFicha({ id }: { id: string }) {
  const ficha = useData(`/data/fichas/${id}.json`, fichaSchema);
  if (ficha.estado === "carregando") return <p>Carregando…</p>;
  if (ficha.estado === "indisponivel") return <Indisponivel motivo={ficha.motivo} />;
  return <FichaPorPosicao ficha={ficha.dados} />;
}

function PaginaDoGuia({ id }: { id: string }) {
  const heroi = useData(`/data/herois/${id}.json`, heroiSchema);
  const objetivos = useData("/data/objetivos.json", objetivosSchema);
  const solos = useData("/data/roshan_solo.json", conteudoSchema);
  if (heroi.estado === "carregando") return <p>Carregando…</p>;
  if (heroi.estado === "indisponivel") return <Indisponivel motivo={heroi.motivo} />;
  const doHeroi = dadosOuVazio(solos).filter((s) => s.extras["heroi"] === heroi.dados.nome);
  return <><FichaHeroi heroi={heroi.dados} objetivos={dadosOuVazio(objetivos)} solos={doHeroi} roshan={<SoloRoshan solos={doHeroi} />} />
    <p><Link to={`/checklist/${heroi.dados.id}`}>Checklist de antes e depois da partida</Link></p></>;
}
