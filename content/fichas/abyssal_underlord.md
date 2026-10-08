---
id: ficha-abyssal_underlord
titulo: "Underlord"
heroi: Underlord
patch: 7.41
posicoes: [3]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/liquid/scripts/saida/detalhe.txt
- C:/Users/felip/Desktop/dota-tier1/work/equipes/nigma/chaves.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/yandex/analise.md
- C:/Users/felip/Desktop/dota-tier1/work/equipes/parivision/lanes_perdidas.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- https://api.opendota.com/api/heroes/108/itemPopularity
- https://dota2.fandom.com/wiki/Underlord
- https://dota2.fandom.com/wiki/Rod_of_Atos
- https://dota2.fandom.com/wiki/Lotus_Orb
---
## Resumo
Underlord é um str durável que tranca área com Pit of Malice, limpa onda e camp com Firestorm e reduz o dano dos inimigos perto com a aura passiva Atrophy Aura (ganhando dano bônus quando mata um inimigo sob o efeito), além de abrir duas rotas de teleporte com a ulti Fiend's Gate. No 7.41, toda amostra de pro play consultada o mostra só como pos 3 de offlane: 14 jogos e 57,1% de vitórias no recorte da Liquid (`detalhe.txt`), 9 jogos com cerca de 56% no recorte da Yandex com DM/AMMAR_THE_F (`analise.md`) e 6 jogos com 66,7% de vitórias com o Davai da Nigma, registrado como "offlane, pos 3" (`chaves.json`). Não apareceu em nenhuma amostra local jogando pos 4 ou pos 5 neste patch.

## Pos 3 (offlane)
- quando pegar: pegue quando o time quer um offlane durável que segura zona e trava alvo em grupo sem precisar de farm rápido; é o único papel confirmado nos dados de pro play 7.41 consultados (Liquid, Nigma, Yandex).
- itens iniciais: tango, gauntlets, branches, magic_stick, quelling_blade

### Build
#### Phase Boots (phase_boots)
- porque: movimento extra fecha distância pra acertar a Pit of Malice e perseguir quem foge.
- detalhe: dá +50 de velocidade de movimento o tempo todo; a ativa Phase soma mais 20% de velocidade (Underlord é melee) por 3s e deixa passar por cima de unidades nesse tempo, ajudando a cercar o inimigo antes de abrir a Pit of Malice. Nos dados de item do OpenDota pra Underlord, Phase Boots (34 ocorrências) e Power Treads (41) aparecem quase empatadas; Power Treads rende mais ataque e é a troca se o time quer mais dano de auto-attack puxado pela Atrophy Aura.
- fonte: items.json; OpenDota itemPopularity (hero_id 108)

#### Soul Ring (soul_ring)
- porque: sustenta o gasto alto de mana de Firestorm e Pit of Malice sem voltar pra base.
- detalhe: converte vida em 170 de mana por 10s a cada uso; o +6 de força e +2 de armadura são bônus fixos do item, não dependem do uso. Firestorm custa de 110 a 155 de mana e Pit of Malice de 110 a 140 conforme o nível, então sem essa fonte de mana o combo de harass na lane esvazia rápido. Foi o item de early game mais comum entre as partidas com Underlord no OpenDota, 95 ocorrências.
- fonte: items.json; constants_abilities.json; OpenDota itemPopularity

#### Bracer (bracer)
- porque: stat barato que fortalece vida e dano sem atrasar os itens de poder.
- detalhe: +5 de força, +2 de agilidade, +2 de inteligência e regen de vida por preço baixo. Segunda unidade mais comum no early game dos dados do OpenDota pra Underlord (61 ocorrências), junto de Soul Ring e boots.
- fonte: items.json; OpenDota itemPopularity

#### Rod of Atos (rod_of_atos)
- porque: prende o alvo fugindo por 2s pra acertar a Pit of Malice embaixo dele.
- detalhe: a ativa Cripple lança um projétil que revela o alvo e o tranca no lugar por 2 segundos, aplicando True Sight. Pode ser removida por qualquer tipo de dispel. É uma das compras de meio de jogo mais comuns pra Underlord no OpenDota, 27 ocorrências.
- contra: funciona contra heróis sem dispel ou blink de saída fácil; dispel básico ou forte remove o Cripple antes do combo fechar.
- combo: Atos (root de 2s) seguido de Pit of Malice no mesmo ponto: o alvo fica preso pelo item e, quando o root dele acaba, a pit já está ativa com o próprio root rodando, então ele não sai da área.
- fonte: items.json; Dota 2 Wiki (Rod of Atos); OpenDota itemPopularity

#### Aghanim's Shard (aghanims_shard)
- porque: deixa a Firestorm seguir um aliado em vez de ficar fixa no chão.
- detalhe: o Shard libera lançar a Firestorm numa unidade aliada; a área e os efeitos passam a acompanhar esse aliado. Foi o segundo item de meio de jogo mais comum nos dados do OpenDota pra Underlord, 72 ocorrências.
- combo: Shard na Firestorm jogada no próprio Underlord ao entrar na luta: a queima acompanha ele em vez de ficar numa área que o time inimigo consegue andar pra fora.
- fonte: Dota 2 Wiki (Underlord); OpenDota itemPopularity

#### Aghanim's Scepter (ultimate_scepter)
- porque: transforma a ulti em duas Pit of Malice instantâneas, uma em cada portal.
- detalhe: com o Scepter, ao abrir a Fiend's Gate os dois pontos do portal ganham uma Pit of Malice do nível correspondente. Foi o item de meio/fim de jogo mais comprado nos dados do OpenDota pra Underlord, 79 ocorrências no meio de jogo mais 13 no fim.
- combo: Fiend's Gate com Scepter cria root nos dois portais ao mesmo tempo, então dá pra abrir um portal em cima do time inimigo pra travar quem está lá e o outro perto do seu time pra entrar na luta já com a vantagem.
- fonte: Dota 2 Wiki (Underlord, Aghanim's Scepter); OpenDota itemPopularity

### Situacionais
#### Black King Bar (black_king_bar)
- porque: spell immunity pra entrar na luta sem ser travado antes do combo.
- detalhe: dá imunidade a magia por 9, 8 ou 7 segundos dependendo do nível de uso. A própria Pit of Malice de Underlord não atravessa BKB, então contra times que saem de BKB rápido o combo de root perde força e esse BKB serve mais pra ele sobreviver no meio da luta do que pra garantir root nos outros.
- contra: times com stun ou root em área que também não furam BKB, o que cobre a maioria dos disables comuns do jogo.
- fonte: items.json; constants_abilities.json

#### Shiva's Guard (shivas_guard)
- porque: onda de área que reduz velocidade de ataque, bom contra carry de auto-attack.
- detalhe: a ativa Arctic Blast causa 260 de dano mágico numa onda de raio 825, com 40% de lentidão por 4s, mana 75 e cooldown 27s; a aura passiva reduz em 45 a velocidade de ataque dos inimigos num raio de 1200. Pra Underlord a onda também limpa camp de jungle rápido.
- contra: carries que dependem de muitos hits por segundo, tipo Phantom Assassin ou Monkey King: a aura de -45 de velocidade de ataque corta o DPS deles mesmo sem acertar a Arctic Blast.
- fonte: items.json

#### Lotus Orb (lotus_orb)
- porque: dispel em si mesmo e devolve o próximo feitiço de alvo único em quem lançou.
- detalhe: a ativa Echo Shell dá um dispel básico e um escudo de 5s que reflete a maioria dos feitiços de alvo único lançados contra quem está escudado, voltando pro conjurador original. A reflexão acontece antes de qualquer Spell Block, então mesmo um feitiço bloqueado ainda reflete.
- contra: resolve contra lockdown de alvo único (hex, silence, stun de projétil); não protege contra magia que já acertou antes do escudo subir, nem contra feitiços em área.
- fonte: items.json; Dota 2 Wiki (Lotus Orb)

#### Octarine Core (octarine_core)
- porque: reduz cooldown pra repetir Pit of Malice e Firestorm com mais frequência na luta.
- detalhe: dá 25% de redução de cooldown junto com bônus grande de vida e mana. Como a Pit of Malice vai de 15 a 30s de cooldown conforme o nível e a Firestorm de 13 a 16s, o Octarine deixa Underlord jogar as duas de novo mais rápido numa luta longa ou numa sequência de splitpush.
- fonte: items.json; constants_abilities.json

#### Crella's Crozier (crellas_crozier)
- porque: item de sobrevivência que nega regeneração do inimigo e dá uma troca defensiva contra dano físico, segura o pos 3 na frente da luta.
- detalhe: dá vida, mana e todos os atributos; a aura passiva Putrefaction reduz em 30% a regeneração de vida dos inimigos num raio de 900, sem repassar isso pro Underlord. Na ativa Rite of Rumusque (4s), ele fica imune a dano físico mas recebe 30% mais dano mágico, não pode atacar, rouba 5% de velocidade de movimento dos inimigos por perto e a redução de regeneração sobe pra 75%, com tudo redirecionado pra vida dele. Apareceu em 12 das partidas de fim de jogo com Underlord no OpenDota.
- fonte: items.json; OpenDota itemPopularity

## Roshan
Sem dado de Roshan solo.
