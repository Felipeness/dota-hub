"""python -m dota_export: gera todos os arquivos de dados do app em app/public/data/."""
import json
from datetime import datetime, timezone
from pathlib import Path

from . import (amigos, conteudo, fontes, herois, icones, jogadores, jogo, mapa, modelos, relevo, roshan, rotas,
               trajetorias, unidades, validar)

RAIZ = Path(__file__).resolve().parents[2]
DESTINO = RAIZ / "app" / "public" / "data"
SCHEMA_POR_ARQUIVO = {"objetivos_conteudo": "conteudo", "glossario": "conteudo", "roshan_solo": "conteudo"}


def _gravar(nome: str, dados) -> None:
    (DESTINO / nome).write_text(json.dumps(dados, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")


def _gravar_colecao(pasta: str, schema: str, itens: list[dict], chave: str = "id") -> None:
    (DESTINO / pasta).mkdir(parents=True, exist_ok=True)
    for item in itens:
        validar.validar(schema, item)
        _gravar(f"{pasta}/{item[chave]}.json", item)


def main() -> None:
    DESTINO.mkdir(parents=True, exist_ok=True)
    for tamanho in (2048, 4096):
        mapa.textura_alinhada(tamanho).save(DESTINO / f"mapa_{tamanho}.jpg", **mapa.JPEG)
    pacotes = {"objetivos": mapa.objetos(), "rotas": rotas.carregar_rotas(), "indice": rotas.indice(),
               "objetivos_conteudo": conteudo.carregar(RAIZ / "content" / "objetivos"),
               "glossario": conteudo.carregar(RAIZ / "content" / "glossario")}
    altura = relevo.relevo()
    altura.save(DESTINO / "relevo_512.png")
    pacotes["relevo"] = relevo.grade(altura)
    fichas = herois.todos(frozenset(r["id"] for r in pacotes["rotas"]))
    _gravar_colecao("herois", "heroi", fichas)
    pacotes["herois"] = herois.indice(fichas)
    paineis = [jogadores.felipe(), *(jogadores.pro_compare(c) for c in ("satanic", "yatoro", "watson")),
               *jogadores.pros_de_replay(), amigos.leonardo(), amigos.hane(), amigos.yuma()]
    _gravar_colecao("jogadores", "painel", paineis)
    pacotes["jogadores"] = jogadores.indice(paineis)
    pacotes["times"] = jogadores.times(paineis)
    replays = [trajetorias.replay(p) for p in sorted(fontes.REPLAYS.iterdir()) if p.is_dir()]
    _gravar_colecao("trajetorias", "trajetoria", replays, chave="match_id")
    pacotes["replays"] = trajetorias.indice(replays)
    pacotes["roshan_replays"] = roshan.todas()
    pacotes["roshan_solo"] = conteudo.carregar(RAIZ / "content" / "roshan_solo")
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
