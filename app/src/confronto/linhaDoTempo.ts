// Linha do tempo de power spike: os itens fechados dos dois heróis no minuto mediano dos pros, num eixo único.
import type { SpikeDePro } from "./analise";

export type Lado = "meu" | "dele";
/** posicao: % do eixo; linha: andar do ícone, pra dois itens em minutos próximos não se sobreporem. */
export type Marco = SpikeDePro & Readonly<{ posicao: number; linha: number }>;
/** Do primeiro item-chave de um ao primeiro do outro: quem fechou antes tem a janela. */
export type Janela = Readonly<{ dono: Lado; de: number; ate: number; item: SpikeDePro; falta: SpikeDePro | null }>;
export type LinhaDoTempo = Readonly<{ fim: number; meus: readonly Marco[]; dele: readonly Marco[]; janela: Janela | null; marcas: readonly number[] }>;

const FIM_MINIMO = 40;
const PASSO_DAS_MARCAS = 5;
/** Com o eixo de 40 min em 600 px, 3 min são ~45 px: o ícone (32 px) com folga. */
const DISTANCIA_MINIMA = 3;

function posicionar(spikes: readonly SpikeDePro[], fim: number): Marco[] {
  const ultimoPorLinha: number[] = [];
  return [...spikes].sort((a, b) => a.minuto - b.minuto).map((s) => {
    const livre = ultimoPorLinha.findIndex((ultimo) => s.minuto - ultimo >= DISTANCIA_MINIMA);
    const linha = livre === -1 ? ultimoPorLinha.length : livre;
    ultimoPorLinha[linha] = s.minuto;
    return { ...s, posicao: (100 * s.minuto) / fim, linha };
  });
}

const primeiroChave = (spikes: readonly SpikeDePro[]) =>
  spikes.filter((s) => s.chave).reduce<SpikeDePro | null>((menor, s) => (menor === null || s.minuto < menor.minuto ? s : menor), null);

export function janelaDeItem(meus: readonly SpikeDePro[], dele: readonly SpikeDePro[], fim: number): Janela | null {
  const meu = primeiroChave(meus);
  const doOutro = primeiroChave(dele);
  if (meu && (!doOutro || meu.minuto < doOutro.minuto)) {
    return { dono: "meu", de: meu.minuto, ate: doOutro?.minuto ?? fim, item: meu, falta: doOutro };
  }
  if (doOutro && (!meu || doOutro.minuto < meu.minuto)) {
    return { dono: "dele", de: doOutro.minuto, ate: meu?.minuto ?? fim, item: doOutro, falta: meu };
  }
  // Nenhum dos dois tem item-chave, ou os dois fecham no mesmo minuto.
  return null;
}

export function montarLinhaDoTempo(meus: readonly SpikeDePro[], dele: readonly SpikeDePro[]): LinhaDoTempo {
  const ultimo = Math.max(0, ...meus.map((s) => s.minuto), ...dele.map((s) => s.minuto));
  const fim = Math.max(FIM_MINIMO, Math.ceil(ultimo / PASSO_DAS_MARCAS) * PASSO_DAS_MARCAS);
  const marcas = Array.from({ length: fim / PASSO_DAS_MARCAS + 1 }, (_, i) => i * PASSO_DAS_MARCAS);
  return { fim, marcas, meus: posicionar(meus, fim), dele: posicionar(dele, fim), janela: janelaDeItem(meus, dele, fim) };
}
