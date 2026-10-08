---
id: ficha-spirit_breaker
titulo: "Spirit Breaker"
heroi: Spirit Breaker
patch: 7.41
posicoes: [4]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/lgd/analise.md
- C:/Users/felip/Desktop/dota-tier1/work/equipes/xtreme/analise.md
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/early_rosh_pro.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/late_rosh_pro.json
- https://api.opendota.com/api/heroes/71/itemPopularity
- https://api.opendota.com/api/benchmarks?hero_id=71
- https://api.opendota.com/api/scenarios/itemTimings?item=phase_boots
- https://api.opendota.com/api/scenarios/itemTimings?item=ancient_janggo
- https://api.opendota.com/api/scenarios/itemTimings?item=spirit_vessel
- https://api.opendota.com/api/scenarios/itemTimings?item=invis_sword
- https://api.opendota.com/api/scenarios/itemTimings?item=black_king_bar
- https://api.opendota.com/api/scenarios/itemTimings?item=glimmer_cape
---

## Resumo
Spirit Breaker carrega disparado em um herói do outro lado do mapa, estoura o Greater Bash na chegada e some atrás do time inimigo com o Nether Strike. No 7.41 ele é jogado como suporte de roaming (pos 4), não como carry: no recorte de pro play olhado aqui ele só apareceu em pos 4 (Thiolicor, LGD, 8 picks e 62% de vitória na amostra de 108 jogos da linhagem HEROIC, 24/03 a 16/08/2026, não um recorte de 60 dias; nos últimos 60 dias ele teve no máximo 2 picks nesse mesmo levantamento; fy, Xtreme, 6 picks pré-TI), nunca em pos 1/2/3 (dota-tier1/work/equipes/lgd/analise.md, linhas 130 e 712; dota-tier1/work/equipes/xtreme/analise.md, linha 155). Isso casa com o farm dele: 387 de ouro por minuto na mediana do benchmark do OpenDota (hero_id 71), faixa de suporte e bem abaixo de um carry. A etiqueta "Carry" que o OpenDota dá ao herói (heroes.json) é histórica e não reflete o uso real no patch atual.

## Pos 4 (suporte de roaming)
- quando pegar: time quer um roaming puro que trava kills na lane inimiga nos primeiros minutos e depois vira iniciador de longo alcance nas lutas; nos dois drafts pro olhados ele só entrou como pos 4, nunca como carry ou offlane (dota-tier1/work/equipes/lgd/analise.md; dota-tier1/work/equipes/xtreme/analise.md).
- itens iniciais: tango, ward_observer, ward_sentry, branches, boots

### Build
#### Phase Boots (phase_boots)
- minuto: 10 (maioria das compras entre 7:30 e 12:00; pico no bucket de 10 min: 563 de 1.732 jogos)
- porque: a fase atravessa unidades pra iniciar sem travar na wave e a velocidade extra aumenta o dano do Greater Bash.
- detalhe: Greater Bash causa dano como percentual da velocidade de movimento, então qualquer item de velocidade (Phase, Drum, depois Yasha) é dano direto, não só mobilidade. A fase (3 s atravessando unidades, +20% de velocidade em herói corpo a corpo) deixa a Charge of Darkness terminar sem travar em creep ou herói no meio do caminho.
- fonte: items.json (phase_boots, abilities[0].description); constants_abilities.json (spirit_breaker_greater_bash, attrib.damage); https://api.opendota.com/api/scenarios/itemTimings?item=phase_boots (hero_id 71)

#### Drum of Endurance (ancient_janggo)
- minuto: 19 (maioria entre 15 e 20 min; pico no bucket de 20 min: 272 de ~581 jogos)
- porque: mais velocidade de ataque e de movimento pro time inteiro, e de novo mais velocidade vira mais dano no Greater Bash.
- detalhe: aura de +35 de velocidade de ataque e +13% de velocidade de movimento por 6 s pra todo aliado em 1200 de raio, mais +15 de velocidade e regeneração passivas. Baixo custo (1.625) pra um herói que já gasta o ouro em wards.
- fonte: items.json (ancient_janggo, abilities); https://api.opendota.com/api/scenarios/itemTimings?item=ancient_janggo (hero_id 71)

#### Spirit Vessel (spirit_vessel)
- minuto: 22 (maioria entre 20 e 25 min; bucket de 20 min com 64 jogos, de 25 min com 59)
- porque: corta 70% da cura do time inimigo e tira 4% da vida atual por segundo, exatamente o que falta pra fechar uma troca contra sustain.
- detalhe: ativo de 8 s (Soul Release) que em aliado cura 40 de vida por segundo; em inimigo reduz restauração de vida em 70%, tira 25 de dano por segundo mais 4% da vida atual, e ganha carga nova a cada herói inimigo que morre perto ou quando o usuário morre. Os bônus passivos (+10 em todos os atributos, +armadura, +regen de mana) seguem úteis mesmo sem gastar a carga.
- contra: heróis que dependem de regeneração ou lifesteal alto pra sobreviver à troca (o corte de 70% na cura anula boa parte desse sustain enquanto durar).
- fonte: items.json (spirit_vessel, abilities, attrib.restoration_reduction_enemy); https://api.opendota.com/api/scenarios/itemTimings?item=spirit_vessel (hero_id 71)

#### Shadow Blade (invis_sword)
- minuto: 27 (maioria entre 25 e 30 min; bucket de 25 min com 493 jogos, de 30 min com 360, de 20 min com 172)
- porque: invisibilidade pra posicionar a Charge sem ser visto e 175 de dano bônus garantido no ataque que quebra a invisibilidade.
- detalhe: item mais comprado no late do herói nesta amostra (OpenDota itemPopularity). 17 s invisível, +20% de velocidade e atravessa unidades enquanto durar; se você ataca pra encerrar, sai com 175 de dano físico extra naquele golpe, o que combina com o Greater Bash passivo na mesma troca de ataque.
- combo: ficar invisível, aproximar, soltar Charge of Darkness (ou atacar de perto) pra puxar os dois bônus de dano (Shadow Blade + Greater Bash) na mesma iniciação.
- fonte: items.json (invis_sword, abilities); https://api.opendota.com/api/heroes/71/itemPopularity; https://api.opendota.com/api/scenarios/itemTimings?item=invis_sword (hero_id 71)

### Situacionais
#### Black King Bar (black_king_bar)
- minuto: 30+ (amostra pequena e concentrada depois de 30 min: 22 de 35 jogos no bucket de 30 min)
- porque: dispel básico, 60% de resistência mágica e imunidade a dano puro e refletido contra times com vários disables mágicos em sequência.
- detalhe: 9/8/7 s de duração conforme o nível; durante o efeito você fica imune a dano refletido e a dano puro, além do dispel básico que anula o efeito negativo de feitiços inimigos já em curso. Compra tardia e rara nesta amostra (poucos jogos), então entra só quando o time inimigo tem 2+ disables mágicos de alcance que vão travar a sua iniciação antes de você chegar no alvo.
- contra: times com múltiplos stuns/silences/hexes mágicos (o dispel é básico, então não remove efeitos que exigem dispel forte).
- fonte: items.json (black_king_bar, abilities); https://api.opendota.com/api/scenarios/itemTimings?item=black_king_bar (hero_id 71)

#### Glimmer Cape (glimmer_cape)
- minuto: 27 (amostra pequena, concentrada entre 25 e 30 min: 11 de 20 jogos no bucket de 25 min)
- porque: barreira mágica de até 375 de dano mais invisibilidade de curta duração pra sobreviver ao burst depois de iniciar sozinho.
- detalhe: 0,5 s de atraso, depois invisibilidade, +20 de velocidade e barreira que absorve até 375 de dano mágico por 5 s; pode ser usado em si mesmo ou em um aliado, inclusive durante canalização.
- contra: times com burst de dano mágico concentrado logo depois do seu Charge of Darkness (quando você chega sozinho e sem suporte perto).
- fonte: items.json (glimmer_cape, abilities); https://api.opendota.com/api/scenarios/itemTimings?item=glimmer_cape (hero_id 71)

## Roshan
Sem dado de Roshan solo.
