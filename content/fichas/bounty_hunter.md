---
id: ficha-bounty_hunter
titulo: "Bounty Hunter"
heroi: Bounty Hunter
patch: 7.41
posicoes: [4, 5]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/items.json
- dota-tier1/data/draft.csv
- dota-tier1/data/derivados/compras.parquet
- dota-roshan-solo/data/resumo_por_heroi.json
- dota-roshan-solo/data/resumo_com_suporte.json
- dota-roshan-solo/data/early_rosh_pro.json
- dota-roshan-solo/data/late_rosh_pro.json
- https://api.opendota.com/api/heroes/62/itemPopularity
- https://dotacoach.gg/en/heroes/bounty-hunter
- https://dotacoach.gg/en/heroes/bounty-hunter/builds/support
---
## Resumo
Bounty Hunter é um suporte de pick-off: entra invisível com Shadow Walk, bate com Jinada (dano bônus no ataque que também rouba ouro, não é crítico percentual) e marca o alvo com Track, que amplifica o dano recebido e fura Black King Bar (fonte: constants_abilities.json, campos bonus_damage/gold_steal de bounty_hunter_jinada e bkbpierce de bounty_hunter_track; dotacoach.gg confirma que Jinada é descrito como dano bônus, não crítico). No Tier 1 do 7.41 ele é quase só roaming support: nas 27 partidas em que foi picado, o replay confirma pos 4 em 25 (68% de vitórias, 17V-8L) e pos 5 só nas outras 2 (0V-2L, amostra mínima); fonte dota-tier1/draft.csv e compras.parquet. Em pub de MMR alto do mesmo patch (7.41f) o padrão se repete: 71,1% das partidas saem Support e 22,7% Hard Support, com 54,1% e 51,4% de vitórias respectivamente, enquanto offlane, mid e carry somados não passam de 6,1% de seleção (dotacoach.gg). O ultimate dele é Track, não Shuriken Toss: as duas escalam diferente nas constantes locais (Track com 3 níveis, Shuriken Toss com 4, como qualquer habilidade básica do kit).

## Pos 4 (suporte de roaming)
- quando pegar: é a build quase exclusiva do herói no 7.41, 25 das 27 partidas picadas no Tier 1 saíram pos 4 por replay, com 68% de vitórias; pegue quando o time quiser pressão de visão e pick-off cedo no mapa em vez de um suporte que só planta ward (dota-tier1/draft.csv).
- itens iniciais: tango, ward_sentry, flask, blood_grenade, clarity

### Build
#### Magic Wand (magic_wand)
- minuto: 11
- porque: resposta instantânea de HP/mana pra sobreviver ao trade de lane sem gastar mana do combo Jinada+Shuriken.
- detalhe: monta Magic Stick + 2 Iron Branch. Ganha carga sempre que um inimigo visível em 1200 de raio usa uma habilidade, até 20 cargas de 15 HP/mana cada.
- fonte: items.json (magic_wand); compras.parquet (18 das 25 partidas pos 4, minuto mediano 11,3)

#### Tranquil Boots (tranquil_boots)
- minuto: 11
- porque: regen de vida alta sem gastar ouro em cura, essencial pro roam sem farm constante.
- detalhe: monta Boots + Wind Lace + Ring of Regen. Dá 65 de movimento e 14 de regen de vida extra enquanto não ataca nem é atacado; quebra (Break) por 13s ao entrar em combate.
- fonte: items.json (tranquil_boots); compras.parquet (23 das 25 partidas pos 4, minuto mediano 11,2)

#### Urn of Shadows (urn_of_shadows)
- minuto: 12
- porque: dano constante que também seca a regeneração do alvo, e ganha carga de graça a cada kill perto do Bounty Hunter.
- detalhe: Soul Release causa 25 de dano por segundo por 8s em inimigo (ou cura 30 HP/s em aliado); ganha carga sempre que um herói morre em 1500 de raio.
- fonte: items.json (urn_of_shadows); compras.parquet (17 das 25 partidas pos 4, minuto mediano 12,5)

#### Essence Distiller (essence_distiller)
- minuto: 17
- porque: vira o Urn numa armadilha que pode ficar escondida no meio do mapa e já avisa o time quando alguém pisa nela.
- detalhe: monta Urn of Shadows + Chainmail + Wizard Hat. Pode ser lançado no chão e ficar dormente por até 15s, grudando no primeiro inimigo que passar a 400 de raio: 25 de dano por segundo por 8s e visão verdadeira compartilhada com o time enquanto estiver preso no alvo.
- combo: plantar no caminho de uma rotação ou perto de um ward antes de entrar em Shadow Walk; se o inimigo pisar nele antes do Bounty Hunter aparecer, o time já sabe o que vem e com quanta vida.
- fonte: items.json (essence_distiller); compras.parquet (13 das 25 partidas pos 4, minuto mediano 17,4; é a evolução do Urn mais usada, bem mais que Spirit Vessel, que apareceu só 1 vez nas 25)

#### Eul's Scepter of Divinity (cyclone)
- minuto: 24
- porque: dispensa um debuff em cima do próprio Bounty Hunter ou tira o alvo marcado da luta por 2,5s pra render o resto do combo.
- detalhe: 2,5s de invulnerabilidade pro alvo, 50 de dano mágico na queda, Dispel Básico ao lançar.
- combo: usar em si mesmo pra sobreviver a um burst logo depois de marcar Track, ou no alvo pra interromper a reação dele ao dano amplificado.
- fonte: items.json (cyclone); compras.parquet (10 das 25 partidas pos 4, minuto mediano 23,6)

#### Force Staff (force_staff)
- minuto: 25
- porque: reposiciona o próprio Bounty Hunter fora de alcance de um combo físico ou empurra um aliado isolado pra fora de perigo.
- detalhe: empurra 600 unidades na direção que a unidade está de frente, com 850 de alcance em inimigo; não interrompe a ação do alvo.
- combo: usar em si mesmo logo depois de Jinada+Shuriken Toss pra saír do alcance de resposta do alvo que acabou de ser atingido.
- fonte: items.json (force_staff); compras.parquet (18 das 25 partidas pos 4, minuto mediano 24,9)

#### Blink Dagger (blink)
- minuto: 29
- porque: fecha os 1200 de distância pra entrar no alcance do Jinada (150) sem andar exposto até o combo.
- detalhe: 1200 de alcance, trava por 3s depois de tomar dano de herói ou Roshan.
- combo: Blink instantâneo seguido de ataque com Jinada ativo é o pick-off clássico, fecha a distância e garante o dano bônus com roubo de ouro no mesmo golpe.
- fonte: items.json (blink, bounty_hunter_jinada); compras.parquet (9 das 25 partidas pos 4, minuto mediano 28,8)

#### Aghanim's Shard (aghanims_shard)
- minuto: 32
- porque: dá Friendly Shadow, a mesma invisibilidade e velocidade do Shadow Walk, só que num aliado, sem tirar o próprio Bounty Hunter da invisibilidade.
- detalhe: fade time de 0,5s pro aliado, 650 de alcance, não quebra a invisibilidade do Bounty Hunter ao lançar.
- combo: dar Friendly Shadow pro carry que vai iniciar uma luta ou fazer Roshan, enquanto o próprio Bounty Hunter segue invisível ao lado pra reagir com Jinada se alguém reagir.
- fonte: items.json (aghanims_shard); constants_hero_abilities.json (bounty_hunter_wind_walk_ally); dotacoach.gg (confirma que essa habilidade é concedida pelo Shard do herói); compras.parquet (17 das 25 partidas pos 4, minuto mediano 31,9)

### Situacionais
#### Gem of True Sight (gem)
- porque: dá visão verdadeira constante num raio de 900 pra achar quem o time inimigo esconde da marcação do Track.
- detalhe: reveal de 300 de raio sob o próprio Bounty Hunter e visão de invisíveis em 900 de alcance pra qualquer aliado perto; cai no chão se o Bounty Hunter morrer.
- contra: heróis invisíveis que o time inimigo usa pra escapar da marcação ou pra flanquear (Riki, Clinkz, Templar Assassin, Nyx Assassin; Weaver não entra aqui, não tem nenhuma habilidade de invisibilidade em constants_abilities.json).
- fonte: items.json (gem); compras.parquet (6 das 25 partidas pos 4, minuto mediano 36,1)

#### Scythe of Vyse (sheepstick)
- porque: trava o alvo de maior patrimônio do time inimigo antes dele reagir, garantindo os 15% de ouro bônus do Big Game Hunter na morte ou assistência.
- detalhe: Hex silencia, desarma e reduz a velocidade do alvo a 140 por 2,8s.
- contra: o "Big Game" do time inimigo, ou seja, um dos 3 heróis de maior patrimônio líquido no momento, que é justamente quem rende mais ouro extra se morrer travado.
- fonte: items.json (sheepstick); constants_abilities.json (bounty_hunter_big_game_hunter, bônus de 15%); compras.parquet (4 das 25 partidas pos 4, minuto mediano 52,6)

#### Aeon Disk (aeon_disk)
- porque: dispensa e zera o próximo golpe assim que a vida cai abaixo de 70%, segurando o Bounty Hunter (pouca vida) contra um burst isolado.
- detalhe: Combo Breaker dá dispel forte e 2,5s de dano zerado (próprio e recebido) na primeira vez que a vida cruza 70% depois de levar dano de jogador.
- contra: combos de burst que miram o Bounty Hunter sozinho fora da luta principal, tentando tirá-lo antes do pick-off render.
- fonte: items.json (aeon_disk); compras.parquet (5 das 25 partidas pos 4, minuto mediano 44,3)

#### Wind Waker (wind_waker)
- porque: upgrade do Eul's que também serve pra travar quem o time inimigo tenta usar pra canalizar ou ficar parado numa luta.
- detalhe: mesma Cyclone de 2,5s de invulnerabilidade, agora dá pra mover a si mesmo durante o efeito a 300 de velocidade.
- contra: heróis que precisam ficar parados canalizando pra render dano ou cura (ex.: quem o time inimigo trouxer pra sustentar uma luta longa).
- fonte: items.json (wind_waker); compras.parquet (4 das 25 partidas pos 4, minuto mediano 43,3)

## Pos 5 (suporte duro)
- quando pegar: amostra pequena no Tier 1 do 7.41 (só 2 das 27 partidas picadas saíram pos 5 por replay, e perdeu as duas), mas em pub de MMR alto do mesmo patch a seleção como Hard Support é relevante, 22,7% das partidas com 51,4% de vitórias (dotacoach.gg); pegue quando o time já tiver um pos 4 de iniciação e precisar só de visão, Track pra engajar e emboscada ocasional.
- itens iniciais: amostra mínima (só 2 partidas pos 5 no Tier 1) e sem padrão consistente entre elas, só tango e clarity se repetem nas duas; o resto variou (flask num jogo, ward_sentry logo no início e magic_stick no outro). Fonte: compras.parquet (2 das 2 partidas pos 5 observadas, amostra mínima)

### Build
#### Tranquil Boots (tranquil_boots)
- porque: regen de vida sem gastar ouro em cura, mesmo raciocínio do pos 4.
- detalhe: monta Boots + Wind Lace + Ring of Regen; 65 de movimento e 14 de regen enquanto não ataca nem é atacado, quebra por 13s em combate.
- fonte: items.json (tranquil_boots); compras.parquet (2 das 2 partidas pos 5 observadas, amostra mínima)

#### Force Staff (force_staff)
- porque: reposicionar e salvar aliado mesmo sem o farm de um pos 4.
- detalhe: empurra 600 unidades, 850 de alcance em inimigo.
- fonte: items.json (force_staff); compras.parquet (2 das 2 partidas pos 5 observadas, amostra mínima)

### Situacionais
#### Solar Crest (solar_crest)
- porque: dá uma barreira física e bônus de velocidade de ataque pro carry sobreviver um pick ou puxar dano numa troca curta.
- detalhe: 5 de armadura, 60 de velocidade de ataque, 15% de movimento e barreira de 350 de dano físico por 7s no aliado.
- contra: trocas físicas curtas contra o carry do time inimigo, quando o Bounty Hunter não tem ouro pra um item ofensivo e prefere proteger quem farma.
- fonte: items.json (solar_crest); compras.parquet (1 das 2 partidas pos 5 observadas, amostra mínima: só 1 jogo)

## Roshan
Bounty Hunter nunca aparece como o herói que soca Roshan sozinho: zero ocorrências em `resumo_por_heroi.json` (lista os heróis com padrão de solo confirmado em replay) e zero em `late_rosh_pro.json`, que cobrem exatamente esse recorte. Ele não é um herói de abrir ou carregar o farm de Roshan.

Mas ele não está ausente das bases de Roshan: em `solos.json` o nome dele aparece 17 vezes entre os 2720 eventos de Roshan solo registrados, sempre como um dano secundário no `dano_por_heroi` de quem levou o crédito do solo, nunca como o próprio solador. E em `resumo_com_suporte.json` ele é listado 7 vezes como `suporte_no_fosso`, o suporte que fica junto no covil enquanto outro herói soca Roshan sozinho: 3 vezes guardando o Ursa, e 1 vez cada guardando Templar Assassin, Terrorblade, Lina e Furion. Isso bate com o kit dele: visão e wards pra proteger quem está no fosso, não dano no Roshan em si.

Fonte: dota-roshan-solo/data/resumo_por_heroi.json (0 ocorrências), late_rosh_pro.json (0 de 4212 linhas), solos.json (17 de 2720 eventos, campo dano_por_heroi), resumo_com_suporte.json (campo suporte_no_fosso: ursa×3, templar_assassin×1, terrorblade×1, lina×1, furion×1).
