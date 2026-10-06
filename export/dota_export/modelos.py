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
FORA_DA_PARADA = ("portrait", "capture", "death", "channel", "sleep", "victory", "defeat", "reversed", "_to_")
MALHA_EMBUTIDA = re.compile(r'm_Name = "([^"]*)"\s+m_nMeshIndex = (\d+)')
LOD_ZERO = 1
TEXTURA_MENOR = "256"
LIMITE_BYTES = 400 * 1024
LIMITE_TOTAL_BYTES = 15 * 1024 * 1024
MANIFESTO = "_manifesto.json"
TEMPO_LIMITE_S = 300
MAGICO_GLB = 0x46546C67


def nome(caminho: str) -> str:
    return Path(caminho).stem


def _gltf(glb: Path) -> dict:
    with glb.open("rb") as arquivo:
        cabecalho = arquivo.read(20)
        if len(cabecalho) < 20 or struct.unpack("<I", cabecalho[:4])[0] != MAGICO_GLB:
            raise ValueError(f"{glb.name} não é glb")
        tamanho = struct.unpack("<I", cabecalho[12:16])[0]
        return json.loads(arquivo.read(tamanho))


def animacoes(glb: Path) -> list[str]:
    return [a.get("name", "") for a in _gltf(glb).get("animations", [])]


def malhas(glb: Path) -> list[str]:
    """Nome de cada malha sem o prefixo '<caminho do vmdl_c>.' que o exportador põe."""
    return [m.get("name", "").rpartition(".vmdl_c.")[2] for m in _gltf(glb).get("meshes", [])]


def escolher_parada(nomes: list[str]) -> str | None:
    """'idle' exato primeiro; senão a variação de idle de nome mais curto (sapos e reaproveitados não têm o exato).

    Transições como 'sleeping_lying_to_idle' terminam em '_idle' mas deitam o creep: ficam de fora nos dois passos.
    """
    paradas = [n for n in nomes if "idle" in n.lower() and not any(f in n.lower() for f in FORA_DA_PARADA)]
    exata = next((n for n in paradas if PARADA_EXATA.search(n)), None)
    return exata or min(paradas, key=len, default=None)


def _lista_numeros(data: str, chave: str) -> list[int]:
    achado = re.search(chave + r" =\s*(\[[^\]]*\]|-?\d+)", data)
    if achado is None:
        raise ValueError(f"bloco DATA do modelo sem {chave}")
    return [int(n) for n in re.findall(r"-?\d+", achado.group(1))]


def malhas_visiveis(ctrl: str, data: str) -> list[str] | None:
    """Malhas de LOD 0 que o jogo mostra no corpo padrão; None quando nenhuma fica escondida (exporta tudo).

    O exportador junta todas as malhas, inclusive as de grupos de corpo desligados (a variante 'cavern' do creep
    melee do Dire ficava sobreposta ao corpo normal). Cada malha liga se a máscara dela cruza a máscara padrão.
    """
    grupos = _lista_numeros(data, "m_refMeshGroupMasks")
    lods = _lista_numeros(data, "m_refLODGroupMasks")
    (padrao,) = _lista_numeros(data, "m_nDefaultMeshGroupMask")
    lod_zero = [(nome, int(i)) for nome, i in MALHA_EMBUTIDA.findall(ctrl) if lods[int(i)] & LOD_ZERO]
    visiveis = [nome for nome, i in lod_zero if grupos[i] & padrao]
    return visiveis if len(visiveis) < len(lod_zero) else None


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


def _bloco(arquivo_vpk: Path, caminho: str, bloco: str) -> str:
    return jogo.vrf("-i", str(arquivo_vpk), "-f", f"{caminho}_c", "-b", bloco)


def exportar(arquivo_vpk: Path, caminho: str, destino: Path) -> None:
    """Exporta duas vezes: a primeira só para descobrir o nome da animação parada."""
    n = nome(caminho)
    with tempfile.TemporaryDirectory() as tmp:
        todas = Path(tmp) / "todas" / f"{n}.glb"
        _vrf_glb(arquivo_vpk, caminho, todas, ["--gltf_export_animations"])
        parada = escolher_parada(animacoes(todas))
        visiveis = malhas_visiveis(_bloco(arquivo_vpk, caminho, "CTRL"), _bloco(arquivo_vpk, caminho, "DATA"))
        extra = ["--gltf_export_animations", "--gltf_animation_list", parada] if parada else []
        extra += ["--gltf_mesh_list", ",".join(visiveis)] if visiveis else []
        bruto = Path(tmp) / "bruto" / f"{n}.glb"
        _vrf_glb(arquivo_vpk, caminho, bruto, extra)
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
