// "Baixar imagem": serializa o mesmo SVG do quadro com o mapa inteiro no enquadramento, troca cada imagem por data URL
// (uma imagem SVG não carrega arquivos externos) e desenha num canvas. Tudo é do mesmo domínio, então o canvas não
// fica "sujo" e o toBlob funciona.
const LADO_DA_IMAGEM = 2048;
/** O mapa é textura de foto: JPEG 0,88 dá ~1 MB contra ~9,5 MB do PNG no mesmo tamanho (cabe no WhatsApp). */
const QUALIDADE_DO_JPEG = 0.88;

async function comoDataUrl(url: string, cache: Map<string, Promise<string>>): Promise<string> {
  const pronto = cache.get(url);
  if (pronto) return pronto;
  const lendo = fetch(url)
    .then((r) => {
      if (!r.ok) throw new Error(`imagem ${url}: ${r.status}`);
      return r.blob();
    })
    .then((blob) => new Promise<string>((resolver, falhar) => {
      const leitor = new FileReader();
      leitor.onload = () => (typeof leitor.result === "string" ? resolver(leitor.result) : falhar(new Error(`imagem ${url} ilegível`)));
      leitor.onerror = () => falhar(leitor.error ?? new Error(`imagem ${url} ilegível`));
      leitor.readAsDataURL(blob);
    }));
  cache.set(url, lendo);
  return lendo;
}

async function svgPronto(original: SVGSVGElement): Promise<string> {
  const copia = original.cloneNode(true);
  if (!(copia instanceof SVGSVGElement)) throw new Error("imagem: o quadro não é um SVG");
  copia.setAttribute("viewBox", "0 0 1000 1000");
  copia.setAttribute("width", String(LADO_DA_IMAGEM));
  copia.setAttribute("height", String(LADO_DA_IMAGEM));
  copia.removeAttribute("style");
  copia.querySelectorAll("[data-exportar='nao']").forEach((n) => n.remove());
  const cache = new Map<string, Promise<string>>();
  await Promise.all([...copia.querySelectorAll("image")].map(async (imagem) => {
    const href = imagem.getAttribute("href");
    if (href && !href.startsWith("data:")) imagem.setAttribute("href", await comoDataUrl(new URL(href, location.href).href, cache));
  }));
  return new XMLSerializer().serializeToString(copia);
}

function carregarImagem(url: string): Promise<HTMLImageElement> {
  return new Promise((resolver, falhar) => {
    const imagem = new Image();
    imagem.onload = () => resolver(imagem);
    imagem.onerror = () => falhar(new Error("imagem: o navegador não desenhou o SVG"));
    imagem.src = url;
  });
}

/** Tempo para o navegador terminar de gravar o arquivo antes de soltar a URL do blob. */
const VIDA_DA_URL_MS = 60_000;

/**
 * Baixa o blob com nome e extensão. O link entra no documento (Firefox e WebViews ignoram `download` em link solto)
 * e deve ser chamado direto do clique: Safari e navegadores embutidos descartam o `download` sem gesto do usuário.
 */
export function baixarArquivo(blob: Blob, nome: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = nome;
  link.hidden = true;
  document.body.append(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), VIDA_DA_URL_MS);
}

export const TIPO_DA_IMAGEM = "image/jpeg";

/** Desenha o quadro inteiro em JPEG; quem baixa é o botão da prévia, num clique novo. */
export async function gerarImagem(svg: SVGSVGElement, nome: string): Promise<File> {
  const url = URL.createObjectURL(new Blob([await svgPronto(svg)], { type: "image/svg+xml" }));
  try {
    const imagem = await carregarImagem(url);
    const canvas = document.createElement("canvas");
    canvas.width = LADO_DA_IMAGEM;
    canvas.height = LADO_DA_IMAGEM;
    const contexto = canvas.getContext("2d");
    if (!contexto) throw new Error("imagem: canvas 2d indisponível");
    contexto.drawImage(imagem, 0, 0, LADO_DA_IMAGEM, LADO_DA_IMAGEM);
    // O JPEG não tem transparência: o mapa cobre o quadro inteiro, então nada se perde.
    const jpeg = await new Promise<Blob | null>((resolver) => canvas.toBlob(resolver, TIPO_DA_IMAGEM, QUALIDADE_DO_JPEG));
    if (!jpeg) throw new Error("imagem: o canvas não gerou o arquivo");
    return new File([jpeg], `${nome}.jpg`, { type: TIPO_DA_IMAGEM });
  } finally {
    URL.revokeObjectURL(url);
  }
}

/** Compartilhar arquivo existe no celular (Android, iOS); no desktop o canShare costuma recusar. */
export const podeCompartilhar = (arquivo: File) => typeof navigator.canShare === "function" && navigator.canShare({ files: [arquivo] });
