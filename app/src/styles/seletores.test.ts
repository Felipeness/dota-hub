/// <reference types="node" />
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

type Bloco = { classe: string; lugar: string };

// Seção = trecho entre dois comentários de nível de topo. Repetir a classe na mesma seção é complemento;
// noutra seção ou noutro arquivo é colisão: a última regra vence e quebra a tela da primeira.
function blocosDeClasse(css: string, arquivo: string): Bloco[] {
  const blocos: Bloco[] = [];
  let profundidade = 0;
  let inicio = 0;
  let secao = 0;
  for (let i = 0; i < css.length; i++) {
    if (css.startsWith("/*", i)) {
      const fim = css.indexOf("*/", i) + 2;
      if (profundidade === 0) {
        secao++;
        inicio = fim;
      }
      i = fim - 1;
      continue;
    }
    const caractere = css[i];
    if (caractere === "{" && profundidade++ === 0) {
      for (const seletor of css.slice(inicio, i).split(",").map((s) => s.trim())) {
        if (/^\.[\w-]+$/.test(seletor)) blocos.push({ classe: seletor, lugar: `${arquivo}, seção ${secao}` });
      }
    }
    if (caractere === "}" && --profundidade === 0) inicio = i + 1;
    if (caractere === ";" && profundidade === 0) inicio = i + 1;
  }
  return blocos;
}

function classesEmDoisLugares(arquivos: ReadonlyArray<readonly [string, string]>): string[] {
  const lugares = new Map<string, Set<string>>();
  for (const [arquivo, css] of arquivos) {
    for (const { classe, lugar } of blocosDeClasse(css, arquivo)) lugares.set(classe, (lugares.get(classe) ?? new Set<string>()).add(lugar));
  }
  return [...lugares].filter(([, onde]) => onde.size > 1).map(([classe]) => classe).sort();
}

it("acha a mesma classe definida em duas seções", () => {
  const css = "/* Casca */\n.marca { display: flex; }\n/* Replay */\n.marca { position: absolute; }";
  expect(classesEmDoisLugares([["a.css", css]])).toEqual([".marca"]);
});

it("aceita complemento na mesma seção e regra dentro de @media", () => {
  const css = "/* Heróis */\n.ficha { gap: 8px; }\n.ficha { min-width: 0; }\n@media (max-width: 720px) { .ficha { gap: 4px; } }";
  expect(classesEmDoisLugares([["a.css", css]])).toEqual([]);
});

it("nenhuma classe do app é definida em dois lugares", () => {
  const arquivos = readdirSync("src", { recursive: true, encoding: "utf-8" })
    .filter((f) => f.endsWith(".css"))
    .map((f) => [f, readFileSync(join("src", f), "utf-8")] as const);
  expect(classesEmDoisLugares(arquivos)).toEqual([]);
});
