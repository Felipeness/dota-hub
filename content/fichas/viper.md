---
id: ficha-viper
titulo: "Viper"
heroi: Viper
patch: 7.41
posicoes: [2, 3]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_patch.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/lgd/analise.md
- C:/Users/felip/Desktop/dota-tier1/work/equipes/parivision/analise.md
- C:/Users/felip/Desktop/dota-tier1/work/equipes/aurora/analise.md
- C:/Users/felip/Desktop/dota-tier1/work/equipes/navi/analise.md
- C:/Users/felip/Desktop/dota-roshan-solo/data/early_rosh_pro.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/late_rosh_pro.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_com_suporte.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
- https://dota2protracker.com/hero/Viper
- https://api.opendota.com/api/heroes/47/itemPopularity
---

## Resumo
Viper é um ranged de poke e controle de wave: Poison Attack empilha até 6 vezes de dano, slow e redução de resistência mágica a cada acerto, e Nethertoxin solta uma área de dano constante que também reduz a velocidade de ataque de quem fica dentro (constants_abilities.json). No 7.41 ele quase desapareceu do pro play: só 5 picks no total rastreado pelo OpenDota, e mais banido que jogado (a Aurora baniu ele 27 vezes, 20% das partidas; a NAVI, 16 vezes) (heroStats.json; aurora/analise.md; navi/analise.md). Quando entra, é quase sempre pos 2: a LGD pegou ele 14 vezes e foi mid em 13 (93%, 43% de vitória nesses 14 picks), e o d2pt também separa um build de pos 2 mid e um de pos 3 offlane, que é o flex real do herói (lgd/analise.md; parivision/analise.md; dota2protracker.com/hero/Viper). Os números de vitória/partidas/pros por build específico que o d2pt mostra na aba "Pro Builds" não puderam ser confirmados nesta checagem (a aba carrega os dados via JavaScript depois do carregamento inicial da página, e a API pública do site está atrás de Cloudflare); use com ressalva até confirmar ao vivo no site.

## Pos 2 (mid)
- quando pegar: pelo alcance e pelo dano constante de poke numa lane de troca, mesmo sendo pick raro no patch atual (5 picks no total do OpenDota). O d2pt lista um build de pos 2 pra ele; a LGD foi mid com ele em 13 das 14 vezes que pegou (93%, 43% de vitória nesses 14 picks) (heroStats.json; dota2protracker.com/hero/Viper; lgd/analise.md).
- itens iniciais: tango, branches, circlet, faerie_fire, ward_observer
### Build
#### Magic Wand (magic_wand)
- porque: Viper tem armadura base -2 e pouca vida cedo; o Wand dá vida e mana de emergência.
- detalhe: Armadura -2 e 120 de vida base (heroStats.json) deixam Viper frágil nos primeiros minutos. O Wand carrega cargas grátis de HP e mana pra sobreviver a uma troca ruim e ainda ter mana pra ligar o Poison Attack de novo em seguida.
- fonte: items.json; heroStats.json

#### Wraith Band (wraith_band)
- porque: velocidade de ataque extra empilha o Poison Attack mais rápido e ainda dá sobrevida barata.
- detalhe: Poison Attack empilha até 6 vezes, e cada estaque soma dano, slow e redução de resistência mágica (constants_abilities.json). Mais velocidade de ataque significa chegar nas 6 estacas mais rápido contra quem fica perto pra trocar. É o item de early game mais comprado pelo Viper no OpenDota depois das próprias botas (api.opendota.com/api/heroes/47/itemPopularity).
- fonte: constants_abilities.json; api.opendota.com/api/heroes/47/itemPopularity

#### Power Treads (power_treads)
- porque: velocidade de ataque real sobe o ritmo de estacas do Poison Attack, e o swap de atributo dá mana quando precisa religar o Nethertoxin.
- detalhe: +25 de velocidade de ataque e troca de atributo primário (items.json). É o item de botas mais comprado pelo Viper no OpenDota (api.opendota.com/api/heroes/47/itemPopularity) antes de trocar para Boots of Travel no meio/fim de jogo.
- fonte: items.json; api.opendota.com/api/heroes/47/itemPopularity

#### Dragon Lance (dragon_lance)
- porque: +130 de alcance de ataque deixa Viper mais seguro pokeando de fora do alcance de resposta.
- detalhe: alcance base de Viper é 575 (heroStats.json); o Dragon Lance soma 130 a mais, então ele passa a bater de 705 sem precisar se expor. É componente direto do Hurricane Pike, que o d2pt lista como item final tanto do build de pos 2 quanto do de pos 3.
- fonte: heroStats.json; items.json; dota2protracker.com/hero/Viper

#### Hurricane Pike (hurricane_pike)
- porque: usado no inimigo, a ativa empurra os dois 425 de distância sem desarmar nem atordoar e libera, por 6 segundos, 5 ataques contra esse alvo sem limite de alcance e com +100 de velocidade de ataque. Usado em si mesmo (ou num aliado), empurra 600 de distância na direção que você está olhando, mas sem esse bônus de ataque.
- detalhe: Viper não tem blink nem dash longo; Nosedive é um salto curto de engajar, não de escapar (constants_abilities.json). O Pike cobre esse buraco de duas formas: no inimigo, afasta os dois 425 de distância ("não interrompe as ações do alvo", então não é um disable) e ainda garante 5 acertos de longe com +100 de attack speed pra empilhar o Poison Attack mesmo com o alvo fugindo; em si mesmo, é puro disengage de 600 de distância, sem o bônus de ataque, pra sair do corpo a corpo (items.json: enemy_length 425 e bonus_attack_speed 100 no cast contra inimigo; push_length 600 no self/aliado). É o item final que o d2pt lista como core de pos 2 e de pos 3.
- contra: iniciadores corpo a corpo sem reengajamento rápido: a distância ganha (sem stun, só deslocamento) tira você do alcance dele enquanto ele continua livre pra agir.
- combo: Pike no inimigo que está fugindo ou colado em você afasta os dois 425 de distância e ainda libera 5 ataques garantidos com +100 de attack speed, empilhando o Poison Attack mesmo a distância. Pike em si mesmo é só pra fugir do corpo a corpo, sem esse bônus de ataque.
- fonte: items.json; constants_abilities.json; dota2protracker.com/hero/Viper

#### Boots of Travel (travel_boots)
- porque: dá rotação entre lanes e split push, que é o que o d2pt lista como bota final do build de pos 2.
- detalhe: o build de pos 2 do d2pt troca o Power Treads por Boots of Travel: Viper poka e empurra lane bem sozinho, então o teleporte vale mais que o bônus fixo de attack/move speed no fim de jogo.
- fonte: dota2protracker.com/hero/Viper

### Situacionais
#### Force Staff (force_staff)
- porque: disengage de emergência antes do Pike estar pronto, ou pra salvar aliado.
- detalhe: mesma mecânica de empurrão do Pike (600 de distância, não interrompe ações), só que mais barato e disponível mais cedo. O d2pt lista como item situacional tanto de pos 2 quanto de pos 3.
- contra: iniciação de curto alcance que precisa ficar colada em você pra travar.
- fonte: items.json; dota2protracker.com/hero/Viper

#### Eye of Skadi (skadi)
- porque: empilha slow com o Poison Attack e trava quem depende de cura.
- detalhe: +35 em todos os atributos e um slow próprio no ataque, além de reduzir 50% de qualquer cura/regeneração recebida pelo alvo (items.json). Listado pelo d2pt como item situacional de pos 2.
- contra: heróis de lifesteal ou regeneração alta, que ficam com a cura cortada na metade em cima do slow que já reduz a resistência mágica deles.
- fonte: items.json; dota2protracker.com/hero/Viper

#### Blink Dagger (blink)
- porque: fecha distância pra acertar o Viper Strike em quem fica atrás, já que Viper não tem iniciação de alcance.
- detalhe: Viper Strike desliga passivas por 6s, atravessa Black King Bar e não pode ser dispelado (constants_abilities.json). Listado pelo d2pt como item situacional de pos 2.
- combo: Blink (1200 de alcance) + Viper Strike no suporte ou carry isolado, seguido de Nosedive se o resto do grupo estiver perto pra travar todo mundo em Corrosive Skin.
- fonte: items.json; constants_abilities.json; dota2protracker.com/hero/Viper

#### Butterfly (butterfly)
- porque: dano e evasão pra times com right-click pesado no late.
- detalhe: +35% de evasão e +25 de dano (items.json). Listado pelo d2pt como item situacional de pos 2.
- contra: lineups de dano físico sustentado, onde a evasão corta boa parte do DPS que mais ameaça um Viper sem fuga de verdade.
- fonte: items.json; dota2protracker.com/hero/Viper

## Pos 3 (offlane)
- quando pegar: mesmo herói, de lane sozinho na offlane quando o time já tem outro mid e precisa do alcance/poke do Viper pra sobreviver à troca de 2 contra 1. O d2pt separa um build de pos 3 com o Hurricane Pike como item central; LGD usa o mesmo herói como flex entre pos 2 e pos 3, e a Parivision também já jogou Viper nas duas posições (além de 1 jogo isolado na pos 1) (dota2protracker.com/hero/Viper; parivision/analise.md; lgd/analise.md).
- itens iniciais: tango, branches, circlet, faerie_fire
### Build
#### Power Treads (power_treads)
- porque: mesmo motivo do mid, velocidade de ataque pra empilhar Poison Attack e swap de atributo pra mana.
- detalhe: listado pelo d2pt como item core do build de pos 3, junto com Wraith Band e Magic Wand.
- fonte: items.json; dota2protracker.com/hero/Viper

#### Dragon Lance (dragon_lance)
- porque: na offlane, sozinho e sem backup constante, o alcance extra evita trocas ruins contra dupla.
- detalhe: mesmos 130 de alcance do build de mid; listado pelo d2pt como item core do build de pos 3.
- fonte: heroStats.json; items.json; dota2protracker.com/hero/Viper

#### Hurricane Pike (hurricane_pike)
- porque: offlane sozinho é o alvo preferido de gank; o empurrão de 600 em si mesmo (sem disable) cria distância pra fugir mesmo sem suporte por perto. No gankeador que está colado em você, dá pra usar no próprio inimigo em vez disso: afasta os dois 425 e ainda garante 5 ataques com +100 de attack speed nele.
- detalhe: mesma mecânica do build de mid ("não interrompe as ações do alvo", então não é disable): 600 de distância usado em si mesmo/aliado, 425 de distância com +100 de attack speed por 5 ataques quando usado no inimigo (items.json). O d2pt chama o build de pos 3 de "Core Pike".
- contra: ganks de 2 ou mais heróis na offlane sem flash farm/blink: a distância ganha costuma bastar pra chegar numa torre ou num aliado, mas não segura o segundo herói que ainda está livre pra perseguir.
- combo: mesmo da versão de mid. No inimigo, empurra e ainda ataca com bônus; em si mesmo, é só fuga, sem o bônus de ataque.
- fonte: items.json; dota2protracker.com/hero/Viper

### Situacionais
#### Force Staff (force_staff)
- porque: disengage mais barato que o Pike pra uma offlane sem suporte constante por perto.
- contra: iniciação de curto alcance.
- fonte: items.json; dota2protracker.com/hero/Viper

#### Bracer (bracer)
- porque: sobrevida barata (vida, regen e atributos) pra lane sozinho sem suporte full-time.
- detalhe: listado pelo d2pt como item situacional de pos 3.
- fonte: items.json; dota2protracker.com/hero/Viper

#### Null Talisman (null_talisman)
- porque: sustento de mana pra manter Nethertoxin e Poison Attack ligados sem suporte de mana por perto.
- detalhe: listado pelo d2pt como item situacional de pos 3.
- fonte: items.json; dota2protracker.com/hero/Viper

#### Aghanim's Scepter (ultimate_scepter)
- porque: estatística pura tardia (10 de todos os atributos, 175 de vida e 175 de mana) quando o jogo esticou e falta poder de luta.
- detalhe: Viper não tem upgrade de Scepter próprio no 7.41 (não existe ability dele vinculada a Aghanim's nas constantes do patch); é comprado só pelos atributos genéricos do item, não por um efeito único. Listado pelo d2pt como item situacional de pos 3, com baixa frequência.
- fonte: constants_hero_abilities.json; constants_abilities.json; items.json; dota2protracker.com/hero/Viper

## Roshan
Viper participa de Roshan cedo com o time: aparece em 13 dos 874 registros de abate de Roshan em partidas pro no early game, num minuto médio de 16,8 (mediana 17,2; faixa de 14,2 a 18,0) (early_rosh_pro.json). No late game pro ele não aparece em nenhum dos 4.212 registros (late_rosh_pro.json). Ele não tem entrada em resumo_por_heroi.json, o arquivo com o resumo agregado de abates solo por herói. Em solos.json o nome dele aparece em 79 partidas, mas isso mistura duas coisas: na maior parte ele só contribui dano como aliado dentro do fosso de outro herói, mas em 33 dessas 79 partidas ele é o próprio herói analisado no registro, quase todas (41 eventos) classificadas como abate em grupo ("time", ou seja, o time matou junto, não ele sozinho). Existe exatamente 1 registro com classificação "solo_puro" pra Viper em solos.json, só que é de uma partida de Ability Draft, com as habilidades de Ursa, Mirana, Windrunner e Nevermore no lugar das dele (campo skills do registro); não é Viper jogando com o próprio kit, então não conta como evidência de solo real, e explica por que ele não aparece em resumo_por_heroi.json. Existe 1 registro de abate "com suporte" (não solo puro): nível 23, aos 42:58, com Hurricane Pike, Power Treads, Mage Slayer, Black King Bar, Eye of Skadi e Reaver no inventário, aegis ficou com o próprio Viper e havia suporte (Grimstroke, Axe) no fosso (resumo_com_suporte.json). É 1 jogo só, não generaliza: a leitura segura é que Viper ajuda o time a fechar Roshan cedo com o dano constante do kit, mas não é um soloist.
