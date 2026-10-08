---
id: roshan-solo-medusa
titulo: "Solo de Roshan: Medusa"
patch: 7.41
fontes:
- dota-roshan-solo/data/resumo_por_heroi.json
- dota-roshan-solo/data/resumo_com_suporte.json
- dota-roshan-solo/work/solo_roshan.md
- app/public/data/herois/medusa.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/items.json
- replay 8743534086
- replay 8743783853
- replay 8812826983
heroi: Medusa
solos: 0
origem: replay
replay: 8743534086, 8743783853, 8812826983
---
## Básico
A Medusa quase não sola Roshan. Da leitura de 1.245 partidas válidas (2.577 mortes de Roshan), ela não aparece nenhuma
vez na categoria de solo confirmado (puro ou com ajuda curta) do projeto: 0 solos em toda a amostra. Ela só aparece
3 vezes na categoria "solo com suporte" (ela faz 85% ou mais do dano, mas um aliado fica o fosso quase todo, dando
visão ou proteção), sempre tarde.

Solo com suporte (n = 3, amostra pequena):
- Minuto: mediana 42:07 (faixa 28:16 a 42:46). Nada antes dos 20 min.
- Nível: mediana 25 (faixa 22 a 27).
- Tempo de tentativa: mediana 20,3 s (faixa 11,8 a 34,3 s).
- Patrimônio: mediana 35.553.
- Vida de Roshan no início: mediana 11.460. Vida mínima da Medusa durante a tentativa: mediana 712; terminou com a vida
  cheia nos 3 casos.
- Itens: Manta Style em 3 de 3, Butterfly em 3 de 3, Greater Crit (Daedalus) e Eye of Skadi em 2 de 3 cada.
- Habilidade usada no solo: Split Shot em 3 de 3, item Manta em 2 de 3.
- Suporte que ficou no fosso (um por caso, tipos variados nos 3 jogos): Primal Beast, Ogre Magi, Dark Willow,
  Omniknight, Tusk, Lion, Hoodwink, Centaur Warrunner, Tiny.
- Aegis ficou com a Medusa em 3 de 3 (nunca roubada). Torre nos 3 min seguintes em 3 de 3.

O que ela faz no lugar: joga Roshan em grupo, tarde, com os itens que já tira pro resto do jogo (Manta, Butterfly,
e Skadi ou Daedalus). Ela não é a carregadora do dano na tentativa; o papel dela é estar lá com Split Shot e a selva
já puxada pelo time, não abrir a tentativa sozinha.

## Avançado
Por que ela quase não sola, direto do que o guia e as constantes do jogo confirmam:
- Split Shot precisa ficar desligado contra Roshan (ele é alvo único; o fator de 0,5 a 0,8 do Split Shot cortaria
  o próprio dano principal à toa), então a ferramenta que mais acelera o farm dela não ajuda aqui.
- Stone Gaze não afeta Roshan: ele é uma criatura neutra, e a petrificação do ultimate dela só funciona em heróis.
  Sem o CC do Gaze, ela não trava o próprio alvo nem reduz o dano que recebe de volta.
- As ilusões ranged do Manta causam só 28% do dano normal (72% menos, items.json: manta.attrib.tooltip_damage_outgoing_ranged),
  o que anula boa parte do ganho de DPS que o item dá no resto do jogo. Isso vale pra qualquer alvo, Roshan incluso: não é
  um enfraquecimento específico contra ele.
- Ela não tem lifesteal no build core (Satanic ou similar não aparecem nos itens_core nem situacionais do guia);
  o sustain dela em qualquer luta vem do Mana Shield, que converte mana em vida (absorve 98% do dano recebido em
  troca de mana), não de cura.
- Força 0 (HP base 120) significa que até tarde ela depende de item (Skadi, Treads em Força) pra ter corpo; sem
  um suporte perto, o risco de secar a mana e virar um herói de 120 de vida no meio da tentativa é real.

Exemplo, 8743534086: ela entra com Manta e Butterfly prontos, no nível coerente com a mediana (22-27), e termina a
tentativa de ~20s com a vida cheia, com a Aegis e torre nos 3 min seguintes, mas com um suporte dentro do fosso
o tempo todo, não sozinha.

Quando ela de fato ajuda no Roshan de time (fora da amostra de solo, pelo guia local): Split Shot desligado, e os
poços trocam por horário (noite: 15-20, 25-30, 35-40 no de baixo/Radiant; dia: 20-25, 30-35, 40-45 no de
cima/Dire). Ela entra como mais um DPS de longo alcance, não como a tanque ou a iniciadora.
