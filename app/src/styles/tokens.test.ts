/// <reference types="node" />
import { readFileSync } from "node:fs";

it("define as cores e fontes do novo visual", () => {
  const css = readFileSync("src/styles/tokens.css", "utf-8");
  for (const v of ["--cor-fundo: #0a0e11", "--cor-destaque: #f2b544", "--cor-radiant: #5bbf7a", "--cor-dire: #e0675a", "--fonte-display:"]) {
    expect(css).toContain(v);
  }
});
