---
id: confrontos-witch_doctor
heroi: Witch Doctor
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/witch_doctor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ogre_magi.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/jakiro.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/lion.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/snapfire.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/disruptor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/crystal_maiden.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/terrorblade.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/lich.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tiny.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/skywrath_mage.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/furion.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/life_stealer.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
---

## Por que esses 14 oponentes

Critério 1, mais jogos de pro contra ele (pro_dados/witch_doctor.json, campo confrontos): Shadow Fiend (147), Rubick (140), Ogre Magi (111) e Jakiro (93) têm as quatro maiores amostras isoladas; Lion, Snapfire e Disruptor empatam em seguida com 92 partidas cada, e Lion e Snapfire completam a lista pelo critério 1.

Critério 2, mesma função de suporte (role Support, heroes.json) com volume alto em pro: Disruptor (que já empatava no critério 1) e Crystal Maiden, além dos que já entraram pelo critério 1 (Rubick, Ogre Magi, Jakiro, Lion, Snapfire).

Critério 3, maior vantagem medida, só com 30+ jogos: Terrorblade (63,6%), Lich (60,3%) e Tiny (59,7%) são as três maiores vantagens da lista. Do lado da desvantagem, a lista fecha com Skywrath Mage (39,1%), Nature's Prophet (38,6%), Lifestealer (36,6%) e Snapfire (38,0%, já incluído pelo critério 1); essas não são as três maiores desvantagens do confronto completo do Witch Doctor (Sniper, 29,8%, e Drow Ranger, 30,3%, são piores com a mesma amostra mínima), mas fecham o corte desta lista de 14 pelos critérios acima.

Critério 4 (carry sem lane em comum, mesmo Witch Doctor sendo suporte): Terrorblade, Tiny, Nature's Prophet e Lifestealer cobrem isso porque nenhum dos quatro joga a lane dele e ainda assim aparecem no top de vantagem ou desvantagem contra ele; nenhum troca farm com Witch Doctor, mas o power spike de cada lado decide se ele consegue punir o farm ou travar o combo antes do carry virar ameaça de luta.

## Contra Shadow Fiend (nevermore)
- placar: Witch Doctor venceu 81 de 147 partidas de pro (55,1%), fonte: pro_dados/witch_doctor.json (OpenDota /heroes/30/matchups).
- por que importa: é o confronto com mais jogos de pro registrado contra ele; SF é o mid mais comum no mesmo draft, puxando rotação cedo pro lado da lane segura onde o WD fica.
- janelas: até os 8 min, SF já sobe Boots of Elves (6,9min) e sai caçando com Raze, enquanto WD ainda monta mana (Arcane Boots só aos 11,3min, pro_dados/witch_doctor.json). Dos 21 aos 24min o WD vira o jogo: Glimmer Cape (21,5min) e Aghanim's Shard (24,2min) chegam, e Death Ward é dano Pure que ignora o BKB do SF (bkbpierce=Yes, constants_abilities.json), então mesmo depois do BKB dele (mediana 25,2min) a ultimate do WD ainda passa.
- o que ele faz com você: Shadowraze (85-280 de dano, raio 250, alcance 200, recarga de 3s entre casts, constants_abilities.json) acerta sem indicador de cast e não perdoa quem fica parado setando Cask; Requiem of Souls (nível 6/16/18) assusta em área 1.000 e reduz resistência mágica em 5-15%, amplificando qualquer combo seguinte se ele focar o WD.
- o que você faz com ele: Paralyzing Cask (0,8s de stun por bounce, 55-100+20 por bounce, 575 de alcance de bounce) trava o SF no meio de uma sequência de Raze; Maledict (12s de curse, 3 tiques que devolvem 16-40% da vida perdida no período) pune qualquer farm agressivo dele perto de creep; Death Ward ignora o BKB.
- itens que viram: Glimmer Cape (barreira de até 375 de dano, items.json) absorve o primeiro Raze antes do combo completar; Aghanim's Shard (Voodoo Switcheroo, 2,5s de canal extra sem gastar a ultimate) dá um segundo Death Ward pra punir o SF que farma sem BKB ainda.
- como jogar: nunca fique parado dentro de 250 de raio sem visão do SF; feche a Cask na wave antes dele conseguir cozinhar o combo de Raze; depois dos 24min, puxe o SF com Death Ward de longe, fora do alcance de 200 do Raze.
- fonte: pro_dados/witch_doctor.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_shadowraze1, nevermore_requiem, witch_doctor_death_ward); items.json (glimmer_cape)

## Contra Rubick (rubick)
- placar: Witch Doctor venceu 74 de 140 partidas de pro (52,9%), fonte: pro_dados/witch_doctor.json.
- por que importa: segunda maior amostra de pro contra ele, e tem uma mecânica direta rara: Rubick pode roubar a própria ultimate do WD com Spell Steal.
- janelas: 0-11min os dois sobem mana devagar (Rubick Arcane Boots 10,3min, WD 11,3min, pro_dados); aos 21,6min Rubick fecha Blink Dagger (pro_dados/rubick.json) e passa a iniciar puxando o WD pro meio do time dele antes da Cask sair; depois dos 24min, Shard do WD (24,2min, witch_doctor.json) e Shard do Rubick (27,0min, pro_dados/rubick.json; efeito exato não confirmado nas fontes permitidas) sobem juntos, então o duelo decide quem rouba o quê primeiro.
- o que ele faz com você: se Rubick acerta Spell Steal no cast do Death Ward, ele ganha a mesma ultimate de longo alcance (dura 180-300s, recarga da magia roubada reduzida em 10-30%, constants_abilities.json) contra o time do WD; Telekinesis levanta o WD no ar e estuna quem estiver perto na queda.
- o que você faz com ele: Cask e Maledict chegam fora da troca de ultimate e travam o Rubick antes dele puder levantar Telekinesis; Death Ward, pure e ignorando BKB, ainda vale mais na mão de quem tiver mais itens de dano no time.
- itens que viram: Blink Dagger (WD 27,3min em 211/763 jogos; Rubick 21,6min em 2.782/3.990, pro_dados) decide quem inicia primeiro; Glimmer Cape protege o WD do combo Telekinesis+Fade Bolt antes dele conseguir fechar a Cask.
- como jogar: solte Death Ward só quando o Rubick já tiver gastado a Spell Steal nessa luta, porque ele não rouba de novo até expirar; se ele ainda tem a rouba disponível, abra com Cask pra forçá-lo a gastar em algo pior.
- fonte: pro_dados/witch_doctor.json; pro_dados/rubick.json; constants_abilities.json (rubick_spell_steal, witch_doctor_death_ward)

## Contra Ogre Magi (ogre_magi)
- placar: Witch Doctor venceu 51 de 111 partidas de pro (45,9%, leve desvantagem), fonte: pro_dados/witch_doctor.json.
- por que importa: terceira maior amostra de pro; mesma função (suporte duro de disable barato) competindo pela mesma faixa de picks.
- janelas: 0-11min a curva de mana é quase idêntica (Ogre Arcane Boots 11,2min, WD 11,3min, pro_dados); Fireblast do Ogre tem cast de 0,45s contra o cast de 0,2s da Cask, mas o alcance de 525 dele é menor que os 600 da Cask, então quem posiciona primeiro abre a troca. Depois dos 24min, Shard do WD (Voodoo Switcheroo) e Shard do Ogre (26,1min, pro_dados/ogre_magi.json, dá Fire Shield, confirmado em constants_abilities.json) trocam defesa por defesa.
- o que ele faz com você: Fireblast (1,2s de stun, 70-250 de dano, constants_abilities.json) interrompe qualquer canal, inclusive o Death Ward, se acertar o WD antes do início da canalização.
- o que você faz com ele: Maledict pune o Ogre quando ele fica plantado puxando wave com Ignite; Cask trava ele junto dos aliados numa troca de lane.
- itens que viram: Aghanim's Shard do Ogre (Fire Shield, absorve 85% dos 3 próximos ataques e devolve bola de fogo de 160 de dano, ogre_magi_smash) neutraliza boa parte do dano físico do Death Ward se ativado a tempo; Glimmer Cape do WD faz o mesmo contra o combo Fireblast+Ignite dele.
- como jogar: force o Ogre a gastar Fireblast fora do alcance da sua Cask antes de se comprometer; depois do Shard dele, não dependa só de Death Ward pra fechar, misture Maledict.
- fonte: pro_dados/witch_doctor.json; pro_dados/ogre_magi.json; constants_abilities.json (ogre_magi_fireblast, ogre_magi_smash)

## Contra Jakiro (jakiro)
- placar: Witch Doctor venceu 44 de 93 partidas de pro (47,3%, leve desvantagem), fonte: pro_dados/witch_doctor.json.
- por que importa: quarta maior amostra de pro; mesma posição (suporte duro) com disable em área competindo pelo mesmo papel no draft.
- janelas: até os 12min o farm é parecido (ambos perto de Arcane Boots); Ice Path do Jakiro tem 1.100 de alcance de cast contra os 600 da Cask, então ele consegue abrir de muito mais longe. Depois dos 25min, Macropyre (10s de duração, 100-200 de dano por segundo numa faixa de 500) pune qualquer um parado perto de onde o WD precisa ficar pra canalizar Death Ward.
- o que ele faz com você: Ice Path (até 2s de stun em área, constants_abilities.json) trava o WD de 1.100 de distância antes dele conseguir setar o próprio stun; Macropyre, se cair embaixo do WD durante o canal do Death Ward, mata ele rápido.
- o que você faz com ele: Maledict acerta o Jakiro mesmo plantado longe (600 de alcance de cast); Death Ward ignora o BKB dele, embora ele raramente priorize esse item no perfil de suporte.
- itens que viram: Glimmer Cape (WD 21,5min; Jakiro n=894, mediana 22,8min, pro_dados/jakiro.json) decide quem sobrevive ao primeiro combo; Aghanim's Scepter do Jakiro (fora do top 30 de itens mais comprados em partidas pro 7.40-7.41, pro_dados/jakiro.json) entra só como item de atributo genérico (+10 em tudo, +175 de vida e mana) nesta análise.
- como jogar: não plante a Cask dentro dos 1.100 de alcance do Ice Path sem antes forçar o cast dele; depois dos 25min, nunca canalize Death Ward perto de onde o Jakiro pode abrir Macropyre.
- fonte: pro_dados/witch_doctor.json; pro_dados/jakiro.json; constants_abilities.json (jakiro_ice_path, jakiro_macropyre)

## Contra Lion (lion)
- placar: Witch Doctor venceu 44 de 92 partidas de pro (47,8%, leve desvantagem), fonte: pro_dados/witch_doctor.json.
- por que importa: quinta maior amostra de pro; mesma posição (suporte duro) e mesmo papel de disable de alvo único, concorrendo pelo mesmo espaço no draft.
- janelas: 0-8min os dois fazem harass de lane com nuke de alvo único (Impale, 650 de alcance, contra os 600 da Cask); aos 18,2min Lion fecha Blink Dagger (pro_dados/lion.json) e passa a iniciar de fora de visão, bem antes do Blink situacional do WD (27,3min, raro). A partir do nível 6, os dois correm pra ver quem estuna ou mata primeiro: Finger of Death (600-850 de dano, alcance de cast 900) executa o WD fora se ele estiver sem Glimmer ou Aeon Disk, o que é quase sempre no early-mid.
- o que ele faz com você: Impale trava o WD de 650 de distância antes da Cask (600 de alcance) sair; Finger of Death mata o WD de um só golpe na maior parte da partida.
- o que você faz com ele: Cask e Maledict acertam o Lion de volta se ele errar o blink; Death Ward, canalizando, ignora o BKB dele e mata rápido um suporte com pouca vida.
- itens que viram: Glimmer Cape (invisibilidade + barreira de até 375 de dano) é a resposta direta ao combo Blink+Impale+Finger of Death; Aghanim's Shard do Lion (723 de 2.775 partidas de pro, 26%, pro_dados/lion.json) não tem efeito exato confirmado nas fontes permitidas.
- como jogar: guarde o Glimmer pra quando o Lion tiver nível 6 e visão de você; não ande sozinho no fog depois dos 18min, quando ele já tem Blink.
- fonte: pro_dados/witch_doctor.json; pro_dados/lion.json; constants_abilities.json (lion_impale, lion_finger_of_death, witch_doctor_death_ward)

## Contra Snapfire (snapfire)
- placar: Witch Doctor venceu 35 de 92 partidas de pro (38,0%, desvantagem com amostra grande), fonte: pro_dados/witch_doctor.json.
- por que importa: está entre os 6 com mais jogos de pro contra o WD (92) e também entre as maiores desvantagens com amostra grande, então aparece muito e o WD perde a maioria.
- janelas: até os 10min, Scatterblast (100-280 de dano, 100% de lentidão por 1s, alcance 800) empurra o WD pra fora da lane antes dele fechar a Cask (alcance 600). Aos 16,9min Snapfire fecha Aghanim's Shard (pro_dados/snapfire.json, dá cura + Mortimer Kisses fraco no Firesnap Cookie) e passa a ter mobilidade e burst juntos; Mortimer Kisses (8 globos, 180-360 de dano cada, alcance de cast 3.000) ameaça de qualquer ponto do mapa, bem acima do alcance de qualquer resposta do WD antes do Glimmer (21,5min).
- o que ele faz com você: Scatterblast empurra o WD pra fora do alcance da própria Cask e aplica lentidão total por 1s; Mortimer Kisses acerta de 3.000 de distância, fora de reação de qualquer item do WD antes do Glimmer.
- o que você faz com ele: Maledict pune a Snapfire quando ela fica plantada perto de creep setando Firesnap Cookie; Death Ward ignora o BKB dela se a luta durar os 8s de canal.
- itens que viram: Glimmer Cape do WD é a única resposta real ao alcance de 3.000 do Mortimer Kisses; Aghanim's Shard da Snapfire (1.919 de 2.456 partidas de pro, 78%, pro_dados/snapfire.json) dá cura extra que compensa parte do que o Maledict castiga.
- como jogar: não dependa de vencer a troca de poke antes dos 21min (Glimmer); jogue fora do alcance de 800 do Scatterblast e não fique agrupado dentro do raio de impacto de 275 do Mortimer Kisses antes dela se expor.
- fonte: pro_dados/witch_doctor.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_scatterblast, snapfire_mortimer_kisses)

## Contra Disruptor (disruptor)
- placar: Witch Doctor venceu 50 de 92 partidas de pro (54,3%), fonte: pro_dados/witch_doctor.json.
- por que importa: mesma posição (suporte duro) com bastante volume em pro, e tem uma interação rara: Glimpse pode interromper o canal do Death Ward puxando o WD de volta no tempo.
- janelas: 0-11min curva de mana quase idêntica (Disruptor Arcane Boots 11,4min, WD 11,3min); Glimpse (puxa o alvo pra posição de até 4s atrás, 25-280 de dano, alcance crescente até 1.800, constants_abilities.json) ameaça qualquer canal do WD a partir do nível 1 dele. Depois dos 24min, o Shard do WD (Switcheroo) compete com o Shard do Disruptor (Kinetic Fence, 1.200 de comprimento, 4,4s de duração) pra ver quem trava quem primeiro numa luta.
- o que ele faz com você: Glimpse interrompe o canal de Death Ward na hora, teleportando o WD pra posição de segundos atrás e causando dano; Static Storm (200-350 de dano por segundo em 550 de raio por 6s) mata o WD rápido se ele estiver dentro.
- o que você faz com ele: Death Ward é pure e ignora o BKB do Disruptor; Cask trava ele antes dele conseguir setar Kinetic Field/Fence numa troca.
- itens que viram: Aghanim's Scepter do Disruptor (616 de 2.521 partidas de pro, 24%, pro_dados/disruptor.json) faz Static Storm também silenciar uso de itens, mecânica confirmada no tooltip oficial do item (Liquipedia), o que inclui o Glimmer Cape do WD; a resposta é usar Glimmer antes da Storm cair, não durante.
- como jogar: não canalize Death Ward com o Disruptor vivo e Glimpse disponível (recarga curta); force ele a gastar Glimpse fora de uma luta de verdade.
- fonte: pro_dados/witch_doctor.json; pro_dados/disruptor.json; constants_abilities.json (disruptor_glimpse, disruptor_static_storm, disruptor_kinetic_fence); Liquipedia (Aghanim's Scepter do Disruptor)

## Contra Crystal Maiden (crystal_maiden)
- placar: Witch Doctor venceu 31 de 60 partidas de pro (51,7%), fonte: pro_dados/witch_doctor.json.
- por que importa: mesma posição (suporte duro de disable em área), uma das mais jogadas em pro na função, boa referência de "quem estuna mais rápido".
- janelas: 0-8min Frostbite (1,5-3s de root com 100 de dano por segundo) compete com a Cask pelo mesmo papel de abrir a lane; depois dos 10min a Brilliance Aura dela acelera o farm do time inteiro, enquanto o WD ainda depende da própria mana. Freezing Field (10s de canal, até 250 de dano por explosão) e Death Ward (8s de canal) são as duas ultimates mais lentas do jogo, então quem interromper a canalização do outro primeiro ganha a troca.
- o que ele faz com você: Frostbite prende o WD por até 3s; Freezing Field, se o WD ficar perto, aplica lentidão de ataque de até -160% em área.
- o que você faz com ele: Cask e Maledict interrompem o canal de 10s do Freezing Field assim que acertam; Death Ward ignora o Scepter dela, que só dá mobilidade durante o canal, não imunidade a dano.
- itens que viram: Aghanim's Shard da CM (Crystal Clone, desvia projétil de alvo único por até 5s, constants_abilities.json) anula uma Cask solo lançada nela, mas não bloqueia o quique seguinte; Glimmer Cape do WD segura o combo de Frostbite+Crystal Nova.
- como jogar: interrompa o Freezing Field com Cask na primeira oportunidade; não jogue a Cask isolada nela se ela tiver o Shard, porque o clone absorve.
- fonte: pro_dados/witch_doctor.json; pro_dados/crystal_maiden.json; constants_abilities.json (crystal_maiden_frostbite, crystal_maiden_freezing_field, crystal_maiden_crystal_clone)

## Contra Terrorblade (terrorblade)
- placar: Witch Doctor venceu 21 de 33 partidas de pro (63,6%, maior vantagem da lista, amostra na faixa mínima de 30 jogos), fonte: pro_dados/witch_doctor.json.
- por que importa: maior vantagem com amostra válida (30+ jogos); não compartilha lane (TB farma isolado), mas é um dos carries mais jogados em pro e decide muito do fim de jogo contra um suporte imóvel.
- janelas: até os 15min o TB farma sozinho (Yasha aos 12,5min, pro_dados/terrorblade.json) enquanto o WD sobe mana; aos 17,1min ele fecha Manta Style e aos 17,4min o Aghanim's Shard (pro_dados/terrorblade.json), multiplicando as ilusões que confundem qual é o alvo certo pra Cask. BKB nem aparece entre os itens mais comprados do TB em pro (fora do top 30, pro_dados/terrorblade.json), porque ele prioriza Manta e Shard; ainda assim, Death Ward (pure, ignora BKB) acerta ele direto nas vezes em que comprar, e só as ilusões de Manta tomam -70% a -25% de dano quando ele usa Reflection.
- o que ele faz com você: Metamorphosis dá até 600 de alcance de ataque (730 com Dragon Lance, que só conta enquanto ranged) e Reflection devolve 30-75% do dano recebido por 5s, então focar o TB com dano mágico de volta é arriscado; as ilusões de Manta confundem qual é o alvo certo pra Cask.
- o que você faz com ele: Maledict pune as trocas de farm dele perto de creep; Death Ward ignora o BKB dele e não se importa com ilusões, foca o herói real se tiver visão; Cask em área ajuda a identificar o TB verdadeiro, porque as ilusões (Conjure Image e Manta) tomam 250% a 300% de dano e morrem bem mais rápido, revelando o padrão.
- itens que viram: Glimmer Cape protege o WD do burst pós-Manta; Aghanim's Shard do WD (segundo canal de Death Ward) compensa o fato de só ter uma chance de acertar o TB certo por luta.
- como jogar: não dependa da Cask pra identificar o TB real sem visão de verdade; jogue Death Ward assim que tiver certeza do alvo, antes dele ativar Reflection.
- fonte: pro_dados/witch_doctor.json; pro_dados/terrorblade.json; constants_abilities.json (terrorblade_reflection, terrorblade_metamorphosis, witch_doctor_death_ward)

## Contra Lich (lich)
- placar: Witch Doctor venceu 38 de 63 partidas de pro (60,3%), fonte: pro_dados/witch_doctor.json.
- por que importa: segunda maior vantagem com amostra grande (63 jogos); mesma posição (suporte duro) com combo de stun em área concorrendo pelo mesmo papel.
- janelas: 0-8min Frost Nova (40-160 de dano base + 80-200 em área, alcance de cast até 650) compete com a Cask pela mesma faixa de harass. A partir do nível 6, Chain Frost (10 saltos, 250-550+15-25 por salto, alcance de bounce 550) ameaça lutas em grupo tanto quanto o Death Ward, sem precisar canalizar; Sinister Gaze (puxa inimigo drenando mana por até 2s) faz papel parecido com o Glimpse do Disruptor, mas é mais lento de setar.
- o que ele faz com você: Frost Nova desacelera e marca o WD pra abates em grupo; Chain Frost quica entre o WD e aliados perto, empilhando lentidão de até -65%.
- o que você faz com ele: Death Ward é pure e ignora qualquer imunidade que o Lich comprar, já que ele raramente vai de BKB; Cask e Maledict acertam de 600 de alcance, igual ou maior que o Frost Nova no nível 1 (575 min).
- itens que viram: Glimmer Cape (WD 21,5min; Lich n=980, mediana 19,8min, pro_dados/lich.json) decide quem sobrevive ao primeiro combo; Aghanim's Shard do Lich (n=935, mediana 22,9min, pro_dados/lich.json) dá Frost Shield, escudo que absorve 45-60% do dano recebido e aplica lentidão em área por até 7s (constants_abilities.json, lich_frost_shield).
- como jogar: force o Lich a gastar Frost Nova fora do alcance da sua Cask; depois do nível 6 dele, não agrupe com o time sem visão de Chain Frost.
- fonte: pro_dados/witch_doctor.json; pro_dados/lich.json; constants_abilities.json (lich_frost_nova, lich_chain_frost, lich_sinister_gaze, lich_frost_shield, witch_doctor_death_ward)

## Contra Tiny (tiny)
- placar: Witch Doctor venceu 46 de 77 partidas de pro (59,7%), fonte: pro_dados/witch_doctor.json.
- por que importa: terceira maior vantagem com amostra grande (77 jogos); não compartilha lane fixa, mas é um dos combos de burst mais jogados em pro contra suportes imóveis.
- janelas: até os 6,1min Tiny sobe Power Treads (pro_dados/tiny.json); aos 15,9min ele já fecha Blink Dagger (pro_dados/tiny.json), o que deixa o combo possível de fora do alcance da Cask (600) a qualquer momento; aos 17,6min o Shadow Blade (invis_sword, pro_dados/tiny.json) soma o pico de pickoff (combo Avalanche+Toss, ~2,5s de controle). No nível máximo de Grow, o bônus de +300 no dano do Toss leva o combo a até 660 de dano mágico em área (constants_abilities.json: tiny_toss, tiny_grow).
- o que ele faz com você: Avalanche (0,3s de stun por tick, 5 ticks, 90-360 de dano total) seguido de Toss (1,25s de controle, 90-360 de dano) de fora do alcance da Cask deixa o WD sem chance de reagir antes de morrer.
- o que você faz com ele: Maledict pune o farm de jungle dele; Death Ward ignora o BKB do Tiny (mediana 26,7min, pro_dados/tiny.json) e mata ele rápido se entrar sem o combo disponível.
- itens que viram: Glimmer Cape é a defesa direta contra Avalanche+Toss, a barreira absorve boa parte do pacote de dano; Aghanim's Shard do WD garante um segundo Death Ward se o Tiny voltar pra engajar sem recarregar o combo a tempo.
- como jogar: nunca fique sozinho fora de visão depois dos 19min (Blink dele); jogue Cask proativamente quando ele se aproximar, forçando o combo a saír errado.
- fonte: pro_dados/witch_doctor.json; pro_dados/tiny.json; constants_abilities.json (tiny_avalanche, tiny_toss, tiny_grow, witch_doctor_death_ward)

## Contra Skywrath Mage (skywrath_mage)
- placar: Witch Doctor venceu 27 de 69 partidas de pro (39,1%, maior desvantagem da lista com amostra grande), fonte: pro_dados/witch_doctor.json.
- por que importa: maior desvantagem com amostra grande (69 jogos); mesma posição (suporte de nuke), mas com alcance e burst mágico muito maiores.
- janelas: 0-8min os dois trocam nuke de longo alcance: Concussive Shot (1.600 de alcance, 120-300 de dano + 4s de lentidão de 40%) é quase 3x o alcance da Cask. A partir do nível 6, Mystic Flare (800-1.600 de dano em 2s de canal, alcance de cast 1.200) mata o WD antes dele fechar o próprio combo, principalmente se marcado por Ancient Seal (-20% a -35% de resistência mágica por até 6s).
- o que ele faz com você: Concussive Shot alcança quase 3x mais longe que a Cask; Ancient Seal + Mystic Flare é um combo de execução que ignora a vida de um suporte sem Glimmer ou Aeon Disk.
- o que você faz com ele: Cask estuna o Skywrath no meio do canal de Mystic Flare (2s) se conseguir fechar a distância; Death Ward, pure e ignorando BKB, mata ele rápido, porque é um dos heróis com menos vida do jogo.
- itens que viram: Glimmer Cape do WD é a resposta ao alcance de 1.600 do Concussive Shot; Aghanim's Shard do Skywrath (818 de 1.877 partidas de pro, 44%, pro_dados/skywrath_mage.json) entra com uso confirmado em pro, mesmo sem efeito exato documentado nas fontes permitidas.
- como jogar: não entre no alcance de 1.200 do cast dele sem vantagem numérica; se ele abrir Ancient Seal em você, use Glimmer ou recue antes do Mystic Flare carregar.
- fonte: pro_dados/witch_doctor.json; pro_dados/skywrath_mage.json; constants_abilities.json (skywrath_mage_concussive_shot, skywrath_mage_ancient_seal, skywrath_mage_mystic_flare, witch_doctor_death_ward)

## Contra Nature's Prophet (furion)
- placar: Witch Doctor venceu 17 de 44 partidas de pro (38,6%), fonte: pro_dados/witch_doctor.json.
- por que importa: segunda maior desvantagem com amostra de 30+ jogos; não compartilha lane (farm global), mas Wrath of Nature acerta o WD de qualquer ponto do mapa sem precisar se aproximar.
- janelas: até os 7,5min o NP sai da lane pra jungle; aos 12,2min farma rápido com Maelstrom (pro_dados/furion.json). A partir do nível 6, Wrath of Nature (90-170 de dano base, quica em até 16 alvos, sem alcance de cast) acerta o WD em qualquer lane sem telegrafar nada além de um cast de 0,5s; Teleportation (barreira de 70-250, recarga 20s) deixa ele reagir ou abrir gank de surpresa em 20s.
- o que ele faz com você: Wrath of Nature é dano garantido de qualquer distância, sem o WD poder reagir fisicamente; Teleportation permite ganks de surpresa, chegando já com Treants pra abrir.
- o que você faz com ele: Maledict pune o farm de jungle; Death Ward, pure e ignorando o BKB dele (mediana 24,8min, pro_dados/furion.json), mata rápido se ele ficar parado demais.
- itens que viram: Glimmer Cape não bloqueia Wrath of Nature (é dano instantâneo, não um cast que a invisibilidade evita), mas reduz a chance do WD ser pego depois num gank de Teleportation; Aghanim's Shard do NP não tem efeito documentado nas fontes acessadas.
- como jogar: não fique parado em grupo sem necessidade depois do nível 6 dele; jogue Death Ward numa troca marcada, não tentando punir o farm, porque o NP está quase sempre fora de alcance físico.
- fonte: pro_dados/witch_doctor.json; pro_dados/furion.json; constants_abilities.json (furion_wrath_of_nature, furion_teleportation, witch_doctor_death_ward)

## Contra Lifestealer (life_stealer)
- placar: Witch Doctor venceu 15 de 41 partidas de pro (36,6%, terceira maior desvantagem da lista), fonte: pro_dados/witch_doctor.json.
- por que importa: carry agressivo que costuma focar o suporte mais parado do time inimigo, perfil clássico de "cacete contra suporte imóvel".
- janelas: até os 6min Lifestealer fecha Phase Boots (pro_dados/life_stealer.json) e já pressiona a lane; aos 16,2min a Radiance muda o ritmo de farm dele (pro_dados/life_stealer.json). Rage (3-6s de imunidade a debuff + 80% de resistência mágica) neutraliza Cask e Maledict completamente durante a janela; Open Wounds (7s de lentidão escalonada e corte de 20-50% na cura) pune a sustentação do WD se ele tentar curar com Voodoo Restoration.
- o que ele faz com você: Rage torna ele imune a Cask e Maledict por até 6s, janela em que pode focar o WD sem medo do disable dele; Open Wounds corta a cura do WD e do time em até 50%, anulando a Voodoo Restoration.
- o que você faz com ele: Death Ward é pure e ignora o Rage dele, já que debuff immunity não bloqueia dano puro; Maledict, se aplicado fora da janela de Rage, pune o lifesteal porque ele costuma ficar com vida alta tomando dano de volta.
- itens que viram: Glimmer Cape protege o WD do gap-close físico dele (Phase Boots); Aghanim's Scepter do Lifestealer (Infest com recarga reduzida a 20s, Dota 2 Wiki) dá mobilidade extra pra fugir ou entrar escondido, então não dá pra contar só com visão de wards pra reagir.
- como jogar: não gaste Cask/Maledict quando ele tiver Rage disponível (recarga curta no early); jogue Death Ward de longe, fora do alcance de Phase Boots, mesmo durante o Rage dele.
- fonte: pro_dados/witch_doctor.json; pro_dados/life_stealer.json; constants_abilities.json (life_stealer_rage, life_stealer_open_wounds, life_stealer_infest, witch_doctor_death_ward); Dota 2 Wiki (Aghanim's Scepter do Lifestealer)
