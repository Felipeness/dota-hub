---
id: porque-itens-morphling
titulo: "Por que cada item: Morphling"
heroi: Morphling
patch: 7.41
fontes:
- app/public/data/herois/morphling.json
- dota-imortal/data/opendota/items.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-roshan-solo/data/abilities.json
- https://liquipedia.net/dota2/True_Strike
- https://www.dota2.com/datafeed/patchnotes?version=7.41e (oficial Valve: Butterfly e Satanic)
- https://www.dota2.com/datafeed/patchnotes?version=7.41f (oficial Valve: Manta Style e Daedalus)
---

## Power Treads (power_treads)
- porque: Fecha aos 6:00 e dá troca de atributo pra bater em Agilidade e aguentar em Força quando é iniciado.
- detalhe: Pros fecham o Treads aos 6:00 em 63 de 63 jogos; o LH/min sobe de 5,8 pra 9,0 depois dele. Fica em Agilidade pra farmar e dar last hit, e troca pra Força no instante que alguém inicia, porque cada ponto de Força vale 22 de vida (contra 1 de dano por ponto de Agilidade). É o primeiro item e não compete por slot com o resto da build.
- combo: Com Attribute Shift 2/4 (nível 4, 8 pontos de atributo por segundo) a troca já é rápida: liga Força ao ver o inimigo avançar, sem perder tempo de ataque.
- fonte: morphling.json (itens_core.power_treads, power_spikes)

## Morbid Mask (lifesteal)
- porque: Primeiro item que te deixa ficar na jungle sem sangrar vida: abre o camp pequeno e o médio.
- detalhe: Fecha por volta de 8:10 nos pros (63 de 63); antes disso o LH/min é 6,8 e depois sobe pra 10,8. O camp grande ainda fica com vida líquida negativa nesse ponto (o lifesteal de 25% em creep não cobre o dano recebido sem o Vladmir's). É o item que abre a rota de farm fora da lane.
- combo: Vira componente do Vladmir's aos ~10:42: o lifesteal de creep cai pra 12%, mas o item soma +18% de dano base e +armadura, o que muda a conta do camp médio pra positivo.
- fonte: morphling.json (itens_core.lifesteal, condicao_para_farmar)

## Vladmir's Offering (vladmir)
- porque: Deixa o camp grande perto de zero de vida líquida e libera o ciclo completo de farm fora da lane.
- detalhe: Fecha por volta de 10:42 nos pros (54 de 63 jogos); LH/min sobe de 9,0 pra 11,2 depois dele. A Morbid Mask vira componente (lifesteal de creep cai de 25% pra 12%, mas o item soma +18% de dano base, +3 de armadura e +1,2 ponto de lifesteal líquido). O ancient só fica positivo depois, com Yasha e conversão de Força.
- combo: Ciclo completo de farm: pull pequeno, pull grande, médio, lago, large_2. Sem o Vladmir's, o camp grande custa 220 a 402 de vida sem devolver nada (modelo do guia local).
- fonte: morphling.json (itens_core.vladmir, condicao_para_farmar)

## Yasha (yasha)
- porque: É o componente mais barato do Manta e já dá velocidade de ataque pra acelerar o farm antes dele.
- detalhe: Fecha por volta de 14:45 nos pros; LH/min sobe de 11,4 pra 13,4 depois. Dá +16 de Agilidade, +15 de velocidade de ataque e +10% de movimento sem gastar mana nem ter recarga. Segurar o Yasha solto depois de 17:00 saiu caro nos pros: 0V-4D quando atrasa esse tanto.
- combo: Yasha + Diadem fecha o Manta Style (receita do 7.41) por volta de 18:36, mediana dos pros.
- fonte: morphling.json (itens_core.yasha)

## Manta Style (manta)
- porque: Duas imagens limpam uma wave ou camp sozinhas enquanto você limpa outro, e o dispel básico tira silence e slow leve na troca.
- detalhe: 2 imagens por 18 s, recarga de 34 s, 125 de mana. Imagens ranged causam 25% do seu dano e recebem 300% (valor do 7.41f, que baixou de 28% pra 25%), então servem pra farm e pra tirar torre, não pra brigar. O cast tem 0,1 s de invulnerabilidade e aplica dispel básico ao ativar. Pros compram aos 18:36 (58 de 63 jogos); depois de 20:30 foi 0V-7D, então não vale segurar demais.
- contra: Silencer: o Global Silence está marcado "dispellable: Yes" em constants_abilities.json, então o dispel do Manta remove e libera o Waveform de novo. Bane: o Enfeeble e o Nightmare também estão marcados "dispellable: Yes", então o Manta limpa os dois (só a Fiend's Grip, a ultimate, é "Strong Dispels Only" e resiste). NÃO funciona contra Axe (Berserker's Call é "dispellable: No"), Nyx Assassin, Lion, Shadow Shaman ou Doom (marcados "Strong Dispels Only" ou "No" nas mesmas constantes). Pra esses, o item certo é Black King Bar ou Linken's, não o Manta.
- combo: Manta + Vladmir's + Treads + BKB + Butterfly foi o inventário do único solo de Roshan confirmado deste herói nos dados locais (nível 21, 32:36); ver arquivo de Roshan. As imagens não ajudam a tankar o Roshan, porque recebem 300% de dano e morrem no primeiro golpe dele.
- fonte: morphling.json (itens_core.manta); constants_abilities.json (silencer_global_silence, bane_enfeeble, bane_nightmare, bane_fiends_grip, axe_berserkers_call, doom_bringer_doom); www.dota2.com/datafeed/patchnotes?version=7.41f (Mirror Image ranged image damage 28%→25%, confirma o item local items.json como desatualizado nesse ponto)

## Butterfly (butterfly)
- porque: Dano e evasão fecham o ancient em segundos e ajudam a sobreviver ao autoataque do próprio Roshan no solo.
- detalhe: +30 de Agilidade, +30 de dano, +20% de velocidade de ataque e 35% de evasão. O patch 7.41e baixou a Agilidade de +35 pra +30 e subiu o dano de +25 pra +30 (confirmado em www.dota2.com/datafeed/patchnotes?version=7.41e; o items.json local ainda está no valor antigo, +35/+25, por isso não foi usado aqui). Pros fecham aos 25:48 (35 de 63 jogos), ponto em que o time passa a lutar por objetivo. Eaglesong e Talisman of Evasion vêm do secret shop: manda o courier com antecedência. Roshan não tem True Strike nem evasão na lista de habilidades dele (Spell Block, Teleport, Bash, Slam, Roar of Retribution, Grab and Throw), então a evasão do Butterfly funciona contra os ataques dele; só um inimigo com Monkey King Bar (True Strike, 80% de chance) ignora a sua evasão.
- combo: Com Vladmir's e Manta prontos, Butterfly fecha o combo de farm de ancient e o combo de Roshan descrito no arquivo de Roshan do herói.
- fonte: morphling.json (itens_core.butterfly); www.dota2.com/datafeed/patchnotes?version=7.41e (Agility/Damage); liquipedia.net/dota2/True_Strike; dota-roshan-solo/data/abilities.json (roshan_bash, roshan_slam, sem evasão/true strike listada)

## Black King Bar (black_king_bar)
- porque: Bloqueia o Impale do Nyx, o Hex do Lion e o Shackles do Shadow Shaman, 3 dos disables que mais pesam no seu pior matchup. NÃO bloqueia o Call do Axe: a habilidade atravessa o BKB por desenho (é um dos poucos "true disables" do jogo).
- detalhe: 9/8/7 s de imunidade a magia conforme o nível do item, mais dispel básico ao ativar. Pros fecham aos 31:54 (31 de 63 jogos). O item não remove um stun que já está em você: tem que ligar antes do disable, não depois.
- contra: Nyx Assassin, Shadow Shaman, Lion: Impale, Shackles e Hex estão marcados "bkbpierce: No" em constants_abilities.json, então a imunidade do BKB impede esses feitiços de te afetar. NÃO funciona contra Axe nem Doom (axe_berserkers_call e doom_bringer_doom estão marcados "bkbpierce: Yes" nas mesmas constantes): contra os dois o BKB não resolve, e o guia já lista os dois entre os piores matchups do herói (Doom -4,6 pp e Axe -4,0 pp no Divine+).
- combo: Ligar o BKB e, no mesmo controle, soltar o Waveform: com imunidade a magia você passa por feitiços de alvo que normalmente bloqueariam o cast (Waveform exige não estar atordoado, hexado, silenciado ou enraizado).
- fonte: morphling.json (itens_core.black_king_bar, guia.evitar_quando); items.json (black_king_bar.abilities); constants_abilities.json (axe_berserkers_call, nyx_assassin_impale, shadow_shaman_shackles, lion_voodoo, doom_bringer_doom)

## Dragon Lance (dragon_lance)
- porque: +130 de alcance ranged ajuda a bater de longe e atrasa o corpo a corpo contra poke, além de abrir o Hydra's Breath.
- detalhe: Pros compram aos 21:30 (29 de 63 jogos). Dá +15 de Agilidade e +10 de Força de brinde. É componente do Hurricane Pike e do Hydra's Breath, então raramente fica como item final.
- fonte: morphling.json (itens_situacionais.dragon_lance)

## Hydra's Breath (hydras_breath)
- porque: Limpa wave e camp em área com Miasma e Polycephaly, o upgrade de farm depois do Dragon Lance.
- detalhe: Dragon Lance + Specialist's Array + Orb of Venom + receita = 5.900. Miasma tira 2,5% da vida máxima do alvo por segundo por 3 s; Polycephaly dá 30% de chance de acertar até 3 alvos extras. Pros compram aos 31:12 (11 de 63 jogos); é a opção pra punir o ancient quando Vladmir's e Yasha ainda não bastam.
- fonte: morphling.json (itens_situacionais.hydras_breath)

## Eye of Skadi (skadi)
- porque: Contra herói com cura ou vida alta: corta 50% da cura dele e te dá os 4 atributos de uma vez.
- detalhe: +35 em todos os atributos e um slow no ataque. Pros compram aos 31:54 (16 de 63 jogos); é item de jogo que passa de 30 min, quando o inimigo já tem lifesteal ou regen incômodo.
- fonte: morphling.json (itens_situacionais.skadi)

## Satanic (satanic)
- porque: Resposta a dano físico pesado: lifesteal de 25% (15% em creep) e Unholy Rage pra sobreviver e devolver.
- detalhe: Pros compram aos 38:18 (16 de 63 jogos). +25 de Força e +25 de dano de base; a ativa tem recarga de 40 s. É o item certo quando você está morrendo pra dano físico, não mágico.
- fonte: morphling.json (itens_situacionais.satanic); www.dota2.com/datafeed/patchnotes?version=7.41e (lifesteal 30%→25%, creep 18%→15%, recarga 30s→40s; o items.json local ainda está nos valores antigos)

## Linken's Sphere (sphere)
- porque: Bloqueia um feitiço de alvo único por vez contra os disables que mais matam o herói.
- detalhe: Spellblock passivo com recarga de 14 s; a ativa transfere a proteção pra um aliado.
- contra: Lion, Shadow Shaman, Bane, Doom: resolve porque são disables de alvo único (bloqueia o cast). NÃO protege contra Nyx Assassin (Impale não é de alvo) nem contra Axe (Berserker's Call é em área). Essa ressalva já vem do guia publicado do herói.
- fonte: morphling.json (itens_situacionais.sphere); items.json (sphere.abilities)

## Monkey King Bar (monkey_king_bar)
- porque: Quando o inimigo tem evasão alta, o Pierce garante que seu dano acerte.
- detalhe: 80% de chance de ignorar evasão e 70 de dano mágico extra por ataque. Pros usam pouco (2 de 63 jogos), porque o Morphling tem prioridades de slot antes de precisar disso.
- contra: Phantom Assassin, Butterfly inimigo: Pierce ignora a evasão deles (80% de chance), confirmado na descrição da habilidade do item.
- fonte: morphling.json (itens_situacionais.monkey_king_bar); items.json (monkey_king_bar.abilities)

## Daedalus (greater_crit)
- porque: Dano puro quando o jogo já precisa fechar rápido e o inimigo é frágil.
- detalhe: Passa por Crystalys (pros 35:54, 13 de 63) antes do Daedalus (39:42, 11 de 63). Recebeu +100 de receita no 7.41f, então custa um pouco mais caro chegar nele agora.
- fonte: morphling.json (itens_situacionais.greater_crit); www.dota2.com/datafeed/patchnotes?version=7.41f (recipe cost 900→1000, total 5100g→5200g)

## Aghanim's Shard (aghanims_shard)
- porque: Deixa o Attribute Shift ligado mesmo atordoado e corta a mana de 10 pra 5 por segundo, resolve metade do atrito da forma.
- detalhe: Funciona contra sleep, taunt, stun, hidden e forced movement; não funciona contra silence, hex nem "cannot act". Pros pegam aos 31:06 (16 de 63 jogos); também vem do Tormentor pro aliado de menor patrimônio.
- contra: Disables de atordoamento comuns (não silence/hex): o Shard deixa trocar de Força pra Agilidade mesmo preso, que é a correção que o próprio guia aponta pro "atrito do Attribute Shift" (13 trocas por 10 min do jogador contra 67-75 dos pros).
- fonte: morphling.json (itens_situacionais.aghanims_shard, erros_comuns)

## Swift Blink (swift_blink)
- porque: Blink com dano de Agilidade pra iniciar ou reposicionar rápido no late, quando o resto da build já está pronta.
- detalhe: Blink Dagger (2.250) evolui pra Swift Blink (6.800, +25 de Agilidade). Pros usam pouco (3 de 63, ~36 min); é item de fim de build, não prioridade.
- fonte: morphling.json (itens_situacionais.swift_blink)
