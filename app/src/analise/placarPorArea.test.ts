import type { DetalheDaPartida } from "../live/partida/detalhe";
import type { Contexto } from "./modelo";
import { placarPorArea } from "./placarPorArea";
import type { HeroiDaPosicao } from "./pro";

const HEROI = { id: 94, chave: "medusa", nome: "Medusa", retrato: "medusa" };

function detalheMinimo(parcial: Partial<DetalheDaPartida>): DetalheDaPartida {
  return {
    partida: "1", conta: 1, slot: 0, duracaoS: 3_000, venceu: null, analisada: true, heroi: HEROI, lado: "radiant",
    lane: null, posicao: null, abates: 0, mortes: 3, assistencias: 0, gpm: 600, curvas: { ouro: [0, 30_000], lh: [], patrimonio: [] },
    adversario: null, inimigos: [], eventos: [], compras: [], neutros: [], habilidades: [], manchasDaLane: [],
    laneDoMapa: null, referencia: null, frescor: { buscadoEm: 0, vencido: false }, vantagemDoTime: { ouro: [], xp: [] },
    eficienciaDeLanePct: null, draft: [], panorama: { jogadores: [], wards: [], estruturas: [], roshans: [] }, ...parcial,
  };
}

const proDoHeroi = (n: number, gpmMedio: number): HeroiDaPosicao => ({
  hero_id: 94, slug: "medusa", posicoes: { n_total: n, distribuicao: {} },
  forca: { n, gpm_medio: gpmMedio, dano_torre_medio: 0, dano_heroi_medio: 0, cura_media: 0, stuns_medio_s: 0, duracao_media_vitorias_min: 0 },
});

function contexto(detalheParcial: Partial<DetalheDaPartida>, proDoHeroiParcial: HeroiDaPosicao | null): Contexto {
  return { detalhe: detalheMinimo(detalheParcial), pro: null, proDoHeroi: proDoHeroiParcial, meuHeroi: HEROI, inimigos: [] };
}

it.each([
  { gpmMedio: 500, esperado: "ponto_forte" }, // 600 ouro/min na partida vs média 500: +20%
  { gpmMedio: 605, esperado: "dentro_da_faixa" }, // dentro de ±10% de 600
  { gpmMedio: 900, esperado: "abaixo_do_pro" },
])("farm: gpm_medio=$gpmMedio vira selo $esperado", ({ gpmMedio, esperado }) => {
  const [farm] = placarPorArea(contexto({}, proDoHeroi(50, gpmMedio)));
  expect(farm?.selo).toBe(esperado);
});

it("farm sem benchmark de pro (amostra pequena) não afirma selo categórico", () => {
  const [farm] = placarPorArea(contexto({}, proDoHeroi(3, 500)));
  expect(farm?.selo).toBe("sem_benchmark");
});

it("visão, objetivos e sobrevivência sempre vêm sem benchmark, com o motivo explícito", () => {
  const [, visao, objetivos, sobrevivencia] = placarPorArea(contexto({ mortes: 7 }, null));
  expect(visao).toMatchObject({ area: "Visão", selo: "sem_benchmark" });
  expect(objetivos).toMatchObject({ area: "Objetivos", selo: "sem_benchmark" });
  expect(sobrevivencia).toMatchObject({ area: "Sobrevivência", valor: 7, selo: "sem_benchmark" });
  expect(visao.comparacao.length).toBeGreaterThan(0);
});
