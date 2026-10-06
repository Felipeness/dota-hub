# Dota Hub, fase 1D (correções de visual e de uso) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Corrigir os 8 problemas que o Felipe achou testando o app e os 21 defeitos da auditoria `docs/superpowers/verificacao/2026-10-06-auditoria-ux.md`: classes de CSS que colidem (logotipo sobre a navegação, cartões espremidos), mapa 3D fora de proporção, faixa quebrada na textura, tela de Rotas sem mapa à vista e com 872 itens, ficha de herói em paredão de texto, heróis e glossário sem imagem, rotas do herói poluídas e com pouca variação.

**Architecture:** Mesma divisão das fases anteriores. O `export/` ganha a textura sem borda esticada, as rotas em arquivos separados com um resumo leve (`rotas_resumo.json` e `rotas/<id>.json`, com o campo `heroi` nas rotas do PDF 05) e um módulo `retratos` (retrato de herói e ícone de item tirados do jogo instalado pelo Source 2 Viewer que a 1C já usa). No app, funções puras novas (`heroes/resumo.ts`, `variacoesDaFase` e `objetivosDosPassos` em `heroes/fases.ts`, `lugaresDoTermo` em `glossary/links.ts`), um teste que recusa classe de CSS definida em dois lugares e mudanças de layout só em `styles.css` (com tokens). Nenhuma dependência nova.

**Tech Stack:** o da 1C, sem nada novo (Python 3.13, pytest, Pillow, numpy; React 19, TypeScript strict, react-three-fiber + drei, zod 4, react-router 8, vitest + Testing Library; Source 2 Viewer CLI 20.0 já instalado em `export/ferramentas/vrf/`). A verificação visual usa o Playwright MCP, não uma dependência do projeto.

**Fonte:** auditoria `docs/superpowers/verificacao/2026-10-06-auditoria-ux.md` (capturas "antes" em `C:\Users\felip\Desktop\dota-hub-auditoria\`). Visual de referência: `docs/design/v1` (`Main.dc.html` mapa em 1440, `Rotas.dc.html`, `Celular.dc.html` mapa em 390, `Glossario.dc.html`). Spec da fase 1: `docs/superpowers/specs/2026-10-06-dota-hub-design.md` (as 11 situações do índice, regra de nada digitado à mão no app).

**Pré-requisito:** a fase 1C mesclada no `main`. Antes da Task 1, crie a branch `feat/fase-1d-ux` a partir do `main` atualizado e leia o código real dos arquivos que a 1C mudou e que este plano também muda: `app/src/App.tsx`, `app/src/glossary/GlossaryPage.tsx`, `app/src/objectives/ObjectivePanel.tsx`, `app/src/search/SearchBox.tsx`, `app/src/map/MapPage.tsx`, `export/dota_export/__main__.py` e `app/src/unidades/unidades.css`. Os blocos deste plano foram escritos contra o `main` em `bad6abd` mais o diff da 1C (`git diff main..feat/fase-1c`, 13 commits até `c29ef26`). Se a 1C mudou algo depois disso (um nome, uma prop, a ordem das linhas do `__main__.py`), use o real, aplique a mudança deste plano por cima e registre no ledger `.superpowers/sdd/2026-10-06-dota-hub-fase1d/progress.md`.

## Global Constraints

- Todas as da 1A, 1B e 1C continuam valendo: português do Brasil com acentos e sem travessão; nada digitado à mão no app; `fonte` e `patch` em todo número; projetos de origem e o jogo só leitura; TypeScript strict sem `any`, sem `as` (fora de `as const`) e sem `!`; commits `type: descrição em minúscula`, sem menção a IA; commit e push ao fim de cada tarefa.
- Skills obrigatórias em toda tarefa de código: `code-quality` e a da linguagem (`typescript` e `react` no app, Python segue o estilo do `export/`); `frontend-design` em toda tarefa que muda tela.
- CSS só com as variáveis de `app/src/styles/tokens.css`. Uma classe tem uma seção dona: complemento na mesma seção pode, a mesma classe como bloco base noutra seção ou noutro arquivo não pode (o teste da Task 1 recusa).
- Alvo de toque com 44 px ou mais (fora de link dentro de texto corrido); contraste de texto de 4,5:1 ou mais; nenhuma rolagem lateral da página em 390 px.
- **Verificação visual obrigatória em toda tarefa de tela, antes do commit.** Motivo: a 1A e a 1B passaram em todos os testes e saíram com os bugs da auditoria, porque o jsdom não aplica CSS nem mede layout. O roteiro está na seção "Roteiro de verificação visual". Teste verde sem captura conferida não fecha a tarefa.

## Review Focus

1. Classe de CSS em dois lugares: o teste `seletores.test.ts` (Task 1) tem que continuar verde depois de cada tarefa, inclusive com o `unidades.css` da 1C.
2. Proporção do mapa 3D: o `<Canvas>` põe `height: 100%` em linha; a proporção mora no `<div className="mapa-3d">` em volta (Task 4). Conferir em 800, 1024, 1440 e 390.
3. Rota por arquivo: a pasta `rotas/` é refeita a cada export (rota renomeada não pode sobrar) e o `rotas.json` grande só some depois que nenhuma tela o usa (Task 7).
4. Variações da fase: sem rota repetida (junta os rótulos), minuto do índice entre 4 e 30, fase depois dos 30 sem variação de situação (Task 10).
5. Retrato e ícone que faltam no jogo: o export falha dizendo qual nome não achou, nunca grava imagem vazia (Task 8).
6. Textura: fora da imagem de origem é cor de fundo, nunca a última linha repetida; o JPEG de celular continua abaixo de 900 KB (Task 2).
7. Recolhíveis: `<details>` com `<summary>` de 44 px; o conteúdo do guia continua no DOM para a busca do navegador e para os testes.

---

## File Structure

```
dota-hub/
  export/
    dota_export/mapa.py               (modificar) textura sem borda esticada
    dota_export/rotas.py              (modificar) campo heroi, resumo()
    dota_export/retratos.py           retrato de herói e ícone de item, do jogo, em webp (novo)
    dota_export/fontes.py             (modificar) HEROIS_OPENDOTA
    dota_export/__main__.py           (modificar) rotas por arquivo, resumo, retratos
    schemas/rotas.schema.json         (modificar) heroi
    schemas/rotas_resumo.schema.json  (novo)
    tests/test_mapa.py, test_rotas.py, test_glossario.py   (modificar)
    tests/test_retratos.py            (novo)
  content/glossario/{roshan,tormentor,creep-melee,creep-ranged,creep-de-cerco}.md   (modificar) unidade:
  app/
    index.html                        (modificar) favicon
    public/favicon.svg                (novo)
    src/styles.css                    (modificar) colisões, mapa, rotas, heróis, glossário, busca
    src/styles/seletores.test.ts      teste: classe definida em dois lugares (novo)
    src/unidades/unidades.css         (modificar) tira .tabela-rolavel repetida, alvo de 44 px
    src/layout/Shell.tsx              (modificar) classe do logotipo
    src/objectives/ObjectivePanel.tsx (modificar) rótulos da grade, nomes de objetivo, classe dos cartões
    src/map/MapPage.tsx               (modificar) camadas recolhíveis, nomes para o painel
    src/map/Map3D.tsx                 (modificar) proporção, câmera, minuto vazio
    src/map/MapFlat.tsx               (modificar) minuto vazio
    src/map/MapPage.test.tsx          (novo)
    src/data/schemas.ts               (modificar) rotaResumoSchema; sai rotasSchema
    src/routes/filtros.ts             (modificar) aceita resumo, exporta minutoDaJanela
    src/routes/RoutesPage.tsx         (modificar) mapa sempre à vista, rota por arquivo, lista paginada
    src/routes/RouteDetail.tsx        (modificar) exporta ListaPassos
    src/search/index.ts, SearchBox.tsx (modificar) resumo das rotas, fechar com Esc e clique fora
    src/heroes/resumo.ts              abertura do resumo, destaques, URL do retrato (novo)
    src/heroes/fases.ts               (modificar) objetivosDosPassos, variacoesDaFase
    src/heroes/HeroesPage.tsx, FichaHeroi.tsx   (modificar)
    src/players/PainelJogador.tsx     (modificar) fontes recolhidas
    src/glossary/links.ts             (modificar) lugaresDoTermo
    src/glossary/VisualDoTermo.tsx    ícone do item, unidade e mini mapa (novo)
    src/glossary/GlossaryPage.tsx     (modificar)
  docs/superpowers/verificacao/2026-10-06-fase1d-ux.md   registro da verificação (Task 13)
```

## Roteiro de verificação visual

Toda tarefa marcada "Verificação visual" roda este roteiro antes do commit.

1. Suba o app (`cd app && npm run dev`) e anote a URL (5173 por padrão).
2. Carregue as ferramentas do Playwright MCP com `ToolSearch` (`select:mcp__playwright__browser_run_code,mcp__playwright__browser_console_messages`). Nunca abra Chrome headless pelo terminal.
3. Rode `mcp__playwright__browser_run_code` com o código abaixo, trocando `BASE` e a lista `TELAS` pelas telas da tarefa. Cada tela é `[nome, caminho, preparar]`; `preparar` é opcional e clica no que for preciso.

```js
async (page) => {
  const BASE = "http://localhost:5173";
  const PASTA = "C:/Users/felip/Desktop/dota-hub-auditoria/1d/";
  const TELAS = [
    // ["mapa-roshan-avancado", "/mapa/roshan_pit_top", async (p) => p.getByRole("tab", { name: "Avançado" }).click()],
  ];
  const resultado = [];
  for (const [largura, altura] of [[1440, 900], [390, 844]]) {
    await page.setViewportSize({ width: largura, height: altura });
    for (const [nome, caminho, preparar] of TELAS) {
      await page.goto(BASE + caminho);
      await page.waitForLoadState("networkidle");
      if (preparar) await preparar(page);
      await page.waitForTimeout(2000);
      await page.screenshot({ path: `${PASTA}${nome}-${largura}.png` });
      resultado.push(await page.evaluate(([n, l]) => {
        const doc = document.documentElement;
        const alvos = [...document.querySelectorAll("a, button, input, select, summary, [role=tab]")]
          .filter((e) => !e.matches("p a, p button, button.link"))
          .map((e) => e.getBoundingClientRect())
          .filter((b) => b.width > 0 && b.height > 0 && b.height < 44);
        return { tela: n, largura: l, rolagemLateral: doc.scrollWidth - doc.clientWidth, alvosAbaixoDe44: alvos.length };
      }, [nome, largura]));
    }
  }
  return resultado;
}
```

4. Rode `mcp__playwright__browser_console_messages` com `level: "error"`.
5. Abra cada captura com `Read` e compare com o quadro de `docs/design/v1` indicado na tarefa e com a captura "antes" da auditoria. Critérios: `rolagemLateral` 0; `alvosAbaixoDe44` 0; nenhum texto quebrado uma palavra ou letra por linha; nenhum elemento por cima de outro; mapa quadrado e inteiro; console sem erro novo (os conhecidos estão na auditoria, itens R e S).
6. Registre no ledger o nome das capturas e o resultado de cada critério. Se algum falhar, corrija antes do commit e capture de novo.

---

### Task 1: Classes que colidem no CSS e ajustes de base

Corrige os problemas 1, 2 (logotipo), 3 (busca do topo sobre o logotipo) e 7 da auditoria, e os defeitos A, B, C, D e Q.

**Files:**
- Create: `app/src/styles/seletores.test.ts`, `app/public/favicon.svg`
- Modify: `app/src/styles.css`, `app/src/layout/Shell.tsx`, `app/src/objectives/ObjectivePanel.tsx`, `app/src/unidades/unidades.css`, `app/index.html`

**Interfaces:**
- Produces: classes `.topo-marca` (logotipo) e `.cartoes-texto` (cartões do Avançado). `.marca` fica só para as marcas do replay e `.cartoes` só para os cartões de jogadores e times.

- [ ] **Step 1: Teste que falha**

```ts
// app/src/styles/seletores.test.ts
/// <reference types="node" />
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

type Bloco = { classe: string; lugar: string };

// Seção = trecho entre dois comentários de nível de topo. Repetir a classe na mesma seção é complemento;
// noutra seção ou noutro arquivo é colisão: a última regra vence e quebra a tela da primeira.
function blocosDeClasse(css: string, arquivo: string): Bloco[] {
  const blocos: Bloco[] = [];
  let profundidade = 0;
  let inicio = 0;
  let secao = 0;
  for (let i = 0; i < css.length; i++) {
    if (css.startsWith("/*", i)) {
      const fim = css.indexOf("*/", i) + 2;
      if (profundidade === 0) {
        secao++;
        inicio = fim;
      }
      i = fim - 1;
      continue;
    }
    const caractere = css[i];
    if (caractere === "{" && profundidade++ === 0) {
      for (const seletor of css.slice(inicio, i).split(",").map((s) => s.trim())) {
        if (/^\.[\w-]+$/.test(seletor)) blocos.push({ classe: seletor, lugar: `${arquivo}, seção ${secao}` });
      }
    }
    if (caractere === "}" && --profundidade === 0) inicio = i + 1;
    if (caractere === ";" && profundidade === 0) inicio = i + 1;
  }
  return blocos;
}

function classesEmDoisLugares(arquivos: ReadonlyArray<readonly [string, string]>): string[] {
  const lugares = new Map<string, Set<string>>();
  for (const [arquivo, css] of arquivos) {
    for (const { classe, lugar } of blocosDeClasse(css, arquivo)) lugares.set(classe, (lugares.get(classe) ?? new Set<string>()).add(lugar));
  }
  return [...lugares].filter(([, onde]) => onde.size > 1).map(([classe]) => classe).sort();
}

it("acha a mesma classe definida em duas seções", () => {
  const css = "/* Casca */\n.marca { display: flex; }\n/* Replay */\n.marca { position: absolute; }";
  expect(classesEmDoisLugares([["a.css", css]])).toEqual([".marca"]);
});

it("aceita complemento na mesma seção e regra dentro de @media", () => {
  const css = "/* Heróis */\n.ficha { gap: 8px; }\n.ficha { min-width: 0; }\n@media (max-width: 720px) { .ficha { gap: 4px; } }";
  expect(classesEmDoisLugares([["a.css", css]])).toEqual([]);
});

it("nenhuma classe do app é definida em dois lugares", () => {
  const arquivos = readdirSync("src", { recursive: true, encoding: "utf-8" })
    .filter((f) => f.endsWith(".css"))
    .map((f) => [f, readFileSync(join("src", f), "utf-8")] as const);
  expect(classesEmDoisLugares(arquivos)).toEqual([]);
});
```

- [ ] **Step 2: Rodar e ver falhar**: `cd app && npx vitest run src/styles/seletores.test.ts` → FAIL no terceiro teste com `[".cartoes", ".marca", ".tabela-rolavel"]` (a última vem do `unidades.css` da 1C; sem a 1C, só as duas primeiras).

- [ ] **Step 3: Implementação**

`app/src/layout/Shell.tsx`, no bloco do logotipo:

```tsx
        <div className="topo-marca">
```

`app/src/objectives/ObjectivePanel.tsx`, no componente `Cartoes`:

```tsx
    <ol className="cartoes-texto">
```

`app/src/styles.css`:
- Na seção "Casca", troque `.marca { display: flex; align-items: baseline; gap: 10px; }` por `.topo-marca { display: flex; align-items: baseline; gap: 10px; }`.
- Na seção "Painel do objetivo", troque `.cartoes`, `.cartoes > li` e `.cartoes > li > div > :last-child` por `.cartoes-texto`, `.cartoes-texto > li` e `.cartoes-texto > li > div > :last-child` (as três regras, sem mudar as propriedades).
- Depois da regra `input[type="search"]`, acrescente:

```css
/* #8b968f sobre #111920 dá 5,8:1; o cinza padrão do navegador dava 3,85:1. */
::placeholder { color: var(--cor-texto-3); opacity: 1; }
```

- Troque a regra `button.link` por estas duas (o alvo de toque cresce sem mudar a linha do texto):

```css
button.link { position: relative; min-height: 0; padding: 0; border: 0; background: none; color: var(--cor-destaque); text-decoration: underline; }
button.link::after { content: ""; position: absolute; inset: -12px -6px; }
```

- Na seção "Glossário": em `.glossario-lista` acrescente `min-width: 0;` (sem isso a faixa de categorias, que não quebra linha no celular, alarga a página para 1.154 px); em `.filtro-categorias button` troque `min-height: 32px` por `min-height: var(--alvo-toque)`.

`app/src/unidades/unidades.css`: apague a linha `.tabela-rolavel { overflow-x: auto; }` (o `styles.css` já define a mesma classe com `max-width` e `overflow-x`) e em `.unidades-lista a` troque `min-height: 40px` por `min-height: var(--alvo-toque)`.

`app/public/favicon.svg`:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><rect width="32" height="32" rx="6" fill="#0a0e11"/><path d="M9 7h7a9 9 0 0 1 0 18H9z" fill="#f2b544"/></svg>
```

`app/index.html`, depois da `meta name="theme-color"`:

```html
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
```

- [ ] **Step 4: Rodar e ver passar**: `npm test` → PASS; `npx tsc -b` e `npm run lint` limpos.

- [ ] **Step 5: Verificação visual** (roteiro acima). Telas: `["mapa", "/"]`, `["mapa-roshan-avancado", "/mapa/roshan_pit_top", (p) => p.getByRole("tab", { name: "Avançado" }).click()]`, `["jogadores", "/jogadores"]`, `["time", "/times/team-spirit"]`, `["glossario-termo", "/glossario/aghanims-scepter"]`. Compare com `Main.dc.html` (topo: logotipo e abas lado a lado), `Celular.dc.html` (topo do celular: logotipo e busca) e `Glossario.dc.html`. Esperado: logotipo à esquerda das abas; cartões do Avançado em uma coluna, um embaixo do outro; cartões de amigos e times com o nome inteiro na linha; glossário sem rolagem lateral em 390; console sem o 404 do `favicon.ico`.

- [ ] **Step 6: Commit**

```bash
git add app/src/styles/seletores.test.ts app/src/styles.css app/src/layout/Shell.tsx app/src/objectives/ObjectivePanel.tsx app/src/unidades/unidades.css app/index.html app/public/favicon.svg
git commit -m "fix: stop css class collisions that broke the header and cards"
git push
```

---

### Task 2: Faixa quebrada na base da textura do mapa

Corrige o problema 6 (faixa de pixels quebrados) em todos os mapas.

**Files:**
- Modify: `export/dota_export/mapa.py`, `export/tests/test_mapa.py`

**Interfaces:**
- Produces: `mapa.FORA_DO_MAPA: tuple[int, int, int]`; `textura_alinhada(tamanho)` com a mesma assinatura.

- [ ] **Step 1: Teste que falha.** Em `export/tests/test_mapa.py`, `import numpy as np` no topo e, no fim:

```python
def test_borda_fora_da_imagem_vira_fundo_e_nao_repete_a_ultima_linha():
    img = np.asarray(mapa.textura_alinhada(512)).astype(int)
    for nome, grade in (("linha", img), ("coluna", img.transpose(1, 0, 2))):
        for i in range(1, grade.shape[0]):
            repete = np.abs(grade[i] - grade[i - 1]).mean() < 1
            fundo = (grade[i] == mapa.FORA_DO_MAPA).all()
            assert not repete or fundo, f"{nome} {i} repete a anterior: textura esticada"
```

- [ ] **Step 2: Rodar e ver falhar**: `cd export && python -m pytest tests/test_mapa.py -q` → FAIL (`FORA_DO_MAPA` não existe; depois de criar a constante, falha em "linha 498 repete a anterior").

- [ ] **Step 3: Implementação** em `export/dota_export/mapa.py`, logo abaixo de `JPEG`:

```python
# Cor de fundo do app (--cor-fundo): a área sem mapa some no fundo da página.
FORA_DO_MAPA = (10, 14, 17)
```

e a função inteira:

```python
def textura_alinhada(tamanho: int) -> Image.Image:
    basemap, _ = fontes.gps()
    fonte = np.asarray(Image.open(fontes.MAP_IMAGE).convert("RGB"))
    u = (np.arange(tamanho) + 0.5) / tamanho
    xs, ys = np.meshgrid(u, 1 - u)
    px, py = basemap.norm_to_px(xs, ys)
    altura, largura = fonte.shape[:2]
    dentro = (px >= 0) & (px <= largura - 1) & (py >= 0) & (py <= altura - 1)
    # Fora da imagem de origem não há mapa. O clip esticava a última linha até a borda e desenhava a faixa listrada.
    px, py = np.clip(px, 0, largura - 1).astype(int), np.clip(py, 0, altura - 1).astype(int)
    pixels = np.where(dentro[..., None], fonte[py, px], np.array(FORA_DO_MAPA, dtype=np.uint8))
    return Image.fromarray(pixels.astype(np.uint8))
```

- [ ] **Step 4: Rodar e ver passar**: `python -m pytest tests/test_mapa.py -q` → PASS (inclui `test_textura_de_celular_cabe_na_meta_do_4g`).

- [ ] **Step 5: Gerar as texturas de novo** sem rodar o export inteiro:

```bash
cd export
python -c "from dota_export import mapa; from dota_export.__main__ import DESTINO; [mapa.textura_alinhada(t).save(DESTINO / f'mapa_{t}.jpg', **mapa.JPEG) for t in (2048, 4096)]"
```

- [ ] **Step 6: Verificação visual**. Telas: `["mapa", "/"]`, `["heroi-rotas", "/herois/anti_mage", (p) => p.getByRole("tab", { name: "Rotas" }).click()]`. Compare com a captura 01 e 16 da auditoria. Esperado: base e canto de cima à direita do tabuleiro em cor de fundo, sem listras.

- [ ] **Step 7: Commit**

```bash
git add export/dota_export/mapa.py export/tests/test_mapa.py
git commit -m "fix: paint the map texture outside the source image instead of stretching it"
git push
```

---

### Task 3: Rótulos legíveis na grade do objetivo

Corrige o defeito F ("area", "anfibio", "perto de: rad_bot_t1").

**Files:**
- Modify: `app/src/objectives/ObjectivePanel.tsx`, `app/src/objectives/ObjectivePanel.test.tsx`, `app/src/map/MapPage.tsx`

**Interfaces:**
- Consumes: `Objetivo`, `ConteudoItem`, `Marca`
- Produces: `numerosDoObjetivo(detalhes: Record<string, unknown>, nomes?: ReadonlyMap<string, string>): [string, string][]`; prop opcional `nomes` no `ObjectivePanel`.

- [ ] **Step 1: Testes que falham**. Em `ObjectivePanel.test.tsx`, atualize os esperados da tabela `numerosDoObjetivo` existente para os rótulos novos e o número com separador de milhar, e acrescente o caso do nome:

```ts
it.each([
  { detalhes: { lane: "top", tier: 1 }, esperado: [["Lane", "top"], ["Tier", "1"]] },
  { detalhes: { empilhavel: true, anfibio: false }, esperado: [["Dá stack", "sim"], ["Anfíbio", "não"]] },
  { detalhes: { dist_torre_unidades: 1420, regra: "texto longo demais para caber numa célula da grade" }, esperado: [["Distância da torre", "1.420"]] },
  { detalhes: { chave_nova: "x" }, esperado: [["chave nova", "x"]] },
])("numerosDoObjetivo($detalhes) devolve $esperado", ({ detalhes, esperado }) => {
  expect(numerosDoObjetivo(detalhes)).toEqual(esperado);
});

it("troca o id de outro objetivo pelo nome dele", () => {
  const nomes = new Map([["rad_bot_t1", "Torre T1 de baixo (Radiant)"]]);
  expect(numerosDoObjetivo({ perto_de: "rad_bot_t1" }, nomes)).toEqual([["Perto de", "Torre T1 de baixo (Radiant)"]]);
});
```

Se a tabela existente tiver outros casos além destes, mantenha-os com o rótulo de `ROTULO_DETALHE` (Step 3) no lugar da chave crua.

- [ ] **Step 2: Rodar e ver falhar**: `npx vitest run src/objectives` → FAIL ("lane" no lugar de "Lane").

- [ ] **Step 3: Implementação.** `app/src/objectives/ObjectivePanel.tsx` inteiro (já com a prop `unidade` e o `GradeNumeros` exportado da 1C e a classe da Task 1):

```tsx
import { useState, type ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import type { ConteudoItem, Marca, Objetivo } from "../data/schemas";

export function conteudoDoObjetivo(o: Objetivo, conteudo: ConteudoItem[]): ConteudoItem | null {
  return conteudo.find((c) => c.id === o.id) ?? conteudo.find((c) => c.id === o.tipo) ?? null;
}

export function rotuloOrigem(marca: Marca): string | null {
  if (!marca) return null;
  if (marca.tipo === "recomendado") return "Recomendado.";
  const [unico, ...resto] = marca.replays;
  if (resto.length === 0) return `Visto em replay ${unico}.`;
  return `Visto em ${marca.replays.length} replays: ${marca.replays.join(", ")}.`;
}

const LIMITE_VALOR_CURTO = 20;
const ROTULO_LADO: Record<Objetivo["lado"], string> = { radiant: "Radiant", dire: "Dire", neutro: "Neutro" };
// Rótulo das chaves de `detalhes` que o export grava hoje; chave nova aparece com o nome cru até ganhar rótulo aqui.
const ROTULO_DETALHE: Readonly<Partial<Record<string, string>>> = {
  codigo: "Código", tipo: "Tipo", area: "Área", lane: "Lane", tier: "Tier", risco: "Risco",
  anfibio: "Anfíbio", empilhavel: "Dá stack", puxavel: "Dá pull", perto_de: "Perto de", liga_com: "Liga com",
  dist_torre_unidades: "Distância da torre", confianca_posicao: "Confiança da posição", lado_do_mapa: "Lado do mapa", regra: "Regra",
};

// A grade mostra só o que cabe numa célula; frases longas já estão no texto do conteúdo.
export function numerosDoObjetivo(detalhes: Record<string, unknown>, nomes: ReadonlyMap<string, string> = new Map()): [string, string][] {
  return Object.entries(detalhes).flatMap(([chave, valor]): [string, string][] => {
    const texto = valorCurto(valor);
    if (texto === null) return [];
    return [[ROTULO_DETALHE[chave] ?? chave.replaceAll("_", " "), nomes.get(texto) ?? texto]];
  });
}

function valorCurto(valor: unknown): string | null {
  if (typeof valor === "number") return valor.toLocaleString("pt-BR");
  if (typeof valor === "boolean") return valor ? "sim" : "não";
  if (typeof valor === "string" && valor.length <= LIMITE_VALOR_CURTO) return valor;
  return null;
}

const paragrafos = (texto: string) => texto.split(/\n{2,}/).filter((p) => p.trim());

type Aba = "basico" | "avancado";
const ABAS = [
  { id: "basico", rotulo: "Básico" },
  { id: "avancado", rotulo: "Avançado" },
] as const satisfies ReadonlyArray<{ id: Aba; rotulo: string }>;

type Props = {
  objetivo: Objetivo; conteudo: ConteudoItem[]; onFechar: () => void;
  nomes?: ReadonlyMap<string, string>; unidade?: ReactNode; children?: ReactNode;
};

export function ObjectivePanel({ objetivo, conteudo, onFechar, nomes, unidade, children }: Props) {
  const [aba, setAba] = useState<Aba>("basico");
  const item = conteudoDoObjetivo(objetivo, conteudo);
  const texto = item?.secoes[aba] ?? null;
  const origem = item ? rotuloOrigem(item.origem[aba]) : null;
  return (
    <aside className="painel" aria-label={objetivo.nome}>
      <div className="painel-alca" aria-hidden="true" />
      <header className="painel-topo">
        <div>
          <span className={`sobretitulo lado-${objetivo.lado}`}>{ROTULO_LADO[objetivo.lado]}</span>
          <h2>{objetivo.nome}</h2>
        </div>
        <button className="botao-icone" onClick={onFechar} aria-label="Fechar">
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </header>
      <div role="tablist" className="abas-pilula">
        {ABAS.map(({ id, rotulo }) => (
          <button key={id} role="tab" aria-selected={aba === id} onClick={() => setAba(id)}>{rotulo}</button>
        ))}
      </div>
      <div role="tabpanel" className="painel-texto">
        {aba === "basico" && unidade}
        {aba === "basico" && <GradeNumeros numeros={numerosDoObjetivo(objetivo.detalhes, nomes)} />}
        {!texto && "Ainda não escrito."}
        {texto && aba === "basico" && <div><ReactMarkdown>{texto}</ReactMarkdown></div>}
        {texto && aba === "avancado" && <Cartoes texto={texto} />}
        {aba === "avancado" && children}
      </div>
      {item && (
        <footer>
          {origem && <p className="origem">{origem}</p>}
          Patch {item.patch}. Fontes: {item.fontes.join("; ")}
        </footer>
      )}
    </aside>
  );
}

export function GradeNumeros({ numeros }: { numeros: [string, string][] }) {
  if (numeros.length === 0) return null;
  return (
    <dl className="grade-numeros">
      {numeros.map(([rotulo, valor]) => <div key={rotulo}><dt>{rotulo}</dt><dd>{valor}</dd></div>)}
    </dl>
  );
}

function Cartoes({ texto }: { texto: string }) {
  return (
    <ol className="cartoes-texto">
      {paragrafos(texto).map((p, i) => (
        <li key={i}><span className="cartao-numero">{i + 1}</span><div><ReactMarkdown>{p}</ReactMarkdown></div></li>
      ))}
    </ol>
  );
}
```

Em `app/src/map/MapPage.tsx`, depois de `const visiveis = ...`, acrescente `const nomes = new Map(todos.map((o) => [o.id, o.nome]));` e passe `nomes={nomes}` ao `<ObjectivePanel>` (a Task 4 reescreve o arquivo inteiro já com isso).

- [ ] **Step 4: Rodar e ver passar**: `npm test` → PASS; `npx tsc -b` limpo.

- [ ] **Step 5: Verificação visual**. Telas: `["mapa-camp", "/mapa/rad_safe_large_1"]`, `["mapa-roshan", "/mapa/roshan_pit_top"]`. Compare com a grade de `Main.dc.html` (rótulo pequeno em cima, número grande embaixo). Esperado: "Área", "Perto de: Torre T1 ...", "Distância da torre: 2.600".

- [ ] **Step 6: Commit**

```bash
git add app/src/objectives app/src/map/MapPage.tsx
git commit -m "fix: show readable labels and names in the objective numbers"
git push
```

---

### Task 4: Mapa quadrado, camadas recolhíveis e painel em duas colunas

Corrige o problema 2 (mapa minúsculo, camadas tomando a tela) e os defeitos E, G e T.

**Files:**
- Create: `app/src/map/MapPage.test.tsx`
- Modify: `app/src/map/MapPage.tsx`, `app/src/map/Map3D.tsx`, `app/src/styles.css`

**Interfaces:**
- Consumes: `ObjectivePanel` com `nomes` (Task 3) e `unidade` (1C), `UnidadeDoObjetivo` (1C), `MapaComCamadas`, `SeletorReplay`
- Produces: botão "Camadas" (`aria-expanded`, `aria-controls="camadas"`) e grupo `role="group"` "Camadas do mapa" com `data-aberta`.

- [ ] **Step 1: Teste que falha**

```tsx
// app/src/map/MapPage.test.tsx
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import { MapPage } from "./MapPage";

const rosh = { id: "roshan_pit_top", tipo: "roshan", nome: "Poço do Roshan", x: 0.3, y: 0.6, lado: "neutro", detalhes: {} };
const arquivos: Record<string, unknown> = {
  "/data/objetivos.json": [rosh], "/data/objetivos_conteudo.json": [], "/data/roshan_solo.json": [], "/data/replays.json": [],
};

beforeEach(() => {
  vi.stubGlobal("fetch", (path: string) =>
    Promise.resolve(path in arquivos ? new Response(JSON.stringify(arquivos[path])) : new Response("", { status: 404 })));
});
afterEach(() => vi.unstubAllGlobals());

const renderizar = () => render(<MemoryRouter initialEntries={["/"]}><Routes><Route path="/" element={<MapPage />} /></Routes></MemoryRouter>);

it("o botão Camadas abre e fecha o grupo de camadas", async () => {
  renderizar();
  const botao = await screen.findByRole("button", { name: "Camadas" });
  const grupo = screen.getByRole("group", { name: "Camadas do mapa" });
  expect(botao).toHaveAttribute("aria-expanded", "false");
  expect(grupo).toHaveAttribute("data-aberta", "false");
  fireEvent.click(botao);
  expect(botao).toHaveAttribute("aria-expanded", "true");
  expect(grupo).toHaveAttribute("data-aberta", "true");
});

it("esconder uma camada tira os marcadores dela do mapa", async () => {
  renderizar();
  expect(await screen.findByRole("button", { name: "Poço do Roshan" })).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: /^Roshan\s*1$/ }));
  expect(screen.queryByRole("button", { name: "Poço do Roshan" })).not.toBeInTheDocument();
});
```

- [ ] **Step 2: Rodar e ver falhar**: `npx vitest run src/map/MapPage.test.tsx` → FAIL (não existe botão "Camadas").

- [ ] **Step 3: Implementação.** `app/src/map/MapPage.tsx` inteiro:

```tsx
import { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router";
import type { Objetivo } from "../data/schemas";
import { conteudoSchema, objetivosSchema } from "../data/schemas";
import { dadosOuVazio, Indisponivel, useData } from "../data/useData";
import { ObjectivePanel } from "../objectives/ObjectivePanel";
import { SoloRoshan } from "../roshan/SoloRoshan";
import { UnidadeDoObjetivo } from "../unidades/UnidadeDoObjetivo";
import { MapaComCamadas } from "../replays/MapaComCamadas";
import { SeletorReplay } from "../replays/SeletorReplay";
import { objetivoDaUrl } from "./objetivoDaUrl";

const ROTULO_TIPO: Record<string, string> = {
  roshan: "Roshan", tormentor: "Tormentor", torre: "Torres", barracks: "Barracks", ancient: "Ancients",
  fonte: "Fontes", loja: "Lojas", camp: "Camps", runa: "Runas", lotus: "Lótus",
  twin_gate: "Twin Gates", watcher: "Watchers", outpost: "Outposts",
};
const ATALHOS = ["roshan", "tormentor", "torre", "runa"] as const;
const LEGENDA = [
  { lado: "radiant", rotulo: "Radiant" },
  { lado: "dire", rotulo: "Dire" },
  { lado: "neutro", rotulo: "Neutro e objetivos" },
] as const satisfies ReadonlyArray<{ lado: Objetivo["lado"]; rotulo: string }>;

type Vista = "2.5d" | "plano";

function contagemPorTipo(objetivos: Objetivo[]): [string, number][] {
  const contagem = new Map<string, number>();
  for (const o of objetivos) contagem.set(o.tipo, (contagem.get(o.tipo) ?? 0) + 1);
  return [...contagem.entries()];
}

export function MapPage() {
  const objetivos = useData("/data/objetivos.json", objetivosSchema);
  const conteudo = useData("/data/objetivos_conteudo.json", conteudoSchema);
  const solos = useData("/data/roshan_solo.json", conteudoSchema);
  const { id } = useParams();
  const navigate = useNavigate();
  const [params, setParams] = useSearchParams();
  const replayId = params.get("replay");
  const [ocultos, setOcultos] = useState<ReadonlySet<string>>(new Set());
  const [vista, setVista] = useState<Vista>("2.5d");
  // Abaixo de 1180 px as camadas ficam recolhidas atrás de um botão; acima, o CSS ignora o estado e mostra a coluna.
  const [camadasAbertas, setCamadasAbertas] = useState(false);

  if (objetivos.estado === "indisponivel") return <Indisponivel motivo={objetivos.motivo} />;
  if (objetivos.estado === "carregando") return <p>Carregando mapa…</p>;

  const todos = objetivos.dados;
  const aberto = id ? objetivoDaUrl(id, todos) : undefined;
  const textos = conteudo.estado === "ok" ? conteudo.dados : [];
  const visiveis = todos.filter((o) => !ocultos.has(o.tipo));
  const nomes = new Map(todos.map((o) => [o.id, o.nome]));
  // Leva a query junto para abrir um objetivo sem perder o replay escolhido.
  const abrir = (alvo: string) => navigate({ pathname: `/mapa/${alvo}`, search: params.toString() });
  const alternarCamada = (tipo: string) => setOcultos((atual) => {
    const proximo = new Set(atual);
    if (!proximo.delete(tipo)) proximo.add(tipo);
    return proximo;
  });

  return (
    <section className="pagina-mapa">
      <aside className="mapa-lateral">
        <button className="botao-camadas" aria-expanded={camadasAbertas} aria-controls="camadas" onClick={() => setCamadasAbertas((aberta) => !aberta)}>
          Camadas
        </button>
        <div id="camadas" role="group" aria-label="Camadas do mapa" className="camadas" data-aberta={camadasAbertas}>
          <div className="grupo grupo-camadas">
            <h2 className="sobretitulo">Camadas</h2>
            {contagemPorTipo(todos).map(([tipo, n]) => (
              <button key={tipo} className="camada" aria-pressed={!ocultos.has(tipo)} onClick={() => alternarCamada(tipo)}>
                <span className="camada-nome">{ROTULO_TIPO[tipo] ?? tipo}</span>
                <span className="numero">{n}</span>
              </button>
            ))}
          </div>
          <div className="grupo">
            <h2 className="sobretitulo">Replay</h2>
            <SeletorReplay valor={replayId} onMudar={(novo) => setParams(novo ? { replay: novo } : {})} />
          </div>
          <div className="grupo">
            <h2 className="sobretitulo">Vista</h2>
            <div className="alternador">
              <button aria-pressed={vista === "2.5d"} onClick={() => setVista("2.5d")}>2.5D</button>
              <button aria-pressed={vista === "plano"} onClick={() => setVista("plano")}>Plano</button>
            </div>
          </div>
          <div className="grupo legenda">
            <h2 className="sobretitulo">Legenda</h2>
            {LEGENDA.map(({ lado, rotulo }) => <span key={lado}><i className={`ponto lado-${lado}`} />{rotulo}</span>)}
          </div>
        </div>
      </aside>
      <div className="mapa-centro">
        <div className="mapa-titulo">
          <span className="sobretitulo">Mapa</span>
          <span className="mapa-chamada">Clique num objetivo</span>
        </div>
        <MapaComCamadas replayId={replayId} objetivos={visiveis} selecionado={aberto?.id ?? null} onSelecionar={abrir} forcarPlano={vista === "plano"} />
        <nav className="atalhos pilulas" aria-label="Atalhos do mapa">
          {ATALHOS.map((tipo) => {
            const primeiro = todos.find((o) => o.tipo === tipo);
            if (!primeiro) return null;
            return <button key={tipo} className="pilula" aria-pressed={aberto?.tipo === tipo} onClick={() => abrir(primeiro.id)}>{ROTULO_TIPO[tipo]}</button>;
          })}
        </nav>
      </div>
      {id && !aberto && <p role="alert">Objetivo {id} não encontrado.</p>}
      {aberto
        ? <ObjectivePanel key={aberto.id} objetivo={aberto} conteudo={textos} nomes={nomes} unidade={<UnidadeDoObjetivo objetivo={aberto} />}
            onFechar={() => navigate({ pathname: "/", search: params.toString() })}>
            {aberto.tipo === "roshan" && <SoloRoshan solos={dadosOuVazio(solos)} />}
          </ObjectivePanel>
        : <aside className="painel painel-vazio"><p>Toque num marcador para ver o objetivo.</p></aside>}
    </section>
  );
}
```

`app/src/map/Map3D.tsx`: acima de `function Chao()`, acrescente as constantes da câmera, e troque o `return` de `Map3D`:

```tsx
// Calibradas na captura de 1440×900: o tabuleiro ocupa o quadro sem a faixa vazia de cima.
// Se a captura mostrar borda cortada ou sobra, ajuste aqui e capture de novo.
const POSICAO_DA_CAMERA: Vetor = [0, 92, 58];
const CAMERA = { position: POSICAO_DA_CAMERA, fov: 42 };
const ALVO_DA_CAMERA: Vetor = [0, 0, 4];
```

```tsx
  // O Canvas põe height: 100% em linha no próprio elemento; a proporção quadrada fica no div em volta.
  return (
    <div className="mapa-3d">
      <Canvas camera={CAMERA} dpr={[1, 2]}>
        <color attach="background" args={[corDoToken("--cor-fundo")]} />
        <ambientLight intensity={1.1} />
        <directionalLight position={[30, 60, 20]} intensity={0.6} />
        <Chao />
        {objetivos.map((o) => (
          <Gota key={o.id} objetivo={o} ativo={o.id === selecionado} cor={o.id === selecionado ? destaque : corLado[o.lado]} noChao={noChao} onSelecionar={onSelecionar} />
        ))}
        {rota && <TracadoRota rota={rota} cor={destaque} noChao={noChao} />}
        <Trilhas trilhas={trilhas} corLado={corLado} destaque={destaque} noChao={noChao} />
        <Marcas marcas={marcas} noChao={noChao} />
        <OrbitControls target={ALVO_DA_CAMERA} enablePan maxPolarAngle={Math.PI / 2.4} minDistance={20} maxDistance={140} />
      </Canvas>
    </div>
  );
```

`app/src/styles.css`, seção "Mapa: camadas | mapa | painel": troque as regras `.pagina-mapa`, `.mapa-lateral`, `.mapa-centro`, `.mapa-titulo`, `.mapa-centro > .mapa-plano, .mapa-centro > .mapa-3d` e `.mapa-3d` por:

```css
.pagina-mapa { display: flex; height: calc(100vh - 83px); min-height: 560px; }
.mapa-lateral {
  flex: 0 0 240px; display: flex; flex-direction: column; padding: var(--espaco-5) 20px;
  border-right: 1px solid var(--cor-linha); overflow-y: auto;
}
.botao-camadas { display: none; }
.camadas { flex: 1; display: flex; flex-direction: column; gap: 28px; }
.mapa-centro {
  flex: 1 1 560px; min-width: 0;
  display: flex; flex-direction: column; align-items: center; gap: var(--espaco-4);
  padding: var(--espaco-5); overflow: hidden;
  background: radial-gradient(ellipse at 50% 40%, var(--cor-brilho-mapa) 0%, var(--cor-fundo) 70%);
}
.mapa-titulo { align-self: stretch; display: flex; flex-direction: column; gap: var(--espaco-1); }
.mapa-centro > .mapa-plano, .mapa-centro > .mapa-3d, .mapa-centro > .mapa-com-replay { width: min(100%, 760px, calc(100vh - 250px)); }
.mapa-3d { width: 100%; aspect-ratio: 1; touch-action: none; border-radius: 18px; overflow: hidden; }

/* Entre o celular e 1180 px: mapa e painel lado a lado, camadas recolhidas em cima do mapa. */
@media (max-width: 1179px) {
  .pagina-mapa { display: grid; grid-template-columns: minmax(0, 1fr) minmax(320px, 380px); grid-template-rows: auto 1fr; height: auto; }
  .mapa-lateral { grid-column: 1; padding: var(--espaco-3) var(--espaco-4); border-right: 0; border-bottom: 1px solid var(--cor-linha); overflow: visible; }
  .botao-camadas { display: inline-flex; align-items: center; align-self: flex-start; }
  .camadas { flex-direction: row; flex-wrap: wrap; gap: var(--espaco-4); padding-top: var(--espaco-3); }
  .camadas[data-aberta="false"] { display: none; }
  .camadas > .grupo { flex: 1 1 100%; }
  .grupo-camadas { flex-direction: row; flex-wrap: wrap; align-items: center; }
  .grupo-camadas .sobretitulo { flex-basis: 100%; }
  .mapa-centro { grid-column: 1; }
  .mapa-centro > .mapa-plano, .mapa-centro > .mapa-3d, .mapa-centro > .mapa-com-replay { width: min(100%, 760px); }
  .painel { grid-column: 2; grid-row: 1 / span 2; }
}
```

Na seção do replay, a largura sai da `.mapa-com-replay` (agora vem do seletor `.mapa-centro > .mapa-com-replay` acima) e a regra fica só com o layout: `.mapa-com-replay { display: flex; flex-direction: column; gap: var(--espaco-2); }`.

No bloco `@media (max-width: 720px)` da seção "Celular", troque as regras de `.pagina-mapa`, `.mapa-lateral`, `.mapa-lateral .grupo`, `.mapa-lateral .sobretitulo, .legenda`, `.camada` e `.mapa-titulo` por:

```css
  .pagina-mapa { display: block; }
  .mapa-lateral { padding: var(--espaco-2) var(--espaco-4); }
  .legenda { display: none; }
  .mapa-titulo { display: none; }
```

(`.mapa-centro { padding: ... }` e as regras do `.painel` como folha de baixo continuam.)

- [ ] **Step 4: Rodar e ver passar**: `npm test` → PASS (inclui `seletores.test.ts`); `npx tsc -b` e `npm run lint` limpos.

- [ ] **Step 5: Verificação visual**. Telas: `["mapa", "/"]`, `["mapa-roshan", "/mapa/roshan_pit_top"]`, `["mapa-camadas-abertas", "/", (p) => p.getByRole("button", { name: "Camadas" }).click()]`. Rode também uma vez com `[[800, 1000], [1024, 768]]` no lugar das duas larguras. Compare com `Main.dc.html` (1440) e `Celular.dc.html` (390). Esperado: mapa quadrado e inteiro em todas as larguras (em 800, pelo menos 380 px de lado); título "Clique num objetivo" inteiro; em 390, o mapa logo abaixo do botão Camadas e todas as camadas visíveis ao abrir, sem rolagem lateral. Se o tabuleiro 3D não encher o quadro, ajuste `CAMERA` e `ALVO_DA_CAMERA` e capture de novo.

- [ ] **Step 6: Commit**

```bash
git add app/src/map app/src/styles.css
git commit -m "fix: keep the map square and fold the layers below 1180 px"
git push
```

---

### Task 5: Rotas em arquivos separados com um resumo leve (export)

Prepara os defeitos J (5,3 MB para listar rotas) e a variação de rota do herói (problema 6).

**Files:**
- Create: `export/schemas/rotas_resumo.schema.json`
- Modify: `export/dota_export/rotas.py`, `export/dota_export/__main__.py`, `export/schemas/rotas.schema.json`, `export/tests/test_rotas.py`

**Interfaces:**
- Produces: `rotas.CAMPOS_RESUMO`; `rotas.resumo(todas: list[dict]) -> list[dict]`; campo `heroi: str | None` em toda rota; arquivos `app/public/data/rotas_resumo.json` e `app/public/data/rotas/<id>.json`. O `rotas.json` continua sendo gravado até a Task 7.

- [ ] **Step 1: Testes que falham**, no fim de `export/tests/test_rotas.py`:

```python
import json


def test_rota_do_pdf_05_sabe_de_qual_heroi_e():
    por_id = {r["id"]: r["heroi"] for r in rotas.carregar_rotas()}
    assert por_id["AM-R-11"] == "anti_mage"
    assert por_id["MA-R-01"] is None
    assert por_id["C-R-01"] is None


def test_resumo_tem_so_o_que_a_lista_usa_e_e_leve():
    leve = rotas.resumo(rotas.carregar_rotas())
    validar.validar("rotas_resumo", leve)
    assert set(leve[0]) == set(rotas.CAMPOS_RESUMO)
    assert len(json.dumps(leve, ensure_ascii=False).encode("utf-8")) < 400 * 1024
```

- [ ] **Step 2: Rodar e ver falhar**: `python -m pytest tests/test_rotas.py -q` → FAIL (`KeyError: 'heroi'`).

- [ ] **Step 3: Implementação.** Em `export/dota_export/rotas.py`:

```python
CAMPOS_RESUMO = ("id", "pdf", "lado", "pergunta", "titulo", "janela", "heroi")


def _heroi_do_arquivo(arq: Path) -> str | None:
    # H05_<id do herói>.json guarda as rotas do guia daquele herói (PDF 05).
    return arq.stem.removeprefix("H05_") if arq.name.startswith("H05_") else None
```

`_rota` ganha o parâmetro `heroi: str | None` e o campo `"heroi": heroi,` logo depois de `"lado": r["lado"],`. `carregar_rotas` passa a chamar `_rota(pdf, secao, r, _heroi_do_arquivo(arq))`. No fim do arquivo:

```python
def resumo(todas: list[dict]) -> list[dict]:
    """O que a lista, a busca e o glossário usam, sem passos nem caminhos (o arquivo com tudo passa de 5 MB)."""
    return [{campo: r[campo] for campo in CAMPOS_RESUMO} for r in todas]
```

`export/schemas/rotas.schema.json`: em `items.properties`, acrescente `"heroi": {"type": ["string", "null"]}`.

`export/schemas/rotas_resumo.schema.json`:

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "array",
  "items": {
    "type": "object",
    "required": ["id", "pdf", "lado", "pergunta", "titulo", "janela", "heroi"],
    "additionalProperties": false,
    "properties": {
      "id": {"type": "string", "pattern": "^[A-Z]{1,2}-(R|D)-\\d{2}$"},
      "pdf": {"enum": ["03", "05", "06"]},
      "lado": {"enum": ["radiant", "dire"]},
      "pergunta": {"type": "string"},
      "titulo": {"type": "string"},
      "janela": {"type": "object"},
      "heroi": {"type": ["string", "null"]}
    }
  }
}
```

`export/dota_export/__main__.py`: `import shutil` no topo; a função abaixo de `_gravar_colecao`:

```python
def _gravar_rotas(todas: list[dict]) -> None:
    """Uma rota por arquivo: a tela abre só a rota escolhida. Refaz a pasta para não sobrar rota renomeada."""
    pasta = DESTINO / "rotas"
    shutil.rmtree(pasta, ignore_errors=True)
    pasta.mkdir()
    for rota in todas:
        _gravar(f"rotas/{rota['id']}.json", rota)
```

e em `main()` troque a linha `pacotes = {"objetivos": mapa.objetos(), "rotas": rotas.carregar_rotas(), "indice": rotas.indice(),` por:

```python
    todas_rotas = rotas.carregar_rotas()
    _gravar_rotas(todas_rotas)
    pacotes = {"objetivos": mapa.objetos(), "rotas": todas_rotas, "rotas_resumo": rotas.resumo(todas_rotas),
               "indice": rotas.indice(),
```

(o resto do dicionário continua igual). As rotas são validadas no laço de `pacotes` com o schema `rotas` antes de qualquer tela usar os arquivos novos.

- [ ] **Step 4: Rodar e ver passar**: `python -m pytest -q` → PASS (todos os testes do export, inclusive os da 1C).

- [ ] **Step 5: Exportar**: `python -m dota_export` → `ok: {...}`; confira que existem `app/public/data/rotas_resumo.json` (menos de 400 KB) e `app/public/data/rotas/AM-R-11.json`.

- [ ] **Step 6: Commit**

```bash
git add export
git commit -m "feat: export one file per route and a light route summary"
git push
```

---

### Task 6: Busca, glossário e filtros com o resumo das rotas

Corrige o defeito J na busca e no glossário.

**Files:**
- Modify: `app/src/data/schemas.ts`, `app/src/routes/filtros.ts`, `app/src/search/index.ts`, `app/src/search/SearchBox.tsx`, `app/src/search/SearchBox.test.tsx`, `app/src/glossary/GlossaryPage.tsx`

**Interfaces:**
- Produces: `rotaResumoSchema`, `rotasResumoSchema`, tipo `RotaResumo`; `minutoDaJanela(mmss?: string): number`; `filtrarRotas<T extends Filtravel>(rotas: readonly T[], f: FiltroRotas): T[]`.

- [ ] **Step 1: Teste que falha.** Em `SearchBox.test.tsx`, troque `"/data/rotas.json"` por `"/data/rotas_resumo.json"` no `arrayContaining`.

- [ ] **Step 2: Rodar e ver falhar**: `npx vitest run src/search` → FAIL.

- [ ] **Step 3: Implementação.** `app/src/data/schemas.ts`, depois de `rotasSchema`:

```ts
export const rotaResumoSchema = rotaSchema
  .pick({ id: true, pdf: true, lado: true, pergunta: true, titulo: true, janela: true })
  .extend({ heroi: z.string().nullable() });
export const rotasResumoSchema = z.array(rotaResumoSchema);
```

e nos tipos `export type RotaResumo = z.infer<typeof rotaResumoSchema>;`.

`app/src/routes/filtros.ts` inteiro:

```ts
import type { Indice, RotaResumo } from "../data/schemas";

export type Lado = "radiant" | "dire";
export type FiltroRotas = { lado?: Lado; minuto?: number; texto?: string; pdf?: RotaResumo["pdf"] };
type Filtravel = Pick<RotaResumo, "id" | "lado" | "pdf" | "pergunta" | "titulo" | "janela">;

export const normalizar = (s: string) => s.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
export const minutoDaJanela = (mmss?: string) => (mmss ? Number(mmss.split(":")[0]) : NaN);

const naJanela = (r: Filtravel, minuto: number) => {
  const de = minutoDaJanela(r.janela.de);
  return de <= minuto && minuto < Math.max(minutoDaJanela(r.janela.ate), de + 1);
};

export function rotaDaCelula(indice: Indice, lado: Lado, minuto: number, coluna: string) {
  const celula = indice[lado].find((l) => l.minuto === minuto)?.cenarios[coluna];
  return celula ?? { id: null, nota: "sem rota para este minuto" };
}

export function filtrarRotas<T extends Filtravel>(rotas: readonly T[], f: FiltroRotas): T[] {
  const texto = f.texto ? normalizar(f.texto) : null;
  return rotas.filter((r) =>
    (!f.lado || r.lado === f.lado) &&
    (!f.pdf || r.pdf === f.pdf) &&
    (f.minuto === undefined || naJanela(r, f.minuto)) &&
    (!texto || normalizar(`${r.id} ${r.pergunta} ${r.titulo}`).includes(texto)));
}
```

`app/src/search/index.ts`: troque `Rota` por `RotaResumo` no import e, em `Fontes`, `rotas: Rota[]` por `rotas: Pick<RotaResumo, "id" | "pergunta" | "titulo">[]`.

`app/src/search/SearchBox.tsx`: no import de schemas troque `rotasSchema` por `rotasResumoSchema`; troque o comentário de cima de `SearchBox` por `// Os dados da busca só baixam quando a pessoa vai buscar, para não pesar na primeira tela.`; em `Resultados`, `const rotas = useData("/data/rotas_resumo.json", rotasResumoSchema);`.

`app/src/glossary/GlossaryPage.tsx`: no import troque `rotasSchema` por `rotasResumoSchema`; apague o comentário `// ponytail: rotas.json passa de 1 MB ...`; em `Relacionados`, `const rotas = useData("/data/rotas_resumo.json", rotasResumoSchema);`.

- [ ] **Step 4: Rodar e ver passar**: `npm test` → PASS; `npx tsc -b` limpo (o `RoutesPage` ainda usa `rotasSchema` e o `rotas.json`, que continuam existindo até a Task 7).

- [ ] **Step 5: Verificação visual**. Telas: `["busca", "/", async (p) => { await p.getByRole("searchbox").fill("roshan"); }]`, `["glossario-aegis", "/glossario/aegis"]`. Esperado: resultados com rotas e links de rota no termo, como antes. No painel de rede do MCP (`browser_network_requests`), `rotas_resumo.json` no lugar de `rotas.json`.

- [ ] **Step 6: Commit**

```bash
git add app/src/data/schemas.ts app/src/routes/filtros.ts app/src/search app/src/glossary/GlossaryPage.tsx
git commit -m "perf: use the light route summary in search and glossary"
git push
```

---

### Task 7: Tela Rotas com o mapa sempre à vista e lista paginada

Corrige o problema 3 e os defeitos H e I.

**Files:**
- Modify: `app/src/routes/RoutesPage.tsx`, `app/src/routes/RoutesPage.test.tsx`, `app/src/data/schemas.ts`, `app/src/styles.css`, `export/dota_export/__main__.py`

**Interfaces:**
- Consumes: `rotasResumoSchema`, `rotaSchema`, `indiceSchema`, `objetivosSchema`, `filtrarRotas`, `rotaDaCelula`, `RouteDetail`, `MapView`
- Produces: `RoutesPage` (mesma rota `/rotas` e `/rotas/:id`); sai `rotasSchema` do app e o `rotas.json` do export.

- [ ] **Step 1: Testes que falham.** `app/src/routes/RoutesPage.test.tsx` inteiro:

```tsx
import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import type { Indice, Rota, RotaResumo } from "../data/schemas";
import { RoutesPage } from "./RoutesPage";

const rota: Rota = {
  id: "MA-R-01", pdf: "06", lado: "radiant", pergunta: "Onde farmo no minuto 6 se não posso pegar wave?", titulo: "Minuto 6", secao: "",
  janela: { de: "6:00", ate: "7:00" }, estado: { minuto: 6, nivel: "5" }, origem: "real", replay: "8123",
  passos: [{ n: 1, alvo: "a", x: 0.39, y: 0.24, rotulo: "MEDIUM R6", minuto: "6:09", acao: "Saia da caixa.", risco: "seguro" }],
  caminhos: [], fuga: null, proxima: ["MA-R-02"], se: [], interrupcao: [], porque: "",
};
const resumo: RotaResumo = { id: rota.id, pdf: rota.pdf, lado: rota.lado, pergunta: rota.pergunta, titulo: rota.titulo, janela: rota.janela, heroi: null };
const indice: Indice = { colunas: ["lane impossível"], radiant: [{ minuto: 6, cenarios: { "lane impossível": { id: "MA-R-01", nota: "vindo do triângulo: MA-R-08" } } }], dire: [] };
let arquivos: Record<string, unknown> = {};

beforeEach(() => {
  arquivos = { "/data/rotas_resumo.json": [resumo], "/data/rotas/MA-R-01.json": rota, "/data/indice.json": indice, "/data/objetivos.json": [] };
  vi.stubGlobal("fetch", (path: string) =>
    Promise.resolve(path in arquivos ? new Response(JSON.stringify(arquivos[path])) : new Response("", { status: 404 })));
  Element.prototype.scrollIntoView = vi.fn();
});
afterEach(() => vi.unstubAllGlobals());

const renderizar = () => render(
  <MemoryRouter initialEntries={["/rotas"]}>
    <Routes><Route path="/rotas" element={<RoutesPage />} /><Route path="/rotas/:id" element={<RoutesPage />} /></Routes>
  </MemoryRouter>,
);

it("abre a rota da célula em três toques e leva a tela até o mapa", async () => {
  renderizar();
  fireEvent.click(await screen.findByRole("button", { name: "Radiant" }));
  fireEvent.click(screen.getByRole("button", { name: "6" }));
  fireEvent.click(screen.getByRole("button", { name: "lane impossível" }));
  expect(await screen.findByRole("heading", { name: rota.pergunta })).toBeInTheDocument();
  expect(screen.getByText("vindo do triângulo: MA-R-08")).toBeInTheDocument();
  expect(screen.getByText("ROTA REAL · replay 8123")).toBeInTheDocument();
  expect(within(screen.getByRole("list", { name: "Passos da rota" })).getByText(/Saia da caixa./)).toBeInTheDocument();
  expect(Element.prototype.scrollIntoView).toHaveBeenCalled();
});

it("mostra o mapa antes de escolher e deixa a situação desligada até ter lado e minuto", async () => {
  renderizar();
  expect(await screen.findByText(/a rota aparece aqui no mapa/)).toBeInTheDocument();
  expect(screen.getByAltText("Mapa do Dota 7.41")).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "lane impossível" })).toBeDisabled();
  fireEvent.click(screen.getByRole("button", { name: "Radiant" }));
  fireEvent.click(screen.getByRole("button", { name: "6" }));
  expect(screen.getByRole("button", { name: "lane impossível" })).toBeEnabled();
});

it("lista 20 rotas por vez", async () => {
  arquivos["/data/rotas_resumo.json"] = Array.from({ length: 45 }, (_, i) => ({ ...resumo, id: `MA-R-${10 + i}`, pergunta: `Pergunta ${i}` }));
  renderizar();
  const lista = await screen.findByRole("list", { name: "Rotas" });
  expect(within(lista).getAllByRole("listitem")).toHaveLength(20);
  expect(screen.getByText("45 rotas")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Mostrar mais 20" }));
  expect(within(lista).getAllByRole("listitem")).toHaveLength(40);
  fireEvent.click(screen.getByRole("button", { name: "Mostrar mais 5" }));
  expect(within(lista).getAllByRole("listitem")).toHaveLength(45);
});
```

No jsdom não há WebGL: o `MapView` cai no mapa plano, por isso o teste acha a imagem pelo texto alternativo.

- [ ] **Step 2: Rodar e ver falhar**: `npx vitest run src/routes` → FAIL.

- [ ] **Step 3: Implementação.** `app/src/routes/RoutesPage.tsx` inteiro:

```tsx
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import type { Indice, Objetivo, RotaResumo } from "../data/schemas";
import { indiceSchema, objetivosSchema, rotaSchema, rotasResumoSchema } from "../data/schemas";
import { Indisponivel, useData } from "../data/useData";
import { MapView } from "../map/MapView";
import { filtrarRotas, rotaDaCelula, type Lado } from "./filtros";
import { RouteDetail } from "./RouteDetail";

const LADOS = [
  { id: "radiant", rotulo: "Radiant" },
  { id: "dire", rotulo: "Dire" },
] as const satisfies ReadonlyArray<{ id: Lado; rotulo: string }>;
const MINUTOS = Array.from({ length: 27 }, (_, i) => i + 4);
const POR_PAGINA = 20;
const ID_DO_MAPA = "rota-aberta";

export function RoutesPage() {
  const rotas = useData("/data/rotas_resumo.json", rotasResumoSchema);
  const indice = useData("/data/indice.json", indiceSchema);
  const objetivos = useData("/data/objetivos.json", objetivosSchema);
  for (const d of [rotas, indice, objetivos]) if (d.estado === "indisponivel") return <Indisponivel motivo={d.motivo} />;
  if (rotas.estado !== "ok" || indice.estado !== "ok" || objetivos.estado !== "ok") return <p>Carregando rotas…</p>;
  return <Rotas rotas={rotas.dados} indice={indice.dados} objetivos={objetivos.dados} />;
}

type Selecao = { lado?: Lado; minuto?: number };
type RotasProps = { rotas: RotaResumo[]; indice: Indice; objetivos: Objetivo[] };

// No celular o mapa fica abaixo dos seletores: depois do terceiro toque a tela desce até ele.
const mostrarOMapa = () => document.getElementById(ID_DO_MAPA)?.scrollIntoView({ block: "start" });
const rotuloDaContagem = (n: number) => (n === 1 ? "1 rota" : `${n.toLocaleString("pt-BR")} rotas`);

function Rotas({ rotas, indice, objetivos }: RotasProps) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selecao, setSelecao] = useState<Selecao>({});
  const [nota, setNota] = useState<string | null>(null);
  const [texto, setTexto] = useState("");
  const [limite, setLimite] = useState(POR_PAGINA);
  const irPara = (destino: string) => navigate(`/rotas/${destino}`);
  const filtrar = (nova: Selecao) => { setSelecao(nova); setLimite(POR_PAGINA); };
  const temLadoEMinuto = selecao.lado !== undefined && selecao.minuto !== undefined;
  const filtradas = filtrarRotas(rotas, { ...selecao, texto });

  const escolherSituacao = (coluna: string) => {
    if (!selecao.lado || selecao.minuto === undefined) return;
    const celula = rotaDaCelula(indice, selecao.lado, selecao.minuto, coluna);
    setNota(celula.nota);
    if (!celula.id) return;
    irPara(celula.id);
    mostrarOMapa();
  };

  return (
    <section className="rotas">
      <div className="rotas-escolha">
        <header className="rotas-topo">
          <span className="sobretitulo">GPS de farm · 3 toques</span>
          <h1>Que horas são e o que o jogo mostra?</h1>
        </header>
        <Seletor rotulo="1 · Lado" estilo="botoes" opcoes={LADOS.map((l) => ({ valor: l.id, rotulo: l.rotulo }))} atual={selecao.lado}
          onEscolher={(lado) => filtrar({ ...selecao, lado })} />
        <Seletor rotulo="2 · Minuto" estilo="minutos" opcoes={MINUTOS.map((m) => ({ valor: m, rotulo: String(m) }))} atual={selecao.minuto}
          onEscolher={(minuto) => filtrar({ ...selecao, minuto })} />
        <Seletor rotulo={temLadoEMinuto ? "3 · Situação" : "3 · Situação (escolha lado e minuto antes)"} estilo="pilulas" desligado={!temLadoEMinuto}
          opcoes={indice.colunas.map((c) => ({ valor: c, rotulo: c }))} onEscolher={escolherSituacao} />
        {nota && <p className="nota-celula">{nota}</p>}
      </div>
      <div className="rotas-mapa" id={ID_DO_MAPA}>
        {id ? <RotaAberta key={id} id={id} objetivos={objetivos} onIrPara={irPara} /> : <MapaSemRota objetivos={objetivos} />}
      </div>
      <div className="rotas-lista">
        <label className="campo">
          <span>Procurar rota</span>
          <input type="search" value={texto} onChange={(e) => { setTexto(e.target.value); setLimite(POR_PAGINA); }} />
        </label>
        <p className="contagem" aria-live="polite">{rotuloDaContagem(filtradas.length)}</p>
        <ul className="lista-rotas" aria-label="Rotas">
          {filtradas.slice(0, limite).map((r) => (
            <li key={r.id}>
              <Link to={`/rotas/${r.id}`} aria-current={r.id === id ? "page" : undefined}><span className="numero">{r.id}</span> {r.pergunta}</Link>
            </li>
          ))}
        </ul>
        {filtradas.length > limite && (
          <button className="pilula" onClick={() => setLimite(limite + POR_PAGINA)}>Mostrar mais {Math.min(POR_PAGINA, filtradas.length - limite)}</button>
        )}
      </div>
    </section>
  );
}

function RotaAberta({ id, objetivos, onIrPara }: { id: string; objetivos: Objetivo[]; onIrPara: (id: string) => void }) {
  const rota = useData(`/data/rotas/${id}.json`, rotaSchema);
  if (rota.estado === "carregando") return <p className="rotas-dica">Carregando a rota…</p>;
  if (rota.estado === "indisponivel") return <p role="alert">Rota {id} não encontrada.</p>;
  return <RouteDetail rota={rota.dados} objetivos={objetivos} onIrPara={onIrPara} />;
}

function MapaSemRota({ objetivos }: { objetivos: Objetivo[] }) {
  const navigate = useNavigate();
  return (
    <>
      <p className="rotas-dica">Escolha lado, minuto e situação: a rota aparece aqui no mapa.</p>
      <div className="rota-mapa"><MapView objetivos={objetivos} onSelecionar={(alvo) => navigate(`/mapa/${alvo}`)} /></div>
    </>
  );
}

type Opcao<T> = { valor: T; rotulo: string };
type SeletorProps<T> = {
  rotulo: string; estilo: "botoes" | "minutos" | "pilulas"; opcoes: Opcao<T>[]; atual?: T;
  desligado?: boolean; onEscolher: (valor: T) => void;
};

function Seletor<T extends string | number>({ rotulo, estilo, opcoes, atual, desligado = false, onEscolher }: SeletorProps<T>) {
  return (
    <fieldset className={`seletor seletor-${estilo}`} disabled={desligado}>
      <legend>{rotulo}</legend>
      <div className="seletor-opcoes">
        {opcoes.map((o) => (
          <button key={o.valor} aria-pressed={o.valor === atual} onClick={() => onEscolher(o.valor)}>{o.rotulo}</button>
        ))}
      </div>
    </fieldset>
  );
}
```

`app/src/data/schemas.ts`: apague `export const rotasSchema = z.array(rotaSchema);` (ninguém mais usa; `rotaResumoSchema` continua derivando de `rotaSchema`).

`export/dota_export/__main__.py`: o `rotas.json` grande deixa de existir. Em `_gravar_rotas`, valide antes de gravar e apague o arquivo antigo:

```python
def _gravar_rotas(todas: list[dict]) -> None:
    """Uma rota por arquivo: a tela abre só a rota escolhida. Refaz a pasta para não sobrar rota renomeada."""
    validar.validar("rotas", todas)
    pasta = DESTINO / "rotas"
    shutil.rmtree(pasta, ignore_errors=True)
    pasta.mkdir()
    for rota in todas:
        _gravar(f"rotas/{rota['id']}.json", rota)
    (DESTINO / "rotas.json").unlink(missing_ok=True)
```

e em `main()` tire `"rotas": todas_rotas,` do dicionário `pacotes`, troque `frozenset(r["id"] for r in pacotes["rotas"])` por `frozenset(r["id"] for r in todas_rotas)` e `len(pacotes["rotas"])` por `len(todas_rotas)` no `meta`.

`app/src/styles.css`, seção "Rotas": troque as regras `.rotas`, `.seletores`, `.seletor-minutos`, `.seletor-minutos .seletor-opcoes` e `.lista-rotas` por:

```css
.rotas { display: grid; grid-template-columns: minmax(0, 1fr); gap: 20px 32px; padding: 28px var(--espaco-6) 40px; }
.rotas-escolha, .rotas-lista { display: flex; flex-direction: column; gap: 18px; min-width: 0; }
.rotas-mapa { min-width: 0; scroll-margin-top: 96px; }
.rotas-dica { margin: 0 0 var(--espaco-3); color: var(--cor-texto-2); }
.contagem { margin: 0; font-size: 13px; color: var(--cor-texto-3); }
.seletor:disabled button { opacity: 0.45; cursor: not-allowed; }
.seletor-minutos .seletor-opcoes { display: grid; grid-template-columns: repeat(auto-fill, minmax(var(--alvo-toque), 1fr)); gap: var(--espaco-1); }
.lista-rotas { margin: 0; padding: 0; list-style: none; }
.lista-rotas a[aria-current="page"] { color: var(--cor-texto); font-weight: 600; }
/* Telas largas: escolha e lista à esquerda, mapa da rota preso à direita. */
@media (min-width: 1100px) {
  .rotas { grid-template-columns: minmax(340px, 420px) minmax(0, 1fr); grid-template-areas: "escolha mapa" "lista mapa"; align-items: start; }
  .rotas-escolha { grid-area: escolha; }
  .rotas-lista { grid-area: lista; }
  .rotas-mapa { grid-area: mapa; position: sticky; top: 100px; max-height: calc(100vh - 116px); overflow-y: auto; }
}
```

Mantenha as outras regras da seção (`.lista-rotas a`, `.lista-rotas a:hover`, `.lista-rotas .numero`, sem o `break-inside`). No `@media (max-width: 720px)`, apague `.seletor-minutos { flex-basis: 100%; }`.

- [ ] **Step 4: Rodar e ver passar**: `npm test` → PASS; `npx tsc -b`, `npm run lint` limpos; `cd ../export && python -m pytest -q && python -m dota_export` → `ok` e sem `app/public/data/rotas.json`.

- [ ] **Step 5: Verificação visual**. Telas: `["rotas", "/rotas"]`, `["rotas-tres-toques", "/rotas", async (p) => { await p.getByRole("button", { name: "Radiant", exact: true }).click(); await p.getByRole("button", { name: "10", exact: true }).click(); await p.getByRole("button", { name: "à frente" }).click(); }]`, `["rota-aberta", "/rotas/MB-R-07"]`. Compare com `Rotas.dc.html`. Esperado: em 1440, mapa à direita na primeira tela o tempo todo; em 390, depois do terceiro toque o mapa da rota ocupa a tela; minutos de 4 a 30 todos visíveis, sem barra lateral; lista com 20 itens e "Mostrar mais".

- [ ] **Step 6: Commit**

```bash
git add app/src/routes app/src/data/schemas.ts app/src/styles.css export/dota_export/__main__.py
git commit -m "fix: keep the route map in view and page the route list"
git push
```

---

### Task 8: Retrato de herói e ícone de item tirados do jogo (export)

Prepara os problemas 5 e 8.

**Files:**
- Create: `export/dota_export/retratos.py`, `export/tests/test_retratos.py`
- Modify: `export/dota_export/fontes.py`, `export/dota_export/__main__.py`

**Interfaces:**
- Consumes: `jogo.vpk`, `jogo.listar`, `jogo.extrair` (1C)
- Produces: `fontes.HEROIS_OPENDOTA`; `retratos.nomes_no_jogo(fichas: list[dict]) -> dict[str, str]`; `retratos.atualizar_herois(arquivo_vpk, nomes, destino)`; `retratos.atualizar_itens(arquivo_vpk, itens, destino)`; arquivos `retratos/herois/<id do herói>.webp` (128×72) e `retratos/itens/<item>.webp` (64×47).

- [ ] **Step 1: Testes que falham**

```python
# export/tests/test_retratos.py
import pytest
from PIL import Image

from dota_export import jogo, retratos


def test_nome_no_jogo_vem_do_hero_id():
    assert retratos.nomes_no_jogo([{"id": "anti_mage", "hero_id": 1}]) == {"anti_mage": "npc_dota_hero_antimage"}


def test_hero_id_desconhecido_diz_qual():
    with pytest.raises(ValueError, match="herói sem nome no jogo: inventado"):
        retratos.nomes_no_jogo([{"id": "inventado", "hero_id": 99999}])


def test_grava_retrato_do_heroi_e_icone_do_item(tmp_path):
    arquivo = jogo.vpk()
    retratos.atualizar_herois(arquivo, {"anti_mage": "npc_dota_hero_antimage"}, tmp_path / "herois")
    retratos.atualizar_itens(arquivo, {"abyssal_blade"}, tmp_path / "itens")
    with Image.open(tmp_path / "herois" / "anti_mage.webp") as retrato:
        assert retrato.size == retratos.TAMANHO_RETRATO
    with Image.open(tmp_path / "itens" / "abyssal_blade.webp") as icone:
        assert icone.size == retratos.TAMANHO_ITEM


def test_imagem_que_falta_no_jogo_diz_qual(tmp_path):
    with pytest.raises(ValueError, match="sem imagem no jogo: item_que_nao_existe"):
        retratos.atualizar_itens(jogo.vpk(), {"item_que_nao_existe"}, tmp_path)
```

- [ ] **Step 2: Rodar e ver falhar**: `python -m pytest tests/test_retratos.py -q` → FAIL (`retratos` não existe).

- [ ] **Step 3: Implementação.** Em `export/dota_export/fontes.py`, junto de `ITENS`:

```python
HEROIS_OPENDOTA = IMORTAL / "data" / "opendota" / "heroes.json"
```

```python
# export/dota_export/retratos.py
"""Retrato dos heróis e ícone dos itens: decodificados do jogo instalado e gravados em webp."""
import json
import tempfile
from pathlib import Path

from PIL import Image

from . import fontes, jogo

SUFIXO = "_png.vtex_c"
PASTA_HEROIS = "panorama/images/heroes/"
PASTA_ITENS = "panorama/images/items/"
TAMANHO_RETRATO = (128, 72)
TAMANHO_ITEM = (64, 47)


def nomes_no_jogo(fichas: list[dict]) -> dict[str, str]:
    """Id do herói no app (anti_mage) para o nome no jogo (npc_dota_hero_antimage), pelo hero_id da OpenDota."""
    por_numero = {h["id"]: h["name"] for h in json.loads(fontes.HEROIS_OPENDOTA.read_text(encoding="utf-8"))}
    faltando = [f["id"] for f in fichas if f["hero_id"] not in por_numero]
    if faltando:
        raise ValueError(f"herói sem nome no jogo: {', '.join(faltando)}")
    return {f["id"]: por_numero[f["hero_id"]] for f in fichas}


def _converter(arquivo_vpk: Path, pasta: str, saida_por_nome: dict[str, Path], tamanho: tuple[int, int]) -> None:
    # ponytail: imagem do jogo muda quase nunca; só grava o que falta. Apague a pasta para refazer todas.
    faltando = {nome: saida for nome, saida in saida_por_nome.items() if not saida.exists()}
    if not faltando:
        return
    no_jogo = {c.removeprefix(pasta).removesuffix(SUFIXO) for c in jogo.listar(arquivo_vpk, pasta) if c.endswith(SUFIXO)}
    ausentes = sorted(set(faltando) - no_jogo)
    if ausentes:
        raise ValueError(f"sem imagem no jogo: {', '.join(ausentes)}")
    with tempfile.TemporaryDirectory() as tmp:
        jogo.extrair(arquivo_vpk, [f"{pasta}{nome}{SUFIXO}" for nome in sorted(faltando)], Path(tmp), decompilar=True)
        for nome, saida in faltando.items():
            saida.parent.mkdir(parents=True, exist_ok=True)
            with Image.open(Path(tmp) / pasta / f"{nome}_png.png") as imagem:
                imagem.convert("RGBA").resize(tamanho, Image.Resampling.LANCZOS).save(saida, quality=85)


def atualizar_herois(arquivo_vpk: Path, nomes: dict[str, str], destino: Path) -> None:
    _converter(arquivo_vpk, PASTA_HEROIS, {nome: destino / f"{app_id}.webp" for app_id, nome in nomes.items()}, TAMANHO_RETRATO)


def atualizar_itens(arquivo_vpk: Path, itens: set[str], destino: Path) -> None:
    _converter(arquivo_vpk, PASTA_ITENS, {item: destino / f"{item}.webp" for item in itens}, TAMANHO_ITEM)
```

`export/dota_export/__main__.py`: acrescente `retratos` ao import de `from . import (...)` e, logo depois da linha `arquivo_vpk = jogo.vpk()` (da 1C):

```python
    retratos.atualizar_herois(arquivo_vpk, retratos.nomes_no_jogo(fichas), DESTINO / "retratos" / "herois")
    itens_do_glossario = {t["extras"]["item"] for t in pacotes["glossario"] if "item" in t["extras"]}
    retratos.atualizar_itens(arquivo_vpk, itens_do_glossario, DESTINO / "retratos" / "itens")
```

(`fichas` é a lista das fichas de herói, já calculada antes nesse ponto do `main`.)

- [ ] **Step 4: Rodar e ver passar**: `python -m pytest -q` → PASS.

- [ ] **Step 5: Exportar**: `python -m dota_export` → `ok`; confira 22 arquivos em `app/public/data/retratos/herois/` e 50 em `app/public/data/retratos/itens/`. Se algum item do glossário não tiver imagem no jogo, o erro diz qual: corrija o `item:` no frontmatter do termo (nome interno do jogo, sem o prefixo `item_`) e rode de novo.

- [ ] **Step 6: Commit**

```bash
git add export
git commit -m "feat: export hero portraits and item icons from the installed game"
git push
```

---

### Task 9: Lista de heróis com retrato e ficha com resumo curto

Corrige os problemas 4 e 5 e os defeitos O e P.

**Files:**
- Create: `app/src/heroes/resumo.ts`, `app/src/heroes/resumo.test.ts`, `app/src/heroes/HeroesPage.test.tsx`
- Modify: `app/src/heroes/HeroesPage.tsx`, `app/src/heroes/FichaHeroi.tsx`, `app/src/heroes/FichaHeroi.test.tsx`, `app/src/players/PainelJogador.tsx`, `app/src/styles.css`

**Interfaces:**
- Consumes: `Heroi`, `minutoComoTexto`
- Produces: `dividirResumo(texto: string): { abertura: string; resto: string }`; `destaquesDoHeroi(heroi: Pick<Heroi, "guia">): [string, string][]`; `urlDoRetrato(id: string): string`; classe `.recolhivel` (para `<details>`).

- [ ] **Step 1: Testes que falham**

```ts
// app/src/heroes/resumo.test.ts
import type { Heroi } from "../data/schemas";
import { destaquesDoHeroi, dividirResumo, urlDoRetrato } from "./resumo";

it.each([
  { texto: "Carry de jogo longo. Pega Treads aos 6,9 min.", abertura: "Carry de jogo longo.", resto: "Pega Treads aos 6,9 min." },
  { texto: "Venceu 4.171 das 4.421 partidas (94%). Mid quase não existe.", abertura: "Venceu 4.171 das 4.421 partidas (94%).", resto: "Mid quase não existe." },
  { texto: "Uma frase só", abertura: "Uma frase só", resto: "" },
])("divide o resumo em abertura e resto: $abertura", ({ texto, abertura, resto }) => {
  expect(dividirResumo(texto)).toEqual({ abertura, resto });
});

const guia: Heroi["guia"] = {
  bom_quando: [], evitar_quando: [], momento_do_draft: "", lane: { objetivo: "", itens_iniciais: [], dicas: [] },
  skill_build: [], itens_situacionais: [], depois_dos_20: [], erros_comuns: [],
  condicao_para_farmar: { nivel: 6, minuto_tipico: 7.9, explicacao: "" },
  itens_core: [
    { nome: "Power Treads", minuto_alvo: 6.9, base: "" }, { nome: "Sem minuto", minuto_alvo: null, base: "" },
    { nome: "Battle Fury", minuto_alvo: 13.8, base: "" }, { nome: "Yasha", minuto_alvo: 17.2, base: "" },
    { nome: "Manta Style", minuto_alvo: 20, base: "" },
  ],
};

it("destaca o nível de entrar na selva e os três primeiros itens com minuto", () => {
  expect(destaquesDoHeroi({ guia })).toEqual([
    ["Selva a partir do", "nível 6 · 7:54"], ["Power Treads", "6:54"], ["Battle Fury", "13:48"], ["Yasha", "17:12"],
  ]);
});

it("sem minuto típico, a selva mostra só o nível", () => {
  const semMinuto = { ...guia, condicao_para_farmar: { nivel: 6, minuto_tipico: null, explicacao: "" }, itens_core: [] };
  expect(destaquesDoHeroi({ guia: semMinuto })).toEqual([["Selva a partir do", "nível 6"]]);
});

it("monta a URL do retrato pelo id do herói", () => {
  expect(urlDoRetrato("anti_mage")).toBe("/data/retratos/herois/anti_mage.webp");
});
```

```tsx
// app/src/heroes/HeroesPage.test.tsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { HeroesPage } from "./HeroesPage";

afterEach(() => vi.unstubAllGlobals());

it("mostra o retrato do herói ao lado do nome", async () => {
  const herois = [{ id: "anti_mage", nome: "Anti-Mage", hero_id: 1, patch: "7.41f", resumo: "Carry de farm.", tem_por_minuto: false }];
  vi.stubGlobal("fetch", () => Promise.resolve(new Response(JSON.stringify(herois))));
  render(<MemoryRouter><HeroesPage /></MemoryRouter>);
  const link = await screen.findByRole("link", { name: /Anti-Mage/ });
  expect(link.querySelector("img")).toHaveAttribute("src", "/data/retratos/herois/anti_mage.webp");
});
```

Em `FichaHeroi.test.tsx`, acrescente:

```tsx
it("abre com a primeira frase e os números e guarda o resto do resumo recolhido", () => {
  render(<MemoryRouter><FichaHeroi heroi={{ ...heroi, resumo: "Carry de jogo longo. Segunda frase com detalhe." }} objetivos={[]} solos={[]} /></MemoryRouter>);
  expect(screen.getByText("Carry de jogo longo.")).toBeInTheDocument();
  expect(screen.getByText("Segunda frase com detalhe.").closest("details")).not.toHaveAttribute("open");
  expect(screen.getByText("nível 6 · 7:54")).toBeInTheDocument();
  // alt="" tira o retrato da árvore de acessibilidade (é decorativo; o nome está no título), por isso o seletor de classe.
  expect(document.querySelector("img.retrato")).toHaveAttribute("src", "/data/retratos/herois/medusa.webp");
});
```

- [ ] **Step 2: Rodar e ver falhar**: `npx vitest run src/heroes` → FAIL (`./resumo` não existe).

- [ ] **Step 3: Implementação**

```ts
// app/src/heroes/resumo.ts
import type { Heroi } from "../data/schemas";
import { minutoComoTexto } from "../data/schemas";

// Fim de frase: ponto, exclamação ou interrogação, espaço e letra maiúscula. "4.171" e "6,9" não quebram.
const FIM_DA_PRIMEIRA_FRASE = /^(.+?[.!?])\s+(?=\p{Lu})/su;
const ITENS_EM_DESTAQUE = 3;

export const urlDoRetrato = (id: string) => `/data/retratos/herois/${id}.webp`;

export function dividirResumo(texto: string): { abertura: string; resto: string } {
  const achado = FIM_DA_PRIMEIRA_FRASE.exec(texto);
  if (!achado?.[1]) return { abertura: texto, resto: "" };
  return { abertura: achado[1], resto: texto.slice(achado[0].length) };
}

export function destaquesDoHeroi({ guia }: Pick<Heroi, "guia">): [string, string][] {
  const { nivel, minuto_tipico } = guia.condicao_para_farmar;
  const selva: [string, string] = ["Selva a partir do", minuto_tipico === null ? `nível ${nivel}` : `nível ${nivel} · ${minutoComoTexto(minuto_tipico)}`];
  const itens = guia.itens_core
    .flatMap((i): [string, string][] => (i.minuto_alvo === null ? [] : [[i.nome, minutoComoTexto(i.minuto_alvo)]]))
    .slice(0, ITENS_EM_DESTAQUE);
  return [selva, ...itens];
}
```

`app/src/heroes/HeroesPage.tsx`: importe `urlDoRetrato` de `./resumo` e troque o `<li>` por:

```tsx
          <li key={h.id}>
            <Link to={`/herois/${h.id}`}>
              <img className="retrato" src={urlDoRetrato(h.id)} alt="" width={64} height={36} loading="lazy" />
              <span className="heroi-texto"><strong>{h.nome}</strong><span>{resumoCurto(h.resumo)}</span></span>
            </Link>
          </li>
```

`app/src/heroes/FichaHeroi.tsx`: importe `destaquesDoHeroi, dividirResumo, urlDoRetrato` de `./resumo`; troque `Secao` e acrescente `Topo` e `Fontes`:

```tsx
function Secao({ titulo, aberta = false, children }: { titulo: string; aberta?: boolean; children: ReactNode }) {
  return (
    <details className="recolhivel" open={aberta}>
      <summary><h3 className="sobretitulo">{titulo}</h3></summary>
      {children}
    </details>
  );
}

function Topo({ heroi }: { heroi: Heroi }) {
  const { abertura, resto } = dividirResumo(heroi.resumo);
  return (
    <header className="ficha-topo">
      <img className="retrato" src={urlDoRetrato(heroi.id)} alt="" width={128} height={72} />
      <div><span className="sobretitulo">Herói</span><h1>{heroi.nome}</h1></div>
      <p className="abertura">{abertura}</p>
      <dl className="destaques">
        {destaquesDoHeroi(heroi).map(([rotulo, valor]) => <div key={rotulo}><dt>{rotulo}</dt><dd>{valor}</dd></div>)}
      </dl>
      {resto && <details className="recolhivel"><summary>Ler o resumo completo</summary><p>{resto}</p></details>}
    </header>
  );
}

function Fontes({ heroi }: { heroi: Heroi }) {
  return (
    <details className="recolhivel fonte">
      <summary>Fontes e confiança</summary>
      <p>Patch {heroi.patch}. Confiança: {heroi.confianca} Fontes: {heroi.fontes.join("; ")}</p>
    </details>
  );
}
```

Em `AbaGuia`, a primeira seção fica aberta: `<Secao titulo="Quando pegar" aberta>`. Em `FichaHeroi`, troque o `<header>...</header>` por `<Topo heroi={heroi} />` e o `<footer className="fonte">...</footer>` por `<Fontes heroi={heroi} />`.

`app/src/players/PainelJogador.tsx`: troque o `<footer className="fonte">Fontes: ...</footer>` por:

```tsx
      <details className="recolhivel fonte"><summary>Fontes</summary><p>{painel.fontes.join("; ")}</p></details>
```

`app/src/styles.css`, seção "Heróis": troque `.grade-herois a` por

```css
.grade-herois a {
  display: flex; align-items: flex-start; gap: 14px; height: 100%; padding: var(--espaco-4);
  border-radius: var(--raio); background: var(--cor-superficie-2); border: 1px solid var(--cor-linha-forte);
  color: var(--cor-texto-2); text-decoration: none; font-size: 13px; line-height: 1.5;
}
```

troque `.ficha-heroi { min-width: 0; overflow-wrap: anywhere; }` por `.ficha-heroi { min-width: 0; }` (a quebra em qualquer letra fazia "nível" virar "ní-vel"), apague `.ficha-heroi header p { ... }` e acrescente:

```css
.retrato { flex-shrink: 0; border-radius: var(--raio-pequeno); background: var(--cor-superficie-3); object-fit: cover; }
.heroi-texto { display: flex; flex-direction: column; gap: 6px; min-width: 0; }
.ficha-topo { display: grid; grid-template-columns: auto minmax(0, 1fr); align-items: end; gap: var(--espaco-3) 18px; }
.ficha-topo > p, .ficha-topo > dl, .ficha-topo > details { grid-column: 1 / -1; }
.abertura { margin: 0; max-width: 62ch; font-size: 18px; line-height: 1.55; color: var(--cor-texto-leitura); }
.ficha-heroi .destaques dd { font-size: 22px; }
.recolhivel { border-top: 1px solid var(--cor-linha); }
.recolhivel > summary { display: flex; align-items: center; gap: var(--espaco-2); min-height: var(--alvo-toque); cursor: pointer; color: var(--cor-texto-2); }
.recolhivel > summary h3 { margin: 0; }
.recolhivel[open] > summary { color: var(--cor-texto); }
.recolhivel > :not(summary) { margin: 0 0 var(--espaco-4); }
```

- [ ] **Step 4: Rodar e ver passar**: `npm test` → PASS; `npx tsc -b`, `npm run lint` limpos.

- [ ] **Step 5: Verificação visual**. Telas: `["herois", "/herois"]`, `["heroi-anti-mage", "/herois/anti_mage"]`, `["heroi-guia-aberto", "/herois/anti_mage", (p) => p.getByText("Ler o resumo completo").click()]`, `["jogador", "/jogadores/felipe"]`. Sem quadro de herói em `docs/design/v1`: compare com a hierarquia de `Main.dc.html` (sobretítulo, título grande, números em destaque em dourado) e com as capturas 10, 11 e 42 da auditoria. Esperado: retrato à esquerda de cada nome na lista; na ficha, as abas aparecem na primeira tela em 1440 e logo abaixo da primeira dobra em 390; o resumo longo e as fontes só abrem ao tocar.

- [ ] **Step 6: Commit**

```bash
git add app/src/heroes app/src/players/PainelJogador.tsx app/src/styles.css
git commit -m "feat: show hero portraits and a short hero summary with key numbers"
git push
```

---

### Task 10: Rotas do herói legíveis e com variações por situação

Corrige o problema 6 (marcadores demais, texto ilegível, pouca variação) e os defeitos M e N.

**Files:**
- Modify: `app/src/heroes/fases.ts`, `app/src/heroes/fases.test.ts`, `app/src/heroes/FichaHeroi.tsx`, `app/src/heroes/FichaHeroi.test.tsx`, `app/src/routes/RouteDetail.tsx`, `app/src/map/MapFlat.tsx`, `app/src/map/Map3D.tsx`

**Interfaces:**
- Consumes: `rotaDaCelula`, `minutoDaJanela`, `Lado` (filtros), `RotaResumo`, `Indice`, `Fase`, `Passo`, `Objetivo`, `indiceSchema`, `rotasResumoSchema`, `rotaSchema`
- Produces: `objetivosDosPassos(passos: readonly Pick<Passo, "alvo">[], objetivos: readonly Objetivo[]): Objetivo[]`; `type Variacao = { id: string; rotulo: string }`; `variacoesDaFase(fase: Pick<Fase, "de" | "ate">, lado: Lado, fontes: { indice: Indice; rotas: readonly RotaResumo[]; heroi: string }): Variacao[]`; `ListaPassos({ passos, fuga })` exportado de `RouteDetail.tsx`.

- [ ] **Step 1: Testes que falham.** No fim de `app/src/heroes/fases.test.ts` (acrescente `objetivosDosPassos, variacoesDaFase` ao import de `./fases` e `Indice, RotaResumo` ao import de tipos):

```ts
const torre = { id: "rad_bot_t1", tipo: "torre", nome: "T1 de baixo", x: 0.8, y: 0.2, lado: "radiant" as const, detalhes: {} };
const camp = { ...torre, id: "rad_safe_small_1", tipo: "camp", nome: "Pequeno do pull" };

it("mantém no mapa só os objetivos que são alvo de algum passo", () => {
  expect(objetivosDosPassos([{ alvo: "rad_bot_t1" }, { alvo: "eq_rad_safe" }], [torre, camp])).toEqual([torre]);
});

const indice: Indice = {
  colunas: ["equilibrado", "atrás", "lane impossível"],
  radiant: [{ minuto: 4, cenarios: {
    equilibrado: { id: "ML-R-01", nota: null }, "atrás": { id: "ML-R-01", nota: "jogue colado" }, "lane impossível": { id: "ML-R-02", nota: null },
  } }],
  dire: [],
};
const resumo = (id: string, heroi: string | null, de: string): RotaResumo =>
  ({ id, pdf: "05", lado: "radiant", pergunta: `p ${id}`, titulo: `t ${id}`, janela: { de, ate: "" }, heroi });

it("junta as rotas do guia que caem na fase e a rota de cada situação, sem repetir", () => {
  const rotas = [resumo("AM-R-01", "anti_mage", "00:00"), resumo("AM-R-11", "anti_mage", "03:00"),
    resumo("AM-R-05", "anti_mage", "11:00"), resumo("JG-R-01", "juggernaut", "01:00")];
  expect(variacoesDaFase({ de: 0, ate: 8 }, "radiant", { indice, rotas, heroi: "anti_mage" })).toEqual([
    { id: "AM-R-01", rotulo: "t AM-R-01" }, { id: "AM-R-11", rotulo: "t AM-R-11" },
    { id: "ML-R-01", rotulo: "equilibrado, atrás" }, { id: "ML-R-02", rotulo: "lane impossível" },
  ]);
});

it("fase que começa num minuto sem linha no índice não tem rota de situação", () => {
  expect(variacoesDaFase({ de: 31, ate: null }, "radiant", { indice, rotas: [], heroi: "anti_mage" })).toEqual([]);
});
```

Em `FichaHeroi.test.tsx`, acrescente (e `fireEvent`, `within` no import do Testing Library se faltarem):

```tsx
it("aba Rotas mostra só os alvos da fase e troca para a rota da situação", async () => {
  const torre = { id: "rad_bot_t1", tipo: "torre", nome: "T1 de baixo", x: 0.8, y: 0.2, lado: "radiant" as const, detalhes: {} };
  const camp = { ...torre, id: "rad_safe_small_1", tipo: "camp", nome: "Pequeno do pull" };
  const fase = { de: 0, ate: 8, janela: "0:00-8:00", objetivo: "Lane de baixo.", caminhos: [],
    passos: [{ n: 1, alvo: "rad_bot_t1", x: 0.8, y: 0.2, rotulo: "T1 de baixo", minuto: "", acao: "Segure a wave.", risco: "objetivo" }] };
  const rotaDaSituacao = {
    id: "ML-R-02", pdf: "06", lado: "radiant", pergunta: "Lane impossível no minuto 4: para onde vou?", titulo: "", secao: "",
    janela: { de: "4:00", ate: "5:00" }, estado: null, origem: "recomendada", replay: null,
    passos: [{ n: 1, alvo: "rad_safe_small_1", x: 0.7, y: 0.2, rotulo: "SMALL R1", minuto: "4:05", acao: "Puxe o camp.", risco: "seguro" }],
    caminhos: [], fuga: null, proxima: [], se: [], interrupcao: [], porque: "",
  };
  const arquivos: Record<string, unknown> = {
    "/data/indice.json": { colunas: ["lane impossível"], radiant: [{ minuto: 4, cenarios: { "lane impossível": { id: "ML-R-02", nota: null } } }], dire: [] },
    "/data/rotas_resumo.json": [], "/data/rotas/ML-R-02.json": rotaDaSituacao,
  };
  vi.stubGlobal("fetch", (path: string) => Promise.resolve(new Response(JSON.stringify(arquivos[path]))));
  render(<MemoryRouter><FichaHeroi heroi={{ ...heroi, rotas: { radiant: [fase], dire: [] } }} objetivos={[torre, camp]} solos={[]} /></MemoryRouter>);
  fireEvent.click(screen.getByRole("tab", { name: "Rotas" }));
  expect(within(screen.getByRole("list", { name: "Passos da rota" })).getByText(/Segure a wave./)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "T1 de baixo" })).toBeInTheDocument();
  expect(screen.queryByRole("button", { name: "Pequeno do pull" })).not.toBeInTheDocument();
  fireEvent.click(await screen.findByRole("button", { name: "lane impossível" }));
  expect(await screen.findByText(/Lane impossível no minuto 4/)).toBeInTheDocument();
  expect(within(screen.getByRole("list", { name: "Passos da rota" })).getByText(/Puxe o camp./)).toBeInTheDocument();
  vi.unstubAllGlobals();
});
```

- [ ] **Step 2: Rodar e ver falhar**: `npx vitest run src/heroes` → FAIL (`objetivosDosPassos` não existe).

- [ ] **Step 3: Implementação.** `app/src/heroes/fases.ts`, imports e funções novas no fim:

```ts
import type { Fase, HeroiResumo, Indice, Objetivo, Passo, RotaResumo, Spike } from "../data/schemas";
import { minutoDaJanela, normalizar, rotaDaCelula, type Lado } from "../routes/filtros";
```

```ts
export function objetivosDosPassos(passos: readonly Pick<Passo, "alvo">[], objetivos: readonly Objetivo[]): Objetivo[] {
  const alvos = new Set(passos.map((p) => p.alvo));
  return objetivos.filter((o) => alvos.has(o.id));
}

export type Variacao = { id: string; rotulo: string };
type FontesDeVariacao = { indice: Indice; rotas: readonly RotaResumo[]; heroi: string };
const PRIMEIRO_MINUTO_DO_INDICE = 4;

const comecaNaFase = (r: RotaResumo, fase: Pick<Fase, "de" | "ate">) => {
  const inicio = minutoDaJanela(r.janela.de);
  return inicio >= fase.de && inicio < (fase.ate ?? Infinity);
};

function juntarPorId(variacoes: readonly Variacao[]): Variacao[] {
  const rotulos = new Map<string, string[]>();
  for (const { id, rotulo } of variacoes) rotulos.set(id, [...(rotulos.get(id) ?? []), rotulo]);
  return [...rotulos].map(([id, nomes]) => ({ id, rotulo: nomes.join(", ") }));
}

// Variações da fase: as rotas do guia do herói (PDF 05) que começam nela e a rota de cada situação do índice
// no minuto em que a fase começa (o índice vai do minuto 4 ao 30).
export function variacoesDaFase(fase: Pick<Fase, "de" | "ate">, lado: Lado, { indice, rotas, heroi }: FontesDeVariacao): Variacao[] {
  const doGuia = rotas
    .filter((r) => r.heroi === heroi && r.lado === lado && comecaNaFase(r, fase))
    .map((r) => ({ id: r.id, rotulo: r.titulo || r.pergunta }));
  const minuto = Math.max(PRIMEIRO_MINUTO_DO_INDICE, Math.ceil(fase.de));
  const daSituacao = indice.colunas.flatMap((coluna) => {
    const { id } = rotaDaCelula(indice, lado, minuto, coluna);
    return id ? [{ id, rotulo: coluna }] : [];
  });
  return juntarPorId([...doGuia, ...daSituacao]);
}
```

`app/src/routes/RouteDetail.tsx`: troque `ListaPassos` por esta versão exportada e a chamada por `<ListaPassos passos={rota.passos} fuga={rota.fuga} />`:

```tsx
export function ListaPassos({ passos, fuga = null }: { passos: readonly Passo[]; fuga?: Rota["fuga"] }) {
  return (
    <ol className="passos" aria-label="Passos da rota">
      {passos.map((p) => (
        <li key={p.n}>
          <span className={`passo passo-${p.risco}`}>{p.n}</span>
          <span className="numero">{p.minuto}</span>
          <span><strong>{p.rotulo}</strong> · {p.acao}</span>
        </li>
      ))}
      {fuga && <li className="fuga"><span className="passo passo-fuga">↩</span><span /><span><strong>{fuga.rotulo}</strong> · a partir do passo {fuga.de_passo}</span></li>}
    </ol>
  );
}
```

(acrescente `Passo` ao import de tipos.)

`app/src/map/MapFlat.tsx` e `app/src/map/Map3D.tsx`: no rótulo do passo, troque `<span className="passo-minuto">{p.minuto}</span>` por `{p.minuto && <span className="passo-minuto">{p.minuto}</span>}` (passo de herói vem sem minuto e desenhava uma pílula preta vazia).

`app/src/heroes/FichaHeroi.tsx`: imports novos

```tsx
import { indiceSchema, rotaSchema, rotasResumoSchema, type ConteudoItem, type Fase, type Heroi, type Objetivo } from "../data/schemas";
import { Indisponivel, useData } from "../data/useData";
import { ListaPassos } from "../routes/RouteDetail";
import { objetivosDosPassos, variacoesDaFase } from "./fases";
```

e `AbaRotas` inteira, com os componentes dela:

```tsx
const PLANO_DO_GUIA = "guia";

function AbaRotas({ heroi, objetivos }: { heroi: Heroi; objetivos: Objetivo[] }) {
  const [lado, setLado] = useState<Lado>("radiant");
  const [indice, setIndice] = useState(0);
  const [variacao, setVariacao] = useState(PLANO_DO_GUIA);
  const fases = heroi.rotas[lado];
  const fase = fases[indice] ?? fases[0] ?? null;
  const trocarLado = (novo: Lado) => { setLado(novo); setIndice(0); setVariacao(PLANO_DO_GUIA); };
  const trocarFase = (nova: number) => { setIndice(nova); setVariacao(PLANO_DO_GUIA); };
  return (
    <div className="ficha-rotas">
      <div role="group" aria-label="Lado" className="seletor-opcoes seletor-botoes">
        {(["radiant", "dire"] as const).map((l) => (
          <button key={l} aria-pressed={lado === l} onClick={() => trocarLado(l)}>{l === "radiant" ? "Radiant" : "Dire"}</button>
        ))}
      </div>
      <div role="group" aria-label="Fase" className="seletor-opcoes seletor-pilulas">
        {fases.map((f, i) => <button key={f.janela} aria-pressed={i === indice} onClick={() => trocarFase(i)}>{f.janela}</button>)}
      </div>
      {fase && (
        <>
          <Variacoes fase={fase} lado={lado} heroi={heroi.id} atual={variacao} onEscolher={setVariacao} />
          {variacao === PLANO_DO_GUIA
            ? <PlanoDoGuia fase={fase} objetivos={objetivos} />
            : <RotaDaVariacao key={variacao} id={variacao} objetivos={objetivos} />}
        </>
      )}
      <RotasRelacionadas ids={heroi.rotas_relacionadas} />
    </div>
  );
}

type VariacoesProps = { fase: Fase; lado: Lado; heroi: string; atual: string; onEscolher: (id: string) => void };

function Variacoes({ fase, lado, heroi, atual, onEscolher }: VariacoesProps) {
  const indice = useData("/data/indice.json", indiceSchema);
  const rotas = useData("/data/rotas_resumo.json", rotasResumoSchema);
  for (const d of [indice, rotas]) if (d.estado === "indisponivel") return <Indisponivel motivo={d.motivo} />;
  if (indice.estado !== "ok" || rotas.estado !== "ok") return null;
  const variacoes = variacoesDaFase(fase, lado, { indice: indice.dados, rotas: rotas.dados, heroi });
  return (
    <div role="group" aria-label="Se o jogo for assim" className="seletor-opcoes seletor-pilulas">
      <button aria-pressed={atual === PLANO_DO_GUIA} onClick={() => onEscolher(PLANO_DO_GUIA)}>Plano do guia</button>
      {variacoes.map((v) => <button key={v.id} aria-pressed={atual === v.id} onClick={() => onEscolher(v.id)}>{v.rotulo}</button>)}
    </div>
  );
}

function PlanoDoGuia({ fase, objetivos }: { fase: Fase; objetivos: Objetivo[] }) {
  return (
    <>
      <p className="abertura">{fase.objetivo}</p>
      <div className="rota-mapa"><MapView objetivos={objetivosDosPassos(fase.passos, objetivos)} rota={fase} onSelecionar={semAcao} /></div>
      <ListaPassos passos={fase.passos} />
    </>
  );
}

function RotaDaVariacao({ id, objetivos }: { id: string; objetivos: Objetivo[] }) {
  const rota = useData(`/data/rotas/${id}.json`, rotaSchema);
  if (rota.estado === "carregando") return <p>Carregando a rota…</p>;
  if (rota.estado === "indisponivel") return <Indisponivel motivo={rota.motivo} />;
  const { pergunta, passos, fuga } = rota.dados;
  return (
    <>
      <p className="abertura">{pergunta} <Link to={`/rotas/${id}`}>Abrir em Rotas</Link></p>
      <div className="rota-mapa"><MapView objetivos={objetivosDosPassos(passos, objetivos)} rota={rota.dados} onSelecionar={semAcao} /></div>
      <ListaPassos passos={passos} fuga={fuga} />
    </>
  );
}

function RotasRelacionadas({ ids }: { ids: readonly string[] }) {
  if (ids.length === 0) return null;
  return (
    <details className="recolhivel">
      <summary>Rotas do PDF 06 que citam este herói ({ids.length})</summary>
      <ul className="pilulas">{ids.map((id) => <li key={id}><Link className="pilula" to={`/rotas/${id}`}>{id}</Link></li>)}</ul>
    </details>
  );
}
```

O tipo local `type Lado = "radiant" | "dire";` do `FichaHeroi.tsx` sai; use `import type { Lado } from "../routes/filtros";`.

- [ ] **Step 4: Rodar e ver passar**: `npm test` → PASS; `npx tsc -b`, `npm run lint` limpos.

- [ ] **Step 5: Verificação visual**. Telas: `["heroi-rotas", "/herois/anti_mage", (p) => p.getByRole("tab", { name: "Rotas" }).click()]`, `["heroi-rotas-lane-impossivel", "/herois/anti_mage", async (p) => { await p.getByRole("tab", { name: "Rotas" }).click(); await p.getByRole("button", { name: /lane impossível/ }).first().click(); }]`, `["heroi-rotas-juggernaut", "/herois/juggernaut", (p) => p.getByRole("tab", { name: "Rotas" }).click()]`. Compare com `Rotas.dc.html` (número do passo em círculo, minuto, texto na coluna larga) e com as capturas 16, 25, 45 e 48 da auditoria. Esperado: no mapa só os alvos dos passos; nenhuma pílula preta vazia; texto do passo na largura toda; na fase 0:00-8:00 do Anti-Mage pelo menos 4 opções além de "Plano do guia"; os 128 ids do Juggernaut recolhidos.

- [ ] **Step 6: Commit**

```bash
git add app/src/heroes app/src/routes/RouteDetail.tsx app/src/map/MapFlat.tsx app/src/map/Map3D.tsx
git commit -m "feat: show situation variants and only the phase targets on hero routes"
git push
```

---

### Task 11: Glossário com ícone de item, unidade em 3D e lugar no mapa

Corrige o problema 8.

**Files:**
- Create: `app/src/glossary/VisualDoTermo.tsx`, `app/src/glossary/VisualDoTermo.test.tsx`
- Modify: `app/src/glossary/links.ts`, `app/src/glossary/links.test.ts`, `app/src/glossary/GlossaryPage.tsx`, `app/src/styles.css`, `content/glossario/{roshan,tormentor,creep-melee,creep-ranged,creep-de-cerco}.md`, `export/tests/test_glossario.py`

**Interfaces:**
- Consumes: `textoExtra` (glossary/filtros), `MapView`, `VisualizadorUnidade` e `unidadeSchema` (1C), `objetivosSchema`
- Produces: `lugaresDoTermo<T extends { id: string; tipo: string }>(links: readonly string[], objetivos: readonly T[]): T[]`; `urlDoIconeDeItem(item: string): string`; componentes `IconeDoItem` e `VisualDoTermo`; chave `unidade:` no frontmatter do glossário.

- [ ] **Step 1: Testes que falham.** Em `app/src/glossary/links.test.ts`:

```ts
it("acha os lugares do termo pelo id ou pelo tipo do objetivo", () => {
  const objetivos = [{ id: "roshan_pit_top", tipo: "roshan" }, { id: "rad_ancient", tipo: "ancient" }, { id: "dire_ancient", tipo: "ancient" }];
  expect(lugaresDoTermo(["roshan", "stack"], objetivos).map((o) => o.id)).toEqual(["roshan_pit_top"]);
  expect(lugaresDoTermo(["rad_ancient"], objetivos).map((o) => o.id)).toEqual(["rad_ancient"]);
});
```

(acrescente `lugaresDoTermo` ao import.)

```tsx
// app/src/glossary/VisualDoTermo.test.tsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import type { ConteudoItem } from "../data/schemas";
import { IconeDoItem, VisualDoTermo } from "./VisualDoTermo";

const rosh = { id: "roshan_pit_top", tipo: "roshan", nome: "Poço do Roshan", x: 0.3, y: 0.6, lado: "neutro", detalhes: {} };
const aegis: ConteudoItem = {
  id: "aegis", titulo: "Aegis", patch: "7.41", fontes: [], secoes: { basico: "Volta à vida.", avancado: null },
  origem: { basico: null, avancado: null }, links: ["roshan"], extras: { categoria: "objetivo", unidade: "roshan" },
};

afterEach(() => vi.unstubAllGlobals());

it("mostra o ícone do item tirado do jogo", () => {
  render(<IconeDoItem item="abyssal_blade" nome="Abyssal Blade" />);
  expect(screen.getByAltText("Ícone de Abyssal Blade")).toHaveAttribute("src", "/data/retratos/itens/abyssal_blade.webp");
});

it("marca no mini mapa os lugares do termo e pede a ficha da unidade", async () => {
  const arquivos: Record<string, unknown> = { "/data/objetivos.json": [rosh] };
  vi.stubGlobal("fetch", (path: string) =>
    Promise.resolve(path in arquivos ? new Response(JSON.stringify(arquivos[path])) : new Response("", { status: 404 })));
  render(<MemoryRouter><VisualDoTermo termo={aegis} /></MemoryRouter>);
  expect(await screen.findByRole("button", { name: "Poço do Roshan" })).toBeInTheDocument();
  expect(screen.getByText("Onde fica no mapa")).toBeInTheDocument();
  expect(await screen.findByRole("alert")).toHaveTextContent("/data/unidades/roshan.json");
});
```

Em `export/tests/test_glossario.py`:

```python
DADOS = Path(__file__).resolve().parents[2] / "app" / "public" / "data"


def test_termo_com_unidade_aponta_para_unidade_exportada(termos):
    exportadas = {u["id"] for u in json.loads((DADOS / "unidades.json").read_text(encoding="utf-8"))}
    citadas = {t["extras"]["unidade"] for t in termos if "unidade" in t["extras"]}
    assert len(citadas) == 5
    assert citadas <= exportadas
```

- [ ] **Step 2: Rodar e ver falhar**: `npx vitest run src/glossary` → FAIL; `python -m pytest tests/test_glossario.py -q` → FAIL (`len(citadas) == 0`).

- [ ] **Step 3: Implementação.** Confira os ids das unidades exportadas pela 1C:

```bash
node -e "console.log(require('./app/public/data/unidades.json').filter(u => u.grupo !== 'selva').map(u => u.id).join(' '))"
```

e acrescente ao frontmatter (antes de `fontes:`) de cada termo o id certo: `content/glossario/roshan.md` → `unidade: roshan`; `tormentor.md` → `unidade: tormentor`; `creep-melee.md` → o creep melee do Radiant (esperado `creep_goodguys_melee`); `creep-ranged.md` → o ranged do Radiant (esperado `creep_goodguys_ranged`); `creep-de-cerco.md` → o de cerco do Radiant (o id que a lista mostrar com `siege`). Rode `python -m dota_export` para o `glossario.json` levar a chave nova.

`app/src/glossary/links.ts`, no fim:

```ts
// Links do glossário citam o objetivo pelo tipo ("camp" marca todos os camps) ou pelo id exato.
export function lugaresDoTermo<T extends { id: string; tipo: string }>(links: readonly string[], objetivos: readonly T[]): T[] {
  const alvos = new Set(links);
  return objetivos.filter((o) => alvos.has(o.id) || alvos.has(o.tipo));
}
```

```tsx
// app/src/glossary/VisualDoTermo.tsx
import { Link, useNavigate } from "react-router";
import { objetivosSchema, unidadeSchema, type ConteudoItem } from "../data/schemas";
import { Indisponivel, useData } from "../data/useData";
import { MapView } from "../map/MapView";
import { VisualizadorUnidade } from "../unidades/VisualizadorUnidade";
import "../unidades/unidades.css";
import { textoExtra } from "./filtros";
import { lugaresDoTermo } from "./links";

export const urlDoIconeDeItem = (item: string) => `/data/retratos/itens/${item}.webp`;

export function IconeDoItem({ item, nome }: { item: string; nome: string }) {
  return <img className="icone-item" src={urlDoIconeDeItem(item)} alt={`Ícone de ${nome}`} width={64} height={47} />;
}

function LugaresNoMapa({ links }: { links: readonly string[] }) {
  const objetivos = useData("/data/objetivos.json", objetivosSchema);
  const navigate = useNavigate();
  if (objetivos.estado === "indisponivel") return <Indisponivel motivo={objetivos.motivo} />;
  if (objetivos.estado === "carregando") return null;
  const lugares = lugaresDoTermo(links, objetivos.dados);
  if (lugares.length === 0) return null;
  return (
    <figure className="mini-mapa">
      <MapView objetivos={lugares} onSelecionar={(id) => navigate(`/mapa/${id}`)} forcarPlano />
      <figcaption>{lugares.length === 1 ? "Onde fica no mapa" : `Onde fica no mapa: ${lugares.length} lugares`}</figcaption>
    </figure>
  );
}

function UnidadeDoTermo({ id }: { id: string }) {
  const unidade = useData(`/data/unidades/${id}.json`, unidadeSchema);
  if (unidade.estado === "carregando") return <p>Carregando a unidade…</p>;
  if (unidade.estado === "indisponivel") return <Indisponivel motivo={unidade.motivo} />;
  const { nome, modelo, habilidades } = unidade.dados;
  return (
    <section className="unidade-do-termo" aria-label={`Unidade: ${nome}`}>
      <VisualizadorUnidade modelo={modelo} nome={nome} />
      <ul className="habilidades-curtas" aria-label="Habilidades">
        {habilidades.map((h) => (
          <li key={h.id}>
            {h.icone
              ? <img src={`/data/icones/${h.icone}.webp`} alt="" width={32} height={32} />
              : <span aria-hidden="true">{h.nome.charAt(0)}</span>}
            {h.nome}
          </li>
        ))}
      </ul>
      <Link className="pilula" to={`/glossario/unidades/${id}`}>Ficha completa de {nome}</Link>
    </section>
  );
}

// Unidade (modelo 3D e habilidades) e lugares no mapa; o ícone do item fica ao lado do título.
export function VisualDoTermo({ termo }: { termo: ConteudoItem }) {
  const unidade = textoExtra(termo, "unidade");
  return (
    <div className="termo-visual">
      {unidade && <UnidadeDoTermo id={unidade} />}
      {termo.links.length > 0 && <LugaresNoMapa links={termo.links} />}
    </div>
  );
}
```

`app/src/glossary/GlossaryPage.tsx`: importe `IconeDoItem, VisualDoTermo` de `./VisualDoTermo`. Em `TermoAberto`, depois de `const categoria = ...`, `const item = textoExtra(termo, "item");`; dentro de `.termo-titulo`, antes do `<h1>`, `{item && <IconeDoItem item={item} nome={termo.titulo} />}`; depois do `<div className="termo-texto">...</div>`, `<VisualDoTermo termo={termo} />`. Na lista, mostre o ícone pequeno nos termos de item:

```tsx
            <ul>{itens.map((t) => {
              const item = textoExtra(t, "item");
              return (
                <li key={t.id}>
                  <Link to={`/glossario/${t.id}`} aria-current={t.id === id ? "page" : undefined}>
                    {item && <img className="icone-item-lista" src={urlDoIconeDeItem(item)} alt="" width={24} height={18} loading="lazy" />}
                    {t.titulo}
                  </Link>
                </li>
              );
            })}</ul>
```

(importe também `urlDoIconeDeItem` e `textoExtra`, que já vem de `./filtros`.)

`app/src/styles.css`, seção "Glossário":

```css
.glossario-lista li a { gap: var(--espaco-2); }
.icone-item { flex-shrink: 0; border-radius: var(--raio-pequeno); box-shadow: 0 0 0 1px var(--cor-linha-pilula); }
.icone-item-lista { flex-shrink: 0; border-radius: 3px; }
.termo-visual { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: var(--espaco-5); align-items: start; }
.termo-visual:empty { display: none; }
.mini-mapa { margin: 0; display: flex; flex-direction: column; gap: var(--espaco-2); max-width: 360px; }
.mini-mapa figcaption { font-size: 13px; color: var(--cor-texto-3); }
.unidade-do-termo { display: flex; flex-direction: column; gap: var(--espaco-3); }
.unidade-do-termo .modelo { max-height: 280px; }
.habilidades-curtas { margin: 0; padding: 0; list-style: none; display: flex; flex-wrap: wrap; gap: var(--espaco-2); }
.habilidades-curtas li {
  display: inline-flex; align-items: center; gap: var(--espaco-2); padding: 4px 12px 4px 4px;
  border-radius: var(--raio-pilula); background: var(--cor-superficie-2); font-size: 13px; color: var(--cor-texto-2);
}
.habilidades-curtas img, .habilidades-curtas span { width: 32px; height: 32px; border-radius: 6px; }
.habilidades-curtas span { display: grid; place-items: center; background: var(--cor-superficie-3); font-family: var(--fonte-display); }
```

(`.glossario-lista li a` já é `display: flex; align-items: center`.)

- [ ] **Step 4: Rodar e ver passar**: `npm test` → PASS; `npx tsc -b`, `npm run lint` limpos; `python -m pytest -q` → PASS.

- [ ] **Step 5: Verificação visual**. Telas: `["glossario-item", "/glossario/abyssal-blade"]`, `["glossario-roshan", "/glossario/roshan"]`, `["glossario-aegis", "/glossario/aegis"]`, `["glossario-camp", "/glossario/camp"]`, `["glossario-lista", "/glossario"]`. Compare com `Glossario.dc.html` (lista à esquerda, termo grande à direita). Esperado: ícone do item ao lado do título e na lista; Roshan girando em 3D com as habilidades e ícones; mini mapa com os lugares; em 390 sem rolagem lateral.

- [ ] **Step 6: Commit**

```bash
git add app/src/glossary app/src/styles.css content/glossario export/tests/test_glossario.py
git commit -m "feat: show item icons, units and map places in the glossary"
git push
```

---

### Task 12: Busca que fecha e resultados com respiro

Corrige os defeitos K e L.

**Files:**
- Modify: `app/src/search/SearchBox.tsx`, `app/src/search/SearchBox.test.tsx`, `app/src/styles.css`

**Interfaces:**
- Produces: a lista de resultados fecha com Esc e quando o foco sai da caixa de busca.

- [ ] **Step 1: Teste que falha**, em `SearchBox.test.tsx`:

```tsx
it("Esc e foco fora da busca fecham os resultados", () => {
  vi.stubGlobal("fetch", vi.fn(() => new Promise(() => {})));
  render(<MemoryRouter><SearchBox /><button>fora</button></MemoryRouter>);
  const campo = screen.getByRole("searchbox");
  fireEvent.focus(campo);
  fireEvent.change(campo, { target: { value: "rosh" } });
  expect(screen.getByText("Carregando a busca.")).toBeInTheDocument();
  fireEvent.keyDown(campo, { key: "Escape" });
  expect(screen.queryByText("Carregando a busca.")).not.toBeInTheDocument();
  fireEvent.change(campo, { target: { value: "roshan" } });
  expect(screen.getByText("Carregando a busca.")).toBeInTheDocument();
  fireEvent.focusOut(campo, { relatedTarget: screen.getByRole("button", { name: "fora" }) });
  expect(screen.queryByText("Carregando a busca.")).not.toBeInTheDocument();
});
```

- [ ] **Step 2: Rodar e ver falhar**: `npx vitest run src/search` → FAIL.

- [ ] **Step 3: Implementação.** Em `SearchBox`, troque o `<div className="busca">` e os eventos do `<input>`:

```tsx
    <div className="busca" onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setAtiva(false); }}>
```

```tsx
          onFocus={() => setAtiva(true)}
          onChange={(e) => { setConsulta(e.target.value); setAtiva(true); }}
          onKeyDown={(e) => { if (e.key === "Escape") setAtiva(false); }}
```

`app/src/styles.css`, seção "Casca": troque `.busca li` e `.busca li a` por

```css
.busca li { display: grid; grid-template-columns: 84px minmax(0, 1fr); align-items: center; gap: var(--espaco-2); padding: 0 var(--espaco-3); }
.busca li a { display: block; padding: 11px 0; color: var(--cor-texto); text-decoration: none; }
```

- [ ] **Step 4: Rodar e ver passar**: `npm test` → PASS.

- [ ] **Step 5: Verificação visual**. Telas: `["busca", "/", async (p) => { await p.getByRole("searchbox").fill("roshan"); }]`, `["busca-esc", "/", async (p) => { await p.getByRole("searchbox").fill("roshan"); await p.keyboard.press("Escape"); }]`. Esperado: etiquetas numa coluna alinhada, cada resultado com 44 px ou mais; com Esc a lista some.

- [ ] **Step 6: Commit**

```bash
git add app/src/search app/src/styles.css
git commit -m "fix: close search results on escape and focus out"
git push
```

---

### Task 15: Verificação final da fase 1D

**Files:**
- Create: `docs/superpowers/verificacao/2026-10-06-fase1d-ux.md`

- [ ] **Step 1: Testes e build**: `cd app && npm test && npx tsc -b && npm run lint && npm run build`; `cd ../export && python -m pytest -q && python -m dota_export`. Tudo verde.

- [ ] **Step 2: Captura de todas as telas** com o roteiro, nas duas larguras: mapa (sem objetivo, Roshan Básico e Avançado, camp Básico e Avançado, Camadas abertas), rotas (inicial, três toques, rota aberta), heróis (lista, ficha, as 5 abas, uma variação de rota), jogadores (lista, painel do Felipe com gráfico, time), glossário (lista, item, Roshan, Aegis), busca (com resultado, sem resultado, depois do Esc). Mapa também em 800 e 1024.

- [ ] **Step 3: Conferência.** Para cada um dos 8 problemas e dos 21 defeitos da auditoria, compare a captura "antes" (`dota-hub-auditoria\`) com a "depois" (`dota-hub-auditoria\1d\`) e com o quadro de `docs/design/v1`. Rode o contraste e os alvos de toque nas telas principais (o mesmo `evaluate` da auditoria).

- [ ] **Step 4: Registro** em `docs/superpowers/verificacao/2026-10-06-fase1d-ux.md`: tabela problema, captura antes, captura depois, resultado; medições (rolagem lateral, alvos, contraste, console); o que ficou de fora com o motivo: erro R (rótulo `Html` do drei desmontado no meio do render, sem efeito visível), aviso S (`THREE.Clock` do fiber 9.8) e dado U (vitórias dos pros sem dado na fonte).

- [ ] **Step 5: Commit**

```bash
git add docs/superpowers/verificacao/2026-10-06-fase1d-ux.md
git commit -m "docs: record phase 1d visual verification"
```

---

### Task 13: Solo de Roshan por herói (pesquisa em replays) e correção do texto do Roshan

Origem: pesquisa de 06/10/2026 em `C:\Users\felip\Desktop\dota-roshan-solo` (1.328 replays do 7.41, 111 solos confirmados; achados em `work/solo_roshan.md`, uma linha por solo em `work/solos_linha_a_linha.md`). Os textos prontos estão em `C:\Users\felip\Desktop\dota-roshan-solo\content\roshan_solo\` (huskar, ursa, nevermore, beastmaster, spectre, gyrocopter, kez), no formato de conteúdo do Dota Hub (frontmatter com `id`, `titulo`, `patch: 7.41`, `fontes` com "replay <match_id>", `origem: replay`, `replay`; corpo com `## Básico` e `## Avançado`). Esta tarefa roda antes da verificação final (Task 14).

**Files:**
- Create: `content/roshan_solo/<heroi>.md` (copiar os 7 arquivos sem mudar o texto)
- Modify: `export/tests/test_roshan.py` (trocar `test_solo_fica_vazio_ate_ter_fonte_741` por um teste que valida o conteúdo), `content/objetivos/roshan.md` (a frase que diz que quase nenhum Roshan cai antes de 15:00 está errada: na pesquisa, 29 solos de Huskar em jogo pro começaram antes de 15:00; corrigir com o número e a fonte)
- Modify: o ponto do app que mostra o solo (Avançado do Roshan no painel do objetivo e a aba Roshan da ficha do herói; conferir os nomes reais em main)

**Interfaces:** consome `conteudo.carregar` e o JSON `roshan_solo.json` que o export já grava; não cria interface nova.

- [ ] **Step 1: Teste que falha**

```python
# export/tests/test_roshan.py (substitui test_solo_fica_vazio_ate_ter_fonte_741)
def test_solo_vem_de_replay_com_fonte_741():
    solos = conteudo.carregar(SOLO)
    ids = {s["id"] for s in solos}
    assert {"roshan-solo-huskar", "roshan-solo-ursa"} <= ids
    for s in solos:
        assert s["patch"] == "7.41"
        assert s["fontes"] and all(f.startswith("replay ") for f in s["fontes"])
        assert s["secoes"]["basico"] and s["secoes"]["avancado"]
```

- [ ] **Step 2: Rodar e ver falhar**: `python -m pytest export/tests/test_roshan.py -q` falha (pasta vazia).
- [ ] **Step 3: Implementação**: copiar os 7 arquivos para `content/roshan_solo/`; ajustar o loader só se o frontmatter deles usar uma chave que ele não lê (registrar no relatório); corrigir a frase de `content/objetivos/roshan.md`; no app, mostrar no Avançado do Roshan a lista de heróis que solam (Huskar primeiro, com o n de solos) e, ao escolher um, o Básico e o Avançado do arquivo, com o selo "Visto em N replays"; na ficha de cada um desses 7 heróis, a aba Roshan mostra o mesmo conteúdo.
- [ ] **Step 4: Rodar e ver passar**: pytest e `python -m dota_export`; `npm test` e `npm run build`; captura obrigatória em 1440×900 e 390×844 (Roshan, Avançado, Huskar; e a ficha do Huskar, aba Roshan) comparada com `docs/design/v1/Main.dc.html`.
- [ ] **Step 5: Commit**: `feat: add replay-confirmed roshan solo guides`

---

### Task 14: Conferir e corrigir os modelos 3D das unidades

O Felipe viu a "Criatura Porta-Bandeira" normal do Dire (`creep_badguys_flagbearer`, modelo `app/public/data/modelos/creep_bad_flagbearer.glb`, gerado pela fase 1C) aparecer bugada na tela Unidades. A 1C conferiu só alguns modelos pela imagem. Esta tarefa abre todos.

**Files:**
- Create: `app/scripts/capturar-modelos.mjs` (com o Playwright MCP ou o Playwright da 1C, abre `/glossario/unidades/<id>` de cada unidade e grava uma captura em `docs/superpowers/verificacao/modelos/<id>.png`)
- Modify: o que a causa exigir em `export/dota_export/modelos.py` (escolha da animação, escala, materiais, malha de LOD, partes extras do modelo) ou em `app/src/unidades/Cena3D.tsx` / `materiais.ts` (enquadramento, materiais)
- Test: `export/tests/test_modelos.py` (um teste que trave a causa encontrada, por exemplo a animação escolhida ou a contagem de malhas do flagbearer)

- [ ] **Step 1: Capturar todas as unidades** (71 unidades, 59 modelos) e olhar cada captura; listar em `docs/superpowers/verificacao/2026-10-06-modelos-3d.md` as que estão quebradas (pose estranha, partes soltas, escala, textura errada, preto, fora do quadro), começando pelo Porta-Bandeira do Dire, comparando com o mesmo creep do Radiant e com o jogo.
- [ ] **Step 2: Achar a causa** de cada quebrado no export ou no visualizador e escrever o teste que falha por ela.
- [ ] **Step 3: Corrigir** no lugar da causa (nunca à mão no .glb) e regerar os modelos afetados com `python -m dota_export`.
- [ ] **Step 4: Capturar de novo** as unidades corrigidas e registrar antes e depois no mesmo arquivo; `pytest`, `npm test` e `npm run build` passam.
- [ ] **Step 5: Commit**: `fix: correct broken unit models found by visual check`
