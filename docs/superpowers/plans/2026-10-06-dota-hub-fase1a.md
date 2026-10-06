# Dota Hub, fase 1A (mapa, objetivos, rotas, glossário, busca) — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Uma primeira versão usável do Dota Hub: mapa 7.41 em 2.5D clicável com painel Básico/Avançado dos objetivos, todas as rotas dos PDFs 03 e 06 pesquisáveis e desenhadas no mapa, glossário inicial e busca global.

**Architecture:** Um pacote Python (`export/`) lê os projetos de análise e gera arquivos JSON validados por JSON Schema em `app/public/data/`. Um app React + Vite + TypeScript (`app/`) só lê esses JSON (validados de novo na entrada com zod) e o conteúdo em Markdown (`content/`, convertido em JSON pela exportação). O mapa fica atrás da interface `MapView` (props tipadas), com implementação 2.5D em react-three-fiber e queda para imagem plana sem WebGL.

**Tech Stack:** Python 3.13, pytest, jsonschema, Pillow, numpy; Node 22, Vite 6, React 19, TypeScript 5 (strict), react-three-fiber 9 + drei, zod 3, react-router 7, vitest 3 + Testing Library, minisearch 7.

**Spec:** `docs/superpowers/specs/2026-10-06-dota-hub-design.md` (decisão técnica em `docs/superpowers/decisions/2026-10-06-stack.md`).

**Escopo deste plano (1A):** telas Mapa, Rotas, Glossário e Busca global, com o conteúdo básico dos objetivos e o avançado de Roshan, Tormentor, torres e runas. A fase 1B (plano separado, escrito depois que o Felipe e o amigo usarem a 1A) cobre Heróis, Jogadores e times, camada de trajetórias de replay, solo de Roshan por herói e o glossário completo (150 a 250 termos).

## Global Constraints

- Texto da interface e do conteúdo em português do Brasil, com acentos, frases curtas, sem travessão.
- Nenhum dado digitado à mão no app: tudo vem de `app/public/data/*.json` gerado por `export/`.
- Todo número de conteúdo tem `fonte` e `patch` no frontmatter; recomendação marcada `origem: recomendado` ou `origem: replay` (com `replay: <id>`).
- Coordenadas do mapa normalizadas: x de 0 (esquerda) a 1 (direita), y de 0 (baixo) a 1 (cima), Radiant embaixo à esquerda (as mesmas de `dota-imortal/src/gps/basemap.py`).
- Patch dos dados: 7.41.
- Critérios de desempenho da spec: primeira tela em menos de 3 s em celular 4G; mapa com pelo menos 30 fps em celular intermediário; busca em menos de 0,3 s por tecla.
- Os projetos de origem (`Desktop/dota-imortal`, `dota-hane`, `dota-leonardo`, `dota-yuma`) são só leitura: o export nunca escreve neles.
- TypeScript em modo strict, sem `any`; funções puras para filtro, busca e conversão de coordenadas.
- Commits no formato `type: descrição em minúscula`, sem menção a IA.

## Review Focus

1. Rota com passo cujo alvo não existe no mapa (id desconhecido, ponto livre `{x,y}`, ou `lane_top:0.55`): o export resolve as três formas ou falha com mensagem que diz o id e a rota (teste no Task 3).
2. Arquivo de dados ausente ou com formato errado no app: a seção mostra "dados indisponíveis" e o resto do app continua (teste no Task 5).
3. Celular sem WebGL: o mapa cai para a imagem plana com os mesmos objetos clicáveis (teste no Task 6).
4. Busca com acento, maiúscula ou digitação parcial ("rosh", "Roshán", "pull"): acha o mesmo resultado; sem resultado sugere termos parecidos (teste no Task 9).
5. Objetivo sem texto avançado: a aba mostra "ainda não escrito" e não fica vazia (teste no Task 7).

---

## File Structure

```
dota-hub/
  README.md                          como rodar export e app
  export/
    pyproject.toml                   pacote dota_export, pytest
    dota_export/__init__.py
    dota_export/fontes.py            caminhos dos projetos de origem e import de basemap/paths
    dota_export/mapa.py              textura alinhada (UV = coordenada normalizada) e objetos do mapa
    dota_export/rotas.py             rotas do 03 e do 06 + caminhos andando + índice minuto × situação
    dota_export/conteudo.py          Markdown de content/ para JSON
    dota_export/validar.py           validação contra export/schemas
    dota_export/__main__.py          `python -m dota_export` gera tudo
    schemas/objetivos.schema.json
    schemas/rotas.schema.json
    schemas/indice.schema.json
    schemas/conteudo.schema.json
    schemas/meta.schema.json
    tests/test_mapa.py
    tests/test_rotas.py
    tests/test_conteudo.py
  content/
    objetivos/<id>.md                básico/avançado por objetivo (frontmatter: id, titulo, patch, fontes)
    glossario/<termo>.md             termo, definição, links
  app/
    package.json, vite.config.ts, tsconfig.json, index.html
    src/main.tsx, src/App.tsx        rotas de tela e layout
    src/data/schemas.ts              zod: Objetivo, Rota, Indice, Conteudo, Meta
    src/data/load.ts                 loadJson<T>(path, schema): Promise<Result<T>>
    src/data/useData.ts              hook com estados loading/ok/indisponivel
    src/map/MapView.tsx              interface pública do mapa (escolhe 2.5D ou plano)
    src/map/Map3D.tsx                react-three-fiber
    src/map/MapFlat.tsx              fallback em SVG sobre a imagem
    src/map/coords.ts                normToWorld, normToPercent
    src/map/webgl.ts                 hasWebGL()
    src/objectives/ObjectivePanel.tsx
    src/routes/filtros.ts            filtrarRotas, rotaDaCelula
    src/routes/RoutesPage.tsx
    src/routes/RouteDetail.tsx
    src/glossary/GlossaryPage.tsx
    src/search/index.ts              construirIndice, buscar, sugerir (minisearch)
    src/search/SearchBox.tsx
    src/layout/Shell.tsx             navegação + rodapé (data da exportação e patch)
    src/styles.css
    src/**/*.test.ts(x)
```

---

### Task 1: Esqueleto do repositório (export + app) com testes rodando

**Files:**
- Create: `README.md`, `.gitignore`, `export/pyproject.toml`, `export/dota_export/__init__.py`, `export/dota_export/fontes.py`, `export/tests/test_fontes.py`
- Create: `app/` via Vite (`package.json`, `vite.config.ts`, `tsconfig.json`, `index.html`, `src/main.tsx`, `src/App.tsx`, `src/App.test.tsx`)

**Interfaces:**
- Produces: `dota_export.fontes.IMORTAL: Path`, `fontes.MINUTO_SPECS: Path`, `fontes.GPS_SPECS: Path`, `fontes.ESTUDOS_SPECS: Path`, `fontes.CADEIA: Path`, `fontes.FEATURES: Path`, `fontes.MAP_IMAGE: Path`, `fontes.gps() -> tuple[module basemap, module paths]`; `app/` com `npm test` e `npm run build` funcionando.

- [ ] **Step 1: Teste que falha (Python)**

```python
# export/tests/test_fontes.py
from dota_export import fontes

def test_fontes_apontam_para_arquivos_que_existem():
    for caminho in (fontes.FEATURES, fontes.MAP_IMAGE, fontes.CADEIA, fontes.GPS_SPECS, fontes.MINUTO_SPECS):
        assert caminho.exists(), caminho

def test_gps_importa_basemap_e_paths():
    basemap, paths = fontes.gps()
    assert basemap.resolve("rad_safe_small_1") == (0.724, 0.221)
    assert paths.path_between((0.724, 0.221), (0.70, 0.25)).length > 0
```

- [ ] **Step 2: Rodar e ver falhar**

Run: `cd export && python -m pip install -e .[dev] && python -m pytest -q`
Expected: FAIL (módulo `dota_export` não existe)

- [ ] **Step 3: Implementação mínima**

```toml
# export/pyproject.toml
[project]
name = "dota_export"
version = "0.1.0"
requires-python = ">=3.13"
dependencies = ["numpy", "Pillow", "jsonschema>=4", "matplotlib"]
[project.optional-dependencies]
dev = ["pytest>=8"]
[tool.setuptools.packages.find]
include = ["dota_export*"]
```

```python
# export/dota_export/fontes.py
"""Onde ficam os projetos de análise (só leitura) e como importar o motor do GPS deles."""
import importlib
import sys
from pathlib import Path
from types import ModuleType

DESKTOP = Path.home() / "Desktop"
IMORTAL = DESKTOP / "dota-imortal"
FEATURES = IMORTAL / "work" / "map_features_corrigido.json"
MAP_IMAGE = IMORTAL / "work" / "ref" / "mapa" / "game_map_7.41.jpg"
GPS_SPECS = IMORTAL / "work" / "gps" / "specs"
MINUTO_SPECS = IMORTAL / "work" / "minuto" / "specs"
ESTUDOS_SPECS = IMORTAL / "work" / "minuto" / "estudos" / "specs"
CADEIA = IMORTAL / "work" / "minuto" / "cadeia.json"


def gps() -> tuple[ModuleType, ModuleType]:
    src = str(IMORTAL / "src")
    if src not in sys.path:
        sys.path.insert(0, src)
    return importlib.import_module("gps.basemap"), importlib.import_module("gps.paths")
```

```gitignore
# .gitignore
node_modules/
app/dist/
app/public/data/
__pycache__/
*.egg-info/
.venv/
```

App: `cd app && npm create vite@latest . -- --template react-ts && npm i && npm i -D vitest @testing-library/react @testing-library/jest-dom jsdom`. Em `vite.config.ts` acrescente `test: { environment: "jsdom", setupFiles: ["./src/setupTests.ts"] }` e crie `src/setupTests.ts` com `import "@testing-library/jest-dom/vitest";`. Em `package.json`, `"test": "vitest run"`. Em `tsconfig.json`, `"strict": true`.

```tsx
// app/src/App.test.tsx
import { render, screen } from "@testing-library/react";
import App from "./App";

it("mostra o nome do app", () => {
  render(<App />);
  expect(screen.getByText("Dota Hub")).toBeInTheDocument();
});
```

```tsx
// app/src/App.tsx
export default function App() {
  return <h1>Dota Hub</h1>;
}
```

- [ ] **Step 4: Rodar e ver passar**

Run: `cd export && python -m pytest -q` → 2 passed. `cd app && npm test` → 1 passed. `npm run build` → sem erro.

- [ ] **Step 5: README e commit**

README: como instalar (`pip install -e export[dev]`, `npm i` em `app/`), gerar dados (`python -m dota_export`), rodar (`npm run dev`).

```bash
git add README.md .gitignore export app
git commit -m "chore: scaffold export package and app"
```

---

### Task 2: Exportar o mapa (textura alinhada e objetos)

**Files:**
- Create: `export/dota_export/mapa.py`, `export/dota_export/validar.py`, `export/schemas/objetivos.schema.json`, `export/tests/test_mapa.py`

**Interfaces:**
- Consumes: `fontes.gps()`, `fontes.FEATURES`, `fontes.MAP_IMAGE`
- Produces: `mapa.textura_alinhada(tamanho: int) -> PIL.Image` (pixel (i, j) = coordenada normalizada (i/tamanho, 1 − j/tamanho)); `mapa.objetos() -> list[dict]` com chaves `id, tipo, nome, x, y, lado, detalhes`; `validar.validar(nome_schema: str, dados) -> None` (lança `ValueError` com o caminho do erro); arquivos `app/public/data/mapa_4096.jpg`, `mapa_2048.jpg`, `objetivos.json`.

- [ ] **Step 1: Testes que falham**

```python
# export/tests/test_mapa.py
from dota_export import mapa, validar

def test_objetos_cobrem_os_tipos_do_mapa():
    tipos = {o["tipo"] for o in mapa.objetos()}
    assert {"roshan", "tormentor", "torre", "camp", "runa", "lotus", "watcher", "outpost", "loja", "twin_gate", "barracks"} <= tipos

def test_objetos_validam_no_schema():
    validar.validar("objetivos", mapa.objetos())

def test_camp_tem_codigo_curto():
    camp = next(o for o in mapa.objetos() if o["id"] == "rad_safe_small_1")
    assert camp["detalhes"]["codigo"] == "R1"

def test_textura_alinha_coordenada_normalizada():
    img = mapa.textura_alinhada(256)
    assert img.size == (256, 256)
    # a fonte Radiant (0,09; 0,124) fica no canto de baixo à esquerda da textura
    x, y = 0.09, 0.124
    assert img.getpixel((int(x * 256), int((1 - y) * 256))) != (0, 0, 0)
```

- [ ] **Step 2: Rodar e ver falhar** — Run: `python -m pytest export/tests/test_mapa.py -q` → FAIL (`mapa` não existe).

- [ ] **Step 3: Implementação**

```python
# export/dota_export/mapa.py
"""Mapa 7.41 para o app: textura em que UV = coordenada normalizada, e os objetos clicáveis."""
import numpy as np
from PIL import Image

from . import fontes

TIPO_POR_GRUPO = {"roshan": "roshan", "tormentors": "tormentor", "towers": "torre", "barracks": "barracks",
                  "camps": "camp", "runes": "runa", "lotus_pools": "lotus", "watchers": "watcher",
                  "shops": "loja", "twin_gates": "twin_gate", "ancients": "ancient", "fountains": "fonte"}


def textura_alinhada(tamanho: int) -> Image.Image:
    basemap, _ = fontes.gps()
    fonte = Image.open(fontes.MAP_IMAGE).convert("RGB")
    u = (np.arange(tamanho) + 0.5) / tamanho
    xs, ys = np.meshgrid(u, 1 - u)
    px, py = basemap.norm_to_px(xs, ys)
    w, h = fonte.size
    px, py = np.clip(px, 0, w - 1).astype(int), np.clip(py, 0, h - 1).astype(int)
    return Image.fromarray(np.asarray(fonte)[py, px])


def _codigo_camp(camp: dict, basemap) -> str | None:
    return basemap.camp_label(camp["id"]) if hasattr(basemap, "camp_label") else None


def objetos() -> list[dict]:
    basemap, _ = fontes.gps()
    saida = []
    for grupo, itens in basemap.features().items():
        tipo = TIPO_POR_GRUPO.get(grupo) or ("outpost" if grupo == "other" else None)
        if tipo is None:
            continue
        for f in itens:
            if grupo == "other" and f.get("tipo") != "outpost":
                continue
            if "x" not in f:
                continue
            detalhes = {k: v for k, v in f.items() if k not in ("id", "nome_pt", "x", "y", "side")}
            if tipo == "camp":
                detalhes["codigo"] = _codigo_camp(f, basemap)
            saida.append({"id": f["id"], "tipo": tipo, "nome": f.get("nome_pt", f["id"]),
                          "x": f["x"], "y": f["y"], "lado": f.get("side", "neutro"), "detalhes": detalhes})
    return saida
```

Antes de implementar `_codigo_camp`, procure em `dota-imortal/src/gps/` a função que já gera os códigos R1..R14/D1..D14 (`grep -rn "R1" dota-imortal/src/gps/layout.py dota-imortal/src/minuto/montar_cadeia.py`, a função `camp_label` existe em `montar_cadeia.py`) e importe a mesma em vez de reescrever; ajuste o import se ela estiver em outro módulo.

```python
# export/dota_export/validar.py
import json
from pathlib import Path

import jsonschema

SCHEMAS = Path(__file__).resolve().parents[1] / "schemas"


def validar(nome_schema: str, dados) -> None:
    schema = json.loads((SCHEMAS / f"{nome_schema}.schema.json").read_text(encoding="utf-8"))
    erros = sorted(jsonschema.Draft202012Validator(schema).iter_errors(dados), key=lambda e: list(e.path))
    if erros:
        e = erros[0]
        raise ValueError(f"{nome_schema}: {'/'.join(map(str, e.path))}: {e.message}")
```

```json
// export/schemas/objetivos.schema.json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "array",
  "items": {
    "type": "object",
    "required": ["id", "tipo", "nome", "x", "y", "lado", "detalhes"],
    "properties": {
      "id": {"type": "string", "minLength": 1},
      "tipo": {"enum": ["roshan", "tormentor", "torre", "barracks", "camp", "runa", "lotus", "watcher", "outpost", "loja", "twin_gate", "ancient", "fonte"]},
      "nome": {"type": "string"},
      "x": {"type": "number", "minimum": 0, "maximum": 1},
      "y": {"type": "number", "minimum": 0, "maximum": 1},
      "lado": {"enum": ["radiant", "dire", "neutro"]},
      "detalhes": {"type": "object"}
    }
  }
}
```

- [ ] **Step 4: Rodar e ver passar** — `python -m pytest export/tests/test_mapa.py -q` → 4 passed. Abra `textura_alinhada(1024)` salva em arquivo temporário e confira com os olhos que a fonte Radiant está embaixo à esquerda e o Roshan no rio.

- [ ] **Step 5: Commit** — `git add export && git commit -m "feat: export aligned map texture and map objects"`

---

### Task 3: Exportar rotas (03 e 06), caminhos andando e índice minuto × situação

**Files:**
- Create: `export/dota_export/rotas.py`, `export/schemas/rotas.schema.json`, `export/schemas/indice.schema.json`, `export/tests/test_rotas.py`

**Interfaces:**
- Consumes: `fontes.gps()`, `fontes.GPS_SPECS`, `fontes.MINUTO_SPECS`, `fontes.ESTUDOS_SPECS`, `fontes.CADEIA`, `validar.validar`
- Produces: `rotas.resolver_alvo(alvo) -> tuple[float, float]` (aceita id do mapa, `{"x":..,"y":..}` e `"lane_top:0.55"`; lança `ValueError(f"alvo desconhecido: {alvo}")`); `rotas.carregar_rotas() -> list[dict]` com `id, pdf ("03"|"06"), lado, pergunta, titulo, secao, janela {de, ate}, estado (dict|null), origem ("recomendada"|"real"), replay (str|null), passos [{n, alvo, x, y, rotulo, minuto, acao, risco}], caminhos [[[x,y],...]] (um por trecho), fuga {de_passo, x, y, rotulo}|null, proxima [ids], se [{condicao, rota}], interrupcao [{condicao, acao, rota}], porque`; `rotas.indice() -> dict` `{colunas: [..11], radiant: [{minuto, cenarios: {col: {id|null, nota|null}}}], dire: [...]}`; arquivos `rotas.json` e `indice.json`.

- [ ] **Step 1: Testes que falham**

```python
# export/tests/test_rotas.py
import pytest
from dota_export import rotas, validar

def test_resolve_as_tres_formas_de_alvo():
    assert rotas.resolver_alvo("rad_safe_small_1") == (0.724, 0.221)
    assert rotas.resolver_alvo({"x": 0.5, "y": 0.4}) == (0.5, 0.4)
    x, y = rotas.resolver_alvo("lane_top:0.55")
    assert 0 <= x <= 1 and 0 <= y <= 1

def test_alvo_desconhecido_diz_qual():
    with pytest.raises(ValueError, match="alvo desconhecido: xyz"):
        rotas.resolver_alvo("xyz")

def test_carrega_todas_as_rotas_do_03_e_do_06():
    todas = rotas.carregar_rotas()
    ids = {r["id"] for r in todas}
    assert {"G-R-02", "MA-R-01", "MT-D-51", "RR-D-02"} <= ids
    assert len(todas) >= 500
    validar.validar("rotas", todas)

def test_passos_tem_caminho_entre_eles():
    r = next(r for r in rotas.carregar_rotas() if r["id"] == "MA-R-01")
    assert len(r["caminhos"]) == len(r["passos"]) - 1
    assert all(len(c) >= 2 for c in r["caminhos"])

def test_indice_tem_minutos_4_a_30_e_11_colunas():
    ind = rotas.indice()
    validar.validar("indice", ind)
    assert [l["minuto"] for l in ind["radiant"]] == list(range(4, 31))
    assert len(ind["colunas"]) == 11
```

- [ ] **Step 2: Rodar e ver falhar** — `python -m pytest export/tests/test_rotas.py -q` → FAIL.

- [ ] **Step 3: Implementação**

```python
# export/dota_export/rotas.py
"""Rotas dos PDFs 03 e 06 com coordenadas, caminhos andando e o índice minuto × situação."""
import json
from functools import cache
from pathlib import Path

from . import fontes

CAMPOS_TEXTO = ("pergunta", "porque")


def _ler(caminho: Path) -> dict:
    return json.loads(caminho.read_text(encoding="utf-8"))


def resolver_alvo(alvo) -> tuple[float, float]:
    if isinstance(alvo, dict):
        return (float(alvo["x"]), float(alvo["y"]))
    basemap, _ = fontes.gps()
    try:
        x, y = basemap.resolve(alvo)
    except (KeyError, ValueError) as erro:
        raise ValueError(f"alvo desconhecido: {alvo}") from erro
    return (round(float(x), 4), round(float(y), 4))


@cache
def _caminho(a: tuple[float, float], b: tuple[float, float]) -> list[list[float]]:
    _, paths = fontes.gps()
    pts = paths.path_between(a, b).points
    return [[round(float(x), 4), round(float(y), 4)] for x, y in pts]


def _arquivos() -> list[tuple[str, Path]]:
    return ([("03", p) for p in sorted(fontes.GPS_SPECS.glob("*.json")) if not p.name.startswith("Z_")]
            + [("06", p) for p in sorted(fontes.MINUTO_SPECS.glob("*.json"))]
            + [("06", p) for p in sorted(fontes.ESTUDOS_SPECS.glob("*.json"))])


def _rota(pdf: str, secao: dict, r: dict) -> dict:
    passos = []
    for p in r["passos"]:
        try:
            x, y = resolver_alvo(p["alvo"])
        except ValueError as erro:
            raise ValueError(f"{r['id']} passo {p['n']}: {erro}") from erro
        passos.append({"n": p["n"], "alvo": p["alvo"] if isinstance(p["alvo"], str) else "ponto",
                       "x": x, "y": y, "rotulo": p.get("rotulo", ""), "minuto": p.get("minuto", ""),
                       "acao": p.get("acao", ""), "risco": p.get("risco", "seguro")})
    fuga = r.get("fuga")
    if fuga:
        fx, fy = resolver_alvo(fuga["para"])
        fuga = {"de_passo": fuga["de_passo"], "x": fx, "y": fy, "rotulo": fuga.get("rotulo", "FUGA")}
    return {
        "id": r["id"], "pdf": pdf, "lado": r["lado"], "pergunta": r["pergunta"],
        "titulo": r.get("titulo_curto", ""), "secao": f"{secao.get('numero', '')} {secao.get('titulo', '')}".strip(),
        "janela": r.get("janela", {}), "estado": r.get("estado"), "origem": r.get("origem", "recomendada"),
        "replay": str(r["replay"]) if r.get("replay") else None, "passos": passos,
        "caminhos": [_caminho((a["x"], a["y"]), (b["x"], b["y"])) for a, b in zip(passos, passos[1:])],
        "fuga": fuga, "proxima": list(r.get("proxima", [])),
        "se": [{"condicao": s["condicao"], "rota": s.get("rota")} for s in r.get("se", [])],
        "interrupcao": [{"condicao": i["condicao"], "acao": i.get("acao", ""), "rota": i.get("rota")} for i in r.get("interrupcao", [])],
        "porque": r.get("porque", ""),
    }


def carregar_rotas() -> list[dict]:
    return [_rota(pdf, secao, r) for pdf, arq in _arquivos()
            for secao in _ler(arq).get("secoes", []) for r in secao.get("rotas", [])]


def indice() -> dict:
    cadeia = _ler(fontes.CADEIA)
    def linhas(lado: str) -> list[dict]:
        return [{"minuto": l["minuto"],
                 "cenarios": {c: {"id": v.get("id"), "nota": v.get("nota") or v.get("na")} for c, v in l["cenarios"].items()}}
                for l in cadeia[lado]["tabela"]]
    return {"colunas": cadeia["colunas"], "radiant": linhas("radiant"), "dire": linhas("dire")}
```

Se `paths.path_between(...)` não expuser `.points`, use o nome real do atributo da polilinha de `WalkPath` (veja `dota-imortal/src/gps/paths.py`, classe `WalkPath`) e ajuste esta única linha.

```json
// export/schemas/rotas.schema.json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "array",
  "items": {
    "type": "object",
    "required": ["id", "pdf", "lado", "pergunta", "passos", "caminhos", "proxima", "origem"],
    "properties": {
      "id": {"type": "string", "pattern": "^[A-Z]{1,2}-(R|D)-\\d{2}$"},
      "pdf": {"enum": ["03", "06"]},
      "lado": {"enum": ["radiant", "dire"]},
      "origem": {"enum": ["recomendada", "real"]},
      "passos": {"type": "array", "minItems": 1, "items": {"type": "object", "required": ["n", "x", "y", "minuto"],
        "properties": {"x": {"type": "number", "minimum": -0.05, "maximum": 1.05}, "y": {"type": "number", "minimum": -0.05, "maximum": 1.05}}}},
      "caminhos": {"type": "array", "items": {"type": "array", "minItems": 2}},
      "proxima": {"type": "array", "items": {"type": "string"}}
    }
  }
}
```

```json
// export/schemas/indice.schema.json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "required": ["colunas", "radiant", "dire"],
  "properties": {
    "colunas": {"type": "array", "minItems": 11, "maxItems": 11},
    "radiant": {"type": "array", "minItems": 27, "maxItems": 27},
    "dire": {"type": "array", "minItems": 27, "maxItems": 27}
  }
}
```

- [ ] **Step 4: Rodar e ver passar** — `python -m pytest export/tests/test_rotas.py -q` → 5 passed. Se uma rota falhar na resolução, a mensagem diz o id e o passo: corrija o resolvedor (nunca o spec de origem).

- [ ] **Step 5: Commit** — `git add export && git commit -m "feat: export routes, walking paths and minute index"`

---

### Task 4: Conteúdo (objetivos e glossário inicial) e o comando de exportação

**Files:**
- Create: `export/dota_export/conteudo.py`, `export/dota_export/__main__.py`, `export/schemas/conteudo.schema.json`, `export/schemas/meta.schema.json`, `export/tests/test_conteudo.py`
- Create: `content/objetivos/roshan.md`, `tormentor.md`, `torre.md`, `runa.md` (básico + avançado); `content/objetivos/camp.md`, `lotus.md`, `watcher.md`, `outpost.md`, `loja.md`, `twin_gate.md`, `barracks.md`, `ancient.md`, `fonte.md` (só básico); `content/glossario/*.md` (40 termos iniciais)

**Interfaces:**
- Consumes: `mapa.objetos`, `mapa.textura_alinhada`, `rotas.carregar_rotas`, `rotas.indice`, `validar.validar`
- Produces: `conteudo.carregar(pasta: Path) -> list[dict]` com `{id, titulo, patch, fontes: [str], secoes: {basico: str, avancado: str|null}, links: [str]}` (Markdown dividido por `## Básico` e `## Avançado`); arquivos `objetivos_conteudo.json`, `glossario.json`, `meta.json` `{exportado_em: ISO, patch: "7.41", contagens: {rotas, objetivos, termos}}`; comando `python -m dota_export` que gera tudo em `app/public/data/`.

- [ ] **Step 1: Testes que falham**

```python
# export/tests/test_conteudo.py
from pathlib import Path
from dota_export import conteudo, validar

RAIZ = Path(__file__).resolve().parents[2] / "content"

def test_objetivo_tem_basico_e_avancado_separados():
    rosh = next(c for c in conteudo.carregar(RAIZ / "objetivos") if c["id"] == "roshan")
    assert rosh["secoes"]["basico"] and rosh["secoes"]["avancado"]
    assert rosh["patch"] == "7.41" and rosh["fontes"]

def test_objetivo_sem_avancado_vira_null():
    camp = next(c for c in conteudo.carregar(RAIZ / "objetivos") if c["id"] == "camp")
    assert camp["secoes"]["avancado"] is None

def test_conteudo_valida():
    validar.validar("conteudo", conteudo.carregar(RAIZ / "objetivos"))
    validar.validar("conteudo", conteudo.carregar(RAIZ / "glossario"))
```

- [ ] **Step 2: Rodar e ver falhar** — FAIL (`conteudo` não existe).

- [ ] **Step 3: Implementação e conteúdo**

```python
# export/dota_export/conteudo.py
"""Markdown com frontmatter simples (chave: valor; listas com '- ') para JSON."""
import re
from pathlib import Path

SECAO = re.compile(r"^##\s+(Básico|Avançado)\s*$", re.MULTILINE)


def _frontmatter(texto: str) -> tuple[dict, str]:
    if not texto.startswith("---"):
        raise ValueError("arquivo sem frontmatter")
    _, cabeca, corpo = texto.split("---", 2)
    meta, chave = {}, None
    for linha in cabeca.strip().splitlines():
        if linha.startswith("- ") and chave:
            meta.setdefault(chave, []).append(linha[2:].strip())
        else:
            chave, _, valor = linha.partition(":")
            chave = chave.strip()
            if valor.strip():
                meta[chave] = valor.strip()
    return meta, corpo


def _secoes(corpo: str) -> dict:
    partes = SECAO.split(corpo)
    blocos = {partes[i].lower(): partes[i + 1].strip() for i in range(1, len(partes), 2)}
    return {"basico": blocos.get("básico") or partes[0].strip(), "avancado": blocos.get("avançado") or None}


def carregar(pasta: Path) -> list[dict]:
    itens = []
    for arq in sorted(pasta.glob("*.md")):
        meta, corpo = _frontmatter(arq.read_text(encoding="utf-8"))
        itens.append({"id": meta.get("id", arq.stem), "titulo": meta["titulo"], "patch": meta.get("patch", "7.41"),
                      "fontes": meta.get("fontes", []), "secoes": _secoes(corpo), "links": meta.get("links", [])})
    return itens
```

```python
# export/dota_export/__main__.py
"""python -m dota_export: gera todos os arquivos de dados do app em app/public/data/."""
import json
from datetime import datetime, timezone
from pathlib import Path

from . import conteudo, mapa, rotas, validar

RAIZ = Path(__file__).resolve().parents[2]
DESTINO = RAIZ / "app" / "public" / "data"


def _gravar(nome: str, dados) -> None:
    (DESTINO / nome).write_text(json.dumps(dados, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")


def main() -> None:
    DESTINO.mkdir(parents=True, exist_ok=True)
    for tamanho in (2048, 4096):
        mapa.textura_alinhada(tamanho).save(DESTINO / f"mapa_{tamanho}.jpg", quality=85)
    pacotes = {"objetivos": mapa.objetos(), "rotas": rotas.carregar_rotas(), "indice": rotas.indice(),
               "objetivos_conteudo": conteudo.carregar(RAIZ / "content" / "objetivos"),
               "glossario": conteudo.carregar(RAIZ / "content" / "glossario")}
    schema = {"objetivos_conteudo": "conteudo", "glossario": "conteudo"}
    for nome, dados in pacotes.items():
        validar.validar(schema.get(nome, nome), dados)
        _gravar(f"{nome}.json", dados)
    meta = {"exportado_em": datetime.now(timezone.utc).isoformat(timespec="seconds"), "patch": "7.41",
            "contagens": {"rotas": len(pacotes["rotas"]), "objetivos": len(pacotes["objetivos"]), "termos": len(pacotes["glossario"])}}
    validar.validar("meta", meta)
    _gravar("meta.json", meta)
    print(f"ok: {meta['contagens']}")


if __name__ == "__main__":
    main()
```

```json
// export/schemas/conteudo.schema.json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "array",
  "items": {"type": "object", "required": ["id", "titulo", "patch", "fontes", "secoes"],
    "properties": {"secoes": {"type": "object", "required": ["basico", "avancado"],
      "properties": {"basico": {"type": "string", "minLength": 1}, "avancado": {"type": ["string", "null"]}}}}}
}
```

```json
// export/schemas/meta.schema.json
{"$schema": "https://json-schema.org/draft/2020-12/schema", "type": "object",
 "required": ["exportado_em", "patch", "contagens"]}
```

Exemplo de arquivo de conteúdo (os números de `content/objetivos/` vêm de `dota-imortal/work/farm_mechanics_corrigido.json`, das `regra`/`notas` em `map_features_corrigido.json` e da Liquipedia 7.41; cada número com a fonte listada no frontmatter; nada inventado):

```markdown
---
id: roshan
titulo: Roshan
patch: 7.41
fontes:
- Liquipedia, Roshan (7.41)
- dota-imortal/work/map_features_corrigido.json (fossos e regra de dia e noite)
- dota-imortal/work/minuto (replays: minuto do 1º Roshan dos pos1 profissionais)
links:
- aegis
- tormentor
---
## Básico
Vida, regeneração, dano, armadura, resistência mágica, ouro e XP do 7.41, os dois fossos e em qual ele fica de dia e de noite, o tempo de renascer e o que ele deixa (Aegis e o que vem a partir da 2ª morte).

## Avançado
Para que serve o 1º Roshan (Aegis para tomar as T2), o 2º (subir high ground), quando os profissionais fazem o 1º nos replays já lidos (mediana e n), e os riscos (Aegis que expira sem uso).
```

O texto acima é a estrutura; o agente que executa escreve o texto real com os números conferidos e a fonte de cada um. Termos iniciais do glossário (um arquivo cada, só `## Básico`): stack, pull, farm, last hit, deny, wave, creep, camp (small, medium, hard, ancient), runa, TP, BKB, Aegis, Roshan, Tormentor, high ground, safe lane, offlane, mid, pos1 a pos5, gank, rotação, smoke, ward, sentry, deward, push, split push, buyback, power spike, item timing, net worth, GPM, XPM, outpost, watcher, lotus, twin gate, fog, buyback.

- [ ] **Step 4: Rodar e ver passar** — `python -m pytest export -q` → todos passam; `python -m dota_export` imprime `ok: {...}` com rotas ≥ 500 e termos ≥ 40.

- [ ] **Step 5: Commit** — `git add export content && git commit -m "feat: add content pipeline, initial objectives and glossary"`

---

### Task 5: Camada de dados do app (validação e estado "dados indisponíveis")

**Files:**
- Create: `app/src/data/schemas.ts`, `app/src/data/load.ts`, `app/src/data/useData.ts`, `app/src/data/load.test.ts`
- Modify: `app/package.json` (zod)

**Interfaces:**
- Produces: tipos `Objetivo`, `Rota`, `Passo`, `Indice`, `Conteudo`, `Meta` (inferidos dos schemas zod `objetivosSchema`, `rotasSchema`, `indiceSchema`, `conteudoSchema`, `metaSchema`); `loadJson<T>(path: string, schema: z.ZodType<T>, fetcher?: typeof fetch): Promise<Resultado<T>>` com `type Resultado<T> = { ok: true; dados: T } | { ok: false; motivo: string }`; `useData<T>(path, schema): { estado: "carregando" } | { estado: "ok"; dados: T } | { estado: "indisponivel"; motivo: string }`; componente `Indisponivel({ motivo })` que mostra "Dados indisponíveis".

- [ ] **Step 1: Teste que falha**

```ts
// app/src/data/load.test.ts
import { loadJson } from "./load";
import { metaSchema } from "./schemas";

const resposta = (corpo: unknown, status = 200) =>
  (async () => new Response(JSON.stringify(corpo), { status })) as unknown as typeof fetch;

it("devolve os dados quando o formato bate", async () => {
  const r = await loadJson("/data/meta.json", metaSchema, resposta({ exportado_em: "2026-10-06T10:00:00+00:00", patch: "7.41", contagens: { rotas: 1, objetivos: 1, termos: 1 } }));
  expect(r.ok).toBe(true);
});

it("vira indisponível quando o arquivo falta", async () => {
  const r = await loadJson("/data/meta.json", metaSchema, resposta({}, 404));
  expect(r).toEqual({ ok: false, motivo: "arquivo /data/meta.json não encontrado (404)" });
});

it("vira indisponível quando o formato não bate", async () => {
  const r = await loadJson("/data/meta.json", metaSchema, resposta({ patch: 7 }));
  expect(r.ok).toBe(false);
});
```

- [ ] **Step 2: Rodar e ver falhar** — `npm test` → FAIL (módulos não existem).

- [ ] **Step 3: Implementação**

```ts
// app/src/data/schemas.ts
import { z } from "zod";

export const objetivoSchema = z.object({
  id: z.string(), tipo: z.string(), nome: z.string(),
  x: z.number(), y: z.number(), lado: z.enum(["radiant", "dire", "neutro"]),
  detalhes: z.record(z.string(), z.unknown()),
});
export const objetivosSchema = z.array(objetivoSchema);

export const passoSchema = z.object({
  n: z.number(), alvo: z.string(), x: z.number(), y: z.number(),
  rotulo: z.string(), minuto: z.string(), acao: z.string(), risco: z.string(),
});
export const rotaSchema = z.object({
  id: z.string(), pdf: z.enum(["03", "06"]), lado: z.enum(["radiant", "dire"]),
  pergunta: z.string(), titulo: z.string(), secao: z.string(),
  janela: z.object({ de: z.string().optional(), ate: z.string().optional() }),
  estado: z.record(z.string(), z.unknown()).nullable().optional(),
  origem: z.enum(["recomendada", "real"]), replay: z.string().nullable(),
  passos: z.array(passoSchema), caminhos: z.array(z.array(z.tuple([z.number(), z.number()]))),
  fuga: z.object({ de_passo: z.number(), x: z.number(), y: z.number(), rotulo: z.string() }).nullable(),
  proxima: z.array(z.string()),
  se: z.array(z.object({ condicao: z.string(), rota: z.string().nullable().optional() })),
  interrupcao: z.array(z.object({ condicao: z.string(), acao: z.string(), rota: z.string().nullable().optional() })),
  porque: z.string(),
});
export const rotasSchema = z.array(rotaSchema);

const celula = z.object({ id: z.string().nullable(), nota: z.string().nullable() });
const linha = z.object({ minuto: z.number(), cenarios: z.record(z.string(), celula) });
export const indiceSchema = z.object({ colunas: z.array(z.string()), radiant: z.array(linha), dire: z.array(linha) });

export const conteudoItemSchema = z.object({
  id: z.string(), titulo: z.string(), patch: z.string(), fontes: z.array(z.string()),
  secoes: z.object({ basico: z.string(), avancado: z.string().nullable() }), links: z.array(z.string()).default([]),
});
export const conteudoSchema = z.array(conteudoItemSchema);

export const metaSchema = z.object({
  exportado_em: z.string(), patch: z.string(),
  contagens: z.object({ rotas: z.number(), objetivos: z.number(), termos: z.number() }),
});

export type Objetivo = z.infer<typeof objetivoSchema>;
export type Passo = z.infer<typeof passoSchema>;
export type Rota = z.infer<typeof rotaSchema>;
export type Indice = z.infer<typeof indiceSchema>;
export type ConteudoItem = z.infer<typeof conteudoItemSchema>;
export type Meta = z.infer<typeof metaSchema>;
```

```ts
// app/src/data/load.ts
import type { z } from "zod";

export type Resultado<T> = { ok: true; dados: T } | { ok: false; motivo: string };

export async function loadJson<T>(path: string, schema: z.ZodType<T>, fetcher: typeof fetch = fetch): Promise<Resultado<T>> {
  let resposta: Response;
  try {
    resposta = await fetcher(path);
  } catch (erro) {
    return { ok: false, motivo: `falha de rede ao buscar ${path}: ${String(erro)}` };
  }
  if (!resposta.ok) return { ok: false, motivo: `arquivo ${path} não encontrado (${resposta.status})` };
  const analise = schema.safeParse(await resposta.json());
  if (!analise.success) return { ok: false, motivo: `formato inesperado em ${path}: ${analise.error.issues[0]?.message ?? ""}` };
  return { ok: true, dados: analise.data };
}
```

```tsx
// app/src/data/useData.ts
import { useEffect, useState } from "react";
import type { z } from "zod";
import { loadJson } from "./load";

export type EstadoDados<T> = { estado: "carregando" } | { estado: "ok"; dados: T } | { estado: "indisponivel"; motivo: string };

export function useData<T>(path: string, schema: z.ZodType<T>): EstadoDados<T> {
  const [estado, setEstado] = useState<EstadoDados<T>>({ estado: "carregando" });
  useEffect(() => {
    let vivo = true;
    loadJson(path, schema).then((r) => {
      if (vivo) setEstado(r.ok ? { estado: "ok", dados: r.dados } : { estado: "indisponivel", motivo: r.motivo });
    });
    return () => { vivo = false; };
  }, [path, schema]);
  return estado;
}

export function Indisponivel({ motivo }: { motivo: string }) {
  return <p role="alert" className="indisponivel">Dados indisponíveis. {motivo}</p>;
}
```

(Renomeie `useData.ts` para `useData.tsx`, porque contém JSX.)

- [ ] **Step 4: Rodar e ver passar** — `npm i zod && npm test` → 3 novos passam.
- [ ] **Step 5: Commit** — `git add app && git commit -m "feat: add validated data loading with unavailable state"`

---

### Task 6: Mapa (interface `MapView`, 2.5D e plano)

**Files:**
- Create: `app/src/map/coords.ts`, `app/src/map/coords.test.ts`, `app/src/map/webgl.ts`, `app/src/map/MapView.tsx`, `app/src/map/Map3D.tsx`, `app/src/map/MapFlat.tsx`, `app/src/map/MapView.test.tsx`
- Modify: `app/package.json` (three, @react-three/fiber, @react-three/drei)

**Interfaces:**
- Consumes: `Objetivo`, `Rota`
- Produces:
  - `normToWorld([x, y]: [number, number], tamanho = 100): [number, number, number]` (centro do mapa na origem, eixo Y para cima no mundo, mapa no plano XZ: `[(x − 0.5)·tamanho, 0, (0.5 − y)·tamanho]`); `normToPercent([x, y]): { left: string; top: string }`.
  - `hasWebGL(): boolean`.
  - `type MapViewProps = { objetivos: Objetivo[]; rota?: Rota | null; selecionado?: string | null; onSelecionar: (id: string) => void; forcarPlano?: boolean }` e `MapView(props)`. É a única porta do mapa: as telas nunca importam `Map3D` ou `MapFlat` direto.

- [ ] **Step 1: Testes que falham**

```ts
// app/src/map/coords.test.ts
import { normToPercent, normToWorld } from "./coords";

it("centro do mapa vai para a origem do mundo", () => {
  expect(normToWorld([0.5, 0.5])).toEqual([0, 0, 0]);
});
it("Radiant (canto de baixo à esquerda) fica em x negativo e z positivo", () => {
  const [x, , z] = normToWorld([0, 0], 100);
  expect(x).toBe(-50); expect(z).toBe(50);
});
it("percentual da imagem plana inverte o y", () => {
  expect(normToPercent([0.25, 0.75])).toEqual({ left: "25%", top: "25%" });
});
```

```tsx
// app/src/map/MapView.test.tsx
import { fireEvent, render, screen } from "@testing-library/react";
import { MapView } from "./MapView";

const rosh = { id: "roshan_pit_top", tipo: "roshan", nome: "Roshan", x: 0.326, y: 0.638, lado: "neutro" as const, detalhes: {} };

it("sem WebGL cai para o mapa plano e o objeto continua clicável", () => {
  const onSelecionar = vi.fn();
  render(<MapView objetivos={[rosh]} onSelecionar={onSelecionar} forcarPlano />);
  fireEvent.click(screen.getByRole("button", { name: "Roshan" }));
  expect(onSelecionar).toHaveBeenCalledWith("roshan_pit_top");
});
```

- [ ] **Step 2: Rodar e ver falhar** — `npm test` → FAIL.

- [ ] **Step 3: Implementação**

```ts
// app/src/map/coords.ts
export type Ponto = [number, number];

export function normToWorld([x, y]: Ponto, tamanho = 100): [number, number, number] {
  return [(x - 0.5) * tamanho + 0, 0, (0.5 - y) * tamanho + 0];
}

export function normToPercent([x, y]: Ponto): { left: string; top: string } {
  return { left: `${x * 100}%`, top: `${(1 - y) * 100}%` };
}
```

```ts
// app/src/map/webgl.ts
export function hasWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(canvas.getContext("webgl2") ?? canvas.getContext("webgl"));
  } catch {
    return false;
  }
}
```

```tsx
// app/src/map/MapView.tsx
import { lazy, Suspense } from "react";
import type { Objetivo, Rota } from "../data/schemas";
import { MapFlat } from "./MapFlat";
import { hasWebGL } from "./webgl";

const Map3D = lazy(() => import("./Map3D").then((m) => ({ default: m.Map3D })));

export type MapViewProps = {
  objetivos: Objetivo[];
  rota?: Rota | null;
  selecionado?: string | null;
  onSelecionar: (id: string) => void;
  forcarPlano?: boolean;
};

export function MapView(props: MapViewProps) {
  if (props.forcarPlano || !hasWebGL()) return <MapFlat {...props} />;
  return (
    <Suspense fallback={<MapFlat {...props} />}>
      <Map3D {...props} />
    </Suspense>
  );
}
```

```tsx
// app/src/map/MapFlat.tsx
import type { MapViewProps } from "./MapView";
import { normToPercent } from "./coords";

export function MapFlat({ objetivos, rota, selecionado, onSelecionar }: MapViewProps) {
  return (
    <div className="mapa-plano">
      <img src="/data/mapa_2048.jpg" alt="Mapa do Dota 7.41" />
      <svg viewBox="0 0 1 1" preserveAspectRatio="none" className="mapa-plano-rota">
        {rota?.caminhos.map((c, i) => (
          <polyline key={i} points={c.map(([x, y]) => `${x},${1 - y}`).join(" ")} />
        ))}
      </svg>
      {objetivos.map((o) => (
        <button key={o.id} aria-label={o.nome} title={o.nome}
          className={`marcador marcador-${o.tipo}${o.id === selecionado ? " ativo" : ""}`}
          style={normToPercent([o.x, o.y])} onClick={() => onSelecionar(o.id)} />
      ))}
      {rota?.passos.map((p) => (
        <span key={p.n} className={`passo passo-${p.risco}`} style={normToPercent([p.x, p.y])}>{p.n}</span>
      ))}
    </div>
  );
}
```

```tsx
// app/src/map/Map3D.tsx
import { OrbitControls, Html, Line } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import type { MapViewProps } from "./MapView";
import { normToWorld } from "./coords";

const TAMANHO = 100;
const ALTURA: Record<string, number> = { roshan: 4, tormentor: 4, torre: 3, barracks: 3, ancient: 5, fonte: 3 };

function Chao() {
  const textura = useLoader(TextureLoader, "/data/mapa_4096.jpg");
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[TAMANHO, TAMANHO]} />
      <meshStandardMaterial map={textura} />
    </mesh>
  );
}

export function Map3D({ objetivos, rota, selecionado, onSelecionar }: MapViewProps) {
  return (
    <Canvas className="mapa-3d" camera={{ position: [0, 70, 60], fov: 45 }} dpr={[1, 2]}>
      <ambientLight intensity={1.1} />
      <directionalLight position={[30, 60, 20]} intensity={0.6} />
      <Chao />
      {objetivos.map((o) => {
        const [x, , z] = normToWorld([o.x, o.y], TAMANHO);
        const h = ALTURA[o.tipo] ?? 1.5;
        return (
          <mesh key={o.id} position={[x, h / 2, z]} onClick={(e) => { e.stopPropagation(); onSelecionar(o.id); }}>
            <cylinderGeometry args={[0.6, 0.6, h, 12]} />
            <meshStandardMaterial color={o.id === selecionado ? "#ffd166" : o.lado === "radiant" ? "#5cc26b" : o.lado === "dire" ? "#e05a47" : "#b48cff"} />
          </mesh>
        );
      })}
      {rota?.caminhos.map((c, i) => (
        <Line key={i} points={c.map((p) => normToWorld(p, TAMANHO)).map(([x, , z]) => [x, 0.4, z] as [number, number, number])} color="#ff4fd8" lineWidth={4} />
      ))}
      {rota?.passos.map((p) => {
        const [x, , z] = normToWorld([p.x, p.y], TAMANHO);
        return <Html key={p.n} position={[x, 2.5, z]} center><span className={`passo passo-${p.risco}`}>{p.n}</span></Html>;
      })}
      <OrbitControls enablePan maxPolarAngle={Math.PI / 2.4} minDistance={20} maxDistance={140} />
    </Canvas>
  );
}
```

Relevo: nesta fase o chão é plano com a textura real; o volume vem dos marcadores. O ganho de relevo (high ground e rio) fica para a troca do mapa, atrás de `MapView`, sem mudar as telas. Mapa com marcador de cor por lado (verde Radiant, vermelho Dire, roxo neutro), amarelo quando selecionado.

- [ ] **Step 4: Rodar e ver passar** — `npm i three @react-three/fiber @react-three/drei && npm i -D @types/three && npm test` → passam. Rode `python -m dota_export` e `npm run dev`, abra o mapa no navegador, gire e aproxime; no DevTools com a tela de celular confira que fica fluido.
- [ ] **Step 5: Commit** — `git add app && git commit -m "feat: add map view with 2.5d and flat fallback"`

---

### Task 7: Painel do objetivo (Básico e Avançado)

**Files:**
- Create: `app/src/objectives/ObjectivePanel.tsx`, `app/src/objectives/ObjectivePanel.test.tsx`

**Interfaces:**
- Consumes: `Objetivo`, `ConteudoItem`
- Produces: `conteudoDoObjetivo(o: Objetivo, conteudo: ConteudoItem[]): ConteudoItem | null` (procura por `o.id`, senão por `o.tipo`); `ObjectivePanel({ objetivo, conteudo, onFechar })` com abas "Básico" e "Avançado"; sem avançado mostra "Ainda não escrito."; mostra `fontes` e `patch` no pé.

- [ ] **Step 1: Testes que falham**

```tsx
// app/src/objectives/ObjectivePanel.test.tsx
import { fireEvent, render, screen } from "@testing-library/react";
import { ObjectivePanel } from "./ObjectivePanel";

const camp = { id: "rad_safe_small_1", tipo: "camp", nome: "Pequeno do pull", x: 0.7, y: 0.2, lado: "radiant" as const, detalhes: {} };
const conteudo = [{ id: "camp", titulo: "Camp", patch: "7.41", fontes: ["Liquipedia"], secoes: { basico: "Camps nascem a cada minuto.", avancado: null }, links: [] }];

it("mostra o básico e, sem avançado, avisa que ainda não foi escrito", () => {
  render(<ObjectivePanel objetivo={camp} conteudo={conteudo} onFechar={() => {}} />);
  expect(screen.getByText("Camps nascem a cada minuto.")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("tab", { name: "Avançado" }));
  expect(screen.getByText("Ainda não escrito.")).toBeInTheDocument();
  expect(screen.getByText(/Liquipedia/)).toBeInTheDocument();
});
```

- [ ] **Step 2: Rodar e ver falhar** — FAIL.
- [ ] **Step 3: Implementação**

```tsx
// app/src/objectives/ObjectivePanel.tsx
import { useState } from "react";
import type { ConteudoItem, Objetivo } from "../data/schemas";

export function conteudoDoObjetivo(o: Objetivo, conteudo: ConteudoItem[]): ConteudoItem | null {
  return conteudo.find((c) => c.id === o.id) ?? conteudo.find((c) => c.id === o.tipo) ?? null;
}

type Aba = "basico" | "avancado";

export function ObjectivePanel({ objetivo, conteudo, onFechar }: { objetivo: Objetivo; conteudo: ConteudoItem[]; onFechar: () => void }) {
  const [aba, setAba] = useState<Aba>("basico");
  const item = conteudoDoObjetivo(objetivo, conteudo);
  const texto = item ? (aba === "basico" ? item.secoes.basico : item.secoes.avancado) : null;
  return (
    <aside className="painel" aria-label={objetivo.nome}>
      <header>
        <h2>{objetivo.nome}</h2>
        <button onClick={onFechar} aria-label="Fechar">×</button>
      </header>
      <div role="tablist">
        {(["basico", "avancado"] as const).map((a) => (
          <button key={a} role="tab" aria-selected={aba === a} onClick={() => setAba(a)}>{a === "basico" ? "Básico" : "Avançado"}</button>
        ))}
      </div>
      <div role="tabpanel" className="painel-texto">{texto ?? "Ainda não escrito."}</div>
      {item && <footer>Patch {item.patch}. Fontes: {item.fontes.join("; ")}</footer>}
    </aside>
  );
}
```

O texto do conteúdo é Markdown simples; renderize parágrafos e listas com `react-markdown` (`npm i react-markdown`) trocando `{texto ?? ...}` por `<ReactMarkdown>{texto}</ReactMarkdown>` quando houver texto (o teste continua passando porque o parágrafo tem o mesmo texto).

- [ ] **Step 4: Rodar e ver passar** — `npm test` → passa.
- [ ] **Step 5: Commit** — `git add app && git commit -m "feat: add objective panel with basic and advanced tabs"`

---

### Task 8: Tela de rotas (índice, filtros e rota no mapa)

**Files:**
- Create: `app/src/routes/filtros.ts`, `app/src/routes/filtros.test.ts`, `app/src/routes/RoutesPage.tsx`, `app/src/routes/RouteDetail.tsx`

**Interfaces:**
- Consumes: `Rota`, `Indice`, `MapView`
- Produces: `rotaDaCelula(indice: Indice, lado: "radiant" | "dire", minuto: number, coluna: string): { id: string | null; nota: string | null }`; `filtrarRotas(rotas: Rota[], f: { lado?: "radiant" | "dire"; minuto?: number; texto?: string; pdf?: "03" | "06" }): Rota[]` (minuto dentro da janela `de`..`ate` em minutos inteiros; texto procura na pergunta, título e id, sem acento e sem caixa); `RoutesPage` (seletor de lado, minuto 4 a 30 e situação: um toque em cada leva à rota; lista abaixo); `RouteDetail({ rota, objetivos, onIrPara })` com mapa, passos numerados (minuto, onde, o que fazer), fuga, interrupções e botões das próximas rotas.

- [ ] **Step 1: Testes que falham**

```ts
// app/src/routes/filtros.test.ts
import { filtrarRotas, rotaDaCelula } from "./filtros";
import type { Indice, Rota } from "../data/schemas";

const base = { pdf: "06" as const, titulo: "", secao: "", estado: null, origem: "recomendada" as const, replay: null, passos: [], caminhos: [], fuga: null, proxima: [], se: [], interrupcao: [], porque: "" };
const rotas: Rota[] = [
  { ...base, id: "MA-R-01", lado: "radiant", pergunta: "Onde farmo no minuto 6 se não posso pegar wave?", janela: { de: "6:00", ate: "7:00" } },
  { ...base, id: "MA-D-01", lado: "dire", pergunta: "Onde farmo no minuto 6?", janela: { de: "6:00", ate: "7:00" } },
];

it("filtra por lado, minuto e texto sem acento", () => {
  expect(filtrarRotas(rotas, { lado: "radiant", minuto: 6, texto: "NAO POSSO" }).map((r) => r.id)).toEqual(["MA-R-01"]);
  expect(filtrarRotas(rotas, { minuto: 9 })).toEqual([]);
});

it("acha a rota da célula do índice", () => {
  const indice: Indice = { colunas: ["equilibrado"], radiant: [{ minuto: 6, cenarios: { equilibrado: { id: "MA-R-01", nota: null } } }], dire: [] };
  expect(rotaDaCelula(indice, "radiant", 6, "equilibrado")).toEqual({ id: "MA-R-01", nota: null });
  expect(rotaDaCelula(indice, "radiant", 7, "equilibrado")).toEqual({ id: null, nota: "sem rota para este minuto" });
});
```

- [ ] **Step 2: Rodar e ver falhar** — FAIL.
- [ ] **Step 3: Implementação**

```ts
// app/src/routes/filtros.ts
import type { Indice, Rota } from "../data/schemas";

export const normalizar = (s: string) => s.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();
const minutos = (mmss?: string) => (mmss ? Number(mmss.split(":")[0]) : NaN);

export function rotaDaCelula(indice: Indice, lado: "radiant" | "dire", minuto: number, coluna: string) {
  const celula = indice[lado].find((l) => l.minuto === minuto)?.cenarios[coluna];
  return celula ?? { id: null, nota: "sem rota para este minuto" };
}

export function filtrarRotas(rotas: Rota[], f: { lado?: "radiant" | "dire"; minuto?: number; texto?: string; pdf?: "03" | "06" }): Rota[] {
  const texto = f.texto ? normalizar(f.texto) : null;
  return rotas.filter((r) =>
    (!f.lado || r.lado === f.lado) &&
    (!f.pdf || r.pdf === f.pdf) &&
    (f.minuto === undefined || (minutos(r.janela.de) <= f.minuto && f.minuto < Math.max(minutos(r.janela.ate), minutos(r.janela.de) + 1))) &&
    (!texto || normalizar(`${r.id} ${r.pergunta} ${r.titulo}`).includes(texto)));
}
```

`RoutesPage`: usa `useData("/data/rotas.json", rotasSchema)`, `useData("/data/indice.json", indiceSchema)` e `useData("/data/objetivos.json", objetivosSchema)`; mostra `Indisponivel` se algum falhar. Três controles em sequência (lado: dois botões; minuto: botões 4..30; situação: as 11 colunas): ao escolher os três, abre direto `RouteDetail` da célula (critério de sucesso 1: 3 toques). Abaixo, a caixa de texto e a lista de `filtrarRotas`. A rota aberta fica na URL (`/rotas/:id`) com react-router (`npm i react-router`), para o link ser compartilhável. `RouteDetail` mostra `MapView` com `rota`, a pergunta como título, a faixa do estado (minuto, nível, lane, mapa), a tabela de passos, a fuga, as interrupções com link da rota e os botões `proxima`. Rota com `origem: "real"` mostra o selo "ROTA REAL · replay {replay}".

- [ ] **Step 4: Rodar e ver passar** — `npm test` → passam; no navegador, escolha Radiant → 6 → lane impossível e confira que abre a MA-R-01 com os passos no lugar certo do mapa (compare com a página 62 do PDF 06).
- [ ] **Step 5: Commit** — `git add app && git commit -m "feat: add routes screen with minute index and route detail"`

---

### Task 9: Busca global e glossário

**Files:**
- Create: `app/src/search/index.ts`, `app/src/search/index.test.ts`, `app/src/search/SearchBox.tsx`, `app/src/glossary/GlossaryPage.tsx`

**Interfaces:**
- Consumes: `Rota`, `Objetivo`, `ConteudoItem`
- Produces: `type Achado = { tipo: "rota" | "objetivo" | "termo"; id: string; titulo: string; link: string }`; `construirIndice(dados: { rotas: Rota[]; objetivos: Objetivo[]; termos: ConteudoItem[] }): Busca`; `buscar(busca: Busca, consulta: string, limite = 20): Achado[]`; `sugerir(busca: Busca, consulta: string): string[]` (até 3 títulos parecidos quando `buscar` não acha nada); `SearchBox` no topo do app (resultado enquanto digita); `GlossaryPage` (lista com filtro e o termo aberto em `/glossario/:id`, com links para mapa, rota ou objetivo quando `links` existir).

- [ ] **Step 1: Testes que falham**

```ts
// app/src/search/index.test.ts
import { buscar, construirIndice, sugerir } from "./index";

const termos = [
  { id: "roshan", titulo: "Roshan", patch: "7.41", fontes: [], secoes: { basico: "Chefe neutro do rio.", avancado: null }, links: [] },
  { id: "pull", titulo: "Pull", patch: "7.41", fontes: [], secoes: { basico: "Puxar o camp para a wave.", avancado: null }, links: [] },
];
const busca = construirIndice({ rotas: [], objetivos: [], termos });

it("acha com prefixo, acento e caixa diferentes", () => {
  for (const q of ["rosh", "Roshán", "ROSHAN"]) expect(buscar(busca, q)[0]?.id).toBe("roshan");
});
it("sem resultado sugere termos parecidos", () => {
  expect(buscar(busca, "pulll")).toEqual([]);
  expect(sugerir(busca, "pulll")).toContain("Pull");
});
it("responde rápido", () => {
  const t0 = performance.now();
  buscar(busca, "ro");
  expect(performance.now() - t0).toBeLessThan(300);
});
```

- [ ] **Step 2: Rodar e ver falhar** — FAIL.
- [ ] **Step 3: Implementação**

```ts
// app/src/search/index.ts
import MiniSearch from "minisearch";
import type { ConteudoItem, Objetivo, Rota } from "../data/schemas";

export type Achado = { tipo: "rota" | "objetivo" | "termo"; id: string; titulo: string; link: string };
type Doc = Achado & { chave: string; texto: string };
export type Busca = MiniSearch<Doc>;

const semAcento = (s: string) => s.normalize("NFD").replace(/\p{Diacritic}/gu, "").toLowerCase();

export function construirIndice({ rotas, objetivos, termos }: { rotas: Rota[]; objetivos: Objetivo[]; termos: ConteudoItem[] }): Busca {
  const busca: Busca = new MiniSearch<Doc>({
    idField: "chave", fields: ["titulo", "texto"], storeFields: ["tipo", "id", "titulo", "link"],
    processTerm: semAcento, searchOptions: { prefix: true, boost: { titulo: 3 } },
  });
  busca.addAll([
    ...rotas.map((r) => ({ chave: `rota:${r.id}`, tipo: "rota" as const, id: r.id, titulo: `${r.id} · ${r.pergunta}`, texto: r.titulo, link: `/rotas/${r.id}` })),
    ...objetivos.map((o) => ({ chave: `objetivo:${o.id}`, tipo: "objetivo" as const, id: o.id, titulo: o.nome, texto: o.tipo, link: `/mapa/${o.id}` })),
    ...termos.map((t) => ({ chave: `termo:${t.id}`, tipo: "termo" as const, id: t.id, titulo: t.titulo, texto: t.secoes.basico, link: `/glossario/${t.id}` })),
  ]);
  return busca;
}

export function buscar(busca: Busca, consulta: string, limite = 20): Achado[] {
  if (!consulta.trim()) return [];
  return busca.search(consulta).slice(0, limite).map(({ tipo, id, titulo, link }) => ({ tipo, id, titulo, link }) as Achado);
}

export function sugerir(busca: Busca, consulta: string): string[] {
  return busca.search(consulta, { fuzzy: 0.3, prefix: false }).slice(0, 3).map((r) => String(r.titulo));
}
```

`SearchBox`: campo no topo (`role="searchbox"`, rótulo "Buscar herói, rota, objetivo ou termo"), lista de `Achado` com o tipo em etiqueta e link; sem resultado mostra "Nada encontrado. Você quis dizer: …" com `sugerir`. `GlossaryPage`: usa `useData("/data/glossario.json", conteudoSchema)`, lista alfabética com filtro (`normalizar`), termo aberto mostra o básico em Markdown, fontes e links.

- [ ] **Step 4: Rodar e ver passar** — `npm i minisearch && npm test` → passam.
- [ ] **Step 5: Commit** — `git add app && git commit -m "feat: add global search and glossary"`

---

### Task 10: Casca do app (navegação, tela do mapa, rodapé) e verificação final

**Files:**
- Create: `app/src/layout/Shell.tsx`, `app/src/layout/Shell.test.tsx`, `app/src/map/MapPage.tsx`, `app/src/styles.css`
- Modify: `app/src/App.tsx`, `app/src/main.tsx`, `app/src/App.test.tsx`

**Interfaces:**
- Consumes: tudo acima
- Produces: rotas de tela `/` (mapa), `/mapa/:id`, `/rotas`, `/rotas/:id`, `/glossario`, `/glossario/:id`; `Shell` com navegação (Mapa, Rotas, Glossário), `SearchBox` no topo e rodapé "Dados de {data dd/mm/aaaa} · patch {patch}" vindo de `meta.json`; `MapPage` com `MapView` e `ObjectivePanel` do objeto clicado (o painel também abre por `/mapa/:id`).

- [ ] **Step 1: Teste que falha**

```tsx
// app/src/layout/Shell.test.tsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { Rodape } from "./Shell";

it("rodapé mostra a data da exportação e o patch", () => {
  render(<MemoryRouter><Rodape meta={{ exportado_em: "2026-10-06T13:00:00+00:00", patch: "7.41", contagens: { rotas: 1, objetivos: 1, termos: 1 } }} /></MemoryRouter>);
  expect(screen.getByText("Dados de 06/10/2026 · patch 7.41")).toBeInTheDocument();
});
```

- [ ] **Step 2: Rodar e ver falhar** — FAIL.
- [ ] **Step 3: Implementação**

```tsx
// app/src/layout/Shell.tsx
import { NavLink, Outlet } from "react-router";
import type { Meta } from "../data/schemas";
import { metaSchema } from "../data/schemas";
import { useData } from "../data/useData";
import { SearchBox } from "../search/SearchBox";

export function Rodape({ meta }: { meta: Meta }) {
  const data = new Date(meta.exportado_em).toLocaleDateString("pt-BR", { timeZone: "America/Sao_Paulo" });
  return <footer className="rodape">Dados de {data} · patch {meta.patch}</footer>;
}

export function Shell() {
  const meta = useData("/data/meta.json", metaSchema);
  return (
    <div className="shell">
      <header className="topo">
        <strong>Dota Hub</strong>
        <nav>
          <NavLink to="/">Mapa</NavLink>
          <NavLink to="/rotas">Rotas</NavLink>
          <NavLink to="/glossario">Glossário</NavLink>
        </nav>
        <SearchBox />
      </header>
      <main><Outlet /></main>
      {meta.estado === "ok" && <Rodape meta={meta.dados} />}
    </div>
  );
}
```

`App.tsx`: `createBrowserRouter` com `Shell` como layout e as rotas de tela listadas acima; atualize `App.test.tsx` para renderizar o `Shell` dentro de `MemoryRouter` e procurar "Dota Hub". `styles.css`: tema escuro inspirado no "Aprender" do jogo (fundo #0f1418, painel #1b232a, texto #e6e1d6, destaque #c8a24b), layout que funciona em 360 px de largura (mapa ocupa a largura, painel do objetivo vira folha de baixo no celular), marcadores e passos com as cores de risco do GPS (verde seguro, amarelo moderado, vermelho perigoso, azul objetivo).

- [ ] **Step 4: Verificação final**
  - `cd export && python -m pytest -q` e `python -m dota_export` → tudo passa e gera os dados.
  - `cd app && npm test && npm run build` → tudo passa.
  - `npm run preview` e, no navegador (PC e modo celular 360×800 do DevTools com rede "Fast 4G"): a primeira tela abre em menos de 3 s; o mapa gira e aproxima sem travar (painel de desempenho ≥ 30 fps); clicar no Roshan abre Básico e Avançado com fontes; Radiant → 6 → lane impossível abre a MA-R-01 em 3 toques; a busca acha "rosh", "pull" e "MA-R-01" enquanto digita; com `objetivos.json` apagado o mapa mostra "Dados indisponíveis" e as outras telas seguem funcionando.
  - Confira 20 rotas por amostra (10 do 03, 10 do 06) contra as páginas dos PDFs: mesmos passos, minutos e posição no mapa.
- [ ] **Step 5: Commit** — `git add app && git commit -m "feat: add app shell, map page and footer"`
