"""Análise de confrontos tirada de partidas pro (content/confrontos/<nome interno>.md) e o timing de power spike de cada
herói (content/pro_dados/<nome interno>.json, itens que os pros fecham em partidas de liga 7.40 e 7.41)."""
import json
import re
from collections import Counter
from functools import cache
from pathlib import Path

from . import fontes
from .conteudo import fonte_legivel, frontmatter, sem_caminho_local
from .retratos import id_no_app

SECAO = re.compile(r"^## (.+?)\s*$", re.MULTILINE)
# "Contra Shadow Fiend (nevermore)"; cinco arquivos anotam só o nome ("Contra Rubick") e o heroes.json resolve.
CONTRA = re.compile(r"^Contra (.+?)(?: \(([a-z0-9_]+)\))?$")
CAMPO = re.compile(r"^- ([^:]+): (.+)$")
CAMPOS = {"placar": "placar", "por que importa": "por_que_importa", "janelas": "janelas",
          "itens que viram": "itens", "como jogar": "como_jogar", "fonte": "fonte"}
# "o que ele faz com você", "o que ela faz com você", "o que a QoP faz com você".
ELE_FAZ = re.compile(r"^o que .+ faz com você$")
# "o que você faz com ele", "... com ela", "... com ele (Mortimer)".
VOCE_FAZ = re.compile(r"^o que você faz com ")
OBRIGATORIOS = ("placar", "por_que_importa", "janelas", "itens", "como_jogar")

PARTIDAS_PRO = "Partidas pro 7.40-7.41 (OpenDota)"
CONSTANTES = "Constantes do jogo (OpenDota)"
# Fonte do bloco: arquivo de pesquisa vira o nome do dado; o resto (link, nota) passa por fonte_legivel.
# A ordem importa: "herois_catalogo.json" e "items.json" também têm cara de "<herói>.json".
FONTES = (
    (re.compile(r"constants_|aghs_desc|items\.json|heroes\.json|heroStats\.json"), lambda _m, _n: CONSTANTES),
    (re.compile(r"herois_catalogo\.json"), lambda _m, _n: "Catálogo de heróis do Hub"),
    (re.compile(r"herois/(\w+)\.json|porque_itens/(\w+)\.md"), lambda m, nome: f"Guia do Hub: {nome(m[1] or m[2])}"),
    (re.compile(r"(?:fichas?/|ficha )(\w+)\.md"), lambda m, nome: f"Ficha do Hub: {nome(m[1])}"),
    (re.compile(r"confrontos/(\w+)\.md"), lambda m, nome: f"Análise de pro: {nome(m[1])}"),
    (re.compile(r"pro_dados|matchups|OpenDota explorer|^[a-z_]+\.json\b"), lambda _m, _n: PARTIDAS_PRO),
)
# Mesmos arquivos citados no meio do texto, entre parênteses: viram um nome curto que cabe na frase. Os dois
# últimos pegam o arquivo citado sem pasta ("brewmaster.json", "ficha earthshaker.md") e só trocam nome de herói.
PASTA = r"(?:[\w.:/-]*/)?"
REFERENCIAS = (
    (re.compile(PASTA + r"pro_dados[/ ](?:\w+|\{[\w,]+\})\.json"), lambda _m, _n: "partidas pro"),
    (re.compile(PASTA + r"herois/(\w+)\.json|" + PASTA + r"porque_itens/(\w+)\.md"), lambda m, nome: f"guia do {nome(m[1] or m[2])} no Hub"),
    (re.compile(PASTA + r"fichas?/(\w+)\.md"), lambda m, nome: f"ficha do {nome(m[1])} no Hub"),
    (re.compile(PASTA + r"confrontos/(\w+)\.md"), lambda m, nome: f"análise de pro do {nome(m[1])}"),
    (re.compile(PASTA + r"herois_catalogo\.json"), lambda _m, _n: "catálogo do Hub"),
    (re.compile(r"constants_(?:hero_)?abilities\.json|(?<![\w/])(?:items|heroStats)\.json"), lambda _m, _n: "constantes do jogo"),
    (re.compile(r"(?<![\w/])(\w+)\.json"), lambda m, nome: "partidas pro" if eh_heroi(m[1]) else None),
    (re.compile(r"(?:ficha )?(?<![\w/])(\w+)\.md"), lambda m, nome: f"ficha do {nome(m[1])} no Hub" if eh_heroi(m[1]) else None),
)
# ";" dentro de parênteses separa detalhes da mesma fonte: "constants_abilities.json (doom_bringer_x; doom_bringer_y)".
SEPARADOR_DE_FONTES = re.compile(r";(?![^()]*\))")

# Fechados sem receita: o items.json não lista componentes, mas são compra-alvo por si.
AVULSOS = frozenset({"blink", "aghanims_shard"})
CUSTO_DE_ITEM_FECHADO = 1800
CUSTO_RELEVANTE = 1000
CUSTO_DE_ITEM_CHAVE = 2000
# Item comprado em menos de 15% das partidas pro do herói é situacional, não timing do herói.
PARCELA_MINIMA = 0.15


@cache
def _ler(caminho: Path):
    return json.loads(caminho.read_text(encoding="utf-8"))


@cache
def _herois() -> dict[str, dict]:
    """Nome interno ("nevermore") -> herói do heroes.json."""
    return {h["name"].removeprefix("npc_dota_hero_"): h for h in _ler(fontes.HEROIS_OPENDOTA)}


@cache
def _nomes() -> dict[str, str]:
    """Nome interno e id do app ("nevermore", "shadow_fiend") -> nome do herói, pra citar guia e ficha pelo nome."""
    return {chave: h["localized_name"] for interno, h in _herois().items()
            for chave in (interno, id_no_app(h["localized_name"]))}


def _nome(chave: str) -> str:
    return _nomes().get(chave, chave)


def eh_heroi(chave: str) -> bool:
    return chave in _nomes()


def _trocar(texto: str, regras) -> str | None:
    for padrao, rotulo in regras:
        if achado := padrao.search(texto):
            return rotulo(achado, _nome)
    return None


def fonte(texto: str) -> str:
    """"pro_dados/alchemist.json" -> "Partidas pro 7.40-7.41 (OpenDota)"; link e nota passam como estão."""
    limpo = texto.strip().strip("`").rstrip(".").strip("`")
    return _trocar(limpo, FONTES) or fonte_legivel(limpo)


def texto_legivel(texto: str) -> str:
    """Arquivo citado no meio do texto vira nome curto; sem crase de código e sem caminho da máquina."""
    for padrao, rotulo in REFERENCIAS:
        texto = padrao.sub(lambda m, r=rotulo: r(m, _nome) or m[0], texto)
    return sem_caminho_local(texto).replace("`", "")


def _fontes(linha: str) -> list[str]:
    return list(dict.fromkeys(fonte(f) for f in SEPARADOR_DE_FONTES.split(linha) if f.strip()))


def _chave_do_campo(nome: str) -> str | None:
    if ELE_FAZ.match(nome):
        return "ele_faz"
    if VOCE_FAZ.match(nome):
        return "voce_faz"
    return CAMPOS.get(nome)


def _campos(titulo: str, corpo: str) -> dict[str, str]:
    campos = {}
    # Batrider separa os blocos com "---".
    for linha in (l.strip() for l in corpo.splitlines()):
        if linha in ("", "---"):
            continue
        achado = CAMPO.match(linha)
        chave = _chave_do_campo(achado[1]) if achado else None
        if chave is None:
            raise ValueError(f"{titulo}: linha fora do formato '- campo: texto': {linha[:60]}")
        campos[chave] = achado[2].strip()
    if faltam := [c for c in OBRIGATORIOS if c not in campos]:
        raise ValueError(f"{titulo}: falta {', '.join(faltam)}")
    return campos


def _oponente(nome: str, interno: str | None) -> dict:
    heroi = _herois().get(interno) if interno else next((h for h in _herois().values() if h["localized_name"] == nome), None)
    if heroi is None:
        raise ValueError(f"oponente fora do heroes.json: {nome} ({interno})")
    return {"id": id_no_app(heroi["localized_name"]), "nome": heroi["localized_name"],
            "nome_interno": heroi["name"].removeprefix("npc_dota_hero_"), "hero_id": heroi["id"]}


def bloco(titulo: str, corpo: str, placares: dict[int, dict]) -> dict:
    achado = CONTRA.match(titulo)
    if not achado:
        raise ValueError(f"seção fora do formato 'Contra Nome (slug)': {titulo}")
    oponente = _oponente(achado[1], achado[2])
    placar = placares.get(oponente["hero_id"])
    if placar is None:
        raise ValueError(f"{titulo}: sem jogos contra ele no pro_dados")
    c = _campos(titulo, corpo)
    texto = {k: texto_legivel(v) for k, v in c.items() if k != "fonte"}
    return {"oponente": oponente, "vitorias": placar["wins"], "jogos": placar["games_played"],
            "placar": texto["placar"], "por_que_importa": texto["por_que_importa"], "janelas": texto["janelas"],
            "ele_faz": texto.get("ele_faz"), "voce_faz": texto.get("voce_faz"), "itens": texto["itens"],
            "como_jogar": texto["como_jogar"], "fontes": _fontes(c.get("fonte", ""))}


def _eh_fechado(slug: str, item: dict) -> bool:
    caro_e_de_loja = item.get("cost", 0) >= CUSTO_DE_ITEM_FECHADO and item.get("qual") != "secret_shop"
    return bool(item.get("components")) or slug in AVULSOS or caro_e_de_loja


def _eh_spike(compra: dict, item: dict, total: int, core: frozenset[str]) -> bool:
    slug = compra["item"]
    relevante = item.get("cost", 0) >= CUSTO_RELEVANTE or slug in core
    consumivel = "consumable" in (item.get("qual") or "")
    frequente = compra["n"] >= PARCELA_MINIMA * total
    return frequente and relevante and not consumivel and compra["minuto_mediano"] is not None and _eh_fechado(slug, item)


def spikes(pro: dict, core: frozenset[str]) -> list[dict]:
    """Itens fechados que os pros compram com o herói, no minuto mediano. Componente e consumível ficam de fora;
    item barato só entra quando está na build core do guia ou da ficha (Magic Wand de suporte, botas)."""
    itens, total = _ler(fontes.ITENS), pro["resumo"]["n"]
    fechados = [(c, itens[c["item"]]) for c in pro["itens"] if c["item"] in itens and _eh_spike(c, itens[c["item"]], total, core)]
    return sorted(({"item": c["item"], "nome": i.get("dname", c["item"]), "minuto": float(c["minuto_mediano"]), "n": c["n"],
                    "chave": i.get("cost", 0) >= CUSTO_DE_ITEM_CHAVE or c["item"] in AVULSOS} for c, i in fechados),
                  key=lambda s: s["minuto"])


def confronto(interno: str, texto: str, pro: dict, core: frozenset[str]) -> dict:
    heroi = _herois().get(interno)
    if heroi is None:
        raise ValueError(f"herói fora do heroes.json: {interno}")
    meta, corpo = frontmatter(texto)
    partes = SECAO.split(corpo)
    placares = {p["hero_id"]: p for p in pro["confrontos"]}
    # Seções de método ("Como essa lista foi montada") explicam a escolha dos oponentes e não vão pro site.
    blocos = [bloco(t, c, placares) for t, c in zip(partes[1::2], partes[2::2]) if t.startswith("Contra ")]
    if repetidos := [nome for nome, n in Counter(b["oponente"]["nome"] for b in blocos).items() if n > 1]:
        raise ValueError(f"oponente repetido: {', '.join(sorted(repetidos))}")
    return {"id": id_no_app(heroi["localized_name"]), "nome": heroi["localized_name"], "nome_interno": interno,
            "hero_id": heroi["id"], "patch": meta["patch"], "jogos_pro": pro["resumo"]["n"],
            "spikes": spikes(pro, core), "confrontos": blocos}


def itens_core(guias: list[dict], fichas: list[dict]) -> dict[int, frozenset[str]]:
    """hero_id -> slugs da build core: itens_core do guia completo ou a build de todas as posições da ficha."""
    do_guia = {g["hero_id"]: frozenset(i["item"] for i in g["guia"]["itens_core"]) for g in guias}
    da_ficha = {f["hero_id"]: frozenset(i["item"] for p in f["posicoes"] for i in p["build"] if i["item"]) for f in fichas}
    return do_guia | da_ficha


def carregar(pasta: Path, pasta_pro: Path, core: dict[int, frozenset[str]]) -> list[dict]:
    todos = []
    for arq in sorted(pasta.glob("*.md")):
        try:
            pro = json.loads((pasta_pro / f"{arq.stem}.json").read_text(encoding="utf-8"))
            todos.append(confronto(arq.stem, arq.read_text(encoding="utf-8"), pro, core.get(pro["hero_id"], frozenset())))
        except (ValueError, KeyError, FileNotFoundError) as erro:
            raise ValueError(f"{arq.name}: {erro}") from erro
    return todos


def indice(todos: list[dict]) -> dict[str, int]:
    """id do app -> quantos confrontos de pro o herói tem analisados (selo da lista de heróis)."""
    return {c["id"]: len(c["confrontos"]) for c in todos}
