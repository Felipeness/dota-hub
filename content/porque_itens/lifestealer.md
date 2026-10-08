---
id: porque-itens-lifestealer
titulo: "Por que cada item: Lifestealer"
heroi: Lifestealer
patch: 7.41
fontes:
- app/public/data/herois/lifestealer.json
- dota-imortal/data/opendota/items.json
- dota-imortal/work/ref/heroi-lifestealer/liq_lifestealer.wiki
- https://liquipedia.net/dota2/Lifestealer
---

## Phase Boots (phase_boots)
- porque: É a bota mais rápida e mais barata de fechar, e a fase evita colisão de creep no pull e no camp.
- detalhe: Custa 1.450 (Boots + Blades of Attack + Chainmail) e dá +18 de dano, +4 de armadura e ~370 de velocidade por 3s na ativa. Mediana de 5,8 min nos pros do 7.41, e quem fecha depois de 7:00 ganha muito menos (29,4% contra 47,1% de vitória).
- combo: Com nível 4-5 e Feast, o grande do pull cai de 24s para 18s e o pequeno para 14s, quase sem perder vida.
- fonte: lifestealer.json (guia.power_spikes, Phase Boots 5:50); items.json (phase_boots).

## Magic Wand (opcional) (magic_wand)
- porque: Carga grátis de HP/mana sempre que o inimigo gasta feitiço perto, útil pra sobreviver trade de lane.
- detalhe: 460 de ouro (Magic Stick + 2 Iron Branches). 32% dos pros compram, mediana 7,9 min, normalmente depois do último componente da Phase Boots.
- fonte: lifestealer.json (guia.itens_core).

## Sacred Relic (peça da Radiance) (relic)
- porque: Maior dano por ouro antes da Radiance, e já corta a limpeza de camp em ~30% sozinho.
- detalhe: 3.400 de ouro, +55 de dano. Mediana de 12,8 min nos pros (12,0-14,2). É item de secret shop: mande o courier com antecedência.
- combo: Sozinha com Talisman of Evasion (1.300, 2-3 min depois) forma a Radiance sem receita.
- fonte: lifestealer.json (guia.power_spikes, Sacred Relic 12:45); items.json (relic, radiance).

## Radiance (radiance)
- porque: É o maior salto do herói: queima a wave e o camp sozinho enquanto farma em outro lugar.
- detalhe: 4.700 de ouro (Relic + Talisman), +55 de dano, 60 de dano/s em 650 de raio e 25% de evasão. Nos pros, o ritmo sobe de 9,4 para 13,6 last hits por minuto e de 523 para 718 de ouro/min. A wave morre em ~6s, o grande em ~7s e o ancient em 11-13s.
- combo: Fechar até 15:30 deu 67,8% de vitória (82 de 121 jogos); depois de 15:30 cai pra 25,8% (31 de 120). O minuto de compra é decidido, em boa parte, pelo ouro aos 10-12 min (correlação de -0,79).
- fonte: lifestealer.json (guia.power_spikes, Radiance 15:30; resumo).

## Helm of Iron Will, Gloves of Haste e Blades of Attack (peças do Armlet) (helm_of_iron_will)
- porque: São as 3 peças que viram o Armlet logo depois da Radiance, sem rota própria de farm.
- detalhe: Helm (975) mediana 17,6 min; Gloves (450) e Blades (450) saem 1-2 min depois. Juntas com a receita (625) fecham o Armlet em 2.500.
- combo: As 3 peças + receita = Armlet of Mordiggian.
- fonte: lifestealer.json (guia.itens_core); items.json (armlet.components).

## Armlet of Mordiggian (armlet)
- porque: O dreno de vida do toggle quase não pesa porque o Feast (cura por ataque) cobre boa parte dele no camp.
- detalhe: Ligado dá +35 de dano, +25 de força e +4 de armadura, mas drena 45 de vida/s (não mata, só reduz o HP até 1). Mediana de 19,1 min (77% dos pros) e 109-111 toggles por partida: liga pra farmar e bater, desliga pra andar.
- combo: Toggle ligado + Feast no camp = quase sem custo de vida real pra limpar.
- fonte: lifestealer.json (guia.power_spikes); items.json (armlet); liq_lifestealer.wiki (Feast cura por % do HP máximo do alvo, independente de lifesteal).

## Yasha (yasha)
- porque: Velocidade de ataque e de movimento baratas, no minuto em que os creeps também ficam mais fortes.
- detalhe: 2.100 de ouro, +16 de Agilidade, +15 de velocidade de ataque e +10% de velocidade de movimento. Mediana de 22,4 min, bem quando os neutros ganham +30 de vida e +3 de dano (22:30).
- combo: Vira Sange and Yasha ou Manta Style.
- fonte: lifestealer.json (guia.power_spikes, Yasha e upgrade de creeps 22:30); items.json (yasha).

## Sange and Yasha (ou Manta Style) (sange_and_yasha)
- porque: A escolha depende do disable do inimigo: S&Y resiste a stun, Manta dispersa silence e slow.
- detalhe: Sange and Yasha (4.200): +16 Força, +16 Agilidade, +20 de velocidade de ataque, +12% de velocidade, 16% de status resistance, 30% de slow resistance e +16% de amplificação de cura (melhora Feast e Open Wounds). Manta Style (4.650, Yasha + Diadem no 7.41): 2 imagens, +26 de Agilidade e dispersa debuff ao ativar.
- contra: Stun em cadeia → S&Y (status resistance). Silence ou slow que se dispersa → Manta (dispel + 2 imagens pra confundir o foco).
- combo: A amplificação de cura do S&Y empilha com Feast e Open Wounds, então ele sustenta mais em luta prolongada.
- fonte: lifestealer.json (guia.power_spikes, Sange and Yasha ou Manta Style 24:20); items.json (sange_and_yasha, manta).

## Aghanim's Scepter (ultimate_scepter)
- porque: Baixa o cooldown do Infest pra 20s e deixa usá-lo em herói inimigo, não só em creep.
- detalhe: 4.200 de ouro, +10 em todos os atributos e +175 de vida/mana. Infest ganha alcance maior, regeneração dobrada e passa a poder ser usado num herói inimigo por 4s (ataca por dentro). Mediana de 30,5 min; 63% dos builds do 7000+ chegam nele.
- combo: Infest num creep aliado ou neutro pra cruzar a jungle e escapar, ou num herói inimigo por 4s pra bater por dentro. Não funciona em Roshan nem no Tormentor, os dois são imunes a Infest.
- fonte: lifestealer.json (guia.power_spikes, Aghanim's Scepter 30:45); liq_lifestealer.wiki (Infest, Roshan e Tormentor não podem ser infestados).

## Assault Cuirass (assault)
- porque: A aura de -5 de armadura soma direto ao seu dano físico, inclusive contra Roshan.
- detalhe: 5.125 de ouro, +10 de armadura pra você e aura de -5 de armadura nos inimigos próximos. Mediana de 32 min (32% dos pros).
- combo: A aura reduz a armadura de Roshan (~40) e dos heróis inimigos, o que soma ao seu dano físico; Basher aos 34 min e Abyssal Blade aos 38 completam o combo de luta.
- fonte: lifestealer.json (guia.power_spikes, Assault Cuirass 32:15).

## Skull Basher e Abyssal Blade (basher)
- porque: Trava o alvo pra ele não fugir enquanto o Feast e o Open Wounds fazem o trabalho.
- detalhe: Skull Basher (2.875, +30 de dano e +10 de Força) tem mediana de 33,7 min (49% dos pros). Abyssal Blade (6.250, +35 de dano, +30 de Força, 30% de slow resistance, +16% de amplificação de cura, 1,6s de stun em alcance corpo a corpo) fecha aos 37,8 min em 34% dos pros.
- contra: Não ativa o bash em Spirit Breaker, Faceless Void, Slardar nem Kez em modo Sai.
- fonte: lifestealer.json (guia.power_spikes); items.json (basher, abyssal_blade).

## Black King Bar (black_king_bar)
- porque: Raramente vale o slot porque o próprio Rage (3-6s de debuff immunity) já faz boa parte do papel.
- detalhe: 4.050 de ouro, Avatar dá imunidade a magia e dispel básico por 9/8/7s (3 usos, a duração cai a cada uso) e +10 de Força. Só 5% dos 7000+ e 23% dos pros compram (mediana 35 min).
- contra: Inimigo com 3 ou mais stuns/silences em cadeia. Mas nem o Rage nem o BKB atravessam Doom ou Black Hole.
- fonte: lifestealer.json (guia.itens_situacionais); items.json (black_king_bar); constants_abilities.json (life_stealer_rage).

## Monkey King Bar (monkey_king_bar)
- porque: Sem ele, o ataque normal simplesmente erra contra evasão alta.
- detalhe: 5.000 de ouro, +50 de dano, +50 de velocidade de ataque e 80% de chance de atravessar evasão com +70 de dano mágico bônus. 13-20% dos builds, por volta dos 36 min.
- contra: Phantom Assassin, Windranger, Butterfly ou um Radiance do time inimigo (qualquer fonte de evasão alta).
- fonte: lifestealer.json (guia.itens_situacionais); items.json (monkey_king_bar).

## Nullifier (nullifier)
- porque: Dispela e prende o alvo que vive escapando com item de fuga.
- detalhe: 4.350 de ouro, dispel básico contínuo, silence de 4s e slow de 10% no alvo. 17-20% dos builds, por volta dos 40-43 min.
- contra: Inimigo com Ghost Scepter, Eul's Scepter, Glimmer Cape, Lotus Orb ou Aeon Disk.
- fonte: lifestealer.json (guia.itens_situacionais); items.json (nullifier).

## Eye of Skadi (skadi)
- porque: Corta a cura do inimigo bem na hora que ele mais precisa dela, em troca de atributos puros.
- detalhe: 5.900 de ouro, +35 em todos os atributos; cada ataque reduz a restauração de vida do alvo em 50% por 3s, além de slow e -20% de velocidade de ataque. 7% dos builds, 36-40 min.
- contra: Inimigo com muita cura ou regeneração.
- fonte: lifestealer.json (guia.itens_situacionais); items.json (skadi).

## Linken's Sphere (sphere)
- porque: Bloqueia de graça o primeiro feitiço de alvo único que cairia nele.
- detalhe: 4.800 de ouro, Spellblock passivo (1 vez a cada 14s) e +16 em todos os atributos. Só 2% dos 7000+ compram.
- contra: Doom, Bane, Sleep ou Hex, em lineup inimiga sem Black Hole (que ignora o bloqueio).
- fonte: lifestealer.json (guia.itens_situacionais); items.json (sphere).

## Soul Ring (soul_ring)
- porque: Mana barata pra não faltar Rage, Open Wounds ou Infest no meio da jungle.
- detalhe: 805 de ouro, converte vida em 170 de mana por 10s (perde o que não usar). 13-15% dos builds, 18,3-18,9 min.
- fonte: lifestealer.json (guia.itens_situacionais); items.json (soul_ring).

## Blink Dagger (blink)
- porque: Sem iniciação própria, é ele quem precisa fechar distância quando o time não tem abertura.
- detalhe: 2.250 de ouro, teleporte instantâneo de 1.200 de alcance. Raro (3-5% dos builds, 42-50 min); o Swift Blink aparece em 6% dos inventários finais do 7000+.
- fonte: lifestealer.json (guia.itens_situacionais).

## Heart of Tarrasque (heart)
- porque: Vida extra de teamfight só depois que o build físico (Armlet, Assault) já está pronto.
- detalhe: 5.100 de ouro base (o guia local registra 5.300 pós-7.41f), +40 de Força e regeneração de 1,5% da vida que falta por segundo. Raro no herói (0,2% dos builds).
- fonte: lifestealer.json (guia.itens_situacionais); items.json (heart).

## Satanic (satanic)
- porque: Não é prioridade agora: o 7.41f deixou o lifesteal mais fraco e a recarga mais longa.
- detalhe: Unholy Rage sobe o lifesteal passivo pra 175% por 6s. O guia local registra queda de 30% pra 25% de lifesteal passivo (15% em creep) e recarga de 40s no 7.41f. Só 1,3% dos 7000+ e 1% dos pros compram.
- fonte: lifestealer.json (guia.itens_situacionais).

## Hand of Midas (hand_of_midas)
- porque: Evitar: atrasa o timing da Radiance, que é o item que decide o jogo do herói.
- detalhe: 2.200 de ouro, dá ouro não-confiável (sem o bounty normal do creep) e não compartilha experiência do Transmute. 1,8% dos builds (13,9 min) e 3% dos pros (13,2 min). No único jogo perdido do Satanic com o herói, o Midas saiu aos 11,6 min e não teve Radiance na partida.
- fonte: lifestealer.json (guia.itens_situacionais); items.json (hand_of_midas).

## Mask of Madness (mask_of_madness)
- porque: Evitar: o Berserk te silencia por 6s, travando Rage e Open Wounds bem na hora que você mais precisa deles.
- detalhe: 1.900 de ouro, Berserk dá +100 de velocidade de ataque e slow resistance, mas reduz 7 de armadura e silencia por 6s. Nenhum dos 259 jogos pro com o herói comprou, e só 1 em 2.460 partidas do OpenDota em todos os ranks.
- fonte: lifestealer.json (guia.itens_situacionais); items.json (mask_of_madness).
