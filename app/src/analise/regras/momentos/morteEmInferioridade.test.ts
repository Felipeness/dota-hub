import { tempoDaPartida } from "../../../live/partida/detalhe";
import { contextoDaAmostraCompleta } from "../../amostras/amostraCompleta";
import { REGRA } from "./morteEmInferioridade";

const achados = REGRA.avaliar(contextoDaAmostraCompleta());
const doMinuto = (texto: string) => achados.find((a) => tempoDaPartida(Math.round((a.minuto ?? 0) * 60)) === texto);

describe("morteEmInferioridade na partida 9046905170", () => {
  it.each([
    { morte: "28:33", aliados: 4, inimigos: 5 },
    { morte: "31:38", aliados: 3, inimigos: 4 },
    { morte: "49:51", aliados: 3, inimigos: 5 },
  ])("$morte: $aliados do time vivos contra $inimigos", ({ morte, aliados, inimigos }) => {
    expect(doMinuto(morte)?.evidencias.numeros).toEqual({ aliadosVivos: aliados, inimigosVivos: inimigos });
  });

  it.each([
    { morte: "8:34", motivo: "ninguém do time estava morto" },
    { morte: "11:01", motivo: "Huskar voltava 1 s depois, na mesma luta" },
    { morte: "16:06", motivo: "Huskar voltava 4 s depois" },
    { morte: "46:10", motivo: "time completo" },
  ])("não acusa $morte: $motivo", ({ morte }) => {
    expect(doMinuto(morte)).toBeUndefined();
  });

  it("cita a volta de cada aliado e a próxima torre de pé da lane da morte", () => {
    const achado = doMinuto("31:38");
    expect(achado?.oQueAconteceu).toContain("Axe e Huskar já estavam mortos");
    expect(achado?.oQueFazer).toBe(
      "Com 2 aliados mortos (Axe volta às 31:56 e Huskar às 32:24): recuar para a T3 do meio e esperar até 32:24 para lutar com os cinco.",
    );
  });

  it("torre que caiu nos 90 s seguintes pesa muito, e a Aegis inimiga entra no fato", () => {
    const achado = doMinuto("28:33");
    expect(achado?.peso).toBe("pesou_muito");
    expect(achado?.oQueAconteceu).toContain("T2 de cima (29:27)");
    expect(achado?.oQueAconteceu).toContain("O time inimigo tinha a Aegis.");
  });
});
