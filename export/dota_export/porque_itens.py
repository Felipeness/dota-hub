"""Porquê tático de cada item do guia (content/porque_itens/<herói>.md), indexado pelo slug do item."""
import re
from pathlib import Path

from .conteudo import fonte_legivel, frontmatter

TITULO = re.compile(r"^## (.+)$", re.MULTILINE)
# "(manta)" ou "(sange_and_yasha / manta)"; vale o último, porque alguns títulos têm nota antes: "Magic Wand (opcional) (magic_wand)".
SLUGS = re.compile(r"\(([a-z0-9_]+(?: / [a-z0-9_]+)*)\)")
PARENTESES = re.compile(r"\s*\([^)]*\)")
# Rótulo livre do guia ("Orchid Malevolence (3.275) → Bloodthorn (6.400)", "skadi_e_shivas"): cada parte é um candidato.
SEPARADORES = re.compile(r" / | → | -> | e | ou | para |_e_")
CAMPO = re.compile(r"^- (porque|detalhe|contra|combo|fonte|nota): (.+)$")


def _campos(titulo: str, corpo: str) -> dict[str, str]:
    campos = {}
    for linha in filter(None, (l.strip() for l in corpo.splitlines())):
        achado = CAMPO.match(linha)
        if not achado:
            raise ValueError(f"{titulo}: linha fora do formato '- campo: texto': {linha[:60]}")
        campos[achado[1]] = achado[2].strip()
    if "porque" not in campos:
        raise ValueError(f"{titulo}: falta '- porque:'")
    return campos


def secao(titulo: str, corpo: str) -> dict:
    c = _campos(titulo, corpo)
    # "nota" aparece uma vez (Nullifier do Nature's Prophet) e é continuação do detalhe.
    detalhe = " ".join(filter(None, (c.get("detalhe"), c.get("nota")))) or None
    return {"texto": c["porque"], "detalhe": detalhe, "contra": c.get("contra"), "combo": c.get("combo"),
            "fontes": [fonte_legivel(f.strip()) for f in c.get("fonte", "").split(";") if f.strip()]}


def _nomes(texto: str) -> list[str]:
    """Nome normalizado e as partes dele: "Skull Basher → Abyssal Blade (4.050)" -> [inteiro, "skull basher", "abyssal blade"]."""
    limpo = PARENTESES.sub("", texto).strip().lower().removeprefix("itens ")
    return [limpo, *(parte.strip() for parte in SEPARADORES.split(limpo))]


def _chaves(titulo: str) -> tuple[str | None, list[str]]:
    """(slugs do título ou None, nomes) de uma seção."""
    slugs = SLUGS.findall(titulo)
    return (slugs[-1] if slugs else None), _nomes(titulo)


def indice(corpo: str) -> dict[str, dict]:
    """Slug ou nome normalizado -> porquê. O slug exato vale primeiro; partes e nomes só preenchem o que sobrar."""
    partes = TITULO.split(corpo)[1:]
    secoes = [(*_chaves(titulo), secao(titulo, texto)) for titulo, texto in zip(partes[::2], partes[1::2])]
    por_chave = {}
    for slugs, _, porque in secoes:
        if not slugs:
            continue
        if slugs in por_chave:
            raise ValueError(f"seção repetida para {slugs}")
        por_chave[slugs] = porque
    for slugs, nomes, porque in secoes:
        for chave in (*(slugs.split(" / ") if slugs else ()), *nomes):
            por_chave.setdefault(chave, porque)
    return por_chave


def buscar(indice_do_heroi: dict[str, dict], item: str) -> dict | None:
    """Porquê do item do guia: pelo slug (campo item) ou, quando o guia anotou um rótulo livre, pelo nome."""
    candidatos = (item, *_nomes(item))
    return next((indice_do_heroi[c] for c in candidatos if c in indice_do_heroi), None)


def carregar(pasta: Path) -> dict[str, dict[str, dict]]:
    """Nome do herói (campo heroi do frontmatter, igual ao nome da ficha) -> slug -> porquê."""
    por_heroi = {}
    for arq in sorted(pasta.glob("*.md")):
        try:
            meta, corpo = frontmatter(arq.read_text(encoding="utf-8"))
            por_heroi[meta["heroi"]] = indice(corpo)
        except (ValueError, KeyError) as erro:
            raise ValueError(f"{arq.name}: {erro}") from erro
    return por_heroi
