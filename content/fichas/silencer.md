---
id: ficha-silencer
titulo: "Silencer"
heroi: Silencer
patch: 7.41
posicoes: [4, 5]
fontes:
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/items.json
- dota-tier1/work/equipes/falcons/analise.md
- dota-tier1/work/equipes/falcons/saidas/jogadores.txt
- dota-tier1/work/equipes/falcons/saidas/draft_an.txt
- dota-tier1/work/equipes/team-spirit/analise.md
- dota-tier1/work/equipes/1win/scripts/out/draft_herois.csv
- dota-roshan-solo/data/solos.json
- dota-roshan-solo/data/resumo_com_suporte.json
- https://api.opendota.com/api/heroes/75/itemPopularity
- https://dota2protracker.com/hero/Silencer
- https://dota2protracker.com/builds/silencer-pos4-1
- https://dotacoach.gg/en/heroes/silencer
- https://dotacoach.gg/en/heroes/silencer/builds
- https://dotacoach.gg/en/heroes/silencer/builds/support
---

## Resumo

Silencer é um suporte de inteligência que vive de calar o inimigo: Last Word e Global Silence impedem qualquer feitiço, e o passivo Suffer In Silence faz ele bater mais forte e levar menos dano de quem está silenciado. No 7.41 ele não é jogado como carry nem mid de verdade, e sim como suporte de roaming (pos 4) ou suporte duro (pos 5): nos dados locais de pro play, o Team Spirit lidera as 12 equipes do lote em disables por luta (7,6, puxado pelo offlane e pelos suportes, Silencer incluso ao lado de Clockwerk e Pangolier) e o jogador Sneyking (Falcons) o pegou 12 vezes como pos 5 dentro de um pool de 16 heróis, o 4º mais picado dele atrás só de Lich, Phoenix e Enchantress (fontes: team-spirit/analise.md; falcons/analise.md; falcons/saidas/jogadores.txt). No OpenDota (todas as faixas, patch atual) ele tem 434.808 picks e 50,7% de vitória em partida normal; no dota2protracker (7000+ MMR, últimos 8 dias), a amostra geral do herói soma 2.507 partidas com 49,7% de vitória, e a build mais jogada (3.004 partidas, 49% de vitória) segue a ordem Magic Wand, Arcane Boots, Force Staff e Aghanim's Scepter.

## Pos 4 (suporte de roaming)

- quando pegar: pegue quando o seu time quer controle vindo do suporte em vez de dano: o Team Spirit lidera as 12 equipes do lote em disables por luta (7,6, a maior da liga), estatística puxada pelo offlane e pelos suportes, com Silencer citado ao lado de Clockwerk e Pangolier como heróis que alimentam esse volume (fonte: team-spirit/analise.md; a análise não isola um número de disables só para Silencer nem confirma que ele puxa mais que pos 3/pos 5, que são os 1ºs da liga em disables na própria posição). Last Word e Global Silence recompensam roaming: você quer estar perto do inimigo quando ele precisa castar algo.
- itens iniciais: tango, blood_grenade, magic_stick, faerie_fire, branches, branches, ward_observer, ward_sentry (fonte: dotacoach, build de suporte 7.41f)

### Build

#### Magic Wand (magic_wand)
- porque: carrega com os feitiços que o próprio inimigo gasta perto de você, então rende mais em rota de roam do que Magic Stick parado na lane.
- detalhe: cada carga devolve 15 de vida e mana; soma até 20 cargas. No dota2protracker (7000+ MMR, últimos dias) ele entra por volta dos 7 min na build mais popular do herói.
- fonte: https://dota2protracker.com/hero/Silencer; dota-imortal/data/opendota/items.json

#### Arcane Boots (arcane_boots)
- minuto: 12
- porque: devolve 150 de mana pro time inteiro, o que paga o alto custo de mana de Last Word e Global Silence em luta de rotação.
- detalhe: no dota2protracker (hero geral) entra em cerca de 49% das partidas por volta dos 12 min; no build específico de pos 4 (dota2protracker, amostra de 16 partidas, 38% WR) é o 2º item depois do Magic Wand, aos 13 min em 81% das partidas dessa amostra.
- fonte: https://dota2protracker.com/hero/Silencer; https://dota2protracker.com/builds/silencer-pos4-1

#### Glimmer Cape (glimmer_cape)
- porque: depois de iniciar um gank com Last Word, o Glimmer esconde e protege contra o retalho antes de voltar pra wave.
- detalhe: dá invisibilidade, +20 de velocidade e barreira que absorve até 375 de dano mágico por 5 s; pode ser usado em você ou num aliado, inclusive canalizando.
- contra: nukes de burst mágico de alcance (ex.: Lina, Zeus): a barreira absorve o estouro inicial e dá tempo de sair da área antes do 2º feitiço.
- fonte: https://dota2protracker.com/builds/silencer-pos4-1 (3º item da build de pos 4); dota-imortal/data/opendota/items.json

#### Force Staff (force_staff)
- minuto: 26
- porque: empurra você pra perto de quem vai castar (fecha o Last Word) ou te tira do meio de uma iniciação antes do Global Silence.
- detalhe: empurra 600 unidades na direção que o alvo está olhando, 850 de alcance em inimigo, não interrompe a ação do alvo (não cancela channel).
- combo: Last Word num inimigo com fuga lenta + Force Staff nele quando ele tenta sair da área força o timer de 4 s a estourar perto de você, garantindo o silence e o dano.
- fonte: https://dota2protracker.com/builds/silencer-pos4-1 (4º item da build de pos 4, aos 26 min em 37,5% das partidas da amostra; no agregado geral do herói, não exclusivo do pos 4, o item sai aos 23 min em 43% das partidas); dota-imortal/data/opendota/items.json

### Situacionais

#### Aghanim's Shard (aghanims_shard)
- contra: linhas com dois suportes ou carry que fica colado em aliado: o ricochete de Glaives of Wisdom rouba intelecto de um segundo alvo no mesmo acerto.
- combo: Glaives of Wisdom com Shard ricocheteia 1 vez pra um inimigo aleatório a até 450 de distância e rouba +1 de intelecto extra, empilhando o dano mágico de Glaives em dois heróis de uma vez.
- fonte: https://dotacoach.gg/en/heroes/silencer (dano de Glaives escala com Intelecto, Shard aumenta o roubo); dota-imortal/data/opendota/constants_abilities.json

#### Blink Dagger (blink)
- porque: fecha a distância num instante, entrando no alcance de 900 do Last Word antes que o alvo use a fuga e escape da enchante.
- contra: alvos com fuga ou escape rápido fora do alcance de 900 do Last Word: o blink fecha a distância pra acertar antes que eles saiam.
- fonte: https://api.opendota.com/api/heroes/75/itemPopularity (late_game_items, 1 ocorrência registrada na amostra: item raro, mas aparece; a API não informa o total de inventários amostrados); dota-imortal/data/opendota/items.json (blink_range 1200); dota-imortal/data/opendota/constants_abilities.json (Last Word, abilitycastrange 900)

## Pos 5 (suporte duro)

- quando pegar: pegue quando o time precisa de alguém plantando ward e segurando a lane sem depender de farm. No pool do Sneyking (Falcons) como pos 5, Silencer foi o 4º herói mais picado (12 vezes, atrás só de Lich, Phoenix e Enchantress) dentro de 16 heróis distintos (fonte: falcons/saidas/jogadores.txt).
- itens iniciais: tango, blood_grenade, magic_stick, faerie_fire, branches, branches, ward_observer, ward_sentry (fonte: dotacoach, build de suporte 7.41f)

### Build

#### Magic Wand (magic_wand)
- porque: barato e sempre relevante numa dupla lane, carrega enquanto você fica perto do inimigo pra zonear.
- detalhe: mesma lógica do pos 4; o precursor dele, Magic Stick, é o item mais comprado na fase inicial no OpenDota (itemPopularity, todas as partidas, 32 ocorrências), o que mostra o time todo comprando a linha stick/wand cedo.
- fonte: https://api.opendota.com/api/heroes/75/itemPopularity; dota-imortal/data/opendota/items.json

#### Arcane Boots (arcane_boots)
- porque: sem gold de farm, Arcane Boots é a forma mais barata de manter o time castando: 150 de mana de volta cobre Dagger de aliado, feitiço de outro suporte e os seus próprios.
- detalhe: no OpenDota (itemPopularity) é o item de maior contagem na fase intermediária (62 ocorrências), acima de qualquer outro item do herói nessa fase.
- fonte: https://api.opendota.com/api/heroes/75/itemPopularity

#### Pavise (pavise)
- porque: escudo físico barato pra proteger o carry no all-in antes de ter ouro pra Solar Crest.
- detalhe: absorve 250 de dano físico por 7 s; compartilha recarga com Solar Crest (não leve os dois ativos ao mesmo tempo, é upgrade, não soma).
- contra: pick de burst físico (ex.: Phantom Assassin crítico, Faceless Void queda de Chronosphere): a barreira segura o primeiro golpe que mataria o carry.
- fonte: https://api.opendota.com/api/heroes/75/itemPopularity (13 ocorrências na fase intermediária); dota-imortal/data/opendota/items.json

#### Glimmer Cape (glimmer_cape)
- porque: upgrade do Pavise: some com o aliado perseguido e ainda segura dano mágico.
- detalhe: invisibilidade + barreira de 375 de dano mágico por 5 s, usável em canalização.
- combo: Glimmer no aliado que está canalizando um Black Hole ou Chronosphere sob dive inimigo: ele vira invisível no meio do combo e segura o burst que tentaria interromper ou matar na saída.
- fonte: https://api.opendota.com/api/heroes/75/itemPopularity (17 ocorrências na fase intermediária, mais 17 na tardia); dota-imortal/data/opendota/items.json

### Situacionais

#### Force Staff (force_staff)
- minuto: 23
- porque: mesma lógica do pos 4, usado aqui pra puxar o carry de volta da luta em vez de fechar distância num gank.
- fonte: https://dota2protracker.com/hero/Silencer (build geral do herói, não exclusiva do pos 5)

#### Solar Crest (solar_crest)
- porque: buff só em aliado (não tem versão pra debuffar inimigo neste patch): +5 de armadura, +60 de velocidade de ataque e barreira de 350 no seu carry pra ganhar a troca de dano físico.
- contra: carry inimigo que depende de dano físico sustentado em troca curta: o alvo do Solar Crest aguenta mais autos e bate mais forte na resposta.
- fonte: https://api.opendota.com/api/heroes/75/itemPopularity (6 ocorrências na fase intermediária, 9 na tardia); dota-imortal/data/opendota/items.json

#### Ghost Scepter (ghost)
- porque: item barato de 1.500 que dá imunidade a dano físico por 4 s, a única forma de aguentar o burst sem gastar o ativo de Glimmer ou Force Staff.
- contra: carry de dano físico puro sem magia relevante (ex.: Phantom Assassin, Juggernaut): 4 s de imunidade a dano físico pra sobreviver ao burst, mas você fica -30% mais vulnerável a dano mágico e não ataca enquanto durar, então só vale contra quem bate de perto.
- fonte: https://api.opendota.com/api/heroes/75/itemPopularity (5 ocorrências na fase intermediária); dota-imortal/data/opendota/items.json (custo 1.500, duração 4.0, -30% dano mágico)

## Roshan

Sem dado de Roshan solo: nos replays locais (1.328 partidas da base), Silencer nunca aparece como o herói que soloa Roshan (0 casos como principal). Ele aparece só 2 vezes dando suporte no fosso enquanto outro carry soloava (Spectre numa partida, Alchemist em outra), amostra pequena demais pra tirar padrão (fonte: dota-roshan-solo/data/resumo_com_suporte.json).
