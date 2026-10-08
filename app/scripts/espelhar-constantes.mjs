// Copia as constantes do OpenDota para public/data/opendota/constants, servidas pelo CloudFront junto do site.
// A fonte do app lê essa cópia antes da API (src/live/fonte/opendota.ts). Falhou um download: mantém o arquivo anterior.
// Uso, de dentro de app/: node scripts/espelhar-constantes.mjs
import { mkdirSync, writeFileSync } from "node:fs";

const API = "https://api.opendota.com/api/constants";
const DESTINO = "public/data/opendota/constants";
const CONSTANTES = ["heroes", "hero_abilities", "abilities", "items", "aghs_desc", "ability_ids", "xp_level"];
const TEMPO_MAXIMO_MS = 120_000;
const TENTATIVAS = 3;

async function baixar(nome) {
  for (let tentativa = 1; tentativa <= TENTATIVAS; tentativa++) {
    try {
      const resposta = await fetch(`${API}/${nome}`, { signal: AbortSignal.timeout(TEMPO_MAXIMO_MS) });
      if (resposta.ok) return JSON.stringify(await resposta.json());
      console.warn(`${nome}: status ${resposta.status} (tentativa ${tentativa})`);
    } catch (causa) {
      console.warn(`${nome}: ${causa} (tentativa ${tentativa})`);
    }
  }
  return null;
}

mkdirSync(DESTINO, { recursive: true });
const falhas = [];
for (const nome of CONSTANTES) {
  const corpo = await baixar(nome);
  if (corpo === null) { falhas.push(nome); continue; }
  writeFileSync(`${DESTINO}/${nome}.json`, corpo);
  console.log(`${nome}: ${Math.round(corpo.length / 1024)} KB`);
}
if (falhas.length) console.warn(`sem atualizar (fica a cópia anterior, se houver): ${falhas.join(", ")}`);
