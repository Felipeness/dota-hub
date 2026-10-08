---
id: ficha-mars
titulo: "Mars"
heroi: Mars
patch: 7.41
posicoes: [3]
fontes:
- dota-tier1/data/draft.csv
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/items.json
- https://api.opendota.com/api/heroes/129/itemPopularity
- https://api.opendota.com/api/benchmarks?hero_id=129
- https://liquipedia.net/dota2/Mars
---

## Resumo
Mars é um iniciador corpo a corpo de força: trava um alvo de longe com Spear, entra na luta protegido por Bulwark e fecha o espaço de combate com Arena of Blood. Nos dados do Atlas Tier 1 (30 picks registrados no patch 7.41), ele foi jogado como pos 3 (offlane) em 30 de 30 partidas pela lane do replay, com taxa de vitória de 23% (7/30). Não há registro de uso real como pos 1, 2, 4 ou 5 nesse recorte, então esta ficha cobre só a pos 3.

## Pos 3 (offlane)
- quando pegar: quando o time quer um iniciador tanque que sobrevive sozinho na lane (Bulwark reduz 40-70% do dano físico de frente, 20-35% dos lados) e ainda consegue puxar um inimigo pra luta a até 1200 de distância com Spear; fonte: Atlas Tier 1 draft.csv (30/30 picks como pos 3 no 7.41) e constants_abilities.json (mars_bulwark, mars_spear).
- itens iniciais: boots, chainmail, bracer

### Build
#### Phase Boots (phase_boots)
- porque: dá a mobilidade pra fechar o alcance de 900-1200 do Spear e ainda soma dano no farm de lane.
- detalhe: dá +50 de movimento passivo (permanente) e +18 de dano corpo a corpo, o que já ajuda no farm de offlane. Ao ativar a Phase, soma mais +20 de movimento e deixa atravessar unidades por 3s, furando creep block pra entrar nos 500 de alcance do God's Rebuke. É a bota mais comprada por jogadores de Mars no OpenDota (67 contagens na fase early + 31 na fase mid, a maior soma entre botas).
- fonte: items.json (phase_boots); https://api.opendota.com/api/heroes/129/itemPopularity

#### Bracer (bracer)
- porque: stat stick barato que dá HP e regen pra aguentar trade de offlane sem gastar muito gold.
- detalhe: +5 de força, +50 de HP e +0.75 de regen por só 505 de gold. É o item individual mais comprado por jogadores de Mars na fase early segundo o OpenDota (109 contagens, o maior de todos os itens early do herói).
- fonte: items.json (bracer); itemPopularity

#### Soul Ring (soul_ring)
- porque: devolve mana pra spammar Spear, que custa de 100 a 130 de mana e é a principal fonte de stun do herói.
- detalhe: sacrifica vida por 170 de mana temporária por 10s, o que cobre um Spear de qualquer nível (100-130 de custo) sem precisar voltar à base. Também dá +6 de força e +2 de armadura passivos. É o segundo item mais comprado por jogadores de Mars na fase early segundo o OpenDota (76 contagens), atrás só do Bracer e na frente de Phase Boots (67).
- fonte: items.json (soul_ring); constants_abilities.json (mars_spear, custo de mana); itemPopularity

#### Blink Dagger (blink)
- porque: é o item mais comprado por Mars na fase mid (90 contagens); fecha a distância pra acertar Spear ou entrar no cone de 500 do Rebuke antes do inimigo reagir.
- detalhe: Blink Dagger teleporta até 1200 de distância e desativa por alguns segundos depois que o herói leva dano, então o uso ideal é iniciar sem ser visto, não fugir no meio da luta. Com o alcance de 900-1200 do Spear, dá pra abrir a luta de fora da visão inimiga e ainda ter espaço de sobra pro skillshot.
- combo: Blink Dagger + Spear no nível 4 (alcance 1200) deixa Mars iniciar de fora do campo de visão do inimigo e ainda com alcance de sobra pro stun.
- fonte: items.json (blink); constants_abilities.json (mars_spear, cast_range); itemPopularity

#### Black King Bar (black_king_bar)
- porque: dá a janela pra Mars ativar Bulwark ou canalizar a Arena of Blood sem ser travado por disable mágico; 55 contagens no OpenDota somando as fases mid (15) e late (40) de compra.
- detalhe: aplica dispel básico, dá 60% de resistência mágica e imunidade a efeitos negativos de feitiço por 9/8/7 segundos (cai a cada compra adicional). Como o plano de Mars depende de ficar vivo tempo suficiente pra Bulwark e Arena of Blood surtirem efeito, BKB garante essa janela mesmo contra nuke e stun mágico.
- contra: heróis com disable mágico em sequência (stuns, silences, roots) que travariam Bulwark ou Arena of Blood antes do efeito acontecer.
- fonte: items.json (black_king_bar); itemPopularity

### Situacionais
#### Eul's Scepter of Divinity (cyclone)
- porque: cyclone em si mesmo atravessa imunidade a feitiço e aplica dispel básico, limpando o que travaria a iniciação de Mars.
- detalhe: pode ser usado em si mesmo pra sair de um gancho ou silence enquanto o cooldown da Arena of Blood não voltou, ou lançado no inimigo pra isolá-lo por 2.5s antes de acertar o Spear quando ele cair no chão.
- contra: silences e disables longos que impediriam Mars de ativar Bulwark ou canalizar Arena of Blood.
- combo: Eul's no inimigo (2.5s de cyclone) seguido do Spear no momento em que ele aterrissa, garantindo o acerto do skillshot.
- fonte: items.json (cyclone)

#### Armlet of Mordiggian (armlet)
- porque: converte a vida alta de Mars em mais dano e força pra ganhar o trade de offlane cedo.
- detalhe: +35 de dano, +25 de força e +4 de armadura enquanto ativo, drenando 45 de vida por segundo; o dreno não mata o herói nem ao ativar nem ao desativar. Combina com Dauntless, que já aumenta a regen de Mars quando ele está em desvantagem numérica, ajudando a repor a vida fora de combate.
- contra: duo lane inimigo que exige mais dano de trade cedo do offlane pra não perder espaço.
- fonte: items.json (armlet); constants_abilities.json (mars_dauntless)

#### Desolator (desolator)
- porque: a redução de -6 de armadura por 7s a cada acerto fura quem empilha armadura ou bloqueio físico contra Mars.
- detalhe: soma +55 de dano à redução de armadura, o que torna o combo de auto-ataque seguido de God's Rebuke (um crítico de 150-300% do ataque) bem mais forte contra alvos tanque.
- contra: heróis e builds que dependem de armadura alta (Stalwart, Shiva's Guard, Vanguard, Crimson Guard) pra se proteger do físico de Mars.
- combo: Desolator reduz a armadura do alvo antes do crítico de God's Rebuke, aumentando o dano do nuke físico do golpe.
- fonte: items.json (desolator); constants_abilities.json (mars_gods_rebuke, crit_mult)

#### Heaven's Halberd (heavens_halberd)
- porque: o disarm de 3.5s neutraliza o right-click de um carry inimigo que dependeria de dano físico pra vencer a luta.
- detalhe: além do disarm ativo, dá 25% de evasão e 9 de armadura, ajudando Mars a aguentar o resto da luta depois de neutralizar o alvo principal.
- contra: carries de ataque básico sem fonte relevante de dano mágico, que dependem só do right-click pra vencer a troca.
- fonte: items.json (heavens_halberd)

#### Abyssal Blade (abyssal_blade)
- porque: o stun de Overwhelm atravessa imunidade a debuff, resolvendo contra quem usa Black King Bar pra escapar da Arena of Blood.
- detalhe: construído a partir de Skull Basher (25% de chance de bash em ataque corpo a corpo), o Abyssal Blade soma um stun ativo de 1.6s que ignora debuff immunity, travando um alvo que ativou BKB tentando fugir do cerco da Arena of Blood ou do knockback do God's Rebuke.
- contra: heróis com Black King Bar ativo ou outra fonte de debuff immunity tentando escapar da Arena of Blood.
- combo: Overwhelm (atravessa debuff immunity) junto da Arena of Blood, pra travar um alvo que entrou em BKB tentando fugir do cerco.
- fonte: items.json (abyssal_blade, basher)

#### Refresher Orb (refresher)
- porque: reseta o cooldown da Arena of Blood, dando um segundo cerco na mesma luta ou contra o Roshan.
- detalhe: Refresher Orb zera o cooldown de todas as habilidades de Mars; numa luta longa isso vira uma segunda Arena of Blood (5.5s de cerco, 80-240 de dano de lança por acerto) sem esperar os 90-100s normais de recarga.
- combo: Arena of Blood, depois Refresher Orb, depois uma segunda Arena of Blood na mesma luta, dobrando o tempo de cerco e o dano de lanças.
- fonte: items.json (refresher); constants_abilities.json (mars_arena_of_blood, cooldown e duration)

## Roshan
Sem dado de Roshan solo.
