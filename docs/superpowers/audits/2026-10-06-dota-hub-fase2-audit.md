# Pre-Implementation Audit: Dota Hub fase 2

Plano: `docs/superpowers/plans/2026-10-06-dota-hub-fase2.md` (versão sem backend). Spec: `docs/superpowers/specs/2026-10-06-dota-hub-fase2-3-design.md`. Decisão: `docs/superpowers/decisions/2026-10-06-fase2-sem-backend.md`. Data: 06/10/2026.

## Requisito → tarefa
| Requisito da spec (fase 2) | Tarefa |
|---|---|
| Busca: número vai direto para a conta, sem consultar a fonte na busca | 7 (`lerId`), 12 (`AoVivoPage`) |
| Busca por nome: até 10 contas e 10 times, sem foto | 7 (`buscar`), 12 |
| Conta: nome, medalha, totais, últimas 20, 10 heróis, 20 partidas | 7 (`montarResumo`, `nomeDaMedalha`), 12 (`ContaPage`) |
| Conta privada: perfil e aviso no lugar das partidas | 7 (`temDadosPublicos`), 12 |
| Rota aproximada no mapa, lane principal, lane registrada, aviso | 8, 11 (`manchas` na `MapView`), 12 (`RotaDaPartida`) |
| Partida sem análise: mensagem no lugar do mapa | 8, 12 |
| Time: nome, vitórias e derrotas, jogadores atuais com link, 20 partidas | 9, 12 (`TimeAoVivoPage`) |
| "Dados de <hora>", aviso de vencido e botão "Atualizar" | 6 (`frescor`), 10 (`FrescorView`) |
| Validades por tipo de consulta | 7 (`VALIDADE_S`), 8, 9 |
| Guardado no navegador que sobrevive a fechar e abrir | 5 (`cacheIndexedDb`), 10 (`criarServicos`) |
| Apagar depois de 7 dias | 5 (`GUARDA_MAXIMA_MS`, limpeza ao abrir), 6 |
| Vencido quando a fonte falha, pede espera ou falta internet | 6 (`PODE_USAR_VENCIDO`) |
| Uma chamada de cada vez, 200 ms entre elas, até 50 por minuto | 3 (`proximaVez`, `criarFila`), 4 (tudo passa pela fila) |
| Espera crescente 5, 10, 20 s até 1 min, aviso na tela, até 3 tentativas | 3 (`esperaDoLimite`), 4 (`MAXIMO_DE_TENTATIVAS`), 10 (`AvisoDaFonte`) |
| Limite do dia: para até a virada | 3 (`inicioDoProximoDiaUtc`), 4, 10 |
| Os 13 estados de erro da tabela | 1 (`mensagemDoErro`), 2, 4, 5, 6, 7, 8, 9, 10, 12; mapa linha a linha na 13 |
| Tempo máximo de 4 s | 4 (`AbortSignal.timeout`) |
| Sem chave; sem cookie; só a fonte recebe chamadas | 4 (`credentials: "omit"`, `BASE_OPENDOTA`), 2 (schemas sem URL de imagem), 12 (telas sem imagem de fora), 13 (rede e varredura) |
| Entrada validada (2 a 64 caracteres, conta só com dígitos até 12, texto codificado) | 7 (`consultaDeBusca`, `lerId`, `encodeURIComponent`), 8 (partida até 15 dígitos) |
| Registro no console com operação, duração e código; formato como erro | 1 (`registrarNoConsole`), 4, 5, 10 |
| Guardado bloqueado não quebra a busca | 5 |
| Testes sem chamar a fonte | 2 (amostras), 6 (`fonteGravada`), 10 (`servicosGravados`) |
| Critérios 1 a 8 | 13 (1, 2, 3, 7, 8 medidos e conferidos; 4 pelo mapa de testes; 5 e 6 pelos testes das Tasks 3 e 4) |

## Tarefa → requisito
As 13 tarefas remetem a requisitos acima. Task 1 também é base de tipos para as outras; Task 11 serve só à rota aproximada. Nenhuma tarefa fantasma.

## Nomes entre tarefas
`CODIGOS/CodigoAoVivo/ErroAoVivo/RespostaAoVivo/ok/falha/erroAoVivo/ContextoDoErro/mensagemDoErro` (1), tipos de `tipos.ts` (1), `Registro/Registrar/registrarNoConsole` (1), `Mancha` e `opacidadeDaMancha` em `map/trilhas.ts` (1 e 11), schemas `*Fonte` e `timeOuNadaFonte` (2), `YATORO/SPIRIT/PARTIDA/ROTAS_GRAVADAS/amostra` (2), `RegrasDaFila/REGRAS_OPENDOTA/EstadoDaFila/Espera/Relogio/relogioReal/proximaVez/esperaDoLimite/inicioDoProximoDiaUtc/Fila/criarFila` (3), `BASE_OPENDOTA/Fonte/criarFonte` (4), `GUARDA_MAXIMA_MS/Entrada/Cache/cacheEmMemoria/cacheIndexedDb` (5), `Consultado/PedidoDeConsulta/Consultar/criarConsulta/juntarFrescor` e `fonteGravada/filaSemIntervalo/consultaGravada` (6), `VALIDADE_S/LANE_POR_PAPEL/lerId/nomeDaMedalha/venceu/montarResumo/consultarNomesDeHerois/resumoDaConta/consultaDeBusca/timeEncontrado/buscar` (7), `celulaParaNorm/manchasDaLane/regiaoDoPonto/laneDasManchas/rotaDaPartida` (8), `resumoDoTime` (9), `ServicosAoVivo/criarServicos/ContextoAoVivo/useServicosAoVivo/useEstadoDaFila/ProvedorAoVivo/EstadoAoVivo/useAoVivo/useSegundosAte/formato/AvisoDaFonte/ErroAoVivoView/FrescorView/servicosGravados` (10). Mesma assinatura em quem define e em quem usa. Conferido em especial: `Consultado.valor` (não `dados`), `RespostaAoVivo.dados`, `Espera.doDia`, `lerId(texto, maximoDeDigitos)`.

## Contratos com o código das fases 1A a 1C
`MapViewProps` (1B, ganha `manchas`), `noChao` local do `Map3D` (1B), `normToPercent` (1A), `useData` e `objetivosSchema` (1A), `normalizar` em `routes/filtros.ts` (1A), `Carregando` e rotas `lazy` no `App.tsx` (1B), navegação do `Shell` (1B), `Resultados` da `SearchBox` (1A, mexida na 1B e na 1C), variáveis de `tokens.css` (1B). O plano manda conferir todos antes da Task 1 e registrar troca de nome no ledger. Conferido no `main` e na branch `feat/fase-1b` em 06/10/2026: `useData`, `objetivosSchema`, `normalizar`, `normToPercent`, `Carregando` e as rotas `lazy` existem com esses nomes.

## Resultado
Sem inconsistência crítica. Execução liberada depois da 1B e da 1C mescladas no `main`.
