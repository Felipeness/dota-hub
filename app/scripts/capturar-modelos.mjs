// Captura o modelo 3D de cada unidade para a conferência visual (docs/superpowers/verificacao/modelos/<id>.png).
// Roda pelo Playwright MCP, nunca por um Chrome sem janela no terminal:
//   browser_run_code com filename apontando para este arquivo, com o `npm run dev -- --port 5180` no ar.
// O MCP só passa `page` e não tem `process`, então base e pasta de saída ficam nas constantes abaixo.
async (page) => {
  const BASE = "http://localhost:5180";
  const SAIDA = "C:/Users/felip/Desktop/dota-hub/docs/superpowers/verificacao/modelos";
  const TEMPO_LIMITE_MS = 30_000;
  // O Bounds do Cena3D anima a câmera até enquadrar o modelo (cerca de 1 s); antes disso a foto sai cortada.
  const ESPERA_ENQUADRAR_MS = 2_000;

  // Aba própria: o navegador do MCP pode estar sendo usado em outra aba.
  const aba = await page.context().newPage();
  try {
    await aba.setViewportSize({ width: 1440, height: 900 });
    // Movimento reduzido deixa o modelo parado de frente: as capturas saem iguais de uma rodada para outra.
    await aba.emulateMedia({ reducedMotion: "reduce" });
    await aba.goto(`${BASE}/glossario/unidades`, { timeout: TEMPO_LIMITE_MS });
    const unidades = await aba.evaluate(async () => (await fetch("/data/unidades.json")).json());
    const comModelo = unidades.filter((u) => u.modelo !== null);
    for (const { id } of comModelo) {
      // networkidle espera o .glb chegar: sem isso uma captura saiu com a página anterior ainda na tela.
      await aba.goto(`${BASE}/glossario/unidades/${id}`, { timeout: TEMPO_LIMITE_MS, waitUntil: "networkidle" });
      await aba.locator("figure.modelo canvas").waitFor({ timeout: TEMPO_LIMITE_MS });
      await aba.waitForTimeout(ESPERA_ENQUADRAR_MS);
      await aba.locator("figure.modelo").screenshot({ path: `${SAIDA}/${id}.png` });
    }
    return `${comModelo.length} de ${unidades.length} unidades capturadas`;
  } finally {
    await aba.close();
  }
}
