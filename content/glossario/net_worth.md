---
id: net_worth
titulo: Net worth
patch: 7.41
categoria: economia
fontes:
- dota-imortal/work/farm_mechanics_corrigido.json (7.41f: notas da Valve, datamine e Liquipedia, conferidos em 03/10/2026)
- app/public/data/glossario.json (id net_worth)
- app/public/data/glossario.json (id net-worth-aos-10)
- dota-tier1/work/sintese/definicoes.md (seções 0 e 1)
- dota-imortal/work/farm_mechanics_corrigido.json (perda_de_ouro_na_morte: "networth/40, só do ouro NÃO confiável")
- app/src/live/partida/PartidaPage.tsx (tooltip networth_t)
sinonimos:
- NW
- patrimônio
- NW aos 10
- NW aos 15
- NW aos 20
- networth
links:
- gpm
- buyback
---
## Básico
Patrimônio: o ouro na mão somado ao valor dos itens. Ao morrer, o herói perde patrimônio dividido por 40, só do ouro não confiável na mão.

## Avançado
Net worth soma o ouro que o herói tem guardado com o valor de compra dos itens equipados; ao morrer, ele perde patrimônio dividido por 40, só do ouro 'não confiável' que tinha na mão (ouro de passivo e de bounty rune é confiável e não se perde; comprar algo antes de morrer zera esse risco). 'NW aos 10/15/20' é a diferença de net worth do time (soma dos 5 jogadores) contra o adversário, medida no fim daquele minuto (ex.: 'aos 15:00' usa o registro em que minuto == 14, não 15, por como os dados são gravados). É a métrica usada para dizer se uma lane ou o jogo inteiro estão 'ganhos' (NW > 0) ou 'perdidos' (NW < 0).

Maior ou igual ao ouro ganho total porque soma também o valor dos itens já comprados. O Hub mostra como curva (networth_t do OpenDota) ao lado da curva de ouro ganho (gold_t): um herói pode ter gasto tudo em itens e aparecer com pouco ouro na mão, mas o patrimônio continua alto.
