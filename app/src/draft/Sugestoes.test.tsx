import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import type { GuiaDraft, HeroId } from "./guia";
import type { HeroiDraft } from "./pontuacao";
import { Sugestoes } from "./Sugestoes";

const heroi = (id: HeroId, nome: string, npc: string): HeroiDraft => ({
  id, nome, npc, funcoes: [], atributo: "str", divine: { jogos: 0, vitorias: 0 },
});
const sugestoes = [heroi(26, "Lion", "lion"), heroi(48, "Luna", "luna")].map((h) => ({ heroi: h, nota: 0, motivos: [], maisPerigoso: null }));
const guiaDaLuna: GuiaDraft = { heroId: 48, bom: [], evitar: [], momento: "Cedo.", itensSituacionais: [] };

it("liga cada herói à página dele: ficha por posição ou guia completo", () => {
  render(
    <MemoryRouter>
      <Sugestoes titulo="Melhores picks" explicacao="" sugestoes={sugestoes} acao="Pegar" onAcao={() => {}}
        guias={new Map([[48, guiaDaLuna]])} paginas={new Map([[26, "lion"], [48, "luna"]])} />
    </MemoryRouter>,
  );
  expect(screen.getByRole("link", { name: "Ficha do Lion" })).toHaveAttribute("href", "/herois/lion");
  expect(screen.getByRole("link", { name: "Guia completo do Luna" })).toHaveAttribute("href", "/herois/luna");
});
