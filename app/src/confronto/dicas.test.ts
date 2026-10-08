import { heroi } from "./amostras/gravadas";
import { dicasDoConfronto } from "./dicas";

const textos = (meu: string, inimigo: string) => dicasDoConfronto(heroi(meu), heroi(inimigo)).map((d) => d.texto);

it("avisa quando o inimigo bate de longe e você de perto", () => {
  const [alcance] = dicasDoConfronto(heroi("slark"), heroi("silencer"));
  expect(alcance).toMatchObject({ fase: "lane", texto: expect.stringMatching(/^Ele bate de 600 e você de 150/) });
  expect(alcance?.fonte).toMatch(/Silencer 600, Slark 150/);
});

it("inverte a dica quando quem bate de longe é você", () => {
  expect(textos("silencer", "slark")[0]).toMatch(/^Você bate de 600 e ele de 150/);
});

it("dá a janela do ultimate do inimigo pela recarga real", () => {
  expect(textos("antimage", "lion")).toContain("Viu o Finger of Death sair? Ele fica até 110 s sem ele (110 / 70 / 30 s por nível). É a hora de forçar luta ou objetivo.");
});

it("lista o que atravessa BKB na luta", () => {
  const luta = dicasDoConfronto(heroi("antimage"), heroi("faceless_void")).filter((d) => d.fase === "luta");
  expect(luta[0]?.texto).toMatch(/^BKB não segura: .*Chronosphere/);
});
