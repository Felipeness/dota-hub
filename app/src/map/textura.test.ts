import { texturaDoMapa } from "./textura";

it.each([
  [360, "/data/mapa_2048.jpg"],
  [1024, "/data/mapa_2048.jpg"],
  [1025, "/data/mapa_4096.jpg"],
  [1920, "/data/mapa_4096.jpg"],
])("tela de %i px usa %s", (largura, url) => {
  expect(texturaDoMapa(largura)).toBe(url);
});
