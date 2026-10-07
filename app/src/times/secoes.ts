import type { Secao } from "./schemas";

// Ordem de leitura: quem é o time, depois o catálogo do contrato e, por fim, como a análise foi feita e corrigida.
const ABERTURA = ["identidade", "dna", "dna_cadeia", "contexto", "amostra"];
const CATALOGO = [
  "draft", "hero_pool", "pool", "heroes", "laning", "recursos", "mapa", "farm", "visao", "smoke", "objetivos",
  "objetivo_ward_smoke", "lutas", "ritmo", "vitoria", "derrota", "assinatura", "tres_niveis", "niveis", "jogadores",
  "padroes", "padroes_escondidos", "gameplan", "red_team", "pos_ti", "conclusao",
];
const FECHAMENTO = ["confianca", "correcoes", "metodo", "limitacoes"];
const CONHECIDAS = [...ABERTURA, ...CATALOGO];
// Seções em texto que repetem um bloco estruturado da página: o bloco fica no lugar delas e o texto sai.
const SUBSTITUIDAS_POR_BLOCO = new Set(["assinatura", "assinatura_temporal"]);

export type Bloco = { tipo: "secao"; secao: Secao } | { tipo: "assinatura" };

// Seção nova (id fora das listas) entra antes do fechamento, na ordem em que veio no arquivo.
function peso(id: string, posicaoNoArquivo: number): number {
  const conhecida = CONHECIDAS.indexOf(id);
  if (conhecida >= 0) return conhecida;
  const final = FECHAMENTO.indexOf(id);
  if (final >= 0) return 2000 + final;
  return 1000 + posicaoNoArquivo;
}

export function ordenarSecoes(secoes: readonly Secao[]): Bloco[] {
  const blocos = secoes
    .filter((s) => !SUBSTITUIDAS_POR_BLOCO.has(s.id))
    .map((s, k): { bloco: Bloco; p: number } => ({ bloco: { tipo: "secao", secao: s }, p: peso(s.id, k) }));
  const assinatura = { bloco: { tipo: "assinatura" } satisfies Bloco, p: CONHECIDAS.indexOf("assinatura") };
  return [...blocos, assinatura].toSorted((a, b) => a.p - b.p).map(({ bloco }) => bloco);
}
