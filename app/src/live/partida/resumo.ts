import type { Heroi } from "../../data/schemas";
import { nomeDaLane, textoDoResultado } from "../formato";
import { tempoDaPartida, type Compra, type DetalheDaPartida } from "./detalhe";
import { JANELAS } from "./janelas";

/** Itens core e last hits aos 10 min dos pros, da ficha do herói no app (só existe para parte dos heróis). */
export type ItemCoreDoGuia = Readonly<{ nome: string; minuto_alvo: number | null; base: string }>;
export type DadosPro = Readonly<{ itensCore: readonly ItemCoreDoGuia[]; lh10: number | null }>;

/** Linha dos pros com mais jogos e last hits aos 10 min; a linha do Felipe não é referência. */
export function dadosPro(heroi: Heroi): DadosPro {
  const [linha] = heroi.pros.linhas.filter((l) => l.jogador !== "Felipe" && l.lh10 !== null).sort((a, b) => b.jogos - a.jogos);
  return { itensCore: heroi.guia.itens_core, lh10: linha?.lh10 ?? null };
}

const MINUTO_DA_LANE = 10;
const LANE_EQUILIBRADA = 300;
const MAXIMO_DE_FRASES = 5;
const MORTES_PARA_DESTACAR = 2;

const numero = (v: number, casas = 0) => v.toLocaleString("pt-BR", { maximumFractionDigits: casas });
const maiuscula = (texto: string) => texto.charAt(0).toUpperCase() + texto.slice(1);

export function ouroCurto(valor: number): string {
  const absoluto = Math.abs(valor);
  const texto = absoluto >= 1_000 ? `${numero(absoluto / 1_000, 1)}k` : numero(absoluto);
  return `${valor < 0 ? "−" : "+"}${texto}`;
}

function fraseDoResultado(d: DetalheDaPartida): string {
  const lane = d.lane ? `, ${nomeDaLane(d.lane)}` : "";
  return `${maiuscula(textoDoResultado(d.venceu))} em ${Math.floor(d.duracaoS / 60)} min de ${d.heroi.nome}, ${d.abates}/${d.mortes}/${d.assistencias}${lane}.`;
}

function fraseDaLane(d: DetalheDaPartida): string | null {
  const meu = d.curvas.ouro[MINUTO_DA_LANE];
  const dele = d.adversario?.curvas.ouro[MINUTO_DA_LANE];
  if (meu === undefined || dele === undefined || !d.adversario) return null;
  const diferenca = meu - dele;
  const contra = `contra ${d.adversario.heroi.nome}`;
  if (Math.abs(diferenca) < LANE_EQUILIBRADA) return `Lane equilibrada ${contra} (${ouroCurto(diferenca)} de ouro aos 10 min).`;
  return `${diferenca > 0 ? "Ganhou" : "Perdeu"} a lane ${contra} (${ouroCurto(diferenca)} de ouro aos 10 min).`;
}

function fraseDosLastHits(d: DetalheDaPartida, pro: DadosPro | null): string | null {
  const lh = d.curvas.lh[MINUTO_DA_LANE];
  if (lh === undefined) return null;
  if (pro?.lh10 != null) return `${lh} last hits aos 10 min; os pros fazem ${numero(pro.lh10, 1)} com o herói.`;
  if (d.referencia) return `${lh} last hits aos 10 min; a mediana do herói no OpenDota é ${Math.round(d.referencia.lhPorMin * MINUTO_DA_LANE)}.`;
  return `${lh} last hits aos 10 min.`;
}

/**
 * O guia registra upgrades como "Skull Basher -> Abyssal Blade": compara cada segmento entre "->" (e o nome
 * inteiro) com o nome da compra, nos dois sentidos, pra casar tanto a peça quanto o item final montado.
 */
function bateComGuia(nomeDoGuia: string, nomeDaCompra: string): boolean {
  const compra = nomeDaCompra.toLowerCase();
  return nomeDoGuia.split("->").some((segmento) => {
    const guia = segmento.trim().toLowerCase();
    return guia.startsWith(compra) || compra.startsWith(guia);
  });
}

export const itemDoGuia = (compra: Compra, pro: DadosPro | null): ItemCoreDoGuia | null =>
  pro?.itensCore.find((i) => bateComGuia(i.nome, compra.nome)) ?? null;

const alvoDoGuia = (compra: Compra, pro: DadosPro | null) => {
  const item = itemDoGuia(compra, pro);
  return item?.minuto_alvo ?? null;
};

function fraseDoItemPrincipal(d: DetalheDaPartida, pro: DadosPro | null): string | null {
  const grandes = d.compras.filter((c) => c.grande);
  const comAlvo = grandes.find((c) => alvoDoGuia(c, pro) !== null);
  if (!comAlvo) {
    const [primeiro] = grandes;
    return primeiro ? `Primeiro item grande: ${primeiro.nome} aos ${tempoDaPartida(primeiro.t)}.` : null;
  }
  const alvoMin = alvoDoGuia(comAlvo, pro) ?? 0;
  const diferenca = Math.round(comAlvo.t / 60 - alvoMin);
  const quando = diferenca === 0 ? "no tempo do alvo" : `${Math.abs(diferenca)} min mais ${diferenca < 0 ? "cedo" : "tarde"} que o alvo`;
  return `${comAlvo.nome} aos ${tempoDaPartida(comAlvo.t)}, ${quando} do guia pro (${tempoDaPartida(Math.round(alvoMin * 60))}).`;
}

function fraseDasMortes(d: DetalheDaPartida): string | null {
  if (d.mortes === 0) return "Não morreu nenhuma vez.";
  const mortes = d.eventos.filter((e) => e.tipo === "morte");
  const porJanela = JANELAS.map((j) => ({ janela: j, total: mortes.filter((m) => j.de <= m.t && m.t < j.ate).length }))
    .sort((a, b) => b.total - a.total);
  const pior = porJanela[0];
  if (!pior || pior.total < MORTES_PARA_DESTACAR) return null;
  return `Morreu ${pior.total} vezes ${pior.janela.trecho}.`;
}

/** Até 5 frases, só com o que os dados mostram; frase sem dado não entra. */
export function resumoDaPartida(d: DetalheDaPartida, pro: DadosPro | null): string[] {
  return [fraseDoResultado(d), fraseDaLane(d), fraseDosLastHits(d, pro), fraseDoItemPrincipal(d, pro), fraseDasMortes(d)]
    .filter((f): f is string => f !== null).slice(0, MAXIMO_DE_FRASES);
}
