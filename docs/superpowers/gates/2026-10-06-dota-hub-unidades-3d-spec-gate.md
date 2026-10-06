# Post-Spec Gate: Dota Hub, unidades em 3D (adendo à fase 1)

Spec: `docs/superpowers/specs/2026-10-06-dota-hub-unidades-3d-design.md`. Data: 06/10/2026. Constitution: não existe (checagem pulada).

## Content Quality
- ✅ Sem detalhe de implementação: a varredura com os padrões da skill (frameworks, linguagens, bibliotecas de 3D, formatos de arquivo de modelo, ferramentas de linha de comando, navegador automatizado) deu 0 ocorrências. "Sem suporte a 3D" descreve o aparelho, como na spec da fase 1. A escolha técnica está em `docs/superpowers/decisions/2026-10-06-unidades-3d-stack.md`.
- ✅ Seções obrigatórias presentes: cenários de uso (Objetivo, O que muda nas telas), requisitos (O que muda nas telas, Conteúdo novo, Requisitos não funcionais), critérios de sucesso (6).
- ✅ Nenhuma seção vazia. Sem travessão.

## Requirement Quality
- ✅ Requisitos testáveis: cada critério tem verbo e resultado medido.
- ✅ Critérios sem tecnologia.
- ✅ Critérios mensuráveis: 26 tipos de camp, 45 unidades da selva, 24 creeps de lane, 59 aparências (100%); 10 números do Roshan mais 10 por amostra; 400 KB por modelo e 15 MB no total; 2 s no celular com 4G e 30 quadros por segundo; primeira tela abaixo de 3 s sem baixar modelo; 100% das habilidades visíveis com nome, ícone e descrição.
- ✅ Os números da cobertura foram medidos no teste de viabilidade, não estimados (71 unidades, 59 modelos, 26 tipos de camp).
- ✅ Sem marcadores TBD, TODO ou NEEDS CLARIFICATION.

## Clarification Coverage
- ✅ Escopo: objetivo, decisões, fora do escopo (animações além da parada, partículas, sons, heróis, comparação, cosméticos).
- ✅ Domínio e dados: Unidade, Habilidade, Tipo de camp e as relações com o camp do mapa.
- ✅ Interação e UX: glossário com seção Unidades, ficha, painel do mapa (Roshan, Tormentor e camps), busca; 6 estados de erro e de borda (sem 3D, modelo que não carrega, dados ausentes, habilidade sem ícone, menos movimento, jogo não instalado).
- ✅ Não funcionais: desempenho, acessibilidade (texto alternativo, pausa por teclado, texto e não imagem), direitos de uso, rastreabilidade.

## Readiness
- ✅ O Felipe liberou todas as decisões e autorizou os arquivos do jogo; a spec registra o status "aprovado por delegação".
- ⚠️ "Imagem parada" para aparelho sem 3D foi pedida pelo orquestrador e entra na spec; o custo é uma ferramenta a mais só no PC de quem exporta (decisão técnica). Se o Felipe achar que não vale, a spec cai para o aviso "modelo indisponível" sem mudar o resto.

## Decisão: PASS com aviso
Varreduras automáticas passam. O aviso é só de custo de uma funcionalidade pedida, sem bloquear.
