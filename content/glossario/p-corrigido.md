---
id: p-corrigido
titulo: p corrigido < 0,05
patch: 7.41
categoria: estatistica
fontes:
- dota-tier1/work/CONTRATO_CHAVES.md (regras de recomendação, linha 38)
- dota-tier1/work/sintese/chaves.md (método Banir, linha 7)
sinonimos:
- p corrigido
- Benjamini-Hochberg
- correção para múltiplos testes
- FDR
---
## Básico
Teste do ban: só é significativo depois de corrigir o falso positivo de testar muitos heróis juntos.

## Avançado
Quando se testa 'esse herói cai quando banido?' para cada herói banido contra um time, quanto mais heróis testados, maior a chance de algum parecer significativo por puro acaso. A correção de Benjamini-Hochberg ajusta o limite de 0,05 para compensar essa quantidade de testes simultâneos (a 'família' é todos os heróis já banidos contra aquele time), usando o teste de Fisher unilateral em cada um. Um ban só vira 'confirmado' se, além de outras exigências (n ≥ 15, queda ≥ 5 pp), passar nesse p corrigido < 0,05; em 07/10/2026 nenhum herói das 12 equipes passou, o mais próximo ficou em p = 0,09.
