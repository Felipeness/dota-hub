---
id: ficha-ringmaster
titulo: "Ringmaster"
heroi: Ringmaster
patch: 7.41
posicoes: [4, 5]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- https://api.opendota.com/api/heroes/131/itemPopularity
- https://api.opendota.com/api/heroes/131/matchups
- https://api.opendota.com/api/benchmarks?hero_id=131
- https://api.opendota.com/api/explorer (SQL sobre player_matches/matches, lane_role, gpm, xpm, obs_placed, sen_placed)
- https://liquipedia.net/dota2/api.php?action=parse&page=Ringmaster
---

## Resumo

Ringmaster é um herói de inteligência à distância, sem cura própria, com um disable de área (Tame the Beasts), um dagger de sangramento (Impalement Arts), uma proteção de aliado (Escape Act) e um ultimate de área que puxa e atordoa (Wheel of Wonder). O OpenDota já cataloga ele como Support/Nuker/Escape/Disabler (`heroStats.json`). Em partidas públicas pelo lane_role do OpenDota (consulta própria via `api/explorer`, sem filtro de patch), ele aparece quase só em dois papéis: 2.427 jogos na off lane (51,1% WR) e 1.774 na safe lane (49,3% WR), contra só 208 no mid e 4 na jungle, e em ambos os grupos o ouro por minuto fica em ~318 com média de 6 a 9 wards de observação e 10 a 17 de sentinela por jogo, perfil de suporte e não de carry ou mid. O grupo da safe lane compra quase o dobro de sentinelas do grupo da off lane (17,4 contra 10,5), sinal de que esse é o suporte que fica perto do próprio carry (pos 5) enquanto o grupo da off lane é o que roda mais (pos 4). Não há dados de pro play (OpenDota lista só 5 partidas profissionais no total) nem builds separadas por posição: os itens abaixo são os mesmos para as duas posições, vindos do item popularity agregado do herói.

## Pos 4 (suporte de roaming)

- quando pegar: leia o lane_role do OpenDota como "off lane" (tri-lane ou rotação), onde o Ringmaster tem menos wards de sentinela por jogo (10,5) que o grupo de safe lane (17,4) e ainda assim ouro por minuto de suporte (~318). Pegue quando seu time quer um disable em área barato (Tame the Beasts custa 90 a 135 de mana) para abrir rotação e um Escape Act para salvar quem inicia.
- itens iniciais: branches, tango, blood_grenade, faerie_fire, ward_dispenser, ward_sentry, smoke_of_deceit

### Build

#### Observer e Sentry Wards (ward_dispenser) + Sentry Ward (ward_sentry)
- porque: visão barata é o que mais aparece na fase inicial do item popularity do herói.
- detalhe: `ward_dispenser` (1 observadora + 1 sentinela, 50 de ouro) aparece em 82 dos starts registrados e `ward_sentry` isolado em 63; é o item de visão mais comum no start, mas Iron Branch (163), Tango (102), Blood Grenade (98) e Faerie Fire (95) aparecem cada um individualmente com mais frequência (são itens de stat/sustain mais baratos que entram em quase todo start, visão ou não).
- fonte: https://api.opendota.com/api/heroes/131/itemPopularity; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Smoke of Deceit (smoke_of_deceit)
- porque: facilita o roam para pos 4 sem ser visto antes de usar Tame the Beasts ou Impalement de surpresa.
- detalhe: aparece em 51 dos starts do herói no item popularity, acima de itens de sustain como Clarity (3) ou Healing Salve (3), o que é raro para um herói sem self heal: sinal de que parte da base de jogadores já começa roaming.
- fonte: https://api.opendota.com/api/heroes/131/itemPopularity

#### Boots of Speed (boots) -> Arcane Boots (arcane_boots)
- porque: Tame the Beasts, Escape Act e Wheel of Wonder custam 90 a 300 de mana; Arcane Boots devolve mana pro time inteiro.
- detalhe: Boots of Speed é o item mais comprado na fase "early" do herói (93 registros) e Arcane Boots lidera a fase "mid" (60), acima de Blink Dagger (30) e Staff of Wizardry (38, componente de outros itens).
- fonte: https://api.opendota.com/api/heroes/131/itemPopularity; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Blink Dagger (blink)
- porque: Tame the Beasts (alcance 700) e o mínimo de 700 do Wheel of Wonder exigem distância curta pra iniciar, e travar o Escape Act num aliado também pede estar perto dele; Blink fecha essa distância na hora certa.
- detalhe: +1200 de alcance de blink; recarrega em 3s se você tomar dano de herói ou do Roshan. É o 3º item mais comprado na fase mid (30, atrás de Arcane Boots e Staff of Wizardry) e o 1º na fase late (36).
- fonte: https://api.opendota.com/api/heroes/131/itemPopularity; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- combo: Blink Dagger fecha os 700 de alcance mínimo do Wheel of Wonder (ele não pode ser lançado em cima de você, só a 700+ de distância): blink pra trás do inimigo e role o Wheel sobre ele em vez de precisar se posicionar a pé.

#### Aether Lens (aether_lens)
- porque: +225 de alcance de cast empurra o Tame the Beasts e o Escape Act além do alcance de resposta de quem você quer acertar ou salvar.
- detalhe: +300 de mana e +2,5 de regen de mana, junto do alcance. 25 registros na fase late, atrás só do Blink Dagger.
- fonte: https://api.opendota.com/api/heroes/131/itemPopularity; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Glimmer Cape (glimmer_cape)
- porque: some com um aliado (ou com você) saindo de uma troca ruim, com resistência mágica extra pra sobreviver ao dano que falta.
- detalhe: invisibilidade de 5s com 0,5s de atraso pra sumir, +20% de resistência mágica e barreira de 375 de dano absorvido.
- fonte: https://api.opendota.com/api/heroes/131/itemPopularity; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

### Situacionais

#### Force Staff (force_staff)
- quando: empurra 600 de distância, em você ou em aliado; use pra reposicionar quem o inimigo focou ou pra chegar no alcance do Wheel sem gastar o Blink.
- contra: iniciação de alcance curto (Axe, Tusk, Earthshaker) onde empurrar o aliado 600 unidades já tira ele do raio do combo inimigo.
- fonte: https://api.opendota.com/api/heroes/131/itemPopularity; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Rod of Atos (rod_of_atos)
- quando: +275 de vida e +12 de inteligência, e a ativa prende o alvo por 2s sem precisar de alcance curto.
- contra: heróis de fuga rápida sem dispel de raiz, tipo Ember Spirit ou Weaver, onde os 2s de raiz garantem o canal cheio do Tame the Beasts (até 1s) ou o segundo acerto do Impalement.
- combo: Rod of Atos + Tame the Beasts: raiz por 2s cobre o 1s de canal cheio do whip (dano e medo máximos) sem o alvo sair da área antes do crack.
- fonte: https://api.opendota.com/api/heroes/131/itemPopularity; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json; C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json

#### Eul's Scepter of Divinity (cyclone)
- quando: ciclone de 2,5s em si mesmo passa por imunidade a feitiço (spell immunity), serve de fuga ou de setup pra entrar com o Wheel depois que o ciclone acaba.
- contra: silence ou disable de alcance que te pega antes de lançar qualquer coisa; o self-cyclone te tira da linha de visão por 2,5s.
- fonte: https://api.opendota.com/api/heroes/131/itemPopularity; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Solar Crest (solar_crest)
- quando: +7 de armadura passiva pra você, sempre. A ativa (Shine) só funciona em aliado: +5 de armadura, +60 de velocidade de ataque, +15% de movimento e barreira de 350 de dano por 7s (não dá esses bônus se usada em si mesmo).
- contra: time inimigo com dano físico constante (carries de auto-attack), onde os 7s de armadura e a barreira no seu carry decidem a troca; no 7.41 o item não tem mais a ativa de reduzir armadura do inimigo.
- fonte: https://api.opendota.com/api/heroes/131/itemPopularity; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Ghost Scepter (ghost)
- quando: 4s de forma etérea com imunidade total a dano físico; nesse tempo você não ataca e fica 30% mais vulnerável a dano mágico.
- contra: carries de dano físico puro que estão te matando primeiro na troca (Phantom Assassin, Spectre, Juggernaut); não ajuda contra nuke mágico, porque a troca é justamente ficar mais fraco nisso.
- fonte: https://api.opendota.com/api/heroes/131/itemPopularity; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Lotus Orb (lotus_orb)
- quando: reflete uma habilidade de alvo único de volta pra quem lançou.
- contra: disables de alvo único fortes contra suporte (Doom, Lion, Shadow Shaman): reflita antes de eles acertarem o combo em você.
- fonte: https://api.opendota.com/api/heroes/131/itemPopularity; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Black King Bar (black_king_bar)
- quando: 9/8/7s de imunidade a feitiço (cai por uso), pra entrar numa troca sem ser desligado antes de usar Wheel of Wonder.
- contra: times com múltiplos disables em sequência, quando você precisa garantir que vai conseguir lançar o ultimate.
- fonte: https://api.opendota.com/api/heroes/131/itemPopularity; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Aghanim's Shard (aghanims_shard)
- quando: destrava Spotlight (3 faróis que varrem uma área de 275 de raio por 8s, 30% de chance de erro pra quem está na luz e revela invisíveis; contra ilusões, retira 30% da vida máxima por segundo). Custo e número de compras baixos no item popularity (1 registro na fase mid), então é pouco usado hoje, mas é a única forma de ter detecção de invisível na build.
- contra: heróis de invisibilidade (Riki, Clinkz, Weaver) e builds de ilusão (Naga Siren, Phantom Lancer): o Spotlight revela e ainda derrete a ilusão.
- fonte: https://api.opendota.com/api/heroes/131/itemPopularity; https://liquipedia.net/dota2/api.php?action=parse&page=Ringmaster; C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json

#### Aghanim's Scepter (ultimate_scepter)
- quando: upgrade do Escape Act (The Box): troca o cooldown por 2 cargas e, quando a caixa abre, causa 300 de dano mágico em área ao redor do alvo e dispara 8 réplicas do dagger do Impalement Arts em todas as direções, com metade do alcance normal do dagger.
- combo: Escape Act com Scepter em cima de um aliado no meio da luta inimiga transforma a "salvada" em dano de área na cara de quem cercou ele.
- detalhe: 14 registros na fase late do item popularity, empatado com Glimmer Cape e atrás de Blink Dagger (36), Aether Lens (25) e Force Staff (20).
- fonte: https://liquipedia.net/dota2/api.php?action=parse&page=Ringmaster; https://api.opendota.com/api/heroes/131/itemPopularity

## Pos 5 (suporte duro)

- quando pegar: leia o lane_role do OpenDota como "safe lane" (ao lado do carry), onde o grupo de Ringmaster planta quase o dobro de sentinelas por jogo (17,4) do que o grupo da off lane (10,5), com o mesmo ouro por minuto de suporte (~318). Pegue quando o time precisa de visão pesada no começo e de um Escape Act pra proteger o carry, mais do que de rotação.
- itens iniciais: branches, tango, blood_grenade, faerie_fire, ward_dispenser, ward_sentry, magic_stick

### Build

#### Observer e Sentry Wards (ward_dispenser) + Sentry Ward (ward_sentry)
- porque: é o pos 5 quem planta a visão que protege o carry e o próprio jungle; a contagem de sentinela por jogo (17,4) é quase o dobro do grupo da off lane.
- detalhe: mesmo item inicial do pos 4 (82 e 63 registros no item popularity agregado do herói), mas aqui o padrão de sentinela por jogo é muito mais alto, o que é o sinal de posição, não o item em si.
- fonte: https://api.opendota.com/api/heroes/131/itemPopularity; https://api.opendota.com/api/explorer (query lane_role/sen_placed)

#### Magic Stick (magic_stick) -> Boots of Speed (boots) -> Arcane Boots (arcane_boots)
- porque: lane fixa ao lado do carry troca feitiço com a dupla inimiga; o Magic Stick devolve isso em HP/mana rápido, e o Arcane Boots sustenta o gasto de mana de Tame the Beasts e Escape Act na defesa do carry.
- detalhe: Magic Stick aparece 38 vezes no start do item popularity do herói; Arcane Boots lidera a fase mid (60 registros).
- fonte: https://api.opendota.com/api/heroes/131/itemPopularity; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Blink Dagger (blink)
- porque: mesmo papel do pos 4, chegar nos 700 de alcance do Tame the Beasts e no alcance mínimo de 700 do Wheel of Wonder pra proteger o carry ou abrir espaço pra ele.
- detalhe: item mais comprado na fase late do herói (36 registros).
- combo: Escape Act no carry + Blink Dagger pra reposicionar você mesmo logo depois, sem deixar o carry exposto no meio da troca.
- fonte: https://api.opendota.com/api/heroes/131/itemPopularity; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Glimmer Cape (glimmer_cape)
- porque: item de proteção de aliado por excelência; aqui o aliado quase sempre é o carry que você está babá-ando.
- detalhe: +20% de resistência mágica e invisibilidade de 5s, com barreira de 375 de dano.
- fonte: https://api.opendota.com/api/heroes/131/itemPopularity; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

### Situacionais

#### Solar Crest (solar_crest)
- quando: +armadura pro carry na hora de lutar (a ativa Shine só funciona em aliado, não existe mais a opção de reduzir armadura do inimigo nesse patch).
- contra: times com foco em dano físico, onde a janela de +5 de armadura, +60 de velocidade de ataque e barreira de 350 no carry (7s) decide uma troca de poucos segundos.
- fonte: https://api.opendota.com/api/heroes/131/itemPopularity; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Guardian Greaves (guardian_greaves)
- quando: cura e mana em área pro time inteiro antes de uma troca, já que o Ringmaster não tem nenhuma cura própria no kit.
- contra: jogos de troca prolongada onde o time depende de sustain em área porque ninguém no draft tem cura forte.
- fonte: https://api.opendota.com/api/heroes/131/itemPopularity; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Aeon Disk (aeon_disk)
- quando: é passivo e só em você, não protege aliado. Quando sua vida cai abaixo de 70% por dano de herói, aplica dispel forte e te dá 2,5s com todo dano que você causa e recebe zerado, mais 75% de resistência a status; não cura nem devolve mana nesse proc.
- contra: combos de burst de alvo único (Lina, Lion com itens, Nevermore) que te derrubariam abaixo de 70% de vida de uma vez: a janela de dano zero cobre o resto do combo.
- fonte: https://api.opendota.com/api/heroes/131/itemPopularity; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Scythe of Vyse (sheepstick)
- quando: hex de 2,8s no alvo mais perigoso do time inimigo antes de uma luta decisiva.
- contra: inicadores ou carries que, sem o disable deles, o time inimigo não consegue abrir a luta.
- fonte: https://api.opendota.com/api/heroes/131/itemPopularity; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

## Contra quem (matchups agregados, OpenDota)

Dados de partidas públicas desde o lançamento do herói, sem filtro de patch nem de posição (amostra mínima de 60 jogos por confronto). Use como sinal de direção, não como número fino de patch.

- Piores confrontos para o Ringmaster: Grimstroke (22V-40D em 62, 35,5%), Chen (23V-41D em 64, 35,9%), Keeper of the Light (29V-50D em 79, 36,7%), Treant Protector (25V-41D em 66, 37,9%), Doom (40V-59D em 99, 40,4%), Huskar (25V-36D em 61, 41,0%), Mirana (25V-36D em 61, 41,0%).
- Melhores confrontos para o Ringmaster: Skywrath Mage (84V-56D em 140, 60,0%), Silencer (39V-27D em 66, 59,1%), Medusa (37V-26D em 63, 58,7%), Dark Willow (81V-61D em 142, 57,0%), Timbersaw (69V-53D em 122, 56,6%), Sniper (34V-27D em 61, 55,7%), Viper (50V-40D em 90, 55,6%).
- fonte: https://api.opendota.com/api/heroes/131/matchups; C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json (mapeamento id -> nome)

## Roshan

Sem base pra montar um guia de Roshan solo do Ringmaster. O dataset local (`dota-roshan-solo/data/solos.json`) tem 7 registros em que o último golpe no Roshan foi do Ringmaster, mas 6 são classificados como `time` (abate em grupo) ou `finalizacao` (ele só completou o golpe final) e nenhum é `solo_puro`; só 1 cai em categoria de solo (`solo_ajuda_curta`, partida pro, nível 20, patrimônio 20042 no momento do abate). Um ponto isolado não sustenta leitura de janela de Roshan solo. Partida profissional também é rara pro herói (OpenDota lista 5 no `pro_pick` de `heroStats.json`), então não há amostra pra separar isso por posição.
