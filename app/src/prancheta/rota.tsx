// Endereço da prancheta. Ela nasceu em /prancheta; links já compartilhados continuam abrindo pelo redirecionamento.
import { Navigate, useLocation } from "react-router";

export const ROTA_DA_PRANCHETA = "/drawmap";
export const ROTA_ANTIGA_DA_PRANCHETA = "/prancheta";

/** Leva /prancheta para /drawmap mantendo ?partida=&t= e o #q= do quadro compartilhado. */
export function RedirecionarParaAPrancheta() {
  const { search, hash } = useLocation();
  return <Navigate replace to={{ pathname: ROTA_DA_PRANCHETA, search, hash }} />;
}
