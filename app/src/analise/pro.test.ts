import { jogaDeSuporte, type HeroiDaPosicao } from "./pro";

const heroi = (pos4: number, pos5: number): HeroiDaPosicao => ({
  hero_id: 1, slug: "x",
  posicoes: { n_total: 100, distribuicao: { pos1: { n: 0, fracao: 1 - pos4 - pos5 }, pos4: { n: 0, fracao: pos4 }, pos5: { n: 0, fracao: pos5 } } },
  forca: { n: 0, gpm_medio: 0, dano_torre_medio: 0, dano_heroi_medio: 0, cura_media: 0, stuns_medio_s: 0, duracao_media_vitorias_min: 0 },
});

it.each([
  { caso: "pos 5 na partida, mesmo com herói de core", posicao: 5, heroi: heroi(0, 0.01), suporte: true },
  { caso: "pos 1 na partida, mesmo com herói de suporte", posicao: 1, heroi: heroi(0.67, 0.26), suporte: false },
  { caso: "sem posição: Lion (pos 4/5 em 93% no pro)", posicao: null, heroi: heroi(0.67, 0.26), suporte: true },
  { caso: "sem posição: carry", posicao: null, heroi: heroi(0, 0.01), suporte: false },
  { caso: "sem posição nem dado do herói", posicao: null, heroi: null, suporte: false },
])("jogaDeSuporte: $caso", ({ posicao, heroi, suporte }) => {
  expect(jogaDeSuporte(posicao, heroi)).toBe(suporte);
});
