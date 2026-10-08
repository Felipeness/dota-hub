---
id: ficha-tidehunter
titulo: "Tidehunter"
heroi: Tidehunter
patch: 7.41
posicoes: [3]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-tier1/data/draft.csv
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
- https://api.opendota.com/api/heroes/29/itemPopularity
- https://dota2protracker.com/builds/tidehunter-pos3-1
- https://dotacoach.gg/en/heroes/tidehunter/builds/offlane
---

## Resumo
Tidehunter é um iniciador str tanque: Ravage stuna em raio 1250 e Kraken Shell bloqueia dano físico com dispel forte embutido. No 7.41 ele praticamente só é jogado pos 3 offlane: no recorte Tier 1 local, de 87 picks de Tidehunter com posição por replay, 86 vieram com a posição confirmada e 85 dessas foram pos 3 (contra só 1 pos 2); 1 pick ficou sem posição confirmada (dota-tier1 draft.csv). O build de referência pro no dota2protracker também é catalogado para pos 3 (URL `tidehunter-pos3-1`). Ele brilha abrindo teamfight com Blink + Ravage e seguindo vivo na frente da luta com Kraken Shell.

## Pos 3 (offlane)
- quando pegar: é como o herói é jogado quase por unanimidade no patch atual; 85 de 86 picks com posição confirmada por replay no recorte Tier 1 7.41 foram pos 3, de um total de 87 picks (1 sem posição confirmada) (C:/Users/felip/Desktop/dota-tier1/data/draft.csv). O build de referência no dota2protracker também é catalogado como pos 3 (URL `tidehunter-pos3-1`); número de partidas/pros/winrate do site não pôde ser reconfirmado nesta revisão (fetch automatizado bloqueado com HTTP 403).
- itens iniciais: tango, quelling_blade, gauntlets, gauntlets, branches, branches

### Build
#### Bracer (bracer)
- minuto: 2
- porque: atributo bruto (str/agi/int) barato dá HP e mana sem precisar de farm de carry pra empatar o trade de lane.
- detalhe: o build padrão pos 3 compra dois Bracers em sequência antes de qualquer bota. Cada um soma str/agi/int fixos, então o segundo dobra a folga de HP e mana logo na fase de linha, quando Tide ainda não tem gold pra item mais caro.
- fonte: https://dota2protracker.com/builds/tidehunter-pos3-1 (timing); https://dotacoach.gg/en/heroes/tidehunter/builds/offlane (ordem)

#### Phase Boots (phase_boots)
- minuto: 8
- porque: fecha distância pra conectar Gush e autoataque, com +18 de dano melee que ajuda no trade de lane.
- detalhe: Phase dá 20% de movimento extra por 3s e atravessa unidades, essencial pra alcançar quem está kitando antes de ter Blink. Os +18 de dano melee somam no combo de harass com Anchor Smash.
- fonte: https://dota2protracker.com/builds/tidehunter-pos3-1; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (efeito)

#### Magic Wand (magic_wand)
- minuto: 8
- porque: carga de HP/mana instantânea contra harass e nukes de poke da trilane inimiga, sem gastar slot de mana.
- detalhe: item padrão de sobrevivência de lane, comprado no mesmo intervalo das Phase Boots no build pro.
- fonte: https://dota2protracker.com/builds/tidehunter-pos3-1

#### Soul Ring (soul_ring)
- minuto: 9
- porque: converte HP em 170 de mana por 10s, então ele spama Gush e Anchor Smash sem precisar de Arcane Boots.
- detalhe: +6 str e +2 armadura fixos também ajudam a tankar lane. É o jeito do offlane de ter mana pra lutar sem desviar ouro pra item de mana puro.
- fonte: https://dota2protracker.com/builds/tidehunter-pos3-1; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (efeito)

#### Consecrated Wraps (consecrated_wraps)
- minuto: antes do minuto 15
- porque: acumula barreira de dano por stack de movimento, segurando o burst físico e mágico da trilane sem gastar muito ouro.
- detalhe: ganha 1 stack a cada 3s (máx. 3) e, ao levar dano de herói ou Roshan, consome os stacks pra uma barreira de até 360 de dano por 7s. Também dá 15% de resistência mágica e 250 de HP.
- fonte: https://dotacoach.gg/en/heroes/tidehunter/builds/offlane (bucket "antes do min 15"); C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (efeito)

#### Blink Dagger (blink)
- minuto: 21
- porque: Ravage tem alcance zero e cast point de 0,3s; sem Blink o time inimigo vê a entrada e dispersa antes do stun de raio 1250 pegar todo mundo.
- detalhe: Blink + Ravage é o combo que define o herói: entra no meio do grupo e estoura o stun em área (2 a 2,4s de duração por nível) antes que alguém reaja ao cast point curto.
- combo: Blink instantâneo seguido de Ravage no nível 6 já abre vantagem numérica em qualquer luta 4v5/3v5.
- fonte: https://dota2protracker.com/builds/tidehunter-pos3-1 (timing, página "todos os brackets"); C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json (radius/duration do Ravage)

#### Aghanim's Shard (aghanims_shard)
- minuto: 23
- porque: dá Dead in the Water, que trava quem tenta fugir ou kitar e arrasta o alvo de volta pro grupo.
- detalhe: lança uma âncora que leasha o herói; se ele tentar se afastar mais de 350 de distância, cai pra 100 de movimento arrastando a âncora. Dura 10s e precisa de 4 ataques de herói pra destruir.
- contra: quem tenta fugir a pé fica travado no raio de 350, caindo pra 100 de movimento e arrastando a âncora; a duração de 10s e os 4 ataques de herói necessários pra destruir a âncora limitam por quanto tempo o efeito prende o alvo.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json (tidehunter_dead_in_the_water); rdy.gg/en/dota2/heroes/tidehunter (confirma os mesmos números citando patch 7.41e); https://dota2protracker.com/builds/tidehunter-pos3-1 (timing)

#### Aghanim's Scepter (ultimate_scepter)
- minuto: 25
- porque: transforma Gush numa onda em linha que acerta várias unidades e reduz o cooldown da habilidade.
- detalhe: vira ferramenta de grupo em vez de single target: depois do Ravage, uma leva de Gush em linha pega quem sobrou vivo ou quem já está fugindo na mesma direção.
- combo: Blink + Ravage pra travar a luta, seguido do Gush em linha do Scepter pra atingir quem escapou do raio do stun.
- fonte: https://dota2protracker.com/builds/tidehunter-pos3-1 (timing); liquipedia.net/dota2/Tidehunter e rdy.gg/en/dota2/heroes/tidehunter (efeito do Scepter sobre Gush, citando patch 7.41e)

### Situacionais
#### Vladmir's Offering (vladmir)
- minuto: 14
- porque: aura de lifesteal e dano sustenta a trilane inteira contra pressão física sem gastar regen individual.
- detalhe: dá 20% de lifesteal, 18% de dano bônus, 1 de regen de mana e 2 de armadura pra aliados em raio 1200.
- contra: trilanes físicas pesadas que tentam ganhar a lane com all-in de auto-ataque cedo.
- fonte: https://dota2protracker.com/builds/tidehunter-pos3-1 (timing aproximado; percentual de uso do site não pôde ser reconfirmado nesta revisão, fetch automatizado bloqueado com HTTP 403); dotacoach.gg/en/heroes/tidehunter/builds/offlane (lista como situacional); C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (efeito)

#### Black King Bar (black_king_bar)
- porque: Ravage e Anchor Smash têm cast point; um silence ou stun que chega primeiro cancela a iniciação inteira sem BKB.
- detalhe: imunidade a magia deixa o Tide realmente castar sua entrada e aguentar os hits físicos da resposta sem ser interrompido no meio do cast.
- contra: times com lockdown mágico em cadeia (silence/stun empilhado na linha de frente) que tentam cancelar a iniciação antes do Ravage sair.
- fonte: https://dotacoach.gg/en/heroes/tidehunter/builds/offlane (bucket "antes do min 30"); C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json (cast point do Ravage)

#### Shiva's Guard (shivas_guard)
- minuto: 33
- porque: a aura corta 45 de ataque em área e o active de -40% de movimento trava quem sobrou vivo depois do Ravage.
- detalhe: Arctic Blast causa 260 de dano mágico e slow de movimento em raio 825; Freezing Aura reduz ataque em raio 1200. Os +17 de armadura também ajudam contra carries físicos.
- contra: carries que dependem de autoataque e attack speed (ex.: agility cores que vivem de DPS sustentado) perdem a maior parte do dano sob a aura.
- fonte: https://dota2protracker.com/builds/tidehunter-pos3-1 (timing aproximado; percentual de uso do site não pôde ser reconfirmado nesta revisão, fetch automatizado bloqueado com HTTP 403); timing de item tardio consistente com api.opendota.com/api/heroes/29/itemPopularity (shivas_guard concentrado no bucket late_game); C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (efeito)

#### Refresher Orb (refresher)
- porque: reseta o cooldown de Ravage, permitindo uma segunda iniciação na mesma luta ou logo no Roshan/luta seguinte.
- detalhe: reseta todos os cooldowns de habilidades de uma vez; o item em si tem 180s de cooldown próprio.
- fonte: https://dotacoach.gg/en/heroes/tidehunter/builds/offlane (bucket "depois do min 30"); C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (efeito)

#### Scythe of Vyse (sheepstick)
- porque: Hex silencia, desarma e trava o carry ou iniciador inimigo por 2,8s, pegando quem o Ravage não travou.
- detalhe: transforma o alvo num critter indefeso com 140 de movimento, sem ataque e sem feitiço, por 2,8s; destrói ilusões na hora.
- contra: heróis-chave que ficaram fora do raio 1250 do Ravage ou já escaparam do stun antes do Tide conseguir virar o Hex neles.
- fonte: https://dotacoach.gg/en/heroes/tidehunter/builds/offlane (bucket "depois do min 30"); C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (efeito)

#### Pipe of Insight (pipe)
- porque: barreira mágica de 425 pro time inteiro em raio 1200 segura o burst de equipe logo após a iniciação.
- detalhe: também dá 8% de resistência mágica em aura pra quem está perto, cobrindo o time exposto no exato momento em que o Ravage estourou a luta.
- contra: comps com nuke de área coordenado (ex.: burst mágico em grupo) que tentam punir o time assim que ele se aglomera pra lutar.
- fonte: https://dotacoach.gg/en/heroes/tidehunter/builds/offlane (bucket "depois do min 30"); C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json (efeito)

## Roshan
Sem dado de Roshan solo.
