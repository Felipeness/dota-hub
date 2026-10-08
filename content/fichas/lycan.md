---
id: ficha-lycan
titulo: "Lycan"
heroi: Lycan
patch: 7.41
posicoes: [3]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/items.json
- dota-roshan-solo/data/solos.json
- dota-tier1/work/equipes/betboom/analise.md
- dota-tier1/work/equipes/nigma/analise.md
- dota-tier1/work/equipes/navi/analise.md
- dota-tier1/work/equipes/team-spirit/analise.md
- dota-tier1/work/equipes/xtreme/analise.md
- dota-tier1/work/equipes/aurora/analise.md
- https://api.opendota.com/api/heroes/77/itemPopularity
- https://dotacoach.gg/en/heroes/lycan/builds/offlane
- https://dota2protracker.com/hero/legacy/Lycan
---

## Resumo
Lycan é um herói de força que farma rápido com os lobos (Apex Predator dá 18% de dano extra contra creeps neutros) e se torna uma ameaça de perseguição e split push com Shapeshift (40% de chance de crítico, 550 de velocidade, imune a slow). O OpenDota marca ele como Carry/Pusher/Durable/Escape, mas no 7.41 o papel real nos times de ponta é pos 3: os offlaners da BetBoom (MieRo), Aurora (Ws`), Nigma (Davai), Navi (pma) e Team Spirit (Batyuk) jogam Lycan, sem nenhum registro dele em pos 1, 2, 4 ou 5 nos dados do Atlas tier1. No período pré-TI (n=89), a Xtreme bania Lycan em 22% dos jogos contra 4% do resto do Tier 1, uma leitura de "ban de medo" porque ele pune time que joga devagar no early; mas isso é do roster antigo: nos 60 dias até 06/10, já com o roster atual, a Xtreme só baniu Lycan (e Alchemist) 1 vez em 34 jogos (xtreme/analise.md).

## Pos 3 (offlane)
- quando pegar: quando a lane permite farmar sem ser puxado por disable pesado nos primeiros minutos e o time quer alguém puxando torre e brigando com os lobos no meio de jogo; é a pool fixa de pos 3 de pelo menos cinco times de ponta no patch atual (Atlas tier1: betboom/analise.md, aurora/analise.md, nigma/analise.md, navi/analise.md, team-spirit/analise.md).
- itens iniciais: tango, quelling_blade, branches

### Build
#### Helm of Iron Will (helm_of_iron_will)
- minuto: antes do 15 (1º item do early; a fonte d2pt dá a janela "antes do minuto 15" pros quatro primeiros itens, não um minuto exato por item)
- porque: sustenta vida no camp sem gastar mana, primeiro passo da linha de helms que carrega o farm.
- detalhe: dá regeneração de vida alta por um custo baixo (items.json), suficiente pra tankar dano de creep grande sozinho enquanto ainda não tem os lobos fortes.
- fonte: dota2protracker.com/hero/legacy/Lycan; dota-imortal/data/opendota/items.json

#### Helm of the Dominator (helm_of_the_dominator)
- minuto: antes do 15 (2º item, mesma janela early do guia; sem minuto exato na fonte)
- porque: domina um creep neutro forte pra puxar como unidade extra de dano e push.
- detalhe: segundo o items.json dá +6 de todos os atributos, +6 de armadura e regen, e permite dominar lane creep ou summon inimigo. O creep dominado ganha bônus de dano, regen e armadura próprios (creep_bonus_damage, creep_bonus_hp_regen, creep_bonus_armor no items.json), é unidade separada dos lobos de Summon Wolves.
- fonte: dota2protracker.com/hero/legacy/Lycan; dota-imortal/data/opendota/items.json

#### Helm of the Overlord (helm_of_the_overlord)
- porque: upgrade do Dominator vira item de stats puro (21 de todos os atributos, 7 de armadura, 7 de regen pelo items.json) sem perder o controle de creep.
- detalhe: health_min sobe pra 1800 e o creep dominado ganha ainda mais bônus (70 de dano, 12 de hp regen, 7 de armadura). Vendê-lo mata a unidade dominada.
- fonte: dota-imortal/data/opendota/items.json; dotacoach.gg/en/heroes/lycan/builds/offlane

#### Boots of Speed (boots)
- porque: mobilidade barata pra trocar de camp e cobrir lane; é o 4º item do early no guia in-game do dotacoach, antes dos itens de luta.
- detalhe: dotacoach lista Power Treads (attack speed + atributo extra) como upgrade situacional pra esse herói; Phase Boots não aparece como item de build do Lycan na fonte, só na seção "Counter Items" (o que os adversários compram contra ele), por isso foi removido daqui.
- fonte: dotacoach.gg/en/heroes/lycan/builds/offlane

#### Assault Cuirass (assault)
- minuto: entre 15 e 30 (3º item do meio-jogo no d2pt, antes do Shard; a fonte dá a janela "antes do minuto 30", não um minuto exato)
- porque: aura de +30 de velocidade de ataque e +5/-5 de armadura (pra time e inimigo) que empurra torre com os lobos e o creep dominado junto.
- detalhe: item de luta em grupo clássico pra quem já tem vários corpos no campo (Lycan, lobos, creep dominado); o bônus de armadura própria (+10) ajuda a aguentar foco.
- fonte: dota2protracker.com/hero/legacy/Lycan; dota-imortal/data/opendota/items.json

#### Aghanim's Shard (aghanims_shard)
- minuto: entre 15 e 30 (4º item do meio-jogo no d2pt, depois do Assault Cuirass; mesma janela, sem minuto exato)
- porque: entra como power spike de meio de jogo recomendado nos dois guias consultados antes dos itens de luta.
- detalhe: o efeito exato do Shard em Lycan não está descrito nas fontes consultadas (items.json local não lista atributos pra ele); por isso o porquê aqui é só o timing de compra, não a mecânica.
- fonte: dota2protracker.com/hero/legacy/Lycan; dotacoach.gg/en/heroes/lycan/builds/offlane

#### Black King Bar (black_king_bar)
- porque: 7 a 9s de imunidade a magia (items.json) pra não ser travado por stun/silence enquanto bate com os lobos.
- detalhe: também dá 10 de força e 24 de dano; reduz 60% do dano de feitiço durante a imunidade.
- combo: BKB + Shapeshift = ninguém consegue travar nem slowar o Lycan por 9s (duração do 1º BKB, cai pra 8s e 7s em compras seguintes), janela pra fechar luta ou escapar com os lobos.
- fonte: dotacoach.gg/en/heroes/lycan/builds/offlane; dota-imortal/data/opendota/items.json

#### Aghanim's Scepter (ultimate_scepter)
- porque: item de escala genérico (10 de todos os atributos, +175 de vida e mana pelo items.json) pra jogo que passa dos 30-35 min.
- detalhe: o upgrade específico de Summon Wolves com o Scepter não está documentado com clareza nas fontes consultadas; o constants_abilities.json local mostra valores extras de wolf_count, bonus_levels e bash_chance dentro do próprio Summon Wolves, mas sem rótulo explícito confirmando que vêm do Scepter, então não afirmo a mecânica aqui.
- fonte: dotacoach.gg/en/heroes/lycan/builds/offlane; dota-imortal/data/opendota/constants_abilities.json

### Situacionais
#### Nullifier (nullifier)
- porque: muda 4 segundos de silêncio num alvo que está fugindo ou canalizando.
- contra: heróis que escapam com buff de velocidade, invisibilidade ou teleporte canalizado; o Nullifier pode ser lançado até em unidade invulnerável (nota do items.json) e ainda aplica o silêncio e o slow de 10%.
- fonte: dota-imortal/data/opendota/items.json

#### Orchid Malevolence (orchid)
- porque: silencia por 5s e aumenta o dano mágico que o alvo recebe nesse tempo (30% pelo items.json), serve pra isolar e matar um suporte ou caster antes de virar Bloodthorn.
- contra: heróis squishy de mana que dependem de feitiço pra fugir ou curar.
- fonte: dota-imortal/data/opendota/items.json; dotacoach.gg/en/heroes/lycan/builds/offlane

#### Bloodthorn (bloodthorn)
- porque: evolução do Orchid com mais dano, velocidade de ataque e o alvo silenciado recebe 60% mais dano enquanto durar (items.json).
- contra: mesma leitura do Orchid, mas pra fase em que o alvo já tem vida pra sobreviver ao silêncio simples.
- combo: silêncio do Bloodthorn + lobos no alvo = burst que ignora qualquer resposta mágica da vítima por 5s.
- fonte: dota-imortal/data/opendota/items.json

#### Swift Blink (swift_blink)
- porque: blink de 1200 de alcance mais 25 de agilidade e bônus temporário de velocidade de movimento (items.json), fecha distância que o Shapeshift (550 de velocidade) não cobre a tempo contra quem já está fugindo.
- contra: heróis de fuga de longo alcance que escapam antes do Shapeshift alcançar.
- fonte: dota-imortal/data/opendota/items.json; dotacoach.gg/en/heroes/lycan/builds/offlane

#### Boots of Travel (travel_boots)
- porque: +90 de velocidade e teleporte com 40s de cooldown (items.json), serve o perfil de Pusher do Lycan (heroes.json) de cobrir mais de uma lane puxando torre.
- contra: jogos que se arrastam e o time inimigo defende várias lanes ao mesmo tempo; a mobilidade de mapa compensa não ter um item de luta a mais.
- fonte: dota-imortal/data/opendota/items.json; dota-imortal/data/opendota/heroes.json

## Roshan
Lycan quase não soloa Roshan puro. Nos replays locais (dota-roshan-solo/data/solos.json) ele aparece como o herói que mata/termina o Roshan em 62 registros: 52 classificados como "time" (o time mata junto), 6 como "finalização", 3 como "solo_com_suporte" e só 1 como "solo_puro" (esse único caso veio de uma partida de Ability Draft, fora do kit normal, então não conta pro padrão de jogo real). Dos dois registros de jogo normal com apoio de suporte (classificação solo_com_suporte, fora Ability Draft): um em partida "pro" com Lycan no nível 17 por volta de 21:30, inventário com Helm of the Overlord, Drum of Endurance (ancient_janggo) e Assault Cuirass; outro em partida "yuma" com Lycan no nível 11 por volta de 19:31, também já com Helm of the Overlord. Ou seja: o padrão real do herói é Roshan junto com o time, aproveitando os lobos e o Howl pra ajudar no dano, não solar sozinho como Ursa ou Lone Druid.
