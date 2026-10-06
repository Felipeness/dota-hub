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
