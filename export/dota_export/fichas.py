"""Ficha por posição dos heróis sem guia completo (content/fichas/<nome interno>.md) e o catálogo dos heróis do app."""
import json
import re
from functools import cache
from pathlib import Path

from . import fontes
from .conteudo import fonte_legivel, frontmatter, sem_caminho_local
from .retratos import id_no_app

SECAO = re.compile(r"^## (.+?)\s*$", re.MULTILINE)
SUBSECAO = re.compile(r"^### (.+?)\s*$", re.MULTILINE)
BLOCO = re.compile(r"^#### (.+?)\s*$", re.MULTILINE)
POSICAO = re.compile(r"^Pos ([1-5]) \((.+)\)$")
# "(blade_mail)", "(`arcane_boots`)", "(orchid / bloodthorn)" ou "(solar_crest, via Pavise)": os slugs fecham o título,
# a nota depois da vírgula fica no nome.
SLUG_NO_TITULO = re.compile(r"\s*\(`?([a-z0-9_]+(?: / [a-z0-9_]+)*)`?(?:, ([^)]+))?\)$")
# Visage traz a passiva Gravekeeper's Cloak no meio da build: bloco de habilidade, sem ícone de item.
HABILIDADE = re.compile(r"\(passiva\b[^)]*\)$")
PARAGRAFO = re.compile(r"\n\s*\n")
CAMPO = re.compile(r"^- ([a-z ]+): (.+)$")
PALAVRA = re.compile(r"\b[a-z0-9_]+\b")
LISTA_DE_SLUGS = re.compile(r"^[a-z0-9_]+(?:, [a-z0-9_]+)*\.?$")
# Um item da lista que abre a linha de itens iniciais: "gauntlets (pra 2x Bracer)", seguido de vírgula, ponto ou fim.
ENTRADA_DA_LISTA = re.compile(r"([a-z0-9_]+)(?: \([^)]*\))?(?:[,;] |\.(?: |$)|$)")
CAMPOS_DO_ITEM = {"minuto": "minuto", "minute": "minuto", "quando": "quando", "porque": "porque", "detalhe": "detalhe",
                  "contra": "contra", "combo": "combo", "fonte": "fonte", "nota": "nota"}
# "- build:" aparece quando a posição reaproveita a build de outra (Disruptor pos 4, Hoodwink pos 5).
CAMPOS_DA_POSICAO = {"quando pegar": "quando_pegar", "itens iniciais": "itens_iniciais", "build": "nota", "fonte": "fonte"}
# Os 22 guias completos vêm do projeto Rumo a Immortal, todos de safelane.
POSICOES_DOS_GUIAS = (1,)


@cache
def _itens() -> dict:
    return json.loads(fontes.ITENS.read_text(encoding="utf-8"))


@cache
def _slug_pelo_nome() -> dict[str, str]:
    return {dados["dname"].lower(): slug for slug, dados in _itens().items() if "dname" in dados}


@cache
def _herois() -> list[dict]:
    return json.loads(fontes.HEROIS_OPENDOTA.read_text(encoding="utf-8"))


def _slug_e_nome(titulo: str) -> tuple[str | None, str]:
    """Título do bloco -> (slug, nome): "Solar Crest (solar_crest, via Pavise)" -> ("solar_crest", "Solar Crest (via Pavise)")."""
    if HABILIDADE.search(titulo):
        return None, titulo
    achado = SLUG_NO_TITULO.search(titulo)
    if not achado:
        # Mirana anota só o nome do item; o items.json resolve o slug.
        slug = _slug_pelo_nome().get(titulo.lower())
        if slug is None:
            raise ValueError(f"item sem slug e sem nome conhecido: {titulo}")
        return slug, titulo
    slugs, nota = achado[1].split(" / "), achado[2]
    if fora := [s for s in slugs if s not in _itens()]:
        raise ValueError(f"slug fora do items.json: {', '.join(fora)}")
    nome = titulo[:achado.start()].strip()
    # "Orchid Malevolence / Bloodthorn": o ícone é o da primeira compra.
    return slugs[0], f"{nome} ({nota})" if nota else nome


def _campos(titulo: str, corpo: str, nomes: dict[str, str]) -> dict[str, str]:
    campos = {}
    for linha in filter(None, (l.strip() for l in corpo.splitlines())):
        achado = CAMPO.match(linha)
        chave = nomes.get(achado[1]) if achado else None
        if chave is None:
            raise ValueError(f"{titulo}: linha fora do formato '- campo: texto': {linha[:60]}")
        if chave in campos:
            raise ValueError(f"{titulo}: campo repetido '{achado[1]}'")
        campos[chave] = achado[2].strip()
    return campos


def _fontes(texto: str) -> list[str]:
    return [fonte_legivel(f.strip()) for f in texto.split(";") if f.strip()]


def _item(titulo: str, corpo: str) -> dict:
    slug, nome = _slug_e_nome(titulo)
    campos = _campos(titulo, corpo, CAMPOS_DO_ITEM)
    # Nem todo bloco tem porquê: há situacional só com "contra" e item de amostra pequena só com minuto e fonte.
    c = {k: sem_caminho_local(v) for k, v in campos.items()}
    return {"item": slug, "nome": nome, "minuto": c.get("minuto"), "quando": c.get("quando"), "porque": c.get("porque"),
            "detalhe": " ".join(filter(None, (c.get("detalhe"), c.get("nota")))) or None,
            "contra": c.get("contra"), "combo": c.get("combo"),
            "fontes": _fontes(campos.get("fonte", ""))}


def _paragrafos_soltos(texto: str) -> tuple[str, list[str]]:
    """(linhas de campo, parágrafos de texto corrido) de um bloco de item."""
    paragrafos = PARAGRAFO.split(texto.strip())
    return "\n".join(p for p in paragrafos if p.startswith("- ")), [p for p in paragrafos if p and not p.startswith("- ")]


def _subsecao(corpo: str) -> tuple[str | None, list[dict]]:
    """(nota, itens). A nota junta o texto corrido antes e depois dos itens: quando a posição reaproveita a build
    de outra, ou um item recorrente sem bloco próprio (Dark Seer, Magnus)."""
    introducao, *partes = BLOCO.split(corpo)
    notas, itens = [introducao.strip()], []
    for titulo, texto in zip(partes[::2], partes[1::2]):
        campos, soltos = _paragrafos_soltos(texto)
        itens.append(_item(titulo, campos))
        notas += soltos
    return _juntar(notas), itens


def _juntar(paragrafos: list[str | None]) -> str | None:
    return sem_caminho_local("\n\n".join(filter(None, paragrafos))) or None


def _nome_do_item(palavra: str) -> str:
    return _itens()[palavra]["dname"] if palavra in _itens() else palavra


def itens_iniciais(texto: str) -> dict:
    """Lista de abertura vira ícones; quando a linha tem mais que a lista, o texto inteiro fica de nota com o nome dos itens."""
    texto = sem_caminho_local(texto)
    nota = None if LISTA_DE_SLUGS.match(texto) else PALAVRA.sub(lambda m: _nome_do_item(m[0]), texto)
    return {"itens": _lista_inicial(texto), "nota": nota}


def _lista_inicial(texto: str) -> list[str]:
    """Só a lista que abre a linha vira ícone; item citado depois, no comentário ou na fonte, fica no texto da nota."""
    slugs, inicio = [], 0
    while (achado := ENTRADA_DA_LISTA.match(texto, inicio)) and achado[1] in _itens():
        slugs.append(achado[1])
        inicio = achado.end()
    return slugs


def _posicao(titulo: str, corpo: str) -> dict:
    achado = POSICAO.match(titulo)
    if not achado:
        raise ValueError(f"seção fora do formato 'Pos N (função)': {titulo}")
    cabeca, *resto = SUBSECAO.split(corpo)
    subsecoes = dict(zip(resto[::2], resto[1::2]))
    if sobra := set(subsecoes) - {"Build", "Situacionais"}:
        raise ValueError(f"{titulo}: subseção desconhecida {sorted(sobra)}")
    campos = _campos(titulo, cabeca, CAMPOS_DA_POSICAO)
    c = {k: sem_caminho_local(v) for k, v in campos.items()}
    introducao_build, build = _subsecao(subsecoes.get("Build", ""))
    nota_build = _juntar([c.get("nota"), introducao_build])
    if not build and nota_build is None:
        raise ValueError(f"{titulo}: sem build")
    nota_situacionais, situacionais = _subsecao(subsecoes.get("Situacionais", ""))
    return {"posicao": int(achado[1]), "funcao": achado[2], "quando_pegar": c.get("quando_pegar"),
            "itens_iniciais": itens_iniciais(c["itens_iniciais"]) if "itens_iniciais" in c else None,
            "fontes": _fontes(campos.get("fonte", "")),
            "nota_build": nota_build, "build": build, "nota_situacionais": nota_situacionais, "situacionais": situacionais}


def _posicoes_declaradas(valor: str) -> list[int]:
    """posicoes: [3, 1] no frontmatter: a primeira é a principal."""
    return [int(p) for p in re.findall(r"\d", valor)]


def ficha(nome_interno: str, texto: str) -> dict:
    heroi = next((h for h in _herois() if h["name"] == f"npc_dota_hero_{nome_interno}"), None)
    if heroi is None:
        raise ValueError(f"herói fora do heroes.json: {nome_interno}")
    meta, corpo = frontmatter(texto)
    partes = SECAO.split(corpo)
    secoes = dict(zip(partes[1::2], (p.strip() for p in partes[2::2])))
    # Algumas fichas trazem seções a mais (Combos, Interações e contras): vão inteiras, em markdown, depois das posições.
    extras = [{"titulo": t, "texto": sem_caminho_local(c)} for t, c in secoes.items()
              if not t.startswith("Pos ") and t not in ("Resumo", "Roshan")]
    declaradas = _posicoes_declaradas(meta["posicoes"])
    por_numero = {p["posicao"]: p for p in (_posicao(t, c) for t, c in secoes.items() if t.startswith("Pos "))}
    if sorted(declaradas) != sorted(por_numero):
        raise ValueError(f"posicoes {declaradas} no frontmatter, seções {sorted(por_numero)} no corpo")
    return {"id": id_no_app(heroi["localized_name"]), "nome": heroi["localized_name"], "nome_interno": nome_interno,
            "hero_id": heroi["id"], "patch": meta["patch"], "resumo": sem_caminho_local(secoes["Resumo"]),
            "posicoes": [por_numero[n] for n in declaradas], "roshan": sem_caminho_local(secoes["Roshan"]),
            "extras": extras, "fontes": [fonte_legivel(f) for f in meta.get("fontes", [])]}


def carregar(pasta: Path) -> list[dict]:
    fichas = []
    for arq in sorted(pasta.glob("*.md")):
        try:
            fichas.append(ficha(arq.stem, arq.read_text(encoding="utf-8")))
        except (ValueError, KeyError) as erro:
            raise ValueError(f"{arq.name}: {erro}") from erro
    return fichas


def itens(fichas: list[dict]) -> set[str]:
    """Slugs com ícone na ficha: build, situacionais e itens iniciais."""
    return {slug for f in fichas for p in f["posicoes"]
            for slug in (*(i["item"] for i in (*p["build"], *p["situacionais"]) if i["item"]),
                         *(p["itens_iniciais"]["itens"] if p["itens_iniciais"] else ()))}


def catalogo(guias: list[dict], fichas: list[dict]) -> list[dict]:
    """Todos os heróis do heroes.json com a página que abre em /herois/<id>: guia completo (os 22) ou ficha por posição."""
    paginas = {g["hero_id"]: ("guia", g["id"], list(POSICOES_DOS_GUIAS)) for g in guias}
    paginas |= {f["hero_id"]: ("ficha", f["id"], [p["posicao"] for p in f["posicoes"]]) for f in fichas}
    entradas = []
    for h in _herois():
        if h["id"] not in paginas:
            raise ValueError(f"herói sem guia nem ficha: {h['localized_name']}")
        pagina, id_da_pagina, posicoes = paginas[h["id"]]
        if id_da_pagina != id_no_app(h["localized_name"]):
            raise ValueError(f"id {id_da_pagina} diferente do id do app {id_no_app(h['localized_name'])}")
        entradas.append({"id": id_da_pagina, "nome": h["localized_name"], "hero_id": h["id"],
                         "nome_interno": h["name"].removeprefix("npc_dota_hero_"), "atributo": h["primary_attr"],
                         "posicoes": posicoes, "pagina": pagina})
    return sorted(entradas, key=lambda e: e["nome"])
