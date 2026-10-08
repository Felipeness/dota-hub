---
id: ficha-jakiro
titulo: "Jakiro"
heroi: Jakiro
patch: 7.41
posicoes: [5]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/aurora/analise.md
- C:/Users/felip/Desktop/dota-tier1/work/equipes/yandex/analise.md
- C:/Users/felip/Desktop/dota-tier1/work/equipes/xtreme/analise.md
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_com_suporte.json
- https://api.opendota.com/api/heroes/64/itemPopularity
- https://api.opendota.com/api/benchmarks?hero_id=64
- https://dotacoach.gg/en/heroes/jakiro/builds/support
- https://liquipedia.net/dota2/Force_Staff
- https://liquipedia.net/dota2/Solar_Crest
---

## Resumo
Jakiro é um suporte de área: dano mágico em linha (Dual Breath), stun em área (Ice Path) e uma ultimate de DPS contínuo numa faixa longa (Macropyre), além de dar push de torre com Liquid Fire (75% do dano em construções). No 7.41 ele aparece como suporte duro (pos 5): a kaori, da Aurora, o jogou 25 vezes com 56% de vitória e o time o descreve como "suporte de área"; Maladych (Yandex) e BoBoKa (Xtreme) também o jogaram na posição 5 no mesmo patch. No OpenDota seus papéis são Support/Nuker/Pusher/Disabler; o herói tem 359.207 picks no público (heroStats.json), mas os campos "1_pick" a "8_pick" desse arquivo são faixa de MMR (Herald a Immortal), não posição, então não dá pra extrair "pos 5 é a que mais escolhe o herói" desse dado.

## Pos 5 (suporte duro)
- quando pegar: time quer controle em área barato (Dual Breath acerta várias unidades na linha, Ice Path estuna quem entra na área) e push de torre sem depender de mira em alvo único. É o padrão real do 7.41: Aurora (kaori, 25 picks, 56% de vitória, "suporte de área") e Yandex (Maladych, pos 5, 8 picks) o jogaram assim. Combo central do kit: Ice Path trava os inimigos na área (até 2s de stun no nível 4) e Macropyre, lançada por cima, aplica dano contínuo (100 a 200 por segundo, 10s de duração) enquanto eles ainda estão presos; nenhum dos dois é fácil de limpar (Ice Path só sai com dispel forte, Macropyre não é dispelável de forma alguma).
- itens iniciais: tango, ward_observer, ward_sentry, branches, blood_grenade, magic_stick

### Build
#### Magic Wand (magic_wand)
- porque: carga de HP/mana contra poke na lane, sem gastar regen.
- detalhe: 20 cargas, +3 de todos os atributos enquanto ativo, recupera 15 por carga. Padrão de abertura de suporte em qualquer patch; aparece nos itens iniciais do guia de suporte do dotacoach para o 7.41f.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://dotacoach.gg/en/heroes/jakiro/builds/support

#### Arcane Boots (arcane_boots)
- porque: Jakiro gasta mana em praticamente todo combate (Dual Breath 135-180, Ice Path 100, Macropyre 300-500) e o Arcane Boots devolve mana pro time inteiro.
- detalhe: +125 de mana, +45 de velocidade de movimento, aura que recarrega 150 de mana num raio de 1200 quando ativado. No OpenDota é a bota mais comprada por jogadores de Jakiro (10 nas compras cedo e 68 na janela mid-game, a maior contagem entre os itens dessa janela; itens iniciais baratos como tango e blood grenade têm contagem maior ainda, mas são consumíveis, não build).
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://api.opendota.com/api/heroes/64/itemPopularity

#### Glimmer Cape (glimmer_cape)
- porque: tira Jakiro (ou o aliado que ele mira) de foco físico e mágico bem na hora em que o time precisa recuar ou setar o combo.
- detalhe: ocultação por 5s com 0,5s de atraso de revelação, +20% de resistência mágica durante o efeito e um barrier que absorve até 375 de dano mágico pelos 5s.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://api.opendota.com/api/heroes/64/itemPopularity; https://dotacoach.gg/en/heroes/jakiro/builds/support

#### Force Staff (force_staff)
- porque: empurra aliado pra fora de uma troca ruim ou empurra Jakiro pra dentro do alcance de Ice Path/Macropyre sem andar reto na cara do inimigo.
- detalhe: +10 de inteligência, +175 de vida, empurra 600 de distância em 0,5s, alcance de uso em aliado de 550 (850 quando usado num inimigo).
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (push, stats); https://liquipedia.net/dota2/Force_Staff (alcance 550 aliado / 850 inimigo, não vem no items.json local); https://api.opendota.com/api/heroes/64/itemPopularity; https://dotacoach.gg/en/heroes/jakiro/builds/support

#### Aghanim's Scepter (ultimate_scepter)
- porque: é o item de luxo mais comprado por jogadores de Jakiro no OpenDota (34 das compras tardias da amostra, a maior contagem dessa janela) e consta como core nos dois guias de suporte do dotacoach pro 7.41.
- detalhe: +10 de todos os atributos, +175 de vida e +175 de mana (bônus genéricos do item; o efeito específico que ele muda nas habilidades de Jakiro não tem fonte confirmada nesta checagem, ver itens sem fonte).
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://api.opendota.com/api/heroes/64/itemPopularity; https://dotacoach.gg/en/heroes/jakiro/builds/support

### Situacionais
#### Black King Bar (black_king_bar)
- porque: Jakiro precisa ficar vivo e sem ser interrompido pra terminar Ice Path + Macropyre; sem BKB qualquer stun cancela o combo.
- detalhe: imunidade a magia e 60% de resistência mágica (reduz o dano que ainda passa, de reflexo/puro) por 9s no primeiro uso, 8s no segundo, 7s no terceiro.
- contra: time inimigo com disable de alvo único forte (stun, hex, root) que cancelaria o cast de Macropyre ou deixaria Jakiro exposto. No OpenDota, entre as compras tardias de Jakiro, BKB fica bem atrás do Aghanim's Scepter (3 contra 34 na amostra) então não é o item de luxo mais comum, mas ainda é o pick certo contra disable forte.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://api.opendota.com/api/heroes/64/itemPopularity

#### Solar Crest (solar_crest)
- porque: protege o carry que está sendo focado enquanto Jakiro ainda está montando o combo, ou enfraquece a armadura de quem o time vai focar.
- detalhe: +7 de armadura pra Jakiro (passivo), e no uso em aliado dá +15% de velocidade de movimento, +60 de velocidade de ataque, +5 de armadura e um escudo que absorve 350 de dano físico por 7s. No items.json atual o item só pode ser usado em aliado (target_team Friendly); não há suporte local pro uso em inimigo com -armadura.
- contra: carry inimigo de dano físico sustentado (o escudo de 350 absorve os primeiros golpes).
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://liquipedia.net/dota2/Solar_Crest (confirma 15% de velocidade de movimento, não valor fixo); https://api.opendota.com/api/heroes/64/itemPopularity

#### Aeon Disk (aeon_disk)
- porque: Jakiro costuma ficar parado lançando Ice Path/Macropyre enquanto é o alvo prioritário do time inimigo; o Aeon Disk dá uma segunda chance contra um burst que o deixe abaixo de 70% de vida.
- detalhe: ativa sozinho quando a vida cai abaixo de 70% da vida máxima (é o próprio threshold do item, "health falls below 70%"), aplica dispel forte, dá 75% de resistência a status e zera dano recebido/causado por 2,5s; recarga 105 a 165s conforme o nível.
- contra: combos de burst de um alvo só (nuke + disable) que tentam abater Jakiro num único estouro antes que ele lance a ultimate.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

## Roshan
Sem dado de Roshan solo (Jakiro não aparece nos registros de solo: é suporte sem sustain própria para aguentar o dano do Roshan sozinho). Nos replays de Roshan com suporte presente, Jakiro aparece ocasionalmente como o suporte no fosso ao lado de carries diferentes em pelo menos três ocasiões, sempre em contagem baixa (1 a 2 por registro), sem padrão de minuto, nível ou item que permita generalizar o que ele faz na luta de Roshan além de estar presente.

Fonte: C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_com_suporte.json
