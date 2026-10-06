# Pre-Implementation Audit: Dota Hub fase 1B

## Requisito → tarefa
| Requisito da spec (fase 1) | Tarefa |
|---|---|
| Heróis: guia do PDF 05 (quando pegar, build, itens, power spikes) | 1, 11 |
| Heróis: rotas do herói | 1, 11 (mapa por fase e links para as rotas do 06) |
| Heróis: números dos profissionais no herói | 1, 11 |
| Jogadores: Felipe, Leonardo, Hane, Yuma (v2) | 2, 3, 12 |
| Jogadores: Satanic, Yatoro, Watson, Skiter e pros dos replays | 2, 12 |
| Times tier 1 usados nas análises | 2, 12 |
| Gráficos interativos no lugar das imagens | 12 (Chart.js, tooltip por toque, tabela dos números) |
| Camada de rotas reais de replay animadas no tempo | 4, 9, 10 |
| Camada de wards e mortes das partidas analisadas | 4, 9, 10 |
| Trajetórias reduzidas para o celular | 4 (5 s, milésimos, até 60 KB por replay) |
| Solo de Roshan por herói (Ursa, Huskar, Morphling e outros), com fonte e rótulo de origem | 5, 13 |
| Glossário de 150 a 250 termos, com links para mapa, rota ou herói | 6, 13 |
| Relevo de high ground, rio e rampas | 7, 9 |
| Busca global acha herói, jogador e time | 8 |
| Nada digitado à mão; exportação validada | 1 a 7 (schemas e testes de cada arquivo) |
| Estado "dados indisponíveis" nas seções novas | 10, 11, 12 (`Indisponivel`), 14 (teste manual) |
| Critério 3 (3 s em 4G, 30 fps) com as telas novas | 9, 10, 12 (`lazy`), 14 |
| Critério 6 (20 números conferidos) | 14 (23 casos em `test_conferencia.py`) |
| Critério 7 (Felipe e um amigo sem explicação) | 14 (roteiro, parada para o orquestrador) |

## Tarefa → requisito
As 14 tarefas remetem a requisitos acima. Nenhuma tarefa fantasma.

## Nomes entre tarefas
Export: `fontes.WORK/POWER_SPIKES/COMPARE_PROS/REPLAYS/PADROES_PRO/ITENS/LEONARDO/HANE/YUMA/guias_de_heroi`, `rotas.caminho_andando`, `herois.heroi/todos/indice/fase/spike`, `jogadores.slug/destaque/jogadores_de_replay/felipe/pro_compare/pros_de_replay/indice/times`, `amigos.leonardo/hane/yuma/achados_do_resumo/pct_vitoria`, `trajetorias.reduzir/ler_replay/posicoes/lado/replay/indice`, `roshan.aliados_perto/kills/todas`, `relevo.relevo/grade/poligono_da_base`, `conteudo.carregar` com `extras`. App: schemas da Task 8 (`heroiSchema`, `painelSchema`, `graficoSchema`, `trajetoriaSchema`, `replaysSchema`, `relevoSchema`, `roshanReplaysSchema`, `timesSchema`, `jogadoresSchema`), `dadosOuVazio`, `construirIndice` com `herois/jogadores/times`, `alturaEm`, `pontoEm`, `trilhasNoTempo`, `marcasNoTempo`, `Tracado`, `Trilha`, `Marca`, `reproduzir`, `iniciarReproducao`, `useReproducao`, `ControlesReplay`, `MapaComCamadas`, `SeletorReplay`, `faseNoMinuto`, `proximoSpike`, `filtrarHerois`, `FichaHeroi`, `configDoGrafico`, `formatarValor`, `Grafico`, `PainelJogador`, `idDoTime`, `montarCatalogo`, `destinoDoLink`, `filtrarTermos`, `textoExtra`, `SoloRoshan`. Mesma assinatura em quem define e em quem usa. Formatos JSON do export batem com os schemas zod (conferido campo a campo: painel, herói, trajetória, relevo, roshan).

## Consistência com a 1A
O plano usa os contratos da 1A sem mudar assinatura: `MapViewProps` só ganha props opcionais e troca `Rota` por `Pick<Rota, "passos" | "caminhos">` (toda chamada da 1A continua compilando); `conteudo.carregar` ganha a chave `extras`; `rotas._caminho` vira público com o mesmo corpo; `ObjectivePanel` ganha `children` opcional.

## Resultado
Sem inconsistência crítica. Execução liberada depois da 1A mesclada.
