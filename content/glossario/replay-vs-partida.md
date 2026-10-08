---
id: replay-vs-partida
titulo: Replay vs partida
patch: 7.41
categoria: estatistica
fontes:
- dota-tier1/work/CONTRATO_HUB.md (amostra: partidas, replays, vitorias, nivel)
- dota-tier1/work/PLANO.md (Etapa 3, replays com status 'falhou' em data/replays.csv)
sinonimos:
- partidas
- replays
---
## Básico
Partida é todo jogo contado pelo OpenDota; replay é o subconjunto com arquivo baixado e lido com sucesso.

## Avançado
O número de 'partidas' de um time vem direto dos dados de resultado do OpenDota (quem jogou, quem venceu); o número de 'replays' é menor porque alguns arquivos de replay da Valve falham ao baixar, saem do ar ou não são lidos, ficando fora de tudo que depende de ver o jogo minuto a minuto (mapa, wards, smokes, lutas). Por exemplo '76 partidas · 76 replays' quer dizer que todos os replays deste time foram lidos; quando os dois números divergem, é porque algum replay não pôde ser processado.
