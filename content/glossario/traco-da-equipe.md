---
id: traco-da-equipe
titulo: traço da equipe, não reação
patch: 7.41
categoria: estatistica
fontes:
- dota-tier1/work/sintese/scripts/lanes_relatorio.py (linhas 212-215, frase_metrica)
- app/public/data/times_atlas/navi.lanes.json (exemplo real de 'traço da equipe, não reação')
- app/public/data/times_atlas/1win.lanes.json (exemplo real de 'reação própria da equipe')
sinonimos:
- traço da equipe
- reação própria da equipe
- não é reação
---
## Básico
Dois selos opostos quando o time difere da liga: um é hábito fixo, o outro é reação real ao estado do jogo.

## Avançado
Quando um sinal de recuperação de um time difere do padrão da liga (p < 0,05 contra a liga), o Hub distingue dois casos pelo mesmo sinal também variar, ou não, entre lane ganha e lane perdida (p < 0,05 contra a própria lane ganha). Se o sinal muda nos dois testes, é 'reação própria da equipe' (difere da liga e muda com a lane: é reação real a estar atrás no jogo, e é o rótulo mais comum nos dados). Se o sinal difere da liga mas NÃO muda com a lane, é 'traço da equipe, não reação': é um hábito que o time já faz do mesmo jeito sempre, não uma resposta a estar ganhando ou perdendo a lane. Não são sinônimos: são dois resultados opostos do mesmo teste.
