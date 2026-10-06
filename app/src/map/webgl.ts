// O resultado não muda durante a sessão; testar de novo a cada render esgota o limite de contextos WebGL do navegador.
let suportaWebGL: boolean | undefined;

export function hasWebGL(): boolean {
  suportaWebGL ??= detectarWebGL();
  return suportaWebGL;
}

function detectarWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl2") ?? canvas.getContext("webgl");
    gl?.getExtension("WEBGL_lose_context")?.loseContext();
    return gl !== null;
  } catch {
    return false;
  }
}
