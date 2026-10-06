import { render, screen, within } from "@testing-library/react";
import type { Unidade } from "../data/schemas";
import { FichaUnidade } from "./FichaUnidade";

vi.mock("./VisualizadorUnidade", () => ({ VisualizadorUnidade: ({ nome }: { nome: string }) => `modelo de ${nome}` }));

const slam = {
  id: "roshan_slam", nome: "Porrada", nome_en: "Slam", descricao: "Roshan bate no chão.", notas: [],
  condicoes: [{ rotulo: "Recarga", valor: "10 s" }], valores: [{ rotulo: "Raio", valor: "350" }], icone: "roshan_slam",
  texto_em_ingles: false, o_que_muda: null,
};
const bloqueio = {
  ...slam, id: "roshan_spell_block", nome: "Bloqueio de Magias", nome_en: "Spell Block", icone: null, texto_em_ingles: true,
  o_que_muda: { texto: "Gaste uma magia barata antes.", fontes: ["Arquivos do jogo"], origem: { tipo: "recomendado" as const, replays: [] } },
};
const roshan: Unidade = {
  id: "roshan", id_jogo: "npc_dota_roshan", nome: "Roshan", grupo: "chefe", papel: "chefe neutro", lado: "neutro",
  numeros: { vida: 6000, regeneracao: 20, mana: 0, regeneracao_mana: 0, armadura: 30, resistencia_magica: 55, dano_min: 75, dano_max: 75,
    intervalo_ataque: 2, alcance_ataque: 150, ataque: "corpo a corpo", velocidade: 270, ouro_min: 200, ouro_max: 290, xp: 400, visao_dia: 1400, visao_noite: 1400 },
  habilidades: [slam, bloqueio],
  crescimento: { tipo: "tabela", colunas: ["Minuto", "Vida"], linhas: [[10, 7300], [20, 8600]], fonte: "farm_mechanics" },
  modelo: "roshan", patch: "7.41", fontes: ["Arquivos do Dota 2 instalado"],
};

it("mostra modelo, números, habilidades com condições e o que muda", () => {
  render(<FichaUnidade unidade={roshan} />);
  expect(screen.getByText("modelo de Roshan")).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Roshan" })).toBeInTheDocument();
  expect(screen.getByText("6.000")).toBeInTheDocument();
  const porrada = screen.getByRole("listitem", { name: "Porrada" });
  expect(within(porrada).getByText("(Slam)")).toBeInTheDocument();
  expect(within(porrada).getByText("10 s")).toBeInTheDocument();
  expect(within(porrada).getByRole("presentation")).toHaveAttribute("src", "/data/icones/roshan_slam.webp");
  expect(within(porrada).getByText("O que isso muda para você: ainda não escrito.")).toBeInTheDocument();
  const bloq = screen.getByRole("listitem", { name: "Bloqueio de Magias" });
  expect(within(bloq).getByText("texto em inglês")).toBeInTheDocument();
  expect(within(bloq).getByText("Gaste uma magia barata antes.")).toBeInTheDocument();
  expect(within(bloq).getByText(/Recomendado\./)).toBeInTheDocument();
  expect(screen.getByRole("table", { name: "Como fica mais forte com o tempo" })).toHaveTextContent("8.600");
});
