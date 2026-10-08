import { calcularLimites, comparar, pontuarEixos, resumoComparativo, SEM_TRACOS, type HeroiNoTime, type TracosDeHabilidade } from "./eixos";
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
    const timeDeLuta: HeroiNoTime[] = [
      heroi({ gpm_medio: 300, vitoria_por_duracao: { menos_30min: taxa(0.5), entre_30_40min: taxa(0.5), mais_40min: taxa(0.3) } }, {}, 2),
    ];
    const timeDeFarm: HeroiNoTime[] = [
      heroi({ gpm_medio: 700, vitoria_por_duracao: { menos_30min: taxa(0.5), entre_30_40min: taxa(0.5), mais_40min: taxa(0.7) } }, {}, 1),
    ];

    const eixosDeLuta = pontuarEixos(timeDeLuta, LIMITES);
    const eixosDeFarm = pontuarEixos(timeDeFarm, LIMITES);

    expect(eixosDeFarm.farm).toBeGreaterThan(eixosDeLuta.farm);
  });

  it("farm só olha o gpm dos cores (pos 1 a 3), não dos suportes", () => {
    const comSuporteFarmador: HeroiNoTime[] = [heroi({ gpm_medio: 300 }, {}, 1), heroi({ gpm_medio: 900 }, {}, 5)];
    const comCoreFarmador: HeroiNoTime[] = [heroi({ gpm_medio: 900 }, {}, 1), heroi({ gpm_medio: 300 }, {}, 5)];
    expect(pontuarEixos(comCoreFarmador, LIMITES).farm).toBeGreaterThan(pontuarEixos(comSuporteFarmador, LIMITES).farm);
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

describe("resumoComparativo", () => {
  it("aponta o eixo em que cada lado está na frente", () => {
    const meu = { luta: 0.9, farm: 0.2, push: 0.5, pickoff: 0.5, early: 0.8, sustain: 0.5 };
    const deles = { luta: 0.3, farm: 0.9, push: 0.5, pickoff: 0.5, early: 0.4, sustain: 0.5 };
    const resumo = resumoComparativo(comparar(meu, deles));
    expect(resumo).toContain("luta em grupo");
    expect(resumo).toContain("farm e late");
  });

  it("não quebra quando os dois times estão empatados em tudo", () => {
    const eixos = { luta: 0.5, farm: 0.5, push: 0.5, pickoff: 0.5, early: 0.5, sustain: 0.5 };
    expect(resumoComparativo(comparar(eixos, eixos))).toBeNull();
  });
});
