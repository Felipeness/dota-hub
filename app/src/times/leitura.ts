import { janelaDoTempo, nomeDoObjetivo, smokesDaJanela, type Camada, type FiltroJanela } from "./camadas";
import type { MapaAtlas } from "./schemas";

// Uma frase por camada, calculada dos dados do time na janela escolhida: o "o que este mapa mostra".

const pct = (v: number) => `${Math.round(v * 100)}%`;
const somar = (valores: readonly number[]) => valores.reduce((a, b) => a + b, 0);
// Média ponderada pelo n de cada item; sem peso nenhum, devolve 0 em vez de NaN.
const ponderada = (pares: ReadonlyArray<readonly [number, number]>) => {
  const total = somar(pares.map(([, peso]) => peso));
  return total === 0 ? 0 : somar(pares.map(([v, peso]) => v * peso)) / total;
};

export const rotuloDaJanela = (janela: FiltroJanela) => (janela === "todas" ? "Na partida inteira" : `De ${janela.replace("-", " a ")} min`);

// Nome legível de uma zona: o rótulo que o próprio arquivo dá a ela nas zonas; senão o id sem sublinhado.
const nomeDaZona = (mapa: MapaAtlas, zona: string | undefined) =>
  zona ? (mapa.zonas.find((z) => z.zona === zona)?.rotulo ?? zona.replaceAll("_", " ")) : "lugar sem zona";

function maisFrequente<T>(itens: readonly T[], chave: (item: T) => string, peso: (item: T) => number): [string, number] | null {
  const totais = itens.reduce((mapa, item) => mapa.set(chave(item), (mapa.get(chave(item)) ?? 0) + peso(item)), new Map<string, number>());
  return [...totais].toSorted(([, a], [, b]) => b - a)[0] ?? null;
}

type Leitor = (mapa: MapaAtlas, janela: FiltroJanela) => string;

const zonasDaJanela = (mapa: MapaAtlas, janela: FiltroJanela) => mapa.zonas.filter((z) => z.janela === janela).toSorted((a, b) => b.tempo_pct - a.tempo_pct);

const LEITORES: Record<Camada, Leitor> = {
  calor: (mapa, janela) => {
    const topo = zonasDaJanela(mapa, janela)[0];
    const onde = topo ? ` Mais quente em ${topo.rotulo} (${pct(topo.tempo_pct)} do tempo).` : "";
    return `${rotuloDaJanela(janela)}, onde os heróis do time passam o tempo vivos.${onde}`;
  },
  zonas: (mapa, janela) => {
    const top = zonasDaJanela(mapa, janela).slice(0, 3);
    if (top.length === 0) return `${rotuloDaJanela(janela)}: sem zonas medidas.`;
    return `${rotuloDaJanela(janela)}, as zonas com mais tempo do time: ${top.map((z) => `${z.rotulo} (${pct(z.tempo_pct)})`).join(", ")}.`;
  },
  wards: (mapa, janela) => {
    const wards = mapa.wards.filter((w) => w.janela === janela);
    if (wards.length === 0) return `${rotuloDaJanela(janela)}: nenhuma ward registrada.`;
    const total = somar(wards.map((w) => w.n ?? 1));
    const obs = wards.filter((w) => w.tipo === "obs").length;
    const intencao = maisFrequente(wards, (w) => w.intencao, (w) => w.n ?? 1);
    const destruidas = wards.filter((w) => w.destruida_pct !== undefined).map((w) => [w.destruida_pct ?? 0, w.n ?? 1] as const);
    const queda = destruidas.length ? ` ${pct(ponderada(destruidas))} acabam destruídas.` : "";
    return `${rotuloDaJanela(janela)}: ${total} wards em ${wards.length} pontos (${obs} de observer, ${wards.length - obs} de sentry). Intenção mais comum: ${intencao?.[0] ?? "sem dado"}.${queda}`;
  },
  smokes: (mapa, janela) => {
    const smokes = smokesDaJanela(mapa, janela).map(({ s }) => s);
    if (smokes.length === 0) return `${rotuloDaJanela(janela)}: nenhum smoke.`;
    const usos = somar(smokes.map((s) => s.n));
    const rota = maisFrequente(smokes, (s) => `${nomeDaZona(mapa, s.origem_zona)} para ${nomeDaZona(mapa, s.destino_zona)}`, (s) => s.n);
    const certo = ponderada(smokes.map((s) => [s.resultado.kill + s.resultado.objetivo, s.n] as const));
    const falhou = ponderada(smokes.map((s) => [s.resultado.falhou, s.n] as const));
    const temZonas = smokes.some((s) => s.origem_zona);
    const rotaTexto = rota && temZonas ? ` A rota mais usada sai de ${rota[0]} (${rota[1]}).` : "";
    return `${rotuloDaJanela(janela)}: ${usos} smokes em ${smokes.length} trajetos.${rotaTexto} ${pct(certo)} terminam em kill ou objetivo e ${pct(falhou)} falham.`;
  },
  objetivos: (mapa) => {
    const [maior] = mapa.objetivos.toSorted((a, b) => (b.n ?? 0) - (a.n ?? 0));
    if (!maior) return "Nenhum objetivo com preparo medido.";
    const frequente = maior.n === undefined ? "" : ` O mais frequente é ${nomeDoObjetivo(maior.tipo, maior.grupo)} (n=${maior.n}).`;
    return `${mapa.objetivos.length} objetivos que o time fez, na partida inteira (não muda com a janela).${frequente} Clique num ícone para ver o preparo de T-180 s até o objetivo.`;
  },
  lutas: (mapa, janela) => {
    const lutas = mapa.lutas.filter((l) => l.janela === janela);
    if (lutas.length === 0) return `${rotuloDaJanela(janela)}: nenhuma luta registrada.`;
    const total = somar(lutas.map((l) => l.n));
    const vitoria = ponderada(lutas.map((l) => [l.vitoria_pct, l.n] as const));
    const relevantes = lutas.filter((l) => l.n >= 5).toSorted((a, b) => b.vitoria_pct - a.vitoria_pct);
    const [melhor, pior] = [relevantes[0], relevantes.at(-1)];
    const extremos = melhor && pior && melhor !== pior
      ? ` Vence mais em ${nomeDaZona(mapa, melhor.zona)} (${pct(melhor.vitoria_pct)}, n=${melhor.n}) e menos em ${nomeDaZona(mapa, pior.zona)} (${pct(pior.vitoria_pct)}, n=${pior.n}).`
      : "";
    return `${rotuloDaJanela(janela)}: ${total} lutas em ${lutas.length} lugares; vence ${pct(vitoria)}.${extremos}`;
  },
  farm: (mapa, janela) => {
    const naJanela = (t: string) => janela === "todas" || janelaDoTempo(t) === janela;
    const onde = (["pos1", "pos2"] as const).map((pos) => {
      const zona = maisFrequente(mapa.farm[pos].filter((p) => naJanela(p.t)), (p) => p.rotulo, () => 1);
      return zona ? `o pos ${pos.at(-1)} fica mais em ${zona[0]}` : null;
    }).filter(Boolean);
    const resumo = onde.length ? ` ${onde.join("; ")}.` : "";
    return `Rota mais comum do pos 1 e do pos 2, minuto a minuto (o número é o minuto).${resumo}`;
  },
};

export const leituraDaCamada = (camada: Camada, mapa: MapaAtlas, janela: FiltroJanela): string => LEITORES[camada](mapa, janela);
