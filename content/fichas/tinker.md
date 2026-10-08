---
id: ficha-tinker
titulo: "Tinker"
heroi: Tinker
patch: 7.41
posicoes: [2]
fontes:
- dota-tier1/data/draft.csv
- dota-tier1/work/equipes/xtreme/hub.json
- dota-tier1/data/partidas/8781669218/eventos.jsonl
- dota-tier1/data/partidas/8813156153/eventos.jsonl
- dota-tier1/data/partidas/8813536582/eventos.jsonl
- dota-tier1/data/partidas/8817145578/eventos.jsonl
- dota-tier1/data/partidas/8827492535/eventos.jsonl
- dota-tier1/data/partidas/8924616191/eventos.jsonl
- dota-tier1/data/partidas/8927288399/eventos.jsonl
- dota-tier1/data/partidas/8943143428/eventos.jsonl
- dota-imortal/data/opendota/constants_abilities.json
- dota-imortal/data/opendota/constants_hero_abilities.json
- dota-imortal/data/opendota/items.json
- dota-imortal/data/opendota/heroStats.json
- https://api.opendota.com/api/heroes/34/itemPopularity
---

## Resumo

Tinker é um mid solo (pos 2) de dano mágico a distância: farma wave e camp com Laser e March of the Machines, poka de longe e usa Rearm pra resetar os próprios feitiços e repetir o giro. Ele não depende de Boots of Travel porque a própria Keen Conveyance já teleporta pra estrutura, unidade e herói aliado conforme sobe de nível. Nos 8 jogos de pro computados no Tier1 (patch atual) ele foi pego e jogado na posição 2 em 100% das vezes (posição confirmada por replay, não só por draft), e aparece como um dos "mid antigos" que o resto do circuito teme o bastante pra banir contra a Xtreme Gaming (28% de ban rate antes do TI, 28 pontos percentuais acima da média do resto do Tier1 no mesmo recorte).

## Pos 2 (mid)

- quando pegar: é a única posição em que ele aparece nos dados verificados (8 de 8 picks de pro, posição de draft e de replay batendo em 2.0); farma a mid lane sozinho com bottle e corre pra cima de runa, perfil clássico de mid solo de dano mágico.
- itens iniciais: bottle (8 de 8 replays pro do Tier1) e ward_observer (6 de 8); tango aparece em só 2 de 8 e branches não aparece em nenhum replay de Tinker no Tier1, então ficaram de fora por falta de sustentação nos dados

### Build

#### Kaya (kaya)
- minuto: 8:04
- porque: int e spell amp direto, sem gastar tempo de lane com itens de passagem.
- detalhe: +16 Int, +10% de amplificação de feitiço e +30% de regen de mana. Laser custa 95 a 125 de mana e March of the Machines 100 a 160; sem isso você fica sem mana depois de 2 a 3 trocas.
- fonte: mediana de 7 dos 8 replays pro do Tier1; atributos de dota-imortal/items.json

#### Blink Dagger (blink)
- minuto: 12:00
- porque: fecha e sai da troca; cobre a distância até o alcance do Warp Flare sem entrar no alcance de resposta do inimigo.
- detalhe: 1200 de alcance de blink. Não pode ser usado nos 3 segundos depois de tomar dano de herói ou de Roshan, então blinke antes de virar alvo, não depois de já estar sendo batido.
- fonte: mediana de 8 dos 8 replays pro do Tier1; items.json

#### Aghanim's Shard (aghanims_shard)
- minuto: 15:39
- porque: entra sempre logo depois do Blink e antes do Scepter nos replays, ou seja, é prioridade de meio de jogo mesmo sem upgrade de habilidade genérico.
- detalhe: item genérico de "Ability Upgrade" (o efeito varia por herói); o texto exato do upgrade do Tinker não está confirmado nas constantes locais nem foi possível confirmar via web nesta sessão (sites bloquearam o fetch). Entra em 8 de 8 replays pro.
- fonte: mediana de 8 dos 8 replays pro do Tier1

#### Kaya and Sange (kaya_and_sange)
- minuto: 19:00
- porque: dobra a amplificação de feitiço e corta um quarto do custo de mana de tudo, além de dar resistência a slow pra não travar fugindo do próprio combo.
- detalhe: upgrade de Kaya pra +16 Str, +16 Int, 25% de resistência a slow, 40% de regen de mana, 12% de spell amp, 20% de cura e 25% de redução de custo/perda de mana.
- fonte: mediana de 7 dos 8 replays pro do Tier1; items.json

#### Aghanim's Scepter (ultimate_scepter)
- minuto: 23:19
- porque: item de upgrade de ultimate/habilidades que os 8 replays fecham sempre por volta dos 23 minutos, logo depois do Shard.
- detalhe: +10 em todos os atributos e +175 de vida e mana. Como no Shard, o texto exato do que ele upgrada no Tinker não está confirmado localmente nem via fontes web nesta sessão.
- fonte: mediana de 8 dos 8 replays pro do Tier1

#### Black King Bar (black_king_bar)
- minuto: 28:02
- porque: segura o disable em cadeia que travaria o canal do Rearm e da Keen Conveyance antes de fechar o combo.
- detalhe: dispel básico, 60% de resistência mágica e imunidade a dano puro e refletido por 9/8/7 segundos (nível 1 a 3), com qualquer efeito negativo de feitiço inimigo anulado durante a duração.
- contra: times com iniciação em cadeia (stun, silence, root) que, sem o BKB, interrompem o seu Rearm ou a sua Keen Conveyance no meio do canal.
- fonte: mediana de 6 dos 8 replays pro do Tier1; items.json

### Situacionais

#### Aether Lens (aether_lens)
- minuto: 33:07
- porque: estica o alcance de cast do Laser (600) e do Warp Flare (700), deixando você fora do alcance de resposta de quem tenta fechar em você.
- detalhe: +300 de mana, +2,5 de regen de mana e +225 de alcance de cast.
- contra: equipes que dependem de iniciação corpo a corpo ou de alcance curto pra te alcançar antes de você castar.
- fonte: 4 dos 8 replays pro do Tier1; items.json

#### Shiva's Guard (shivas_guard)
- minuto: 38:19
- porque: segura teamfight contra carry de ataque físico sustentado e ainda entra como fonte extra de dano em área.
- detalhe: Freezing Aura tira 45 de velocidade de ataque dos inimigos num raio de 1200; Arctic Blast causa 260 de dano mágico e reduz 40% de velocidade de movimento por 4 segundos num raio de 825.
- contra: carries de dano físico por ataque (velocidade de ataque alta) que precisam ficar perto de você ou do seu time pra bater.
- fonte: 5 dos 8 replays pro do Tier1; items.json

#### Scythe of Vyse (sheepstick)
- minuto: 31:46
- porque: trava o alvo que mais importa antes dele usar a ultimate dele, e destrói ilusão na hora.
- detalhe: Hex transforma o alvo num bicho inofensivo por 2,8 segundos, mudo, desarmado e silenciado; destrói ilusões instantaneamente.
- contra: heróis de ilusão (o Hex mata a ilusão de cara) e qualquer herói-chave que precisa ficar mudo e desarmado antes de fazer o que faria.
- fonte: 3 dos 8 replays pro do Tier1; items.json

#### Wind Waker (wind_waker)
- minuto: 52:34
- porque: te tira de uma skillshot ou de um disable de alvo único vindo em você, ou salva um aliado puxando ele pro cyclone.
- detalhe: Cyclone deixa o alvo (inclusive você mesmo) invulnerável por 2,5 segundos; dá ainda +35 de Int, +30 de velocidade de movimento e +3 de regen de mana.
- contra: picks que dependem de acertar um disable de alvo único ou um channel em você pra funcionar.
- fonte: 2 dos 8 replays pro do Tier1; items.json

#### Linken's Sphere (sphere)
- minuto: 36:54
- porque: anula a primeira magia de alvo único que vier em você antes de você conseguir reagir.
- detalhe: Spellblock bloqueia a maioria dos feitiços de alvo único uma vez a cada 14 segundos.
- contra: heróis com um disable de alvo único forte e pontual (point-and-click), porque o bloqueio reseta antes da próxima tentativa deles.
- fonte: 1 dos 8 replays pro do Tier1; items.json

#### Dagon (dagon)
- minuto: 14:12
- porque: soma dano instantâneo de alvo único ao Pure do Laser pra executar quem está com pouca vida antes de regenerar ou fugir.
- detalhe: comprado como alternativa à Kaya and Sange num dos replays, com upgrade progressivo (Dagon 2/3 mais tarde no mesmo jogo).
- contra: supports ou heróis squishy que precisam morrer rápido, antes do time deles reagir.
- fonte: 1 dos 8 replays pro do Tier1; items.json

## Combos

- Warp Flare prende o alvo por 2 segundos e reduz o alcance de cast e de ataque dele em 40%; dentro desses 2 segundos, Laser (0,4s de cast) e March of the Machines (0,53s de cast) saem livres de resposta, e o Rearm (canal de 2,75 a 1,25s conforme o nível, cooldown de 5,5 a 4,5s) devolve os três feitiços de uma vez pra repetir o giro antes do alvo se recompor. Fonte: constants_abilities.json (mecânica de cada habilidade).
- Blink Dagger (1200 de alcance) fecha a distância até dentro dos 700 do Warp Flare sem entrar no alcance de resposta do inimigo; lembrando que o Blink trava por 3s depois de tomar dano de herói, então use pra entrar, não pra sair depois de já estar sendo batido. Fonte: items.json.

## Roshan

Sem dado de Roshan solo.
