// Dicas práticas do confronto, tiradas dos números do OpenDota, e trechos dos guias do Hub que citam o outro herói.
import type { Heroi as Guia } from "../data/schemas";
import { ehPassiva, ehUltimate, temDano, type Habilidade, type Heroi } from "./modelo";

export type Fase = "lane" | "meio" | "luta";
export type Dica = Readonly<{ fase: Fase; texto: string; fonte: string }>;

/** Diferença a partir da qual alcance e velocidade mudam a lane; abaixo disso é ruído de item e nível. */
const ALCANCE_RELEVANTE = 150;
const VELOCIDADE_RELEVANTE = 10;
const RECARGA_CURTA_S = 12;

const recargas = (h: Habilidade) => h.recargaS.join(" / ");

function dicaDeAlcance(meu: Heroi, inimigo: Heroi): Dica[] {
  const diferenca = inimigo.alcance - meu.alcance;
  const fonte = `OpenDota, alcance de ataque: ${inimigo.nome} ${inimigo.alcance}, ${meu.nome} ${meu.alcance}`;
  if (diferenca >= ALCANCE_RELEVANTE) {
    return [{ fase: "lane", fonte, texto: `Ele bate de ${inimigo.alcance} e você de ${meu.alcance}: troca golpe sem chegar perto. Fique atrás dos seus creeps e só avance para o last hit.` }];
  }
  if (diferenca <= -ALCANCE_RELEVANTE) {
    return [{ fase: "lane", fonte, texto: `Você bate de ${meu.alcance} e ele de ${inimigo.alcance}: cada vez que ele chegar perto para o last hit, cobre com um ataque e volte.` }];
  }
  return [];
}

function dicaDeVelocidade(meu: Heroi, inimigo: Heroi): Dica[] {
  const diferenca = inimigo.velocidade - meu.velocidade;
  const fonte = `OpenDota, velocidade base: ${inimigo.nome} ${inimigo.velocidade}, ${meu.nome} ${meu.velocidade}`;
  if (diferenca >= VELOCIDADE_RELEVANTE) {
    return [{ fase: "lane", fonte, texto: `Ele anda ${inimigo.velocidade} e você ${meu.velocidade}: na corrida ele alcança. Não se afaste da torre sem uma saída pronta.` }];
  }
  if (diferenca <= -VELOCIDADE_RELEVANTE) {
    return [{ fase: "lane", fonte, texto: `Você anda ${meu.velocidade} e ele ${inimigo.velocidade}: quando ele errar a posição, dá para alcançar.` }];
  }
  return [];
}

const ehTrocaCurta = (h: Habilidade) => !ehPassiva(h) && !ehUltimate(h) && temDano(h) && (h.recargaS[0] ?? Infinity) <= RECARGA_CURTA_S;

function dicasDeTroca(inimigo: Heroi): Dica[] {
  return inimigo.habilidades.filter(ehTrocaCurta).map((h) => ({
    fase: "lane", fonte: `habilidade ${h.nome}: recarga de ${recargas(h)} s`,
    texto: `${h.nome} volta em ${recargas(h)} s. Troque golpe logo depois que ele usar, não antes.`,
  }));
}

function dicasDeUltimate(inimigo: Heroi): Dica[] {
  return inimigo.habilidades.filter(ehUltimate).map((h) => ({
    fase: "meio", fonte: `habilidade ${h.nome}: recarga de ${recargas(h)} s`,
    texto: `Viu o ${h.nome} sair? Ele fica até ${Math.max(...h.recargaS)} s sem ele (${recargas(h)} s por nível). É a hora de forçar luta ou objetivo.`,
  }));
}

function dicaDeBkb(inimigo: Heroi): Dica[] {
  const atravessam = inimigo.habilidades.filter((h) => !ehPassiva(h) && h.atravessaBkb === true).map((h) => h.nome);
  if (atravessam.length === 0) return [];
  const lista = atravessam.join(", ");
  return [{ fase: "luta", fonte: `OpenDota, campo "atravessa BKB" de ${lista}`, texto: `BKB não segura: ${lista}. Entre depois que isso sair ou guarde um jeito de sair de perto.` }];
}

export function dicasDoConfronto(meu: Heroi, inimigo: Heroi): Dica[] {
  return [...dicaDeAlcance(meu, inimigo), ...dicaDeVelocidade(meu, inimigo), ...dicasDeTroca(inimigo), ...dicasDeUltimate(inimigo), ...dicaDeBkb(inimigo)];
}

export type Trecho = Readonly<{ secao: string; texto: string }>;

const escapar = (texto: string) => texto.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const citaOHeroi = (nome: string) => new RegExp(`(^|[^\\p{L}])${escapar(nome)}($|[^\\p{L}])`, "iu");

/** Trechos do guia do Hub que citam o outro herói pelo nome. */
export function trechosDoGuia(guia: Guia, nomeDoOutro: string): Trecho[] {
  const cita = citaOHeroi(nomeDoOutro);
  const secoes: ReadonlyArray<readonly [string, readonly string[]]> = [
    ["Bom quando", guia.guia.bom_quando],
    ["Evite quando", guia.guia.evitar_quando],
    ["Na lane", guia.guia.lane.dicas],
    ["Item situacional", guia.guia.itens_situacionais.map((i) => `${i.nome}: ${i.quando}`)],
    ["Depois dos 20 min", guia.guia.depois_dos_20],
    ["Erro comum", guia.guia.erros_comuns],
  ];
  return secoes.flatMap(([secao, textos]) => textos.filter((t) => cita.test(t)).map((texto) => ({ secao, texto })));
}
