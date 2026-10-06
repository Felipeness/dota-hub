# Pre-Implementation Audit: Dota Hub fase 1A

## Requisito → tarefa
| Requisito da spec | Tarefa |
|---|---|
| Tela Mapa 2.5D, objetos clicáveis, painel Básico/Avançado | 2, 6, 7, 10 |
| Camadas de rota no mapa | 3, 6, 8 |
| Tela Rotas (minuto, situação, lado; próxima rota) | 3, 8 |
| Glossário | 4, 9 |
| Busca global | 9, 10 |
| Exportação validada, nada digitado à mão | 1, 2, 3, 4 |
| Conteúdo com fonte e patch | 4, 7 |
| Camada do mapa isolada | 6 (MapView) |
| Estados de erro (dados indisponíveis, sem avançado, busca vazia, sem 3D) | 5, 7, 9, 6 |
| Rodapé com data e patch | 10 |
| Critérios 1 a 5 | 8, 9, 10 |
| Heróis, Jogadores e times, trajetórias de replay, solo de Roshan, glossário completo, relevo, critérios 6 e 7 | plano 1B |

## Tarefa → requisito
As 10 tarefas remetem a requisitos acima ou à infraestrutura (Task 1).

## Nomes entre tarefas
`fontes.gps`, `mapa.objetos`, `mapa.textura_alinhada`, `rotas.carregar_rotas`, `rotas.indice`, `rotas.resolver_alvo`, `conteudo.carregar`, `validar.validar`; no app `loadJson`, `useData`, `Indisponivel`, `MapView`/`MapViewProps`, `normToWorld`, `normToPercent`, `hasWebGL`, `conteudoDoObjetivo`, `filtrarRotas`, `rotaDaCelula`, `normalizar`, `construirIndice`, `buscar`, `sugerir`, `Rodape`: mesma assinatura em quem define e em quem usa.

## Resultado
Sem inconsistência crítica. Execução liberada.
