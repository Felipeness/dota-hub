"""Onde está o Dota 2 instalado e como ler os arquivos dele com o Source 2 Viewer CLI (só leitura)."""
import os
import subprocess
import tempfile
from pathlib import Path

from . import kv

STEAM_PADRAO = Path(r"C:\Program Files (x86)\Steam")
SUBCAMINHO_VPK = Path("steamapps/common/dota 2 beta/game/dota/pak01_dir.vpk")
VRF = Path(__file__).resolve().parents[1] / "ferramentas" / "vrf" / "Source2Viewer-CLI.exe"
TEMPO_LIMITE_S = 300
ARQUIVOS_TEXTO = {
    "unidades": "scripts/npc/npc_units.txt",
    "habilidades": "scripts/npc/npc_abilities.txt",
    "textos_pt": "resource/localization/abilities_brazilian.txt",
    "textos_en": "resource/localization/abilities_english.txt",
}


class DotaNaoEncontrado(RuntimeError):
    pass


def bibliotecas(steam: Path) -> list[Path]:
    arquivo = steam / "steamapps" / "libraryfolders.vdf"
    if not arquivo.exists():
        return [steam]
    pastas = kv.ler(arquivo.read_text(encoding="utf-8"))["libraryfolders"].values()
    return [Path(p["path"].replace("\\\\", "\\")) for p in pastas if isinstance(p, dict) and "path" in p]


def vpk(steam: Path = STEAM_PADRAO) -> Path:
    manual = os.environ.get("DOTA_VPK")
    candidatos = [Path(manual)] if manual else [b / SUBCAMINHO_VPK for b in bibliotecas(steam)]
    achado = next((c for c in candidatos if c.exists()), None)
    if achado is None:
        raise DotaNaoEncontrado(f"Dota 2 não encontrado. Procurei em: {', '.join(map(str, candidatos))}")
    return achado


def vrf(*argumentos: str) -> str:
    if not VRF.exists():
        raise FileNotFoundError(f"Source 2 Viewer CLI não encontrado em {VRF}. Rode: python -m dota_export.ferramentas")
    r = subprocess.run([str(VRF), *argumentos], capture_output=True, text=True, encoding="utf-8",
                       errors="replace", timeout=TEMPO_LIMITE_S)
    if r.returncode != 0:
        raise RuntimeError(f"vrf {' '.join(argumentos)}: {r.stderr.strip() or r.stdout[-500:]}")
    return r.stdout


def listar(arquivo_vpk: Path, filtro: str, extensao: str | None = None) -> dict[str, str]:
    """Caminho de cada arquivo do VPK que casa com o filtro e o CRC dele."""
    extra = ["-e", extensao] if extensao else []
    saida = {}
    for linha in vrf("-i", str(arquivo_vpk), "--vpk_list", "-f", filtro, *extra).splitlines():
        caminho, _, resto = linha.partition(" CRC:")
        if resto:
            saida[caminho.strip()] = resto.split()[0]
    return saida


def extrair(arquivo_vpk: Path, caminhos: list[str], destino: Path, decompilar: bool = False) -> None:
    vrf("-i", str(arquivo_vpk), "-o", str(destino), "-f", ",".join(caminhos), *(["-d"] if decompilar else []))


def textos(arquivo_vpk: Path) -> dict[str, dict]:
    with tempfile.TemporaryDirectory() as tmp:
        extrair(arquivo_vpk, list(ARQUIVOS_TEXTO.values()), Path(tmp))
        return {nome: kv.ler((Path(tmp) / caminho).read_text(encoding="utf-8"))
                for nome, caminho in ARQUIVOS_TEXTO.items()}
