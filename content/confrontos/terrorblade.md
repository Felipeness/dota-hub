---
id: confrontos-terrorblade
heroi: Terrorblade
patch: 7.41
fontes:
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/terrorblade.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/slardar.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tusk.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/snapfire.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/hoodwink.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/nevermore.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/disruptor.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/ember_spirit.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/dark_seer.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/centaur.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/abaddon.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/alchemist.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/medusa.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/tiny.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/templar_assassin.json
- C:/Users/felip/Desktop/dota-hub-conteudo-novo/pro_dados/morphling.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- https://api.opendota.com/api/constants/aghs_desc
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois_catalogo.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/terrorblade.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/shadow_fiend.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/alchemist.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/medusa.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/tiny.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/templar_assassin.json
- C:/Users/felip/Desktop/dota-hub/app/public/data/herois/morphling.json
- C:/Users/felip/Desktop/dota-hub/content/porque_itens/terrorblade.md
---

## Como essa lista foi montada
Os 15 oponentes abaixo cobrem quatro critérios: (1) os 6 com mais jogos de pro contra o TB (Slardar, Tusk, Snapfire, Hoodwink, Shadow Fiend, Disruptor); (2) os carries da mesma posição principal mais jogados contra ele, mesmo sem dividir lane (Shadow Fiend, Ember Spirit, Tiny, Templar Assassin); (3) a maior vantagem do TB com 30 ou mais jogos (Alchemist), a segunda maior (Medusa) e três desvantagens relevantes também com 30 ou mais jogos (Dark Seer, Centaur Warrunner, Abaddon); (4) Morphling entra à parte como o exemplo citado pelo dono do site, outro hiper-carry late-game puro sem lane em comum. Cada bloco abaixo explica de novo, em uma frase, por que aquele herói específico está na lista.

## Contra Slardar (slardar)
- placar: Terrorblade venceu 122 de 221 partidas pro (55,2%). Maior volume de jogos contra o TB de toda a base.
- por que importa: mais jogos de pro contra o TB entre todos os oponentes; Slardar entra de offlane contra o safelane do TB, então os dois dividem a mesma lane na maioria das partidas.
- janelas: até o Blink do Slardar (13:18, pro_dados/slardar.json) ele depende só de Slithereen Crush + Bash of the Deep pra abrir, sem follow-up garantido; o Shard dele (17:12) passa a aplicar Corrosive Haze automático em todo Crush, bem no momento em que o TB está fechando Manta + Shard (15:00-16:00, herois/terrorblade.json), onde o DPS sozinho do TB salta de 171 pra 256; o Black King Bar do Slardar (25:06) chega 7-8 min antes da mediana do BKB do TB (32,5 min), janela em que ele pode furar o kit do TB em dive.
- o que ele faz com você: Corrosive Haze reduz até 20 de armadura e dá true sight por 18s (constants_abilities.json), amplificando o dano físico do time inteiro em cima do TB revelado; Slithereen Crush atordoa numa área de 325 e também acerta ilusões de Conjure Image por perto.
- o que você faz com ele: Manta Style dá um Basic Dispel ao ativar (porque_itens/terrorblade.md), limpando o lentidão do Corrosive Haze ou do Crush se acabaram de pegar; Dragon Lance mais a Metamorphosis 4/4 somam até 730 de alcance, fora do raio de 325 do Crush.
- itens que viram: o Shard do Slardar (17:12) é o item que mais aumenta a frequência do shred de armadura; do seu lado, Eye of Skadi (25:00-26:00) devolve a sobrevida que o Corrosive Haze tira, com +35 em tudo e lentidão própria pra dificultar o engage dele.
- como jogar: não troque sozinho com um Slardar de nível 6+ antes do seu próprio Manta; depois do Manta/Dragon Lance, jogue no alcance e deixe as ilusões absorverem o Corrosive Haze, que é single-target.
- fonte: pro_dados/terrorblade.json; pro_dados/slardar.json; constants_abilities.json (slardar_amplify_damage, slardar_slithereen_crush); aghs_desc (Slardar); app/public/data/herois/terrorblade.json (power_spikes); content/porque_itens/terrorblade.md (Manta, Dragon Lance, Eye of Skadi).

## Contra Tusk (tusk)
- placar: Terrorblade venceu 104 de 190 partidas pro (54,7%). 2º maior volume de jogos da base.
- por que importa: ganker que define o ritmo da lane antes dos 10 min, janela em que o TB não tem nenhum disable ou fuga além do Sunder, que troca vida, não evita o stun.
- janelas: Tusk não farma nos dados de pro (lh10 de 6 contra 66 do TB, pro_dados/tusk.json), gasta o ouro em wards, blink e TP; ele roda Snowball com suporte pra abrir em cima do TB sem resposta do nível 1 até o Manta; o Blink dele (19:00) reabre o combo Snowball + Walrus Kick mesmo contra um TB já farmado; o TB responde de verdade só depois do Manta (15:00-16:00), quando ilusões dividem o alvo do Snowball, que pega a unidade mais próxima dele.
- o que ele faz com você: Walrus Kick empurra 1200 de distância e atordoa (constants_abilities.json), resetando qualquer kite; Ice Shards cria uma barreira de 4 a 7s que bloqueia a rota de fuga do TB, que não tem blink ou dash próprio.
- o que você faz com ele: Sunder troca vida com qualquer aliado ou criatura em vida alta, então sobrevive ao all-in mesmo sem conseguir escapar fisicamente do Kick; depois do Manta, uma ilusão "rouba" o alvo do Snowball.
- itens que viram: o Blink Dagger do Tusk (19:00) é o item que mais reabre esse confronto; Black King Bar no TB (não é compra comum no top 30 do pro_dados dele, mas é a resposta citada no guia contra 3 ou mais controles) remove o Walrus Kick e o prendimento do Ice Shards.
- como jogar: não ande sozinho na lane sem visão de sentry ou rune contra um Tusk ativo; depois do Manta, mande uma ilusão pra outra lane pra forçar ele a escolher o alvo certo.
- fonte: pro_dados/terrorblade.json; pro_dados/tusk.json; constants_abilities.json (tusk_walrus_kick, tusk_ice_shards, tusk_snowball); app/public/data/herois/terrorblade.json (power_spikes); content/porque_itens/terrorblade.md (Black King Bar).

## Contra Snapfire (snapfire)
- placar: Terrorblade venceu 89 de 182 partidas pro (48,9%, equilibrado). 3º maior volume de jogos da base.
- por que importa: suporte que mais aparece zoneando a lane do TB à distância, entre os seis suportes do topo da lista por volume de jogos.
- janelas: a partir do nível 6 dela (~8-10min), Mortimer Kisses tem alcance mínimo de 600 e leva 5,5s pra disparar todos os globs (constants_abilities.json), tempo suficiente pra silenciar e zonear o TB na lane inteira antes de qualquer item relevante; o Shard dela (16:54, pro_dados/snapfire.json) gruda um segundo Mortimer Kiss no Firesnap Cookie, dobrando a pressão bem no momento em que o TB fecha Manta + Shard (15:00-16:00); depois disso o TB divide presença em duas lanes e ela não dá conta de pokar nas duas ao mesmo tempo.
- o que ele faz com você: Mortimer Kisses é um silêncio de longo alcance com dano em área, interrompe o próximo cast de Metamorphosis ou Sunder se pego no começo da animação; Scatterblast empurra o TB pra fora do alcance de last hit.
- o que você faz com ele: depois do Manta, as ilusões fazem o trabalho de farm numa lane enquanto o TB real evita ficar parado no alcance dela; Dragon Lance aumenta o alcance do TB pra trocar sem entrar no raio curto do Scatterblast.
- itens que viram: o Shard da Snapfire (16:54) é o item que mais aumenta a pressão de poke; do seu lado, Falcon Blade (7:00-8:00, +200 de vida e regen de mana) e Dragon Lance dão sobrevida e alcance pra aguentar até o Manta.
- como jogar: não force last hit parado contra Mortimer Kisses pronta; jogue mais recuado na lane até o nível 6 dela passar, e puxe o creep pra dentro da torre se o poke for recorrente.
- fonte: pro_dados/terrorblade.json; pro_dados/snapfire.json; constants_abilities.json (snapfire_mortimer_kisses, snapfire_scatterblast); aghs_desc (Snapfire); app/public/data/herois/terrorblade.json (power_spikes).

## Contra Hoodwink (hoodwink)
- placar: Terrorblade venceu 88 de 176 partidas pro (50,0%, totalmente equilibrado). 4º maior volume de jogos da base.
- por que importa: o suporte com o maior burst de longo alcance entre os oponentes listados, ameaça direta a um TB squishy sem item.
- janelas: a partir do nível 6 dela, Sharpshooter carrega até 3s e causa até 1350 de dano com break no alvo (constants_abilities.json), ameaça de kill mesmo com Power Treads prontas (5:00); Bushwhack prende perto de árvore e zera a visão do atingido, atrapalhando o farm; a partir do Manta (15:00-16:00), o TB consegue testar a posição dela com ilusão antes de se expor ao Sharpshooter, que é canalizado e visível.
- o que ele faz com você: Sharpshooter atravessa minions e aplica break, cortando a passiva Dark Unity (+60% de dano pras ilusões) por um tempo; Bushwhack reduz a visão do TB atingido a zero, dificultando reagir ao resto do combo.
- o que você faz com ele: Sharpshooter precisa de linha de visão e até 3s parado pra carregar o dano máximo; ilusões de Conjure Image forçam a Hoodwink a decidir em qual alvo carregar, e errar o real custa o cooldown inteiro da habilidade.
- itens que viram: o Scepter da Hoodwink deixa a flecha do Sharpshooter mais rápida e com slow maior (não reduz o tempo de carregamento), mas não aparece como compra comum nos dados de pro da heroína; do seu lado, Manta (15:00-16:00) é a resposta direta porque multiplica os alvos possíveis.
- como jogar: jogue com cuidado a partir do nível 6 dela, mantenha distância de árvores pra não tomar o Bushwhack parado, e evite correr em linha reta no alcance dela sem ilusão por perto.
- fonte: pro_dados/terrorblade.json; pro_dados/hoodwink.json; constants_abilities.json (hoodwink_sharpshooter, hoodwink_bushwhack); aghs_desc (Hoodwink); app/public/data/herois/terrorblade.json (power_spikes).

## Contra Shadow Fiend (nevermore)
- placar: Terrorblade venceu 78 de 171 partidas pro (45,6%, leve desvantagem). 5º maior volume de jogos e o carry/mid mais jogado contra o TB em pro.
- por que importa: corrida de farm direta entre dois hiper-carries físicos que raramente dividem lane (SF costuma ir mid), mas competem pelo mesmo papel de right-click de fim de jogo.
- janelas: SF farma mais rápido no começo, no mesmo instante em que o TB está no loop de Falcon Blade (7:00-8:00) ele já fechou Power Treads (7,0 min) e libera Requiem nível 1, com o 1º abate mediano dos pros aos 7,4 min (herois/shadow_fiend.json); ele sai da lane pra selva com Mask of Madness (10:00-11:00), dobrando o ritmo de last hit; o TB alcança um pico comparável só no Manta + Shard (15:00-16:00, DPS solo salta pra 256), contra o Manta + Dragon Lance de SF (15:30-17:00, DPS de ataque ~280, 416 com Feast); depois disso o TB farma mais rápido no total (701 de GPM contra 658, pro_dados) e assume a corrida até Skadi/Butterfly.
- o que ele faz com você: Shadowraze bate numa área de 250 na frente dele com um amplificador de dano por raze acumulado, pode limpar ilusões de Conjure Image alinhadas; Requiem of Souls (ultimate) causa medo em área, cortando o autoataque de ilusões e do TB real por até 2,15s.
- o que você faz com ele: ilusões espalhadas não dão alvo único pro Shadowraze, que é curto alcance; depois do Manta, o TB divide farm em duas lanes enquanto SF precisa ficar numa só pra acumular alma pro Requiem.
- itens que viram: o Scepter do SF faz o Requiem voltar e curar ele pelo dano causado (aghs_desc), um TB sem BKB que toma o Requiem ainda alimenta a sustentação dele; Black King Bar do TB segue sendo a resposta a esse combo, comprável antes da mediana (32,5 min) se o SF estiver muito à frente em alma.
- como jogar: não dê farm de graça ficando na mesma lane do nível 1 ao 6; depois do Manta, puxe a atenção dele pra uma ilusão enquanto você farma a outra lane; guarde Sunder pro combo Raze x3 + Requiem.
- fonte: pro_dados/terrorblade.json; pro_dados/nevermore.json; constants_abilities.json (nevermore_shadowraze1, nevermore_requiem); aghs_desc (Shadow Fiend); app/public/data/herois/shadow_fiend.json (power_spikes); app/public/data/herois/terrorblade.json (power_spikes).

## Contra Disruptor (disruptor)
- placar: Terrorblade venceu 86 de 160 partidas pro (53,8%). 6º maior volume de jogos da base.
- por que importa: o único suporte da lista com ferramentas desenhadas especificamente contra ilusão e item ativo, não só contra o herói.
- janelas: desde o nível 1, Glimpse mata ilusão na hora e devolve o TB real pra posição de 4s atrás (constants_abilities.json), cancelando split push ou fuga em qualquer minuto do jogo; a partir do nível 6, Static Storm silencia em área, e com Scepter muta itens, se ele itemizar Scepter, Manta e BKB do TB ficam inutilizáveis dentro da storm. Não existe uma janela em que o TB resolve isso só com farm, porque o counter é baseado em habilidade, não em timing de item.
- o que ele faz com você: Glimpse mata ilusão instantaneamente e puxa o TB real 4s pro passado, ótimo contra split push; Kinetic Field cerca o TB numa luta, isolando ele do time.
- o que você faz com ele: Glimpse tem alcance curto no nível 1 (600) e só chega a 1800 no nível 4, então farmar fora desse raio limita o puxão; dentro do silêncio de Static Storm nenhum cast funciona, nem Sunder, então a resposta real é distância do raio de 550, não item.
- itens que viram: Black King Bar no TB é a única saída de um silêncio em área de 6s, mas se o Disruptor tiver Scepter nem o BKB ajuda contra o mute de item, só distância resolve.
- como jogar: mande a ilusão mais devagar de propósito pra "gastar" o Glimpse dele longe da real; evite agrupar com o time dentro do alcance de 800 do Static Storm; se ele tiver Scepter, jogue pelo dano de ataque puro em vez de depender de Manta ou BKB durante a storm.
- fonte: pro_dados/terrorblade.json; pro_dados/disruptor.json; constants_abilities.json (disruptor_glimpse, disruptor_static_storm, disruptor_kinetic_field); aghs_desc (Disruptor).

## Contra Ember Spirit (ember_spirit)
- placar: Terrorblade venceu 48 de 126 partidas pro (38,1%, desvantagem considerável com boa amostra). Carry/mid mais jogado contra o TB depois do Shadow Fiend.
- por que importa: a maior amostra de desvantagem real do TB entre os carries (126 jogos), mesma posição principal, mas sem lane garantida, já que Ember costuma ir mid.
- janelas: farm inicial parecido (lh10 de 53 do Ember contra 66 do TB, 558 de GPM contra 701, pro_dados), o TB sai um pouco na frente no bruto; Ember fica relevante no mapa inteiro cedo, com Fire Remnant pra ganks em outras lanes a partir do nível 6; entre a Phase Boots dele (9:06, pro_dados/ember_spirit.json) e o Manta do TB (15:00-16:00), Ember pode punir o TB isolado farmando ilusão sem ninguém por perto; depois do Manta, o TB vira a ameaça real.
- o que ele faz com você: Sleight of Fist ataca todos os inimigos numa área e volta pro lugar de origem, limpa ilusões de Conjure Image numa tacada só e ainda causa dano bônus se o herói real estiver na área; Searing Chains prende o TB no lugar, cortando a rota de fuga.
- o que você faz com ele: Flame Guard do Ember absorve dano mágico, não físico, então o DPS de ilusão do TB, puro físico, não é reduzido por ela; depois do Manta, espalhar ilusões num raio maior que o da Sleight of Fist limita quantas ele limpa de uma vez.
- itens que viram: Manta (15:00-16:00) e Dragon Lance seguem sendo a resposta porque tiram o TB do alcance curto do Sleight of Fist, que exige ficar perto pra acertar.
- como jogar: evite deixar ilusões recém-criadas juntas numa área pequena enquanto o Ember tem Sleight disponível; depois do Manta, puxe ele pra perseguir uma ilusão enquanto você farma em segurança.
- fonte: pro_dados/terrorblade.json; pro_dados/ember_spirit.json; constants_abilities.json (ember_spirit_sleight_of_fist, ember_spirit_flame_guard, ember_spirit_searing_chains); app/public/data/herois/terrorblade.json (power_spikes).

## Contra Dark Seer (dark_seer)
- placar: Terrorblade venceu 19 de 54 partidas pro (35,2%). Maior desvantagem do TB entre as amostras de 50 ou mais jogos.
- por que importa: contra-pick clássico de split push e ilusão, Ion Shell é feito pra limpar exatamente o que o Conjure Image produz.
- janelas: Dark Seer não farma rápido nos dados de pro (Helm of the Dominator 8:48, pro_dados/dark_seer.json, focado em sustentar lane), fica trocando Ion Shell até fechar Ring of Tarrasque (18:36); só depois parte pra Platemail (21:42) e Blink (24:48) pra virar tanque de luta; o TB segue a curva normal até o Manta (15:00-16:00); entre o nível 6 do Dark Seer, quando libera Vacuum, e o blink dele (24:48), ele consegue agrupar o TB e as ilusões antes do TB ter alcance pra kitar.
- o que ele faz com você: Ion Shell é dano em área de raio 275 que limpa ilusão de baixa vida rápido e ainda farma os creeps dele mesmo; Vacuum puxa o TB e qualquer ilusão perto pro mesmo ponto, cancelando split push e forçando luta em grupo; Wall of Replica, se o TB cruzar, cria uma réplica dele pro lado do Dark Seer, o próprio kit de ilusão do TB pode virar arma contra ele.
- o que você faz com ele: ilusões cedo, antes do Ion Shell virar hábito de lane dele, ainda fazem dano, já que ele não tem outro item de área mágica além do shell; depois do Manta, abra duas frentes de farm fora do alcance de 800 do Ion Shell, porque ele não persegue rápido sem blink antes dos 24:48.
- itens que viram: Ion Shell é a habilidade que mais pesa nesse confronto, sem item do TB que a anule de forma direta; Manta (15:00-16:00) ainda ajuda porque multiplica alvo, mas não evita o dano em área do shell.
- como jogar: não deixe ilusão parada dentro de área de creep onde ele costuma jogar Ion Shell; depois do Manta, farme em lanes distantes da posição dele até ele ter blink; guarde Sunder pro Vacuum seguido de luta forçada.
- fonte: pro_dados/terrorblade.json; pro_dados/dark_seer.json; constants_abilities.json (dark_seer_ion_shell, dark_seer_vacuum, dark_seer_wall_of_replica); app/public/data/herois/terrorblade.json (power_spikes).

## Contra Centaur Warrunner (centaur)
- placar: Terrorblade venceu 31 de 89 partidas pro (34,8%). Maior amostra de desvantagem do TB entre todos os oponentes (89 jogos).
- por que importa: a passiva Retaliate pune especificamente o autoataque de ilusão, que é o motor de dano do TB.
- janelas: Centaur farma rápido pra ofensor nos dados de pro (Helm of the Dominator 8:48, Vanguard 8:30, Ring of Tarrasque 17:30, pro_dados/centaur.json), chegando tanque no meio-jogo antes do TB fechar Manta; o Blink dele (19:36) abre o Hoof Stomp em cima do TB; o TB só equilibra depois do Manta (15:00-16:00) e principalmente depois do Dragon Lance, quando passa a bater de longe e evita ficar perto do Retaliate.
- o que ele faz com você: Retaliate devolve dano fixo mais um percentual da força do Centaur em cada ataque sofrido, toda ilusão que ataca ele no corpo a corpo toma esse dano de volta e morre rápido, já que ilusão tem pouca vida; Hoof Stomp atordoa numa área de 325, pegando TB e ilusões juntos; Double Edge causa dano que escala com a força dele.
- o que você faz com ele: evitar que ilusões ataquem o Centaur no corpo a corpo é a regra número um, elas se matam sozinhas contra o Retaliate; a forma ranged da Metamorphosis ainda sofre o Retaliate se atacar de perto, então o ideal é focar outro alvo do time dele ou kitar com o alcance do Dragon Lance.
- itens que viram: Manta (15:00-16:00) ainda multiplica presença, mas use as ilusões pra farmar lane, não pra brigar com o Centaur; o Shard dele (upgrade do Double Edge) aumenta a força a cada herói acertado, então evitar o raio de 220 do Double Edge importa tanto quanto evitar o Retaliate.
- como jogar: nunca jogue onda de ilusão em cima do Centaur achando que "mais ataque é melhor", é o oposto; foque dano com o TB real, de longe, e use Sunder se o combo Stomp + Double Edge pegar o TB em vida baixa.
- fonte: pro_dados/terrorblade.json; pro_dados/centaur.json; constants_abilities.json (centaur_return, centaur_double_edge, centaur_hoof_stomp); aghs_desc (Centaur Warrunner); app/public/data/herois/terrorblade.json (power_spikes).

## Contra Abaddon (abaddon)
- placar: Terrorblade venceu 29 de 86 partidas pro (33,7%). Segunda maior amostra de desvantagem do TB (86 jogos).
- por que importa: sustentação que esgota justamente o tipo de dano que o TB aplica, várias instâncias pequenas de ilusão, não um burst único.
- janelas: nessa amostra de pro o Abaddon foge do caminho padrão de suporte e vai de Radiance (16:18, via Relic 13:42 + Talisman of Evasion 15:54, pro_dados/abaddon.json), farmando rápido e queimando ilusão que chega perto; a partir do nível 6 (~8-10min), Borrowed Time ativa sozinho sempre que a vida dele cai abaixo de 400, curando todo dano recebido por 4 a 6s (constants_abilities.json), o que neutraliza justamente a forma como o TB causa dano.
- o que ele faz com você: Borrowed Time converte qualquer sequência de dano sofrido em cura por alguns segundos, então estourar ele com ilusões sem matar antes da ativação é tempo desperdiçado; Radiance, se ele itemizar, queima as ilusões do TB que ficam perto tentando bater nele; Mist Coil vira nuke ou cura, flexível no 1x1.
- o que você faz com ele: Borrowed Time tem cooldown e threshold fixo de 400 de vida, é reativo, não permanente, então um burst único (Sunder seguido de ataque pesado) pode matar antes do threshold ativar de novo; evite deixar ilusões perto de um Abaddon com Radiance ativo, elas queimam rápido.
- itens que viram: o Scepter do Abaddon aumenta a duração do Borrowed Time e dispara Mist Coil automático em aliados que levam 550 ou mais de dano, ainda mais sustentação pro time dele (aghs_desc); do seu lado não existe item que remova a auto-cura do Borrowed Time, o caminho é evitar o 1x1 direto e focar outros alvos do time dele.
- como jogar: não gaste o combo todo tentando matar Abaddon sozinho, ele é feito pra sangrar seu tempo; se ele tiver Radiance, mande ilusões só pra testar presença, nunca pra ficar brigando perto dele.
- fonte: pro_dados/terrorblade.json; pro_dados/abaddon.json; constants_abilities.json (abaddon_borrowed_time, abaddon_death_coil); aghs_desc (Abaddon).

## Contra Alchemist (alchemist)
- placar: Terrorblade venceu 22 de 33 partidas pro (66,7%, amostra na faixa mínima de 30 jogos, mas é a maior vantagem do TB com esse corte).
- por que importa: dois carries sem lane em comum, Alchemist costuma farmar sozinho na própria lane ou jungle. É o exemplo citado pelo próprio dono do site: dois hard carries que decidem o jogo pela corrida de power spike, não pelo embate direto.
- janelas: Alchemist sai na frente na corrida de farm, Radiance pronto aos 14:18 (herois/alchemist.json), bem antes do Manta do TB (15:00-16:00); o GPM geral do Alchemist nessa amostra é 768 contra 701 do TB (pro_dados), ele realmente farma mais rápido; aos 19:36 ele derrete o primeiro Aghanim's Scepter num aliado (Greevil's Greed), acelerando o time inteiro. Apesar disso, o TB vence 66,7% dos confrontos registrados, o que sugere que o 1x1 direto, quando acontece, favorece o TB mesmo com o Alchemist mais rico.
- o que ele faz com você: Acid Spray reduz armadura em área (até -6) e causa dano contínuo, perto dele o TB perde parte do ganho de armadura de item; Chemical Rage dá regen e velocidade de ataque enormes por 30s (BAT 1,0 no nível 18), fazendo o Alchemist ganhar praticamente qualquer corpo a corpo prolongado contra um TB sem Manta.
- o que você faz com ele: ilusões de Conjure Image multiplicam o dano físico sem precisar de Chemical Rage pra compensar, e o Dragon Lance dá alcance que o Alchemist, puramente corpo a corpo, não responde; o Radiance dele também queima as próprias ilusões do TB que chegarem perto, então evite mandar ilusão em cima de um Alchemist com Radiance ativo.
- itens que viram: Radiance do Alchemist (14:18) é o item que mais acelera ele, mas também o que mais limpa ilusão que chegar perto; Manta (15:00-16:00) e Dragon Lance do TB seguem sendo a resposta porque tiram o combate do alcance curto dele.
- como jogar: não tente abreviar a corrida de farm brigando direto antes do Manta; depois do Manta e do Dragon Lance, teste o Alchemist à distância e deixe que ele gaste Chemical Rage à toa perseguindo ilusão.
- fonte: pro_dados/terrorblade.json; pro_dados/alchemist.json; constants_abilities.json (alchemist_chemical_rage, alchemist_acid_spray); aghs_desc (Alchemist); app/public/data/herois/alchemist.json (power_spikes); app/public/data/herois/terrorblade.json (power_spikes).

## Contra Medusa (medusa)
- placar: Terrorblade venceu 25 de 39 partidas pro (64,1%). Segunda maior vantagem do TB com 30 ou mais jogos.
- por que importa: outro hiper-carry de late game puro, sem lane em comum na maior parte das partidas, com curva de item quase idêntica à do TB.
- janelas: os dois seguem curvas parecidas, o Manta da Medusa sai aos 15:50 (herois/medusa.json) contra o Manta do TB aos 15:00-16:00, praticamente junto; depois disso, o Butterfly da Medusa fecha aos 23:20 (herois/medusa.json). A diferença real é o Stone Gaze, liberado no nível 6 dela: qualquer unidade, incluindo ilusão, que fica 2s encarando ela petrifica e toma até 55% de dano físico bônus.
- o que ele faz com você: Stone Gaze petrifica o TB e as ilusões que ficam encarando ela, com dano físico bônus em cima de quem petrificou; Mystic Snake pula entre alvos, até 6 saltos, causando dano crescente e rouba mana, perigoso pra um TB sem reserva de mana grande; Mana Shield absorve 98% do dano físico recebido enquanto ela tiver mana, e cada ataque de ilusão força um gasto de mana separado, independente do dano.
- o que você faz com ele: ilusões gastam o Mana Shield dela rápido justamente por isso, cada instância de ataque consome mana própria; fora do campo de visão contínua de 2s exigido pelo Stone Gaze, o TB ataca sem risco de petrificação.
- itens que viram: Manta (15:00-16:00) ajuda a esvaziar o Mana Shield mais rápido com mais instâncias de ataque; contra o Stone Gaze a resposta é posicionamento, não item, porque é baseado em visão, não em disable mágico que o BKB resolveria.
- como jogar: nunca fique de frente pra Medusa parado perto dela depois do nível 6; use ilusões pra gastar o Mana Shield antes de entrar com o TB real; puxe ela pra fora da visão direta antes de engajar.
- fonte: pro_dados/terrorblade.json; pro_dados/medusa.json; constants_abilities.json (medusa_stone_gaze, medusa_mana_shield, medusa_mystic_snake); app/public/data/herois/medusa.json (power_spikes); app/public/data/herois/terrorblade.json (power_spikes).

## Contra Tiny (tiny)
- placar: Terrorblade venceu 56 de 107 partidas pro (52,3%). Carry com mais jogos registrados contra o TB depois de Shadow Fiend e Ember Spirit, mesma posição principal.
- por que importa: combo de burst que ameaça o TB mesmo sem lane em comum, pela posição que os dois ocupam no draft (carry físico).
- janelas: Tiny chega no combo Avalanche + Toss já no nível 6, por volta de 7:42 (herois/tiny.json), bem antes do TB ter qualquer item de sobrevivência além das botas; o Blink Dagger dele (mediana pro 19:06) reabre o combo em qualquer lugar do mapa, somando Avalanche, uma pausa de ~1,3s e Toss, cerca de 2,5s de controle; o TB só compete de verdade depois do Manta (15:00-16:00), quando ilusões dão corpo extra pro combo "gastar" e o Sunder vira resposta real de emergência.
- o que ele faz com você: Avalanche atordoa numa área de 325 por 1,5s em pancadas; o Toss pega a unidade mais próxima, podendo ser uma ilusão em vez do TB real, e arremessa com dano, no nível 4 chega a 360, mais com Grow; combinados, o combo tira uma parte grande da vida de um TB sem item.
- o que você faz com ele: depois do nível 6 de ilusão (Conjure Image), o Toss arrisca pegar a ilusão errada em vez do TB real, desperdiçando o combo; Dragon Lance dá alcance pro TB bater no Tiny antes dele fechar distância de novo.
- itens que viram: o Blink Dagger do Tiny (19:06) é o item que mais define esse confronto, porque reabre o combo a qualquer momento; Manta (15:00-16:00) do TB é a resposta direta porque confunde o alvo do Toss.
- como jogar: não ande sozinho e parado contra um Tiny com nível 6 ou mais e visão; depois do Manta, deixe ilusões na frente do grupo pra absorver o primeiro combo.
- fonte: pro_dados/terrorblade.json; pro_dados/tiny.json; constants_abilities.json (tiny_avalanche, tiny_toss); app/public/data/herois/tiny.json (power_spikes); app/public/data/herois/terrorblade.json (power_spikes).

## Contra Templar Assassin (templar_assassin)
- placar: Terrorblade venceu 46 de 84 partidas pro (54,8%). Carry de alto volume (84 jogos), mesma posição principal.
- por que importa: a única oponente da lista com uma habilidade desenhada especificamente contra DPS de múltiplos hits como o das ilusões, Refraction.
- janelas: TA tem o pico mais cedo do grupo inteiro, Desolator pronto entre 13:00-15:00 (herois/templar_assassin.json, +55 de dano e -6 de armadura, -18 no total somando Meld e talento) e Blink Dagger logo depois (15:30-19:30), enquanto o TB só fecha Manta aos 15:00-16:00; entre o Desolator dela e o Manta do TB é a janela mais perigosa, ela já bate forte e o TB ainda não tem a multiplicação de dano do Manta; depois disso o TB equilibra porque ilusão desgasta as cargas de Refraction mais rápido do que o burst da TA recompõe.
- o que ele faz com você: Meld dá dano bônus e reduz armadura num ataque surpresa saindo da invisibilidade; Psi Blades faz o ataque dela atravessar o alvo e bater em quem estiver atrás na linha, podendo acertar uma ilusão alinhada atrás do TB real; Desolator reduz a armadura do TB em área.
- o que você faz com ele: Refraction tem um número fixo de cargas de bloqueio, de 3 a 6 conforme o nível (constants_abilities.json), e cada ataque de ilusão consome uma carga, não importa o tamanho do dano, jogar várias ilusões atacando junto esgota as cargas dela rápido, abrindo pro resto do dano do TB.
- itens que viram: Desolator (13:00-15:00) é o item que mais define a janela de perigo antes do Manta; depois, Manta (15:00-16:00) do TB vira a resposta porque "gasta" as cargas de Refraction rápido com múltiplos ataques simultâneos.
- como jogar: evite trocar sozinho com uma TA que já tem Desolator antes de fechar seu próprio Manta; depois do Manta, jogue as ilusões juntas numa única troca pra estourar as cargas de Refraction de uma vez.
- fonte: pro_dados/terrorblade.json; pro_dados/templar_assassin.json; constants_abilities.json (templar_assassin_refraction, templar_assassin_psi_blades, templar_assassin_meld); app/public/data/herois/templar_assassin.json (power_spikes); app/public/data/herois/terrorblade.json (power_spikes).

## Contra Morphling (morphling)
- placar: Terrorblade venceu 20 de 51 partidas pro (39,2%, desvantagem). O espelho direto do TB, exemplo citado pelo próprio dono de dois carries sem lane em comum.
- por que importa: outro hiper-carry late-game puro, com build quase idêntica, os dois saem de Power Treads, passam por Yasha e fecham Manta a poucos minutos de diferença.
- janelas: Power Treads saem parecidos, 5:48 do TB (pro_dados/terrorblade.json) contra 6:00 do Morphling (pro_dados/morphling.json); o Manta do TB sai aos 15:00-16:00, o do Morphling aos 18:35 (herois/morphling.json), TB um pouco na frente; antes disso, o Morphling já tem Adaptive Strike pra poke à distância desde o nível 1-6 e Waveform (invulnerável durante o dash) pra fuga, controlando engajamentos antes do Manta de ambos. O próprio guia do Morphling marca que Manta antes dos 19:00 deu 26V-15D nos pros, e depois dos 20:30 caiu pra 0V-7D, quem fecha o Manta primeiro tende a vencer a corrida, e nesse confronto é o TB.
- o que ele faz com você: Waveform é invulnerável durante o dash, então ele atravessa ilusões e foge ou ataca sem risco; Adaptive Strike bate à distância, empurra e atordoa até 2,6s, cortando a aproximação do TB; se ele usar o Morph (ultimate) perto do TB, pode copiar as habilidades básicas dele por 24s.
- o que você faz com ele: Sunder é a resposta mais confiável contra o burst dele, já que troca vida em vez de depender de esquiva; ilusões do TB também servem de escudo de corpo, Adaptive Strike pode acertar a ilusão errada.
- itens que viram: Manta dos dois (15:00-16:00 do TB contra 18:35 do Morph) é o item que decide a corrida, e o TB chega primeiro nessa amostra; o Scepter do Morphling permite criar uma ilusão forte copiando um herói inimigo, inclusive o próprio TB, sem gastar o Morph real (aghs_desc), mas é item raro nesse nível de jogo.
- como jogar: não troque ataque reto contra um Morphling com Waveform disponível, ele sai ileso; jogue pelo Sunder se o burst dele acertar o TB real primeiro, e tente forçar o 1x1 antes dele fechar o próprio Manta.
- fonte: pro_dados/terrorblade.json; pro_dados/morphling.json; constants_abilities.json (morphling_waveform, morphling_adaptive_strike_agi, morphling_replicate); aghs_desc (Morphling); app/public/data/herois/morphling.json (power_spikes); app/public/data/herois/terrorblade.json (power_spikes).
