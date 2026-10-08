---
id: ficha-muerta
titulo: "Muerta"
heroi: Muerta
patch: 7.41
posicoes: [1]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_patch.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- C:/Users/felip/Desktop/dota-tier1/data/draft.csv
- C:/Users/felip/Desktop/dota-tier1/data/jogadores_partida.csv
- https://api.opendota.com/api/heroes/138/itemPopularity
- https://dota2protracker.com/builds/muerta-pos1-1
- https://dotacoach.gg/en/heroes/muerta/builds/carry
- https://www.dota2protips.com/heroes/muerta
- https://www.oneesports.gg/dota2/muertas-hero-abilities-explained
- https://www.dotarecaps.com/builds/138/core
---

## Resumo
Muerta é carry à distância (atributo base int, mas o kit todo escala com ataque básico): Dead Shot causa dano e desacelera o alvo inicial por um instante, e o ricochete amedronta (foge do impacto) quem for atingido depois, The Calling silencia e desacelera em área, Gunslinger dá chance de disparo duplo em cada ataque e Pierce the Veil transforma o dano dela em mágico por alguns segundos (fonte: constants_abilities.json; oneesports.gg/dota2/muertas-hero-abilities-explained). No profissional ela é quase só pos 1: das 63 partidas rastreadas nas equipes do Atlas tier 1 no 7.41, 54 (85,7%) a escalaram como carry, contra só 4 como mid, 4 como suporte de roaming e 1 como suporte duro, amostras pequenas demais pra virar build própria (fonte: draft.csv; jogadores_partida.csv). O pick/ban é alto, 90 bans no mesmo recorte, sinal de prioridade de draft, e a build de carry tem página própria e estabelecida no dota2protracker (50% de vitórias em 80 partidas de 38 pros) (fonte: draft.csv; dota2protracker.com/builds/muerta-pos1-1).

## Pos 1 (carry)
- quando pegar: é a posição real do herói, de longe a mais jogada no profissional (85,7% das partidas do recorte local) e a única com build própria documentada (fonte: draft.csv; jogadores_partida.csv; dota2protracker.com/builds/muerta-pos1-1).
- itens iniciais: tango, magic_stick, branches, quelling_blade, faerie_fire

### Build
#### Falcon Blade (falcon_blade)
- minuto: cedo na lane, dentro do early game (dota2protracker e dotacoach.gg listam como primeiro item core da build de carry; o minuto exato não foi confirmável nesta checagem porque dota2protracker.com bloqueou o fetch com 403).
- porque: dá mana pra ela castar Dead Shot na lane sem secar depois de 2 ou 3 cast.
- detalhe: +200 de vida, +1,8 de regen de mana e +14 de dano por 1.125 de ouro. Dead Shot custa de 100 a 160 de mana com cooldown de 16 a 10s, cedo ela não tem outro jeito de sustentar isso (fonte: items.json; constants_abilities.json).
- fonte: items.json; constants_abilities.json; dotacoach.gg/en/heroes/muerta/builds/carry

#### Power Treads (power_treads)
- minuto: early game, logo depois do Falcon Blade (dotacoach.gg agrupa os dois no mesmo bloco de itens iniciais; minuto exato não confirmável porque dota2protracker.com bloqueou o fetch com 403).
- porque: mais ataque por segundo é mais chance de Gunslinger disparar o segundo tiro.
- detalhe: +25 de velocidade de ataque e atributo trocável; a maioria das builds deixa em agilidade pro dano de ataque básico, já que o Falcon Blade cobre a mana (fonte: items.json; dotacoach.gg/en/heroes/muerta/builds/carry).
- combo: cada ataque básico extra do Gunslinger (18 a 45% de chance por nível) é outro gatilho pro Maelstrom/Mjollnir que vem a seguir (fonte: constants_abilities.json).
- fonte: items.json; constants_abilities.json

#### Maelstrom (maelstrom)
- minuto: fim do early game, por volta dos 10 a 15 min (dotarecaps.com confirma a janela de 0 a 15 min pra esse item em Muerta; minuto exato não confirmável porque dota2protracker.com bloqueou o fetch com 403).
- porque: dano e velocidade de ataque baratos que ainda proc em área, bom pro farm de lane.
- detalhe: +25 de dano, +25 de velocidade de ataque e 25% de chance por ataque de soltar uma corrente que salta 4 alvos e perfura evasão (fonte: items.json).
- combo: cada tiro extra do Gunslinger é outra rolagem separada pra esse proc, o que acelera o clear de wave e camp (fonte: constants_abilities.json; items.json).
- fonte: items.json; constants_abilities.json

#### Mjollnir (mjollnir)
- porque: upgrade direto do Maelstrom, mantém o mesmo proc de corrente relevante quando os right click já carregam mais dano.
- detalhe: +25 de dano e +90 de velocidade de ataque, com 20% de chance de choque em área (225 de dano) e 25% de chance de corrente que salta 12 vezes (fonte: items.json).
- fonte: items.json

#### Dragon Lance (dragon_lance)
- porque: mais alcance de ataque mantém ela fora do raio de resposta de quem joga corpo a corpo.
- detalhe: +130 de alcance pra herói à distância (ela já ataca de 575), +15 de agilidade e +10 de força por 1.900 de ouro (fonte: items.json).
- fonte: items.json

#### Hurricane Pike (hurricane_pike)
- porque: a ativa empurra quem chegou perto e abre uma janela de ataque livre, ferramenta de kite contra gap closer.
- detalhe: empurra ela e o alvo 425 de distância um do outro e, por 6s, permite 5 ataques contra esse alvo sem restrição de alcance e com +100 de velocidade de ataque (fonte: items.json).
- contra: resolve contra heróis que precisam ficar colados nela pra bater (iniciadores corpo a corpo, gap closers de melee).
- combo: usar a ativa já empurra pra fora E dá 5 ataques garantidos, cada um rolando o proc do Mjollnir e a chance do Gunslinger de novo (fonte: items.json; constants_abilities.json).
- fonte: items.json

#### Black King Bar (black_king_bar)
- porque: imunidade mágica pra sobreviver ao disable que travaria ela antes de conseguir lutar.
- detalhe: +10 de força, +24 de dano, 60% de redução de dano mágico e 9s de imunidade (cai pra 8 e 7s em compras seguintes), com dispel básico na ativação (fonte: items.json).
- fonte: items.json

#### Daedalus (greater_crit)
- porque: multiplicador de crítico converte toda a velocidade de ataque acumulada em burst de dano físico.
- detalhe: +88 de dano e 30% de chance de crítico com 225% de multiplicador (fonte: items.json).
- fonte: items.json

### Situacionais
#### Mask of Madness (mask_of_madness)
- porque: acelera o farm com lifesteal quando o time adversário não tem punição forte pra cima dela.
- detalhe: +100 de velocidade de ataque e 24% de lifesteal por 6s, mas o Berserk silencia ela e reduz 7 de armadura nesse tempo (fonte: items.json).
- contra: resolve contra lanes fracas sem gank/disable confiável; evitar contra quem pune a silenciada, já que ela fica sem Dead Shot/The Calling durante o Berserk.
- fonte: items.json

#### Silver Edge (silver_edge)
- porque: invisibilidade pra reposicionar antes da luta e break remove a passiva do alvo no momento do engage.
- detalhe: 17s de invisibilidade (quebra ao atacar ou lançar feitiço), +25% de velocidade de movimento nesse tempo, e o ataque que revela causa 300 de dano físico bônus e desliga as passivas do alvo por 5s (fonte: items.json).
- contra: resolve contra heróis que dependem de uma passiva forte pra sobreviver ou causar dano (ex. evasão passiva, lifesteal passivo, auto-defesas).
- fonte: items.json

#### Monkey King Bar (monkey_king_bar)
- porque: ignora evasão alta e ainda soma dano mágico por ataque.
- detalhe: 80% de chance por ataque de perfurar evasão e causar 70 de dano mágico bônus, mais +50 de dano e +50 de velocidade de ataque (fonte: items.json).
- contra: resolve contra heróis de evasão alta que fariam o right click dela errar.
- fonte: items.json

#### Linken's Sphere (sphere)
- porque: bloqueia o primeiro feitiço direcionado contra ela a cada ciclo, segurando o combo de abertura do inimigo.
- detalhe: Spellblock bloqueia a maioria dos feitiços de alvo único uma vez a cada 14s, com 16 em todos os atributos e regen de vida/mana de sobra (fonte: items.json).
- contra: resolve contra iniciação de alvo único (hex, stun direcionado, silence direcionado) tentando abrir nela primeiro.
- fonte: items.json

## Interações e contras
- **Black King Bar inimigo**: Pierce the Veil causa dano mágico e não afeta quem está com imunidade mágica, então o BKB do adversário anula o burst da ultimate por completo; vale rastrear o cooldown do BKB alheio antes de ativar (fonte: constants_abilities.json, muerta_pierce_the_veil dmg_type Magical; dota2protips.com/heroes/muerta).
- **Linken's Sphere inimigo**: como Dead Shot é um feitiço de alvo único, o Spellblock do Linken's bloqueia o primeiro cast dela contra o portador a cada 14s (fonte: constants_abilities.json, muerta_dead_shot behavior Unit Target; items.json, sphere).
- **BKB da própria Muerta durante Pierce the Veil**: ativar o próprio BKB enquanto a ultimate está de pé soma imunidade física (do BKB) e mágica (da ultimate) ao mesmo tempo, o jeito de ficar praticamente intocável na janela de sobreposição, não é algo específico contra burst, é imunidade geral naquele intervalo (fonte: dota2protips.com/heroes/muerta).

## Roshan
Muerta solo o Roshan, mas a amostra local é pequena: 2 replays confirmados (1 pro, 1 pub), minuto mediano 31:48 (faixa 27:35–36:01) e nível mediano 22,5 (faixa 21–24). Ela termina a luta com ~93% da vida mediana restante e em ambos os casos a aegis ficou com ela mesma. Os itens mais vistos no momento do solo foram Power Treads, Mjollnir, Blink Dagger, Hurricane Pike, Daedalus, Silver Edge, Mask of Madness, Dragon Lance, Falcon Blade e Black King Bar, o mesmo núcleo da build de carry acima; as habilidades/itens ativados durante o solo foram Pierce the Veil nas duas vezes, mais Blink Dagger, Hurricane Pike, Madstone Bundle, Mjollnir passivo e Mask of Madness (fonte: dota-roshan-solo/data/resumo_por_heroi.json).
