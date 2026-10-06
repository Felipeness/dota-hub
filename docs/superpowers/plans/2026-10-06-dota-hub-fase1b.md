# Dota Hub, fase 1B (heróis, jogadores e times, replays no mapa, solo de Roshan, glossário completo, relevo) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fechar a fase 1 da spec: telas Heróis e Jogadores e times, trajetórias reais dos replays animadas no mapa, solo de Roshan por herói, glossário de 150 a 250 termos, relevo do terreno atrás da `MapView` e a verificação dos critérios 6 e 7.

**Architecture:** Mesma divisão da 1A. O pacote `export/` ganha módulos novos (`herois`, `jogadores`, `amigos`, `trajetorias`, `roshan`, `relevo`) que leem os projetos de análise e gravam JSON validado em `app/public/data/`. Arquivos grandes viram um arquivo por item (`herois/<id>.json`, `jogadores/<id>.json`, `trajetorias/<match_id>.json`), carregados só quando a tela pede. Todo painel de jogador usa um formato só (`destaques`, `graficos`, `achados`), então uma tela serve para Felipe, amigos e profissionais. A `MapView` continua sendo a única porta do mapa: ganha as props `trilhas` e `marcas` e aceita qualquer `Tracado` (passos e caminhos), e o relevo entra só dentro do `Map3D`.

**Tech Stack:** o da 1A (Python 3.13, pytest, jsonschema, Pillow, numpy; Node 22, Vite, React 19, TypeScript strict, react-three-fiber + drei, zod 3, react-router 7, vitest + Testing Library, minisearch) mais **Chart.js 4** para os gráficos (decisão abaixo).

**Spec:** `docs/superpowers/specs/2026-10-06-dota-hub-design.md`. Plano anterior: `docs/superpowers/plans/2026-10-06-dota-hub-fase1a.md` (nomes e contratos reaproveitados: `fontes`, `rotas.resolver_alvo`, `conteudo.carregar`, `validar.validar`, `loadJson`, `useData`, `Indisponivel`, `MapView`/`MapViewProps`, `normToWorld`, `normToPercent`, `normalizar`, `construirIndice`, `buscar`, `sugerir`, `ObjectivePanel`, `Shell`).

**Pré-requisito:** a fase 1A mesclada. Antes da Task 1, leia o código real da 1A (`export/dota_export/*.py`, `app/src/**`) e confira que os nomes acima existem com a assinatura do plano 1A. Se algum mudou na execução da 1A (o ledger fica em `.superpowers/sdd/2026-10-06-dota-hub-fase1a/progress.md`), use o nome real e registre a troca no ledger da 1B.

### Decisão: biblioteca de gráficos

Chart.js 4, registrando só os controladores usados (linha e barra). Motivos: desenha em canvas (fluido no celular mesmo com 700 pontos, como a curva de MMR do Leonardo), tooltip por toque já pronto, tem linha e barra categórica (o uPlot, mais leve, não faz barra categórica bem), e com tree-shaking fica perto de 60 KB gzip, carregado só na rota de Jogadores. Recharts e Nivo foram descartados por peso (dependem de d3 e desenham em SVG, que trava com muitos pontos no celular). Toda figura também mostra os números em tabela (acessibilidade e fallback sem canvas).

## Global Constraints

- Todas as da 1A continuam valendo (português do Brasil com acentos e sem travessão; nada digitado à mão no app; `fonte` e `patch` em todo número de conteúdo; coordenadas normalizadas x 0..1 da esquerda, y 0..1 de baixo; projetos de origem só leitura; TypeScript strict sem `any`; commits `type: descrição em minúscula`, sem menção a IA).
- Arquivo por item: `herois/<id>.json` até 80 KB; `jogadores/<id>.json` até 120 KB; `trajetorias/<match_id>.json` até 60 KB (teste de tamanho nas Tasks 1, 2 e 4). A primeira tela continua abaixo de 3 s em 4G: as telas novas entram por `lazy` do react-router.
- Nenhum número de painel é recalculado com filtro diferente do relatório de origem. Quando o relatório tem filtro (por exemplo, Hane com `certeza_posicao` alta ou média), o export usa o mesmo filtro e cita o arquivo que define o filtro.
- Conteúdo novo (solo de Roshan, glossário): cada arquivo tem `fontes` no frontmatter; solo de Roshan tem `origem: recomendado` ou `origem: replay` com `replay: <match_id>`. Conteúdo sem fonte conferida não entra.
- Contas e nomes: só nomes públicos (nick de liga, nome do jogador amigo como já aparece nos relatórios). Nenhum `account_id` de amigo vai para o app.

## Review Focus

1. Painel de jogador com número diferente do relatório (filtro trocado, arredondamento): a Task 14 confere 23 números contra os relatórios, um por um, com o arquivo de origem.
2. Passo de rota de herói com alvo que o resolvedor não conhece: o export falha dizendo herói, lado e janela (teste na Task 1).
3. Replay mais curto que 30 min, herói morto no instante, ward sem evento de fim: a trajetória marca morto como ponto ausente e o ward some no fim do replay (testes na Task 4).
4. `MapView` recebendo `trilhas` a cada quadro: o player só redesenha a cada 200 ms e o `Map3D` não recria a textura (Task 10).
5. Gráfico sem canvas (teste, navegador antigo): o componente mostra a tabela e não quebra (Task 12).
6. Link do glossário para algo que não existe: o teste do export falha dizendo o termo e o link (Task 6).

---

## File Structure

```
dota-hub/
  export/
    dota_export/fontes.py          (modificar) caminhos novos: guias, power spikes, compare_pros, replays, amigos, itens
    dota_export/rotas.py           (modificar) `_caminho` vira público: `caminho_andando`
    dota_export/conteudo.py        (modificar) frontmatter extra vai para `extras`
    dota_export/herois.py          ficha de cada herói (guia, power spikes, rotas do herói, números dos pros)
    dota_export/jogadores.py       painel único; Felipe e pros (compare_pros) e pros dos replays; times
    dota_export/amigos.py          painéis de Leonardo, Hane e Yuma v2
    dota_export/trajetorias.py     replays reduzidos (posição a cada 5 s, wards, mortes)
    dota_export/roshan.py          mortes de Roshan nos replays e quem estava perto
    dota_export/relevo.py          mapa de altura (high ground, rio, rampas)
    dota_export/__main__.py        (modificar) grava os arquivos novos
    schemas/heroi.schema.json, herois.schema.json, painel.schema.json, jogadores.schema.json,
    schemas/times.schema.json, trajetoria.schema.json, replays.schema.json, roshan_replays.schema.json, relevo.schema.json
    tests/test_herois.py, test_jogadores.py, test_amigos.py, test_trajetorias.py, test_roshan.py,
    tests/test_glossario.py, test_relevo.py, test_conferencia.py
  content/
    roshan_solo/<heroi>.md         solo de Roshan por herói (novo)
    glossario/<termo>.md           (completar) 150 a 250 termos
  app/src/
    data/schemas.ts                (modificar) schemas novos
    search/index.ts                (modificar) heróis, jogadores e times na busca
    search/SearchBox.tsx           (modificar) carrega os índices novos
    map/coords.ts                  (modificar) alturaEm
    map/trilhas.ts                 posições no tempo (funções puras)
    map/MapView.tsx                (modificar) Tracado, Trilha, Marca
    map/MapFlat.tsx, map/Map3D.tsx (modificar) trilhas, marcas e relevo
    replays/reproducao.ts          estado do player (redutor puro)
    replays/useReproducao.ts       laço de animação
    replays/MapaComCamadas.tsx     mapa + camada de replay + controles
    replays/SeletorReplay.tsx
    heroes/fases.ts, heroes/HeroesPage.tsx, heroes/HeroPage.tsx, heroes/FichaHeroi.tsx
    players/grafico-config.ts, players/Grafico.tsx, players/PainelJogador.tsx,
    players/PlayersPage.tsx, players/PlayerPage.tsx, players/TeamPage.tsx
    glossary/links.ts, glossary/filtros.ts, glossary/GlossaryPage.tsx (modificar)
    roshan/SoloRoshan.tsx
    objectives/ObjectivePanel.tsx  (modificar) aceita children na aba Avançado
    map/MapPage.tsx, App.tsx, layout/Shell.tsx (modificar) rotas e navegação
  docs/superpowers/verificacao/2026-10-06-fase1-criterios-6-e-7.md   registro da verificação
```

---

### Task 0: Novo visual

O Felipe achou o visual da 1A feio e aprovou um novo, desenhado à parte. Os arquivos do desenho estão em `docs/design/v1/` (`Main.dc.html` mapa com painel do Roshan, `Rotas.dc.html`, `Celular.dc.html`, `Glossario.dc.html`). Eles são HTML de referência visual, não código do app: copie as decisões, não o markup.

**Files:**
- Create: `app/src/styles/tokens.css` (cores, tipografia, raios, espaçamentos do desenho como variáveis CSS)
- Modify: `app/index.html` (fontes do Google: Saira Condensed 500/600/700, IBM Plex Sans 400/500/600, JetBrains Mono 500), `app/src/styles.css`, `app/src/layout/Shell.tsx`, `app/src/map/MapPage.tsx`, `app/src/map/MapFlat.tsx`, `app/src/map/Map3D.tsx`, `app/src/objectives/ObjectivePanel.tsx`, `app/src/routes/RoutesPage.tsx`, `app/src/routes/RouteDetail.tsx`, `app/src/glossary/GlossaryPage.tsx`, `app/src/search/SearchBox.tsx`
- Test: `app/src/layout/Shell.test.tsx` (atualizar), `app/src/styles/tokens.test.ts`

**Interfaces:**
- Produces: variáveis CSS `--cor-fundo #0a0e11`, `--cor-superficie #0e151a`, `--cor-superficie-2 #111920`, `--cor-linha #1f2a31`, `--cor-linha-forte #24313a`, `--cor-texto #e9e4d8`, `--cor-texto-2 #c8c2b5`, `--cor-texto-3 #8b968f`, `--cor-destaque #f2b544`, `--cor-info #4fc3e8`, `--cor-radiant #5bbf7a`, `--cor-dire #e0675a`, `--cor-neutro #b08cff`, `--fonte-display 'Saira Condensed'`, `--fonte-texto 'IBM Plex Sans'`, `--fonte-num 'JetBrains Mono'`, `--raio 12px`, `--raio-pilula 99px`. Nenhuma interface TypeScript muda.

- [ ] **Step 1: Teste que falha**

```ts
// app/src/styles/tokens.test.ts
import { readFileSync } from "node:fs";

it("define as cores e fontes do novo visual", () => {
  const css = readFileSync("src/styles/tokens.css", "utf-8");
  for (const v of ["--cor-fundo: #0a0e11", "--cor-destaque: #f2b544", "--cor-radiant: #5bbf7a", "--cor-dire: #e0675a", "--fonte-display:"]) {
    expect(css).toContain(v);
  }
});
```

- [ ] **Step 2: Rodar e ver falhar** — `npm test` → FAIL (arquivo não existe).
- [ ] **Step 3: Implementação** — criar `tokens.css` com as variáveis acima e reescrever os estilos das telas para seguir o desenho:
  - Topo: logotipo "DOTA" + "HUB" em destaque, selo do patch, navegação em abas (Mapa, Rotas, Heróis, Jogadores, Glossário), busca à direita com o atalho "/".
  - Mapa: três colunas (camadas e vista à esquerda; mapa no centro em 2.5D inclinado com marcadores em gota coloridos por lado e brilho no selecionado, e atalhos Roshan/Tormentor/Torres/Runas embaixo; painel do objetivo à direita com título grande, abas Básico/Avançado em pílula, grade de números em fonte mono, cartões numerados no Avançado e solo por herói em pílulas). No celular, o painel vira folha de baixo com alça, e a navegação vai para uma barra inferior.
  - Rotas: os três passos (lado, minuto em botões 4 a 30 com rolagem, situação em pílulas), a rota com selos ①②③ coloridos por risco, etiquetas de minuto, FUGA tracejada e selo PRÓXIMA, e a lista de passos e a caixa "Se o mapa mudar" ao lado.
  - Glossário: lista agrupada por categoria à esquerda; termo grande à direita com links em pílula e fonte no rodapé.
  - Alvos de toque de pelo menos 44 px; contraste de texto de pelo menos 4,5:1.
- [ ] **Step 4: Rodar e ver passar** — `npm test` e `npm run build` passam. Abra `npm run dev` e compare cada tela com o arquivo de `docs/design/v1/` correspondente (PC e 390×844).
- [ ] **Step 5: Commit** — `git add app && git commit -m "feat: apply new visual design from design canvas"`

---

### Task 1: Exportar as fichas de herói

**Files:**
- Modify: `export/dota_export/fontes.py`, `export/dota_export/rotas.py`, `export/dota_export/__main__.py`
- Create: `export/dota_export/herois.py`, `export/schemas/heroi.schema.json`, `export/schemas/herois.schema.json`, `export/tests/test_herois.py`

**Interfaces:**
- Consumes: `fontes.gps()`, `rotas.resolver_alvo`, `validar.validar`
- Produces: `fontes.WORK`, `fontes.POWER_SPIKES`, `fontes.COMPARE_PROS`, `fontes.ITENS`, `fontes.guias_de_heroi() -> list[Path]`; `rotas.caminho_andando(a, b) -> list[list[float]]`; `herois.heroi(caminho: Path) -> dict`, `herois.todos() -> list[dict]`, `herois.indice(fichas) -> list[dict]`; arquivos `herois.json` e `herois/<id>.json`.
- Formato de `herois/<id>.json`: `{id, nome, hero_id, patch, resumo, confianca, guia: {bom_quando[], evitar_quando[], momento_do_draft, lane: {objetivo, itens_iniciais[], dicas[]}, skill_build: [{nivel, skill}], itens_core: [{nome, minuto_alvo, base}], itens_situacionais: [{nome, quando}], condicao_para_farmar: {nivel, minuto_tipico, explicacao}, depois_dos_20[], erros_comuns[]}, power_spikes: [{minuto|null, faixa, marco, o_que_fazer}], por_minuto: [{minuto, nivel, habilidade, item, proximo_spike, objetivo_farm}]|null, rotas: {radiant: [Fase], dire: [Fase]}, rotas_relacionadas: [id], pros: {linhas: [{jogador, jogos, vitorias|null, lh10|null}], leitura|null}, fontes: [str]}` com `Fase = {de, ate, janela, objetivo, passos: [Passo da 1A], caminhos}`.

- [ ] **Step 1: Testes que falham**

```python
# export/tests/test_herois.py
import json

import pytest

from dota_export import herois, validar


@pytest.fixture(scope="module")
def fichas():
    return herois.todos()


def test_exporta_os_22_herois_validos_e_leves(fichas):
    assert len(fichas) == 22
    for ficha in fichas:
        validar.validar("heroi", ficha)
        assert len(json.dumps(ficha, ensure_ascii=False, separators=(",", ":")).encode()) < 80_000, ficha["id"]
    validar.validar("herois", herois.indice(fichas))


def test_medusa_traz_os_numeros_do_guia(fichas):
    medusa = next(f for f in fichas if f["id"] == "medusa")
    assert medusa["hero_id"] == 94
    assert medusa["guia"]["condicao_para_farmar"]["minuto_tipico"] == 7.9
    assert medusa["power_spikes"][0]["marco"] == "Null Talisman (505) e Magic Wand"
    linhas = {l["jogador"]: l for l in medusa["pros"]["linhas"]}
    assert linhas["Felipe"]["lh10"] == 57.0
    assert linhas["Satanic"]["lh10"] == 62
    assert linhas["Yatoro"]["lh10"] == 71


def test_cada_fase_tem_um_caminho_entre_passos(fichas):
    for ficha in fichas:
        for fases in ficha["rotas"].values():
            for fase in fases:
                assert len(fase["caminhos"]) == len(fase["passos"]) - 1, (ficha["id"], fase["janela"])


def test_por_minuto_so_existe_nos_herois_do_pool(fichas):
    por_id = {f["id"]: f for f in fichas}
    assert [m["minuto"] for m in por_id["sven"]["por_minuto"]] == list(range(4, 31))
    assert por_id["medusa"]["por_minuto"] is None


def test_power_spike_com_minuto_em_texto_vira_faixa():
    spike = herois.spike({"minuto": "20-25", "marco": "BKB", "o_que_fazer": "Lute."})
    assert spike == {"minuto": None, "faixa": "20-25", "marco": "BKB", "o_que_fazer": "Lute."}


def test_alvo_desconhecido_diz_heroi_lado_e_janela():
    fase = {"de": 0, "ate": 7.5, "objetivo": "x", "passos": [{"alvo": "nao_existe", "minuto": "0:00"}]}
    with pytest.raises(ValueError, match="medusa radiant 0:00-7:30"):
        herois.fase("medusa", "radiant", fase)
```

- [ ] **Step 2: Rodar e ver falhar**

Run: `cd export && python -m pytest tests/test_herois.py -q`
Expected: FAIL (`dota_export.herois` não existe)

- [ ] **Step 3: Implementação**

Em `fontes.py`, acrescente:

```python
WORK = IMORTAL / "work"
POWER_SPIKES = WORK / "minuto" / "power_spikes.json"
COMPARE_PROS = WORK / "compare_pros.json"
REPLAYS = WORK / "minuto" / "replays"
PADROES_PRO = (WORK / "minuto" / "padroes_pro.json", WORK / "minuto" / "padroes_pro_extra.json")
ITENS = IMORTAL / "data" / "opendota" / "items.json"
LEONARDO = DESKTOP / "dota-leonardo"
HANE = DESKTOP / "dota-hane"
YUMA = DESKTOP / "dota-yuma"


def guias_de_heroi() -> list[Path]:
    return sorted(WORK.glob("hero_*_corrigido.json"))
```

Em `rotas.py`, renomeie `_caminho` para `caminho_andando` (mesmo corpo, sem o `_`) e troque a única chamada dentro de `_rota`. O teste da 1A (`test_passos_tem_caminho_entre_eles`) continua passando.

```python
# export/dota_export/herois.py
"""Ficha de cada herói para o app: guia do PDF 05, power spikes, rotas do herói e números dos pros."""
import json
from functools import cache
from pathlib import Path

from . import fontes, rotas

PROS = (("dados_felipe", "Felipe"), ("dados_satanic", "Satanic"), ("dados_yatoro", "Yatoro"), ("dados_watson", "Watson"))
CAMPOS_POR_MINUTO = ("minuto", "nivel", "habilidade", "item", "proximo_spike", "objetivo_farm")


def _ler(caminho: Path) -> dict:
    return json.loads(caminho.read_text(encoding="utf-8"))


@cache
def _power_spikes() -> dict:
    return _ler(fontes.POWER_SPIKES)["herois"]


@cache
def _compare() -> dict:
    return _ler(fontes.COMPARE_PROS)


@cache
def _itens() -> dict:
    return _ler(fontes.ITENS)


def _numero(valor) -> float | None:
    if isinstance(valor, bool) or not isinstance(valor, (int, float)):
        return None
    return valor


def _mmss(minutos: float) -> str:
    total = round(minutos * 60)
    return f"{total // 60}:{total % 60:02d}"


def _rotulo(alvo: str) -> str:
    basemap, _ = fontes.gps()
    feicao = basemap.feature_of(alvo)
    return feicao.get("nome_pt", alvo) if feicao else alvo


def _passo(n: int, p: dict) -> dict:
    x, y = (p["x"], p["y"]) if "x" in p else rotas.resolver_alvo(p["alvo"])
    return {"n": n, "alvo": p["alvo"], "x": round(float(x), 4), "y": round(float(y), 4), "rotulo": _rotulo(p["alvo"]),
            "minuto": p.get("minuto", ""), "acao": p.get("acao", ""), "risco": "objetivo"}


def fase(heroi: str, lado: str, bruta: dict) -> dict:
    janela = bruta.get("janela") or f"{_mmss(bruta['de'])}-{_mmss(bruta['ate'])}"
    try:
        passos = [_passo(i, p) for i, p in enumerate(bruta["passos"], start=1)]
    except ValueError as erro:
        raise ValueError(f"{heroi} {lado} {janela}: {erro}") from erro
    caminhos = [rotas.caminho_andando((a["x"], a["y"]), (b["x"], b["y"])) for a, b in zip(passos, passos[1:])]
    return {"de": bruta["de"], "ate": bruta["ate"], "janela": janela, "objetivo": bruta["objetivo"],
            "passos": passos, "caminhos": caminhos}


def spike(bruto: dict) -> dict:
    minuto = _numero(bruto["minuto"])
    faixa = bruto.get("faixa") or (_mmss(minuto) if minuto is not None else str(bruto["minuto"]))
    return {"minuto": minuto, "faixa": faixa, "marco": bruto["marco"], "o_que_fazer": bruto["o_que_fazer"]}


def _nome_item(chave: str) -> str:
    return _itens().get(chave, {}).get("dname", chave)


def _guia(d: dict) -> dict:
    q, lane, itens, cf = d["quando_pegar"], d["lane"], d["itens"], d["condicao_para_farmar"]
    return {
        "bom_quando": q["bom_quando"], "evitar_quando": q["evitar_quando"], "momento_do_draft": q["momento_do_draft"],
        "lane": {"objetivo": lane["objetivo"], "itens_iniciais": lane["itens_iniciais"], "dicas": lane["dicas"]},
        "skill_build": [{"nivel": s["nivel"], "skill": s["skill"]} for s in d["skill_build"]],
        "itens_core": [{"nome": i["nome"], "minuto_alvo": _numero(i["minuto_alvo"]), "base": i["base_do_numero"]}
                       for i in itens["core"]],
        "itens_situacionais": [{"nome": i.get("nome") or _nome_item(i["item"]), "quando": i["quando"]}
                               for i in itens["situacionais"]],
        "condicao_para_farmar": {"nivel": cf["nivel"], "minuto_tipico": _numero(cf["minuto_tipico"]),
                                 "explicacao": cf["explicacao"]},
        "depois_dos_20": d["depois_dos_20"], "erros_comuns": d["erros_comuns"],
    }


def _por_minuto(heroi: str) -> list[dict] | None:
    dados = _power_spikes().get(heroi)
    if dados is None:
        return None
    return [{c: m[c] for c in CAMPOS_POR_MINUTO} for m in dados["por_minuto"]]


def _rotas_relacionadas(heroi: str, validas: frozenset[str]) -> list[str]:
    dados = _power_spikes().get(heroi)
    if dados is None:
        return []
    ids = {i for faixa in dados["rotas_por_faixa"].values() for lado in faixa["cadeia"].values() for i in lado}
    ids |= {v["id"] for faixa in dados["rotas_por_faixa"].values() for v in faixa.get("variantes", [])}
    return sorted(ids & validas)


def _linha_pro(rotulo: str, dados: dict) -> dict:
    return {"jogador": rotulo, "jogos": int(dados["jogos"]), "vitorias": dados.get("v", dados.get("vitorias")),
            "lh10": _numero(dados.get("lh10"))}


def _pros(d: dict) -> dict:
    linhas = [_linha_pro(rotulo, d[chave]) for chave, rotulo in PROS if chave in d]
    ref = d.get("referencia_pro_741")
    if ref and ref.get("jogos"):
        linhas.append({"jogador": "Pros no 7.41", "jogos": int(ref["jogos"]), "vitorias": ref.get("vitorias"),
                       "lh10": _numero(ref.get("lh10_mediana"))})
    blocos = _compare()["por_heroi"] + _compare()["herois_sem_pro"]
    leitura = next((b["leitura"] for b in blocos if b["heroi"] == d["hero"]), None)
    return {"linhas": linhas, "leitura": leitura}


def _fonte(f) -> str:
    return f if isinstance(f, str) else " | ".join(str(f[k]) for k in ("nome", "url", "uso", "confianca") if k in f)


def heroi(caminho: Path, rotas_validas: frozenset[str] = frozenset()) -> dict:
    d = _ler(caminho)
    hid = caminho.name.removeprefix("hero_").removesuffix("_corrigido.json")
    return {
        "id": hid, "nome": d["hero"], "hero_id": d["hero_id"], "patch": d["patch"], "resumo": d["resumo"],
        "confianca": d["confianca"], "guia": _guia(d), "power_spikes": [spike(s) for s in d["power_spikes"]],
        "por_minuto": _por_minuto(hid),
        "rotas": {"radiant": [fase(hid, "radiant", f) for f in d["rota_radiant"]],
                  "dire": [fase(hid, "dire", f) for f in d["rota_dire"]]},
        "rotas_relacionadas": _rotas_relacionadas(hid, rotas_validas),
        "pros": _pros(d), "fontes": [_fonte(f) for f in d["fontes"]],
    }


def todos(rotas_validas: frozenset[str] = frozenset()) -> list[dict]:
    return [heroi(c, rotas_validas) for c in fontes.guias_de_heroi()]


def indice(fichas: list[dict]) -> list[dict]:
    return [{"id": f["id"], "nome": f["nome"], "hero_id": f["hero_id"], "patch": f["patch"], "resumo": f["resumo"],
             "tem_por_minuto": f["por_minuto"] is not None} for f in fichas]
```

```json
// export/schemas/heroi.schema.json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$defs": {
    "textos": {"type": "array", "items": {"type": "string"}},
    "passo": {"type": "object", "required": ["n", "alvo", "x", "y", "rotulo", "minuto", "acao", "risco"],
      "properties": {"x": {"type": "number", "minimum": -0.05, "maximum": 1.05}, "y": {"type": "number", "minimum": -0.05, "maximum": 1.05}}},
    "fase": {"type": "object", "required": ["de", "ate", "janela", "objetivo", "passos", "caminhos"],
      "properties": {"de": {"type": "number"}, "ate": {"type": "number"}, "passos": {"type": "array", "minItems": 1, "items": {"$ref": "#/$defs/passo"}},
        "caminhos": {"type": "array", "items": {"type": "array", "minItems": 2}}}}
  },
  "type": "object",
  "required": ["id", "nome", "hero_id", "patch", "resumo", "confianca", "guia", "power_spikes", "por_minuto", "rotas", "rotas_relacionadas", "pros", "fontes"],
  "properties": {
    "id": {"type": "string", "pattern": "^[a-z_]+$"},
    "hero_id": {"type": "integer"},
    "guia": {"type": "object", "required": ["bom_quando", "evitar_quando", "momento_do_draft", "lane", "skill_build", "itens_core", "itens_situacionais", "condicao_para_farmar", "depois_dos_20", "erros_comuns"],
      "properties": {"bom_quando": {"$ref": "#/$defs/textos"}, "evitar_quando": {"$ref": "#/$defs/textos"},
        "depois_dos_20": {"$ref": "#/$defs/textos"}, "erros_comuns": {"$ref": "#/$defs/textos"}}},
    "power_spikes": {"type": "array", "minItems": 1, "items": {"type": "object", "required": ["minuto", "faixa", "marco", "o_que_fazer"],
      "properties": {"minuto": {"type": ["number", "null"]}, "faixa": {"type": "string"}}}},
    "por_minuto": {"type": ["array", "null"]},
    "rotas": {"type": "object", "required": ["radiant", "dire"],
      "properties": {"radiant": {"type": "array", "items": {"$ref": "#/$defs/fase"}}, "dire": {"type": "array", "items": {"$ref": "#/$defs/fase"}}}},
    "rotas_relacionadas": {"type": "array", "items": {"type": "string"}},
    "pros": {"type": "object", "required": ["linhas", "leitura"],
      "properties": {"linhas": {"type": "array", "items": {"type": "object", "required": ["jogador", "jogos", "vitorias", "lh10"],
        "properties": {"jogos": {"type": "integer"}, "vitorias": {"type": ["integer", "null"]}, "lh10": {"type": ["number", "null"]}}}},
        "leitura": {"type": ["string", "null"]}}},
    "fontes": {"$ref": "#/$defs/textos"}
  }
}
```

```json
// export/schemas/herois.schema.json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "array", "minItems": 22,
  "items": {"type": "object", "required": ["id", "nome", "hero_id", "patch", "resumo", "tem_por_minuto"],
    "properties": {"tem_por_minuto": {"type": "boolean"}}}
}
```

Em `__main__.py`, acrescente um gravador de coleção e use-o para os heróis (as rotas já carregadas servem de lista de ids válidos):

```python
def _gravar_colecao(pasta: str, schema: str, itens: list[dict], chave: str = "id") -> None:
    (DESTINO / pasta).mkdir(parents=True, exist_ok=True)
    for item in itens:
        validar.validar(schema, item)
        _gravar(f"{pasta}/{item[chave]}.json", item)
```

Dentro de `main()`, depois de montar `pacotes`:

```python
    fichas = herois.todos(frozenset(r["id"] for r in pacotes["rotas"]))
    _gravar_colecao("herois", "heroi", fichas)
    pacotes["herois"] = herois.indice(fichas)
```

(e mova o laço de validação e gravação de `pacotes` para depois dessa linha, para `herois.json` ser validado com o schema `herois`).

- [ ] **Step 4: Rodar e ver passar**

Run: `cd export && python -m pytest -q`
Expected: todos passam (os da 1A e os 6 novos). Se `test_alvo_desconhecido...` passar mas algum herói real falhar em `todos()`, a mensagem diz herói, lado e janela: corrija o resolvedor ou a leitura do passo, nunca o guia de origem.

- [ ] **Step 5: Conferência de fonte**

Abra `dota-imortal/work/hero_juggernaut_corrigido.json` e compare 5 campos com `app/public/data/herois/juggernaut.json` depois de `python -m dota_export`: `resumo`, o 1º power spike, o `minuto_alvo` do 1º item core, a 1ª fase de `rota_radiant` (mesmos alvos na mesma ordem) e a linha do Satanic. Anote no ledger "Task 1: 5 campos conferidos no Juggernaut".

- [ ] **Step 6: Commit**

```bash
git add export
git commit -m "feat: export hero sheets with routes, power spikes and pro numbers"
```

---

### Task 2: Exportar painéis de Felipe, profissionais e times

**Files:**
- Create: `export/dota_export/jogadores.py`, `export/schemas/painel.schema.json`, `export/schemas/jogadores.schema.json`, `export/schemas/times.schema.json`, `export/tests/test_jogadores.py`
- Modify: `export/dota_export/__main__.py`

**Interfaces:**
- Consumes: `fontes.COMPARE_PROS`, `fontes.PADROES_PRO`
- Produces: `jogadores.slug(texto) -> str`; `jogadores.destaque(rotulo, valor, unidade, fonte) -> dict`; `jogadores.jogadores_de_replay() -> tuple[dict, ...]`; `jogadores.felipe() -> dict`; `jogadores.pro_compare(chave) -> dict` (`chave` em `satanic`, `yatoro`, `watson`); `jogadores.pros_de_replay() -> list[dict]`; `jogadores.indice(paineis) -> list[dict]`; `jogadores.times(paineis) -> list[dict]`.
- Formato do painel (vale para todos): `{id, nome, tipo: "amigo"|"pro", time: str|null, amostra, fontes: [str], destaques: [{rotulo, valor, unidade, fonte}], graficos: [{id, titulo, tipo: "linha"|"barra", x: {rotulo, valores: [str|number]}, series: [{nome, valores: [number|null]}], unidade, fonte, nota: str|null}], achados: [{texto, fonte}], replays: [match_id]}`.

- [ ] **Step 1: Testes que falham**

```python
# export/tests/test_jogadores.py
import pytest

from dota_export import jogadores, validar


def _destaque(painel: dict, rotulo: str) -> float:
    return next(d["valor"] for d in painel["destaques"] if d["rotulo"] == rotulo)


@pytest.fixture(scope="module")
def paineis():
    return [jogadores.felipe(), *(jogadores.pro_compare(c) for c in ("satanic", "yatoro", "watson")),
            *jogadores.pros_de_replay()]


def test_slug_tira_acento_e_simbolo():
    assert jogadores.slug("医者watson`") == "watson"
    assert jogadores.slug("Team Spirit") == "team-spirit"
    assert jogadores.slug("PARAGUAY ") == "paraguay"


def test_todos_os_paineis_validam_e_series_batem_com_o_eixo(paineis):
    for painel in paineis:
        validar.validar("painel", painel)
        for g in painel["graficos"]:
            assert all(len(s["valores"]) == len(g["x"]["valores"]) for s in g["series"]), (painel["id"], g["id"])
    validar.validar("jogadores", jogadores.indice(paineis))


def test_felipe_traz_os_numeros_do_compare_pros(paineis):
    felipe = paineis[0]
    assert _destaque(felipe, "Felipe solo · Partidas") == 41
    assert _destaque(felipe, "Felipe solo · Last hits aos 10 min") == 52.8
    assert _destaque(felipe, "Felipe party · Last hits aos 10 min") == 54.6


def test_satanic_tem_time_replays_e_estilo(paineis):
    satanic = next(p for p in paineis if p["id"] == "satanic")
    assert satanic["time"] == "PARIVISION"
    assert _destaque(satanic, "Satanic · Partidas") == 94
    assert {"9021397264", "8944612322"} <= set(satanic["replays"])
    assert satanic["achados"]


def test_pros_de_replay_incluem_skiter_e_nao_repetem_os_tres(paineis):
    ids = {p["id"] for p in jogadores.pros_de_replay()}
    assert "skiter" in ids
    assert not ids & {"satanic", "yatoro", "watson"}
    skiter = next(p for p in paineis if p["id"] == "skiter")
    assert skiter["replays"] == ["9015977795"]


def test_times_juntam_quem_jogou_junto(paineis):
    times = {t["id"]: t for t in jogadores.times(paineis)}
    validar.validar("times", list(times.values()))
    assert "yatoro" in times["team-spirit"]["jogadores"]
    assert "satanic" in times["parivision"]["jogadores"]
```

- [ ] **Step 2: Rodar e ver falhar**: `python -m pytest tests/test_jogadores.py -q` → FAIL.

- [ ] **Step 3: Implementação**

```python
# export/dota_export/jogadores.py
"""Painéis de jogador num formato só (destaques, gráficos, achados) e os times formados por eles."""
import json
import re
import unicodedata
from collections import defaultdict
from functools import cache

from . import fontes

FONTE_COMPARE = "dota-imortal/work/compare_pros.json"
FONTE_PADROES = "dota-imortal/work/minuto/padroes_pro.json e padroes_pro_extra.json"
AMOSTRAS = {"felipe_solo": "Felipe solo", "felipe_party": "Felipe party",
            "satanic": "Satanic", "yatoro": "Yatoro", "watson": "Watson"}
PROS_COM_PAINEL_PROPRIO = frozenset({"satanic", "yatoro", "watson"})
CURVAS = {"lh_t": ("Last hits acumulados até cada minuto", "last hits"),
          "gold_t": ("Ouro ganho até cada minuto", "ouro"),
          "xp_t": ("XP ganha até cada minuto", "XP")}
DESTAQUES_DA_TABELA = (("lh10", "Last hits aos 10 min", "last hits"), ("gpm", "GPM", "ouro por min"),
                       ("mortes", "Mortes por jogo", "mortes"))


def slug(texto: str) -> str:
    ascii_ = unicodedata.normalize("NFKD", texto).encode("ascii", "ignore").decode().lower()
    return re.sub(r"[^a-z0-9]+", "-", ascii_).strip("-")


def destaque(rotulo: str, valor: float, unidade: str, fonte: str) -> dict:
    return {"rotulo": rotulo, "valor": valor, "unidade": unidade, "fonte": fonte}


@cache
def _compare() -> dict:
    return json.loads(fontes.COMPARE_PROS.read_text(encoding="utf-8"))


@cache
def jogadores_de_replay() -> tuple[dict, ...]:
    return tuple(j for caminho in fontes.PADROES_PRO
                 for j in json.loads(caminho.read_text(encoding="utf-8"))["jogadores"])


def _arredondar(valores: list) -> list:
    return [None if v is None else round(v, 1) for v in valores]


def _media(metrica: str, amostra: str) -> float:
    linha = next(t for t in _compare()["tabela"] if t["id"] == metrica)
    return round(linha[amostra]["media"], 1)


def _destaques(amostra: str) -> list[dict]:
    dados, nome = _compare()["amostras"][amostra], AMOSTRAS[amostra]
    return [destaque(f"{nome} · Partidas", dados["n"], "jogos", dados["criterio"]),
            destaque(f"{nome} · Vitórias", round(100 * dados["vitorias"] / dados["n"], 1), "%", FONTE_COMPARE),
            *(destaque(f"{nome} · {rotulo}", _media(metrica, amostra), unidade, FONTE_COMPARE)
              for metrica, rotulo, unidade in DESTAQUES_DA_TABELA)]


def _curvas(amostras: list[str]) -> list[dict]:
    curvas = _compare()["curvas"]
    return [{"id": chave, "titulo": titulo, "tipo": "linha",
             "x": {"rotulo": "minuto", "valores": curvas[chave]["minutos"]},
             "series": [{"nome": AMOSTRAS[a], "valores": _arredondar(curvas[chave][a]["media"])} for a in amostras],
             "unidade": unidade, "fonte": FONTE_COMPARE, "nota": "média de cada amostra"}
            for chave, (titulo, unidade) in CURVAS.items()]


def _mortes_por_fase(amostras: list[str]) -> dict:
    mortes = _compare()["mortes_por_fase"]
    return {"id": "mortes_por_fase", "titulo": "Mortes por 10 min em cada fase", "tipo": "barra",
            "x": {"rotulo": "fase", "valores": mortes["fases"]},
            "series": [{"nome": AMOSTRAS[a], "valores": [round(f["mortes_por_10min_na_fase"], 2) for f in mortes[a]["por_fase"]]}
                       for a in amostras],
            "unidade": "mortes por 10 min", "fonte": FONTE_COMPARE, "nota": None}


def _achados_de_lista(chave: str, prefixo: str) -> list[dict]:
    return [{"texto": f"{prefixo}: {item['tema']}. {item['numeros']}", "fonte": FONTE_COMPARE}
            for item in _compare()["listas"][chave]]


def replays_do_jogador(nome: str) -> list[str]:
    alvo = slug(nome)
    return sorted({str(j["match_id"]) for j in jogadores_de_replay() if alvo in slug(j["jogador"])})


def felipe() -> dict:
    amostras = ["felipe_solo", "felipe_party", "satanic", "yatoro", "watson"]
    return {"id": "felipe", "nome": "Felipe", "tipo": "amigo", "time": None,
            "amostra": "Felipe de pos1 em ranqueada (LH aos 10 de 30 ou mais), solo e party, contra Satanic, Yatoro e Watson",
            "fontes": [FONTE_COMPARE],
            "destaques": _destaques("felipe_solo") + _destaques("felipe_party"),
            "graficos": [*_curvas(amostras), _mortes_por_fase(amostras)],
            "achados": _achados_de_lista("felipe_faz_pior", "Faz pior")
                       + _achados_de_lista("felipe_faz_melhor_ou_igual", "Faz melhor ou igual"),
            "replays": []}


def pro_compare(chave: str) -> dict:
    estilo = _compare()["estilos"][chave]
    comparadas = ["felipe_solo", chave]
    return {"id": chave, "nome": AMOSTRAS[chave], "tipo": "pro", "time": estilo["time"], "amostra": estilo["amostra"],
            "fontes": [FONTE_COMPARE, FONTE_PADROES],
            "destaques": _destaques(chave),
            "graficos": [*_curvas(comparadas), _mortes_por_fase(comparadas)],
            "achados": [{"texto": f"{p['ponto']}. {p['numeros']}", "fonte": FONTE_COMPARE} for p in estilo["pontos"]]
                       + [{"texto": f"Para copiar: {c}", "fonte": FONTE_COMPARE} for c in estilo["copiar"]],
            "replays": replays_do_jogador(AMOSTRAS[chave])}


def _painel_de_replay(partidas: list[dict]) -> dict:
    nome = partidas[0]["jogador"]
    rotulos = [f"{p['data']} {p['heroi']}" for p in partidas]
    return {"id": slug(nome), "nome": nome, "tipo": "pro",
            "time": next((p["time"].strip() for p in partidas if p.get("time")), None),
            "amostra": f"{len(partidas)} replay(s) de liga lidos segundo a segundo", "fontes": [FONTE_PADROES],
            "destaques": [destaque("Replays lidos", len(partidas), "jogos", FONTE_PADROES),
                          destaque("Vitórias", sum(p["resultado"] == "vitória" for p in partidas), "jogos", FONTE_PADROES)],
            "graficos": [{"id": "farm_por_replay", "titulo": "Last hits de lane e de neutro por replay", "tipo": "barra",
                          "x": {"rotulo": "partida", "valores": rotulos},
                          "series": [{"nome": "Lane", "valores": [p["lh_lane"] for p in partidas]},
                                     {"nome": "Neutros", "valores": [p["lh_neutro"] for p in partidas]}],
                          "unidade": "last hits", "fonte": FONTE_PADROES, "nota": "minutos 4 a 30 de cada replay"}],
            "achados": [], "replays": sorted({str(p["match_id"]) for p in partidas})}


def pros_de_replay() -> list[dict]:
    por_nome: dict[str, list[dict]] = defaultdict(list)
    for jogador in jogadores_de_replay():
        por_nome[slug(jogador["jogador"])].append(jogador)
    return [_painel_de_replay(partidas) for nome, partidas in sorted(por_nome.items())
            if nome not in PROS_COM_PAINEL_PROPRIO]


def indice(paineis: list[dict]) -> list[dict]:
    return [{"id": p["id"], "nome": p["nome"], "tipo": p["tipo"], "time": p["time"], "amostra": p["amostra"]}
            for p in paineis]


def times(paineis: list[dict]) -> list[dict]:
    membros: dict[str, set[str]] = defaultdict(set)
    for painel in paineis:
        if painel["time"]:
            membros[painel["time"].strip()].add(painel["id"])
    for chave, lista in _compare()["times_nas_partidas"].items():
        for nome, _ in lista:
            membros[nome.strip()].add(chave)
    return [{"id": slug(nome), "nome": nome, "jogadores": sorted(ids), "fonte": f"{FONTE_COMPARE}; {FONTE_PADROES}"}
            for nome, ids in sorted(membros.items())]
```

```json
// export/schemas/painel.schema.json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "required": ["id", "nome", "tipo", "time", "amostra", "fontes", "destaques", "graficos", "achados", "replays"],
  "properties": {
    "id": {"type": "string", "pattern": "^[a-z0-9-]+$"},
    "tipo": {"enum": ["amigo", "pro"]},
    "time": {"type": ["string", "null"]},
    "destaques": {"type": "array", "items": {"type": "object", "required": ["rotulo", "valor", "unidade", "fonte"],
      "properties": {"valor": {"type": "number"}}}},
    "graficos": {"type": "array", "items": {"type": "object", "required": ["id", "titulo", "tipo", "x", "series", "unidade", "fonte", "nota"],
      "properties": {"tipo": {"enum": ["linha", "barra"]},
        "x": {"type": "object", "required": ["rotulo", "valores"], "properties": {"valores": {"type": "array", "minItems": 1, "items": {"type": ["string", "number"]}}}},
        "series": {"type": "array", "minItems": 1, "items": {"type": "object", "required": ["nome", "valores"],
          "properties": {"valores": {"type": "array", "items": {"type": ["number", "null"]}}}}},
        "nota": {"type": ["string", "null"]}}}},
    "achados": {"type": "array", "items": {"type": "object", "required": ["texto", "fonte"]}},
    "replays": {"type": "array", "items": {"type": "string", "pattern": "^\\d+$"}}
  }
}
```

```json
// export/schemas/jogadores.schema.json
{"$schema": "https://json-schema.org/draft/2020-12/schema", "type": "array", "minItems": 1,
 "items": {"type": "object", "required": ["id", "nome", "tipo", "time", "amostra"], "properties": {"tipo": {"enum": ["amigo", "pro"]}}}}
```

```json
// export/schemas/times.schema.json
{"$schema": "https://json-schema.org/draft/2020-12/schema", "type": "array",
 "items": {"type": "object", "required": ["id", "nome", "jogadores", "fonte"],
   "properties": {"jogadores": {"type": "array", "minItems": 1, "items": {"type": "string"}}}}}
```

Em `__main__.py`, dentro de `main()`:

```python
    paineis = [jogadores.felipe(), *(jogadores.pro_compare(c) for c in ("satanic", "yatoro", "watson")),
               *jogadores.pros_de_replay()]
    _gravar_colecao("jogadores", "painel", paineis)
    pacotes["jogadores"] = jogadores.indice(paineis)
    pacotes["times"] = jogadores.times(paineis)
```

- [ ] **Step 4: Rodar e ver passar**: `python -m pytest -q` → todos passam.

- [ ] **Step 5: Conferência de fonte**

Compare 5 números do painel do Felipe com o texto de `compare_pros.json` (`listas.consenso_pros_fazem_melhor[0].numeros`): LH aos 10 do Felipe solo (52,8), party (54,6), Satanic (72,6), Yatoro (70,6), Watson (69,8). Se algum não bater, o erro é de arredondamento ou de amostra: corrija o export. Anote no ledger.

- [ ] **Step 6: Commit**: `git add export && git commit -m "feat: export player panels for felipe, pros and teams"`

---

### Task 3: Exportar os painéis de Leonardo, Hane e Yuma (v2)

**Files:**
- Create: `export/dota_export/amigos.py`, `export/tests/test_amigos.py`
- Modify: `export/dota_export/__main__.py`

**Interfaces:**
- Consumes: `fontes.LEONARDO`, `fontes.HANE`, `fontes.YUMA`, `jogadores.destaque`, schema `painel`
- Produces: `amigos.leonardo() -> dict`, `amigos.hane() -> dict`, `amigos.yuma() -> dict` (formato de painel da Task 2); `amigos.achados_do_resumo(caminho, fonte) -> list[dict]`; `amigos.pct_vitoria(linhas) -> float | None`.
- Filtros (iguais aos relatórios): Leonardo usa todas as 714 linhas de `data/partidas.csv` e, para herói no mid, `e_mid_inferido == "True"` (é o que dá 232 jogos de Invoker no resumo); Hane usa `heroi_valido == "True"` e `abandonou != "True"`, e para Pos 4 x Pos 5 só `certeza_posicao` em `alta` ou `media` (regra escrita em `dota-hane/src/estatistica.py`, linhas 87 e 105); Yuma usa `data/v2/herois_elo.csv` e `data/v2/herois_comparacao.csv` no recorte `7.40/7.41` com `suficiente == "True"`.

- [ ] **Step 1: Testes que falham**

```python
# export/tests/test_amigos.py
import pytest

from dota_export import amigos, validar


def _destaque(painel, rotulo):
    return next(d["valor"] for d in painel["destaques"] if d["rotulo"] == rotulo)


@pytest.fixture(scope="module")
def paineis():
    return {"leonardo": amigos.leonardo(), "hane": amigos.hane(), "yuma": amigos.yuma()}


def test_paineis_validam(paineis):
    for painel in paineis.values():
        validar.validar("painel", painel)


def test_leonardo_bate_com_o_resumo(paineis):
    leo = paineis["leonardo"]
    assert _destaque(leo, "Partidas") == 714
    assert _destaque(leo, "Vitórias") == 53.4
    assert _destaque(leo, "Invoker no mid · Partidas") == 232
    assert any("Invoker no mid ganha 66%" in a["texto"] for a in leo["achados"])


def test_hane_usa_o_filtro_de_certeza_do_relatorio(paineis):
    assert _destaque(paineis["hane"], "Pos 4 · Vitórias") == 57.7
    assert _destaque(paineis["hane"], "Pos 5 · Vitórias") == 51.9


def test_yuma_v2_traz_o_elo(paineis):
    assert _destaque(paineis["yuma"], "Jogos com Elo") == 315
    assert _destaque(paineis["yuma"], "Acima do esperado pelo Elo") == 4.5


def test_achados_pulam_titulo_em_negrito(tmp_path):
    arquivo = tmp_path / "r.md"
    arquivo.write_text("**Título**\n\n**Ponto.** Texto.\n- item um\n1. passo\nlinha solta\n", encoding="utf-8")
    textos = [a["texto"] for a in amigos.achados_do_resumo(arquivo, "r.md")]
    assert textos == ["Ponto. Texto.", "item um", "passo"]
```

- [ ] **Step 2: Rodar e ver falhar**: FAIL (`amigos` não existe).

- [ ] **Step 3: Implementação**

```python
# export/dota_export/amigos.py
"""Painéis de Leonardo, Hane e Yuma (v2) com os mesmos filtros dos relatórios de cada projeto."""
import csv
import re
from collections import defaultdict
from pathlib import Path

from . import fontes
from .jogadores import destaque

MARCADOR = re.compile(r"^(\*\*|- |\d+\. )")
LIMPA = re.compile(r"\*\*|^- |^\d+\. ")
CERTEZA_DO_RELATORIO = ("alta", "media")
FAIXAS_DE_MORTE = ("0", "1", "2", "3", "4+")


def _csv(caminho: Path) -> list[dict]:
    with caminho.open(encoding="utf-8", newline="") as arquivo:
        return list(csv.DictReader(arquivo))


def _venceu(linha: dict) -> bool:
    return linha["vitoria"] == "True"


def pct_vitoria(linhas: list[dict]) -> float | None:
    return round(100 * sum(map(_venceu, linhas)) / len(linhas), 1) if linhas else None


def _grupos(linhas: list[dict], chave) -> dict[str, list[dict]]:
    grupos: dict[str, list[dict]] = defaultdict(list)
    for linha in linhas:
        grupos[chave(linha)].append(linha)
    return grupos


def _barras(id_: str, titulo: str, grupos: dict[str, list[dict]], fonte: str) -> dict:
    """Uma série de vitória (%); o número de partidas vai no rótulo para não misturar unidades."""
    rotulos = list(grupos)
    return {"id": id_, "titulo": titulo, "tipo": "barra",
            "x": {"rotulo": "", "valores": [f"{r} ({len(grupos[r])})" for r in rotulos]},
            "series": [{"nome": "Vitória", "valores": [pct_vitoria(grupos[r]) for r in rotulos]}],
            "unidade": "%", "fonte": fonte, "nota": "entre parênteses, o número de partidas"}


def _mais_jogados(grupos: dict[str, list[dict]], n: int) -> dict[str, list[dict]]:
    return dict(sorted(grupos.items(), key=lambda item: -len(item[1]))[:n])


def achados_do_resumo(caminho: Path, fonte: str) -> list[dict]:
    linhas = [l.strip() for l in caminho.read_text(encoding="utf-8").splitlines()]
    uteis = [l for l in linhas if MARCADOR.match(l) and not (l.startswith("**") and l.endswith("**"))]
    return [{"texto": LIMPA.sub("", l).strip(), "fonte": fonte} for l in uteis]


def _destaques_de_heroi(linhas: list[dict], heroi: str, fonte: str) -> list[dict]:
    jogos = [l for l in linhas if l["heroi"] == heroi]
    return [destaque(f"{heroi} no mid · Partidas", len(jogos), "jogos", fonte),
            destaque(f"{heroi} no mid · Vitórias", pct_vitoria(jogos), "%", fonte)]


def leonardo() -> dict:
    fonte = "dota-leonardo/data/partidas.csv"
    todas = _csv(fontes.LEONARDO / "data" / "partidas.csv")
    mid = [l for l in todas if l["e_mid_inferido"] == "True"]
    ultimas = sorted(todas, key=lambda l: int(l["start_time_utc"]))[-20:]
    cronologica = sorted(todas, key=lambda l: int(l["start_time_utc"]))
    sessao = _grupos([l for l in todas if l["pos_sessao"] and int(l["pos_sessao"]) <= 7], lambda l: l["pos_sessao"])
    return {
        "id": "leonardo", "nome": "Leonardo", "tipo": "amigo", "time": None,
        "amostra": f"{len(todas)} partidas no OpenDota (set/2025 a out/2026)",
        "fontes": [fonte, "dota-leonardo/work/resumo-para-o-leonardo.md"],
        "destaques": [destaque("Partidas", len(todas), "jogos", fonte), destaque("Vitórias", pct_vitoria(todas), "%", fonte),
                      *_destaques_de_heroi(mid, "Invoker", fonte), *_destaques_de_heroi(mid, "Snapfire", fonte),
                      destaque("Vitórias nas últimas 20", sum(map(_venceu, ultimas)), "jogos", fonte)],
        "graficos": [
            _barras("vitoria_por_heroi_mid", "Vitória por herói no mid (10 mais jogados)",
                    _mais_jogados(_grupos(mid, lambda l: l["heroi"]), 10), fonte),
            _barras("vitoria_por_horario", "Vitória por faixa de horário",
                    dict(sorted(_grupos(todas, lambda l: l["faixa_2h"]).items())), fonte),
            _barras("vitoria_por_posicao_na_sessao", "Vitória pela posição da partida na sessão",
                    dict(sorted(sessao.items(), key=lambda item: int(item[0]))), fonte),
            {"id": "mmr_estimado", "titulo": "MMR estimado ao longo do tempo", "tipo": "linha",
             "x": {"rotulo": "data", "valores": [l["data"] for l in cronologica]},
             "series": [{"nome": "MMR estimado", "valores": [float(l["mmr_acumulado_est"]) for l in cronologica]}],
             "unidade": "MMR", "fonte": fonte, "nota": "estimado com +25 por vitória e -25 por derrota; a smurf não entra"},
        ],
        "achados": achados_do_resumo(fontes.LEONARDO / "work" / "resumo-para-o-leonardo.md",
                                     "dota-leonardo/work/resumo-para-o-leonardo.md"),
        "replays": [],
    }


def _faixa_de_morte(linha: dict) -> str:
    mortes = int(float(linha["mortes_antes_10"]))
    return "4+" if mortes >= 4 else str(mortes)


def _vitoria_por_faixa_de_morte(por_posicao: dict[str, list[dict]], fonte: str) -> dict:
    def serie(linhas: list[dict]) -> list[float | None]:
        grupos = _grupos([l for l in linhas if l["mortes_antes_10"]], _faixa_de_morte)
        return [pct_vitoria(grupos.get(f, [])) for f in FAIXAS_DE_MORTE]
    return {"id": "vitoria_por_mortes_antes_10", "titulo": "Vitória pelo número de mortes até os 10 min", "tipo": "barra",
            "x": {"rotulo": "mortes até os 10 min", "valores": list(FAIXAS_DE_MORTE)},
            "series": [{"nome": f"Pos {p}", "valores": serie(linhas)} for p, linhas in por_posicao.items()],
            "unidade": "%", "fonte": fonte, "nota": "Pos 4 e Pos 5 com certeza de posição alta ou média"}


def _destaques_de_posicao(posicao: str, linhas: list[dict], fonte: str) -> list[dict]:
    com_mortes = [l for l in linhas if l["mortes_antes_10"]]
    poucas = [l for l in com_mortes if float(l["mortes_antes_10"]) <= 1]
    muitas = [l for l in com_mortes if float(l["mortes_antes_10"]) >= 3]
    return [destaque(f"Pos {posicao} · Partidas", len(linhas), "jogos", fonte),
            destaque(f"Pos {posicao} · Vitórias", pct_vitoria(linhas), "%", fonte),
            destaque(f"Pos {posicao} · Vitórias com 0 ou 1 morte até os 10", pct_vitoria(poucas), "%", fonte),
            destaque(f"Pos {posicao} · Vitórias com 3 ou mais mortes até os 10", pct_vitoria(muitas), "%", fonte)]


def hane() -> dict:
    fonte = "dota-hane/data/partidas.csv (filtros de dota-hane/src/estatistica.py)"
    base = [l for l in _csv(fontes.HANE / "data" / "partidas.csv")
            if l["heroi_valido"] == "True" and l["abandonou"] != "True"]
    suporte = [l for l in base if l["certeza_posicao"] in CERTEZA_DO_RELATORIO]
    por_posicao = {p: [l for l in suporte if l["posicao"] == p] for p in ("4", "5")}
    return {
        "id": "hane", "nome": "Hane", "tipo": "amigo", "time": None,
        "amostra": f"{len(base)} partidas no OpenDota e 3 replays lidos segundo a segundo",
        "fontes": [fonte, "dota-hane/work/resumo-para-o-hane.md", "dota-hane/work/estatistica.md"],
        "destaques": [destaque("Partidas analisadas", len(base), "jogos", fonte),
                      *(d for p, linhas in por_posicao.items() for d in _destaques_de_posicao(p, linhas, fonte))],
        "graficos": [_vitoria_por_faixa_de_morte(por_posicao, fonte),
                     {"id": "vitoria_por_ano", "titulo": "Vitória por ano", "tipo": "barra",
                      "x": {"rotulo": "ano", "valores": sorted({l["ano"] for l in suporte})},
                      "series": [{"nome": f"Pos {p}", "valores": [pct_vitoria([l for l in linhas if l["ano"] == ano])
                                                                  for ano in sorted({l["ano"] for l in suporte})]}
                                 for p, linhas in por_posicao.items()],
                      "unidade": "%", "fonte": fonte, "nota": None}],
        "achados": achados_do_resumo(fontes.HANE / "work" / "resumo-para-o-hane.md", "dota-hane/work/resumo-para-o-hane.md"),
        "replays": [],
    }


def _comparacao(metrica: str, titulo: str, unidade: str, casas: int) -> dict:
    fonte = "dota-yuma/data/v2/herois_comparacao.csv"
    linhas = [l for l in _csv(fontes.YUMA / "data" / "v2" / "herois_comparacao.csv")
              if l["metrica"] == metrica and l["recorte"] == "7.40/7.41" and l["suficiente"] == "True"]
    linhas = sorted(linhas, key=lambda l: -int(l["n_yuma"]))[:12]
    return {"id": f"comparacao_{metrica}", "titulo": titulo, "tipo": "barra",
            "x": {"rotulo": "herói", "valores": [f"{l['heroi']} ({l['n_yuma']})" for l in linhas]},
            "series": [{"nome": "Yuma", "valores": [round(float(l["yuma"]), casas) for l in linhas]},
                       {"nome": "Pos1 pro no mesmo herói", "valores": [round(float(l["comp"]), casas) for l in linhas]}],
            "unidade": unidade, "fonte": fonte, "nota": "7.40 e 7.41; entre parênteses, os jogos do Yuma no herói"}


def yuma() -> dict:
    fonte_elo = "dota-yuma/data/v2/herois_elo.csv"
    elo = _csv(fontes.YUMA / "data" / "v2" / "herois_elo.csv")
    geral = next(l for l in elo if l["heroi"].startswith("(todos"))
    por_heroi = sorted((l for l in elo if not l["heroi"].startswith("(todos") and int(l["n"]) >= 10),
                       key=lambda l: -int(l["n"]))
    return {
        "id": "yuma", "nome": "Yuma", "tipo": "pro", "time": None,
        "amostra": "452 replays do Yuma contra 575 de 68 pos1 no mesmo herói (7.40 e 7.41)",
        "fontes": [fonte_elo, "dota-yuma/data/v2/herois_comparacao.csv", "dota-yuma/work/v2/resumo-yuma-v2.md"],
        "destaques": [destaque("Jogos com Elo", int(geral["n"]), "jogos", fonte_elo),
                      destaque("Vitórias", round(100 * float(geral["vitoria"]), 1), "%", fonte_elo),
                      destaque("Vitória esperada pelo Elo", round(100 * float(geral["esperado"]), 1), "%", fonte_elo),
                      destaque("Acima do esperado pelo Elo", round(100 * float(geral["acima"]), 1), "pp", fonte_elo)],
        "graficos": [_comparacao("lh_min", "Last hits por minuto no mesmo herói", "last hits por min", 1),
                     _comparacao("gpm", "GPM no mesmo herói", "ouro por min", 0),
                     {"id": "elo_por_heroi", "titulo": "Vitória acima do esperado pelo Elo, por herói", "tipo": "barra",
                      "x": {"rotulo": "herói", "valores": [f"{l['heroi']} ({l['n']})" for l in por_heroi]},
                      "series": [{"nome": "Acima do esperado", "valores": [round(100 * float(l["acima"]), 1) for l in por_heroi]}],
                      "unidade": "pp", "fonte": fonte_elo, "nota": "heróis com 10 ou mais jogos com Elo"}],
        "achados": achados_do_resumo(fontes.YUMA / "work" / "v2" / "resumo-yuma-v2.md", "dota-yuma/work/v2/resumo-yuma-v2.md"),
        "replays": [],
    }
```

Em `__main__.py`, acrescente `amigos.leonardo(), amigos.hane(), amigos.yuma()` à lista `paineis` da Task 2 (antes de gravar).

- [ ] **Step 4: Rodar e ver passar**: `python -m pytest -q` → passam.

- [ ] **Step 5: Conferência de fonte**

Leia `dota-leonardo/work/resumo-para-o-leonardo.md`, `dota-hane/work/resumo-para-o-hane.md`, `dota-hane/work/estatistica.md` (linhas 39 e 285) e `dota-yuma/work/v2/resumo-yuma-v2.md`. Para cada número citado nos resumos que tem destaque ou barra no painel, confira o valor exportado. Divergência conhecida: o relatório do Hane diz Pos 4 "n=750" e o filtro dá 749 (a porcentagem bate, 57,7%); registre no ledger e não force o número. Qualquer outra divergência: pare e descubra o filtro certo no `src/` do projeto de origem.

- [ ] **Step 6: Commit**: `git add export && git commit -m "feat: export leonardo, hane and yuma v2 panels"`

---

### Task 4: Exportar as trajetórias dos replays (posição a cada 5 s, wards e mortes)

**Files:**
- Create: `export/dota_export/trajetorias.py`, `export/schemas/trajetoria.schema.json`, `export/schemas/replays.schema.json`, `export/tests/test_trajetorias.py`
- Modify: `export/dota_export/__main__.py`

**Interfaces:**
- Consumes: `fontes.REPLAYS`, `fontes.gps()` (`paths.GRID_ORIGIN`, `paths.GRID_SCALE`), `jogadores.jogadores_de_replay`
- Produces: `trajetorias.reduzir(linhas, passo_s=5, ate_s=1800) -> tuple[dict[int, list[int]], int]`; `trajetorias.ler_replay(pasta) -> tuple[dict, list[dict], list[dict]]`; `trajetorias.posicoes(linhas) -> dict[tuple[int, int], tuple[float, float, bool]]`; `trajetorias.lado(time: int) -> str`; `trajetorias.replay(pasta) -> dict`; `trajetorias.indice(exportados) -> list[dict]`; arquivos `trajetorias/<match_id>.json` e `replays.json`.
- Formato de `trajetorias/<id>.json`: `{match_id, passo_s, fim_s, focos: [slot], herois: [{slot, heroi, lado, jogador|null, xy: [x0, y0, x1, y1, ...]}], wards: [{t, ate, x, y, lado, tipo}], mortes: [{t, x, y, heroi, lado}]}`. `xy` em milésimos do mapa (0 a 1000), um par por amostra de `passo_s` segundos a partir de 0:00; `-1, -1` = morto ou sem dado.

- [ ] **Step 1: Testes que falham**

```python
# export/tests/test_trajetorias.py
import json

import pytest

from dota_export import fontes, trajetorias, validar


def test_reduzir_amostra_a_cada_passo_e_marca_morto():
    linhas = [{"t": "0", "slot": "0", "gx": "57", "gy": "57", "vivo": "1"},
              {"t": "3", "slot": "0", "gx": "100", "gy": "100", "vivo": "1"},
              {"t": "5", "slot": "0", "gx": "199", "gy": "199", "vivo": "0"}]
    assert trajetorias.reduzir(linhas, passo_s=5, ate_s=10) == ({0: [0, 0, -1, -1]}, 5)


def test_antes_da_buzina_fica_de_fora():
    linhas = [{"t": "-5", "slot": "0", "gx": "57", "gy": "57", "vivo": "1"},
              {"t": "0", "slot": "0", "gx": "128", "gy": "128", "vivo": "1"}]
    assert trajetorias.reduzir(linhas, passo_s=5, ate_s=10) == ({0: [500, 500]}, 0)


@pytest.fixture(scope="module")
def exportados():
    return [trajetorias.replay(p) for p in sorted(fontes.REPLAYS.iterdir()) if p.is_dir()]


def test_todos_os_replays_validam_e_ficam_leves(exportados):
    assert len(exportados) == 28
    for r in exportados:
        validar.validar("trajetoria", r)
        assert len(r["herois"]) == 10, r["match_id"]
        assert len(json.dumps(r, separators=(",", ":")).encode()) < 60_000, r["match_id"]
    validar.validar("replays", trajetorias.indice(exportados))


def test_foco_vem_da_rota_real_e_dos_padroes(exportados):
    por_id = {r["match_id"]: r for r in exportados}
    assert 0 in por_id["9027486175"]["focos"]
    assert set(por_id["9022767300"]["focos"]) == {4, 128}


def test_ward_some_quando_acaba(exportados):
    for r in exportados:
        assert all(w["t"] <= w["ate"] <= r["fim_s"] for w in r["wards"]), r["match_id"]
```

- [ ] **Step 2: Rodar e ver falhar**: FAIL.

- [ ] **Step 3: Implementação**

```python
# export/dota_export/trajetorias.py
"""Replays lidos, reduzidos para o celular: posição de cada herói a cada PASSO_S segundos, wards e mortes."""
import csv
import json
from collections import defaultdict
from pathlib import Path

from . import fontes, jogadores

PASSO_S = 5
ATE_S = 30 * 60
AUSENTE = (-1, -1)
LADO = {2: "radiant", 3: "dire"}


def lado(time: int) -> str:
    return LADO[time]


def _norm(g: float) -> float:
    _, paths = fontes.gps()
    return (g - paths.GRID_ORIGIN) / paths.GRID_SCALE


def _mil(g: str | float) -> int:
    return min(1000, max(0, round(_norm(float(g)) * 1000)))


def reduzir(linhas, passo_s: int = PASSO_S, ate_s: int = ATE_S) -> tuple[dict[int, list[int]], int]:
    por_slot: dict[int, dict[int, tuple[int, int]]] = defaultdict(dict)
    for linha in linhas:
        t = int(linha["t"])
        if t < 0 or t > ate_s or t % passo_s:
            continue
        vivo = linha["vivo"] == "1"
        por_slot[int(linha["slot"])][t] = (_mil(linha["gx"]), _mil(linha["gy"])) if vivo else AUSENTE
    fim = max((t for pontos in por_slot.values() for t in pontos), default=0)
    tempos = range(0, fim + 1, passo_s)
    return {slot: [v for t in tempos for v in pontos.get(t, AUSENTE)] for slot, pontos in por_slot.items()}, fim


def ler_replay(pasta: Path) -> tuple[dict, list[dict], list[dict]]:
    meta = json.loads((pasta / "meta.json").read_text(encoding="utf-8"))
    with (pasta / "posicoes.csv").open(encoding="utf-8", newline="") as arquivo:
        linhas = list(csv.DictReader(arquivo))
    with (pasta / "eventos.jsonl").open(encoding="utf-8") as arquivo:
        eventos = [json.loads(l) for l in arquivo if l.strip()]
    return meta, linhas, eventos


def posicoes(linhas: list[dict]) -> dict[tuple[int, int], tuple[float, float, bool]]:
    return {(int(l["slot"]), int(l["t"])): (_norm(float(l["gx"])), _norm(float(l["gy"])), l["vivo"] == "1")
            for l in linhas}


def _nome_publico(nome: str | None) -> str | None:
    limpo = "".join(c for c in (nome or "") if c.isprintable() and c != "�").strip()
    return limpo or None


def _focos(pasta: Path, match_id: int) -> list[int]:
    slots = {j["slot"] for j in jogadores.jogadores_de_replay() if j["match_id"] == match_id}
    rota_real = pasta / "rota_real.json"
    if rota_real.exists():
        slots.add(json.loads(rota_real.read_text(encoding="utf-8"))["slot"])
    return sorted(slots)


def _wards(eventos: list[dict], fim_s: int) -> list[dict]:
    fins = {(e["gx"], e["gy"], e["nome"]): e["t"] for e in eventos if e["tipo"] == "ward_fim"}
    def ward(e: dict) -> dict:
        inicio = max(0, round(e["t"]))
        fim = min(fim_s, round(fins.get((e["gx"], e["gy"], e["nome"]), fim_s)))
        return {"t": inicio, "ate": max(inicio, fim), "x": round(_norm(e["gx"]), 3), "y": round(_norm(e["gy"]), 3),
                "lado": lado(e["time"]), "tipo": e["nome"]}
    return [ward(e) for e in eventos if e["tipo"] == "ward" and e["t"] <= fim_s]


def _morte(evento: dict, slot_do_heroi: dict[str, int], times: dict[int, int], pos: dict) -> dict | None:
    slot = slot_do_heroi.get(evento["alvo"])
    ponto = pos.get((slot, int(evento["t"])))
    if slot is None or ponto is None:
        return None
    return {"t": round(evento["t"]), "x": round(ponto[0], 3), "y": round(ponto[1], 3),
            "heroi": evento["alvo"], "lado": lado(times[slot])}


def _mortes(eventos: list[dict], meta: dict, pos: dict, fim_s: int) -> list[dict]:
    slot_do_heroi = {j["heroi"]: j["slot"] for j in meta["jogadores"]}
    times = {j["slot"]: j["time"] for j in meta["jogadores"]}
    candidatas = (e for e in eventos
                  if e["tipo"] == "morte_heroi" and not e.get("ilusao") and 0 <= e["t"] <= fim_s)
    return [m for e in candidatas if (m := _morte(e, slot_do_heroi, times, pos))]


def replay(pasta: Path) -> dict:
    meta, linhas, eventos = ler_replay(pasta)
    xy, fim = reduzir(linhas)
    return {
        "match_id": str(meta["match_id"]), "passo_s": PASSO_S, "fim_s": fim, "focos": _focos(pasta, meta["match_id"]),
        "herois": [{"slot": j["slot"], "heroi": j["heroi"], "lado": lado(j["time"]),
                    "jogador": _nome_publico(j.get("nome")), "xy": xy.get(j["slot"], [])}
                   for j in sorted(meta["jogadores"], key=lambda j: j["slot"])],
        "wards": _wards(eventos, fim), "mortes": _mortes(eventos, meta, posicoes(linhas), fim),
    }


def indice(exportados: list[dict]) -> list[dict]:
    por_partida = {str(j["match_id"]): j for j in jogadores.jogadores_de_replay()}
    def resumo(r: dict) -> dict:
        origem = por_partida.get(r["match_id"], {})
        herois = {h["slot"]: h for h in r["herois"]}
        return {"match_id": r["match_id"], "fim_s": r["fim_s"], "data": origem.get("data"), "liga": origem.get("liga"),
                "focos": [{"slot": s, "heroi": herois[s]["heroi"], "jogador": herois[s]["jogador"]} for s in r["focos"]]}
    return [resumo(r) for r in exportados]
```

```json
// export/schemas/trajetoria.schema.json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "type": "object",
  "required": ["match_id", "passo_s", "fim_s", "focos", "herois", "wards", "mortes"],
  "properties": {
    "match_id": {"type": "string", "pattern": "^\\d+$"},
    "passo_s": {"type": "integer", "minimum": 1},
    "fim_s": {"type": "integer", "minimum": 0, "maximum": 1800},
    "focos": {"type": "array", "items": {"type": "integer"}},
    "herois": {"type": "array", "items": {"type": "object", "required": ["slot", "heroi", "lado", "jogador", "xy"],
      "properties": {"lado": {"enum": ["radiant", "dire"]}, "jogador": {"type": ["string", "null"]},
        "xy": {"type": "array", "items": {"type": "integer", "minimum": -1, "maximum": 1000}}}}},
    "wards": {"type": "array", "items": {"type": "object", "required": ["t", "ate", "x", "y", "lado", "tipo"]}},
    "mortes": {"type": "array", "items": {"type": "object", "required": ["t", "x", "y", "heroi", "lado"]}}
  }
}
```

```json
// export/schemas/replays.schema.json
{"$schema": "https://json-schema.org/draft/2020-12/schema", "type": "array", "minItems": 1,
 "items": {"type": "object", "required": ["match_id", "fim_s", "data", "liga", "focos"],
   "properties": {"data": {"type": ["string", "null"]}, "liga": {"type": ["string", "null"]}}}}
```

Em `__main__.py`:

```python
    replays = [trajetorias.replay(p) for p in sorted(fontes.REPLAYS.iterdir()) if p.is_dir()]
    _gravar_colecao("trajetorias", "trajetoria", replays, chave="match_id")
    pacotes["replays"] = trajetorias.indice(replays)
```

- [ ] **Step 4: Rodar e ver passar**: `python -m pytest tests/test_trajetorias.py -q` → 5 passed.

- [ ] **Step 5: Conferência de fonte**

Abra `dota-imortal/work/minuto/replays/9027486175/checagem_trajetoria.png` e desenhe a trajetória do slot 0 exportada (minutos 0 a 10) sobre `mapa_2048.jpg` num script temporário (matplotlib, fora do repositório). As duas formas devem coincidir. Confira também 3 mortes contra `eventos.jsonl` (minuto e herói). Anote no ledger.

- [ ] **Step 6: Commit**: `git add export && git commit -m "feat: export reduced replay trajectories with wards and deaths"`

---

### Task 5: Roshan nos replays e conteúdo de solo de Roshan por herói

**Files:**
- Create: `export/dota_export/roshan.py`, `export/schemas/roshan_replays.schema.json`, `export/tests/test_roshan.py`, `content/roshan_solo/*.md`
- Modify: `export/dota_export/conteudo.py`, `export/tests/test_conteudo.py`, `export/dota_export/__main__.py`

**Interfaces:**
- Consumes: `trajetorias.ler_replay`, `trajetorias.posicoes`, `trajetorias.lado`, `conteudo.carregar`
- Produces: `conteudo.carregar` passa a devolver também `extras: dict` (toda chave do frontmatter fora de `id, titulo, patch, fontes, links`); `roshan.aliados_perto(matador, aliados, raio=RAIO_NORM) -> int`; `roshan.kills(pasta) -> list[dict]`; `roshan.todas() -> list[dict]` com `{match_id, minuto, heroi, lado, aliados_perto|null, solo}`; arquivos `roshan_replays.json` e `roshan_solo.json`.
- Frontmatter de `content/roshan_solo/<id>.md`: `id` (nome do herói em minúsculas com `_`, como no jogo: `ursa`, `huskar`, `morphling`), `titulo`, `heroi` (nome no jogo), `patch: 7.41`, `origem` (`recomendado` ou `replay`), `replay` (match_id, só com `origem: replay`), `nivel` (inteiro), `minuto` (`m:ss`), `itens` (lista), `fontes` (lista). Corpo: `## Básico` (passo a passo numerado: o que comprar, quando ir, como atacar, o que fazer com o Aegis) e `## Avançado` (quando não fazer, risco, contra quais heróis não dá).

- [ ] **Step 1: Testes que falham**

```python
# export/tests/test_roshan.py
import re
from pathlib import Path

import pytest

from dota_export import conteudo, roshan, validar

SOLO = Path(__file__).resolve().parents[2] / "content" / "roshan_solo"


@pytest.mark.parametrize(("aliados", "esperado"), [
    ([], 0),
    ([(0.5, 0.5)], 1),
    ([(0.5, 0.5), (0.9, 0.9)], 1),
])
def test_conta_aliados_dentro_do_raio(aliados, esperado):
    assert roshan.aliados_perto((0.5, 0.55), aliados) == esperado


@pytest.fixture(scope="module")
def kills():
    return roshan.todas()


def test_mortes_de_roshan_dos_replays(kills):
    validar.validar("roshan_replays", kills)
    assert len(kills) >= 40
    assert all(k["solo"] == (k["aliados_perto"] == 0) for k in kills)


def test_solo_tem_os_herois_da_spec_e_mais_tres():
    ids = {c["id"] for c in conteudo.carregar(SOLO)}
    assert {"ursa", "huskar", "morphling"} <= ids
    assert len(ids) >= 6


def test_cada_solo_tem_origem_nivel_minuto_itens_e_fonte(kills):
    solos_vistos = {k["match_id"] for k in kills if k["solo"]}
    for item in conteudo.carregar(SOLO):
        extras = item["extras"]
        assert extras["origem"] in {"recomendado", "replay"}, item["id"]
        assert extras["nivel"].isdigit(), item["id"]
        assert re.fullmatch(r"\d{1,2}:\d{2}", extras["minuto"]), item["id"]
        assert extras["itens"] and item["fontes"] and item["patch"] == "7.41", item["id"]
        if extras["origem"] == "replay":
            assert extras["replay"] in solos_vistos, item["id"]
```

Acrescente em `export/tests/test_conteudo.py`:

```python
def test_extras_guardam_chaves_fora_do_padrao(tmp_path):
    (tmp_path / "x.md").write_text("---\nid: x\ntitulo: X\norigem: replay\nitens:\n- BKB\n---\n## Básico\nTexto.\n", encoding="utf-8")
    item = conteudo.carregar(tmp_path)[0]
    assert item["extras"] == {"origem": "replay", "itens": ["BKB"]}
```

- [ ] **Step 2: Rodar e ver falhar**: FAIL.

- [ ] **Step 3: Implementação**

Em `conteudo.py`, troque o `append` de `carregar` por:

```python
PADRAO = frozenset({"id", "titulo", "patch", "fontes", "links"})
```

```python
        itens.append({"id": meta.get("id", arq.stem), "titulo": meta["titulo"], "patch": meta.get("patch", "7.41"),
                      "fontes": meta.get("fontes", []), "secoes": _secoes(corpo), "links": meta.get("links", []),
                      "extras": {k: v for k, v in meta.items() if k not in PADRAO}})
```

```python
# export/dota_export/roshan.py
"""Mortes de Roshan nos replays lidos e quantos aliados do matador estavam perto naquele segundo."""
import math

from . import fontes, trajetorias

UNIDADES_POR_NORM = 18176
RAIO_NORM = 1500 / UNIDADES_POR_NORM  # 1.500 unidades: o raio de luta usado nos padrões dos replays


def aliados_perto(matador: tuple[float, float], aliados: list[tuple[float, float]], raio: float = RAIO_NORM) -> int:
    return sum(1 for a in aliados if math.dist(matador, a) <= raio)


def _aliados_vivos(pos: dict, times: dict[int, int], matador: int, t: int) -> list[tuple[float, float]]:
    companheiros = (s for s, time in times.items() if time == times[matador] and s != matador)
    return [(p[0], p[1]) for s in companheiros if (p := pos.get((s, t))) and p[2]]


def _kill(match_id: int, evento: dict, pos: dict, times: dict[int, int]) -> dict:
    t, slot = int(evento["t"]), evento["slot"]
    matador = pos.get((slot, t))
    perto = aliados_perto(matador[:2], _aliados_vivos(pos, times, slot, t)) if matador else None
    return {"match_id": str(match_id), "minuto": round(evento["t"] / 60, 1), "heroi": evento["heroi"],
            "lado": trajetorias.lado(times[slot]), "aliados_perto": perto, "solo": perto == 0}


def kills(pasta) -> list[dict]:
    meta, linhas, eventos = trajetorias.ler_replay(pasta)
    pos = trajetorias.posicoes(linhas)
    times = {j["slot"]: j["time"] for j in meta["jogadores"]}
    return [_kill(meta["match_id"], e, pos, times) for e in eventos if e["tipo"] == "roshan" and e.get("slot") in times]


def todas() -> list[dict]:
    return [k for pasta in sorted(fontes.REPLAYS.iterdir()) if pasta.is_dir() for k in kills(pasta)]
```

```json
// export/schemas/roshan_replays.schema.json
{"$schema": "https://json-schema.org/draft/2020-12/schema", "type": "array",
 "items": {"type": "object", "required": ["match_id", "minuto", "heroi", "lado", "aliados_perto", "solo"],
   "properties": {"aliados_perto": {"type": ["integer", "null"]}, "solo": {"type": "boolean"}, "lado": {"enum": ["radiant", "dire"]}}}}
```

Em `__main__.py`: `pacotes["roshan_replays"] = roshan.todas()` e `pacotes["roshan_solo"] = conteudo.carregar(RAIZ / "content" / "roshan_solo")`, com `schema["roshan_solo"] = "conteudo"`.

Conteúdo (`content/roshan_solo/`): um arquivo por herói. Obrigatórios: `ursa.md`, `huskar.md`, `morphling.md`. Candidatos a conferir, nesta ordem, até ter pelo menos 6 arquivos: Lifestealer, Troll Warlord, Templar Assassin, Lone Druid, Chaos Knight, Lycan, Faceless Void, Alchemist, Monkey King, Slark, Medusa, Terrorblade. Roteiro de pesquisa de cada herói:

1. Números do Roshan no 7.41 (vida, armadura, dano, resistência mágica por minuto de jogo): Liquipedia "Roshan" e as notas do 7.41 a 7.41f (`dota-imortal/work/map_features_corrigido.json`, `regras.roshan`, já traz o fosso por dia e noite).
2. O que faz o herói solar (habilidade e itens, valores no 7.41): página do herói na Liquipedia e `dota-imortal/data/opendota/items.json` para custo dos itens.
3. Nível e minuto: guia publicado (Liquipedia, Dota2ProTracker, guia do herói em `dota-imortal/work/hero_<id>_corrigido.json` quando o herói é do pool) ou replay. Um herói que aparece com `solo: true` em `roshan_replays.json` vira `origem: replay` com o `match_id`; os outros ficam `origem: recomendado` e a fonte do guia.
4. Herói sem fonte que confirme que sola no 7.41: não entra. Registre no ledger "candidato X descartado: sem fonte".

- [ ] **Step 4: Rodar e ver passar**: `python -m pytest -q` → passam.

- [ ] **Step 5: Conferência de fonte**

Para cada arquivo de `content/roshan_solo/`, abra cada URL ou arquivo listado em `fontes` e confira nível, minuto e itens. Para os de `origem: replay`, confira em `eventos.jsonl` do replay que o evento `roshan` existe no minuto escrito e que o herói é o matador. Anote no ledger "Task 5: N heróis conferidos, M descartados".

- [ ] **Step 6: Commit**: `git add export content && git commit -m "feat: add roshan kills from replays and solo roshan content"`

---

### Task 6: Glossário completo (150 a 250 termos) com links checados

**Files:**
- Create: `content/glossario/<termo>.md` (os da lista abaixo que ainda não existem), `export/tests/test_glossario.py`

**Interfaces:**
- Consumes: `conteudo.carregar`, `mapa.objetos`, `rotas.carregar_rotas`, `herois.todos`, `fontes.ITENS`
- Produces: `content/glossario/` com 150 a 250 arquivos; frontmatter de cada termo: `id`, `titulo`, `patch: 7.41`, `categoria` (uma de `CATEGORIAS`), `fontes`, `links` (opcional) e, para `categoria: item`, `item: <chave do items.json>`.

- [ ] **Step 1: Teste que falha**

```python
# export/tests/test_glossario.py
import json
from pathlib import Path

import pytest

from dota_export import conteudo, fontes, herois, mapa, rotas

GLOSSARIO = Path(__file__).resolve().parents[2] / "content" / "glossario"
CATEGORIAS = {"mecanica", "lane", "farm", "mapa", "objetivo", "runa", "item", "combate", "visao",
              "economia", "papel", "estrategia", "partida", "giria", "estatistica"}


@pytest.fixture(scope="module")
def termos():
    return conteudo.carregar(GLOSSARIO)


def test_tem_entre_150_e_250_termos_com_id_unico(termos):
    ids = [t["id"] for t in termos]
    assert 150 <= len(ids) <= 250
    assert len(ids) == len(set(ids))


def test_todo_termo_tem_categoria_fonte_e_patch(termos):
    for t in termos:
        assert t["extras"].get("categoria") in CATEGORIAS, t["id"]
        assert t["fontes"] and t["patch"] == "7.41", t["id"]


def test_item_aponta_para_item_que_existe(termos):
    itens = json.loads(fontes.ITENS.read_text(encoding="utf-8"))
    for t in (t for t in termos if t["extras"]["categoria"] == "item"):
        assert t["extras"].get("item") in itens, t["id"]


def test_links_apontam_para_algo_que_existe(termos):
    objetos = mapa.objetos()
    validos = ({t["id"] for t in termos} | {o["id"] for o in objetos} | {o["tipo"] for o in objetos}
               | {f["id"] for f in herois.todos()} | {r["id"] for r in rotas.carregar_rotas()})
    quebrados = [(t["id"], link) for t in termos for link in t["links"] if link not in validos]
    assert quebrados == []
```

- [ ] **Step 2: Rodar e ver falhar**: FAIL (menos de 150 termos e termos da 1A sem `categoria`).

- [ ] **Step 3: Conteúdo**

Primeiro, acrescente `categoria` aos termos que a 1A criou. Depois escreva os termos da lista, um arquivo cada, só `## Básico` (2 a 5 frases curtas: o que é, número do 7.41 quando houver, para que serve na partida). Pule o id que já existe. A lista tem 176 ids; com os cerca de 45 da 1A o total fica perto de 220, dentro do limite. Se a conferência derrubar termos (item que não existe mais, mecânica removida), o total ainda precisa ficar em 150 ou mais.

- `lane`: creep-block, aggro, equilibrio-da-lane, congelar-a-lane, cortar-a-wave, harass, trade, zonear, double-pull, creep-de-cerco, creep-ranged, creep-melee, lane-ganha, lane-perdida, tri-lane, dual-lane
- `farm`: jungle, triangulo, stack-duplo, ancient-stack, upgrade-dos-neutros, ciclo-de-farm, rota-de-farm, limpeza-de-camp, invasao, empurrar-a-wave
- `mapa`: rio, rampa, penhasco, cortar-arvore, correnteza, dia-e-noite, buzina, fosso-do-roshan, loja-secreta, minimapa
- `objetivo`: torre-t1, torre-t2, torre-t3, torre-t4, barracks-melee, barracks-ranged, mega-creeps, ancient, glyph, protecao-de-backdoor, deny-de-torre
- `runa`: runa-de-poder, runa-bounty, runa-de-sabedoria, runa-de-agua, runa-de-dano-duplo, runa-de-haste, runa-de-ilusao, runa-de-invisibilidade, runa-de-regeneracao, runa-arcana, runa-de-escudo
- `mecanica`: animacao-de-ataque, cancelar-animacao, turn-rate, velocidade-de-ataque, velocidade-de-movimento, alcance-de-ataque, cooldown, cast-point, canalizar, aura, passiva, ultimate, talento, facet, atributo-primario, universal
- `combate`: iniciacao, pickoff, teamfight, burst, dps, disable, stun, silence, root, hex, slow, nuke, save, dispel, imunidade-magica, atravessa-bkb, roubo-de-vida, evasao, critico, bash, cleave, armadura, resistencia-magica, resistencia-a-status, vida-efetiva, kite, juke, dive
- `visao`: visao, true-sight, ward-ofensivo, ward-defensivo, dust, gem, smoke-gank, visao-de-terreno-alto
- `economia`: ouro-confiavel, ouro-nao-confiavel, perda-de-ouro-na-morte, bounty-de-kill, streak, comeback, xp, itens-neutros, tier-de-neutro
- `item` (com `item:` no frontmatter): blink-dagger (blink), power-treads, phase-boots, battle-fury (bfury), maelstrom, mjollnir, manta-style (manta), butterfly, satanic, daedalus (greater_crit), monkey-king-bar, silver-edge, shadow-blade (invis_sword), abyssal-blade, eye-of-skadi (skadi), desolator, radiance, hand-of-midas, mask-of-madness, linkens-sphere (sphere), force-staff, hurricane-pike, glimmer-cape, euls-scepter (cyclone), lotus-orb, pipe-of-insight (pipe), guardian-greaves, assault-cuirass (assault), heart-of-tarrasque (heart), scythe-of-vyse (sheepstick), orchid-malevolence (orchid), bloodthorn, nullifier, diffusal-blade, harpoon, disperser, khanda (angels_demise), parasma (devastator), magic-wand, bottle, aghanims-scepter (ultimate_scepter), aghanims-shard, tango, healing-salve (flask), wind-waker, gleipnir (gungir), yasha, sange-and-yasha, null-talisman, wraith-band, echo-sabre, mage-slayer, moon-shard, refresher-orb (refresher), eternal-shroud, aeon-disk
- `papel`: carry, hard-carry, suporte, hard-support, roamer, core, flex
- `estrategia`: deathball, 4-protect-1, turtle, push-strat, snowball, criar-espaco, tempo, controle-de-mapa, rat, defesa-de-high-ground, pegar-high-ground, trocar-objetivos, bait, early-game, mid-game, late-game
- `partida`: draft, counter-pick, first-pick, last-pick, ban, meta, patch, mmr, medalha, ranked, party, solo-queue, all-pick, captains-mode, turbo, abandono, low-priority, smurf
- `giria`: gg, feed, throw, tilt, cs, first-blood, rampage
- `estatistica`: kda, participacao-em-abates, lh-aos-10, net-worth-aos-10, eficiencia-de-lane, winrate, pontos-percentuais, mediana, quartis, amostra, intervalo-de-confianca, elo-esperado, apm

O nome entre parênteses é a chave do `items.json` quando ela difere do id. Links: ligue o termo a um objetivo (`roshan`, `tormentor`, `outpost`...), a um herói do app (`medusa`), a uma rota (`MA-R-01`) ou a outro termo, só quando o link ajuda a entender; o teste derruba link quebrado.

- [ ] **Step 4: Rodar e ver passar**: `python -m pytest tests/test_glossario.py -q` → 4 passed.

- [ ] **Step 5: Conferência de fonte**

Sorteie 30 termos (`python -c "import random,pathlib; print(random.sample(sorted(p.stem for p in pathlib.Path('content/glossario').glob('*.md')), 30))"`) e confira cada número citado contra a fonte do frontmatter (Liquipedia, notas do 7.41, `items.json` para custo e atributos). Termo com número errado: corrija e sorteie mais 10. Anote no ledger quantos foram corrigidos.

- [ ] **Step 6: Commit**: `git add content export && git commit -m "feat: complete glossary with categories and checked links"`

---

### Task 7: Relevo do terreno (high ground, rio e rampas)

**Files:**
- Create: `export/dota_export/relevo.py`, `export/schemas/relevo.schema.json`, `export/tests/test_relevo.py`
- Modify: `export/dota_export/__main__.py`

**Interfaces:**
- Consumes: `fontes.gps()` (`basemap.features()`, `basemap.feature_index()`)
- Produces: `relevo.poligono_da_base(lado) -> list[tuple[float, float]]`; `relevo.relevo(tamanho=512) -> PIL.Image` (tons de cinza; pixel (i, j) = coordenada (i/tamanho, 1 − j/tamanho), mesma convenção de `mapa.textura_alinhada`); `relevo.grade(img, n=64) -> {tamanho, alturas}` com `alturas[j*n + i]` = altura de 0 a 1 em x = (i + 0,5)/n, y = 1 − (j + 0,5)/n; arquivos `relevo_512.png` e `relevo.json`.
- Limite conhecido: relevo aproximado. Só as bases (high ground até as três rampas de cada lado) sobem, o rio e os riachos descem e o resto fica no meio. Os penhascos da selva ficam planos. A troca por um relevo real fica atrás da `MapView`, sem mudar as telas.

- [ ] **Step 1: Testes que falham**

```python
# export/tests/test_relevo.py
import pytest

from dota_export import relevo, validar


def _altura(img, x, y):
    return img.getpixel((min(img.width - 1, int(x * img.width)), min(img.height - 1, int((1 - y) * img.height)))) / 255


@pytest.fixture(scope="module")
def img():
    return relevo.relevo(256)


def test_poligono_da_base_radiant_vai_do_canto_ate_as_rampas():
    pontos = relevo.poligono_da_base("radiant")
    assert pontos[0] == (0.0, 0.0)
    assert (0.268, 0.303) in pontos


def test_base_alta_rio_baixo_selva_no_meio(img):
    assert _altura(img, 0.09, 0.124) > 0.9
    assert _altura(img, 0.92, 0.90) > 0.9
    assert _altura(img, 0.476, 0.505) < 0.3
    assert 0.4 < _altura(img, 0.40, 0.30) < 0.6


def test_rampa_fica_entre_o_chao_e_a_base(img):
    assert 0.55 < _altura(img, 0.268, 0.303) < 0.95


def test_grade_tem_n_ao_quadrado_alturas():
    g = relevo.grade(relevo.relevo(128), 16)
    validar.validar("relevo", g)
    assert len(g["alturas"]) == 256
```

- [ ] **Step 2: Rodar e ver falhar**: FAIL.

- [ ] **Step 3: Implementação**

```python
# export/dota_export/relevo.py
"""Relevo aproximado do mapa a partir das feições do basemap: bases altas, rio baixo, rampas suaves."""
from PIL import Image, ImageDraw, ImageFilter

from . import fontes

TAMANHO = 512
TOM = {"base": 255, "chao": 128, "rio": 40}
RAMPAS = {"radiant": ("ramp_rad_bot", "ramp_rad_mid", "ramp_rad_top"),
          "dire": ("ramp_dire_top", "ramp_dire_mid", "ramp_dire_bot")}
CANTO = {"radiant": (0.0, 0.0), "dire": (1.0, 1.0)}
RAIO_RAMPA = 0.035


def _ponto(id_: str) -> tuple[float, float]:
    basemap, _ = fontes.gps()
    f = basemap.feature_index()[id_]
    return (f["x"], f["y"])


def _px(ponto: tuple[float, float], tamanho: int) -> tuple[float, float]:
    return (ponto[0] * tamanho, (1 - ponto[1]) * tamanho)


def poligono_da_base(lado: str) -> list[tuple[float, float]]:
    rampas = [_ponto(i) for i in RAMPAS[lado]]
    cx, cy = CANTO[lado]
    return [(cx, cy), (rampas[0][0], cy), *rampas, (cx, rampas[-1][1])]


def _mascara_das_rampas(tamanho: int) -> Image.Image:
    mascara = Image.new("L", (tamanho, tamanho), 0)
    desenho, r = ImageDraw.Draw(mascara), RAIO_RAMPA * tamanho
    for x, y in (_px(_ponto(i), tamanho) for ids in RAMPAS.values() for i in ids):
        desenho.ellipse([x - r, y - r, x + r, y + r], fill=255)
    return mascara.filter(ImageFilter.GaussianBlur(r / 2))


def relevo(tamanho: int = TAMANHO) -> Image.Image:
    basemap, _ = fontes.gps()
    img = Image.new("L", (tamanho, tamanho), TOM["chao"])
    desenho = ImageDraw.Draw(img)
    for rio in basemap.features()["river"]:
        desenho.line([_px(p, tamanho) for p in rio["points"]], fill=TOM["rio"],
                     width=max(1, round(rio["largura_n"] * tamanho)), joint="curve")
    for lado in RAMPAS:
        desenho.polygon([_px(p, tamanho) for p in poligono_da_base(lado)], fill=TOM["base"])
    penhasco = img.filter(ImageFilter.GaussianBlur(tamanho / 256))
    rampa = img.filter(ImageFilter.GaussianBlur(tamanho / 40))
    return Image.composite(rampa, penhasco, _mascara_das_rampas(tamanho))


def grade(img: Image.Image, n: int = 64) -> dict:
    pequeno = img.resize((n, n), Image.Resampling.BILINEAR)
    return {"tamanho": n, "alturas": [round(v / 255, 2) for v in pequeno.getdata()]}
```

```json
// export/schemas/relevo.schema.json
{"$schema": "https://json-schema.org/draft/2020-12/schema", "type": "object", "required": ["tamanho", "alturas"],
 "properties": {"tamanho": {"type": "integer", "minimum": 2},
   "alturas": {"type": "array", "items": {"type": "number", "minimum": 0, "maximum": 1}}}}
```

Em `__main__.py`, junto das texturas:

```python
    altura = relevo.relevo()
    altura.save(DESTINO / "relevo_512.png")
    pacotes["relevo"] = relevo.grade(altura)
```

- [ ] **Step 4: Rodar e ver passar**: `python -m pytest tests/test_relevo.py -q` → 4 passed. Abra `relevo_512.png` ao lado de `mapa_2048.jpg`: as bases claras nos cantos, o rio escuro na diagonal, a passagem suave nas 6 rampas.

- [ ] **Step 5: Commit**: `git add export && git commit -m "feat: export approximate terrain heightmap"`

---

### Task 8: Dados novos no app e busca com heróis, jogadores e times

**Files:**
- Modify: `app/src/data/schemas.ts`, `app/src/search/index.ts`, `app/src/search/index.test.ts`, `app/src/search/SearchBox.tsx`
- Create: `app/src/data/schemas.test.ts`

**Interfaces:**
- Consumes: `loadJson`, `useData`, `normalizar` (de `routes/filtros.ts`)
- Produces: schemas zod e tipos `HeroiResumo`, `Heroi`, `Fase`, `Spike`, `Painel`, `GraficoDados`, `JogadorResumo`, `Time`, `Trajetoria`, `ReplayResumo`, `Relevo`, `RoshanReplay`; `conteudoItemSchema` com `extras`; `Achado.tipo` passa a aceitar `"heroi" | "jogador" | "time"`; `construirIndice({ rotas, objetivos, termos, herois?, jogadores?, times? })` (os três novos com padrão `[]`, então a chamada da 1A continua valendo); `dadosOuVazio(estado)`.

- [ ] **Step 1: Testes que falham**

```ts
// app/src/data/schemas.test.ts
import { painelSchema, relevoSchema, trajetoriaSchema } from "./schemas";

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
```

Acrescente em `app/src/search/index.test.ts`:

```ts
it("acha herói, jogador e time", () => {
  const b = construirIndice({
    rotas: [], objetivos: [], termos: [],
    herois: [{ id: "medusa", nome: "Medusa", hero_id: 94, patch: "7.41f", resumo: "Carry de safelane.", tem_por_minuto: false }],
    jogadores: [{ id: "skiter", nome: "skiter", tipo: "pro", time: null, amostra: "1 replay" }],
    times: [{ id: "team-spirit", nome: "Team Spirit", jogadores: ["yatoro"], fonte: "" }],
  });
  expect(buscar(b, "medu")[0]).toMatchObject({ tipo: "heroi", link: "/herois/medusa" });
  expect(buscar(b, "skit")[0]).toMatchObject({ tipo: "jogador", link: "/jogadores/skiter" });
  expect(buscar(b, "spirit")[0]).toMatchObject({ tipo: "time", link: "/times/team-spirit" });
});
```

- [ ] **Step 2: Rodar e ver falhar**: `cd app && npm test` → FAIL.

- [ ] **Step 3: Implementação**

Em `app/src/data/schemas.ts`, substitua a definição de `conteudoItemSchema` da 1A pela que está no início do bloco abaixo (ganha `extras`) e acrescente o resto ao fim do arquivo:

```ts
const textos = z.array(z.string());
const caminhos = z.array(z.array(z.tuple([z.number(), z.number()])));

export const conteudoItemSchema = z.object({
  id: z.string(), titulo: z.string(), patch: z.string(), fontes: z.array(z.string()),
  secoes: z.object({ basico: z.string(), avancado: z.string().nullable() }), links: z.array(z.string()).default([]),
  extras: z.record(z.string(), z.union([z.string(), z.array(z.string())])).default({}),
});

export const faseSchema = z.object({
  de: z.number(), ate: z.number(), janela: z.string(), objetivo: z.string(), passos: z.array(passoSchema), caminhos,
});
export const spikeSchema = z.object({ minuto: z.number().nullable(), faixa: z.string(), marco: z.string(), o_que_fazer: z.string() });
const porMinutoSchema = z.object({
  minuto: z.number(), nivel: z.string(), habilidade: z.string(), item: z.string(), proximo_spike: z.string(), objetivo_farm: z.string(),
});
const linhaProSchema = z.object({ jogador: z.string(), jogos: z.number(), vitorias: z.number().nullable(), lh10: z.number().nullable() });

export const heroiResumoSchema = z.object({
  id: z.string(), nome: z.string(), hero_id: z.number(), patch: z.string(), resumo: z.string(), tem_por_minuto: z.boolean(),
});
export const heroisSchema = z.array(heroiResumoSchema);
export const heroiSchema = heroiResumoSchema.omit({ tem_por_minuto: true }).extend({
  confianca: z.string(),
  guia: z.object({
    bom_quando: textos, evitar_quando: textos, momento_do_draft: z.string(),
    lane: z.object({ objetivo: z.string(), itens_iniciais: textos, dicas: textos }),
    skill_build: z.array(z.object({ nivel: z.union([z.number(), z.string()]), skill: z.string() })),
    itens_core: z.array(z.object({ nome: z.string(), minuto_alvo: z.number().nullable(), base: z.string() })),
    itens_situacionais: z.array(z.object({ nome: z.string(), quando: z.string() })),
    condicao_para_farmar: z.object({ nivel: z.union([z.number(), z.string()]), minuto_tipico: z.number().nullable(), explicacao: z.string() }),
    depois_dos_20: textos, erros_comuns: textos,
  }),
  power_spikes: z.array(spikeSchema),
  por_minuto: z.array(porMinutoSchema).nullable(),
  rotas: z.object({ radiant: z.array(faseSchema), dire: z.array(faseSchema) }),
  rotas_relacionadas: z.array(z.string()),
  pros: z.object({ linhas: z.array(linhaProSchema), leitura: z.string().nullable() }),
  fontes: textos,
});

export const graficoSchema = z.object({
  id: z.string(), titulo: z.string(), tipo: z.enum(["linha", "barra"]),
  x: z.object({ rotulo: z.string(), valores: z.array(z.union([z.string(), z.number()])).min(1) }),
  series: z.array(z.object({ nome: z.string(), valores: z.array(z.number().nullable()) })).min(1),
  unidade: z.string(), fonte: z.string(), nota: z.string().nullable(),
}).refine((g) => g.series.every((s) => s.valores.length === g.x.valores.length), "série com tamanho diferente do eixo");

const tipoJogador = z.enum(["amigo", "pro"]);
export const painelSchema = z.object({
  id: z.string(), nome: z.string(), tipo: tipoJogador, time: z.string().nullable(), amostra: z.string(), fontes: textos,
  destaques: z.array(z.object({ rotulo: z.string(), valor: z.number(), unidade: z.string(), fonte: z.string() })),
  graficos: z.array(graficoSchema),
  achados: z.array(z.object({ texto: z.string(), fonte: z.string() })),
  replays: z.array(z.string()),
});
export const jogadorResumoSchema = z.object({ id: z.string(), nome: z.string(), tipo: tipoJogador, time: z.string().nullable(), amostra: z.string() });
export const jogadoresSchema = z.array(jogadorResumoSchema);
export const timeSchema = z.object({ id: z.string(), nome: z.string(), jogadores: z.array(z.string()), fonte: z.string() });
export const timesSchema = z.array(timeSchema);

const lado = z.enum(["radiant", "dire"]);
export const trajetoriaSchema = z.object({
  match_id: z.string(), passo_s: z.number().int().positive(), fim_s: z.number().int().nonnegative(), focos: z.array(z.number()),
  herois: z.array(z.object({
    slot: z.number(), heroi: z.string(), lado, jogador: z.string().nullable(),
    xy: z.array(z.number().int()).refine((xy) => xy.length % 2 === 0, "xy precisa de pares"),
  })),
  wards: z.array(z.object({ t: z.number(), ate: z.number(), x: z.number(), y: z.number(), lado, tipo: z.string() })),
  mortes: z.array(z.object({ t: z.number(), x: z.number(), y: z.number(), heroi: z.string(), lado })),
});
export const replaysSchema = z.array(z.object({
  match_id: z.string(), fim_s: z.number(), data: z.string().nullable(), liga: z.string().nullable(),
  focos: z.array(z.object({ slot: z.number(), heroi: z.string(), jogador: z.string().nullable() })),
}));

export const relevoSchema = z.object({ tamanho: z.number().int().min(2), alturas: z.array(z.number()) })
  .refine((r) => r.alturas.length === r.tamanho ** 2, "alturas não batem com o tamanho");

export const roshanReplaysSchema = z.array(z.object({
  match_id: z.string(), minuto: z.number(), heroi: z.string(), lado, aliados_perto: z.number().nullable(), solo: z.boolean(),
}));

export type Fase = z.infer<typeof faseSchema>;
export type Spike = z.infer<typeof spikeSchema>;
export type HeroiResumo = z.infer<typeof heroiResumoSchema>;
export type Heroi = z.infer<typeof heroiSchema>;
export type GraficoDados = z.infer<typeof graficoSchema>;
export type Painel = z.infer<typeof painelSchema>;
export type JogadorResumo = z.infer<typeof jogadorResumoSchema>;
export type Time = z.infer<typeof timeSchema>;
export type Trajetoria = z.infer<typeof trajetoriaSchema>;
export type ReplayResumo = z.infer<typeof replaysSchema>[number];
export type Relevo = z.infer<typeof relevoSchema>;
export type RoshanReplay = z.infer<typeof roshanReplaysSchema>[number];
```

Em `app/src/search/index.ts`, troque o tipo `Achado` e `construirIndice`:

```ts
export type Achado = { tipo: "rota" | "objetivo" | "termo" | "heroi" | "jogador" | "time"; id: string; titulo: string; link: string };

type Fontes = {
  rotas: Rota[]; objetivos: Objetivo[]; termos: ConteudoItem[];
  herois?: HeroiResumo[]; jogadores?: JogadorResumo[]; times?: Time[];
};

export function construirIndice({ rotas, objetivos, termos, herois = [], jogadores = [], times = [] }: Fontes): Busca {
  const busca: Busca = new MiniSearch<Doc>({
    idField: "chave", fields: ["titulo", "texto"], storeFields: ["tipo", "id", "titulo", "link"],
    processTerm: normalizar, searchOptions: { prefix: true, boost: { titulo: 3 } },
  });
  busca.addAll([
    ...rotas.map((r) => ({ chave: `rota:${r.id}`, tipo: "rota" as const, id: r.id, titulo: `${r.id} · ${r.pergunta}`, texto: r.titulo, link: `/rotas/${r.id}` })),
    ...objetivos.map((o) => ({ chave: `objetivo:${o.id}`, tipo: "objetivo" as const, id: o.id, titulo: o.nome, texto: o.tipo, link: `/mapa/${o.id}` })),
    ...termos.map((t) => ({ chave: `termo:${t.id}`, tipo: "termo" as const, id: t.id, titulo: t.titulo, texto: t.secoes.basico, link: `/glossario/${t.id}` })),
    ...herois.map((h) => ({ chave: `heroi:${h.id}`, tipo: "heroi" as const, id: h.id, titulo: h.nome, texto: h.resumo, link: `/herois/${h.id}` })),
    ...jogadores.map((j) => ({ chave: `jogador:${j.id}`, tipo: "jogador" as const, id: j.id, titulo: j.nome, texto: `${j.time ?? ""} ${j.amostra}`, link: `/jogadores/${j.id}` })),
    ...times.map((t) => ({ chave: `time:${t.id}`, tipo: "time" as const, id: t.id, titulo: t.nome, texto: t.jogadores.join(" "), link: `/times/${t.id}` })),
  ]);
  return busca;
}
```

(Importe `HeroiResumo`, `JogadorResumo`, `Time` de `../data/schemas`. Se a 1A ainda declarar `semAcento` local, troque por `normalizar`, como decidido no Ruling 3 do ledger da 1A.)

Em `app/src/data/useData.tsx`, acrescente o auxiliar que a busca usa para seguir funcionando quando um arquivo falta:

```ts
export function dadosOuVazio<T>(estado: EstadoDados<T[]>): T[] {
  return estado.estado === "ok" ? estado.dados : [];
}
```

Em `SearchBox.tsx`, carregue os três arquivos novos com `useData("/data/herois.json", heroisSchema)`, `useData("/data/jogadores.json", jogadoresSchema)` e `useData("/data/times.json", timesSchema)` e passe `herois: dadosOuVazio(...)`, `jogadores: dadosOuVazio(...)`, `times: dadosOuVazio(...)` para `construirIndice`. Um arquivo indisponível só tira aquele tipo da busca; a busca continua. Nas etiquetas de tipo do resultado, acrescente "Herói", "Jogador" e "Time".

- [ ] **Step 4: Rodar e ver passar**: `npm test` → passam.

- [ ] **Step 5: Commit**: `git add app && git commit -m "feat: add phase 1b data schemas and extend global search"`

---

### Task 9: `MapView` com trilhas, marcas e relevo

**Files:**
- Modify: `app/src/map/coords.ts`, `app/src/map/coords.test.ts`, `app/src/map/MapView.tsx`, `app/src/map/MapFlat.tsx`, `app/src/map/Map3D.tsx`, `app/src/map/MapView.test.tsx`, `app/src/styles.css`
- Create: `app/src/map/trilhas.ts`, `app/src/map/trilhas.test.ts`

**Interfaces:**
- Consumes: `Rota`, `Objetivo`, `Trajetoria`, `Relevo`, `useData`
- Produces: `alturaEm(relevo: Relevo, ponto: Ponto): number`; `pontoEm(xy, indice): Ponto | null`; `trilhasNoTempo(replay, t, rastroS = 60): Trilha[]`; `marcasNoTempo(replay, t): Marca[]`; tipos `Tracado = Pick<Rota, "passos" | "caminhos">`, `Trilha = { id, rotulo, lado, destaque, rastro: Ponto[], atual: Ponto | null }`, `Marca = { id, x, y, tipo: "ward" | "morte", lado, rotulo }`; `MapViewProps` passa a ser `{ objetivos; rota?: Tracado | null; trilhas?: Trilha[]; marcas?: Marca[]; selecionado?; onSelecionar; forcarPlano? }`. Toda chamada da 1A continua compilando (uma `Rota` é um `Tracado`).

- [ ] **Step 1: Testes que falham**

```ts
// app/src/map/trilhas.test.ts
import type { Trajetoria } from "../data/schemas";
import { marcasNoTempo, pontoEm, trilhasNoTempo } from "./trilhas";

const replay: Trajetoria = {
  match_id: "1", passo_s: 5, fim_s: 10, focos: [0],
  herois: [{ slot: 0, heroi: "sven", lado: "radiant", jogador: "Lou", xy: [100, 200, -1, -1, 300, 400] }],
  wards: [{ t: 0, ate: 6, x: 0.5, y: 0.5, lado: "dire", tipo: "observer" }],
  mortes: [{ t: 5, x: 0.2, y: 0.3, heroi: "sven", lado: "radiant" }],
};

it("converte milésimos e trata morto como ausente", () => {
  expect(pontoEm([100, 200], 0)).toEqual([0.1, 0.2]);
  expect(pontoEm([-1, -1], 0)).toBeNull();
  expect(pontoEm([100, 200], 3)).toBeNull();
});

it("monta rastro e posição atual sem os pontos de morto", () => {
  const [trilha] = trilhasNoTempo(replay, 10, 60);
  expect(trilha).toMatchObject({ rotulo: "Lou", destaque: true, atual: [0.3, 0.4] });
  expect(trilha?.rastro).toEqual([[0.1, 0.2], [0.3, 0.4]]);
  expect(trilhasNoTempo(replay, 5)[0]?.atual).toBeNull();
});

it("mostra ward só enquanto existe e morte por 20 s", () => {
  expect(marcasNoTempo(replay, 3).map((m) => m.tipo).sort()).toEqual(["ward"]);
  expect(marcasNoTempo(replay, 7).map((m) => m.tipo)).toEqual(["morte"]);
});
```

Acrescente em `coords.test.ts`:

```ts
import { alturaEm } from "./coords";

it("altura vem da célula da grade, com y de baixo para cima", () => {
  const relevo = { tamanho: 2, alturas: [0.1, 0.2, 0.3, 0.4] };
  expect(alturaEm(relevo, [0.25, 0.75])).toBe(0.1);
  expect(alturaEm(relevo, [0.75, 0.25])).toBe(0.4);
  expect(alturaEm(relevo, [1, 0])).toBe(0.4);
});
```

Acrescente em `MapView.test.tsx`:

```tsx
it("mapa plano mostra a posição atual da trilha e a marca", () => {
  const trilha = { id: "1:0", rotulo: "Lou", lado: "radiant" as const, destaque: true, rastro: [[0.1, 0.2] as [number, number]], atual: [0.1, 0.2] as [number, number] };
  const marca = { id: "m", x: 0.2, y: 0.3, tipo: "morte" as const, lado: "radiant" as const, rotulo: "Morte de sven" };
  render(<MapView objetivos={[]} trilhas={[trilha]} marcas={[marca]} onSelecionar={() => {}} forcarPlano />);
  expect(screen.getByRole("img", { name: "Lou" })).toBeInTheDocument();
  expect(screen.getByRole("img", { name: "Morte de sven" })).toBeInTheDocument();
});
```

- [ ] **Step 2: Rodar e ver falhar**: FAIL.

- [ ] **Step 3: Implementação**

Em `coords.ts`:

```ts
import type { Relevo } from "../data/schemas";

const limitar = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

export function alturaEm(relevo: Relevo, [x, y]: Ponto): number {
  const n = relevo.tamanho;
  const i = limitar(Math.floor(x * n), 0, n - 1);
  const j = limitar(Math.floor((1 - y) * n), 0, n - 1);
  return relevo.alturas[j * n + i] ?? 0;
}
```

```ts
// app/src/map/trilhas.ts
import type { Trajetoria } from "../data/schemas";
import type { Ponto } from "./coords";

export type Lado = "radiant" | "dire";
export type Trilha = { id: string; rotulo: string; lado: Lado; destaque: boolean; rastro: Ponto[]; atual: Ponto | null };
export type Marca = { id: string; x: number; y: number; tipo: "ward" | "morte"; lado: Lado; rotulo: string };

const MORTE_VISIVEL_S = 20;
const RASTRO_PADRAO_S = 60;

export function pontoEm(xy: readonly number[], indice: number): Ponto | null {
  const x = xy[indice * 2];
  const y = xy[indice * 2 + 1];
  if (x === undefined || y === undefined || x < 0 || y < 0) return null;
  return [x / 1000, y / 1000];
}

const ehPonto = (p: Ponto | null): p is Ponto => p !== null;

export function trilhasNoTempo(replay: Trajetoria, t: number, rastroS = RASTRO_PADRAO_S): Trilha[] {
  const atual = Math.floor(Math.min(Math.max(t, 0), replay.fim_s) / replay.passo_s);
  const inicio = Math.max(0, atual - Math.floor(rastroS / replay.passo_s));
  const indices = Array.from({ length: atual - inicio + 1 }, (_, k) => inicio + k);
  return replay.herois.map((h) => ({
    id: `${replay.match_id}:${h.slot}`,
    rotulo: h.jogador ?? h.heroi,
    lado: h.lado,
    destaque: replay.focos.includes(h.slot),
    rastro: indices.map((i) => pontoEm(h.xy, i)).filter(ehPonto),
    atual: pontoEm(h.xy, atual),
  }));
}

export function marcasNoTempo(replay: Trajetoria, t: number): Marca[] {
  const wards = replay.wards
    .filter((w) => w.t <= t && t < w.ate)
    .map((w): Marca => ({ id: `ward-${w.t}-${w.x}-${w.y}`, x: w.x, y: w.y, tipo: "ward", lado: w.lado, rotulo: `${w.tipo} ${w.lado}` }));
  const mortes = replay.mortes
    .filter((m) => m.t <= t && t < m.t + MORTE_VISIVEL_S)
    .map((m): Marca => ({ id: `morte-${m.t}-${m.heroi}`, x: m.x, y: m.y, tipo: "morte", lado: m.lado, rotulo: `Morte de ${m.heroi}` }));
  return [...wards, ...mortes];
}
```

Em `MapView.tsx`, troque o tipo das props (o resto do arquivo fica igual):

```ts
import type { Objetivo, Rota } from "../data/schemas";
import type { Marca, Trilha } from "./trilhas";

export type Tracado = Pick<Rota, "passos" | "caminhos">;

export type MapViewProps = {
  objetivos: Objetivo[];
  rota?: Tracado | null;
  trilhas?: Trilha[];
  marcas?: Marca[];
  selecionado?: string | null;
  onSelecionar: (id: string) => void;
  forcarPlano?: boolean;
};
```

```tsx
// app/src/map/MapFlat.tsx
import type { MapViewProps } from "./MapView";
import { normToPercent, type Ponto } from "./coords";

const pontosSvg = (pontos: readonly Ponto[]) => pontos.map(([x, y]) => `${x},${1 - y}`).join(" ");

export function MapFlat({ objetivos, rota, trilhas = [], marcas = [], selecionado, onSelecionar }: MapViewProps) {
  return (
    <div className="mapa-plano">
      <img src="/data/mapa_2048.jpg" alt="Mapa do Dota 7.41" />
      <svg viewBox="0 0 1 1" preserveAspectRatio="none" className="mapa-plano-rota">
        {rota?.caminhos.map((c, i) => <polyline key={`rota-${i}`} points={pontosSvg(c)} />)}
        {trilhas.map((t) => (
          <polyline key={t.id} className={`trilha trilha-${t.lado}${t.destaque ? " destaque" : ""}`} points={pontosSvg(t.rastro)} />
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
      {trilhas.map((t) => t.atual && (
        <span key={t.id} role="img" aria-label={t.rotulo} title={t.rotulo}
          className={`heroi-agora heroi-${t.lado}${t.destaque ? " destaque" : ""}`} style={normToPercent(t.atual)} />
      ))}
      {marcas.map((m) => (
        <span key={m.id} role="img" aria-label={m.rotulo} title={m.rotulo}
          className={`marca marca-${m.tipo} marca-${m.lado}`} style={normToPercent([m.x, m.y])} />
      ))}
    </div>
  );
}
```

```tsx
// app/src/map/Map3D.tsx
import { Html, Line, OrbitControls } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { relevoSchema } from "../data/schemas";
import { useData } from "../data/useData";
import type { MapViewProps } from "./MapView";
import { alturaEm, normToWorld, type Ponto } from "./coords";

const TAMANHO = 100;
const ESCALA_RELEVO = 4;
const SEGMENTOS = 255;
const ALTURA: Record<string, number> = { roshan: 4, tormentor: 4, torre: 3, barracks: 3, ancient: 5, fonte: 3 };
const COR_LADO = { radiant: "#5cc26b", dire: "#e05a47", neutro: "#b48cff" } as const;
const COR_SELECIONADO = "#ffd166";

function Chao() {
  const [textura, relevo] = useLoader(TextureLoader, ["/data/mapa_4096.jpg", "/data/relevo_512.png"]);
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[TAMANHO, TAMANHO, SEGMENTOS, SEGMENTOS]} />
      <meshStandardMaterial map={textura} displacementMap={relevo} displacementScale={ESCALA_RELEVO} />
    </mesh>
  );
}

function useAltura(): (p: Ponto) => number {
  const relevo = useData("/data/relevo.json", relevoSchema);
  return (p) => (relevo.estado === "ok" ? alturaEm(relevo.dados, p) * ESCALA_RELEVO : 0);
}

export function Map3D({ objetivos, rota, trilhas = [], marcas = [], selecionado, onSelecionar }: MapViewProps) {
  const altura = useAltura();
  const noChao = (p: Ponto, acima: number): [number, number, number] => {
    const [x, , z] = normToWorld(p, TAMANHO);
    return [x, altura(p) + acima, z];
  };
  return (
    <Canvas className="mapa-3d" camera={{ position: [0, 70, 60], fov: 45 }} dpr={[1, 2]}>
      <ambientLight intensity={1.1} />
      <directionalLight position={[30, 60, 20]} intensity={0.6} />
      <Chao />
      {objetivos.map((o) => {
        const h = ALTURA[o.tipo] ?? 1.5;
        return (
          <mesh key={o.id} position={noChao([o.x, o.y], h / 2)} onClick={(e) => { e.stopPropagation(); onSelecionar(o.id); }}>
            <cylinderGeometry args={[0.6, 0.6, h, 12]} />
            <meshStandardMaterial color={o.id === selecionado ? COR_SELECIONADO : COR_LADO[o.lado]} />
          </mesh>
        );
      })}
      {rota?.caminhos.map((c, i) => <Line key={`rota-${i}`} points={c.map((p) => noChao(p, 0.4))} color="#ff4fd8" lineWidth={4} />)}
      {rota?.passos.map((p) => (
        <Html key={p.n} position={noChao([p.x, p.y], 2.5)} center><span className={`passo passo-${p.risco}`}>{p.n}</span></Html>
      ))}
      {trilhas.filter((t) => t.rastro.length >= 2).map((t) => (
        <Line key={t.id} points={t.rastro.map((p) => noChao(p, 0.6))} color={COR_LADO[t.lado]} lineWidth={t.destaque ? 4 : 2} />
      ))}
      {trilhas.map((t) => t.atual && (
        <mesh key={`agora-${t.id}`} position={noChao(t.atual, 1)}>
          <sphereGeometry args={[t.destaque ? 1.1 : 0.8, 12, 12]} />
          <meshStandardMaterial color={t.destaque ? COR_SELECIONADO : COR_LADO[t.lado]} />
        </mesh>
      ))}
      {marcas.map((m) => (
        <Html key={m.id} position={noChao([m.x, m.y], 1.5)} center>
          <span role="img" aria-label={m.rotulo} className={`marca marca-${m.tipo} marca-${m.lado}`} />
        </Html>
      ))}
      <OrbitControls enablePan maxPolarAngle={Math.PI / 2.4} minDistance={20} maxDistance={140} />
    </Canvas>
  );
}
```

Em `styles.css`, acrescente: `.trilha { fill: none; stroke-width: 0.004; opacity: 0.7 }`, cores `.trilha-radiant`/`.heroi-radiant` verde (#5cc26b) e `.trilha-dire`/`.heroi-dire` vermelho (#e05a47), `.destaque` com contorno amarelo (#ffd166) e traço mais grosso; `.heroi-agora` círculo de 10 px centrado (`transform: translate(-50%, -50%)`); `.marca-ward` losango azul (observer) e `.marca-morte` um "x" branco sobre vermelho, os dois de 8 px; `@media (prefers-reduced-motion: reduce)` sem transição nas marcas.

- [ ] **Step 4: Rodar e ver passar**: `npm test` → passam. `npm run dev`: o mapa 3D mostra as bases mais altas, o rio mais baixo, e os marcadores ficam em cima do chão (nenhum enterrado nem flutuando). Gire até a vista lateral para conferir as rampas.

- [ ] **Step 5: Commit**: `git add app && git commit -m "feat: add trails, marks and terrain relief to the map view"`

---

### Task 10: Camada de replay animada no mapa

**Files:**
- Create: `app/src/replays/reproducao.ts`, `app/src/replays/reproducao.test.ts`, `app/src/replays/useReproducao.ts`, `app/src/replays/MapaComCamadas.tsx`, `app/src/replays/SeletorReplay.tsx`, `app/src/replays/ControlesReplay.test.tsx`
- Modify: `app/src/map/MapPage.tsx`, `app/src/styles.css`

**Interfaces:**
- Consumes: `MapView`, `MapViewProps`, `trilhasNoTempo`, `marcasNoTempo`, `useData`, `Indisponivel`, `trajetoriaSchema`, `replaysSchema`
- Produces: `VELOCIDADES = [8, 16, 32]`; `type Reproducao = { t; tocando; velocidade; fimS }`; `type AcaoReproducao`; `reproduzir(estado, acao): Reproducao`; `iniciarReproducao(fimS): Reproducao`; `useReproducao(fimS): [Reproducao, Dispatch<AcaoReproducao>]`; `ControlesReplay({ estado, despachar })`; `MapaComCamadas(props: MapViewProps & { replayId: string | null })`; `SeletorReplay({ valor, onMudar })`; a URL do mapa guarda o replay em `?replay=<match_id>`.

- [ ] **Step 1: Testes que falham**

```ts
// app/src/replays/reproducao.test.ts
import { iniciarReproducao, reproduzir } from "./reproducao";

const inicio = iniciarReproducao(600);

it.each([
  { nome: "parado não anda", estado: inicio, acao: { tipo: "avancar", dtMs: 1000 } as const, t: 0, tocando: false },
  { nome: "tocando anda na velocidade", estado: { ...inicio, tocando: true }, acao: { tipo: "avancar", dtMs: 1000 } as const, t: 16, tocando: true },
  { nome: "para no fim", estado: { ...inicio, tocando: true, t: 590 }, acao: { tipo: "avancar", dtMs: 1000 } as const, t: 600, tocando: false },
  { nome: "tocar no fim recomeça", estado: { ...inicio, t: 600 }, acao: { tipo: "alternar" } as const, t: 0, tocando: true },
  { nome: "ir limita ao fim", estado: inicio, acao: { tipo: "ir", t: 9999 } as const, t: 600, tocando: false },
])("$nome", ({ estado, acao, t, tocando }) => {
  expect(reproduzir(estado, acao)).toMatchObject({ t, tocando });
});

it("troca a velocidade", () => {
  expect(reproduzir(inicio, { tipo: "velocidade", v: 32 }).velocidade).toBe(32);
});
```

```tsx
// app/src/replays/ControlesReplay.test.tsx
import { fireEvent, render, screen } from "@testing-library/react";
import { ControlesReplay } from "./MapaComCamadas";
import { iniciarReproducao } from "./reproducao";

it("botão toca e o controle de tempo leva ao minuto escolhido", () => {
  const despachar = vi.fn();
  render(<ControlesReplay estado={iniciarReproducao(600)} passoS={5} despachar={despachar} />);
  fireEvent.click(screen.getByRole("button", { name: "Tocar" }));
  expect(despachar).toHaveBeenCalledWith({ tipo: "alternar" });
  fireEvent.change(screen.getByRole("slider", { name: "Minuto do replay" }), { target: { value: "300" } });
  expect(despachar).toHaveBeenCalledWith({ tipo: "ir", t: 300 });
  expect(screen.getByText("0:00 / 10:00")).toBeInTheDocument();
});
```

- [ ] **Step 2: Rodar e ver falhar**: FAIL.

- [ ] **Step 3: Implementação**

```ts
// app/src/replays/reproducao.ts
export const VELOCIDADES = [8, 16, 32] as const;
export type Velocidade = (typeof VELOCIDADES)[number];

export type Reproducao = { readonly t: number; readonly tocando: boolean; readonly velocidade: Velocidade; readonly fimS: number };
export type AcaoReproducao =
  | { tipo: "alternar" }
  | { tipo: "ir"; t: number }
  | { tipo: "velocidade"; v: Velocidade }
  | { tipo: "avancar"; dtMs: number };

export const iniciarReproducao = (fimS: number): Reproducao => ({ t: 0, tocando: false, velocidade: 16, fimS });

const limitar = (t: number, fimS: number) => Math.min(fimS, Math.max(0, t));

export function reproduzir(estado: Reproducao, acao: AcaoReproducao): Reproducao {
  switch (acao.tipo) {
    case "alternar": {
      const noFim = estado.t >= estado.fimS;
      return { ...estado, tocando: !estado.tocando || noFim, t: noFim ? 0 : estado.t };
    }
    case "ir":
      return { ...estado, t: limitar(acao.t, estado.fimS) };
    case "velocidade":
      return { ...estado, velocidade: acao.v };
    case "avancar": {
      if (!estado.tocando) return estado;
      const t = limitar(estado.t + (acao.dtMs / 1000) * estado.velocidade, estado.fimS);
      return { ...estado, t, tocando: t < estado.fimS };
    }
    default:
      return assertNever(acao);
  }
}

function assertNever(valor: never): never {
  throw new Error(`ação desconhecida: ${JSON.stringify(valor)}`);
}

export function formatarTempo(segundos: number): string {
  const total = Math.floor(segundos);
  return `${Math.floor(total / 60)}:${String(total % 60).padStart(2, "0")}`;
}
```

```ts
// app/src/replays/useReproducao.ts
import { useEffect, useReducer, type Dispatch } from "react";
import { iniciarReproducao, reproduzir, type AcaoReproducao, type Reproducao } from "./reproducao";

const INTERVALO_MS = 200; // redesenha o mapa 5 vezes por segundo: a amostra do replay muda a cada 5 s de jogo

export function useReproducao(fimS: number): [Reproducao, Dispatch<AcaoReproducao>] {
  const [estado, despachar] = useReducer(reproduzir, fimS, iniciarReproducao);
  useEffect(() => {
    if (!estado.tocando) return;
    let anterior = performance.now();
    let quadro = requestAnimationFrame(function passo(agora: number) {
      if (agora - anterior >= INTERVALO_MS) {
        despachar({ tipo: "avancar", dtMs: agora - anterior });
        anterior = agora;
      }
      quadro = requestAnimationFrame(passo);
    });
    return () => cancelAnimationFrame(quadro);
  }, [estado.tocando]);
  return [estado, despachar];
}
```

```tsx
// app/src/replays/MapaComCamadas.tsx
import type { Dispatch } from "react";
import { trajetoriaSchema, type Trajetoria } from "../data/schemas";
import { Indisponivel, useData } from "../data/useData";
import { MapView, type MapViewProps } from "../map/MapView";
import { marcasNoTempo, trilhasNoTempo } from "../map/trilhas";
import { VELOCIDADES, formatarTempo, type AcaoReproducao, type Reproducao, type Velocidade } from "./reproducao";
import { useReproducao } from "./useReproducao";

type Props = MapViewProps & { replayId: string | null };

export function MapaComCamadas({ replayId, ...mapa }: Props) {
  if (!replayId) return <MapView {...mapa} />;
  return <MapaComReplay key={replayId} replayId={replayId} {...mapa} />;
}

function MapaComReplay({ replayId, ...mapa }: MapViewProps & { replayId: string }) {
  const dados = useData(`/data/trajetorias/${replayId}.json`, trajetoriaSchema);
  if (dados.estado === "ok") return <ReplayTocando trajetoria={dados.dados} {...mapa} />;
  return (
    <>
      <MapView {...mapa} />
      {dados.estado === "indisponivel" && <Indisponivel motivo={dados.motivo} />}
    </>
  );
}

function ReplayTocando({ trajetoria, ...mapa }: MapViewProps & { trajetoria: Trajetoria }) {
  const [estado, despachar] = useReproducao(trajetoria.fim_s);
  const trilhas = trilhasNoTempo(trajetoria, estado.t);
  return (
    <div className="mapa-com-replay">
      <MapView {...mapa} trilhas={trilhas} marcas={marcasNoTempo(trajetoria, estado.t)} />
      <ControlesReplay estado={estado} passoS={trajetoria.passo_s} despachar={despachar} />
      <ul className="legenda-replay" aria-label="Heróis do replay">
        {trilhas.map((t) => (
          <li key={t.id} className={`heroi-${t.lado}${t.destaque ? " destaque" : ""}`}>{t.rotulo}</li>
        ))}
      </ul>
    </div>
  );
}

const ehVelocidade = (v: number): v is Velocidade => VELOCIDADES.some((opcao) => opcao === v);

export function ControlesReplay({ estado, passoS, despachar }: { estado: Reproducao; passoS: number; despachar: Dispatch<AcaoReproducao> }) {
  return (
    <div className="controles-replay">
      <button onClick={() => despachar({ tipo: "alternar" })} aria-pressed={estado.tocando}>
        {estado.tocando ? "Pausar" : "Tocar"}
      </button>
      <input type="range" aria-label="Minuto do replay" min={0} max={estado.fimS} step={passoS} value={estado.t}
        onChange={(e) => despachar({ tipo: "ir", t: Number(e.target.value) })} />
      <span>{formatarTempo(estado.t)} / {formatarTempo(estado.fimS)}</span>
      <select aria-label="Velocidade" value={estado.velocidade}
        onChange={(e) => {
          const v = Number(e.target.value);
          if (ehVelocidade(v)) despachar({ tipo: "velocidade", v });
        }}>
        {VELOCIDADES.map((v) => <option key={v} value={v}>{v}×</option>)}
      </select>
    </div>
  );
}
```

```tsx
// app/src/replays/SeletorReplay.tsx
import { replaysSchema, type ReplayResumo } from "../data/schemas";
import { Indisponivel, useData } from "../data/useData";

const rotuloDoReplay = (r: ReplayResumo) => {
  const foco = r.focos.map((f) => `${f.jogador ?? "?"} (${f.heroi})`).join(", ");
  return [r.data, foco || "partida inteira", r.liga].filter(Boolean).join(" · ");
};

export function SeletorReplay({ valor, onMudar }: { valor: string | null; onMudar: (id: string | null) => void }) {
  const replays = useData("/data/replays.json", replaysSchema);
  if (replays.estado === "indisponivel") return <Indisponivel motivo={replays.motivo} />;
  const opcoes = replays.estado === "ok" ? replays.dados : [];
  return (
    <label className="seletor-replay">
      Rota real de replay
      <select value={valor ?? ""} onChange={(e) => onMudar(e.target.value || null)}>
        <option value="">Nenhuma</option>
        {opcoes.map((r) => <option key={r.match_id} value={r.match_id}>{rotuloDoReplay(r)}</option>)}
      </select>
    </label>
  );
}
```

Em `MapPage.tsx`: leia o replay da URL com `const [params, setParams] = useSearchParams()` e `const replayId = params.get("replay")`; troque o `<MapView ... />` da 1A por `<MapaComCamadas replayId={replayId} ... />` com as mesmas props; acima do mapa, uma caixa "Camadas" com `<SeletorReplay valor={replayId} onMudar={(id) => setParams(id ? { replay: id } : {})} />`. Em `styles.css`: `.controles-replay` em linha (botão, barra que ocupa o resto, tempo, velocidade) que quebra em duas linhas abaixo de 480 px; botão com área de toque de 44 px; `.legenda-replay` em chips pequenos com a cor do lado.

- [ ] **Step 4: Rodar e ver passar**: `npm test` → passam. No navegador, em tamanho de celular (360×800, CPU 4× mais lenta no DevTools): escolha o replay 9027486175, toque em "Tocar" a 16×; o painel de desempenho fica em 30 fps ou mais, o herói em destaque (Templar Assassin, slot 0) anda pela safelane e vai para a selva, as wards aparecem e somem.

- [ ] **Step 5: Commit**: `git add app && git commit -m "feat: add animated replay trajectories layer on the map"`

---

### Task 11: Tela Heróis

**Files:**
- Create: `app/src/heroes/fases.ts`, `app/src/heroes/fases.test.ts`, `app/src/heroes/HeroesPage.tsx`, `app/src/heroes/HeroPage.tsx`, `app/src/heroes/FichaHeroi.tsx`, `app/src/heroes/FichaHeroi.test.tsx`
- Modify: `app/src/App.tsx`, `app/src/layout/Shell.tsx`, `app/src/styles.css`

**Interfaces:**
- Consumes: `Heroi`, `HeroiResumo`, `Fase`, `Spike`, `Objetivo`, `ConteudoItem`, `MapView`, `useData`, `Indisponivel`, `normalizar`, `SoloRoshan` (Task 13; até lá a aba Roshan mostra "Ainda não escrito.")
- Produces: `faseNoMinuto(fases, minuto): Fase | null`; `proximoSpike(spikes, minuto): Spike | null`; `filtrarHerois(herois, texto): HeroiResumo[]`; `FichaHeroi({ heroi, objetivos, solos })` com abas Guia, Power spikes, Rotas, Pros, Roshan; rotas de tela `/herois` e `/herois/:id`; item "Heróis" na navegação.

- [ ] **Step 1: Testes que falham**

```ts
// app/src/heroes/fases.test.ts
import { faseNoMinuto, filtrarHerois, proximoSpike } from "./fases";

const fase = (de: number, ate: number) => ({ de, ate, janela: `${de}-${ate}`, objetivo: "", passos: [], caminhos: [] });
const spike = (minuto: number | null, marco: string) => ({ minuto, faixa: "", marco, o_que_fazer: "" });

it.each([
  { minuto: 0, esperado: "0-7.5" },
  { minuto: 7.5, esperado: "7.5-12" },
  { minuto: 40, esperado: null },
])("fase do minuto $minuto", ({ minuto, esperado }) => {
  expect(faseNoMinuto([fase(0, 7.5), fase(7.5, 12)], minuto)?.janela ?? null).toBe(esperado);
});

it("próximo spike ignora os sem minuto e os que já passaram", () => {
  const spikes = [spike(2.5, "Wand"), spike(null, "Tardio"), spike(7.9, "Nível 6")];
  expect(proximoSpike(spikes, 5)?.marco).toBe("Nível 6");
  expect(proximoSpike(spikes, 10)).toBeNull();
});

it("filtra heróis sem acento e sem caixa", () => {
  const herois = [{ id: "natures_prophet", nome: "Nature's Prophet", hero_id: 53, patch: "", resumo: "", tem_por_minuto: true }];
  expect(filtrarHerois(herois, "NATURE")).toHaveLength(1);
  expect(filtrarHerois(herois, "medusa")).toHaveLength(0);
});
```

```tsx
// app/src/heroes/FichaHeroi.test.tsx
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import type { Heroi } from "../data/schemas";
import { FichaHeroi } from "./FichaHeroi";

const heroi: Heroi = {
  id: "medusa", nome: "Medusa", hero_id: 94, patch: "7.41f", resumo: "Carry de jogo longo.", confianca: "Média.",
  guia: {
    bom_quando: ["Time aguenta até 35 min."], evitar_quando: [], momento_do_draft: "Por último.",
    lane: { objetivo: "LH 22 aos 5.", itens_iniciais: [], dicas: [] }, skill_build: [], itens_core: [], itens_situacionais: [],
    condicao_para_farmar: { nivel: 6, minuto_tipico: 7.9, explicacao: "Nível 6." }, depois_dos_20: [], erros_comuns: [],
  },
  power_spikes: [{ minuto: 2.5, faixa: "2:30", marco: "Null Talisman e Magic Wand", o_que_fazer: "Compre antes do dano." }],
  por_minuto: null, rotas: { radiant: [], dire: [] }, rotas_relacionadas: [],
  pros: { linhas: [{ jogador: "Satanic", jogos: 5, vitorias: 3, lh10: 62 }], leitura: null }, fontes: ["herodata"],
};

it("mostra o guia e troca para power spikes e pros", () => {
  render(<MemoryRouter><FichaHeroi heroi={heroi} objetivos={[]} solos={[]} /></MemoryRouter>);
  expect(screen.getByText("Carry de jogo longo.")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("tab", { name: "Power spikes" }));
  expect(screen.getByText("Null Talisman e Magic Wand")).toBeInTheDocument();
  fireEvent.click(screen.getByRole("tab", { name: "Pros" }));
  expect(screen.getByRole("cell", { name: "Satanic" })).toBeInTheDocument();
});
```

- [ ] **Step 2: Rodar e ver falhar**: FAIL.

- [ ] **Step 3: Implementação**

```ts
// app/src/heroes/fases.ts
import type { Fase, HeroiResumo, Spike } from "../data/schemas";
import { normalizar } from "../routes/filtros";

export function faseNoMinuto(fases: readonly Fase[], minuto: number): Fase | null {
  return fases.find((f) => f.de <= minuto && minuto < f.ate) ?? null;
}

export function proximoSpike(spikes: readonly Spike[], minuto: number): Spike | null {
  return spikes.find((s) => s.minuto !== null && s.minuto >= minuto) ?? null;
}

export function filtrarHerois(herois: readonly HeroiResumo[], texto: string): HeroiResumo[] {
  const alvo = normalizar(texto.trim());
  return herois.filter((h) => normalizar(`${h.nome} ${h.id}`).includes(alvo));
}
```

```tsx
// app/src/heroes/FichaHeroi.tsx
import { useState, type ReactNode } from "react";
import { Link } from "react-router";
import type { ConteudoItem, Heroi, Objetivo } from "../data/schemas";
import { MapView } from "../map/MapView";

const ABAS = { guia: "Guia", spikes: "Power spikes", rotas: "Rotas", pros: "Pros", roshan: "Roshan" } as const;
type Aba = keyof typeof ABAS;
type Lado = "radiant" | "dire";

type Props = { heroi: Heroi; objetivos: Objetivo[]; solos: ConteudoItem[]; roshan?: ReactNode };

const Lista = ({ itens }: { itens: readonly string[] }) => <ul>{itens.map((i) => <li key={i}>{i}</li>)}</ul>;

function AbaGuia({ heroi }: { heroi: Heroi }) {
  const { guia } = heroi;
  return (
    <>
      <h3>Quando pegar</h3><Lista itens={guia.bom_quando} />
      <h3>Quando evitar</h3><Lista itens={guia.evitar_quando} />
      <p>{guia.momento_do_draft}</p>
      <h3>Lane</h3><p>{guia.lane.objetivo}</p><Lista itens={guia.lane.itens_iniciais} /><Lista itens={guia.lane.dicas} />
      <h3>Quando começar a farmar a selva</h3><p>{guia.condicao_para_farmar.explicacao}</p>
      <h3>Itens</h3>
      <ol>{guia.itens_core.map((i) => <li key={i.nome}><strong>{i.nome}</strong>{i.minuto_alvo !== null && ` · ${i.minuto_alvo.toLocaleString("pt-BR")} min`}<small> {i.base}</small></li>)}</ol>
      <h3>Situacionais</h3>
      <ul>{guia.itens_situacionais.map((i) => <li key={i.nome}><strong>{i.nome}</strong>: {i.quando}</li>)}</ul>
      <h3>Habilidades</h3>
      <ol>{guia.skill_build.map((s) => <li key={`${s.nivel}-${s.skill}`}>Nível {s.nivel}: {s.skill}</li>)}</ol>
      <h3>Depois dos 20 min</h3><Lista itens={guia.depois_dos_20} />
      <h3>Erros comuns</h3><Lista itens={guia.erros_comuns} />
    </>
  );
}

function AbaSpikes({ heroi }: { heroi: Heroi }) {
  return (
    <>
      <ol className="linha-do-tempo">
        {heroi.power_spikes.map((s) => (
          <li key={`${s.faixa}-${s.marco}`}><span className="tempo">{s.faixa}</span><strong>{s.marco}</strong><p>{s.o_que_fazer}</p></li>
        ))}
      </ol>
      {heroi.por_minuto && (
        <table className="tabela-minuto">
          <thead><tr><th>Min</th><th>Nível</th><th>Habilidade</th><th>Item</th><th>Objetivo de farm</th></tr></thead>
          <tbody>{heroi.por_minuto.map((m) => (
            <tr key={m.minuto}><td>{m.minuto}</td><td>{m.nivel}</td><td>{m.habilidade}</td><td>{m.item}</td><td>{m.objetivo_farm}</td></tr>
          ))}</tbody>
        </table>
      )}
    </>
  );
}

function AbaRotas({ heroi, objetivos }: { heroi: Heroi; objetivos: Objetivo[] }) {
  const [lado, setLado] = useState<Lado>("radiant");
  const [indice, setIndice] = useState(0);
  const fases = heroi.rotas[lado];
  const fase = fases[indice] ?? fases[0] ?? null;
  return (
    <>
      <div role="group" aria-label="Lado">
        {(["radiant", "dire"] as const).map((l) => (
          <button key={l} aria-pressed={lado === l} onClick={() => { setLado(l); setIndice(0); }}>{l === "radiant" ? "Radiant" : "Dire"}</button>
        ))}
      </div>
      <div role="group" aria-label="Fase">
        {fases.map((f, i) => <button key={f.janela} aria-pressed={i === indice} onClick={() => setIndice(i)}>{f.janela}</button>)}
      </div>
      {fase && (
        <>
          <p>{fase.objetivo}</p>
          <MapView objetivos={objetivos} rota={fase} onSelecionar={() => {}} />
          <ol>{fase.passos.map((p) => <li key={p.n}><strong>{p.rotulo}</strong> ({p.minuto}): {p.acao}</li>)}</ol>
        </>
      )}
      {heroi.rotas_relacionadas.length > 0 && (
        <p>Rotas do PDF 06 para este herói: {heroi.rotas_relacionadas.map((id) => <Link key={id} to={`/rotas/${id}`}>{id} </Link>)}</p>
      )}
    </>
  );
}

function AbaPros({ heroi }: { heroi: Heroi }) {
  return (
    <>
      <table>
        <thead><tr><th>Jogador</th><th>Jogos</th><th>Vitórias</th><th>LH aos 10</th></tr></thead>
        <tbody>{heroi.pros.linhas.map((l) => (
          <tr key={l.jogador}><td>{l.jogador}</td><td>{l.jogos}</td><td>{l.vitorias ?? "sem dado"}</td><td>{l.lh10?.toLocaleString("pt-BR") ?? "sem dado"}</td></tr>
        ))}</tbody>
      </table>
      {heroi.pros.leitura && <p>{heroi.pros.leitura}</p>}
    </>
  );
}

export function FichaHeroi({ heroi, objetivos, solos, roshan }: Props) {
  const [aba, setAba] = useState<Aba>("guia");
  const conteudo: Record<Aba, ReactNode> = {
    guia: <AbaGuia heroi={heroi} />,
    spikes: <AbaSpikes heroi={heroi} />,
    rotas: <AbaRotas heroi={heroi} objetivos={objetivos} />,
    pros: <AbaPros heroi={heroi} />,
    roshan: solos.length > 0 && roshan ? roshan : <p>Ainda não escrito.</p>,
  };
  return (
    <article className="ficha-heroi">
      <header><h1>{heroi.nome}</h1><p>{heroi.resumo}</p></header>
      <div role="tablist">
        {(Object.keys(ABAS) as Aba[]).map((a) => (
          <button key={a} role="tab" aria-selected={aba === a} onClick={() => setAba(a)}>{ABAS[a]}</button>
        ))}
      </div>
      <div role="tabpanel">{conteudo[aba]}</div>
      <footer>Patch {heroi.patch}. Confiança: {heroi.confianca} Fontes: {heroi.fontes.join("; ")}</footer>
    </article>
  );
}
```

```tsx
// app/src/heroes/HeroPage.tsx
import { useParams } from "react-router";
import { conteudoSchema, heroiSchema, objetivosSchema } from "../data/schemas";
import { Indisponivel, useData } from "../data/useData";
import { FichaHeroi } from "./FichaHeroi";

export function HeroPage() {
  const { id = "" } = useParams();
  const heroi = useData(`/data/herois/${id}.json`, heroiSchema);
  const objetivos = useData("/data/objetivos.json", objetivosSchema);
  const solos = useData("/data/roshan_solo.json", conteudoSchema);
  if (heroi.estado === "carregando") return <p>Carregando…</p>;
  if (heroi.estado === "indisponivel") return <Indisponivel motivo={heroi.motivo} />;
  const doHeroi = solos.estado === "ok" ? solos.dados.filter((s) => s.extras["heroi"] === heroi.dados.nome) : [];
  return <FichaHeroi heroi={heroi.dados} objetivos={objetivos.estado === "ok" ? objetivos.dados : []} solos={doHeroi} />;
}
```

```tsx
// app/src/heroes/HeroesPage.tsx
import { useState } from "react";
import { Link } from "react-router";
import { heroisSchema } from "../data/schemas";
import { Indisponivel, useData } from "../data/useData";
import { filtrarHerois } from "./fases";

export function HeroesPage() {
  const herois = useData("/data/herois.json", heroisSchema);
  const [texto, setTexto] = useState("");
  if (herois.estado === "carregando") return <p>Carregando…</p>;
  if (herois.estado === "indisponivel") return <Indisponivel motivo={herois.motivo} />;
  return (
    <section>
      <h1>Heróis</h1>
      <input type="search" aria-label="Filtrar heróis" value={texto} onChange={(e) => setTexto(e.target.value)} />
      <ul className="grade-herois">
        {filtrarHerois(herois.dados, texto).map((h) => (
          <li key={h.id}><Link to={`/herois/${h.id}`}><strong>{h.nome}</strong><span>{h.resumo.slice(0, 120)}</span></Link></li>
        ))}
      </ul>
    </section>
  );
}
```

`App.tsx`: acrescente as rotas com carregamento sob demanda do react-router 7: `{ path: "herois", lazy: async () => ({ Component: (await import("./heroes/HeroesPage")).HeroesPage }) }` e `{ path: "herois/:id", lazy: async () => ({ Component: (await import("./heroes/HeroPage")).HeroPage }) }`. `Shell.tsx`: `<NavLink to="/herois">Heróis</NavLink>` depois de Rotas. `styles.css`: `.grade-herois` em grade de cartões (1 coluna em 360 px, 3 a partir de 900 px); `.linha-do-tempo` vertical com o tempo em destaque dourado (#c8a24b) numa coluna estreita à esquerda; tabelas com rolagem horizontal própria (`overflow-x: auto` num contêiner) para não estourar a página no celular.

- [ ] **Step 4: Rodar e ver passar**: `npm test` → passam. No navegador: `/herois`, filtre "jug", abra Juggernaut, veja as 5 abas; na aba Rotas, Radiant e Dire desenham a fase no mapa.

- [ ] **Step 5: Commit**: `git add app && git commit -m "feat: add heroes screen with guide, spikes, routes and pro numbers"`

---

### Task 12: Tela Jogadores e times com gráficos interativos

**Files:**
- Create: `app/src/players/grafico-config.ts`, `app/src/players/grafico-config.test.ts`, `app/src/players/Grafico.tsx`, `app/src/players/PainelJogador.tsx`, `app/src/players/PainelJogador.test.tsx`, `app/src/players/PlayersPage.tsx`, `app/src/players/PlayerPage.tsx`, `app/src/players/TeamPage.tsx`
- Modify: `app/package.json` (chart.js), `app/src/App.tsx`, `app/src/layout/Shell.tsx`, `app/src/styles.css`

**Interfaces:**
- Consumes: `Painel`, `GraficoDados`, `JogadorResumo`, `Time`, `useData`, `Indisponivel`
- Produces: `CORES_SERIE`; `configDoGrafico(g: GraficoDados): ChartConfiguration`; `formatarValor(valor, unidade): string`; `Grafico({ grafico })` (canvas + tabela "Ver os números"); `PainelJogador({ painel })`; telas `/jogadores`, `/jogadores/:id`, `/times/:id`; item "Jogadores" na navegação.

- [ ] **Step 1: Testes que falham**

```ts
// app/src/players/grafico-config.test.ts
import { configDoGrafico, formatarValor } from "./grafico-config";

const g = { id: "lh", titulo: "LH", tipo: "linha" as const, x: { rotulo: "minuto", valores: [0, 1] }, series: [{ nome: "Felipe", valores: [0, 4.5] }, { nome: "Satanic", valores: [0, null] }], unidade: "last hits", fonte: "f", nota: null };

it("vira gráfico de linha com uma série por amostra", () => {
  const c = configDoGrafico(g);
  expect(c.type).toBe("line");
  expect(c.data.labels).toEqual(["0", "1"]);
  expect(c.data.datasets.map((d) => d.label)).toEqual(["Felipe", "Satanic"]);
});

it("barra vira bar", () => {
  expect(configDoGrafico({ ...g, tipo: "barra" }).type).toBe("bar");
});

it.each([
  { valor: 53.4, unidade: "%", texto: "53,4%" },
  { valor: 4.5, unidade: "pp", texto: "4,5 pp" },
  { valor: 714, unidade: "jogos", texto: "714 jogos" },
])("formata $valor $unidade", ({ valor, unidade, texto }) => {
  expect(formatarValor(valor, unidade)).toBe(texto);
});
```

```tsx
// app/src/players/PainelJogador.test.tsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import type { Painel } from "../data/schemas";
import { PainelJogador } from "./PainelJogador";

const painel: Painel = {
  id: "leonardo", nome: "Leonardo", tipo: "amigo", time: null, amostra: "714 partidas", fontes: ["partidas.csv"],
  destaques: [{ rotulo: "Vitórias", valor: 53.4, unidade: "%", fonte: "partidas.csv" }],
  graficos: [{ id: "h", titulo: "Vitória por horário", tipo: "barra", x: { rotulo: "", valores: ["16-18 (92)"] }, series: [{ nome: "Vitória", valores: [62] }], unidade: "%", fonte: "partidas.csv", nota: null }],
  achados: [{ texto: "Invoker no mid ganha 66%.", fonte: "resumo" }], replays: ["9027486175"],
};

it("mostra destaques formatados, tabela do gráfico, achados e link do replay", () => {
  render(<MemoryRouter><PainelJogador painel={painel} /></MemoryRouter>);
  expect(screen.getByText("53,4%")).toBeInTheDocument();
  expect(screen.getByRole("cell", { name: "16-18 (92)" })).toBeInTheDocument();
  expect(screen.getByText("Invoker no mid ganha 66%.")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /9027486175/ })).toHaveAttribute("href", "/?replay=9027486175");
});
```

- [ ] **Step 2: Rodar e ver falhar**: FAIL.

- [ ] **Step 3: Implementação**

`npm i chart.js`

```ts
// app/src/players/grafico-config.ts
import type { ChartConfiguration, ChartType } from "chart.js";
import type { GraficoDados } from "../data/schemas";

export const CORES_SERIE = ["#c8a24b", "#6fa8dc", "#e05a47", "#5cc26b", "#b48cff", "#e6e1d6"] as const;
const TEXTO = "#e6e1d6";
const TEXTO_FRACO = "#9aa3a8";
const GRADE = "rgba(230, 225, 214, 0.08)";
const TIPO: Record<GraficoDados["tipo"], ChartType> = { linha: "line", barra: "bar" };

const cor = (i: number) => CORES_SERIE[i % CORES_SERIE.length] ?? TEXTO;

export function formatarValor(valor: number, unidade: string): string {
  const numero = valor.toLocaleString("pt-BR", { maximumFractionDigits: 1 });
  return unidade === "%" ? `${numero}%` : `${numero} ${unidade}`;
}

export function configDoGrafico(g: GraficoDados): ChartConfiguration {
  return {
    type: TIPO[g.tipo],
    data: {
      labels: g.x.valores.map(String),
      datasets: g.series.map((s, i) => ({
        label: s.nome, data: s.valores, borderColor: cor(i), backgroundColor: cor(i), pointRadius: 0, spanGaps: true, borderWidth: 2,
      })),
    },
    options: {
      responsive: true, maintainAspectRatio: false, animation: false,
      interaction: { mode: "index", intersect: false },
      plugins: {
        legend: { labels: { color: TEXTO } },
        tooltip: { callbacks: { label: (c) => `${c.dataset.label ?? ""}: ${c.formattedValue} ${g.unidade}` } },
      },
      scales: {
        x: { title: { display: Boolean(g.x.rotulo), text: g.x.rotulo, color: TEXTO_FRACO }, ticks: { color: TEXTO_FRACO, autoSkip: true, maxRotation: 45 }, grid: { color: GRADE } },
        y: { title: { display: true, text: g.unidade, color: TEXTO_FRACO }, ticks: { color: TEXTO_FRACO }, grid: { color: GRADE } },
      },
    },
  };
}
```

```tsx
// app/src/players/Grafico.tsx
import { BarController, BarElement, CategoryScale, Chart, Legend, LinearScale, LineController, LineElement, PointElement, Tooltip } from "chart.js";
import { useEffect, useRef } from "react";
import type { GraficoDados } from "../data/schemas";
import { configDoGrafico } from "./grafico-config";

Chart.register(LineController, LineElement, PointElement, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function TabelaDoGrafico({ grafico }: { grafico: GraficoDados }) {
  return (
    <details className="grafico-numeros">
      <summary>Ver os números</summary>
      <div className="rolagem">
        <table>
          <thead><tr><th>{grafico.x.rotulo || "item"}</th>{grafico.series.map((s) => <th key={s.nome}>{s.nome}</th>)}</tr></thead>
          <tbody>{grafico.x.valores.map((x, i) => (
            <tr key={String(x)}><td>{x}</td>{grafico.series.map((s) => <td key={s.nome}>{s.valores[i]?.toLocaleString("pt-BR") ?? "sem dado"}</td>)}</tr>
          ))}</tbody>
        </table>
      </div>
    </details>
  );
}

export function Grafico({ grafico }: { grafico: GraficoDados }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const contexto = canvas.current?.getContext("2d");
    if (!contexto) return;
    const grafico2d = new Chart(contexto, configDoGrafico(grafico));
    return () => grafico2d.destroy();
  }, [grafico]);
  const descricao = `${grafico.titulo}: ${grafico.series.map((s) => s.nome).join(", ")} por ${grafico.x.rotulo || "item"}`;
  return (
    <figure className="grafico">
      <figcaption>{grafico.titulo}</figcaption>
      <div className="grafico-area"><canvas ref={canvas} role="img" aria-label={descricao} /></div>
      <TabelaDoGrafico grafico={grafico} />
      <p className="grafico-fonte">Fonte: {grafico.fonte}{grafico.nota ? `. ${grafico.nota}` : ""}</p>
    </figure>
  );
}
```

```tsx
// app/src/players/PainelJogador.tsx
import { Link } from "react-router";
import type { Painel } from "../data/schemas";
import { normalizar } from "../routes/filtros";
import { Grafico } from "./Grafico";
import { formatarValor } from "./grafico-config";

// mesmo slug do export (jogadores.slug): é o id do time em times.json
export const idDoTime = (nome: string) => normalizar(nome).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export function PainelJogador({ painel }: { painel: Painel }) {
  return (
    <article className="painel-jogador">
      <header>
        <h1>{painel.nome}</h1>
        <p>{painel.tipo === "pro" ? "Profissional" : "Amigo"}{painel.time && <> · <Link to={`/times/${idDoTime(painel.time)}`}>{painel.time}</Link></>}</p>
        <p className="amostra">{painel.amostra}</p>
      </header>
      <dl className="destaques">
        {painel.destaques.map((d) => (
          <div key={d.rotulo} title={`Fonte: ${d.fonte}`}><dt>{d.rotulo}</dt><dd>{formatarValor(d.valor, d.unidade)}</dd></div>
        ))}
      </dl>
      {painel.graficos.map((g) => <Grafico key={g.id} grafico={g} />)}
      {painel.achados.length > 0 && (
        <section><h2>O que a análise achou</h2><ul>{painel.achados.map((a) => <li key={a.texto}>{a.texto}</li>)}</ul></section>
      )}
      {painel.replays.length > 0 && (
        <section><h2>Replays no mapa</h2>
          <ul>{painel.replays.map((r) => <li key={r}><Link to={`/?replay=${r}`}>Ver o replay {r} no mapa</Link></li>)}</ul>
        </section>
      )}
      <footer>Fontes: {painel.fontes.join("; ")}</footer>
    </article>
  );
}
```

```tsx
// app/src/players/PlayerPage.tsx
import { useParams } from "react-router";
import { painelSchema } from "../data/schemas";
import { Indisponivel, useData } from "../data/useData";
import { PainelJogador } from "./PainelJogador";

export function PlayerPage() {
  const { id = "" } = useParams();
  const painel = useData(`/data/jogadores/${id}.json`, painelSchema);
  if (painel.estado === "carregando") return <p>Carregando…</p>;
  if (painel.estado === "indisponivel") return <Indisponivel motivo={painel.motivo} />;
  return <PainelJogador painel={painel.dados} />;
}
```

```tsx
// app/src/players/PlayersPage.tsx
import { Link } from "react-router";
import { jogadoresSchema, timesSchema, type JogadorResumo } from "../data/schemas";
import { Indisponivel, useData } from "../data/useData";

const Grupo = ({ titulo, jogadores }: { titulo: string; jogadores: JogadorResumo[] }) => (
  <section><h2>{titulo}</h2>
    <ul className="cartoes">{jogadores.map((j) => (
      <li key={j.id}><Link to={`/jogadores/${j.id}`}><strong>{j.nome}</strong><span>{j.time ?? j.amostra}</span></Link></li>
    ))}</ul>
  </section>
);

export function PlayersPage() {
  const jogadores = useData("/data/jogadores.json", jogadoresSchema);
  const times = useData("/data/times.json", timesSchema);
  if (jogadores.estado === "carregando") return <p>Carregando…</p>;
  if (jogadores.estado === "indisponivel") return <Indisponivel motivo={jogadores.motivo} />;
  return (
    <>
      <h1>Jogadores e times</h1>
      <Grupo titulo="Amigos" jogadores={jogadores.dados.filter((j) => j.tipo === "amigo")} />
      <Grupo titulo="Profissionais" jogadores={jogadores.dados.filter((j) => j.tipo === "pro")} />
      <section><h2>Times</h2>
        {times.estado === "indisponivel" && <Indisponivel motivo={times.motivo} />}
        {times.estado === "ok" && <ul className="cartoes">{times.dados.map((t) => (
          <li key={t.id}><Link to={`/times/${t.id}`}><strong>{t.nome}</strong><span>{t.jogadores.length} jogador(es) nas análises</span></Link></li>
        ))}</ul>}
      </section>
    </>
  );
}
```

```tsx
// app/src/players/TeamPage.tsx
import { Link, useParams } from "react-router";
import { jogadoresSchema, timesSchema } from "../data/schemas";
import { Indisponivel, useData } from "../data/useData";

export function TeamPage() {
  const { id = "" } = useParams();
  const times = useData("/data/times.json", timesSchema);
  const jogadores = useData("/data/jogadores.json", jogadoresSchema);
  if (times.estado === "carregando") return <p>Carregando…</p>;
  if (times.estado === "indisponivel") return <Indisponivel motivo={times.motivo} />;
  const time = times.dados.find((t) => t.id === id);
  if (!time) return <Indisponivel motivo={`time ${id} não está nas análises`} />;
  const nomes = new Map(jogadores.estado === "ok" ? jogadores.dados.map((j) => [j.id, j.nome]) : []);
  return (
    <section>
      <h1>{time.nome}</h1>
      <ul>{time.jogadores.map((j) => <li key={j}><Link to={`/jogadores/${j}`}>{nomes.get(j) ?? j}</Link></li>)}</ul>
      <p className="fonte">Fonte: {time.fonte}</p>
    </section>
  );
}
```

`App.tsx`: rotas `jogadores`, `jogadores/:id` e `times/:id` com `lazy` (como na Task 11), para o Chart.js só baixar nessa tela. `Shell.tsx`: `<NavLink to="/jogadores">Jogadores</NavLink>`. `styles.css`: `.destaques` em grade de cartões (2 colunas em 360 px, 4 a partir de 900 px), número grande em fonte tabular (`font-variant-numeric: tabular-nums`) e rótulo pequeno embaixo; `.grafico-area { position: relative; height: 260px }` (360 px a partir de 900 px); legenda e eixos na cor do texto do tema; `.rolagem { overflow-x: auto }`.

- [ ] **Step 4: Rodar e ver passar**: `npm test` → passam (o jsdom não tem canvas: o gráfico não desenha e a tabela aparece, que é o fallback esperado). No navegador, abra `/jogadores/felipe`, `/jogadores/leonardo`, `/jogadores/hane`, `/jogadores/yuma`, `/jogadores/satanic`, `/jogadores/skiter` e `/times/team-spirit`: toque num ponto da curva e o tooltip mostra o valor com a unidade. Rode `npm run build` e confira no relatório do Vite que `chart.js` está só no pedaço da rota de jogadores.

- [ ] **Step 5: Commit**: `git add app && git commit -m "feat: add players and teams screens with interactive charts"`

---

### Task 13: Glossário completo no app e solo de Roshan no painel do objetivo

**Files:**
- Create: `app/src/glossary/links.ts`, `app/src/glossary/links.test.ts`, `app/src/glossary/filtros.ts`, `app/src/glossary/filtros.test.ts`, `app/src/roshan/SoloRoshan.tsx`, `app/src/roshan/SoloRoshan.test.tsx`
- Modify: `app/src/glossary/GlossaryPage.tsx`, `app/src/objectives/ObjectivePanel.tsx`, `app/src/map/MapPage.tsx`, `app/src/heroes/HeroPage.tsx`

**Interfaces:**
- Consumes: `ConteudoItem` (com `extras`), `Objetivo`, `HeroiResumo`, `Rota`, `normalizar`
- Produces: `type Catalogo = { termos: ReadonlySet<string>; herois: ReadonlySet<string>; rotas: ReadonlySet<string>; objetivos: ReadonlyMap<string, string> }`; `montarCatalogo(dados): Catalogo`; `destinoDoLink(id, catalogo): string | null`; `textoExtra(item, chave): string | null`; `filtrarTermos(termos, { texto, categoria }): ConteudoItem[]`; `CATEGORIAS` (rótulo em português de cada categoria); `rotuloDaOrigem(solo): string`; `SoloRoshan({ solos })`; `ObjectivePanel` aceita `children` mostrados na aba Avançado.

- [ ] **Step 1: Testes que falham**

```ts
// app/src/glossary/links.test.ts
import { destinoDoLink, montarCatalogo } from "./links";

const catalogo = montarCatalogo({
  termos: [{ id: "aegis" }], herois: [{ id: "medusa" }], rotas: [{ id: "MA-R-01" }],
  objetivos: [{ id: "roshan_pit_top", tipo: "roshan" }],
});

it.each([
  { id: "aegis", destino: "/glossario/aegis" },
  { id: "medusa", destino: "/herois/medusa" },
  { id: "MA-R-01", destino: "/rotas/MA-R-01" },
  { id: "roshan", destino: "/mapa/roshan_pit_top" },
  { id: "nada", destino: null },
])("link $id vai para $destino", ({ id, destino }) => {
  expect(destinoDoLink(id, catalogo)).toBe(destino);
});
```

```ts
// app/src/glossary/filtros.test.ts
import { filtrarTermos } from "./filtros";

const termo = (id: string, titulo: string, categoria: string) => ({ id, titulo, patch: "7.41", fontes: [], secoes: { basico: "", avancado: null }, links: [], extras: { categoria } });
const termos = [termo("bkb", "Black King Bar", "item"), termo("stack", "Stack", "farm")];

it("filtra por categoria e por texto sem acento", () => {
  expect(filtrarTermos(termos, { texto: "", categoria: "item" }).map((t) => t.id)).toEqual(["bkb"]);
  expect(filtrarTermos(termos, { texto: "STÁCK", categoria: null }).map((t) => t.id)).toEqual(["stack"]);
});
```

```tsx
// app/src/roshan/SoloRoshan.test.tsx
import { render, screen } from "@testing-library/react";
import { SoloRoshan } from "./SoloRoshan";

const solo = (id: string, extras: Record<string, string | string[]>) => ({
  id, titulo: id, patch: "7.41", fontes: ["Liquipedia"], secoes: { basico: "Passo a passo.", avancado: null }, links: [], extras,
});

it("marca recomendado e visto em replay", () => {
  render(<SoloRoshan solos={[
    solo("Ursa", { origem: "recomendado", nivel: "7", minuto: "9:00", itens: ["Vladmir's Offering"] }),
    solo("Huskar", { origem: "replay", replay: "9022767300", nivel: "11", minuto: "14:30", itens: ["Armlet"] }),
  ]} />);
  expect(screen.getByText("recomendado")).toBeInTheDocument();
  expect(screen.getByText("visto em replay 9022767300")).toBeInTheDocument();
  expect(screen.getByText(/nível 7 · 9:00/)).toBeInTheDocument();
});

it("sem nenhum solo avisa que ainda não foi escrito", () => {
  render(<SoloRoshan solos={[]} />);
  expect(screen.getByText("Ainda não escrito.")).toBeInTheDocument();
});
```

- [ ] **Step 2: Rodar e ver falhar**: FAIL.

- [ ] **Step 3: Implementação**

```ts
// app/src/glossary/links.ts
type ComId = { id: string };

export type Catalogo = {
  termos: ReadonlySet<string>;
  herois: ReadonlySet<string>;
  rotas: ReadonlySet<string>;
  objetivos: ReadonlyMap<string, string>;
};

export function montarCatalogo(dados: { termos: ComId[]; herois: ComId[]; rotas: ComId[]; objetivos: (ComId & { tipo: string })[] }): Catalogo {
  return {
    termos: new Set(dados.termos.map((t) => t.id)),
    herois: new Set(dados.herois.map((h) => h.id)),
    rotas: new Set(dados.rotas.map((r) => r.id)),
    objetivos: new Map(dados.objetivos.flatMap((o) => [[o.tipo, o.id], [o.id, o.id]] as const)),
  };
}

export function destinoDoLink(id: string, catalogo: Catalogo): string | null {
  if (catalogo.termos.has(id)) return `/glossario/${id}`;
  if (catalogo.herois.has(id)) return `/herois/${id}`;
  if (catalogo.rotas.has(id)) return `/rotas/${id}`;
  const objetivo = catalogo.objetivos.get(id);
  return objetivo ? `/mapa/${objetivo}` : null;
}
```

```ts
// app/src/glossary/filtros.ts
import type { ConteudoItem } from "../data/schemas";
import { normalizar } from "../routes/filtros";

export const CATEGORIAS = {
  mecanica: "Mecânica", lane: "Lane", farm: "Farm", mapa: "Mapa", objetivo: "Objetivo", runa: "Runa", item: "Item",
  combate: "Combate", visao: "Visão", economia: "Economia", papel: "Papel", estrategia: "Estratégia",
  partida: "Partida e draft", giria: "Gíria", estatistica: "Estatística",
} as const satisfies Record<string, string>;

export function textoExtra(item: ConteudoItem, chave: string): string | null {
  const valor = item.extras[chave];
  return typeof valor === "string" ? valor : null;
}

export function filtrarTermos(termos: readonly ConteudoItem[], { texto, categoria }: { texto: string; categoria: string | null }): ConteudoItem[] {
  const alvo = normalizar(texto.trim());
  return termos.filter((t) =>
    (categoria === null || textoExtra(t, "categoria") === categoria) &&
    normalizar(`${t.titulo} ${t.id}`).includes(alvo));
}
```

```tsx
// app/src/roshan/SoloRoshan.tsx
import ReactMarkdown from "react-markdown";
import type { ConteudoItem } from "../data/schemas";
import { textoExtra } from "../glossary/filtros";

export function rotuloDaOrigem(solo: ConteudoItem): string {
  return textoExtra(solo, "origem") === "replay" ? `visto em replay ${textoExtra(solo, "replay") ?? ""}` : "recomendado";
}

const itensDo = (solo: ConteudoItem): string[] => {
  const itens = solo.extras["itens"];
  return Array.isArray(itens) ? itens : [];
};

export function SoloRoshan({ solos }: { solos: ConteudoItem[] }) {
  if (solos.length === 0) return <p>Ainda não escrito.</p>;
  return (
    <section aria-label="Solo de Roshan por herói">
      <h3>Solo de Roshan por herói</h3>
      <ul className="solo-lista">
        {solos.map((s) => (
          <li key={s.id}>
            <details>
              <summary>
                <strong>{s.titulo}</strong> <span className={`selo selo-${textoExtra(s, "origem") ?? "recomendado"}`}>{rotuloDaOrigem(s)}</span>
                <span> · nível {textoExtra(s, "nivel")} · {textoExtra(s, "minuto")}</span>
              </summary>
              <p>Itens: {itensDo(s).join(", ")}</p>
              <ReactMarkdown>{s.secoes.basico}</ReactMarkdown>
              {s.secoes.avancado && <ReactMarkdown>{s.secoes.avancado}</ReactMarkdown>}
              <p className="fontes">Patch {s.patch}. Fontes: {s.fontes.join("; ")}</p>
            </details>
          </li>
        ))}
      </ul>
    </section>
  );
}
```

`ObjectivePanel.tsx`: acrescente `children?: ReactNode` às props e renderize `{aba === "avancado" && children}` logo abaixo do texto da aba. `MapPage.tsx`: carregue `useData("/data/roshan_solo.json", conteudoSchema)` e, quando o objetivo aberto tiver `tipo === "roshan"`, passe `<SoloRoshan solos={...} />` como children do `ObjectivePanel`. `HeroPage.tsx`: passe `roshan={<SoloRoshan solos={doHeroi} />}` para `FichaHeroi`.

`GlossaryPage.tsx`: acima da lista, uma fileira de botões de categoria (`aria-pressed`, "Todas" + `CATEGORIAS`) que rola na horizontal no celular; a lista usa `filtrarTermos`. No termo aberto, os `links` viram `<Link>` com `destinoDoLink` (catálogo montado com `useData` de glossário, heróis, rotas e objetivos; link sem destino aparece como texto simples, sem quebrar). Ao lado do título, a etiqueta da categoria.

- [ ] **Step 4: Rodar e ver passar**: `npm test` → passam. No navegador: abra o Roshan no mapa, aba Avançado, e veja a lista de solo por herói com os selos; no glossário, filtre "Item" e abra "Black King Bar"; os links levam ao lugar certo.

- [ ] **Step 5: Commit**: `git add app && git commit -m "feat: add glossary categories, resolved links and solo roshan list"`

---

### Task 14: Verificação final (critérios 6 e 7, desempenho, conferência)

**Files:**
- Create: `export/tests/test_conferencia.py`, `docs/superpowers/verificacao/2026-10-06-fase1-criterios-6-e-7.md`

**Interfaces:**
- Consumes: `amigos`, `jogadores`, `herois`

- [ ] **Step 1: Teste de conferência (critério 6: 23 números contra os relatórios)**

```python
# export/tests/test_conferencia.py
"""Critério 6 da spec: os números dos painéis batem com os relatórios de origem (23 números)."""
import pytest

from dota_export import amigos, herois, jogadores


@pytest.fixture(scope="module")
def paineis():
    return {"leonardo": amigos.leonardo(), "hane": amigos.hane(), "yuma": amigos.yuma(),
            "felipe": jogadores.felipe(), "satanic": jogadores.pro_compare("satanic")}


def _destaque(painel, rotulo):
    return next(d["valor"] for d in painel["destaques"] if d["rotulo"] == rotulo)


def _barra(painel, grafico_id, rotulo_x):
    g = next(g for g in painel["graficos"] if g["id"] == grafico_id)
    i = next(i for i, x in enumerate(g["x"]["valores"]) if str(x).startswith(rotulo_x))
    return g["series"][0]["valores"][i]


CASOS = [
    # (painel, rótulo do destaque, valor do relatório, casas para comparar, onde está no relatório)
    ("leonardo", "Partidas", 714, 0, "resumo-para-o-leonardo.md: 714 partidas"),
    ("leonardo", "Vitórias", 53.4, 1, "resumo-para-o-leonardo.md: 53,4%"),
    ("leonardo", "Invoker no mid · Partidas", 232, 0, "resumo: Invoker no mid (232 jogos)"),
    ("leonardo", "Invoker no mid · Vitórias", 66, 0, "resumo: Invoker no mid ganha 66%"),
    ("leonardo", "Snapfire no mid · Partidas", 74, 0, "resumo: Snapfire (74 jogos)"),
    ("leonardo", "Snapfire no mid · Vitórias", 68, 0, "resumo: Snapfire 68%"),
    ("leonardo", "Vitórias nas últimas 20", 5, 0, "resumo: últimas 20 foram 5 vitórias"),
    ("hane", "Pos 4 · Vitórias", 57.7, 1, "estatistica.md linha 39: Pos 4 57,7%"),
    ("hane", "Pos 5 · Vitórias", 51.9, 1, "estatistica.md linha 285: Pos 5 51,9%"),
    ("hane", "Pos 4 · Vitórias com 0 ou 1 morte até os 10", 66, 0, "resumo-para-o-hane.md: 66% de Pos 4"),
    ("hane", "Pos 5 · Vitórias com 0 ou 1 morte até os 10", 61, 0, "resumo: 61% de Pos 5"),
    ("hane", "Pos 4 · Vitórias com 3 ou mais mortes até os 10", 44, 0, "resumo: cai pra 44%"),
    ("hane", "Pos 5 · Vitórias com 3 ou mais mortes até os 10", 42, 0, "resumo: e 42%"),
    ("yuma", "Jogos com Elo", 315, 0, "resumo-yuma-v2.md: n=315"),
    ("yuma", "Acima do esperado pelo Elo", 4.5, 1, "resumo-yuma-v2.md: +4,5 pp"),
    ("felipe", "Felipe solo · Last hits aos 10 min", 52.8, 1, "compare_pros listas: Felipe 52,8 (solo)"),
    ("felipe", "Felipe party · Last hits aos 10 min", 54.6, 1, "compare_pros listas: 54,6 (party)"),
    ("felipe", "Felipe solo · Partidas", 41, 0, "compare_pros amostras.felipe_solo.n"),
    ("satanic", "Satanic · Last hits aos 10 min", 72.6, 1, "compare_pros listas: Satanic 72,6"),
    ("satanic", "Satanic · Partidas", 94, 0, "compare_pros estilos.satanic.amostra: 94 jogos"),
]


@pytest.mark.parametrize(("painel", "rotulo", "esperado", "casas", "onde"), CASOS)
def test_destaque_bate_com_o_relatorio(paineis, painel, rotulo, esperado, casas, onde):
    assert round(_destaque(paineis[painel], rotulo), casas) == esperado, onde


def test_melhor_horario_do_leonardo(paineis):
    assert round(_barra(paineis["leonardo"], "vitoria_por_horario", "16-18")) == 62  # resumo: 16 a 18 h (62%)


def test_yatoro_e_watson_lh10():
    assert _destaque(jogadores.pro_compare("yatoro"), "Yatoro · Last hits aos 10 min") == 70.6
    assert _destaque(jogadores.pro_compare("watson"), "Watson · Last hits aos 10 min") == 69.8


def test_medusa_do_felipe_no_guia():
    medusa = next(h for h in herois.todos() if h["id"] == "medusa")
    assert next(l for l in medusa["pros"]["linhas"] if l["jogador"] == "Felipe")["lh10"] == 57.0
```

Run: `cd export && python -m pytest tests/test_conferencia.py -q`
Expected: 23 passed (20 casos + 3). Um caso que falha aponta o arquivo e o trecho do relatório: corrija o export, nunca o número esperado (a não ser que o relatório esteja errado; aí registre no ledger e avise o orquestrador).

- [ ] **Step 2: Suíte completa e build**

Run: `cd export && python -m pytest -q && python -m dota_export` → tudo passa e imprime as contagens. `cd app && npm test && npm run build` → passa.

- [ ] **Step 3: Desempenho e celular**

`npm run preview`; DevTools em 360×800, rede "Fast 4G", CPU 4× mais lenta:
- Primeira tela (mapa) abre em menos de 3 s, sem baixar `chart.js` (aba Network).
- Mapa com relevo gira e aproxima a 30 fps ou mais; com o replay 9027486175 tocando a 16×, também.
- `/herois/juggernaut` e `/jogadores/leonardo` abrem em menos de 2 s depois do clique; o gráfico responde ao toque.
- Busca acha "medusa", "skiter", "team spirit" e "bkb" enquanto digita.
- Apague `app/dist/data/jogadores/hane.json` e abra `/jogadores/hane`: aparece "Dados indisponíveis" e o resto do app funciona. Rode o build de novo.

- [ ] **Step 4: Critério 7 (PARE e chame o orquestrador)**

O teste é com pessoas: o executor não faz sozinho. Pare e mande ao orquestrador o roteiro abaixo, pedindo que ele marque com o Felipe e um amigo (cada um no próprio celular ou PC, sem nenhuma explicação antes):

1. "Ache a rota do minuto 12 do Radiant quando a lane está perdida." (anotar: achou? quantos toques? quanto tempo?)
2. "Abra o Juggernaut e diga em que minuto ele começa a farmar a selva."
3. "O que é stack? Ache no app."
4. "Ache o painel do Leonardo e diga com qual herói ele mais ganha."
5. "Toque um replay no mapa e diga onde o herói em destaque estava aos 10 min."
6. Pergunta aberta: "O que achou do visual? O que faltou?"

Critério 7 passa se os dois fazem 1, 2 e 3 sem ajuda. O orquestrador grava o resultado em `docs/superpowers/verificacao/2026-10-06-fase1-criterios-6-e-7.md` com: data, quem testou, aparelho, resultado de cada tarefa (achou ou não, toques, tempo), as frases de opinião sobre o visual e a saída do `test_conferencia.py` (critério 6). Opiniões viram itens de backlog no fim do arquivo, sem mudar código nesta fase.

- [ ] **Step 5: Commit**

```bash
git add export/tests/test_conferencia.py docs/superpowers/verificacao
git commit -m "test: verify phase 1 success criteria 6 and 7"
```
