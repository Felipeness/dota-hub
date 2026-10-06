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
