# Dota Hub, fase 2 (busca ao vivo no OpenDota) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Digitar uma conta ou um time e ver na hora, com dados do OpenDota, estatísticas básicas, heróis, últimas partidas e a rota aproximada de uma partida no mapa, com cache, limites e erros visíveis.

**Architecture:** Um pacote novo `api/` (TypeScript) com o serviço da busca: `fonte/` chama o OpenDota com tempo máximo e valida a resposta com zod; `consulta.ts` decide entre cache e fonte e serve o cache vencido quando a fonte falha; `limite/` conta buscas por visitante e o orçamento da fonte; `contas/`, `partidas/` e `times/` montam as respostas (funções puras sobre os dados da fonte); `http/` tem o `responder` (roteamento por tabela, validação, mapeamento de erro para status), o handler da Lambda e um servidor local. Cache e contadores têm duas implementações reais: memória (testes e servidor local) e DynamoDB (produção, ligado na fase 3). O app ganha o domínio `live/` (cliente com tempo máximo e zod, telas de busca, conta, time e rota aproximada) e a `MapView` ganha `manchas`. O contrato entre os dois lados é checado por exemplos gravados em `contrato/exemplos/`: a API gera, o app valida.

**Tech Stack:** Node 22, TypeScript 5 strict, zod 3, vitest, esbuild, tsx, `@aws-sdk/client-dynamodb` + `@aws-sdk/lib-dynamodb` (v3), `@types/aws-lambda`. App: o da fase 1.

**Spec:** `docs/superpowers/specs/2026-10-06-dota-hub-fase2-3-design.md` (fase 2). Decisão técnica: `docs/superpowers/decisions/2026-10-06-fase2-3-stack.md`. Depende da fase 1 (1A e 1B) mesclada: usa `MapView`, `SearchBox`, `normalizar`, `Shell` e as rotas de tela.

## Global Constraints

- Português do Brasil com acentos nas mensagens e no conteúdo; nomes de código em português como na fase 1; sem travessão.
- TypeScript strict com `noUncheckedIndexedAccess`; sem `any`, sem `!`, `as` só em fábrica de teste.
- Toda chamada ao OpenDota tem tempo máximo de 4 s (`AbortSignal.timeout`); toda chamada do app à API tem tempo máximo de 10 s.
- Nenhuma chave, senha ou credencial no repositório. O OpenDota é usado sem chave.
- Limites: 20 buscas por minuto por visitante; orçamento da fonte de 50 chamadas por minuto e 1.800 por dia (90% do limite gratuito publicado pelo OpenDota, 60 por minuto e 2.000 por dia; o executor confere o limite atual em `https://www.opendota.com/api-keys` na Task 3 e ajusta `LIMITES` se mudou).
- Validade do cache (spec): perfil e vitórias da conta 1 h; busca por nome 1 h; time e jogadores do time 1 h; partidas recentes e heróis da conta 10 min; partidas do time 10 min; partida 7 dias; lista de times e nomes de heróis 1 dia. O cache vencido fica até 7 dias para servir quando a fonte falha.
- Visitante identificado só por um hash do IP com o dia (16 caracteres), nunca o IP em claro; o contador some em 2 minutos.
- Logs em JSON com `nivel`, `operacao`, `duracaoMs`, `codigo`; nunca IP. Erro de formato da fonte é `nivel: "error"` (a fase 3 liga alarme nele).
- Testes não chamam o OpenDota de verdade: usam respostas gravadas (`api/src/fonte/amostras/`) ou dados sintéticos.
- Commits `type: descrição em minúscula`, sem menção a IA.

## Review Focus

1. Cache vencido servido só quando a fonte falha ou o orçamento acabou, nunca quando a conta não existe (Task 4).
2. Contador atômico: o `UpdateItem` com `ConditionExpression` nunca deixa passar do máximo, mesmo com várias Lambdas ao mesmo tempo (Task 5).
3. Conta inexistente gasta só 1 chamada da fonte (a do perfil), não 5 (Task 6).
4. Erro de qualquer tipo vira resposta JSON com `codigo` e status certo, nunca stack trace (Task 9).
5. Resposta 429 sem o corpo da API (throttling do API Gateway, inclusive o corte de custo da fase 3) vira "busca pausada" no app (Task 10).

---

## File Structure

```
dota-hub/
  contrato/exemplos/              respostas de exemplo geradas pelos testes da API e validadas pelos testes do app
  api/
    package.json, tsconfig.json, vitest.config.ts
    src/resultado.ts              Resultado<T, E>, ok, falha
    src/erros.ts                  ErroBusca, códigos, status HTTP
    src/contrato.ts               tipos das respostas da API (o que o app recebe)
    src/registro.ts               log JSON
    src/fonte/schemas.ts          zod das respostas do OpenDota (só os campos usados)
    src/fonte/opendota.ts         criarFonte: GET com tempo máximo, status e formato
    src/fonte/amostras/*.json     respostas reais gravadas
    src/limite/limite.ts          criarLimites, idDoVisitante, contadoresEmMemoria
    src/cache/cache.ts            Cache, cacheEmMemoria
    src/infra/dynamo.ts           cacheDynamo, contadoresDynamo
    src/consulta.ts               criarConsulta (cache, orçamento, fonte, vencido)
    src/contas/contas.ts          buscar (contas e times por nome), resumoDaConta
    src/partidas/rota-aproximada.ts
    src/times/times.ts
    src/http/responder.ts         tabela de rotas, validação, erro para status
    src/http/dependencias.ts      monta as dependências
    src/http/lambda.ts            handler da Lambda
    src/http/dev.ts               servidor local (porta 8787)
  app/
    vite.config.ts                (modificar) proxy /api
    src/live/contrato.ts          zod das respostas da API
    src/live/api.ts               pedir, mensagemDoErro
    src/live/useAoVivo.ts         estado carregando/ok/erro com cancelamento e "tentar de novo"
    src/live/ErroAoVivo.tsx, Frescor.tsx
    src/live/AoVivoPage.tsx, ContaPage.tsx, RotaDaPartida.tsx, TimeAoVivoPage.tsx
    src/map/MapView.tsx, MapFlat.tsx, Map3D.tsx   (modificar) manchas
    src/search/SearchBox.tsx      (modificar) atalho "Buscar ao vivo"
```

---

### Task 1: Esqueleto do pacote `api/` com resultado e erros

**Files:**
- Create: `api/package.json`, `api/tsconfig.json`, `api/vitest.config.ts`, `api/src/resultado.ts`, `api/src/erros.ts`, `api/src/erros.test.ts`, `api/src/registro.ts`
- Modify: `.gitignore` (acrescentar `api/dist/`)

**Interfaces:**
- Produces: `type Resultado<T, E> = { ok: true; valor: T } | { ok: false; erro: E }`, `ok(valor)`, `falha(erro)`; `CODIGOS`, `type CodigoErro`, `type ErroBusca = { codigo; mensagem; tenteEmS? }`, `erroBusca(codigo, mensagem, tenteEmS?)`, `STATUS_DO_ERRO`; `type Registro`, `type Registrar`, `registrarJson`.

- [ ] **Step 1: Teste que falha**

```ts
// api/src/erros.test.ts
import { STATUS_DO_ERRO, erroBusca } from "./erros";
import { falha, ok } from "./resultado";

it.each([
  ["ENTRADA_INVALIDA", 400], ["NAO_ENCONTRADO", 404], ["LIMITE_VISITANTE", 429], ["LIMITE_FONTE", 503],
  ["FONTE_INDISPONIVEL", 502], ["FONTE_FORMATO", 502], ["INTERNO", 500],
] as const)("%s vira status %i", (codigo, status) => {
  expect(STATUS_DO_ERRO[codigo]).toBe(status);
});

it("erro só leva tenteEmS quando existe", () => {
  expect(erroBusca("NAO_ENCONTRADO", "x")).toEqual({ codigo: "NAO_ENCONTRADO", mensagem: "x" });
  expect(erroBusca("LIMITE_FONTE", "x", 30)).toEqual({ codigo: "LIMITE_FONTE", mensagem: "x", tenteEmS: 30 });
});

it("resultado tem os dois lados", () => {
  expect(ok(1)).toEqual({ ok: true, valor: 1 });
  expect(falha("e")).toEqual({ ok: false, erro: "e" });
});
```

- [ ] **Step 2: Rodar e ver falhar**

```bash
mkdir -p api && cd api && npm init -y && npm pkg set type=module private=true name=dota-hub-api
npm i zod@3 @aws-sdk/client-dynamodb @aws-sdk/lib-dynamodb
npm i -D typescript vitest esbuild tsx @types/node @types/aws-lambda
npx vitest run
```

Expected: FAIL (módulos não existem).

- [ ] **Step 3: Implementação**

```json
// api/tsconfig.json
{
  "compilerOptions": {
    "target": "ES2023", "module": "ESNext", "moduleResolution": "Bundler", "lib": ["ES2023", "DOM"],
    "strict": true, "noUncheckedIndexedAccess": true, "verbatimModuleSyntax": true, "resolveJsonModule": true,
    "noEmit": true, "skipLibCheck": true, "types": ["node", "vitest/globals"]
  },
  "include": ["src"]
}
```

```ts
// api/vitest.config.ts
import { defineConfig } from "vitest/config";

export default defineConfig({ test: { globals: true, environment: "node" } });
```

Em `api/package.json`, os scripts:

```json
"scripts": {
  "test": "vitest run",
  "typecheck": "tsc --noEmit",
  "dev": "tsx src/http/dev.ts",
  "build": "esbuild src/http/lambda.ts --bundle --platform=node --target=node22 --format=esm --outfile=dist/busca/index.mjs --banner:js=\"import{createRequire}from'module';const require=createRequire(import.meta.url);\""
}
```

(O banner dá `require` ao bundle ESM: partes do AWS SDK ainda usam `require` por dentro.)

```ts
// api/src/resultado.ts
export type Resultado<T, E> = { readonly ok: true; readonly valor: T } | { readonly ok: false; readonly erro: E };

export const ok = <T>(valor: T): Resultado<T, never> => ({ ok: true, valor });
export const falha = <E>(erro: E): Resultado<never, E> => ({ ok: false, erro });
```

```ts
// api/src/erros.ts
export const CODIGOS = [
  "ENTRADA_INVALIDA", "NAO_ENCONTRADO", "LIMITE_VISITANTE", "LIMITE_FONTE", "FONTE_INDISPONIVEL", "FONTE_FORMATO", "INTERNO",
] as const;
export type CodigoErro = (typeof CODIGOS)[number];

export type ErroBusca = { readonly codigo: CodigoErro; readonly mensagem: string; readonly tenteEmS?: number };

export const STATUS_DO_ERRO = {
  ENTRADA_INVALIDA: 400, NAO_ENCONTRADO: 404, LIMITE_VISITANTE: 429, LIMITE_FONTE: 503,
  FONTE_INDISPONIVEL: 502, FONTE_FORMATO: 502, INTERNO: 500,
} as const satisfies Record<CodigoErro, number>;

export function erroBusca(codigo: CodigoErro, mensagem: string, tenteEmS?: number): ErroBusca {
  return tenteEmS === undefined ? { codigo, mensagem } : { codigo, mensagem, tenteEmS };
}
```

```ts
// api/src/registro.ts
export type Registro = {
  nivel: "info" | "warn" | "error";
  operacao: string;
  duracaoMs?: number;
  codigo?: string | null;
  detalhe?: string;
  origem?: string;
};
export type Registrar = (registro: Registro) => void;

const SAIDA = { info: console.log, warn: console.warn, error: console.error } as const;

export const registrarJson: Registrar = (registro) => {
  SAIDA[registro.nivel](JSON.stringify({ momento: new Date().toISOString(), ...registro }));
};
```

- [ ] **Step 4: Rodar e ver passar**: `npm test` → 9 passed; `npm run typecheck` → sem erro.
- [ ] **Step 5: Commit**: `git add api .gitignore && git commit -m "chore: scaffold live search api package"`

---

### Task 2: Cliente do OpenDota com tempo máximo e validação

**Files:**
- Create: `api/src/fonte/schemas.ts`, `api/src/fonte/opendota.ts`, `api/src/fonte/opendota.test.ts`, `api/src/fonte/amostras.test.ts`, `api/src/fonte/amostras/*.json`

**Interfaces:**
- Consumes: `Resultado`, `ok`, `falha`
- Produces: schemas `jogadorFonte`, `vitoriasFonte`, `heroisDaContaFonte`, `partidasRecentesFonte`, `buscaFonte`, `partidaFonte`, `timesFonte`, `timeOuNadaFonte`, `jogadoresDoTimeFonte`, `partidasDoTimeFonte`, `nomesDeHeroisFonte`; `type ErroFonte`; `type Fonte = <T>(caminho: string, schema: z.ZodType<T>) => Promise<Resultado<T, ErroFonte>>`; `criarFonte({ buscar?, base?, tempoMaximoMs? }): Fonte`; `segundosDeEspera(cabecalho): number`.

- [ ] **Step 1: Gravar as respostas reais**

Grave uma resposta de cada rota usada (contas públicas de profissionais, nada de amigos). Arquivo e comando:

```bash
cd api/src/fonte && mkdir -p amostras && cd amostras
B=https://api.opendota.com/api
curl -s "$B/players/321580662" > jogador.json
curl -s "$B/players/321580662/wl" > vitorias.json
curl -s "$B/players/321580662/heroes" > herois-da-conta.json
curl -s "$B/players/321580662/recentMatches" > partidas-recentes.json
curl -s "$B/search?q=yatoro" > busca.json
curl -s "$B/matches/9028005974" > partida.json
curl -s "$B/teams" > times.json
curl -s "$B/teams/7119388" > time.json
curl -s "$B/teams/7119388/players" > jogadores-do-time.json
curl -s "$B/teams/7119388/matches" > partidas-do-time.json
curl -s "$B/constants/heroes" > nomes-de-herois.json
curl -s -o /dev/null -w "%{http_code}\n" "$B/players/1"
curl -s "$B/teams/1"
```

(321580662 é o Yatoro, 7119388 é a Team Spirit e 9028005974 é uma partida dele já lida na fase 1.) Anote no ledger o que `/players/1` e `/teams/1` devolvem (status e corpo): o código abaixo trata conta sem `profile` e time vazio como "não encontrado"; se a fonte responder diferente, ajuste `jogadorFonte`/`timeOuNadaFonte`. O `partida.json` pode passar de 1 MB: reduza com `node -e` para `{match_id, players: [{account_id, player_slot, hero_id, lane_pos, lane_role}]}` antes de versionar.

- [ ] **Step 2: Testes que falham**

```ts
// api/src/fonte/opendota.test.ts
import { z } from "zod";
import { criarFonte, segundosDeEspera } from "./opendota";

const schema = z.object({ win: z.number() });
const responde = (status: number, corpo: unknown, cabecalhos: Record<string, string> = {}): typeof fetch =>
  async () => new Response(JSON.stringify(corpo), { status, headers: cabecalhos });

it.each([
  { nome: "200 no formato", buscar: responde(200, { win: 3 }), esperado: { ok: true, valor: { win: 3 } } },
  { nome: "404", buscar: responde(404, {}), esperado: { ok: false, erro: { tipo: "nao_encontrado" } } },
  { nome: "429 com Retry-After", buscar: responde(429, {}, { "retry-after": "12" }), esperado: { ok: false, erro: { tipo: "limite", tenteEmS: 12 } } },
  { nome: "500", buscar: responde(500, {}), esperado: { ok: false, erro: { tipo: "indisponivel", detalhe: "status 500" } } },
])("$nome", async ({ buscar, esperado }) => {
  expect(await criarFonte({ buscar })("/players/1/wl", schema)).toEqual(esperado);
});

it("formato inesperado vira erro de formato", async () => {
  const r = await criarFonte({ buscar: responde(200, { win: "três" }) })("/x", schema);
  expect(r).toMatchObject({ ok: false, erro: { tipo: "formato" } });
});

it("estoura o tempo máximo e vira indisponível", async () => {
  const lenta: typeof fetch = (_url, init) =>
    new Promise((_resolve, rejeitar) => init?.signal?.addEventListener("abort", () => rejeitar(init.signal?.reason)));
  const r = await criarFonte({ buscar: lenta, tempoMaximoMs: 20 })("/x", schema);
  expect(r).toMatchObject({ ok: false, erro: { tipo: "indisponivel" } });
});

it.each([["12", 12], [null, 60], ["abc", 60], ["0", 60]])("Retry-After %s vira %i s", (cabecalho, segundos) => {
  expect(segundosDeEspera(cabecalho)).toBe(segundos);
});
```

```ts
// api/src/fonte/amostras.test.ts
import { readFileSync } from "node:fs";
import type { z } from "zod";
import * as s from "./schemas";

const amostra = (nome: string): unknown => JSON.parse(readFileSync(new URL(`./amostras/${nome}.json`, import.meta.url), "utf8"));

it.each<[string, z.ZodTypeAny]>([
  ["jogador", s.jogadorFonte], ["vitorias", s.vitoriasFonte], ["herois-da-conta", s.heroisDaContaFonte],
  ["partidas-recentes", s.partidasRecentesFonte], ["busca", s.buscaFonte], ["partida", s.partidaFonte],
  ["times", s.timesFonte], ["time", s.timeOuNadaFonte], ["jogadores-do-time", s.jogadoresDoTimeFonte],
  ["partidas-do-time", s.partidasDoTimeFonte], ["nomes-de-herois", s.nomesDeHeroisFonte],
])("a resposta real de %s passa no schema", (nome, schema) => {
  const r = schema.safeParse(amostra(nome));
  expect(r.success ? "ok" : r.error.issues[0]).toBe("ok");
});
```

- [ ] **Step 3: Rodar e ver falhar**: `npm test` → FAIL.

- [ ] **Step 4: Implementação**

```ts
// api/src/fonte/schemas.ts
import { z } from "zod";

const texto = z.string().nullable().optional().transform((v) => v ?? null);

export const jogadorFonte = z.object({
  profile: z.object({ account_id: z.number(), personaname: texto, avatarfull: texto }).nullable().optional(),
  rank_tier: z.number().nullable().optional(),
});
export const vitoriasFonte = z.object({ win: z.number(), lose: z.number() });
export const heroisDaContaFonte = z.array(z.object({ hero_id: z.coerce.number(), games: z.number(), win: z.number() }));
export const partidasRecentesFonte = z.array(z.object({
  match_id: z.number(), player_slot: z.number(), radiant_win: z.boolean().nullable(), hero_id: z.number(),
  start_time: z.number(), duration: z.number(), kills: z.number(), deaths: z.number(), assists: z.number(),
  lane_role: z.number().nullable().optional(), version: z.number().nullable().optional(),
}));
export const buscaFonte = z.array(z.object({
  account_id: z.number(), personaname: texto, avatarfull: texto, last_match_time: texto,
}));
const lanePos = z.record(z.string(), z.record(z.string(), z.number()));
export const partidaFonte = z.object({
  match_id: z.number(),
  players: z.array(z.object({
    account_id: z.number().nullable().optional(), player_slot: z.number(), hero_id: z.number(),
    lane_pos: lanePos.nullable().optional(), lane_role: z.number().nullable().optional(),
  })),
});
export const timeFonte = z.object({
  team_id: z.number(), name: texto, logo_url: texto, wins: z.number(), losses: z.number(),
  last_match_time: z.number().nullable().optional(),
});
export const timesFonte = z.array(timeFonte);
export const timeOuNadaFonte = z.union([timeFonte, z.object({}).transform(() => null), z.null()]);
export const jogadoresDoTimeFonte = z.array(z.object({
  account_id: z.number(), name: texto, games_played: z.number(), wins: z.number(),
  is_current_team_member: z.boolean().nullable().optional(),
}));
export const partidasDoTimeFonte = z.array(z.object({
  match_id: z.number(), radiant_win: z.boolean().nullable(), radiant: z.boolean(), duration: z.number(),
  start_time: z.number(), league_name: texto, opposing_team_name: texto,
}));
export const nomesDeHeroisFonte = z.record(z.string(), z.object({ id: z.number(), localized_name: z.string() }));

export type PartidaRecenteFonte = z.infer<typeof partidasRecentesFonte>[number];
export type JogadorDaPartidaFonte = z.infer<typeof partidaFonte>["players"][number];
export type TimeFonte = z.infer<typeof timeFonte>;
```

```ts
// api/src/fonte/opendota.ts
import type { z } from "zod";
import { falha, ok, type Resultado } from "../resultado";

export const BASE_OPENDOTA = "https://api.opendota.com/api";
const TEMPO_MAXIMO_MS = 4_000;
const ESPERA_PADRAO_S = 60;

export type ErroFonte =
  | { readonly tipo: "nao_encontrado" }
  | { readonly tipo: "limite"; readonly tenteEmS: number }
  | { readonly tipo: "indisponivel"; readonly detalhe: string }
  | { readonly tipo: "formato"; readonly detalhe: string };

export type Fonte = <T>(caminho: string, schema: z.ZodType<T, z.ZodTypeDef, unknown>) => Promise<Resultado<T, ErroFonte>>;

type Opcoes = { buscar?: typeof fetch; base?: string; tempoMaximoMs?: number };

export function segundosDeEspera(cabecalho: string | null): number {
  const segundos = Number(cabecalho);
  return Number.isFinite(segundos) && segundos > 0 ? segundos : ESPERA_PADRAO_S;
}

async function chamar(buscar: typeof fetch, url: string, tempoMaximoMs: number): Promise<Resultado<Response, ErroFonte>> {
  try {
    return ok(await buscar(url, { signal: AbortSignal.timeout(tempoMaximoMs), headers: { accept: "application/json" } }));
  } catch (causa) {
    return falha({ tipo: "indisponivel", detalhe: `GET ${url}: ${String(causa)}` });
  }
}

async function interpretar<T>(resposta: Response, schema: z.ZodType<T, z.ZodTypeDef, unknown>): Promise<Resultado<T, ErroFonte>> {
  if (resposta.status === 404) return falha({ tipo: "nao_encontrado" });
  if (resposta.status === 429) return falha({ tipo: "limite", tenteEmS: segundosDeEspera(resposta.headers.get("retry-after")) });
  if (!resposta.ok) return falha({ tipo: "indisponivel", detalhe: `status ${resposta.status}` });
  const corpo: unknown = await resposta.json().catch(() => undefined);
  const analise = schema.safeParse(corpo);
  if (!analise.success) return falha({ tipo: "formato", detalhe: analise.error.issues[0]?.message ?? "corpo inválido" });
  return ok(analise.data);
}

export function criarFonte({ buscar = fetch, base = BASE_OPENDOTA, tempoMaximoMs = TEMPO_MAXIMO_MS }: Opcoes = {}): Fonte {
  return async (caminho, schema) => {
    const resposta = await chamar(buscar, `${base}${caminho}`, tempoMaximoMs);
    return resposta.ok ? interpretar(resposta.valor, schema) : resposta;
  };
}
```

O schema usa `z.ZodType<T, z.ZodTypeDef, unknown>` porque vários schemas transformam a entrada (`texto`, `timeOuNadaFonte`); o tipo de saída `T` é o que o resto do código usa.

- [ ] **Step 5: Rodar e ver passar**: `npm test` → passam (inclusive as 11 amostras reais). Amostra que falha mostra o primeiro campo errado: ajuste o schema ao formato real, sem afrouxar campo que o código usa.
- [ ] **Step 6: Commit**: `git add api && git commit -m "feat: add opendota client with timeout and recorded samples"`

---

### Task 3: Limites por visitante e orçamento da fonte

**Files:**
- Create: `api/src/limite/limite.ts`, `api/src/limite/limite.test.ts`

**Interfaces:**
- Consumes: `Resultado`, `erroBusca`
- Produces: `LIMITES = { visitantePorMinuto: 20, fontePorMinuto: 50, fontePorDia: 1800 }`; `type Contadores = { contar(chave: string, maximo: number, apagarEmS: number): Promise<boolean> }` (true = contou, false = já estava no máximo); `type Limites = { contarVisitante(id): Promise<Resultado<void, ErroBusca>>; gastarDaFonte(): Promise<Resultado<void, ErroBusca>> }`; `criarLimites(contadores, agora, limites = LIMITES)`; `contadoresEmMemoria()`; `idDoVisitante(ip, agoraMs): string`.

- [ ] **Step 1: Testes que falham**

```ts
// api/src/limite/limite.test.ts
import { contadoresEmMemoria, criarLimites, idDoVisitante } from "./limite";

const MEIO_MINUTO = Date.UTC(2026, 9, 6, 12, 0, 30);
const pequeno = { visitantePorMinuto: 2, fontePorMinuto: 3, fontePorDia: 4 };

it("o visitante passa até o limite e depois recebe o tempo que falta para o minuto virar", async () => {
  const limites = criarLimites(contadoresEmMemoria(), () => MEIO_MINUTO, pequeno);
  expect((await limites.contarVisitante("a")).ok).toBe(true);
  expect((await limites.contarVisitante("a")).ok).toBe(true);
  expect(await limites.contarVisitante("a")).toEqual({
    ok: false, erro: { codigo: "LIMITE_VISITANTE", mensagem: "Muitas buscas seguidas.", tenteEmS: 30 },
  });
  expect((await limites.contarVisitante("b")).ok).toBe(true);
});

it("o orçamento da fonte para no limite por minuto e no limite por dia", async () => {
  let agora = MEIO_MINUTO;
  const limites = criarLimites(contadoresEmMemoria(), () => agora, pequeno);
  for (let i = 0; i < 3; i++) expect((await limites.gastarDaFonte()).ok).toBe(true);
  expect(await limites.gastarDaFonte()).toMatchObject({ ok: false, erro: { codigo: "LIMITE_FONTE" } });
  agora += 60_000;
  expect((await limites.gastarDaFonte()).ok).toBe(true);
  expect(await limites.gastarDaFonte()).toMatchObject({ ok: false, erro: { codigo: "LIMITE_FONTE" } });
});

it("id do visitante não guarda o IP e muda de um dia para o outro", () => {
  const hoje = idDoVisitante("200.1.2.3", MEIO_MINUTO);
  expect(hoje).toMatch(/^[0-9a-f]{16}$/);
  expect(hoje).not.toContain("200");
  expect(idDoVisitante("200.1.2.3", MEIO_MINUTO + 86_400_000)).not.toBe(hoje);
});
```

- [ ] **Step 2: Rodar e ver falhar**: FAIL.

- [ ] **Step 3: Implementação**

Confira o limite gratuito atual do OpenDota em `https://www.opendota.com/api-keys` (por minuto e por dia). Se mudou, ajuste `LIMITES` para 90% dele e registre no ledger.

```ts
// api/src/limite/limite.ts
import { createHash } from "node:crypto";
import { erroBusca, type CodigoErro, type ErroBusca } from "../erros";
import { falha, ok, type Resultado } from "../resultado";

export type Tetos = { readonly visitantePorMinuto: number; readonly fontePorMinuto: number; readonly fontePorDia: number };
export const LIMITES: Tetos = { visitantePorMinuto: 20, fontePorMinuto: 50, fontePorDia: 1_800 };

const MINUTO_MS = 60_000;
const DIA_MS = 86_400_000;

export type Contadores = { contar(chave: string, maximo: number, apagarEmS: number): Promise<boolean> };
export type Limites = {
  contarVisitante(idVisitante: string): Promise<Resultado<void, ErroBusca>>;
  gastarDaFonte(): Promise<Resultado<void, ErroBusca>>;
};

type Janela = { prefixo: string; duracaoMs: number; maximo: number; codigo: CodigoErro; mensagem: string };

export function criarLimites(contadores: Contadores, agora: () => number, tetos: Tetos = LIMITES): Limites {
  async function contarNaJanela({ prefixo, duracaoMs, maximo, codigo, mensagem }: Janela): Promise<Resultado<void, ErroBusca>> {
    const instante = agora();
    const inicio = Math.floor(instante / duracaoMs) * duracaoMs;
    const fim = inicio + duracaoMs;
    const contou = await contadores.contar(`${prefixo}#${inicio}`, maximo, Math.ceil((fim + duracaoMs) / 1000));
    return contou ? ok(undefined) : falha(erroBusca(codigo, mensagem, Math.ceil((fim - instante) / 1000)));
  }
  const fonte = (prefixo: string, duracaoMs: number, maximo: number): Janela =>
    ({ prefixo, duracaoMs, maximo, codigo: "LIMITE_FONTE", mensagem: "A busca ao vivo atingiu o limite da fonte." });
  return {
    contarVisitante: (id) => contarNaJanela({
      prefixo: `visitante#${id}`, duracaoMs: MINUTO_MS, maximo: tetos.visitantePorMinuto,
      codigo: "LIMITE_VISITANTE", mensagem: "Muitas buscas seguidas.",
    }),
    gastarDaFonte: async () => {
      const minuto = await contarNaJanela(fonte("fonte#minuto", MINUTO_MS, tetos.fontePorMinuto));
      return minuto.ok ? contarNaJanela(fonte("fonte#dia", DIA_MS, tetos.fontePorDia)) : minuto;
    },
  };
}

export function contadoresEmMemoria(): Contadores {
  // ponytail: sem expiração; serve para testes e servidor local, que vivem pouco
  const contagens = new Map<string, number>();
  return {
    contar: async (chave, maximo) => {
      const atual = contagens.get(chave) ?? 0;
      if (atual >= maximo) return false;
      contagens.set(chave, atual + 1);
      return true;
    },
  };
}

export function idDoVisitante(ip: string, agoraMs: number): string {
  const dia = new Date(agoraMs).toISOString().slice(0, 10);
  return createHash("sha256").update(`${dia}:${ip}`).digest("hex").slice(0, 16);
}
```

- [ ] **Step 4: Rodar e ver passar**: `npm test` → passam.
- [ ] **Step 5: Commit**: `git add api && git commit -m "feat: add visitor and source rate limits"`

---

### Task 4: Cache e consulta (cache, orçamento, fonte e cache vencido)

**Files:**
- Create: `api/src/cache/cache.ts`, `api/src/contrato.ts`, `api/src/consulta.ts`, `api/src/consulta.test.ts`

**Interfaces:**
- Consumes: `Fonte`, `ErroFonte`, `Limites`, `Registrar`, `erroBusca`
- Produces: `type Entrada = { valor: unknown; buscadoEm: number; validoAte: number }`; `type Cache = { ler(chave): Promise<Entrada | null>; gravar(chave, entrada, apagarEmS): Promise<void> }`; `cacheEmMemoria()`; `type Frescor = { buscadoEm: number; vencido: boolean }` (em `contrato.ts`); `type Consultado<T> = { dados: T; frescor: Frescor }`; `type Consultar = <T>(pedido: { caminho; schema; validadeS }) => Promise<Resultado<Consultado<T>, ErroBusca>>`; `criarConsulta({ fonte, cache, limites, agora, registrar? }): Consultar`; `juntarFrescor(...frescores): Frescor`; `GUARDA_MAXIMA_S = 604800`.

- [ ] **Step 1: Testes que falham**

```ts
// api/src/consulta.test.ts
import { z } from "zod";
import { cacheEmMemoria } from "./cache/cache";
import { criarConsulta, juntarFrescor } from "./consulta";
import type { ErroFonte, Fonte } from "./fonte/opendota";
import { contadoresEmMemoria, criarLimites } from "./limite/limite";
import { falha, ok } from "./resultado";

const schema = z.object({ win: z.number() });
const pedido = { caminho: "/players/1/wl", schema, validadeS: 60 };

function montar(respostas: Array<{ win: number } | ErroFonte>, tetos = { visitantePorMinuto: 20, fontePorMinuto: 50, fontePorDia: 1800 }) {
  let agora = 1_000_000;
  const chamadas: string[] = [];
  const fonte: Fonte = async (caminho) => {
    chamadas.push(caminho);
    const proxima = respostas.shift();
    if (proxima === undefined) throw new Error("fonte chamada mais vezes que o esperado");
    return "tipo" in proxima ? falha(proxima) : ok(proxima as never);
  };
  const consultar = criarConsulta({
    fonte, cache: cacheEmMemoria(), limites: criarLimites(contadoresEmMemoria(), () => agora, tetos),
    agora: () => agora, registrar: () => {},
  });
  return { consultar, chamadas, avancar: (ms: number) => { agora += ms; } };
}

it("dentro da validade responde do cache sem chamar a fonte", async () => {
  const { consultar, chamadas, avancar } = montar([{ win: 3 }]);
  expect(await consultar(pedido)).toEqual({ ok: true, valor: { dados: { win: 3 }, frescor: { buscadoEm: 1_000_000, vencido: false } } });
  avancar(30_000);
  expect(await consultar(pedido)).toMatchObject({ ok: true, valor: { dados: { win: 3 } } });
  expect(chamadas).toHaveLength(1);
});

it("vencido e fonte fora do ar: serve o vencido marcado", async () => {
  const { consultar, avancar } = montar([{ win: 3 }, { tipo: "indisponivel", detalhe: "timeout" }]);
  await consultar(pedido);
  avancar(120_000);
  expect(await consultar(pedido)).toEqual({ ok: true, valor: { dados: { win: 3 }, frescor: { buscadoEm: 1_000_000, vencido: true } } });
});

it("vencido e conta que sumiu: não serve o vencido", async () => {
  const { consultar, avancar } = montar([{ win: 3 }, { tipo: "nao_encontrado" }]);
  await consultar(pedido);
  avancar(120_000);
  expect(await consultar(pedido)).toMatchObject({ ok: false, erro: { codigo: "NAO_ENCONTRADO" } });
});

it("orçamento da fonte esgotado: não chama a fonte", async () => {
  const { consultar, chamadas } = montar([{ win: 3 }], { visitantePorMinuto: 20, fontePorMinuto: 0, fontePorDia: 0 });
  expect(await consultar(pedido)).toMatchObject({ ok: false, erro: { codigo: "LIMITE_FONTE" } });
  expect(chamadas).toHaveLength(0);
});

it.each([
  [{ tipo: "limite", tenteEmS: 9 } as const, "LIMITE_FONTE"],
  [{ tipo: "formato", detalhe: "x" } as const, "FONTE_FORMATO"],
  [{ tipo: "indisponivel", detalhe: "x" } as const, "FONTE_INDISPONIVEL"],
])("erro da fonte %o vira %s", async (erro, codigo) => {
  const { consultar } = montar([erro]);
  expect(await consultar(pedido)).toMatchObject({ ok: false, erro: { codigo } });
});

it("juntar frescor pega o mais antigo e qualquer vencido", () => {
  expect(juntarFrescor({ buscadoEm: 5, vencido: false }, { buscadoEm: 3, vencido: true })).toEqual({ buscadoEm: 3, vencido: true });
});
```

- [ ] **Step 2: Rodar e ver falhar**: FAIL.

- [ ] **Step 3: Implementação**

```ts
// api/src/cache/cache.ts
export type Entrada = { readonly valor: unknown; readonly buscadoEm: number; readonly validoAte: number };

export type Cache = {
  ler(chave: string): Promise<Entrada | null>;
  gravar(chave: string, entrada: Entrada, apagarEmS: number): Promise<void>;
};

export function cacheEmMemoria(): Cache {
  const entradas = new Map<string, Entrada>();
  return {
    ler: async (chave) => entradas.get(chave) ?? null,
    gravar: async (chave, entrada) => { entradas.set(chave, entrada); },
  };
}
```

```ts
// api/src/contrato.ts
/** Formato das respostas da API. O app valida o mesmo formato em app/src/live/contrato.ts. */
export type Frescor = { readonly buscadoEm: number; readonly vencido: boolean };
export type Lane = "safe" | "mid" | "off" | "selva";

export type ContaEncontrada = { id: number; nome: string; foto: string | null; ultimaPartida: string | null };
export type TimeEncontrado = { id: number; nome: string; logo: string | null; vitorias: number; derrotas: number };
export type Busca = { contas: ContaEncontrada[]; times: TimeEncontrado[]; frescor: Frescor };

export type PartidaDaConta = {
  id: string; heroi: string; venceu: boolean | null; abates: number; mortes: number; assistencias: number;
  duracaoS: number; inicio: number; lane: Lane | null; analisada: boolean;
};
export type ResumoConta = {
  conta: { id: number; nome: string; foto: string | null; medalha: number | null };
  totais: { partidas: number; vitorias: number };
  ultimas: { partidas: number; vitorias: number };
  herois: { heroi: string; partidas: number; vitorias: number }[];
  partidas: PartidaDaConta[];
  temDadosPublicos: boolean;
  frescor: Frescor;
};

export type Mancha = { x: number; y: number; peso: number };
export type RotaAproximada = {
  partida: string; conta: number; analisada: boolean; manchas: Mancha[];
  laneDasManchas: Lane | null; laneRegistrada: Lane | null; frescor: Frescor;
};

export type ResumoTime = {
  time: TimeEncontrado;
  jogadores: { id: number; nome: string; partidas: number; vitorias: number }[];
  partidas: { id: string; venceu: boolean | null; adversario: string; campeonato: string | null; inicio: number; duracaoS: number }[];
  frescor: Frescor;
};
```

```ts
// api/src/consulta.ts
import type { z } from "zod";
import type { Cache, Entrada } from "./cache/cache";
import type { Frescor } from "./contrato";
import { erroBusca, type ErroBusca } from "./erros";
import type { ErroFonte, Fonte } from "./fonte/opendota";
import type { Limites } from "./limite/limite";
import { registrarJson, type Registrar } from "./registro";
import { falha, ok, type Resultado } from "./resultado";

export const GUARDA_MAXIMA_S = 7 * 24 * 3600;

export type Consultado<T> = { readonly dados: T; readonly frescor: Frescor };
type Schema<T> = z.ZodType<T, z.ZodTypeDef, unknown>;
type Pedido<T> = { caminho: string; schema: Schema<T>; validadeS: number };
export type Consultar = <T>(pedido: Pedido<T>) => Promise<Resultado<Consultado<T>, ErroBusca>>;
type Deps = { fonte: Fonte; cache: Cache; limites: Limites; agora: () => number; registrar?: Registrar };

const PODE_USAR_VENCIDO: ReadonlySet<ErroBusca["codigo"]> = new Set(["LIMITE_FONTE", "FONTE_INDISPONIVEL"]);

export function juntarFrescor(...frescores: Frescor[]): Frescor {
  return { buscadoEm: Math.min(...frescores.map((f) => f.buscadoEm)), vencido: frescores.some((f) => f.vencido) };
}

function paraErroBusca(erro: ErroFonte): ErroBusca {
  switch (erro.tipo) {
    case "nao_encontrado": return erroBusca("NAO_ENCONTRADO", "Não encontrado na fonte.");
    case "limite": return erroBusca("LIMITE_FONTE", "A fonte pediu para esperar.", erro.tenteEmS);
    case "indisponivel": return erroBusca("FONTE_INDISPONIVEL", "A fonte de dados não respondeu.");
    case "formato": return erroBusca("FONTE_FORMATO", "A fonte respondeu algo inesperado.");
    default: return assertNever(erro);
  }
}

function assertNever(valor: never): never {
  throw new Error(`erro da fonte desconhecido: ${JSON.stringify(valor)}`);
}

function lerGuardado<T>(entrada: Entrada | null, schema: Schema<T>): { valor: T; buscadoEm: number; validoAte: number } | null {
  if (!entrada) return null;
  const analise = schema.safeParse(entrada.valor);
  return analise.success ? { valor: analise.data, buscadoEm: entrada.buscadoEm, validoAte: entrada.validoAte } : null;
}

export function criarConsulta({ fonte, cache, limites, agora, registrar = registrarJson }: Deps): Consultar {
  async function buscarNaFonte<T>({ caminho, schema }: Pedido<T>): Promise<Resultado<T, ErroBusca>> {
    const orcamento = await limites.gastarDaFonte();
    if (!orcamento.ok) return orcamento;
    const inicio = agora();
    const resposta = await fonte(caminho, schema);
    const erro = resposta.ok ? null : paraErroBusca(resposta.erro);
    registrar({ nivel: erro?.codigo === "FONTE_FORMATO" ? "error" : erro ? "warn" : "info", operacao: "fonte",
      detalhe: caminho, duracaoMs: agora() - inicio, codigo: erro?.codigo ?? null });
    return resposta.ok ? resposta : falha(erro ?? erroBusca("INTERNO", "erro sem código"));
  }

  return async <T>(pedido: Pedido<T>) => {
    const chave = `fonte:${pedido.caminho}`;
    const guardado = lerGuardado(await cache.ler(chave), pedido.schema);
    if (guardado && agora() < guardado.validoAte) return ok({ dados: guardado.valor, frescor: { buscadoEm: guardado.buscadoEm, vencido: false } });
    const instante = agora();
    const resposta = await buscarNaFonte(pedido);
    if (resposta.ok) {
      const entrada = { valor: resposta.valor, buscadoEm: instante, validoAte: instante + pedido.validadeS * 1000 };
      await cache.gravar(chave, entrada, Math.floor(instante / 1000) + GUARDA_MAXIMA_S);
      return ok({ dados: resposta.valor, frescor: { buscadoEm: instante, vencido: false } });
    }
    if (guardado && PODE_USAR_VENCIDO.has(resposta.erro.codigo)) {
      return ok({ dados: guardado.valor, frescor: { buscadoEm: guardado.buscadoEm, vencido: true } });
    }
    return resposta;
  };
}
```

O cache guarda a resposta da fonte já validada e reduzida pelo schema (só os campos usados), com a chave nomeada pela consulta (`fonte:/players/1/wl`). Isso mantém o item pequeno (o limite de item do DynamoDB é 400 KB) e deixa a montagem da resposta como função pura.

- [ ] **Step 4: Rodar e ver passar**: `npm test` → passam.
- [ ] **Step 5: Commit**: `git add api && git commit -m "feat: add cache-aware source query with stale fallback"`

---

### Task 5: Cache e contadores no DynamoDB

**Files:**
- Create: `api/src/infra/dynamo.ts`, `api/src/infra/dynamo.test.ts`

**Interfaces:**
- Consumes: `Cache`, `Entrada`, `Contadores`
- Produces: `type ClienteDynamo = { send(comando: GetCommand | PutCommand | UpdateCommand): Promise<{ Item?: Record<string, unknown> }> }`; `cacheDynamo(cliente, tabela): Cache`; `contadoresDynamo(cliente, tabela): Contadores`. Tabela com chave `pk` (texto) e TTL no atributo `ttl` (a fase 3 cria).

- [ ] **Step 1: Testes que falham**

O DynamoDB não roda nos testes (mock do que não controlamos): o fake guarda os comandos e devolve respostas fixas.

```ts
// api/src/infra/dynamo.test.ts
import { ConditionalCheckFailedException } from "@aws-sdk/client-dynamodb";
import { GetCommand, PutCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";
import { cacheDynamo, contadoresDynamo, type ClienteDynamo } from "./dynamo";

function fake(responder: (comando: unknown) => Promise<{ Item?: Record<string, unknown> }>) {
  const comandos: unknown[] = [];
  const cliente: ClienteDynamo = { send: async (comando) => { comandos.push(comando); return responder(comando); } };
  return { cliente, comandos };
}

it("grava o valor em JSON com ttl e lê de volta", async () => {
  const { cliente, comandos } = fake(async (c) => (c instanceof GetCommand
    ? { Item: { pk: "k", valor: "{\"win\":3}", buscadoEm: 1, validoAte: 2, ttl: 9 } } : {}));
  const cache = cacheDynamo(cliente, "tabela");
  await cache.gravar("k", { valor: { win: 3 }, buscadoEm: 1, validoAte: 2 }, 9);
  expect(comandos[0]).toBeInstanceOf(PutCommand);
  expect((comandos[0] as PutCommand).input).toEqual({ TableName: "tabela", Item: { pk: "k", valor: "{\"win\":3}", buscadoEm: 1, validoAte: 2, ttl: 9 } });
  expect(await cache.ler("k")).toEqual({ valor: { win: 3 }, buscadoEm: 1, validoAte: 2 });
});

it("item ausente é null", async () => {
  const { cliente } = fake(async () => ({}));
  expect(await cacheDynamo(cliente, "t").ler("k")).toBeNull();
});

it("contador usa ADD com condição de máximo e devolve false quando a condição falha", async () => {
  let falhar = false;
  const { cliente, comandos } = fake(async () => {
    if (falhar) throw new ConditionalCheckFailedException({ message: "no máximo", $metadata: {} });
    return {};
  });
  const contadores = contadoresDynamo(cliente, "t");
  expect(await contadores.contar("fonte#dia#0", 1800, 99)).toBe(true);
  const entrada = (comandos[0] as UpdateCommand).input;
  expect(entrada.UpdateExpression).toBe("ADD contagem :um SET #ttl = if_not_exists(#ttl, :ttl)");
  expect(entrada.ConditionExpression).toBe("attribute_not_exists(contagem) OR contagem < :maximo");
  expect(entrada.ExpressionAttributeValues).toEqual({ ":um": 1, ":ttl": 99, ":maximo": 1800 });
  falhar = true;
  expect(await contadores.contar("fonte#dia#0", 1800, 99)).toBe(false);
});

it("outro erro do DynamoDB sobe", async () => {
  const { cliente } = fake(async () => { throw new Error("rede"); });
  await expect(contadoresDynamo(cliente, "t").contar("k", 1, 1)).rejects.toThrow("rede");
});
```

- [ ] **Step 2: Rodar e ver falhar**: FAIL.

- [ ] **Step 3: Implementação**

```ts
// api/src/infra/dynamo.ts
import { ConditionalCheckFailedException } from "@aws-sdk/client-dynamodb";
import { GetCommand, PutCommand, UpdateCommand } from "@aws-sdk/lib-dynamodb";
import type { Cache } from "../cache/cache";
import type { Contadores } from "../limite/limite";

export type ClienteDynamo = {
  send(comando: GetCommand | PutCommand | UpdateCommand): Promise<{ Item?: Record<string, unknown> }>;
};

export function cacheDynamo(cliente: ClienteDynamo, tabela: string): Cache {
  return {
    async ler(chave) {
      const { Item } = await cliente.send(new GetCommand({ TableName: tabela, Key: { pk: chave } }));
      if (!Item || typeof Item["valor"] !== "string") return null;
      const valor: unknown = JSON.parse(Item["valor"]);
      return { valor, buscadoEm: Number(Item["buscadoEm"]), validoAte: Number(Item["validoAte"]) };
    },
    async gravar(chave, entrada, apagarEmS) {
      await cliente.send(new PutCommand({
        TableName: tabela,
        Item: { pk: chave, valor: JSON.stringify(entrada.valor), buscadoEm: entrada.buscadoEm, validoAte: entrada.validoAte, ttl: apagarEmS },
      }));
    },
  };
}

export function contadoresDynamo(cliente: ClienteDynamo, tabela: string): Contadores {
  return {
    async contar(chave, maximo, apagarEmS) {
      try {
        await cliente.send(new UpdateCommand({
          TableName: tabela, Key: { pk: chave },
          UpdateExpression: "ADD contagem :um SET #ttl = if_not_exists(#ttl, :ttl)",
          ConditionExpression: "attribute_not_exists(contagem) OR contagem < :maximo",
          ExpressionAttributeNames: { "#ttl": "ttl" },
          ExpressionAttributeValues: { ":um": 1, ":ttl": apagarEmS, ":maximo": maximo },
        }));
        return true;
      } catch (erro) {
        if (erro instanceof ConditionalCheckFailedException) return false;
        throw erro;
      }
    },
  };
}
```

`DynamoDBDocumentClient` precisa caber em `ClienteDynamo` (Task 9 passa o cliente real). Se o `tsc` recusar a atribuição por causa do `send` genérico, troque o tipo por `Pick<DynamoDBDocumentClient, "send">` e, só no fake do teste, use `as unknown as ClienteDynamo`.

- [ ] **Step 4: Rodar e ver passar**: `npm test && npm run typecheck` → passam.
- [ ] **Step 5: Commit**: `git add api && git commit -m "feat: add dynamodb cache and atomic counters"`

---

### Task 6: Contas (busca por nome e resumo da conta)

**Files:**
- Create: `api/src/texto.ts`, `api/src/contas/contas.ts`, `api/src/contas/contas.test.ts`

**Interfaces:**
- Consumes: `Consultar`, `juntarFrescor`, schemas da fonte, tipos de `contrato.ts`
- Produces: `normalizar(texto)` (em `texto.ts`); `VALIDADE` (segundos por consulta); `LANE_POR_PAPEL`; `venceu(partida): boolean | null`; `montarResumo(partes): ResumoConta` (pura); `resumoDaConta(consultar, id): Promise<Resultado<ResumoConta, ErroBusca>>`; `consultaDeBusca(texto): Resultado<string, ErroBusca>`; `buscar(consultar, texto): Promise<Resultado<Busca, ErroBusca>>` (contas e times).

- [ ] **Step 1: Testes que falham**

```ts
// api/src/contas/contas.test.ts
import { ok } from "../resultado";
import type { Consultar } from "../consulta";
import { buscar, consultaDeBusca, montarResumo, resumoDaConta, venceu } from "./contas";

const frescor = { buscadoEm: 10, vencido: false };
const partida = (slot: number, radiantWin: boolean | null, extra = {}) => ({
  match_id: 1, player_slot: slot, radiant_win: radiantWin, hero_id: 8, start_time: 100, duration: 1800,
  kills: 5, deaths: 2, assists: 7, lane_role: 1, version: 21, ...extra,
});

it.each([
  { slot: 0, radiantWin: true, esperado: true },
  { slot: 128, radiantWin: true, esperado: false },
  { slot: 130, radiantWin: false, esperado: true },
  { slot: 0, radiantWin: null, esperado: null },
])("slot $slot com radiant_win $radiantWin venceu = $esperado", ({ slot, radiantWin, esperado }) => {
  expect(venceu(partida(slot, radiantWin))).toBe(esperado);
});

it("monta o resumo com 10 heróis, nomes, lane e partidas sem análise", () => {
  const resumo = montarResumo({
    id: 7, jogador: { profile: { account_id: 7, personaname: "Ness", avatarfull: null }, rank_tier: 72 },
    vitorias: { win: 60, lose: 40 },
    herois: Array.from({ length: 12 }, (_, i) => ({ hero_id: i + 1, games: 20 - i, win: 10 })),
    recentes: [partida(0, true), partida(129, true, { lane_role: null, version: null })],
    nomes: { "8": { id: 8, localized_name: "Juggernaut" }, "1": { id: 1, localized_name: "Anti-Mage" } },
    frescor,
  });
  expect(resumo.conta).toEqual({ id: 7, nome: "Ness", foto: null, medalha: 72 });
  expect(resumo.totais).toEqual({ partidas: 100, vitorias: 60 });
  expect(resumo.ultimas).toEqual({ partidas: 2, vitorias: 1 });
  expect(resumo.herois).toHaveLength(10);
  expect(resumo.herois[0]).toEqual({ heroi: "Anti-Mage", partidas: 20, vitorias: 10 });
  expect(resumo.partidas[0]).toMatchObject({ heroi: "Juggernaut", venceu: true, lane: "safe", analisada: true });
  expect(resumo.partidas[1]).toMatchObject({ venceu: false, lane: null, analisada: false });
  expect(resumo.temDadosPublicos).toBe(true);
});

it("conta sem perfil gasta só uma consulta e devolve não encontrado", async () => {
  const caminhos: string[] = [];
  const consultar: Consultar = async ({ caminho }) => {
    caminhos.push(caminho);
    return ok({ dados: { rank_tier: null } as never, frescor });
  };
  expect(await resumoDaConta(consultar, 1)).toMatchObject({ ok: false, erro: { codigo: "NAO_ENCONTRADO" } });
  expect(caminhos).toEqual(["/players/1"]);
});

it.each([
  { texto: "a", ok: false }, { texto: "  ", ok: false }, { texto: "x".repeat(65), ok: false }, { texto: " yatoro ", ok: true },
])("consulta '$texto' válida = $ok", ({ texto, ok: valida }) => {
  expect(consultaDeBusca(texto).ok).toBe(valida);
});

it("busca devolve até 10 contas e os times cujo nome contém o texto, sem acento", async () => {
  const consultar: Consultar = async ({ caminho }) => ok({
    dados: (caminho.startsWith("/search")
      ? Array.from({ length: 12 }, (_, i) => ({ account_id: i, personaname: `spirit ${i}`, avatarfull: null, last_match_time: null }))
      : [{ team_id: 1, name: "Team Spírit", logo_url: null, wins: 5, losses: 1, last_match_time: 5 },
         { team_id: 2, name: "Outro", logo_url: null, wins: 0, losses: 0, last_match_time: 9 }]) as never,
    frescor,
  });
  const r = await buscar(consultar, "SPIRIT");
  expect(r.ok && r.valor.contas).toHaveLength(10);
  expect(r.ok && r.valor.times.map((t) => t.id)).toEqual([1]);
});
```

- [ ] **Step 2: Rodar e ver falhar**: FAIL.

- [ ] **Step 3: Implementação**

```ts
// api/src/texto.ts
export const normalizar = (texto: string) => texto.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
```

```ts
// api/src/contas/contas.ts
import type { z } from "zod";
import type { Consultar } from "../consulta";
import { juntarFrescor } from "../consulta";
import type { Busca, Frescor, Lane, PartidaDaConta, ResumoConta, TimeEncontrado } from "../contrato";
import { erroBusca, type ErroBusca } from "../erros";
import {
  buscaFonte, heroisDaContaFonte, jogadorFonte, nomesDeHeroisFonte, partidasRecentesFonte, timesFonte, vitoriasFonte,
  type PartidaRecenteFonte, type TimeFonte,
} from "../fonte/schemas";
import { falha, ok, type Resultado } from "../resultado";
import { normalizar } from "../texto";

export const VALIDADE = {
  perfil: 3_600, busca: 3_600, time: 3_600, recentes: 600, partida: 7 * 24 * 3_600, constantes: 24 * 3_600,
} as const;
export const LANE_POR_PAPEL: Readonly<Record<number, Lane>> = { 1: "safe", 2: "mid", 3: "off", 4: "selva" };
const MAXIMO_DE_HEROIS = 10;
const MAXIMO_DE_RESULTADOS = 10;
const TEXTO_MINIMO = 2;
const TEXTO_MAXIMO = 64;

type Nomes = z.infer<typeof nomesDeHeroisFonte>;
type Partes = {
  id: number; jogador: z.infer<typeof jogadorFonte>; vitorias: z.infer<typeof vitoriasFonte>;
  herois: z.infer<typeof heroisDaContaFonte>; recentes: PartidaRecenteFonte[]; nomes: Nomes; frescor: Frescor;
};

export const venceu = (p: Pick<PartidaRecenteFonte, "player_slot" | "radiant_win">): boolean | null =>
  p.radiant_win === null ? null : (p.player_slot < 128) === p.radiant_win;

const nomeDoHeroi = (nomes: Nomes, id: number) => nomes[String(id)]?.localized_name ?? `Herói ${id}`;

function partidaDaConta(p: PartidaRecenteFonte, nomes: Nomes): PartidaDaConta {
  return {
    id: String(p.match_id), heroi: nomeDoHeroi(nomes, p.hero_id), venceu: venceu(p),
    abates: p.kills, mortes: p.deaths, assistencias: p.assists, duracaoS: p.duration, inicio: p.start_time,
    lane: p.lane_role == null ? null : LANE_POR_PAPEL[p.lane_role] ?? null, analisada: p.version != null,
  };
}

export function montarResumo({ id, jogador, vitorias, herois, recentes, nomes, frescor }: Partes): ResumoConta {
  const perfil = jogador.profile;
  return {
    conta: { id, nome: perfil?.personaname ?? `Conta ${id}`, foto: perfil?.avatarfull ?? null, medalha: jogador.rank_tier ?? null },
    totais: { partidas: vitorias.win + vitorias.lose, vitorias: vitorias.win },
    ultimas: { partidas: recentes.length, vitorias: recentes.filter((p) => venceu(p) === true).length },
    herois: [...herois].sort((a, b) => b.games - a.games).slice(0, MAXIMO_DE_HEROIS)
      .map((h) => ({ heroi: nomeDoHeroi(nomes, h.hero_id), partidas: h.games, vitorias: h.win })),
    partidas: recentes.map((p) => partidaDaConta(p, nomes)),
    temDadosPublicos: recentes.length > 0,
    frescor,
  };
}

export const consultarNomesDeHerois = (consultar: Consultar) =>
  consultar({ caminho: "/constants/heroes", schema: nomesDeHeroisFonte, validadeS: VALIDADE.constantes });

export async function resumoDaConta(consultar: Consultar, id: number): Promise<Resultado<ResumoConta, ErroBusca>> {
  const jogador = await consultar({ caminho: `/players/${id}`, schema: jogadorFonte, validadeS: VALIDADE.perfil });
  if (!jogador.ok) return jogador;
  if (!jogador.valor.dados.profile) return falha(erroBusca("NAO_ENCONTRADO", "Conta não encontrada."));
  const [vitorias, herois, recentes, nomes] = await Promise.all([
    consultar({ caminho: `/players/${id}/wl`, schema: vitoriasFonte, validadeS: VALIDADE.perfil }),
    consultar({ caminho: `/players/${id}/heroes`, schema: heroisDaContaFonte, validadeS: VALIDADE.recentes }),
    consultar({ caminho: `/players/${id}/recentMatches`, schema: partidasRecentesFonte, validadeS: VALIDADE.recentes }),
    consultarNomesDeHerois(consultar),
  ]);
  if (!vitorias.ok) return vitorias;
  if (!herois.ok) return herois;
  if (!recentes.ok) return recentes;
  if (!nomes.ok) return nomes;
  return ok(montarResumo({
    id, jogador: jogador.valor.dados, vitorias: vitorias.valor.dados, herois: herois.valor.dados,
    recentes: recentes.valor.dados, nomes: nomes.valor.dados,
    frescor: juntarFrescor(jogador.valor.frescor, vitorias.valor.frescor, herois.valor.frescor, recentes.valor.frescor),
  }));
}

export function consultaDeBusca(texto: string): Resultado<string, ErroBusca> {
  const limpo = texto.trim();
  if (limpo.length < TEXTO_MINIMO || limpo.length > TEXTO_MAXIMO) {
    return falha(erroBusca("ENTRADA_INVALIDA", "Digite pelo menos 2 letras ou o número da conta."));
  }
  return ok(limpo);
}

export function timeEncontrado(t: TimeFonte): TimeEncontrado {
  return { id: t.team_id, nome: t.name ?? `Time ${t.team_id}`, logo: t.logo_url, vitorias: t.wins, derrotas: t.losses };
}

function timesComNome(times: TimeFonte[], texto: string): TimeEncontrado[] {
  const alvo = normalizar(texto);
  return times.filter((t) => t.name !== null && normalizar(t.name).includes(alvo))
    .sort((a, b) => (b.last_match_time ?? 0) - (a.last_match_time ?? 0))
    .slice(0, MAXIMO_DE_RESULTADOS).map(timeEncontrado);
}

export async function buscar(consultar: Consultar, texto: string): Promise<Resultado<Busca, ErroBusca>> {
  const consulta = consultaDeBusca(texto);
  if (!consulta.ok) return consulta;
  const [contas, times] = await Promise.all([
    consultar({ caminho: `/search?q=${encodeURIComponent(consulta.valor)}`, schema: buscaFonte, validadeS: VALIDADE.busca }),
    consultar({ caminho: "/teams", schema: timesFonte, validadeS: VALIDADE.constantes }),
  ]);
  if (!contas.ok) return contas;
  if (!times.ok) return times;
  return ok({
    contas: contas.valor.dados.slice(0, MAXIMO_DE_RESULTADOS).map((c) => ({
      id: c.account_id, nome: c.personaname ?? `Conta ${c.account_id}`, foto: c.avatarfull, ultimaPartida: c.last_match_time,
    })),
    times: timesComNome(times.valor.dados, consulta.valor),
    frescor: juntarFrescor(contas.valor.frescor, times.valor.frescor),
  });
}
```

- [ ] **Step 4: Rodar e ver passar**: `npm test` → passam.
- [ ] **Step 5: Commit**: `git add api && git commit -m "feat: add account search and account summary"`

---

### Task 7: Rota aproximada da partida (lane_pos)

**Files:**
- Create: `api/src/partidas/rota-aproximada.ts`, `api/src/partidas/rota-aproximada.test.ts`

**Interfaces:**
- Consumes: `Consultar`, `partidaFonte`, `LANE_POR_PAPEL`, `VALIDADE`
- Produces: `celulaParaNorm(celula): number` (mesma fórmula de `dota-imortal/src/maplib.py`, `grid_to_norm(cell=True)`: `(celula + 0,5 − 57) / 142`); `manchasDaLane(lanePos): Mancha[]`; `regiaoDoPonto(ponto): "cima" | "meio" | "baixo"`; `laneDasManchas(manchas, lado): Lane | null`; `rotaDaPartida(consultar, partidaId: string, contaId: number): Promise<Resultado<RotaAproximada, ErroBusca>>`.
- Limite conhecido: a classificação divide o mapa pela diagonal (faixa de 0,15 em volta dela é o mid). Não separa selva de lane; tempo na base conta como mid. Serve para a lane principal dos 10 primeiros minutos, que é o que o critério 3 mede.

- [ ] **Step 1: Testes que falham**

```ts
// api/src/partidas/rota-aproximada.test.ts
import { ok } from "../resultado";
import type { Consultar } from "../consulta";
import { celulaParaNorm, laneDasManchas, manchasDaLane, regiaoDoPonto, rotaDaPartida } from "./rota-aproximada";

it("célula da grade vira o centro da célula normalizado", () => {
  expect(celulaParaNorm(57)).toBeCloseTo(0.5 / 142);
  expect(celulaParaNorm(128)).toBeCloseTo(71.5 / 142);
  expect(celulaParaNorm(300)).toBe(1);
});

it("manchas têm peso relativo à célula mais visitada", () => {
  expect(manchasDaLane({ "128": { "128": 10, "130": 5 } })).toEqual([
    { x: 0.504, y: 0.504, peso: 1 }, { x: 0.504, y: 0.518, peso: 0.5 },
  ]);
});

it.each([
  { ponto: { x: 0.5, y: 0.52 }, regiao: "meio" }, { ponto: { x: 0.15, y: 0.7 }, regiao: "cima" }, { ponto: { x: 0.8, y: 0.2 }, regiao: "baixo" },
])("$ponto fica em $regiao", ({ ponto, regiao }) => {
  expect(regiaoDoPonto(ponto)).toBe(regiao);
});

it.each([
  { lado: "radiant", y: 0.18, x: 0.8, lane: "safe" }, { lado: "dire", y: 0.18, x: 0.8, lane: "off" },
  { lado: "dire", y: 0.8, x: 0.2, lane: "safe" }, { lado: "radiant", y: 0.5, x: 0.5, lane: "mid" },
] as const)("$lado em ($x, $y) é $lane", ({ lado, x, y, lane }) => {
  expect(laneDasManchas([{ x, y, peso: 1 }], lado)).toBe(lane);
});

it("sem manchas não há lane", () => {
  expect(laneDasManchas([], "radiant")).toBeNull();
});

const frescor = { buscadoEm: 1, vencido: false };
const partida = (lanePos: unknown) => ({ match_id: 9, players: [{ account_id: 7, player_slot: 0, hero_id: 1, lane_pos: lanePos, lane_role: 1 }] });
const consultarCom = (dados: unknown): Consultar => async () => ok({ dados: dados as never, frescor });

it("rota da conta na partida, com a lane registrada pela fonte", async () => {
  const r = await rotaDaPartida(consultarCom(partida({ "170": { "80": 3 } })), "9", 7);
  expect(r).toMatchObject({ ok: true, valor: { partida: "9", conta: 7, analisada: true, laneDasManchas: "safe", laneRegistrada: "safe" } });
});

it("partida sem análise devolve analisada falso e sem manchas", async () => {
  const r = await rotaDaPartida(consultarCom(partida(null)), "9", 7);
  expect(r).toMatchObject({ ok: true, valor: { analisada: false, manchas: [], laneDasManchas: null } });
});

it("conta fora da partida é não encontrada", async () => {
  expect(await rotaDaPartida(consultarCom(partida(null)), "9", 8)).toMatchObject({ ok: false, erro: { codigo: "NAO_ENCONTRADO" } });
});
```

- [ ] **Step 2: Rodar e ver falhar**: FAIL.

- [ ] **Step 3: Implementação**

```ts
// api/src/partidas/rota-aproximada.ts
import { LANE_POR_PAPEL, VALIDADE } from "../contas/contas";
import type { Consultar } from "../consulta";
import type { Lane, Mancha, RotaAproximada } from "../contrato";
import { erroBusca, type ErroBusca } from "../erros";
import { partidaFonte, type JogadorDaPartidaFonte } from "../fonte/schemas";
import { falha, ok, type Resultado } from "../resultado";

const ORIGEM_DA_GRADE = 57;
const ESCALA_DA_GRADE = 142;
const LARGURA_DO_MEIO = 0.15;
type Regiao = "cima" | "meio" | "baixo";
type Lado = "radiant" | "dire";

const LANE_DA_REGIAO: Record<Lado, Record<Regiao, Lane>> = {
  radiant: { baixo: "safe", meio: "mid", cima: "off" },
  dire: { cima: "safe", meio: "mid", baixo: "off" },
};

const arredondar = (v: number) => Math.round(v * 1000) / 1000;
const limitar = (v: number) => Math.min(1, Math.max(0, v));

export const celulaParaNorm = (celula: number) => limitar((celula + 0.5 - ORIGEM_DA_GRADE) / ESCALA_DA_GRADE);

export function manchasDaLane(lanePos: Record<string, Record<string, number>>): Mancha[] {
  const brutas = Object.entries(lanePos).flatMap(([x, colunas]) =>
    Object.entries(colunas).map(([y, vezes]) => ({ x: celulaParaNorm(Number(x)), y: celulaParaNorm(Number(y)), vezes })));
  const maior = brutas.reduce((max, m) => Math.max(max, m.vezes), 1);
  return brutas.map(({ x, y, vezes }) => ({ x: arredondar(x), y: arredondar(y), peso: arredondar(vezes / maior) }));
}

export function regiaoDoPonto({ x, y }: { x: number; y: number }): Regiao {
  if (Math.abs(x - y) < LARGURA_DO_MEIO) return "meio";
  return y > x ? "cima" : "baixo";
}

export function laneDasManchas(manchas: readonly Mancha[], lado: Lado): Lane | null {
  const pesos = new Map<Regiao, number>();
  for (const m of manchas) pesos.set(regiaoDoPonto(m), (pesos.get(regiaoDoPonto(m)) ?? 0) + m.peso);
  const [regiao] = [...pesos.entries()].sort((a, b) => b[1] - a[1])[0] ?? [];
  return regiao ? LANE_DA_REGIAO[lado][regiao] : null;
}

function rotaDoJogador(jogador: JogadorDaPartidaFonte, partida: string, conta: number): Omit<RotaAproximada, "frescor"> {
  const manchas = jogador.lane_pos ? manchasDaLane(jogador.lane_pos) : [];
  const lado: Lado = jogador.player_slot < 128 ? "radiant" : "dire";
  return {
    partida, conta, analisada: manchas.length > 0, manchas, laneDasManchas: laneDasManchas(manchas, lado),
    laneRegistrada: jogador.lane_role == null ? null : LANE_POR_PAPEL[jogador.lane_role] ?? null,
  };
}

export async function rotaDaPartida(consultar: Consultar, partidaId: string, contaId: number): Promise<Resultado<RotaAproximada, ErroBusca>> {
  const partida = await consultar({ caminho: `/matches/${partidaId}`, schema: partidaFonte, validadeS: VALIDADE.partida });
  if (!partida.ok) return partida;
  const jogador = partida.valor.dados.players.find((p) => p.account_id === contaId);
  if (!jogador) return falha(erroBusca("NAO_ENCONTRADO", "Esta conta não aparece nessa partida."));
  return ok({ ...rotaDoJogador(jogador, partidaId, contaId), frescor: partida.valor.frescor });
}
```

- [ ] **Step 4: Rodar e ver passar**: `npm test` → passam.
- [ ] **Step 5: Commit**: `git add api && git commit -m "feat: add approximate route from lane positions"`

---

### Task 8: Times

**Files:**
- Create: `api/src/times/times.ts`, `api/src/times/times.test.ts`

**Interfaces:**
- Consumes: `Consultar`, `juntarFrescor`, `timeEncontrado`, `VALIDADE`, schemas de time
- Produces: `resumoDoTime(consultar, id): Promise<Resultado<ResumoTime, ErroBusca>>` (jogadores atuais e 20 últimas partidas).

- [ ] **Step 1: Teste que falha**

```ts
// api/src/times/times.test.ts
import { ok } from "../resultado";
import type { Consultar } from "../consulta";
import { resumoDoTime } from "./times";

const frescor = { buscadoEm: 1, vencido: false };
const respostas: Record<string, unknown> = {
  "/teams/5": { team_id: 5, name: "Team Spirit", logo_url: null, wins: 10, losses: 4, last_match_time: 1 },
  "/teams/5/players": [
    { account_id: 1, name: "Yatoro", games_played: 50, wins: 30, is_current_team_member: true },
    { account_id: 2, name: "Antigo", games_played: 80, wins: 40, is_current_team_member: false },
  ],
  "/teams/5/matches": Array.from({ length: 25 }, (_, i) => ({
    match_id: i, radiant_win: true, radiant: i % 2 === 0, duration: 2000, start_time: 100 - i, league_name: "TI", opposing_team_name: null,
  })),
  "/teams/6": null,
};
const consultar: Consultar = async ({ caminho }) => ok({ dados: respostas[caminho] as never, frescor });

it("time com jogadores atuais e 20 partidas, venceu pelo lado", async () => {
  const r = await resumoDoTime(consultar, 5);
  expect(r.ok && r.valor.time.nome).toBe("Team Spirit");
  expect(r.ok && r.valor.jogadores.map((j) => j.nome)).toEqual(["Yatoro"]);
  expect(r.ok && r.valor.partidas).toHaveLength(20);
  expect(r.ok && r.valor.partidas.slice(0, 2).map((p) => p.venceu)).toEqual([true, false]);
  expect(r.ok && r.valor.partidas[0]?.adversario).toBe("adversário sem nome");
});

it("time vazio na fonte é não encontrado", async () => {
  expect(await resumoDoTime(consultar, 6)).toMatchObject({ ok: false, erro: { codigo: "NAO_ENCONTRADO" } });
});
```

- [ ] **Step 2: Rodar e ver falhar**: FAIL.

- [ ] **Step 3: Implementação**

```ts
// api/src/times/times.ts
import { VALIDADE, timeEncontrado } from "../contas/contas";
import type { Consultar } from "../consulta";
import { juntarFrescor } from "../consulta";
import type { ResumoTime } from "../contrato";
import { erroBusca, type ErroBusca } from "../erros";
import { jogadoresDoTimeFonte, partidasDoTimeFonte, timeOuNadaFonte } from "../fonte/schemas";
import { falha, ok, type Resultado } from "../resultado";

const MAXIMO_DE_PARTIDAS = 20;

export async function resumoDoTime(consultar: Consultar, id: number): Promise<Resultado<ResumoTime, ErroBusca>> {
  const time = await consultar({ caminho: `/teams/${id}`, schema: timeOuNadaFonte, validadeS: VALIDADE.time });
  if (!time.ok) return time;
  if (!time.valor.dados) return falha(erroBusca("NAO_ENCONTRADO", "Time não encontrado."));
  const [jogadores, partidas] = await Promise.all([
    consultar({ caminho: `/teams/${id}/players`, schema: jogadoresDoTimeFonte, validadeS: VALIDADE.time }),
    consultar({ caminho: `/teams/${id}/matches`, schema: partidasDoTimeFonte, validadeS: VALIDADE.recentes }),
  ]);
  if (!jogadores.ok) return jogadores;
  if (!partidas.ok) return partidas;
  return ok({
    time: timeEncontrado(time.valor.dados),
    jogadores: jogadores.valor.dados.filter((j) => j.is_current_team_member === true)
      .map((j) => ({ id: j.account_id, nome: j.name ?? `Conta ${j.account_id}`, partidas: j.games_played, vitorias: j.wins })),
    partidas: partidas.valor.dados.slice(0, MAXIMO_DE_PARTIDAS).map((p) => ({
      id: String(p.match_id), venceu: p.radiant_win === null ? null : p.radiant === p.radiant_win,
      adversario: p.opposing_team_name ?? "adversário sem nome", campeonato: p.league_name,
      inicio: p.start_time, duracaoS: p.duration,
    })),
    frescor: juntarFrescor(time.valor.frescor, jogadores.valor.frescor, partidas.valor.frescor),
  });
}
```

- [ ] **Step 4: Rodar e ver passar**: `npm test` → passam.
- [ ] **Step 5: Commit**: `git add api && git commit -m "feat: add team summary"`

---

### Task 9: HTTP (responder, Lambda, servidor local) e exemplos do contrato

**Files:**
- Create: `api/src/http/responder.ts`, `api/src/http/responder.test.ts`, `api/src/http/dependencias.ts`, `api/src/http/lambda.ts`, `api/src/http/dev.ts`, `contrato/exemplos/*.json` (gerados pelo teste)

**Interfaces:**
- Consumes: tudo acima
- Produces: `type Pedido = { metodo; caminho; query: URLSearchParams; ip }`; `type Resposta = { status; headers: Record<string, string>; corpo: string }`; `type DepsResponder = { consultar; limites; agora; registrar }`; `responder(pedido, deps): Promise<Resposta>`; `montarDependencias({ cache, contadores, fonte, agora? }): DepsResponder`; `handler(evento: APIGatewayProxyEventV2)`; servidor local em `http://localhost:8787`.
- Rotas (todas `GET`): `/api/v1/busca?q=<texto>`, `/api/v1/contas/<id>`, `/api/v1/partidas/<id>/rota?conta=<id>`, `/api/v1/times/<id>`. Sucesso: `200 {"dados": ...}`. Erro: status de `STATUS_DO_ERRO` e `{"erro": {codigo, mensagem, tenteEmS?}}`, com `Retry-After` quando há `tenteEmS`. Sempre `Cache-Control: no-store` e `Content-Type: application/json; charset=utf-8`.
- IP do visitante na Lambda: cabeçalho `cloudfront-viewer-address` (a fase 3 manda o CloudFront repassar), senão `requestContext.http.sourceIp`. Quem chama o API Gateway direto pode forjar o cabeçalho; o throttling da API (fase 3) cobre esse caso.

- [ ] **Step 1: Testes que falham**

```ts
// api/src/http/responder.test.ts
import { readFileSync } from "node:fs";
import { cacheEmMemoria } from "../cache/cache";
import { criarFonte } from "../fonte/opendota";
import { contadoresEmMemoria } from "../limite/limite";
import { montarDependencias } from "./dependencias";
import { responder } from "./responder";

const AGORA = Date.UTC(2026, 9, 6, 12, 0, 0);
const amostra = (nome: string) => readFileSync(new URL(`../fonte/amostras/${nome}.json`, import.meta.url), "utf8");
const ROTAS_DA_FONTE: Record<string, string> = {
  "/players/321580662": "jogador", "/players/321580662/wl": "vitorias", "/players/321580662/heroes": "herois-da-conta",
  "/players/321580662/recentMatches": "partidas-recentes", "/search?q=yatoro": "busca", "/matches/9028005974": "partida",
  "/teams": "times", "/teams/7119388": "time", "/teams/7119388/players": "jogadores-do-time",
  "/teams/7119388/matches": "partidas-do-time", "/constants/heroes": "nomes-de-herois",
};
const fonteGravada: typeof fetch = async (entrada) => {
  const caminho = String(entrada).replace("https://api.opendota.com/api", "");
  const nome = ROTAS_DA_FONTE[caminho];
  return nome ? new Response(amostra(nome)) : new Response("{}", { status: 404 });
};

function montar(tetos?: { visitantePorMinuto: number }) {
  const deps = montarDependencias({ cache: cacheEmMemoria(), contadores: contadoresEmMemoria(), fonte: criarFonte({ buscar: fonteGravada }), agora: () => AGORA, registrar: () => {}, tetos });
  return (caminho: string, ip = "1.1.1.1") => {
    const url = new URL(caminho, "http://local");
    return responder({ metodo: "GET", caminho: url.pathname, query: url.searchParams, ip }, deps);
  };
}

it.each([
  ["busca", "/api/v1/busca?q=yatoro"],
  ["conta", "/api/v1/contas/321580662"],
  ["rota", "/api/v1/partidas/9028005974/rota?conta=321580662"],
  ["time", "/api/v1/times/7119388"],
])("%s responde 200 e gera o exemplo do contrato", async (nome, caminho) => {
  const resposta = await montar()(caminho);
  expect(resposta.status).toBe(200);
  expect(resposta.headers["cache-control"]).toBe("no-store");
  await expect(JSON.stringify(JSON.parse(resposta.corpo), null, 2)).toMatchFileSnapshot(`../../../contrato/exemplos/${nome}.json`);
});

it.each([
  ["/api/v1/busca?q=a", 400, "ENTRADA_INVALIDA"],
  ["/api/v1/contas/1", 404, "NAO_ENCONTRADO"],
  ["/api/v1/partidas/9028005974/rota", 400, "ENTRADA_INVALIDA"],
  ["/api/v1/nada", 404, "NAO_ENCONTRADO"],
])("%s responde %i %s com corpo de erro", async (caminho, status, codigo) => {
  const resposta = await montar()(caminho);
  expect(resposta.status).toBe(status);
  expect(JSON.parse(resposta.corpo)).toMatchObject({ erro: { codigo } });
});

it("visitante acima do limite recebe 429 com Retry-After e o exemplo de erro", async () => {
  const pedir = montar({ visitantePorMinuto: 1 });
  await pedir("/api/v1/busca?q=yatoro");
  const resposta = await pedir("/api/v1/busca?q=yatoro");
  expect(resposta.status).toBe(429);
  expect(resposta.headers["retry-after"]).toBe("60");
  await expect(JSON.stringify(JSON.parse(resposta.corpo), null, 2)).toMatchFileSnapshot("../../../contrato/exemplos/erro.json");
});

it("exceção inesperada vira 500 sem detalhe interno", async () => {
  const deps = montarDependencias({ cache: { ler: async () => { throw new Error("segredo interno"); }, gravar: async () => {} },
    contadores: contadoresEmMemoria(), fonte: criarFonte({ buscar: fonteGravada }), agora: () => AGORA, registrar: () => {} });
  const resposta = await responder({ metodo: "GET", caminho: "/api/v1/contas/321580662", query: new URLSearchParams(), ip: "x" }, deps);
  expect(resposta.status).toBe(500);
  expect(resposta.corpo).not.toContain("segredo");
});
```

- [ ] **Step 2: Rodar e ver falhar**: FAIL.

- [ ] **Step 3: Implementação**

```ts
// api/src/http/responder.ts
import { buscar, resumoDaConta } from "../contas/contas";
import type { Consultar } from "../consulta";
import { STATUS_DO_ERRO, erroBusca, type ErroBusca } from "../erros";
import { idDoVisitante, type Limites } from "../limite/limite";
import { rotaDaPartida } from "../partidas/rota-aproximada";
import type { Registrar } from "../registro";
import { falha, type Resultado } from "../resultado";
import { resumoDoTime } from "../times/times";

export type Pedido = { metodo: string; caminho: string; query: URLSearchParams; ip: string };
export type Resposta = { status: number; headers: Record<string, string>; corpo: string };
export type DepsResponder = { consultar: Consultar; limites: Limites; agora: () => number; registrar: Registrar };

type Execucao = Promise<Resultado<unknown, ErroBusca>>;
type Rota = { nome: string; padrao: RegExp; executar: (parametros: string[], query: URLSearchParams, consultar: Consultar) => Execucao };

const CONTA_NA_QUERY = /^\d{1,12}$/;

const ROTAS: readonly Rota[] = [
  { nome: "busca", padrao: /^\/api\/v1\/busca$/, executar: (_, query, consultar) => buscar(consultar, query.get("q") ?? "") },
  { nome: "conta", padrao: /^\/api\/v1\/contas\/(\d{1,12})$/, executar: ([id], _, consultar) => resumoDaConta(consultar, Number(id)) },
  {
    nome: "rota", padrao: /^\/api\/v1\/partidas\/(\d{1,15})\/rota$/,
    executar: async ([partida = ""], query, consultar) => {
      const conta = query.get("conta") ?? "";
      if (!CONTA_NA_QUERY.test(conta)) return falha(erroBusca("ENTRADA_INVALIDA", "Informe a conta da partida."));
      return rotaDaPartida(consultar, partida, Number(conta));
    },
  },
  { nome: "time", padrao: /^\/api\/v1\/times\/(\d{1,12})$/, executar: ([id], _, consultar) => resumoDoTime(consultar, Number(id)) },
];

const CABECALHOS = { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" } as const;

function paraResposta(resultado: Resultado<unknown, ErroBusca>): Resposta {
  if (resultado.ok) return { status: 200, headers: { ...CABECALHOS }, corpo: JSON.stringify({ dados: resultado.valor }) };
  const { erro } = resultado;
  const espera: Record<string, string> = erro.tenteEmS === undefined ? {} : { "retry-after": String(erro.tenteEmS) };
  return { status: STATUS_DO_ERRO[erro.codigo], headers: { ...CABECALHOS, ...espera }, corpo: JSON.stringify({ erro }) };
}

async function executar(pedido: Pedido, deps: DepsResponder, rota: Rota | undefined, parametros: string[]): Execucao {
  if (pedido.metodo !== "GET") return falha(erroBusca("ENTRADA_INVALIDA", "Só GET."));
  if (!rota) return falha(erroBusca("NAO_ENCONTRADO", "Rota desconhecida."));
  const visitante = await deps.limites.contarVisitante(idDoVisitante(pedido.ip, deps.agora()));
  if (!visitante.ok) return visitante;
  return rota.executar(parametros, pedido.query, deps.consultar);
}

export async function responder(pedido: Pedido, deps: DepsResponder): Promise<Resposta> {
  const inicio = deps.agora();
  const rota = ROTAS.find((r) => r.padrao.test(pedido.caminho));
  const parametros = rota ? (pedido.caminho.match(rota.padrao) ?? []).slice(1) : [];
  try {
    const resultado = await executar(pedido, deps, rota, parametros);
    deps.registrar({ nivel: resultado.ok ? "info" : "warn", operacao: `busca:${rota?.nome ?? "desconhecida"}`,
      duracaoMs: deps.agora() - inicio, codigo: resultado.ok ? null : resultado.erro.codigo });
    return paraResposta(resultado);
  } catch (causa) {
    deps.registrar({ nivel: "error", operacao: `busca:${rota?.nome ?? "desconhecida"}`, duracaoMs: deps.agora() - inicio,
      codigo: "INTERNO", detalhe: causa instanceof Error ? `${causa.message}\n${causa.stack ?? ""}` : String(causa) });
    return paraResposta(falha(erroBusca("INTERNO", "Algo deu errado na busca ao vivo.")));
  }
}
```

```ts
// api/src/http/dependencias.ts
import type { Cache } from "../cache/cache";
import { criarConsulta } from "../consulta";
import type { Fonte } from "../fonte/opendota";
import { LIMITES, criarLimites, type Contadores, type Tetos } from "../limite/limite";
import { registrarJson, type Registrar } from "../registro";
import type { DepsResponder } from "./responder";

type Montagem = {
  cache: Cache; contadores: Contadores; fonte: Fonte;
  agora?: () => number; registrar?: Registrar; tetos?: Partial<Tetos> | undefined;
};

export function montarDependencias({ cache, contadores, fonte, agora = Date.now, registrar = registrarJson, tetos = {} }: Montagem): DepsResponder {
  const limites = criarLimites(contadores, agora, { ...LIMITES, ...tetos });
  return { consultar: criarConsulta({ fonte, cache, limites, agora, registrar }), limites, agora, registrar };
}
```

```ts
// api/src/http/lambda.ts
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import type { APIGatewayProxyEventV2, APIGatewayProxyStructuredResultV2 } from "aws-lambda";
import { z } from "zod";
import { criarFonte } from "../fonte/opendota";
import { cacheDynamo, contadoresDynamo } from "../infra/dynamo";
import { montarDependencias } from "./dependencias";
import { responder } from "./responder";

const ambiente = z.object({ TABELA_CACHE: z.string().min(1) }).parse(process.env);
const cliente = DynamoDBDocumentClient.from(new DynamoDBClient({}));
// montado uma vez por instância da Lambda (só leitura): reaproveita conexões entre chamadas
const deps = montarDependencias({
  cache: cacheDynamo(cliente, ambiente.TABELA_CACHE),
  contadores: contadoresDynamo(cliente, ambiente.TABELA_CACHE),
  fonte: criarFonte(),
});

const ipDoVisitante = (evento: APIGatewayProxyEventV2): string => {
  const viaCloudFront = evento.headers["cloudfront-viewer-address"];
  return viaCloudFront ? viaCloudFront.slice(0, viaCloudFront.lastIndexOf(":")) : evento.requestContext.http.sourceIp;
};

export async function handler(evento: APIGatewayProxyEventV2): Promise<APIGatewayProxyStructuredResultV2> {
  const resposta = await responder({
    metodo: evento.requestContext.http.method, caminho: evento.rawPath,
    query: new URLSearchParams(evento.rawQueryString), ip: ipDoVisitante(evento),
  }, deps);
  return { statusCode: resposta.status, headers: resposta.headers, body: resposta.corpo };
}
```

```ts
// api/src/http/dev.ts
import { createServer } from "node:http";
import { cacheEmMemoria } from "../cache/cache";
import { criarFonte } from "../fonte/opendota";
import { contadoresEmMemoria } from "../limite/limite";
import { montarDependencias } from "./dependencias";
import { responder } from "./responder";

const PORTA = 8787;
const deps = montarDependencias({ cache: cacheEmMemoria(), contadores: contadoresEmMemoria(), fonte: criarFonte() });

createServer(async (pedido, resposta) => {
  const url = new URL(pedido.url ?? "/", `http://localhost:${PORTA}`);
  const r = await responder({ metodo: pedido.method ?? "GET", caminho: url.pathname, query: url.searchParams,
    ip: pedido.socket.remoteAddress ?? "local" }, deps);
  resposta.writeHead(r.status, r.headers).end(r.corpo);
}).listen(PORTA, () => console.log(`busca ao vivo local em http://localhost:${PORTA}/api/v1`));
```

- [ ] **Step 4: Rodar e ver passar**

Run: `cd api && npx vitest run -u src/http && npm test && npm run typecheck && npm run build`
Expected: a primeira rodada cria `contrato/exemplos/{busca,conta,rota,time,erro}.json`; abra os cinco e confira que fazem sentido (nomes de herói, lane, manchas com x e y entre 0 e 1). Depois `npm test` passa sem `-u` e `dist/busca/index.mjs` existe. Rode `npm run dev` e `curl -s localhost:8787/api/v1/contas/321580662 | head -c 400`: responde com dados reais.

- [ ] **Step 5: Commit**: `git add api contrato && git commit -m "feat: add http responder, lambda handler and local server"`

---

### Task 10: Cliente da busca ao vivo no app

**Files:**
- Create: `app/src/live/contrato.ts`, `app/src/live/contrato.test.ts`, `app/src/live/api.ts`, `app/src/live/api.test.ts`, `app/src/live/useAoVivo.ts`
- Modify: `app/vite.config.ts`

**Interfaces:**
- Consumes: os exemplos em `contrato/exemplos/`
- Produces: schemas `buscaSchema`, `resumoContaSchema`, `rotaAproximadaSchema`, `resumoTimeSchema`, `erroApiSchema` e tipos `BuscaAoVivo`, `ResumoConta`, `RotaAproximada`, `ResumoTime`, `Mancha`, `Lane`, `Frescor`; `type CodigoAoVivo`; `type ErroAoVivo = { codigo: CodigoAoVivo; tenteEmS: number | null }`; `type RespostaAoVivo<T> = { ok: true; dados: T } | { ok: false; erro: ErroAoVivo }`; `pedir(caminho, schema, { buscar?, sinal? })`; `mensagemDoErro(erro, contexto?)`; `useAoVivo(caminho | null, schema): { estado: "parado" } | { estado: "carregando" } | { estado: "ok"; dados } | { estado: "erro"; erro }` mais `tentarDeNovo()`.

- [ ] **Step 1: Testes que falham**

```ts
// app/src/live/contrato.test.ts
import { readFileSync } from "node:fs";
import { buscaSchema, erroApiSchema, resumoContaSchema, resumoTimeSchema, rotaAproximadaSchema } from "./contrato";
import { z } from "zod";

const exemplo = (nome: string): unknown => JSON.parse(readFileSync(new URL(`../../../contrato/exemplos/${nome}.json`, import.meta.url), "utf8"));
const comDados = <T extends z.ZodTypeAny>(schema: T) => z.object({ dados: schema });

it.each<[string, z.ZodTypeAny]>([
  ["busca", comDados(buscaSchema)], ["conta", comDados(resumoContaSchema)], ["rota", comDados(rotaAproximadaSchema)],
  ["time", comDados(resumoTimeSchema)], ["erro", erroApiSchema],
])("o exemplo %s gerado pela API passa no schema do app", (nome, schema) => {
  const r = schema.safeParse(exemplo(nome));
  expect(r.success ? "ok" : r.error.issues[0]).toBe("ok");
});
```

```ts
// app/src/live/api.test.ts
import { z } from "zod";
import { mensagemDoErro, pedir } from "./api";

const schema = z.object({ n: z.number() });
const responde = (status: number, corpo: unknown, cabecalhos: Record<string, string> = {}): typeof fetch =>
  async () => new Response(typeof corpo === "string" ? corpo : JSON.stringify(corpo), { status, headers: cabecalhos });

it.each([
  { nome: "sucesso", buscar: responde(200, { dados: { n: 1 } }), esperado: { ok: true, dados: { n: 1 } } },
  { nome: "erro da API", buscar: responde(429, { erro: { codigo: "LIMITE_VISITANTE", mensagem: "x", tenteEmS: 12 } }), esperado: { ok: false, erro: { codigo: "LIMITE_VISITANTE", tenteEmS: 12 } } },
  { nome: "429 sem corpo da API", buscar: responde(429, { message: "Too Many Requests" }), esperado: { ok: false, erro: { codigo: "BUSCA_PAUSADA", tenteEmS: null } } },
  { nome: "200 fora do formato", buscar: responde(200, { dados: { n: "um" } }), esperado: { ok: false, erro: { codigo: "RESPOSTA_INVALIDA", tenteEmS: null } } },
  { nome: "502 sem corpo", buscar: responde(502, "<html>"), esperado: { ok: false, erro: { codigo: "RESPOSTA_INVALIDA", tenteEmS: null } } },
])("$nome", async ({ buscar, esperado }) => {
  expect(await pedir("/x", schema, { buscar })).toEqual(esperado);
});

it("falha de rede vira sem conexão", async () => {
  const buscar: typeof fetch = async () => { throw new TypeError("Failed to fetch"); };
  expect(await pedir("/x", schema, { buscar })).toEqual({ ok: false, erro: { codigo: "SEM_CONEXAO", tenteEmS: null } });
});

it.each([
  [{ codigo: "LIMITE_VISITANTE", tenteEmS: 12 } as const, "Muitas buscas seguidas. Tente de novo em 12 segundos."],
  [{ codigo: "LIMITE_FONTE", tenteEmS: 300 } as const, "A busca ao vivo atingiu o limite da fonte. Volta a funcionar em 5 minutos."],
  [{ codigo: "BUSCA_PAUSADA", tenteEmS: null } as const, "A busca ao vivo está pausada agora. O resto do app funciona normalmente."],
])("mensagem de %o", (erro, texto) => {
  expect(mensagemDoErro(erro)).toBe(texto);
});

it("não encontrado de conta sugere buscar pelo nome", () => {
  expect(mensagemDoErro({ codigo: "NAO_ENCONTRADO", tenteEmS: null }, "conta")).toBe("Conta não encontrada. Tente buscar pelo nome.");
});
```

- [ ] **Step 2: Rodar e ver falhar**: `cd app && npm test` → FAIL.

- [ ] **Step 3: Implementação**

```ts
// app/src/live/contrato.ts
import { z } from "zod";

const frescorSchema = z.object({ buscadoEm: z.number(), vencido: z.boolean() });
export const laneSchema = z.enum(["safe", "mid", "off", "selva"]);
const timeEncontradoSchema = z.object({ id: z.number(), nome: z.string(), logo: z.string().nullable(), vitorias: z.number(), derrotas: z.number() });

export const buscaSchema = z.object({
  contas: z.array(z.object({ id: z.number(), nome: z.string(), foto: z.string().nullable(), ultimaPartida: z.string().nullable() })),
  times: z.array(timeEncontradoSchema),
  frescor: frescorSchema,
});

export const resumoContaSchema = z.object({
  conta: z.object({ id: z.number(), nome: z.string(), foto: z.string().nullable(), medalha: z.number().nullable() }),
  totais: z.object({ partidas: z.number(), vitorias: z.number() }),
  ultimas: z.object({ partidas: z.number(), vitorias: z.number() }),
  herois: z.array(z.object({ heroi: z.string(), partidas: z.number(), vitorias: z.number() })),
  partidas: z.array(z.object({
    id: z.string(), heroi: z.string(), venceu: z.boolean().nullable(), abates: z.number(), mortes: z.number(), assistencias: z.number(),
    duracaoS: z.number(), inicio: z.number(), lane: laneSchema.nullable(), analisada: z.boolean(),
  })),
  temDadosPublicos: z.boolean(),
  frescor: frescorSchema,
});

export const manchaSchema = z.object({ x: z.number().min(0).max(1), y: z.number().min(0).max(1), peso: z.number().min(0).max(1) });
export const rotaAproximadaSchema = z.object({
  partida: z.string(), conta: z.number(), analisada: z.boolean(), manchas: z.array(manchaSchema),
  laneDasManchas: laneSchema.nullable(), laneRegistrada: laneSchema.nullable(), frescor: frescorSchema,
});

export const resumoTimeSchema = z.object({
  time: timeEncontradoSchema,
  jogadores: z.array(z.object({ id: z.number(), nome: z.string(), partidas: z.number(), vitorias: z.number() })),
  partidas: z.array(z.object({
    id: z.string(), venceu: z.boolean().nullable(), adversario: z.string(), campeonato: z.string().nullable(), inicio: z.number(), duracaoS: z.number(),
  })),
  frescor: frescorSchema,
});

export const CODIGOS_DA_API = ["ENTRADA_INVALIDA", "NAO_ENCONTRADO", "LIMITE_VISITANTE", "LIMITE_FONTE", "FONTE_INDISPONIVEL", "FONTE_FORMATO", "INTERNO"] as const;
export const erroApiSchema = z.object({
  erro: z.object({ codigo: z.enum(CODIGOS_DA_API), mensagem: z.string(), tenteEmS: z.number().optional() }),
});

export type Frescor = z.infer<typeof frescorSchema>;
export type Lane = z.infer<typeof laneSchema>;
export type BuscaAoVivo = z.infer<typeof buscaSchema>;
export type ResumoConta = z.infer<typeof resumoContaSchema>;
export type Mancha = z.infer<typeof manchaSchema>;
export type RotaAproximada = z.infer<typeof rotaAproximadaSchema>;
export type ResumoTime = z.infer<typeof resumoTimeSchema>;
```

```ts
// app/src/live/api.ts
import { z } from "zod";
import { CODIGOS_DA_API, erroApiSchema } from "./contrato";

export type CodigoAoVivo = (typeof CODIGOS_DA_API)[number] | "SEM_CONEXAO" | "DEMOROU" | "BUSCA_PAUSADA" | "RESPOSTA_INVALIDA" | "CANCELADO";
export type ErroAoVivo = { codigo: CodigoAoVivo; tenteEmS: number | null };
export type RespostaAoVivo<T> = { ok: true; dados: T } | { ok: false; erro: ErroAoVivo };

const TEMPO_MAXIMO_MS = 10_000;
const BASE = "/api/v1";
const falhou = (codigo: CodigoAoVivo, tenteEmS: number | null = null): RespostaAoVivo<never> => ({ ok: false, erro: { codigo, tenteEmS } });

type Opcoes = { buscar?: typeof fetch; sinal?: AbortSignal };

async function chamar(buscar: typeof fetch, url: string, sinal?: AbortSignal): Promise<RespostaAoVivo<Response>> {
  const sinais = sinal ? [sinal, AbortSignal.timeout(TEMPO_MAXIMO_MS)] : [AbortSignal.timeout(TEMPO_MAXIMO_MS)];
  try {
    return { ok: true, dados: await buscar(url, { signal: AbortSignal.any(sinais) }) };
  } catch (causa) {
    if (sinal?.aborted) return falhou("CANCELADO");
    if (causa instanceof DOMException && causa.name === "TimeoutError") return falhou("DEMOROU");
    return falhou("SEM_CONEXAO");
  }
}

async function interpretar<T>(resposta: Response, schema: z.ZodType<T>): Promise<RespostaAoVivo<T>> {
  const corpo: unknown = await resposta.json().catch(() => undefined);
  if (resposta.ok) {
    const analise = z.object({ dados: schema }).safeParse(corpo);
    return analise.success ? { ok: true, dados: analise.data.dados } : falhou("RESPOSTA_INVALIDA");
  }
  const erro = erroApiSchema.safeParse(corpo);
  if (erro.success) return falhou(erro.data.erro.codigo, erro.data.erro.tenteEmS ?? null);
  return resposta.status === 429 ? falhou("BUSCA_PAUSADA") : falhou("RESPOSTA_INVALIDA");
}

export async function pedir<T>(caminho: string, schema: z.ZodType<T>, { buscar = fetch, sinal }: Opcoes = {}): Promise<RespostaAoVivo<T>> {
  const resposta = await chamar(buscar, `${BASE}${caminho}`, sinal);
  return resposta.ok ? interpretar(resposta.dados, schema) : resposta;
}

type Contexto = "conta" | "time" | "partida";
const NAO_ENCONTRADO: Record<Contexto, string> = {
  conta: "Conta não encontrada. Tente buscar pelo nome.",
  time: "Time não encontrado.",
  partida: "Esta conta não aparece nessa partida.",
};

const MENSAGENS: Record<CodigoAoVivo, (erro: ErroAoVivo) => string> = {
  ENTRADA_INVALIDA: () => "Digite pelo menos 2 letras ou o número da conta.",
  NAO_ENCONTRADO: () => "Não encontrado.",
  LIMITE_VISITANTE: (e) => `Muitas buscas seguidas. Tente de novo em ${e.tenteEmS ?? 60} segundos.`,
  LIMITE_FONTE: (e) => `A busca ao vivo atingiu o limite da fonte. Volta a funcionar em ${Math.ceil((e.tenteEmS ?? 60) / 60)} minutos.`,
  FONTE_INDISPONIVEL: () => "A fonte de dados não respondeu. Tente de novo em alguns minutos.",
  FONTE_FORMATO: () => "A fonte respondeu algo inesperado; avisamos o Felipe.",
  INTERNO: () => "Algo deu errado na busca ao vivo. Tente de novo.",
  SEM_CONEXAO: () => "Sem conexão.",
  DEMOROU: () => "A busca demorou demais. Tente de novo.",
  BUSCA_PAUSADA: () => "A busca ao vivo está pausada agora. O resto do app funciona normalmente.",
  RESPOSTA_INVALIDA: () => "A busca ao vivo respondeu algo inesperado. Tente de novo.",
  CANCELADO: () => "",
};

export function mensagemDoErro(erro: ErroAoVivo, contexto?: Contexto): string {
  if (erro.codigo === "NAO_ENCONTRADO" && contexto) return NAO_ENCONTRADO[contexto];
  return MENSAGENS[erro.codigo](erro);
}
```

```ts
// app/src/live/useAoVivo.ts
import { useEffect, useState } from "react";
import type { z } from "zod";
import { pedir, type ErroAoVivo } from "./api";

export type EstadoAoVivo<T> =
  | { estado: "parado" } | { estado: "carregando" } | { estado: "ok"; dados: T } | { estado: "erro"; erro: ErroAoVivo };

export function useAoVivo<T>(caminho: string | null, schema: z.ZodType<T>): EstadoAoVivo<T> & { tentarDeNovo: () => void } {
  const [estado, setEstado] = useState<EstadoAoVivo<T>>({ estado: "parado" });
  const [tentativa, setTentativa] = useState(0);
  useEffect(() => {
    if (!caminho) return;
    const controle = new AbortController();
    setEstado({ estado: "carregando" });
    pedir(caminho, schema, { sinal: controle.signal }).then((r) => {
      if (controle.signal.aborted) return;
      setEstado(r.ok ? { estado: "ok", dados: r.dados } : { estado: "erro", erro: r.erro });
    });
    return () => controle.abort();
  }, [caminho, schema, tentativa]);
  return { ...(caminho ? estado : { estado: "parado" }), tentarDeNovo: () => setTentativa((n) => n + 1) };
}
```

Em `app/vite.config.ts`, acrescente o proxy para o servidor local da API (dev e preview):

```ts
server: { proxy: { "/api": "http://localhost:8787" } },
preview: { proxy: { "/api": "http://localhost:8787" } },
```

- [ ] **Step 4: Rodar e ver passar**: `npm test` → passam (os 5 exemplos do contrato validam).
- [ ] **Step 5: Commit**: `git add app && git commit -m "feat: add live search client with contract checks"`

---

### Task 11: Telas da busca ao vivo e manchas no mapa

**Files:**
- Create: `app/src/live/ErroAoVivo.tsx`, `app/src/live/Frescor.tsx`, `app/src/live/AoVivoPage.tsx`, `app/src/live/ContaPage.tsx`, `app/src/live/RotaDaPartida.tsx`, `app/src/live/TimeAoVivoPage.tsx`, `app/src/live/telas.test.tsx`
- Modify: `app/src/map/MapView.tsx`, `app/src/map/MapFlat.tsx`, `app/src/map/Map3D.tsx`, `app/src/map/MapView.test.tsx`, `app/src/search/SearchBox.tsx`, `app/src/App.tsx`, `app/src/layout/Shell.tsx`, `app/src/styles.css`

**Interfaces:**
- Consumes: `useAoVivo`, `mensagemDoErro`, schemas do contrato, `MapView`, `objetivosSchema`, `useData`
- Produces: `MapViewProps.manchas?: Mancha[]`; `ErroAoVivoView({ erro, contexto?, onTentar })` com contagem regressiva; `FrescorView({ frescor })`; telas `/ao-vivo` (`?q=`), `/ao-vivo/contas/:id` (`?partida=`), `/ao-vivo/times/:id`; atalho "Buscar ao vivo" na busca global; item "Ao vivo" na navegação.
- Textos da spec: "dados de <hora>"; "a fonte não respondeu; mostrando dados de <hora>"; "Esta conta não mostra partidas públicas. No Dota, ative 'Expor dados públicos de partidas'."; "esta partida não foi analisada pela fonte; a rota não está disponível"; "rota aproximada: posições de lane dos primeiros 10 minutos"; "Nada encontrado para <texto>.".

- [ ] **Step 1: Testes que falham**

```tsx
// app/src/live/telas.test.tsx
import { act, fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import { AoVivoPage } from "./AoVivoPage";
import { ErroAoVivoView } from "./ErroAoVivo";
import { FrescorView } from "./Frescor";

afterEach(() => { vi.unstubAllGlobals(); vi.useRealTimers(); });

it("número de conta vai direto para a conta, sem buscar", () => {
  const buscar = vi.fn();
  vi.stubGlobal("fetch", buscar);
  render(<MemoryRouter initialEntries={["/ao-vivo"]}><Routes>
    <Route path="/ao-vivo" element={<AoVivoPage />} />
    <Route path="/ao-vivo/contas/:id" element={<p>tela da conta</p>} />
  </Routes></MemoryRouter>);
  fireEvent.change(screen.getByRole("searchbox"), { target: { value: " 321580662 " } });
  fireEvent.submit(screen.getByRole("search"));
  expect(screen.getByText("tela da conta")).toBeInTheDocument();
  expect(buscar).not.toHaveBeenCalled();
});

it("busca sem resultado diz o texto buscado", async () => {
  vi.stubGlobal("fetch", async () => new Response(JSON.stringify({ dados: { contas: [], times: [], frescor: { buscadoEm: 0, vencido: false } } })));
  render(<MemoryRouter initialEntries={["/ao-vivo?q=zzzz"]}><Routes><Route path="/ao-vivo" element={<AoVivoPage />} /></Routes></MemoryRouter>);
  expect(await screen.findByText("Nada encontrado para zzzz.")).toBeInTheDocument();
});

it("erro com espera conta os segundos e só libera o botão no fim", () => {
  vi.useFakeTimers();
  const onTentar = vi.fn();
  render(<ErroAoVivoView erro={{ codigo: "LIMITE_VISITANTE", tenteEmS: 2 }} onTentar={onTentar} />);
  expect(screen.getByRole("alert")).toHaveTextContent("Tente de novo em 2 segundos.");
  expect(screen.getByRole("button", { name: "Tentar de novo" })).toBeDisabled();
  act(() => { vi.advanceTimersByTime(2000); });
  expect(screen.getByRole("button", { name: "Tentar de novo" })).toBeEnabled();
});

it("frescor vencido avisa que a fonte não respondeu", () => {
  const buscadoEm = new Date(2026, 9, 6, 14, 5).getTime();
  render(<FrescorView frescor={{ buscadoEm, vencido: true }} />);
  expect(screen.getByText("A fonte não respondeu; mostrando dados de 14:05.")).toBeInTheDocument();
});
```

Acrescente em `app/src/map/MapView.test.tsx`:

```tsx
it("mapa plano desenha as manchas da rota aproximada", () => {
  const { container } = render(<MapView objetivos={[]} manchas={[{ x: 0.2, y: 0.2, peso: 1 }, { x: 0.3, y: 0.2, peso: 0.5 }]} onSelecionar={() => {}} forcarPlano />);
  expect(container.querySelectorAll(".mancha")).toHaveLength(2);
});
```

- [ ] **Step 2: Rodar e ver falhar**: FAIL.

- [ ] **Step 3: Implementação**

`MapView.tsx`: acrescente `manchas?: Mancha[]` a `MapViewProps` (`import type { Mancha } from "../live/contrato"`). `MapFlat.tsx`: depois dos marcadores,

```tsx
      {manchas.length > 0 && (
        <div className="manchas" aria-label="Rota aproximada">
          {manchas.map((m) => (
            <span key={`${m.x}-${m.y}`} className="mancha" style={{ ...normToPercent([m.x, m.y]), opacity: 0.2 + 0.8 * m.peso }} />
          ))}
        </div>
      )}
```

(com `manchas = []` na desestruturação das props). `Map3D.tsx`: para cada mancha, um disco no chão:

```tsx
      {manchas.map((m) => (
        <mesh key={`${m.x}-${m.y}`} position={noChao([m.x, m.y], 0.3)} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.9, 16]} />
          <meshBasicMaterial color="#ff4fd8" transparent opacity={0.2 + 0.8 * m.peso} />
        </mesh>
      ))}
```

```tsx
// app/src/live/ErroAoVivo.tsx
import { useEffect, useState } from "react";
import { mensagemDoErro, type ErroAoVivo } from "./api";

type Props = { erro: ErroAoVivo; contexto?: "conta" | "time" | "partida"; onTentar: () => void };

export function ErroAoVivoView({ erro, contexto, onTentar }: Props) {
  const [faltam, setFaltam] = useState(erro.tenteEmS ?? 0);
  useEffect(() => {
    if (faltam <= 0) return;
    const relogio = setTimeout(() => setFaltam((s) => s - 1), 1000);
    return () => clearTimeout(relogio);
  }, [faltam]);
  if (erro.codigo === "CANCELADO") return null;
  return (
    <div className="erro-ao-vivo">
      <p role="alert">{mensagemDoErro({ ...erro, tenteEmS: erro.tenteEmS === null ? null : faltam }, contexto)}</p>
      <button onClick={onTentar} disabled={faltam > 0}>Tentar de novo</button>
    </div>
  );
}
```

```tsx
// app/src/live/Frescor.tsx
import type { Frescor } from "./contrato";

const hora = (ms: number) => new Date(ms).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

export function FrescorView({ frescor }: { frescor: Frescor }) {
  if (frescor.vencido) return <p className="frescor vencido" role="status">A fonte não respondeu; mostrando dados de {hora(frescor.buscadoEm)}.</p>;
  return <p className="frescor">Dados de {hora(frescor.buscadoEm)}.</p>;
}
```

```tsx
// app/src/live/AoVivoPage.tsx
import { useState, type FormEvent } from "react";
import { Link, useNavigate, useSearchParams } from "react-router";
import { buscaSchema } from "./contrato";
import { ErroAoVivoView } from "./ErroAoVivo";
import { FrescorView } from "./Frescor";
import { useAoVivo } from "./useAoVivo";

const NUMERO_DE_CONTA = /^\d{1,12}$/;

export function AoVivoPage() {
  const [params, setParams] = useSearchParams();
  const navegar = useNavigate();
  const consulta = params.get("q") ?? "";
  const [texto, setTexto] = useState(consulta);
  const busca = useAoVivo(consulta ? `/busca?q=${encodeURIComponent(consulta)}` : null, buscaSchema);

  function enviar(evento: FormEvent) {
    evento.preventDefault();
    const limpo = texto.trim();
    if (NUMERO_DE_CONTA.test(limpo)) return navegar(`/ao-vivo/contas/${limpo}`);
    setParams({ q: limpo });
  }

  return (
    <section className="ao-vivo">
      <h1>Busca ao vivo</h1>
      <form role="search" onSubmit={enviar}>
        <input type="search" aria-label="Conta (nome ou número) ou time" value={texto} onChange={(e) => setTexto(e.target.value)} />
        <button type="submit">Buscar</button>
      </form>
      {busca.estado === "carregando" && <p>Buscando no OpenDota…</p>}
      {busca.estado === "erro" && <ErroAoVivoView erro={busca.erro} onTentar={busca.tentarDeNovo} />}
      {busca.estado === "ok" && busca.dados.contas.length + busca.dados.times.length === 0 && <p>Nada encontrado para {consulta}.</p>}
      {busca.estado === "ok" && (
        <>
          <FrescorView frescor={busca.dados.frescor} />
          {busca.dados.contas.length > 0 && <h2>Contas</h2>}
          <ul className="cartoes">{busca.dados.contas.map((c) => (
            <li key={c.id}><Link to={`/ao-vivo/contas/${c.id}`}>
              {c.foto && <img src={c.foto} alt="" width={40} height={40} loading="lazy" />}<strong>{c.nome}</strong>
              {c.ultimaPartida && <span>última partida {new Date(c.ultimaPartida).toLocaleDateString("pt-BR")}</span>}
            </Link></li>
          ))}</ul>
          {busca.dados.times.length > 0 && <h2>Times</h2>}
          <ul className="cartoes">{busca.dados.times.map((t) => (
            <li key={t.id}><Link to={`/ao-vivo/times/${t.id}`}><strong>{t.nome}</strong><span>{t.vitorias} V · {t.derrotas} D</span></Link></li>
          ))}</ul>
        </>
      )}
    </section>
  );
}
```

```tsx
// app/src/live/RotaDaPartida.tsx
import { objetivosSchema } from "../data/schemas";
import { useData } from "../data/useData";
import { MapView } from "../map/MapView";
import { rotaAproximadaSchema, type Lane } from "./contrato";
import { ErroAoVivoView } from "./ErroAoVivo";
import { useAoVivo } from "./useAoVivo";

export const NOME_DA_LANE: Record<Lane, string> = { safe: "safe lane", mid: "mid", off: "offlane", selva: "selva" };

export function RotaDaPartida({ partida, conta }: { partida: string; conta: number }) {
  const rota = useAoVivo(`/partidas/${partida}/rota?conta=${conta}`, rotaAproximadaSchema);
  const objetivos = useData("/data/objetivos.json", objetivosSchema);
  if (rota.estado === "carregando" || rota.estado === "parado") return <p>Carregando a rota…</p>;
  if (rota.estado === "erro") return <ErroAoVivoView erro={rota.erro} contexto="partida" onTentar={rota.tentarDeNovo} />;
  if (!rota.dados.analisada) return <p>Esta partida não foi analisada pela fonte; a rota não está disponível.</p>;
  return (
    <section className="rota-aproximada">
      <p>Lane principal: <strong>{rota.dados.laneDasManchas ? NOME_DA_LANE[rota.dados.laneDasManchas] : "sem dado"}</strong></p>
      <MapView objetivos={objetivos.estado === "ok" ? objetivos.dados : []} manchas={rota.dados.manchas} onSelecionar={() => {}} />
      <p className="aviso">Rota aproximada: posições de lane dos primeiros 10 minutos.</p>
    </section>
  );
}
```

```tsx
// app/src/live/ContaPage.tsx
import { Link, useParams, useSearchParams } from "react-router";
import { resumoContaSchema } from "./contrato";
import { ErroAoVivoView } from "./ErroAoVivo";
import { FrescorView } from "./Frescor";
import { NOME_DA_LANE, RotaDaPartida } from "./RotaDaPartida";
import { useAoVivo } from "./useAoVivo";

const pct = (vitorias: number, partidas: number) => (partidas ? `${Math.round((100 * vitorias) / partidas)}%` : "sem partidas");
const minutos = (s: number) => `${Math.floor(s / 60)} min`;

export function ContaPage() {
  const { id = "" } = useParams();
  const [params, setParams] = useSearchParams();
  const partidaAberta = params.get("partida");
  const conta = useAoVivo(`/contas/${id}`, resumoContaSchema);
  if (conta.estado === "carregando" || conta.estado === "parado") return <p>Buscando a conta no OpenDota…</p>;
  if (conta.estado === "erro") return <ErroAoVivoView erro={conta.erro} contexto="conta" onTentar={conta.tentarDeNovo} />;
  const { dados } = conta;
  return (
    <article className="conta-ao-vivo">
      <header>
        {dados.conta.foto && <img src={dados.conta.foto} alt="" width={64} height={64} />}
        <h1>{dados.conta.nome}</h1>
        <FrescorView frescor={dados.frescor} />
      </header>
      <dl className="destaques">
        <div><dt>Partidas</dt><dd>{dados.totais.partidas.toLocaleString("pt-BR")}</dd></div>
        <div><dt>Vitórias</dt><dd>{pct(dados.totais.vitorias, dados.totais.partidas)}</dd></div>
        <div><dt>Últimas {dados.ultimas.partidas}</dt><dd>{pct(dados.ultimas.vitorias, dados.ultimas.partidas)}</dd></div>
      </dl>
      {!dados.temDadosPublicos && <p role="status">Esta conta não mostra partidas públicas. No Dota, ative "Expor dados públicos de partidas".</p>}
      <h2>Heróis mais jogados</h2>
      <table><thead><tr><th>Herói</th><th>Partidas</th><th>Vitórias</th></tr></thead>
        <tbody>{dados.herois.map((h) => <tr key={h.heroi}><td>{h.heroi}</td><td>{h.partidas}</td><td>{pct(h.vitorias, h.partidas)}</td></tr>)}</tbody>
      </table>
      <h2>Últimas partidas</h2>
      <ul className="partidas">{dados.partidas.map((p) => (
        <li key={p.id}>
          <button aria-expanded={partidaAberta === p.id} onClick={() => setParams(partidaAberta === p.id ? {} : { partida: p.id })}>
            <strong>{p.heroi}</strong> {p.venceu === null ? "" : p.venceu ? "vitória" : "derrota"} · {p.abates}/{p.mortes}/{p.assistencias}
            {" · "}{minutos(p.duracaoS)} · {p.lane ? NOME_DA_LANE[p.lane] : "lane sem dado"} · {new Date(p.inicio * 1000).toLocaleDateString("pt-BR")}
          </button>
          {partidaAberta === p.id && <RotaDaPartida partida={p.id} conta={dados.conta.id} />}
        </li>
      ))}</ul>
      <p><Link to="/ao-vivo">Nova busca</Link></p>
    </article>
  );
}
```

```tsx
// app/src/live/TimeAoVivoPage.tsx
import { Link, useParams } from "react-router";
import { resumoTimeSchema } from "./contrato";
import { ErroAoVivoView } from "./ErroAoVivo";
import { FrescorView } from "./Frescor";
import { useAoVivo } from "./useAoVivo";

export function TimeAoVivoPage() {
  const { id = "" } = useParams();
  const time = useAoVivo(`/times/${id}`, resumoTimeSchema);
  if (time.estado === "carregando" || time.estado === "parado") return <p>Buscando o time no OpenDota…</p>;
  if (time.estado === "erro") return <ErroAoVivoView erro={time.erro} contexto="time" onTentar={time.tentarDeNovo} />;
  const { dados } = time;
  return (
    <article>
      <header>{dados.time.logo && <img src={dados.time.logo} alt="" width={64} height={64} />}<h1>{dados.time.nome}</h1>
        <p>{dados.time.vitorias} vitórias · {dados.time.derrotas} derrotas</p><FrescorView frescor={dados.frescor} /></header>
      <h2>Jogadores atuais</h2>
      <ul>{dados.jogadores.map((j) => <li key={j.id}><Link to={`/ao-vivo/contas/${j.id}`}>{j.nome}</Link> · {j.partidas} partidas</li>)}</ul>
      <h2>Últimas partidas</h2>
      <ul>{dados.partidas.map((p) => (
        <li key={p.id}>{p.venceu === null ? "" : p.venceu ? "Vitória" : "Derrota"} contra {p.adversario}
          {p.campeonato && ` · ${p.campeonato}`} · {new Date(p.inicio * 1000).toLocaleDateString("pt-BR")}</li>
      ))}</ul>
    </article>
  );
}
```

`App.tsx`: rotas `ao-vivo`, `ao-vivo/contas/:id`, `ao-vivo/times/:id` com `lazy`. `Shell.tsx`: `<NavLink to="/ao-vivo">Ao vivo</NavLink>`. `SearchBox.tsx`: com 2 letras ou mais digitadas, o último item da lista é um link "Buscar ao vivo: “<texto>”" para `/ao-vivo?q=<texto>`, também quando a busca local não acha nada. `styles.css`: `.erro-ao-vivo` com borda à esquerda na cor de alerta e o botão com área de toque de 44 px; `.frescor` pequeno e discreto, `.frescor.vencido` em amarelo; `.mancha` círculo de 10 px magenta (#ff4fd8) centrado; lista `.partidas` com cada partida em um botão de linha inteira.

- [ ] **Step 4: Rodar e ver passar**: `npm test` → passam. Com `cd api && npm run dev` num terminal e `cd app && npm run dev` no outro: busque "yatoro", abra a conta, toque numa partida e veja as manchas na safe lane; busque "spirit" e abra o time.

- [ ] **Step 5: Commit**: `git add app && git commit -m "feat: add live search screens with approximate route on the map"`

---

### Task 12: Verificação da fase 2 (critérios 1 a 6, local)

**Files:**
- Create: `api/scripts/medir.ts`, `docs/superpowers/verificacao/2026-10-06-fase2.md`

- [ ] **Step 1: Medição de tempo (critério 1)**

```ts
// api/scripts/medir.ts
// Mede o tempo da busca no servidor local: 20 contas diferentes (sem cache) e as mesmas 20 de novo (com cache).
const CONTAS = process.argv.slice(2);
const BASE = "http://localhost:8787/api/v1/contas/";

async function medir(id: string): Promise<number> {
  const inicio = performance.now();
  const resposta = await fetch(`${BASE}${id}`);
  await resposta.arrayBuffer();
  return performance.now() - inicio;
}

const p95 = (tempos: number[]) => [...tempos].sort((a, b) => a - b)[Math.ceil(tempos.length * 0.95) - 1] ?? 0;

const frias: number[] = [];
for (const id of CONTAS) frias.push(await medir(id));
const quentes: number[] = [];
for (const id of CONTAS) quentes.push(await medir(id));
console.log(`sem cache p95 ${Math.round(p95(frias))} ms; com cache p95 ${Math.round(p95(quentes))} ms`);
```

Run: `cd api && npm run dev` (outro terminal) e `npx tsx scripts/medir.ts <20 ids de contas públicas>` (use contas de profissionais das partidas da fase 1: `meta.json` dos replays lista `conta` de cada jogador). Expected: sem cache p95 ≤ 4.000 ms; com cache p95 ≤ 1.000 ms. As 20 contas sem cache gastam cerca de 100 chamadas da fonte: rode uma vez só.

- [ ] **Step 2: Conferência de dados (critérios 2 e 3)**

Critério 2: abra 5 contas no app (Felipe, 2 amigos que aceitarem e 2 profissionais) e compare com `https://www.opendota.com/players/<id>`: total de partidas e vitórias, os 10 heróis, as 20 partidas (herói, resultado, KDA). Critério 3: em 10 partidas analisadas, compare `laneDasManchas` com `laneRegistrada` (as duas vêm na resposta de `/api/v1/partidas/<id>/rota`). Passa com 9 de 10 iguais. Se não passar, ajuste `LARGURA_DO_MEIO` em `rota-aproximada.ts` com as 10 partidas e registre o valor e o motivo.

- [ ] **Step 3: Erros e limites (critérios 4 e 5)**

Critério 4: cada linha da tabela de erros da spec tem teste (Tasks 6 a 11); confira a lista e anote o teste de cada uma. Critério 5 (carga):

```bash
for i in $(seq 1 200); do curl -s -o /dev/null -w "%{http_code}\n" "localhost:8787/api/v1/busca?q=teste$i"; done | sort | uniq -c
```

Expected: no máximo 20 respostas 200 ou 503 por minuto do mesmo IP e o resto 429; o log do servidor mostra no máximo 50 chamadas `operacao: "fonte"` no minuto.

- [ ] **Step 4: Segredos (critério 6)**

`cd app && npm run build` e `grep -rniE "api[_-]?key|secret|token|AKIA" app/dist api/dist` → nada. `git grep -nE "AKIA|aws_secret|api_key"` → nada.

- [ ] **Step 5: Registro e commit**

Grave em `docs/superpowers/verificacao/2026-10-06-fase2.md` os números medidos de cada critério (tempos p95, contas conferidas sem os ids de amigos, 10 partidas e quantas bateram, resultado da carga, varredura). Commit:

```bash
git add api/scripts docs/superpowers/verificacao
git commit -m "test: verify phase 2 live search criteria"
```
