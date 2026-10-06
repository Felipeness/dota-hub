"""Markdown com frontmatter simples (chave: valor; listas com '- ') para JSON."""
import re
from pathlib import Path

ORIGENS = ("recomendado", "replay")
PADRAO = frozenset({"id", "titulo", "patch", "fontes", "links"})
SECAO = re.compile(r"^##\s+(Básico|Avançado)\s*$", re.MULTILINE)


def _frontmatter(texto: str) -> tuple[dict, str]:
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
        if valor.strip():
            meta[chave] = valor.strip()
    return meta, corpo


def _secoes(corpo: str) -> dict:
    partes = SECAO.split(corpo)
    blocos = {partes[i].lower(): partes[i + 1].strip() for i in range(1, len(partes), 2)}
    return {"basico": blocos.get("básico") or partes[0].strip(), "avancado": blocos.get("avançado") or None}


def _marca(origem: str | None, replay: str | list[str] | None) -> dict | None:
    """Marca de recomendação de uma seção: recomendado, ou replay com os ids das partidas."""
    replays = [replay] if isinstance(replay, str) else (replay or [])
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
        meta, corpo = _frontmatter(arq.read_text(encoding="utf-8"))
        secoes = _secoes(corpo)
        return {"id": meta.get("id", arq.stem), "titulo": meta["titulo"], "patch": meta.get("patch", "7.41"),
                "fontes": meta.get("fontes", []), "secoes": secoes, "origem": _origem(meta, secoes),
                "links": meta.get("links", []), "extras": {k: v for k, v in meta.items() if k not in PADRAO}}
    except (ValueError, KeyError) as erro:
        raise ValueError(f"{arq.name}: {erro}") from erro


def carregar(pasta: Path) -> list[dict]:
    return [_item(arq) for arq in sorted(pasta.glob("*.md"))]
