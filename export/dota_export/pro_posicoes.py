"""Posição de pro (safe/mid/off, pos 1 a 5) e força de pro por herói: content/pro_posicoes.json, gerado
a partir do OpenDota explorer (ver o campo "metodo" do próprio arquivo). Só lê e repassa; o cálculo
pesado já foi feito fora do export (duas consultas SQL, não uma por herói)."""
import json
from pathlib import Path


def carregar(raiz_do_content: Path) -> dict:
    return json.loads((raiz_do_content / "pro_posicoes.json").read_text(encoding="utf-8"))
