---
id: resiste-ao-contexto
titulo: resiste ao contexto
patch: 7.41
categoria: partida
fontes:
- dota-tier1/work/CONTRATO_CHAVES.md (linha 50)
- dota-tier1/work/sintese/chaves.md (linha 35)
- app/src/times/ComoVencer.tsx (SELO_DO_CONTEXTO)
sinonimos:
- resiste ao contexto
- vence pelo contexto
- contexto indefinido
- forca_contexto
---
## Básico
Diz se a vantagem do herói banido resiste nos jogos ruins do time ou só aparece quando já ia bem.

## Avançado
Para cada herói de banir, o Hub compara a vantagem dele sobre o time sem ele (diferença de win rate) nas situações ruins (como azarão, lane perdida, atrás aos 15 min) com a vantagem nas situações boas. 'resiste' significa que a vantagem nas situações ruins é pelo menos metade da vantagem nas boas, ou seja, o herói ajuda mesmo quando o time não está favorecido; 'vence pelo contexto' (forca_contexto: favoravel) significa que a vantagem encolhe muito mais nas situações ruins, sugerindo que o herói só parece bom porque foi escolhido em jogos já favoráveis (e, se o ban estivesse confirmado, perderia um nível de confiança); 'contexto indefinido' aparece com menos de 3 jogos de cada lado para comparar.
