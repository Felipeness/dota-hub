---
id: confrontos-largo
heroi: Largo
patch: 7.41
fontes:
- dota-hub-conteudo-novo/pro_dados/largo.json
- dota-hub-conteudo-novo/pro_dados/nevermore.json
- dota-hub-conteudo-novo/pro_dados/tiny.json
- dota-hub-conteudo-novo/pro_dados/hoodwink.json
- dota-hub-conteudo-novo/pro_dados/jakiro.json
- dota-hub-conteudo-novo/pro_dados/tusk.json
- dota-hub-conteudo-novo/pro_dados/rubick.json
- dota-hub-conteudo-novo/pro_dados/mars.json
- dota-hub-conteudo-novo/pro_dados/beastmaster.json
- dota-hub-conteudo-novo/pro_dados/centaur.json
- dota-hub-conteudo-novo/pro_dados/abyssal_underlord.json
- dota-hub-conteudo-novo/pro_dados/sand_king.json
- dota-hub-conteudo-novo/pro_dados/silencer.json
- dota-hub-conteudo-novo/pro_dados/queenofpain.json
- dota-hub-conteudo-novo/pro_dados/venomancer.json
- dota-hub-conteudo-novo/pro_dados/huskar.json
- dota-hub-conteudo-novo/pro_dados/enigma.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/items.json
- OpenDota API (explorer SQL sobre player_matches/matches, e /heroes/{id}/matchups), partidas de liga patches 7.40 e 7.41
---

## Contra Shadow Fiend (nevermore)
- placar: Largo venceu 101 de 202 partidas de pro (50,0%). Fonte: pro_dados/largo.json (confrontos).
- por que importa: é o oponente com mais jogos contra Largo no banco de pro (202), mesmo os dois quase nunca dividindo lane (Shadow Fiend é pos 1 mid/safelane, Largo é pos 3 offlane): como os dois carries de dano do time, o duelo decide rotação, gank e troca de recursos o jogo inteiro, não a lane.
- janelas: Shadow Fiend farma muito mais rápido que Largo nesse recorte (lh10 78 contra 37, gpm 658 contra 462, fonte pro_dados resumo dos dois). Falcon Blade (mediana 6,2min, pro_dados/nevermore.json) já sustenta o combo de Raze antes do soul_ring de Largo (8,5min). Mask of Madness (mediana 10,2min, pro_dados/nevermore.json) libera o farm dele contra o chainmail (6,9min) e o soul_ring de Largo; Dragon Lance (mediana 14,0min, pro_dados/nevermore.json) chega no meio-jogo, e Manta Style (mediana 18,5min, partidas pro 7.40-7.41, OpenDota) chega quase junto do Kaya de Largo (19,2min). Hurricane Pike (mediana 23,0min, pro_dados/nevermore.json) dá a Shadow Fiend a fuga que ele não tem de kit, a janela mais arriscada pra Largo tentar puxar ele sem suporte. Depois dos 25min Shadow Fiend já fecha o Black King Bar (25,2min, pro_dados/nevermore.json); o de Largo demora bem mais (30,4min, partidas pro 7.40-7.41, OpenDota): Shadow Fiend chega lá primeiro, com boa margem.
- o que ele faz com você: Shadowraze é instantâneo (cast point 0,55s, sem projétil pra desviar) e empilha um amplificador de dano a cada raze que acerta a mesma unidade, mas o alcance é curto (200); Requiem of Souls fecha com medo e redução de resistência mágica em área e dispara sozinho mesmo se ele morrer primeiro (constants_abilities.json: nevermore_shadowraze1, nevermore_requiem).
- o que você faz com ele: Frogstomp (800 de alcance, raio 350) acerta Shadow Fiend antes dele entrar nos 200 de alcance do Raze, e o slow de até 30% atrapalha o reposicionamento dele entre um raze e outro; Catchy Lick (700 de alcance) pode puxar um aliado pra fora do alcance do Raze antes do combo fechar, ou puxar o próprio Shadow Fiend pra dentro da zona do Frogstomp.
- itens que viram: Linken's Sphere ou Lotus Orb nele bloqueiam ou refletem o Catchy Lick, que é alvo único (constants_abilities.json: largo_catchy_lick, behavior Unit Target); Black King Bar dos dois anula Frogstomp, Catchy Lick e Requiem ao mesmo tempo, então quem fecha o BKB primeiro (Shadow Fiend costuma chegar antes) ganha a janela de luta livre de disable.
- como jogar: não tente puxar Shadow Fiend de dentro do alcance de Raze sem antes fechar a distância com Frogstomp; puxe-o com Catchy Lick só depois do stomp já estar no chão, pra ele chegar lento e sem o Hurricane Pike pronto.
- fonte: pro_dados/largo.json; pro_dados/nevermore.json; partidas pro 7.40-7.41 (OpenDota: Manta Style de Shadow Fiend, Black King Bar de Largo); constants_abilities.json (nevermore_shadowraze1, nevermore_requiem, largo_catchy_lick, largo_frogstomp).

## Contra Tiny (tiny)
- placar: Largo venceu 106 de 180 (58,9%). Fonte: pro_dados/largo.json.
- por que importa: 2º oponente com mais jogos (180) e o exemplo mais direto de dois carries que raramente compartilham lane (Tiny é pos 1, Largo pos 3): o combo de iniciação de um decide se o outro sequer chega a lutar.
- janelas: Tiny sai na frente em todo indicador de farm desse recorte (lh10 44 contra 37, xpm 685 contra 631, gpm 514 contra 462 de Largo), mas o jogo dele ainda gira em torno do combo Avalanche+Toss, não só do farm. Power Treads (mediana 6,1min, pro_dados/tiny.json) ligam a troca de atributo antes do Phase Boots de Largo (7,1min). Echo Sabre (mediana 12,1min, pro_dados/tiny.json) dobra Avalanche+Toss logo depois do soul_ring de Largo (8,5min) fechar. Depois dos 20min Tiny fecha Silver Edge (mediana 24,0min, partidas pro 7.40-7.41, OpenDota) e Black King Bar (mediana 26,7min, pro_dados/tiny.json) quase junto com o Aghanim's Shard de Largo (26,4min): é a janela em que as duas iniciações ficam mais perigosas ao mesmo tempo.
- o que ele faz com você: Avalanche (600 de alcance, raio 325 a 370) trava o chão por tiques de 0,3s, e Toss (800 a 1100 de alcance) joga um alvo de volta pro meio da Avalanche, multiplicando o dano por unidade atingida (constants_abilities.json: tiny_avalanche, tiny_toss).
- o que você faz com ele: Catchy Lick (700 de alcance, pull de até 375 em aliado) tira um companheiro pego na Avalanche pra fora da área antes do Toss fechar o combo, ou puxa o próprio Tiny pra dentro do raio 350 do Frogstomp, somando o slow dele em cima do próprio combo.
- itens que viram: Black King Bar nos dois lados decide quem executa o combo primeiro; como o de Tiny (26,7min, pro_dados/tiny.json) chega antes do de Largo (30,4min, partidas pro 7.40-7.41, OpenDota), se Largo não tiver BKB o Avalanche+Toss passa por cima do Frogstomp sem resposta.
- como jogar: não espere o Catchy Lick salvar um aliado já preso na Avalanche, o pull não remove o tique que já caiu; puxe assim que a Avalanche bater no chão, antes do Toss.
- fonte: pro_dados/largo.json; pro_dados/tiny.json; partidas pro 7.40-7.41 (OpenDota: Silver Edge de Tiny, Black King Bar de Largo); constants_abilities.json (tiny_avalanche, tiny_toss).

## Contra Hoodwink (hoodwink)
- placar: Largo venceu 106 de 178 (59,6%). Fonte: pro_dados/largo.json.
- por que importa: 3º oponente com mais jogos (178), suporte que joga quase sempre no offlane nos pros (80,8% das partidas, partidas pro 7.40-7.41, OpenDota, lane_role) e quem mais rotaciona pra cima no early game.
- janelas: Hoodwink tem o nível de farm mais baixo do grupo (lh10 8, gpm 343, sinal de suporte puro). Arcane Boots (12,2min) e os wards (19,4 a 19,5min) dela chegam antes de qualquer item de luta; Aghanim's Shard dela (23,8min) libera um Sharpshooter mais barato de alcance 3000 pouco antes do próprio Shard de Largo (26,4min), janela em que os dois ganham uma ferramenta de longo alcance quase ao mesmo tempo.
- o que ele faz com você: Bushwhack (1100 de alcance, point target perto de árvore) prende e causa dano em quem fica preso na raiz; Sharpshooter é um tiro de longuíssimo alcance (3000) com canalização visível antes de acertar, então dá pra reagir se Largo não estiver parado.
- o que você faz com ele: Frogstomp (800) e Catchy Lick (700) alcançam mais que o raio de árvores que ela precisa pra acionar o Bushwhack de perto, então Largo fecha a distância antes dela conseguir mirar; Croak of Genius barateia o mana do combo pra sustentar a troca de poke contra o harass dela.
- itens que viram: Soul Ring (8,5min) resolve o problema de mana de Largo que o harass dela tenta explorar.
- como jogar: evite lutar perto de árvore isolada contra ela; force a troca em espaço aberto, onde o alcance maior do Frogstomp/Catchy Lick pesa mais que o Bushwhack dela.
- fonte: pro_dados/largo.json; pro_dados/hoodwink.json; partidas pro 7.40-7.41 (OpenDota, lane_role); constants_abilities.json (hoodwink_bushwhack, hoodwink_sharpshooter, largo_frogstomp, largo_croak_of_genius).

## Contra Jakiro (jakiro)
- placar: Largo venceu 93 de 167 (55,7%). Fonte: pro_dados/largo.json.
- por que importa: 4º oponente com mais jogos (167), suporte de zona que domina exatamente o espaço que Largo precisa ocupar pra puxar e atordoar.
- janelas: Jakiro fica parado trocando Dual Breath e guardando mana pro combo; Arcane Boots dele saem aos 11,7min (fonte pro_dados/jakiro.json). O combo central do Jakiro (Ice Path travando a área, Macropyre aplicando dano por cima) fica disponível a partir do nível 6, bem antes de qualquer item de luta, então a janela perigosa pra Largo começa cedo, não depois de algum item específico. Depois dos 20min Jakiro ganha Glimmer Cape e Force Staff pra escapar antes do Catchy Lick conectar.
- o que ele faz com você: Ice Path (1100 de alcance) estuna até 2s quem entra na área, e Macropyre cobre uma linha larga com 100 a 200 de dano por segundo por 10s; segundo constants_abilities.json, Ice Path só sai com dispel forte e Macropyre não é dispelável de forma alguma, então o Catchy Lick (dispel básico) não remove nenhum dos dois.
- o que você faz com ele: Frogstomp (800 de alcance) chega antes de Jakiro decidir trocar Dual Breath de perto; pouca vida e sem disable de escape fora do slow do próprio Ice Path, então se Largo fecha a distância rápido, a troca de corpo a corpo pesa a favor dele.
- itens que viram: Glimmer Cape e Force Staff do Jakiro (fonte pro_dados/jakiro.json) são o que decide se ele escapa do raio de 700 do Catchy Lick depois dos 20min.
- como jogar: não entre na área de Ice Path achando que o Catchy Lick salva depois, o dispel básico não remove o stun; feche a distância antes do nível 6 dele, quando ele ainda não tem o combo Ice Path + Macropyre pronto.
- fonte: pro_dados/largo.json; pro_dados/jakiro.json; constants_abilities.json (jakiro_ice_path, jakiro_macropyre, jakiro_dual_breath).

## Contra Tusk (tusk)
- placar: Largo venceu 84 de 162 (51,9%). Fonte: pro_dados/largo.json.
- por que importa: 5º oponente com mais jogos (162), suporte que cumpre um papel parecido ao de Largo (puxar um aliado pra dentro da luta), só que em direções opostas.
- janelas: Tusk se divide entre offlane e safelane nos pros (49,1% e 43,8%, partidas pro 7.40-7.41, OpenDota, lane_role) e sai cedo pra roamar, plantando wards já no early game. Blink dele (19,0min, pro_dados/tusk.json) chega bem antes do Kaya and Sange de Largo (24,1min); até lá, sem Blink, o combo de Tusk depende de pegar alguém desprevenido com Snowball (1150 de alcance) ou Ice Shards (1400 de alcance) de perto.
- o que ele faz com você: Ice Shards cria uma parede que corta rota de fuga; Snowball (unit target, 1150 de alcance) agarra um alvo e rola junto, estunando 0,6 a 1,2s no impacto; Walrus Punch é um crítico que lança o alvo no ar, mas exige alcance corpo a corpo (150) pra acertar (constants_abilities.json: tusk_snowball, tusk_walrus_punch).
- o que você faz com ele: Catchy Lick (700 de alcance) tira um aliado da rota do Snowball antes dele rolar até lá, já que Snowball precisa atravessar o mapa em linha; Frogstomp trava Tusk no próprio raio se ele tentar fechar pra usar o Walrus Punch corpo a corpo.
- itens que viram: nenhum item específico muda o duelo, é timing: antes do Blink dele (19,0min) Tusk depende só do alcance base das habilidades pra iniciar, janela em que Largo com Chainmail e Soul Ring prontos (6,9min e 8,5min) aguenta a troca melhor.
- como jogar: fique de olho na rota do Snowball quando Tusk estiver fora de visão, puxe o aliado ameaçado assim que ver a bola vindo; depois do Blink dele, respeite mais o combo porque ele passa a iniciar de qualquer ângulo.
- fonte: pro_dados/largo.json; pro_dados/tusk.json; partidas pro 7.40-7.41 (OpenDota, lane_role); constants_abilities.json (tusk_snowball, tusk_walrus_punch, tusk_ice_shards, largo_catchy_lick).

## Contra Rubick (rubick)
- placar: Largo venceu 77 de 157 (49,0%). Fonte: pro_dados/largo.json.
- por que importa: 6º oponente com mais jogos (157), suporte quase onipresente nas composições atuais e a única ameaça do grupo que pode simplesmente copiar uma habilidade de Largo.
- janelas: Rubick é majoritariamente offlane nos pros (69,7% das partidas, partidas pro 7.40-7.41, OpenDota, lane_role). Arcane Boots dele (10,3min, pro_dados/rubick.json) chega antes do soul_ring de Largo (8,5min) só se a troca de lane for rápida; Blink dele (21,6min, pro_dados/rubick.json) chega perto do Kaya and Sange de Largo (24,1min) e do Aghanim's Shard (26,4min), que é quando as iniciações dos dois começam a se cruzar mais.
- o que ele faz com você: Telekinesis (550 a 625 de alcance, unit target) joga um alvo pro ar e estuna 0,9 a 1,5s ao cair; Spell Steal copia o último feitiço lançado por qualquer herói inimigo visível em até 1000 de distância, incluindo Frogstomp ou Croak of Genius se ele ver Largo usar primeiro (constants_abilities.json).
- o que você faz com ele: Frogstomp (800 de alcance) chega antes do Telekinesis (625 no máximo) em alcance; Catchy Lick pode puxar um aliado agarrado pelo ar do Telekinesis pra fora do pouso antes de cair perto do time de Rubick.
- itens que viram: Linken's Sphere ou Lotus Orb no Rubick bloqueiam ou refletem o Catchy Lick, já que é alvo único; do lado dele, Aether Lens (fonte pro_dados/rubick.json) estica o alcance de Telekinesis e Spell Steal.
- como jogar: evite usar Frogstomp ou Catchy Lick à toa perto dele cedo na luta, pra não dar o feitiço de graça pro Spell Steal; gaste a sua melhor habilidade só depois que ele já usou a dele ou morreu.
- fonte: pro_dados/largo.json; pro_dados/rubick.json; partidas pro 7.40-7.41 (OpenDota, lane_role); constants_abilities.json (rubick_telekinesis, rubick_spell_steal, largo_catchy_lick, largo_frogstomp).

## Contra Mars (mars)
- placar: Largo venceu 70 de 132 (53,0%). Fonte: pro_dados/largo.json.
- por que importa: mesma posição principal, os dois jogam quase sempre offlane nos pros (Mars 96,3%, Largo 76,7%, partidas pro 7.40-7.41, OpenDota, lane_role), o confronto offlane contra offlane mais jogado contra Largo em pro (132 jogos): os dois disputam a mesma lane e o mesmo espaço de iniciação.
- janelas: os dois sobem itens de sobrevivência quase no mesmo ritmo: Mars tem Chainmail (7,5min) pouco depois do de Largo (6,9min), e os dois fecham Soul Ring/Phase Boots perto dos 7 a 8min (Mars 7,9min e 8,5min; Largo 8,5min e 7,1min). Blink de Mars (15,2min, pro_dados/mars.json) chega bem antes do Kaya and Sange de Largo (24,1min), janela em que ele consegue iniciar a Arena of Blood sem Largo ter o amp de dano do Kaya pronto. Aghanim's Shard do Mars (21,5min) chega bem antes do de Largo (26,4min).
- o que ele faz com você: Arena of Blood cria uma arena de raio 550 por alguns segundos com lanceiros na borda que bloqueiam passagem e empurram de volta pro centro quem tenta sair perto da parede; Spear of Mars (dano 100 a 325, stun 1,3 a 2,2s) empala quem acerta tree, construção ou penhasco, mas segundo constants_abilities.json só sai com dispel forte, o Catchy Lick (dispel básico) não remove.
- o que você faz com ele: Frogstomp (800 de alcance) acerta Mars antes dele fechar o Spear; Catchy Lick pode puxar um aliado pra fora da Arena of Blood antes da parede fechar de vez, já que o cast dela tem um tempo de formação.
- itens que viram: Black King Bar dos dois decide quem segura o combo do outro em luta de grupo (Mars 26,5min, pro_dados/mars.json; Largo 30,4min, partidas pro 7.40-7.41, OpenDota); nenhum item isolado resolve o Spear, é questão de distância e de quem inicia primeiro.
- como jogar: não force a troca dentro do raio da Arena of Blood sem alcançar Mars imediatamente; puxe o aliado ameaçado pra fora da arena assim que ela aparecer, antes da borda fechar.
- fonte: pro_dados/largo.json; pro_dados/mars.json; partidas pro 7.40-7.41 (OpenDota: lane_role, Black King Bar de Largo); constants_abilities.json (mars_spear, mars_arena_of_blood).

## Contra Beastmaster (beastmaster)
- placar: Largo venceu 59 de 129 (45,7%), abaixo da média dele no grupo de mais jogos. Fonte: pro_dados/largo.json.
- por que importa: 2º offlane mais jogado contra Largo (129 jogos) e o único do top 6 por volume em que ele perde mais do que ganha, sinal de que o pacote de Beastmaster (axes, stun de longo alcance, aura de velocidade de ataque) é um problema real.
- janelas: Wild Axes (1500 de alcance, constants_abilities.json) ameaça a lane de Largo antes mesmo de qualquer item, já que é só nível 1; Blink de Beastmaster (18,6min, pro_dados/beastmaster.json) chega bem antes do Kaya and Sange de Largo (24,1min) e do Aghanim's Shard (26,4min). Aghanim's Scepter dele (14,6min) é surpreendentemente cedo e dá um upgrade de Primal Roar que amplia a ameaça de iniciação antes do próprio Scepter de Largo (18,4min).
- o que ele faz com você: Primal Roar (600 de alcance, dano 150 a 300) estuna e empurra o caminho; segundo constants_abilities.json só sai com dispel forte, o Catchy Lick não remove. Inner Beast dá velocidade de ataque em área (raio 1200) pra ele e pro time inteiro, acelerando o combo de dano físico contra o chainmail de Largo.
- o que você faz com ele: Frogstomp (800 de alcance) chega antes dos 600 do Primal Roar; Croak of Genius num aliado de dano físico explora a baixa resistência mágica que o build de Beastmaster normalmente carrega cedo.
- itens que viram: Black King Bar de Beastmaster (23,6min, pro_dados/beastmaster.json) chega antes do de Largo (30,4min); até lá, puxar ele com Catchy Lick pra dentro do Frogstomp é mais seguro do que depois, quando ele pode segurar a troca com imunidade mágica.
- como jogar: respeite o alcance de 1500 do Wild Axes na lane, não fique parado recebendo poke de graça; force a troca antes do Blink e do Scepter dele (14 a 18min), quando ele ainda não tem o combo de iniciação completo.
- fonte: pro_dados/largo.json; pro_dados/beastmaster.json; constants_abilities.json (beastmaster_primal_roar, beastmaster_wild_axes, beastmaster_inner_beast).

## Contra Centaur Warrunner (centaur)
- placar: Largo venceu 64 de 128 (50,0%). Fonte: pro_dados/largo.json.
- por que importa: 3º offlane mais jogado (128 jogos), outro tanque de Força disputando o mesmo espaço de iniciação que Largo.
- janelas: Centaur sobe sustain cedo com Helm of Iron Will (4,8min) e Ring of Health (12,8min, pro_dados/centaur.json), chegando tanque antes do chainmail de Largo (6,9min) resolver sozinho; Blink dele (19,6min) chega bem antes do Kaya and Sange de Largo (24,1min). Depois dos 18 a 21min ele soma Pipe e Crimson Guard, itens de time que neutralizam boa parte do dano em área que Largo tenta aplicar com Frogstomp.
- o que ele faz com você: Hoof Stomp (raio 325, stun 1,6 a 2,2s) tem 0,5s de windup antes de atordoar, dá pra reagir se Largo não estiver parado; mas segundo constants_abilities.json só sai com dispel forte, o Catchy Lick não remove; Stampede atropela o mapa inteiro com dano baseado na Força dele, ignorando a necessidade de Blink pra iniciar de longe.
- o que você faz com ele: Frogstomp (800 de alcance) acerta Centaur antes dele fechar os 325 do Hoof Stomp; Catchy Lick pode puxar um aliado pego no caminho do Stampede pra fora da rota antes do atropelo chegar.
- itens que viram: Pipe e Crimson Guard dele (18,1min e 21,5min, pro_dados/centaur.json) neutralizam boa parte do dano em área de Largo em luta de grupo depois dos 18 a 21min; force a troca antes disso.
- como jogar: não brigue de corpo a corpo puro contra Centaur depois que ele tiver Pipe/Crimson Guard; prefira lutas isoladas, fora do alcance de Stampede, nessa fase do jogo.
- fonte: pro_dados/largo.json; pro_dados/centaur.json; constants_abilities.json (centaur_hoof_stomp, centaur_stampede).

## Contra Underlord (abyssal_underlord)
- placar: Largo venceu 70 de 117 (59,8%), a melhor taxa dele contra outro offlane de alto volume. Fonte: pro_dados/largo.json.
- por que importa: 4º offlane mais jogado (117 jogos) e o melhor resultado de Largo nesse grupo, bom contraste de dois offlanes de zona que, mesmo parecidos no papel, resolvem o combate de formas diferentes.
- janelas: os dois sobem Soul Ring quase junto (Underlord 7,2min contra 8,5min de Largo) e Chainmail/Ring of Protection também perto (6,5min). Aghanim's Shard do Underlord (21,8min) chega antes do de Largo (26,4min); o Scepter dele (23,9min) chega depois do de Largo (18,4min), mas quando sai dá Dark Rift (teleporte de time) pra reposicionar o grupo inteiro.
- o que ele faz com você: Pit of Malice (675 de alcance, raio 400) prende e causa dano a cada 3,6s pra quem fica dentro; Firestorm (675 de alcance, raio 425) chove dano contínuo numa área, bom pra zonear onde Largo quer ficar.
- o que você faz com ele: Frogstomp cobre uma área parecida (raio 350 contra os 400 do Pit of Malice) e o alcance de 800 supera o 675 do Underlord; Catchy Lick tira um aliado preso no Pit de Malice antes do próximo tique de dano (a cada 3,6s, dá tempo de reagir).
- itens que viram: Black King Bar de ambos decide a troca de controle de área; como nenhum dos dois tem fuga própria de verdade, quem tiver Black King Bar primeiro consegue brigar sem medo do outro kit de zona.
- como jogar: não fique parado dentro do Pit of Malice esperando o Catchy Lick limpar, puxe o aliado antes do próximo tique; use o alcance maior do Frogstomp pra vencer a troca de área antes dele alcançar com Firestorm.
- fonte: pro_dados/largo.json; pro_dados/abyssal_underlord.json; constants_abilities.json (abyssal_underlord_pit_of_malice, abyssal_underlord_firestorm, abyssal_underlord_dark_rift).

## Contra Sand King (sand_king)
- placar: Largo venceu 28 de 36 (77,8%), a melhor vantagem registrada dele em pro, amostra na faixa mínima do recorte (30 ou mais jogos). Fonte: pro_dados/largo.json.
- por que importa: maior taxa de vitória de Largo contra qualquer oponente com amostra confiável; Sand King tem vida baixa pra um iniciador e depende de canalizar Epicenter parado, exatamente o tipo de alvo que o dano em área de Largo pune.
- janelas: Sand King é majoritariamente mid nos pros nesse recorte (64,7% das partidas, 484 de 748, partidas pro 7.40-7.41, OpenDota, lane_role), então chega na fase de grupo com Blink cedo (11,7min, pro_dados/sand_king.json) mas sem a sobrevivência de um offlane. Aghanim's Scepter dele (20,5min) chega depois do de Largo (18,4min) e melhora o Epicenter, mas o canal de 2s continua exigindo que ele fique parado.
- o que ele faz com você: Burrowstrike (550 a 775 de alcance) estuna, mas segundo constants_abilities.json só sai com dispel forte; Epicenter tem cast point de 2s parado, com pulsos que crescem em raio e dano por segundo.
- o que você faz com ele: Frogstomp (800 de alcance) supera o alcance máximo do Burrowstrike (775) e pode interromper o setup antes dele; Catchy Lick puxa Sand King pra fora de posição assim que ele começar a canalizar Epicenter, cortando o combo pela raiz (interromper o canal vale mais do que tentar dispelar o stun, que o Catchy Lick não remove).
- itens que viram: Black King Bar de Largo (30,4min) chega bem depois do de Sand King (27,9min, pro_dados/sand_king.json), então a vantagem desse confronto é mais sobre vida baixa dele do que sobre item específico.
- como jogar: ataque Sand King assim que ele começar a canalizar Epicenter, antes do 2º segundo; ele não aguenta troca direta de dano com a vida alta de Largo se o combo falhar.
- fonte: pro_dados/largo.json; pro_dados/sand_king.json; partidas pro 7.40-7.41 (OpenDota, lane_role); constants_abilities.json (sandking_burrowstrike, sandking_epicenter).

## Contra Silencer (silencer)
- placar: Largo venceu 37 de 53 (69,8%), 2ª melhor vantagem de Largo em pro. Fonte: pro_dados/largo.json.
- por que importa: suporte sem fuga própria (fora Force Staff comprado) contra a vida alta e o alcance de Largo; mostra como um suporte de controle fica vulnerável quando perde a distância.
- janelas: Silencer é majoritariamente safelane nos pros (63,3%, partidas pro 7.40-7.41, OpenDota, lane_role), suporte que costuma acompanhar o carry; Arcane Boots dele (11,9min) e Force Staff (22,3min, pro_dados/silencer.json) chegam depois do soul_ring de Largo (8,5min). Global Silence (ultimate, disponível a partir do nível 6) corta a comunicação do time antes de qualquer item, então a janela de risco pra Largo é cedo, não depois de um item específico.
- o que ele faz com você: Global Silence impede qualquer herói no mapa de conjurar por 4,5 a 6s (duração cresce com o nível); Last Word (900 de alcance) silencia e causa dano de alvo único logo depois de qualquer feitiço que o alvo lance.
- o que você faz com ele: Frogstomp (800 de alcance) chega antes do Last Word (900 só se ele já estiver perto); a vida alta de Largo aguenta o DPS fraco de Silencer, que depende de Glaives of Wisdom (rouba Inteligência no ataque) pra ter dano relevante, difícil de empilhar contra um Força.
- itens que viram: Force Staff dele (22,3min) é o único jeito de escapar do alcance curto de Largo; sem ele, Silencer não tem fuga própria nenhuma.
- como jogar: feche a troca assim que ver Silencer sem Force Staff pronto; depois do Global Silence, ainda dá pra puxar e bater, só não pra conjurar, então continue o combo físico.
- fonte: pro_dados/largo.json; pro_dados/silencer.json; partidas pro 7.40-7.41 (OpenDota, lane_role); constants_abilities.json (silencer_global_silence, silencer_last_word, silencer_glaives_of_wisdom).

## Contra Queen of Pain (queenofpain)
- placar: Largo venceu 63 de 92 (68,5%), 3ª melhor vantagem e a maior amostra do grupo de vantagem (92 jogos). Fonte: pro_dados/largo.json.
- por que importa: nuker de mid com pouca vida que raramente sobrevive perto do alcance e da vida alta de Largo quando o combo de burst dela falha.
- janelas: Queen of Pain é a escolha padrão de mid nuker do patch (88,4% das partidas dela são mid, partidas pro 7.40-7.41, OpenDota, lane_role); ela sobe Power Treads (8,3min) e Kaya (13,9min, pro_dados/queenofpain.json) bem antes do Kaya de Largo (19,2min). Blink dela (alcance 1075 a 1300) está disponível desde o nível 1, então o risco de pick-off existe o jogo inteiro, mas ela só fecha Kaya and Sange (20,8min) perto do Kaya and Sange de Largo (24,1min), quando os dois ganham resistência a lentidão quase junto.
- o que ele faz com você: Sonic Wave (700 de alcance, dano 325 a 625) é um nuke em linha que empurra pra trás, sem stun; Shadow Strike (450 a 600 de alcance) aplica dano ao longo do tempo e lentidão de alvo único.
- o que você faz com ele: a vida alta de Largo absorve o burst do Sonic Wave melhor que qualquer suporte fino; o Blink dela (1075 a 1300 de alcance) já sai maior que o Frogstomp (800) desde o nível 1, então a janela de Largo é pegar ela com o Blink em recarga, não tentar superar o alcance dele.
- itens que viram: nenhum item isolado resolve pra ela, o problema é a vida baixa de Queen of Pain contra o kit de Largo; do lado dele, Soul Ring (8,5min) sustenta o mana pra responder o poke de Shadow Strike sem voltar à base.
- como jogar: puxe ela pra perto do time com Catchy Lick assim que ela errar o Blink de fuga; não precisa gastar o combo inteiro, a vida baixa dela cede rápido.
- fonte: pro_dados/largo.json; pro_dados/queenofpain.json; partidas pro 7.40-7.41 (OpenDota, lane_role); constants_abilities.json (queenofpain_sonic_wave, queenofpain_shadow_strike, queenofpain_blink).

## Contra Venomancer (venomancer)
- placar: Largo venceu 13 de 33 (39,4%), a pior desvantagem registrada dele em pro, amostra na faixa mínima do recorte (30 ou mais jogos). Fonte: pro_dados/largo.json.
- por que importa: dano contínuo em área que corrói justamente o que Largo não tem resposta fácil (veneno não é um stun pra evitar de longe, é uma troca de atrito que ele perde se ficar perto demais por muito tempo).
- janelas: Venomancer joga majoritariamente safelane nos pros (67,4% das partidas, partidas pro 7.40-7.41, OpenDota, lane_role), suporte que chega barato e cedo: Plague Wards (desde o nível 1) já pressionam a lane antes do chainmail de Largo (6,9min) resolver; Arcane Boots dele (11,8min, pro_dados/venomancer.json) vem depois, sustentando o harass. Noxious Plague (ultimate) fica disponível a partir do nível 6, bem antes de qualquer item de luta, então a ameaça real desse confronto é de kit, não de timing de item.
- o que ele faz com você: Venomous Gale (800 de alcance, raio 125) aplica lentidão e dano ao longo do tempo numa linha; Poison Sting (passivo, dano 9 por tique) se acumula em cada ataque recebido; Noxious Plague (900 de alcance) aplica dano baseado em vida máxima, pior justamente contra a vida alta de Largo.
- o que você faz com ele: Frogstomp (800 de alcance) empata o alcance do Venomous Gale e pode punir Venomancer antes dele aplicar o combo completo; a vida alta ajuda contra dano fixo, mas Noxious Plague escala com vida máxima, então não resolve sozinha.
- itens que viram: nenhum item específico de Largo neutraliza o dano baseado em vida máxima do Noxious Plague; do lado dele, Urn of Shadows e Spirit Vessel (fonte pro_dados/venomancer.json) cortam a cura que Largo tenta usar pra sustentar a troca.
- como jogar: não troque dano continuamente contra Venomancer perto de Plague Wards, saia da área assim que o Venomous Gale acertar; priorize matar ele rápido em vez de brigar de atrito.
- fonte: pro_dados/largo.json; pro_dados/venomancer.json; partidas pro 7.40-7.41 (OpenDota, lane_role); constants_abilities.json (venomancer_venomous_gale, venomancer_poison_sting, venomancer_noxious_plague).

## Contra Huskar (huskar)
- placar: Largo venceu 17 de 42 (40,5%), 2ª pior desvantagem registrada de Largo. Fonte: pro_dados/largo.json.
- por que importa: o %hp de Life Break ignora boa parte da vida alta que é a principal vantagem de Largo, e Berserker's Blood vira o Huskar mais perigoso justamente quando está com pouca vida.
- janelas: Huskar joga sobretudo mid nos pros nesse recorte (74,6% das partidas, 576 de 772, partidas pro 7.40-7.41, OpenDota, lane_role); Armlet dele (mediana 9,1min, pro_dados/huskar.json) ativa o ciclo de dano baseado em vida baixa logo depois do soul_ring de Largo (8,5min) fechar. Black King Bar de Huskar (23,2min, pro_dados/huskar.json) chega antes do de Largo (30,4min), e é a janela em que ele consegue fechar o Life Break sem medo de ser travado de volta.
- o que ele faz com você: Life Break (550 de alcance) drena uma % da vida atual do próprio Huskar pra causar dano e lentidão no alvo, com Huskar imune a debuff e com 60% de resistência mágica durante o salto; Berserker's Blood dá velocidade de ataque, resistência mágica e regeneração que crescem quanto menor a vida dele, então ferido ele fica mais perigoso, não mais fraco.
- o que você faz com ele: Frogstomp (800 de alcance) chega antes do Life Break (550); Catchy Lick pode puxar um aliado alvo do Life Break pra fora do alcance antes do salto, já que o cast ainda precisa conectar.
- itens que viram: Armlet dele é o item que liga o ciclo de dano em troca de vida; do lado de Largo, nenhum item sozinho resolve o %hp do Life Break, é questão de matar Huskar rápido ou evitar o 1x1 quando ele já estiver com pouca vida (mais perigoso, não mais fraco).
- como jogar: não brigue de corpo a corpo contra um Huskar ferido achando que ele está fraco, Berserker's Blood inverte essa lógica; foque ele fora do alcance do Life Break ou espere o cooldown dele passar.
- fonte: pro_dados/largo.json; pro_dados/huskar.json; partidas pro 7.40-7.41 (OpenDota, lane_role); constants_abilities.json (huskar_life_break, huskar_berserkers_blood).

## Contra Enigma (enigma)
- placar: Largo venceu 13 de 31 (41,9%), 3ª pior desvantagem, amostra na faixa mínima do recorte (30 ou mais jogos). Fonte: pro_dados/largo.json.
- por que importa: outro offlane de controle de área (87,7% das partidas pro são offlane, 365 de 416, partidas pro 7.40-7.41, OpenDota, lane_role), mas quem trava o grupo primeiro geralmente vence, e o canal de 4s do Black Hole é mais longo que qualquer coisa que Largo tem pra interromper de longe.
- janelas: Enigma farma selva sozinho até ter Blink (15,8min, pro_dados/enigma.json), que chega antes do Kaya and Sange de Largo (24,1min); Black King Bar dele (25,7min) chega bem antes do de Largo (30,4min), e Aghanim's Shard (17,1min) é cedo, dando Demonic Conversion com mais eidolons pra pressionar a lane antes dos 20min.
- o que ele faz com você: Black Hole (channel de 4s, raio 420, alcance de cast 275) prende, impede movimento, ataque e conjuração de quem estiver dentro; Midnight Pulse (700 de alcance, raio 600) aplica dano baseado em % da vida atual por segundo numa área, o que soma rápido em cima de quem já está preso no Black Hole.
- o que você faz com ele: Frogstomp (800 de alcance) interrompe Enigma de mais longe que o alcance de cast do Black Hole (275), então fechar a distância rápido evita a canalização por completo; Catchy Lick pode puxar um aliado preso no raio do Midnight Pulse pra fora antes do próximo tique de dano.
- itens que viram: Black King Bar de Enigma (25,7min) chega bem antes do de Largo; até lá, qualquer silêncio ou stun no Enigma antes dele começar a canalizar vale mais do que tentar lutar depois que o Black Hole já está no ar.
- como jogar: priorize matar ou interromper Enigma antes dele canalizar, nunca depois; se o Black Hole já saiu, puxe os aliados mais vulneráveis pra fora do Midnight Pulse em vez de tentar reverter a luta.
- fonte: pro_dados/largo.json; pro_dados/enigma.json; partidas pro 7.40-7.41 (OpenDota, lane_role); constants_abilities.json (enigma_black_hole, enigma_midnight_pulse, enigma_demonic_conversion).
