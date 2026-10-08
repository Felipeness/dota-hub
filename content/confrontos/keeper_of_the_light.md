---
id: confrontos-keeper_of_the_light
heroi: Keeper of the Light
patch: 7.41
fontes:
- dota-hub-conteudo-novo/pro_dados/keeper_of_the_light.json
- dota-hub-conteudo-novo/pro_dados/hoodwink.json
- dota-hub-conteudo-novo/pro_dados/rubick.json
- dota-hub-conteudo-novo/pro_dados/nevermore.json
- dota-hub-conteudo-novo/pro_dados/ember_spirit.json
- dota-hub-conteudo-novo/pro_dados/tiny.json
- dota-hub-conteudo-novo/pro_dados/windrunner.json
- dota-hub-conteudo-novo/pro_dados/tusk.json
- dota-hub-conteudo-novo/pro_dados/storm_spirit.json
- dota-hub-conteudo-novo/pro_dados/disruptor.json
- dota-hub-conteudo-novo/pro_dados/queenofpain.json
- dota-hub-conteudo-novo/pro_dados/alchemist.json
- dota-hub-conteudo-novo/pro_dados/lina.json
- dota-hub-conteudo-novo/pro_dados/warlock.json
- dota-hub-conteudo-novo/pro_dados/treant.json
- dota-hub-conteudo-novo/pro_dados/venomancer.json
- dota-hub-conteudo-novo/pro_dados/monkey_king.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/heroes.json
- https://api.opendota.com/api/constants/aghs_desc
---

## Resumo da escolha

Keeper of the Light (KotL) é suporte de poke de longo alcance, 52,1% das partidas de pro na offlane e 42,1% na mid lane, raramente puro suporte na safelane (5,4%), quase nunca compartilha lane com carry (partidas pro 7.40-7.41, OpenDota explorer, lane_role). Por isso a lista abaixo mistura três grupos: os 6 oponentes que mais jogaram contra ele no pro play (de qualquer posição), os suportes 4/5 e os mids 2 que mais aparecem contra ele (mesma função, trocam poke de verdade), e os 3 maiores favoritismos e os 3 piores matchups do KotL com amostra de 30+ partidas, o que inclui carries que ele quase nunca lane mas que decidem o jogo no alcance e na caçada, igual pede o pedido original (`pro_dados/keeper_of_the_light.json`, campo `confrontos`, OpenDota `/heroes/90/matchups` em liga pro 7.40+7.41).

## Contra Hoodwink (hoodwink)
- placar: KotL vence 112 de 178 (62,9%) (`pro_dados/keeper_of_the_light.json`)
- por que importa: é o oponente com mais jogos de pro contra o KotL (178) e a mesma função, os dois são suportes 4/5 de longo alcance que se cruzam em quase toda rota e toda emboscada.
- janelas: até 12 min, troca de poke pura, Illuminate (1550 a 1800 de alcance de cast, até 500 de dano no canal máximo) alcança mais longe que o Acorn Shot de Hoodwink; dos 12 aos 20 min o jogo vira sobre visão, Hoodwink sai na frente com Arcane Boots aos 12:12 (mediana, 2.147 jogos) pra sustentar mana de Bushwhack; a partir do nível 6 o risco inverte quando Hoodwink tem Sharpshooter pronto, um canal de dano alto com quebra e lentidão; o Aghanim's Shard de Hoodwink sai só aos 23:48 (1.224 jogos), então antes disso ela depende só do combo básico.
- o que ele faz com você: Bushwhack puxa o KotL pra árvore mais próxima e cega a visão dele durante o stun, deixando-o cego pro resto do combo; Sharpshooter acerta de longe, com quebra e lentidão, e KotL não tem disjoint nem imunidade a magia própria pra sair da linha de tiro a tempo.
- o que você faz com ele: Illuminate alcança mais longe que qualquer skillshot de Hoodwink antes do nível 6, então KotL nega farm e visão cedo; Blinding Light cega e empurra 175 de distância em 0,6s, o suficiente pra tirar Hoodwink da área antes do Sharpshooter carregar.
- itens que viram: o Shard de Hoodwink (boomerang que volta, desacelera e aumenta dano mágico recebido) muda o jogo depois dos 23 min porque passa a punir o KotL parado tentando canalizar Illuminate; do lado do KotL, Force Staff (22:24, mediana de 440 jogos de pro) tira ele da linha de visão do Sharpshooter antes da liberação.
- como jogar: na lane, force a troca de Illuminate contra Acorn Shot porque seu alcance ganha; depois do nível 6 de Hoodwink, não fique parado perto de árvore nem na linha de tiro dela; use Blinding Light pra empurrar ela antes do Sharpshooter carregar.
- fonte: pro_dados/keeper_of_the_light.json (confrontos); pro_dados/hoodwink.json (itens); constants_abilities.json (hoodwink_bushwhack, hoodwink_sharpshooter, keeper_of_the_light_illuminate, keeper_of_the_light_blinding_light); aghs_desc (Hoodwink shard)

## Contra Rubick (rubick)
- placar: KotL vence 82 de 160 (51,2%) (`pro_dados/keeper_of_the_light.json`)
- por que importa: 2º mais jogos de pro contra o KotL (160), mesma função de suporte mágico, e Rubick pode literalmente roubar o Illuminate se ele estiver no ar quando o KotL castar perto.
- janelas: até 10 min os dois trocam poke de longo alcance (Illuminate vs Fade Bolt), mas Fade Bolt tem menos alcance; Rubick fecha o Blink Dagger aos 21:36 (mediana, 2.782 jogos), virando o ponto em que ele passa a conseguir se posicionar pra roubar um ultimate de verdade numa luta; o Aghanim's Scepter de Rubick sai aos 27:24 (1.119 jogos) e dobra o número de feitiços roubáveis.
- o que ele faz com você: se Illuminate for o último feitiço que o KotL castou perto de Rubick, ele pode roubar o canal inteiro com o range e dano de Illuminate e usar contra o próprio time do KotL; Telekinesis levanta e arremessa o KotL no chão, e o impacto stuna outros inimigos do Rubick que estiverem perto do ponto de queda, perigoso se o time do KotL estiver agrupado ali.
- o que você faz com ele: Illuminate ainda alcança mais longe que Fade Bolt e Telekinesis antes do Blink, então KotL consegue negar a aproximação de Rubick; Chakra Magic devolve mana rápido o bastante pra sustentar a guerra de poke que Rubick, sem fonte própria de sustain, perde no longo prazo.
- itens que viram: depois do Blink (21:36) o Rubick decide quando entra na luta pra tentar o steal, então o KotL deve evitar castar Illuminate como o "último feitiço visível" perto dele em fights decisivas; o Aghanim's Scepter do KotL (Will-O-Wisp, puxa inimigos num raio de 725 por 7 pulsos de 85 de dano mágico) ajuda a agrupar o time de Rubick antes que ele tenha chance de reagir.
- como jogar: controle o que Rubick vê você castar por último antes de entrar em luta, se possível jogue um feitiço descartável primeiro; use o alcance de Illuminate pra punir a falta de iniciação de Rubick antes dos 21 min.
- fonte: pro_dados/keeper_of_the_light.json (confrontos); pro_dados/rubick.json (itens); constants_abilities.json (rubick_spell_steal, rubick_telekinesis, rubick_fade_bolt, keeper_of_the_light_illuminate, keeper_of_the_light_chakra_magic, keeper_of_the_light_will_o_wisp); aghs_desc (Rubick scepter)

## Contra Shadow Fiend (nevermore)
- placar: KotL vence 79 de 153 (51,6%) (`pro_dados/keeper_of_the_light.json`)
- por que importa: 3º mais jogos de pro contra o KotL (153); quase nunca compartilham lane porque Shadow Fiend é carry 1 e o KotL é suporte 4/2, mas é o carry mais jogado em pro contra ele e os dois decidem teamfight no alcance, Requiem de um lado, Illuminate do outro.
- janelas: até 14 min Shadow Fiend ainda depende de Necromastery (souls por kill) pra ter dano, então é o KotL que poka mais forte com Illuminate; Dragon Lance sai aos 14:00 (mediana, 2.571 jogos) e dá o alcance que faltava pra Shadowraze virar ameaça de longe; o Black King Bar de Shadow Fiend aos 25:12 (1.554 jogos) é o divisor de águas, porque a partir dali ele atravessa Blinding Light pra fechar e usar Requiem sem medo de ser interrompido.
- o que ele faz com você: Requiem of Souls dá medo e reduz velocidade e resistência mágica por linha acertada, em cima de um KotL com 120 de vida base isso é combo de morte instantânea se ele estiver perto; Shadowraze acumula bônus de dano por stack, então lutas longas contra o mesmo SF doem cada vez mais.
- o que você faz com ele: antes do BKB, Blinding Light empurra 175 de distância e cega, atrapalhando o posicionamento de Shadow Fiend pra alinhar Shadowraze/Requiem; Illuminate ainda alcança mais longe que qualquer magia dele fora do Requiem, então KotL nega o farm de souls cedo.
- itens que viram: o Aghanim's Scepter de Shadow Fiend (reduz cooldown e devolve o Requiem curando ele) não muda o duelo direto mas aumenta a frequência da ameaça; do lado do KotL, Glimmer Cape ou Lotus Orb tiram o foco quando SF mira o combo de perto.
- como jogar: mantenha distância do alcance de Requiem (1000 de raio a partir de Shadow Fiend) em qualquer luta de grupo depois dos 25 min; antes disso, use o alcance maior de Illuminate pra negar o farm de souls que dá poder pro BKB.
- fonte: pro_dados/keeper_of_the_light.json (confrontos); pro_dados/nevermore.json (itens); constants_abilities.json (nevermore_requiem, nevermore_shadowraze1, nevermore_necromastery, keeper_of_the_light_illuminate, keeper_of_the_light_blinding_light); aghs_desc (Shadow Fiend scepter)

## Contra Ember Spirit (ember_spirit)
- placar: KotL vence 74 de 147 (50,3%) (`pro_dados/keeper_of_the_light.json`)
- por que importa: 4º mais jogos de pro contra o KotL (147) e mesma posição 2 (mid) quando o KotL vai pra lane do meio.
- janelas: até 9 min Phase Boots sai aos 9:06 (mediana, 2.173 jogos) e já dá mobilidade pro Ember na lane, enquanto Illuminate ainda é a magia de maior alcance em campo; dos 9 aos 25 min Ember farma rápido com Sleight of Fist e Fire Remnant pra puxar camps, e o Aghanim's Shard dele aos 25:18 (1.882 jogos) devolve uma carga de Remnant toda vez que mata um herói perto, acelerando ainda mais esse ciclo; o Black King Bar aos 27:06 (1.130 jogos) é quando ele passa a poder mergulhar em cima do KotL ignorando Blinding Light.
- o que ele faz com você: Fire Remnant te dá um ponto de teleporte-surpresa, e Searing Chains prende até 2 inimigos próximos em correntes que causam dano por segundo, cancelando a fuga do KotL antes do Force Staff sair do cooldown; Sleight of Fist multiplica o dano de ataque básico em área, o que é letal pros 120 de vida base do KotL.
- o que você faz com ele: Illuminate em canal completo bate mais longe que o alcance de engajamento do Ember antes do remnant virar instantâneo; Chakra Magic sustenta a mana que o combo de Illuminate + Blinding Light consome na guerra de poke de lane do meio.
- itens que viram: o Shard de Ember (recarga de Fire Remnant em kill) aumenta demais a frequência de aparições-surpresa dele depois dos 25 min, então controle de visão nos pontos de flanco importa mais que de costume; Glimmer Cape do KotL ajuda a sobreviver ao primeiro Sleight of Fist de uma emboscada.
- como jogar: na lane, poka com Illuminate antes do Phase Boots dele sair (9 min); depois disso jogue perto de visão de verdade, porque um remnant plantado silenciosamente é o que abre o combo de Searing Chains + Sleight of Fist.
- fonte: pro_dados/keeper_of_the_light.json (confrontos); pro_dados/ember_spirit.json (itens); constants_abilities.json (ember_spirit_fire_remnant, ember_spirit_searing_chains, ember_spirit_sleight_of_fist, keeper_of_the_light_illuminate, keeper_of_the_light_chakra_magic); aghs_desc (Ember Spirit shard)

## Contra Tiny (tiny)
- placar: KotL vence 83 de 137 (60,6%) (`pro_dados/keeper_of_the_light.json`)
- por que importa: 5º mais jogos de pro contra o KotL (137); raramente compartilham lane (Tiny é carry 1), mas é o segundo exemplo de "carry que não cruza lane mas decide o 1x1 fora dela", e o placar favorece muito o KotL porque o alcance de Illuminate nega o Tiny parado, lento, sem blink.
- janelas: até 15 min Tiny é lento e sem gap-close, então Illuminate poka livre; Blink Dagger sai aos 15:54 (mediana, 2.546 jogos) e é o divisor real, antes disso ele raramente consegue pegar o KotL pra combo de Toss + Avalanche; Echo Sabre aos 12:06 (1.317 jogos) ajuda o farm antes do blink; Black King Bar aos 26:42 (1.148 jogos) tira o medo de Blinding Light na hora de iniciar.
- o que ele faz com você: Toss pega qualquer unidade em 300 de raio e arremessa pra onde ele mandar, combinado com Avalanche vira um combo de stun mais dano alto o bastante pra matar o KotL se ele for pego sem vida cheia; depois do nível 10 Grow aumenta ainda mais o dano do Toss.
- o que você faz com ele: antes dos 15:54, Illuminate ganha qualquer troca de poke porque Tiny não tem como chegar perto; Blinding Light empurra Tiny 175 de distância e cega, o suficiente pra evitar que ele pegue o KotL dentro do raio de 300 do Toss.
- itens que viram: o Shard de Tiny (Toss e Tree Throw causam mais dano e lentidão em área maior) vira a arma de poke dele depois de craftado, mas só ajuda se ele já tiver blink pra se aproximar; Force Staff do KotL tira ele de 300 de raio antes do Toss sair.
- como jogar: fique fora de 300 de distância de Tiny sempre que ele estiver visível e sem vida pra confirmar Toss; antes dos 15 min, pressione com Illuminate pra atrasar o farm que leva ao blink.
- fonte: pro_dados/keeper_of_the_light.json (confrontos); pro_dados/tiny.json (itens); constants_abilities.json (tiny_toss, tiny_avalanche, tiny_grow, keeper_of_the_light_illuminate, keeper_of_the_light_blinding_light); aghs_desc (Tiny shard)

## Contra Windranger (windrunner)
- placar: KotL vence 70 de 130 (53,8%) (`pro_dados/keeper_of_the_light.json`)
- por que importa: 6º mais jogos de pro contra o KotL (130) e mesma posição quando os dois vão de suporte 4.
- janelas: até 13 min, poke de skillshot contra poke de canal, Illuminate ainda vence em alcance bruto; Maelstrom sai aos 13:24 (mediana, 1.452 jogos) e acelera o farm de Windranger pro meio-jogo; o Black King Bar dela aos 24:24 (1.059 jogos) é quando ela ignora Blinding Light pra focar o combo de Shackleshot; Mjollnir aos 18:18 (979 jogos) e Focus Fire tarde de jogo shredam qualquer suporte parado.
- o que ele faz com você: Shackleshot prende o KotL numa árvore ou unidade atrás dele por até vários segundos se o posicionamento for ruim, abrindo o combo completo; Windrun dá evasão a ataque físico e velocidade, então ela foge de perseguições do KotL fácil (mas não evade o dano mágico de Illuminate).
- o que você faz com ele: Illuminate em canal completo ainda acerta mais longe que Powershot em arco reto; Blinding Light cega os ataques básicos dela, cortando parte do dano de Focus Fire tardio.
- itens que viram: o Shard de Windranger (rajada de vento que empurra todo mundo numa direção) dá mais um jeito de separar o KotL dos aliados antes do combo; o Aghanim's Scepter dela (Tailwind undispellable e mais longo) aumenta a mobilidade de fuga/perseguição, então Force Staff do KotL fica mais importante pra não ser pego isolado.
- como jogar: evite ficar alinhado com árvore ou unidade atrás de você quando Windranger estiver com Shackleshot pronto; use o alcance de Illuminate pra negar antes dos 13 min.
- fonte: pro_dados/keeper_of_the_light.json (confrontos); pro_dados/windrunner.json (itens); constants_abilities.json (windrunner_shackleshot, windrunner_windrun, windrunner_focusfire, keeper_of_the_light_illuminate, keeper_of_the_light_blinding_light); aghs_desc (Windranger scepter e shard)

## Contra Tusk (tusk)
- placar: KotL vence 66 de 127 (52,0%) (`pro_dados/keeper_of_the_light.json`)
- por que importa: suporte 4/5 com mais jogos contra o KotL depois do trio Hoodwink/Rubick/Windranger (127 jogos), um iniciador que caça especificamente suportes squishy em qualquer parte do mapa.
- janelas: até 19 min Tusk ainda não tem Blink Dagger, então ele depende de Snowball a pé pra chegar perto, fácil de ler e fugir; Blink sai aos 19:00 (mediana, 2.655 jogos), virando o ponto em que ele pode aparecer do nada em cima do KotL; Tranquil Boots aos 8:24 (1.618 jogos) sustentam ele na fase inicial.
- o que ele faz com você: Ice Shards cria uma parede que trava o KotL num ponto por 4s, ótimo setup pra Walrus Kick, que dá dano, lentidão e stun em área; Snowball, depois do blink, vira um combo surpresa de longa distância que soma dano e stun por aliado dentro da bola.
- o que você faz com ele: Blinding Light empurra Tusk e aliados pra fora do raio antes do Snowball ganhar velocidade; Illuminate poka de longe antes do blink dele, forçando Tusk a gastar Ice Shards só pra conseguir se aproximar.
- itens que viram: o Aghanim's Shard de Tusk (puxa um aliado pra perto, ou puxa o próprio Tusk no alt-cast) dá mais uma forma de iniciação rápida, então controle de visão nos flancos vira prioridade; Force Staff do KotL ajuda a sair de cima da parede de Ice Shards antes do Kick.
- como jogar: evite ficar parado perto de parede/terreno estreito onde Ice Shards consegue te prender; depois dos 19 min, jogue perto de visão real porque o blink de Tusk não dá aviso.
- fonte: pro_dados/keeper_of_the_light.json (confrontos); pro_dados/tusk.json (itens); constants_abilities.json (tusk_ice_shards, tusk_snowball, tusk_walrus_kick, keeper_of_the_light_illuminate, keeper_of_the_light_blinding_light); aghs_desc (Tusk shard)

## Contra Storm Spirit (storm_spirit)
- placar: KotL vence 65 de 125 (52,0%) (`pro_dados/keeper_of_the_light.json`)
- por que importa: mid clássico contra o KotL de posição 2 (125 jogos), o tipo de duelo onde a mobilidade de Ball Lightning ameaça anular o alcance que deveria proteger o KotL.
- janelas: até 13 min Storm tem mana curta e pouco alcance, Illuminate vence a troca de poke fácil; Kaya and Sange sai aos 20:06 (mediana, 1.787 jogos) e é o divisor real, com mais mana e dano mágico o Ball Lightning dele passa a cobrir qualquer distância do mapa; Black King Bar aos 26:06 (1.072 jogos) tira o medo de Blinding Light na hora de engajar.
- o que ele faz com você: Ball Lightning fecha qualquer distância gastando mana proporcional ao percurso, então depois do pool de mana crescer (post Kaya and Sange) nenhum canto do mapa é seguro pro KotL; Electric Vortex puxa o alvo pra cima de Storm antes do combo, cancelando qualquer tentativa de recuo.
- o que você faz com ele: antes dos 13 min, Illuminate em canal completo nega o farm de Storm, que depende de orbs e stick pra sobreviver a troca; Chakra Magic devolve mana rápido o bastante pra sustentar o poke numa guerra de atrito que Storm, sem Chakra próprio, perde.
- itens que viram: o Aghanim's Shard de Storm (3 cargas de Overload com bônus de velocidade de ataque pro time) acelera combos em grupo depois de craftado; Glimmer Cape ou Force Staff do KotL ajudam a sobreviver ao primeiro Ball Lightning de uma rotação surpresa.
- como jogar: controle onde seu mana está visível no minimapa depois dos 20 min, porque Storm rota pra qualquer ponto com mana sobrando; antes disso, pressione a lane com Illuminate pra atrasar o farm dele.
- fonte: pro_dados/keeper_of_the_light.json (confrontos); pro_dados/storm_spirit.json (itens); constants_abilities.json (storm_spirit_ball_lightning, storm_spirit_electric_vortex, keeper_of_the_light_illuminate, keeper_of_the_light_chakra_magic); aghs_desc (Storm Spirit shard)

## Contra Disruptor (disruptor)
- placar: KotL vence 61 de 114 (53,5%) (`pro_dados/keeper_of_the_light.json`)
- por que importa: suporte 4/5 que mais aparece contra o KotL depois do grupo acima (114 jogos), e o único da lista com um silêncio em área que desliga o kit inteiro do KotL.
- janelas: até 11 min Disruptor ainda não tem Static Storm, só Thunder Strike de alcance curto, então Illuminate vence o poke fácil; Arcane Boots saem aos 11:24 (mediana, 2.248 jogos) sustentando a mana pro combo de nível 6; o combo completo de Kinetic Field + Static Storm só fica redondo a partir do nível 6, e o Blink de Disruptor aos 24:00 (1.128 jogos) é quando ele passa a conseguir se posicionar pra isso sem ser visto chegando.
- o que ele faz com você: Kinetic Field cria uma parede circular que prende o KotL dentro com os aliados dele, e Static Storm silencia tudo lá dentro, desligando Illuminate, Blinding Light e Chakra Magic ao mesmo tempo, o pesadelo de um herói que só tem magia.
- o que você faz com ele: Illuminate alcança mais longe que Thunder Strike antes do nível 6 e nega a visão de wards de Disruptor, que também é suporte de baixo HP; Blinding Light empurra Disruptor pra fora de alcance antes dele formar o combo de prisão.
- itens que viram: o Aghanim's Scepter de Disruptor silencia até itens ativos, então qualquer plano de fuga por item do KotL deixa de funcionar dentro da Static Storm; Lotus Orb no KotL reflete magias direcionadas, mas não ajuda contra a área de Static Storm.
- como jogar: nunca entre em luta sem saber onde Disruptor está parado, porque o combo de prisão não avisa; fora da janela de silêncio, o alcance de Illuminate domina a troca.
- fonte: pro_dados/keeper_of_the_light.json (confrontos); pro_dados/disruptor.json (itens); constants_abilities.json (disruptor_kinetic_field, disruptor_static_storm, keeper_of_the_light_illuminate, keeper_of_the_light_blinding_light, keeper_of_the_light_chakra_magic); aghs_desc (Disruptor scepter)

## Contra Queen of Pain (queenofpain)
- placar: KotL vence 73 de 111 (65,8%) (`pro_dados/keeper_of_the_light.json`)
- por que importa: mesma posição 2 (111 jogos) e a maior vantagem do KotL entre os mids, porque Queen of Pain não tem alcance pra brigar com Illuminate antes do Blink dela.
- janelas: até 11 min Queen of Pain não tem gap-close e seu Shadow Strike/Scream of Pain têm alcance curto, então Illuminate poka livre e nega farm; o Blink dela é inato desde o nível 1 mas o combo de kill só fica forte depois de Kaya and Sange aos 20:48 (mediana, 1.512 jogos); o Aghanim's Scepter dela aos 23:30 (1.396 jogos) transforma Shadow Strike numa AoE de 375 de raio que espalha Scream of Pain, mudando o perfil de dano de single-target pra área.
- o que ele faz com você: Blink + Sonic Wave é o combo clássico de queda de burst, empurra e causa dano alto em cima do KotL de 120 de vida base; depois do scepter, Shadow Strike em área ameaça todo o time do KotL de uma vez, não só ele.
- o que você faz com ele: antes do nível 6, Illuminate nega qualquer tentativa de aproximação porque ela não tem como chegar perto sem levar dano; Blinding Light cega e empurra antes do blink curto dela conseguir fechar o combo.
- itens que viram: o Shard dela (sonic boom nos dois pontos do Blink, com silêncio) vira uma arma de zoneamento mesmo sem conectar o combo principal; Glimmer Cape do KotL ajuda a sumir antes do burst completo.
- como jogar: pressione a lane com Illuminate antes do nível 6; depois disso, não fique no alcance de blink dela sem vida de sobra pra levar o combo Shadow Strike + Sonic Wave.
- fonte: pro_dados/keeper_of_the_light.json (confrontos); pro_dados/queenofpain.json (itens); constants_abilities.json (queenofpain_blink, queenofpain_sonic_wave, queenofpain_scream_of_pain, keeper_of_the_light_illuminate, keeper_of_the_light_blinding_light); aghs_desc (Queen of Pain scepter e shard)

## Contra Alchemist (alchemist)
- placar: KotL vence 25 de 36 (69,4%, amostra pequena pro padrão de 30+ mas ainda dentro do critério) (`pro_dados/keeper_of_the_light.json`)
- por que importa: maior vantagem do KotL da lista (69,4% em 36 jogos); quase nunca compartilham lane, Alchemist é carry 1 de safelane e o KotL suporte 4/2, mas é o exemplo direto do pedido original, dois heróis que raramente se enfrentam na lane mas cujos power spikes decidem o jogo fora dela.
- janelas: até 14 min Alchemist já é uma bomba de farm sozinho, Radiance sai aos 13:54 (mediana, 672 jogos) e detona o ritmo de farm dele; o Aghanim's Scepter dele aos 22:24 (612 jogos) já fica pronto pra derreter e passar os upgrades de Scepter pra um aliado; o Black King Bar só sai aos 25:06 (443 jogos), ou seja, por mais de 20 minutos Alchemist não tem defesa contra magia.
- o que ele faz com você: Unstable Concoction carregado ao máximo (5s) causa dano e stun em área grandes o bastante pra matar um suporte sozinho se acertar; depois do BKB (25 min), ele passa a poder atravessar Illuminate e Blinding Light pra confirmar o kill.
- o que você faz com ele: como eles raramente se enfrentam na lane, o duelo real é de caçada, Illuminate alcança mais longe que qualquer visão de ward que Alchemist tenha, então o KotL consegue negar os camps de jungle que sustentam o farm insano dele antes do BKB sair; Blinding Light cega e empurra antes do Unstable Concoction carregar.
- itens que viram: o Aghanim's Scepter de Alchemist (derrete e transfere os upgrades de Scepter pra um aliado, enquanto o próprio Alchemist ganha dano bônus e mais ouro fixo de Greevil's Greed) muda o jogo de equipe inteiro, não o 1x1 direto; Force Staff do KotL ajuda a escapar do raio do Unstable Concoction antes da explosão.
- como jogar: gankeie o farm de Alchemist antes dos 25 min usando o alcance de Illuminate pra negar camps grandes à distância; depois do BKB dele, não entre no raio do Unstable Concoction carregado.
- fonte: pro_dados/keeper_of_the_light.json (confrontos); pro_dados/alchemist.json (itens); constants_abilities.json (alchemist_unstable_concoction, alchemist_goblins_greed, keeper_of_the_light_illuminate, keeper_of_the_light_blinding_light); aghs_desc (Alchemist scepter)

## Contra Lina (lina)
- placar: KotL vence 39 de 57 (68,4%) (`pro_dados/keeper_of_the_light.json`)
- por que importa: 2ª maior vantagem do KotL (68,4% em 57 jogos) e mesma posição quando os dois vão de suporte 4 ou disputam a lane do meio.
- janelas: até 11 min Dragon Slave e Light Strike Array têm bem menos alcance que Illuminate, então o KotL domina a troca cedo; Maelstrom sai aos 11:06 (mediana, 624 jogos) acelerando o farm de Lina; o Aghanim's Scepter dela é incomumente cedo, aos 19:12 (650 jogos), e dá stacks máximos de Fiery Soul na hora, um salto de velocidade de ataque, movimento e cooldown instantâneo.
- o que ele faz com você: Light Strike Array stuna em área, abrindo pra um Laguna Blade de dano único alto o bastante pra matar o KotL fora de Aeon Disk; depois do scepter, ela luta com velocidade de ataque e movimento muito acima da curva normal pra posição dela.
- o que você faz com ele: Illuminate alcança bem mais longe que Dragon Slave e Light Strike Array antes do nível 6, então KotL nega a lane; Blinding Light cega e empurra antes do combo de Laguna Blade conseguir ser confirmado de perto.
- itens que viram: o Shard de Lina (Laguna Blade dá stacks de Fiery Soul) aumenta a frequência de picos de mobilidade dela em luta; Aeon Disk ou Lotus Orb no KotL respondem diretamente ao burst de Laguna Blade.
- como jogar: mantenha distância do alcance de Light Strike Array; depois do scepter dela (19 min), não dependa só de Blinding Light pra escapar porque a velocidade de movimento dela sobe muito nesse momento.
- fonte: pro_dados/keeper_of_the_light.json (confrontos); pro_dados/lina.json (itens); constants_abilities.json (lina_laguna_blade, lina_light_strike_array, keeper_of_the_light_illuminate, keeper_of_the_light_blinding_light); aghs_desc (Lina scepter e shard)

## Contra Warlock (warlock)
- placar: KotL vence 58 de 85 (68,2%) (`pro_dados/keeper_of_the_light.json`)
- por que importa: 3ª maior vantagem do KotL (68,2% em 85 jogos), outro suporte 5 de longo alcance, mas sem nada que chegue perto do alcance de Illuminate antes do nível 6.
- janelas: até 10 min os dois trocam pouco dano direto, Warlock depende de Fatal Bonds e Shadow Word pra impacto; Arcane Boots saem aos 10:42 (mediana, 2.130 jogos); o combo de Chaotic Offering (2 golens com o Aghanim's Scepter) fica disponível desde o nível 6, mas a ameaça real cresce com Glimmer Cape aos 20:30 (1.205 jogos) e Solar Crest aos 22:12 (799 jogos), itens de proteção de equipe, não de dano direto.
- o que ele faz com você: Fatal Bonds espalha uma fração do dano recebido entre os alvos ligados, então se o KotL for amarrado com aliados mais tanques ele sofre menos dano líquido, mas se for amarrado sozinho com outro suporte squishy o combo mata os dois juntos; o Golem de Rain of Chaos stuna e depois bate forte com Flaming Fists, e toma menos dano de magia, então Illuminate rende menos contra ele.
- o que você faz com ele: Illuminate alcança muito mais longe que Shadow Word ou Fatal Bonds, então KotL nega a lane de Warlock com folga antes do nível 6; Chakra Magic sustenta a mana da guerra de poke que Warlock, sem fonte de sustain rápida, perde.
- itens que viram: o Aghanim's Scepter de Warlock (2 Golems ao invés de 1) muda o impacto dele em teamfight de grupo, não o 1x1; Glimmer Cape e Solar Crest de Warlock aumentam a sobrevivência do time dele contra o poke de Illuminate, então o KotL precisa de burst em alvo isolado pra compensar.
- como jogar: pressione o poke antes do nível 6; evite ficar perto de aliados frágeis quando Warlock conseguir aplicar Fatal Bonds em grupo.
- fonte: pro_dados/keeper_of_the_light.json (confrontos); pro_dados/warlock.json (itens); constants_abilities.json (warlock_fatal_bonds, warlock_rain_of_chaos, keeper_of_the_light_illuminate, keeper_of_the_light_chakra_magic); aghs_desc (Warlock scepter)

## Contra Treant Protector (treant)
- placar: KotL vence 27 de 71 (38,0%, pior matchup da lista com amostra de 30+) (`pro_dados/keeper_of_the_light.json`)
- por que importa: pior matchup do KotL com amostra boa (38,0% em 71 jogos), um bully de lane com HP alto que ignora a troca de magia e ainda prende o KotL sem chance de fuga.
- janelas: até 12 min Treant já vence a troca de corpo a corpo por HP e regen naturais, mesmo levando Illuminate; Arcane Boots saem aos 12:00 (mediana, 915 jogos); o Aghanim's Shard dele é incomumente cedo, aos 19:00 (660 jogos), dando olhos em árvores que viram emboscada de longe; Blink Dagger aos 26:24 (889 jogos) fecha o combo de iniciação tarde de jogo.
- o que ele faz com você: Overgrowth cria uma raiz em área que impede o alvo de se mover, piscar (blink), ficar invisível ou atacar, e Leech Seed enraíza e desarma no impacto do ataque básico, dois jeitos de prender o KotL de 120 de vida base sem chance de reagir; Nature's Guise deixa ele invisível perto de árvore pra abrir o combo sem aviso.
- o que você faz com ele: Illuminate ainda causa mais dano de longe do que qualquer coisa que Treant tem na lane, mas ele tanka bem porque o HP base dele é alto; Blinding Light cega e empurra antes do Overgrowth sair, a única defesa real do KotL contra a prisão.
- itens que viram: o Shard de Treant (olhos em árvore que duram 360s e ficam invisíveis até serem atacados) dá visão de emboscada em qualquer ponto do mapa cheio de árvore, tornando o KotL alvo fácil fora da lane; Lotus Orb no KotL não ajuda contra Overgrowth porque não é um alvo direcionado único.
- como jogar: não gaste mana em troca de Illuminate contra o HP alto do Treant, é farm ineficiente; depois dos 19 min, assuma que qualquer árvore pode estar com olho de Treant e evite rotas cheias de floresta sem necessidade.
- fonte: pro_dados/keeper_of_the_light.json (confrontos); pro_dados/treant.json (itens); constants_abilities.json (treant_overgrowth, treant_leech_seed, treant_natures_guise, keeper_of_the_light_illuminate, keeper_of_the_light_blinding_light); aghs_desc (Treant Protector shard)

## Contra Venomancer (venomancer)
- placar: KotL vence 16 de 38 (42,1%, 2º pior matchup com amostra de 30+) (`pro_dados/keeper_of_the_light.json`)
- por que importa: 2º pior matchup do KotL (42,1% em 38 jogos), veneno em cima do HP baixo do KotL dura mais do que qualquer troca de poke consegue compensar.
- janelas: até 9 min Urn of Shadows sai aos 9:00 (mediana, 488 jogos) e já sustenta Venomancer na lane; dos 9 aos 17 min ele planta Plague Wards e nega território, chegando ao Spirit Vessel aos 17:12 (348 jogos), que soma redução de regeneração em cima do próprio veneno; Mekansm tarde, aos 20:12 (253 jogos), mostra que mesmo em pro ele vira item de suporte de equipe, não só de lane.
- o que ele faz com você: Venomous Gale aplica dano inicial mais dano ao longo do tempo e lentidão numa linha, e Noxious Plague multiplica esse efeito em cima da vida máxima do alvo e ainda espalha pros aliados por perto quando acaba, dano que o KotL de 120 de HP base não aguenta sustentar numa troca longa.
- o que você faz com ele: Illuminate ainda alcança mais longe que Venomous Gale na abertura da lane, mas o veneno aplicado continua ticando mesmo depois do KotL recuar, então a troca é perdida no acumulado; Blinding Light cega os ataques dos Plague Wards.
- itens que viram: o Aghanim's Scepter de Venomancer reduz a resistência mágica do alvo infectado, piorando ainda mais a troca de Illuminate contra ele; Spirit Vessel do próprio Venomancer já reduz a cura que o KotL conseguiria puxar de Chakra Magic/regen.
- como jogar: evite ficar no veneno depois do primeiro acerto, o dano continua mesmo fora de alcance; jogue a lane com cautela e não force troca direta de magia sem vantagem de nível.
- fonte: pro_dados/keeper_of_the_light.json (confrontos); pro_dados/venomancer.json (itens); constants_abilities.json (venomancer_venomous_gale, venomancer_noxious_plague, keeper_of_the_light_illuminate, keeper_of_the_light_blinding_light); aghs_desc (Venomancer scepter)

## Contra Monkey King (monkey_king)
- placar: KotL vence 24 de 56 (42,9%, 3º pior matchup com amostra de 30+) (`pro_dados/keeper_of_the_light.json`)
- por que importa: 3º pior matchup do KotL (42,9% em 56 jogos), um true strike que ignora qualquer evasão/escape e um Diffusal que queima justo a mana que sustenta o kit inteiro do KotL.
- janelas: até 13 min Power Treads saem aos 6:00 (mediana, 994 jogos) e Monkey King já farma rápido com Jingu Mastery; Echo Sabre aos 13:30 (397 jogos) e Diffusal Blade aos 14:06 (330 jogos) dão o primeiro pico de dano e queima de mana; Desolator aos 18:18 (512 jogos) reduz a armadura do alvo, e o Black King Bar aos 24:54 (646 jogos) remove o medo de Blinding Light na hora de iniciar.
- o que ele faz com você: Boundless Strike tem true strike, então não existe evasão ou chance de erro, stuna em linha e dá dano crítico; Diffusal Blade queima a mana do KotL, que depende de mana pra tudo no kit (Illuminate, Blinding Light, Chakra); Wukong's Command soca de longe com soldados que focam herói, difícil de fugir sem Force Staff a postos.
- o que você faz com ele: Illuminate ainda poka de mais longe na lane, mas Tree Dance e Primal Spring dão mobilidade extra pra Monkey King se aproximar sem ficar muito tempo exposto; Blinding Light cega os ataques básicos dele, inclusive os dos soldados de Wukong's Command.
- itens que viram: o Aghanim's Shard de Monkey King (Boundless Strike aplica Primal Spring, dano e lentidão extras, ao longo do cajado) torna o combo de stun muito mais difícil de escapar depois dos 25 min; Manta Style ou Lotus Orb no KotL ajudam a limpar o root do Diffusal antes que a mana acabe.
- como jogar: guarde mana de sobra sempre que Monkey King tiver Diffusal, porque ele pode te deixar sem recurso pro resto da luta; evite ficar em linha reta com aliados, onde Boundless Strike acerta todo mundo.
- fonte: pro_dados/keeper_of_the_light.json (confrontos); pro_dados/monkey_king.json (itens); constants_abilities.json (monkey_king_boundless_strike, monkey_king_wukongs_command, monkey_king_tree_dance, keeper_of_the_light_illuminate, keeper_of_the_light_blinding_light); aghs_desc (Monkey King shard)
