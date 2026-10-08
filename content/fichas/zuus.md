---
id: ficha-zuus
titulo: "Zeus"
heroi: Zeus
patch: 7.41
posicoes: [2]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroStats.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/1win/scripts/out/draft_herois.csv
- C:/Users/felip/Desktop/dota-tier1/work/equipes/aurora/tmp/draft_pre.csv
- https://api.opendota.com/api/heroes/22/itemPopularity
- https://dotacoach.gg/en/heroes/zeus/builds/mid
- https://dotacoach.gg/en/heroes/zeus/builds/support
- https://escorenews.com/en/dota-2/news/79930-dota-2-patch-7-41e-nerfs-snapfire-and-lone-druid-kills-divine-rapier-stacking-support-zeus
---

## Resumo
Zeus é um nuker de inteligência à distância cujo dano principal vem de feitiços (Arc Lightning, Lightning Bolt, Thundergod's Wrath), não do ataque básico, e isso é o que decide todo o resto da ficha: silence desliga o herói quase por completo (fonte: constants_abilities.json, nenhuma dessas três é "Attack Modifier"; só Lightning Hands é). No 7.41 o único dado de posição real que apareceu nas fontes consultadas foi pos 2 (mid), com 1 pick nessa posição no draft do 1win no Atlas (fonte: dota-tier1), e é a única posição com guia próprio do Dota Coach (o produto principal da página, com skills/itens de mid-game). A página de offlane do dotacoach cai de volta pro mesmo guia de mid, sem conteúdo próprio; já a página de support não cai de volta, ela embute um guia in-game separado (rotulado "7.41f | Support"), mas esse guia é um Steam Workshop comunitário de um jogador (niipferd), não um build validado por pro/Dota Coach, então não entra nesta ficha como fonte de posição. Existiu uma linha de "Zeus suporte que fica na fonte e stacka Divine Rapier" em patches anteriores do 7.41, mas o patch 7.41e tirou o empilhamento do bônus de amplificação de feitiço do Rapier (agora é um toggle de 25% que não acumula entre itens), o que matou essa estratégia (fonte: escorenews, patch 7.41e). Por isso esta ficha cobre só Pos 2.

## Pos 2 (mid)
- quando pegar: pegue como mid quando precisar de dano em área e global (Thundergod's Wrath acerta todos os heróis inimigos no mapa) para fechar rotação ou zerar um herói baixo de vida em qualquer lane; é a única posição com dado real de pick (1win, Atlas) e com guia de item/skill publicado (dotacoach).
- itens iniciais: tango, faerie_fire, branches, ward_observer

### Build
#### Bottle (bottle)
- porque: sustenta mana para spamar Arc Lightning na lane e guarda rune.
- detalhe: regenera 110 de vida e 60 de mana em 2,7s por carga (3 cargas, recarrega na fonte); guarda rune de poder por até 90s. O efeito é perdido se um herói ou Roshan te acerta.
- fonte: items.json

#### Arcane Boots (arcane_boots)
- porque: devolve 150 de mana pro time inteiro e resolve o maior problema do herói: mana pra castar.
- detalhe: +45 de velocidade de movimento, +125 de mana e a ativa "Replenish" recarrega 150 de mana num raio de 1200. Listado como item core do build de mid no dotacoach.
- fonte: items.json; dotacoach (mid)

#### Null Talisman (null_talisman)
- porque: inteligência e regen de mana baratos pra sair da lane castando.
- detalhe: +5 de inteligência, +2 de força e agilidade, +3% de mana máxima e +1 de regen de mana.
- fonte: items.json; dotacoach (mid)

#### Magic Wand (magic_wand)
- porque: carga de vida/mana de emergência contra poke, sem gastar slot de regen fixo.
- fonte: items.json; dotacoach (mid)

#### Kaya (kaya)
- porque: primeiro item que empurra o dano de feitiço de verdade (10% de amplificação).
- detalhe: +16 de inteligência, +10% de amplificação de feitiço e +30% de amplificação de regen de mana.
- combo: +10% de amp some direto no dano de Arc Lightning, Lightning Bolt e Thundergod's Wrath, que já são a fonte do dano do herói.
- fonte: items.json; dotacoach (mid)

#### Aghanim's Shard (aghanims_shard)
- porque: upgrade de habilidade por 1400, custo baixo pro que agrega no meio de jogo.
- detalhe: item genérico "upgrades an existing ability or adds a new ability" (1400g). As constantes locais não marcam explicitamente qual habilidade o Shard altera, mas a lore de Lightning Hands ("A helping hand from Aghanim lets the fallen Lord of Heaven tap into some of his old strengths") é o único indício nas fontes consultadas de uma habilidade ligada a um item Aghanim; essa habilidade (Attack Modifier) dá +30% de velocidade de ataque e faz o ataque básico criar um Arc Lightning em 50% do dano (20% contra ilusões) (fonte: constants_abilities.json). Não encontrei confirmação externa de que seja especificamente o Shard (sites consultados bloquearam o fetch: dota2 fandom, Liquipedia, Dotabuff, Stratz retornaram erro), então trato a ligação Shard→Lightning Hands como não confirmada. Entra no build core de mid do dotacoach, comprado depois de Kaya.
- fonte: items.json; constants_abilities.json (lore de zuus_lightning_hands); dotacoach (mid)

#### Aghanim's Scepter (ultimate_scepter)
- porque: upgrade de ultimate, item core de mid-game no build.
- detalhe: item genérico "upgrades the ultimate, and some abilities, of all heroes" (4200g; +10 de todos os atributos, +175 de vida, +175 de mana, do item em si). Efeito específico que o Scepter dá pra Zeus não está nas constantes locais, e as fontes externas que tentei abrir pra confirmar (dota2 fandom, Liquipedia, Dotabuff, Stratz, dota2.com) retornaram erro de acesso nesta sessão, então não afirmo qual habilidade ele muda.
- fonte: items.json; dotacoach (mid)

#### Yasha and Kaya (yasha_and_kaya)
- porque: empilha a amplificação de feitiço (12%) com velocidade de ataque e de cast, sem perder o que o Kaya já dava.
- detalhe: +16 agilidade, +16 inteligência, +20 velocidade de ataque, +12% velocidade de movimento, +12% amplificação de feitiço, +25% velocidade de cast, +40% amplificação de regen de mana.
- fonte: items.json; dotacoach (mid)

#### Refresher Orb (refresher)
- porque: reseta todas as recargas, ou seja, dois Thundergod's Wrath na mesma luta.
- detalhe: zera o cooldown de todas as habilidades (recarga própria de 180s, só avança no inventário principal).
- combo: Thundergod's Wrath (300/475/650 de dano em todos os heróis inimigos, fonte: constants_abilities.json) duas vezes seguidas fecha lutas ou mata quem está escondido no mapa.
- fonte: items.json; dotacoach (mid); OpenDota itemPopularity (item id 110, o mais comprado no late game da amostra)

#### Octarine Core (octarine_core)
- porque: reduz recarga (25%) de tudo, incluindo o Thundergod's Wrath de 130s, e dá vida/mana pra sobreviver até castar de novo.
- detalhe: +25% de redução de recarga, +450 de vida, +450 de mana, +6 de regen de mana.
- fonte: items.json; dotacoach (mid)

#### Ethereal Blade (ethereal_blade)
- porque: desarma o alvo (não ataca) e já causa um dano mágico bem na hora de descarregar os feitiços.
- detalhe: converte o alvo pra forma etérea por 4s (não ataca, -80% de velocidade, toma no cast um dano mágico igual à soma dos seus atributos +50). Enquanto está etéreo o alvo recebe -30% em qualquer dano mágico bônus (não é um debuff que aumenta o dano mágico recebido; é o contrário, segundo items.json).
- combo: use antes de Arc Lightning/Lightning Bolt pra converter o bônus de atributo em dano mágico extra e ainda desarmar quem ia te bater.
- contra: alvos que dependem de ataque básico pra te matar (o item desarma o ataque deles por 4s).
- fonte: items.json; dotacoach (mid)

#### Divine Rapier (rapier)
- porque: luxo de late game puro, dano ou amplificação de feitiço num slot só.
- detalhe: toggle entre 25% de amplificação de feitiço ou 250 de dano de ataque; cai no chão pra qualquer um pegar quando você morre com ele; se um inimigo do dono original pegar o item, esse inimigo não pode mais soltá-lo de propósito, só volta ao chão se ele também morrer (fonte: items.json notes).
- contra: situação de late travado, quando o time já tem board control pra proteger quem carrega o item; desde o 7.41e o bônus de amplificação não empilha mais entre múltiplos Rapiers, o que fechou a antiga estratégia de Zeus suporte empilhando vários.
- fonte: items.json; dotacoach (mid); escorenews (patch 7.41e)

### Situacionais
#### Phylactery (phylactery)
- porque: baratinho (2600) e empurra o próximo feitiço de alvo único com dano e slow extra.
- detalhe: "Empower Spell": o próximo feitiço de alvo único dá +150 de dano separado e -30% de velocidade por 3s.
- combo: usa antes do Lightning Bolt pra empilhar o mini-stun do Bolt com o slow do item e ainda causar dano extra.
- contra: alvo que depende de velocidade de movimento pra fugir ou chegar na luta (o slow de 30% atrasa o engajamento ou a fuga).
- fonte: items.json

#### Khanda (angels_demise)
- porque: versão cara do mesmo efeito do Phylactery, mas desliga passiva do alvo também.
- detalhe: "Empower Spell": +250 de dano separado, desliga passivas e -30% de velocidade por 4s no próximo feitiço de alvo único.
- combo: mesma lógica do Phylactery com Lightning Bolt, mas o "disables their passives" apaga evasão, lifesteal ou qualquer passiva do alvo pelo tempo do efeito.
- contra: heróis cujo valor em luta depende de uma passiva forte (evasão, lifesteal, auto-cura): o item desliga essa passiva por 4s.
- fonte: items.json

#### Eul's Scepter of Divinity (cyclone)
- porque: escape ou abre janela de 2,5s de invulnerabilidade pra reposicionar sem gastar o Heavenly Jump.
- detalhe: joga a si mesmo ou um inimigo pro ar por 2,5s, invulnerável, 50 de dano mágico ao cair; dispel básico ao usar em si mesmo.
- contra: gap closer de melee que está prestes a te alcançar; o cyclone em si mesmo tira você da rota do dash/salto por 2,5s.
- fonte: items.json

#### Force Staff (force_staff)
- porque: empurra 600 de distância pra escapar de engage ou salvar um aliado, sem custo de mana alto.
- detalhe: empurra qualquer unidade-alvo 600 unidades na direção que ela está olhando.
- contra: heróis de iniciação corpo a corpo (empurra você fora do alcance do stun/gap closer deles).
- fonte: items.json

#### Aether Lens (aether_lens)
- porque: +225 de alcance de cast deixa Lightning Bolt e Arc Lightning saindo de fora do alcance de resposta do inimigo.
- detalhe: +300 de mana, +2,5 de regen de mana, +225 de alcance de cast (não empilha com o bônus de alcance do Dagon).
- contra: heróis que só têm alcance de engage curto (melee, nukes de alcance baixo): a distância extra de cast evita a troca corpo a corpo.
- fonte: items.json

#### Blink Dagger (blink)
- porque: reposiciona 1200 de distância quando o Heavenly Jump não alcança ou já foi usado.
- detalhe: teleporte de até 1200 unidades; trava por 3s após levar dano de herói ou Roshan.
- contra: inimigo que fecha distância rápido e ainda não bateu em você (depois do primeiro dano recebido o Blink trava, então é item de abertura de distância, não de fuga no meio da troca).
- fonte: items.json

#### Black King Bar (black_king_bar)
- porque: aplica dispel básico e bloqueia a maioria dos efeitos negativos de feitiço por 9s pra você conseguir ficar vivo e castar.
- detalhe: dispel básico, 60% de resistência mágica e bloqueia a maioria dos efeitos negativos de feitiço por 9s (reduz pra 8s na 2ª recompra e 7s na 3ª); não encontrei confirmação local ou externa de que bloqueie dano puro ou refletido, então removo essa parte.
- contra: silence, stun e hex de alvo único (o que mais desliga um herói que só tem dano em feitiço); não remove um disable que já está ativo em você.
- fonte: items.json

#### Linken's Sphere (sphere)
- porque: bloqueia de graça o primeiro nuke/disable de alvo único que abre a luta contra você.
- detalhe: bloqueia o próximo feitiço de alvo único a cada 14s.
- contra: combos que começam com um disable ou nuke único pra abrir a luta em cima de você (hex, silence pontual, nuke de alvo único).
- fonte: items.json

#### Aeon Disk (aeon_disk)
- porque: trava de sobrevivência automática quando leva burst e cai abaixo de 70% de vida.
- detalhe: dispel forte + 2,5s de +75% de resistência de status e dano recebido/causado zerado quando a vida cai abaixo de 70% por dano de jogador; recarga sobe a cada uso.
- contra: combo de burst de execução rápida (o disco aborta o kill e ainda zera o próprio Thundergod's enquanto ativo, então não use pra forçar a troca).
- fonte: items.json

#### Scythe of Vyse (sheepstick)
- porque: remove o alvo da luta por 2,8s (sem atacar, sem feitiço, sem passiva) pra focar outra ameaça.
- detalhe: transforma o alvo em criatura inofensiva por 2,8s (140 de velocidade base, silenciado, mudo e desarmado); destrói ilusão na hora.
- contra: o alvo com maior ameaça de combo/disable na luta inimiga, especialmente quem precisa castar pra virar o jogo.
- fonte: items.json

#### Boots of Travel (travel_boots)
- porque: Thundergod's Wrath já é global; o item libera Zeus pra farmar e defender torre em qualquer ponto do mapa sem perder tempo de rota.
- detalhe: bota de teleporte, listada como situacional de late no build de mid do dotacoach.
- fonte: items.json; dotacoach (mid)

## Roshan
Sem dado de Roshan solo.
