import { NavLink, Outlet } from "react-router";
import type { Meta } from "../data/schemas";
import { metaSchema } from "../data/schemas";
import { useData } from "../data/useData";
import { SearchBox } from "../search/SearchBox";

export function Rodape({ meta }: { meta: Meta }) {
  const data = new Date(meta.exportado_em).toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" });
  return <footer className="rodape">Dados de {data} · patch {meta.patch}</footer>;
}

export function Shell() {
  const meta = useData("/data/meta.json", metaSchema);
  return (
    <div className="shell">
      <header className="topo">
        <strong>Dota Hub</strong>
        <nav>
          <NavLink to="/" end>Mapa</NavLink>
          <NavLink to="/rotas">Rotas</NavLink>
          <NavLink to="/glossario">Glossário</NavLink>
        </nav>
        <SearchBox />
      </header>
      <main><Outlet /></main>
      {meta.estado === "ok" && <Rodape meta={meta.dados} />}
    </div>
  );
}
