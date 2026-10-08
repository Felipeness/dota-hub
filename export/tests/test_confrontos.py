from pathlib import Path

import pytest

from dota_export import confrontos, validar

RAIZ = Path(__file__).resolve().parents[2]

TEXTO = """---
id: confrontos-morphling
heroi: Morphling
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/morphling.json
---

## Como essa lista foi montada

Os oponentes com mais jogos de pro.

## Contra Shadow Fiend (nevermore)
- placar: Morphling venceu 67 de 149 partidas pro (45,0%).
- por que importa: segundo maior volume de jogos.
- janelas: o Manta dele sai aos 16:0 (pro_dados/nevermore.json), o Daedalus aos 32:5 (app/public/data/herois/shadow_fiend.json).
- o que ele faz com você: Shadowraze zonea seu farm (`constants_abilities.json`).
- o que você faz com ele: Adaptive Strike interrompe o canal.
- itens que viram: Black King Bar bloqueia Requiem.
- como jogar: não fique parado nas linhas do Shadowraze.
- fonte: pro_dados/nevermore.json; constants_abilities.json (nevermore_requiem; nevermore_shadowraze1); app/public/data/herois/shadow_fiend.json (power_spikes); dotacoach.gg/en/heroes/counters/shadow-fiend

---

## Contra Rubick
- placar: 40 de 80.
- por que importa: suporte mais picado.
- janelas: sem item, cresce com nível (rubick.json).
- o que ela faz com você: rouba sua magia.
- itens que viram: Lotus Orb.
- como jogar: fique longe dele.
"""

PRO = {"hero_id": 10, "resumo": {"n": 100},
       "confrontos": [{"hero_id": 11, "games_played": 149, "wins": 67}, {"hero_id": 86, "games_played": 80, "wins": 40}],
       "itens": [{"item": "manta", "n": 80, "minuto_mediano": "18.4", "minuto_p25": "16.0"},
                 {"item": "power_treads", "n": 95, "minuto_mediano": "6.0", "minuto_p25": "5.0"},
                 {"item": "magic_wand", "n": 40, "minuto_mediano": "4.3", "minuto_p25": "3.0"},
                 {"item": "blade_of_alacrity", "n": 90, "minuto_mediano": "13.8", "minuto_p25": "12.0"},
                 {"item": "tpscroll", "n": 70, "minuto_mediano": "22.4", "minuto_p25": "20.0"},
                 {"item": "eagle", "n": 50, "minuto_mediano": "23.1", "minuto_p25": "20.0"},
                 {"item": "blink", "n": 30, "minuto_mediano": "15.0", "minuto_p25": "13.0"},
                 {"item": "butterfly", "n": 10, "minuto_mediano": "25.8", "minuto_p25": "24.0"}]}


def _gerar(core: frozenset[str] = frozenset()) -> dict:
    return confrontos.confronto("morphling", TEXTO, PRO, core)


def test_le_os_blocos_e_ignora_as_secoes_de_metodo():
    analise = _gerar()
    assert [b["oponente"]["id"] for b in analise["confrontos"]] == ["shadow_fiend", "rubick"]
    sf, rubick = analise["confrontos"]
    assert sf["oponente"] == {"id": "shadow_fiend", "nome": "Shadow Fiend", "nome_interno": "nevermore", "hero_id": 11}
    assert (sf["vitorias"], sf["jogos"]) == (67, 149)
    assert rubick["oponente"]["nome_interno"] == "rubick"
    assert rubick["ele_faz"] == "rouba sua magia." and rubick["voce_faz"] is None and rubick["fontes"] == []


def test_fontes_viram_nome_legivel_sem_caminho_e_sem_repetir():
    sf = _gerar()["confrontos"][0]
    assert sf["fontes"] == ["Partidas pro 7.40-7.41 (OpenDota)", "Constantes do jogo (OpenDota)", "Guia do Hub: Shadow Fiend",
                            "https://dotacoach.gg/en/heroes/counters/shadow-fiend"]


@pytest.mark.parametrize("bruto, legivel", [
    ("o Manta aos 16:0 (pro_dados/nevermore.json)", "o Manta aos 16:0 (partidas pro)"),
    ("aos 7:54 (app/public/data/herois/alchemist.json)", "aos 7:54 (guia do Alchemist no Hub)"),
    ("(`constants_abilities.json` rubick_spell_steal)", "(constantes do jogo rubick_spell_steal)"),
    ("Soul Ring aos 6 min, ficha earthshaker.md", "Soul Ring aos 6 min, ficha do Earthshaker no Hub"),
    ("GPM 520 (brewmaster.json, confrontos)", "GPM 520 (partidas pro, confrontos)"),
    ("BKB (content/porque_itens/morphling.md)", "BKB (guia do Morphling no Hub)"),
    ("arquivo C:/Users/x/Desktop/dota-imortal/data/opendota/items.json", "arquivo items.json do OpenDota (patch 7.41)"),
    ("Manta (manta.json não é herói)", "Manta (manta.json não é herói)"),
])
def test_texto_troca_arquivo_citado_por_nome_curto(bruto, legivel):
    assert confrontos.texto_legivel(bruto) == legivel


def test_power_spike_tem_so_item_fechado_relevante_em_ordem_de_minuto():
    spikes = _gerar()["spikes"]
    # Componente (blade_of_alacrity), consumível (tpscroll), peça de loja secreta (eagle), item barato fora da build
    # (magic_wand) e compra rara (butterfly, 10%) ficam de fora; Blink entra mesmo sem receita.
    assert [(s["item"], s["minuto"], s["chave"]) for s in spikes] == [
        ("power_treads", 6.0, False), ("blink", 15.0, True), ("manta", 18.4, True)]


def test_item_barato_da_build_core_entra_como_reforco():
    assert "magic_wand" in [s["item"] for s in _gerar(frozenset({"magic_wand"}))["spikes"]]


def test_recusa_bloco_sem_campo_obrigatorio():
    with pytest.raises(ValueError, match="falta como_jogar"):
        confrontos.confronto("morphling", TEXTO.replace("- como jogar: fique longe dele.\n", ""), PRO, frozenset())


def test_recusa_linha_fora_do_formato():
    with pytest.raises(ValueError, match="fora do formato"):
        confrontos.confronto("morphling", TEXTO.replace("- itens que viram: Lotus Orb.", "Lotus Orb."), PRO, frozenset())


def test_os_127_arquivos_do_conteudo_passam_no_schema():
    todos = confrontos.carregar(RAIZ / "content" / "confrontos", RAIZ / "content" / "pro_dados", {})
    for analise in todos:
        validar.validar("confronto", analise)
    validar.validar("confrontos_indice", confrontos.indice(todos))
    assert len(todos) == 127
    assert sum(len(a["confrontos"]) for a in todos) == 1899
    textos = [b[c] or "" for a in todos for b in a["confrontos"] for c in ("placar", "janelas", "ele_faz", "voce_faz")]
    assert not [t for t in textos if "C:/" in t or "pro_dados/" in t]
