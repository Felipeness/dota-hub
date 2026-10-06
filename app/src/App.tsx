import { createBrowserRouter, RouterProvider } from "react-router";
import { GlossaryPage } from "./glossary/GlossaryPage";
import { Shell } from "./layout/Shell";
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
      { path: "/jogadores", hydrateFallbackElement: <Carregando />, lazy: async () => ({ Component: (await import("./players/PlayersPage")).PlayersPage }) },
      { path: "/jogadores/:id", hydrateFallbackElement: <Carregando />, lazy: async () => ({ Component: (await import("./players/PlayerPage")).PlayerPage }) },
      { path: "/times/:id", hydrateFallbackElement: <Carregando />, lazy: async () => ({ Component: (await import("./players/TeamPage")).TeamPage }) },
    ],
  },
  { path: "/poster/:modelo", hydrateFallbackElement: <Carregando />, lazy: async () => ({ Component: (await import("./unidades/PaginaPoster")).PaginaPoster }) },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
