---
id: ficha-shredder
titulo: "Timbersaw"
heroi: Timbersaw
patch: 7.41
posicoes: [3]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_com_suporte.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/early_rosh_pro.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/late_rosh_pro.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/1win/hub.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/falcons/analise.md
- C:/Users/felip/Desktop/dota-tier1/work/equipes/lgd/analise.md
- C:/Users/felip/Desktop/dota-tier1/work/equipes/yandex/analise.md
- C:/Users/felip/Desktop/dota-tier1/work/equipes/aurora/analise.md
- C:/Users/felip/Desktop/dota-tier1/work/equipes/xtreme/analise.md
- https://api.opendota.com/api/heroes/98/itemPopularity
- https://dotacoach.gg/heroes/timbersaw/builds/offlane
- https://dotacoach.gg/en/heroes/counters/timbersaw
---

## Resumo
Timbersaw é um offlaner tanque de dano puro: Whirling Death e Chakram são dano puro e ignoram armadura, e Whirling Death ainda reduz o atributo primário do herói inimigo que ela acerta; Reactive Armor acumula armadura e regen a cada ataque que ele recebe, então ele sobrevive bem em luta prolongada contra heróis de força corpo a corpo (dotacoach, seção de matchups, cita como "bom contra": Tidehunter, por dano puro vencer a troca de lane e a armadura dele não fazer efeito contra o Anchor Smash; Wraith King, porque os feitiços cortam os atributos dele e travam a Reincarnation; Kunkka, porque Timbersaw tolera o dano físico dele e pressiona de volta com dano mágico; Axe, porque os feitiços de Timbersaw têm mais alcance e o Timber Chain escapa da iniciação dele). No 7.41 pro ele é jogado quase só de pos 3, mas com uso desigual entre os times (dado local, Atlas tier1): 1win 16 de 16 jogos em pos 3 (31% de vitória); Falcons (AMMAR_THE_F, roster anterior à TI) 17 jogos em pos 3 (76%); Yandex, só o AMMAR_THE_F no roster atual (pós-TI, n=24) tem 4 jogos de Timbersaw em pos 3, dentro de um total de 7 do time inteiro (DM + AMMAR_THE_F + Noticed) no período completo; LGD (Wisper) 13 de 15 jogos do time em pos 3 e 2 em pos 2. Aurora e Xtreme também registraram Timbersaw em pos 3 no período completo (16 e 8 jogos), mas em nenhum dos dois casos ele aparece no pool pós-TI do offlaner atual do time (Ws` na Aurora, zeal na Xtreme), então não dá para confirmar que ele segue sendo pick corrente dessas duas equipes. Ele é fraco contra disable em sequência e silence global (Silencer, Grimstroke, Faceless Void: dotacoach "bad against") porque Whirling Death, Timber Chain e Chakram não ignoram Black King Bar inimigo (bkbpierce: No nas constantes oficiais).

## Pos 3 (offlane)
- quando pegar: lane dura ou contra heróis de força corpo a corpo que ele troca bem (dano puro ignora armadura, Reactive Armor acumula no ataque que recebe); evite se o time inimigo já tem 2+ disables em sequência ou um Silencer, porque o combo dele depende de lançar feitiço (dotacoach, lista "bad against").
- itens iniciais: tango, magic_stick, gauntlets, branches, ward_observer

### Build
#### Soul Ring (soul_ring)
- porque: dá mana de sobra pra gastar Whirling Death e Timber Chain sem secar.
- detalhe: +6 de força, +2 de armadura e converte vida em 170 de mana por 10 s. Os dois feitiços de wave clear custam 60-100 de mana cada, e sem reserva o offlaner fica sem jogo na lane.
- fonte: items.json (soul_ring); dotacoach (heroes/timbersaw/builds/offlane, "Early Game")

#### Bracer (bracer)
- porque: força e vida baratas pra não morrer de troca na lane antes do Soul Ring compensar.
- detalhe: +5 força, +50 de vida, +0,75 de regen. Componente comum de abertura em offlane que precisa aguentar.
- fonte: items.json (bracer); dotacoach (heroes/timbersaw/builds/offlane, "Early Game")

#### Arcane Boots (arcane_boots)
- porque: mais mana pro combo e Replenish pro time, já que o herói vive de gastar feitiço.
- detalhe: +125 de mana, +0,25 de regen e uma carga de Replenish (150 de mana em área) pro time. No agregado do OpenDota (hero 98), Arcane Boots (id 180) é a bota dominante do herói: 83 compras em early game e 4 em mid game, contra 13 em early e nenhuma registrada em mid/late de Power Treads (id 63). Ou seja, Power Treads não é uma alternativa relevante nos dados: Arcane Boots é o padrão.
- fonte: items.json (arcane_boots); dotacoach (heroes/timbersaw/builds/offlane, "Early Game"); OpenDota itemPopularity (hero 98, early_game_items e mid_game_items, ids 63 e 180)

#### Kaya (kaya)
- porque: amplifica o dano puro de Whirling Death e Chakram.
- detalhe: +16 de inteligência, +10% de amplificação de feitiço, +30% de regen de mana. É a metade "feitiço" do Kaya and Sange que vem depois.
- fonte: items.json (kaya); dotacoach (heroes/timbersaw/builds/offlane, "Core Items")

#### Consecrated Wraps (consecrated_wraps)
- porque: barreira de dano que absorve o burst físico que mais o ameaça.
- detalhe: +250 de vida, +15% de resistência mágica, acumula stack a cada 3 s e, ao levar dano de herói, consome os stacks pra um escudo de até 360 de dano por 7 s. Junta com Reactive Armor (que já dá armadura e regen a cada ataque recebido) pra aguentar sequência de autoataque.
- combo: tomar dano de herói com os 3 stacks prontos devolve 360 de barreira, exatamente o tipo de troca que Reactive Armor também recompensa.
- fonte: items.json (consecrated_wraps); dotacoach (heroes/timbersaw/builds/offlane, "Core Items")

#### Kaya and Sange (kaya_and_sange)
- porque: junta amplificação de feitiço com força e resistência a slow, sem perder o que o Kaya já dava.
- detalhe: +16 força, +16 inteligência, +12% amplificação de feitiço, +25% resistência a slow, +20% de cura recebida, +25% de redução de custo de mana. A resistência a slow ajuda a manter o Timber Chain disponível como fuga mesmo sob pressão.
- fonte: items.json (kaya_and_sange); dotacoach (heroes/timbersaw/builds/offlane, "Core Items")

#### Aghanim's Scepter (ultimate_scepter)
- porque: deixa o Chakram mais forte sem precisar de mais um item de dano.
- detalhe: +10 em todos os atributos, +175 de vida e mana, e o upgrade dá +20 de dano por segundo ao Chakram (de 50/75/100 para 70/95/120), segundo as constantes oficiais da habilidade (shredder_chakram_2, scepter_bonus_damage).
- fonte: items.json (ultimate_scepter); constants_abilities.json (shredder_chakram_2); dotacoach (heroes/timbersaw/builds/offlane, "Core Items")

#### Shiva's Guard (shivas_guard)
- porque: soma armadura com o Reactive Armor e trava o carry físico que mais o ameaça.
- detalhe: +17 de armadura e a Freezing Aura tira 45 de velocidade de ataque de todo inimigo em 1200 de raio; o Arctic Blast ainda faz 260 de dano mágico e -40% de velocidade de movimento em área.
- contra: carries de autoataque puro, como Ursa (que de outro modo tira os stacks de Reactive Armor com Fury Swipes e o explode antes da cura, segundo o dotacoach).
- combo: Arctic Blast antes do Chakram empilha dano em área mais o slow, segurando o grupo pra o resto da luta.
- fonte: items.json (shivas_guard); dotacoach (heroes/timbersaw/builds/offlane, "Core Items" e "counters/timbersaw")

### Situacionais
#### Blink Dagger (blink)
- porque: fecha a iniciação com o Timber Chain, mas não é unanimidade: só sai em metade dos jogos.
- detalhe: 1200 de alcance, 3 s de recarga após levar dano de herói. Atenção: o dado local do Atlas tier1 é por jogador/posição, não filtrado por herói, então os números abaixo descrevem o offlaner da equipe em geral (qualquer herói que ele jogue), não especificamente as partidas de Timbersaw. Mesmo assim servem de referência de janela: o pos 3 da Falcons (AMMAR_THE_F, roster anterior à TI) comprava Blink em 49% dos jogos, aos 24,3 min em média (média das 12 equipes analisadas: 67% dos jogos); o pos 3 da LGD (Wisper) compra Blink em 82% das partidas (média 67%), sem minuto médio específico de Blink registrado na fonte (o minuto de 26,8 que a fonte dá para esse jogador é do BKB, não do Blink).
- fonte: items.json (blink); C:/Users/felip/Desktop/dota-tier1/work/equipes/falcons/analise.md; C:/Users/felip/Desktop/dota-tier1/work/equipes/lgd/analise.md

#### Scythe of Vyse (sheepstick)
- porque: trava o disable ou a fuga do inimigo antes que ele o pegue primeiro, e destrói ilusão na hora.
- detalhe: Hex de 2,8 s que silencia, desarma e muda a velocidade do alvo pra 140; destrói ilusões instantaneamente.
- contra: Batrider (hexar antes do Napalm/Lasso, que do contrário gastam a mobilidade dele e o arrastam pra perto, segundo o dotacoach), e qualquer dono de ilusão (Naga Siren, Phantom Lancer, Chaos Knight, Meepo), que já perdem pra Whirling Death e Chakram em área.
- combo: Hex no dono da ilusão principal some com o exército dela de uma vez; Chakram limpa o resto.
- fonte: items.json (sheepstick); dotacoach (heroes/timbersaw/builds/offlane, "Late Game"; counters/timbersaw)

#### Heaven's Halberd (heavens_halberd)
- porque: desarma o carry de autoataque que mais o machuca.
- detalhe: +25% de evasão e Disarm ativo de 3,5 s que impede o alvo de atacar.
- contra: Ursa (cujo Fury Swipes e burst físico o matam antes da Reactive Armor compensar, segundo o dotacoach).
- fonte: items.json (heavens_halberd); dotacoach (heroes/timbersaw/builds/offlane, "Situational Items"; counters/timbersaw)

#### Black King Bar (black_king_bar)
- porque: sobrevive ao disable em sequência que o impede de lançar feitiço.
- detalhe: imunidade a feitiço por tempo decrescente a cada compra adicional. Atenção: BKB não torna Whirling Death, Timber Chain nem Chakram capazes de atingir um inimigo com BKB (todas marcadas "bkbpierce: No" nas constantes oficiais), então o item serve pra ele sobreviver, não pra furar o BKB do adversário.
- contra: times com disable ou burst em sequência citados pelo dotacoach como counters: Faceless Void (Chronosphere o prende antes de usar o Timber Chain), Templar Assassin (Refraction bloqueia o harass dele e o burst dela o mata antes dos itens de defesa), Grimstroke (Soulbind trava a fuga pelo Timber Chain).
- fonte: constants_abilities.json (shredder_whirling_death, shredder_timber_chain, shredder_chakram); dotacoach (heroes/timbersaw/builds/offlane, "Situational Items"; counters/timbersaw)

#### Pipe of Insight (pipe)
- porque: resolve lineup de dano mágico pesado que o deixa sem regen pra sustentar a Reactive Armor.
- detalhe: barreira de 425 de dano em área por 8 s e 8% de resistência mágica em aura pro time.
- contra: Leshrac (dano mágico constante que, segundo o dotacoach, ultrapassa a regen dele e empurra torre mais rápido do que ele aguenta).
- fonte: items.json (pipe); dotacoach (heroes/timbersaw/builds/offlane, "Situational Items"; counters/timbersaw)

## Roshan
Sem dado de Roshan solo: Timbersaw não aparece em nenhum registro classificado como `solo_puro`, `solo_ajuda_curta` ou `solo_com_suporte` em `dota-roshan-solo/data/solos.json`, e não aparece em `resumo_por_heroi.json`, `resumo_com_suporte.json`, `early_rosh_pro.json` nem `late_rosh_pro.json`. Ele participa de mortes de Roshan em time: aparece como principal dano em 21 registros de `solos.json`, mas todos classificados como `time` (16) ou `finalizacao` (5), nunca como solo. Ou seja, o dado local sustenta que ele não solo Roshan, mas não que ele esteja ausente de toda a base de replay de Roshan.
