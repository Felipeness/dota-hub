---
id: ficha-venomancer
titulo: "Venomancer"
heroi: Venomancer
patch: 7.41
posicoes: [5, 4]
fontes:
- C:/Users/felip/Desktop/dota-tier1/data/jogadores_partida.csv
- C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- https://dotacoach.gg/en/heroes/venomancer
- https://dotacoach.gg/en/heroes/venomancer/builds/support
- https://liquipedia.net/dota2/Venomancer/Changelogs
---
## Resumo

Venomancer é suporte de poke e controle de área: Venomous Gale e Noxious Plague fazem dano ao longo do tempo e espalham pra quem chega perto, Plague Ward empurra lane e torre, e Snakebite pune quem ataca enquanto envenenado. No patch 7.41f ele é quase só suporte: dotacoach.gg lista Support com 47,5% de seleção e 47,6% de vitória e Hard Support com 46,3% de seleção e 48,4% de vitória, contra só 3,3% (44,1%) na offlane, 2,4% (42,1%) no mid e 0,5% (38,8%) na carry (22.658 / 22.091 / 1.589 / 1.133 / 227 partidas). Nos 56 jogos pro do 7.41 na amostra local (dota-tier1), a mesma divisão aparece: 47 como pos 5 (84%) e 9 como pos 4 (16%), sem nenhum jogo de pos 1 a 3.

## Pos 5 (suporte duro)

- quando pegar: é o papel padrão do herói. Fonte: dotacoach.gg (Hard Support, 46,3% de seleção, 48,4% de vitória, 22.091 partidas no 7.41f) e amostra local dota-tier1 (47 de 56 jogos pro, 84%).
- itens iniciais: tango, clarity, blood_grenade, ward_observer, ward_sentry, smoke_of_deceit, enchanted_mango

### Build

#### Boots of Speed (boots)
- minuto: 6,6
- porque: mobilidade pra plugar sentry e observer e reagir a gank sem perder XP de lane.
- detalhe: Veno não precisa de bota especial pra farmar, então Boots puro segura o começo. A troca por Arcane só acontece depois que o time já tem visão básica no mapa.
- fonte: dota-tier1 pos5 (45/47 jogos, 96%)

#### Ring of Basilius (ring_of_basilius)
- minuto: 9,6
- porque: aura de regen de mana segura o espam de Venomous Gale sem secar aos 10 min.
- detalhe: dá +1 de regen de mana em 1200 de raio (também pro aliado de lane). Com mana base baixa e Gale custando 95 a 125, é isso que mantém o harass constante na fase de lane.
- fonte: items.json; dota-tier1 pos5 (27/47 jogos, 57%)

#### Magic Wand (magic_wand)
- minuto: 10,8
- porque: carrega até 20 cargas de HP/mana pra sobreviver a um all-in sem gastar CD de feitiço.
- detalhe: ganha carga quando inimigo visível em 1200 de raio casta feitiço, então numa lane de trade constante ele enche rápido. É o item de emergência antes de qualquer burst do Veno estar pronto.
- fonte: items.json; dota-tier1 pos5 (43/47 jogos, 91%)

#### Urn of Shadows (urn_of_shadows)
- minuto: 10,4
- porque: transforma o kill da lane em cura de carga pro time ou dano direto no inimigo.
- detalhe: toda vez que um herói morre em 1500 de raio o urn ganha carga; usar a carga num aliado cura (30 de regen por 8s), num inimigo causa 25 de dano por segundo por 8s. Não revela nada, só dano e cura. Como Veno já força trade com Gale, é o item que capitaliza a primeira morte da lane.
- fonte: items.json; dota-tier1 pos5 (32/47 jogos, 68%)

#### Arcane Boots (arcane_boots)
- minuto: 12,6
- porque: a aura de mana pro time inteiro é o que sustenta um herói que vive de castar feitiço toda wave.
- detalhe: upa a bota pra +125 de mana e aura de 1 de regen em 1200 de raio. É o item que faz o Veno parar de ficar sem mana no meio da rotação de gank.
- fonte: items.json; dota-tier1 pos5 (26/47 jogos, 55%)

#### Spirit Vessel (spirit_vessel)
- minuto: 18,1
- porque: Despair corta 70% da cura e regen do inimigo marcado por 8s, anulando sustain de lifesteal e cura de feitiço.
- detalhe: upgrade do Urn (+ Diadem). A carga de dano em inimigo aplica o debuff Despair por 8s: reduz a cura/regen em 70%, soma 25 de dano por segundo e mais 4% da vida atual por segundo. Junto com o DoT de Venomous Gale e Noxious Plague, o alvo praticamente não se recupera enquanto o debuff dura.
- contra: heróis que dependem de lifesteal ou cura de feitiço pra sobreviver ao poke (quem fecha com Satanic, Morbid Mask ou está sob Rejuvenate/Mekansm aliado).
- fonte: items.json; dota-tier1 pos5 (19/47 jogos, 40%)

#### Pavise (pavise)
- minuto: 20,4
- porque: barreira de 250 de dano no aliado certo segura o primeiro nuke de uma iniciação.
- detalhe: dá +175 de vida/mana e um escudo de 250 por 7s em quem recebe o cast. Normalmente vai no carry ou em quem o time inimigo for focar primeiro na troca.
- fonte: items.json; dota-tier1 pos5 (21/47 jogos, 45%)

#### Solar Crest (solar_crest)
- minuto: 24,0
- porque: upa a barreira pra 350 e soma +5 de armadura, +60 de velocidade de ataque e +15% de velocidade de movimento no aliado, pra fechar luta ou empurrar estrutura/Roshan.
- detalhe: upgrade do Pavise (+ chainmail + wind lace). Só pode ser usado em aliado (não existe versão negativa em inimigo nesse patch); usado em si mesmo não dá o bônus de armadura/velocidade, só a barreira. Compartilha cooldown com Pavise, então não empilha os dois escudos ao mesmo tempo.
- fonte: items.json; dota-tier1 pos5 (20/47 jogos, 43%)

#### Force Staff (force_staff)
- minuto: 26,7
- porque: empurra aliado 600 de distância pra fora de range de burst, ou empurra inimigo pra dentro do próprio time, sem travar a ação de quem recebe.
- detalhe: não interrompe o que o alvo tá fazendo (dá pra usar em aliado no meio de uma skill) e tem alcance de 850 quando usado em inimigo. É o save clássico de suporte e também serve pra empurrar um inimigo isolado pra dentro da zona de Plague Ward.
- fonte: items.json; dota-tier1 pos5 (29/47 jogos, 62%)

#### Gem of True Sight (gem)
- minuto: 29,6
- porque: dá visão verdadeira fixa num raio de 900 sem gastar cooldown de Dust, essencial pra segurar pick de invisível.
- detalhe: carregado por um aliado (não pelo courier), ilumina qualquer coisa invisível ao redor em 900 de raio. Como Veno já quer ficar perto do time pra Noxious Plague e pra plugar Plague Ward em posição segura, ele costuma ser quem carrega.
- contra: heróis invisíveis que dependem de flanco (Clinkz, Riki, Weaver saindo da forma, Templar Assassin em refração).
- fonte: items.json; dota-tier1 pos5 (28/47 jogos, 60%)

#### Aghanim's Scepter (ultimate_scepter)
- minuto: 39,5
- porque: upgrade de Noxious Plague. Corta 35s do cooldown da ulti, reduz 20% a resistência mágica de quem é infectado e faz os espalhamentos adicionais causarem o dano de impacto de novo (sem o Scepter, só o primeiro alvo leva o dano de impacto).
- detalhe: vira muito mais cooldown pra castar Noxious Plague em mais de um alvo por luta, e o corte de resistência mágica soma com o resto do DoT (Gale, Plague Ward) pra matar mais rápido. Poison Sting e Septic Shock (dano extra por autoataque conforme stacks de debuff) já são passivas inatas do herói, não dependem de Scepter.
- fonte: constants_abilities.json (Poison Sting e Septic Shock marcados is_innate); dotacoach.gg/en/heroes/venomancer; dota-tier1 pos5 (17/47 jogos, 36%)

### Situacionais

#### Dust of Appearance (dust)
- minuto: 18,6
- porque: revela e desacelera invisível em 1050 de raio por 12s, mais barato e mais rápido que esperar o Gem.
- detalhe: dano de 25 ao revelar e o debuff de visão persiste 8s depois que o inimigo sai da área. Serve de ponte antes do time ter Gem pronto ou quando o invisível já saiu do alcance do Gem.
- contra: ganks e flancos de herói invisível antes dos 25-30 min.
- fonte: items.json; dota-tier1 pos5 (26/47 jogos, 55%)

#### Glimmer Cape (glimmer_cape)
- minuto: 23,7
- porque: invisibilidade de 5s + 20% de resistência mágica + barreira de 375 salva de burst mágico single-target.
- detalhe: ativa com atraso de 0,5s pra não revelar antes da hora. É a resposta padrão contra nuke mágico alto que mataria o suporte ou o carry antes de qualquer outro item reagir.
- contra: combo de burst mágico (silence + nuke de ultimate) contra o próprio Veno ou contra quem ele quer salvar.
- fonte: items.json; dota-tier1 pos5 (12/47 jogos, 26%)

#### Essence Distiller (essence_distiller)
- minuto: 15,9
- porque: trava num ponto por até 15s e agarra o primeiro inimigo que passar, dando visão verdadeira e 25 de dano por segundo por 8s.
- detalhe: ganha carga quando herói morre em 1500 de raio (mesma lógica do Urn/Vessel). Plugado numa rota de flanco, funciona como sentry que também causa dano e revela forma real.
- contra: heróis que dependem de forma ilusória ou disfarce pra escapar (Spectre em Haunt, Terrorblade em Metamorphosis, Phantom Lancer com Doppelwalk/ilusões, Arc Warden em Tempest Double).
- fonte: items.json; dota-tier1 pos5 (11/47 jogos, 23%)

#### Ghost Scepter (ghost)
- minuto: 30,9
- porque: 4s imune a dano físico (com -30% mais vulnerável a mágico) segura o burst de um carry right-click.
- detalhe: não permite atacar enquanto ativo, então é puramente defensivo. Vira a resposta direta quando o time que está matando o Veno é físico, não mágico.
- contra: carries de dano físico puro fechando crit/attack speed (ex.: quem está pegando Rapier ou já tem BKB pra ignorar o Ghost Form do time).
- fonte: items.json; dota-tier1 pos5 (9/47 jogos, 19%)

#### Blink Dagger (blink)
- minuto: 48,1
- porque: 1200 de alcance pra plugar Snakebite ou Noxious Plague em alvo isolado sem precisar de setup prévio.
- detalhe: não pode ser usado nos 3s depois de levar dano de herói ou Roshan, então exige iniciar antes de ser visto. Encurta a distância que falta no kit do Veno, que não tem gap-close próprio.
- combo: Blink + Snakebite (dano inicial + DoT) + Venomous Gale no grupo = abre a troca antes do time inimigo reagir.
- fonte: items.json; constants_abilities.json (Snakebite); dota-tier1 pos5 (9/47 jogos, 19%)

#### Pipe of Insight (pipe)
- minuto: 32,2
- porque: barreira de dano mágico em área absorve nuke de ultimate em grupo antes de entrar na teamfight.
- detalhe: item de time clássico contra composições de dano mágico em área. Como o Veno já está perto do grupo pra castar Noxious Plague, costuma ser ele quem carrega quando ninguém mais pegou.
- contra: ultimates de dano mágico em área (nuke de grupo tipo Chain Frost, Black Hole, Epicenter).
- fonte: items.json; dota-tier1 pos5 (4/47 jogos, 9%)

#### Aghanim's Shard (aghanims_shard)
- minuto: 50,5
- porque: upgrade de Venomous Gale. Aumenta 25% o alcance de cast e a velocidade do projétil, e quando a bola acerta um herói inimigo cria 2 Plague Wards em volta dele.
- detalhe: o alcance maior ajuda a acertar o Gale de mais longe sem se expor, e os 2 Plague Wards de brinde dão dano e visão extra na zona onde o alvo foi pego, sem precisar castar Plague Ward de novo.
- fonte: dotacoach.gg/en/heroes/venomancer; dota-tier1 pos5 (4/47 jogos, 9%)

## Pos 4 (suporte de roaming)

- quando pegar: papel secundário do herói, puxado quando o time já tem outro suporte pra segurar a lane difícil e quer o Force Staff/Pavise do Veno mais rápido pra roam. Amostra pequena (9 de 56 jogos pro, 16%; números abaixo têm menos confiança que os de pos 5). Fonte: dota-tier1.
- itens iniciais: clarity, tango, blood_grenade, ward_observer, ward_sentry, smoke_of_deceit, enchanted_mango

### Build

#### Boots of Speed (boots)
- minuto: 6,7
- porque: mobilidade pra cobrir mapa em roam, igual no pos 5.
- detalhe: mesmo raciocínio do pos 5, só que aqui a prioridade de rotação é maior que a de segurar uma lane fixa.
- fonte: dota-tier1 pos4 (9/9 jogos, 100%)

#### Magic Wand (magic_wand)
- minuto: 10,7
- porque: reserva de HP/mana pra sobreviver ao primeiro gank que der errado fora da lane.
- detalhe: timing praticamente igual ao pos 5 (10,8 min), o que mostra que isso não muda com o papel, só a lane em si muda.
- fonte: items.json; dota-tier1 pos4 (9/9 jogos, 100%)

#### Arcane Boots (arcane_boots)
- minuto: 12,1
- porque: mesma lógica do pos 5, mana pro time sustentar o combo de feitiços do Veno.
- detalhe: timing quase idêntico ao pos 5 (12,6 min); a diferença de papel não muda quando a bota fica pronta.
- fonte: items.json; dota-tier1 pos4 (6/9 jogos, 67%)

#### Force Staff (force_staff)
- minuto: 20,0
- porque: no roam, Force Staff chega bem antes (20,0 min) do que no pos 5 (26,7 min) porque o papel pede save/iniciação em rota, não farm de lane.
- detalhe: é o item que diferencia o build do pos 4: prioriza mobilidade de time cedo em vez de esperar a sequência completa Urn/Vessel.
- fonte: items.json; dota-tier1 pos4 (6/9 jogos, 67%) vs pos5 (6,7 min de diferença de mediana)

#### Pavise (pavise)
- minuto: 25,2
- porque: mesma função do pos 5, barreira pro aliado que o time for focar.
- detalhe: chega um pouco mais tarde que no pos 5 (20,4 min) porque o gold de roam é mais instável que o de lane fixa.
- fonte: items.json; dota-tier1 pos4 (5/9 jogos, 56%)

#### Solar Crest (solar_crest)
- minuto: 26,8
- porque: upgrade do Pavise, mesma lógica do pos 5.
- detalhe: ver bloco de Solar Crest em Pos 5 para o funcionamento do item; aqui o timing é levemente mais tarde (26,8 vs 24,0 min).
- fonte: items.json; dota-tier1 pos4 (5/9 jogos, 56%)

#### Gem of True Sight (gem)
- minuto: 32,4
- porque: mesma função do pos 5, contra invisibilidade.
- detalhe: timing um pouco mais tarde (32,4 vs 29,6 min), consistente com o roam priorizando mobilidade antes de vision item caro.
- fonte: items.json; dota-tier1 pos4 (5/9 jogos, 56%)

#### Aghanim's Scepter (ultimate_scepter)
- minuto: 34,5
- porque: mesmo upgrade de Noxious Plague do pos 5 (cooldown -35s, -20% resistência mágica no infectado, espalhamento extra repete o dano de impacto).
- detalhe: ver bloco de Aghanim's Scepter em Pos 5. Aqui chega mais rápido (34,5 vs 39,5 min), possivelmente porque o roam gera mais participação em kill cedo.
- fonte: constants_abilities.json; dotacoach.gg/en/heroes/venomancer; dota-tier1 pos4 (4/9 jogos, 44%)

### Situacionais

#### Glimmer Cape (glimmer_cape)
- minuto: 24,3
- porque: mesma função do pos 5, save contra burst mágico.
- detalhe: proporcionalmente mais comum no pos 4 (44% vs 26% no pos 5) porque o roam fica mais exposto a gank isolado.
- contra: burst mágico isolado em rota, sem o resto do time perto pra ajudar.
- fonte: items.json; dota-tier1 pos4 (4/9 jogos, 44%)

#### Spirit Vessel (spirit_vessel)
- minuto: 18,1
- porque: mesma função do pos 5 (corta 70% de cura/regen do inimigo).
- detalhe: menos comum aqui (22% vs 40% no pos 5): o pos 4 troca menos na lane fixa, então tem menos ouro de Urn acumulado pra upar rápido.
- contra: mesmas situações do bloco de Spirit Vessel em Pos 5 (sustain de lifesteal/cura).
- fonte: items.json; dota-tier1 pos4 (2/9 jogos, 22%)

#### Lotus Orb (lotus_orb)
- minuto: 37,7
- porque: reflete feitiço de alvo único de volta em quem castou.
- detalhe: dá +10 de armadura e reflete a próxima habilidade direcionada que acertar o portador. Raro nos dois papéis, mas mais comum no pos 4 da amostra (2/9) do que no pos 5 (1/47).
- contra: heróis que dependem de um disable ou nuke de alvo único específico pra iniciar em cima do suporte.
- fonte: items.json; dota-tier1 pos4 (2/9 jogos, 22%)

## Roshan

Sem dado de Roshan solo.
