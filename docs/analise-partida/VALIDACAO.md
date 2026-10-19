# Validação: Dotaflix × Hub, partida 9046905170

Medusa, conta 329255797, derrota 16/9/14 em 51 min. Rodado com `npx tsx scripts/validar-analise.ts 9046905170 329255797`
contra o OpenDota real (18 objectives, 5 teamfights, todos os logs da Medusa). 51 achados no total; a tabela cobre os
lances que a referência do Dotaflix citou.

## Lance a lance

| Minuto | Dotaflix | Hub | Veredito |
|---|---|---|---|
| 3:59 | ACERTO: farmou a lane com o suporte morrendo | — | **Faltou.** Regra faltando: o `Contexto` hoje só expõe as mortes do próprio jogador (`detalhe.eventos`), não as dos aliados. Dado existe em `partida.players[].deaths_log` de quem não é o jogador, mas nada lê esse campo pros aliados. |
| 8:34 | ERRO: 1ª morte pro Undying, lane wardada por eles | "4 mortes entre 8 e 20 minutos" (pesou_muito) + achado de contexto "Morte para Undying, 8:34" com posição no mapa | **Achou a morte, não a visão deles.** O Hub não lê wards inimigas (ver `O_QUE_NAO_VEMOS`: só a própria conta tem `obs_log`/`sen_log` na fonte). |
| 11:01 | ERRO: 2ª morte pro Undying custou a T1 safe | "Torre caiu 0:37 depois de uma morte, 11:01" (pesou) | **Bateu, e com o segundo exato** em vez de só "custou a torre". Regra nova (`torrePerdidaAposMorte`, ver seção abaixo). |
| 16:06 | ERRO: morreu com a Manta no bolso | "Morreu já com ouro pra boa parte do Manta Style, 16:06" (leve, família `build`) | **Bateu, nomeando o item** (Dotaflix só disse "a receita"). |
| 18:50 | ERRO: duas kills no top e morte pro Doom logo depois (devia ter batido torre) | Morte registrada ("Morreu com o time 5333 de ouro atrás, 18:50") + "Torre caiu 0:41 depois" | **Achou a morte e a torre perdida depois, não a decisão de não bater torre.** Regra faltando: exigiria saber que havia uma torre baixa disponível pra push no momento da decisão, não só o resultado. |
| 20:42 | ACERTO: defendeu a jungle e levou a T1 deles | — | **Faltou.** Sem regra de "acerto" para contra-ataque bem-sucedido (recuperar um objetivo depois de defender). |
| 24:58 | ERRO: luta no mid logo depois de perder três e o Roshan foi deles | Morte + "Torre caiu 0:49 depois" | **Achou a morte e a torre; o Roshan associado está na contagem agregada** ("O time inimigo pegou 3 Roshans e o seu, 0", horários 26:23/38:30/48:16), não citado luta a luta. |
| 28:33 | ERRO: brigou contra a Aegis do Ursa | "Morreu com a Aegis do time inimigo ainda ativa, 28:33" (pesou_muito) | **Bateu exatamente.** |
| 30:13 | ACERTO: virada no top virou T2 do mid | — | **Faltou.** Mesma lacuna do lance de 20:42 (sem regra de "acerto" para conversão de vantagem em objetivo). |
| 38:30 | ERRO: perdeu a janela do 2º Roshan (Butterfly só aos 36:20) | "Butterfly saiu 14,1 min depois do normal no pro" (pesou_muito, família `build`) + Roshan do inimigo em 38:30 na contagem agregada | **Bateu e foi além:** liga o atraso do item a uma mediana real de pro (22,2 min, n=376) em vez de só "a Butterfly saiu tarde". |
| 46:10 | ERRO: luta no top deles, buyback gasto perto do Roshan | "Buyback gasto 46:57, bem na janela em que o Roshan do time inimigo voltava a ficar disponível" (pesou) | **Bateu e foi além:** o Dotaflix só constata "buyback gasto"; o Hub liga ao Roshan de 38:30 (janela 46:30–49:30) e não acusa o buyback de 32:08, que cai fora da janela. |
| 49:51 | ERRO: luta final fora do high ground, contra Aegis | "Morreu com a Aegis do time inimigo ainda ativa, 49:51" (pesou_muito) + "2 torres caíram nos 90 s depois de uma morte" | **Achou a Aegis e o custo em torres; não sabe se era high ground.** Listado em `O_QUE_NAO_VEMOS`: a fonte não marca zona do mapa (high ground ou não), só a posição x/y. |

## O que o Hub achou que o Dotaflix não disse

- **Posição de morte no mapa**: 5 das 9 mortes caem dentro de um teamfight reconhecido e carregam coordenada (`evidencias.posicaoNoMapa`); as outras 4 ficam sem posição, com o motivo explícito. O Dotaflix admite não saber onde a Medusa estava.
- **Build contra o draft**: faltou item contra dano mágico (Necrophos, Ancient Apparition) e contra cura (Necrophos, Undying); Linken's Sphere, Diffusal Blade e Disperser comprados sem responder a nada do draft inimigo (achados `leve`, ainda assim nomeados item a item). O Dotaflix não cruza itens com o draft.
- **Comparação com pro do mesmo herói**: GPM final 888 contra média de pro 684 (acerto); Yasha, Manta Style, Eye of Skadi e Aghanim's Shard no tempo certo ou antes do pro (acertos); Crystalys e Daedalus nunca montados, ambos core em mais de 130 partidas de pro. O Dotaflix não compara com pro.
- **Visão**: 0 observers/sentries plantadas na partida inteira, enquanto o inimigo pegou Roshan 3 vezes — o Dotaflix não menciona visão.
- **Padrão de morte**: 3 mortes para o Ursa na partida (achado dedicado); o Dotaflix lista as mortes mas não aponta o padrão por herói.
- **Economia por morte**: ouro de desvantagem do time quantificado em 8 das 9 mortes (de 1,7k a 11,4k atrás), não só "abaixo" como o resumo do Dotaflix.

## Lacunas reais (dado não sustenta ou falta regra)

1. Acerto de farm durante morte de aliado (3:59) e os dois "acerto" de conversão de objetivo (20:42, 30:13): regra faltando, não dado faltando — o `Contexto` não expõe mortes nem farm dos aliados, só do jogador.
2. "Devia ter batido torre" (18:50): julgamento de decisão que exigiria saber o estado da torre no momento, não o resultado; não implementado.
3. High ground na luta final (49:51): dado realmente não existe na fonte (sem zona de mapa), mantido em `O_QUE_NAO_VEMOS`.

## Regra nova: torre perdida depois de morte

Pendência registrada pela família `objetivos-e-aegis`: o dado de `building_kill` existia no OpenDota (`key` com prefixo
`npc_dota_goodguys_*`/`npc_dota_badguys_*` dizendo de quem era a torre) mas não estava no schema nem em `detalhe.ts`.
Fechado nesta rodada:

- `app/src/live/fonte/schemas.ts`: `objectives[]` agora valida `key` (opcional, só existe em `building_kill`).
- `app/src/live/partida/detalhe.ts`: novo tipo de evento `"torre"`, derivado de `building_kill` com `key` contendo
  `_tower`; marca se a torre caída era do time do jogador ou não.
- `app/src/analise/regras/objetivos-e-aegis/torrePerdidaAposMorte.ts`: regra nova, agrupa por morte (uma luta que
  custa 3 torres de uma vez é 1 achado, não 3) e só acusa torre própria caída até 90 s depois de uma morte — janela
  curta de propósito, pra não confundir "time perdendo" com "essa torre caiu por causa dessa morte".
- `app/src/live/partida/janelas.ts`: `COR_DO_EVENTO` precisava de uma entrada para o tipo novo (erro de tipo, não de
  dado).
- `app/src/analise/modelo.ts`: removida a linha de `O_QUE_NAO_VEMOS` que dizia "perda de torre" — era verdade antes
  de hoje, não é mais.

Testada contra 3 partidas reais (9046905170, 9046871014, 9045498043, todas da conta 329255797): sem o agrupamento por
morte, uma luta perdida com 3 torres em sequência (partida 9046871014, 35:34) virava 3 achados repetidos; agrupado,
vira 1.

## Estado dos testes

- `npx tsc -b` em `app/`: limpo.
- `npx vitest run` em `app/`: 114 arquivos, 778 testes, todos passando.
- Script de validação manual (`app/scripts/validar-analise.ts`, não faz parte do build) rodado contra 3 partidas reais
  da conta 329255797 via OpenDota, sem crash e sem achado implausível.
