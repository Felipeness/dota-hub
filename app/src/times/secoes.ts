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

// Seção nova (id fora das listas) entra antes do fechamento, na ordem em que veio no arquivo.
function peso(id: string, posicaoNoArquivo: number): number {
  const conhecida = CONHECIDAS.indexOf(id);
  if (conhecida >= 0) return conhecida;
  const final = FECHAMENTO.indexOf(id);
  if (final >= 0) return 2000 + final;
  return 1000 + posicaoNoArquivo;
}

export const ordenarSecoes = (secoes: readonly Secao[]): Secao[] =>
  secoes.map((s, k) => ({ s, p: peso(s.id, k) })).toSorted((a, b) => a.p - b.p).map(({ s }) => s);
