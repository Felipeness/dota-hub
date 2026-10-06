# Post-Plan Gate: Dota Hub fase 1C (unidades em 3D)

Plano: `docs/superpowers/plans/2026-10-06-dota-hub-fase1c.md`. Spec: `docs/superpowers/specs/2026-10-06-dota-hub-unidades-3d-design.md` (adendo à fase 1). Data: 06/10/2026. Constitution: não existe (checagem pulada).

## Plan Completeness
- ✅ As 14 tarefas têm caminhos exatos (Create/Modify).
- ✅ Todas as tarefas de código têm o código completo dos testes e da implementação. Onde a tarefa mexe em arquivo que a 1B está mudando agora (`App.tsx`, `index.ts` e `SearchBox.tsx` da busca, `ObjectivePanel.tsx`, `MapPage.tsx`, `GlossaryPage.tsx`), o plano dá o trecho exato a acrescentar e diz onde, porque o arquivo inteiro só existe depois da 1B mesclada.
- ✅ Nenhum placeholder. A varredura acha 1 falso positivo: "Todas" (português), casado pelo padrão `\bTODO\b` sem distinção de caixa.
- ✅ Estrutura TDD em todas as tarefas de código (teste, falha, implementação, passa, commit). A Task 6 (conteúdo) tem o teste do formato, dois textos prontos e a regra de fonte para os outros dez, como as Tasks 5 e 6 da 1B. A Task 13 (imagem parada) é ferramenta e tem conferência manual com critério claro. A Task 14 é verificação.

## Architecture Quality
- ✅ Decisão técnica registrada: `docs/superpowers/decisions/2026-10-06-unidades-3d-stack.md` (Source 2 Viewer CLI 20.0 com hash, gltf-transform 4.5.1 com meshopt e webp, arquivos fora do git, Playwright só para a imagem parada).
- ✅ Estrutura de arquivos com a responsabilidade de cada um.
- ✅ Sem abstração desnecessária: `VisualizadorUnidade` é a única porta do 3D (como a `MapView`), sem interface com uma implementação só; `Jogo` e `Textos` são dados imutáveis, não serviços; `LimiteDeErro` é a única classe, porque o React só tem limite de erro em classe.
- ✅ Código validado antes do gate: os blocos do plano, copiados para uma cópia do repositório (fora do branch `feat/fase-1b`), passaram em 44 testes do export contra o jogo instalado e em 75 testes do app, com `tsc -b` e `oxlint` limpos.

## Cross-Artifact Consistency
- ✅ Ficha da unidade (modelo animado e girável, números, habilidades com ícone, descrição, condições e valores, o que muda, crescimento): Tasks 2, 3, 7, 8 e 9.
- ✅ Seção Unidades no glossário: Task 10. Painel do mapa (Roshan, Tormentor, camps com os tipos possíveis): Task 11. Busca por nome em português e em inglês: Task 12.
- ✅ Critério 1 (cobertura 26 camps, 45 da selva, 24 de lane, 59 modelos): Task 3 (`test_cobertura_do_741`) e Task 14.
- ✅ Critério 2 (números): Task 3 (Roshan, 10 números) e Task 5 (260 números da selva).
- ✅ Critério 3 (400 KB e 15 MB): Task 4 (`conferir_tamanhos`, refaz com textura menor) e Task 5.
- ✅ Critérios 4 e 5 (2 s no celular, 30 quadros, primeira tela sem modelo): Tasks 8 (import sob demanda, pedaço separado) e 14 (medição).
- ✅ Critério 6 (habilidades visíveis com nome, ícone e descrição; internas fora): Tasks 2 e 3.
- ✅ Estados de erro: sem 3D (Tasks 8 e 13), modelo que não carrega com nova tentativa (Task 8), dados ausentes (Task 10), habilidade sem ícone (Task 9), menos movimento (Tasks 8 e 9), jogo não instalado (Task 1).
- ✅ Nenhuma tarefa fantasma.

## Execution Readiness
- ✅ Começa depois da 1B mesclada no `main` (pré-requisito escrito no topo do plano, com os três pontos a conferir no código da 1B).
- ✅ Execução: subagent-driven, como a 1A e a 1B.
- ⚠️ A primeira exportação dos 59 modelos leva uns 12 minutos (medido: 692 s). As seguintes só refazem o que mudou.
- ⚠️ A Task 13 depende de o navegador automatizado ter 3D por software; o plano traz a troca de parâmetros se a imagem sair preta.
- ⚠️ A Task 6 depende de escrever 10 textos com fonte conferida; texto sem fonte não entra e o teste lista as 12 habilidades obrigatórias.

## Decisão: WARN (não crítico), seguir
Os avisos são de tempo de execução e de conteúdo, todos tratados no plano.
