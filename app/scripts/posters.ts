import { mkdirSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { chromium } from "playwright";

const BASE = process.env.BASE_URL ?? "http://localhost:4173";
const DADOS = join(import.meta.dirname, "..", "public", "data");
const POSTERS = join(DADOS, "posters");
const TEMPO_LIMITE_MS = 30_000;
const QUALIDADE_JPEG = 80;
// O Bounds do Cena3D anima a câmera até enquadrar o modelo (cerca de 1 s); antes disso a foto sai cortada.
const ESPERA_ENQUADRAR_MS = 2_000;

const modelos = readdirSync(join(DADOS, "modelos")).filter((f) => f.endsWith(".glb")).map((f) => f.slice(0, -".glb".length));
mkdirSync(POSTERS, { recursive: true });

// Um navegador só, fechado no finally: navegador sem janela esquecido aberto esgota a memória no Windows.
const navegador = await chromium.launch({ args: ["--use-angle=swiftshader", "--enable-unsafe-swiftshader"] });
try {
  const pagina = await navegador.newPage({ viewport: { width: 512, height: 512 } });
  for (const modelo of modelos) {
    await pagina.goto(`${BASE}/poster/${modelo}`, { timeout: TEMPO_LIMITE_MS });
    await pagina.getByText("pronto").waitFor({ timeout: TEMPO_LIMITE_MS });
    await pagina.waitForTimeout(ESPERA_ENQUADRAR_MS);
    await pagina.locator("canvas").screenshot({ path: join(POSTERS, `${modelo}.jpg`), type: "jpeg", quality: QUALIDADE_JPEG });
    console.log(`ok: ${modelo}`);
  }
} finally {
  await navegador.close();
}
