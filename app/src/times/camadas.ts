import type { Ponto } from "../map/coords";
import type { CorDesenho, Desenho } from "../map/trilhas";
import type { MapaAtlas } from "./schemas";

// Lógica pura do mapa do time: o que cada camada desenha e o que o painel mostra ao clicar.

export const JANELAS = ["0-5", "5-10", "10-15", "15-20", "20-25", "25-30", "30+"] as const;
export type FiltroJanela = (typeof JANELAS)[number] | "todas";

export const CAMADAS = ["calor", "zonas", "wards", "smokes", "objetivos", "lutas", "farm"] as const;
export type Camada = (typeof CAMADAS)[number];

export type Filtro = Readonly<{ camadas: ReadonlySet<Camada>; janela: FiltroJanela; intencao: string }>;
export const TODAS_AS_INTENCOES = "todas";

export type Preparo = MapaAtlas["objetivos"][number]["preparo"][number];
export type ItemDoMapa = Readonly<{
  id: string; camada: Camada; titulo: string; texto: string;
  numeros: ReadonlyArray<readonly [string, string]>; preparo?: readonly Preparo[];
}>;

// "todas" é o agregado da partida inteira, com itens próprios: cada filtro mostra só a sua janela, sem somar as outras.
export const naJanela = (janelaDoItem: string, filtro: FiltroJanela): boolean => janelaDoItem === filtro;
const minutoNaJanela = (tempo: string, filtro: FiltroJanela): boolean => filtro === "todas" || janelaDoTempo(tempo) === filtro;

export function janelaDoTempo(tempo: string): FiltroJanela {
  const minuto = Number(tempo.split(":")[0]);
  if (minuto >= 30) return "30+";
  return JANELAS[Math.floor(minuto / 5)] ?? "todas";
}

const pct = (v: number) => `${Math.round(v * 100)}%`;
const ROTULO_WARD = { obs: "Observer", sen: "Sentry" } as const;
const COR_WARD = { obs: "destaque", sen: "info" } as const satisfies Record<keyof typeof ROTULO_WARD, CorDesenho>;
const RESULTADOS = ["kill", "objetivo", "farm", "nada", "falhou"] as const;
type Resultado = Record<(typeof RESULTADOS)[number], number>;
const COR_RESULTADO = { kill: "radiant", objetivo: "info", farm: "neutro", nada: "neutro", falhou: "dire" } as const satisfies Record<keyof Resultado, CorDesenho>;
const COR_FARM = { pos1: "texto", pos2: "info" } as const satisfies Record<string, CorDesenho>;

export const resultadoPrincipal = (r: Resultado): keyof Resultado =>
  RESULTADOS.reduce<keyof Resultado>((melhor, chave) => (r[chave] > r[melhor] ? chave : melhor), "kill");

// ponytail: só os smokes mais repetidos da janela viram seta; o arquivo traz mais de 150 por janela e o resto vira ruído.
export const MAXIMO_DE_SMOKES = 25;

const ROTULO_POS = { pos1: "Pos 1", pos2: "Pos 2" } as const;
const ROTULO_GRUPO: Readonly<Record<string, string>> = {
  roshan_top: "Roshan (fosso de cima)", roshan_bot: "Roshan (fosso de baixo)",
  tormentor_nw: "Tormentor (canto noroeste)", tormentor_se: "Tormentor (canto sudeste)",
};

// Torres vêm como t1_top … t3_bot e t4; grupo desconhecido aparece cru até ganhar rótulo.
export function nomeDoObjetivo(tipo: string, grupo: string | undefined): string {
  if (!grupo) return tipo;
  const torre = /^t(\d)(?:_(top|mid|bot))?$/.exec(grupo);
  if (torre) return `Torre T${torre[1]}${torre[2] ? ` ${torre[2]}` : ""}`;
  return ROTULO_GRUPO[grupo] ?? grupo;
}
const numero = (v: number) => v.toLocaleString("pt-BR", { maximumFractionDigits: 2 });
// Campos que só os dados reais trazem: entram no painel quando existem.
const opcional = (rotulo: string, valor: number | string | undefined, formato: (v: number) => string = numero): [string, string][] =>
  valor === undefined ? [] : [[rotulo, typeof valor === "number" ? formato(valor) : valor]];
const distribuicao = (partes: Readonly<Record<string, number>> | undefined): string =>
  partes ? Object.entries(partes).toSorted(([, a], [, b]) => b - a).map(([k, v]) => `${k} ${pct(v)}`).join(", ") : "";

export const intencoesDosWards = (mapa: MapaAtlas): string[] => [...new Set(mapa.wards.map((w) => w.intencao))].sort();

/* Itens clicáveis: o id é camada:posição no arquivo, estável qualquer que seja o filtro. */

const ITENS: Record<Camada, (mapa: MapaAtlas, filtro: Filtro) => ItemDoMapa[]> = {
  calor: () => [],
  zonas: (mapa, filtro) => mapa.zonas.flatMap((z, i) => (naJanela(z.janela, filtro.janela) ? [{
    id: `zonas:${i}`, camada: "zonas", titulo: z.rotulo, texto: `Zona ${z.zona}.`,
    numeros: [["Tempo do time aqui", pct(z.tempo_pct)], ["Janela", z.janela]],
  }] : [])),
  wards: (mapa, filtro) => mapa.wards.flatMap((w, i) => (naJanela(w.janela, filtro.janela) && aceitaIntencao(w.intencao, filtro) ? [{
    id: `wards:${i}`, camada: "wards", titulo: `${ROTULO_WARD[w.tipo]} para ${w.intencao}`, texto: w.texto || distribuicao(w.intencoes),
    numeros: [["Tipo", ROTULO_WARD[w.tipo]], ...opcional("n", w.n), ["Por partida", numero(w.peso)], ["Janela", w.janela],
      ...opcional("Destruída", w.destruida_pct, pct), ...opcional("Duração mediana", w.duracao_mediana_s, (v) => `${Math.round(v)} s`)],
  }] : [])),
  smokes: (mapa, filtro) => mapa.smokes
    .flatMap((s, i) => (naJanela(s.janela, filtro.janela) ? [{ s, i }] : []))
    .toSorted((a, b) => b.s.n - a.s.n).slice(0, MAXIMO_DE_SMOKES)
    .map(({ s, i }) => ({
      id: `smokes:${i}`, camada: "smokes", titulo: `Smoke, ${s.n} vezes`, texto: s.texto,
      numeros: [["n", String(s.n)], ["Kill", pct(s.resultado.kill)], ["Objetivo", pct(s.resultado.objetivo)], ["Farm", pct(s.resultado.farm)],
        ["Nada", pct(s.resultado.nada)], ["Falhou", pct(s.resultado.falhou)], ["Janela", s.janela], ...opcional("Heróis juntos", s.herois_medio)],
    })),
  objetivos: (mapa) => mapa.objetivos.map((o, i) => ({
    id: `objetivos:${i}`, camada: "objetivos", titulo: `Preparo de ${nomeDoObjetivo(o.tipo, o.grupo)}`, texto: o.texto,
    numeros: [...opcional("n", o.n), ...opcional("Minuto mediano", o.minuto_mediano), ["Passos de preparo", String(o.preparo.length)]],
    preparo: o.preparo.toSorted((a, b) => a.t_rel_s - b.t_rel_s),
  })),
  lutas: (mapa, filtro) => mapa.lutas.flatMap((l, i) => (naJanela(l.janela, filtro.janela) ? [{
    id: `lutas:${i}`, camada: "lutas", titulo: `Luta, ${pct(l.vitoria_pct)} de vitória`, texto: l.texto,
    numeros: [["n", String(l.n)], ["Vitórias", pct(l.vitoria_pct)], ...opcional("Iniciou", l.iniciou_pct, pct), ["Janela", l.janela]],
  }] : [])),
  farm: (mapa, filtro) => (["pos1", "pos2"] as const).flatMap((pos) => mapa.farm[pos].flatMap((p, i) => (minutoNaJanela(p.t, filtro.janela) ? [{
    id: `farm:${pos}:${i}`, camada: "farm", titulo: `${ROTULO_POS[pos]} às ${p.t}`, texto: p.rotulo,
    numeros: [["Minuto", p.t], ["Posição", ROTULO_POS[pos]], ...opcional("Partidas nessa zona", p.zona_pct, pct), ...opcional("n", p.n), ...opcional("Atividade", p.atividade)],
  }] : []))),
};

const aceitaIntencao = (intencao: string, filtro: Filtro) => filtro.intencao === TODAS_AS_INTENCOES || filtro.intencao === intencao;

const ROTULO_ACAO: Readonly<Record<string, string>> = { presenca: "presença" };

// Uma linha por faixa de tempo, com as ações dela; T=0 sempre fecha a lista com o objetivo.
export function linhasDoPreparo(preparo: readonly Preparo[]): { t: number; texto: string }[] {
  const porFaixa = preparo.reduce((faixas, p) => faixas.set(p.t_rel_s, [...(faixas.get(p.t_rel_s) ?? []), p]), new Map<number, Preparo[]>());
  const descrever = (p: Preparo) => {
    const acao = ROTULO_ACAO[p.acao] ?? p.acao;
    if (p.freq !== undefined) return `${acao} ${pct(p.freq)}`;
    if (p.herois_perto_medio !== undefined) return `${acao} ${numero(p.herois_perto_medio)} heróis`;
    return acao;
  };
  const linhas = [...porFaixa].toSorted(([a], [b]) => a - b).map(([t, passos]) => ({ t, texto: passos.map(descrever).join(" · ") }));
  const final = linhas.find((l) => l.t === 0);
  if (final) return linhas.map((l) => (l === final ? { t: 0, texto: `${l.texto} · objetivo` } : l));
  return [...linhas, { t: 0, texto: "objetivo" }];
}

export const itensDoMapa = (mapa: MapaAtlas, filtro: Filtro): ItemDoMapa[] =>
  CAMADAS.filter((c) => filtro.camadas.has(c)).flatMap((c) => ITENS[c](mapa, filtro));

/* Desenhos */

const pino = (id: string, [x, y]: Ponto, cor: CorDesenho, raio: number, rotulo: string, extra: Partial<Pick<Extract<Desenho, { tipo: "pino" }>, "texto" | "opacidade" | "clicavel" | "porCima">> = {}): Desenho =>
  ({ tipo: "pino", id, x, y, cor, raio, rotulo, clicavel: true, opacidade: 1, ...extra });

// Duas asas curtas no fim da linha, para a seta funcionar igual no SVG e no 3D.
export function pontaDaSeta(de: Ponto, para: Ponto, tamanho = 0.022): Ponto[] {
  const angulo = Math.atan2(para[1] - de[1], para[0] - de[0]);
  const asa = (giro: number): Ponto => [para[0] - tamanho * Math.cos(angulo + giro), para[1] - tamanho * Math.sin(angulo + giro)];
  return [asa(0.45), para, asa(-0.45)];
}

const LIMIAR_CALOR = 0.08;

function desenhosDoCalor(mapa: MapaAtlas, filtro: Filtro): Desenho[] {
  const calor = [mapa.calor, ...mapa.calor_por_janela].find((c) => c && naJanela(c.janela, filtro.janela));
  if (!calor) return [];
  const maximo = Math.max(0, ...calor.valores.flat());
  if (maximo === 0) return [];
  return calor.valores.flatMap((linha, j) => linha.flatMap((valor, i) => {
    const forca = valor / maximo;
    if (forca < LIMIAR_CALOR) return [];
    const centro: Ponto = [(i + 0.5) / calor.grade, (j + 0.5) / calor.grade];
    return [pino(`calor:${j}:${i}`, centro, "destaque", 0.8 / calor.grade, "", { clicavel: false, opacidade: Math.round((0.12 + 0.55 * forca) * 100) / 100 })];
  }));
}

function desenhosDoObjetivo(mapa: MapaAtlas, item: ItemDoMapa, aberto: boolean): Desenho[] {
  const o = mapa.objetivos[Number(item.id.split(":")[1])];
  if (!o) return [];
  // Por cima: o objetivo não pode ficar embaixo de um ponto de farm no mesmo lugar.
  const marcador = pino(item.id, [o.x, o.y], "neutro", 0.02, item.titulo, { porCima: true });
  if (!aberto || !item.preparo) return [marcador];
  // Presença não tem lugar no mapa: só ward e smoke com posição viram ponto.
  const comLugar = item.preparo.flatMap((p) => (p.x === undefined || p.y === undefined ? [] : [{ ...p, ponto: [p.x, p.y] satisfies Ponto }]));
  const passos = comLugar.map((p, k) => pino(`${item.id}:preparo:${k}`, p.ponto, "destaque", 0.012, `${p.acao} em T${p.t_rel_s} s`,
    { clicavel: false, texto: `${p.t_rel_s}s ${p.acao}${p.freq === undefined ? "" : ` ${pct(p.freq)}`}` }));
  const trajeto: Desenho = { tipo: "linha", id: `${item.id}:trajeto`, pontos: [...comLugar.map((p) => p.ponto), [o.x, o.y]], cor: "destaque", espessura: 0.003 };
  return [trajeto, ...passos, marcador];
}

const ZONA_COM_ROTULO = 0.08;
const indice = (id: string) => Number(id.split(":").at(-1));

const DESENHOS: Record<Exclude<Camada, "calor" | "objetivos">, (mapa: MapaAtlas, item: ItemDoMapa) => Desenho[]> = {
  zonas: (mapa, item) => {
    const z = mapa.zonas[indice(item.id)];
    // Só as zonas com tempo de verdade ganham rótulo; com 24 zonas por janela, todos os rótulos cobririam o mapa.
    return z ? [pino(item.id, [z.x, z.y], "info", 0.012 + 0.03 * z.tempo_pct, item.titulo, z.tempo_pct >= ZONA_COM_ROTULO ? { texto: z.rotulo } : {})] : [];
  },
  wards: (mapa, item) => {
    const w = mapa.wards[indice(item.id)];
    const maiorPeso = Math.max(1e-9, ...mapa.wards.map((x) => x.peso));
    return w ? [pino(item.id, [w.x, w.y], COR_WARD[w.tipo], 0.008 + 0.008 * (w.peso / maiorPeso), item.titulo)] : [];
  },
  smokes: (mapa, item) => {
    const s = mapa.smokes[indice(item.id)];
    if (!s) return [];
    const de: Ponto = [s.x, s.y];
    const cor = COR_RESULTADO[resultadoPrincipal(s.resultado)];
    if (s.destino_x === null || s.destino_y === null) return [pino(item.id, de, cor, 0.011, item.titulo)];
    const para: Ponto = [s.destino_x, s.destino_y];
    const espessura = Math.min(0.012, 0.002 + 0.0008 * s.n);
    return [
      { tipo: "linha", id: `${item.id}:rastro`, pontos: [de, para], cor, espessura },
      { tipo: "linha", id: `${item.id}:seta`, pontos: pontaDaSeta(de, para), cor, espessura },
      pino(item.id, de, cor, 0.011, item.titulo),
    ];
  },
  lutas: (mapa, item) => {
    const l = mapa.lutas[indice(item.id)];
    return l ? [pino(item.id, [l.x, l.y], l.vitoria_pct >= 0.5 ? "radiant" : "dire", 0.01 + 0.004 * Math.sqrt(l.n), item.titulo, { texto: pct(l.vitoria_pct) })] : [];
  },
  farm: (mapa, item) => {
    const pos = item.id.split(":")[1] === "pos2" ? "pos2" : "pos1";
    const p = mapa.farm[pos][indice(item.id)];
    return p ? [pino(item.id, [p.x, p.y], COR_FARM[pos], 0.009, item.titulo, { texto: p.t })] : [];
  },
};

function rotasDeFarm(itens: readonly ItemDoMapa[], mapa: MapaAtlas): Desenho[] {
  return (["pos1", "pos2"] as const).flatMap((pos): Desenho[] => {
    const pontos = itens.filter((i) => i.id.startsWith(`farm:${pos}:`)).map((i) => mapa.farm[pos][indice(i.id)]).flatMap((p): Ponto[] => (p ? [[p.x, p.y]] : []));
    return pontos.length >= 2 ? [{ tipo: "linha", id: `farm:${pos}:rota`, pontos, cor: COR_FARM[pos], espessura: 0.004 }] : [];
  });
}

export function desenhosDoMapa(mapa: MapaAtlas, filtro: Filtro, aberto: string | null): Desenho[] {
  const itens = itensDoMapa(mapa, filtro);
  const calor = filtro.camadas.has("calor") ? desenhosDoCalor(mapa, filtro) : [];
  const marcadores = itens.flatMap((item) =>
    item.camada === "objetivos" ? desenhosDoObjetivo(mapa, item, item.id === aberto)
      : item.camada === "calor" ? []
        : DESENHOS[item.camada](mapa, item));
  return [...calor, ...rotasDeFarm(itens, mapa), ...marcadores];
}
