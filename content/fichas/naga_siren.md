---
id: ficha-naga_siren
titulo: "Naga Siren"
heroi: Naga Siren
patch: 7.41
posicoes: [1]
fontes:
- dota-imortal/data/opendota/heroes.json
- dota-imortal/data/opendota/heroStats.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/items.json
- dota-tier1/data/draft.csv
- dota-roshan-solo/data/solos.json
- dota-roshan-solo/src/solos.py
- https://api.opendota.com/api/heroes/89/itemPopularity
- https://api.opendota.com/api/benchmarks?hero_id=89
- https://api.opendota.com/api/scenarios/itemTimings?item=power_treads&hero_id=89
- https://api.opendota.com/api/scenarios/itemTimings?item=manta&hero_id=89
- https://api.opendota.com/api/scenarios/itemTimings?item=orchid&hero_id=89
- https://api.opendota.com/api/scenarios/itemTimings?item=skadi&hero_id=89
- https://api.opendota.com/api/scenarios/itemTimings?item=heart&hero_id=89
- https://api.opendota.com/api/scenarios/itemTimings?item=butterfly&hero_id=89
- https://api.opendota.com/api/scenarios/itemTimings?item=bloodthorn&hero_id=89
---
## Resumo
Naga Siren é uma carry de contenção: farma sozinha em duas rotas ao mesmo tempo com os clones do Mirror Image, protege o time com o Song of the Siren (hoje indispelável e com cura) e sai pra split push sem medo de perder luta, porque simplesmente não entra nela. No recorte Atlas Tier 1 do patch atual ela foi pega 18 vezes em 895 partidas, sempre como pos 1 (18 de 18 picks com posição registrada), com 66,7% de vitórias (12/18) e banida 28 vezes, mais vezes banida do que pega (dota-tier1/data/draft.csv). Nas 18 vezes que entrou, foi sempre a 3ª, 4ª ou 5ª escolha do time (nunca entre as duas primeiras), ou seja, time costuma fechar o draft com ela depois de ver o inimigo, não abrir com ela. Não há registro de pos 2 a 5 nesse recorte, e a amostra pública mais recente da própria OpenDota (heroStats.json) mostra 0 pick profissional, então esta ficha cobre só a pos 1.

## Pos 1 (carry)
- quando pegar: time quer farm isolado garantido (ela puxa duas lanes com Mirror Image) e uma defesa de teamfight que não depende de reagir a tempo, só de apertar Song e esperar; é pego tarde no draft pra fechar composição depois de ver o inimigo (dota-tier1/data/draft.csv, 18/18 picks na 3ª a 5ª escolha do time).
- itens iniciais: tango, quelling_blade, branches, slippers, circlet, magic_stick

### Build
#### Power Treads (power_treads)
- minuto: 7 (pico aos 7:30, 131 de 169 compras na amostra; itemTimings hero_id 89)
- porque: ataque e troca de atributo baratos, e a velocidade extra ajuda a sair de uma lane pra outra puxando farm.
- detalhe: troca entre +10 Força, Agilidade ou Inteligência, +25 de velocidade de ataque e +55/+45 de movimento (corpo a corpo/à distância).
- fonte: items.json (power_treads); itemPopularity (early_game_items, 96 ocorrências); itemTimings hero 89

#### Wraith Band (wraith_band)
- porque: barato, dá os três atributos e armadura, sustenta o farm solo das duas lanes antes do Manta.
- detalhe: +5 agilidade, +2 força, +2 inteligência, +6 de velocidade de ataque e +1,75 de armadura.
- fonte: items.json (wraith_band); itemPopularity (early_game_items, 107 ocorrências)

#### Yasha + Diadem (vira Manta Style) (manta)
- minuto: 15 a 20 (pico aos 20:00, 92 compras; também forte aos 15:00, 49; itemTimings hero_id 89)
- porque: 2 imagens dobram o farm das duas lanes, e o dispel tira o que travaria ela antes de espalhar os clones.
- detalhe: +26 agilidade, +10 força/inteligência, +15 de velocidade de ataque, +10% de movimento, 2 imagens por 18s (melee 33% do dano, ranged 28%, tomam 300% de dano). Dispel Type: Basic Dispel.
- combo: logo que os clones somem no Mirror Image, o Eelskin dela conta cada clone como "outra Naga" a até 900 de distância e dá +4,9% de evasão por clone, então ela fica mais evasiva enquanto eles estão vivos.
- fonte: items.json (manta, yasha, diadem); constants_abilities.json (naga_siren_eelskin); itemPopularity (mid_game_items: manta 96, diadem 98, yasha 85); itemTimings hero 89

#### Orchid Malevolence (orchid)
- minuto: 20 (pico aos 20:00, 66 de 131 compras na amostra; itemTimings hero_id 89)
- porque: silencia e queima quem depende de feitiço pra fugir ou pra iniciar em cima do time dela.
- detalhe: Soul Burn silencia por 5s; no fim do silêncio, 30% do dano que o alvo tomou nesse tempo volta como dano mágico bônus. +20 de dano, +35 de velocidade de ataque, +12 de inteligência.
- contra: heróis sem escape físico que dependem de um feitiço pra sair (blink, dash, heal), travados no silêncio enquanto o time dela limpa.
- fonte: items.json (orchid); itemPopularity (mid_game_items, 76 ocorrências); itemTimings hero 89

#### Heart of Tarrasque (heart)
- minuto: 25 a 30 (pico aos 30:00, 63 compras; itemTimings hero_id 89)
- porque: regen percentual de vida máxima deixa ela farmando e empurrando lane sem precisar recuar pra base.
- detalhe: +40 Força e +1% de regeneração de vida máxima por segundo (crescente com o Força total).
- combo: junto com o Mirror Image, ela some pra farmar numa rota enquanto o time segura sozinho, porque não tem pressa de voltar pra curar.
- fonte: items.json (heart); itemPopularity (mid_game_items: ring_of_tarrasque 32; late_game_items: heart 38); itemTimings hero 89

### Situacionais
#### Bloodthorn (bloodthorn)
- porque: silencia e dá true strike contra quem empilha evasão, que senão faria a Naga e os clones errarem ataque toda hora.
- detalhe: Soul Rend silencia 5s com true strike garantida contra o alvo nesse tempo; passiva Pierce dá 40% de chance de ignorar evasão e somar 60 de dano mágico em qualquer ataque, mesmo fora do silêncio.
- contra: heróis que empilham evasão (Butterfly, Talisman of Evasion, passivas como a do Phantom Assassin), que sem isso fariam boa parte dos ataques da Naga e dos clones errarem.
- fonte: items.json (bloodthorn, orchid); itemPopularity (late_game_items, 48 ocorrências); itemTimings hero 89

#### Eye of Skadi (skadi)
- minuto: 25 a 30 (1500s e 1800s praticamente empatados, 11 e 10 compras; itemTimings hero_id 89)
- porque: sem isso a Naga não alcança quem corre, porque não tem blink nem dash no kit.
- detalhe: +35 de todos os atributos; ataque corpo a corpo reduz 25% de velocidade de movimento e 20% de ataque do alvo por 3s.
- contra: carries ou suportes de fuga rápida (alta velocidade base, itens de movimento) que, sem o slow, escapam antes do Ensnare recarregar.
- fonte: items.json (skadi); itemPopularity (late_game_items, 26 ocorrências); itemTimings hero 89

#### Black King Bar (black_king_bar)
- porque: sem BKB, qualquer stun ou silêncio em cadeia impede o combo de Song of the Siren e Ensnare dela.
- detalhe: Avatar dá basic dispel ao ativar, 60% de resistência mágica e imunidade a dano refletido e puro por 9s (nível 1).
- contra: times com disable em sequência (stun, silêncio, root) que, sem o BKB, cancelam o Song of the Siren ou travam ela antes de reposicionar os clones.
- fonte: items.json (black_king_bar); itemPopularity (late_game_items, 12 ocorrências)

#### Linken's Sphere (sphere)
- porque: bloqueia de graça o primeiro feitiço-alvo mandado só nela, sem gastar Song of the Siren pra isso.
- detalhe: Spellblock recarrega em 14s e bloqueia a maioria dos feitiços direcionados.
- contra: heróis que iniciam com um único feitiço-alvo em cima da Naga (hex, gancho, silêncio de ponto), que perdem esse recurso de graça.
- fonte: items.json (sphere)

#### Disperser (disperser)
- porque: upgrade do Diffusal, o Suppress limpa a própria Naga de root/slow e ainda desacelera quem está perseguindo o push.
- detalhe: Suppress dá dispel básico pros dois lados; o alvo é desacelerado por 5s e a Naga ganha velocidade e 40% de resistência a lentidão. Manabreak queima 40 de mana por acerto, mas as ilusões não queimam mana (items.json: "Illusions do not burn mana").
- contra: roots e slows que travariam ela no meio do split push, porque o Suppress limpa isso nela mesma ao ativar.
- fonte: items.json (disperser); itemPopularity (late_game_items, 7 ocorrências)

## Roshan
Naga Siren não tem nenhuma morte de Roshan classificada como solo nos replays locais (dota-roshan-solo/src/solos.py define os critérios de solo_puro, solo_ajuda_curta e solo_com_suporte). Ela foi a heroína que mais causou dano em 12 mortes de Roshan na base, mas todas as 12 caem na categoria "time" (dota-roshan-solo/data/solos.json), com participação no dano variando de 38% a 84% (mediana 60%) e minuto variando de 24 a 41 (mediana 29). Em só 4 dessas 12 ela também deu o golpe final literal; nas outras 8, um aliado fechou o abate. Bate com o kit: Mirror Image e Rip Tide/Deluge causam dano em área junto com o time, mas ela não tem nenhum nuke isolado grande o bastante pra estourar a vida do Roshan sozinha antes de um aliado chegar.
