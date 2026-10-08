"""Fichas das unidades (Roshan, Tormentor, creeps de lane e selva) lidas dos arquivos do jogo."""
import re
from dataclasses import dataclass
from pathlib import Path

from . import habilidades

PATCH = "7.41"
FONTE_JOGO = "Arquivos do Dota 2 instalado (scripts/npc/npc_units.txt, npc_abilities.txt, abilities_brazilian.txt)"
FONTE_TABELA = "dota-imortal/work/farm_mechanics_corrigido.json (fórmulas do datamine 7.41f)"
BASE = "npc_dota_units_base"
CRESCIMENTO = "neutral_upgrade"
CHEFES = {"npc_dota_roshan": "roshan", "npc_dota_miniboss": "tormentor"}
VARIANTES = {"": "normal", "_upgraded": "super", "_upgraded_mega": "mega"}
LADOS_LANE = {"goodguys": "Radiant", "badguys": "Dire"}
TIPOS_LANE = {"melee": "corpo a corpo", "ranged": "à distância", "flagbearer": "porta-bandeira"}
TIME = {"DOTA_TEAM_GOODGUYS": "radiant", "DOTA_TEAM_BADGUYS": "dire"}
ATAQUE = {"DOTA_UNIT_CAP_MELEE_ATTACK": "corpo a corpo", "DOTA_UNIT_CAP_RANGED_ATTACK": "à distância",
          "DOTA_UNIT_CAP_NO_ATTACK": "sem ataque"}
NUMEROS = {"vida": "StatusHealth", "regeneracao": "StatusHealthRegen", "mana": "StatusMana",
           "regeneracao_mana": "StatusManaRegen", "armadura": "ArmorPhysical", "resistencia_magica": "MagicalResistance",
           "dano_min": "AttackDamageMin", "dano_max": "AttackDamageMax", "intervalo_ataque": "AttackRate",
           "alcance_ataque": "AttackRange", "velocidade": "MovementSpeed", "ouro_min": "BountyGoldMin",
           "ouro_max": "BountyGoldMax", "xp": "BountyXP", "visao_dia": "VisionDaytimeRange",
           "visao_noite": "VisionNighttimeRange"}
SO_DE_QUEM_ATACA = ("dano_min", "dano_max", "intervalo_ataque", "alcance_ataque")
COLUNAS_TABELA = {
    "roshan": {"minuto": "Minuto", "hp": "Vida", "armadura": "Armadura", "dano": "Dano", "xp_bounty": "XP",
               "slam_dano": "Dano da Porrada", "roar_dano": "Dano do Rugido", "throw_pct_hp_atual": "Arremesso (% da vida)"},
    "tormentor": {"minuto": "Minuto", "barreira": "Escudo", "regen_por_s": "Regeneração do escudo por s",
                  "reflect_pct": "Reflexão (%)", "shining_dps": "Dano por s da aura"},
}


@dataclass(frozen=True)
class Jogo:
    unidades: dict
    habilidades: dict
    textos: habilidades.Textos
    icones: frozenset[str]

    @classmethod
    def dos_arquivos(cls, arquivos: dict[str, dict], icones: frozenset[str]) -> "Jogo":
        return cls(arquivos["unidades"]["DOTAUnits"], arquivos["habilidades"]["DOTAAbilities"],
                   habilidades.Textos.do_jogo(arquivos), icones)

    def dados(self, id_jogo: str) -> dict:
        """O jogo completa cada unidade com os valores de npc_dota_units_base."""
        return {**self.unidades[BASE], **self.unidades[id_jogo]}


def ids_de_lane() -> dict[str, str]:
    """Id do jogo de cada creep de lane e o papel dele."""
    saida = {}
    for time, lado in LADOS_LANE.items():
        for sufixo, variante in VARIANTES.items():
            for tipo, rotulo in TIPOS_LANE.items():
                saida[f"npc_dota_creep_{time}_{tipo}{sufixo}"] = f"creep {rotulo}, {variante}, {lado}"
            saida[f"npc_dota_{time}_siege{sufixo}"] = f"creep de cerco, {variante}, {lado}"
    return saida


def _slug(nome: str) -> str:
    return re.sub(r"[^a-z0-9]+", "_", nome.lower()).strip("_")


def tipos_de_camp(farm: dict) -> list[dict]:
    return [{"id": _slug(c["camp"]), "nome": c["camp"], "tamanho": c["tamanho"], "terreno": c["terreno"],
             "unidades": [{"id": u["unidade"], "qtd": u["qtd"]} for u in c["composicao"]],
             "ouro": [c["ouro_datamine"]["min"], c["ouro_datamine"]["max"]], "xp": c["xp_total"]}
            for c in farm["valores"]["camps_neutros"]]


def _numero(texto: str) -> int | float:
    valor = float(texto)
    return int(valor) if valor.is_integer() else valor


def numeros(dados: dict) -> dict:
    saida: dict = {nome: _numero(dados[chave]) for nome, chave in NUMEROS.items()}
    saida["ataque"] = ATAQUE[dados["AttackCapabilities"]]
    if saida["vida"] <= 1:  # o jogo define a vida do Tormentor por código; o escudo vem da tabela
        saida["vida"] = None
    if saida["ataque"] == "sem ataque":
        saida |= dict.fromkeys(SO_DE_QUEM_ATACA)
    return saida


def _ids_de_habilidade(dados: dict) -> list[str]:
    return [dados[f"Ability{i}"] for i in range(1, 33) if dados.get(f"Ability{i}")]


def _crescimento_por_nivel(jogo: Jogo) -> dict:
    v = habilidades.valores_brutos(jogo.habilidades[CRESCIMENTO])
    return {"tipo": "por_nivel", "a_cada_s": _numero(v["increase_time"]), "vida": _numero(v["increase_health"]),
            "dano": _numero(v["increase_damage"]), "armadura": _numero(v["increase_armor"]),
            "vel_ataque": _numero(v["increase_aspd"]), "ouro": _numero(v["increase_gold"]),
            "xp": _numero(v["increase_xp"]), "nivel_max": _numero(v["max_level"])}


def _tabela(id_curto: str, farm: dict) -> dict:
    colunas = COLUNAS_TABELA[id_curto]
    linhas = farm["valores"]["tormentor_e_roshan"][f"{id_curto}_por_minuto"]
    return {"tipo": "tabela", "colunas": list(colunas.values()),
            "linhas": [[linha[c] for c in colunas] for linha in linhas], "fonte": FONTE_TABELA}


def _id_curto(id_jogo: str) -> str:
    return CHEFES.get(id_jogo) or id_jogo.removeprefix("npc_dota_neutral_").removeprefix("npc_dota_")


def ficha(jogo: Jogo, id_jogo: str, grupo: str, papel: str) -> dict:
    dados = jogo.dados(id_jogo)
    ids = _ids_de_habilidade(dados)
    lista = [h for i in ids if i != CRESCIMENTO
             if (h := habilidades.habilidade(i, jogo.habilidades.get(i, {}), jogo.textos, jogo.icones))]
    return {"id": _id_curto(id_jogo), "id_jogo": id_jogo, "nome": jogo.textos.buscar(id_jogo)[0] or id_jogo,
            "grupo": grupo, "papel": papel, "lado": TIME.get(dados["TeamName"], "neutro"),
            "numeros": numeros(dados), "habilidades": lista,
            "crescimento": _crescimento_por_nivel(jogo) if CRESCIMENTO in ids else None,
            "modelo": Path(dados["Model"]).stem if dados.get("Model") else None,
            "patch": PATCH, "fontes": [FONTE_JOGO]}


def _unidades_da_selva(tipos: list[dict]) -> list[str]:
    return list(dict.fromkeys(u["id"] for t in tipos for u in t["unidades"]))


def _com_o_que_muda(fichas: list[dict], conteudo: list[dict]) -> list[dict]:
    textos = {c["id"]: {"texto": c["secoes"]["basico"], "fontes": c["fontes"], "origem": c["origem"]["basico"]}
              for c in conteudo}
    sobrando = set(textos) - {h["id"] for f in fichas for h in f["habilidades"]}
    if sobrando:
        raise ValueError(f"conteúdo de habilidade que nenhuma unidade tem: {sorted(sobrando)}")
    return [f | {"habilidades": [h | {"o_que_muda": textos.get(h["id"])} for h in f["habilidades"]]} for f in fichas]


def todas(jogo: Jogo, farm: dict, conteudo: list[dict]) -> list[dict]:
    tipos = tipos_de_camp(farm)
    chefes = [ficha(jogo, id_jogo, "chefe", "chefe neutro") | {"crescimento": _tabela(curto, farm)}
              for id_jogo, curto in CHEFES.items()]
    lane = [ficha(jogo, id_jogo, "lane", papel) for id_jogo, papel in ids_de_lane().items()]
    selva = [ficha(jogo, f"npc_dota_neutral_{u}", "selva", "monstro da selva") for u in _unidades_da_selva(tipos)]
    return _com_o_que_muda([*chefes, *lane, *selva], conteudo)


def indice(fichas: list[dict], tipos: list[dict]) -> list[dict]:
    camps: dict[str, list[str]] = {}
    for t in tipos:
        for u in t["unidades"]:
            camps.setdefault(u["id"], []).append(t["id"])
    campos = ("id", "nome", "grupo", "papel", "lado", "modelo")
    return [{c: f[c] for c in campos} | {
        "camps": camps.get(f["id"], []),
        "habilidades": [{"id": h["id"], "nome": h["nome"], "nome_en": h["nome_en"], "icone": h["icone"]} for h in f["habilidades"]],
    } for f in fichas]


def icones_usados(fichas: list[dict]) -> set[str]:
    return {h["icone"] for f in fichas for h in f["habilidades"] if h["icone"]}


def caminhos_de_modelo(jogo: Jogo, fichas: list[dict]) -> list[str]:
    caminhos = sorted({jogo.dados(f["id_jogo"])["Model"] for f in fichas if f["modelo"]})
    if len({Path(c).stem for c in caminhos}) != len(caminhos):
        raise ValueError("dois modelos com o mesmo nome de arquivo; o app usa o nome como id")
    return caminhos
