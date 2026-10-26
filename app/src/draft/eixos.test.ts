import { calcularLimites, comparar, percentil, pontuarEixos, resumoComparativo, SEM_TRACOS, type HeroiNoTime, type TracosDeHabilidade } from "./eixos";
import type { ForcaPro } from "./posicoesPro";

const taxa = (valor: number) => ({ n: 100, taxa: valor });

function forca(parcial: Partial<ForcaPro>): ForcaPro {
  return {
    n: 500, gpm_medio: 450, dano_torre_medio: 2000, dano_heroi_medio: 15000, cura_media: 0, stuns_medio_s: 2,
    duracao_media_vitorias_min: 35,
    vitoria_por_duracao: { menos_30min: taxa(0.5), entre_30_40min: taxa(0.5), mais_40min: taxa(0.5) },
    ...parcial,
  };
}

function heroi(parcial: Partial<ForcaPro>, tracos: Partial<TracosDeHabilidade> = {}, posicao: 1 | 2 | 3 | 4 | 5 = 1): HeroiNoTime {
  return { forca: forca(parcial), tracos: { ...SEM_TRACOS, ...tracos }, posicao };
}

// Universo de 5 heróis do patch cobrindo o pior e o melhor de cada métrica, para normalizar os dois times.
const UNIVERSO: ForcaPro[] = [
  forca({ gpm_medio: 200, dano_torre_medio: 500, stuns_medio_s: 0, cura_media: 0 }),
  forca({ gpm_medio: 700, dano_torre_medio: 8000, stuns_medio_s: 10, cura_media: 400 }),
  forca({}), forca({}), forca({}),
];
const LIMITES = calcularLimites(UNIVERSO);

describe("pontuarEixos", () => {
  it("time de luta pontua mais em luta do que o time de farm", () => {
    const timeDeLuta: HeroiNoTime[] = [
      heroi({ stuns_medio_s: 9 }, { controleEmArea: true, danoEmArea: true }),
      heroi({ stuns_medio_s: 8 }, { controleEmArea: true }),
    ];
    const timeDeFarm: HeroiNoTime[] = [heroi({ gpm_medio: 680, stuns_medio_s: 0.2 }), heroi({ gpm_medio: 650, stuns_medio_s: 0.2 })];

    const eixosDeLuta = pontuarEixos(timeDeLuta, LIMITES);
    const eixosDeFarm = pontuarEixos(timeDeFarm, LIMITES);

    expect(eixosDeLuta.luta).toBeGreaterThan(eixosDeFarm.luta);
  });

  it("time de farm pontua mais em farm do que o time de luta", () => {
    const timeDeLuta: HeroiNoTime[] = [heroi({ gpm_medio: 300, duracao_media_vitorias_min: 31 }, {}, 2)];
    const timeDeFarm: HeroiNoTime[] = [heroi({ gpm_medio: 700, duracao_media_vitorias_min: 39 }, {}, 1)];

    const eixosDeLuta = pontuarEixos(timeDeLuta, LIMITES);
    const eixosDeFarm = pontuarEixos(timeDeFarm, LIMITES);

    expect(eixosDeFarm.farm).toBeGreaterThan(eixosDeLuta.farm);
  });

  it("farm pesa o gpm do carry mais que o do suporte", () => {
    const comSuporteFarmador: HeroiNoTime[] = [heroi({ gpm_medio: 300 }, {}, 1), heroi({ gpm_medio: 900 }, {}, 5)];
    const comCoreFarmador: HeroiNoTime[] = [heroi({ gpm_medio: 900 }, {}, 1), heroi({ gpm_medio: 300 }, {}, 5)];
    expect(pontuarEixos(comCoreFarmador, LIMITES).farm).toBeGreaterThan(pontuarEixos(comSuporteFarmador, LIMITES).farm);
  });

  it("push favorece quem invoca ou acerta torre mesmo quando os dois limpam wave em área", () => {
    // Quase todo herói tem dano em área (116 de 127): sozinho ele não separa um time de push de um time de late.
    const timeDeLate: HeroiNoTime[] = [heroi({ dano_torre_medio: 3000 }, { danoEmArea: true }), heroi({ dano_torre_medio: 3000 }, { danoEmArea: true })];
    const timeDePush: HeroiNoTime[] = [
      heroi({ dano_torre_medio: 3000 }, { danoEmArea: true, empurraTorre: true }),
      heroi({ dano_torre_medio: 3000 }, { empurraTorre: true }),
    ];
    expect(pontuarEixos(timeDePush, LIMITES).push).toBeGreaterThan(pontuarEixos(timeDeLate, LIMITES).push);
  });

  it("time vazio pontua zero em todos os eixos, sem lançar erro", () => {
    const eixos = pontuarEixos([], LIMITES);
    expect(Object.values(eixos)).toEqual([0, 0, 0, 0, 0, 0]);
  });

  it("time incompleto (2 de 5) ainda pontua, pela média de quem foi escolhido", () => {
    const eixos = pontuarEixos([heroi({ gpm_medio: 700 }, {}, 1)], LIMITES);
    expect(eixos.farm).toBeGreaterThan(0);
    expect(Number.isFinite(eixos.luta)).toBe(true);
  });
});

describe("percentil", () => {
  it.each([
    { valor: 5, ordenados: [1, 2, 3, 4], esperado: 1 },
    { valor: 0, ordenados: [1, 2, 3, 4], esperado: 0 },
    { valor: 2, ordenados: [1, 2, 3, 4], esperado: 0.375 },
    { valor: 2, ordenados: [2, 2, 2, 2], esperado: 0.5 },
    { valor: 7, ordenados: [], esperado: 0.5 },
  ])("$valor em $ordenados vale $esperado", ({ valor, ordenados, esperado }) => {
    expect(percentil(valor, ordenados)).toBe(esperado);
  });
});

describe("normalização robusta a outlier", () => {
  // Um herói com cura 50x maior que o resto: no min/máx antigo, a cura mediana virava ~0 e o eixo não comparava nada.
  const curas = [0, 10, 20, 30, 40, 50, 60, 70, 80, 5000];
  const limites = calcularLimites(curas.map((cura_media) => forca({ cura_media })));

  it.each([
    { cura: 50, minimo: 0.5, maximo: 0.6 },
    { cura: 80, minimo: 0.8, maximo: 0.9 },
    { cura: 0, minimo: 0, maximo: 0.1 },
  ])("cura $cura cai entre $minimo e $maximo do eixo de cura", ({ cura, minimo, maximo }) => {
    const sustain = pontuarEixos([heroi({ cura_media: cura })], limites).sustain * 2; // metade do eixo é a cura de pro
    expect(sustain).toBeGreaterThanOrEqual(minimo);
    expect(sustain).toBeLessThanOrEqual(maximo);
  });
});

describe("farm ponderado pela posição", () => {
  const carry = (posicao: 1 | 2 | 3 | 4 | 5) => heroi({ gpm_medio: 700, duracao_media_vitorias_min: 39 }, {}, posicao);
  const suporte = (posicao: 1 | 2 | 3 | 4 | 5) => heroi({ gpm_medio: 200, duracao_media_vitorias_min: 30 }, {}, posicao);

  it.each([
    { nome: "carry na pos 1 vale mais que na pos 5", forte: [carry(1), suporte(5)], fraco: [suporte(1), carry(5)] },
    { nome: "carry na pos 2 vale mais que na pos 4", forte: [carry(2), suporte(4)], fraco: [suporte(2), carry(4)] },
  ])("$nome", ({ forte, fraco }) => {
    expect(pontuarEixos(forte, LIMITES).farm).toBeGreaterThan(pontuarEixos(fraco, LIMITES).farm);
  });

  it("time só com o carry fica com a nota do carry, não dividida pelos 5", () => {
    expect(pontuarEixos([carry(1)], LIMITES).farm).toBeGreaterThan(0.8);
  });
});

describe("comparar", () => {
  const base = { luta: 0.5, farm: 0.5, push: 0.5, pickoff: 0.5, sustain: 0.5 };
  it.each([
    { nome: "empate exato", meu: 0.5, deles: 0.5, vantagem: "parelho" },
    { nome: "50 x 50 na tela, mesmo com 0,8 ponto escondido", meu: 0.504, deles: 0.496, vantagem: "parelho" },
    { nome: "4 pontos ainda é parelho", meu: 0.54, deles: 0.5, vantagem: "parelho" },
    { nome: "5 pontos já é vantagem sua", meu: 0.55, deles: 0.5, vantagem: "meu" },
    { nome: "5 pontos a menos é vantagem deles", meu: 0.45, deles: 0.5, vantagem: "deles" },
  ])("$nome: $vantagem", ({ meu, deles, vantagem }) => {
    const early = comparar({ ...base, early: meu }, { ...base, early: deles }).find((c) => c.eixo === "early");
    expect(early?.vantagem).toBe(vantagem);
  });
});

describe("resumoComparativo", () => {
  it("aponta o eixo em que cada lado está na frente", () => {
    const meu = { luta: 0.9, farm: 0.2, push: 0.5, pickoff: 0.5, early: 0.8, sustain: 0.5 };
    const deles = { luta: 0.3, farm: 0.9, push: 0.5, pickoff: 0.5, early: 0.4, sustain: 0.5 };
    const resumo = resumoComparativo(comparar(meu, deles));
    expect(resumo).toContain("luta em grupo");
    expect(resumo).toContain("farm e late");
  });

  it.each([
    { nome: "forte cedo contra forte no late", meu: { early: 0.7, farm: 0.3 }, deles: { early: 0.4, farm: 0.6 }, plano: "lute e pressione antes dos 30 min" },
    { nome: "fraco cedo e forte no late", meu: { early: 0.4, farm: 0.6 }, deles: { early: 0.7, farm: 0.3 }, plano: "evite lutas antes dos 30 min" },
  ])("planeja pelo tempo de jogo: $nome", ({ meu, deles, plano }) => {
    const base = { luta: 0.5, push: 0.5, pickoff: 0.5, sustain: 0.5 };
    expect(resumoComparativo(comparar({ ...base, ...meu }, { ...base, ...deles }))).toContain(plano);
  });

  it("lista todos os eixos em que cada lado está na frente", () => {
    const meu = { luta: 0.3, farm: 0.7, push: 0.7, pickoff: 0.5, early: 0.5, sustain: 0.7 };
    const deles = { luta: 0.6, farm: 0.4, push: 0.4, pickoff: 0.5, early: 0.5, sustain: 0.4 };
    const resumo = resumoComparativo(comparar(meu, deles)) ?? "";
    for (const eixo of ["farm e late", "push e limpar wave", "sobrevivência e sustain"]) expect(resumo).toContain(eixo);
    expect(resumo).toContain("O adversário está na frente em luta em grupo.");
    expect(resumo).not.toContain("escala");
  });

  it("ignora diferença abaixo do limiar no resumo e no plano", () => {
    const meu = { luta: 0.74, farm: 0.47, push: 0.5, pickoff: 0.5, early: 0.56, sustain: 0.5 };
    const deles = { luta: 0.43, farm: 0.64, push: 0.5, pickoff: 0.5, early: 0.53, sustain: 0.5 };
    const resumo = resumoComparativo(comparar(meu, deles)) ?? "";
    expect(resumo).not.toContain("ritmo no early");
    expect(resumo).toContain("Jogue para lutar em grupo");
  });

  it("não quebra quando os dois times estão empatados em tudo", () => {
    const eixos = { luta: 0.5, farm: 0.5, push: 0.5, pickoff: 0.5, early: 0.5, sustain: 0.5 };
    expect(resumoComparativo(comparar(eixos, eixos))).toBeNull();
  });
});
