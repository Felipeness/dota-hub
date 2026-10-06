// A textura 4096 tem 4,3 MB: em tela de celular não se nota a diferença e ela estoura a primeira tela no 4G.
export function texturaDoMapa(larguraTela: number): string {
  return larguraTela <= 1024 ? "/data/mapa_2048.jpg" : "/data/mapa_4096.jpg";
}
