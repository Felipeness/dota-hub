import pytest
from pathlib import Path
from dota_export import conteudo, validar

RAIZ = Path(__file__).resolve().parents[2] / "content"

def test_objetivo_tem_basico_e_avancado_separados():
    rosh = next(c for c in conteudo.carregar(RAIZ / "objetivos") if c["id"] == "roshan")
    assert rosh["secoes"]["basico"] and rosh["secoes"]["avancado"]
    assert rosh["patch"] == "7.41" and rosh["fontes"]

def test_objetivo_sem_avancado_vira_null():
    camp = next(c for c in conteudo.carregar(RAIZ / "objetivos") if c["id"] == "camp")
    assert camp["secoes"]["avancado"] is None

def test_conteudo_valida():
    validar.validar("conteudo", conteudo.carregar(RAIZ / "objetivos"))
    validar.validar("conteudo", conteudo.carregar(RAIZ / "glossario"))

def test_origem_por_secao_chega_ao_json():
    itens = {c["id"]: c for c in conteudo.carregar(RAIZ / "objetivos")}
    rosh = itens["roshan"]["origem"]
    assert rosh["basico"] == {"tipo": "recomendado", "replays": []}
    assert rosh["avancado"]["tipo"] == "replay" and len(rosh["avancado"]["replays"]) == 28
    assert itens["torre"]["origem"]["avancado"]["tipo"] == "replay"
    assert itens["camp"]["origem"] == {"basico": None, "avancado": None}

def test_origem_replay_sem_id_falha(tmp_path):
    (tmp_path / "x.md").write_text("---\ntitulo: X\norigem: replay\n---\n## Básico\nTexto.\n", encoding="utf-8")
    try:
        conteudo.carregar(tmp_path)
    except ValueError as erro:
        assert "x.md" in str(erro) and "replay" in str(erro)
    else:
        raise AssertionError("esperava ValueError")

def test_valor_entre_aspas_perde_as_aspas(tmp_path):
    (tmp_path / "x.md").write_text('---\nid: x\ntitulo: "Solo de Roshan: Beastmaster"\norigem: recomendado\n---\n## Básico\nTexto.\n', encoding="utf-8")
    item = conteudo.carregar(tmp_path)[0]
    assert item["titulo"] == "Solo de Roshan: Beastmaster"

def test_extras_guardam_chaves_fora_do_padrao(tmp_path):
    (tmp_path / "x.md").write_text("---\nid: x\ntitulo: X\norigem: recomendado\nitens:\n- BKB\n---\n## Básico\nTexto.\n", encoding="utf-8")
    item = conteudo.carregar(tmp_path)[0]
    assert item["extras"] == {"origem": "recomendado", "itens": ["BKB"]}

@pytest.mark.parametrize(("fonte", "legivel"), [
    ("C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json", "items.json do OpenDota (patch 7.41)"),
    ("C:/Users/felip/Desktop/dota-hub/app/public/data/herois/sven.json (guia.itens_core)", "guia do herói no Dota Hub (sven) (guia.itens_core)"),
    ("C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json", "replays de Roshan solo (solos.json)"),
    ("C:/Users/felip/Desktop/qualquer/coisa/nova.json", "nova.json"),
    ("www.dota2.com/datafeed/patchnotes?version=7.41f (oficial)", "https://www.dota2.com/datafeed/patchnotes?version=7.41f (oficial)"),
    ("https://liquipedia.net/dota2/Roshan", "https://liquipedia.net/dota2/Roshan"),
    ("items.json (sphere.abilities)", "items.json (sphere.abilities)"),
    ("replay 8888056358", "replay 8888056358"),
])
def test_fonte_legivel_esconde_caminho_local_e_completa_url(fonte, legivel):
    assert conteudo.fonte_legivel(fonte) == legivel

def test_roshan_solo_publicado_nao_mostra_caminho_local():
    fontes = [f for c in conteudo.carregar(RAIZ / "roshan_solo") for f in c["fontes"]]
    assert fontes and not [f for f in fontes if "C:/" in f]
