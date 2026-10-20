// Script de validação manual (não faz parte do app nem do build): roda o motor completo contra o OpenDota real
// pra uma partida e imprime o relatório. Uso: npx tsx scripts/validar-analise.ts <matchId> <conta>
import { readFileSync } from "node:fs";
import { z } from "zod";
import { construirContexto } from "../src/analise/contexto";
import { avaliarRegras } from "../src/analise/motor";
import { proPorPosicaoSchema } from "../src/analise/pro";
import { REGRAS as BUILD } from "../src/analise/regras/build";
import { REGRAS as ECONOMIA_E_LUTAS } from "../src/analise/regras/economia-e-lutas";
import { REGRAS as MORTES_E_VISAO } from "../src/analise/regras/mortes-e-visao";
import { REGRAS as OBJETIVOS_E_AEGIS } from "../src/analise/regras/objetivos-e-aegis";
import { REGRAS as MOMENTOS } from "../src/analise/regras/momentos";
import { montarRelatorio } from "../src/analise/relatorio";

// import.meta.glob (registro.ts) só funciona sob o Vite; fora dele, listamos as famílias à mão.
const REGISTRO_DE_REGRAS = [...OBJETIVOS_E_AEGIS, ...MORTES_E_VISAO, ...BUILD, ...ECONOMIA_E_LUTAS, ...MOMENTOS];
import { analiseSchema, caminhoDaAnalise } from "../src/confronto/analise";
import type { Consultar } from "../src/live/consulta";
import { detalheDaPartida } from "../src/live/partida/detalhe";

const BASE = "https://api.opendota.com/api";

const consultar: Consultar = async ({ caminho, schema }) => {
  const resposta = await fetch(`${BASE}${caminho}`);
  if (!resposta.ok) return { ok: false, erro: { codigo: "FONTE_INDISPONIVEL", tenteEmS: null } };
  const corpo = await resposta.json();
  const analisado = schema.safeParse(corpo);
  if (!analisado.success) {
    console.error("schema falhou em", caminho, analisado.error.issues.slice(0, 5));
    return { ok: false, erro: { codigo: "FONTE_FORMATO", tenteEmS: null } };
  }
  return { ok: true, dados: { valor: analisado.data, frescor: { buscadoEm: Date.now(), vencido: false } } };
};

async function main() {
  const [matchId, contaStr] = process.argv.slice(2);
  if (!matchId || !contaStr) throw new Error("uso: validar-analise.ts <matchId> <conta>");
  const conta = Number(contaStr);

  const resposta = await detalheDaPartida(consultar, matchId, conta);
  if (!resposta.ok) throw new Error(`detalheDaPartida falhou: ${resposta.erro.codigo}`);
  const detalhe = resposta.dados;

  const pro = (() => {
    try {
      // Ver AnalisePage.tsx: content/confrontos nomeia pelo slug do nome localizado (retrato), não pela chave do OpenDota.
      const bruto = JSON.parse(readFileSync(`public${caminhoDaAnalise(detalhe.heroi.retrato)}`, "utf-8"));
      return analiseSchema.parse(bruto);
    } catch {
      return null;
    }
  })();
  const proPosicoes = proPorPosicaoSchema.parse(JSON.parse(readFileSync("public/data/pro_posicoes.json", "utf-8")));

  const ctx = construirContexto(detalhe, pro, proPosicoes);
  const relatorio = montarRelatorio(avaliarRegras(ctx, REGISTRO_DE_REGRAS));

  console.log(`=== ${detalhe.heroi.nome}, partida ${detalhe.partida}, ${detalhe.venceu ? "vitória" : "derrota"} ===`);
  for (const achado of relatorio.achados) {
    const minuto = achado.minuto === null ? "-" : `${Math.floor(achado.minuto)}:${String(Math.round((achado.minuto % 1) * 60)).padStart(2, "0")}`;
    console.log(`[${achado.tipo}/${achado.peso}] ${minuto} ${achado.titulo}`);
    if (process.env.DETALHE && achado.id.startsWith(process.env.DETALHE)) console.log(`   ${achado.oQueAconteceu}
   -> ${achado.oQueFazer}`);
  }
  console.log(`\nTotal: ${relatorio.achados.length} achados.`);
}

void main();
