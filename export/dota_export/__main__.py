"""python -m dota_export: gera todos os arquivos de dados do app em app/public/data/."""
import json
from datetime import datetime, timezone
from pathlib import Path

from . import conteudo, mapa, rotas, validar

RAIZ = Path(__file__).resolve().parents[2]
DESTINO = RAIZ / "app" / "public" / "data"
SCHEMA_POR_ARQUIVO = {"objetivos_conteudo": "conteudo", "glossario": "conteudo"}


def _gravar(nome: str, dados) -> None:
    (DESTINO / nome).write_text(json.dumps(dados, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")


def main() -> None:
    DESTINO.mkdir(parents=True, exist_ok=True)
    for tamanho in (2048, 4096):
        mapa.textura_alinhada(tamanho).save(DESTINO / f"mapa_{tamanho}.jpg", quality=85)
    pacotes = {"objetivos": mapa.objetos(), "rotas": rotas.carregar_rotas(), "indice": rotas.indice(),
               "objetivos_conteudo": conteudo.carregar(RAIZ / "content" / "objetivos"),
               "glossario": conteudo.carregar(RAIZ / "content" / "glossario")}
    for nome, dados in pacotes.items():
        validar.validar(SCHEMA_POR_ARQUIVO.get(nome, nome), dados)
        _gravar(f"{nome}.json", dados)
    meta = {"exportado_em": datetime.now(timezone.utc).isoformat(timespec="seconds"), "patch": "7.41",
            "contagens": {"rotas": len(pacotes["rotas"]), "objetivos": len(pacotes["objetivos"]),
                          "termos": len(pacotes["glossario"])}}
    validar.validar("meta", meta)
    _gravar("meta.json", meta)
    print(f"ok: {meta['contagens']}")


if __name__ == "__main__":
    main()
