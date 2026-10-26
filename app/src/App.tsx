import { createBrowserRouter, RouterProvider } from "react-router";
import { GlossaryPage } from "./glossary/GlossaryPage";
import { Shell } from "./layout/Shell";
import { ProvedorAoVivo } from "./live/ProvedorAoVivo";
import { MapPage } from "./map/MapPage";
import { RoutesPage } from "./routes/RoutesPage";

const Carregando = () => <p>Carregando…</p>;

const router = createBrowserRouter([
  {
    element: <Shell />,
    children: [
      { path: "/", element: <MapPage /> },
      { path: "/mapa/:id", element: <MapPage /> },
      { path: "/rotas", element: <RoutesPage /> },
      { path: "/rotas/:id", element: <RoutesPage /> },
      { path: "/glossario", element: <GlossaryPage /> },
      { path: "/glossario/unidades/:id?", hydrateFallbackElement: <Carregando />, lazy: async () => ({ Component: (await import("./unidades/UnidadesPage")).UnidadesPage }) },
      { path: "/glossario/:id", element: <GlossaryPage /> },
      { path: "/herois", hydrateFallbackElement: <Carregando />, lazy: async () => ({ Component: (await import("./heroes/HeroesPage")).HeroesPage }) },
      { path: "/herois/:id", hydrateFallbackElement: <Carregando />, lazy: async () => ({ Component: (await import("./heroes/HeroPage")).HeroPage }) },
      { path: "/checklist", hydrateFallbackElement: <Carregando />, lazy: async () => ({ Component: (await import("./checklist/ChecklistPage")).ChecklistPage }) },
      { path: "/checklist/:heroi", hydrateFallbackElement: <Carregando />, lazy: async () => ({ Component: (await import("./checklist/ChecklistHeroiPage")).ChecklistHeroiPage }) },
      { path: "/confronto/:meu?/:inimigo?", hydrateFallbackElement: <Carregando />, lazy: async () => ({ Component: (await import("./confronto/ConfrontoPage")).ConfrontoPage }) },
      { path: "/jogadores", hydrateFallbackElement: <Carregando />, lazy: async () => ({ Component: (await import("./players/PlayersPage")).PlayersPage }) },
      { path: "/jogadores/:id", hydrateFallbackElement: <Carregando />, lazy: async () => ({ Component: (await import("./players/PlayerPage")).PlayerPage }) },
      { path: "/jogadores/times/:id", hydrateFallbackElement: <Carregando />, lazy: async () => ({ Component: (await import("./players/TeamPage")).TeamPage }) },
      { path: "/times", hydrateFallbackElement: <Carregando />, lazy: async () => ({ Component: (await import("./times/TimesPage")).TimesPage }) },
      { path: "/draft", hydrateFallbackElement: <Carregando />, lazy: async () => ({ Component: (await import("./draft/DraftPage")).DraftPage }) },
      { path: "/prancheta", hydrateFallbackElement: <Carregando />, lazy: async () => ({ Component: (await import("./prancheta/PranchetaPage")).PranchetaPage }) },
      { path: "/analise/:matchId?", hydrateFallbackElement: <Carregando />, lazy: async () => ({ Component: (await import("./analise/AnalisePage")).AnalisePage }) },
      { path: "/times/:id", hydrateFallbackElement: <Carregando />, lazy: async () => ({ Component: (await import("./times/TimeAtlasPage")).TimeAtlasPage }) },
      {
        path: "/ao-vivo",
        hydrateFallbackElement: <Carregando />,
        lazy: async () => ({ Component: (await import("./live/AoVivoLayout")).AoVivoLayout }),
        children: [
          { index: true, lazy: async () => ({ Component: (await import("./live/AoVivoPage")).AoVivoPage }) },
          { path: "contas/:id", lazy: async () => ({ Component: (await import("./live/ContaPage")).ContaPage }) },
          { path: "times/:id", lazy: async () => ({ Component: (await import("./live/TimeAoVivoPage")).TimeAoVivoPage }) },
          { path: "partidas/:id", lazy: async () => ({ Component: (await import("./live/partida/PartidaPage")).PartidaPage }) },
        ],
      },
    ],
  },
  { path: "/poster/:modelo", hydrateFallbackElement: <Carregando />, lazy: async () => ({ Component: (await import("./unidades/PaginaPoster")).PaginaPoster }) },
]);

export default function App() {
  return (
    <ProvedorAoVivo>
      <RouterProvider router={router} />
    </ProvedorAoVivo>
  );
}
