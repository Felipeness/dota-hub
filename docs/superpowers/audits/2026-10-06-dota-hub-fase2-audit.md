# Pre-Implementation Audit: Dota Hub fase 2

## Requisito → tarefa
| Requisito da spec (fase 2) | Tarefa |
|---|---|
| Busca: número vai direto para a conta | 11 (`AoVivoPage`, sem chamar a API) |
| Busca por nome: até 10 contas e 10 times | 6, 11 |
| Conta: nome, foto, medalha, totais, últimas 20, 10 heróis, 20 partidas | 6, 11 |
| Rota aproximada no mapa, lane principal, aviso de aproximação | 7, 11 (`manchas` na `MapView`) |
| Partida sem análise: mensagem no lugar do mapa | 7, 11 |
| Time: nome, logo, vitórias e derrotas, jogadores atuais, 20 partidas | 8, 11 |
| "Dados de <hora>" e aviso de dado guardado | 4 (`frescor`), 11 (`FrescorView`) |
| Validades do cache por tipo de consulta | 6, 7, 8 (`VALIDADE`), 4 |
| Cache vencido até 7 dias quando a fonte falha | 4 (`GUARDA_MAXIMA_S`, `PODE_USAR_VENCIDO`), 5 (TTL) |
| Orçamento da fonte por minuto e por dia | 3, 4 |
| Limite por visitante | 3, 9 |
| Os 10 estados de erro da tabela | 2, 4, 6, 7, 8, 9 (status e corpo), 10 (`mensagemDoErro`, 429 sem corpo = pausada), 11 (telas, contagem regressiva) |
| Tempo máximo de 4 s na fonte | 2 |
| Entrada validada (2 a 64 caracteres, conta só com dígitos) | 6, 9 |
| Sem credencial; erro sem detalhe interno | 9 (teste do 500), 12 (varredura) |
| Endereço do visitante nunca em claro; contador some em minutos | 3 (`idDoVisitante`), 5 (TTL) |
| Log com operação, duração, código, sem dado pessoal | 1, 4, 9 |
| Testes sem chamar a fonte, com respostas gravadas | 2 (amostras), 9 (fonte gravada) |
| Critérios 1 a 6 | 12 |

## Tarefa → requisito
Task 1 é infraestrutura do pacote; as outras 11 remetem a requisitos acima. Nenhuma tarefa fantasma.

## Nomes entre tarefas
`Resultado/ok/falha`, `ErroBusca/erroBusca/STATUS_DO_ERRO/CODIGOS`, `Registrar/registrarJson`, `Fonte/criarFonte/ErroFonte/segundosDeEspera`, schemas `*Fonte` e `timeOuNadaFonte`, `Tetos/LIMITES/Contadores/Limites/criarLimites/contadoresEmMemoria/idDoVisitante`, `Cache/Entrada/cacheEmMemoria`, `Consultar/Consultado/criarConsulta/juntarFrescor/GUARDA_MAXIMA_S`, `ClienteDynamo/cacheDynamo/contadoresDynamo`, `normalizar`, `VALIDADE/LANE_POR_PAPEL/venceu/montarResumo/resumoDaConta/consultaDeBusca/buscar/timeEncontrado/consultarNomesDeHerois`, `celulaParaNorm/manchasDaLane/regiaoDoPonto/laneDasManchas/rotaDaPartida`, `resumoDoTime`, `Pedido/Resposta/DepsResponder/responder/montarDependencias/handler`; no app `pedir/mensagemDoErro/ErroAoVivo/RespostaAoVivo/useAoVivo`, schemas do contrato, `ErroAoVivoView`, `FrescorView`, `NOME_DA_LANE`. Mesma assinatura em quem define e em quem usa.

## Contrato API x app
Tipos em `api/src/contrato.ts`, schemas zod em `app/src/live/contrato.ts`, ligados pelos exemplos de `contrato/exemplos/` (gerados no teste da Task 9, validados no teste da Task 10). Campos conferidos um a um: `busca`, `conta`, `rota`, `time`, `erro`.

## Resultado
Sem inconsistência crítica. Execução liberada depois da fase 1 mesclada e da aprovação da spec pelo Felipe.
