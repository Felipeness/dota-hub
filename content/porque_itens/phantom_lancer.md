---
id: porque-itens-phantom_lancer
titulo: "Por que cada item: Phantom Lancer"
heroi: Phantom Lancer
patch: 7.41
fontes:
- app/public/data/herois/phantom_lancer.json
- dota-imortal/data/opendota/items.json
- https://liquipedia.net/dota2/Illusions
- https://dota2.fandom.com/wiki/Illusion
- https://dotacoach.gg/en/items/eye-of-skadi
- https://dotacoach.gg/en/items/manta-style
- https://www.dota2.com/patches/7.41
---

## Power Treads (power_treads)
- porque: Primeira bota de farm: ataque e troca de atributo mantêm 6 LH/min até o nível 6.
- detalhe: +25 de velocidade de ataque e +55 de movimento (melee), com atributo trocável. Fecha por volta de 5-6 min (mediana de topo de MMR 5,7 min) e sua compra não depende de nenhuma habilidade do PL: é só farm mais rápido antes do Juxtapose virar o jogo.
- fonte: app/public/data/herois/phantom_lancer.json; dota-imortal/data/opendota/items.json

## Magic Wand (magic_wand)
- porque: Sustain barato de 460 de ouro contra harass e nukes enquanto você não tem Yasha pra sair da lane.
- detalhe: 20 cargas por feitiço visível inimigo em 1200 de raio, 15 de vida/mana por carga. Ajuda do nível 6 ao 10, quando você já está sozinho limpando camps e sem suporte por perto.
- fonte: app/public/data/herois/phantom_lancer.json; dota-imortal/data/opendota/items.json

## Yasha (yasha)
- porque: Velocidade de movimento e de ataque pra fechar o 2º ciclo de camps (Volta B) sem perder tempo correndo.
- detalhe: +16 agilidade, +15 velocidade de ataque, +10% de movimento. Com Power Treads chega a 374 de movimento e o ritmo sobe de 9 para 12 last hits por minuto. É só a base do Manta: compre pensando no upgrade, não como item final.
- combo: Yasha + Power Treads = 374 de movimento, ritmo de 12 LH/min a partir do nível 8 (~10 min).
- fonte: app/public/data/herois/phantom_lancer.json; dota-imortal/data/opendota/items.json

## Manta Style (manta)
- porque: Dispel básico e 2 ilusões extras: primeiro item que te deixa difícil de prender e acelera o farm de uma vez.
- detalhe: 2 imagens por 18 s, cada uma causando 33% do seu dano corpo a corpo (dado confirmado pelos arquivos do patch local: images_do_damage_percent_melee). O dispel ao usar remove silêncio, slow e root comuns, mas não remove stun nem hex que você já tenha levado antes de ativar. No 7.41 a receita é Yasha + Diadem (não Yasha + Yasha), então você nunca duplica o Yasha puro.
- contra: Heróis que só travam você com silêncio, root ou slow de curta duração (o dispel resolve ao ativar), mas não ajuda contra stun ou hex já aplicados.
- combo: Manta + Aghanim's Scepter: empurra uma lane inteira em ~15 s, com 40-50% de chance de criar ilusão a cada ataque que atravessa um inimigo.
- fonte: app/public/data/herois/phantom_lancer.json; dota-imortal/data/opendota/items.json

## Aghanim's Scepter (ultimate_scepter)
- porque: Dá alcance e ilusões ao Phantom Rush: vira sua ferramenta de iniciação e de farm de ancient.
- detalhe: +575 de alcance no Rush (total 1.400) e cria ilusões extras ao atravessar inimigos durante o dash. Chega perto do Shrine of Wisdom de 800 XP das 21:00, então o timing de compra (~20:30-21:30) costuma coincidir com essa coleta.
- combo: Com Manta já pronto, o push de lane em ~15 s (acima) depende deste item.
- fonte: app/public/data/herois/phantom_lancer.json

## Eye of Skadi (skadi) [ou Orchid -> Bloodthorn]
- porque: Atributos brutos deixam o herói E as ilusões mais fortes, porque ilusões herdam dano baseado em atributo (ainda que não ganhem o slow do Cold Attack).
- detalhe: +35 em todos os atributos e +HP/mana. Ilusões não usam modificadores de ataque únicos (UAM) como o Cold Attack do Skadi, mas usam normalmente bônus de atributo e vida/mana crus, então o Skadi ainda deixa as cópias mais fortes de forma indireta. Orchid -> Bloodthorn troca essa tankiness por silêncio + crit pra fechar pick-offs de alvo único; no D2PT o Skadi fica em 66,9% de vitória, dentro da mesma faixa do Orchid (62,3%) e do Bloodthorn (67,9%). Nenhuma das duas rotas se destaca como claramente superior em win rate, o Skadi só é a mais comprada (59% dos jogos).
- contra: Pick-offs de alvo único fogem de você quando não tem silêncio (Orchid/Bloodthorn resolve); duelos longos pedem a tankiness do Skadi.
- fonte: app/public/data/herois/phantom_lancer.json; dota-imortal/data/opendota/items.json; https://liquipedia.net/dota2/Illusions (via busca); https://dotacoach.gg/en/items/eye-of-skadi

## Aghanim's Shard (aghanims_shard)
- porque: Liga o ativo da Juxtapose: invisibilidade curta pra engajar ou fugir sem gastar Doppelganger.
- detalhe: 75 de mana, recarga 18 s: 8 s de invisibilidade + 15% de velocidade de movimento. Metade dos jogos de topo de MMR compra por volta dos 31-32 min, já no fim da curva de itens.
- fonte: app/public/data/herois/phantom_lancer.json

## Heart of Tarrasque (heart)
- porque: HP cru pra sobreviver no jogo longo, onde o PL já ganha a maior parte das partidas (58,8% de 35 a 50 min, 60,7% depois dos 50).
- detalhe: +40 de força e regeneração de 1% + 1,5 por vida faltante. Compra tardia (média 36,4 min no D2PT) só depois do core já estar pronto.
- fonte: app/public/data/herois/phantom_lancer.json; dota-imortal/data/opendota/items.json

## Butterfly (butterfly)
- porque: Evasão de 35% contra carries físicos de dano único que, de outra forma, abatem suas ilusões e você num só golpe.
- detalhe: +35 agilidade, +35% evasão, +20% velocidade de ataque base, +25 de dano. No 7.41e perdeu agilidade (35 -> 30) e ganhou dano (25 -> 30). A evasão também reduz o dano físico de Roshan, que ataca corpo a corpo.
- contra: Carries físicos de dano único e sem true strike (ataques normais que a evasão pode esquivar).
- fonte: app/public/data/herois/phantom_lancer.json; dota-imortal/data/opendota/items.json

## Abyssal Blade / Skull Basher (abyssal_blade / basher)
- porque: Trava no chão heróis de blink ou fuga que escapam da sua pressão de farm e das suas lutas.
- detalhe: Chance de atordoar no ataque (25% corpo a corpo, 10% à distância) com 1,2-1,6 s de stun. Não acumula com outras fontes de bash e não funciona em Spirit Breaker, Faceless Void, Slardar e Kez no modo Sai.
- contra: Heróis com blink ou dash de escape (o guia local cita essa categoria; sem nome específico confirmado).
- fonte: app/public/data/herois/phantom_lancer.json; dota-imortal/data/opendota/items.json

## Diffusal Blade / Disperser (disperser / diffusal_blade)
- porque: Queima a mana de heróis dependentes de mana ou invisíveis, mesmo sem contar com as ilusões pra isso.
- detalhe: O burn de mana NÃO é multiplicado pelas suas ilusões: os arquivos de constantes do patch zeram esse efeito pra ilusão (feedback_mana_burn_illusion_melee/ranged = 0), então o dano de mana real vem só do seu ataque. O Disperser soma resistência a slow (40%) e fase de movimento, úteis pra perseguir o alvo depois de queimar a mana dele.
- contra: Medusa, Storm Spirit, Silencer (heróis de mana ou invisíveis, citados no guia local).
- fonte: app/public/data/herois/phantom_lancer.json; dota-imortal/data/opendota/items.json

## Nullifier / Scythe of Vyse (nullifier / sheepstick)
- porque: Trava heróis que escapam por invisibilidade, ressurreição ou blink, quando o resto do seu kit (Doppelganger, Manta) não alcança.
- detalhe: Nullifier aplica silêncio + slow num projétil rápido; Sheepstick transforma o alvo por 2,8 s com movimento travado em 140. Ambos aparecem tarde (depois dos 42 min, 2-3% dos jogos de topo de MMR).
- fonte: app/public/data/herois/phantom_lancer.json; dota-imortal/data/opendota/items.json

## Black King Bar (black_king_bar)
- porque: Quase nunca (0,5% dos jogos de topo de MMR): só quando o inimigo tem 3+ silêncios/stuns de alvo único e você já tem Manta.
- detalhe: O Manta dispela silêncio, root e slow ao ativar e o Doppelganger desvia projétil, mas nenhum dos dois remove um stun ou hex que você já levou. O BKB cobre exatamente essa lacuna (60% de redução de magia por 7-9 s), mas custa um slot que quase sempre rende mais como item de dano no PL.
- fonte: app/public/data/herois/phantom_lancer.json; dota-imortal/data/opendota/items.json

## Wraith Band (wraith_band)
- porque: Abertura alternativa de lane quando você quer atributos cedo em vez da linha mais defensiva com Iron Branch.
- detalhe: +5 agilidade, +2 força, +2 inteligência, +6 velocidade de ataque, +1,75 armadura por 505 de ouro. Usado por 21% dos jogos de topo de MMR, virando aos ~2 min a partir de Circlet + Slippers.
- fonte: app/public/data/herois/phantom_lancer.json; dota-imortal/data/opendota/items.json

## Itens neutros
- porque: Ouro e poder passivos que não ocupam slot de loja, craftados conforme o tier libera.
- detalhe: Tier 1 (~9 min): Weighted Dice ou Possessed Mask. Tier 2 (~17 min): Mana Draught (ajuda a pagar o Spirit Lance) ou outro T2. Tier 3 (~27 min): Cloak of Flames (também beneficia as ilusões, por dano em área). Tier 4 (~37 min): Giant's Maul ou Prophet's Pendulum. Tier 5: Stygian Desolator. Encantamento Alert na maioria das escolhas.
- fonte: app/public/data/herois/phantom_lancer.json
