# Post-Plan Gate: Dota Hub fase 1D (correções de visual e de uso)

Plano: `docs/superpowers/plans/2026-10-06-dota-hub-fase1d-ux.md`. Fonte dos requisitos: auditoria `docs/superpowers/verificacao/2026-10-06-auditoria-ux.md` (8 problemas relatados pelo Felipe, 21 defeitos achados) mais o pedido do orquestrador. Data: 06/10/2026. Constitution: não existe (checagem pulada). Não há spec própria: a fase corrige telas que já existem e não muda o escopo da spec da fase 1.

## Plan Completeness
- ✅ As 13 tarefas têm caminhos exatos (Create/Modify) e interfaces (Consumes/Produces).
- ✅ Código completo nos testes e na implementação. Onde a tarefa mexe em arquivo que a 1C muda (`App.tsx` não muda; `ObjectivePanel.tsx` e `MapPage.tsx` vêm inteiros já com as mudanças da 1C; `SearchBox.tsx`, `GlossaryPage.tsx` e `__main__.py` vêm como trecho exato e o lugar), o plano diz o ponto de inserção, porque a versão final só existe depois da 1C mesclada.
- ✅ Nenhum placeholder. A varredura acha só falsos positivos ("todos", "Todas" e a pseudo-classe `::placeholder` do CSS).
- ✅ TDD em todas as tarefas de código (teste, falha, implementação, passa, verificação visual, commit). A Task 13 é verificação.
- ✅ Regra nova cumprida: toda tarefa que muda tela (1, 2, 3, 4, 6, 7, 9, 10, 11, 12) tem o passo "Verificação visual" com as telas, o quadro de `docs/design/v1` a comparar e o resultado esperado. As Tasks 5 e 8 só mexem no export e não têm tela.

## Architecture Quality
- ✅ Sem dependência nova. A verificação usa o Playwright MCP, não um pacote do projeto.
- ✅ Causa raiz, não sintoma: as duas colisões de classe (`.marca`, `.cartoes`) ganham um teste que recusa o padrão inteiro em todos os arquivos de CSS, inclusive o `unidades.css` da 1C (que já traz a terceira colisão, `.tabela-rolavel`).
- ✅ Funções puras para a lógica nova (`dividirResumo`, `destaquesDoHeroi`, `objetivosDosPassos`, `variacoesDaFase`, `lugaresDoTermo`), componentes só montam a tela.
- ✅ Reuso antes de criar: `ListaPassos` da tela de Rotas serve à ficha do herói; `.destaques` dos jogadores serve aos números do herói; `MapView` com `forcarPlano` vira o mini mapa do glossário; `VisualizadorUnidade` da 1C mostra a unidade no termo; `jogo.listar` e `jogo.extrair` da 1C tiram retrato e ícone.
- ✅ Código conferido contra os dados reais antes do gate: a regra de primeira frase separa os 22 resumos (abertura de 39 a 387 caracteres, "4.171" e "6,9" não quebram); `variacoesDaFase` dá ao Anti-Mage Radiant de 6 a 12 opções por fase, contra 1 hoje (fase 0:00-8:00: AM-R-01, 02, 03, 11 e duas rotas de situação); o detector de classe repetida, rodado no `styles.css` do `main`, acha exatamente `.cartoes` e `.marca`; o Source 2 Viewer lista `npc_dota_hero_antimage_png.vtex_c` e `abyssal_blade_png.vtex_c` no jogo instalado.

## Cross-Artifact Consistency
- ✅ Problema 1 (Avançado ilegível) e 7 (cartões de amigos): Task 1.
- ✅ Problema 2 (logotipo sobre a navegação): Task 1. Mapa minúsculo e camadas tomando a tela: Task 4.
- ✅ Problema 3 (Rotas): Tasks 5, 6 e 7 (rota por arquivo, mapa sempre à vista, lista filtrada e paginada, situação desligada até ter lado e minuto). A busca que vaza é a do topo sobre o logotipo: Task 1.
- ✅ Problema 4 (ficha de herói): Task 9 (abertura curta, números em destaque, resto e fontes recolhidos, guia em seções recolhíveis).
- ✅ Problema 5 (ícone do herói): Tasks 8 e 9.
- ✅ Problema 6 (rotas do herói): Task 2 (faixa da textura), Task 10 (só os alvos da fase, texto na coluna larga, sem pílula vazia, variações pelas rotas do PDF 05 e pelas 11 situações do índice).
- ✅ Problema 8 (glossário): Tasks 8 e 11 (ícone de item, unidade 3D da 1C com habilidades e ícones, mini mapa dos lugares).
- ✅ Defeitos A a Q: Tasks 1, 3, 4, 6, 7, 9, 10 e 12. R, S e U ficam registrados na Task 13 com o motivo.
- ✅ Nenhuma tarefa fantasma.

## Execution Readiness
- ✅ Começa depois da 1C mesclada no `main` (pré-requisito no topo do plano, com a lista dos arquivos a reler).
- ✅ Execução: subagent-driven, como as fases anteriores, com ledger em `.superpowers/sdd/2026-10-06-dota-hub-fase1d/progress.md`.
- ⚠️ A câmera do mapa 3D (Task 4) tem valores de partida que precisam de ajuste fino na captura; o plano diz onde mexer e o critério.
- ⚠️ A Task 11 depende dos ids exatos dos creeps de lane que a 1C exporta; o plano manda listar antes e o teste do export confere que as 5 unidades citadas existem.
- ⚠️ As Tasks 5, 6 e 7 precisam rodar em ordem: o `rotas.json` grande só some na Task 7, depois que nenhuma tela o usa.

## Decisão: WARN (não crítico), seguir
Os avisos são de calibração e de ordem de execução, todos tratados no plano.
