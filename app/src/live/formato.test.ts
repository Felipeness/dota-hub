import { dataCurta, hora, minutos, nomeDaLane, porcentagem, textoDoResultado } from "./formato";

it.each([
  [nomeDaLane("safe"), "safe lane"], [nomeDaLane("off"), "offlane"], [nomeDaLane(null), "sem dado"],
  [porcentagem(1, 4), "25%"], [porcentagem(0, 0), "sem partidas"], [minutos(1_830), "30 min"],
  [textoDoResultado(true), "vitória"], [textoDoResultado(false), "derrota"], [textoDoResultado(null), "sem resultado"],
  [hora(new Date(2026, 9, 6, 14, 5).getTime()), "14:05"], [dataCurta(new Date(2026, 9, 6, 14, 5).getTime() / 1_000), "06/10/2026"],
])("%s = %s", (obtido, esperado) => {
  expect(obtido).toBe(esperado);
});
