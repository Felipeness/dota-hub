---
id: roshan-solo-sven
titulo: "Solo de Roshan: Sven"
patch: 7.41
fontes:
- dota-roshan-solo/data/resumo_por_heroi.json
- dota-roshan-solo/data/resumo_com_suporte.json
- dota-roshan-solo/data/candidatos_pro.json
- dota-roshan-solo/data/candidatos_pro_tarde.json
- dota-roshan-solo/data/candidatos_pub.json
- dota-roshan-solo/work/solo_roshan.md
- app/public/data/herois/sven.json
- https://liquipedia.net/dota2/Cleave
- https://liquipedia.net/dota2/Roshan
heroi: Sven
solos: 0
candidatos: 8746932153, 8762564423, 8762620750, 8777547487, 8777615628, 8785011390, 8790140669, 8791604589, 8796780481, 8800096555, 8802449583, 8805423379, 8812882658, 8812990272, 8820460295, 8839405430, 8746135052, 9032107542
---
## Básico
0 solos confirmados em replay. O projeto dota-roshan-solo leu 1.328 partidas quadro a quadro e confirmou 274 solos (111 puros ou com ajuda curta, mais 163 com suporte) espalhados por 22 heróis; Sven não é um deles (`data/resumo_por_heroi.json` e `data/resumo_com_suporte.json` não têm a chave `sven`).

Isso não é "Sven nunca sola": é "ninguém baixou e leu um replay de Sven ainda". O herói aparece como candidato bruto do OpenDota (Roshan morto numa janela de tempo compatível com o perfil de solo) em 18 partidas: 2 na leva pro inicial, 15 na leva pro mais tarde e 1 na leva pub. Nenhuma dessas 18 foi baixada nem passou pelo leitor de replay (`src/replay_rosh`), então não há minuto, nível ou item confirmados para o Sven aqui. Os ids estão no frontmatter.

O que o Sven faz no lugar, pelos próprios dados do guia (`sven.json`, seção `depois_dos_20`):
- Roshan decide o jogo dele: quando o time do Sven pega o primeiro Roshan (mediana pro 24:20), ele vence 61 de 76 jogos (80%); quando o time inimigo pega primeiro, só 15 de 48 (31%).
- É Roshan de time, não solo: a sequência de iniciação do Sven (Blink aos 16:30, BKB aos 21:45, nível 18 com God's Strength 3/3 aos 23:07) amadurece perto dos 23-25 min, bem na janela em que o primeiro Roshan pro costuma cair. O item de sustain que permitiria tanque-lo sozinho (Satanic) só chega aos 35:30 de mediana, bem depois.
- Posição do fosso por horário (regra do 7.41, válida pro time do Sven buscar o Roshan): dia usa o poço de cima (NW, lado Dire), noite o de baixo (SE, lado Radiant), trocando a cada 5 min desde os 15:00.

## Avançado
Por que o Sven não é hero de solo de Roshan, juntando o kit dele com a mecânica do jogo:
1. **Great Cleave não ajuda contra um alvo só.** Great Cleave é cleave: a regra geral do Cleave (Liquipedia) diz que o alvo principal não recebe bônus de cleave, só os alvos secundários ao redor dele recebem. Roshan sozinho, sem creep do lado, não gera nenhum alvo secundário: a habilidade de clear mais forte do Sven vale zero numa luta 1x1 contra o Roshan.
2. **Falta sustain antes dos 35 min.** O kit padrão do Sven (Treads, Mask, Echo Sabre, Blink, BKB, Crystalys, Harpoon, Daedalus) não tem lifesteal nem fuga garantida; o primeiro item com lifesteal de verdade é o Satanic, que sai na mediana pro aos 35:30, tarde demais pro Roshan 1 ou 2, que o time já teria buscado em grupo.
3. **O dano dele é físico puro e escala com Força/nível (God's Strength), não com itens de sustain-tanque.** Isso o torna ótimo pra lutas em grupo (onde Warcry e Blink valem mais que tankar sozinho) e fraco pro padrão clássico de solo (lifesteal alto + fuga, como Ursa com Blink+BKB ou illusion-tank como Terrorblade), que depende de aguentar o Slam e os ataques do Roshan sem morrer sozinho.
4. **Roshan resiste bem a dano mágico e bate com dano físico de área (Slam).** O perfil do chefe, descrito na página da Liquipedia, favorece quem tem fuga ou cura contra o próprio dano físico dele; o Sven não tem nenhum dos dois cedo.

Combo que o guia local recomenda em vez do solo: time completo com Blink (16:30) + BKB (21:45) + God's Strength 3/3 (nível 18, 23:07) + Warcry pra cobrir o grupo, buscando o primeiro Roshan por volta de 23-25 min. Se quiser testar o solo de verdade, o pré-requisito pelo próprio kit seria ter o Satanic pronto (~35 min) e isolar uma janela sem o time, o que os dados daqui não registram em nenhuma partida de Sven ainda.
