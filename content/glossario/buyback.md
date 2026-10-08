---
id: buyback
titulo: Buyback
patch: 7.41
categoria: economia
fontes:
- dota-imortal/work/farm_mechanics_corrigido.json (7.41f: notas da Valve, datamine e Liquipedia, conferidos em 03/10/2026)
- https://dota2.fandom.com/wiki/Hero_(unit_type)#Buyback
- app/src/live/partida/detalhe.ts (jogador.buyback_log)
- app/public/data/glossario.json (entrada Buyback)
sinonimos:
- recompra
links:
- net_worth
---
## Básico
Pagar para renascer na hora. Custa 200 + patrimônio dividido por 13 e tem recarga de 8 min. O próximo tempo de morte fica 25 s maior.

## Avançado
Opção de gastar ouro (cresce com o patrimônio) para voltar à base imediatamente, pulando o tempo de espera; tem recarga de alguns minutos. Cada buyback vira um evento na linha do tempo, lido do buyback_log do OpenDota.

Custa 200 de ouro mais o patrimônio do herói dividido por 13, tem recarga de 8 minutos e deixa a próxima morte desse herói 25 segundos mais demorada pra renascer. 'Jogos com buyback' mede em quantas partidas o jogador usou pelo menos um.
