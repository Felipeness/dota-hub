import { jogaDeSuporte, type HeroiDaPosicao } from "./pro";

const heroi = (pos4: number, pos5: number): HeroiDaPosicao => ({
  hero_id: 1, slug: "x",
  posicoes: { n_total: 100, distribuicao: { pos1: { n: 0, fracao: 1 - pos4 - pos5 }, pos4: { n: 0, fracao: pos4 }, pos5: { n: 0, fracao: pos5 } } },
  forca: { n: 0, gpm_medio: 0, dano_torre_medio: 0, dano_heroi_medio: 0, cura_media: 0, stuns_medio_s: 0, duracao_media_vitorias_min: 0 },
});

it.each([
  { caso: "Lion (pos 4/5 em 93%)", heroi: heroi(0.67, 0.26), suporte: true },
  { caso: "carry", heroi: heroi(0, 0.01), suporte: false },
  { caso: "sem dado do herói", heroi: null, suporte: false },
])("jogaDeSuporte: $caso", ({ heroi, suporte }) => {
  expect(jogaDeSuporte(heroi)).toBe(suporte);
});
