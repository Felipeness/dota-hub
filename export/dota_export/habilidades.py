"""Habilidades das unidades: nome, descrição limpa, condições e valores, no texto oficial em português."""
import re
from dataclasses import dataclass

PREFIXO_INGLES = re.compile(r"^Em inglês:\s*<b>(?:<font[^>]*>)?(.*?)(?:</font>)?</b>(?:\s|\\n)*", re.S)
TAG = re.compile(r"<[^>]+>")
VARIAVEL = re.compile(r"%(\w+)%")
ATIVACAO = {
    "DOTA_ABILITY_BEHAVIOR_PASSIVE": "passiva", "DOTA_ABILITY_BEHAVIOR_AURA": "aura",
    "DOTA_ABILITY_BEHAVIOR_NO_TARGET": "sem alvo", "DOTA_ABILITY_BEHAVIOR_UNIT_TARGET": "em uma unidade",
    "DOTA_ABILITY_BEHAVIOR_POINT": "num ponto do chão", "DOTA_ABILITY_BEHAVIOR_CHANNELLED": "canalizada",
    "DOTA_ABILITY_BEHAVIOR_AUTOCAST": "automática", "DOTA_ABILITY_BEHAVIOR_TOGGLE": "liga e desliga",
}
NUMERICAS = (("AbilityCooldown", "Recarga", " s"), ("AbilityManaCost", "Custo de mana", ""),
             ("AbilityCastRange", "Alcance", ""), ("AbilityCastPoint", "Tempo de conjuração", " s"),
             ("AbilityDuration", "Duração", " s"), ("AbilityChannelTime", "Canalização", " s"))
CATEGORICAS = (
    ("AbilityUnitDamageType", "Dano", {"DAMAGE_TYPE_MAGICAL": "mágico", "DAMAGE_TYPE_PHYSICAL": "físico", "DAMAGE_TYPE_PURE": "puro"}),
    ("SpellImmunityType", "Imunidade a magia", {
        "SPELL_IMMUNITY_ENEMIES_YES": "atravessa imunidade a magia", "SPELL_IMMUNITY_ENEMIES_NO": "não atravessa imunidade a magia",
        "SPELL_IMMUNITY_ALLIES_YES": "afeta aliados imunes a magia", "SPELL_IMMUNITY_ALLIES_NO": "não afeta aliados imunes a magia"}),
    ("SpellDispellableType", "Dissipar", {
        "SPELL_DISPELLABLE_YES": "sai com dissipação básica", "SPELL_DISPELLABLE_YES_STRONG": "só sai com dissipação forte",
        "SPELL_DISPELLABLE_NO": "não pode ser dissipada"}),
)
MAX_NOTAS = 10


@dataclass(frozen=True)
class Textos:
    pt: dict[str, str]
    en: dict[str, str]

    @classmethod
    def do_jogo(cls, arquivos: dict[str, dict]) -> "Textos":
        def tokens(nome: str) -> dict[str, str]:
            return {k.lower(): v for k, v in arquivos[nome]["lang"]["Tokens"].items()}
        return cls(tokens("textos_pt"), tokens("textos_en"))

    def buscar(self, chave: str) -> tuple[str | None, bool]:
        chave = chave.lower()
        if chave in self.pt:
            return self.pt[chave], False
        return self.en.get(chave), chave in self.en


def numero(texto: str) -> str:
    try:
        valor = float(texto)
    except ValueError:
        return texto
    return str(int(valor)) if valor.is_integer() else f"{valor:g}".replace(".", ",")


def por_nivel(texto: str) -> str:
    """'8.0 9 10 12' vira '8 / 9 / 10 / 12'; níveis iguais viram um número só."""
    niveis = [numero(t) for t in texto.split()]
    return niveis[0] if len(set(niveis)) == 1 else " / ".join(niveis)


def valores_brutos(dados: dict) -> dict[str, str]:
    brutos = {}
    for chave, entrada in dados.get("AbilityValues", {}).items():
        valor = entrada.get("value") if isinstance(entrada, dict) else entrada
        if valor is not None:
            brutos[chave] = valor
    return brutos


def descricao(bruta: str, brutos: dict[str, str]) -> tuple[str, str | None]:
    """Tira o nome em inglês do começo, troca %variavel% pelo valor, tira as tags."""
    prefixo = PREFIXO_INGLES.match(bruta)
    texto = bruta[prefixo.end():] if prefixo else bruta
    por_chave = {k.lower(): v for k, v in brutos.items()}
    texto = VARIAVEL.sub(lambda m: por_nivel(por_chave[m.group(1).lower()]) if m.group(1).lower() in por_chave else m.group(0), texto)
    texto = TAG.sub("", texto.replace("\\n", "\n")).replace("%%", "%")
    return re.sub(r"\n\s*\n+", "\n\n", texto).strip(), prefixo.group(1) if prefixo else None


def _positivo(texto: str | None) -> bool:
    try:
        return texto is not None and any(float(t) > 0 for t in texto.split())
    except ValueError:
        return False


def condicoes(dados: dict) -> list[dict]:
    comportamentos = [c.strip() for c in dados.get("AbilityBehavior", "").split("|")]
    ativacao = [ATIVACAO[c] for c in comportamentos if c in ATIVACAO]
    linhas = [("Ativação", ", ".join(ativacao))] if ativacao else []
    linhas += [(rotulo, por_nivel(dados[chave]) + unidade) for chave, rotulo, unidade in NUMERICAS if _positivo(dados.get(chave))]
    linhas += [(rotulo, mapa[dados[chave]]) for chave, rotulo, mapa in CATEGORICAS if dados.get(chave) in mapa]
    if dados.get("IsBreakable") == "1":
        linhas.append(("Quebra", "desligada por quebra"))
    return [{"rotulo": r, "valor": v} for r, v in linhas]


def _rotulo(bruto: str) -> tuple[str, str]:
    """'%RETARDO:' vira ('Retardo', '%')."""
    nome = bruto.strip("%: ").lower()
    return nome[:1].upper() + nome[1:], "%" if bruto.startswith("%") else ""


def valores(id_: str, brutos: dict[str, str], textos: Textos) -> list[dict]:
    saida = []
    for chave, bruto in brutos.items():
        rotulo, _ = textos.buscar(f"dota_tooltip_ability_{id_}_{chave}")
        if rotulo:
            nome, sufixo = _rotulo(rotulo)
            saida.append({"rotulo": nome, "valor": por_nivel(bruto) + sufixo})
    return saida


def _notas(id_: str, brutos: dict[str, str], textos: Textos) -> list[str]:
    brutas = (textos.buscar(f"dota_tooltip_ability_{id_}_note{i}")[0] for i in range(MAX_NOTAS))
    return [descricao(n, brutos)[0] for n in brutas if n]


def habilidade(id_: str, dados: dict, textos: Textos, icones: frozenset[str]) -> dict | None:
    bruta, em_ingles = textos.buscar(f"dota_tooltip_ability_{id_}_description")
    if bruta is None:
        return None
    brutos = valores_brutos(dados)
    texto, nome_en = descricao(bruta, brutos)
    nome, _ = textos.buscar(f"dota_tooltip_ability_{id_}")
    return {"id": id_, "nome": nome or id_, "nome_en": nome_en, "descricao": texto,
            "notas": _notas(id_, brutos, textos), "condicoes": condicoes(dados),
            "valores": valores(id_, brutos, textos), "icone": id_ if id_ in icones else None,
            "texto_em_ingles": em_ingles, "o_que_muda": None}
