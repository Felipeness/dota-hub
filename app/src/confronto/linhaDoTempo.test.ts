import type { SpikeDePro } from "./analise";
import { montarLinhaDoTempo } from "./linhaDoTempo";

const spike = (item: string, minuto: number, chave = true): SpikeDePro => ({ item, nome: item, minuto, n: 100, chave });

it("ordena os itens pelo minuto e põe no andar de cima o que ficaria colado no anterior", () => {
  const linha = montarLinhaDoTempo([spike("manta", 18.4), spike("treads", 6, false), spike("wand", 5, false), spike("yasha", 14.6)], []);
  expect(linha.meus.map((m) => [m.item, m.linha])).toEqual([["wand", 0], ["treads", 1], ["yasha", 0], ["manta", 0]]);
  expect(linha.meus[0]?.posicao).toBe(12.5);
  expect(linha.fim).toBe(40);
  expect(linha.marcas).toEqual([0, 5, 10, 15, 20, 25, 30, 35, 40]);
});

it("estica o eixo quando um item passa dos 40 minutos", () => {
  expect(montarLinhaDoTempo([spike("rapier", 41.2)], []).fim).toBe(45);
});

it("destaca a janela de quem fecha o primeiro item-chave antes", () => {
  const { janela } = montarLinhaDoTempo([spike("treads", 6, false), spike("vladmir", 10.7)], [spike("radiance", 13.9)]);
  expect(janela).toMatchObject({ dono: "meu", de: 10.7, ate: 13.9, item: { item: "vladmir" }, falta: { item: "radiance" } });
});

it("dá a janela pro outro lado quando ele fecha antes", () => {
  expect(montarLinhaDoTempo([spike("manta", 18)], [spike("blink", 12)]).janela).toMatchObject({ dono: "dele", de: 12, ate: 18 });
});

it("vai até o fim do eixo quando o outro não tem item-chave, e some quando ninguém tem", () => {
  expect(montarLinhaDoTempo([spike("blink", 15)], [spike("wand", 5, false)]).janela).toMatchObject({ dono: "meu", de: 15, ate: 40, falta: null });
  expect(montarLinhaDoTempo([spike("wand", 5, false)], []).janela).toBeNull();
  expect(montarLinhaDoTempo([spike("blink", 15)], [spike("blink", 15)]).janela).toBeNull();
});
