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
