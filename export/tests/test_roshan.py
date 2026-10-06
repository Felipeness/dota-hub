from pathlib import Path

import pytest

from dota_export import conteudo, roshan, validar

SOLO = Path(__file__).resolve().parents[2] / "content" / "roshan_solo"


@pytest.mark.parametrize(("aliados", "esperado"), [
    ([], 0),
    ([(0.5, 0.5)], 1),
    ([(0.5, 0.5), (0.9, 0.9)], 1),
])
def test_conta_aliados_dentro_do_raio(aliados, esperado):
    assert roshan.aliados_perto((0.5, 0.55), aliados) == esperado


@pytest.fixture(scope="module")
def kills():
    return roshan.todas()


def test_mortes_de_roshan_dos_replays(kills):
    validar.validar("roshan_replays", kills)
    assert len(kills) >= 40
    assert all(k["solo"] == (k["aliados_perto"] == 0) for k in kills)


def test_solo_fica_vazio_ate_ter_fonte_741():
    # Decisão da Task 5 (opção a): nenhuma fonte 7.41 confirma solo de Roshan, e o plano
    # diz que conteúdo sem fonte conferida não entra. Quando houver fonte, este teste falha
    # de propósito: volte o contrato do conteúdo (ursa, huskar, morphling, >= 6, origem,
    # nível, minuto, itens, fonte, patch 7.41) que está no histórico do git deste arquivo.
    assert conteudo.carregar(SOLO) == []
