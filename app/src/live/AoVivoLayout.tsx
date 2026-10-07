import { Outlet } from "react-router";
import { AvisoDaFonte } from "./AvisoDaFonte";

export function AoVivoLayout() {
  return (
    <section className="ao-vivo">
      <AvisoDaFonte />
      <Outlet />
    </section>
  );
}
