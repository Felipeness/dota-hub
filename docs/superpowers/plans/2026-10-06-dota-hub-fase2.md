# Dota Hub, fase 2 (busca ao vivo no OpenDota, direto do navegador) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Digitar uma conta ou um time e ver na hora, com dados do OpenDota, estatísticas básicas, heróis, últimas partidas e a rota aproximada de uma partida no mapa, com guardado no navegador, limite da fonte respeitado pelo próprio app e erros visíveis. Tudo roda no PC do Felipe, sem servidor.

**Architecture:** Só o app muda; não existe pacote `api/` nem infraestrutura. O domínio novo `app/src/live/` tem: `fila.ts` (quando cada chamada pode sair: intervalo mínimo, teto por janela, pausa crescente depois de 429, pausa até a virada do dia), `fonte/opendota.ts` (o único lugar que chama o OpenDota: `GET` com tempo máximo, sem cookie, passa pela fila, entende 404, 429, 5xx, corpo vazio e formato com zod), `cache.ts` (guardado em memória para testes e em IndexedDB para o app), `consulta.ts` (decide entre guardado e fonte e serve o vencido quando a fonte falha), `contas.ts`, `rotaAproximada.ts` e `times.ts` (funções que montam as respostas a partir dos dados da fonte), `servicos.ts` + `ProvedorAoVivo.tsx` (fila e cache criados uma vez na raiz do app e entregues por contexto), `useAoVivo.ts` e as telas. A `MapView` ganha `manchas`. Testes usam respostas reais gravadas em `app/src/live/fonte/amostras/`.

**Tech Stack:** o do app depois da 1C (Node 22, Vite, React 19, TypeScript strict, zod 4, react-router 8, vitest + Testing Library, jsdom) mais `fake-indexeddb` só em desenvolvimento. IndexedDB e `fetch` nativos do navegador. Nenhuma dependência nova de produção.

**Spec:** `docs/superpowers/specs/2026-10-06-dota-hub-fase2-3-design.md` (fase 2; a fase 3 foi cancelada em 06/10/2026). Decisão técnica: `docs/superpowers/decisions/2026-10-06-fase2-sem-backend.md` (substitui a de AWS). Este plano substitui a versão anterior do mesmo arquivo, que tinha pacote `api/`, Lambda e DynamoDB.

**Pré-requisito:** as fases 1A, 1B e 1C mescladas no `main`. Antes da Task 1, leia o código real (`app/src/**`) e confira os nomes que este plano usa: `MapViewProps` com `trilhas` e `marcas` e o arquivo `app/src/map/trilhas.ts` (1B), o `Map3D` com a função local `noChao` (1B), a lista de rotas em `App.tsx` com `lazy` e o componente `Carregando` (1B), os itens da navegação em `Shell.tsx` (1B), a função `Resultados` em `SearchBox.tsx` (1A, mexida na 1B e na 1C), `useData`, `objetivosSchema`, `normalizar` (em `routes/filtros.ts`), `normToPercent` e as variáveis CSS de `app/src/styles/tokens.css` (1B). Se algum nome mudou, use o real e registre a troca no ledger `.superpowers/sdd/2026-10-06-dota-hub-fase2/progress.md`.

## Global Constraints

- Português do Brasil com acentos nas mensagens e no conteúdo; nomes de código em português como nas fases 1A a 1C; sem travessão.
- TypeScript strict; sem `any`, sem `!`, `as` só em fábrica de teste.
- Só `app/` muda. Nada de pacote `api/`, servidor, Terraform, AWS ou proxy. Nenhuma dependência nova de produção; a única nova de desenvolvimento é `fake-indexeddb`.
- `fonte/opendota.ts` é o único arquivo que chama `https://api.opendota.com/api`. Toda chamada passa pela fila, é `GET` com `accept: application/json`, `credentials: "omit"` e tempo máximo de 4 s (`AbortSignal.timeout`). O OpenDota é usado sem chave.
- Regras da fila (`REGRAS_OPENDOTA`): 200 ms entre o início de duas chamadas; no máximo 50 chamadas em qualquer janela de 60 s (o limite gratuito é 60 por minuto, conferido em 06/10/2026); pausa de 5, 10, 20, 40 e 60 s a cada 429 seguido, zerada pela primeira resposta que não é 429; 429 com texto de limite diário pausa até a meia-noite UTC; espera de até 15 s acontece dentro da consulta, acima disso a consulta falha na hora com o tempo que falta; no máximo 3 tentativas por consulta.
- Validade do guardado (spec): perfil e vitórias da conta 1 h; busca por nome 1 h; time e jogadores do time 1 h; partidas recentes e heróis da conta 10 min; partidas do time 10 min; partida 7 dias; lista de times e nomes de heróis 1 dia. Todo registro é apagado 7 dias depois de buscado. O vencido só é servido nos códigos `LIMITE_FONTE`, `LIMITE_DIA`, `FONTE_INDISPONIVEL` e `SEM_CONEXAO`.
- Privacidade: a busca ao vivo não carrega imagem nem script de outro endereço (sem foto de conta e sem logo de time, mesmo que a fonte mande a URL).
- Registro no console do navegador em JSON com `nivel`, `operacao`, `duracaoMs`, `codigo` e `detalhe`; formato errado da fonte é `nivel: "error"`. O `detalhe` nunca aparece na tela.
- Testes não chamam o OpenDota de verdade: usam respostas gravadas (`app/src/live/fonte/amostras/`) ou dados sintéticos.
- Branch `feat/fase-2-busca-ao-vivo` a partir do `main` com a 1C mesclada. Um commit por tarefa, `type: descrição em minúscula`, sem menção a IA.

## Review Focus

1. Limite da fonte: nenhuma chamada ao OpenDota fora da fila; 200 consultas de uma vez nunca passam de 50 chamadas por janela de 60 s nem de uma chamada a cada 200 ms (Task 3).
2. Espera crescente: 5, 10 e 20 s em três 429 seguidos, zerada depois de uma resposta boa; o 429 diário não tenta de novo e bloqueia as consultas seguintes sem chamar a fonte (Tasks 3 e 4).
3. Guardado vencido servido só quando a fonte falha, pede espera ou falta internet, nunca para conta que não existe nem para resposta fora do formato (Task 6).
4. IndexedDB bloqueado ou cheio não quebra a busca: lê `null`, grava sem erro e registra no console (Task 5).
5. Conta inexistente gasta só 1 chamada da fonte (a do perfil), não 5 (Task 7).
6. `useAoVivo`: resposta que chega depois de a chave mudar não sobrescreve a tela; exceção inesperada vira erro `INTERNO` com registro no console (Task 10).
7. Privacidade: `credentials: "omit"` no pedido e nenhuma imagem de outro endereço nas telas da busca ao vivo, só a imagem local do mapa (Tasks 4 e 12).

---

## File Structure

```
dota-hub/app/
  package.json                       (modificar) fake-indexeddb em devDependencies
  scripts/medir.ts                   mede o critério 1 no Node com o mesmo código (npx tsx)
  src/map/trilhas.ts                 (modificar) tipo Mancha
  src/map/MapView.tsx, MapFlat.tsx, Map3D.tsx, MapView.test.tsx   (modificar) manchas
  src/search/AtalhoAoVivo.tsx        link "Buscar ao vivo" na busca global
  src/search/SearchBox.tsx           (modificar) mostra o atalho
  src/App.tsx                        (modificar) ProvedorAoVivo e rotas /ao-vivo
  src/layout/Shell.tsx               (modificar) item "Ao vivo"
  src/styles.css                     (modificar) estilos da busca ao vivo e das manchas
  src/live/
    erros.ts                         ErroAoVivo, códigos, RespostaAoVivo, ok, falha, mensagemDoErro
    tipos.ts                         Frescor, Lane, Busca, ResumoConta, RotaAproximada, ResumoTime
    registro.ts                      registro JSON no console
    fila.ts                          REGRAS_OPENDOTA, proximaVez, esperaDoLimite, criarFila
    fonte/schemas.ts                 zod das respostas do OpenDota (só os campos usados)
    fonte/amostras/*.json            respostas reais gravadas
    fonte/opendota.ts                criarFonte
    cache.ts                         Cache, cacheEmMemoria, cacheIndexedDb
    consulta.ts                      criarConsulta, juntarFrescor
    contas.ts                        validades, lerId, nomeDaMedalha, montarResumo, resumoDaConta, buscar
    rotaAproximada.ts                manchas e lane principal pelo lane_pos
    times.ts                         resumoDoTime
    servicos.ts                      criarServicos, contexto, useServicosAoVivo, useEstadoDaFila
    ProvedorAoVivo.tsx               cria os serviços uma vez
    useAoVivo.ts                     estado parado/carregando/ok/erro com "tentar de novo"
    useSegundosAte.ts                contagem regressiva
    formato.ts                       textos de lane, resultado, porcentagem, data e hora
    AvisoDaFonte.tsx, ErroAoVivo.tsx, Frescor.tsx
    AoVivoLayout.tsx, AoVivoPage.tsx, ContaPage.tsx, RotaDaPartida.tsx, TimeAoVivoPage.tsx
    teste/gravados.ts                só para testes: amostras, fonte gravada, serviços gravados
```

---

### Task 1: Erros, tipos e registro da busca ao vivo

**Files:**
- Create: `app/src/live/erros.ts`, `app/src/live/erros.test.ts`, `app/src/live/tipos.ts`, `app/src/live/registro.ts`
- Modify: `app/src/map/trilhas.ts` (acrescentar o tipo `Mancha`)

**Interfaces:**
- Produces: `CODIGOS`, `type CodigoAoVivo`, `type ErroAoVivo = { codigo; tenteEmS: number | null; detalhe? }`, `type RespostaAoVivo<T> = { ok: true; dados: T } | { ok: false; erro: ErroAoVivo }`, `ok(dados)`, `falha(erro)`, `erroAoVivo(codigo, tenteEmS?, detalhe?)`, `type ContextoDoErro = "conta" | "time" | "partida"`, `mensagemDoErro(erro, contexto?)`; tipos `Frescor`, `Lane`, `ContaEncontrada`, `TimeEncontrado`, `Busca`, `PartidaDaConta`, `ResumoConta`, `RotaAproximada`, `ResumoTime`; `type Registro`, `type Registrar`, `registrarNoConsole`; `type Mancha = { x; y; peso }` em `map/trilhas.ts`.

- [ ] **Step 1: Teste que falha**

```ts
// app/src/live/erros.test.ts
import { erroAoVivo, falha, mensagemDoErro, ok, type ContextoDoErro, type ErroAoVivo } from "./erros";

type Caso = { erro: Pick<ErroAoVivo, "codigo" | "tenteEmS">; contexto?: ContextoDoErro; texto: string };

it.each<Caso>([
  { erro: { codigo: "ENTRADA_INVALIDA", tenteEmS: null }, texto: "Digite pelo menos 2 letras ou o número da conta." },
  { erro: { codigo: "NAO_ENCONTRADO", tenteEmS: null }, contexto: "conta", texto: "Conta não encontrada. Tente buscar pelo nome." },
  { erro: { codigo: "NAO_ENCONTRADO", tenteEmS: null }, contexto: "time", texto: "Time não encontrado." },
  { erro: { codigo: "NAO_ENCONTRADO", tenteEmS: null }, contexto: "partida", texto: "Esta conta não aparece nessa partida." },
  { erro: { codigo: "LIMITE_FONTE", tenteEmS: 12 }, texto: "A busca ao vivo atingiu o limite da fonte. Volta a funcionar em 12 segundos." },
  { erro: { codigo: "LIMITE_FONTE", tenteEmS: 0 }, texto: "A busca ao vivo atingiu o limite da fonte. Já pode tentar de novo." },
  { erro: { codigo: "LIMITE_DIA", tenteEmS: 43_200 }, texto: "A busca ao vivo atingiu o limite do dia da fonte. Volta a funcionar em cerca de 12 h." },
  { erro: { codigo: "FONTE_INDISPONIVEL", tenteEmS: null }, texto: "A fonte de dados não respondeu. Tente de novo em alguns minutos." },
  { erro: { codigo: "FONTE_FORMATO", tenteEmS: null }, texto: "A fonte respondeu algo inesperado. Tente de novo mais tarde." },
  { erro: { codigo: "SEM_CONEXAO", tenteEmS: null }, texto: "Sem conexão." },
  { erro: { codigo: "INTERNO", tenteEmS: null }, texto: "Algo deu errado na busca ao vivo. Tente de novo." },
])("mensagem de $erro.codigo ($contexto)", ({ erro, contexto, texto }) => {
  expect(mensagemDoErro(erro, contexto)).toBe(texto);
});

it("erro só leva detalhe quando existe", () => {
  expect(erroAoVivo("NAO_ENCONTRADO")).toEqual({ codigo: "NAO_ENCONTRADO", tenteEmS: null });
  expect(erroAoVivo("FONTE_FORMATO", null, "win: esperado número")).toEqual({ codigo: "FONTE_FORMATO", tenteEmS: null, detalhe: "win: esperado número" });
});

it("resposta tem os dois lados", () => {
  expect(ok(1)).toEqual({ ok: true, dados: 1 });
  expect(falha(erroAoVivo("SEM_CONEXAO"))).toEqual({ ok: false, erro: { codigo: "SEM_CONEXAO", tenteEmS: null } });
});
```

- [ ] **Step 2: Rodar e ver falhar**

Run: `cd app && npx vitest run src/live/erros.test.ts`
Expected: FAIL (módulo `./erros` não existe).

- [ ] **Step 3: Implementação**

```ts
// app/src/live/erros.ts
export const CODIGOS = [
  "ENTRADA_INVALIDA", "NAO_ENCONTRADO", "LIMITE_FONTE", "LIMITE_DIA",
  "FONTE_INDISPONIVEL", "FONTE_FORMATO", "SEM_CONEXAO", "INTERNO",
] as const;
export type CodigoAoVivo = (typeof CODIGOS)[number];

/** `detalhe` serve só para o registro no console; a tela nunca mostra. */
export type ErroAoVivo = { readonly codigo: CodigoAoVivo; readonly tenteEmS: number | null; readonly detalhe?: string };
export type RespostaAoVivo<T> = { readonly ok: true; readonly dados: T } | { readonly ok: false; readonly erro: ErroAoVivo };

export const ok = <T>(dados: T): RespostaAoVivo<T> => ({ ok: true, dados });
export const falha = (erro: ErroAoVivo): RespostaAoVivo<never> => ({ ok: false, erro });

export function erroAoVivo(codigo: CodigoAoVivo, tenteEmS: number | null = null, detalhe?: string): ErroAoVivo {
  return detalhe === undefined ? { codigo, tenteEmS } : { codigo, tenteEmS, detalhe };
}

export type ContextoDoErro = "conta" | "time" | "partida";

const NAO_ENCONTRADO: Record<ContextoDoErro, string> = {
  conta: "Conta não encontrada. Tente buscar pelo nome.",
  time: "Time não encontrado.",
  partida: "Esta conta não aparece nessa partida.",
};

const SEGUNDOS_PADRAO = 60;
const horas = (segundos: number) => Math.max(1, Math.ceil(segundos / 3_600));

const MENSAGENS: Record<CodigoAoVivo, (tenteEmS: number | null) => string> = {
  ENTRADA_INVALIDA: () => "Digite pelo menos 2 letras ou o número da conta.",
  NAO_ENCONTRADO: () => "Não encontrado.",
  LIMITE_FONTE: (s) => (s === 0
    ? "A busca ao vivo atingiu o limite da fonte. Já pode tentar de novo."
    : `A busca ao vivo atingiu o limite da fonte. Volta a funcionar em ${s ?? SEGUNDOS_PADRAO} segundos.`),
  LIMITE_DIA: (s) => `A busca ao vivo atingiu o limite do dia da fonte. Volta a funcionar em cerca de ${horas(s ?? 3_600)} h.`,
  FONTE_INDISPONIVEL: () => "A fonte de dados não respondeu. Tente de novo em alguns minutos.",
  FONTE_FORMATO: () => "A fonte respondeu algo inesperado. Tente de novo mais tarde.",
  SEM_CONEXAO: () => "Sem conexão.",
  INTERNO: () => "Algo deu errado na busca ao vivo. Tente de novo.",
};

export function mensagemDoErro(erro: Pick<ErroAoVivo, "codigo" | "tenteEmS">, contexto?: ContextoDoErro): string {
  if (erro.codigo === "NAO_ENCONTRADO" && contexto) return NAO_ENCONTRADO[contexto];
  return MENSAGENS[erro.codigo](erro.tenteEmS);
}
```

Acrescente no fim de `app/src/map/trilhas.ts`:

```ts
/** Ponto da rota aproximada da busca ao vivo; peso de 0 a 1 (1 = onde o jogador mais ficou). */
export type Mancha = Readonly<{ x: number; y: number; peso: number }>;
```

```ts
// app/src/live/tipos.ts
import type { Mancha } from "../map/trilhas";

export type Frescor = Readonly<{ buscadoEm: number; vencido: boolean }>;
export type Lane = "safe" | "mid" | "off" | "selva";

export type ContaEncontrada = Readonly<{ id: number; nome: string; ultimaPartida: string | null }>;
export type TimeEncontrado = Readonly<{ id: number; nome: string; vitorias: number; derrotas: number }>;
export type Busca = Readonly<{ contas: readonly ContaEncontrada[]; times: readonly TimeEncontrado[]; frescor: Frescor }>;

export type PartidaDaConta = Readonly<{
  id: string; heroi: string; venceu: boolean | null; abates: number; mortes: number; assistencias: number;
  duracaoS: number; inicio: number; lane: Lane | null; analisada: boolean;
}>;
type Placar = Readonly<{ partidas: number; vitorias: number }>;
export type ResumoConta = Readonly<{
  conta: Readonly<{ id: number; nome: string; medalha: string | null }>;
  totais: Placar;
  ultimas: Placar;
  herois: readonly Readonly<{ heroi: string; partidas: number; vitorias: number }>[];
  partidas: readonly PartidaDaConta[];
  temDadosPublicos: boolean;
  frescor: Frescor;
}>;

export type RotaAproximada = Readonly<{
  partida: string; conta: number; analisada: boolean; manchas: readonly Mancha[];
  laneDasManchas: Lane | null; laneRegistrada: Lane | null; frescor: Frescor;
}>;

export type PartidaDoTime = Readonly<{
  id: string; venceu: boolean | null; adversario: string; campeonato: string | null; inicio: number; duracaoS: number;
}>;
export type ResumoTime = Readonly<{
  time: TimeEncontrado;
  jogadores: readonly Readonly<{ id: number; nome: string; partidas: number; vitorias: number }>[];
  partidas: readonly PartidaDoTime[];
  frescor: Frescor;
}>;
```

```ts
// app/src/live/registro.ts
export type Registro = Readonly<{
  nivel: "info" | "warn" | "error";
  operacao: string;
  duracaoMs?: number;
  codigo?: string | null;
  detalhe?: string;
}>;
export type Registrar = (registro: Registro) => void;

const METODO = { info: "debug", warn: "warn", error: "error" } as const;

export const registrarNoConsole: Registrar = (registro) => {
  console[METODO[registro.nivel]](JSON.stringify({ momento: new Date().toISOString(), ...registro }));
};
```

- [ ] **Step 4: Rodar e ver passar**: `npx vitest run src/live/erros.test.ts` → 13 passed; `npx tsc -b` → sem erro.
- [ ] **Step 5: Commit**: `git add app/src/live app/src/map/trilhas.ts && git commit -m "feat: add live search errors, types and console log"`

---

### Task 2: Respostas gravadas e schemas do OpenDota

**Files:**
- Create: `app/src/live/fonte/schemas.ts`, `app/src/live/fonte/amostras/*.json`, `app/src/live/fonte/amostras.test.ts`, `app/src/live/teste/gravados.ts`

**Interfaces:**
- Produces: schemas `jogadorFonte`, `vitoriasFonte`, `heroisDaContaFonte`, `partidasRecentesFonte`, `buscaFonte`, `partidaFonte`, `timeFonte`, `timesFonte`, `timeOuNadaFonte`, `jogadoresDoTimeFonte`, `partidasDoTimeFonte`, `nomesDeHeroisFonte`; tipos `PartidaRecenteFonte`, `JogadorDaPartidaFonte`, `TimeFonte`; em `teste/gravados.ts`: `YATORO = 321580662`, `SPIRIT = 7119388`, `PARTIDA = 9028005974`, `ROTAS_GRAVADAS` (caminho da fonte para nome da amostra), `amostra(nome): unknown`.

- [ ] **Step 1: Gravar as respostas reais**

Grave uma resposta de cada rota usada (contas públicas de profissionais, nada de amigos):

```bash
cd app/src/live/fonte && mkdir -p amostras && cd amostras
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
node -e "const fs=require('fs');const p=JSON.parse(fs.readFileSync('partida.json','utf8'));fs.writeFileSync('partida.json',JSON.stringify({match_id:p.match_id,players:p.players.map(({account_id,player_slot,hero_id,lane_pos,lane_role})=>({account_id,player_slot,hero_id,lane_pos,lane_role}))}))"
ls -la
```

(321580662 é o Yatoro, 7119388 é a Team Spirit, 9028005974 é uma partida dele lida na fase 1.) Confira: `partidas-recentes.json` com 20 partidas, `herois-da-conta.json` com 10 heróis ou mais e `partida.json` com `lane_pos` em pelo menos um jogador. Se faltar, troque por outra conta ou partida pública de profissional, atualize as constantes de `teste/gravados.ts` e anote no ledger. Em 06/10/2026 a fonte respondeu `404` com `{"error":"Not Found"}` para conta inexistente e `200` com corpo vazio para `/teams/1`; os schemas e o cliente (Task 4) já tratam os dois.

- [ ] **Step 2: Teste que falha**

```ts
// app/src/live/teste/gravados.ts
// Só para testes: respostas reais do OpenDota gravadas em fonte/amostras/ (Task 2).
import { readFileSync } from "node:fs";

export const YATORO = 321580662;
export const SPIRIT = 7119388;
export const PARTIDA = 9028005974;

export const ROTAS_GRAVADAS: Readonly<Record<string, string>> = {
  [`/players/${YATORO}`]: "jogador",
  [`/players/${YATORO}/wl`]: "vitorias",
  [`/players/${YATORO}/heroes`]: "herois-da-conta",
  [`/players/${YATORO}/recentMatches`]: "partidas-recentes",
  "/search?q=yatoro": "busca",
  [`/matches/${PARTIDA}`]: "partida",
  "/teams": "times",
  [`/teams/${SPIRIT}`]: "time",
  [`/teams/${SPIRIT}/players`]: "jogadores-do-time",
  [`/teams/${SPIRIT}/matches`]: "partidas-do-time",
  "/constants/heroes": "nomes-de-herois",
};

export const amostra = (nome: string): unknown => JSON.parse(readFileSync(`src/live/fonte/amostras/${nome}.json`, "utf-8"));
```

```ts
// app/src/live/fonte/amostras.test.ts
import type { z } from "zod";
import { amostra } from "../teste/gravados";
import * as s from "./schemas";

it.each<[string, z.ZodType]>([
  ["jogador", s.jogadorFonte], ["vitorias", s.vitoriasFonte], ["herois-da-conta", s.heroisDaContaFonte],
  ["partidas-recentes", s.partidasRecentesFonte], ["busca", s.buscaFonte], ["partida", s.partidaFonte],
  ["times", s.timesFonte], ["time", s.timeOuNadaFonte], ["jogadores-do-time", s.jogadoresDoTimeFonte],
  ["partidas-do-time", s.partidasDoTimeFonte], ["nomes-de-herois", s.nomesDeHeroisFonte],
])("a resposta real de %s passa no schema", (nome, schema) => {
  const analise = schema.safeParse(amostra(nome));
  expect(analise.success ? "ok" : analise.error.issues[0]).toBe("ok");
});

it.each([
  { nome: "corpo vazio", corpo: null, esperado: null },
  { nome: "objeto vazio", corpo: {}, esperado: null },
])("time inexistente ($nome) vira null", ({ corpo, esperado }) => {
  expect(s.timeOuNadaFonte.parse(corpo)).toBe(esperado);
});

it("time com campo trocado não vira 'não encontrado'", () => {
  expect(s.timeOuNadaFonte.safeParse({ team_id: "x" }).success).toBe(false);
});
```

- [ ] **Step 3: Rodar e ver falhar**: `npx vitest run src/live/fonte` → FAIL (`./schemas` não existe).

- [ ] **Step 4: Implementação**

```ts
// app/src/live/fonte/schemas.ts
// Só os campos que o app usa. URLs de avatar e logo ficam de fora de propósito (privacidade, ver a decisão técnica).
import { z } from "zod";

const texto = z.string().nullable().optional().transform((v) => v ?? null);

export const jogadorFonte = z.object({
  profile: z.object({ account_id: z.number(), personaname: texto }).nullable().optional(),
  rank_tier: z.number().nullable().optional(),
});
export const vitoriasFonte = z.object({ win: z.number(), lose: z.number() });
export const heroisDaContaFonte = z.array(z.object({ hero_id: z.coerce.number(), games: z.number(), win: z.number() }));
export const partidasRecentesFonte = z.array(z.object({
  match_id: z.number(), player_slot: z.number(), radiant_win: z.boolean().nullable(), hero_id: z.number(),
  start_time: z.number(), duration: z.number(), kills: z.number(), deaths: z.number(), assists: z.number(),
  lane_role: z.number().nullable().optional(), version: z.number().nullable().optional(),
}));
export const buscaFonte = z.array(z.object({ account_id: z.number(), personaname: texto, last_match_time: texto }));

const lanePos = z.record(z.string(), z.record(z.string(), z.number()));
export const partidaFonte = z.object({
  match_id: z.number(),
  players: z.array(z.object({
    account_id: z.number().nullable().optional(), player_slot: z.number(), hero_id: z.number(),
    lane_pos: lanePos.nullable().optional(), lane_role: z.number().nullable().optional(),
  })),
});

export const timeFonte = z.object({
  team_id: z.number(), name: texto, wins: z.number(), losses: z.number(), last_match_time: z.number().nullable().optional(),
});
export const timesFonte = z.array(timeFonte);
/** A fonte responde corpo vazio (o cliente entrega null) ou {} para time que não existe. */
export const timeOuNadaFonte = z.union([timeFonte, z.null(), z.strictObject({}).transform(() => null)]);
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

- [ ] **Step 5: Rodar e ver passar**: `npx vitest run src/live/fonte` → 14 passed. Amostra que falha mostra o primeiro campo errado: ajuste o schema ao formato real, sem afrouxar campo que o código usa, e anote no ledger.
- [ ] **Step 6: Commit**: `git add app/src/live && git commit -m "feat: add opendota schemas and recorded samples"`

---

### Task 3: Fila da fonte (intervalo, teto por minuto, espera crescente, limite do dia)

**Files:**
- Create: `app/src/live/fila.ts`, `app/src/live/fila.test.ts`

**Interfaces:**
- Produces: `type RegrasDaFila = { intervaloMinimoMs; maximoPorJanela; janelaMs; esperaMaximaMs }`; `REGRAS_OPENDOTA = { 200, 50, 60_000, 15_000 }`; `type MotivoDaPausa = "minuto" | "dia"`; `type EstadoDaFila = { pausadaAte: number; motivo: MotivoDaPausa | null }`; `type Espera = { tenteEmS: number; doDia: boolean }`; `type Relogio = { agora(): number; dormir(ms): Promise<void> }`; `relogioReal`; `proximaVez(chamadas, pausadaAte, regras): number` (pura); `esperaDoLimite(pausasSeguidas): number` (pura); `inicioDoProximoDiaUtc(agora): number` (pura); `type Fila = { aguardarVez(): Promise<Espera | null>; limitou(motivo): void; liberou(): void; estado(): EstadoDaFila; assinar(ouvinte): () => void }`; `criarFila(regras = REGRAS_OPENDOTA, relogio = relogioReal): Fila`.

- [ ] **Step 1: Testes que falham**

```ts
// app/src/live/fila.test.ts
import { REGRAS_OPENDOTA, criarFila, esperaDoLimite, inicioDoProximoDiaUtc, proximaVez, type Relogio } from "./fila";

const MEIO_DIA = Date.UTC(2026, 9, 6, 12, 0, 0);

function relogioDeTeste(inicio = MEIO_DIA): Relogio {
  let agora = inicio;
  return { agora: () => agora, dormir: async (ms) => { agora += ms; } };
}

afterEach(() => { vi.useRealTimers(); });

it.each([
  { nome: "fila vazia sai na hora", chamadas: [], pausadaAte: 0, vez: 0 },
  { nome: "espera o intervalo mínimo", chamadas: [1_000], pausadaAte: 0, vez: 1_200 },
  { nome: "pausa manda mais que o intervalo", chamadas: [1_000], pausadaAte: 9_000, vez: 9_000 },
  { nome: "janela cheia espera a mais antiga sair", chamadas: Array.from({ length: 50 }, (_, i) => 1_000 + i * 200), pausadaAte: 0, vez: 61_000 },
])("$nome", ({ chamadas, pausadaAte, vez }) => {
  expect(proximaVez(chamadas, pausadaAte, REGRAS_OPENDOTA)).toBe(vez);
});

it.each([[0, 5_000], [1, 10_000], [2, 20_000], [3, 40_000], [4, 60_000], [9, 60_000]])(
  "%i pausas seguidas: próxima espera de %i ms", (seguidas, ms) => {
    expect(esperaDoLimite(seguidas)).toBe(ms);
  },
);

it("virada do dia é a meia-noite UTC seguinte", () => {
  expect(inicioDoProximoDiaUtc(MEIO_DIA)).toBe(Date.UTC(2026, 9, 7));
});

it("a pausa por minuto cresce a cada 429 seguido e volta ao começo depois de uma resposta boa", async () => {
  const relogio = relogioDeTeste();
  const fila = criarFila(REGRAS_OPENDOTA, relogio);
  fila.limitou("minuto");
  expect(fila.estado()).toEqual({ pausadaAte: MEIO_DIA + 5_000, motivo: "minuto" });
  expect(await fila.aguardarVez()).toBeNull();
  fila.limitou("minuto");
  expect(fila.estado().pausadaAte).toBe(MEIO_DIA + 15_000);
  expect(await fila.aguardarVez()).toBeNull();
  expect(relogio.agora()).toBe(MEIO_DIA + 15_000);
  fila.liberou();
  fila.limitou("minuto");
  expect(fila.estado().pausadaAte).toBe(relogio.agora() + 5_000);
});

it("espera maior que o máximo devolve o tempo que falta, sem dormir", async () => {
  const relogio = relogioDeTeste();
  const fila = criarFila(REGRAS_OPENDOTA, relogio);
  fila.limitou("minuto");
  fila.limitou("minuto");
  fila.limitou("minuto");
  expect(await fila.aguardarVez()).toEqual({ tenteEmS: 20, doDia: false });
  expect(relogio.agora()).toBe(MEIO_DIA);
});

it("limite do dia pausa até a meia-noite UTC e diz que é do dia", async () => {
  const fila = criarFila(REGRAS_OPENDOTA, relogioDeTeste());
  fila.limitou("dia");
  expect(fila.estado()).toEqual({ pausadaAte: Date.UTC(2026, 9, 7), motivo: "dia" });
  expect(await fila.aguardarVez()).toEqual({ tenteEmS: 43_200, doDia: true });
});

it("pausa menor não encurta a que já existe", () => {
  const fila = criarFila(REGRAS_OPENDOTA, relogioDeTeste());
  fila.limitou("dia");
  fila.limitou("minuto");
  expect(fila.estado()).toEqual({ pausadaAte: Date.UTC(2026, 9, 7), motivo: "dia" });
});

it("avisa quem assina só quando a pausa muda e mantém o mesmo estado entre mudanças", () => {
  const fila = criarFila(REGRAS_OPENDOTA, relogioDeTeste());
  const ouvinte = vi.fn();
  const parar = fila.assinar(ouvinte);
  expect(fila.estado()).toBe(fila.estado());
  fila.limitou("minuto");
  expect(ouvinte).toHaveBeenCalledTimes(1);
  parar();
  fila.limitou("minuto");
  expect(ouvinte).toHaveBeenCalledTimes(1);
});

it("em sequência, nenhuma janela de 60 s passa de 50 chamadas", async () => {
  const relogio = relogioDeTeste();
  const fila = criarFila({ ...REGRAS_OPENDOTA, esperaMaximaMs: Number.POSITIVE_INFINITY }, relogio);
  const saidas: number[] = [];
  for (let i = 0; i < 120; i++) {
    expect(await fila.aguardarVez()).toBeNull();
    saidas.push(relogio.agora());
  }
  saidas.slice(50).forEach((instante, i) => expect(instante - (saidas[i] ?? 0)).toBeGreaterThanOrEqual(60_000));
});

it("200 consultas de uma vez: 50 saem com 200 ms entre elas e as outras 150 recebem o tempo de espera", async () => {
  vi.useFakeTimers({ now: MEIO_DIA });
  const fila = criarFila();
  const saidas: number[] = [];
  const pedidos = Array.from({ length: 200 }, () => fila.aguardarVez().then((espera) => {
    if (espera === null) saidas.push(Date.now());
    return espera;
  }));
  await vi.advanceTimersByTimeAsync(120_000);
  const esperas = await Promise.all(pedidos);
  expect(saidas).toHaveLength(50);
  saidas.slice(1).forEach((instante, i) => expect(instante - (saidas[i] ?? 0)).toBeGreaterThanOrEqual(200));
  const recusadas = esperas.filter((espera) => espera !== null);
  expect(recusadas).toHaveLength(150);
  expect(recusadas.every((espera) => espera.tenteEmS > 15 && !espera.doDia)).toBe(true);
});
```

- [ ] **Step 2: Rodar e ver falhar**: `npx vitest run src/live/fila.test.ts` → FAIL.

- [ ] **Step 3: Implementação**

```ts
// app/src/live/fila.ts
export type RegrasDaFila = Readonly<{
  intervaloMinimoMs: number;
  maximoPorJanela: number;
  janelaMs: number;
  /** Até quanto a consulta espera a vez em silêncio; acima disso falha na hora com o tempo que falta. */
  esperaMaximaMs: number;
}>;

/** 50 por minuto fica 10 abaixo do limite gratuito do OpenDota (60 por minuto, conferido em 06/10/2026). */
export const REGRAS_OPENDOTA: RegrasDaFila = { intervaloMinimoMs: 200, maximoPorJanela: 50, janelaMs: 60_000, esperaMaximaMs: 15_000 };

const PRIMEIRA_PAUSA_MS = 5_000;
const PAUSA_MAXIMA_MS = 60_000;
const DIA_MS = 86_400_000;

export type MotivoDaPausa = "minuto" | "dia";
export type EstadoDaFila = Readonly<{ pausadaAte: number; motivo: MotivoDaPausa | null }>;
export type Espera = Readonly<{ tenteEmS: number; doDia: boolean }>;
export type Relogio = Readonly<{ agora: () => number; dormir: (ms: number) => Promise<void> }>;

export type Fila = {
  /** Espera a vez e reserva a chamada numa operação só (separar consulta e reserva abriria corrida entre consultas). null = pode chamar. */
  aguardarVez(): Promise<Espera | null>;
  limitou(motivo: MotivoDaPausa): void;
  liberou(): void;
  estado(): EstadoDaFila;
  assinar(ouvinte: () => void): () => void;
};

export const relogioReal: Relogio = {
  agora: () => Date.now(),
  dormir: (ms) => new Promise((resolve) => setTimeout(resolve, ms)),
};

/** Quando a próxima chamada pode sair: depois da pausa, do intervalo mínimo e de uma vaga na janela. */
export function proximaVez(chamadas: readonly number[], pausadaAte: number, regras: RegrasDaFila): number {
  const ultima = chamadas.at(-1);
  const aposIntervalo = ultima === undefined ? 0 : ultima + regras.intervaloMinimoMs;
  const maisAntigaDasUltimas = chamadas.at(-regras.maximoPorJanela);
  const aposJanela = maisAntigaDasUltimas === undefined ? 0 : maisAntigaDasUltimas + regras.janelaMs;
  return Math.max(pausadaAte, aposIntervalo, aposJanela);
}

export const esperaDoLimite = (pausasSeguidas: number) => Math.min(PAUSA_MAXIMA_MS, PRIMEIRA_PAUSA_MS * 2 ** pausasSeguidas);

/** Presume que o OpenDota conta o dia em UTC; se não contar, o próximo 429 diário renova a pausa. */
export const inicioDoProximoDiaUtc = (agora: number) => (Math.floor(agora / DIA_MS) + 1) * DIA_MS;

export function criarFila(regras: RegrasDaFila = REGRAS_OPENDOTA, relogio: Relogio = relogioReal): Fila {
  let chamadas: readonly number[] = [];
  let pausasSeguidas = 0;
  let estadoAtual: EstadoDaFila = { pausadaAte: 0, motivo: null };
  const ouvintes = new Set<() => void>();

  function pausarAte(pausadaAte: number, motivo: MotivoDaPausa) {
    if (pausadaAte <= estadoAtual.pausadaAte) return;
    estadoAtual = { pausadaAte, motivo };
    ouvintes.forEach((ouvir) => ouvir());
  }

  function esperaLonga(vez: number, agora: number): Espera {
    const doDia = estadoAtual.motivo === "dia" && vez === estadoAtual.pausadaAte;
    return { tenteEmS: Math.ceil((vez - agora) / 1_000), doDia };
  }

  return {
    async aguardarVez() {
      for (;;) {
        const agora = relogio.agora();
        chamadas = chamadas.filter((instante) => instante > agora - regras.janelaMs);
        const vez = proximaVez(chamadas, estadoAtual.pausadaAte, regras);
        if (vez <= agora) {
          chamadas = [...chamadas, agora];
          return null;
        }
        if (vez - agora > regras.esperaMaximaMs) return esperaLonga(vez, agora);
        await relogio.dormir(vez - agora);
      }
    },
    limitou(motivo) {
      const agora = relogio.agora();
      if (motivo === "dia") return pausarAte(inicioDoProximoDiaUtc(agora), "dia");
      pausarAte(agora + esperaDoLimite(pausasSeguidas), "minuto");
      pausasSeguidas += 1;
    },
    liberou() {
      pausasSeguidas = 0;
    },
    estado: () => estadoAtual,
    assinar(ouvinte) {
      ouvintes.add(ouvinte);
      return () => { ouvintes.delete(ouvinte); };
    },
  };
}
```

`estado` devolve o mesmo objeto enquanto nada muda: a Task 10 usa a fila com `useSyncExternalStore`, que exige isso.

- [ ] **Step 4: Rodar e ver passar**: `npx vitest run src/live/fila.test.ts` → 18 passed.
- [ ] **Step 5: Commit**: `git add app/src/live && git commit -m "feat: add client-side opendota rate limit queue"`

---

### Task 4: Cliente do OpenDota

**Files:**
- Create: `app/src/live/fonte/opendota.ts`, `app/src/live/fonte/opendota.test.ts`

**Interfaces:**
- Consumes: `Fila`, `RespostaAoVivo`, `ok`, `falha`, `erroAoVivo`, `Registrar`, `registrarNoConsole`
- Produces: `BASE_OPENDOTA = "https://api.opendota.com/api"`; `type Fonte = <T>(caminho: string, schema: z.ZodType<T>) => Promise<RespostaAoVivo<T>>`; `criarFonte({ fila, buscar?, estaOnline?, registrar?, agora?, tempoMaximoMs? }): Fonte`.
- Comportamento: sem internet (`navigator.onLine` falso) responde `SEM_CONEXAO` sem entrar na fila; 404 `NAO_ENCONTRADO`; 429 com "day" ou "daily" no corpo pausa a fila até a virada do dia e responde `LIMITE_DIA`; outro 429 pausa a fila com espera crescente e tenta de novo, até 3 tentativas, depois `LIMITE_FONTE`; outro status não 2xx, tempo estourado ou erro de rede com internet `FONTE_INDISPONIVEL`; corpo vazio vira `null` antes do schema; corpo que não é JSON ou fora do schema `FONTE_FORMATO`. Cada consulta registra uma linha no console.

- [ ] **Step 1: Testes que falham**

```ts
// app/src/live/fonte/opendota.test.ts
import { z } from "zod";
import { REGRAS_OPENDOTA, criarFila, type Relogio } from "../fila";
import type { Registro } from "../registro";
import { BASE_OPENDOTA, criarFonte } from "./opendota";

const MEIO_DIA = Date.UTC(2026, 9, 6, 12, 0, 0);
const schema = z.object({ win: z.number() });
const resposta = (status: number, corpo: string) => new Response(corpo, { status });
const LIMITE_MINUTO = () => resposta(429, '{"error":"minute rate limit exceeded"}');

function montar(respostas: Array<Response | Error>, { online = true } = {}) {
  let agora = MEIO_DIA;
  const relogio: Relogio = { agora: () => agora, dormir: async (ms) => { agora += ms; } };
  const fila = criarFila(REGRAS_OPENDOTA, relogio);
  const pedidos: Array<{ url: string; init: RequestInit | undefined }> = [];
  const buscar: typeof fetch = async (url, init) => {
    pedidos.push({ url: String(url), init });
    const proxima = respostas.shift();
    if (proxima === undefined) throw new Error("fonte chamada mais vezes que o esperado");
    if (proxima instanceof Error) throw proxima;
    return proxima;
  };
  const registros: Registro[] = [];
  const fonte = criarFonte({ fila, buscar, estaOnline: () => online, registrar: (r) => registros.push(r), agora: () => agora });
  return { fonte, fila, pedidos, registros, decorrido: () => agora - MEIO_DIA };
}

it.each([
  { nome: "200 no formato", r: resposta(200, '{"win":3}'), esperado: { ok: true, dados: { win: 3 } } },
  { nome: "404", r: resposta(404, '{"error":"Not Found"}'), esperado: { ok: false, erro: { codigo: "NAO_ENCONTRADO", tenteEmS: null } } },
  { nome: "500", r: resposta(500, ""), esperado: { ok: false, erro: { codigo: "FONTE_INDISPONIVEL", tenteEmS: null, detalhe: "status 500" } } },
])("$nome", async ({ r, esperado }) => {
  expect(await montar([r]).fonte("/players/1/wl", schema)).toEqual(esperado);
});

it("pede GET na URL da fonte, sem cookie, com accept e tempo máximo", async () => {
  const { fonte, pedidos } = montar([resposta(200, '{"win":1}')]);
  await fonte("/players/1/wl", schema);
  expect(pedidos[0]?.url).toBe(`${BASE_OPENDOTA}/players/1/wl`);
  expect(pedidos[0]?.init).toMatchObject({ credentials: "omit", headers: { accept: "application/json" } });
  expect(pedidos[0]?.init?.signal).toBeInstanceOf(AbortSignal);
});

it("corpo vazio chega ao schema como null", async () => {
  expect(await montar([resposta(200, "")]).fonte("/teams/1", z.null())).toEqual({ ok: true, dados: null });
});

it.each([["fora do schema", '{"win":"três"}'], ["que não é JSON", "<html>"]])(
  "corpo %s vira erro de formato registrado como erro", async (_nome, corpo) => {
    const { fonte, registros } = montar([resposta(200, corpo)]);
    expect(await fonte("/x", schema)).toMatchObject({ ok: false, erro: { codigo: "FONTE_FORMATO" } });
    expect(registros[0]).toMatchObject({ nivel: "error", operacao: "fonte", codigo: "FONTE_FORMATO" });
  },
);

it("estoura o tempo máximo e vira fonte indisponível", async () => {
  const lenta: typeof fetch = (_url, init) =>
    new Promise((_resolve, rejeitar) => init?.signal?.addEventListener("abort", () => rejeitar(init.signal?.reason)));
  const fonte = criarFonte({ fila: criarFila(), buscar: lenta, estaOnline: () => true, registrar: () => {}, tempoMaximoMs: 20 });
  expect(await fonte("/x", schema)).toMatchObject({ ok: false, erro: { codigo: "FONTE_INDISPONIVEL" } });
});

it("erro de rede com internet é fonte fora do ar", async () => {
  const { fonte } = montar([new TypeError("Failed to fetch")]);
  expect(await fonte("/x", schema)).toMatchObject({ ok: false, erro: { codigo: "FONTE_INDISPONIVEL" } });
});

it("sem internet responde sem conexão e nem chama a fonte", async () => {
  const { fonte, pedidos } = montar([], { online: false });
  expect(await fonte("/x", schema)).toEqual({ ok: false, erro: { codigo: "SEM_CONEXAO", tenteEmS: null } });
  expect(pedidos).toHaveLength(0);
});

it("429 por minuto: espera 5 s, tenta de novo e devolve o dado", async () => {
  const { fonte, pedidos, decorrido } = montar([LIMITE_MINUTO(), resposta(200, '{"win":2}')]);
  expect(await fonte("/x", schema)).toEqual({ ok: true, dados: { win: 2 } });
  expect(pedidos).toHaveLength(2);
  expect(decorrido()).toBe(5_000);
});

it("três 429 seguidos: esperas de 5 e 10 s e a terceira vira limite com 20 s", async () => {
  const { fonte, pedidos, decorrido } = montar([LIMITE_MINUTO(), LIMITE_MINUTO(), LIMITE_MINUTO()]);
  expect(await fonte("/x", schema)).toEqual({ ok: false, erro: { codigo: "LIMITE_FONTE", tenteEmS: 20 } });
  expect(pedidos).toHaveLength(3);
  expect(decorrido()).toBe(15_000);
});

it("429 do dia não tenta de novo e as consultas seguintes nem chamam a fonte até a virada do dia", async () => {
  const { fonte, fila, pedidos } = montar([resposta(429, '{"error":"daily rate limit exceeded"}')]);
  expect(await fonte("/x", schema)).toEqual({ ok: false, erro: { codigo: "LIMITE_DIA", tenteEmS: 43_200 } });
  expect(fila.estado().motivo).toBe("dia");
  expect(await fonte("/y", schema)).toEqual({ ok: false, erro: { codigo: "LIMITE_DIA", tenteEmS: 43_200 } });
  expect(pedidos).toHaveLength(1);
});
```

- [ ] **Step 2: Rodar e ver falhar**: `npx vitest run src/live/fonte/opendota.test.ts` → FAIL.

- [ ] **Step 3: Implementação**

```ts
// app/src/live/fonte/opendota.ts
import type { z } from "zod";
import { erroAoVivo, falha, ok, type RespostaAoVivo } from "../erros";
import type { Fila } from "../fila";
import { registrarNoConsole, type Registrar, type Registro } from "../registro";

export const BASE_OPENDOTA = "https://api.opendota.com/api";
const TEMPO_MAXIMO_MS = 4_000;
const MAXIMO_DE_TENTATIVAS = 3;
/** Em 06/10/2026 o 429 por minuto veio com {"error":"minute rate limit exceeded"}; o do dia não foi visto, então casa "day" ou "daily". */
const LIMITE_DO_DIA = /\bday\b|daily/i;

export type Fonte = <T>(caminho: string, schema: z.ZodType<T>) => Promise<RespostaAoVivo<T>>;

type Opcoes = Readonly<{
  fila: Fila;
  buscar?: typeof fetch;
  estaOnline?: () => boolean;
  registrar?: Registrar;
  agora?: () => number;
  tempoMaximoMs?: number;
}>;

type Json = { valido: true; corpo: unknown } | { valido: false };

function lerJson(texto: string): Json {
  if (texto === "") return { valido: true, corpo: null };
  try {
    return { valido: true, corpo: JSON.parse(texto) };
  } catch {
    return { valido: false };
  }
}

async function interpretar<T>(resposta: Response, schema: z.ZodType<T>): Promise<RespostaAoVivo<T>> {
  if (resposta.status === 404) return falha(erroAoVivo("NAO_ENCONTRADO"));
  if (!resposta.ok) return falha(erroAoVivo("FONTE_INDISPONIVEL", null, `status ${resposta.status}`));
  const texto = await resposta.text().catch(() => null);
  if (texto === null) return falha(erroAoVivo("FONTE_INDISPONIVEL", null, "corpo interrompido"));
  const json = lerJson(texto);
  if (!json.valido) return falha(erroAoVivo("FONTE_FORMATO", null, "corpo não é JSON"));
  const analise = schema.safeParse(json.corpo);
  if (analise.success) return ok(analise.data);
  const problema = analise.error.issues[0];
  return falha(erroAoVivo("FONTE_FORMATO", null, problema ? `${problema.path.join(".")}: ${problema.message}` : "corpo inválido"));
}

function registroDaConsulta(caminho: string, resposta: RespostaAoVivo<unknown>, duracaoMs: number): Registro {
  if (resposta.ok) return { nivel: "info", operacao: "fonte", duracaoMs, codigo: null, detalhe: caminho };
  const { codigo, detalhe } = resposta.erro;
  return {
    nivel: codigo === "FONTE_FORMATO" ? "error" : "warn", operacao: "fonte", duracaoMs, codigo,
    detalhe: detalhe ? `${caminho}: ${detalhe}` : caminho,
  };
}

export function criarFonte({
  fila, buscar = fetch, estaOnline = () => navigator.onLine, registrar = registrarNoConsole,
  agora = Date.now, tempoMaximoMs = TEMPO_MAXIMO_MS,
}: Opcoes): Fonte {
  async function chamar(url: string): Promise<RespostaAoVivo<Response>> {
    try {
      const init: RequestInit = { signal: AbortSignal.timeout(tempoMaximoMs), credentials: "omit", headers: { accept: "application/json" } };
      return ok(await buscar(url, init));
    } catch (causa) {
      return falha(erroAoVivo(estaOnline() ? "FONTE_INDISPONIVEL" : "SEM_CONEXAO", null, `GET ${url}: ${String(causa)}`));
    }
  }

  function erroDeLimite(doDia: boolean): RespostaAoVivo<never> {
    const tenteEmS = Math.max(1, Math.ceil((fila.estado().pausadaAte - agora()) / 1_000));
    return falha(erroAoVivo(doDia ? "LIMITE_DIA" : "LIMITE_FONTE", tenteEmS));
  }

  async function pedirNaVez<T>(url: string, schema: z.ZodType<T>, tentativa: number): Promise<RespostaAoVivo<T>> {
    const espera = await fila.aguardarVez();
    if (espera) return falha(erroAoVivo(espera.doDia ? "LIMITE_DIA" : "LIMITE_FONTE", espera.tenteEmS));
    const chamada = await chamar(url);
    if (!chamada.ok) return chamada;
    if (chamada.dados.status !== 429) {
      fila.liberou();
      return interpretar(chamada.dados, schema);
    }
    const doDia = LIMITE_DO_DIA.test(await chamada.dados.text().catch(() => ""));
    fila.limitou(doDia ? "dia" : "minuto");
    if (doDia || tentativa >= MAXIMO_DE_TENTATIVAS) return erroDeLimite(doDia);
    return pedirNaVez(url, schema, tentativa + 1);
  }

  return async (caminho, schema) => {
    const inicio = agora();
    const resposta = estaOnline() ? await pedirNaVez(`${BASE_OPENDOTA}${caminho}`, schema, 1) : falha(erroAoVivo("SEM_CONEXAO"));
    registrar(registroDaConsulta(caminho, resposta, agora() - inicio));
    return resposta;
  };
}
```

- [ ] **Step 4: Rodar e ver passar**: `npx vitest run src/live/fonte` → passam (inclusive as amostras da Task 2); `npx tsc -b` → sem erro.
- [ ] **Step 5: Commit**: `git add app/src/live && git commit -m "feat: add opendota browser client with timeout and 429 backoff"`

---

### Task 5: Guardado em memória e no IndexedDB

**Files:**
- Create: `app/src/live/cache.ts`, `app/src/live/cache.test.ts`
- Modify: `app/package.json` (`fake-indexeddb` em devDependencies)

**Interfaces:**
- Consumes: `Registrar`, `registrarNoConsole`
- Produces: `GUARDA_MAXIMA_MS = 604_800_000`; `type Entrada = { valor: unknown; buscadoEm; validoAte; apagarEm }`; `type Cache = { ler(chave): Promise<Entrada | null>; gravar(chave, entrada): Promise<void> }`; `cacheEmMemoria(agora?)`; `cacheIndexedDb({ nome?, agora?, fabrica?, registrar? })`. Banco `dota-hub-ao-vivo`, versão 1, loja `respostas` com `keyPath: "chave"` e índice `apagarEm`. Ao abrir, apaga o que passou de `apagarEm`. Falha do navegador (bloqueado, sem espaço) vira `null` na leitura, gravação sem efeito e uma linha `warn` no console.

- [ ] **Step 1: Instalar a dependência de teste**

Run: `cd app && npm i -D fake-indexeddb@6`
Expected: `fake-indexeddb` em `devDependencies` de `app/package.json`.

- [ ] **Step 2: Testes que falham**

```ts
// app/src/live/cache.test.ts
import "fake-indexeddb/auto";
import type { Registro } from "./registro";
import { cacheEmMemoria, cacheIndexedDb, type Cache } from "./cache";

const entrada = (apagarEm: number) => ({ valor: { win: 3 }, buscadoEm: 1, validoAte: 2, apagarEm });
let bancosCriados = 0;
const bancoNovo = () => `teste-${(bancosCriados += 1)}`;

describe.each<[string, (agora: () => number) => Cache]>([
  ["memória", (agora) => cacheEmMemoria(agora)],
  ["IndexedDB", (agora) => cacheIndexedDb({ nome: bancoNovo(), agora, registrar: () => {} })],
])("guardado em %s", (_nome, criar) => {
  it("grava e lê de volta", async () => {
    const cache = criar(() => 10);
    await cache.gravar("/players/1/wl", entrada(100));
    expect(await cache.ler("/players/1/wl")).toMatchObject(entrada(100));
  });

  it("chave que nunca foi gravada é null", async () => {
    expect(await criar(() => 10).ler("/nada")).toBeNull();
  });

  it("passou do prazo de apagar é null", async () => {
    let agora = 10;
    const cache = criar(() => agora);
    await cache.gravar("/a", entrada(100));
    agora = 100;
    expect(await cache.ler("/a")).toBeNull();
  });
});

async function contarRegistros(nome: string): Promise<number> {
  const banco = await new Promise<IDBDatabase>((resolve, rejeitar) => {
    const pedido = indexedDB.open(nome);
    pedido.onsuccess = () => resolve(pedido.result);
    pedido.onerror = () => rejeitar(pedido.error);
  });
  return new Promise((resolve, rejeitar) => {
    const pedido = banco.transaction("respostas").objectStore("respostas").count();
    pedido.onsuccess = () => resolve(pedido.result);
    pedido.onerror = () => rejeitar(pedido.error);
  });
}

it("o guardado do IndexedDB continua lá ao abrir de novo (fechar e abrir o navegador)", async () => {
  const nome = bancoNovo();
  await cacheIndexedDb({ nome, agora: () => 10, registrar: () => {} }).gravar("/a", entrada(100));
  expect(await cacheIndexedDb({ nome, agora: () => 20, registrar: () => {} }).ler("/a")).toMatchObject(entrada(100));
});

it("ao abrir, o IndexedDB apaga o que passou do prazo", async () => {
  const nome = bancoNovo();
  await cacheIndexedDb({ nome, agora: () => 10, registrar: () => {} }).gravar("/velha", entrada(50));
  await cacheIndexedDb({ nome, agora: () => 60, registrar: () => {} }).ler("/outra");
  expect(await contarRegistros(nome)).toBe(0);
});

it("navegador bloqueando o banco: lê null, grava sem erro e registra o motivo", async () => {
  const registros: Registro[] = [];
  const cache = cacheIndexedDb({
    nome: bancoNovo(),
    fabrica: () => { throw new DOMException("bloqueado", "SecurityError"); },
    registrar: (r) => registros.push(r),
  });
  await expect(cache.gravar("/a", entrada(100))).resolves.toBeUndefined();
  expect(await cache.ler("/a")).toBeNull();
  expect(registros).toEqual([
    expect.objectContaining({ nivel: "warn", operacao: "cache:gravar" }),
    expect.objectContaining({ nivel: "warn", operacao: "cache:ler" }),
  ]);
});
```

- [ ] **Step 3: Rodar e ver falhar**: `npx vitest run src/live/cache.test.ts` → FAIL.

- [ ] **Step 4: Implementação**

```ts
// app/src/live/cache.ts
import { z } from "zod";
import { registrarNoConsole, type Registrar } from "./registro";

export const GUARDA_MAXIMA_MS = 7 * 24 * 3_600_000;
const LOJA = "respostas";
const VERSAO_DO_BANCO = 1;

export type Entrada = Readonly<{ valor: unknown; buscadoEm: number; validoAte: number; apagarEm: number }>;
export type Cache = {
  ler(chave: string): Promise<Entrada | null>;
  gravar(chave: string, entrada: Entrada): Promise<void>;
};

/** O que volta do disco pode ser de uma versão antiga do app: confere antes de usar. */
const registroSchema = z.object({ chave: z.string(), valor: z.unknown(), buscadoEm: z.number(), validoAte: z.number(), apagarEm: z.number() });

export function cacheEmMemoria(agora: () => number = Date.now): Cache {
  const entradas = new Map<string, Entrada>();
  return {
    ler: async (chave) => {
      const entrada = entradas.get(chave);
      return entrada && entrada.apagarEm > agora() ? entrada : null;
    },
    gravar: async (chave, entrada) => { entradas.set(chave, entrada); },
  };
}

function promessa<T>(pedido: IDBRequest<T>): Promise<T> {
  return new Promise((resolve, rejeitar) => {
    pedido.onsuccess = () => resolve(pedido.result);
    pedido.onerror = () => rejeitar(pedido.error);
  });
}

function abrirBanco(fabrica: IDBFactory, nome: string): Promise<IDBDatabase> {
  const pedido = fabrica.open(nome, VERSAO_DO_BANCO);
  pedido.onupgradeneeded = () => {
    pedido.result.createObjectStore(LOJA, { keyPath: "chave" }).createIndex("apagarEm", "apagarEm");
  };
  return promessa(pedido);
}

function apagarVencidos(banco: IDBDatabase, agora: number): Promise<void> {
  return new Promise((resolve, rejeitar) => {
    const transacao = banco.transaction(LOJA, "readwrite");
    const cursor = transacao.objectStore(LOJA).index("apagarEm").openCursor(IDBKeyRange.upperBound(agora));
    cursor.onsuccess = () => {
      if (!cursor.result) return;
      cursor.result.delete();
      cursor.result.continue();
    };
    transacao.oncomplete = () => resolve();
    transacao.onerror = () => rejeitar(transacao.error);
  });
}

type OpcoesIndexedDb = Readonly<{ nome?: string; agora?: () => number; fabrica?: () => IDBFactory; registrar?: Registrar }>;

export function cacheIndexedDb({
  nome = "dota-hub-ao-vivo", agora = Date.now, fabrica = () => indexedDB, registrar = registrarNoConsole,
}: OpcoesIndexedDb = {}): Cache {
  let aberto: Promise<IDBDatabase> | null = null;
  function abrir(): Promise<IDBDatabase> {
    aberto ??= abrirBanco(fabrica(), nome).then(async (banco) => {
      await apagarVencidos(banco, agora());
      return banco;
    });
    return aberto;
  }
  const avisar = (operacao: string, causa: unknown) => registrar({ nivel: "warn", operacao, detalhe: String(causa) });

  return {
    async ler(chave) {
      try {
        const banco = await abrir();
        const registro = registroSchema.safeParse(await promessa(banco.transaction(LOJA).objectStore(LOJA).get(chave)));
        return registro.success && registro.data.apagarEm > agora() ? registro.data : null;
      } catch (causa) {
        avisar("cache:ler", causa);
        return null;
      }
    },
    async gravar(chave, entrada) {
      try {
        const banco = await abrir();
        await promessa(banco.transaction(LOJA, "readwrite").objectStore(LOJA).put({ chave, ...entrada }));
      } catch (causa) {
        avisar("cache:gravar", causa);
      }
    },
  };
}
```

O `try/catch` fica só aqui porque o IndexedDB é fronteira com o navegador: modo privado, cota cheia e banco bloqueado não podem derrubar a busca, que segue sem guardado.

- [ ] **Step 5: Rodar e ver passar**: `npx vitest run src/live/cache.test.ts` → 9 passed; `npx tsc -b` → sem erro.
- [ ] **Step 6: Commit**: `git add app/package.json app/package-lock.json app/src/live && git commit -m "feat: add indexeddb cache for live search"`

---

### Task 6: Consulta (guardado, fonte e guardado vencido)

**Files:**
- Create: `app/src/live/consulta.ts`, `app/src/live/consulta.test.ts`
- Modify: `app/src/live/teste/gravados.ts` (fonte e consulta sobre as respostas gravadas)

**Interfaces:**
- Consumes: `Fonte`, `BASE_OPENDOTA`, `criarFonte`, `Cache`, `Entrada`, `GUARDA_MAXIMA_MS`, `cacheEmMemoria`, `criarFila`, `REGRAS_OPENDOTA`, `Frescor`
- Produces: `type Consultado<T> = { valor: T; frescor: Frescor }`; `type PedidoDeConsulta<T> = { caminho; schema: z.ZodType<T>; validadeS }`; `type Consultar = <T>(pedido) => Promise<RespostaAoVivo<Consultado<T>>>`; `criarConsulta({ fonte, cache, agora }): Consultar`; `juntarFrescor(...frescores): Frescor`. Em `teste/gravados.ts`: `fonteGravada(substituicoes?)`, `filaSemIntervalo()`, `consultaGravada(fila?)`.
- A chave do guardado é o caminho da consulta (`/players/7/wl`), e o valor é a resposta já validada e reduzida pelo schema.

- [ ] **Step 1: Testes que falham**

Acrescente em `app/src/live/teste/gravados.ts` (os imports vão para o topo do arquivo):

```ts
import { cacheEmMemoria } from "../cache";
import { criarConsulta, type Consultar } from "../consulta";
import { REGRAS_OPENDOTA, criarFila, type Fila } from "../fila";
import { BASE_OPENDOTA, criarFonte } from "../fonte/opendota";

/** fetch falso que responde com as amostras; `substituicoes` troca a resposta de um caminho (por exemplo, conta privada). */
export function fonteGravada(substituicoes: Readonly<Record<string, unknown>> = {}): typeof fetch {
  return async (entrada) => {
    const caminho = String(entrada).replace(BASE_OPENDOTA, "");
    if (caminho in substituicoes) return new Response(JSON.stringify(substituicoes[caminho]));
    const nome = ROTAS_GRAVADAS[caminho];
    return nome ? new Response(JSON.stringify(amostra(nome))) : new Response('{"error":"Not Found"}', { status: 404 });
  };
}

export const filaSemIntervalo = (): Fila => criarFila({ ...REGRAS_OPENDOTA, intervaloMinimoMs: 0 });

export function consultaGravada(fila: Fila = filaSemIntervalo(), substituicoes: Readonly<Record<string, unknown>> = {}): Consultar {
  const fonte = criarFonte({ fila, buscar: fonteGravada(substituicoes), estaOnline: () => true, registrar: () => {} });
  return criarConsulta({ fonte, cache: cacheEmMemoria(), agora: Date.now });
}
```

```ts
// app/src/live/consulta.test.ts
import { z } from "zod";
import { cacheEmMemoria } from "./cache";
import { criarConsulta, juntarFrescor } from "./consulta";
import { erroAoVivo, falha, ok, type CodigoAoVivo, type RespostaAoVivo } from "./erros";
import type { Fonte } from "./fonte/opendota";
import { vitoriasFonte } from "./fonte/schemas";
import { YATORO, consultaGravada } from "./teste/gravados";

const schema = z.object({ win: z.number() });
const pedido = { caminho: "/players/1/wl", schema, validadeS: 60 };
const INICIO = 1_000_000;

function montar(respostas: Array<RespostaAoVivo<unknown>>) {
  let agora = INICIO;
  const caminhos: string[] = [];
  const fonte: Fonte = async (caminho, schemaDaConsulta) => {
    caminhos.push(caminho);
    const proxima = respostas.shift();
    if (proxima === undefined) throw new Error("fonte chamada mais vezes que o esperado");
    return proxima.ok ? ok(schemaDaConsulta.parse(proxima.dados)) : proxima;
  };
  const cache = cacheEmMemoria(() => agora);
  const consultar = criarConsulta({ fonte, cache, agora: () => agora });
  return { consultar, cache, caminhos, avancar: (ms: number) => { agora += ms; } };
}

it("dentro da validade responde do guardado sem chamar a fonte", async () => {
  const { consultar, caminhos, avancar } = montar([ok({ win: 3 })]);
  expect(await consultar(pedido)).toEqual({ ok: true, dados: { valor: { win: 3 }, frescor: { buscadoEm: INICIO, vencido: false } } });
  avancar(30_000);
  expect(await consultar(pedido)).toMatchObject({ ok: true, dados: { valor: { win: 3 } } });
  expect(caminhos).toHaveLength(1);
});

it.each<CodigoAoVivo>(["LIMITE_FONTE", "LIMITE_DIA", "FONTE_INDISPONIVEL", "SEM_CONEXAO"])(
  "vencido e fonte com %s: serve o vencido marcado", async (codigo) => {
    const { consultar, avancar } = montar([ok({ win: 3 }), falha(erroAoVivo(codigo, 30))]);
    await consultar(pedido);
    avancar(120_000);
    expect(await consultar(pedido)).toEqual({ ok: true, dados: { valor: { win: 3 }, frescor: { buscadoEm: INICIO, vencido: true } } });
  },
);

it.each<CodigoAoVivo>(["NAO_ENCONTRADO", "FONTE_FORMATO"])("vencido e fonte com %s: não serve o vencido", async (codigo) => {
  const { consultar, avancar } = montar([ok({ win: 3 }), falha(erroAoVivo(codigo))]);
  await consultar(pedido);
  avancar(120_000);
  expect(await consultar(pedido)).toMatchObject({ ok: false, erro: { codigo } });
});

it("sem guardado, o erro da fonte passa direto", async () => {
  const { consultar } = montar([falha(erroAoVivo("FONTE_INDISPONIVEL"))]);
  expect(await consultar(pedido)).toMatchObject({ ok: false, erro: { codigo: "FONTE_INDISPONIVEL" } });
});

it("guardado de outra versão do app (fora do schema) é ignorado e a fonte é chamada", async () => {
  const { consultar, cache, caminhos } = montar([ok({ win: 4 })]);
  await cache.gravar(pedido.caminho, { valor: { vitorias: 4 }, buscadoEm: INICIO, validoAte: INICIO + 60_000, apagarEm: INICIO + 1e9 });
  expect(await consultar(pedido)).toMatchObject({ ok: true, dados: { valor: { win: 4 } } });
  expect(caminhos).toHaveLength(1);
});

it("juntar frescor pega o mais antigo e qualquer vencido", () => {
  expect(juntarFrescor({ buscadoEm: 5, vencido: false }, { buscadoEm: 3, vencido: true })).toEqual({ buscadoEm: 3, vencido: true });
});

it("a consulta montada sobre as respostas gravadas devolve as vitórias reais", async () => {
  const r = await consultaGravada()({ caminho: `/players/${YATORO}/wl`, schema: vitoriasFonte, validadeS: 3_600 });
  expect(r.ok && r.dados.valor.win).toBeGreaterThan(0);
});
```

- [ ] **Step 2: Rodar e ver falhar**: `npx vitest run src/live/consulta.test.ts` → FAIL.

- [ ] **Step 3: Implementação**

```ts
// app/src/live/consulta.ts
import type { z } from "zod";
import { GUARDA_MAXIMA_MS, type Cache, type Entrada } from "./cache";
import { ok, type CodigoAoVivo, type RespostaAoVivo } from "./erros";
import type { Fonte } from "./fonte/opendota";
import type { Frescor } from "./tipos";

export type Consultado<T> = Readonly<{ valor: T; frescor: Frescor }>;
export type PedidoDeConsulta<T> = Readonly<{ caminho: string; schema: z.ZodType<T>; validadeS: number }>;
export type Consultar = <T>(pedido: PedidoDeConsulta<T>) => Promise<RespostaAoVivo<Consultado<T>>>;
type Dependencias = Readonly<{ fonte: Fonte; cache: Cache; agora: () => number }>;
type Guardado<T> = Readonly<{ valor: T; buscadoEm: number; validoAte: number }>;

/** Falhas passageiras: vale mostrar o guardado antigo. Conta que sumiu ou resposta estranha, não. */
const PODE_USAR_VENCIDO: ReadonlySet<CodigoAoVivo> = new Set(["LIMITE_FONTE", "LIMITE_DIA", "FONTE_INDISPONIVEL", "SEM_CONEXAO"]);

export function juntarFrescor(...frescores: Frescor[]): Frescor {
  return { buscadoEm: Math.min(...frescores.map((f) => f.buscadoEm)), vencido: frescores.some((f) => f.vencido) };
}

function lerGuardado<T>(entrada: Entrada | null, schema: z.ZodType<T>): Guardado<T> | null {
  if (!entrada) return null;
  const analise = schema.safeParse(entrada.valor);
  return analise.success ? { valor: analise.data, buscadoEm: entrada.buscadoEm, validoAte: entrada.validoAte } : null;
}

export function criarConsulta({ fonte, cache, agora }: Dependencias): Consultar {
  return async <T>(pedido: PedidoDeConsulta<T>) => {
    const guardado = lerGuardado(await cache.ler(pedido.caminho), pedido.schema);
    if (guardado && agora() < guardado.validoAte) {
      return ok({ valor: guardado.valor, frescor: { buscadoEm: guardado.buscadoEm, vencido: false } });
    }
    const instante = agora();
    const resposta = await fonte(pedido.caminho, pedido.schema);
    if (resposta.ok) {
      await cache.gravar(pedido.caminho, {
        valor: resposta.dados, buscadoEm: instante, validoAte: instante + pedido.validadeS * 1_000, apagarEm: instante + GUARDA_MAXIMA_MS,
      });
      return ok({ valor: resposta.dados, frescor: { buscadoEm: instante, vencido: false } });
    }
    if (guardado && PODE_USAR_VENCIDO.has(resposta.erro.codigo)) {
      return ok({ valor: guardado.valor, frescor: { buscadoEm: guardado.buscadoEm, vencido: true } });
    }
    return resposta;
  };
}
```

- [ ] **Step 4: Rodar e ver passar**: `npx vitest run src/live` → passam; `npx tsc -b` → sem erro.
- [ ] **Step 5: Commit**: `git add app/src/live && git commit -m "feat: add cache-aware live query with stale fallback"`

---

### Task 7: Contas (busca por nome e resumo da conta)

**Files:**
- Create: `app/src/live/contas.ts`, `app/src/live/contas.test.ts`

**Interfaces:**
- Consumes: `Consultar`, `juntarFrescor`, schemas da fonte, `normalizar` (de `routes/filtros.ts`), tipos de `tipos.ts`
- Produces: `VALIDADE_S` (segundos por tipo de consulta); `LANE_POR_PAPEL`; `lerId(texto, maximoDeDigitos = 12): number | null`; `nomeDaMedalha(rankTier): string | null`; `venceu(partida): boolean | null`; `montarResumo(partes): ResumoConta` (pura); `resumoDaConta(consultar, id): Promise<RespostaAoVivo<ResumoConta>>`; `consultaDeBusca(texto): RespostaAoVivo<string>`; `timeEncontrado(time): TimeEncontrado`; `buscar(consultar, texto): Promise<RespostaAoVivo<Busca>>`.

- [ ] **Step 1: Testes que falham**

```ts
// app/src/live/contas.test.ts
import type { Consultar } from "./consulta";
import { buscar, consultaDeBusca, lerId, montarResumo, nomeDaMedalha, resumoDaConta, venceu } from "./contas";
import { ok } from "./erros";
import { YATORO, consultaGravada } from "./teste/gravados";

const frescor = { buscadoEm: 10, vencido: false };
const partida = (slot: number, radiantWin: boolean | null, extra = {}) => ({
  match_id: 1, player_slot: slot, radiant_win: radiantWin, hero_id: 8, start_time: 100, duration: 1800,
  kills: 5, deaths: 2, assists: 7, lane_role: 1, version: 21, ...extra,
});
const nomes = { "8": { id: 8, localized_name: "Juggernaut" }, "1": { id: 1, localized_name: "Anti-Mage" } };

it.each([
  { slot: 0, radiantWin: true, esperado: true },
  { slot: 128, radiantWin: true, esperado: false },
  { slot: 130, radiantWin: false, esperado: true },
  { slot: 0, radiantWin: null, esperado: null },
])("slot $slot com radiant_win $radiantWin venceu = $esperado", ({ slot, radiantWin, esperado }) => {
  expect(venceu(partida(slot, radiantWin))).toBe(esperado);
});

it.each([
  { rankTier: null, nome: null }, { rankTier: 11, nome: "Herald 1" }, { rankTier: 72, nome: "Ancient 2" },
  { rankTier: 80, nome: "Immortal" }, { rankTier: 95, nome: null },
])("medalha $rankTier é $nome", ({ rankTier, nome }) => {
  expect(nomeDaMedalha(rankTier)).toBe(nome);
});

it.each([
  { texto: " 321580662 ", id: 321580662 }, { texto: "abc", id: null }, { texto: "1".repeat(13), id: null }, { texto: "", id: null },
])("lerId('$texto') = $id", ({ texto, id }) => {
  expect(lerId(texto)).toBe(id);
});

it("monta o resumo com 10 heróis, nomes, medalha, lane e partidas sem análise", () => {
  const resumo = montarResumo({
    id: 7, jogador: { profile: { account_id: 7, personaname: "Ness" }, rank_tier: 72 },
    vitorias: { win: 60, lose: 40 },
    herois: Array.from({ length: 12 }, (_, i) => ({ hero_id: i + 1, games: 20 - i, win: 10 })),
    recentes: [partida(0, true), partida(129, true, { lane_role: null, version: null })],
    nomes, frescor,
  });
  expect(resumo.conta).toEqual({ id: 7, nome: "Ness", medalha: "Ancient 2" });
  expect(resumo.totais).toEqual({ partidas: 100, vitorias: 60 });
  expect(resumo.ultimas).toEqual({ partidas: 2, vitorias: 1 });
  expect(resumo.herois).toHaveLength(10);
  expect(resumo.herois[0]).toEqual({ heroi: "Anti-Mage", partidas: 20, vitorias: 10 });
  expect(resumo.partidas[0]).toMatchObject({ heroi: "Juggernaut", venceu: true, lane: "safe", analisada: true });
  expect(resumo.partidas[1]).toMatchObject({ venceu: false, lane: null, analisada: false });
  expect(resumo.temDadosPublicos).toBe(true);
});

it("conta privada (sem partidas públicas) fica sem dados públicos", () => {
  const resumo = montarResumo({
    id: 7, jogador: { profile: { account_id: 7, personaname: null }, rank_tier: null }, vitorias: { win: 0, lose: 0 },
    herois: [], recentes: [], nomes, frescor,
  });
  expect(resumo.conta.nome).toBe("Conta 7");
  expect(resumo.temDadosPublicos).toBe(false);
});

it("conta sem perfil gasta só uma consulta e devolve não encontrado", async () => {
  const caminhos: string[] = [];
  const consultar: Consultar = async ({ caminho, schema }) => {
    caminhos.push(caminho);
    return ok({ valor: schema.parse({ rank_tier: null }), frescor });
  };
  expect(await resumoDaConta(consultar, 1)).toMatchObject({ ok: false, erro: { codigo: "NAO_ENCONTRADO" } });
  expect(caminhos).toEqual(["/players/1"]);
});

it("conta que a fonte não conhece (404) devolve não encontrado", async () => {
  expect(await resumoDaConta(consultaGravada(), 4_294_967_200)).toMatchObject({ ok: false, erro: { codigo: "NAO_ENCONTRADO" } });
});

it("resumo da conta real gravada tem 10 heróis e as partidas recentes", async () => {
  const r = await resumoDaConta(consultaGravada(), YATORO);
  expect(r.ok && r.dados.herois).toHaveLength(10);
  expect(r.ok && r.dados.partidas.length).toBeGreaterThan(0);
  expect(r.ok && r.dados.temDadosPublicos).toBe(true);
});

it.each([
  { texto: "a", valida: false }, { texto: "  ", valida: false }, { texto: "x".repeat(65), valida: false }, { texto: " yatoro ", valida: true },
])("consulta '$texto' válida = $valida", ({ texto, valida }) => {
  expect(consultaDeBusca(texto).ok).toBe(valida);
});

it("busca devolve até 10 contas e os times cujo nome contém o texto, sem acento", async () => {
  const consultar: Consultar = async ({ caminho, schema }) => ok({
    valor: schema.parse(caminho.startsWith("/search")
      ? Array.from({ length: 12 }, (_, i) => ({ account_id: i, personaname: `spirit ${i}`, last_match_time: null }))
      : [{ team_id: 1, name: "Team Spírit", wins: 5, losses: 1, last_match_time: 5 }, { team_id: 2, name: "Outro", wins: 0, losses: 0, last_match_time: 9 }]),
    frescor,
  });
  const r = await buscar(consultar, "SPIRIT");
  expect(r.ok && r.dados.contas).toHaveLength(10);
  expect(r.ok && r.dados.times.map((t) => t.id)).toEqual([1]);
});

it("busca real gravada acha contas pelo nome", async () => {
  const r = await buscar(consultaGravada(), "yatoro");
  expect(r.ok && r.dados.contas.length).toBeGreaterThan(0);
});
```

- [ ] **Step 2: Rodar e ver falhar**: `npx vitest run src/live/contas.test.ts` → FAIL.

- [ ] **Step 3: Implementação**

```ts
// app/src/live/contas.ts
import type { z } from "zod";
import { normalizar } from "../routes/filtros";
import { juntarFrescor, type Consultar } from "./consulta";
import { erroAoVivo, falha, ok, type RespostaAoVivo } from "./erros";
import {
  buscaFonte, heroisDaContaFonte, jogadorFonte, nomesDeHeroisFonte, partidasRecentesFonte, timesFonte, vitoriasFonte,
  type PartidaRecenteFonte, type TimeFonte,
} from "./fonte/schemas";
import type { Busca, Frescor, Lane, PartidaDaConta, ResumoConta, TimeEncontrado } from "./tipos";

export const VALIDADE_S = {
  perfil: 3_600, busca: 3_600, time: 3_600, recentes: 600, partida: 7 * 24 * 3_600, constantes: 24 * 3_600,
} as const;
export const LANE_POR_PAPEL: Readonly<Record<number, Lane>> = { 1: "safe", 2: "mid", 3: "off", 4: "selva" };
const MEDALHAS = ["Herald", "Guardian", "Crusader", "Archon", "Legend", "Ancient", "Divine", "Immortal"] as const;
const MAXIMO_DE_HEROIS = 10;
const MAXIMO_DE_RESULTADOS = 10;
const TEXTO_MINIMO = 2;
const TEXTO_MAXIMO = 64;

type Nomes = z.infer<typeof nomesDeHeroisFonte>;
type Partes = Readonly<{
  id: number; jogador: z.infer<typeof jogadorFonte>; vitorias: z.infer<typeof vitoriasFonte>;
  herois: z.infer<typeof heroisDaContaFonte>; recentes: readonly PartidaRecenteFonte[]; nomes: Nomes; frescor: Frescor;
}>;

export function lerId(texto: string, maximoDeDigitos = 12): number | null {
  const limpo = texto.trim();
  return new RegExp(`^\\d{1,${maximoDeDigitos}}$`).test(limpo) ? Number(limpo) : null;
}

export function nomeDaMedalha(rankTier: number | null | undefined): string | null {
  if (!rankTier) return null;
  const medalha = MEDALHAS[Math.floor(rankTier / 10) - 1];
  if (!medalha) return null;
  const estrelas = rankTier % 10;
  return medalha === "Immortal" || estrelas === 0 ? medalha : `${medalha} ${estrelas}`;
}

export const venceu = (p: Pick<PartidaRecenteFonte, "player_slot" | "radiant_win">): boolean | null =>
  p.radiant_win === null ? null : (p.player_slot < 128) === p.radiant_win;

const laneDoPapel = (papel: number | null | undefined): Lane | null => (papel == null ? null : LANE_POR_PAPEL[papel] ?? null);
const nomeDoHeroi = (nomes: Nomes, id: number) => nomes[String(id)]?.localized_name ?? `Herói ${id}`;

function partidaDaConta(p: PartidaRecenteFonte, nomes: Nomes): PartidaDaConta {
  return {
    id: String(p.match_id), heroi: nomeDoHeroi(nomes, p.hero_id), venceu: venceu(p),
    abates: p.kills, mortes: p.deaths, assistencias: p.assists, duracaoS: p.duration, inicio: p.start_time,
    lane: laneDoPapel(p.lane_role), analisada: p.version != null,
  };
}

export function montarResumo({ id, jogador, vitorias, herois, recentes, nomes, frescor }: Partes): ResumoConta {
  return {
    conta: { id, nome: jogador.profile?.personaname ?? `Conta ${id}`, medalha: nomeDaMedalha(jogador.rank_tier) },
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
  consultar({ caminho: "/constants/heroes", schema: nomesDeHeroisFonte, validadeS: VALIDADE_S.constantes });

export async function resumoDaConta(consultar: Consultar, id: number): Promise<RespostaAoVivo<ResumoConta>> {
  const jogador = await consultar({ caminho: `/players/${id}`, schema: jogadorFonte, validadeS: VALIDADE_S.perfil });
  if (!jogador.ok) return jogador;
  if (!jogador.dados.valor.profile) return falha(erroAoVivo("NAO_ENCONTRADO"));
  const [vitorias, herois, recentes, nomes] = await Promise.all([
    consultar({ caminho: `/players/${id}/wl`, schema: vitoriasFonte, validadeS: VALIDADE_S.perfil }),
    consultar({ caminho: `/players/${id}/heroes`, schema: heroisDaContaFonte, validadeS: VALIDADE_S.recentes }),
    consultar({ caminho: `/players/${id}/recentMatches`, schema: partidasRecentesFonte, validadeS: VALIDADE_S.recentes }),
    consultarNomesDeHerois(consultar),
  ]);
  if (!vitorias.ok) return vitorias;
  if (!herois.ok) return herois;
  if (!recentes.ok) return recentes;
  if (!nomes.ok) return nomes;
  return ok(montarResumo({
    id, jogador: jogador.dados.valor, vitorias: vitorias.dados.valor, herois: herois.dados.valor,
    recentes: recentes.dados.valor, nomes: nomes.dados.valor,
    frescor: juntarFrescor(jogador.dados.frescor, vitorias.dados.frescor, herois.dados.frescor, recentes.dados.frescor),
  }));
}

export function consultaDeBusca(texto: string): RespostaAoVivo<string> {
  const limpo = texto.trim();
  if (limpo.length < TEXTO_MINIMO || limpo.length > TEXTO_MAXIMO) return falha(erroAoVivo("ENTRADA_INVALIDA"));
  return ok(limpo);
}

export function timeEncontrado(t: TimeFonte): TimeEncontrado {
  return { id: t.team_id, nome: t.name ?? `Time ${t.team_id}`, vitorias: t.wins, derrotas: t.losses };
}

function timesComNome(times: readonly TimeFonte[], texto: string): TimeEncontrado[] {
  const alvo = normalizar(texto);
  return times.filter((t) => t.name !== null && normalizar(t.name).includes(alvo))
    .sort((a, b) => (b.last_match_time ?? 0) - (a.last_match_time ?? 0))
    .slice(0, MAXIMO_DE_RESULTADOS).map(timeEncontrado);
}

export async function buscar(consultar: Consultar, texto: string): Promise<RespostaAoVivo<Busca>> {
  const consulta = consultaDeBusca(texto);
  if (!consulta.ok) return consulta;
  const [contas, times] = await Promise.all([
    consultar({ caminho: `/search?q=${encodeURIComponent(consulta.dados)}`, schema: buscaFonte, validadeS: VALIDADE_S.busca }),
    consultar({ caminho: "/teams", schema: timesFonte, validadeS: VALIDADE_S.constantes }),
  ]);
  if (!contas.ok) return contas;
  if (!times.ok) return times;
  return ok({
    contas: contas.dados.valor.slice(0, MAXIMO_DE_RESULTADOS).map((c) => ({
      id: c.account_id, nome: c.personaname ?? `Conta ${c.account_id}`, ultimaPartida: c.last_match_time,
    })),
    times: timesComNome(times.dados.valor, consulta.dados),
    frescor: juntarFrescor(contas.dados.frescor, times.dados.frescor),
  });
}
```

O `Promise.all` tem 4 itens fixos; a fila serializa as chamadas reais com 200 ms entre elas.

- [ ] **Step 4: Rodar e ver passar**: `npx vitest run src/live/contas.test.ts` → passam.
- [ ] **Step 5: Commit**: `git add app/src/live && git commit -m "feat: add live account search and account summary"`

---

### Task 8: Rota aproximada da partida (lane_pos)

**Files:**
- Create: `app/src/live/rotaAproximada.ts`, `app/src/live/rotaAproximada.test.ts`

**Interfaces:**
- Consumes: `Consultar`, `partidaFonte`, `LANE_POR_PAPEL`, `VALIDADE_S`, `lerId`, `Mancha`
- Produces: `celulaParaNorm(celula): number` (mesma fórmula de `dota-imortal/src/maplib.py`, `grid_to_norm(cell=True)`: `(celula + 0,5 − 57) / 142`); `manchasDaLane(lanePos): Mancha[]`; `regiaoDoPonto(ponto): "cima" | "meio" | "baixo"`; `laneDasManchas(manchas, lado): Lane | null`; `rotaDaPartida(consultar, partidaId: string, contaId: number): Promise<RespostaAoVivo<RotaAproximada>>`.
- Limite conhecido: a classificação divide o mapa pela diagonal (faixa de 0,15 em volta dela é o mid). Não separa selva de lane; tempo na base conta como mid. Serve para a lane principal dos 10 primeiros minutos, que é o que o critério 3 mede.

- [ ] **Step 1: Testes que falham**

```ts
// app/src/live/rotaAproximada.test.ts
import type { Consultar } from "./consulta";
import { ok } from "./erros";
import { partidaFonte } from "./fonte/schemas";
import { celulaParaNorm, laneDasManchas, manchasDaLane, regiaoDoPonto, rotaDaPartida } from "./rotaAproximada";
import { PARTIDA, amostra, consultaGravada } from "./teste/gravados";

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
  { lado: "radiant", x: 0.8, y: 0.18, lane: "safe" }, { lado: "dire", x: 0.8, y: 0.18, lane: "off" },
  { lado: "dire", x: 0.2, y: 0.8, lane: "safe" }, { lado: "radiant", x: 0.5, y: 0.5, lane: "mid" },
] as const)("$lado em ($x, $y) é $lane", ({ lado, x, y, lane }) => {
  expect(laneDasManchas([{ x, y, peso: 1 }], lado)).toBe(lane);
});

it("sem manchas não há lane", () => {
  expect(laneDasManchas([], "radiant")).toBeNull();
});

const frescor = { buscadoEm: 1, vencido: false };
const partida = (lanePos: unknown) => ({ match_id: 9, players: [{ account_id: 7, player_slot: 0, hero_id: 1, lane_pos: lanePos, lane_role: 1 }] });
const consultarCom = (dados: unknown): Consultar => async ({ schema }) => ok({ valor: schema.parse(dados), frescor });

it("rota da conta na partida, com a lane registrada pela fonte", async () => {
  const r = await rotaDaPartida(consultarCom(partida({ "170": { "80": 3 } })), "9", 7);
  expect(r).toMatchObject({ ok: true, dados: { partida: "9", conta: 7, analisada: true, laneDasManchas: "safe", laneRegistrada: "safe" } });
});

it("partida sem análise devolve analisada falso e sem manchas", async () => {
  const r = await rotaDaPartida(consultarCom(partida(null)), "9", 7);
  expect(r).toMatchObject({ ok: true, dados: { analisada: false, manchas: [], laneDasManchas: null } });
});

it("conta fora da partida é não encontrada", async () => {
  expect(await rotaDaPartida(consultarCom(partida(null)), "9", 8)).toMatchObject({ ok: false, erro: { codigo: "NAO_ENCONTRADO" } });
});

it("número de partida inválido nem consulta a fonte", async () => {
  const consultar = vi.fn<Consultar>();
  expect(await rotaDaPartida(consultar, "abc", 7)).toMatchObject({ ok: false, erro: { codigo: "ENTRADA_INVALIDA" } });
  expect(consultar).not.toHaveBeenCalled();
});

it("rota real gravada tem manchas dentro do mapa", async () => {
  const jogador = partidaFonte.parse(amostra("partida")).players.find((p) => p.account_id && p.lane_pos);
  const r = await rotaDaPartida(consultaGravada(), String(PARTIDA), jogador?.account_id ?? 0);
  expect(r.ok && r.dados.analisada).toBe(true);
  expect(r.ok && r.dados.manchas.every((m) => m.x >= 0 && m.x <= 1 && m.y >= 0 && m.y <= 1)).toBe(true);
});
```

- [ ] **Step 2: Rodar e ver falhar**: `npx vitest run src/live/rotaAproximada.test.ts` → FAIL.

- [ ] **Step 3: Implementação**

```ts
// app/src/live/rotaAproximada.ts
import type { Mancha } from "../map/trilhas";
import type { Consultar } from "./consulta";
import { LANE_POR_PAPEL, VALIDADE_S, lerId } from "./contas";
import { erroAoVivo, falha, ok, type RespostaAoVivo } from "./erros";
import { partidaFonte, type JogadorDaPartidaFonte } from "./fonte/schemas";
import type { Lane, RotaAproximada } from "./tipos";

const ORIGEM_DA_GRADE = 57;
const ESCALA_DA_GRADE = 142;
const LARGURA_DO_MEIO = 0.15;
const DIGITOS_DA_PARTIDA = 15;
type Regiao = "cima" | "meio" | "baixo";
type Lado = "radiant" | "dire";

const LANE_DA_REGIAO: Record<Lado, Record<Regiao, Lane>> = {
  radiant: { baixo: "safe", meio: "mid", cima: "off" },
  dire: { cima: "safe", meio: "mid", baixo: "off" },
};

const arredondar = (v: number) => Math.round(v * 1_000) / 1_000;
const limitar = (v: number) => Math.min(1, Math.max(0, v));

export const celulaParaNorm = (celula: number) => limitar((celula + 0.5 - ORIGEM_DA_GRADE) / ESCALA_DA_GRADE);

export function manchasDaLane(lanePos: Readonly<Record<string, Readonly<Record<string, number>>>>): Mancha[] {
  const brutas = Object.entries(lanePos).flatMap(([x, colunas]) =>
    Object.entries(colunas).map(([y, vezes]) => ({ x: celulaParaNorm(Number(x)), y: celulaParaNorm(Number(y)), vezes })));
  const maior = brutas.reduce((max, m) => Math.max(max, m.vezes), 1);
  return brutas.map(({ x, y, vezes }) => ({ x: arredondar(x), y: arredondar(y), peso: arredondar(vezes / maior) }));
}

export function regiaoDoPonto({ x, y }: Readonly<{ x: number; y: number }>): Regiao {
  if (Math.abs(x - y) < LARGURA_DO_MEIO) return "meio";
  return y > x ? "cima" : "baixo";
}

export function laneDasManchas(manchas: readonly Mancha[], lado: Lado): Lane | null {
  const pesos = manchas.reduce((soma, m) => {
    const regiao = regiaoDoPonto(m);
    return soma.set(regiao, (soma.get(regiao) ?? 0) + m.peso);
  }, new Map<Regiao, number>());
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

export async function rotaDaPartida(consultar: Consultar, partidaId: string, contaId: number): Promise<RespostaAoVivo<RotaAproximada>> {
  if (lerId(partidaId, DIGITOS_DA_PARTIDA) === null) return falha(erroAoVivo("ENTRADA_INVALIDA"));
  const partida = await consultar({ caminho: `/matches/${partidaId}`, schema: partidaFonte, validadeS: VALIDADE_S.partida });
  if (!partida.ok) return partida;
  const jogador = partida.dados.valor.players.find((p) => p.account_id === contaId);
  if (!jogador) return falha(erroAoVivo("NAO_ENCONTRADO"));
  return ok({ ...rotaDoJogador(jogador, partidaId, contaId), frescor: partida.dados.frescor });
}
```

- [ ] **Step 4: Rodar e ver passar**: `npx vitest run src/live/rotaAproximada.test.ts` → passam.
- [ ] **Step 5: Commit**: `git add app/src/live && git commit -m "feat: add approximate route from opendota lane positions"`

---

### Task 9: Times

**Files:**
- Create: `app/src/live/times.ts`, `app/src/live/times.test.ts`

**Interfaces:**
- Consumes: `Consultar`, `juntarFrescor`, `timeEncontrado`, `VALIDADE_S`, schemas de time
- Produces: `resumoDoTime(consultar, id): Promise<RespostaAoVivo<ResumoTime>>` (jogadores atuais e 20 últimas partidas).

- [ ] **Step 1: Testes que falham**

```ts
// app/src/live/times.test.ts
import type { Consultar } from "./consulta";
import { ok } from "./erros";
import { SPIRIT, consultaGravada } from "./teste/gravados";
import { resumoDoTime } from "./times";

const frescor = { buscadoEm: 1, vencido: false };
const respostas: Readonly<Record<string, unknown>> = {
  "/teams/5": { team_id: 5, name: "Team Spirit", wins: 10, losses: 4, last_match_time: 1 },
  "/teams/5/players": [
    { account_id: 1, name: "Yatoro", games_played: 50, wins: 30, is_current_team_member: true },
    { account_id: 2, name: "Antigo", games_played: 80, wins: 40, is_current_team_member: false },
  ],
  "/teams/5/matches": Array.from({ length: 25 }, (_, i) => ({
    match_id: i, radiant_win: true, radiant: i % 2 === 0, duration: 2000, start_time: 100 - i, league_name: "TI", opposing_team_name: null,
  })),
  "/teams/6": null,
};
const consultar: Consultar = async ({ caminho, schema }) => ok({ valor: schema.parse(respostas[caminho]), frescor });

it("time com jogadores atuais e 20 partidas, venceu pelo lado", async () => {
  const r = await resumoDoTime(consultar, 5);
  expect(r.ok && r.dados.time).toEqual({ id: 5, nome: "Team Spirit", vitorias: 10, derrotas: 4 });
  expect(r.ok && r.dados.jogadores.map((j) => j.nome)).toEqual(["Yatoro"]);
  expect(r.ok && r.dados.partidas).toHaveLength(20);
  expect(r.ok && r.dados.partidas.slice(0, 2).map((p) => p.venceu)).toEqual([true, false]);
  expect(r.ok && r.dados.partidas[0]?.adversario).toBe("adversário sem nome");
});

it("time vazio na fonte é não encontrado", async () => {
  expect(await resumoDoTime(consultar, 6)).toMatchObject({ ok: false, erro: { codigo: "NAO_ENCONTRADO" } });
});

it("time real gravado tem nome, jogadores atuais e partidas", async () => {
  const r = await resumoDoTime(consultaGravada(), SPIRIT);
  expect(r.ok && r.dados.time.nome.length).toBeGreaterThan(0);
  expect(r.ok && r.dados.jogadores.length).toBeGreaterThan(0);
  expect(r.ok && r.dados.partidas.length).toBeGreaterThan(0);
});
```

- [ ] **Step 2: Rodar e ver falhar**: `npx vitest run src/live/times.test.ts` → FAIL.

- [ ] **Step 3: Implementação**

```ts
// app/src/live/times.ts
import { juntarFrescor, type Consultar } from "./consulta";
import { VALIDADE_S, timeEncontrado } from "./contas";
import { erroAoVivo, falha, ok, type RespostaAoVivo } from "./erros";
import { jogadoresDoTimeFonte, partidasDoTimeFonte, timeOuNadaFonte } from "./fonte/schemas";
import type { ResumoTime } from "./tipos";

const MAXIMO_DE_PARTIDAS = 20;

export async function resumoDoTime(consultar: Consultar, id: number): Promise<RespostaAoVivo<ResumoTime>> {
  const time = await consultar({ caminho: `/teams/${id}`, schema: timeOuNadaFonte, validadeS: VALIDADE_S.time });
  if (!time.ok) return time;
  if (!time.dados.valor) return falha(erroAoVivo("NAO_ENCONTRADO"));
  const [jogadores, partidas] = await Promise.all([
    consultar({ caminho: `/teams/${id}/players`, schema: jogadoresDoTimeFonte, validadeS: VALIDADE_S.time }),
    consultar({ caminho: `/teams/${id}/matches`, schema: partidasDoTimeFonte, validadeS: VALIDADE_S.recentes }),
  ]);
  if (!jogadores.ok) return jogadores;
  if (!partidas.ok) return partidas;
  return ok({
    time: timeEncontrado(time.dados.valor),
    jogadores: jogadores.dados.valor.filter((j) => j.is_current_team_member === true)
      .map((j) => ({ id: j.account_id, nome: j.name ?? `Conta ${j.account_id}`, partidas: j.games_played, vitorias: j.wins })),
    partidas: partidas.dados.valor.slice(0, MAXIMO_DE_PARTIDAS).map((p) => ({
      id: String(p.match_id), venceu: p.radiant_win === null ? null : p.radiant === p.radiant_win,
      adversario: p.opposing_team_name ?? "adversário sem nome", campeonato: p.league_name,
      inicio: p.start_time, duracaoS: p.duration,
    })),
    frescor: juntarFrescor(time.dados.frescor, jogadores.dados.frescor, partidas.dados.frescor),
  });
}
```

- [ ] **Step 4: Rodar e ver passar**: `npx vitest run src/live` → passam.
- [ ] **Step 5: Commit**: `git add app/src/live && git commit -m "feat: add live team summary"`

---

### Task 10: Serviços, `useAoVivo` e os avisos na tela

**Files:**
- Create: `app/src/live/servicos.ts`, `app/src/live/ProvedorAoVivo.tsx`, `app/src/live/useAoVivo.ts`, `app/src/live/useAoVivo.test.tsx`, `app/src/live/useSegundosAte.ts`, `app/src/live/formato.ts`, `app/src/live/formato.test.ts`, `app/src/live/AvisoDaFonte.tsx`, `app/src/live/ErroAoVivo.tsx`, `app/src/live/Frescor.tsx`, `app/src/live/avisos.test.tsx`
- Modify: `app/src/live/teste/gravados.ts` (`servicosGravados`)

**Interfaces:**
- Consumes: `criarFila`, `criarFonte`, `criarConsulta`, `cacheIndexedDb`, `mensagemDoErro`, `erroAoVivo`, `registrarNoConsole`
- Produces: `type ServicosAoVivo = { consultar: Consultar; fila: Fila }`; `criarServicos()`; `ContextoAoVivo`; `useServicosAoVivo()`; `useEstadoDaFila()`; `ProvedorAoVivo({ servicos?, children })`; `type EstadoAoVivo<T>`; `useAoVivo(chave: string | null, carregar: (consultar) => Promise<RespostaAoVivo<T>>)` com `tentarDeNovo()`; `useSegundosAte(instante): number`; `hora`, `dataCurta`, `porcentagem`, `minutos`, `textoDoResultado`, `nomeDaLane`; `AvisoDaFonte()`; `ErroAoVivoView({ erro, contexto?, onTentar })`; `FrescorView({ frescor, onAtualizar })`; em `teste/gravados.ts`: `servicosGravados(substituicoes?)`.

- [ ] **Step 1: Testes que falham**

Acrescente em `app/src/live/teste/gravados.ts` (o import vai para o topo do arquivo):

```ts
import type { ServicosAoVivo } from "../servicos";

export function servicosGravados(substituicoes: Readonly<Record<string, unknown>> = {}): ServicosAoVivo {
  const fila = filaSemIntervalo();
  return { fila, consultar: consultaGravada(fila, substituicoes) };
}
```

```ts
// app/src/live/formato.test.ts
import { dataCurta, hora, minutos, nomeDaLane, porcentagem, textoDoResultado } from "./formato";

it.each([
  [nomeDaLane("safe"), "safe lane"], [nomeDaLane("off"), "offlane"], [nomeDaLane(null), "sem dado"],
  [porcentagem(1, 4), "25%"], [porcentagem(0, 0), "sem partidas"], [minutos(1_830), "30 min"],
  [textoDoResultado(true), "vitória"], [textoDoResultado(false), "derrota"], [textoDoResultado(null), "sem resultado"],
  [hora(new Date(2026, 9, 6, 14, 5).getTime()), "14:05"], [dataCurta(new Date(2026, 9, 6, 14, 5).getTime() / 1_000), "06/10/2026"],
])("%s = %s", (obtido, esperado) => {
  expect(obtido).toBe(esperado);
});
```

```tsx
// app/src/live/useAoVivo.test.tsx
import { act, renderHook, waitFor } from "@testing-library/react";
import type { ReactNode } from "react";
import { ok, type RespostaAoVivo } from "./erros";
import { ProvedorAoVivo } from "./ProvedorAoVivo";
import { servicosGravados } from "./teste/gravados";
import { useAoVivo } from "./useAoVivo";

const wrapper = ({ children }: { children: ReactNode }) => <ProvedorAoVivo servicos={servicosGravados()}>{children}</ProvedorAoVivo>;

it("carrega, mostra o resultado e carrega de novo quando pedem", async () => {
  const carregar = vi.fn(async () => ok(1));
  const { result } = renderHook(() => useAoVivo("chave", carregar), { wrapper });
  expect(result.current.estado).toBe("carregando");
  await waitFor(() => expect(result.current).toMatchObject({ estado: "ok", dados: 1 }));
  act(() => result.current.tentarDeNovo());
  await waitFor(() => expect(carregar).toHaveBeenCalledTimes(2));
});

it("sem chave fica parado e não carrega", () => {
  const carregar = vi.fn(async () => ok(1));
  const { result } = renderHook(() => useAoVivo(null, carregar), { wrapper });
  expect(result.current.estado).toBe("parado");
  expect(carregar).not.toHaveBeenCalled();
});

it("resposta da chave antiga não sobrescreve a da chave nova", async () => {
  let soltarAntiga: (valor: RespostaAoVivo<string>) => void = () => {};
  const antiga = new Promise<RespostaAoVivo<string>>((resolve) => { soltarAntiga = resolve; });
  const { result, rerender } = renderHook(
    ({ chave }) => useAoVivo(chave, async () => (chave === "a" ? antiga : ok("nova"))),
    { wrapper, initialProps: { chave: "a" } },
  );
  rerender({ chave: "b" });
  await waitFor(() => expect(result.current).toMatchObject({ estado: "ok", dados: "nova" }));
  await act(async () => { soltarAntiga(ok("antiga")); });
  expect(result.current).toMatchObject({ estado: "ok", dados: "nova" });
});

it("exceção inesperada vira erro interno e vai para o console", async () => {
  const noConsole = vi.spyOn(console, "error").mockImplementation(() => {});
  const { result } = renderHook(() => useAoVivo("x", async () => { throw new Error("bug"); }), { wrapper });
  await waitFor(() => expect(result.current).toMatchObject({ estado: "erro", erro: { codigo: "INTERNO" } }));
  expect(noConsole).toHaveBeenCalled();
  noConsole.mockRestore();
});
```

```tsx
// app/src/live/avisos.test.tsx
import { act, fireEvent, render, screen } from "@testing-library/react";
import { AvisoDaFonte } from "./AvisoDaFonte";
import { ErroAoVivoView } from "./ErroAoVivo";
import { FrescorView } from "./Frescor";
import { ProvedorAoVivo } from "./ProvedorAoVivo";
import { servicosGravados } from "./teste/gravados";

const MEIO_DIA = Date.UTC(2026, 9, 6, 12, 0, 0);
afterEach(() => { vi.useRealTimers(); });

it("aviso da fonte aparece na pausa por minuto, conta os segundos e some no fim", () => {
  vi.useFakeTimers({ now: MEIO_DIA });
  const servicos = servicosGravados();
  render(<ProvedorAoVivo servicos={servicos}><AvisoDaFonte /></ProvedorAoVivo>);
  expect(screen.queryByRole("status")).toBeNull();
  act(() => servicos.fila.limitou("minuto"));
  expect(screen.getByRole("status")).toHaveTextContent("A fonte pediu para esperar. Tentando de novo em 5 s.");
  act(() => { vi.advanceTimersByTime(2_000); });
  expect(screen.getByRole("status")).toHaveTextContent("Tentando de novo em 3 s.");
  act(() => { vi.advanceTimersByTime(3_000); });
  expect(screen.queryByRole("status")).toBeNull();
});

it("aviso da fonte no limite do dia fala em horas", () => {
  vi.useFakeTimers({ now: MEIO_DIA });
  const servicos = servicosGravados();
  render(<ProvedorAoVivo servicos={servicos}><AvisoDaFonte /></ProvedorAoVivo>);
  act(() => servicos.fila.limitou("dia"));
  expect(screen.getByRole("status")).toHaveTextContent("A fonte atingiu o limite do dia. A busca ao vivo volta em cerca de 12 h.");
});

it("erro com espera conta os segundos e só libera o botão no fim", () => {
  vi.useFakeTimers({ now: MEIO_DIA });
  const onTentar = vi.fn();
  render(<ErroAoVivoView erro={{ codigo: "LIMITE_FONTE", tenteEmS: 2 }} onTentar={onTentar} />);
  expect(screen.getByRole("alert")).toHaveTextContent("Volta a funcionar em 2 segundos.");
  expect(screen.getByRole("button", { name: "Tentar de novo" })).toBeDisabled();
  act(() => { vi.advanceTimersByTime(2_000); });
  expect(screen.getByRole("button", { name: "Tentar de novo" })).toBeEnabled();
  fireEvent.click(screen.getByRole("button", { name: "Tentar de novo" }));
  expect(onTentar).toHaveBeenCalledTimes(1);
});

it("erro sem espera libera o botão na hora e usa o contexto", () => {
  render(<ErroAoVivoView erro={{ codigo: "NAO_ENCONTRADO", tenteEmS: null }} contexto="time" onTentar={() => {}} />);
  expect(screen.getByRole("alert")).toHaveTextContent("Time não encontrado.");
  expect(screen.getByRole("button", { name: "Tentar de novo" })).toBeEnabled();
});

it("dado novo mostra a hora da busca", () => {
  render(<FrescorView frescor={{ buscadoEm: new Date(2026, 9, 6, 14, 5).getTime(), vencido: false }} onAtualizar={() => {}} />);
  expect(screen.getByText("Dados de 14:05.")).toBeInTheDocument();
  expect(screen.queryByRole("button", { name: "Atualizar" })).toBeNull();
});

it("dado vencido avisa que a fonte não respondeu e oferece atualizar", () => {
  const onAtualizar = vi.fn();
  render(<FrescorView frescor={{ buscadoEm: new Date(2026, 9, 6, 14, 5).getTime(), vencido: true }} onAtualizar={onAtualizar} />);
  expect(screen.getByRole("status")).toHaveTextContent("A fonte não respondeu; mostrando dados de 14:05.");
  fireEvent.click(screen.getByRole("button", { name: "Atualizar" }));
  expect(onAtualizar).toHaveBeenCalledTimes(1);
});
```

- [ ] **Step 2: Rodar e ver falhar**: `npx vitest run src/live` → FAIL nos arquivos novos.

- [ ] **Step 3: Implementação**

```ts
// app/src/live/servicos.ts
import { createContext, useContext, useSyncExternalStore } from "react";
import { cacheIndexedDb } from "./cache";
import { criarConsulta, type Consultar } from "./consulta";
import { criarFila, type EstadoDaFila, type Fila } from "./fila";
import { criarFonte } from "./fonte/opendota";

export type ServicosAoVivo = Readonly<{ consultar: Consultar; fila: Fila }>;

/** Uma fila por aba: o limite do OpenDota é por endereço de internet, e o app é usado numa aba só. */
export function criarServicos(): ServicosAoVivo {
  const fila = criarFila();
  const consultar = criarConsulta({ fonte: criarFonte({ fila }), cache: cacheIndexedDb(), agora: Date.now });
  return { consultar, fila };
}

export const ContextoAoVivo = createContext<ServicosAoVivo | null>(null);

export function useServicosAoVivo(): ServicosAoVivo {
  const servicos = useContext(ContextoAoVivo);
  if (!servicos) throw new Error("useServicosAoVivo fora do ProvedorAoVivo");
  return servicos;
}

export function useEstadoDaFila(): EstadoDaFila {
  const { fila } = useServicosAoVivo();
  return useSyncExternalStore(fila.assinar, fila.estado);
}
```

```tsx
// app/src/live/ProvedorAoVivo.tsx
import { useState, type ReactNode } from "react";
import { ContextoAoVivo, criarServicos, type ServicosAoVivo } from "./servicos";

/** Cria a fila e o guardado uma vez; o IndexedDB só abre na primeira consulta. Testes passam `servicos` prontos. */
export function ProvedorAoVivo({ servicos, children }: { servicos?: ServicosAoVivo; children: ReactNode }) {
  const [valor] = useState(() => servicos ?? criarServicos());
  return <ContextoAoVivo value={valor}>{children}</ContextoAoVivo>;
}
```

```ts
// app/src/live/useAoVivo.ts
import { useEffect, useEffectEvent, useState } from "react";
import type { Consultar } from "./consulta";
import { erroAoVivo, type ErroAoVivo, type RespostaAoVivo } from "./erros";
import { registrarNoConsole } from "./registro";
import { useServicosAoVivo } from "./servicos";

export type EstadoAoVivo<T> =
  | { readonly estado: "parado" }
  | { readonly estado: "carregando" }
  | { readonly estado: "ok"; readonly dados: T }
  | { readonly estado: "erro"; readonly erro: ErroAoVivo };

type Carregar<T> = (consultar: Consultar) => Promise<RespostaAoVivo<T>>;

/** `chave` identifica a consulta (null = nada a buscar); `carregar` pode mudar a cada render sem disparar nova busca. */
export function useAoVivo<T>(chave: string | null, carregar: Carregar<T>): EstadoAoVivo<T> & { tentarDeNovo: () => void } {
  const { consultar } = useServicosAoVivo();
  const [estado, setEstado] = useState<EstadoAoVivo<T>>({ estado: "parado" });
  const [tentativa, setTentativa] = useState(0);
  const executar = useEffectEvent(() => carregar(consultar));

  useEffect(() => {
    if (chave === null) return;
    let vivo = true;
    setEstado({ estado: "carregando" });
    executar()
      .then((resposta) => {
        if (vivo) setEstado(resposta.ok ? { estado: "ok", dados: resposta.dados } : { estado: "erro", erro: resposta.erro });
      })
      .catch((causa: unknown) => {
        registrarNoConsole({ nivel: "error", operacao: "busca-ao-vivo", codigo: "INTERNO", detalhe: String(causa) });
        if (vivo) setEstado({ estado: "erro", erro: erroAoVivo("INTERNO") });
      });
    return () => { vivo = false; };
  }, [chave, tentativa]);

  const tentarDeNovo = () => setTentativa((n) => n + 1);
  return chave === null ? { estado: "parado", tentarDeNovo } : { ...estado, tentarDeNovo };
}
```

```ts
// app/src/live/useSegundosAte.ts
import { useEffect, useState } from "react";

/** Segundos que faltam até `instante` (ms desde a época), atualizado a cada segundo; 0 quando passou. */
export function useSegundosAte(instante: number): number {
  const [tique, setTique] = useState(0);
  const faltam = Math.max(0, Math.ceil((instante - Date.now()) / 1_000));
  useEffect(() => {
    if (faltam <= 0) return;
    const relogio = setTimeout(() => setTique((n) => n + 1), 1_000);
    return () => clearTimeout(relogio);
  }, [faltam, tique]);
  return faltam;
}
```

```ts
// app/src/live/formato.ts
import type { Lane } from "./tipos";

const NOME_DA_LANE: Record<Lane, string> = { safe: "safe lane", mid: "mid", off: "offlane", selva: "selva" };

export const nomeDaLane = (lane: Lane | null) => (lane ? NOME_DA_LANE[lane] : "sem dado");
export const porcentagem = (vitorias: number, partidas: number) =>
  (partidas ? `${Math.round((100 * vitorias) / partidas)}%` : "sem partidas");
export const minutos = (segundos: number) => `${Math.floor(segundos / 60)} min`;
export const textoDoResultado = (venceu: boolean | null) => {
  if (venceu === null) return "sem resultado";
  return venceu ? "vitória" : "derrota";
};
export const hora = (ms: number) => new Date(ms).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
export const dataCurta = (segundos: number) => new Date(segundos * 1_000).toLocaleDateString("pt-BR");
```

```tsx
// app/src/live/AvisoDaFonte.tsx
import { useEstadoDaFila } from "./servicos";
import { useSegundosAte } from "./useSegundosAte";

export function AvisoDaFonte() {
  const { pausadaAte, motivo } = useEstadoDaFila();
  const faltam = useSegundosAte(pausadaAte);
  if (faltam <= 0 || motivo === null) return null;
  const texto = motivo === "dia"
    ? `A fonte atingiu o limite do dia. A busca ao vivo volta em cerca de ${Math.ceil(faltam / 3_600)} h.`
    : `A fonte pediu para esperar. Tentando de novo em ${faltam} s.`;
  return <p role="status" className="aviso-da-fonte">{texto}</p>;
}
```

```tsx
// app/src/live/ErroAoVivo.tsx
import { useState } from "react";
import { mensagemDoErro, type ContextoDoErro, type ErroAoVivo } from "./erros";
import { useSegundosAte } from "./useSegundosAte";

type Props = { erro: Pick<ErroAoVivo, "codigo" | "tenteEmS">; contexto?: ContextoDoErro; onTentar: () => void };

export function ErroAoVivoView({ erro, contexto, onTentar }: Props) {
  const [liberaEm] = useState(() => Date.now() + (erro.tenteEmS ?? 0) * 1_000);
  const faltam = useSegundosAte(liberaEm);
  const tenteEmS = erro.tenteEmS === null ? null : faltam;
  return (
    <div className="erro-ao-vivo">
      <p role="alert">{mensagemDoErro({ codigo: erro.codigo, tenteEmS }, contexto)}</p>
      <button type="button" onClick={onTentar} disabled={faltam > 0}>Tentar de novo</button>
    </div>
  );
}
```

```tsx
// app/src/live/Frescor.tsx
import { hora } from "./formato";
import type { Frescor } from "./tipos";

export function FrescorView({ frescor, onAtualizar }: { frescor: Frescor; onAtualizar: () => void }) {
  if (!frescor.vencido) return <p className="frescor">Dados de {hora(frescor.buscadoEm)}.</p>;
  return (
    <p className="frescor vencido" role="status">
      A fonte não respondeu; mostrando dados de {hora(frescor.buscadoEm)}.{" "}
      <button type="button" onClick={onAtualizar}>Atualizar</button>
    </p>
  );
}
```

- [ ] **Step 4: Rodar e ver passar**: `npx vitest run src/live` → passam; `npx tsc -b && npm run lint` → sem erro.
- [ ] **Step 5: Commit**: `git add app/src/live && git commit -m "feat: add live search services, hook and notices"`

---

### Task 11: Manchas da rota aproximada no mapa

**Files:**
- Modify: `app/src/map/trilhas.ts`, `app/src/map/MapView.tsx`, `app/src/map/MapFlat.tsx`, `app/src/map/Map3D.tsx`, `app/src/map/MapView.test.tsx`

**Interfaces:**
- Consumes: `Mancha` (Task 1), `normToPercent`, `noChao` do `Map3D` (1B)
- Produces: `opacidadeDaMancha(peso): number` em `trilhas.ts`; `MapViewProps.manchas?: readonly Mancha[]`, desenhadas no mapa plano (`.mancha` dentro de `.manchas`, rótulo "Rota aproximada") e no 3D (disco no chão, opacidade pelo peso). Toda chamada existente continua compilando.

- [ ] **Step 1: Teste que falha**

Acrescente em `app/src/map/MapView.test.tsx`:

```tsx
it("mapa plano desenha as manchas da rota aproximada com opacidade pelo peso", () => {
  const { container } = render(
    <MapView objetivos={[]} manchas={[{ x: 0.2, y: 0.2, peso: 1 }, { x: 0.3, y: 0.2, peso: 0.5 }]} onSelecionar={() => {}} forcarPlano />,
  );
  const manchas = container.querySelectorAll<HTMLElement>(".mancha");
  expect(manchas).toHaveLength(2);
  expect(manchas[1]?.style.opacity).toBe("0.6");
  expect(screen.getByLabelText("Rota aproximada")).toBeInTheDocument();
});

it("sem manchas não desenha a camada", () => {
  const { container } = render(<MapView objetivos={[]} onSelecionar={() => {}} forcarPlano />);
  expect(container.querySelector(".manchas")).toBeNull();
});
```

- [ ] **Step 2: Rodar e ver falhar**: `npx vitest run src/map/MapView.test.tsx` → FAIL (`manchas` não existe nas props).

- [ ] **Step 3: Implementação**

`MapView.tsx`: importe `Mancha` junto com `Marca` e `Trilha` (`import type { Mancha, Marca, Trilha } from "./trilhas"`) e acrescente a prop:

```ts
  manchas?: readonly Mancha[];
```

`MapFlat.tsx`: acrescente `manchas = []` na desestruturação das props e, depois das marcas, antes do `</div>` final:

```tsx
      {manchas.length > 0 && (
        <div className="manchas" aria-label="Rota aproximada">
          {manchas.map((m) => (
            <span key={`${m.x}-${m.y}`} className="mancha" style={{ ...normToPercent([m.x, m.y]), opacity: opacidadeDaMancha(m.peso) }} />
          ))}
        </div>
      )}
```

com `opacidadeDaMancha` importado de `./trilhas`. Acrescente em `app/src/map/trilhas.ts`, junto do tipo `Mancha`:

```ts
/** Peso 0 ainda aparece um pouco; peso 1 fica cheio. */
export const opacidadeDaMancha = (peso: number) => Math.round((0.2 + 0.8 * peso) * 100) / 100;
```

`Map3D.tsx`: importe `opacidadeDaMancha` de `./trilhas`, acrescente `manchas = []` na desestruturação e, depois das marcas, antes do `<OrbitControls>`:

```tsx
      {manchas.map((m) => (
        <mesh key={`mancha-${m.x}-${m.y}`} position={noChao([m.x, m.y], 0.3)} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.9, 16]} />
          <meshBasicMaterial color="#ff4fd8" transparent opacity={opacidadeDaMancha(m.peso)} />
        </mesh>
      ))}
```

(`#ff4fd8` é a mesma cor da rota no 3D desde a 1A. A função fica em `trilhas.ts`, com os outros cálculos do mapa, para os dois desenhos usarem a mesma opacidade sem um componente importar o outro.)

- [ ] **Step 4: Rodar e ver passar**: `npx vitest run src/map` → passam (os testes antigos da `MapView` continuam verdes).
- [ ] **Step 5: Commit**: `git add app/src/map && git commit -m "feat: draw approximate route spots on the map"`

---

### Task 12: Telas da busca ao vivo, rotas, navegação e atalho na busca global

**Files:**
- Create: `app/src/live/AoVivoLayout.tsx`, `app/src/live/AoVivoPage.tsx`, `app/src/live/ContaPage.tsx`, `app/src/live/RotaDaPartida.tsx`, `app/src/live/TimeAoVivoPage.tsx`, `app/src/live/telas.test.tsx`, `app/src/search/AtalhoAoVivo.tsx`, `app/src/search/AtalhoAoVivo.test.tsx`
- Modify: `app/src/App.tsx`, `app/src/layout/Shell.tsx`, `app/src/search/SearchBox.tsx`, `app/src/styles.css`

**Interfaces:**
- Consumes: `useAoVivo`, `ErroAoVivoView`, `FrescorView`, `AvisoDaFonte`, `ProvedorAoVivo`, `buscar`, `resumoDaConta`, `rotaDaPartida`, `resumoDoTime`, `lerId`, funções de `formato.ts`, `MapView`, `useData`, `objetivosSchema`
- Produces: rotas `/ao-vivo` (`?q=`), `/ao-vivo/contas/:id` (`?partida=`), `/ao-vivo/times/:id`, todas `lazy` sob o `AoVivoLayout` (que mostra o `AvisoDaFonte`); item "Ao vivo" na navegação; `AtalhoAoVivo({ consulta, onIr })` na busca global; `ProvedorAoVivo` em volta do `RouterProvider`.
- Textos da spec: "Dados de <hora>."; "A fonte não respondeu; mostrando dados de <hora>."; "Esta conta não mostra partidas públicas. No Dota, ative "Expor dados públicos de partidas"."; "Esta partida não foi analisada pela fonte; a rota não está disponível."; "Rota aproximada: posições de lane dos primeiros 10 minutos."; "Nada encontrado para <texto>.". Nenhuma imagem de outro endereço nessas telas (a única `<img>` é a do mapa local, dentro da `MapView`).

- [ ] **Step 1: Testes que falham**

```tsx
// app/src/live/telas.test.tsx
import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import { AoVivoPage } from "./AoVivoPage";
import { ContaPage } from "./ContaPage";
import type { Consultar } from "./consulta";
import { ok } from "./erros";
import { jogadorFonte, partidaFonte, partidasRecentesFonte, timeFonte } from "./fonte/schemas";
import { ProvedorAoVivo } from "./ProvedorAoVivo";
import { RotaDaPartida } from "./RotaDaPartida";
import type { ServicosAoVivo } from "./servicos";
import { PARTIDA, SPIRIT, YATORO, amostra, filaSemIntervalo, servicosGravados } from "./teste/gravados";
import { TimeAoVivoPage } from "./TimeAoVivoPage";

function abrir(caminho: string, servicos: ServicosAoVivo = servicosGravados()) {
  return render(
    <ProvedorAoVivo servicos={servicos}>
      <MemoryRouter initialEntries={[caminho]}>
        <Routes>
          <Route path="/ao-vivo" element={<AoVivoPage />} />
          <Route path="/ao-vivo/contas/:id" element={<ContaPage />} />
          <Route path="/ao-vivo/times/:id" element={<TimeAoVivoPage />} />
        </Routes>
      </MemoryRouter>
    </ProvedorAoVivo>,
  );
}

const servicosCom = (consultar: Consultar): ServicosAoVivo => ({ fila: filaSemIntervalo(), consultar });
const frescor = { buscadoEm: 0, vencido: false };

it("número de conta vai direto para a conta, sem consultar a fonte na busca", async () => {
  const consultar = vi.fn<Consultar>(() => new Promise<never>(() => {}));
  abrir("/ao-vivo", servicosCom(consultar));
  fireEvent.change(screen.getByRole("searchbox"), { target: { value: ` ${YATORO} ` } });
  fireEvent.submit(screen.getByRole("search"));
  expect(await screen.findByText("Buscando a conta no OpenDota…")).toBeInTheDocument();
  expect(consultar).toHaveBeenCalledWith(expect.objectContaining({ caminho: `/players/${YATORO}` }));
  expect(consultar).not.toHaveBeenCalledWith(expect.objectContaining({ caminho: expect.stringContaining("/search") }));
});

it("texto de uma letra mostra a mensagem de entrada e não consulta", async () => {
  const consultar = vi.fn<Consultar>();
  abrir("/ao-vivo?q=a", servicosCom(consultar));
  expect(await screen.findByRole("alert")).toHaveTextContent("Digite pelo menos 2 letras ou o número da conta.");
  expect(consultar).not.toHaveBeenCalled();
});

it("busca sem resultado diz o texto buscado", async () => {
  abrir("/ao-vivo?q=zzzz", servicosCom(async ({ schema }) => ok({ valor: schema.parse([]), frescor })));
  expect(await screen.findByText("Nada encontrado para zzzz.")).toBeInTheDocument();
});

it("busca real gravada lista contas com link para a conta", async () => {
  abrir("/ao-vivo?q=yatoro");
  const contas = await screen.findByRole("list", { name: "Contas" });
  expect(within(contas).getAllByRole("link").length).toBeGreaterThan(0);
});

it("conta pública mostra nome, medalha, 10 heróis e as partidas das respostas gravadas", async () => {
  const { container } = abrir(`/ao-vivo/contas/${YATORO}`);
  const nome = jogadorFonte.parse(amostra("jogador")).profile?.personaname ?? "";
  expect(await screen.findByRole("heading", { level: 1, name: nome })).toBeInTheDocument();
  expect(within(screen.getByRole("table")).getAllByRole("row")).toHaveLength(11);
  const recentes = partidasRecentesFonte.parse(amostra("partidas-recentes"));
  expect(within(screen.getByRole("list", { name: "Últimas partidas" })).getAllByRole("listitem")).toHaveLength(recentes.length);
  expect(container.querySelector("img")).toBeNull();
});

it("conta privada mostra o perfil e o aviso no lugar das partidas", async () => {
  abrir(`/ao-vivo/contas/${YATORO}`, servicosGravados({ [`/players/${YATORO}/recentMatches`]: [] }));
  expect(await screen.findByText(/Esta conta não mostra partidas públicas\. No Dota, ative "Expor dados públicos de partidas"\./)).toBeInTheDocument();
});

it("conta que não existe sugere buscar pelo nome", async () => {
  abrir("/ao-vivo/contas/4294967200");
  expect(await screen.findByRole("alert")).toHaveTextContent("Conta não encontrada. Tente buscar pelo nome.");
});

it("time real gravado mostra nome, jogadores com link e partidas", async () => {
  abrir(`/ao-vivo/times/${SPIRIT}`);
  const nome = timeFonte.parse(amostra("time")).name ?? "";
  expect(await screen.findByRole("heading", { level: 1, name: nome })).toBeInTheDocument();
  expect(within(screen.getByRole("list", { name: "Jogadores atuais" })).getAllByRole("link").length).toBeGreaterThan(0);
});

it("time que não existe diz que não encontrou", async () => {
  abrir("/ao-vivo/times/1");
  expect(await screen.findByRole("alert")).toHaveTextContent("Time não encontrado.");
});

it("rota da partida gravada desenha manchas no mapa e mostra o aviso de aproximação", async () => {
  const jogador = partidaFonte.parse(amostra("partida")).players.find((p) => p.account_id && p.lane_pos);
  const { container } = render(
    <ProvedorAoVivo servicos={servicosGravados()}>
      <RotaDaPartida partida={String(PARTIDA)} conta={jogador?.account_id ?? 0} />
    </ProvedorAoVivo>,
  );
  expect(await screen.findByText("Rota aproximada: posições de lane dos primeiros 10 minutos.")).toBeInTheDocument();
  expect(container.querySelectorAll(".mancha").length).toBeGreaterThan(0);
});

it("partida sem análise mostra a mensagem no lugar do mapa", async () => {
  const semAnalise = { match_id: PARTIDA, players: [{ account_id: 7, player_slot: 0, hero_id: 1, lane_pos: null, lane_role: null }] };
  render(
    <ProvedorAoVivo servicos={servicosGravados({ [`/matches/${PARTIDA}`]: semAnalise })}>
      <RotaDaPartida partida={String(PARTIDA)} conta={7} />
    </ProvedorAoVivo>,
  );
  expect(await screen.findByText("Esta partida não foi analisada pela fonte; a rota não está disponível.")).toBeInTheDocument();
});
```

```tsx
// app/src/search/AtalhoAoVivo.test.tsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { AtalhoAoVivo } from "./AtalhoAoVivo";

it("com 2 letras ou mais leva para a busca ao vivo com o texto", () => {
  render(<MemoryRouter><ul><AtalhoAoVivo consulta="  Team Spirit " onIr={() => {}} /></ul></MemoryRouter>);
  expect(screen.getByRole("link", { name: "Buscar ao vivo: “Team Spirit”" })).toHaveAttribute("href", "/ao-vivo?q=Team%20Spirit");
});

it("com menos de 2 letras não aparece", () => {
  render(<MemoryRouter><ul><AtalhoAoVivo consulta="a" onIr={() => {}} /></ul></MemoryRouter>);
  expect(screen.queryByRole("link")).toBeNull();
});
```

- [ ] **Step 2: Rodar e ver falhar**: `npx vitest run src/live/telas.test.tsx src/search/AtalhoAoVivo.test.tsx` → FAIL.

- [ ] **Step 3: Implementação**

```tsx
// app/src/live/AoVivoLayout.tsx
import { Outlet } from "react-router";
import { AvisoDaFonte } from "./AvisoDaFonte";

export function AoVivoLayout() {
  return (
    <section className="ao-vivo">
      <AvisoDaFonte />
      <Outlet />
    </section>
  );
}
```

```tsx
// app/src/live/AoVivoPage.tsx
import { useState, type FormEvent } from "react";
import { Link, useNavigate, useSearchParams } from "react-router";
import { buscar, lerId } from "./contas";
import { ErroAoVivoView } from "./ErroAoVivo";
import { dataCurta } from "./formato";
import { FrescorView } from "./Frescor";
import type { Busca } from "./tipos";
import { useAoVivo } from "./useAoVivo";

export function AoVivoPage() {
  const [params, setParams] = useSearchParams();
  const navegar = useNavigate();
  const consulta = params.get("q") ?? "";
  const [texto, setTexto] = useState(consulta);
  const busca = useAoVivo(consulta ? `busca:${consulta}` : null, (consultar) => buscar(consultar, consulta));

  function enviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    const conta = lerId(texto);
    if (conta !== null) {
      navegar(`/ao-vivo/contas/${conta}`);
      return;
    }
    setParams({ q: texto.trim() });
  }

  return (
    <>
      <h1>Busca ao vivo</h1>
      <form role="search" onSubmit={enviar}>
        <input type="search" aria-label="Conta (nome ou número) ou time" value={texto} onChange={(e) => setTexto(e.target.value)} />
        <button type="submit">Buscar</button>
      </form>
      {busca.estado === "carregando" && <p>Buscando no OpenDota…</p>}
      {busca.estado === "erro" && <ErroAoVivoView erro={busca.erro} onTentar={busca.tentarDeNovo} />}
      {busca.estado === "ok" && <Resultados busca={busca.dados} consulta={consulta} onAtualizar={busca.tentarDeNovo} />}
    </>
  );
}

function Resultados({ busca, consulta, onAtualizar }: { busca: Busca; consulta: string; onAtualizar: () => void }) {
  if (busca.contas.length + busca.times.length === 0) return <p>Nada encontrado para {consulta}.</p>;
  return (
    <>
      <FrescorView frescor={busca.frescor} onAtualizar={onAtualizar} />
      {busca.contas.length > 0 && (
        <ul className="cartoes" aria-label="Contas">
          {busca.contas.map((c) => (
            <li key={c.id}>
              <Link to={`/ao-vivo/contas/${c.id}`}>
                <strong>{c.nome}</strong>
                {c.ultimaPartida && <span>última partida {dataCurta(Date.parse(c.ultimaPartida) / 1_000)}</span>}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {busca.times.length > 0 && (
        <ul className="cartoes" aria-label="Times">
          {busca.times.map((t) => (
            <li key={t.id}>
              <Link to={`/ao-vivo/times/${t.id}`}><strong>{t.nome}</strong><span>{t.vitorias} V · {t.derrotas} D</span></Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
```

```tsx
// app/src/live/RotaDaPartida.tsx
import { objetivosSchema } from "../data/schemas";
import { useData } from "../data/useData";
import { MapView } from "../map/MapView";
import { ErroAoVivoView } from "./ErroAoVivo";
import { nomeDaLane } from "./formato";
import { rotaDaPartida } from "./rotaAproximada";
import { useAoVivo } from "./useAoVivo";

export function RotaDaPartida({ partida, conta }: { partida: string; conta: number }) {
  const rota = useAoVivo(`rota:${partida}:${conta}`, (consultar) => rotaDaPartida(consultar, partida, conta));
  const objetivos = useData("/data/objetivos.json", objetivosSchema);
  if (rota.estado === "parado" || rota.estado === "carregando") return <p>Carregando a rota…</p>;
  if (rota.estado === "erro") return <ErroAoVivoView erro={rota.erro} contexto="partida" onTentar={rota.tentarDeNovo} />;
  if (!rota.dados.analisada) return <p>Esta partida não foi analisada pela fonte; a rota não está disponível.</p>;
  return (
    <section className="rota-aproximada">
      <p>
        Lane principal: <strong>{nomeDaLane(rota.dados.laneDasManchas)}</strong>
        {" · "}registrada pela fonte: {nomeDaLane(rota.dados.laneRegistrada)}
      </p>
      <MapView objetivos={objetivos.estado === "ok" ? objetivos.dados : []} manchas={rota.dados.manchas} onSelecionar={() => {}} />
      <p className="aviso">Rota aproximada: posições de lane dos primeiros 10 minutos.</p>
    </section>
  );
}
```

```tsx
// app/src/live/ContaPage.tsx
import { Link, useParams, useSearchParams } from "react-router";
import { lerId, resumoDaConta } from "./contas";
import { erroAoVivo, mensagemDoErro } from "./erros";
import { ErroAoVivoView } from "./ErroAoVivo";
import { dataCurta, minutos, nomeDaLane, porcentagem, textoDoResultado } from "./formato";
import { FrescorView } from "./Frescor";
import { RotaDaPartida } from "./RotaDaPartida";
import type { PartidaDaConta } from "./tipos";
import { useAoVivo } from "./useAoVivo";

export function ContaPage() {
  const { id = "" } = useParams();
  const conta = lerId(id);
  if (conta === null) return <p role="alert">{mensagemDoErro(erroAoVivo("ENTRADA_INVALIDA"))}</p>;
  return <ContaAoVivo id={conta} />;
}

function ContaAoVivo({ id }: { id: number }) {
  const [params, setParams] = useSearchParams();
  const partidaAberta = params.get("partida");
  const conta = useAoVivo(`conta:${id}`, (consultar) => resumoDaConta(consultar, id));
  if (conta.estado === "parado" || conta.estado === "carregando") return <p>Buscando a conta no OpenDota…</p>;
  if (conta.estado === "erro") return <ErroAoVivoView erro={conta.erro} contexto="conta" onTentar={conta.tentarDeNovo} />;
  const { dados } = conta;
  const alternar = (partida: string) => setParams(partidaAberta === partida ? {} : { partida });
  return (
    <article className="conta-ao-vivo">
      <header>
        <h1>{dados.conta.nome}</h1>
        {dados.conta.medalha && <p>Medalha: {dados.conta.medalha}</p>}
        <FrescorView frescor={dados.frescor} onAtualizar={conta.tentarDeNovo} />
      </header>
      <dl className="destaques">
        <div><dt>Partidas</dt><dd>{dados.totais.partidas.toLocaleString("pt-BR")}</dd></div>
        <div><dt>Vitórias</dt><dd>{porcentagem(dados.totais.vitorias, dados.totais.partidas)}</dd></div>
        <div><dt>Últimas {dados.ultimas.partidas}</dt><dd>{porcentagem(dados.ultimas.vitorias, dados.ultimas.partidas)}</dd></div>
      </dl>
      <h2>Heróis mais jogados</h2>
      <table>
        <thead><tr><th>Herói</th><th>Partidas</th><th>Vitórias</th></tr></thead>
        <tbody>
          {dados.herois.map((h) => (
            <tr key={h.heroi}><td>{h.heroi}</td><td>{h.partidas}</td><td>{porcentagem(h.vitorias, h.partidas)}</td></tr>
          ))}
        </tbody>
      </table>
      <h2>Últimas partidas</h2>
      {dados.temDadosPublicos
        ? <ListaDePartidas partidas={dados.partidas} aberta={partidaAberta} conta={dados.conta.id} onAlternar={alternar} />
        : <p role="status">Esta conta não mostra partidas públicas. No Dota, ative "Expor dados públicos de partidas".</p>}
      <p><Link to="/ao-vivo">Nova busca</Link></p>
    </article>
  );
}

type ListaProps = { partidas: readonly PartidaDaConta[]; aberta: string | null; conta: number; onAlternar: (partida: string) => void };

function ListaDePartidas({ partidas, aberta, conta, onAlternar }: ListaProps) {
  return (
    <ul className="partidas" aria-label="Últimas partidas">
      {partidas.map((p) => (
        <li key={p.id}>
          <button type="button" aria-expanded={aberta === p.id} onClick={() => onAlternar(p.id)}>
            <strong>{p.heroi}</strong> {textoDoResultado(p.venceu)} · {p.abates}/{p.mortes}/{p.assistencias}
            {" · "}{minutos(p.duracaoS)} · {nomeDaLane(p.lane)} · {dataCurta(p.inicio)}
          </button>
          {aberta === p.id && <RotaDaPartida partida={p.id} conta={conta} />}
        </li>
      ))}
    </ul>
  );
}
```

```tsx
// app/src/live/TimeAoVivoPage.tsx
import { Link, useParams } from "react-router";
import { lerId } from "./contas";
import { erroAoVivo, mensagemDoErro } from "./erros";
import { ErroAoVivoView } from "./ErroAoVivo";
import { dataCurta, textoDoResultado } from "./formato";
import { FrescorView } from "./Frescor";
import { resumoDoTime } from "./times";
import { useAoVivo } from "./useAoVivo";

export function TimeAoVivoPage() {
  const { id = "" } = useParams();
  const time = lerId(id);
  if (time === null) return <p role="alert">{mensagemDoErro(erroAoVivo("ENTRADA_INVALIDA"))}</p>;
  return <TimeAoVivo id={time} />;
}

function TimeAoVivo({ id }: { id: number }) {
  const time = useAoVivo(`time:${id}`, (consultar) => resumoDoTime(consultar, id));
  if (time.estado === "parado" || time.estado === "carregando") return <p>Buscando o time no OpenDota…</p>;
  if (time.estado === "erro") return <ErroAoVivoView erro={time.erro} contexto="time" onTentar={time.tentarDeNovo} />;
  const { dados } = time;
  return (
    <article>
      <header>
        <h1>{dados.time.nome}</h1>
        <p>{dados.time.vitorias} vitórias · {dados.time.derrotas} derrotas</p>
        <FrescorView frescor={dados.frescor} onAtualizar={time.tentarDeNovo} />
      </header>
      <h2>Jogadores atuais</h2>
      <ul aria-label="Jogadores atuais">
        {dados.jogadores.map((j) => <li key={j.id}><Link to={`/ao-vivo/contas/${j.id}`}>{j.nome}</Link> · {j.partidas} partidas</li>)}
      </ul>
      <h2>Últimas partidas</h2>
      <ul aria-label="Últimas partidas do time">
        {dados.partidas.map((p) => (
          <li key={p.id}>
            {textoDoResultado(p.venceu)} contra {p.adversario}{p.campeonato && ` · ${p.campeonato}`} · {dataCurta(p.inicio)}
          </li>
        ))}
      </ul>
    </article>
  );
}
```

```tsx
// app/src/search/AtalhoAoVivo.tsx
import { Link } from "react-router";

const TEXTO_MINIMO = 2;

export function AtalhoAoVivo({ consulta, onIr }: { consulta: string; onIr: () => void }) {
  const texto = consulta.trim();
  if (texto.length < TEXTO_MINIMO) return null;
  return (
    <li className="atalho-ao-vivo">
      <Link to={`/ao-vivo?q=${encodeURIComponent(texto)}`} onClick={onIr}>Buscar ao vivo: “{texto}”</Link>
    </li>
  );
}
```

`SearchBox.tsx`, na função `Resultados`: o atalho é o último item da lista e também aparece quando a busca local não acha nada. No código da 1A as duas saídas ficam assim (adapte ao formato que a 1B e a 1C deixaram, mantendo o resto igual):

```tsx
  if (achados.length === 0) {
    const parecidos = sugerir(busca, consulta);
    return (
      <>
        <p>Nada encontrado.{parecidos.length > 0 && ` Você quis dizer: ${parecidos.join(", ")}?`}</p>
        <ul><AtalhoAoVivo consulta={consulta} onIr={limpar} /></ul>
      </>
    );
  }
  return (
    <ul>
      {achados.map((a) => (
        <li key={`${a.tipo}:${a.id}`}>
          <span className="etiqueta">{ETIQUETA[a.tipo]}</span>{" "}
          <Link to={a.link} onClick={limpar}>{a.titulo}</Link>
        </li>
      ))}
      <AtalhoAoVivo consulta={consulta} onIr={limpar} />
    </ul>
  );
```

com `import { AtalhoAoVivo } from "./AtalhoAoVivo";` no topo.

`Shell.tsx`: depois do último item da navegação principal (na 1B, "Glossário"), acrescente:

```tsx
          <NavLink to="/ao-vivo">Ao vivo</NavLink>
```

`App.tsx`: importe `import { ProvedorAoVivo } from "./live/ProvedorAoVivo";`, acrescente a rota abaixo nos `children` do `Shell` (no mesmo formato das rotas `lazy` da 1B, com o `Carregando` que já existe) e troque o componente `App`:

```tsx
      {
        path: "/ao-vivo",
        hydrateFallbackElement: <Carregando />,
        lazy: async () => ({ Component: (await import("./live/AoVivoLayout")).AoVivoLayout }),
        children: [
          { index: true, lazy: async () => ({ Component: (await import("./live/AoVivoPage")).AoVivoPage }) },
          { path: "contas/:id", lazy: async () => ({ Component: (await import("./live/ContaPage")).ContaPage }) },
          { path: "times/:id", lazy: async () => ({ Component: (await import("./live/TimeAoVivoPage")).TimeAoVivoPage }) },
        ],
      },
```

```tsx
export default function App() {
  return (
    <ProvedorAoVivo>
      <RouterProvider router={router} />
    </ProvedorAoVivo>
  );
}
```

`styles.css`, no fim (variáveis da 1B, `tokens.css`):

```css
/* Busca ao vivo */
.ao-vivo { display: grid; gap: 16px; padding: 16px; max-width: 960px; margin: 0 auto; }
.ao-vivo form[role="search"] { display: flex; gap: 8px; }
.ao-vivo input[type="search"] { flex: 1; min-height: 44px; }
.cartoes { list-style: none; padding: 0; display: grid; gap: 8px; }
.cartoes a { display: flex; justify-content: space-between; gap: 12px; padding: 12px; border: 1px solid var(--cor-linha); border-radius: var(--raio); }
.aviso-da-fonte { border-left: 4px solid var(--cor-destaque); padding: 8px 12px; background: var(--cor-superficie-2); }
.erro-ao-vivo { border-left: 4px solid var(--cor-dire); padding: 8px 12px; background: var(--cor-superficie); }
.erro-ao-vivo button, .frescor button { min-height: 44px; min-width: 44px; }
.frescor { font-size: 0.85rem; color: var(--cor-texto-3); }
.frescor.vencido { color: var(--cor-destaque); }
.partidas { list-style: none; padding: 0; display: grid; gap: 4px; }
.partidas > li > button { width: 100%; min-height: 44px; text-align: left; }
.rota-aproximada .aviso { font-size: 0.85rem; color: var(--cor-texto-3); }
.manchas { position: absolute; inset: 0; pointer-events: none; }
.mancha { position: absolute; width: 10px; height: 10px; border-radius: 50%; background: #ff4fd8; transform: translate(-50%, -50%); }
.atalho-ao-vivo a { font-weight: 600; }
```

- [ ] **Step 4: Rodar e ver passar**: `npm test && npx tsc -b && npm run lint` → passam. Depois, `npm run dev` e no navegador: busque "yatoro", abra a conta, toque numa partida e veja as manchas na lane; busque "spirit" e abra o time; digite "spirit" na busca global e use "Buscar ao vivo".
- [ ] **Step 5: Commit**: `git add app && git commit -m "feat: add live search screens with approximate route on the map"`

---

### Task 13: Verificação da fase 2 (critérios 1 a 8, local)

**Files:**
- Create: `app/scripts/medir.ts`, `docs/superpowers/verificacao/2026-10-06-fase2.md`

- [ ] **Step 1: Medição de tempo (critério 1)**

```ts
// app/scripts/medir.ts
// Critério 1: tempo do resumo de conta sem guardado (20 contas, uma a cada 6 s, para não encostar no teto da fila)
// e com guardado (as mesmas 20 de novo). Roda no Node com o mesmo código do app: npx --yes tsx scripts/medir.ts <20 ids>
import { cacheEmMemoria } from "../src/live/cache";
import { criarConsulta } from "../src/live/consulta";
import { resumoDaConta } from "../src/live/contas";
import { criarFila } from "../src/live/fila";
import { criarFonte } from "../src/live/fonte/opendota";

const PAUSA_ENTRE_CONTAS_MS = 6_000;
const contas = process.argv.slice(2).map(Number);
const fonte = criarFonte({ fila: criarFila(), estaOnline: () => true, registrar: () => {} });
const consultar = criarConsulta({ fonte, cache: cacheEmMemoria(), agora: Date.now });
const dormir = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const p95 = (tempos: readonly number[]) => [...tempos].sort((a, b) => a - b)[Math.ceil(tempos.length * 0.95) - 1] ?? 0;

async function medir(id: number): Promise<number> {
  const inicio = performance.now();
  const resumo = await resumoDaConta(consultar, id);
  if (!resumo.ok) console.warn(`conta ${id}: ${resumo.erro.codigo}`);
  return performance.now() - inicio;
}

// Em sequência de propósito: a medição é de uma busca por vez, como o Felipe usa.
const semGuardado: number[] = [];
for (const id of contas) {
  semGuardado.push(await medir(id));
  await dormir(PAUSA_ENTRE_CONTAS_MS);
}
const comGuardado: number[] = [];
for (const id of contas) comGuardado.push(await medir(id));
console.log(`sem guardado p95 ${Math.round(p95(semGuardado))} ms; com guardado p95 ${Math.round(p95(comGuardado))} ms`);
```

Run: `cd app && npx --yes tsx scripts/medir.ts <20 ids de contas públicas>` (use contas de profissionais das partidas da fase 1: o `meta.json` dos replays lista a conta de cada jogador). Expected: sem guardado p95 ≤ 4.000 ms; com guardado p95 ≤ 1.000 ms. Gasta cerca de 85 chamadas da fonte: rode uma vez só. O guardado do script é em memória; no app ele é o IndexedDB, que lê em poucos ms (decisão técnica, limites).

- [ ] **Step 2: Conferência de dados (critérios 2 e 3)**

Critério 2: abra 5 contas no app (Felipe, 2 amigos que aceitarem e 2 profissionais) e compare com `https://www.opendota.com/players/<id>`: total de partidas e vitórias, os 10 heróis, as 20 partidas (herói, resultado, abates, mortes e assistências). Critério 3: em 10 partidas analisadas, compare "Lane principal" com "registrada pela fonte" na tela da rota. Passa com 9 de 10 iguais. Se não passar, ajuste `LARGURA_DO_MEIO` em `rotaAproximada.ts` com as 10 partidas e registre o valor e o motivo.

- [ ] **Step 3: Erros e limites (critérios 4, 5 e 6)**

Critério 4: confira e anote no registro o teste de cada linha da tabela de erros da spec:

| Linha da spec | Testes |
|---|---|
| Texto curto ou longo | `contas.test.ts` (consulta válida), `telas.test.tsx` (uma letra), `erros.test.ts` |
| Conta não existe | `contas.test.ts` (sem perfil e 404), `telas.test.tsx` (conta que não existe) |
| Conta privada | `contas.test.ts` (sem dados públicos), `telas.test.tsx` (conta privada) |
| Time não existe | `times.test.ts`, `telas.test.tsx`, `fonte/amostras.test.ts` (corpo vazio e `{}`) |
| Conta fora da partida | `rotaAproximada.test.ts`, `erros.test.ts` |
| Nada encontrado | `telas.test.tsx` |
| Fonte pediu para esperar | `fila.test.ts`, `fonte/opendota.test.ts` (429 e depois 200), `avisos.test.tsx` (aviso com contagem) |
| Limite depois de 3 tentativas ou teto da fila | `fonte/opendota.test.ts` (três 429), `fila.test.ts` (200 de uma vez), `avisos.test.tsx` (botão só no fim) |
| Limite do dia | `fonte/opendota.test.ts` (429 do dia), `avisos.test.tsx`, `erros.test.ts` |
| Fonte fora do ar ou lenta | `fonte/opendota.test.ts` (500, tempo, rede), `consulta.test.ts` (vencido), `avisos.test.tsx` (vencido) |
| Formato inesperado | `fonte/opendota.test.ts`, `erros.test.ts` |
| Sem internet | `fonte/opendota.test.ts` (sem conexão), `consulta.test.ts` (vencido com `SEM_CONEXAO`) |
| Guardado bloqueado | `cache.test.ts` |

Critérios 5 e 6: `npx vitest run src/live/fila.test.ts src/live/fonte/opendota.test.ts` → passam (200 de uma vez com relógio simulado; três 429 com esperas de 5, 10 e 20 s).

- [ ] **Step 4: Rede e segredos (critérios 7 e 8)**

Critério 7: com `npm run dev`, abra uma conta, feche o navegador, abra de novo e abra a mesma conta antes de 10 minutos. Na aba Rede das ferramentas do navegador, filtrando por `opendota`, nenhuma chamada nova. Critério 8: na mesma aba Rede, faça a jornada completa (busca "yatoro", conta, uma rota, busca "spirit", time) e confira que só aparecem `localhost` e `api.opendota.com` (as fontes do Google do visual da 1B não fazem parte da busca ao vivo; anote se aparecerem). Depois:

```bash
cd app && npm run build
grep -rnoE "api_key=|AKIA[0-9A-Z]{16}" dist || echo "sem chave"
grep -rhoE "https://[a-z0-9.-]+" dist/assets | sort -u
```

Expected: "sem chave"; na lista de domínios, o único chamado pelo código da busca é `api.opendota.com` (os outros são textos de bibliotecas, como `www.w3.org` e `react.dev`; anote a lista).

- [ ] **Step 5: Registro e commit**

Grave em `docs/superpowers/verificacao/2026-10-06-fase2.md` os números de cada critério (tempos p95, contas conferidas sem os ids de amigos, 10 partidas e quantas bateram, tabela do critério 4, resultado dos testes da fila, rede e varredura). Commit:

```bash
git add app/scripts docs/superpowers/verificacao
git commit -m "test: verify phase 2 live search criteria"
```
