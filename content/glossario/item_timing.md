---
id: item_timing
titulo: Item timing
patch: 7.41
categoria: economia
fontes:
- Termo de uso comum no jogo (definição, sem número no texto)
- export/dota_export/confrontos.py (funções spikes, _eh_fechado; PARCELA_MINIMA = 0.15)
- app/public/data/glossario.json (entrada item_timing)
sinonimos:
- minuto alvo
links:
- power_spike
- gpm
---
## Básico
O minuto em que o herói termina um item importante. Quanto mais cedo, melhor.

## Avançado
É o minuto mediano em que o item aparece pronto no inventário, nas partidas de liga usadas na análise. Serve de referência: comprar bem antes é sinal de jogo tranquilo, bem depois é sinal de dificuldade ou recurso atrasado. Calculado só para itens fechados comprados em pelo menos 15% das partidas da amostra.
