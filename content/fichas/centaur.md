---
id: ficha-centaur
titulo: "Centaur Warrunner"
heroi: Centaur Warrunner
patch: 7.41
posicoes: [3]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/items.json
- dota-tier1/work/equipes/yandex/hub.json
- dota-tier1/work/equipes/betboom/hub.json
- dota-tier1/work/equipes/navi/hub.json
- dota-tier1/work/equipes/team-spirit/hub.json
- dota-tier1/work/equipes/1win/hub.json
- dota-tier1/work/equipes/aurora/hub.json
- dota-tier1/work/equipes/falcons/hub.json
- dota-roshan-solo/data/resumo_por_heroi.json
- dota-roshan-solo/data/solos.json
- https://api.opendota.com/api/heroes/96/itemPopularity
- https://liquipedia.net/dota2/Centaur_Warrunner
---

## Resumo

Centaur Warrunner é tanque de força que inicia luta e segura linha de frente: ele some com stun em área (Hoof Stomp), devolve dano de quem ataca ele (Retaliate, atravessa BKB) e empurra o time inteiro na ultimate (Stampede). No 7.41 ele é jogado quase só na pos 3 (offlane): na Yandex ele foi pos 3 em 15 das 16 vezes que foi picado (62% de vitória), e no pool de offlane de times como 1win, Aurora, BetBoom, NAVI e Team Spirit ele aparece do lado dos iniciadores de aura e frente de luta (Axe, Tidehunter, Dark Seer, Underlord). Uma exceção pequena: o Malr1ne, mid da Falcons, pegou Centaur 7 vezes como mid; não é o suficiente pra contar como segunda posição real do herói no patch.

## Pos 3 (offlane)

- quando pegar: quando o time precisa de iniciação garantida (Hoof Stomp é instantâneo, sem projétil pra desviar) e de um corpo que sobrevive na frente; é o pick de offlane mais repetido ao lado de Axe, Tidehunter, Dark Seer e Underlord nos pools dos times do Atlas tier 1 (fonte: hub.json de 1win, aurora, betboom, navi, team-spirit).
- itens iniciais: helm_of_iron_will, boots

### Build

#### Helm of Iron Will (helm_of_iron_will)
- porque: regen e armadura baratos sustentam a lane sem gastar muito ouro.
- detalhe: +4 de armadura e +4 de regeneração de vida por 975 de ouro. É o item mais comprado por Centaur na fase inicial no banco de dados do OpenDota (89 contagens, o maior de todos os itens dessa fase).
- fonte: OpenDota itemPopularity; items.json

#### Helm of the Dominator (helm_of_the_dominator)
- porque: domina uma criatura grande da jungle pra ganhar um corpo extra que aguenta dano na lane e ajuda a iniciar.
- detalhe: a habilidade Dominate dá controle de uma criatura neutra não-ancião, sobe a vida dela pra pelo menos 1000 e dá +25 de dano, +12 de regen e +4 de armadura pra ela. É o segundo item mais comum da fase inicial de Centaur no OpenDota (78 contagens), bem acima de qualquer outro item além do Helm of Iron Will.
- fonte: OpenDota itemPopularity; items.json

#### Blink Dagger (blink)
- porque: fecha a distância pra travar o Hoof Stomp; Centaur não tem outro jeito confiável de chegar perto.
- detalhe: 1200 de alcance, 3 segundos de bloqueio depois de levar dano de herói ou Roshan. É o item mais comprado por Centaur na fase do meio do jogo no OpenDota (88 contagens, na frente do segundo colocado, Ring of Tarrasque com 77).
- combo: Blink + Hoof Stomp inicia a luta travando o alvo (stun de 1,6 a 2,2s) pro time cercar; Double Edge em seguida empilha dano mágico extra, e sem matar o próprio Centaur.
- fonte: OpenDota itemPopularity; items.json; constants_abilities.json (centaur_hoof_stomp)

#### Heart of Tarrasque (heart)
- detalhe: os componentes confirmados do Heart são Reaver (63 contagens na fase do meio) e Ring of Tarrasque (77 contagens na fase do meio): items.json não lista Platemail como parte da receita do Heart (Platemail é componente de Shiva's Guard, Lotus Orb e Assault Cuirass; as 41 contagens de Platemail na fase do meio provavelmente vêm desses outros itens, não do Heart). O item pronto soma 53 contagens na fase do meio e 24 na fase tardia. Dá +40 de força e regen de vida que escala com a vida máxima.
- porque: a força vira dano direto em dois lugares do kit: Double Edge ganha 60% a 150% da força como dano extra, e Stampede multiplica a força por 2 a 3x em dano de atropelamento. Os +40 do Heart somam nesses dois cálculos ao mesmo tempo, além da regen pra sustentar o tanque em luta longa.
- fonte: OpenDota itemPopularity; items.json; constants_abilities.json (centaur_double_edge, centaur_stampede)

#### Black King Bar (black_king_bar)
- porque: dá 9 segundos de imunidade mágica pra aguentar o burst que ignora a armadura alta de Centaur, sem perder o Retaliate (que já atravessa BKB por conta própria).
- detalhe: é o item mais comprado por Centaur na fase tardia no OpenDota (47 contagens, acima de qualquer outro item dessa fase).
- fonte: OpenDota itemPopularity; items.json

#### Aghanim's Scepter (ultimate_scepter)
- porque: funde Stampede com Hitch a Ride numa habilidade só (Work Horse), deixando Centaur jogar uma carga ofensiva e ainda carregar um aliado pra dentro ou pra fora da luta.
- detalhe: concede a habilidade Work Horse, que dá o benefício de Stampede no nível atual e permite usar Hitch a Ride (monta um aliado na carroça, invulnerável, por 8 segundos). É o segundo item mais comum da fase tardia no OpenDota (40 contagens).
- combo: Work Horse + Hitch a Ride em cima de um carry que não tem blink; o aliado ataca e lança feitiço de dentro da carroça sem poder ser alvo.
- fonte: OpenDota itemPopularity; https://liquipedia.net/dota2/Centaur_Warrunner (seção Aghanim's)

### Situacionais

#### Aghanim's Shard (aghanims_shard)
- porque: transforma Double Edge em fonte de força crescente, cada herói acertado empilha bônus que também potencializa Retaliate e Stampede.
- contra: lutas longas em grupo, onde acertar vários heróis com Double Edge compensa o autodano.
- detalhe: Double Edge já não mata o próprio Centaur mesmo sem o Shard (isso é da habilidade base, não um efeito do Shard); o que o Shard adiciona é uma stack de bônus de força por herói inimigo acertado na área, com a duração da stack se renovando a cada acerto novo. Ou seja, numa teamfight que se arrasta, Centaur fica mais forte a cada Double Edge acertado, o que também aumenta o dano de Retaliate e de Stampede (ambos escalam com força). Tem 20 contagens na fase do meio no OpenDota, bem abaixo dos itens-base da build (Blink 88, Ring of Tarrasque 77, Reaver 63).
- fonte: constants_abilities.json (centaur_double_edge); OpenDota itemPopularity

#### Shiva's Guard (shivas_guard)
- porque: corta a velocidade de ataque e de movimento do time inimigo, neutralizando composições de hit rápido ou exércitos de ilusão e invocação.
- contra: times com dano físico de ataque rápido ou exércitos de ilusão/invocação, porque a aura passiva tira 45 de velocidade de ataque de todo inimigo próximo e o Arctic Blast ativo acerta em área (825 de raio) com dano mágico e -40% de velocidade de movimento.
- detalhe: é o terceiro item mais comum da fase tardia de Centaur no OpenDota (38 contagens).
- fonte: OpenDota itemPopularity; items.json

#### Lotus Orb (lotus_orb)
- porque: devolve pro inimigo o controle forte lançado em Centaur, mantendo ele vivo pra iniciar e segurar a frente de luta.
- contra: habilidade de alvo único forte lançada em Centaur (silence, hex, root de herói), porque Echo Shell devolve a maioria dos feitiços direcionados pro lançador.
- detalhe: também dá 10 de armadura e regen de vida/mana, então nunca é um item puramente defensivo perdido. Tem 25 contagens na fase do meio no OpenDota (atrás dos itens-base da build) e também aparece na fase tardia, com 13 contagens, empatado com Overwhelming Blink.
- fonte: OpenDota itemPopularity; items.json

#### Pipe of Insight (pipe)
- porque: reduz o nuke em área que mataria o time na iniciação, dando resistência mágica e barreira pro grupo sobreviver ao burst.
- contra: composições com dano mágico em área (nukes de teamfight), porque a aura dá 8% de resistência mágica pro time e o ativo cria uma barreira de 425 de dano mágico em 1200 de raio.
- detalhe: contagem menor que os outros situacionais no OpenDota (9 na fase do meio, 5 na tardia), ou seja, é opção condicional, não padrão.
- fonte: OpenDota itemPopularity; items.json

#### Overwhelming Blink (overwhelming_blink)
- porque: upgrade de quem já tem Blink e Reaver do Heart, o blink passa a estourar dano e lentidão em área, travando o grupo todo na luta.
- contra: lutas em grupo onde só o stun do Hoof Stomp não é suficiente de área; o upgrade do Blink com Reaver dá uma explosão de dano e lentidão em 800 de raio ao usar o blink.
- detalhe: 13 contagens na fase tardia no OpenDota, mesmo nível do Lotus Orb tardio; upgrade natural de quem já tem Blink Dagger e constrói o Reaver do Heart pro lado ofensivo.
- fonte: OpenDota itemPopularity; items.json

## Roshan

Sem dado de Roshan solo. Nos dois bancos de dados de replay locais (resumo_por_heroi.json e solos.json), Centaur não aparece entre os heróis com solo de Roshan registrado; a única ocorrência do herói em solos.json está marcada como abate em grupo ("classificacao": "time", com 4 aliados no fosso), não solo.
