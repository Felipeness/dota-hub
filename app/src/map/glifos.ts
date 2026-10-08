// Um glifo por tipo de objetivo, para diferenciar visualmente os ~54 marcadores "neutro" que hoje são a mesma gota.
const GLIFO_POR_TIPO: Readonly<Record<string, string>> = {
  roshan: "♛", tormentor: "♜", ancient: "★",
  torre: "▲", barracks: "■", fonte: "⬡", loja: "⚑",
  camp: "❖", runa: "✦", lotus: "❀", watcher: "◉", outpost: "⌖", twin_gate: "⇄",
};

export const glifoDoTipo = (tipo: string): string => GLIFO_POR_TIPO[tipo] ?? "●";
