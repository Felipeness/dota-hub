---
id: ficha-slardar
titulo: "Slardar"
heroi: Slardar
patch: 7.41
posicoes: [3, 2]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/items.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-tier1/data/draft.csv
- dota-roshan-solo/data/solos.json
- dota-roshan-solo/data/resumo_por_heroi.json
- https://api.opendota.com/api/heroes/28/itemPopularity
---

## Resumo

Slardar é Carry/Durable/Initiator/Disabler/Escape (heroes.json) e existe pra abrir luta: Guardian Sprint fecha a distância, Slithereen Crush atordoa e deixa poça, e Corrosive Haze reduz a armadura do alvo pra amplificar o dano físico do time inteiro enquanto revela invisibilidade. Um detalhe que vale lembrar na hora de iniciar: o Bash of the Deep é bkbpierce, então mesmo um carry inimigo com Black King Bar ativado ainda recebe o stun do bash a cada 3 ataques (constants_abilities.json). No 7.41 ele é jogado majoritariamente na offlane: no dataset de replays pro do Atlas tier1 ele aparece 84 vezes como pos 3 contra 41 como pos 2 mid e só 6 como pos 4, com 61,9% de vitória na pos 3 contra 43,9% na pos 2 (draft.csv). A build de itens não muda de verdade entre as duas posições, só o ritmo em que ela sai.

## Pos 3 (offlane)

- quando pegar: pra abrir luta contra times que gostam de ficar agrupados, usando o combo de Blink mais Crush mais Corrosive Haze pra criar o primeiro pick-off da luta. É de longe a posição mais jogada dele em partida pro no 7.41, 84 ocorrências e 61,9% de vitória (draft.csv).
- itens iniciais: tango, branches, branches, circlet, quelling_blade

### Build

#### Power Treads (power_treads)
- porque: dá velocidade de ataque pra fechar o ciclo de 3 ataques do Bash of the Deep mais rápido.
- detalhe: 1400 de custo, +10 no atributo trocado, +25 de velocidade de ataque. Entre as botas que ficam como escolha final, é a mais comprada por quem joga Slardar na amostra pública do OpenDota (87 compras contra 5 de Phase Boots); a Boots of Speed sem upgrade aparece com contagem maior (101), mas é só o componente que antecede qualquer bota, inclusive a própria Power Treads.
- fonte: https://api.opendota.com/api/heroes/28/itemPopularity (early_game_items); items.json

#### Bracer (bracer)
- porque: statstick barato de vida que segura a lane sem atrasar a bota.
- detalhe: 505 de custo, +5 de força, +2 de agilidade, +2 de inteligência, +50 de vida, +0,75 de regeneração.
- fonte: https://api.opendota.com/api/heroes/28/itemPopularity (early_game_items); items.json

#### Blink Dagger (blink)
- porque: fecha a distância pra colar o combo antes do alvo conseguir reagir ou fugir.
- detalhe: 2250 de custo, alcance de blink 1200 (cai para 960 se tomou dano nos últimos 3 segundos). É o item isolado mais comprado na fase mid por quem joga Slardar na amostra pública do OpenDota (96 compras), na frente dos componentes do Black King Bar (Ogre Axe 94, Mithril Hammer 60) e do Aghanim's Shard (90), mas por uma margem pequena, não "de longe".
- combo: Blink atrás do alvo, Slithereen Crush pra travar com stun e depois slow, Corrosive Haze pra reduzir a armadura e revelar invisibilidade. Sequência de iniciação que sai direto da combinação dos próprios efeitos das habilidades (constants_abilities.json).
- fonte: https://api.opendota.com/api/heroes/28/itemPopularity (mid_game_items); items.json; constants_abilities.json

#### Black King Bar (black_king_bar)
- porque: segura o canal da iniciação contra disable mágico pra garantir que o combo saia inteiro.
- detalhe: 4050 de custo (Ogre Axe + Mithril Hammer), +10 de força, +24 de dano, imunidade mágica por 9/8/7 segundos conforme o nível, reduz 60% do dano mágico recebido mesmo durante a imunidade. Os componentes (ogre_axe e mithril_hammer) aparecem em alta quantidade na mesma amostra, mostrando que o item é rota comum.
- fonte: https://api.opendota.com/api/heroes/28/itemPopularity (mid_game_items); items.json

#### Aghanim's Scepter (ultimate_scepter)
- porque: aumenta o raio e a duração da poça de Seaborn Sentinel, o passivo que dá velocidade, regeneração, dano e armadura extra enquanto Slardar fica em poça, trilha ou rio.
- detalhe: 4200 de custo, +10 em todos os atributos, +175 de vida e mana. O upgrade soma +75 de raio e +5 segundos de duração à poça deixada por Slithereen Crush e Corrosive Haze (scepter_puddle_radius_tooltip e scepter_puddle_duration_increase_tooltip em constants_abilities.json).
- combo: cada Slithereen Crush ou Corrosive Haze passa a deixar uma poça maior, que o time inimigo precisa atravessar na luta, e Slardar fica mais tempo dentro do próprio buff de Seaborn Sentinel.
- fonte: https://api.opendota.com/api/heroes/28/itemPopularity (late_game_items); items.json; constants_abilities.json

### Situacionais

#### Soul Ring (soul_ring)
- porque: converte vida em mana de graça, sem gastar ouro em regen, pra bancar o gasto alto de Crush e Corrosive Haze no early.
- contra: lane pesada em gasto de mana, quando o custo de Slithereen Crush e Corrosive Haze aperta o sustain antes de fechar a bota.
- detalhe: 805 de custo, +6 de força, +2 de armadura, converte 170 de vida em mana por 10 segundos.
- fonte: https://api.opendota.com/api/heroes/28/itemPopularity (early_game_items, alternativa ao Bracer); items.json

#### Assault Cuirass (assault)
- porque: dá armadura e velocidade de ataque em área pro time inteiro, reforçando a troca que o Corrosive Haze já abre.
- contra: times com dano físico de auto-ataque alto que furam na troca corpo a corpo. A aura de -5 de armadura no inimigo empilha com os -10/-15/-20 do Corrosive Haze.
- detalhe: 5125 de custo (via Hyperstone + Buckler + Platemail), +30 de velocidade de ataque, +10 de armadura, aura de +30 de velocidade de ataque e +5 de armadura pro time, -5 de armadura pro inimigo num raio de 1200.
- fonte: https://api.opendota.com/api/heroes/28/itemPopularity (late_game_items); items.json

#### Nullifier (nullifier)
- contra: herói que depende de uma habilidade de mobilidade ou invisibilidade pra escapar depois que o combo de iniciação já foi gasto.
- detalhe: 4350 de custo (via Sacred Relic + Splintmail), +75 de dano, +10 de armadura, projétil de 1800 de velocidade que silencia o alvo por 4 segundos e aplica lentidão progressiva.
- fonte: https://api.opendota.com/api/heroes/28/itemPopularity (late_game_items, via Sacred Relic); items.json

#### Harpoon (harpoon)
- porque: o gancho ativo resolve sozinho o alvo fugindo, sem precisar gastar um segundo Blink Dagger pra alcançar de novo.
- contra: herói que corre pra fora do alcance do combo antes do Bash completar o ciclo de 3 ataques.
- detalhe: 4700 de custo (via Echo Sabre + Diadem), +25 de força, +10 de agilidade, +10 de inteligência, +25 de dano. O gancho ativo puxa o alvo (35% da distância, alcance de lançamento de 700) de volta pro raio de ataque.
- combo: puxa o alvo fugindo de volta pro alcance, deixando o Bash of the Deep fechar o resto sem precisar gastar outro Blink Dagger.
- fonte: https://api.opendota.com/api/heroes/28/itemPopularity (mid_game_items e late_game_items); items.json

## Pos 2 (mid)

- quando pegar: mesmo combo de iniciação da offlane, mas puxado pela mid pra chegar mais rápido no Blink e no Black King Bar quando o time já tem outro herói abrindo luta pela trilane. Amostra pro bem menor que a pos 3, 41 partidas e 43,9% de vitória no 7.41 (draft.csv): tratar com mais cautela que o número da offlane.
- itens iniciais: ver bloco de itens iniciais da Pos 3; a amostra pública não separa compra inicial por posição.

### Build

Mesma sequência de itens da Pos 3 (Power Treads, Bracer, Blink Dagger, Black King Bar, Aghanim's Scepter) e as mesmas situacionais (Soul Ring, Assault Cuirass, Nullifier, Harpoon). A amostra do OpenDota usada nos blocos acima não separa por posição, então o "porquê" de cada item vale igual para as duas; o que muda na mid é só o ritmo, puxado pela XP e pelo farm sozinho em vez de dividir a trilane.

## Roshan

Slardar quase não aparece matando Roshan nos replays pro. No dataset local de Roshan solo (solos.json) ele finaliza o Roshan em só 3 ocasiões em toda a base de replays, todas classificadas como kill de time, nenhuma solo, e ele não está entre os 22 heróis cobertos pelo resumo de solo do projeto (resumo_por_heroi.json). Na prática, quando participa de um Roshan é junto do time, puxado pela própria iniciação, não é um herói que costuma solar.
