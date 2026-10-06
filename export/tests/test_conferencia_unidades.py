"""Critério 2 do adendo: os números das fichas batem com o jogo e com a pesquisa de farm."""
import json
from pathlib import Path

import pytest

from dota_export import fontes, icones, jogo, unidades

DADOS = Path(__file__).resolve().parents[2] / "app" / "public" / "data"


@pytest.fixture(scope="module")
def por_id():
    arquivo = jogo.vpk()
    base = unidades.Jogo.dos_arquivos(jogo.textos(arquivo), icones.disponiveis(arquivo))
    return {f["id"]: f for f in unidades.todas(base, fontes.farm(), [])}


def test_selva_bate_com_farm_mechanics_em_260_numeros(por_id):
    conferidos = 0
    for camp in fontes.farm()["valores"]["camps_neutros"]:
        for u in camp["composicao"]:
            n = por_id[u["unidade"]]["numeros"]
            pares = [(n["vida"], u["hp"]), (n["armadura"], u["armadura"]), (n["resistencia_magica"], u["res_magica_pct"]),
                     (n["xp"], u["xp"]), ([n["ouro_min"], n["ouro_max"]], u["ouro"])]
            for obtido, esperado in pares:
                assert obtido == esperado, (camp["camp"], u["unidade"], obtido, esperado)
                conferidos += 1
    assert conferidos == 260


def test_arquivos_gravados_pelo_export():
    indice = json.loads((DADOS / "unidades.json").read_text(encoding="utf-8"))
    assert len(indice) == 71
    assert all((DADOS / "unidades" / f"{u['id']}.json").exists() for u in indice)
    assert all((DADOS / "modelos" / f"{u['modelo']}.glb").exists() for u in indice)
    assert len(json.loads((DADOS / "camps.json").read_text(encoding="utf-8"))) == 26
