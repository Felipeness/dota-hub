"""Markdown com frontmatter simples (chave: valor; listas com '- ') para JSON."""
import re
from pathlib import Path

ORIGENS = ("recomendado", "replay")
PADRAO = frozenset({"id", "titulo", "patch", "fontes", "links"})
SECAO = re.compile(r"^##\s+(Básico|Avançado)\s*$", re.MULTILINE)
CAMINHO_LOCAL = re.compile(r"(?<![\w/])[A-Za-z]:/[^\s;]+")
# Domínio citado sem "https://" (ex.: "liquipedia.net/dota2/Roshan"); exige a barra pra não pegar "items.json".
URL_SEM_ESQUEMA = re.compile(r"(?<![\w./])(?:www\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)*\.(?:com|net|org|gg)/[^\s;]*")
# O site não mostra caminho da máquina de quem pesquisou: cada arquivo local vira o nome do dado que ele guarda.
NOMES_LOCAIS = (
    (r"dota-imortal/data/opendota/items\.json$", "items.json do OpenDota (patch 7.41)"),
    (r"constants_abilities\.json$", "constants_abilities.json do OpenDota (habilidades)"),
    (r"heroStats\.json$", "heroStats.json do OpenDota"),
    (r"ref/mecanicas/items\.json$", "items.json (referência de mecânicas)"),
    (r"dota-roshan-solo/data/abilities\.json$", "habilidades do Roshan (abilities.json)"),
    (r"dota-roshan-solo/data/solos\.json$", "replays de Roshan solo (solos.json)"),
    (r"resumo_por_heroi\.json$", "replays de Roshan solo (resumo por herói)"),
    (r"resumo_com_suporte\.json$", "replays de Roshan com suporte (resumo)"),
    (r"candidatos_\w+\.json$", "candidatos a Roshan solo no OpenDota"),
    (r"solos_linha_a_linha\.md$", "replays de Roshan solo, linha a linha"),
    (r"solo_roshan\.md$", "estudo de Roshan solo"),
    (r"content/roshan_solo$", "solo de Roshan publicado no Dota Hub"),
    (r"dota-hub/app/public/data/herois/(\w+)\.json$", r"guia do herói no Dota Hub (\1)"),
    (r"work/hero_(\w+?)(?:_corrigido)?\.json$", r"guia do herói, base do PDF 05 (\1)"),
    (r"liq_(\w+)\.wiki$", r"Liquipedia, página de \1 (cópia local)"),
    (r"pn_(7\.\w+)\.txt$", r"patch notes \1 (cópia local)"),
    (r"heroi-(\w+)/patch_(7\.\w+)\.json$", r"patch notes \2 de \1 (cópia local)"),
)


def frontmatter(texto: str) -> tuple[dict, str]:
    if not texto.startswith("---"):
        raise ValueError("arquivo sem frontmatter")
    _, cabeca, corpo = texto.split("---", 2)
    meta, chave = {}, None
    for linha in cabeca.strip().splitlines():
        if linha.startswith("- ") and chave:
            meta.setdefault(chave, []).append(linha[2:].strip())
            continue
        chave, _, valor = linha.partition(":")
        chave = chave.strip()
        valor = valor.strip()
        if valor:
            meta[chave] = valor[1:-1] if len(valor) >= 2 and valor[0] == valor[-1] == '"' else valor
    return meta, corpo


def _nome_local(caminho: str) -> str:
    for padrao, nome in NOMES_LOCAIS:
        if achado := re.search(padrao, caminho):
            return achado.expand(nome)
    return caminho.rsplit("/", 1)[-1]


def fonte_legivel(fonte: str) -> str:
    """Caminho local vira nome curto legível; domínio sem esquema ganha https:// pra virar link no site."""
    sem_caminho = CAMINHO_LOCAL.sub(lambda m: _nome_local(m[0]), fonte)
    return URL_SEM_ESQUEMA.sub(lambda m: f"https://{m[0]}", sem_caminho)


def _secoes(corpo: str) -> dict:
    partes = SECAO.split(corpo)
    blocos = {partes[i].lower(): partes[i + 1].strip() for i in range(1, len(partes), 2)}
    return {"basico": blocos.get("básico") or partes[0].strip(), "avancado": blocos.get("avançado") or None}


def _marca(origem: str | None, replay: str | list[str] | None) -> dict | None:
    """Marca de recomendação de uma seção: recomendado, ou replay com os ids das partidas."""
    # "replay: id1, id2" numa linha só também vale (formato dos solos de Roshan).
    replays = [r.strip() for r in replay.split(",")] if isinstance(replay, str) else (replay or [])
    if origem is None:
        return None
    if origem not in ORIGENS:
        raise ValueError(f"origem inválida: {origem}")
    if origem == "replay" and not replays:
        raise ValueError("origem replay sem replay: <id>")
    return {"tipo": origem, "replays": replays}


def _origem(meta: dict, secoes: dict) -> dict:
    basico = _marca(meta.get("origem"), meta.get("replay"))
    avancado = _marca(meta.get("origem_avancado"), meta.get("replay_avancado")) or basico
    return {"basico": basico, "avancado": avancado if secoes["avancado"] else None}


def _item(arq: Path) -> dict:
    try:
        meta, corpo = frontmatter(arq.read_text(encoding="utf-8"))
        secoes = _secoes(corpo)
        return {"id": meta.get("id", arq.stem), "titulo": meta["titulo"], "patch": meta.get("patch", "7.41"),
                "fontes": [fonte_legivel(f) for f in meta.get("fontes", [])], "secoes": secoes, "origem": _origem(meta, secoes),
                "links": meta.get("links", []), "extras": {k: v for k, v in meta.items() if k not in PADRAO}}
    except (ValueError, KeyError) as erro:
        raise ValueError(f"{arq.name}: {erro}") from erro


def carregar(pasta: Path) -> list[dict]:
    return [_item(arq) for arq in sorted(pasta.glob("*.md"))]
