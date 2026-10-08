// Publica o atlas Tier 1 na tela Times: copia o hub.json de cada equipe, monta o indice.json com os eixos e clusters
// da síntese e valida tudo com os schemas do app. Corrige só formato, nunca conteúdo, e registra cada correção.
// Uso: npm run publicar-atlas [-- <pasta work do dota-tier1>]
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import type { ZodType } from "zod";
import { chavesSchema, indiceAtlasSchema, lanesSchema, timeAtlasSchema } from "../src/times/schemas.ts";

type Equipe = { id: string; chave: string; classificacao: "tier1" | "fronteira" };

// chave = nome da equipe em sintese/eixos.json; fronteira segundo data/derivados/mapa_por_equipe/indice_base.json.
const EQUIPES: readonly Equipe[] = [
  { id: "team-spirit", chave: "Spirit", classificacao: "tier1" },
  { id: "yandex", chave: "Yandex", classificacao: "tier1" },
  { id: "parivision", chave: "PARIVISION", classificacao: "tier1" },
  { id: "betboom", chave: "BetBoom", classificacao: "tier1" },
  { id: "aurora", chave: "Aurora", classificacao: "tier1" },
  { id: "falcons", chave: "Falcons", classificacao: "tier1" },
  { id: "liquid", chave: "Liquid", classificacao: "tier1" },
  { id: "1win", chave: "1win", classificacao: "tier1" },
  { id: "lgd", chave: "LGD", classificacao: "fronteira" },
  { id: "nigma", chave: "Nigma", classificacao: "tier1" },
  { id: "navi", chave: "NAVI", classificacao: "tier1" },
  { id: "xtreme", chave: "Xtreme", classificacao: "fronteira" },
];

type Sintese = {
  nomes: Record<string, string>;
  variancia_explicada: number[];
  posicoes: Record<string, Record<string, number>>;
  clusters: Record<string, number>;
  nomes_clusters?: Record<string, string> | null;
};
type Base = { patch: string; periodo: string };
type Json = Record<string, unknown>;

const app = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const origem = resolve(process.argv[2] ?? join(app, "../../dota-tier1/work"));
const destino = join(app, "public/data/times_atlas");
const registro: string[] = [];

const lerJson = <T>(caminho: string): T => JSON.parse(readFileSync(caminho, "utf-8"));
const ehObjeto = (v: unknown): v is Json => typeof v === "object" && v !== null && !Array.isArray(v);

// gameplan_contra é só instrução de jogo; metadado como "rotulo" (nota sobre o roster) já aparece em amostra.nota.
const METADADOS_FORA_DO_GAMEPLAN = ["rotulo"];

// Correções conhecidas de formato: marcar a fronteira no arquivo do time e tirar metadado que vazou para o gameplan.
function corrigirFormato(id: string, time: Json, equipe: Equipe): Json {
  const amostra = ehObjeto(time.amostra) ? time.amostra : {};
  const atual = amostra.classificacao ?? "tier1";
  const corrigida = atual === equipe.classificacao ? time : (() => {
    registro.push(`${id}: amostra.classificacao ${JSON.stringify(amostra.classificacao)} -> "${equipe.classificacao}" (lista de fronteira)`);
    return { ...time, amostra: { ...amostra, classificacao: equipe.classificacao } };
  })();

  const gameplan = ehObjeto(corrigida.gameplan_contra) ? corrigida.gameplan_contra : null;
  const chavesSoltas = gameplan ? METADADOS_FORA_DO_GAMEPLAN.filter((k) => k in gameplan) : [];
  if (chavesSoltas.length === 0) return corrigida;
  registro.push(`${id}: gameplan_contra sem ${chavesSoltas.join(", ")} (metadado, não instrução de jogo)`);
  const semMetadado = { ...gameplan };
  for (const k of chavesSoltas) delete semMetadado[k];
  return { ...corrigida, gameplan_contra: semMetadado };
}

// "E1 Projeção territorial (-) x Jogo em casa (+)" vira rótulo e os dois polos.
function eixoDaSintese(id: string, nome: string, variancia: number | undefined) {
  const partes = /^E\d+\s+(.+?)\s*\(-\)\s*x\s*(.+?)\s*\(\+\)$/.exec(nome);
  if (!partes?.[1] || !partes[2]) throw new Error(`eixo ${id} fora do formato esperado: ${nome}`);
  const [negativo, positivo] = [partes[1], partes[2]];
  const parte = variancia === undefined ? "" : ` Explica ${Math.round(variancia * 100)}% da variação entre as 12.`;
  return {
    id, rotulo: `${id} ${negativo} ↔ ${positivo}`, polo_negativo: negativo, polo_positivo: positivo,
    explicacao: `Negativo: ${negativo}. Positivo: ${positivo}.${parte}`,
  };
}

// A síntese regenerada pode vir sem nomes_clusters; os nomes então saem da tabela "| **C3 Casa e farm** |" de eixos.md.
function nomesDosClusters(sintese: Sintese): Record<string, string> {
  if (sintese.nomes_clusters) return sintese.nomes_clusters;
  const md = readFileSync(join(origem, "sintese/eixos.md"), "utf-8");
  const nomes = Object.fromEntries([...md.matchAll(/^\|\s*\*\*C(\d+)\s+(.+?)\*\*\s*\|/gm)].map(([, n, nome]) => [n, nome]));
  const faltando = [...new Set(Object.values(sintese.clusters))].filter((n) => !nomes[String(n)]);
  if (faltando.length) throw new Error(`clusters sem nome em eixos.json e eixos.md: ${faltando.join(", ")}`);
  registro.push("nomes dos clusters lidos de sintese/eixos.md (eixos.json veio sem nomes_clusters)");
  return nomes;
}

// Arquivos extras de cada equipe (chaves, lanes): opcionais enquanto a síntese não termina. Falta vira registro,
// formato errado derruba a publicação.
type Extra = { arquivo: string; sufixo: string; schema: ZodType };
const EXTRAS: readonly Extra[] = [
  { arquivo: "chaves.json", sufixo: "chaves", schema: chavesSchema },
  { arquivo: "lanes_perdidas.json", sufixo: "lanes", schema: lanesSchema },
];

function publicarExtras(id: string) {
  for (const { arquivo, sufixo, schema } of EXTRAS) {
    const caminho = join(origem, "equipes", id, arquivo);
    if (!existsSync(caminho)) {
      registro.push(`${id}: sem ${arquivo}, a tela mostra o aviso no lugar do bloco`);
      continue;
    }
    const dados = lerJson<Json>(caminho);
    const analise = schema.safeParse(dados);
    if (!analise.success) {
      const problemas = analise.error.issues.slice(0, 5).map((i) => `${i.path.map(String).join(".")}: ${i.message}`).join("; ");
      throw new Error(`${id}/${arquivo}: ${problemas}`);
    }
    writeFileSync(join(destino, `${id}.${sufixo}.json`), JSON.stringify(dados));
  }
}

function publicarTime(equipe: Equipe) {
  const bruto = lerJson<Json>(join(origem, "equipes", equipe.id, "hub.json"));
  const time = corrigirFormato(equipe.id, bruto, equipe);
  const analise = timeAtlasSchema.safeParse(time);
  if (!analise.success) {
    const problemas = analise.error.issues.slice(0, 5).map((i) => `${i.path.join(".")}: ${i.message}`).join("; ");
    throw new Error(`${equipe.id}: ${problemas}`);
  }
  if (analise.data.id !== equipe.id) throw new Error(`${equipe.id}: o arquivo diz id ${analise.data.id}`);
  writeFileSync(join(destino, `${equipe.id}.json`), JSON.stringify(time));
  publicarExtras(equipe.id);
  return analise.data;
}

// rosters.csv liga o nome da organização (o mesmo nome do hub.json) aos ids do time no OpenDota.
function idsDosTimes(): Map<string, number[]> {
  const [cabecalho, ...linhas] = readFileSync(join(origem, "../data/tier1/rosters.csv"), "utf-8").trim().split(/\r?\n/);
  const colunas = cabecalho?.split(",") ?? [];
  const [org, teamId] = [colunas.indexOf("org"), colunas.indexOf("team_id")];
  if (org < 0 || teamId < 0) throw new Error("rosters.csv sem as colunas org e team_id");
  const ids = new Map<string, number[]>();
  for (const linha of linhas) {
    // org pode ter vírgula? Não nos dados de hoje; o nome vem antes de team_id, que é sempre numérico.
    const campos = linha.split(",");
    const nome = campos[org] ?? "";
    const id = Number(campos[teamId]);
    if (Number.isInteger(id)) ids.set(nome, [...new Set([...(ids.get(nome) ?? []), id])]);
  }
  return ids;
}

function montarIndice(times: ReturnType<typeof publicarTime>[]) {
  const sintese = lerJson<Sintese>(join(origem, "sintese/eixos.json"));
  const base = lerJson<Base>(join(origem, "../data/derivados/mapa_por_equipe/indice_base.json"));
  const idsPorNome = idsDosTimes();
  const idsDosEixos = Object.keys(sintese.nomes);
  const eixos = idsDosEixos.map((id, k) => eixoDaSintese(id, sintese.nomes[id] ?? id, sintese.variancia_explicada[k]));
  const nomesClusters = nomesDosClusters(sintese);
  const clusters = Object.entries(nomesClusters).map(([n, nome]) => ({ id: `C${n}`, nome }));
  const indice = {
    gerado_em: new Date().toISOString().slice(0, 10), periodo: base.periodo, patch: base.patch, eixos, clusters,
    times: times.map((t, k) => {
      const equipe = EQUIPES[k];
      if (!equipe) throw new Error(`equipe ${t.id} sem configuração`);
      const posicao = sintese.posicoes[equipe.chave];
      const cluster = sintese.clusters[equipe.chave];
      if (!posicao || cluster === undefined) throw new Error(`${t.id}: ${equipe.chave} não está em sintese/eixos.json`);
      return {
        id: t.id, nome: t.nome, tag: t.tag, partidas: t.amostra.partidas, replays: t.amostra.replays, amostra: t.amostra.nivel,
        estilo: nomesClusters[String(cluster)] ?? `C${cluster}`, cluster: `C${cluster}`,
        classificacao: equipe.classificacao, eixos: posicao, team_ids: idsPorNome.get(t.nome) ?? [],
      };
    }),
  };
  const analise = indiceAtlasSchema.safeParse(indice);
  if (!analise.success) throw new Error(`indice.json: ${analise.error.issues.map((i) => `${i.path.join(".")}: ${i.message}`).join("; ")}`);
  writeFileSync(join(destino, "indice.json"), JSON.stringify(indice));
  return analise.data;
}

mkdirSync(destino, { recursive: true });
const times = EQUIPES.map(publicarTime);
const indice = montarIndice(times);
const linhas = [
  `Atlas publicado em ${destino} a partir de ${origem}`,
  `${indice.times.length} equipes, ${indice.eixos.length} eixos, ${indice.clusters.length} clusters`,
  ...indice.times.map((t) => `  ${t.id} (${t.tag}): ${t.estilo}${t.classificacao === "fronteira" ? ", fronteira" : ""}, amostra ${t.amostra}, OpenDota ${t.team_ids.join("/") || "sem id"}`),
  registro.length ? "Registro (correções de formato e arquivos que faltam):" : "Nenhuma correção de formato.",
  ...registro.map((r) => `  ${r}`),
];
writeFileSync(join(destino, "registro.txt"), `${linhas.join("\n")}\n`);
console.log(linhas.join("\n"));
