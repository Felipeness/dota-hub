---
id: ficha-bristleback
titulo: "Bristleback"
heroi: Bristleback
patch: 7.41
posicoes: [3]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/falcons/analise.md
- C:/Users/felip/Desktop/dota-tier1/work/equipes/liquid/scripts/saida/detalhe.txt
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_com_suporte.json
- https://dotacoach.gg/heroes/bristleback
- https://dotacoach.gg/heroes/bristleback/builds/offlane
- https://dota2protracker.com/hero/Bristleback
- https://dota2protracker.com/builds/bristleback-pos3-1
- https://dota2protracker.com/builds/bristleback-pos1-1
- https://api.opendota.com/api/heroes/99/itemPopularity
- https://api.opendota.com/api/benchmarks?hero_id=99
---

## Resumo

Bristleback é um tanque de força corpo a corpo que farma com Quill Spray em área e aguenta luta virando as costas pro inimigo, porque a passiva Bristleback reduz o dano que ele recebe quando é atingido pelo lado ou por trás (até 20%/40%), e Prickly amplifica o dano e a duração de debuff que ele mesmo causa em inimigos que estão atrás dele, não quando ele é atingido (fonte: constants_abilities.json). No 7.41 ele é quase um hero mono posição: 91,0% das partidas dele são na offlane (pos 3), contra 3,1% no mid, 2,1% no pos 1, 2,2% e 1,5% nos dois suportes, com 49,3% de win rate na offlane (patch 7.41f, fonte: dotacoach.gg/heroes/bristleback). Os dados de pro do Atlas Tier 1 confirmam: o offlaner da Team Falcons (AMMAR_THE_F) jogou Bristleback 7 vezes com 71% de WR, e a Liquid pegou ele 8 vezes com 62,5% de WR, maioria na pos 3 (4 jogos) com flex ocasional pra pos 1 (3) e pos 2 (1) (fonte: falcons/analise.md e liquid/detalhe.txt).

## Pos 3 (offlane)

- quando pegar: pega ele pra estabilizar uma lane difícil e puxar farm sozinho depois, porque o kit inteiro é feito pra ele tomar dano de propósito (virando as costas) e devolver com Quill Spray em área. No nível 7, com Quill Spray quase maxado (3 pontos) e Warpath liberado, ele já limpa o camp ancient sem ajuda (fonte: dotacoach.gg/heroes/bristleback).
- itens iniciais: tango, magic_stick, circlet, branches, ward_observer

### Build

#### Bracer (bracer)
- porque: Força, HP e regen baratos pra segurar o trade físico da lane sem gastar muito ouro.
- detalhe: dá 5 de força, 2 de agilidade, 2 de inteligência, 50 de HP e 0,75 de regen de HP por 505 de ouro. É o primeiro item porque sobra pra completar Treads logo depois.
- fonte: items.json; dotacoach.gg/heroes/bristleback/builds/offlane

#### Null Talisman (null_talisman)
- porque: mana regen pra sustentar Goo e o autocast de Quill Spray sem secar o mana pool.
- detalhe: dá 1,0 de regen de mana e +3% de mana máxima, além de atributos secundários. Sem isso ele fica refém do soul_ring pra lançar magia na lane.
- fonte: items.json; dotacoach.gg/heroes/bristleback/builds/offlane

#### Power Treads (power_treads)
- porque: trocar pra Força dá HP extra, e o attack speed acelera o autocast de Quill Spray nos creeps.
- detalhe: +25 de attack speed e +10 no atributo escolhido, geralmente Força pra engordar o pool de HP que o resto da build explora.
- fonte: items.json; dotacoach.gg/heroes/bristleback/builds/offlane

#### Magic Wand (magic_wand)
- porque: os trades de Bristleback na lane envolvem magia dos dois lados (Goo, Quill, harass inimigo), então a carga enche rápido.
- detalhe: 20 cargas, 15 de HP e mana por carga, ativa num raio de 1200. Vira o Magic Stick inicial.
- fonte: items.json

#### Consecrated Wraps (consecrated_wraps)
- porque: stack de velocidade e resistência mágica pra ele sair da fase de lane sem perder iniciativa na rotação.
- detalhe: ganha stack a cada 3s até 3 stacks, cada stack dá 20% de movimento por 7s; se ele toma dano de herói inimigo ou de Roshan, consome todos os stacks de uma vez para virar uma barreira que absorve 120 de dano por stack (até 360). Soma 15 de resistência mágica e 6 em todos os atributos.
- fonte: items.json; dotacoach.gg/heroes/bristleback/builds/offlane

#### Lotus Orb (lotus_orb)
- porque: devolve pro inimigo o disable direcionado que travaria o Bristleback, já que ele não tem nenhuma resposta própria a iniciação.
- detalhe: Echo Shell recasta a maioria dos feitiços direcionados de volta no inimigo que lançou, e ainda dá 10 de armadura e regen de mana e HP. É basic dispel ao ativar.
- contra: iniciação de alvo único (hex, stun direcionado, silence que travaria ele pra sempre).
- fonte: items.json; dotacoach.gg/heroes/bristleback/builds/offlane

#### Aghanim's Shard (aghanims_shard)
- porque: dá Hairball, o único jeito dele aplicar Goo e Quill Spray à distância antes de entrar no corpo a corpo.
- detalhe: Hairball tem 700 de raio, 750 de alcance e 13s de cooldown, aplica 1 stack de Quill e 2 de Goo na área de impacto. É o item mais comprado no mid game dele nas partidas públicas do OpenDota (83 de contagem, o maior de toda a fase).
- combo: Hairball à distância seguido de Quill Spray quando o alvo entra no raio: ele já chega com os dois debuffs ativos antes do primeiro hit.
- fonte: constants_abilities.json; api.opendota.com/api/heroes/99/itemPopularity; dotacoach.gg/heroes/bristleback

#### Sange and Yasha (sange_and_yasha)
- porque: resistência a status, attack speed e velocidade deixam ele difícil de travar e difícil de fugir dele ao mesmo tempo.
- detalhe: +16 de força e agilidade, +20 de attack speed, 16% de resistência a status e 12% de velocidade de movimento. No late game público do OpenDota fica em 3º lugar de contagem, atrás do Reaver (componente de Satanic/Heart) e do próprio Heart of Tarrasque.
- fonte: items.json; dotacoach.gg/heroes/bristleback/builds/offlane; api.opendota.com/api/heroes/99/itemPopularity

#### Heart of Tarrasque (heart)
- porque: HP puro é o que permite ele ficar de propósito de costas pro inimigo disparando Quill Spray sem morrer no processo.
- detalhe: +40 de força e regen de 1,5% do HP que falta por segundo, em cima do regen base de 1. Com a passiva Bristleback reduzindo até 40% do dano recebido por trás, o Heart vira o pool de HP mais difícil de esvaziar da fase late.
- fonte: items.json; dotacoach.gg/heroes/bristleback/builds/offlane

#### Black King Bar (black_king_bar)
- porque: imunidade mágica por até 9s segura justamente o combo de disable que deixaria ele parado pra sempre.
- detalhe: dispel básico ao ativar, 60% de resistência mágica e imunidade a dano refletido e puro durante a janela. Essencial porque ele não tem nenhum dispel ou escape no kit base.
- fonte: items.json; dotacoach.gg/heroes/bristleback/builds/offlane

#### Assault Cuirass (assault)
- porque: attack speed pro time e -5 de armadura no inimigo em área ajudam a converter o tanque dele em dano de grupo na luta prolongada.
- detalhe: aura de 1200 de raio que dá 30 de attack speed e 5 de armadura pros aliados e reduz 5 de armadura dos inimigos próximos. Casa com o pool de HP do Heart pra ele brigar no meio do grupo inimigo.
- fonte: items.json; dotacoach.gg/heroes/bristleback/builds/offlane

#### Abyssal Blade (abyssal_blade)
- porque: dá o disable que o kit dele não tem, pra prender quem tentaria fugir do alcance curto do Quill Spray.
- detalhe: Overwhelm atordoa por 1,6s ignorando imunidade a debuff, e o bash passivo (25% de chance corpo a corpo) trava o alvo por 1,2s e soma 120 de dano físico. +26 de força e 30% de resistência a slow.
- fonte: items.json; dotacoach.gg/heroes/bristleback/builds/offlane

#### Satanic (satanic)
- porque: lifesteal alto e imunidade a debuff por 6s sustentam ele brigando sem ter nenhum escape próprio.
- detalhe: Unholy Rage sobe o roubo de vida pra 175% por 6s, com dispel básico ao ativar. Puxa 25 de força e dano, e é o componente (Reaver) com maior contagem isolada no late game público.
- fonte: items.json; api.opendota.com/api/heroes/99/itemPopularity; dotacoach.gg/heroes/bristleback/builds/offlane

### Situacionais

#### Eul's Scepter of Divinity / Wind Waker (cyclone / wind_waker)
- porque: resposta a Break, o efeito que mais neutraliza ele porque desliga Prickly e Warpath.
- detalhe: Cyclone deixa invulnerável por 2,5s e é basic dispel; o Wind Waker upgrade também pode ser usado num aliado, servindo de salvamento além de resposta a Break.
- contra: Silver Edge e qualquer fonte de Break que desligue Prickly, Warpath ou a passiva Bristleback.
- fonte: dotacoach.gg/heroes/bristleback (rótulo "counter enemy Break"); items.json

#### Heaven's Halberd (heavens_halberd)
- porque: o Disarm trava quem depende de ataque básico pra causar dano, exatamente o que ele quer anular numa luta.
- detalhe: Disarm impede o alvo de atacar por 3,5s, e soma 9 de armadura, 25% de evasão e 6 de regen de HP, reforçando o próprio plano de tanque dele.
- contra: carries e heróis que dependem de dano de ataque básico (right-click) pra fazer efeito.
- fonte: items.json

#### Pipe of Insight (pipe)
- porque: a barreira absorve bem contra nuke em área, o tipo de dano que mais ameaça um tanque físico como ele.
- detalhe: Barrier absorve 425 de dano mágico pros aliados num raio de 1200 por 8s, e a aura dá 8% de resistência mágica constante pro time.
- contra: times com dano mágico em área concentrado (burst de ultimates em grupo).
- fonte: items.json

#### Crimson Guard (crimson_guard)
- porque: bloqueia burst físico em área logo no engage, o momento em que o time dele mais sofre antes de reagir.
- detalhe: Guard dá 100% de chance de bloquear 70 mais 2% do HP máximo dele por ataque recebido, pros aliados num raio de 1200, por 7s.
- contra: iniciação física em área que estoura o time todo de uma vez.
- fonte: items.json

#### Shiva's Guard (shivas_guard)
- porque: a aura de attack speed negativo neutraliza lineups de ataque físico rápido, que normalmente destroem o pool de HP dele.
- detalhe: Freezing Aura reduz 45 de attack speed inimigo num raio de 1200, e o Arctic Blast soma 260 de dano mágico em área com 40% de slow.
- contra: times de ataque físico rápido (muitos hits por segundo, não dano por hit).
- fonte: items.json

#### Linken's Sphere (sphere)
- porque: bloqueia de graça o único nuke ou disable de alto impacto que o inimigo manda direto nele.
- detalhe: Spellblock anula o primeiro feitiço direcionado a cada 14s, e pode ser transferido pra um aliado em apuro.
- contra: um disable ou nuke único de alto impacto direcionado nele (sem ser em área).
- fonte: items.json

#### Blade Mail (blade_mail)
- porque: devolve o próprio burst físico que um assassino tentaria usar pra queimar ele rápido.
- detalhe: por 5,5s, devolve todo o dano recebido aumentado em 85%. Também funciona passivamente, devolvendo uma fração menor de todo ataque sofrido.
- contra: burst físico concentrado num alvo único, tentando queimar ele numa janela curta.
- fonte: items.json

## Roshan

Bristleback não é hero de Roshan solo. Nos replays pro locais ele aparece em 25 mortes de Roshan, e nenhuma delas é classificada como solo_puro, solo_com_suporte ou solo_ajuda_curta: todas são "time" (o grupo mata junto) ou "finalizacao" (ele só dá o último golpe) (fonte: dota-roshan-solo/data/solos.json). Numa partida ele aparece listado como suporte no fosso de outro herói que soloou, ou seja, ajudando a abrir caminho sem ser ele o carro-chefe do dano (fonte: dota-roshan-solo/data/resumo_com_suporte.json). O papel dele com Roshan é facilitar pro time: Viscous Nasal Goo reduz a armadura do alvo, e o guia de offlane cita isso como forma de acelerar a queda de Roshan em grupo cedo no jogo, não de solar (fonte: dotacoach.gg/heroes/bristleback).
