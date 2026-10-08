---
id: ficha-oracle
titulo: "Oracle"
heroi: Oracle
patch: 7.41
posicoes: [5, 4]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
- C:/Users/felip/Desktop/dota-tier1/data/partidas/8748904227/meta.json
- https://api.opendota.com/api/heroes/111/itemPopularity
- https://dotacoach.gg/en/heroes/oracle
- https://dotacoach.gg/en/heroes/oracle/builds/support
---

## Resumo
Oracle é o suporte que decide quem sobrevive ao burst: False Promise (ultimate) atrasa dano e cura num alvo, Purifying Flames cura mais do que dano e Fortune's End dispela e enraíza em área. É quase sempre pos 5: no patch 7.41f ele é escolhido como suporte duro em 71,6% dos picks (51,5% de vitória) contra 23,7% como pos 4 (49,8%), e mid/offlane/carry juntos não passam de 5% dos picks com win rate pior (fonte: dotacoach.gg/en/heroes/oracle). O innate Prognosticate avisa onde a próxima rune de poder nasce e qual o minuto exato do respawn de Roshan, então ele participa da decisão de Roshan mesmo sem ser quem bate.

## Pos 5 (suporte duro)
- quando pegar: é o perfil dominante do herói no patch atual, 71,6% dos picks com 51,5% de vitória, contra 23,7%/49,8% no pos 4 (fonte: dotacoach.gg/en/heroes/oracle). O resto das posições é ruído (mid 3,4% a 45,5%, offlane 0,9%, carry 0,3%).
- itens iniciais: tango, blood_grenade, branches, branches, enchanted_mango, ward_observer, ward_sentry

### Build
#### Boots of Speed (boots)
- porque: mobilidade pra estacionar, ward e reagir à lane sem gastar ouro em stats.
- detalhe: primeiro item de todo suporte; some assim que vira Arcane Boots.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Arcane Boots (arcane_boots)
- porque: devolve 150 de mana num raio de 1200 pro time inteiro, não só pro Oracle.
- detalhe: Oracle vive de spammar Purifying Flames e Fortune's End no early game; a aura mantém o time inteiro lançando feitiço sem voltar na base.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://dotacoach.gg/en/heroes/oracle/builds/support

#### Magic Wand (magic_wand)
- porque: carga de HP/mana de graça sempre que alguém gasta uma habilidade perto, sem custo de cooldown.
- detalhe: evolução do Magic Stick da lane; segura trade no 1x1 e dá folga de mana pra spammar Purifying Flames.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://dotacoach.gg/en/heroes/oracle/builds/support

#### Glimmer Cape (glimmer_cape)
- porque: invisibilidade + barreira de 375 de dano mágico por 5s salva o aliado focado antes que o burst feche.
- detalhe: dá pra lançar em si mesmo ou no aliado enquanto já está canalizando outra habilidade.
- contra: combos de nuke mágico que matariam o aliado antes de qualquer cura chegar (a barreira absorve o burst e a invisibilidade tira o alvo do foco).
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://dotacoach.gg/en/heroes/oracle/builds/support

#### Blink Dagger (blink)
- porque: fecha os 1200 de distância que faltam pra alcançar alguém fora do range de Fortune's End/False Promise antes da luta estourar.
- detalhe: Oracle não tem gap closer próprio; sem Blink ele só reage depois que a luta já começou.
- combo: Blink (1200) + Fortune's End (cast range 850, bolt a 1200 de velocidade) dá pra fechar a distância e ainda soltar o canal enraizador/dispel quase no mesmo tempo que o inimigo nota a presença.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json; https://dotacoach.gg/en/heroes/oracle/builds/support

#### Aether Lens (aether_lens)
- porque: +225 de alcance de cast deixa Purifying Flames, Fate's Edict e Fortune's End mais seguros de lançar.
- detalhe: Oracle não tem iniciação própria; o alcance extra é o que permite curar ou enraizar um aliado sem entrar no range de resposta do inimigo.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://api.opendota.com/api/heroes/111/itemPopularity; https://dotacoach.gg/en/heroes/oracle/builds/support

#### Aghanim's Shard (aghanims_shard)
- porque: dá Rain of Destiny, uma zona de 650 de raio por 10s que causa dano em quem é inimigo e cura com +15% de amplificação de cura em quem é aliado.
- detalhe: é dano e cura em área ao mesmo tempo, útil tanto pra empurrar uma luta de 5 quanto pra defender um objetivo.
- combo: soltar a zona antes da luta estourar empilha com qualquer outra cura do time graças ao bônus de amplificação de 15% nos aliados dentro do raio.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json; https://dotacoach.gg/en/heroes/oracle; https://dotacoach.gg/en/heroes/oracle/builds/support

#### Force Staff (force_staff)
- porque: empurra qualquer unidade 600 de distância, aliado ou o próprio Oracle.
- detalhe: serve tanto pra salvar um aliado preso numa luta quanto pro Oracle escapar de um gank.
- contra: iniciações corpo a corpo e combos que dependem de ficar colado no alvo; o empurrão de 600 tira o alvo do alcance de ataque na hora.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://dotacoach.gg/en/heroes/oracle/builds/support

#### Aeon Disk (aeon_disk)
- porque: dispel forte automático e dano zerado por 2,5s quando o Oracle cai abaixo de 70% de vida.
- detalhe: é o seguro de vida do próprio Oracle contra combos rápidos demais pra reagir com Glimmer ou Force Staff a tempo.
- contra: burst de 1 ou 2 habilidades que mataria o Oracle antes dele conseguir reagir manualmente.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://dotacoach.gg/en/heroes/oracle/builds/support

### Situacionais
#### Holy Locket (holy_locket)
- porque: amplifica em 15% toda cura que o Oracle dá, de forma passiva.
- detalhe: ganha carga a cada 10s e cada vez que um inimigo visível usa uma habilidade por perto; cada carga devolve HP e mana instantâneos ao aliado alvo.
- contra: times que precisam de mais cura total do que controle; serve quando o time já tem dispel/peel suficiente e falta é HP.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://dotacoach.gg/en/heroes/oracle/builds/support

#### Ghost Scepter (ghost)
- porque: 4s de imunidade total a dano físico.
- detalhe: vira a resposta quando quem ameaça matar o Oracle é o próprio ataque básico de um carry, não magia.
- contra: lineups focadas em right-click contra o próprio Oracle (ele fica impossível de ser abatido a tapa por 4s, mas 30% mais vulnerável a magia nesse tempo).
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://dotacoach.gg/en/heroes/oracle/builds/support

#### Lotus Orb (lotus_orb)
- porque: devolve a maioria dos feitiços de alvo único direcionados ao Oracle pro próprio lançador.
- detalhe: ativa, dura 5s e ainda carrega dispel básico.
- contra: disables de alvo único lançados direto no Oracle (hex, fear e afins voltam pro inimigo que lançou).
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://dotacoach.gg/en/heroes/oracle/builds/support

#### Guardian Greaves (guardian_greaves)
- porque: recupera 325 de vida e 200 de mana pro time inteiro num raio de 1200 e ainda limpa a maioria dos debuffs de quem usa.
- detalhe: item caro e de time inteiro; vale quando a luta é de atrito longo, não de pick rápido.
- contra: comps de poke que desgastam o time todo antes de uma luta de 5, onde o dispel + regen em área decide se o time aguenta engajar.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://dotacoach.gg/en/heroes/oracle/builds/support

#### Solar Crest (solar_crest) / Pavise (pavise)
- porque: dão armadura, velocidade de ataque e barreira (Solar Crest) ou só barreira de dano físico (Pavise) pra um aliado específico.
- detalhe: itens mais baratos e pontuais que Guardian Greaves, focados em proteger um único carry em vez do time.
- contra: situações onde o problema é manter um carry específico vivo no dano físico, não o time inteiro.
- fonte: C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; https://dotacoach.gg/en/heroes/oracle/builds/support

## Pos 4 (suporte de roaming)
- quando pegar: é o segundo perfil real do herói, 23,7% dos picks com 49,8% de vitória no patch 7.41f (fonte: dotacoach.gg/en/heroes/oracle). O dotacoach não separa um build específico de pos 4 para Oracle: a página de build é uma só, rotulada "Support", sem variação de itens entre pos 4 e pos 5.
- itens iniciais: tango, blood_grenade, branches, branches, enchanted_mango, ward_observer, ward_sentry

### Build
Mesma ordem de itens do Pos 5 (Boots → Arcane Boots → Magic Wand → Glimmer Cape → Blink Dagger → Aether Lens → Aghanim's Shard → Force Staff → Aeon Disk). A diferença de jogar pos 4 em vez de pos 5 está no roam e no timing de ganks antes do nível 6, não na ordem de itens, que as fontes locais e web disponíveis não distinguem por posição.

### Situacionais
Mesmos itens situacionais listados no Pos 5.

## Roshan
Oracle não aparece soloing Roshan em nenhuma das 1.328 partidas do dataset local de Roshan solo (0 ocorrências como herói principal). Ele aparece como suporte presente no fosso em 27 ocasiões, ajudando outro herói (Huskar, Ursa, Troll Warlord, Dark Seer, Terrorblade, entre outros) a solar Roshan entre os minutos 11 e 49 (fonte: C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json). O dataset não registra quais habilidades do Oracle foram usadas nesses casos, só a presença dele perto do fosso.
O innate Prognosticate avisa ao time em qual metade do mapa a próxima rune de poder vai nascer e qual o minuto exato do respawn de Roshan (fonte: https://dotacoach.gg/en/heroes/oracle), o que faz dele um suporte natural pra decidir a hora do próximo Rosh mesmo quando não é ele quem bate.
