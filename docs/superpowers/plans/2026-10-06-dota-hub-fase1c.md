# Dota Hub, fase 1C (unidades em 3D: Roshan, Tormentor, creeps de lane e selva, com habilidades) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Cumprir o adendo `docs/superpowers/specs/2026-10-06-dota-hub-unidades-3d-design.md`: ficha de cada unidade (modelo 3D animado e girável, números, habilidades com ícone, descrição, condições e "o que isso muda para você") no glossário (tela Unidades) e no painel do mapa (Roshan, Tormentor e camps), tudo gerado dos arquivos do jogo instalado.

**Architecture:** Mesma divisão das fases 1A e 1B. O `export/` ganha módulos que leem o Dota 2 instalado só para leitura: `kv` (formato KeyValues da Valve), `jogo` (acha o VPK e chama o Source 2 Viewer CLI), `habilidades`, `unidades`, `icones` e `modelos`. Eles gravam `unidades.json` (índice), `unidades/<id>.json` (ficha), `camps.json` (tipos de camp), `icones/<habilidade>.webp` e `modelos/<modelo>.glb` em `app/public/data/` (fora do git, como os outros dados). No app, um módulo `unidades/` com funções puras (`ficha.ts`), o visualizador 3D atrás de uma interface pequena (`VisualizadorUnidade`, no estilo da `MapView`: o resto do app não sabe que existe Three.js), a ficha, a tela Unidades e a ligação com o painel do objetivo e a busca.

**Tech Stack:** o da 1B (Python 3.13, pytest, jsonschema, Pillow; Node 22, Vite, React 19, TypeScript strict, react-three-fiber + drei, zod 4, react-router 8, vitest + Testing Library, minisearch) mais duas ferramentas de linha de comando fora do app: **Source 2 Viewer CLI 20.0** (ValveResourceFormat, baixado e conferido por hash) e **@gltf-transform/cli 4.5.1** (via `npx`), e **playwright** como dependência de desenvolvimento só para gerar as imagens paradas (Task 13). Decisão completa em `docs/superpowers/decisions/2026-10-06-unidades-3d-stack.md`.

**Spec:** `docs/superpowers/specs/2026-10-06-dota-hub-unidades-3d-design.md` (adendo a `docs/superpowers/specs/2026-10-06-dota-hub-design.md`). Planos anteriores: `2026-10-06-dota-hub-fase1a.md` e `2026-10-06-dota-hub-fase1b.md` (nomes reaproveitados: `fontes`, `conteudo.carregar` com `extras`, `validar.validar`, `_gravar_colecao`, `loadJson`, `useData`, `Indisponivel`, `hasWebGL`, `ObjectivePanel`, `rotuloOrigem`, `construirIndice`, `buscar`, `dadosOuVazio`, `normalizar`).

**Pré-requisito:** a fase 1B mesclada no `main`. Antes da Task 1, leia o código real da 1B (`export/dota_export/*.py`, `app/src/**`, ledger em `.superpowers/sdd/2026-10-06-dota-hub-fase1b/progress.md`) e confira os nomes acima. Três pontos mudam na 1B e precisam ser lidos antes de mexer: a lista de rotas em `App.tsx` (a 1B pode ter passado as telas para `lazy`), o tipo `Achado` da busca (a 1B acrescenta herói, jogador e time) e as props do `ObjectivePanel` (a 1B acrescenta `children`). Se um nome mudou, use o real e registre no ledger da 1C.

**Viabilidade:** testada em 06/10/2026 na pasta `C:\Users\felip\Desktop\dota-hub-spike-3d\` (resultado na decisão técnica). Roshan exportado com textura e animação parada, otimizado de 3,42 MB para 317 KB, carregou em 104 a 212 ms local e girou animado no navegador; os 59 modelos das unidades do 7.41 saem do jogo; 260 números da selva batem com `farm_mechanics_corrigido.json`; textos em português existem para todas as habilidades visíveis.

## Global Constraints

- Todas as da 1A e da 1B continuam valendo (português do Brasil com acentos e sem travessão; nada digitado à mão no app; `fonte` e `patch` em todo número; projetos de origem só leitura; TypeScript strict sem `any`, sem `as` e sem `!`; commits `type: descrição em minúscula`, sem menção a IA).
- O jogo é só leitura: o export lê `pak01_dir.vpk` pelo Source 2 Viewer CLI e nunca escreve na pasta do Steam. O jogo pode estar aberto durante o export.
- Modelos, ícones e imagens paradas ficam em `app/public/data/` (já ignorada pelo git). O binário do Source 2 Viewer fica em `export/ferramentas/` (ignorada pelo git, Task 1).
- Cada `modelos/<nome>.glb` tem no máximo 400 KB; o total fica abaixo de 15 MB (o export falha se passar, Task 4).
- O visualizador 3D e o Three.js só são baixados quando uma ficha abre (import dinâmico). A primeira tela não muda de peso.
- Um modelo por vez na memória: trocar de unidade desmonta a cena anterior e limpa o cache do arquivo.
- "O que isso muda para você" segue a regra de conteúdo da 1B: `fontes` no frontmatter e `origem: recomendado` ou `origem: replay` com `replay: <match_id>`. Texto sem fonte conferida não entra.

## Review Focus

1. Descrição com `%variavel%` sobrando ou tag HTML: o schema da habilidade recusa (`not pattern`), e o teste da Task 2 cobre o caso do `%%%`.
2. Número errado por herança: toda unidade é lida como `{**npc_dota_units_base, **unidade}`; a Task 5 confere 260 números da selva contra `farm_mechanics_corrigido.json` e os 10 do glossário do jogo para o Roshan.
3. Tormentor com vida 1 no arquivo (o jogo define por código): a ficha mostra vida ausente e a tabela do escudo (Task 3).
4. Cache do modelo que falhou: a nova tentativa usa outra URL (`?tentativa=N`), senão o cache do carregador devolve o mesmo erro (Task 8).
5. Export lento: só reexporta o modelo cujo CRC no VPK mudou ou cujo arquivo sumiu (manifesto, Task 4).
6. Imagem parada gerada por navegador automatizado: o script fecha o navegador em `finally` e tem tempo limite por página (Task 13).

---

## File Structure

```
dota-hub/
  .gitignore                          (modificar) export/ferramentas/
  export/
    dota_export/kv.py                 leitor de KeyValues (scripts e traduções do jogo)
    dota_export/jogo.py               acha o Dota instalado, chama o Source 2 Viewer CLI, lê os textos
    dota_export/ferramentas.py        baixa o Source 2 Viewer CLI 20.0 e confere o hash
    dota_export/habilidades.py        habilidade: nome, descrição limpa, condições, valores
    dota_export/unidades.py           fichas das unidades, crescimento, tipos de camp, índice
    dota_export/icones.py             ícones das habilidades em webp 64 px
    dota_export/modelos.py            modelos 3D: exporta com a animação parada, otimiza, manifesto
    dota_export/fontes.py             (modificar) FARM e farm()
    dota_export/__main__.py           (modificar) grava unidades, camps, ícones e modelos
    schemas/unidade.schema.json, unidades.schema.json, camps.schema.json
    tests/test_kv.py, test_jogo.py, test_habilidades.py, test_unidades.py, test_icones.py,
    tests/test_modelos.py, test_conferencia_unidades.py, test_conteudo_unidades.py
  content/
    unidades/<habilidade>.md          "o que isso muda para você", por habilidade (novo)
  app/
    package.json                      (modificar) playwright (dev) e script "posters"
    scripts/posters.ts                imagem parada de cada modelo (sem 3D)
    src/data/schemas.ts               (modificar) unidade, resumo, camps
    src/unidades/ficha.ts             funções puras: grade de números, crescimento, camps, grupos
    src/unidades/VisualizadorUnidade.tsx   a porta do 3D: modelo, imagem parada, erro e nova tentativa
    src/unidades/Cena3D.tsx           Three.js: modelo, animação parada, giro, luz
    src/unidades/materiais.ts         ajuste dos materiais do Dota (foscar)
    src/unidades/FichaUnidade.tsx     ficha completa da unidade
    src/unidades/UnidadesPage.tsx     tela Unidades do glossário
    src/unidades/UnidadeDoObjetivo.tsx  ficha (Roshan, Tormentor) ou tipos de camp no painel do mapa
    src/unidades/PaginaPoster.tsx     página usada só pelo script das imagens paradas
    src/unidades/unidades.css         estilos da ficha e da tela, só com tokens.css
    src/objectives/ObjectivePanel.tsx (modificar) prop `unidade` na aba Básico; exporta GradeNumeros
    src/map/MapPage.tsx               (modificar) passa <UnidadeDoObjetivo> ao painel
    src/glossary/GlossaryPage.tsx     (modificar) link para Unidades no topo da lista
    src/search/index.ts, search/SearchBox.tsx  (modificar) unidades e habilidades na busca
    src/App.tsx                       (modificar) rotas /glossario/unidades/:id? e /poster/:modelo
  docs/superpowers/verificacao/2026-10-06-fase1c-unidades.md   registro da verificação
```

---

### Task 1: Ler arquivos do jogo (KeyValues, Dota instalado, Source 2 Viewer CLI)

**Files:**
- Create: `export/dota_export/kv.py`, `export/dota_export/jogo.py`, `export/dota_export/ferramentas.py`, `export/tests/test_kv.py`, `export/tests/test_jogo.py`
- Modify: `.gitignore`

**Interfaces:**
- Produces: `kv.ler(texto: str) -> dict`; `jogo.DotaNaoEncontrado`; `jogo.VRF: Path`; `jogo.bibliotecas(steam: Path) -> list[Path]`; `jogo.vpk(steam: Path = STEAM_PADRAO) -> Path`; `jogo.vrf(*argumentos: str) -> str`; `jogo.listar(vpk, filtro, extensao=None) -> dict[str, str]` (caminho para CRC); `jogo.extrair(vpk, caminhos, destino, decompilar=False) -> None`; `jogo.textos(vpk) -> dict[str, dict]` com as chaves `unidades`, `habilidades`, `textos_pt`, `textos_en`; `ferramentas.conferir(conteudo: bytes) -> None`, `ferramentas.instalar() -> None`.

- [ ] **Step 1: Testes que falham**

```python
# export/tests/test_kv.py
import pytest

from dota_export import kv


def test_le_blocos_aninhados_e_ignora_comentarios():
    texto = '''
    "DOTAUnits"
    {
        // comentário
        "npc_dota_roshan"
        {
            "StatusHealth"  "6000"   // vida
            "AbilityValues" { "radius" { "value" "350" } }
        }
        "default_attack"  ""
    }'''
    assert kv.ler(texto) == {"DOTAUnits": {
        "npc_dota_roshan": {"StatusHealth": "6000", "AbilityValues": {"radius": {"value": "350"}}},
        "default_attack": ""}}


def test_chave_repetida_fica_com_o_ultimo_valor():
    assert kv.ler('"a" "1" "a" "2"') == {"a": "2"}


def test_chave_entre_aspas_nao_abre_bloco():
    assert kv.ler('"a" "{x}"') == {"a": "{x}"}


@pytest.mark.parametrize("texto", ['"a" { "b" "1"', "}", '{ "a" "1" }'])
def test_texto_mal_formado_falha(texto):
    with pytest.raises(ValueError):
        kv.ler(texto)
```

```python
# export/tests/test_jogo.py
from pathlib import Path

import pytest

from dota_export import ferramentas, jogo


def test_bibliotecas_le_o_libraryfolders(tmp_path):
    (tmp_path / "steamapps").mkdir()
    (tmp_path / "steamapps" / "libraryfolders.vdf").write_text(
        '"libraryfolders" { "0" { "path" "C:\\\\Steam" } "1" { "path" "D:\\\\SteamLibrary" "apps" { "570" "1" } } }',
        encoding="utf-8")
    assert jogo.bibliotecas(tmp_path) == [Path("C:/Steam"), Path("D:/SteamLibrary")]


def test_sem_dota_diz_onde_procurou(tmp_path, monkeypatch):
    monkeypatch.delenv("DOTA_VPK", raising=False)
    with pytest.raises(jogo.DotaNaoEncontrado, match="Dota 2 não encontrado. Procurei em:"):
        jogo.vpk(tmp_path)


def test_listar_le_caminho_e_crc(monkeypatch):
    saida = 'Added folder "x"\nmodels/a.vmdl_c CRC:00aa size:10\nmodels/b.vmdl_c CRC:00bb size:2\n'
    monkeypatch.setattr(jogo, "vrf", lambda *argumentos: saida)
    assert jogo.listar(Path("pak01_dir.vpk"), "models/") == {"models/a.vmdl_c": "00aa", "models/b.vmdl_c": "00bb"}


def test_hash_errado_do_vrf_falha():
    with pytest.raises(ValueError, match="hash do VRF 20.0 não confere"):
        ferramentas.conferir(b"outro arquivo")


def test_le_os_textos_do_dota_instalado():
    textos = jogo.textos(jogo.vpk())
    assert textos["unidades"]["DOTAUnits"]["npc_dota_roshan"]["StatusHealth"] == "6000"
    assert "npc_dota_roshan" in textos["textos_pt"]["lang"]["Tokens"]
    assert "DOTAAbilities" in textos["habilidades"]
```

- [ ] **Step 2: Rodar e ver falhar**

Run: `cd export && python -m pytest tests/test_kv.py tests/test_jogo.py -q`
Expected: FAIL (`dota_export.kv` não existe)

- [ ] **Step 3: Implementação**

```python
# export/dota_export/kv.py
"""Leitor de KeyValues em texto, o formato dos scripts e das traduções do Dota."""
import re
from collections.abc import Iterator

_TOKEN = re.compile(r'"((?:[^"\\]|\\.)*)"|([{}])|//[^\n]*')


def _tokens(texto: str) -> Iterator[tuple[str, str]]:
    for m in _TOKEN.finditer(texto):
        if m.group(1) is not None:
            yield "texto", m.group(1)
        elif m.group(2):
            yield m.group(2), ""


def ler(texto: str) -> dict:
    """Chave repetida no mesmo bloco fica com o último valor, como o jogo faz."""
    raiz: dict = {}
    pilha = [raiz]
    chave: str | None = None
    for tipo, valor in _tokens(texto):
        if tipo == "texto" and chave is None:
            chave = valor
        elif tipo == "texto":
            pilha[-1][chave] = valor
            chave = None
        elif tipo == "{":
            if chave is None:
                raise ValueError("bloco { sem chave")
            filho: dict = {}
            pilha[-1][chave] = filho
            pilha.append(filho)
            chave = None
        elif len(pilha) == 1:
            raise ValueError("} sem bloco aberto")
        else:
            pilha.pop()
    if len(pilha) != 1:
        raise ValueError("bloco sem }")
    return raiz
```

```python
# export/dota_export/jogo.py
"""Onde está o Dota 2 instalado e como ler os arquivos dele com o Source 2 Viewer CLI (só leitura)."""
import os
import subprocess
import tempfile
from pathlib import Path

from . import kv

STEAM_PADRAO = Path(r"C:\Program Files (x86)\Steam")
SUBCAMINHO_VPK = Path("steamapps/common/dota 2 beta/game/dota/pak01_dir.vpk")
VRF = Path(__file__).resolve().parents[1] / "ferramentas" / "vrf" / "Source2Viewer-CLI.exe"
TEMPO_LIMITE_S = 300
ARQUIVOS_TEXTO = {
    "unidades": "scripts/npc/npc_units.txt",
    "habilidades": "scripts/npc/npc_abilities.txt",
    "textos_pt": "resource/localization/abilities_brazilian.txt",
    "textos_en": "resource/localization/abilities_english.txt",
}


class DotaNaoEncontrado(RuntimeError):
    pass


def bibliotecas(steam: Path) -> list[Path]:
    arquivo = steam / "steamapps" / "libraryfolders.vdf"
    if not arquivo.exists():
        return [steam]
    pastas = kv.ler(arquivo.read_text(encoding="utf-8"))["libraryfolders"].values()
    return [Path(p["path"].replace("\\\\", "\\")) for p in pastas if isinstance(p, dict) and "path" in p]


def vpk(steam: Path = STEAM_PADRAO) -> Path:
    manual = os.environ.get("DOTA_VPK")
    candidatos = [Path(manual)] if manual else [b / SUBCAMINHO_VPK for b in bibliotecas(steam)]
    achado = next((c for c in candidatos if c.exists()), None)
    if achado is None:
        raise DotaNaoEncontrado(f"Dota 2 não encontrado. Procurei em: {', '.join(map(str, candidatos))}")
    return achado


def vrf(*argumentos: str) -> str:
    if not VRF.exists():
        raise FileNotFoundError(f"Source 2 Viewer CLI não encontrado em {VRF}. Rode: python -m dota_export.ferramentas")
    r = subprocess.run([str(VRF), *argumentos], capture_output=True, text=True, encoding="utf-8",
                       errors="replace", timeout=TEMPO_LIMITE_S)
    if r.returncode != 0:
        raise RuntimeError(f"vrf {' '.join(argumentos)}: {r.stderr.strip() or r.stdout[-500:]}")
    return r.stdout


def listar(arquivo_vpk: Path, filtro: str, extensao: str | None = None) -> dict[str, str]:
    """Caminho de cada arquivo do VPK que casa com o filtro e o CRC dele."""
    extra = ["-e", extensao] if extensao else []
    saida = {}
    for linha in vrf("-i", str(arquivo_vpk), "--vpk_list", "-f", filtro, *extra).splitlines():
        caminho, _, resto = linha.partition(" CRC:")
        if resto:
            saida[caminho.strip()] = resto.split()[0]
    return saida


def extrair(arquivo_vpk: Path, caminhos: list[str], destino: Path, decompilar: bool = False) -> None:
    vrf("-i", str(arquivo_vpk), "-o", str(destino), "-f", ",".join(caminhos), *(["-d"] if decompilar else []))


def textos(arquivo_vpk: Path) -> dict[str, dict]:
    with tempfile.TemporaryDirectory() as tmp:
        extrair(arquivo_vpk, list(ARQUIVOS_TEXTO.values()), Path(tmp))
        return {nome: kv.ler((Path(tmp) / caminho).read_text(encoding="utf-8"))
                for nome, caminho in ARQUIVOS_TEXTO.items()}
```

```python
# export/dota_export/ferramentas.py
"""python -m dota_export.ferramentas: baixa o Source 2 Viewer CLI na versão fixada e confere o hash."""
import hashlib
import io
import urllib.request
import zipfile

from . import jogo

VERSAO = "20.0"
URL = f"https://github.com/ValveResourceFormat/ValveResourceFormat/releases/download/{VERSAO}/cli-windows-x64.zip"
SHA256 = "d32ab327b8bbb42a2528866afb03bb582bdb779d0005488da32b90292afd3ff5"
TEMPO_LIMITE_S = 120


def conferir(conteudo: bytes) -> None:
    obtido = hashlib.sha256(conteudo).hexdigest()
    if obtido != SHA256:
        raise ValueError(f"hash do VRF {VERSAO} não confere: {obtido}")


def instalar() -> None:
    with urllib.request.urlopen(URL, timeout=TEMPO_LIMITE_S) as resposta:
        conteudo = resposta.read()
    conferir(conteudo)
    jogo.VRF.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(io.BytesIO(conteudo)) as pacote:
        pacote.extractall(jogo.VRF.parent)
    print(f"ok: {jogo.VRF}")


if __name__ == "__main__":
    instalar()
```

Em `.gitignore`, acrescente a linha `export/ferramentas/`.

- [ ] **Step 4: Rodar e ver passar**

Run: `cd export && python -m dota_export.ferramentas && python -m pytest tests/test_kv.py tests/test_jogo.py -q`
Expected: `ok: ...Source2Viewer-CLI.exe` e 9 passed. Se o Dota estiver em outra pasta, rode com `DOTA_VPK=<caminho do pak01_dir.vpk>`.

- [ ] **Step 5: Commit**

```bash
git add .gitignore export/dota_export/kv.py export/dota_export/jogo.py export/dota_export/ferramentas.py export/tests/test_kv.py export/tests/test_jogo.py
git commit -m "feat: read dota game files through source 2 viewer cli"
```

---

### Task 2: Habilidades (nome, descrição limpa, condições e valores)

**Files:**
- Create: `export/dota_export/habilidades.py`, `export/tests/test_habilidades.py`

**Interfaces:**
- Consumes: os dicionários de `jogo.textos()`
- Produces: `habilidades.Textos` (`pt`, `en`, `do_jogo(arquivos)`, `buscar(chave) -> tuple[str | None, bool]`, o `bool` diz se veio do inglês); `numero(texto) -> str`; `por_nivel(texto) -> str`; `valores_brutos(dados) -> dict[str, str]`; `descricao(bruta, brutos) -> tuple[str, str | None]` (texto e nome em inglês); `condicoes(dados) -> list[dict]`; `valores(id_, brutos, textos) -> list[dict]`; `habilidade(id_, dados, textos, icones) -> dict | None` (None quando o jogo não tem descrição, caso das habilidades internas).
- Formato da habilidade: `{id, nome, nome_en, descricao, notas: [str], condicoes: [{rotulo, valor}], valores: [{rotulo, valor}], icone: str | None, texto_em_ingles: bool, o_que_muda: None}`.

- [ ] **Step 1: Testes que falham**

```python
# export/tests/test_habilidades.py
import pytest

from dota_export import habilidades

TEXTOS = habilidades.Textos(
    pt={"dota_tooltip_ability_x_slam": "Porrada",
        "dota_tooltip_ability_x_slam_description": "Em inglês: <b><font color='#F2A93E'>Slam</font></b>\\n \\nBate no chão num raio de %radius%. Causa %bonus%%% a mais.",
        "dota_tooltip_ability_x_slam_radius": "RAIO:",
        "dota_tooltip_ability_x_slam_slow": "%RETARDO:",
        "dota_tooltip_ability_x_slam_note0": "Não acerta construções."},
    en={"dota_tooltip_ability_x_bolt": "Bolt", "dota_tooltip_ability_x_bolt_description": "Hits one target."})
SLAM = {"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_NO_TARGET", "AbilityUnitDamageType": "DAMAGE_TYPE_MAGICAL",
        "SpellDispellableType": "SPELL_DISPELLABLE_YES", "AbilityManaCost": "0", "AbilityCooldown": "10.0",
        "AbilityCastPoint": "0.47 0.47 0.47 0.47",
        "AbilityValues": {"radius": {"value": "350"}, "slow": "50", "bonus": "100", "sem_rotulo": "7"}}


@pytest.mark.parametrize(("bruto", "esperado"), [
    ("10.0", "10"), ("0.47 0.47", "0,47"), ("8.0 9 10 12", "8 / 9 / 10 / 12"), ("-50", "-50"), ("abc", "abc"),
])
def test_por_nivel(bruto, esperado):
    assert habilidades.por_nivel(bruto) == esperado


def test_descricao_tira_o_nome_em_ingles_as_tags_e_troca_variaveis():
    bruta = TEXTOS.pt["dota_tooltip_ability_x_slam_description"]
    assert habilidades.descricao(bruta, {"radius": "350", "bonus": "100"}) == (
        "Bate no chão num raio de 350. Causa 100% a mais.", "Slam")


def test_condicoes_na_ordem_ativacao_numeros_e_categorias():
    assert habilidades.condicoes(SLAM) == [
        {"rotulo": "Ativação", "valor": "sem alvo"},
        {"rotulo": "Recarga", "valor": "10 s"},
        {"rotulo": "Tempo de conjuração", "valor": "0,47 s"},
        {"rotulo": "Dano", "valor": "mágico"},
        {"rotulo": "Dissipar", "valor": "sai com dissipação básica"},
    ]


def test_passiva_que_atravessa_imunidade_e_e_desligada_por_quebra():
    dados = {"AbilityBehavior": "DOTA_ABILITY_BEHAVIOR_PASSIVE", "SpellImmunityType": "SPELL_IMMUNITY_ENEMIES_YES",
             "SpellDispellableType": "SPELL_DISPELLABLE_YES_STRONG", "IsBreakable": "1"}
    assert habilidades.condicoes(dados) == [
        {"rotulo": "Ativação", "valor": "passiva"},
        {"rotulo": "Imunidade a magia", "valor": "atravessa imunidade a magia"},
        {"rotulo": "Dissipar", "valor": "só sai com dissipação forte"},
        {"rotulo": "Quebra", "valor": "desligada por quebra"},
    ]


def test_habilidade_completa_com_valores_rotulados_e_icone():
    h = habilidades.habilidade("x_slam", SLAM, TEXTOS, frozenset({"x_slam"}))
    assert h["nome"] == "Porrada" and h["nome_en"] == "Slam" and h["icone"] == "x_slam"
    assert h["valores"] == [{"rotulo": "Raio", "valor": "350"}, {"rotulo": "Retardo", "valor": "50%"}]
    assert h["notas"] == ["Não acerta construções."]
    assert h["texto_em_ingles"] is False and h["o_que_muda"] is None


def test_sem_texto_em_portugues_usa_o_ingles_e_marca():
    h = habilidades.habilidade("x_bolt", {}, TEXTOS, frozenset())
    assert (h["nome"], h["descricao"], h["texto_em_ingles"], h["icone"]) == ("Bolt", "Hits one target.", True, None)


def test_habilidade_sem_descricao_no_jogo_nao_aparece():
    assert habilidades.habilidade("neutral_upgrade", {}, TEXTOS, frozenset()) is None
```

- [ ] **Step 2: Rodar e ver falhar**

Run: `cd export && python -m pytest tests/test_habilidades.py -q`
Expected: FAIL (`dota_export.habilidades` não existe)

- [ ] **Step 3: Implementação**

```python
# export/dota_export/habilidades.py
"""Habilidades das unidades: nome, descrição limpa, condições e valores, no texto oficial em português."""
import re
from dataclasses import dataclass

PREFIXO_INGLES = re.compile(r"^Em inglês:\s*<b>(?:<font[^>]*>)?(.*?)(?:</font>)?</b>(?:\s|\\n)*", re.S)
TAG = re.compile(r"<[^>]+>")
VARIAVEL = re.compile(r"%(\w+)%")
ATIVACAO = {
    "DOTA_ABILITY_BEHAVIOR_PASSIVE": "passiva", "DOTA_ABILITY_BEHAVIOR_AURA": "aura",
    "DOTA_ABILITY_BEHAVIOR_NO_TARGET": "sem alvo", "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET": "em uma unidade",
    "DOTA_ABILITY_BEHAVIOR_POINT": "num ponto do chão", "DOTA_ABILITY_BEHAVIOR_CHANNELLED": "canalizada",
    "DOTA_ABILITY_BEHAVIOR_AUTOCAST": "automática", "DOTA_ABILITY_BEHAVIOR_TOGGLE": "liga e desliga",
}
NUMERICAS = (("AbilityCooldown", "Recarga", " s"), ("AbilityManaCost", "Custo de mana", ""),
             ("AbilityCastRange", "Alcance", ""), ("AbilityCastPoint", "Tempo de conjuração", " s"),
             ("AbilityDuration", "Duração", " s"), ("AbilityChannelTime", "Canalização", " s"))
CATEGORICAS = (
    ("AbilityUnitDamageType", "Dano", {"DAMAGE_TYPE_MAGICAL": "mágico", "DAMAGE_TYPE_PHYSICAL": "físico", "DAMAGE_TYPE_PURE": "puro"}),
    ("SpellImmunityType", "Imunidade a magia", {
        "SPELL_IMMUNITY_ENEMIES_YES": "atravessa imunidade a magia", "SPELL_IMMUNITY_ENEMIES_NO": "não atravessa imunidade a magia",
        "SPELL_IMMUNITY_ALLIES_YES": "afeta aliados imunes a magia", "SPELL_IMMUNITY_ALLIES_NO": "não afeta aliados imunes a magia"}),
    ("SpellDispellableType", "Dissipar", {
        "SPELL_DISPELLABLE_YES": "sai com dissipação básica", "SPELL_DISPELLABLE_YES_STRONG": "só sai com dissipação forte",
        "SPELL_DISPELLABLE_NO": "não pode ser dissipada"}),
)
MAX_NOTAS = 10


@dataclass(frozen=True)
class Textos:
    pt: dict[str, str]
    en: dict[str, str]

    @classmethod
    def do_jogo(cls, arquivos: dict[str, dict]) -> "Textos":
        def tokens(nome: str) -> dict[str, str]:
            return {k.lower(): v for k, v in arquivos[nome]["lang"]["Tokens"].items()}
        return cls(tokens("textos_pt"), tokens("textos_en"))

    def buscar(self, chave: str) -> tuple[str | None, bool]:
        chave = chave.lower()
        if chave in self.pt:
            return self.pt[chave], False
        return self.en.get(chave), chave in self.en


def numero(texto: str) -> str:
    try:
        valor = float(texto)
    except ValueError:
        return texto
    return str(int(valor)) if valor.is_integer() else f"{valor:g}".replace(".", ",")


def por_nivel(texto: str) -> str:
    """'8.0 9 10 12' vira '8 / 9 / 10 / 12'; níveis iguais viram um número só."""
    niveis = [numero(t) for t in texto.split()]
    return niveis[0] if len(set(niveis)) == 1 else " / ".join(niveis)


def valores_brutos(dados: dict) -> dict[str, str]:
    brutos = {}
    for chave, entrada in dados.get("AbilityValues", {}).items():
        valor = entrada.get("value") if isinstance(entrada, dict) else entrada
        if valor is not None:
            brutos[chave] = valor
    return brutos


def descricao(bruta: str, brutos: dict[str, str]) -> tuple[str, str | None]:
    """Tira o nome em inglês do começo, troca %variavel% pelo valor, tira as tags."""
    prefixo = PREFIXO_INGLES.match(bruta)
    texto = bruta[prefixo.end():] if prefixo else bruta
    por_chave = {k.lower(): v for k, v in brutos.items()}
    texto = VARIAVEL.sub(lambda m: por_nivel(por_chave[m.group(1).lower()]) if m.group(1).lower() in por_chave else m.group(0), texto)
    texto = TAG.sub("", texto.replace("\\n", "\n")).replace("%%", "%")
    return re.sub(r"\n\s*\n+", "\n\n", texto).strip(), prefixo.group(1) if prefixo else None


def _positivo(texto: str | None) -> bool:
    try:
        return texto is not None and any(float(t) > 0 for t in texto.split())
    except ValueError:
        return False


def condicoes(dados: dict) -> list[dict]:
    comportamentos = [c.strip() for c in dados.get("AbilityBehavior", "").split("|")]
    ativacao = [ATIVACAO[c] for c in comportamentos if c in ATIVACAO]
    linhas = [("Ativação", ", ".join(ativacao))] if ativacao else []
    linhas += [(rotulo, por_nivel(dados[chave]) + unidade) for chave, rotulo, unidade in NUMERICAS if _positivo(dados.get(chave))]
    linhas += [(rotulo, mapa[dados[chave]]) for chave, rotulo, mapa in CATEGORICAS if dados.get(chave) in mapa]
    if dados.get("IsBreakable") == "1":
        linhas.append(("Quebra", "desligada por quebra"))
    return [{"rotulo": r, "valor": v} for r, v in linhas]


def _rotulo(bruto: str) -> tuple[str, str]:
    """'%RETARDO:' vira ('Retardo', '%')."""
    nome = bruto.strip("%: ").lower()
    return nome[:1].upper() + nome[1:], "%" if bruto.startswith("%") else ""


def valores(id_: str, brutos: dict[str, str], textos: Textos) -> list[dict]:
    saida = []
    for chave, bruto in brutos.items():
        rotulo, _ = textos.buscar(f"dota_tooltip_ability_{id_}_{chave}")
        if rotulo:
            nome, sufixo = _rotulo(rotulo)
            saida.append({"rotulo": nome, "valor": por_nivel(bruto) + sufixo})
    return saida


def _notas(id_: str, brutos: dict[str, str], textos: Textos) -> list[str]:
    brutas = (textos.buscar(f"dota_tooltip_ability_{id_}_note{i}")[0] for i in range(MAX_NOTAS))
    return [descricao(n, brutos)[0] for n in brutas if n]


def habilidade(id_: str, dados: dict, textos: Textos, icones: frozenset[str]) -> dict | None:
    bruta, em_ingles = textos.buscar(f"dota_tooltip_ability_{id_}_description")
    if bruta is None:
        return None
    brutos = valores_brutos(dados)
    texto, nome_en = descricao(bruta, brutos)
    nome, _ = textos.buscar(f"dota_tooltip_ability_{id_}")
    return {"id": id_, "nome": nome or id_, "nome_en": nome_en, "descricao": texto,
            "notas": _notas(id_, brutos, textos), "condicoes": condicoes(dados),
            "valores": valores(id_, brutos, textos), "icone": id_ if id_ in icones else None,
            "texto_em_ingles": em_ingles, "o_que_muda": None}
```

- [ ] **Step 4: Rodar e ver passar**

Run: `cd export && python -m pytest tests/test_habilidades.py -q`
Expected: 11 passed

- [ ] **Step 5: Commit**

```bash
git add export/dota_export/habilidades.py export/tests/test_habilidades.py
git commit -m "feat: export unit abilities with conditions and portuguese text"
```

---

### Task 3: Fichas das unidades e tipos de camp

**Files:**
- Create: `export/dota_export/unidades.py`, `export/schemas/unidade.schema.json`, `export/schemas/unidades.schema.json`, `export/schemas/camps.schema.json`, `export/tests/test_unidades.py`
- Modify: `export/dota_export/fontes.py`

**Interfaces:**
- Consumes: `jogo.textos`, `habilidades.*`, `fontes.FARM`
- Produces: `fontes.FARM: Path`, `fontes.farm() -> dict`; `unidades.Jogo` (`unidades`, `habilidades`, `textos`, `icones`, `dos_arquivos(arquivos, icones)`, `dados(id_jogo)`); `unidades.ids_de_lane() -> dict[str, str]`; `unidades.tipos_de_camp(farm) -> list[dict]`; `unidades.ficha(jogo, id_jogo, grupo, papel) -> dict`; `unidades.todas(jogo, farm, conteudo) -> list[dict]`; `unidades.indice(fichas, tipos) -> list[dict]`; `unidades.icones_usados(fichas) -> set[str]`; `unidades.caminhos_de_modelo(jogo, fichas) -> list[str]`.
- Formato de `unidades/<id>.json`: `{id, id_jogo, nome, grupo: "chefe"|"lane"|"selva", papel, lado: "radiant"|"dire"|"neutro", numeros: {vida|null, regeneracao, mana, regeneracao_mana, armadura, resistencia_magica, dano_min|null, dano_max|null, intervalo_ataque|null, alcance_ataque|null, ataque: "corpo a corpo"|"à distância"|"sem ataque", velocidade, ouro_min, ouro_max, xp, visao_dia, visao_noite}, habilidades: [Habilidade], crescimento: null | {tipo: "por_nivel", a_cada_s, vida, dano, armadura, vel_ataque, ouro, xp, nivel_max} | {tipo: "tabela", colunas: [str], linhas: [[number]], fonte}, modelo: str|null, patch, fontes}`.
- `unidades.json`: `[{id, nome, grupo, papel, lado, modelo, camps: [id do tipo], habilidades: [{id, nome, nome_en}]}]`. `camps.json`: `[{id, nome, tamanho: "small"|"medium"|"large"|"ancient", terreno: "seco"|"inundado", unidades: [{id, qtd}], ouro: [min, max], xp}]`.

- [ ] **Step 1: Testes que falham**

```python
# export/tests/test_unidades.py
from collections import Counter

import pytest

from dota_export import fontes, icones, jogo, unidades, validar


@pytest.fixture(scope="module")
def base():
    arquivo = jogo.vpk()
    return unidades.Jogo.dos_arquivos(jogo.textos(arquivo), icones.disponiveis(arquivo))


@pytest.fixture(scope="module")
def fichas(base):
    return unidades.todas(base, fontes.farm(), [])


def _por_id(fichas, id_):
    return next(f for f in fichas if f["id"] == id_)


def test_roshan_tem_os_numeros_do_glossario_do_jogo(fichas):
    n = _por_id(fichas, "roshan")["numeros"]
    assert (n["vida"], n["regeneracao"], n["ouro_min"], n["ouro_max"], n["xp"], n["intervalo_ataque"], n["dano_min"],
            n["alcance_ataque"], n["velocidade"], n["armadura"], n["resistencia_magica"]) == (
        6000, 20, 200, 290, 400, 2, 75, 150, 270, 30, 55)


def test_habilidades_do_roshan_em_portugues_na_ordem_do_jogo(fichas):
    nomes = [h["nome"] for h in _por_id(fichas, "roshan")["habilidades"]]
    assert nomes == ["Rugido Vingativo", "Porrada", "Força do Imortal", "Pancada", "Bloqueio de Magias", "Arremessar"]


def test_porrada_do_roshan(fichas):
    slam = next(h for h in _por_id(fichas, "roshan")["habilidades"] if h["id"] == "roshan_slam")
    assert slam["nome_en"] == "Slam" and slam["icone"] == "roshan_slam"
    assert slam["descricao"].endswith("A Porrada causa 100% de dano a mais contra criaturas.")
    assert {"rotulo": "Recarga", "valor": "10 s"} in slam["condicoes"]
    assert {"rotulo": "Retardo", "valor": "50%"} in slam["valores"]


def test_cobertura_do_741(fichas):
    assert Counter(f["grupo"] for f in fichas) == {"chefe": 2, "lane": 24, "selva": 45}
    assert all(f["modelo"] for f in fichas)
    assert len({f["modelo"] for f in fichas}) == 59
    tipos = unidades.tipos_de_camp(fontes.farm())
    assert len(tipos) == 26
    ids = {f["id"] for f in fichas}
    assert all(u["id"] in ids for t in tipos for u in t["unidades"])


def test_tormentor_sem_vida_fixa_e_com_tabela_do_escudo(fichas):
    t = _por_id(fichas, "tormentor")
    assert t["nome"] == "Tormenta"
    assert t["numeros"]["vida"] is None and t["numeros"]["ataque"] == "sem ataque" and t["numeros"]["dano_min"] is None
    assert t["crescimento"]["tipo"] == "tabela" and t["crescimento"]["linhas"][0][:2] == [20, 4000]


def test_selva_cresce_a_cada_7_30_e_o_crescimento_nao_vira_habilidade(fichas):
    c = _por_id(fichas, "kobold")["crescimento"]
    assert (c["tipo"], c["a_cada_s"], c["vida"], c["armadura"], c["nivel_max"]) == ("por_nivel", 450, 30, 0.5, 30)
    internas = {"neutral_upgrade", "roshan_inherent_buffs", "miniboss_inherent_buffs"}
    assert not any(h["id"] in internas for f in fichas for h in f["habilidades"])


def test_creep_de_lane_super_e_mega(fichas):
    mega = _por_id(fichas, "creep_badguys_melee_upgraded_mega")
    assert mega["lado"] == "dire" and mega["papel"] == "creep corpo a corpo, mega, Dire"
    assert _por_id(fichas, "goodguys_siege")["papel"] == "creep de cerco, normal, Radiant"


def test_fichas_indice_e_camps_validos(fichas):
    tipos = unidades.tipos_de_camp(fontes.farm())
    for f in fichas:
        validar.validar("unidade", f)
    indice = unidades.indice(fichas, tipos)
    validar.validar("unidades", indice)
    validar.validar("camps", tipos)
    kobold = next(u for u in indice if u["id"] == "kobold")
    assert kobold["camps"] == ["kobold"] and kobold["habilidades"][0]["nome"]


def test_conteudo_de_habilidade_inexistente_falha(base):
    texto = {"id": "nao_existe", "secoes": {"basico": "x", "avancado": None}, "fontes": ["f"], "origem": {"basico": None, "avancado": None}}
    with pytest.raises(ValueError, match="nao_existe"):
        unidades.todas(base, fontes.farm(), [texto])
```

- [ ] **Step 2: Rodar e ver falhar**

Run: `cd export && python -m pytest tests/test_unidades.py -q`
Expected: FAIL (`dota_export.unidades` não existe; `icones` vem na Task 4, então crie agora só `icones.disponiveis` como está na Task 4, Step 3, e o resto do `icones.py` na Task 4)

- [ ] **Step 3: Implementação**

Em `fontes.py`, acrescente (o `import json` vai para o topo):

```python
FARM = WORK / "farm_mechanics_corrigido.json"


def farm() -> dict:
    return json.loads(FARM.read_text(encoding="utf-8"))
```

```python
# export/dota_export/unidades.py
"""Fichas das unidades (Roshan, Tormentor, creeps de lane e selva) lidas dos arquivos do jogo."""
import re
from dataclasses import dataclass
from pathlib import Path

from . import habilidades

PATCH = "7.41"
FONTE_JOGO = "Arquivos do Dota 2 instalado (scripts/npc/npc_units.txt, npc_abilities.txt, abilities_brazilian.txt)"
FONTE_TABELA = "dota-imortal/work/farm_mechanics_corrigido.json (fórmulas do datamine 7.41f)"
BASE = "npc_dota_units_base"
CRESCIMENTO = "neutral_upgrade"
CHEFES = {"npc_dota_roshan": "roshan", "npc_dota_miniboss": "tormentor"}
VARIANTES = {"": "normal", "_upgraded": "super", "_upgraded_mega": "mega"}
LADOS_LANE = {"goodguys": "Radiant", "badguys": "Dire"}
TIPOS_LANE = {"melee": "corpo a corpo", "ranged": "à distância", "flagbearer": "porta-bandeira"}
TIME = {"DOTA_TEAM_GOODGUYS": "radiant", "DOTA_TEAM_BADGUYS": "dire"}
ATAQUE = {"DOTA_UNIT_CAP_MELEE_ATTACK": "corpo a corpo", "DOTA_UNIT_CAP_RANGED_ATTACK": "à distância",
          "DOTA_UNIT_CAP_NO_ATTACK": "sem ataque"}
NUMEROS = {"vida": "StatusHealth", "regeneracao": "StatusHealthRegen", "mana": "StatusMana",
           "regeneracao_mana": "StatusManaRegen", "armadura": "ArmorPhysical", "resistencia_magica": "MagicalResistance",
           "dano_min": "AttackDamageMin", "dano_max": "AttackDamageMax", "intervalo_ataque": "AttackRate",
           "alcance_ataque": "AttackRange", "velocidade": "MovementSpeed", "ouro_min": "BountyGoldMin",
           "ouro_max": "BountyGoldMax", "xp": "BountyXP", "visao_dia": "VisionDaytimeRange",
           "visao_noite": "VisionNighttimeRange"}
SO_DE_QUEM_ATACA = ("dano_min", "dano_max", "intervalo_ataque", "alcance_ataque")
COLUNAS_TABELA = {
    "roshan": {"minuto": "Minuto", "hp": "Vida", "armadura": "Armadura", "dano": "Dano", "xp_bounty": "XP",
               "slam_dano": "Dano da Porrada", "roar_dano": "Dano do Rugido", "throw_pct_hp_atual": "Arremesso (% da vida)"},
    "tormentor": {"minuto": "Minuto", "barreira": "Escudo", "regen_por_s": "Regeneração do escudo por s",
                  "reflect_pct": "Reflexão (%)", "shining_dps": "Dano por s da aura"},
}


@dataclass(frozen=True)
class Jogo:
    unidades: dict
    habilidades: dict
    textos: habilidades.Textos
    icones: frozenset[str]

    @classmethod
    def dos_arquivos(cls, arquivos: dict[str, dict], icones: frozenset[str]) -> "Jogo":
        return cls(arquivos["unidades"]["DOTAUnits"], arquivos["habilidades"]["DOTAAbilities"],
                   habilidades.Textos.do_jogo(arquivos), icones)

    def dados(self, id_jogo: str) -> dict:
        """O jogo completa cada unidade com os valores de npc_dota_units_base."""
        return {**self.unidades[BASE], **self.unidades[id_jogo]}


def ids_de_lane() -> dict[str, str]:
    """Id do jogo de cada creep de lane e o papel dele."""
    saida = {}
    for time, lado in LADOS_LANE.items():
        for sufixo, variante in VARIANTES.items():
            for tipo, rotulo in TIPOS_LANE.items():
                saida[f"npc_dota_creep_{time}_{tipo}{sufixo}"] = f"creep {rotulo}, {variante}, {lado}"
            saida[f"npc_dota_{time}_siege{sufixo}"] = f"creep de cerco, {variante}, {lado}"
    return saida


def _slug(nome: str) -> str:
    return re.sub(r"[^a-z0-9]+", "_", nome.lower()).strip("_")


def tipos_de_camp(farm: dict) -> list[dict]:
    return [{"id": _slug(c["camp"]), "nome": c["camp"], "tamanho": c["tamanho"], "terreno": c["terreno"],
             "unidades": [{"id": u["unidade"], "qtd": u["qtd"]} for u in c["composicao"]],
             "ouro": [c["ouro_datamine"]["min"], c["ouro_datamine"]["max"]], "xp": c["xp_total"]}
            for c in farm["valores"]["camps_neutros"]]


def _numero(texto: str) -> int | float:
    valor = float(texto)
    return int(valor) if valor.is_integer() else valor


def numeros(dados: dict) -> dict:
    saida: dict = {nome: _numero(dados[chave]) for nome, chave in NUMEROS.items()}
    saida["ataque"] = ATAQUE[dados["AttackCapabilities"]]
    if saida["vida"] <= 1:  # o jogo define a vida do Tormentor por código; o escudo vem da tabela
        saida["vida"] = None
    if saida["ataque"] == "sem ataque":
        saida |= dict.fromkeys(SO_DE_QUEM_ATACA)
    return saida


def _ids_de_habilidade(dados: dict) -> list[str]:
    return [dados[f"Ability{i}"] for i in range(1, 33) if dados.get(f"Ability{i}")]


def _crescimento_por_nivel(jogo: Jogo) -> dict:
    v = habilidades.valores_brutos(jogo.habilidades[CRESCIMENTO])
    return {"tipo": "por_nivel", "a_cada_s": _numero(v["increase_time"]), "vida": _numero(v["increase_health"]),
            "dano": _numero(v["increase_damage"]), "armadura": _numero(v["increase_armor"]),
            "vel_ataque": _numero(v["increase_aspd"]), "ouro": _numero(v["increase_gold"]),
            "xp": _numero(v["increase_xp"]), "nivel_max": _numero(v["max_level"])}


def _tabela(id_curto: str, farm: dict) -> dict:
    colunas = COLUNAS_TABELA[id_curto]
    linhas = farm["valores"]["tormentor_e_roshan"][f"{id_curto}_por_minuto"]
    return {"tipo": "tabela", "colunas": list(colunas.values()),
            "linhas": [[linha[c] for c in colunas] for linha in linhas], "fonte": FONTE_TABELA}


def _id_curto(id_jogo: str) -> str:
    return CHEFES.get(id_jogo) or id_jogo.removeprefix("npc_dota_neutral_").removeprefix("npc_dota_")


def ficha(jogo: Jogo, id_jogo: str, grupo: str, papel: str) -> dict:
    dados = jogo.dados(id_jogo)
    ids = _ids_de_habilidade(dados)
    lista = [h for i in ids if i != CRESCIMENTO
             if (h := habilidades.habilidade(i, jogo.habilidades.get(i, {}), jogo.textos, jogo.icones))]
    return {"id": _id_curto(id_jogo), "id_jogo": id_jogo, "nome": jogo.textos.buscar(id_jogo)[0] or id_jogo,
            "grupo": grupo, "papel": papel, "lado": TIME.get(dados["TeamName"], "neutro"),
            "numeros": numeros(dados), "habilidades": lista,
            "crescimento": _crescimento_por_nivel(jogo) if CRESCIMENTO in ids else None,
            "modelo": Path(dados["Model"]).stem if dados.get("Model") else None,
            "patch": PATCH, "fontes": [FONTE_JOGO]}


def _unidades_da_selva(tipos: list[dict]) -> list[str]:
    return list(dict.fromkeys(u["id"] for t in tipos for u in t["unidades"]))


def _com_o_que_muda(fichas: list[dict], conteudo: list[dict]) -> list[dict]:
    textos = {c["id"]: {"texto": c["secoes"]["basico"], "fontes": c["fontes"], "origem": c["origem"]["basico"]}
              for c in conteudo}
    sobrando = set(textos) - {h["id"] for f in fichas for h in f["habilidades"]}
    if sobrando:
        raise ValueError(f"conteúdo de habilidade que nenhuma unidade tem: {sorted(sobrando)}")
    return [f | {"habilidades": [h | {"o_que_muda": textos.get(h["id"])} for h in f["habilidades"]]} for f in fichas]


def todas(jogo: Jogo, farm: dict, conteudo: list[dict]) -> list[dict]:
    tipos = tipos_de_camp(farm)
    chefes = [ficha(jogo, id_jogo, "chefe", "chefe neutro") | {"crescimento": _tabela(curto, farm)}
              for id_jogo, curto in CHEFES.items()]
    lane = [ficha(jogo, id_jogo, "lane", papel) for id_jogo, papel in ids_de_lane().items()]
    selva = [ficha(jogo, f"npc_dota_neutral_{u}", "selva", "monstro da selva") for u in _unidades_da_selva(tipos)]
    return _com_o_que_muda([*chefes, *lane, *selva], conteudo)


def indice(fichas: list[dict], tipos: list[dict]) -> list[dict]:
    camps: dict[str, list[str]] = {}
    for t in tipos:
        for u in t["unidades"]:
            camps.setdefault(u["id"], []).append(t["id"])
    campos = ("id", "nome", "grupo", "papel", "lado", "modelo")
    return [{c: f[c] for c in campos} | {
        "camps": camps.get(f["id"], []),
        "habilidades": [{"id": h["id"], "nome": h["nome"], "nome_en": h["nome_en"]} for h in f["habilidades"]],
    } for f in fichas]


def icones_usados(fichas: list[dict]) -> set[str]:
    return {h["icone"] for f in fichas for h in f["habilidades"] if h["icone"]}


def caminhos_de_modelo(jogo: Jogo, fichas: list[dict]) -> list[str]:
    caminhos = sorted({jogo.dados(f["id_jogo"])["Model"] for f in fichas if f["modelo"]})
    if len({Path(c).stem for c in caminhos}) != len(caminhos):
        raise ValueError("dois modelos com o mesmo nome de arquivo; o app usa o nome como id")
    return caminhos
```

```json
// export/schemas/unidade.schema.json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "$defs": {
    "rv": {"type": "object", "required": ["rotulo", "valor"],
      "properties": {"rotulo": {"type": "string", "minLength": 1}, "valor": {"type": "string", "minLength": 1}}},
    "num": {"type": ["number", "null"]},
    "habilidade": {"type": "object",
      "required": ["id", "nome", "nome_en", "descricao", "notas", "condicoes", "valores", "icone", "texto_em_ingles", "o_que_muda"],
      "properties": {
        "descricao": {"type": "string", "minLength": 1, "not": {"pattern": "%\\w+%|<[a-zA-Z/]"}},
        "notas": {"type": "array", "items": {"type": "string"}},
        "condicoes": {"type": "array", "items": {"$ref": "#/$defs/rv"}},
        "valores": {"type": "array", "items": {"$ref": "#/$defs/rv"}},
        "icone": {"type": ["string", "null"]},
        "texto_em_ingles": {"type": "boolean"},
        "o_que_muda": {"oneOf": [{"type": "null"}, {"type": "object", "required": ["texto", "fontes", "origem"],
          "properties": {"texto": {"type": "string", "minLength": 1}, "fontes": {"type": "array", "minItems": 1}}}]}}}
  },
  "type": "object",
  "required": ["id", "id_jogo", "nome", "grupo", "papel", "lado", "numeros", "habilidades", "crescimento", "modelo", "patch", "fontes"],
  "properties": {
    "grupo": {"enum": ["chefe", "lane", "selva"]},
    "lado": {"enum": ["radiant", "dire", "neutro"]},
    "numeros": {"type": "object",
      "required": ["vida", "regeneracao", "mana", "regeneracao_mana", "armadura", "resistencia_magica", "dano_min", "dano_max",
                   "intervalo_ataque", "alcance_ataque", "ataque", "velocidade", "ouro_min", "ouro_max", "xp", "visao_dia", "visao_noite"],
      "properties": {"vida": {"$ref": "#/$defs/num"}, "dano_min": {"$ref": "#/$defs/num"}, "dano_max": {"$ref": "#/$defs/num"},
        "intervalo_ataque": {"$ref": "#/$defs/num"}, "alcance_ataque": {"$ref": "#/$defs/num"},
        "ataque": {"enum": ["corpo a corpo", "à distância", "sem ataque"]}}},
    "habilidades": {"type": "array", "items": {"$ref": "#/$defs/habilidade"}},
    "crescimento": {"oneOf": [
      {"type": "null"},
      {"type": "object", "required": ["tipo", "a_cada_s", "vida", "dano", "armadura", "vel_ataque", "ouro", "xp", "nivel_max"],
        "properties": {"tipo": {"const": "por_nivel"}}},
      {"type": "object", "required": ["tipo", "colunas", "linhas", "fonte"],
        "properties": {"tipo": {"const": "tabela"}, "linhas": {"type": "array", "items": {"type": "array", "items": {"type": "number"}}}}}]},
    "modelo": {"type": ["string", "null"]},
    "patch": {"const": "7.41"},
    "fontes": {"type": "array", "minItems": 1}
  }
}
```

```json
// export/schemas/unidades.schema.json
{"$schema": "https://json-schema.org/draft/2020-12/schema", "type": "array", "minItems": 71,
 "items": {"type": "object", "required": ["id", "nome", "grupo", "papel", "lado", "modelo", "camps", "habilidades"],
   "properties": {"grupo": {"enum": ["chefe", "lane", "selva"]}, "camps": {"type": "array", "items": {"type": "string"}},
     "habilidades": {"type": "array", "items": {"type": "object", "required": ["id", "nome", "nome_en"]}}}}}
```

```json
// export/schemas/camps.schema.json
{"$schema": "https://json-schema.org/draft/2020-12/schema", "type": "array", "minItems": 26,
 "items": {"type": "object", "required": ["id", "nome", "tamanho", "terreno", "unidades", "ouro", "xp"],
   "properties": {"tamanho": {"enum": ["small", "medium", "large", "ancient"]}, "terreno": {"enum": ["seco", "inundado"]},
     "unidades": {"type": "array", "minItems": 1, "items": {"type": "object", "required": ["id", "qtd"]}},
     "ouro": {"type": "array", "minItems": 2, "maxItems": 2}}}}
```

(Os comentários `// export/schemas/...` acima só indicam o arquivo; não vão dentro do JSON.)

- [ ] **Step 4: Rodar e ver passar**

Run: `cd export && python -m pytest tests/test_unidades.py -q`
Expected: 9 passed

- [ ] **Step 5: Commit**

```bash
git add export/dota_export/unidades.py export/dota_export/fontes.py export/dota_export/icones.py export/schemas/unidade.schema.json export/schemas/unidades.schema.json export/schemas/camps.schema.json export/tests/test_unidades.py
git commit -m "feat: export unit sheets, growth and camp types from game files"
```

---

### Task 4: Ícones e modelos 3D

**Files:**
- Create: `export/dota_export/icones.py` (completar), `export/dota_export/modelos.py`, `export/tests/test_icones.py`, `export/tests/test_modelos.py`

**Interfaces:**
- Consumes: `jogo.listar`, `jogo.extrair`, `jogo.vrf`
- Produces: `icones.disponiveis(vpk) -> frozenset[str]`, `icones.atualizar(vpk, ids, destino) -> None`; `modelos.LIMITE_BYTES`, `modelos.LIMITE_TOTAL_BYTES`, `modelos.nome(caminho) -> str`, `modelos.animacoes(glb) -> list[str]`, `modelos.escolher_parada(nomes) -> str | None`, `modelos.exportar(vpk, caminho, destino) -> None` (textura de 512 px; refaz com 256 px se passar de 400 KB), `modelos.otimizar(origem, saida, textura="512") -> None`, `modelos.atualizar(vpk, caminhos, destino) -> None`, `modelos.conferir_tamanhos(destino, nomes) -> int` (total em bytes; falha acima dos limites).

- [ ] **Step 1: Testes que falham**

```python
# export/tests/test_icones.py
from PIL import Image

from dota_export import icones, jogo


def test_icones_disponiveis_e_gravados_em_64px(tmp_path):
    arquivo = jogo.vpk()
    disponiveis = icones.disponiveis(arquivo)
    assert {"roshan_slam", "black_dragon_fireball"} <= disponiveis
    assert "neutral_upgrade" not in disponiveis
    icones.atualizar(arquivo, {"roshan_slam", "black_dragon_fireball"}, tmp_path)
    with Image.open(tmp_path / "roshan_slam.webp") as imagem:
        assert imagem.size == (64, 64)
```

```python
# export/tests/test_modelos.py
import json
import struct

import pytest

from dota_export import jogo, modelos


def _glb(gltf: dict) -> bytes:
    corpo = json.dumps(gltf).encode()
    corpo += b" " * (-len(corpo) % 4)
    return struct.pack("<III", 0x46546C67, 2, 20 + len(corpo)) + struct.pack("<II", len(corpo), 0x4E4F534A) + corpo


@pytest.mark.parametrize(("nomes", "esperado"), [
    (["roshan_run", "roshan_idle", "roshan_idle_spin"], "roshan_idle"),
    (["attack", "idle", "idle_longer"], "idle"),
    (["divine_sentinel_cube_spawn", "divine_sentinel_cube_idle_loop"], "divine_sentinel_cube_idle_loop"),
    (["tadpole_idle_CAPTURE", "tadpole_idle_var1", "tadpole_idle_long"], "tadpole_idle_var1"),
    (["witchdoctor_idle_portrait", "witchdoctor_idle_anim", "bonkers_witchdoctor_idle_anim"], "witchdoctor_idle_anim"),
    (["n_creep_vulture_a_idle_channel", "n_creep_vulture_a_idle_02", "n_creep_vulture_a_idle_01"], "n_creep_vulture_a_idle_02"),
    (["run", "attack"], None),
])
def test_escolhe_a_animacao_parada(nomes, esperado):
    assert modelos.escolher_parada(nomes) == esperado


def test_le_os_nomes_das_animacoes_do_glb(tmp_path):
    glb = tmp_path / "a.glb"
    glb.write_bytes(_glb({"asset": {"version": "2.0"}, "animations": [{"name": "idle"}, {"name": "run"}]}))
    assert modelos.animacoes(glb) == ["idle", "run"]


def test_arquivo_que_nao_e_glb_falha(tmp_path):
    falso = tmp_path / "a.glb"
    falso.write_bytes(b"nada disso")
    with pytest.raises(ValueError, match="não é glb"):
        modelos.animacoes(falso)


def test_tamanho_acima_do_limite_falha(tmp_path):
    (tmp_path / "grande.glb").write_bytes(b"0" * (modelos.LIMITE_BYTES + 1))
    with pytest.raises(ValueError, match="grande"):
        modelos.conferir_tamanhos(tmp_path, ["grande"])


def test_exporta_o_roshan_otimizado_com_a_animacao_parada(tmp_path):
    modelos.exportar(jogo.vpk(), "models/creeps/roshan/roshan.vmdl", tmp_path)
    final = tmp_path / "roshan.glb"
    assert final.stat().st_size <= modelos.LIMITE_BYTES
    assert modelos.animacoes(final) == ["roshan_idle"]
```

- [ ] **Step 2: Rodar e ver falhar**

Run: `cd export && python -m pytest tests/test_icones.py tests/test_modelos.py -q`
Expected: FAIL (`modelos` não existe)

- [ ] **Step 3: Implementação**

```python
# export/dota_export/icones.py
"""Ícones das habilidades: decodifica do jogo e grava em webp de 64 px."""
import tempfile
from pathlib import Path

from PIL import Image

from . import jogo

PASTA = "panorama/images/spellicons/"
SUFIXO = "_png.vtex_c"
TAMANHO = 64


def disponiveis(arquivo_vpk: Path) -> frozenset[str]:
    return frozenset(c.removeprefix(PASTA).removesuffix(SUFIXO) for c in jogo.listar(arquivo_vpk, PASTA) if c.endswith(SUFIXO))


def atualizar(arquivo_vpk: Path, ids: set[str], destino: Path) -> None:
    # ponytail: ícone muda quase nunca; só grava o que falta. Apague a pasta para refazer todos.
    destino.mkdir(parents=True, exist_ok=True)
    faltando = sorted(i for i in ids if not (destino / f"{i}.webp").exists())
    if not faltando:
        return
    with tempfile.TemporaryDirectory() as tmp:
        jogo.extrair(arquivo_vpk, [f"{PASTA}{i}{SUFIXO}" for i in faltando], Path(tmp), decompilar=True)
        for i in faltando:
            with Image.open(Path(tmp) / PASTA / f"{i}_png.png") as imagem:
                imagem.convert("RGBA").resize((TAMANHO, TAMANHO), Image.Resampling.LANCZOS).save(destino / f"{i}.webp", quality=85)
```

```python
# export/dota_export/modelos.py
"""Modelos 3D das unidades: exporta do jogo com a animação parada, otimiza e guarda fora do git."""
import json
import re
import shutil
import struct
import subprocess
import tempfile
from pathlib import Path

from . import jogo

GLTF_TRANSFORM = "@gltf-transform/cli@4.5.1"
OTIMIZACAO = ["--compress", "meshopt", "--texture-compress", "webp"]
PARADA_EXATA = re.compile(r"(^|_)idle(_loop)?$")
FORA_DA_PARADA = ("portrait", "capture", "death", "channel", "sleep", "victory", "defeat", "reversed")
TEXTURA_MENOR = "256"
LIMITE_BYTES = 400 * 1024
LIMITE_TOTAL_BYTES = 15 * 1024 * 1024
MANIFESTO = "_manifesto.json"
TEMPO_LIMITE_S = 300
MAGICO_GLB = 0x46546C67


def nome(caminho: str) -> str:
    return Path(caminho).stem


def animacoes(glb: Path) -> list[str]:
    with glb.open("rb") as arquivo:
        cabecalho = arquivo.read(20)
        if len(cabecalho) < 20 or struct.unpack("<I", cabecalho[:4])[0] != MAGICO_GLB:
            raise ValueError(f"{glb.name} não é glb")
        tamanho = struct.unpack("<I", cabecalho[12:16])[0]
        gltf = json.loads(arquivo.read(tamanho))
    return [a.get("name", "") for a in gltf.get("animations", [])]


def escolher_parada(nomes: list[str]) -> str | None:
    """'idle' exato primeiro; senão a variação de idle de nome mais curto (sapos e reaproveitados não têm o exato)."""
    exata = next((n for n in nomes if PARADA_EXATA.search(n)), None)
    if exata:
        return exata
    candidatos = [n for n in nomes if "idle" in n.lower() and not any(f in n.lower() for f in FORA_DA_PARADA)]
    return min(candidatos, key=len, default=None)


def _vrf_glb(arquivo_vpk: Path, caminho: str, saida: Path, extra: list[str]) -> None:
    saida.parent.mkdir(parents=True, exist_ok=True)
    jogo.vrf("-i", str(arquivo_vpk), "-f", f"{caminho}_c", "-o", str(saida), "-d", "--gltf_export_format", "glb",
             "--gltf_export_materials", "--gltf_textures_adapt", *extra)


def otimizar(origem: Path, saida: Path, textura: str = "512") -> None:
    npx = shutil.which("npx")
    if npx is None:
        raise FileNotFoundError("npx não encontrado: instale o Node 22")
    r = subprocess.run([npx, "-y", GLTF_TRANSFORM, "optimize", str(origem), str(saida), *OTIMIZACAO, "--texture-size", textura],
                       capture_output=True, text=True, encoding="utf-8", errors="replace", timeout=TEMPO_LIMITE_S)
    if r.returncode != 0:
        raise RuntimeError(f"gltf-transform {origem.name}: {r.stderr[-500:]}")


def exportar(arquivo_vpk: Path, caminho: str, destino: Path) -> None:
    """Exporta duas vezes: a primeira só para descobrir o nome da animação parada."""
    n = nome(caminho)
    with tempfile.TemporaryDirectory() as tmp:
        todas = Path(tmp) / "todas" / f"{n}.glb"
        _vrf_glb(arquivo_vpk, caminho, todas, ["--gltf_export_animations"])
        parada = escolher_parada(animacoes(todas))
        bruto = Path(tmp) / "bruto" / f"{n}.glb"
        _vrf_glb(arquivo_vpk, caminho, bruto, ["--gltf_export_animations", "--gltf_animation_list", parada] if parada else [])
        destino.mkdir(parents=True, exist_ok=True)
        final = destino / f"{n}.glb"
        otimizar(bruto, final)
        if final.stat().st_size > LIMITE_BYTES:  # os 4 sapos de malha densa passam de 400 KB com textura de 512
            otimizar(bruto, final, TEXTURA_MENOR)


def atualizar(arquivo_vpk: Path, caminhos: list[str], destino: Path) -> None:
    """Só reexporta o modelo cujo CRC no VPK mudou ou cujo arquivo sumiu."""
    destino.mkdir(parents=True, exist_ok=True)
    crcs = jogo.listar(arquivo_vpk, "models/", "vmdl_c")
    arquivo = destino / MANIFESTO
    manifesto = json.loads(arquivo.read_text(encoding="utf-8")) if arquivo.exists() else {}
    for caminho in caminhos:
        n, crc = nome(caminho), crcs[f"{caminho}_c"]
        if manifesto.get(n) == crc and (destino / f"{n}.glb").exists():
            continue
        exportar(arquivo_vpk, caminho, destino)
        manifesto[n] = crc
        arquivo.write_text(json.dumps(manifesto, indent=1), encoding="utf-8")


def conferir_tamanhos(destino: Path, nomes: list[str]) -> int:
    tamanhos = {n: (destino / f"{n}.glb").stat().st_size for n in nomes}
    grandes = {n: t for n, t in tamanhos.items() if t > LIMITE_BYTES}
    if grandes:
        raise ValueError(f"modelos acima de {LIMITE_BYTES // 1024} KB: {grandes}")
    total = sum(tamanhos.values())
    if total > LIMITE_TOTAL_BYTES:
        raise ValueError(f"modelos somam {total // 1024} KB, acima de {LIMITE_TOTAL_BYTES // 1024} KB")
    return total
```

- [ ] **Step 4: Rodar e ver passar**

Run: `cd export && python -m pytest tests/test_icones.py tests/test_modelos.py -q`
Expected: 12 passed (a exportação do Roshan leva uns 5 s e baixa o gltf-transform na primeira vez)

- [ ] **Step 5: Commit**

```bash
git add export/dota_export/icones.py export/dota_export/modelos.py export/tests/test_icones.py export/tests/test_modelos.py
git commit -m "feat: export ability icons and optimized unit models"
```

---

### Task 5: Exportação completa e conferência dos números

**Files:**
- Modify: `export/dota_export/__main__.py`
- Create: `export/tests/test_conferencia_unidades.py`

**Interfaces:**
- Consumes: tudo das Tasks 1 a 4, `conteudo.carregar`, `_gravar_colecao`
- Produces: `app/public/data/unidades.json`, `unidades/<id>.json`, `camps.json`, `icones/*.webp`, `modelos/*.glb`, `modelos/_manifesto.json`

- [ ] **Step 1: Teste que falha (critério 2 do adendo)**

```python
# export/tests/test_conferencia_unidades.py
"""Critério 2 do adendo: os números das fichas batem com o jogo e com a pesquisa de farm."""
import json
from pathlib import Path

import pytest

from dota_export import fontes, icones, jogo, unidades

DADOS = Path(__file__).resolve().parents[2] / "app" / "public" / "data"


@pytest.fixture(scope="module")
def por_id():
    arquivo = jogo.vpk()
    base = unidades.Jogo.dos_arquivos(jogo.textos(arquivo), icones.disponiveis(arquivo))
    return {f["id"]: f for f in unidades.todas(base, fontes.farm(), [])}


def test_selva_bate_com_farm_mechanics_em_260_numeros(por_id):
    conferidos = 0
    for camp in fontes.farm()["valores"]["camps_neutros"]:
        for u in camp["composicao"]:
            n = por_id[u["unidade"]]["numeros"]
            pares = [(n["vida"], u["hp"]), (n["armadura"], u["armadura"]), (n["resistencia_magica"], u["res_magica_pct"]),
                     (n["xp"], u["xp"]), ([n["ouro_min"], n["ouro_max"]], u["ouro"])]
            for obtido, esperado in pares:
                assert obtido == esperado, (camp["camp"], u["unidade"], obtido, esperado)
                conferidos += 1
    assert conferidos == 260


def test_arquivos_gravados_pelo_export():
    indice = json.loads((DADOS / "unidades.json").read_text(encoding="utf-8"))
    assert len(indice) == 71
    assert all((DADOS / "unidades" / f"{u['id']}.json").exists() for u in indice)
    assert all((DADOS / "modelos" / f"{u['modelo']}.glb").exists() for u in indice)
    assert len(json.loads((DADOS / "camps.json").read_text(encoding="utf-8"))) == 26
```

- [ ] **Step 2: Rodar e ver falhar**

Run: `cd export && python -m pytest tests/test_conferencia_unidades.py -q`
Expected: o primeiro passa (as Tasks 3 e 4 já leem tudo); `test_arquivos_gravados_pelo_export` FAIL (`unidades.json` não existe)

- [ ] **Step 3: Implementação**

Em `__main__.py`, importe `icones, jogo, modelos, unidades` e, em `main()`, antes do laço `for nome, dados in pacotes.items()`, acrescente:

```python
    arquivo_vpk = jogo.vpk()
    base = unidades.Jogo.dos_arquivos(jogo.textos(arquivo_vpk), icones.disponiveis(arquivo_vpk))
    farm = fontes.farm()
    fichas_unidades = unidades.todas(base, farm, conteudo.carregar(RAIZ / "content" / "unidades"))
    _gravar_colecao("unidades", "unidade", fichas_unidades)
    tipos = unidades.tipos_de_camp(farm)
    pacotes["unidades"] = unidades.indice(fichas_unidades, tipos)
    pacotes["camps"] = tipos
    icones.atualizar(arquivo_vpk, unidades.icones_usados(fichas_unidades), DESTINO / "icones")
    caminhos = unidades.caminhos_de_modelo(base, fichas_unidades)
    modelos.atualizar(arquivo_vpk, caminhos, DESTINO / "modelos")
    total = modelos.conferir_tamanhos(DESTINO / "modelos", [modelos.nome(c) for c in caminhos])
    print(f"modelos: {len(caminhos)}, {total // 1024} KB")
```

- [ ] **Step 4: Rodar e ver passar**

Run: `cd export && python -m dota_export && python -m pytest -q`
Expected: a primeira exportação dos 59 modelos leva uns 15 min (o código deste plano, rodado no teste de viabilidade: 871 s, 59 modelos, 12.141 KB, maior 397 KB, 69 ícones); as seguintes levam uns 5 s (medido: 4 s), porque o manifesto pula o que não mudou. Imprime `modelos: 59, ... KB` abaixo de 15.360 KB e a suíte inteira passa.

- [ ] **Step 5: Commit**

```bash
git add export/dota_export/__main__.py export/tests/test_conferencia_unidades.py
git commit -m "feat: write units, camps, icons and models in the data export"
```

---

### Task 6: Conteúdo "o que isso muda para você"

**Files:**
- Create: `content/unidades/<habilidade>.md` (pelo menos as 12 da lista), `export/tests/test_conteudo_unidades.py`

**Interfaces:**
- Consumes: `conteudo.carregar`, `unidades.todas` (falha se o id não for uma habilidade visível)
- Produces: `habilidade.o_que_muda = {texto, fontes, origem}` nas fichas

- [ ] **Step 1: Teste que falha**

```python
# export/tests/test_conteudo_unidades.py
from pathlib import Path

from dota_export import conteudo, fontes, icones, jogo, unidades

PASTA = Path(__file__).resolve().parents[2] / "content" / "unidades"
OBRIGATORIAS = {"roshan_spell_block", "roshan_bash", "roshan_slam", "roshan_revengeroar", "roshan_grab_and_throw",
                "roshan_devotion", "miniboss_reflect", "miniboss_unyielding_shield", "miniboss_radiance",
                "satyr_trickster_purge", "black_dragon_fireball", "centaur_khan_war_stomp"}


def test_textos_com_fonte_origem_e_patch():
    itens = conteudo.carregar(PASTA)
    assert OBRIGATORIAS <= {i["id"] for i in itens}
    for i in itens:
        assert i["fontes"], i["id"]
        assert i["origem"]["basico"] is not None, i["id"]
        assert i["patch"] == "7.41", i["id"]


def test_cada_texto_aponta_para_uma_habilidade_visivel():
    arquivo = jogo.vpk()
    base = unidades.Jogo.dos_arquivos(jogo.textos(arquivo), icones.disponiveis(arquivo))
    fichas = unidades.todas(base, fontes.farm(), conteudo.carregar(PASTA))
    com_texto = {h["id"] for f in fichas for h in f["habilidades"] if h["o_que_muda"]}
    assert OBRIGATORIAS <= com_texto
```

- [ ] **Step 2: Rodar e ver falhar**: `cd export && python -m pytest tests/test_conteudo_unidades.py -q` → FAIL (pasta vazia).

- [ ] **Step 3: Escrever o conteúdo**

Um arquivo por habilidade, no formato do conteúdo da 1A (frontmatter simples, corpo é o Básico). Texto curto: o que a habilidade muda na decisão do jogador, em 2 a 4 frases. Cada arquivo traz a fonte conferida: a descrição e os números do próprio jogo (o export já mostra), notas do patch 7.41 (`dota-imortal/work/ref/mecanicas/pn_7.41*.txt`), Liquipedia, ou um replay já lido (`origem: replay` com `replay: <match_id>`). Os dois exemplos abaixo estão conferidos contra os arquivos do jogo e entram como estão:

```markdown
---
id: roshan_spell_block
titulo: Bloqueio de Magias
patch: 7.41
origem: recomendado
fontes:
- Arquivos do Dota 2 instalado (npc_abilities.txt: roshan_spell_block, recarga 15 s; abilities_brazilian.txt)
---
O Roshan bloqueia uma magia com alvo a cada 15 segundos. Antes do seu atordoamento ou da sua magia forte, gaste uma magia barata com alvo nele para queimar o bloqueio. Magias em área e sem alvo não são bloqueadas.
```

```markdown
---
id: miniboss_reflect
titulo: Reflexão
patch: 7.41
origem: recomendado
fontes:
- Arquivos do Dota 2 instalado (npc_abilities.txt: miniboss_reflect, raio 1.200; abilities_brazilian.txt)
- dota-imortal/work/farm_mechanics_corrigido.json (tormentor_por_minuto: reflexão de 60% aos 20 min a 120% aos 60 min)
---
A Tormenta devolve o dano que sofre, dividido entre quem bate e os outros heróis do seu time a até 1.200 unidades. Quanto mais tarde, mais ela reflete (60% aos 20 min, 120% aos 60 min). Leve só quem precisa bater e deixe o suporte frágil longe do raio.
```

Escreva as outras 10 da lista `OBRIGATORIAS` do mesmo jeito. Para cada uma, abra a ficha gerada (`app/public/data/unidades/<unidade>.json`) e escreva só o que os números e a descrição sustentam, ou o que um replay já lido mostrou. Sem fonte conferida, o arquivo não entra.

- [ ] **Step 4: Rodar e ver passar**: `cd export && python -m pytest tests/test_conteudo_unidades.py -q && python -m dota_export` → 2 passed e o export grava os textos nas fichas.

- [ ] **Step 5: Commit**

```bash
git add content/unidades export/tests/test_conteudo_unidades.py
git commit -m "feat: add what-it-changes notes for key unit abilities"
```

---

### Task 7: Dados de unidade no app e funções puras

**Files:**
- Modify: `app/src/data/schemas.ts`
- Create: `app/src/unidades/ficha.ts`, `app/src/unidades/ficha.test.ts`

**Interfaces:**
- Consumes: `marcaSchema`, `Objetivo`
- Produces: `habilidadeSchema`, `numerosSchema`, `crescimentoSchema`, `unidadeSchema`, `unidadeResumoSchema`, `unidadesSchema`, `tipoCampSchema`, `campsSchema`; tipos `Habilidade`, `Numeros`, `Crescimento`, `Unidade`, `UnidadeResumo`, `TipoCamp`; `gradeDeNumeros(n: Numeros): [string, string][]`; `textoDoCrescimento(c: Extract<NonNullable<Crescimento>, { tipo: "por_nivel" }>): string`; `tiposDoCamp(camp: Objetivo, tipos: readonly TipoCamp[]): TipoCamp[]`; `agruparUnidades(unidades: readonly UnidadeResumo[], tipos: readonly TipoCamp[]): { titulo: string; unidades: UnidadeResumo[] }[]`.

- [ ] **Step 1: Testes que falham**

```ts
// app/src/unidades/ficha.test.ts
import type { Numeros, TipoCamp, UnidadeResumo } from "../data/schemas";
import { agruparUnidades, gradeDeNumeros, textoDoCrescimento, tiposDoCamp } from "./ficha";

const ROSHAN: Numeros = {
  vida: 6000, regeneracao: 20, mana: 0, regeneracao_mana: 0, armadura: 30, resistencia_magica: 55, dano_min: 75, dano_max: 75,
  intervalo_ataque: 2, alcance_ataque: 150, ataque: "corpo a corpo", velocidade: 270, ouro_min: 200, ouro_max: 290, xp: 400,
  visao_dia: 1400, visao_noite: 1400,
};

it("monta a grade de números como o glossário do jogo", () => {
  expect(gradeDeNumeros(ROSHAN)).toEqual([
    ["Vida", "6.000"], ["Regeneração", "20"], ["Armadura", "30"], ["Resistência mágica", "55%"], ["Dano", "75"],
    ["Intervalo de ataque", "2,0"], ["Alcance de ataque", "150"], ["Ataque", "corpo a corpo"], ["Velocidade", "270"],
    ["Ouro", "200 a 290"], ["XP", "400"], ["Visão", "1.400"],
  ]);
});

it("esconde vida e ataque que o jogo não define (Tormentor)", () => {
  const tormentor: Numeros = { ...ROSHAN, vida: null, dano_min: null, dano_max: null, intervalo_ataque: null, alcance_ataque: null, ataque: "sem ataque", mana: 300, visao_dia: 1200, visao_noite: 800 };
  const rotulos = gradeDeNumeros(tormentor).map(([r]) => r);
  expect(rotulos).not.toContain("Vida");
  expect(rotulos).not.toContain("Dano");
  expect(gradeDeNumeros(tormentor)).toContainEqual(["Mana", "300"]);
  expect(gradeDeNumeros(tormentor)).toContainEqual(["Visão", "1.200 de dia, 800 de noite"]);
});

it("descreve o crescimento da selva", () => {
  expect(textoDoCrescimento({ tipo: "por_nivel", a_cada_s: 450, vida: 30, dano: 3, armadura: 0.5, vel_ataque: 5, ouro: 1, xp: 5, nivel_max: 30 }))
    .toBe("A cada 7:30 de jogo: +30 de vida, +3 de dano, +0,5 de armadura, +5 de velocidade de ataque, +1 de ouro e +5 de XP, até o nível 30.");
});

const tipo = (id: string, tamanho: TipoCamp["tamanho"], terreno: TipoCamp["terreno"], unidade: string): TipoCamp =>
  ({ id, nome: id, tamanho, terreno, unidades: [{ id: unidade, qtd: 1 }], ouro: [10, 20], xp: 50 });
const TIPOS = [tipo("kobold", "small", "seco", "kobold"), tipo("pollywog", "small", "inundado", "tadpole"),
  tipo("centaur", "medium", "seco", "centaur_khan"), tipo("froglet", "medium", "inundado", "froglet")];
const camp = (tamanho: string, anfibio: boolean) => ({ id: "c", tipo: "camp", nome: "c", x: 0, y: 0, lado: "radiant" as const, detalhes: { tipo: tamanho, anfibio } });

it.each([
  { tamanho: "small", anfibio: false, esperado: ["kobold"] },
  { tamanho: "medium", anfibio: false, esperado: ["centaur"] },
  { tamanho: "small", anfibio: true, esperado: ["pollywog", "froglet"] },
])("camp $tamanho anfíbio=$anfibio pode nascer como $esperado", ({ tamanho, anfibio, esperado }) => {
  expect(tiposDoCamp(camp(tamanho, anfibio), TIPOS).map((t) => t.id)).toEqual(esperado);
});

const resumo = (id: string, grupo: UnidadeResumo["grupo"], camps: string[]): UnidadeResumo =>
  ({ id, nome: id, grupo, papel: "", lado: "neutro", modelo: id, camps, habilidades: [] });

it("agrupa as unidades como a tela Unidades mostra", () => {
  const grupos = agruparUnidades([resumo("kobold", "selva", ["kobold"]), resumo("roshan", "chefe", []),
    resumo("tadpole", "selva", ["pollywog"]), resumo("creep_goodguys_melee", "lane", [])], TIPOS);
  expect(grupos.map((g) => [g.titulo, g.unidades.map((u) => u.id)])).toEqual([
    ["Roshan e Tormentor", ["roshan"]], ["Creeps de lane", ["creep_goodguys_melee"]],
    ["Selva: pequeno", ["kobold"]], ["Selva: anfíbio", ["tadpole"]],
  ]);
});
```

- [ ] **Step 2: Rodar e ver falhar**: `cd app && npm test` → FAIL (`./ficha` não existe).

- [ ] **Step 3: Implementação**

Em `schemas.ts`, depois de `conteudoSchema`:

```ts
const rotuloValorSchema = z.object({ rotulo: z.string(), valor: z.string() });
export const habilidadeSchema = z.object({
  id: z.string(), nome: z.string(), nome_en: z.string().nullable(), descricao: z.string(),
  notas: z.array(z.string()), condicoes: z.array(rotuloValorSchema), valores: z.array(rotuloValorSchema),
  icone: z.string().nullable(), texto_em_ingles: z.boolean(),
  o_que_muda: z.object({ texto: z.string(), fontes: z.array(z.string()), origem: marcaSchema }).nullable(),
});
const numeroOuNulo = z.number().nullable();
export const numerosSchema = z.object({
  vida: numeroOuNulo, regeneracao: z.number(), mana: z.number(), regeneracao_mana: z.number(), armadura: z.number(),
  resistencia_magica: z.number(), dano_min: numeroOuNulo, dano_max: numeroOuNulo, intervalo_ataque: numeroOuNulo,
  alcance_ataque: numeroOuNulo, ataque: z.enum(["corpo a corpo", "à distância", "sem ataque"]), velocidade: z.number(),
  ouro_min: z.number(), ouro_max: z.number(), xp: z.number(), visao_dia: z.number(), visao_noite: z.number(),
});
export const crescimentoSchema = z.discriminatedUnion("tipo", [
  z.object({ tipo: z.literal("por_nivel"), a_cada_s: z.number(), vida: z.number(), dano: z.number(), armadura: z.number(),
    vel_ataque: z.number(), ouro: z.number(), xp: z.number(), nivel_max: z.number() }),
  z.object({ tipo: z.literal("tabela"), colunas: z.array(z.string()), linhas: z.array(z.array(z.number())), fonte: z.string() }),
]).nullable();
const grupoUnidadeSchema = z.enum(["chefe", "lane", "selva"]);
const ladoUnidadeSchema = z.enum(["radiant", "dire", "neutro"]);
export const unidadeSchema = z.object({
  id: z.string(), id_jogo: z.string(), nome: z.string(), grupo: grupoUnidadeSchema, papel: z.string(), lado: ladoUnidadeSchema,
  numeros: numerosSchema, habilidades: z.array(habilidadeSchema), crescimento: crescimentoSchema,
  modelo: z.string().nullable(), patch: z.string(), fontes: z.array(z.string()),
});
export const unidadeResumoSchema = z.object({
  id: z.string(), nome: z.string(), grupo: grupoUnidadeSchema, papel: z.string(), lado: ladoUnidadeSchema,
  modelo: z.string().nullable(), camps: z.array(z.string()),
  habilidades: z.array(z.object({ id: z.string(), nome: z.string(), nome_en: z.string().nullable() })),
});
export const unidadesSchema = z.array(unidadeResumoSchema);
export const tipoCampSchema = z.object({
  id: z.string(), nome: z.string(), tamanho: z.enum(["small", "medium", "large", "ancient"]), terreno: z.enum(["seco", "inundado"]),
  unidades: z.array(z.object({ id: z.string(), qtd: z.number() })), ouro: z.tuple([z.number(), z.number()]), xp: z.number(),
});
export const campsSchema = z.array(tipoCampSchema);
```

E nos tipos, no fim do arquivo:

```ts
export type Habilidade = z.infer<typeof habilidadeSchema>;
export type Numeros = z.infer<typeof numerosSchema>;
export type Crescimento = z.infer<typeof crescimentoSchema>;
export type Unidade = z.infer<typeof unidadeSchema>;
export type UnidadeResumo = z.infer<typeof unidadeResumoSchema>;
export type TipoCamp = z.infer<typeof tipoCampSchema>;
```

```ts
// app/src/unidades/ficha.ts
import type { Crescimento, Numeros, Objetivo, TipoCamp, UnidadeResumo } from "../data/schemas";

export type CrescimentoPorNivel = Extract<NonNullable<Crescimento>, { tipo: "por_nivel" }>;

// A nova tentativa muda a URL: o carregador guarda em cache o erro da URL anterior.
export const urlDoModelo = (modelo: string, tentativa = 0) => `/data/modelos/${modelo}.glb${tentativa ? `?tentativa=${tentativa}` : ""}`;
export const urlDoPoster = (modelo: string) => `/data/posters/${modelo}.jpg`;
type Linha = [string, string];

const fmt = (n: number) => n.toLocaleString("pt-BR");
const faixa = (min: number, max: number) => (min === max ? fmt(min) : `${fmt(min)} a ${fmt(max)}`);
const linha = (rotulo: string, valor: string | null): Linha[] => (valor === null ? [] : [[rotulo, valor]]);
const seNumero = (n: number | null, formatar: (n: number) => string = fmt) => (n === null ? null : formatar(n));

function textoDaVisao(dia: number, noite: number): string {
  return dia === noite ? fmt(dia) : `${fmt(dia)} de dia, ${fmt(noite)} de noite`;
}

export function gradeDeNumeros(n: Numeros): Linha[] {
  const dano = n.dano_min === null || n.dano_max === null ? null : faixa(n.dano_min, n.dano_max);
  return [
    ...linha("Vida", seNumero(n.vida)),
    ["Regeneração", fmt(n.regeneracao)],
    ...linha("Mana", n.mana > 0 ? fmt(n.mana) : null),
    ["Armadura", fmt(n.armadura)],
    ["Resistência mágica", `${fmt(n.resistencia_magica)}%`],
    ...linha("Dano", dano),
    ...linha("Intervalo de ataque", seNumero(n.intervalo_ataque, (v) => v.toLocaleString("pt-BR", { minimumFractionDigits: 1 }))),
    ...linha("Alcance de ataque", seNumero(n.alcance_ataque)),
    ["Ataque", n.ataque],
    ["Velocidade", fmt(n.velocidade)],
    ...linha("Ouro", n.ouro_max > 0 ? faixa(n.ouro_min, n.ouro_max) : null),
    ...linha("XP", n.xp > 0 ? fmt(n.xp) : null),
    ["Visão", textoDaVisao(n.visao_dia, n.visao_noite)],
  ];
}

const minutos = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;

export function textoDoCrescimento(c: CrescimentoPorNivel): string {
  const ganhos = [`+${fmt(c.vida)} de vida`, `+${fmt(c.dano)} de dano`, `+${fmt(c.armadura)} de armadura`,
    `+${fmt(c.vel_ataque)} de velocidade de ataque`, `+${fmt(c.ouro)} de ouro`];
  return `A cada ${minutos(c.a_cada_s)} de jogo: ${ganhos.join(", ")} e +${fmt(c.xp)} de XP, até o nível ${c.nivel_max}.`;
}

// Camp seco sorteia entre os tipos secos do mesmo tamanho; camp anfíbio segue a linha dos sapos, que evolui com o tempo.
export function tiposDoCamp(camp: Objetivo, tipos: readonly TipoCamp[]): TipoCamp[] {
  if (camp.detalhes["anfibio"] === true) return tipos.filter((t) => t.terreno === "inundado");
  return tipos.filter((t) => t.terreno === "seco" && t.tamanho === camp.detalhes["tipo"]);
}

const ROTULO_TAMANHO = { small: "pequeno", medium: "médio", large: "grande", ancient: "ancient" } as const satisfies Record<TipoCamp["tamanho"], string>;
const rotuloDoTipo = (t: TipoCamp) => `Selva: ${t.terreno === "inundado" ? "anfíbio" : ROTULO_TAMANHO[t.tamanho]}`;
const ORDEM_SELVA = ["Selva: pequeno", "Selva: médio", "Selva: grande", "Selva: ancient", "Selva: anfíbio"];
const TITULO_GRUPO = { chefe: "Roshan e Tormentor", lane: "Creeps de lane" } as const;

function tituloDe(u: UnidadeResumo, tipos: ReadonlyMap<string, TipoCamp>): string {
  if (u.grupo !== "selva") return TITULO_GRUPO[u.grupo];
  const primeiro = u.camps.map((id) => tipos.get(id)).find((t) => t !== undefined);
  return primeiro ? rotuloDoTipo(primeiro) : "Selva: pequeno";
}

export function agruparUnidades(unidades: readonly UnidadeResumo[], tipos: readonly TipoCamp[]): { titulo: string; unidades: UnidadeResumo[] }[] {
  const porId = new Map(tipos.map((t) => [t.id, t]));
  const ordem = [TITULO_GRUPO.chefe, TITULO_GRUPO.lane, ...ORDEM_SELVA];
  return ordem
    .map((titulo) => ({ titulo, unidades: unidades.filter((u) => tituloDe(u, porId) === titulo) }))
    .filter((g) => g.unidades.length > 0);
}
```

- [ ] **Step 4: Rodar e ver passar**: `cd app && npm test` → passam.

- [ ] **Step 5: Commit**

```bash
git add app/src/data/schemas.ts app/src/unidades/ficha.ts app/src/unidades/ficha.test.ts
git commit -m "feat: add unit data schemas and pure sheet helpers"
```

---

### Task 8: Visualizador 3D reutilizável

**Files:**
- Create: `app/src/unidades/VisualizadorUnidade.tsx`, `app/src/unidades/VisualizadorUnidade.test.tsx`, `app/src/unidades/Cena3D.tsx`, `app/src/unidades/materiais.ts`, `app/src/unidades/materiais.test.ts`
- Modify: `app/src/unidades/ficha.ts` (as duas funções de URL, abaixo)

**Interfaces:**
- Consumes: `hasWebGL`
- Produces: `type VisualizadorProps = { modelo: string | null; nome: string }`; `VisualizadorUnidade(props)`; em `ficha.ts`, `urlDoModelo(modelo, tentativa?)` e `urlDoPoster(modelo)` (fora do componente para o Fast Refresh e o lint `only-export-components`); `type Cena3DProps = { url: string; girarSozinho?: boolean; aoCarregar?: () => void }`; `Cena3D(props)`; `foscar(cena: Object3D): void` em `materiais.ts` (só o `Cena3D` importa, então o Three.js fica fora do pacote principal). O resto do app só usa `VisualizadorUnidade` (como só usa `MapView` para o mapa).

- [ ] **Step 1: Testes que falham**

```tsx
// app/src/unidades/VisualizadorUnidade.test.tsx
import { fireEvent, render, screen } from "@testing-library/react";
import { VisualizadorUnidade } from "./VisualizadorUnidade";

const webgl = vi.hoisted(() => ({ hasWebGL: vi.fn(() => true) }));
vi.mock("../map/webgl", () => webgl);
const cena = vi.hoisted(() => ({ falhar: false }));
vi.mock("./Cena3D", () => ({
  Cena3D: ({ url }: { url: string }) => {
    if (cena.falhar) throw new Error("rede caiu");
    return `cena ${url}`;
  },
}));

afterEach(() => {
  webgl.hasWebGL.mockReturnValue(true);
  cena.falhar = false;
  vi.restoreAllMocks();
});

it("mostra a cena 3D quando o aparelho tem 3D", async () => {
  render(<VisualizadorUnidade modelo="roshan" nome="Roshan" />);
  expect(await screen.findByText("cena /data/modelos/roshan.glb")).toBeInTheDocument();
  expect(screen.getByRole("figure", { name: "Modelo 3D de Roshan, girando" })).toBeInTheDocument();
});

it("sem 3D mostra a imagem parada", () => {
  webgl.hasWebGL.mockReturnValue(false);
  render(<VisualizadorUnidade modelo="roshan" nome="Roshan" />);
  expect(screen.getByRole("img", { name: "Imagem do modelo de Roshan" })).toHaveAttribute("src", "/data/posters/roshan.jpg");
});

it("modelo que falha avisa e tenta de novo com outra url", async () => {
  vi.spyOn(console, "error").mockImplementation(() => {});
  cena.falhar = true;
  render(<VisualizadorUnidade modelo="roshan" nome="Roshan" />);
  expect(await screen.findByText("Modelo indisponível.")).toBeInTheDocument();
  cena.falhar = false;
  fireEvent.click(screen.getByRole("button", { name: "Tentar de novo" }));
  expect(await screen.findByText("cena /data/modelos/roshan.glb?tentativa=1")).toBeInTheDocument();
});

it("unidade sem modelo avisa sem botão de tentar", () => {
  render(<VisualizadorUnidade modelo={null} nome="Nova unidade" />);
  expect(screen.getByText("Modelo indisponível.")).toBeInTheDocument();
  expect(screen.queryByRole("button")).toBeNull();
});
```

```ts
// app/src/unidades/materiais.test.ts
import { Mesh, MeshStandardMaterial, Object3D, Texture } from "three";
import { foscar } from "./materiais";

it("tira o metal e o brilho próprio que escurecem os materiais do Dota", () => {
  const material = new MeshStandardMaterial({ metalness: 1, emissiveMap: new Texture() });
  material.emissive.setScalar(1);
  const raiz = new Object3D();
  raiz.add(new Mesh(undefined, material));
  foscar(raiz);
  expect(material.metalness).toBe(0);
  expect(material.emissiveMap).toBeNull();
  expect(material.emissive.getHex()).toBe(0);
});
```

- [ ] **Step 2: Rodar e ver falhar**: `cd app && npm test` → FAIL.

- [ ] **Step 3: Implementação**

```tsx
// app/src/unidades/VisualizadorUnidade.tsx
import { Component, lazy, Suspense, useState, type ReactNode } from "react";
import { hasWebGL } from "../map/webgl";
import { urlDoModelo, urlDoPoster } from "./ficha";

const Cena3D = lazy(() => import("./Cena3D").then((m) => ({ default: m.Cena3D })));

export type VisualizadorProps = { modelo: string | null; nome: string };

type LimiteProps = { fallback: ReactNode; children: ReactNode };

// Limite de erro só existe como classe no React.
class LimiteDeErro extends Component<LimiteProps, { falhou: boolean }> {
  state = { falhou: false };
  static getDerivedStateFromError() {
    return { falhou: true };
  }
  componentDidCatch(erro: unknown) {
    console.error("modelo 3D:", erro);
  }
  render() {
    return this.state.falhou ? this.props.fallback : this.props.children;
  }
}

function Aviso({ onTentar }: { onTentar?: () => void }) {
  return (
    <div role="status" className="modelo-aviso">
      <p>Modelo indisponível.</p>
      {onTentar && <button className="pilula" onClick={onTentar}>Tentar de novo</button>}
    </div>
  );
}

export function VisualizadorUnidade({ modelo, nome }: VisualizadorProps) {
  const [tentativa, setTentativa] = useState(0);
  if (modelo === null) return <figure className="modelo"><Aviso /></figure>;
  const poster = <img className="modelo-poster" src={urlDoPoster(modelo)} alt={`Imagem do modelo de ${nome}`} />;
  if (!hasWebGL()) return <figure className="modelo">{poster}</figure>;
  return (
    <figure className="modelo" aria-label={`Modelo 3D de ${nome}, girando`}>
      <LimiteDeErro key={tentativa} fallback={<Aviso onTentar={() => setTentativa((n) => n + 1)} />}>
        <Suspense fallback={poster}>
          <Cena3D url={urlDoModelo(modelo, tentativa)} />
        </Suspense>
      </LimiteDeErro>
    </figure>
  );
}
```

```ts
// app/src/unidades/materiais.ts
import { MeshStandardMaterial, type Object3D } from "three";

// Os materiais do Dota não são PBR: a máscara de metal deixa o modelo escuro sem mapa de ambiente.
export function foscar(cena: Object3D): void {
  cena.traverse((objeto) => {
    if (!("material" in objeto)) return;
    const materiais = Array.isArray(objeto.material) ? objeto.material : [objeto.material];
    for (const m of materiais) {
      if (!(m instanceof MeshStandardMaterial)) continue;
      m.metalness = 0;
      m.emissiveMap = null;
      m.emissive.setScalar(0);
    }
  });
}
```

```tsx
// app/src/unidades/Cena3D.tsx
import { Bounds, OrbitControls, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { foscar } from "./materiais";

const SEM_DRACO = false;
const prefereMenosMovimento = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

type ModeloProps = { url: string; parado: boolean; aoCarregar?: () => void };

function Modelo({ url, parado, aoCarregar }: ModeloProps) {
  const { scene, animations } = useGLTF(url, SEM_DRACO);
  const { actions, names } = useAnimations(animations, scene);
  useEffect(() => {
    foscar(scene);
    aoCarregar?.();
  }, [scene, aoCarregar]);
  useEffect(() => {
    const nome = names[0];
    const acao = nome ? actions[nome] : null;
    if (!acao) return;
    acao.setEffectiveTimeScale(parado ? 0 : 1).play();
    return () => { acao.stop(); };
  }, [actions, names, parado]);
  return <primitive object={scene} />;
}

export type Cena3DProps = { url: string; girarSozinho?: boolean; aoCarregar?: () => void };

export function Cena3D({ url, girarSozinho = !prefereMenosMovimento(), aoCarregar }: Cena3DProps) {
  const [girando, setGirando] = useState(girarSozinho);
  useEffect(() => () => useGLTF.clear(url), [url]);
  return (
    <>
      <Canvas camera={{ fov: 35 }} dpr={[1, 2]}>
        <hemisphereLight args={["#fff4e0", "#202830", 2.6]} />
        <directionalLight position={[3, 5, 4]} intensity={3} />
        <Bounds fit clip observe margin={1.2}>
          <Modelo url={url} parado={!girando} aoCarregar={aoCarregar} />
        </Bounds>
        <OrbitControls makeDefault autoRotate={girando} enablePan={false} />
      </Canvas>
      {girarSozinho && (
        <button className="modelo-girar pilula" aria-pressed={girando} onClick={() => setGirando((g) => !g)}>
          {girando ? "Parar o giro" : "Girar"}
        </button>
      )}
    </>
  );
}
```

- [ ] **Step 4: Rodar e ver passar**: `cd app && npm test && npm run build` → passam. `npm run lint` sem aviso novo. No build, confira em `dist/assets` que `Cena3D-*.js` é um arquivo separado.

- [ ] **Step 5: Commit**

```bash
git add app/src/unidades/VisualizadorUnidade.tsx app/src/unidades/VisualizadorUnidade.test.tsx app/src/unidades/Cena3D.tsx app/src/unidades/materiais.ts app/src/unidades/materiais.test.ts app/src/unidades/ficha.ts
git commit -m "feat: add lazy 3d unit viewer with poster and retry"
```

---

### Task 9: Ficha da unidade

**Files:**
- Create: `app/src/unidades/FichaUnidade.tsx`, `app/src/unidades/FichaUnidade.test.tsx`, `app/src/unidades/unidades.css`
- Modify: `app/src/objectives/ObjectivePanel.tsx` (exporta `GradeNumeros`)

**Interfaces:**
- Consumes: `Unidade`, `Habilidade`, `gradeDeNumeros`, `textoDoCrescimento`, `rotuloOrigem`, `GradeNumeros`, `VisualizadorUnidade`
- Produces: `FichaUnidade({ unidade }: { unidade: Unidade })`

- [ ] **Step 1: Teste que falha**

```tsx
// app/src/unidades/FichaUnidade.test.tsx
import { render, screen, within } from "@testing-library/react";
import type { Unidade } from "../data/schemas";
import { FichaUnidade } from "./FichaUnidade";

vi.mock("./VisualizadorUnidade", () => ({ VisualizadorUnidade: ({ nome }: { nome: string }) => `modelo de ${nome}` }));

const slam = {
  id: "roshan_slam", nome: "Porrada", nome_en: "Slam", descricao: "Roshan bate no chão.", notas: [],
  condicoes: [{ rotulo: "Recarga", valor: "10 s" }], valores: [{ rotulo: "Raio", valor: "350" }], icone: "roshan_slam",
  texto_em_ingles: false, o_que_muda: null,
};
const bloqueio = {
  ...slam, id: "roshan_spell_block", nome: "Bloqueio de Magias", nome_en: "Spell Block", icone: null, texto_em_ingles: true,
  o_que_muda: { texto: "Gaste uma magia barata antes.", fontes: ["Arquivos do jogo"], origem: { tipo: "recomendado" as const, replays: [] } },
};
const roshan: Unidade = {
  id: "roshan", id_jogo: "npc_dota_roshan", nome: "Roshan", grupo: "chefe", papel: "chefe neutro", lado: "neutro",
  numeros: { vida: 6000, regeneracao: 20, mana: 0, regeneracao_mana: 0, armadura: 30, resistencia_magica: 55, dano_min: 75, dano_max: 75,
    intervalo_ataque: 2, alcance_ataque: 150, ataque: "corpo a corpo", velocidade: 270, ouro_min: 200, ouro_max: 290, xp: 400, visao_dia: 1400, visao_noite: 1400 },
  habilidades: [slam, bloqueio],
  crescimento: { tipo: "tabela", colunas: ["Minuto", "Vida"], linhas: [[10, 7300], [20, 8600]], fonte: "farm_mechanics" },
  modelo: "roshan", patch: "7.41", fontes: ["Arquivos do Dota 2 instalado"],
};

it("mostra modelo, números, habilidades com condições e o que muda", () => {
  render(<FichaUnidade unidade={roshan} />);
  expect(screen.getByText("modelo de Roshan")).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Roshan" })).toBeInTheDocument();
  expect(screen.getByText("6.000")).toBeInTheDocument();
  const porrada = screen.getByRole("listitem", { name: "Porrada" });
  expect(within(porrada).getByText("(Slam)")).toBeInTheDocument();
  expect(within(porrada).getByText("10 s")).toBeInTheDocument();
  expect(within(porrada).getByRole("presentation")).toHaveAttribute("src", "/data/icones/roshan_slam.webp");
  expect(within(porrada).getByText("O que isso muda para você: ainda não escrito.")).toBeInTheDocument();
  const bloq = screen.getByRole("listitem", { name: "Bloqueio de Magias" });
  expect(within(bloq).getByText("texto em inglês")).toBeInTheDocument();
  expect(within(bloq).getByText("Gaste uma magia barata antes.")).toBeInTheDocument();
  expect(within(bloq).getByText(/Recomendado\./)).toBeInTheDocument();
  expect(screen.getByRole("table", { name: "Como fica mais forte com o tempo" })).toHaveTextContent("8.600");
});
```

- [ ] **Step 2: Rodar e ver falhar**: `cd app && npm test` → FAIL.

- [ ] **Step 3: Implementação**

Em `ObjectivePanel.tsx`, troque `function GradeNumeros` por `export function GradeNumeros` (sem outra mudança).

```tsx
// app/src/unidades/FichaUnidade.tsx
import ReactMarkdown from "react-markdown";
import type { Crescimento, Habilidade, Unidade } from "../data/schemas";
import { GradeNumeros, rotuloOrigem } from "../objectives/ObjectivePanel";
import { gradeDeNumeros, textoDoCrescimento } from "./ficha";
import { VisualizadorUnidade } from "./VisualizadorUnidade";
import "./unidades.css";

const paragrafos = (texto: string) => texto.split(/\n{2,}/).filter((p) => p.trim());
const fmt = (n: number) => n.toLocaleString("pt-BR");

function Icone({ habilidade }: { habilidade: Habilidade }) {
  if (habilidade.icone) return <img className="habilidade-icone" src={`/data/icones/${habilidade.icone}.webp`} alt="" width={48} height={48} />;
  return <span className="habilidade-icone habilidade-icone-vazio" aria-hidden="true">{habilidade.nome.charAt(0)}</span>;
}

function OQueMuda({ texto }: { texto: Habilidade["o_que_muda"] }) {
  if (!texto) return <p className="o-que-muda o-que-muda-vazio">O que isso muda para você: ainda não escrito.</p>;
  return (
    <div className="o-que-muda">
      <h5>O que isso muda para você</h5>
      <ReactMarkdown>{texto.texto}</ReactMarkdown>
      <p className="fonte">{rotuloOrigem(texto.origem)} Fontes: {texto.fontes.join("; ")}</p>
    </div>
  );
}

function ItemHabilidade({ habilidade: h }: { habilidade: Habilidade }) {
  return (
    <li id={h.id} className="habilidade" aria-label={h.nome}>
      <Icone habilidade={h} />
      <div>
        <h4>{h.nome} {h.nome_en && <span className="nome-en">({h.nome_en})</span>}</h4>
        {h.texto_em_ingles && <span className="selo">texto em inglês</span>}
        {paragrafos(h.descricao).map((p) => <p key={p}>{p}</p>)}
        {h.notas.map((n) => <p key={n} className="nota">{n}</p>)}
        <dl className="condicoes">
          {[...h.condicoes, ...h.valores].map(({ rotulo, valor }) => (
            <div key={`${rotulo}:${valor}`}><dt>{rotulo}</dt><dd>{valor}</dd></div>
          ))}
        </dl>
        <OQueMuda texto={h.o_que_muda} />
      </div>
    </li>
  );
}

function CrescimentoDaUnidade({ crescimento }: { crescimento: NonNullable<Crescimento> }) {
  if (crescimento.tipo === "por_nivel") return <p className="crescimento">{textoDoCrescimento(crescimento)}</p>;
  return (
    <div className="tabela-rolavel">
      <table className="crescimento-tabela" aria-label="Como fica mais forte com o tempo">
        <caption>Como fica mais forte com o tempo</caption>
        <thead><tr>{crescimento.colunas.map((c) => <th key={c} scope="col">{c}</th>)}</tr></thead>
        <tbody>{crescimento.linhas.map((l) => <tr key={l[0]}>{l.map((v, i) => <td key={crescimento.colunas[i]}>{fmt(v)}</td>)}</tr>)}</tbody>
      </table>
      <p className="fonte">Fonte: {crescimento.fonte}</p>
    </div>
  );
}

export function FichaUnidade({ unidade }: { unidade: Unidade }) {
  return (
    <article className="ficha-unidade" aria-label={unidade.nome}>
      <VisualizadorUnidade modelo={unidade.modelo} nome={unidade.nome} />
      <header>
        <span className={`sobretitulo lado-${unidade.lado}`}>{unidade.papel}</span>
        <h2>{unidade.nome}</h2>
      </header>
      <GradeNumeros numeros={gradeDeNumeros(unidade.numeros)} />
      {unidade.crescimento && <CrescimentoDaUnidade crescimento={unidade.crescimento} />}
      <section aria-label="Habilidades">
        <h3 className="sobretitulo">Habilidades</h3>
        <ul className="habilidades">{unidade.habilidades.map((h) => <ItemHabilidade key={h.id} habilidade={h} />)}</ul>
      </section>
      <footer className="fonte">Patch {unidade.patch} · Fontes: {unidade.fontes.join("; ")}</footer>
    </article>
  );
}
```

```css
/* app/src/unidades/unidades.css: só variáveis de tokens.css, no visual de docs/design/v1. */
.ficha-unidade { display: flex; flex-direction: column; gap: var(--espaco-4); }
.ficha-unidade h2 { margin: 0; font-family: var(--fonte-display); font-weight: 700; font-size: 44px; line-height: 1; letter-spacing: .02em; }
.modelo { position: relative; margin: 0; aspect-ratio: 1 / 1; max-height: 360px; border-radius: var(--raio); border: 1px solid var(--cor-linha); background: radial-gradient(ellipse at 50% 40%, var(--cor-brilho-mapa) 0%, var(--cor-fundo) 70%); overflow: hidden; }
.modelo canvas { touch-action: none; }
.modelo-poster { width: 100%; height: 100%; object-fit: contain; }
.modelo-aviso { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: var(--espaco-3); height: 100%; color: var(--cor-texto-3); }
.modelo-girar { position: absolute; right: var(--espaco-3); bottom: var(--espaco-3); min-height: var(--alvo-toque); }
.habilidades { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: var(--espaco-4); }
.habilidade { display: grid; grid-template-columns: 48px 1fr; gap: var(--espaco-3); padding: var(--espaco-4); border: 1px solid var(--cor-linha); border-radius: var(--raio); background: var(--cor-superficie); }
.habilidade h4 { margin: 0 0 var(--espaco-2); font-family: var(--fonte-display); font-size: 20px; }
.habilidade p { margin: 0 0 var(--espaco-2); color: var(--cor-texto-2); line-height: 1.55; }
.habilidade-icone { width: 48px; height: 48px; border-radius: var(--raio-pequeno); }
.habilidade-icone-vazio { display: grid; place-items: center; background: var(--cor-superficie-3); font-family: var(--fonte-display); font-size: 22px; }
.nome-en { color: var(--cor-texto-3); font-size: 14px; font-weight: 400; }
.condicoes { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1px; margin: var(--espaco-2) 0; background: var(--cor-linha); border: 1px solid var(--cor-linha); border-radius: var(--raio-pequeno); overflow: hidden; }
.condicoes div { background: var(--cor-superficie); padding: var(--espaco-2) var(--espaco-3); }
.condicoes dt { font-size: 12px; color: var(--cor-texto-3); }
.condicoes dd { margin: 0; font-family: var(--fonte-num); font-size: 14px; }
.o-que-muda { border-left: 3px solid var(--cor-destaque); padding-left: var(--espaco-3); }
.o-que-muda h5 { margin: 0 0 var(--espaco-1); font-family: var(--fonte-display); font-size: 13px; letter-spacing: .14em; color: var(--cor-destaque); text-transform: uppercase; }
.o-que-muda-vazio { color: var(--cor-texto-3); font-size: 13px; }
.crescimento-tabela { width: 100%; border-collapse: collapse; font-family: var(--fonte-num); font-size: 13px; }
.crescimento-tabela caption { text-align: left; font-family: var(--fonte-display); letter-spacing: .14em; color: var(--cor-texto-3); padding-bottom: var(--espaco-2); }
.crescimento-tabela th, .crescimento-tabela td { padding: var(--espaco-1) var(--espaco-2); border-bottom: 1px solid var(--cor-linha); text-align: right; }
.tabela-rolavel { overflow-x: auto; }
.unidades-pagina { display: flex; flex-wrap: wrap; }
.unidades-lista { flex: 1 1 300px; max-width: 360px; padding: var(--espaco-5); border-right: 1px solid var(--cor-linha); }
.unidades-lista h2 { margin: var(--espaco-5) 0 var(--espaco-2); }
.unidades-lista ul { list-style: none; margin: 0 0 var(--espaco-4); padding: 0; }
.unidades-lista a { display: flex; align-items: center; min-height: 40px; padding: 0 var(--espaco-3); border-radius: var(--raio-pequeno); color: var(--cor-texto); text-decoration: none; }
.unidades-lista a[aria-current="page"] { background: var(--cor-superficie-3); font-weight: 600; }
.unidades-ficha { flex: 999 1 560px; min-width: 0; max-width: 860px; padding: var(--espaco-6); }
.camp-tipos { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: var(--espaco-3); }
@media (max-width: 720px) {
  .unidades-lista { max-width: none; border-right: 0; border-bottom: 1px solid var(--cor-linha); }
  .unidades-ficha { padding: var(--espaco-4); }
  .ficha-unidade h2 { font-size: 34px; }
}
@media (prefers-reduced-motion: reduce) { .modelo-girar { display: none; } }
```

- [ ] **Step 4: Rodar e ver passar**: `cd app && npm test` → passam.

- [ ] **Step 5: Commit**

```bash
git add app/src/unidades/FichaUnidade.tsx app/src/unidades/FichaUnidade.test.tsx app/src/unidades/unidades.css app/src/objectives/ObjectivePanel.tsx
git commit -m "feat: add unit sheet with abilities, conditions and growth"
```

---

### Task 10: Tela Unidades no glossário

**Files:**
- Create: `app/src/unidades/UnidadesPage.tsx`, `app/src/unidades/UnidadesPage.test.tsx`
- Modify: `app/src/App.tsx`, `app/src/glossary/GlossaryPage.tsx`

**Interfaces:**
- Consumes: `useData`, `Indisponivel`, `unidadesSchema`, `campsSchema`, `unidadeSchema`, `agruparUnidades`, `FichaUnidade`
- Produces: `UnidadesPage()`; rota `/glossario/unidades/:id?`

- [ ] **Step 1: Teste que falha**

```tsx
// app/src/unidades/UnidadesPage.test.tsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router";
import { UnidadesPage } from "./UnidadesPage";

vi.mock("./FichaUnidade", () => ({ FichaUnidade: ({ unidade }: { unidade: { nome: string } }) => `ficha de ${unidade.nome}` }));

const resumo = (id: string, nome: string, grupo: string, camps: string[] = []) => ({ id, nome, grupo, papel: "", lado: "neutro", modelo: id, camps, habilidades: [] });
const arquivos: Record<string, unknown> = {
  "/data/unidades.json": [resumo("roshan", "Roshan", "chefe"), resumo("kobold", "Kobold", "selva", ["kobold"])],
  "/data/camps.json": [{ id: "kobold", nome: "Kobold", tamanho: "small", terreno: "seco", unidades: [{ id: "kobold", qtd: 3 }], ouro: [40, 50], xp: 89 }],
  "/data/unidades/kobold.json": {
    id: "kobold", id_jogo: "npc_dota_neutral_kobold", nome: "Kobold", grupo: "selva", papel: "monstro da selva", lado: "neutro",
    numeros: { vida: 240, regeneracao: 0.5, mana: 0, regeneracao_mana: 0, armadura: 0, resistencia_magica: 0, dano_min: 14, dano_max: 17,
      intervalo_ataque: 2, alcance_ataque: 100, ataque: "corpo a corpo", velocidade: 270, ouro_min: 3, ouro_max: 5, xp: 14, visao_dia: 800, visao_noite: 800 },
    habilidades: [], crescimento: null, modelo: "n_creep_kobold_c", patch: "7.41", fontes: ["jogo"],
  },
};

beforeEach(() => {
  vi.stubGlobal("fetch", (path: string) => Promise.resolve(
    path in arquivos ? new Response(JSON.stringify(arquivos[path])) : new Response("", { status: 404 })));
});
afterEach(() => vi.unstubAllGlobals());

const abrir = (url: string) => render(
  <MemoryRouter initialEntries={[url]}><Routes><Route path="/glossario/unidades/:id?" element={<UnidadesPage />} /></Routes></MemoryRouter>,
);

it("lista as unidades agrupadas e abre a ficha", async () => {
  abrir("/glossario/unidades/kobold");
  expect(await screen.findByRole("heading", { name: "Roshan e Tormentor" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Selva: pequeno" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Kobold" })).toHaveAttribute("aria-current", "page");
  expect(await screen.findByText("ficha de Kobold")).toBeInTheDocument();
});

it("ficha que não carrega mostra dados indisponíveis e mantém a lista", async () => {
  abrir("/glossario/unidades/roshan");
  expect(await screen.findByRole("alert")).toHaveTextContent("Dados indisponíveis");
  expect(screen.getByRole("link", { name: "Kobold" })).toBeInTheDocument();
});
```

- [ ] **Step 2: Rodar e ver falhar**: `cd app && npm test` → FAIL.

- [ ] **Step 3: Implementação**

```tsx
// app/src/unidades/UnidadesPage.tsx
import { Link, useParams } from "react-router";
import { campsSchema, unidadeSchema, unidadesSchema, type UnidadeResumo } from "../data/schemas";
import { Indisponivel, useData } from "../data/useData";
import { agruparUnidades } from "./ficha";
import { FichaUnidade } from "./FichaUnidade";
import "./unidades.css";

// O jogo dá o mesmo nome ao creep dos dois lados ("Criatura Guerreira"); a lista diz qual é qual.
const ROTULO_LADO = { radiant: "Radiant", dire: "Dire", neutro: "Neutro" } as const satisfies Record<UnidadeResumo["lado"], string>;

function FichaCarregada({ id }: { id: string }) {
  const ficha = useData(`/data/unidades/${id}.json`, unidadeSchema);
  if (ficha.estado === "carregando") return <p>Carregando…</p>;
  if (ficha.estado === "indisponivel") return <Indisponivel motivo={ficha.motivo} />;
  return <FichaUnidade unidade={ficha.dados} />;
}

export function UnidadesPage() {
  const { id } = useParams();
  const unidades = useData("/data/unidades.json", unidadesSchema);
  const camps = useData("/data/camps.json", campsSchema);
  if (unidades.estado === "carregando") return <p>Carregando…</p>;
  if (unidades.estado === "indisponivel") return <Indisponivel motivo={unidades.motivo} />;
  const grupos = agruparUnidades(unidades.dados, camps.estado === "ok" ? camps.dados : []);
  return (
    <section className="unidades-pagina">
      <nav className="unidades-lista" aria-label="Unidades">
        <Link className="pilula" to="/glossario">← Termos</Link>
        {grupos.map((g) => (
          <section key={g.titulo} aria-labelledby={`grupo-${g.titulo}`}>
            <h2 id={`grupo-${g.titulo}`} className="sobretitulo">{g.titulo}</h2>
            <ul>
              {g.unidades.map((u) => (
                <li key={u.id}><Link to={`/glossario/unidades/${u.id}`} aria-current={u.id === id ? "page" : undefined}>{u.nome}{u.grupo === "lane" && <span className="nome-en">&nbsp;· {ROTULO_LADO[u.lado]}</span>}</Link></li>
              ))}
            </ul>
          </section>
        ))}
      </nav>
      <div className="unidades-ficha">
        {id ? <FichaCarregada key={id} id={id} /> : <h1>Escolha uma unidade.</h1>}
      </div>
    </section>
  );
}
```

Em `App.tsx`, acrescente as rotas (no mesmo estilo que a 1B deixou; se as telas estão em `lazy`, use `lazy` também, porque esta tela puxa o visualizador):

```tsx
{ path: "/glossario/unidades/:id?", lazy: async () => ({ Component: (await import("./unidades/UnidadesPage")).UnidadesPage }) },
```

dentro dos filhos do `Shell`, antes de `/glossario/:id`. Se o objeto do `Shell` ainda não tem, acrescente `hydrateFallbackElement: <p>Carregando…</p>` nele (sem isso o react-router avisa no console ao abrir direto uma rota `lazy`). Em `GlossaryPage.tsx`, no topo da lista (acima do campo de filtro), acrescente `<Link className="pilula" to="/glossario/unidades">Unidades: Roshan, creeps e selva</Link>`.

- [ ] **Step 4: Rodar e ver passar**: `cd app && npm test && npm run build` → passam. No navegador (`npm run dev`), abra `/glossario/unidades/roshan`: o Roshan gira animado, a grade mostra 6.000 de vida, as 6 habilidades aparecem com ícone. Compare com `docs/design/v1/Glossario.dc.html` (lista à esquerda, conteúdo grande à direita) no PC e em 390×844.

- [ ] **Step 5: Commit**

```bash
git add app/src/unidades/UnidadesPage.tsx app/src/unidades/UnidadesPage.test.tsx app/src/App.tsx app/src/glossary/GlossaryPage.tsx
git commit -m "feat: add units screen to the glossary"
```

---

### Task 11: Unidades no painel do objetivo (Roshan, Tormentor e camps)

**Files:**
- Create: `app/src/unidades/UnidadeDoObjetivo.tsx`, `app/src/unidades/UnidadeDoObjetivo.test.tsx`
- Modify: `app/src/objectives/ObjectivePanel.tsx`, `app/src/map/MapPage.tsx`

**Interfaces:**
- Consumes: `Objetivo`, `tiposDoCamp`, `FichaUnidade`, `useData`
- Produces: `UnidadeDoObjetivo({ objetivo })`; `ObjectivePanel` aceita `unidade?: ReactNode`, mostrado na aba Básico acima da grade de números.

- [ ] **Step 1: Teste que falha**

```tsx
// app/src/unidades/UnidadeDoObjetivo.test.tsx
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import { UnidadeDoObjetivo } from "./UnidadeDoObjetivo";

vi.mock("./FichaUnidade", () => ({ FichaUnidade: ({ unidade }: { unidade: { nome: string } }) => `ficha de ${unidade.nome}` }));

const objetivo = (tipo: string, detalhes: Record<string, unknown> = {}) => ({ id: `${tipo}_1`, tipo, nome: tipo, x: 0.5, y: 0.5, lado: "neutro" as const, detalhes });
const arquivos: Record<string, unknown> = {
  "/data/unidades/roshan.json": { id: "roshan", nome: "Roshan" },
  "/data/camps.json": [
    { id: "kobold", nome: "Kobold", tamanho: "small", terreno: "seco", unidades: [{ id: "kobold", qtd: 3 }, { id: "kobold_taskmaster", qtd: 1 }], ouro: [40, 50], xp: 89 },
    { id: "centaur", nome: "Centaur", tamanho: "medium", terreno: "seco", unidades: [{ id: "centaur_khan", qtd: 1 }], ouro: [60, 70], xp: 100 },
  ],
  "/data/unidades.json": [
    { id: "kobold", nome: "Kobold", grupo: "selva", papel: "", lado: "neutro", modelo: "k", camps: ["kobold"], habilidades: [] },
    { id: "kobold_taskmaster", nome: "Capataz Kobold", grupo: "selva", papel: "", lado: "neutro", modelo: "k2", camps: ["kobold"], habilidades: [] },
  ],
};

vi.mock("../data/schemas", async (original) => {
  const real = await original<typeof import("../data/schemas")>();
  return { ...real, unidadeSchema: real.unidadeSchema.pick({ id: true, nome: true }) };
});

beforeEach(() => vi.stubGlobal("fetch", (path: string) => Promise.resolve(new Response(JSON.stringify(arquivos[path])))));
afterEach(() => vi.unstubAllGlobals());

it("Roshan mostra a ficha da unidade", async () => {
  render(<MemoryRouter><UnidadeDoObjetivo objetivo={objetivo("roshan")} /></MemoryRouter>);
  expect(await screen.findByText("ficha de Roshan")).toBeInTheDocument();
});

it("camp pequeno seco lista os tipos possíveis com as unidades e quantidades", async () => {
  render(<MemoryRouter><UnidadeDoObjetivo objetivo={objetivo("camp", { tipo: "small", anfibio: false })} /></MemoryRouter>);
  expect(await screen.findByRole("heading", { name: "Kobold" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "3× Kobold" })).toHaveAttribute("href", "/glossario/unidades/kobold");
  expect(screen.getByRole("link", { name: "1× Capataz Kobold" })).toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: "Centaur" })).toBeNull();
});

it("torre não mostra nada", () => {
  const { container } = render(<MemoryRouter><UnidadeDoObjetivo objetivo={objetivo("torre")} /></MemoryRouter>);
  expect(container).toBeEmptyDOMElement();
});
```

- [ ] **Step 2: Rodar e ver falhar**: `cd app && npm test` → FAIL.

- [ ] **Step 3: Implementação**

```tsx
// app/src/unidades/UnidadeDoObjetivo.tsx
import { Link } from "react-router";
import { campsSchema, unidadeSchema, unidadesSchema, type Objetivo } from "../data/schemas";
import { Indisponivel, useData } from "../data/useData";
import { tiposDoCamp } from "./ficha";
import { FichaUnidade } from "./FichaUnidade";

const UNIDADE_DO_TIPO: Readonly<Partial<Record<string, string>>> = { roshan: "roshan", tormentor: "tormentor" };

function FichaDoObjetivo({ id }: { id: string }) {
  const ficha = useData(`/data/unidades/${id}.json`, unidadeSchema);
  if (ficha.estado === "carregando") return <p>Carregando…</p>;
  if (ficha.estado === "indisponivel") return <Indisponivel motivo={ficha.motivo} />;
  return <FichaUnidade unidade={ficha.dados} />;
}

function TiposDoCamp({ camp }: { camp: Objetivo }) {
  const camps = useData("/data/camps.json", campsSchema);
  const unidades = useData("/data/unidades.json", unidadesSchema);
  if (camps.estado === "indisponivel") return <Indisponivel motivo={camps.motivo} />;
  if (camps.estado === "carregando") return <p>Carregando…</p>;
  const nomes = new Map(unidades.estado === "ok" ? unidades.dados.map((u) => [u.id, u.nome]) : []);
  return (
    <section aria-label="Pode nascer neste camp">
      <h3 className="sobretitulo">Pode nascer neste camp</h3>
      <ul className="camp-tipos">
        {tiposDoCamp(camp, camps.dados).map((t) => (
          <li key={t.id}>
            <h4>{t.nome}</h4>
            <ul className="pilulas">
              {t.unidades.map((u) => (
                <li key={u.id}><Link className="pilula" to={`/glossario/unidades/${u.id}`}>{u.qtd}× {nomes.get(u.id) ?? u.id}</Link></li>
              ))}
            </ul>
            <p className="fonte">Ouro {t.ouro[0]} a {t.ouro[1]} · XP {t.xp}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function UnidadeDoObjetivo({ objetivo }: { objetivo: Objetivo }) {
  const id = UNIDADE_DO_TIPO[objetivo.tipo];
  if (id) return <FichaDoObjetivo id={id} />;
  if (objetivo.tipo === "camp") return <TiposDoCamp camp={objetivo} />;
  return null;
}
```

Em `ObjectivePanel.tsx`: acrescente `unidade?: ReactNode` às props (importe `type ReactNode` de `react`) e, dentro do `tabpanel`, como primeira linha: `{aba === "basico" && unidade}`. Em `MapPage.tsx`, passe `unidade={<UnidadeDoObjetivo objetivo={aberto} />}` ao `ObjectivePanel`.

- [ ] **Step 4: Rodar e ver passar**: `cd app && npm test` → passam. No navegador, clique no fosso do Roshan: a aba Básico mostra o modelo girando, os números e as habilidades, e o texto que já existia continua abaixo. Clique num camp anfíbio (riacho): aparecem os quatro tipos de sapo.

- [ ] **Step 5: Commit**

```bash
git add app/src/unidades/UnidadeDoObjetivo.tsx app/src/unidades/UnidadeDoObjetivo.test.tsx app/src/objectives/ObjectivePanel.tsx app/src/map/MapPage.tsx
git commit -m "feat: show unit sheet and camp types in the objective panel"
```

---

### Task 12: Unidades e habilidades na busca global

**Files:**
- Modify: `app/src/search/index.ts`, `app/src/search/SearchBox.tsx`, `app/src/search/index.test.ts`

**Interfaces:**
- Consumes: `UnidadeResumo`, `unidadesSchema`, `dadosOuVazio`
- Produces: `docsDeUnidades(unidades): Doc[]`; `Achado["tipo"]` ganha `"unidade" | "habilidade"`; `construirIndice` aceita `unidades?: UnidadeResumo[]`.

- [ ] **Step 1: Testes que falham** (acrescente ao `index.test.ts`; a chamada usa os campos que a 1B deixou em `construirIndice`, com listas vazias)

```ts
const unidades = [{ id: "roshan", nome: "Roshan", grupo: "chefe" as const, papel: "chefe neutro", lado: "neutro" as const, modelo: "roshan", camps: [],
  habilidades: [{ id: "roshan_slam", nome: "Porrada", nome_en: "Slam" }] },
  { id: "kobold", nome: "Kobold", grupo: "selva" as const, papel: "monstro da selva", lado: "neutro" as const, modelo: "k", camps: ["kobold"], habilidades: [] }];

it.each([
  { consulta: "porrada", tipo: "habilidade", link: "/glossario/unidades/roshan#roshan_slam" },
  { consulta: "slam", tipo: "habilidade", link: "/glossario/unidades/roshan#roshan_slam" },
  { consulta: "kobo", tipo: "unidade", link: "/glossario/unidades/kobold" },
])("busca $consulta acha $tipo", ({ consulta, tipo, link }) => {
  const indice = construirIndice({ rotas: [], objetivos: [], termos: [], unidades });
  expect(buscar(indice, consulta)[0]).toMatchObject({ tipo, link });
});
```

- [ ] **Step 2: Rodar e ver falhar**: `cd app && npm test` → FAIL.

- [ ] **Step 3: Implementação**

Em `index.ts` (no formato que a 1B deixou, com `TIPOS` como lista `as const` e as fontes opcionais com valor padrão): acrescente `"unidade", "habilidade"` ao fim de `TIPOS`; acrescente `unidades?: readonly UnidadeResumo[]` ao tipo `Fontes` e `unidades = []` na desestruturação de `construirIndice`; no fim do `busca.addAll([...])`, acrescente `...docsDeUnidades(unidades),`; e a função:

```ts
// Habilidade repetida (Perfurante está em vários creeps) entra uma vez, ligada à primeira unidade.
export function docsDeUnidades(unidades: readonly UnidadeResumo[]): Doc[] {
  const habilidades = new Map<string, Doc>();
  for (const u of unidades) {
    for (const h of u.habilidades) {
      if (habilidades.has(h.id)) continue;
      const titulo = h.nome_en ? `${h.nome} (${h.nome_en})` : h.nome;
      habilidades.set(h.id, { chave: `habilidade:${h.id}`, tipo: "habilidade", id: h.id, titulo, texto: u.nome, link: `/glossario/unidades/${u.id}#${h.id}` });
    }
  }
  const docsUnidade = unidades.map((u): Doc => ({ chave: `unidade:${u.id}`, tipo: "unidade", id: u.id, titulo: u.nome, texto: `${u.papel} ${u.id}`, link: `/glossario/unidades/${u.id}` }));
  return [...docsUnidade, ...habilidades.values()];
}
```

Em `SearchBox.tsx`: acrescente `unidade: "Unidade", habilidade: "Habilidade"` ao objeto `ETIQUETA` (o `satisfies Record<Achado["tipo"], string>` faz o `tsc` falhar sem elas); carregue `const unidades = useData("/data/unidades.json", unidadesSchema);` junto dos opcionais da 1B (entra na lista de `opcionaisProntos` e nas dependências do `useMemo`) e passe `unidades: dadosOuVazio(unidades)` para `construirIndice`.

- [ ] **Step 4: Rodar e ver passar**: `cd app && npm test` → passam. No navegador, digite "porrada" e "kobold" na busca do topo.

- [ ] **Step 5: Commit**

```bash
git add app/src/search
git commit -m "feat: search units and abilities by portuguese and english name"
```

---

### Task 13: Imagem parada para aparelho sem 3D

**Files:**
- Create: `app/src/unidades/PaginaPoster.tsx`, `app/scripts/posters.ts`
- Modify: `app/src/App.tsx`, `app/package.json`

**Interfaces:**
- Consumes: `Cena3D` (`girarSozinho={false}`, `aoCarregar`), `urlDoModelo`
- Produces: rota `/poster/:modelo` (fora do `Shell`, só para o script); `npm run posters`; arquivos `app/public/data/posters/<modelo>.jpg` usados por `urlDoPoster`.

- [ ] **Step 1: Dependência e script**

Run: `cd app && npm install -D playwright@latest && npx playwright install chromium`

Em `package.json`, em `scripts`: `"posters": "node --experimental-strip-types scripts/posters.ts"`.

```tsx
// app/src/unidades/PaginaPoster.tsx
import { useState } from "react";
import { useParams } from "react-router";
import { Cena3D } from "./Cena3D";
import { urlDoModelo } from "./ficha";

// Só o script das imagens paradas abre esta página: modelo parado, sem giro, e o aviso "pronto" depois de carregar.
export function PaginaPoster() {
  const { modelo = "" } = useParams();
  const [pronto, setPronto] = useState(false);
  return (
    <div style={{ width: 512, height: 512, background: "var(--cor-fundo)" }}>
      <Cena3D url={urlDoModelo(modelo)} girarSozinho={false} aoCarregar={() => setPronto(true)} />
      {pronto && <output>pronto</output>}
    </div>
  );
}
```

Em `App.tsx`, fora do `Shell` (no mesmo nível do objeto com `element: <Shell />`):

```tsx
{ path: "/poster/:modelo", lazy: async () => ({ Component: (await import("./unidades/PaginaPoster")).PaginaPoster }) },
```

```ts
// app/scripts/posters.ts
import { mkdirSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { chromium } from "playwright";

const BASE = process.env.BASE_URL ?? "http://localhost:4173";
const DADOS = join(import.meta.dirname, "..", "public", "data");
const POSTERS = join(DADOS, "posters");
const TEMPO_LIMITE_MS = 30_000;
const QUALIDADE_JPEG = 80;

const modelos = readdirSync(join(DADOS, "modelos")).filter((f) => f.endsWith(".glb")).map((f) => f.slice(0, -".glb".length));
mkdirSync(POSTERS, { recursive: true });

// Um navegador só, fechado no finally: navegador sem janela esquecido aberto esgota a memória no Windows.
const navegador = await chromium.launch({ args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
try {
  const pagina = await navegador.newPage({ viewport: { width: 512, height: 512 } });
  for (const modelo of modelos) {
    await pagina.goto(`${BASE}/poster/${modelo}`, { timeout: TEMPO_LIMITE_MS });
    await pagina.getByText("pronto").waitFor({ timeout: TEMPO_LIMITE_MS });
    await pagina.locator("canvas").screenshot({ path: join(POSTERS, `${modelo}.jpg`), type: "jpeg", quality: QUALIDADE_JPEG });
    console.log(`ok: ${modelo}`);
  }
} finally {
  await navegador.close();
}
```

- [ ] **Step 2: Gerar e conferir**

Run (dois terminais): `cd app && npm run build && npm run preview` e, no outro, `cd app && npm run posters`.
Expected: `ok: <modelo>` 59 vezes; `public/data/posters/` com 59 arquivos `.jpg` de 15 a 40 KB. Rode `npm run build` de novo para os posters entrarem no `dist`. Abra 3 imagens e confira que a unidade aparece inteira e iluminada. Se o navegador sem janela não tiver 3D (imagem preta), troque os `args` por `["--use-gl=angle", "--use-angle=swiftshader-webgl"]` e registre no ledger.

- [ ] **Step 3: Conferir a queda sem 3D**

`npm run dev`; no DevTools, Rendering, desligue o WebGL ("Disable WebGL") ou rode no console `HTMLCanvasElement.prototype.getContext = () => null` antes de recarregar; abra `/glossario/unidades/roshan`: aparece a imagem parada e o resto da ficha igual.

- [ ] **Step 4: Testes e build**: `cd app && npm test && npm run build` → passam.

- [ ] **Step 5: Commit**

```bash
git add app/package.json app/package-lock.json app/scripts/posters.ts app/src/unidades/PaginaPoster.tsx app/src/App.tsx
git commit -m "feat: generate still images of unit models for devices without 3d"
```

---

### Task 14: Verificação final do adendo

**Files:**
- Create: `docs/superpowers/verificacao/2026-10-06-fase1c-unidades.md`

- [ ] **Step 1: Suítes e export**

Run: `cd export && python -m dota_export && python -m pytest -q` e `cd app && npm test && npm run build`.
Expected: tudo passa; o export imprime `modelos: 59, <total> KB` com total abaixo de 15.360 KB (critério 3).

- [ ] **Step 2: Critério 2 (números contra o jogo)**

`test_conferencia_unidades.py` confere 260 números da selva (critério pede 10). Abra o Dota, Aprender > Glossário > Roshan, e compare os 10 números da ficha do app (`/glossario/unidades/roshan`) com a tela do jogo. Anote os 10 pares no registro.

- [ ] **Step 3: Critérios 4 e 5 (celular e primeira tela)**

`npm run preview`; DevTools em 360×800, rede "Fast 4G", CPU 4× mais lenta:
- Primeira tela (mapa): abre em menos de 3 s e a aba Network não baixa nenhum `.glb` nem o arquivo `Cena3D-*.js`.
- Toque no Roshan no mapa: o modelo aparece animado em até 2 s (meça do toque até o primeiro quadro com o painel Performance); o giro fica em 30 quadros por segundo ou mais (medidor de FPS do Rendering).
- Abra 5 unidades seguidas em `/glossario/unidades`: a memória da aba (Memory, heap e GPU no gerenciador de tarefas do Chrome) não cresce a cada troca.
- Com "prefers-reduced-motion: reduce" emulado (Rendering), o modelo fica parado e o botão "Girar" some.

- [ ] **Step 4: Critério 1 e 6 (cobertura) e visual**

- `/glossario/unidades`: 2 chefes, 24 creeps de lane, 45 unidades da selva nos grupos pequeno, médio, grande, ancient e anfíbio.
- Abra uma unidade de cada grupo e uma de cada lado: modelo, números, habilidades com ícone (Força do Imortal do Roshan com o ícone neutro da inicial, porque o jogo não tem ícone para ela).
- Compare a ficha no painel do mapa com `docs/design/v1/Main.dc.html` (painel à direita, título grande, grade mono) no PC e em 390×844.

- [ ] **Step 5: Registro e commit**

Grave em `docs/superpowers/verificacao/2026-10-06-fase1c-unidades.md`: data, aparelho, os números medidos de cada critério (tamanho por modelo, total, tempo até o primeiro quadro no celular simulado, FPS, peso da primeira tela antes e depois), os 10 pares do Roshan e as diferenças visuais achadas (viram backlog no fim do arquivo).

```bash
git add docs/superpowers/verificacao/2026-10-06-fase1c-unidades.md
git commit -m "test: verify units 3d addendum success criteria"
```
