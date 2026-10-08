---
id: ficha-batrider
titulo: "Batrider"
heroi: Batrider
patch: 7.41
posicoes: [3, 4]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/resumo_por_heroi.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/lgd/hub.json
- C:/Users/felip/Desktop/dota-tier1/work/equipes/team-spirit/hub.json
- https://api.opendota.com/api/heroes/65/itemPopularity
- https://api.opendota.com/api/benchmarks?hero_id=65
- https://api.opendota.com/api/heroes/65/matchups
---

## Resumo

Batrider é iniciador e disabler: trava o alvo com Flaming Lasso (alcance de cast de só 200, mas atravessa BKB) depois de fechar distância com Firefly e marcar a área com Sticky Napalm. No 7.41 ele aparece como pos 3 (offlane) e como pos 4 (suporte de roaming); nos dados locais de tier 1, o Wisper jogou 13 partidas de pos 3 pela LGD com 62% de vitórias, e Batyuk somou 4 partidas de pos 3 e 4 de pos 4 com o herói pelo Team Spirit, confirmando as duas funções como reais (não achado único). No perfil público (OpenDota), o Blink Dagger é praticamente unânime (97 das partidas no corte de itens de meio de jogo) e o Aghanim's Scepter é o item tardio mais comprado (43), porque o herói precisa fechar o espaço de 200 do Lasso e depois sustentar o gasto de mana de um kit todo baseado em feitiços. Seus piores confrontos no banco de matchups público são contra mobilidade e escape: Ember Spirit (45,8% de WR pra ele em 155 jogos), Phoenix (47,3% em 146), Shadow Demon (47,9% em 163) e Storm Spirit (48,2% em 166), heróis que furam ou somem do alcance curto do Lasso antes dele travar.

## Pos 3 (offlane)

- quando pegar: quando a lane adversária não tem disable duro pra matar ele sozinho na solo lane e seu time precisa de um iniciador que também aguenta levar farm; o Wisper manteve 62% de vitórias em 13 jogos de pos 3 com o herói no recorte local de draft da LGD.
- itens iniciais: tango, branches, faerie_fire, circlet, quelling_blade

### Build

#### Botas de Tranquilidade (tranquil_boots)
- porque: cura e movimento sem gastar mana, pra sobreviver sozinho na offlane.
- detalhe: é a bota mais comprada do herói (72 contagens no corte de itens de início de jogo do OpenDota). O regen de 14 de vida e o bônus de velocidade quebram (Break) ao atacar ou ser atacado, então servem pra andar entre trocas, não pra ficar brigando parado. Isso mantém Batrider vivo contra o poke da lane enquanto ele estoca Sticky Napalm nos inimigos que passam perto.
- fonte: https://api.opendota.com/api/heroes/65/itemPopularity; items.json (tranquil_boots)

#### Blink Dagger (blink)
- porque: fecha a distância pra travar o alvo com o Lasso antes que ele reaja.
- detalhe: é o item mais comprado do herói em qualquer fase (97 contagens no corte de meio de jogo, muito acima de qualquer outro item). Como o Flaming Lasso tem alcance de cast de só 200, sem Blink ele depende quase inteiramente de Firefly pra chegar perto, o que avisa o inimigo com antecedência. Com Blink ele aparece do fog direto no alcance de travar.
- combo: Blink Dagger + Flaming Lasso no primeiro ponto do Lasso (disponível a partir do nível 6, como todo ultimate) trava o alvo por 2,25s; com o Lasso no nível máximo (3 pontos) sobe pra 3,25s, e com o talento de nível 25 (+0,75s de duração) chega a 4s de lockdown enquanto o time foca.
- fonte: https://api.opendota.com/api/heroes/65/itemPopularity; constants_abilities.json (batrider_flaming_lasso, special_bonus_unique_batrider_1)

#### Black King Bar (black_king_bar)
- porque: deixa ele ficar dentro da luta depois de iniciar, sem ser desarmado pelo primeiro disable que vier.
- detalhe: soma 65 contagens entre meio e fim de jogo no itemPopularity, o segundo item mais comprado do herói. O efeito Avatar aplica dispel básico e torna qualquer efeito negativo de feitiço inofensivo por 9s (exceto dano puro e refletido), então ele segura o Lasso mesmo levando stun, silence ou hex comuns durante a iniciação.
- contra: heróis cujo disable principal é stun, silence ou hex convencional (não atravessa imunidade a feitiço); não resolve contra o que é feito pra atravessar magic immunity.
- fonte: https://api.opendota.com/api/heroes/65/itemPopularity; items.json (black_king_bar)

#### Aghanim's Scepter (ultimate_scepter)
- porque: é o item tardio mais comprado do herói, dando status e mana pra repetir Lasso e Napalm sem secar.
- detalhe: 43 contagens no corte de itens de fim de jogo do itemPopularity, o maior número de qualquer item nessa fase. Dá +10 em todos os atributos e +175 de mana, o que sustenta o gasto de mana de Firefly (100), Flamebreak (110) e Flaming Lasso (125 a 175) numa luta longa. As fontes locais não trazem o texto de melhoria específica de herói do Aghanim's pra Batrider no 7.41 (constants_hero_abilities.json não lista nenhuma habilidade de scepter pro herói), então essa linha cobre só o efeito genérico confirmado do item.
- fonte: https://api.opendota.com/api/heroes/65/itemPopularity; items.json (ultimate_scepter); constants_hero_abilities.json (ausência de upgrade de scepter listado)

### Situacionais

#### Shiva's Guard (shivas_guard)
- porque: apaga o ataque básico de carries rápidos depois que o Lasso prende o time deles.
- detalhe: Freezing Aura tira 45 de velocidade de ataque de quem está perto (raio 1200) e Arctic Blast desacelera 40% em área de 825 por 4s. Aparece 16 vezes no corte de fim de jogo do itemPopularity.
- contra: carries e lineups de dano por auto-ataque (builds de velocidade de ataque), porque o kit de Batrider não tem resposta pra isso e Shiva's neutraliza a fonte de dano direto.
- fonte: https://api.opendota.com/api/heroes/65/itemPopularity; items.json (shivas_guard)

#### Anel do Basilisco (ring_of_tarrasque)
- porque: sustenta a vida baixa de Batrider (120 de base) contra poke na offlane sem gastar viagem à loja.
- detalhe: dá 12 de regeneração de vida contínua. 31 contagens no corte de meio de jogo do itemPopularity, entre os itens de meio de jogo mais comprados do herói.
- contra: lanes de poke e harass à distância, porque o regen compensa dano em pouca quantidade e frequente melhor que vida bruta de outros itens no mesmo preço.
- fonte: https://api.opendota.com/api/heroes/65/itemPopularity; items.json (ring_of_tarrasque)

#### Lotus Orb (lotus_orb)
- porque: devolve o feitiço de alvo único que tentaram usar nele antes de ele conseguir iniciar.
- detalhe: Echo Shell aplica um escudo de 5s que recasta a maioria dos feitiços de alvo direcionado de volta no conjurador, com dispel básico incluso. Aparece 12 vezes somando meio e fim de jogo no itemPopularity, claramente situacional.
- contra: heróis que dependem de um feitiço de alvo único de alto impacto pra abrir ou fechar a luta (hex, stuns de alvo único, silences de alvo único).
- fonte: https://api.opendota.com/api/heroes/65/itemPopularity; items.json (lotus_orb)

## Pos 4 (suporte de roaming)

- quando pegar: quando o time precisa de alguém saindo da lane pra criar abates no early game em vez de só defender a própria; pelo Team Spirit, Batyuk jogou Batrider 4 vezes de pos 4 (contra 4 de pos 3) no recorte local de draft, o que mostra a função como real e não só emergência de draft.
- itens iniciais: ward_dispenser, ward_observer, ward_sentry, tango, branches, magic_stick

### Build

#### Botas de Tranquilidade (tranquil_boots)
- porque: dá velocidade pra alcançar lanes e rotações sem gastar a mana que já falta no early de suporte.
- detalhe: mesma lógica da versão offlane: 72 contagens no corte de início de jogo do itemPopularity, cura 14 de vida e quebra ao entrar em combate (Break), então serve pra se mover entre ganks, não pra brigar parado.
- fonte: https://api.opendota.com/api/heroes/65/itemPopularity; items.json (tranquil_boots)

#### Tambor de Resistência (ancient_janggo)
- porque: dá velocidade de ataque e movimento pro grupo no gank, essencial pra quem sai da lane pra rotacionar.
- detalhe: soma 61 contagens entre início e meio de jogo (25 + 36) no itemPopularity, um dos itens de suporte mais comprados do herói. O bônus de 13% de velocidade e 35 de ataque dura 6s em raio de 1200, o suficiente pra alcançar um alvo fugindo até ele entrar no alcance de 200 do Lasso.
- combo: Tambor + Firefly fecha a distância de um alvo fugindo rápido o bastante pra entrar no alcance do Lasso antes que ele chegue numa zona segura.
- fonte: https://api.opendota.com/api/heroes/65/itemPopularity; items.json (ancient_janggo)

#### Blink Dagger (blink)
- porque: transforma uma rotação de suporte em abate garantido, fechando a distância antes do inimigo perceber.
- detalhe: mesmo item quase unânime da versão offlane (97 contagens no corte de meio de jogo). Pro suporte que já não tem o farm do offlaner, é o item que paga o preço de entrar sozinho numa rotação: sem ele, o alcance de 200 do Lasso exige Firefly, que avisa o inimigo primeiro.
- fonte: https://api.opendota.com/api/heroes/65/itemPopularity; constants_abilities.json (batrider_flaming_lasso)

#### Bastão de Resistência (boots_of_bearing)
- porque: troca status pessoal por aura de luta em grupo, o papel certo pra quem já não é o dano principal do time.
- detalhe: upgrade do Tambor de Resistência, soma 44 contagens entre meio e fim de jogo (31 + 13) no itemPopularity. Dá +50 de ataque e +15% de velocidade por 6s em raio de 1200, com imunidade a lentidão nos primeiros 1,5s, ajudando o time a alcançar ou fugir junto durante o combo do Lasso.
- fonte: https://api.opendota.com/api/heroes/65/itemPopularity; items.json (boots_of_bearing)

#### Aghanim's Scepter (ultimate_scepter)
- porque: mesma lógica da versão offlane (ver Pos 3): mana e status pra repetir Lasso e Napalm numa luta longa.
- detalhe: 43 contagens no corte de fim de jogo do itemPopularity, o item tardio mais comprado do herói independente de posição.
- fonte: https://api.opendota.com/api/heroes/65/itemPopularity; items.json (ultimate_scepter)

### Situacionais

#### Cajado da Força (force_staff)
- porque: reposiciona um aliado pra fora de alcance ou empurra Batrider mais perto do alvo quando os 200 de alcance do Lasso não chegam.
- detalhe: empurra qualquer unidade 600 de distância na direção que ela está olhando. 56 contagens somando meio e fim de jogo no itemPopularity, comum mesmo sendo situacional.
- contra: combos de burst de curto alcance, porque o empurrão de 600 tira o alvo da zona de perigo antes do segundo golpe do combo adversário.
- fonte: https://api.opendota.com/api/heroes/65/itemPopularity; items.json (force_staff)

#### Lente Etérea (aether_lens)
- porque: estica o alcance de cast do Lasso e do Napalm pra ele travar o alvo sem precisar entrar no meio da luta primeiro.
- detalhe: dá 225 de alcance de cast a mais, 300 de mana e 2,5 de regeneração de mana. 18 contagens somando meio e fim de jogo no itemPopularity.
- fonte: https://api.opendota.com/api/heroes/65/itemPopularity; items.json (aether_lens)

#### Black King Bar (black_king_bar)
- porque: evita que ele morra pro primeiro disable antes de soltar o Lasso quando entra sozinho numa rotação de suporte.
- detalhe: mesmo efeito Avatar da versão offlane (dispel básico, 60% de resistência mágica e imunidade a efeito negativo de feitiço por 9s). Como suporte ele costuma chegar com menos vida que o offlaner, então o item vira resposta a ser focado primeiro, não item padrão de toda partida.
- contra: heróis cujo disable principal é stun, silence ou hex convencional.
- fonte: https://api.opendota.com/api/heroes/65/itemPopularity; items.json (black_king_bar)

## Roshan

Sem dado de Roshan solo.
