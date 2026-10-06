# Post-Plan Gate: Dota Hub fase 2

Plano: `docs/superpowers/plans/2026-10-06-dota-hub-fase2.md` (versão sem backend, 13 tarefas). Spec: `docs/superpowers/specs/2026-10-06-dota-hub-fase2-3-design.md` (fase 2). Data: 06/10/2026. Constitution: não existe (checagem pulada).

## Plan Completeness
- ✅ As 13 tarefas têm caminhos exatos (Create/Modify).
- ✅ Todas têm blocos de código ou comandos completos.
- ✅ Nenhum placeholder (varredura de TBD/TODO/FIXME/implement later/fill in/similar to Task: 0 ocorrências; varredura de travessão: 0).
- ✅ Estrutura TDD nas Tasks 1 a 12 (teste, ver falhar, implementar, ver passar, commit); a 13 é verificação com script de medição e conferência manual.
- ✅ Dois trechos dependem do código real da 1B e da 1C (`SearchBox.Resultados` e a lista de rotas do `App.tsx`): o plano dá o código para o formato da 1A e da 1B e manda conferir no pré-requisito, registrando no ledger.

## Architecture Quality
- ✅ Decisão técnica documentada em `docs/superpowers/decisions/2026-10-06-fase2-sem-backend.md`, com a conferência real da fonte (CORS liberado, 429 com CORS e sem `Retry-After`, cabeçalhos de limite não expostos ao navegador, 404 e corpo vazio).
- ✅ Tudo em `app/src/live/` por responsabilidade: fila, fonte, cache, consulta, montagem (contas, rota, times), serviços e telas.
- ✅ Um só arquivo chama o OpenDota (`fonte/opendota.ts`), e toda chamada passa pela fila.
- ✅ `Cache` tem duas implementações reais (memória para testes e script, IndexedDB para o app); as funções de montagem são puras e testadas com dados sintéticos e com respostas gravadas.
- ✅ Sem estado global: fila e cache nascem no `ProvedorAoVivo` e chegam por contexto.
- ✅ Nenhuma dependência nova de produção; só `fake-indexeddb` em desenvolvimento.

## Cross-Artifact Consistency
- ✅ Busca por número (direto para a conta) e por nome, contas e times: Tasks 7 e 12.
- ✅ Conta (nome, medalha, totais, últimas 20, 10 heróis, 20 partidas, conta privada): Tasks 7 e 12.
- ✅ Rota aproximada pelo lane_pos, lane principal, lane registrada e aviso: Tasks 8, 11 e 12.
- ✅ Time (jogadores atuais, 20 partidas): Tasks 9 e 12.
- ✅ Validade por tipo de consulta, guardado que sobrevive a fechar o navegador, apagar depois de 7 dias: Tasks 5, 6, 7, 8, 9.
- ✅ Vencido servido quando a fonte falha, pede espera ou falta internet: Task 6.
- ✅ Limite da fonte (200 ms, 50 por 60 s, espera crescente, 3 tentativas, limite do dia): Tasks 3 e 4.
- ✅ Tabela de 13 estados de erro: Tasks 1, 2, 4 a 10 e 12, com o mapa linha por linha na Task 13.
- ✅ Sem chave, sem cookie, sem imagem de outro endereço: Tasks 2, 4, 12 e 13.
- ✅ Registro no console com operação, duração e código: Tasks 1, 4, 5 e 10.
- ✅ Critérios 1 a 8: Task 13 (5 e 6 também por teste automático nas Tasks 3 e 4).
- ✅ Nenhuma tarefa fantasma.

## Execution Readiness
- ✅ Worktree: branch `feat/fase-2-busca-ao-vivo` a partir do `main` com a 1C mesclada.
- ✅ Execução: subagent-driven.
- ⚠️ Incógnitas com instrução: o texto do 429 diário do OpenDota não foi visto (o código casa "day" ou "daily"; se vier outro texto, cai na espera por minuto e as 3 tentativas seguram); o dia da fonte presumido em UTC (a pausa se renova se não for); amostras gravadas podem não ter 20 partidas ou `lane_pos` (troca de conta ou partida anotada no ledger, Task 2).
- ⚠️ Pré-requisito: a 1B está em execução e a 1C ainda não começou; este plano só roda depois das duas.

## Decisão: WARN (não crítico), seguir depois da 1C mesclada
