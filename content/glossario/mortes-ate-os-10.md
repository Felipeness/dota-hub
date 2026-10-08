---
id: mortes-ate-os-10
titulo: Vitórias com 0 ou 1 morte até os 10
patch: 7.41
categoria: estatistica
fontes:
- dota-hane/src/estatistica.py
- app/public/data/jogadores/hane.json (destaques por número de mortes até os 10)
sinonimos:
- 0 ou 1 morte até os 10
- 3 ou mais mortes até os 10
---
## Básico
Correlação simples entre número de mortes nos primeiros 10 min e chance de vencer o jogo, sem julgar causa.

## Avançado
Corte descritivo, não uma fórmula de lane ganha/perdida: o Hub separou as partidas pelo número de mortes do jogador até o minuto 10 e mostrou a taxa de vitória de cada grupo. Morrer pouco cedo anda junto de vencer mais, mas isso é correlação: não prova que a morte foi a causa da derrota, só que os dois aparecem juntos nos dados.
