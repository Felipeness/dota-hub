---
id: porque-itens-sven
titulo: "Por que cada item: Sven"
heroi: Sven
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/sven.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- https://liquipedia.net/dota2/Black_King_Bar
- https://liquipedia.net/dota2/Monkey_King_Bar
- https://liquipedia.net/dota2/Cleave
- https://www.dota2.com/datafeed/herodata (hero_id=18)
---
## Power Treads (power_treads)
- porque: Treads em Força soma dano no inato e dá HP pra sobreviver a lane; é o primeiro degrau de farm do Sven.
- detalhe: Trocar pra Força desde o nível 1 aumenta o Wrath of God (que escala com Força) e dá HP extra pra aguentar trade na safelane. Sai aos 5:00-6:00 (mediana pro 5,8 min) e, junto do nível 5 com Great Cleave 3/4, o LH/min sobe de 6,5 para 9,0 nos 2 minutos seguintes.
- combo: Com Great Cleave 3/4 já limpa o small camp da safelane entre duas waves, sem precisar esperar o nível 6.
- fonte: sven.json (power_spikes, condicao_para_farmar); dota2.com/datafeed/herodata hero_id=18

## Mask of Madness (mask_of_madness)
- porque: Berserk dá +100 de velocidade de ataque e 22% de lifesteal por 6s a cada 16s: troca ouro por farm rápido e sustain na selva.
- detalhe: A silence do Berserk não pesa porque o Sven ataca, não conjura, durante ele. Contra creep o lifesteal cai pra 13,2%. Sai aos 9:30-10:00; até 10:00 os pros venceram 69% dos jogos com ele comprado nesse prazo, depois 49%.
- combo: Berserk com Great Cleave 4/4 (nível 7) limpa o ancient camp gastando só ~10-20% do HP se o God's Strength já estiver pronto.
- fonte: items.json (Berserk, Lifesteal); sven.json (power_spikes, condicao_para_farmar)

## Echo Sabre (echo_sabre)
- porque: +15 de Força e +20 de dano continuam o farm, e o slow de 100% no primeiro golpe prende quem tenta sair do seu alcance.
- detalhe: Echo Strike faz o ataque bater duas vezes; a primeira aplica 100% de slow por 0,8s, recarga de 5s por ativação. É a base do Harpoon, então o Void Stone do secret shop já serve pro upgrade depois. Sai aos 13:30-14:00; até 12:30 os pros venceram 90% dos jogos, até 14:00 74%, depois 46%.
- combo: Com o Mask of Madness ligado, o slow do Echo Strike garante que o Berserk inteiro bata no mesmo alvo.
- fonte: items.json (Echo Strike); sven.json (power_spikes)

## Blink Dagger (blink)
- porque: Blink de 1200 de alcance abre a luta: Storm Hammer, God's Strength e Warcry saem logo depois, sem precisar correr até o alvo.
- detalhe: Não acelera farm, o LH/min cai de 17,5 para 15,5 nos 2 min depois da compra: é posicionamento de luta, não item de clear. Sai aos 16:30; até 16:00 os pros venceram 80% dos jogos com ele comprado. Não pode ser usado nos 3s seguintes a levar dano de herói ou do próprio Roshan.
- combo: Blink + Storm Hammer + God's Strength + Warcry é a sequência de iniciação padrão dos pros (8,2 blinks por 10 min em jogos pro).
- fonte: items.json (Blink Dagger); sven.json (power_spikes, depois_dos_20)

## Black King Bar (black_king_bar)
- porque: Imunidade a magia de até 9s libera o Sven pra bater sem medo de hex, stun ou nuke por alguns segundos.
- detalhe: +10 de Força e +24 de dano junto da imunidade; recarga de 95s. Sai aos 21:30-22:00 (mediana pro 21,8 min); até 20:00 os pros venceram 100% dos jogos (14 de 14), até 23:00 71%, depois 42%.
- contra: Shadow Shaman (Hex), Shadow Demon (Disruption) e o Nightmare do Bane são bloqueados pelo BKB. Já o Fiend's Grip do Bane, o ultimate Doom e o Winter's Curse da Winter Wyvern atravessam a imunidade e continuam acontecendo mesmo com BKB ativo.
- combo: Contra dois ou mais disables de alvo único, o guia local recomenda comprar o BKB antes do Crystalys, invertendo a ordem normal.
- fonte: sven.json (guia.evitar_quando, depois_dos_20); liquipedia.net/dota2/Black_King_Bar; busca web confirmando Doom e Winter's Curse atravessando BKB

## Crystalys (lesser_crit)
- porque: +32 de dano e 30% de chance de 160% é o primeiro crit, ponte pro Daedalus chegar mais rápido no inventário.
- detalhe: Crítico não funciona contra construções, então não ajuda a tirar torre. Sai aos 24:30 (mediana pro 25,2 min) e vira componente do Daedalus sem perder o investimento.
- combo: Com o Harpoon puxando o alvo pro alcance de ataque, o crit garante o dano que fecha a kill.
- fonte: items.json (Critical Strike); sven.json (power_spikes)

## Harpoon (harpoon)
- porque: Draw Forth puxa o alvo pra perto, então ninguém escapa do alcance corpo a corpo do Sven.
- detalhe: Puxa até 35% da distância entre você e o alvo, ou garante distância de melee se você for corpo a corpo; alcance de cast 700, recarga 19s. Sai aos 27:30 (mediana pro) com +25 de Força e +10 de agilidade e inteligência de bônus.
- combo: Puxão + Storm Hammer + crit do Crystalys/Daedalus é a sequência de kill do meio pro fim de jogo.
- fonte: items.json (Draw Forth); sven.json (power_spikes)

## Daedalus (greater_crit)
- porque: +88 de dano e 30% de chance de 225% transforma o Sven em quem mata herói em poucos golpes.
- detalhe: Crítico não funciona contra construções, igual o Crystalys. Sai aos 28:30; até 28:00 os pros venceram 84% dos jogos com ele comprado, sem ele só 34%.
- combo: Com o God's Strength ligado, um único crit de 225% pode valer mais da metade do HP de um herói squishy.
- fonte: items.json (Critical Strike); sven.json (power_spikes)

## Satanic (satanic)
- porque: 25% de lifesteal (175% por 6s no Unholy Rage) é o primeiro sustain real do Sven numa luta prolongada.
- detalhe: O cast de Unholy Rage aplica um basic dispel, então limpa slows e debuffs básicos no momento de entrar na luta. Sai muito tarde (mediana pro 35,7 min); até 33:00 os pros venceram 87% dos jogos com ele comprado.
- contra: debuffs removíveis por basic dispel (slows comuns, alguns binds fracos): o cast do Unholy Rage já limpa isso ao entrar.
- combo: God's Strength + Unholy Rage é o pico de dano e sustain do Sven; depois dele a vitória pro cai pra 48,9% em pub se o jogo passar de 35 min, então o guia local recomenda fechar com Roshan e high ground em vez de farmar mais.
- fonte: items.json (Unholy Rage, Dispel Type); sven.json (power_spikes, itens_core)

## Swift Blink (swift_blink)
- porque: Mesmo alcance de blink, mas sai com +35 de agilidade e fase de movimento por 6s: ajuda a perseguir ou fugir sem perder o reposicionamento do Blink.
- detalhe: 1200 de alcance, +40% de velocidade fásica e +35 de agilidade por 6s ao usar. Sai junto do Satanic, perto dos 35:30, quando o inventário de 6 slots fecha.
- fonte: items.json (Swift Blink); sven.json (power_spikes)

## Monkey King Bar (monkey_king_bar)
- porque: 80% de chance de acerto garantido resolve evasão; sem ele, Butterfly ou Windrun fazem o Sven errar o ataque inteiro.
- detalhe: +50 de dano, +50 de velocidade de ataque e, desde o 7.41, +50 de alcance só pra heróis melee. O Pierce ainda soma 70 de dano mágico por acerto. D2PT mostra 24% das builds aos 37 min; pros 21% (28 jogos), mediana 37:30.
- contra: Butterfly, Windranger (Windrun) e Phantom Assassin (Blur): a evasão delas é furada em 80% dos ataques pelo Pierce.
- fonte: sven.json (itens_situacionais); items.json (Pierce); busca web confirmando o alcance melee do 7.41

## Aghanim's Shard (aghanims_shard)
- porque: Warcry vira raio de 900, não pode ser dispelado e dá 300 de barreira física pro time: barato e bom quando é você quem inicia a luta.
- detalhe: 1400 de ouro. D2PT mostra 27% das builds aos 38 min; pros 37% (50 jogos), mediana 37:20.
- combo: Junto do Blink, o Warcry cobre o time inteiro na iniciação, não só quem já estava perto antes do cast.
- fonte: sven.json (itens_situacionais)

## Aghanim's Scepter (ultimate_scepter)
- porque: Storm Hammer ganha 25% de alcance e, no alt-cast, você viaja junto do martelo até 1900 de distância com dispel básico: alcança quem está fora do alcance normal.
- detalhe: 4200 de ouro. Raro no 7.41 atual: D2PT 1,9% aos 38 min; pros 11% (15 jogos), mediana 52:50. Atinge alvos invisíveis e invulneráveis.
- fonte: sven.json (itens_situacionais)

## Assault Cuirass (assault)
- porque: +10 de armadura pro Sven e -5 no time inimigo compensam quando o time rival é todo físico.
- detalhe: 5125 de ouro, aura de 1200 de raio, +30 de velocidade de ataque também pros aliados. D2PT 3,2% aos 38 min; pros 9% (12 jogos) aos 36:20.
- contra: time inimigo físico e sem Silence: a redução de armadura dobra o efeito nas lutas em grupo.
- fonte: sven.json (itens_situacionais); items.json (Assault Aura)

## Butterfly (butterfly)
- porque: 35% de evasão segura o Sven contra heróis físicos em jogo longo, quando já não há mais upgrade de dano óbvio pra comprar.
- detalhe: 5450 de ouro, +30 de agilidade e +30 de dano. D2PT 2,4% aos 41 min; pros 3% (4 jogos), mediana 44:30.
- contra: Axe, Ursa, Drow Ranger, Sniper e Gyrocopter: todos dependem de dano físico, que a evasão de 35% reduz.
- fonte: sven.json (itens_situacionais); items.json (evasão, Butterfly)

## Nullifier (nullifier)
- porque: Dispel contínuo de 4s tira Ghost Scepter e Glimmer Cape do inimigo bem na hora que ele tenta escapar.
- detalhe: 4350 de ouro (Splintmail no lugar do Helm desde o 7.41), pode ser usado em unidade invulnerável. D2PT 1,4% aos 42 min; pros 3% (4 jogos).
- contra: Ghost Scepter, Glimmer Cape e Eul's Scepter: todos marcados como dispelláveis por dispel básico (items.json), então o dispel contínuo do Nullifier remove a proteção assim que ela é ativada. Aeon Disk não entra aqui: o Combo Breaker aplica um dispel forte nele mesmo, mas não há fonte confirmando se o buff resultante cai para um dispel básico como o do Nullifier, então ficou de fora.
- fonte: sven.json (itens_situacionais); items.json (Nullify, Ghost Scepter, Glimmer Cape, Eul's Scepter)

## Silver Edge (silver_edge)
- porque: Break desliga a passiva do inimigo por 5s bem na hora que ele tenta usar o que o torna perigoso.
- detalhe: 5700 de ouro, +70 de dano, Shadow Walk de invisibilidade com +20% de velocidade (7.41f). Atacar pra sair da invisibilidade dá 300 de dano físico bônus e aplica o Break.
- contra: heróis que dependem de passiva para serem perigosos (evasão, roubo de vida, bônus condicional): o Break de 5s desliga isso no momento do ataque surpresa.
- fonte: sven.json (itens_situacionais); items.json (Shadow Walk); busca web confirmando que Break desliga passivas

## Abyssal Blade (abyssal_blade)
- porque: Bash de 25% em golpe corpo a corpo soma pick-off ao dano que o Sven já tem, bom em jogo muito longo.
- detalhe: 6250 de ouro, +30 de Força; o Overwhelm (stun ativo) atravessa debuff immunity por 1,6s. D2PT 0,7% aos 45 min; pros 5% (7 jogos), mediana 48:30.
- contra: Spirit Breaker, Faceless Void, Slardar e Kez (em modo Sai) não sofrem o Bash deste item, segundo o arquivo oficial do item; o guia local não cita esse matchup específico, então vale como alerta de mecânica, não de winrate.
- fonte: sven.json (itens_situacionais); items.json (notas do item, lista de heróis sem Bash)

## Overwhelming Blink (overwhelming_blink)
- porque: Mesmo blink de 1200 de alcance do Dagger, mas chega batendo em área: serve quando o time inimigo agrupa antes de você entrar.
- detalhe: 6800 de ouro, dano em área (100 + 50% da Força, mais 100% ao longo do tempo) e slow de velocidade e de ataque por 6s na chegada. D2PT 1,4% aos 35 min; pros 3% (4 jogos).
- fonte: sven.json (itens_situacionais); items.json (Overwhelming Blink)

## Moon Shard (moon_shard)
- porque: +140 de velocidade de ataque de uma vez é DPS extra pra jogo muito longo, sem gastar um slot de inventário depois de consumido.
- detalhe: 4000 de ouro, consumível (1 uso; até 60 de velocidade de ataque permanece depois). D2PT 1,7% aos 43 min; pros 12% (16 jogos), mediana 55:50.
- fonte: sven.json (itens_situacionais); items.json (Consume)

## Magic Wand (magic_wand)
- porque: Sustain barato na lane, carrega com todo spell visível do inimigo e devolve HP/mana na hora que precisa.
- detalhe: Até 20 cargas, 15 de HP e mana cada. D2PT 44% das builds (mediana 4:55); pros 46% (mediana 4:57, vitórias 6:56).
- fonte: sven.json (itens_situacionais); items.json (Energy Charge)
