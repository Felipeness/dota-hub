// Regra: morte com o time em inferioridade numérica de verdade, contada pelo respawn dos 10 heróis (panorama.ts):
// quantos aliados já estavam mortos no instante, quando cada um voltava, quantos inimigos estavam vivos. Diferente
// de mortesEmDesvantagem (ouro do time), aqui o conselho cita horários concretos: "o Axe volta às 31:56".
// Posição só quando a fonte tem: lane pela posição da morte num teamfight ou pela torre que caiu logo depois.
import type { Ponto } from "../../../map/coords";
import { tempoDaPartida, type DetalheDaPartida } from "../../../live/partida/detalhe";
import {
  estaMorto, nomeDaLinha, type EstruturaCaida, type JogadorNoPanorama, type Linha, type MorteNoPanorama,
} from "../../../live/partida/panorama";
import { regiaoDoPonto } from "../../../live/rotaAproximada";
import type { Achado, Contexto, Regra } from "../../modelo";

const TAMANHO_DO_TIME = 5;
/** Mesma janela de torrePerdidaAposMorte.ts: correlação no tempo, não causa provada. */
const JANELA_DE_TORRE_S = 90;
const FONTES = [
  "deaths_log do OpenDota dos 10 heróis (time_dead = quanto tempo cada um ficou morto)",
  "objectives do OpenDota (building_kill, Roshan e Aegis)",
  "deaths_pos do teamfight, quando a morte caiu dentro de um",
];
/** Aliado que volta em até 10 s está, na prática, na mesma luta: não conta como ausente. */
const MARGEM_DE_VOLTA_S = 10;
const LINHA_DA_REGIAO: Readonly<Record<ReturnType<typeof regiaoDoPonto>, Linha>> = { cima: "top", meio: "mid", baixo: "bot" };

type Retorno = Readonly<{ nome: string; voltaEm: number | null }>;
type Cena = Readonly<{
  morte: MorteNoPanorama; aliadosMortos: readonly Retorno[]; aliadosVivos: number; inimigosVivos: number;
  torresDepois: readonly EstruturaCaida[]; aegisInimiga: boolean; linha: Readonly<{ linha: Linha; pelaPosicao: boolean }> | null;
}>;

export const juntarNomes = (nomes: readonly string[]) =>
  nomes.length <= 1 ? (nomes[0] ?? "") : `${nomes.slice(0, -1).join(", ")} e ${nomes.at(-1) ?? ""}`;

/**
 * Um segundo antes da morte (quem morre no mesmo segundo, numa troca, não conta) e que ainda vai demorar mais de
 * 10 s para voltar: quem já está renascendo chega na mesma luta.
 */
function ausentesEm(jogadores: readonly JogadorNoPanorama[], t: number): Retorno[] {
  return jogadores.flatMap((j) => {
    const morte = j.mortes.find((m) => estaMorto(m, t - 1) && (m.voltaEm ?? t) > t + MARGEM_DE_VOLTA_S);
    return morte ? [{ nome: j.heroi.nome, voltaEm: morte.voltaEm }] : [];
  });
}

function linhaDaMorte(ponto: Ponto | null, torresDepois: readonly EstruturaCaida[]): Cena["linha"] {
  if (ponto) return { linha: LINHA_DA_REGIAO[regiaoDoPonto({ x: ponto[0], y: ponto[1] })], pelaPosicao: true };
  const torre = torresDepois.find((e) => e.linha !== null);
  return torre?.linha ? { linha: torre.linha, pelaPosicao: false } : null;
}

function cenaDaMorte(detalhe: DetalheDaPartida, morte: MorteNoPanorama): Cena {
  const { jogadores, estruturas, roshans } = detalhe.panorama;
  const aliados = jogadores.filter((j) => j.lado === detalhe.lado && j.slot !== detalhe.slot);
  const inimigos = jogadores.filter((j) => j.lado !== detalhe.lado);
  const aliadosMortos = ausentesEm(aliados, morte.t);
  const torresDepois = estruturas.filter((e) => e.lado === detalhe.lado && e.t >= morte.t && e.t - morte.t <= JANELA_DE_TORRE_S);
  return {
    morte, aliadosMortos, torresDepois,
    aliadosVivos: TAMANHO_DO_TIME - aliadosMortos.length,
    inimigosVivos: TAMANHO_DO_TIME - ausentesEm(inimigos, morte.t).length,
    aegisInimiga: roshans.some((r) => r.lado !== null && r.lado !== detalhe.lado && r.t <= morte.t && morte.t < (r.aegisAte ?? r.t)),
    linha: linhaDaMorte(morte.ponto, torresDepois),
  };
}

/** A próxima torre de pé do seu time naquela lane, no instante da morte: é pra onde recuar. */
function torreParaRecuar(detalhe: DetalheDaPartida, linha: Linha, t: number): string {
  const caidas = detalhe.panorama.estruturas.filter((e) => e.lado === detalhe.lado && e.linha === linha && e.tier !== null && e.t < t);
  const proximoTier = [1, 2, 3].find((tier) => !caidas.some((e) => e.tier === tier));
  return proximoTier ? `a T${proximoTier} ${nomeDaLinha(linha)}` : "o high ground";
}

function oQueAconteceu(cena: Cena): string {
  const { morte, aliadosMortos, aliadosVivos, inimigosVivos, torresDepois, linha } = cena;
  const matador = morte.matador ? ` para ${morte.matador}` : "";
  const mortos = `${juntarNomes(aliadosMortos.map((a) => a.nome))} ${aliadosMortos.length > 1 ? "já estavam mortos" : "já estava morto"}`;
  const onde = linha?.pelaPosicao ? ` Morte na lane ${nomeDaLinha(linha.linha)} (posição registrada na luta).` : "";
  const nomesUnicos = torresDepois.filter((e, i) => torresDepois.findIndex((o) => o.nome === e.nome) === i);
  const torres = nomesUnicos.length > 0
    ? ` Nos 90 s seguintes o time perdeu: ${nomesUnicos.map((e) => `${e.nome} (${tempoDaPartida(e.t)})`).join(", ")}.`
    : "";
  const aegis = cena.aegisInimiga ? " O time inimigo tinha a Aegis." : "";
  return `Você morreu${matador} às ${tempoDaPartida(morte.t)}; ${mortos}: ${aliadosVivos} do seu time vivos contra ${inimigosVivos}.${onde}${torres}${aegis}`;
}

type Volta = Readonly<{ nome: string; voltaEm: number }>;

/** Quem volta antes do fim da partida, na ordem em que volta; quem não volta a tempo não entra no conselho. */
function voltasAntesDoFim(cena: Cena, fimDaPartida: number): Volta[] {
  return cena.aliadosMortos
    .flatMap((a) => (a.voltaEm === null || a.voltaEm > fimDaPartida ? [] : [{ nome: a.nome, voltaEm: a.voltaEm }]))
    .sort((a, b) => a.voltaEm - b.voltaEm);
}

function esperaPelosAliados(cena: Cena, voltas: readonly Volta[]): string {
  const ultima = voltas.at(-1);
  if (!ultima) return " e esperar o time voltar antes de aceitar a luta";
  const juntos = cena.aliadosVivos + voltas.length;
  return ` e esperar até ${tempoDaPartida(ultima.voltaEm)} para lutar com ${juntos === TAMANHO_DO_TIME ? "os cinco" : juntos}`;
}

function oQueFazer(detalhe: DetalheDaPartida, cena: Cena): string {
  const voltas = voltasAntesDoFim(cena, detalhe.duracaoS);
  const quando = voltas.map((a, i) => `${i === 0 ? `${a.nome} volta` : a.nome} às ${tempoDaPartida(a.voltaEm)}`);
  const destino = cena.linha ? `recuar para ${torreParaRecuar(detalhe, cena.linha.linha, cena.morte.t)}` : "recuar para trás da sua torre mais próxima";
  const contagem = cena.aliadosMortos.length === 1 ? "um aliado morto" : `${cena.aliadosMortos.length} aliados mortos`;
  const detalheDaVolta = quando.length > 0 ? ` (${juntarNomes(quando)})` : "";
  return `Com ${contagem}${detalheDaVolta}: ${destino}${esperaPelosAliados(cena, voltas)}.`;
}

function achadoDaCena(detalhe: DetalheDaPartida, cena: Cena): Achado {
  const deficit = cena.inimigosVivos - cena.aliadosVivos;
  return {
    id: `morte-em-inferioridade-${cena.morte.t}`,
    tipo: "erro",
    minuto: cena.morte.t / 60,
    titulo: `Morreu com o time em ${cena.aliadosVivos} contra ${cena.inimigosVivos}, ${tempoDaPartida(cena.morte.t)}`,
    oQueAconteceu: oQueAconteceu(cena),
    oQueFazer: oQueFazer(detalhe, cena),
    porque:
      "Contagem pelo respawn real dos 10 heróis (time_dead): no instante da morte, quem estava morto e ainda ia demorar " +
      "mais de 10 s para voltar. Não diz onde cada herói vivo estava; o OpenDota não guarda isso fora das lutas.",
    fontes: FONTES,
    peso: deficit >= 2 || cena.torresDepois.length > 0 ? "pesou_muito" : "pesou",
    evidencias: {
      numeros: { aliadosVivos: cena.aliadosVivos, inimigosVivos: cena.inimigosVivos },
      posicaoNoMapa: cena.morte.ponto ? { x: cena.morte.ponto[0], y: cena.morte.ponto[1] } : null,
    },
  };
}

function mortesEmInferioridade(ctx: Contexto): Achado[] {
  const { detalhe } = ctx;
  const eu = detalhe.panorama.jogadores.find((j) => j.slot === detalhe.slot);
  return (eu?.mortes ?? [])
    .map((morte) => cenaDaMorte(detalhe, morte))
    .filter((cena) => cena.aliadosMortos.length > 0 && cena.inimigosVivos > cena.aliadosVivos)
    .map((cena) => achadoDaCena(detalhe, cena));
}

export const REGRA: Regra = { id: "morte-em-inferioridade", familia: "lutas", avaliar: mortesEmInferioridade };
