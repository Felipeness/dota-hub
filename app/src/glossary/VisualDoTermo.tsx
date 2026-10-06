import { Link, useNavigate } from "react-router";
import { objetivosSchema, unidadeSchema, type ConteudoItem } from "../data/schemas";
import { Indisponivel, useData } from "../data/useData";
import { MapView } from "../map/MapView";
import { VisualizadorUnidade } from "../unidades/VisualizadorUnidade";
import "../unidades/unidades.css";
import { textoExtra } from "./filtros";
import { lugaresDoTermo } from "./links";

export const urlDoIconeDeItem = (item: string) => `/data/retratos/itens/${item}.webp`;

export function IconeDoItem({ item, nome }: { item: string; nome: string }) {
  return <img className="icone-item" src={urlDoIconeDeItem(item)} alt={`Ícone de ${nome}`} width={64} height={47} />;
}

function LugaresNoMapa({ termo }: { termo: ConteudoItem }) {
  const objetivos = useData("/data/objetivos.json", objetivosSchema);
  const navigate = useNavigate();
  if (objetivos.estado === "indisponivel") return <Indisponivel motivo={objetivos.motivo} />;
  if (objetivos.estado === "carregando") return null;
  // Um termo que é um lugar (roshan, camp) mostra a si mesmo, não os termos relacionados.
  const proprios = lugaresDoTermo([termo.id], objetivos.dados);
  const lugares = proprios.length > 0 ? proprios : lugaresDoTermo(termo.links, objetivos.dados);
  if (lugares.length === 0) return null;
  return (
    <figure className="mini-mapa">
      <MapView objetivos={lugares} onSelecionar={(id) => navigate(`/mapa/${id}`)} forcarPlano />
      <figcaption>{lugares.length === 1 ? "Onde fica no mapa" : `Onde fica no mapa: ${lugares.length} lugares`}</figcaption>
    </figure>
  );
}

function UnidadeDoTermo({ id }: { id: string }) {
  const unidade = useData(`/data/unidades/${id}.json`, unidadeSchema);
  if (unidade.estado === "carregando") return <p>Carregando a unidade…</p>;
  if (unidade.estado === "indisponivel") return <Indisponivel motivo={unidade.motivo} />;
  const { nome, modelo, habilidades } = unidade.dados;
  return (
    <section className="unidade-do-termo" aria-label={`Unidade: ${nome}`}>
      <VisualizadorUnidade modelo={modelo} nome={nome} />
      <ul className="habilidades-curtas" aria-label="Habilidades">
        {habilidades.map((h) => (
          <li key={h.id}>
            {h.icone
              ? <img src={`/data/icones/${h.icone}.webp`} alt="" width={32} height={32} />
              : <span aria-hidden="true">{h.nome.charAt(0)}</span>}
            {h.nome}
          </li>
        ))}
      </ul>
      <Link className="pilula" to={`/glossario/unidades/${id}`}>Ficha completa de {nome}</Link>
    </section>
  );
}

// Unidade (modelo 3D e habilidades) e lugares no mapa; o ícone do item fica ao lado do título.
export function VisualDoTermo({ termo }: { termo: ConteudoItem }) {
  const unidade = textoExtra(termo, "unidade");
  return (
    <div className="termo-visual">
      {unidade && <UnidadeDoTermo id={unidade} />}
      <LugaresNoMapa termo={termo} />
    </div>
  );
}
