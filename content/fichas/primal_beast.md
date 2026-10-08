---
id: ficha-primal_beast
titulo: "Primal Beast"
heroi: Primal Beast
patch: 7.41
posicoes: [3, 2]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_com_suporte.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/falcons/analise.md
- C:/Users/felip/Desktop/dota-tier1/work/equipes/team-spirit/analise.md
- https://api.opendota.com/api/heroes/137/itemPopularity
- https://dotacoach.gg/heroes/counters/primal-beast
- busca (dota2protracker.com/hero/Primal+Beast via WebSearch, snapshot indisponível por fetch direto)
- busca (dotacoach.gg/es/heroes/primal-beast via WebSearch, win rate por posição e skill build)
- busca (rdy.gg/en/dota2/heroes/primal-beast via WebSearch, efeito do Aghanim's Shard)
---

## Resumo

Primal Beast é um str Initiator/Durable/Disabler (OpenDota) que abre luta com Onslaught, uma carga que atordoa e empurra, e limpa onda/camp com Trample enquanto tanca na frente. No 7.41 ele é majoritariamente offlane: um levantamento de posição por win rate (via busca, dotacoach) dá a ele a maior taxa de pick entre as lanes de resistência, e nos replays de TI do Team Spirit ele aparece 6 vezes na pos 3 contra 4 na pos 2 como flex de "mid/off" junto de Pangolier e Slardar. A pos 2 (mid) é a de maior win rate isolada (54,1% contra 48,3% da outra lane, segundo a mesma busca) e tem um caso concreto no Atlas: o mid Malr1ne, da Falcons, pegou Primal Beast 7 vezes com 71% de vitória. Suporte (pos 4/5) tem pick rate residual (4,1% e 2,5%, dotacoach) e não entra nesta ficha. Nos dados públicos do OpenDota (heroStats.json) ele sobe de ~46,7% pra ~51,6% de vitória das brackets mais baixas pras mais altas, sinal de herói que recompensa execução.

## Pos 3 (offlane)

- quando pegar: quando o time quer iniciação garantida e sem desvio (Onslaught não tem projétil pra bloquear) contra lanes sem disable duro; dotacoach lista Earth Spirit, Razor, Sniper, Troll Warlord, Pangolier, Spectre, Axe, Pugna, Nature's Prophet e Spirit Breaker como "bom contra" porque o dash do Onslaught ignora a mobilidade ou a defesa baseada em posicionamento deles. Evitar contra Doom, Undying, Outworld Devourer, Anti-Mage e Zeus, que desligam ou fogem do kit (mesma fonte).
- itens iniciais: quelling_blade, branches, tango, circlet, faerie_fire, magic_stick, ward_observer

### Build

#### Phase Boots (phase_boots)
- porque: fecha a brecha pra conectar Onslaught, Trample e o corpo a corpo sem perder o alvo.
- detalhe: +20% de velocidade em herói corpo a corpo e passa por unidades por 3s ao ativar. É o item de bota mais comprado por Primal Beast na fase inicial no OpenDota (91 contagens prontas, 99 do componente Chainmail).
- combo: ativar o Phase antes do Onslaught garante que o dash não seja atrasado por creeps no meio do caminho.
- fonte: OpenDota itemPopularity (hero 137); items.json (phase_boots)

#### Soul Ring (soul_ring)
- porque: resolve a mana baixa (75 base) pra spamar Rock Throw e Trample sem secar.
- detalhe: sacrifica vida por 170 de mana por 10s; com a vida alta de str (26 base, +4,3/nível) e a armadura extra que o Uproar dá quando ativado em luta, o custo de vida pesa pouco. Segundo item mais comprado na fase inicial (55 contagens).
- fonte: OpenDota itemPopularity; items.json (soul_ring); heroStats.json (base_mana 75)

#### Blink Dagger (blink)
- porque: posiciona o Onslaught de um ângulo que a lane não vê vindo.
- detalhe: 1200 de alcance, bloqueado por 3s depois de levar dano de herói ou Roshan. Segundo item mais comprado na fase do meio (83 contagens, só atrás do Ogre Axe, componente de BKB/Scepter).
- combo: Blink pro flanco + Onslaught empurra o alvo pra fora da própria linha de fuga, isolando-o do resto da lane.
- fonte: OpenDota itemPopularity; items.json (blink)

#### Black King Bar (black_king_bar)
- porque: garante que o Onslaught termine; qualquer stun recebido no meio do dash cancela a carga.
- detalhe: 9s de imunidade a magia e dispel básico. Segundo item mais comprado na fase do meio (64 contagens, atrás só de Blink) e também recorrente na fase tardia (23 contagens).
- contra: não resolve contra Doom, porque Doom desliga o kit do herói mesmo com imunidade mágica ativa (dotacoach cita Doom como o pior matchup justamente por isso).
- combo: ativar o BKB antes de começar a carregar o Onslaught impede que um stun de reação cancele o dash.
- fonte: OpenDota itemPopularity; items.json (black_king_bar); dotacoach.gg/heroes/counters/primal-beast

#### Aghanim's Shard (aghanims_shard)
- porque: destrava Rock Throw, o único stun de PB a distância, pra iniciar sem precisar correr com Onslaught.
- detalhe: Rock Throw joga uma pedra que atordoa e se fragmenta em 3 pedaços adicionais; cada herói atingido empilha Uproar. No arquivo local de habilidades, Rock Throw ocupa a posição que normalmente fica travada até o Shard (4ª da lista, antes de Pulverize), consistente com o que a busca descreve. Terceiro item mais comprado na fase do meio (33 contagens).
- combo: Rock Throw de longe pra empilhar Uproar antes de entrar no corpo a corpo, já chegando com o bônus de dano e armadura do Uproar ativo.
- fonte: constants_hero_abilities.json; constants_abilities.json (primal_beast_rock_throw); OpenDota itemPopularity; busca (rdy.gg, dotacoach via WebSearch)

### Situacionais

#### Shiva's Guard (shivas_guard)
- porque: +17 de armadura e -45 de velocidade de ataque da aura cortam o dano físico sustentado que PB toma ao entrar na frente da luta.
- contra: carries de ataque físico rápido e contínuo (ex.: Troll Warlord, Phantom Assassin), porque a aura passiva tira 45 de velocidade de ataque de quem está perto e o Arctic Blast ativo soma -40% de velocidade de movimento em 825 de raio, o que também trava o alvo pro Trample alcançar de novo.
- detalhe: item mais comprado por Primal Beast na fase tardia no OpenDota (42 contagens, bem na frente do segundo colocado).
- fonte: OpenDota itemPopularity; items.json (shivas_guard)

#### Heart of Tarrasque (heart)
- porque: soma +40 de força e regenera vida proporcional à que falta, dando a PB fôlego pra aguentar poke até o combo valer a pena.
- contra: lineups de poke/sustain de dano que tentam desgastar Primal Beast de fora do alcance dele antes da luta.
- detalhe: Vida de Behemoth regenera 1,5% da vida que falta por segundo; junto da vida base alta de str, deixa o herói difícil de desgastar fora de luta. Aparece com 12 contagens na fase tardia no OpenDota.
- fonte: OpenDota itemPopularity; items.json (heart)

#### Linken's Sphere (sphere)
- porque: bloqueia o disable de alvo único que cancelaria o combo de iniciação antes dele começar, já que PB não tem dispel próprio.
- contra: disable de alvo único direcionado que interrompe o kit, como a Astral Imprisonment do Outworld Devourer, que segundo a dotacoach interrompe o canal de Pulverize.
- detalhe: Spellblock bloqueia o próximo feitiço direcionado a cada 14s; não ajuda contra área (Doom em alvo único ainda passa, já que Doom é um debuff que a Sphere também bloquearia na teoria, mas o matchup citado pela dotacoach é especificamente sobre interromper o Pulverize, não sobre Doom). 10 contagens na fase tardia no OpenDota.
- fonte: OpenDota itemPopularity; items.json (sphere); dotacoach.gg/heroes/counters/primal-beast

#### Boots of Travel (travel_boots)
- porque: troca a mobilidade de curta distância do Phase por mapa inteiro, pra PB chegar a tempo em rotas longas e defender torres.
- contra: jogos que estiram e exigem que PB alcance lutas em rotas longas ou defenda torres em várias lanes, trocando a mobilidade de curta distância do Phase por mapa inteiro.
- detalhe: 7 contagens de Boots of Travel e 6 de Boots of Travel 2 na fase tardia no OpenDota, abaixo de Shiva's e Scepter mas ainda recorrente.
- fonte: OpenDota itemPopularity; items.json (travel_boots)

#### Aghanim's Scepter (ultimate_scepter)
- porque: segundo item mais comprado na fase tardia no OpenDota (35 contagens, mais 9 de Aghanim's Blessing), mas o efeito exato dele em Primal Beast não foi confirmado em nenhuma fonte consultada (Liquipedia e a página de herói do dota2protracker bloquearam o fetch direto, e a busca de texto não achou a descrição).
- fonte: OpenDota itemPopularity (sem fonte pro mecanismo)

## Pos 2 (mid)

- quando pegar: quando o time aceita abrir mão do farm de mid por um herói que inicia e tanca sem depender de suporte; é a lane de menor pick (19,4%, dotacoach via busca) mas de maior win rate isolada (54,1%). Caso real no Atlas: Malr1ne (Falcons) pegou Primal Beast 7 vezes como mid, 71% de vitória.
- itens iniciais: tango, branches, circlet, faerie_fire, magic_stick

### Build

#### Bottle (bottle)
- porque: sustenta mana e vida numa lane de mid sem suporte, sem precisar voltar à base.
- detalhe: recarrega nas runas; combinação citada direto como parte do build de pos 2 na busca a dota2protracker.
- fonte: busca (dota2protracker.com/hero/Primal+Beast via WebSearch)

#### Phase Boots (phase_boots)
- porque: mesmo motivo da offlane, fecha a brecha pro Onslaught/Trample conectarem.
- fonte: busca (dota2protracker.com/hero/Primal+Beast via WebSearch); items.json (phase_boots)

#### Magic Wand (magic_wand)
- porque: carga de mana/vida de emergência barata contra o nuke de mid lane.
- detalhe: citado como item recorrente do build de pos 2 na busca.
- fonte: busca (dota2protracker.com/hero/Primal+Beast via WebSearch)

#### Blink Dagger (blink)
- porque: principal item do build de pos 2 segundo a busca (48% de vitória em 21 partidas na amostra citada), mesmo papel de iniciação da offlane.
- fonte: busca (dota2protracker.com/hero/Primal+Beast via WebSearch); items.json (blink)

#### Consecrated Wraps (consecrated_wraps)
- porque: ganha velocidade de movimento em stacks e, ao levar dano de herói, vira uma barreira de dano por 7s, o que ajuda um mid sem suporte a sobreviver no dive.
- detalhe: citado como parte do build de pos 2 na busca. Também aparece com 12 contagens na fase do meio no OpenDota (dado agregado de todas as posições).
- fonte: busca (dota2protracker.com/hero/Primal+Beast via WebSearch); items.json (consecrated_wraps); OpenDota itemPopularity

#### Black King Bar (black_king_bar)
- porque: mesmo motivo da offlane, trava o Onslaught contra cancelamento por stun.
- contra: não resolve contra Doom (ver nota na offlane).
- fonte: busca (dota2protracker.com/hero/Primal+Beast via WebSearch); items.json (black_king_bar)

#### Aghanim's Shard (aghanims_shard)
- porque: mesmo papel da offlane, dá o stun a distância (Rock Throw) que um mid sem Onslaught carregado ainda não tem.
- fonte: busca (dota2protracker.com/hero/Primal+Beast via WebSearch); constants_hero_abilities.json

### Situacionais

Mesmos itens situacionais da pos 3 (Shiva's Guard, Heart of Tarrasque, Linken's Sphere, Boots of Travel, Aghanim's Scepter) se aplicam aqui: o OpenDota itemPopularity usado nesta ficha é agregado por herói, não por posição, e a pos 3 responde pela maior parte das partidas da amostra.

## Roshan

Sem dado de Roshan solo. Primal Beast não está entre os 22 heróis cobertos por resumo_por_heroi.json (banco que lista quem solo-mata Roshan) nem em resumo_com_suporte.json. No banco de eventos solos.json ele aparece como contribuinte de dano em 28 eventos de 23 partidas distintas (23 classificados como abate "em time", 2 como "finalização", 2 como "solo_com_suporte" e 1 como "solo_ajuda_curta"), mas nunca é o herói creditado pelo abate (campo "heroi" do dataset, atribuído a quem fez o dano principal): em nenhum dos 28 eventos esse campo aponta pra Primal Beast, mesmo quando ele é quem desfere o golpe literal final (campo "ultimo_golpe", o que acontece em 4 desses 28 eventos, sempre com o dano principal vindo de outro herói). Ou seja, ele ajuda a bater Roshan junto do grupo, mas o padrão local não mostra ele solando.
