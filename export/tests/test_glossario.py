import json
from pathlib import Path

import pytest

from dota_export import conteudo, fontes, herois, mapa, rotas

GLOSSARIO = Path(__file__).resolve().parents[2] / "content" / "glossario"
CATEGORIAS = {"mecanica", "lane", "farm", "mapa", "objetivo", "runa", "item", "combate", "visao",
              "economia", "papel", "estrategia", "partida", "giria", "estatistica"}


@pytest.fixture(scope="module")
def termos():
    return conteudo.carregar(GLOSSARIO)


def test_tem_entre_150_e_250_termos_com_id_unico(termos):
    ids = [t["id"] for t in termos]
    assert 150 <= len(ids) <= 250
    assert len(ids) == len(set(ids))


def test_todo_termo_tem_categoria_fonte_e_patch(termos):
    for t in termos:
        assert t["extras"].get("categoria") in CATEGORIAS, t["id"]
        assert t["fontes"] and t["patch"] == "7.41", t["id"]


def test_item_aponta_para_item_que_existe(termos):
    itens = json.loads(fontes.ITENS.read_text(encoding="utf-8"))
    for t in (t for t in termos if t["extras"]["categoria"] == "item"):
        assert t["extras"].get("item") in itens, t["id"]


def test_links_apontam_para_algo_que_existe(termos):
    objetos = mapa.objetos()
    validos = ({t["id"] for t in termos} | {o["id"] for o in objetos} | {o["tipo"] for o in objetos}
               | {f["id"] for f in herois.todos()} | {r["id"] for r in rotas.carregar_rotas()})
    quebrados = [(t["id"], link) for t in termos for link in t["links"] if link not in validos]
    assert quebrados == []
