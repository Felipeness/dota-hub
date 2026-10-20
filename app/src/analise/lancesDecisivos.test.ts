import { detalheDaAmostraCompleta } from "./amostras/amostraCompleta";
import { MAXIMO_DE_LANCES, escolherLances, treinoDaPartida } from "./lancesDecisivos";
import type { Achado, Categoria, Peso } from "./modelo";

const detalhe = detalheDaAmostraCompleta();
const achado = (id: string, tipo: Categoria, minuto: number | null, peso: Peso = "pesou"): Achado => ({
  id, tipo, minuto, peso, titulo: id, oQueAconteceu: "", oQueFazer: null, porque: "", fontes: [], evidencias: {},
});

describe("escolherLances", () => {
  it("junta achados do mesmo meio minuto num lance só, mantendo o de maior impacto", () => {
    const { lances } = escolherLances(detalhe, [
      achado("aegis-ativa-1713", "erro", 1713 / 60),
      achado("morte-em-inferioridade-1713", "erro", 1713 / 60),
      achado("torre-perdida-apos-morte-1713", "erro", 1720 / 60, "leve"),
    ]);
    expect(lances).toHaveLength(1);
    expect(lances[0]?.achado.id).toBe("morte-em-inferioridade-1713");
    expect(lances[0]?.relacionados.map((a) => a.id)).toEqual(["aegis-ativa-1713", "torre-perdida-apos-morte-1713"]);
  });

  it.each([
    { caso: "só erros", erros: 12, acertos: 0, lances: MAXIMO_DE_LANCES, acertosNosLances: 0 },
    { caso: "erros e acertos", erros: 12, acertos: 5, lances: MAXIMO_DE_LANCES, acertosNosLances: 2 },
    { caso: "poucos", erros: 2, acertos: 1, lances: 3, acertosNosLances: 1 },
    { caso: "nada", erros: 0, acertos: 0, lances: 0, acertosNosLances: 0 },
  ])("$caso: $lances lances, $acertosNosLances acertos, em ordem de tempo", ({ erros, acertos, lances, acertosNosLances }) => {
    const achados = [
      ...Array.from({ length: erros }, (_, i) => achado(`erro-${i}`, "erro", 5 + i * 3)),
      ...Array.from({ length: acertos }, (_, i) => achado(`acerto-${i}`, "acerto", 6 + i * 3, "leve")),
      achado("sem-tempo", "erro", null, "pesou_muito"),
      achado("contexto", "contexto", 10, "pesou_muito"),
    ];
    const escolha = escolherLances(detalhe, achados);
    expect(escolha.lances).toHaveLength(lances);
    expect(escolha.lances.filter((l) => l.achado.tipo === "acerto")).toHaveLength(acertosNosLances);
    expect(escolha.lances.map((l) => l.t)).toEqual([...escolha.lances.map((l) => l.t)].sort((a, b) => a - b));
    expect(escolha.lances.some((l) => l.achado.tipo === "contexto" || l.achado.minuto === null)).toBe(false);
  });

  it("erro seguido de torre perdida pesa mais que o mesmo erro sem consequência", () => {
    // 11:38 caiu a T1 de baixo do Radiant (time da Medusa); 40:00 não tem estrutura nem Roshan perto.
    const { lances } = escolherLances(detalhe, [achado("a", "erro", 11), achado("b", "erro", 40)]);
    const [comTorre, semTorre] = [lances.find((l) => l.achado.id === "a"), lances.find((l) => l.achado.id === "b")];
    expect(comTorre?.impacto).toBeGreaterThan(semTorre?.impacto ?? Number.POSITIVE_INFINITY);
  });
});

describe("treinoDaPartida", () => {
  it.each([
    { caso: "mortes pesam mais que build", ids: ["morte-em-inferioridade-1", "mortes-no-farm", "build-x"], titulo: "Contar quem está vivo antes de avançar" },
    { caso: "build pesa mais", ids: ["build-a", "build-b", "mortes-no-farm"], titulo: "Decidir o próximo item antes de lutar" },
    { caso: "visão sem instante usa o 1º Roshan inimigo", ids: ["sem-wards-contra-roshan"], titulo: "Ward antes do objetivo" },
  ])("$caso", ({ ids, titulo }) => {
    const erros = ids.map((id, i) => achado(id, "erro", id.startsWith("sem-wards") ? null : 10 + i));
    expect(treinoDaPartida(detalhe, erros)?.titulo).toBe(titulo);
  });

  it("a janela termina no primeiro erro do tema e começa 90 s antes", () => {
    const treino = treinoDaPartida(detalhe, [achado("mortes-no-farm", "erro", 8 + 34 / 60)]);
    expect(treino).toMatchObject({ de: 424, ate: 514 });
    expect(treino?.texto).toMatch(/^Entre 7:04 e 8:34/);
  });

  it("sem erro com tema conhecido, sem treino", () => {
    expect(treinoDaPartida(detalhe, [achado("outra-coisa", "erro", 3)])).toBeNull();
  });
});
