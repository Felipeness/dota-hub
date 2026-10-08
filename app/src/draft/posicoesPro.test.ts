import { atribuirPosicoes, LANE_DA_POSICAO, trocarPosicao, type HeroiPro } from "./posicoesPro";

const faixa = (n: number, fracao: number) => ({ n, fracao });
const taxa = (n: number, valor: number) => ({ n, taxa: valor });

/** Herói de pro com fração alta numa posição e baixa nas outras; o resto da ficha de força não importa aqui. */
function heroiComFracao(hero_id: number, favoritas: Partial<Record<1 | 2 | 3 | 4 | 5, number>>): HeroiPro {
  const base = { n: 1000, fracao: 0.01 };
  const distribuicao = {
    pos1: faixa(10, favoritas[1] ?? base.fracao), pos2: faixa(10, favoritas[2] ?? base.fracao),
    pos3: faixa(10, favoritas[3] ?? base.fracao), pos4: faixa(10, favoritas[4] ?? base.fracao),
    pos5: faixa(10, favoritas[5] ?? base.fracao),
  };
  return {
    hero_id, slug: `heroi-${hero_id}`,
    posicoes: { n_total: base.n, distribuicao },
    forca: {
      n: base.n, gpm_medio: 500, dano_torre_medio: 1000, dano_heroi_medio: 10000, cura_media: 0, stuns_medio_s: 2,
      duracao_media_vitorias_min: 35,
      vitoria_por_duracao: { menos_30min: taxa(10, 0.5), entre_30_40min: taxa(10, 0.5), mais_40min: taxa(10, 0.5) },
    },
  };
}

function mapaDe(...herois: HeroiPro[]): ReadonlyMap<number, HeroiPro> {
  return new Map(herois.map((h) => [h.hero_id, h]));
}

describe("atribuirPosicoes", () => {
  it("resolve o conflito quando dois heróis só jogam pos 1: um fica na posição que mais ajuda o conjunto", () => {
    // Herói 1 é só pos1 (0.9) ou pos2 fraco (0.05); herói 2 é pos1 forte (0.9) e pos2 bem mais forte que o 1 (0.3).
    const porHeroId = mapaDe(
      heroiComFracao(1, { 1: 0.9, 2: 0.05 }),
      heroiComFracao(2, { 1: 0.9, 2: 0.3 }),
    );
    const atribuicao = atribuirPosicoes([1, 2], porHeroId);
    // Maximizar o produto das frações (0.9*0.3 > 0.9*0.05 e > 0.05*0.9) manda o herói 2 para pos2.
    expect(atribuicao.find((s) => s.heroId === 2)?.posicao).toBe(2);
    expect(atribuicao.find((s) => s.heroId === 1)?.posicao).toBe(1);
  });

  it("nunca repete posição entre os heróis escolhidos", () => {
    const porHeroId = mapaDe(heroiComFracao(1, { 1: 0.9 }), heroiComFracao(2, { 1: 0.9 }), heroiComFracao(3, { 1: 0.9 }));
    const posicoes = atribuirPosicoes([1, 2, 3], porHeroId).map((s) => s.posicao);
    expect(new Set(posicoes).size).toBe(3);
  });

  it("marca a lane pela posição: 1 e 5 na safelane, 2 no mid, 3 e 4 na offlane", () => {
    expect([1, 2, 3, 4, 5].map((p) => LANE_DA_POSICAO[p as 1 | 2 | 3 | 4 | 5])).toEqual(["safe", "mid", "off", "off", "safe"]);
  });

  it("funciona com time incompleto, atribuindo só o que existe", () => {
    const porHeroId = mapaDe(heroiComFracao(1, { 2: 0.9 }));
    const atribuicao = atribuirPosicoes([1], porHeroId);
    expect(atribuicao).toHaveLength(1);
    expect(atribuicao[0]?.posicao).toBe(2);
  });

  it("time vazio não quebra", () => {
    expect(atribuirPosicoes([], new Map())).toEqual([]);
  });

  it("herói sem dado de pro ainda recebe uma posição, sem derrubar a atribuição dos outros", () => {
    const porHeroId = mapaDe(heroiComFracao(1, { 1: 0.9 }));
    const atribuicao = atribuirPosicoes([1, 999], porHeroId);
    expect(atribuicao.find((s) => s.heroId === 1)?.posicao).toBe(1);
    expect(atribuicao.find((s) => s.heroId === 999)?.fracaoPro).toBeNull();
  });
});

describe("trocarPosicao", () => {
  const porHeroId = mapaDe(heroiComFracao(1, { 1: 0.9 }), heroiComFracao(2, { 2: 0.9 }));
  const base = atribuirPosicoes([1, 2], porHeroId);

  it("troca os dois heróis quando a posição escolhida já é de outro do time", () => {
    const depois = trocarPosicao(base, 1, 2, porHeroId);
    expect(depois.find((s) => s.heroId === 1)?.posicao).toBe(2);
    expect(depois.find((s) => s.heroId === 2)?.posicao).toBe(1);
  });

  it("não faz nada para um herói fora da atribuição", () => {
    expect(trocarPosicao(base, 999, 3, porHeroId)).toEqual(base);
  });

  it("escolher a mesma posição que já está não muda nada", () => {
    expect(trocarPosicao(base, 1, 1, porHeroId)).toEqual(base);
  });
});
