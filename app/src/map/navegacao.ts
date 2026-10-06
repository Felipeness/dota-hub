// Lógica pura da navegação do mapa: enquadramento e limites da câmera 3D, zoom e arraste do mapa plano.

export type Ponto2 = { x: number; y: number };

// Abaixo disso o gesto ainda conta como clique; acima, foi arraste e o clique é descartado.
export const LIMIAR_ARRASTE_PX = 6;

export const foiArraste = (deslocamentoPx: number): boolean => deslocamentoPx > LIMIAR_ARRASTE_PX;

/* Câmera 3D */

const graus = (g: number) => (g * Math.PI) / 180;
// Inclinação da câmera inicial em relação à vertical, a mesma da vista calibrada antes.
export const INCLINACAO_INICIAL = graus(14);
// Folga para o relevo e as gotas da borda não encostarem no quadro.
const FOLGA_DO_QUADRO = 1.06;

type Enquadramento = { tamanho: number; fovVerticalGraus: number; aspecto: number; inclinacao?: number };

// Distância em que o tabuleiro inteiro cabe no quadro. A borda de baixo fica mais perto da câmera
// (meio tabuleiro × seno da inclinação), por isso ela é que decide a distância.
export function distanciaParaEnquadrar({ tamanho, fovVerticalGraus, aspecto, inclinacao = INCLINACAO_INICIAL }: Enquadramento): number {
  const tanV = Math.tan(graus(fovVerticalGraus) / 2);
  const cabeNaAltura = Math.cos(inclinacao) / tanV;
  const cabeNaLargura = 1 / (tanV * aspecto);
  return (tamanho / 2) * (Math.max(cabeNaAltura, cabeNaLargura) + Math.sin(inclinacao)) * FOLGA_DO_QUADRO;
}

export function posicaoDaCamera(alvo: Ponto2, distancia: number, inclinacao = INCLINACAO_INICIAL): [number, number, number] {
  return [alvo.x, distancia * Math.cos(inclinacao), alvo.y + distancia * Math.sin(inclinacao)];
}

const limitar = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

// Área do chão a enquadrar, no plano x/z do mundo (y aqui é o z).
export type Caixa = { centro: Ponto2; lado: number };

// Rota curta não vira close: sobra contexto de uns 40% do tabuleiro em volta dela.
const LADO_MINIMO_DO_FOCO = 40;
const FOLGA_DO_FOCO = 1.4;

// Caixa que cobre os pontos (normalizados 0..1, y para cima) com folga, para a câmera abrir sobre uma rota.
export function caixaDoFoco(pontos: ReadonlyArray<readonly [number, number]>, tamanho: number): Caixa {
  if (pontos.length === 0) return { centro: { x: 0, y: 0 }, lado: tamanho };
  const xs = pontos.map(([x]) => (x - 0.5) * tamanho);
  const zs = pontos.map(([, y]) => (0.5 - y) * tamanho);
  const [minX, maxX, minZ, maxZ] = [Math.min(...xs), Math.max(...xs), Math.min(...zs), Math.max(...zs)];
  const lado = limitar(Math.max(maxX - minX, maxZ - minZ) * FOLGA_DO_FOCO, LADO_MINIMO_DO_FOCO, tamanho);
  return { centro: { x: (minX + maxX) / 2, y: (minZ + maxZ) / 2 }, lado };
}

// O alvo da câmera (no plano x/z do chão) não sai do tabuleiro.
export function prenderAlvo(alvo: Ponto2, metade: number): Ponto2 {
  return { x: limitar(alvo.x, -metade, metade), y: limitar(alvo.y, -metade, metade) };
}

/* Mapa plano: o tabuleiro quadrado tem lado base L (o menor lado da área) e fica centralizado.
   A vista guarda a escala e o deslocamento do tabuleiro, em px, a partir da posição centralizada. */

export type VistaPlana = { escala: number; x: number; y: number };

export const VISTA_PLANA_INICIAL: VistaPlana = { escala: 1, x: 0, y: 0 };
export const ESCALA_MINIMA = 1;
export const ESCALA_MAXIMA = 8;

// O centro da área nunca sai de cima do tabuleiro, o mesmo limite do alvo na câmera 3D.
export function prenderVistaPlana(vista: VistaPlana, lado: number): VistaPlana {
  const escala = limitar(vista.escala, ESCALA_MINIMA, ESCALA_MAXIMA);
  const minimo = lado / 2 - lado * escala;
  const maximo = lado / 2;
  return { escala, x: limitar(vista.x, minimo, maximo), y: limitar(vista.y, minimo, maximo) };
}

// O ponto é relativo ao canto do tabuleiro na posição centralizada; ele continua sob o cursor depois do zoom.
export function zoomNoPonto(vista: VistaPlana, fator: number, ponto: Ponto2, lado: number): VistaPlana {
  const escala = limitar(vista.escala * fator, ESCALA_MINIMA, ESCALA_MAXIMA);
  const razao = escala / vista.escala;
  const x = ponto.x - (ponto.x - vista.x) * razao;
  const y = ponto.y - (ponto.y - vista.y) * razao;
  return prenderVistaPlana({ escala, x, y }, lado);
}

export function arrastarVista(vista: VistaPlana, dx: number, dy: number, lado: number): VistaPlana {
  return prenderVistaPlana({ ...vista, x: vista.x + dx, y: vista.y + dy }, lado);
}

export type Area = { left: number; top: number; width: number; height: number };

// Converte um ponto da tela para o referencial do tabuleiro centralizado (o mesmo que o CSS desenha).
export function pontoNoTabuleiro(clienteX: number, clienteY: number, area: Area): Ponto2 & { lado: number } {
  const lado = Math.min(area.width, area.height);
  return {
    x: clienteX - area.left - (area.width - lado) / 2,
    y: clienteY - area.top - (area.height - lado) / 2,
    lado,
  };
}

// Um passo da roda (deltaY 100) aproxima ou afasta uns 20%.
export const fatorDaRoda = (deltaY: number): number => Math.exp(-deltaY * 0.0018);
