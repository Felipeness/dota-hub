// "Baixar PNG": serializa o mesmo SVG do quadro com o mapa inteiro no enquadramento, troca cada imagem por data URL
// (uma imagem SVG não carrega arquivos externos) e desenha num canvas. Tudo é do mesmo domínio, então o canvas não
// fica "sujo" e o toBlob funciona.
const LADO_DO_PNG = 2048;

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
  if (!(copia instanceof SVGSVGElement)) throw new Error("png: o quadro não é um SVG");
  copia.setAttribute("viewBox", "0 0 1000 1000");
  copia.setAttribute("width", String(LADO_DO_PNG));
  copia.setAttribute("height", String(LADO_DO_PNG));
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
    imagem.onerror = () => falhar(new Error("png: o navegador não desenhou o SVG"));
    imagem.src = url;
  });
}

export function baixarArquivo(blob: Blob, nome: string) {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = nome;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1_000);
}

export async function baixarPng(svg: SVGSVGElement, nome: string): Promise<void> {
  const url = URL.createObjectURL(new Blob([await svgPronto(svg)], { type: "image/svg+xml" }));
  try {
    const imagem = await carregarImagem(url);
    const canvas = document.createElement("canvas");
    canvas.width = LADO_DO_PNG;
    canvas.height = LADO_DO_PNG;
    const contexto = canvas.getContext("2d");
    if (!contexto) throw new Error("png: canvas 2d indisponível");
    contexto.drawImage(imagem, 0, 0, LADO_DO_PNG, LADO_DO_PNG);
    const png = await new Promise<Blob | null>((resolver) => canvas.toBlob(resolver, "image/png"));
    if (!png) throw new Error("png: o canvas não gerou a imagem");
    baixarArquivo(png, nome);
  } finally {
    URL.revokeObjectURL(url);
  }
}
