import { faseSchema, heroiSchema, minutoComoTexto, painelSchema, relevoSchema, trajetoriaSchema } from "./schemas";

const grafico = { id: "g", titulo: "G", tipo: "barra", x: { rotulo: "", valores: ["a", "b"] }, series: [{ nome: "s", valores: [1, null] }], unidade: "%", fonte: "f", nota: null };

it("aceita painel com gráfico e rejeita série com tamanho diferente do eixo", () => {
  const painel = { id: "leo", nome: "Leo", tipo: "amigo", time: null, amostra: "", fontes: [], destaques: [], graficos: [grafico], achados: [], replays: [] };
  expect(painelSchema.safeParse(painel).success).toBe(true);
  const quebrado = { ...painel, graficos: [{ ...grafico, series: [{ nome: "s", valores: [1] }] }] };
  expect(painelSchema.safeParse(quebrado).success).toBe(false);
});

it("relevo exige tamanho ao quadrado de alturas", () => {
  expect(relevoSchema.safeParse({ tamanho: 2, alturas: [0, 0, 0, 0] }).success).toBe(true);
  expect(relevoSchema.safeParse({ tamanho: 2, alturas: [0] }).success).toBe(false);
});

it("trajetória exige pares de coordenadas", () => {
  const base = { match_id: "1", passo_s: 5, fim_s: 5, focos: [], wards: [], mortes: [] };
  const heroi = { slot: 0, heroi: "sven", lado: "radiant", jogador: null };
  expect(trajetoriaSchema.safeParse({ ...base, herois: [{ ...heroi, xy: [1, 2, 3, 4] }] }).success).toBe(true);
  expect(trajetoriaSchema.safeParse({ ...base, herois: [{ ...heroi, xy: [1, 2, 3] }] }).success).toBe(false);
});

it.each([
  { minutos: 0, texto: "0:00" }, { minutos: 2.5, texto: "2:30" }, { minutos: 0.8, texto: "0:48" },
  { minutos: 41, texto: "41:00" }, { minutos: -1.5, texto: "-1:30" },
])("converte $minutos minutos em $texto", ({ minutos, texto }) => {
  expect(minutoComoTexto(minutos)).toBe(texto);
});

it("fase do herói aceita minuto numérico e fim em aberto, como vem do export", () => {
  const passo = { n: 1, alvo: "lane_bot", x: 0.8, y: 0.2, rotulo: "lane_bot", minuto: 2.5, acao: "", risco: "objetivo" };
  const fase = faseSchema.parse({ de: 30, ate: null, janela: "30:00-fim", objetivo: "", passos: [passo], caminhos: [] });
  expect(fase.passos[0]?.minuto).toBe("2:30");
  expect(fase.ate).toBeNull();
});

it("confiança em objeto vira o nível geral", () => {
  const confianca = heroiSchema.shape.confianca.parse({ geral: "media-alta", alta: ["a"] });
  expect(confianca).toBe("media-alta");
});
