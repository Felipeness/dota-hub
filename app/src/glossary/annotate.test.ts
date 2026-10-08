import type { ConteudoItem } from "../data/schemas";
import { marcarTermos } from "./annotate";

function termo(id: string, titulo: string, sinonimos: string[] = []): ConteudoItem {
  return {
    id, titulo, patch: "7.41", fontes: [],
    secoes: { basico: `Básico de ${titulo}.`, avancado: null },
    origem: { basico: null, avancado: null },
    links: [], extras: sinonimos.length > 0 ? { sinonimos } : {},
  };
}

const BKB = termo("bkb", "BKB", ["Black King Bar"]);
const STACK = termo("stack", "Stack");
const STACK_DUPLO = termo("stack-duplo", "Stack duplo");
const N = termo("amostra", "Amostra", ["n="]);

it("marcaAPrimeiraOcorrenciaDeCadaTermo", () => {
  const trechos = marcarTermos("BKB é essencial. BKB de novo não marca.", [BKB]);
  const marcados = trechos.filter((t) => t.termo);
  expect(marcados).toHaveLength(1);
  expect(marcados[0].texto).toBe("BKB");
});

it("respeitaSinonimosDoTermo", () => {
  const trechos = marcarTermos("Comprar Black King Bar cedo ajuda.", [BKB]);
  expect(trechos.some((t) => t.termo?.id === "bkb" && t.texto === "Black King Bar")).toBe(true);
});

it("prefereOSinonimoMaisEspecificoQuandoHaSobreposicao", () => {
  const trechos = marcarTermos("Fazer stack duplo nesse camp rende muito.", [STACK, STACK_DUPLO]);
  const marcados = trechos.filter((t) => t.termo);
  expect(marcados).toHaveLength(1);
  expect(marcados[0].termo?.id).toBe("stack-duplo");
  expect(marcados[0].texto).toBe("stack duplo");
});

it("ignoraOcorrenciasDentroDeLinksMarkdown", () => {
  const trechos = marcarTermos("Veja [BKB](https://liquipedia.net) no guia.", [BKB]);
  expect(trechos.some((t) => t.termo)).toBe(false);
});

it("ignoraSinonimosPuramenteNumericos", () => {
  const trechos = marcarTermos("Em 55 partidas o efeito foi de 55.", [N]);
  expect(trechos.some((t) => t.termo)).toBe(false);
});

it("casaSemDistinguirAcentoOuCaixa", () => {
  const confianca = termo("confianca", "Confiança");
  const trechos = marcarTermos("A CONFIANCA desse número é baixa.", [confianca]);
  expect(trechos.find((t) => t.termo)?.texto).toBe("CONFIANCA");
});

it("naoMarcaUmaPalavraQueSoContemOSinonimoComoSubstring", () => {
  const cs = termo("cs", "CS");
  const trechos = marcarTermos("Não é CS, é cassino.", [cs]);
  const marcados = trechos.filter((t) => t.termo);
  expect(marcados).toHaveLength(1);
  expect(marcados[0].texto).toBe("CS");
});

it("preservaOTextoOriginalReconstruindoOsTrechos", () => {
  const original = "Comprar BKB e Black King Bar no mesmo texto.";
  const trechos = marcarTermos(original, [BKB]);
  expect(trechos.map((t) => t.texto).join("")).toBe(original);
});
