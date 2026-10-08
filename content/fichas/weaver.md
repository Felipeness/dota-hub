---
id: ficha-weaver
titulo: "Weaver"
heroi: Weaver
patch: 7.41
posicoes: [1]
fontes:
- C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/constants_hero_abilities.json
- C:/Users/felip/Desktop/dota-imortal/data/opendota/heroes.json
- C:/Users/felip/Desktop/dota-roshan-solo/data/solos.json
- C:/Users/felip/Desktop/dota-tier1/data/draft.csv
- C:/Users/felip/Desktop/dota-tier1/data/partidas.csv
- C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet
- C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet
- https://api.opendota.com/api/heroes/63/itemPopularity
---

## Resumo
Weaver é um carry de agilidade ranged com fuga embutida (roles Carry/Escape no OpenDota). No 7.41 ele é praticamente só pos 1: no draft do Atlas tier1, 14 das 16 vezes que foi picado em jogos pro desde o lançamento do 7.41 (27/03/2026 a 27/09/2026) ele saiu como pos 1, contra 1 pick de pos 2 e 1 de pos 5, picks isolados demais pra contar como papel real do herói agora. Ele brilha farmando sozinho e fugindo de troca ruim: Shukuchi dá invisibilidade e velocidade máxima, Geminate Attack dobra o ataque básico e a passiva Threads of Fate dá dano bônus por "fio" estabelecido em quem ele bate de perto, e Time Lapse desfaz os últimos 5 segundos de vida e mana além de limpar debuff como dispel forte.

## Pos 1 (carry)
- quando pegar: é a posição padrão do herói hoje; 14 dos 16 picks em jogos pro do 7.41 no Atlas tier1 foram pos 1, de ESL One Birmingham (mar/2026) até PGL Wallachia Season 9 (set/2026).
- itens iniciais: tango

### Build
#### Power Treads (power_treads)
- minuto: 7:45
- porque: dá velocidade de ataque e o atributo que você precisar na hora, virando Força quando leva iniciação.
- detalhe: comprado em 14 dos 14 jogos pos 1 analisados, sempre o primeiro item completo. +25 de velocidade de ataque e +10 no atributo trocado; em Agilidade acelera o farm e o Geminate Attack, em Força segura vida pra sair de uma troca.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/compras.parquet

#### Desolator (desolator)
- minuto: 15:11
- porque: -6 de armadura no alvo por 7s deixa o próximo ataque e o Geminate Attack acertarem muito mais forte.
- detalhe: comprado em 14 dos 14 jogos, sempre o segundo item core. O bônus de dano cresce com abates e assistências (+2 por kill, +1 por assist, até 30 de bônus), então ele compensa punir quem você já está trocando.
- contra: heróis que dependem da própria armadura para sobreviver a ataque básico; a redução também funciona em construções.
- combo: Desolator + Geminate Attack autocast: os dois golpes do Geminate saem contra a armadura já reduzida, e cada um pode crit se você já tiver Crystalys.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Black King Bar (black_king_bar)
- minuto: 26:35
- porque: imunidade a magia por 9/8/7s segura o Weaver justamente nos stuns e nukes que cortam o Shukuchi.
- detalhe: comprado em 10 dos 14 jogos, o item defensivo mais comum depois do Desolator. +10 Força e +24 de dano de brinde.
- contra: disables e nukes mágicos de área ou de alvo único (stun, hex, root, a maioria dos silence).
- combo: BKB ligado antes de ativar Shukuchi: a imunidade não bloqueia o próprio Shukuchi, então você atravessa o grupo inimigo imune a feitiço enquanto ainda pode ser pego por dano físico ou disable puramente físico.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Crystalys (lesser_crit)
- minuto: 27:14
- porque: 30% de chance de crit a 160% já destrava o dano alto do ataque básico antes do Daedalus ficar pronto.
- detalhe: comprado em 11 dos 14 jogos como passo intermediário pro Daedalus. Não funciona contra construção, então não ajuda a tirar torre.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Daedalus (greater_crit)
- minuto: 32:36
- porque: fecha o item de dano puro; cada crit em cima de Geminate Attack e Desolator já ativos vira o maior burst do herói em alvo único.
- detalhe: upgrade do Crystalys com Demon Edge, completado em 9 dos 14 jogos (Demon Edge mediana 32:12, Daedalus 32:36, ou seja os dois saem praticamente juntos). Também não crita em construção.
- combo: Crystalys/Daedalus + Geminate Attack: os dois ataques do Geminate rolam a chance de crit de forma independente, então o segundo golpe também pode critar.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

### Situacionais
#### Linken's Sphere (sphere)
- minuto: 23:58
- porque: absorve a próxima habilidade de alvo único (300 de dano absorvido ou o efeito bloqueado), recarregando em 14s.
- detalhe: visto em 5 dos 14 jogos, geralmente completando a partir de um Ultimate Orb comprado minutos antes (mediana 23:45).
- contra: nuke ou disable de alvo único que você precisa atravessar pra chegar na troca ou fugir dela.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Hurricane Pike (hurricane_pike)
- minuto: 28:04
- porque: empurra o alvo 600 de distância e dá alcance extra por alguns segundos, criando espaço contra quem ameaça corpo a corpo.
- detalhe: visto em 6 dos 14 jogos, upgrade do Force Staff (mediana 27:29) comprado minutos antes como item de utilidade isolado.
- contra: corpo a corpo que depende de ficar colado em você pra bater (sem gap closer de longo alcance).
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Butterfly (butterfly)
- minuto: 39:26
- porque: 35% de evasão limpa boa parte do dano físico que um carry rival consegue te acertar.
- detalhe: visto em 4 dos 14 jogos, upgrade do Eaglesong (mediana 38:45) comprado pouco antes.
- contra: carries ou heróis de ataque básico pesado, sem fonte própria de true strike.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Satanic (satanic)
- minuto: 37:59
- porque: 30% de lifesteal (até 175% por 6s ao ativar) segura o Weaver numa troca longa em vez de só bater e fugir.
- detalhe: visto em 2 dos 14 jogos, nos dois casos comprado perto de um Reaver (+25 Força), formando um pacote de sobrevivência em vez do pacote de dano puro.
- contra: jogo que virou troca prolongada em vez de pick/burst rápido.
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Monkey King Bar (monkey_king_bar)
- minuto: 42:52
- porque: 80% de chance de true strike remove a evasão que estaria anulando o seu ataque básico.
- detalhe: visto em 2 dos 14 jogos, sempre tarde, como última peça de dano.
- contra: evasão alta (Butterfly inimigo ou habilidade de evasão).
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Blink Dagger (blink)
- minuto: 43:01
- porque: reposiciona 1200 de distância pra iniciar ou fugir sem depender só do Shukuchi (que tem recarga e demora pra sair da invisibilidade).
- detalhe: visto em 2 dos 14 jogos, tarde no jogo (quando o time já precisa de uma segunda forma de iniciação além do Shukuchi).
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

#### Nullifier (nullifier)
- minuto: 48:31
- porque: o alvo fica mudo por 4s, cortando a janela de usar um item ou feitiço de fuga ou de buff antes de você chegar.
- detalhe: visto em 3 dos 14 jogos, geralmente junto com o Sacred Relic (mediana também 48:31) como componente.
- contra: heróis que fogem ativando uma habilidade ou item (precisam estar livres pra usar o botão; Nullifier não desliga buff que já está ativo antes do silence acertar).
- fonte: C:/Users/felip/Desktop/dota-tier1/data/derivados/itens_chave.parquet; C:/Users/felip/Desktop/dota-imortal/data/opendota/items.json

## Roshan
Em pro play ele mata o Roshan com o time: nos replays locais, Weaver aparece 61 vezes dando o golpe decisivo em jogos pro, mas 56 dessas são classificadas como "com o time" (não fez a maior parte do dano sozinho) e 3 como "finalização" (fechou o abate, mas a maior parte do dano veio de aliados). Não há registro de Weaver solando Roshan em jogo pro no lote analisado. Existem só 2 casos de solo (ambos em turbo, não pro): um solo puro aos 15:30-16:00, nível 26, com Mjollnir, Black King Bar, Greater Crit, Power Treads, Reaver e Searing Signet já prontos; e um solo com ajuda curta aos 15:30-15:46, nível 22, com Desolator x12 (stack), Power Treads, Wraith Band, Linken's Sphere e Greater Crit. Os dois são itens de dano físico puro no meio-late, não um perfil de solo precoce.
