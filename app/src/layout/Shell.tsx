import { Link, NavLink, Outlet, useLocation } from "react-router";
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
  const noMapa = useLocation().pathname.startsWith("/mapa/");
  return (
    <div className="shell">
      <header className="topo">
        <div className="marca">
          <Link to="/" className="logo" aria-label="Dota Hub">DOTA<span>HUB</span></Link>
          {meta.estado === "ok" && <span className="selo-patch" aria-label={`Patch ${meta.dados.patch}`}>{meta.dados.patch}</span>}
        </div>
        <nav className="abas" aria-label="Principal">
          <NavLink to="/" end className={({ isActive }) => (isActive || noMapa ? "active" : "")}>Mapa</NavLink>
          <NavLink to="/rotas">Rotas</NavLink>
          <NavLink to="/herois">Heróis</NavLink>
          <NavLink to="/glossario">Glossário</NavLink>
        </nav>
        <SearchBox />
      </header>
      <main><Outlet /></main>
      {meta.estado === "ok" && <Rodape meta={meta.dados} />}
    </div>
  );
}
