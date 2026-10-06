"""python -m dota_export.ferramentas: baixa o Source 2 Viewer CLI na versão fixada e confere o hash."""
import hashlib
import io
import urllib.request
import zipfile

from . import jogo

VERSAO = "20.0"
URL = f"https://github.com/ValveResourceFormat/ValveResourceFormat/releases/download/{VERSAO}/cli-windows-x64.zip"
SHA256 = "d32ab327b8bbb42a2528866afb03bb582bdb779d0005488da32b90292afd3ff5"
TEMPO_LIMITE_S = 120


def conferir(conteudo: bytes) -> None:
    obtido = hashlib.sha256(conteudo).hexdigest()
    if obtido != SHA256:
        raise ValueError(f"hash do VRF {VERSAO} não confere: {obtido}")


def instalar() -> None:
    with urllib.request.urlopen(URL, timeout=TEMPO_LIMITE_S) as resposta:
        conteudo = resposta.read()
    conferir(conteudo)
    jogo.VRF.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(io.BytesIO(conteudo)) as pacote:
        pacote.extractall(jogo.VRF.parent)
    print(f"ok: {jogo.VRF}")


if __name__ == "__main__":
    instalar()
