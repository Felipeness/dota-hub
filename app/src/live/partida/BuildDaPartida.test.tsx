import { render, screen, within } from "@testing-library/react";
import { PARTIDA, YATORO, consultaGravada } from "../teste/gravados";
import { BuildDaPartida } from "./BuildDaPartida";
import { detalheDaPartida } from "./detalhe";

async function carregarDetalhe() {
  const resposta = await detalheDaPartida(consultaGravada(), String(PARTIDA), YATORO);
  if (!resposta.ok) throw new Error(resposta.erro.codigo);
  return resposta.dados;
}

it("nível de talento mostra o ponto na linha de talento em vez de ficar com a coluna vazia", async () => {
  const detalhe = await carregarDetalhe();
  render(<BuildDaPartida detalhe={detalhe} pro={null} />);
  const tabela = screen.getByRole("region", { name: "Skill build por nível" });
  const linhaDeTalento = within(tabela).getByRole("row", { name: /Talento/ });
  expect(within(linhaDeTalento).getAllByText("●").length).toBeGreaterThan(0);
});
