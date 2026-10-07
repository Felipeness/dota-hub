import { erroAoVivo, falha, mensagemDoErro, ok, type ContextoDoErro, type ErroAoVivo } from "./erros";

type Caso = { erro: Pick<ErroAoVivo, "codigo" | "tenteEmS">; contexto?: ContextoDoErro; texto: string };

it.each<Caso>([
  { erro: { codigo: "ENTRADA_INVALIDA", tenteEmS: null }, texto: "Digite pelo menos 2 letras ou o número da conta." },
  { erro: { codigo: "NAO_ENCONTRADO", tenteEmS: null }, contexto: "conta", texto: "Conta não encontrada. Tente buscar pelo nome." },
  { erro: { codigo: "NAO_ENCONTRADO", tenteEmS: null }, contexto: "time", texto: "Time não encontrado." },
  { erro: { codigo: "NAO_ENCONTRADO", tenteEmS: null }, contexto: "partida", texto: "Esta conta não aparece nessa partida." },
  { erro: { codigo: "LIMITE_FONTE", tenteEmS: 12 }, texto: "A busca ao vivo atingiu o limite da fonte. Volta a funcionar em 12 segundos." },
  { erro: { codigo: "LIMITE_FONTE", tenteEmS: 0 }, texto: "A busca ao vivo atingiu o limite da fonte. Já pode tentar de novo." },
  { erro: { codigo: "LIMITE_DIA", tenteEmS: 43_200 }, texto: "A busca ao vivo atingiu o limite do dia da fonte. Volta a funcionar em cerca de 12 h." },
  { erro: { codigo: "FONTE_INDISPONIVEL", tenteEmS: null }, texto: "A fonte de dados não respondeu. Tente de novo em alguns minutos." },
  { erro: { codigo: "FONTE_FORMATO", tenteEmS: null }, texto: "A fonte respondeu algo inesperado. Tente de novo mais tarde." },
  { erro: { codigo: "SEM_CONEXAO", tenteEmS: null }, texto: "Sem conexão." },
  { erro: { codigo: "INTERNO", tenteEmS: null }, texto: "Algo deu errado na busca ao vivo. Tente de novo." },
])("mensagem de $erro.codigo ($contexto)", ({ erro, contexto, texto }) => {
  expect(mensagemDoErro(erro, contexto)).toBe(texto);
});

it("erro só leva detalhe quando existe", () => {
  expect(erroAoVivo("NAO_ENCONTRADO")).toEqual({ codigo: "NAO_ENCONTRADO", tenteEmS: null });
  expect(erroAoVivo("FONTE_FORMATO", null, "win: esperado número")).toEqual({ codigo: "FONTE_FORMATO", tenteEmS: null, detalhe: "win: esperado número" });
});

it("resposta tem os dois lados", () => {
  expect(ok(1)).toEqual({ ok: true, dados: 1 });
  expect(falha(erroAoVivo("SEM_CONEXAO"))).toEqual({ ok: false, erro: { codigo: "SEM_CONEXAO", tenteEmS: null } });
});
