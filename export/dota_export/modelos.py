"""Modelos 3D das unidades: exporta do jogo com a animação parada, otimiza e guarda fora do git."""
import json
import re
import shutil
import struct
import subprocess
import tempfile
from pathlib import Path

from . import jogo

GLTF_TRANSFORM = "@gltf-transform/cli@4.5.1"
OTIMIZACAO = ["--compress", "meshopt", "--texture-compress", "webp"]
PARADA_EXATA = re.compile(r"(^|_)idle(_loop)?$")
FORA_DA_PARADA = ("portrait", "capture", "death", "channel", "sleep", "victory", "defeat", "reversed")
TEXTURA_MENOR = "256"
LIMITE_BYTES = 400 * 1024
LIMITE_TOTAL_BYTES = 15 * 1024 * 1024
MANIFESTO = "_manifesto.json"
TEMPO_LIMITE_S = 300
MAGICO_GLB = 0x46546C67


def nome(caminho: str) -> str:
    return Path(caminho).stem


def animacoes(glb: Path) -> list[str]:
    with glb.open("rb") as arquivo:
        cabecalho = arquivo.read(20)
        if len(cabecalho) < 20 or struct.unpack("<I", cabecalho[:4])[0] != MAGICO_GLB:
            raise ValueError(f"{glb.name} não é glb")
        tamanho = struct.unpack("<I", cabecalho[12:16])[0]
        gltf = json.loads(arquivo.read(tamanho))
    return [a.get("name", "") for a in gltf.get("animations", [])]


def escolher_parada(nomes: list[str]) -> str | None:
    """'idle' exato primeiro; senão a variação de idle de nome mais curto (sapos e reaproveitados não têm o exato)."""
    exata = next((n for n in nomes if PARADA_EXATA.search(n)), None)
    if exata:
        return exata
    candidatos = [n for n in nomes if "idle" in n.lower() and not any(f in n.lower() for f in FORA_DA_PARADA)]
    return min(candidatos, key=len, default=None)


def _vrf_glb(arquivo_vpk: Path, caminho: str, saida: Path, extra: list[str]) -> None:
    saida.parent.mkdir(parents=True, exist_ok=True)
    jogo.vrf("-i", str(arquivo_vpk), "-f", f"{caminho}_c", "-o", str(saida), "-d", "--gltf_export_format", "glb",
             "--gltf_export_materials", "--gltf_textures_adapt", *extra)


def otimizar(origem: Path, saida: Path, textura: str = "512") -> None:
    npx = shutil.which("npx")
    if npx is None:
        raise FileNotFoundError("npx não encontrado: instale o Node 22")
    r = subprocess.run([npx, "-y", GLTF_TRANSFORM, "optimize", str(origem), str(saida), *OTIMIZACAO, "--texture-size", textura],
                       capture_output=True, text=True, encoding="utf-8", errors="replace", timeout=TEMPO_LIMITE_S)
    if r.returncode != 0:
        raise RuntimeError(f"gltf-transform {origem.name}: {r.stderr[-500:]}")


def exportar(arquivo_vpk: Path, caminho: str, destino: Path) -> None:
    """Exporta duas vezes: a primeira só para descobrir o nome da animação parada."""
    n = nome(caminho)
    with tempfile.TemporaryDirectory() as tmp:
        todas = Path(tmp) / "todas" / f"{n}.glb"
        _vrf_glb(arquivo_vpk, caminho, todas, ["--gltf_export_animations"])
        parada = escolher_parada(animacoes(todas))
        bruto = Path(tmp) / "bruto" / f"{n}.glb"
        _vrf_glb(arquivo_vpk, caminho, bruto, ["--gltf_export_animations", "--gltf_animation_list", parada] if parada else [])
        destino.mkdir(parents=True, exist_ok=True)
        final = destino / f"{n}.glb"
        otimizar(bruto, final)
        if final.stat().st_size > LIMITE_BYTES:  # os 4 sapos de malha densa passam de 400 KB com textura de 512
            otimizar(bruto, final, TEXTURA_MENOR)


def atualizar(arquivo_vpk: Path, caminhos: list[str], destino: Path) -> None:
    """Só reexporta o modelo cujo CRC no VPK mudou ou cujo arquivo sumiu."""
    destino.mkdir(parents=True, exist_ok=True)
    crcs = jogo.listar(arquivo_vpk, "models/", "vmdl_c")
    arquivo = destino / MANIFESTO
    manifesto = json.loads(arquivo.read_text(encoding="utf-8")) if arquivo.exists() else {}
    for caminho in caminhos:
        n, crc = nome(caminho), crcs[f"{caminho}_c"]
        if manifesto.get(n) == crc and (destino / f"{n}.glb").exists():
            continue
        exportar(arquivo_vpk, caminho, destino)
        manifesto[n] = crc
        arquivo.write_text(json.dumps(manifesto, indent=1), encoding="utf-8")


def conferir_tamanhos(destino: Path, nomes: list[str]) -> int:
    tamanhos = {n: (destino / f"{n}.glb").stat().st_size for n in nomes}
    grandes = {n: t for n, t in tamanhos.items() if t > LIMITE_BYTES}
    if grandes:
        raise ValueError(f"modelos acima de {LIMITE_BYTES // 1024} KB: {grandes}")
    total = sum(tamanhos.values())
    if total > LIMITE_TOTAL_BYTES:
        raise ValueError(f"modelos somam {total // 1024} KB, acima de {LIMITE_TOTAL_BYTES // 1024} KB")
    return total
