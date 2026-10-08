---
id: ficha-riki
titulo: "Riki"
heroi: Riki
patch: 7.41
posicoes: [1]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/items.json
- dota-imortal/data/opendota/constants_patch.json
- dota-tier1/data/raw/protracker/meta.html
- dota-tier1/data/raw/protracker/pubs-vs-pro.html
- dota-tier1/data/jogadores_partida.csv
- dota-roshan-solo/data/solos.json
- dota-roshan-solo/data/resumo_por_heroi.json
- https://api.opendota.com/api/heroes/32/itemPopularity
- https://api.opendota.com/api/heroes/32/matchups
---
## Resumo
Riki é um carry de emboscada: fica invisível com Cloak and Dagger sempre que passa um tempo sem atacar e troca presença constante em teamfight por um bônus de dano brutal nas costas do inimigo, o Backstab (0,55x da sua agilidade por ataque). No bracket alto de pub do 7.41 ele aparece em 9,2% das partidas e converte 50,4% de vitórias; dentro disso, 68,6% das partidas (851 de 1241) usam a build de pos 1, com 52,2% de vitórias, bem acima da média do herói. Em pro ele quase não existe: só 4 partidas no período mais recente coberto pela fonte, então esta ficha é sustentada em dados de pub alto, não de cenário competitivo. O pior matchup registrado é contra Troll Warlord (18% de vitórias em 11 partidas) e o melhor contra Dazzle (91% em 11 partidas), amostras pequenas, sem mecânica confirmada por trás.

## Pos 1 (carry)
- quando pegar: é a build praticamente exclusiva do herói nesse bracket do 7.41, 68,6% das partidas e 52,2% de vitórias; não há volume de dados pra documentar outra posição.
- itens iniciais: tango, branches, quelling_blade, circlet, magic_stick

### Build
#### Power Treads (power_treads)
- porque: ataque e troca de atributo em 1 item só, mais velocidade de movimento pra reposicionar visível.
- detalhe: troca entre +10 Força, Agilidade ou Inteligência, +25 de velocidade de ataque e +55 de movimento no corpo a corpo. É a bota mais comprada pelo herói no early game.
- fonte: items.json (power_treads); itemPopularity (early_game_items, 75 ocorrências)

#### Wraith Band (wraith_band)
- porque: barato, dá os três atributos e ainda soma armadura, bom pra sustentar o farm solo no início.
- detalhe: +5 agilidade (mais dano de Backstab), +2 força, +2 inteligência, +6 de velocidade de ataque e +1,75 de armadura.
- fonte: items.json (wraith_band); itemPopularity (early_game_items, 47 ocorrências)

#### Diffusal Blade (diffusal_blade)
- porque: trava o alvo no lugar depois do ataque surpresa e seca a mana de quem depende de feitiço pra sobreviver ou escapar.
- detalhe: Inhibit desacelera o alvo por 4s ao ativar; Manabreak queima 40 de mana por acerto e converte isso em 1 dano físico por mana queimada, em todo ataque.
- contra: heróis que dependem de mana pra usar um blink, um heal ou um dispel de fuga perdem esse recurso rápido contra o manabreak constante.
- combo: Blink Strike (slow de 100% por 0,75s) seguido de um ataque com Diffusal mantém o alvo preso bem mais tempo do que qualquer um dos dois efeitos isolado.
- fonte: items.json (diffusal_blade, riki_blink_strike); itemPopularity (mid_game_items, 90 ocorrências)

#### Yasha + Diadem (vira Manta Style) (manta)
- porque: as imagens limpam wave e camp de graça e o dispel tira silêncio e a maioria dos debuffs básicos bem na hora que tentam travar o combo.
- detalhe: +26 agilidade, +15 de velocidade de ataque, +10% de movimento e 2 imagens (corpo a corpo causa 33% do dano, mas toma 300% de dano, então não seguram foco). Dispel Type: Basic Dispel.
- contra: silêncios e a maioria dos debuffs comuns lançados antes do Backstab.
- combo: ativar Manta só pra limpar o silêncio/debuff e manter o ritmo de ataque sem perder o turno da emboscada.
- fonte: items.json (manta, yasha, diadem); itemPopularity (mid_game_items: blade_of_alacrity 124, diadem 49, yasha 53, manta 29)

### Situacionais
#### Skull Basher (basher)
- porque: sem stun, o alvo some do alcance antes do Riki conseguir repetir o ataque pelas costas.
- detalhe: corpo a corpo tem 25% de chance por acerto de atordoar por 1,2s e causar 100 de dano bônus.
- contra: não funciona em Spirit Breaker, Faceless Void, Slardar ou Kez em modo Sai, contra esses quatro o item não trava a fuga.
- fonte: items.json (basher)

#### Black King Bar (black_king_bar)
- porque: Riki não tem vida pra aguentar um combo de disable; BKB apaga a maioria dos efeitos negativos de feitiço na primeira ativação.
- detalhe: 60% de resistência mágica e imunidade a dano refletido e puro por 9s (nível 1), aplicando Basic Dispel ao ativar.
- contra: linhas com vários stuns ou silêncios em sequência que impediriam o Riki de completar a emboscada.
- fonte: items.json (black_king_bar); itemPopularity (late_game_items, 14 ocorrências)

#### Linken's Sphere (sphere)
- porque: bloqueia de graça o primeiro feitiço-alvo que tentaria travar o Riki antes dele conseguir reposicionar.
- detalhe: Spellblock recarrega em 14s e bloqueia a maioria dos feitiços direcionados ao Riki.
- contra: heróis que dependem de um único feitiço-alvo pra iniciar em cima dele, como um hex ou um gancho de iniciação.
- fonte: items.json (sphere)

#### Disperser (disperser)
- porque: upgrade do Diffusal, o Suppress limpa um debuff do próprio Riki ao mesmo tempo que desacelera quem ele está perseguindo.
- detalhe: Suppress dá dispel pros dois lados: o inimigo é desacelerado por 5s e o Riki ganha velocidade e 40% de resistência a lentidão, mantendo o Manabreak do Diffusal. Dispel Type: Basic Dispel.
- contra: travas de movimento (slow ou root) lançadas no próprio Riki durante a perseguição.
- combo: usar Suppress pra se limpar de um root e continuar a perseguição com o alvo ainda desacelerado do outro lado do efeito.
- fonte: items.json (disperser); itemPopularity (late_game_items, 25 ocorrências)

#### Eaglesong (eagle)
- porque: agilidade pura e barata perto do fim do jogo, vira direto em mais dano de Backstab e de ataque.
- detalhe: +25 agilidade, sem habilidade especial nesse patch.
- fonte: items.json (eagle); itemPopularity (late_game_items, 30 ocorrências, o item mais comprado nessa fase)

#### Battle Fury (bfury)
- porque: Riki pode fazer stealth farm sem pressão; Cleave acelera limpar onda e camp enquanto ele evita luta.
- detalhe: Cleave causa 60% do dano de ataque em cone até 650 de distância (40% contra creep) e atravessa imunidade a feitiço.
- fonte: items.json (bfury); itemPopularity (mid_game_items, 10 ocorrências)

## Roshan
Sem dado de Roshan solo.
