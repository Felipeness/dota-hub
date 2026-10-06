# Pre-Implementation Audit: Dota Hub fase 3

## Requisito → tarefa
| Requisito da spec (fase 3) | Tarefa |
|---|---|
| Site com link aberto, só conexão segura | 4, 10 (critério 1) |
| Busca no mesmo endereço do site | 4 (`/api/*`), 5 |
| Comando de publicar (dados, testes, build, publicação) | 7 (`publicar.sh`) |
| Comando de voltar à versão anterior | 7 (`voltar.sh`), 10 (critério 2) |
| Publicação interrompida não mistura versões | 4 (`origin_path` por versão), 7 |
| Publicação com teste falhando para antes | 7 (`set -euo pipefail`, testes antes do upload) |
| Custo estimado abaixo de US$ 1 | 8 (tabela), 10 (critério 3) |
| Teto de US$ 5 só do projeto (etiqueta) | 3 (`default_tags`), 6 (orçamento), 9 (ativação da etiqueta) |
| Alarmes de 40%, 80%, 100% e previsão por e-mail | 6 |
| Busca desligada sozinha acima do teto; site no ar; religar com um comando | 2, 6, 7 (`religar-busca.sh`), 10 (critério 4) |
| Limite de vazão na busca | 5 |
| Faixa de patch novo, patch consultado uma vez por dia | 1, 10 (critério 6) |
| Consulta do patch falhando não mostra a faixa | 1 |
| Arquivo de dados ausente: "dados indisponíveis" | 4 (404 com `ListBucket` e função de rotas), 10 |
| Nenhuma credencial no repositório nem no site | 3, 10 (critério 7) |
| Erro de formato da fonte e serviço falhando avisam por e-mail | 6 (filtro de log e 2 alarmes) |
| Rodapé com data e patch | já existe (fase 1); publicação gera `meta.json` novo (7) |
| Felipe vê recursos e custo antes da primeira publicação | 8 (PARAR) |

## Tarefa → requisito
As 10 tarefas remetem a requisitos acima. Nenhuma tarefa fantasma.

## Nomes entre tarefas
`patchAtual`, `patchesFonte`, `PatchAtual`, `patchSchema`, `patchMudou`, `FaixaDePatch`, `ClienteApi`, `comandoDePausa`, `pausarBusca`; recursos Terraform referenciados entre arquivos: `aws_s3_bucket.site`, `aws_cloudfront_distribution.site`, `aws_cloudfront_origin_request_policy.busca`, `aws_apigatewayv2_api.busca`, `aws_apigatewayv2_stage.padrao`, `aws_dynamodb_table.cache`, `aws_cloudwatch_log_group.busca`, `data.aws_iam_policy_document.assumir_lambda`, `aws_sns_topic.alertas/corte`, `aws_lambda_function.busca/corte`; saídas `url_do_site`, `bucket_do_site`, `id_da_distribuicao`, `id_da_api` usadas por `comum.sh`. Variáveis de ambiente `TABELA_CACHE` (fase 2) e `ID_DA_API` batem com o Terraform. Bundles `dist/busca/index.mjs` e `dist/corte/index.mjs` batem com os `archive_file`.

## Consistência com a decisão técnica
Região `us-east-1`, perfil `pessoal`, Terraform com estado no S3 e `use_lockfile`, HTTP API com throttling 5/10, DynamoDB sob demanda com TTL, Node 22 arm64, logs de 7 dias, orçamento por etiqueta com corte: tudo igual no registro de decisão e no plano.

## Resultado
Sem inconsistência crítica. Execução liberada depois da fase 2 mesclada e da aprovação da spec; o primeiro `apply` só depois do "aprovado" da Task 8.
