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
