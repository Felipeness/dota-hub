---
id: confrontos-broodmother
heroi: Broodmother
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/broodmother.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tusk.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/rubick.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/jakiro.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/hoodwink.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/disruptor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ursa.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/dragon_knight.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tiny.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/queenofpain.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ogre_magi.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/shadow_demon.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ember_spirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/furion.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- https://api.opendota.com/api/constants/aghs_desc
---

## Como ler esta página

Os placares vêm do OpenDota `/heroes/61/matchups` filtrado pra partidas de liga (pro), patches 7.40 e 7.41. O "ele" ganha quando o % de vitória da Broodmother é menor que 50, o "você" ganha quando é maior. Os timings de item são medianos de partidas de pro (não suas), vindos de `pro_dados/<slug>.json`.

A Broodmother tem 328 partidas de pro na amostra, GPM 642 e XPM 782 (`broodmother.json`, resumo). O caminho de item dela, pela mediana das 328 partidas: Wraith Band pronto aos 1:54, Power Treads aos 6:36, Soul Ring aos 7:36, depois Yasha aos 13:54 e Diadem aos 15:06 formam a Manta Style aos 17:36 (Yasha e Diadem são os componentes oficiais da Manta, `items.json`). Orchid Malevolence sai aos 15:00 (mediana, p25 13:00) e o Black King Bar aos 24:06 (`broodmother.json`, itens).

---

## Contra Tusk (tusk)

- placar: 37 vitórias em 59 jogos de pro, 62,7% pra Broodmother (`broodmother.json`, confrontos, hero_id 100).
- por que importa: é o confronto com mais jogos registrados no banco (59), mesmo sem lane em comum. Tusk é offlane/suporte flexível, pickado contra times de Brood justamente pelo gapclose com Blink Dagger pra caçar ela fora da web.
- janelas: até os 15min cada um na sua rota, você farmando e ele de suporte (wards medianas aos 18-20min, `tusk.json`). A partir dos 19min (Blink Dagger mediano, p25 16:48) ele passa a poder iniciar em cima de você longe da sua equipe. Depois dos 24min seu BKB (24:06) já está pronto e o combo de controle dele perde força.
- o que ele faz com você: Blink + Ice Shards pra te cercar fora da teia, sem rota de fuga; Snowball te puxa pro meio do time dele se ele te pegar sozinha. Walrus Punch (ult) é um stun físico pesado que atravessa a sua baixa vida.
- o que você faz com ele: ficar na teia nega o blink preciso dele (ele precisa te ver pra mirar); com BKB ativo o combo de Ice Shards não trava mais nada e você troca limpo, já que ele não tem muito dano de longo prazo.
- itens que viram: Black King Bar (24:06) anula o combo de controle; Manta Style (17:36) cria confusão pro blink dele logo antes da sua própria BKB ficar pronta.
- como jogar: evite ficar parada fora da web perto de fog dele depois dos 16min. Se tiver BKB, procure o troca-troca direto, ele não aguenta seu DPS sem o controle.
- fonte: broodmother.json (confrontos, itens); tusk.json (itens).

---

## Contra Rubick (rubick)

- placar: 30 vitórias em 53 jogos de pro, 56,6% pra Broodmother (`broodmother.json`, hero_id 86).
- por que importa: 2º lugar em volume de jogos de pro (53). Suporte global, não compartilha lane com você, mas é pick comum em qualquer draft que precisa resposta pra pick-off e pra ultimates fortes.
- janelas: ele farma devagar (arcane boots aos 10:18) até o Blink Dagger aos 21:36, que é quando ele passa a conseguir se posicionar perto o bastante pra um Telekinesis em você. Aghanim's Shard (27:00) e Ultimate Scepter (27:24) são itens de jogo tardio, bem depois da sua BKB (24:06).
- o que ele faz com você: Telekinesis te joga longe da teia ou pro meio do time dele; se você usar Insatiable Hunger ou Spawn Spiderlings perto dele, Spell Steal pode copiar a habilidade (embora o valor real do roubo dependa do resto da composição dele). Fade Bolt aplica um debuff que reduz seu dano de ataque e de feitiço por alguns segundos, enfraquecendo sua resposta logo na troca seguinte.
- o que você faz com ele: ele não tem vida nem mobilidade própria sem Blink; se você pegar ele fora de posição antes dos 21min, ele morre rápido pro seu combo de ataque.
- itens que viram: Black King Bar (24:06) evita o fling do Telekinesis virar punição de time inteiro; evitar lançar Spawn Spiderlings perto dele quando ele ainda não gastou Spell Steal.
- como jogar: nas primeiras fases do jogo, antes do Blink dele (21:36), ele não ameaça seu split push. Depois disso, cheque fog perto das suas rotas antes de ficar parada.
- fonte: broodmother.json (confrontos); rubick.json (itens).

---

## Contra Jakiro (jakiro)

- placar: 20 vitórias em 49 jogos de pro, 40,8% pra Broodmother, uma das piores marcas dela entre os confrontos de alto volume (`broodmother.json`, hero_id 64).
- por que importa: 3º lugar em jogos de pro (49) e dentro dos piores números dela com amostra grande. Suporte de área que te tira do camp mesmo sem lane em comum.
- janelas: arcane boots dele aos 11:42, depois ele escala devagar até Force Staff (26:12) e Glimmer Cape (22:48). O nível 6 dele (Macropyre) é o verdadeiro spike, não um item: assim que ele tem ultimate, qualquer camp ou onda que você está limpando vira zona proibida por ~8s.
- o que ele faz com você: Macropyre queima a área onde você está farmando e te obriga a sair ou morrer queimada; Ice Path trava você fora da teia pro resto do combo do time; Dual Breath já reduz sua velocidade de movimento e aplica dano contínuo na troca inicial.
- o que você faz com ele: ele não tem mobilidade nenhuma. Se você pegar Orchid Malevolence nele (Soul Burn, silence de 5s, `items.json`), ele não consegue nem fugir nem castar; fora de combo, Spawn Spiderlings sozinhas limpam onda contra ele sem risco.
- itens que viram: Orchid Malevolence é o pick-off claro contra ele (sem fuga própria); Black King Bar (24:06) ignora Macropyre e Ice Path quando ele finalmente alcança sua rota.
- como jogar: depois que o time dele tiver nível 6, reforce exploração de visão antes de plantar numa área nova; se conseguir isolar o Jakiro fora de posição, é kill garantido com Orchid.
- fonte: broodmother.json (confrontos); jakiro.json (itens).

---

## Contra Hoodwink (hoodwink)

- placar: 27 vitórias em 49 jogos de pro, 55,1% pra Broodmother (`broodmother.json`, hero_id 123).
- por que importa: empatada em 3º lugar em volume de jogos (49). Suporte com trap e root que mira justamente quem gosta de ficar fora de vista.
- janelas: ela sobe devagar, arcane boots aos 12:12, Aghanim's Shard aos 23:48 e Force Staff aos 26:06. O risco maior dela não é farm, é posicionamento de Bushwhack cedo, e o Sharpshooter em qualquer ponto do jogo depois do nível 6.
- o que ele faz com você: Bushwhack plantado perto de um camp ou de uma entrada de teia te stuna e te prende assim que você pisa fora da web; Acorn Shot aplica slow à distância, sem precisar de ângulo. Sharpshooter é uma execução de longo alcance que te deleta se você estiver sem BKB e com vida baixa.
- o que você faz com ele: Scurry é ativa (2 cargas, cast instantâneo), não passiva, então se você pegar ele de surpresa antes de ele conseguir usar, ele não escapa fácil. Sem blink ou disable rápido pra te travar sozinho, Hoodwink depende de ambiente (bushes/traps) pra te punir.
- itens que viram: Black King Bar (24:06) evita que o Sharpshooter te mate de longe sem reação; Orchid silencia antes de ele canalizar o ultimate.
- como jogar: olhe o chão (farming bushes e entradas de web) antes de entrar, Bushwhack é invisível. Se ele começar a canalizar Sharpshooter, feche distância ou use BKB, o cast é longo.
- fonte: broodmother.json (confrontos); hoodwink.json (itens).

---

## Contra Disruptor (disruptor)

- placar: 28 vitórias em 42 jogos de pro, 66,7% pra Broodmother (`broodmother.json`, hero_id 87).
- por que importa: empatado em 5º/6º lugar em volume (42 jogos) e uma das suas melhores taxas entre os confrontos com 30+ jogos. Suporte que deveria te revelar na web, mas na prática não trava sua fuga.
- janelas: o blink dele (24:00) é o mais tardio entre os suportes deste lote (19:00 do Tusk, 21:36 do Rubick), saindo quase junto do seu BKB aos 24:06; as arcane boots (11:24) não são as mais lentas, isso fica com o Hoodwink (12:12). Ele não tem spike de farm, depende do nível do seu ultimate real, Static Storm (Kinetic Field é a habilidade normal que cria a redoma, não o ultimate).
- o que ele faz com você: Thunder Strike marca você com dano periódico e te revela mesmo invisível na teia, tirando seu esconderijo; Glimpse te teleporta de volta pra posição de alguns segundos atrás, anulando um walk de fuga; Kinetic Field cria uma redoma que impede qualquer saída, te prendendo com o time dele lá dentro.
- o que você faz com ele: ele não tem blink antes dos 24min e não tem dano de verdade sozinho. Se ele gastar Glimpse ou Kinetic Field fora de hora, ele fica sem resposta pro resto da luta.
- itens que viram: Black King Bar (24:06) ignora o Thunder Strike e reduz o impacto do Kinetic Field (você ainda fica presa na redoma, mas o time dele precisa converter sem outro controle); Orchid cala ele antes do Kinetic Field.
- como jogar: Thunder Strike tira sua vantagem de ficar escondida, então trate a marca como alerta pra sair da área. Fora da redoma do ultimate, ele não ameaça sozinho.
- fonte: broodmother.json (confrontos); disruptor.json (itens).

---

## Contra Shadow Fiend (nevermore)

- placar: 20 vitórias em 42 jogos de pro, 47,6% pra Broodmother (`broodmother.json`, hero_id 11).
- por que importa: mesma posição principal (carry, `heroes.json`), um dos carries mais jogados contra ela em pro mesmo sem dividir lane sempre, e GPM altíssimo (658, `nevermore.json` resumo) que rivaliza o seu (642).
- janelas: até os 10min ele já tem Mask of Madness (10:12) pra farmar e trocar rápido; Yasha sai aos 13:18, bem perto do seu Yasha (13:54, `broodmother.json`), então até aí o farm dos dois é parecido. Dos 18 aos 25min ele escala com Força Staff (22:30) e Hurricane Pike (23:00), mas sua Manta (17:36) já virou vantagem de clone bem antes disso; o Black King Bar dele (25:12) sai depois do seu (24:06).
- o que ele faz com você: Shadowraze não tem cast point, três opções de alcance, e te deleta se você estiver parada perto dele em qualquer uma das três distâncias; Necromastery acumula alma a cada kill (inclusive suas spiderlings) e aumenta o dano do Requiem of Souls; o Requiem em si (ult) bate em anéis ao redor dele e ignora teia.
- o que você faz com ele: ele tem pouca vida e nenhuma mobilidade real fora do Hurricane Pike tardio (23:00). Se você pegar ele isolado antes do nível 6, ele não tem resposta.
- itens que viram: Black King Bar dos dois lados decide quem inicia a troca primeiro; Orchid silencia antes de ele conseguir alinhar um Shadowraze.
- como jogar: nunca fique parada nas três distâncias de Shadowraze perto de nível 6+ dele. Se conseguir isolar ele cedo (antes dos 10-13min), é a sua janela de maior vantagem.
- fonte: broodmother.json (confrontos); nevermore.json (itens, resumo); heroes.json (papéis).

---

## Contra Ursa (ursa)

- placar: 21 vitórias em 37 jogos de pro, 56,8% pra Broodmother (`broodmother.json`, hero_id 70).
- por que importa: mesma posição principal (carry), o confronto clássico de "quem farma mais rápido" entre dois duelistas agilidade, com GPM muito parecido (Ursa 624, Broodmother 642, resumos dos dois arquivos).
- janelas: Ursa sai na frente com Battle Fury aos 13:42 (`ursa.json`), que limpa onda e camp em bloco físico; você responde com Manta pronta aos 17:36, cobrindo duas a três rotas ao mesmo tempo via web. Até os 13min ele clareia mais rápido (Battle Fury puro), dos 13 aos 17min você ainda está montando Yasha/Diadem; depois disso sua cobertura de mapa via ilusões supera o clear sozinho dele. Blink dele sai aos 16:48, Basher aos 22:30 (rumo a Abyssal, pronto aos 32:54) e seu BKB sai primeiro, aos 24:06 contra o dele aos 24:24.
- o que ele faz com você: Earthshock salta e desacelera numa área, cortando sua rota de fuga pela teia; Fury Swipes empilha dano a cada acerto seguido no mesmo alvo, te mata rápido num 1x1 corpo a corpo direto; Enrage (ult) dá 80% de redução de dano e 50% de resistência a status por alguns segundos, com dispel forte que remove qualquer debuff já aplicado nele (não é mais imunidade mágica nem lifesteal, como era em patches antigos).
- o que você faz com ele: ele não tem fuga própria sem Blink (16:48); se você tirar ele de alcance de farm antes disso ou pegar ele fora de posição, ele não acompanha. Orchid antes do Enrage ainda consegue silenciar ele, já que Enrage não dá imunidade mágica, só corta a duração do seu controle à metade.
- itens que viram: Orchid Malevolence lançado antes do Enrage ainda prende ele; Black King Bar decide o 1x1 corpo a corpo direto se os dois chegarem com ele pronto.
- como jogar: não dispute farm bruto com ele antes dos 13min, ele ganha essa corrida com Battle Fury. Depois da sua Manta, espalhe rotas pra ele não conseguir cobrir tudo sozinho.
- fonte: broodmother.json (confrontos, resumo); ursa.json (itens, resumo); heroes.json (papéis).

---

## Contra Dragon Knight (dragon_knight)

- placar: 22 vitórias em 35 jogos de pro, 62,9% pra Broodmother (`broodmother.json`, hero_id 49).
- por que importa: um dos carries/offlaners mais jogados contra ela em pro (35 jogos), com farm quase idêntico ao seu (LH aos 10min: DK 63, Broodmother 60, resumos dos dois arquivos).
- janelas: ele farma parecido até os 10min (LH próximo), ganha sustain de lane com Helm of Iron Will (11:30) e Armlet (13:18). O Blink dele sai aos 16:12, antes da sua Manta (17:36), então entre 16 e 17min ele pode engajar primeiro. Depois disso sua Manta cobre mapa melhor que o clear sozinho dele. Elder Dragon Form (ult) muda o tipo de ataque dele pra algo em área que limpa suas Spiderlings fácil.
- o que ele faz com você: Dragon Tail (stun corpo a corpo) te prende pro combo; Breathe Fire reduz o dano dos seus ataques (até 32% por 11s) numa área cheia de Spiderlings; Dragon Blood dá regeneração de vida e armadura (não resistência mágica) que empilha conforme ele sobe o nível da habilidade.
- o que você faz com ele: ele é lento sem Blink e, mesmo com ele, não tem burst de longa distância; se você pegar ele isolado fora de Dragon Blood estacado (poucos stacks), ele não aguenta troca.
- itens que viram: Black King Bar seu (24:06) ignora Dragon Tail; Orchid cala ele antes de qualquer engage.
- como jogar: evite trocar corpo a corpo direto quando ele já tiver Armlet e stacks de Dragon Blood altos. Prefira hit-and-run com Insatiable Hunger antes do Blink dele (16:12).
- fonte: broodmother.json (confrontos, resumo); dragon_knight.json (itens, resumo); heroes.json (papéis).

---

## Contra Tiny (tiny)

- placar: 13 vitórias em 32 jogos de pro, 40,6% pra Broodmother, uma das piores marcas dela com amostra grande (`broodmother.json`, hero_id 19).
- por que importa: mesma posição principal (carry, `heroes.json`) e desvantagem clara com 30+ jogos. Mesmo flexível pra suporte em parte da amostra (LH10 baixo, 44, `tiny.json` resumo), o combo dele é letal pra sua vida baixa.
- janelas: Blink Dagger dele sai aos 15:54, quase junto com a sua Manta (17:36), então a janela mais perigosa é entre o nível 6 dele e os seus primeiros 17min, antes de você ter clone pra dividir o risco. Depois do seu BKB (24:06) o combo físico dele perde a trava de stun, mas o dano de Toss continua.
- o que ele faz com você: Avalanche prende numa área e Toss arremessa um aliado (ou a própria árvore) causando dano em cima de você, o combo clássico "avalanche + toss" te deixa sem vida antes mesmo de reagir, já que você tem pouca vida base; Tree Grab aumenta o dano físico dele contra você.
- o que você faz com ele: ele depende do combo pra fazer dano de verdade; fora dele, Tiny sozinho não te ameaça tanto. Se você pegar ele sem ambas habilidades disponíveis, ele não tem resposta.
- itens que viram: Black King Bar (24:06) ignora o stun de Avalanche e reduz o dano mágico do combo; evitar ficar parada perto de árvores quando ele tem nível 6.
- como jogar: trate o combo dele como execução de curto alcance, mantenha distância ou web por perto pra sumir assim que ele aparecer. Depois da sua BKB, a troca fica mais segura.
- fonte: broodmother.json (confrontos, resumo); tiny.json (itens, resumo); heroes.json (papéis).

---

## Contra Queen of Pain (queenofpain)

- placar: 23 vitórias em 34 jogos de pro, 67,6% pra Broodmother, a sua melhor marca com amostra de 30+ jogos (`broodmother.json`, hero_id 39).
- por que importa: maior vantagem dela com amostra confiável. É um mid tradicional, sem lane direta, mas o dano mágico dela deveria em teoria furar sua vida baixa, só que os números de pro mostram o contrário.
- janelas: ela sobe rápido (Kaya aos 13:54, no mesmo minuto do seu Yasha, 13:54) e rusha Ultimate Scepter cedo pra pro, mediana de 23:30 (`queenofpain.json`), bem antes do normal pra esse item. Isso é logo antes da sua BKB (24:06), que é exatamente o item que neutraliza o combo dela.
- o que ela faz com você: Scream of Pain bate em área ao redor dela e pega suas Spiderlings junto; Shadow Strike com Scepter vira uma AoE de 375 de raio, então ela não precisa acertar você direto pra começar o dano; Sonic Wave (ult) é uma onda de dano pesado que, somada ao resto, costuma deletar alvos de pouca vida.
- o que você faz com ela: ela tem vida baixíssima e nenhum escape além do Blink inato de curto alcance; se você pegar ela fora de posição antes do combo completo, ela morre rápido pro seu ataque corpo a corpo.
- itens que viram: Black King Bar (24:06) anula Scream of Pain e Shadow Strike, mas não o Sonic Wave, que ignora imunidade mágica; mesmo com BKB pronto, respeite o alcance da ult dela.
- como jogar: não entre em visão dela sem BKB pronto ou quase pronto. Se ela errar o combo ou gastar o Blink cedo, é a sua chance de trocar.
- fonte: broodmother.json (confrontos); queenofpain.json (itens).

---

## Contra Ogre Magi (ogre_magi)

- placar: 22 vitórias em 34 jogos de pro, 64,7% pra Broodmother, 3ª melhor marca com amostra de 30+ jogos, atrás de Queen of Pain (67,6%) e Disruptor (66,7%) (`broodmother.json`, hero_id 84).
- por que importa: suporte sem lane direta, mas aparece com frequência boa em pro contra ela e tem uma das vantagens mais altas dela na lista.
- janelas: ele é devagar, arcane boots aos 11:12, e às vezes rusha Hand of Midas (18:54), sinal de que em pro ele é jogado quase como farmador de suporte em vez de puro disable. Isso significa menos presença de kill cedo contra você. Aghanim's Shard (26:06) e Glimmer Cape (22:30) são os itens de utilidade dele, ambos depois da sua Manta.
- o que ele faz com você: Fireblast stuna e dá dano, com chance de multicast dobrar o stun; Bloodlust pode acelerar o clear de um aliado perto de você, mas não ameaça seu 1x1 direto; o Aghanim's Shard dele cria um escudo em aliado que absorve ataques e revida com bola de fogo, então ele pode proteger quem você está perseguindo.
- o que você faz com ele: ele tem pouca mobilidade e menos dano de área que os outros suportes da lista. Se você pegar ele isolado, ele não sobrevive ao seu burst.
- itens que viram: Orchid cala o Fireblast antes do multicast; Black King Bar ignora o stun dele por completo.
- como jogar: ele é mais perigoso protegendo um aliado (com o Shard) do que te caçando sozinho. Foque o alvo que ele está blindando ou espere o escudo cair.
- fonte: broodmother.json (confrontos); ogre_magi.json (itens).

---

## Contra Shadow Demon (shadow_demon)

- placar: 13 vitórias em 38 jogos de pro, 34,2% pra Broodmother, a pior marca dela entre os confrontos com amostra de 30+ jogos (`broodmother.json`, hero_id 79).
- por que importa: maior desvantagem registrada com amostra de 30+ jogos. É o contador mais claro: o ultimate dele apaga justamente o que sustenta seu 1x1.
- janelas: ele sobe devagar em item (arcane boots 11:18, Blink Dagger 23:54, Aghanim's Shard 25:24), mas o spike dele é de habilidade, não de item: a partir do nível 6 ele já carrega a resposta pro seu combo inteiro.
- o que ele faz com você: Demonic Purge (ult) dispela qualquer buff seu, incluindo o bônus de dano do Insatiable Hunger e os efeitos da Manta, e ainda aplica um slow pesado que tira sua fuga pela teia, tudo isso causando dano ao longo do efeito; Disruption consegue banir você ou um aliado perto de você do combate por alguns segundos, te tirando da luta sem gastar stun; Shadow Poison empilha dano à distância sem precisar reaplicar visão.
- o que você faz com ele: ele tem pouca vida e nenhuma fuga própria antes do Blink (23:54). Se você conseguir isolar ele cedo, ele não aguenta sua troca.
- itens que viram: Black King Bar (24:06) não impede o Demonic Purge de te acertar (ele ainda remove buff e aplica slow), mas evita o dano extra e o dispel de itens ativos como o próprio BKB caso ele chegue depois; o melhor plano real é nunca deixar ele confirmar visão em cima de você pra castar o ultimate.
- como jogar: trate presença dele como sinal pra não se comprometer em luta prolongada, o Demonic Purge sozinho já desmonta seu combo. Prioridade de kill nele sempre que possível antes do nível 6 dele.
- fonte: broodmother.json (confrontos); shadow_demon.json (itens); constants_hero_abilities.json; aghs_desc (Shadow Demon).

---

## Contra Ember Spirit (ember_spirit)

- placar: 13 vitórias em 30 jogos de pro, 43,3% pra Broodmother, amostra no limite mínimo (30 jogos) e desvantagem (`broodmother.json`, hero_id 106).
- por que importa: mesma ideia de farm rápido e mobilidade alta, outro "quem caça quem" sem lane fixa. GPM dele é 558 (`ember_spirit.json` resumo), menor que o seu, mas a mobilidade dos dois é parecida (web contra Fire Remnant).
- janelas: ele monta sustain de rota cedo com Urn of Shadows (7:18) e Spirit Vessel (12:48), depois escala pra Kaya (19:12) e BKB (27:06), mais tarde que o seu (24:06). Ele compra Aghanim's Shard relativamente cedo (25:18), que recarrega carga de Fire Remnant quando um herói inimigo morre perto dele, incentivando ele a te caçar ativamente em vez de só farmar.
- o que ele faz com você: Searing Chains prende você e unidades próximas (até 2 alvos) numa área de 400 de raio, interrompendo qualquer canalização ou fuga pela teia; Sleight of Fist dá um dash que ataca todos os heróis próximos na área, puro burst físico; Flame Guard absorve dano mágico (não trava seu ataque físico nem o das Spiderlings) e causa dano em área enquanto está ativo.
- o que você faz com ele: ele tem pouca vida própria e depende do Remnant pra escapar; se você cortar o caminho dele até o remnant ou pegar ele sem a passiva de escudo (Flame Guard) ativa, ele não aguenta sua troca.
- itens que viram: Black King Bar ignora o Searing Chains; Orchid trava ele antes de detonar um Fire Remnant de fuga.
- como jogar: cheque onde estão os Fire Remnants dele antes de engajar, é a rota de fuga dele. Se não tiver remnant por perto, é a sua janela.
- fonte: broodmother.json (confrontos, resumo); ember_spirit.json (itens, resumo).

---

## Contra Nature's Prophet (furion)

- placar: 16 vitórias em 25 jogos de pro, 64,0% pra Broodmother, amostra pequena (25 jogos, abaixo do corte de 30) (`broodmother.json`, hero_id 53).
- por que importa: é o espelho mais direto da sua estratégia. Os dois são carries de split push que dominam várias rotas ao mesmo tempo em vez de brigar numa lane só, e o GPM dele em pro (652, `furion.json` resumo) é o 2º mais alto de toda essa lista, atrás só do Shadow Fiend (658, `nevermore.json`) e acima do seu (642).
- janelas: ele constrói farm puro cedo com Maelstrom (12:12) e Mjollnir (16:24), rivalizando sua Manta (17:36) como pico de clear. A diferença real não é item, é alcance de mapa: Teleportation dele tem custo de mana baixo e recarga curta, te deixando ele puxar uma rota inteira longe de onde você está enquanto Nature's Call ainda farma outra sozinha.
- o que ele faz com você: Sprout te prende numa jaula de árvores (ou te separa do time dele), negando sua rota de fuga pela teia; Nature's Call solta treants que ajudam a limpar sua rota mais rápido que você sozinha; se ele tiver Aghanim's Shard (22:06, `furion.json`), a maldição dele causa dano em área baseado em árvore próxima, favorecendo ele em mapa aberto.
- o que você faz com ele: ele tem pouquíssima vida e nenhuma defesa própria contra ataque direto; se você alcançar ele fisicamente antes de Sprout ou Teleportation, ele morre rápido.
- itens que viram: Orchid é o pick cedo ideal contra ele, o silence tira a chance de ele dar Teleportation ou Sprout de saída; Black King Bar ajuda menos aqui, o problema real é alcançar ele, não sobreviver ao combo dele.
- como jogar: isso não é uma luta, é uma corrida de mapa. Se o seu time conseguir forçar ele a defender em vez de farmar, você ganha a troca de recursos; se ele conseguir ficar livre pra fazer rota com Nature's Call, ele puxa a corrida de farm.
- fonte: broodmother.json (confrontos, resumo); furion.json (itens, resumo).
