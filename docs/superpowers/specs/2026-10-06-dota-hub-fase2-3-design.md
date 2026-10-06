# Dota Hub: design das fases 2 e 3

Data: 06/10/2026. Autor: Felipe (Ness). Status: revisado em 06/10/2026 (fase 3 cancelada, fase 2 sem serviço próprio).

## Mudança de 06/10/2026

O Felipe decidiu que o app roda só no PC dele. Por isso:

- **Fase 3 (publicação): cancelada em 06/10/2026 por decisão do Felipe.** O app roda local; publicar fica para quando ele pedir. O conteúdo antigo da fase 3 (site com link aberto, custo, alarmes, comando de publicar) saiu desta spec; ele continua no histórico do repositório e no plano cancelado `docs/superpowers/plans/2026-10-06-dota-hub-fase3.md`.
- **Fase 2 (busca ao vivo): continua, sem serviço próprio.** O app consulta a fonte direto do navegador, guarda as respostas no próprio navegador e respeita o limite da fonte sozinho.

## Objetivo

**Fase 2, busca ao vivo:** digitar o nome ou o número de uma conta, ou o nome de um time, e o app buscar na hora os dados públicos de partidas (OpenDota): estatísticas básicas, heróis mais jogados, últimas partidas e a rota aproximada de cada partida no mapa. O que já foi buscado fica guardado no navegador por um tempo, para não gastar o limite da fonte. Limites, fonte fora do ar e falta de internet aparecem para o usuário com uma mensagem clara.

Sucesso: o Felipe abre o app no PC dele, digita a própria conta ou a de um amigo e vê os números e as rotas no mapa em poucos segundos, sem configurar nada.

## Decisões tomadas com o Felipe

| Tema | Decisão |
|---|---|
| Quem usa | O Felipe, no PC dele. Sem login. |
| Onde roda | Só no PC do Felipe, aberto pelo comando de desenvolvimento ou pela versão montada local. Nada publicado. |
| Fonte da busca ao vivo | OpenDota (dados públicos), a mesma dos projetos de análise. |
| Quem fala com a fonte | O próprio app, no navegador. Não existe serviço intermediário. |
| Onde fica o guardado | No navegador do Felipe. Fechar e abrir o navegador não apaga. |
| Rota aproximada | Calculada pelas posições de lane que a fonte publica para partidas analisadas (primeiros 10 minutos). Não é a rota segundo a segundo dos replays da fase 1. |
| Publicação (fase 3) | Cancelada em 06/10/2026. Volta só se o Felipe pedir. |

## Fora do escopo

Publicar o app (fase 3 cancelada); login e contas de usuário; histórico guardado por usuário; pedir à fonte que analise uma partida que ainda não foi analisada; busca de partida por número de partida avulsa; replays segundo a segundo de partidas novas; mapa 3D detalhado; fotos de conta e logos de time (vêm de outros servidores, ver privacidade).

## Fase 2: busca ao vivo

### Telas e jornadas

1. **Busca ao vivo** (nova tela, item na navegação e atalho na busca global): uma caixa só. Número de conta vai direto para a conta, sem consultar a fonte. Texto procura contas pelo nome e times pelo nome, e mostra as duas listas (até 10 de cada), com nome e a data da última partida (contas) ou vitórias e derrotas (times).
2. **Conta**: nome e medalha quando pública; partidas, vitórias e taxa de vitória (todas e últimas 20); os 10 heróis mais jogados com partidas e vitória; as últimas 20 partidas (herói, resultado, abates, mortes e assistências, duração, lane, data). Tocar numa partida abre a rota aproximada dela no mapa.
3. **Rota aproximada da partida**: o mapa da fase 1 com manchas onde o jogador ficou nos primeiros 10 minutos (mais forte onde ficou mais tempo), a lane principal escrita ("safe lane", "mid", "offlane", "selva"), a lane registrada pela fonte e o aviso "Rota aproximada: posições de lane dos primeiros 10 minutos." Partida sem análise mostra "Esta partida não foi analisada pela fonte; a rota não está disponível." no lugar do mapa.
4. **Time**: nome, vitórias e derrotas, jogadores atuais (com link para a conta de cada um) e as últimas 20 partidas (adversário, resultado, campeonato, data).

Toda tela de busca ao vivo mostra "Dados de <hora>." com a hora em que o dado foi buscado. Quando o dado mostrado é guardado e já passou da validade (porque a fonte não respondeu), aparece o aviso e o botão "Atualizar".

### Guardado e limite da fonte

- Cada resultado buscado fica guardado no navegador com validade própria: perfil e totais da conta, 1 hora; busca de contas por nome, 1 hora; dados do time e jogadores do time, 1 hora; últimas partidas (da conta e do time) e heróis da conta, 10 minutos; detalhes de uma partida, 7 dias (partida terminada não muda); lista de times e nomes de heróis, 1 dia.
- Dentro da validade, a resposta vem do guardado, sem chamar a fonte, mesmo depois de fechar e abrir o navegador.
- Fora da validade, chama a fonte; se a fonte falhar, pedir para esperar ou não houver internet, e houver um resultado guardado ainda não apagado (até 7 dias), mostra o guardado com o aviso "A fonte não respondeu; mostrando dados de <hora>."
- O que passou de 7 dias é apagado do navegador.
- O app nunca passa do limite da fonte por conta própria: as chamadas saem uma de cada vez, com um intervalo mínimo entre elas e no máximo 50 por minuto (abaixo do limite publicado da fonte, 60 por minuto).
- Quando a fonte pede para esperar, o app para de chamar, espera um tempo que cresce a cada novo pedido de espera seguido (5, 10, 20 segundos, até 1 minuto), mostra "A fonte pediu para esperar. Tentando de novo em <n> s." e tenta de novo sozinho, até 3 vezes por consulta.
- Quando a fonte diz que o limite do dia acabou, o app para de chamar até a virada do dia da fonte.

### Estados de erro e situações de borda

| Situação | O que o usuário vê |
|---|---|
| Texto vazio ou com menos de 2 letras, ou com mais de 64 | "Digite pelo menos 2 letras ou o número da conta." |
| Conta não existe | "Conta não encontrada. Tente buscar pelo nome." |
| Conta privada (existe, mas não mostra partidas públicas) | O perfil aparece e, no lugar das partidas, "Esta conta não mostra partidas públicas. No Dota, ative "Expor dados públicos de partidas"." |
| Time não existe | "Time não encontrado." |
| Conta não aparece na partida aberta | "Esta conta não aparece nessa partida." |
| Nenhum resultado por nome | "Nada encontrado para <texto>." |
| Fonte pediu para esperar (limite por minuto), dentro das 3 tentativas | Aviso "A fonte pediu para esperar. Tentando de novo em <n> s." com contagem regressiva, e a tela continua carregando. |
| Limite por minuto ainda ativo depois das 3 tentativas, ou o próprio app no teto de 50 por minuto | "A busca ao vivo atingiu o limite da fonte. Volta a funcionar em <n> segundos." com contagem regressiva; o botão "Tentar de novo" só libera no fim. Resultados guardados continuam aparecendo. |
| Limite do dia da fonte acabou | "A busca ao vivo atingiu o limite do dia da fonte. Volta a funcionar em cerca de <n> h." Resultados guardados continuam aparecendo. |
| Fonte fora do ar ou lenta (mais de 4 s) | Com guardado: o guardado com aviso. Sem guardado: "A fonte de dados não respondeu. Tente de novo em alguns minutos." |
| Resposta da fonte fora do formato esperado | "A fonte respondeu algo inesperado. Tente de novo mais tarde." e o detalhe fica registrado no console do navegador. |
| Sem internet | Com guardado: o guardado com aviso. Sem guardado: "Sem conexão." As telas da fase 1 continuam funcionando. |
| Navegador sem espaço ou com o guardado bloqueado | A busca funciona sem guardar (toda consulta vai à fonte) e o motivo fica registrado no console. |

### Critérios de sucesso da fase 2 (mensuráveis)

1. Busca de uma conta que não está guardada responde em até 4 s em 95% das vezes; guardada, em até 1 s (medido em 20 contas diferentes, uma a cada 6 s, e nas mesmas 20 repetidas).
2. Uma conta pública aparece com partidas, vitórias, 10 heróis e 20 partidas que batem com a página da conta na fonte (conferido em 5 contas: a do Felipe e 4 de amigos ou profissionais).
3. A lane principal da rota aproximada bate com a lane registrada pela fonte em pelo menos 9 de 10 partidas analisadas conferidas.
4. Cada linha da tabela de erros acima tem um teste automático e aparece na tela com a mensagem da tabela.
5. Em 200 consultas disparadas de uma vez, nenhuma janela de 60 s tem mais de 50 chamadas à fonte, duas chamadas nunca saem com menos de 0,2 s de diferença, e as consultas que passariam do teto recebem a mensagem de limite com o tempo de espera (teste automático com relógio simulado).
6. Quando a fonte pede para esperar três vezes seguidas, as esperas são de 5, 10 e 20 segundos, o aviso aparece durante a espera e a terceira vira a mensagem de limite (teste automático).
7. Fechar e abrir o navegador e abrir a mesma conta dentro da validade não faz nenhuma chamada à fonte (conferido na aba de rede do navegador).
8. Nenhuma chave ou credencial no código entregue ao navegador, e numa jornada completa da busca ao vivo (busca, conta, rota, time) o navegador só fala com a fonte e com o próprio app (conferido na aba de rede e por varredura da versão montada).

## Organização (o que existe e como se liga)

- **App (fase 1)**: ganha as telas de busca ao vivo, as manchas no mapa e o atalho na busca global.
- **Cliente da fonte**: monta o pedido, aplica o tempo máximo de 4 s, entende cada resposta da fonte (achou, não achou, espere, limite do dia, fora do ar, formato errado) e confere o formato antes de usar.
- **Fila da fonte**: decide quando cada chamada pode sair (intervalo mínimo, teto por minuto, pausa crescente depois de um pedido de espera, pausa até a virada do dia) e avisa a tela quando está pausada.
- **Guardado**: resultados da fonte por chave de consulta, com hora da busca, validade e prazo de apagar, no navegador.
- **Montagem das respostas**: funções que transformam os dados da fonte em conta, busca, rota aproximada e time.

### Entidades

- **Conta**: id público, nome, medalha pública, totais (partidas, vitórias), heróis mais jogados, últimas partidas, se tem dados públicos.
- **Partida da conta**: id, herói, lado, resultado, abates, mortes, assistências, duração, data, lane registrada, se foi analisada.
- **Rota aproximada**: partida, conta, manchas (posição no mapa e peso), lane principal pelas manchas, lane registrada pela fonte, aviso de aproximação.
- **Time**: id, nome, vitórias, derrotas, jogadores atuais (conta e nome), últimas partidas (adversário, resultado, campeonato, data).
- **Resultado guardado**: chave da consulta, conteúdo, quando foi buscado, validade, prazo de apagar.
- **Estado da fila**: até quando está pausada e por quê (pedido de espera ou limite do dia), quantos pedidos de espera seguidos, horários das últimas chamadas.

Relações: uma Conta tem Partidas; uma Partida analisada tem uma Rota aproximada por conta; um Time tem Contas de jogadores e Partidas; toda resposta da fonte vira um Resultado guardado; toda chamada à fonte passa pela Fila.

## Requisitos não funcionais

- **Desempenho**: critério 1. Toda chamada à fonte tem tempo máximo de 4 s.
- **Sem chave**: a fonte é usada sem chave, no nível gratuito. Nenhuma chave de acesso fica no código do app (o que vai para o navegador é público). Se um dia a fonte exigir chave, a busca ao vivo precisa de outro desenho, fora desta fase.
- **Limite da fonte**: respeitado pelo próprio app (intervalo mínimo, teto de 50 por minuto, espera crescente, pausa no limite do dia), critérios 5 e 6.
- **Privacidade**: o que o usuário digita e o que a busca traz só saem do navegador nas chamadas à fonte. A busca ao vivo não carrega imagem nem script de outro endereço (por isso não há foto de conta nem logo de time). O pedido à fonte não leva cookie nem identificação do usuário. A fonte vê o endereço de internet do PC, como em qualquer site.
- **Segurança**: entrada validada (texto de 2 a 64 caracteres, número de conta só com dígitos, até 12), e o texto da busca vai para a fonte codificado.
- **Observabilidade**: cada chamada à fonte registra no console do navegador a operação, a duração e o código de erro, sem dado pessoal. Formato errado da fonte é registrado como erro.
- **Rastreabilidade**: o rodapé da fase 1 continua mostrando a data dos dados e o patch.

## Qualidade e testes

- Testes automáticos sem chamar a fonte de verdade (respostas gravadas da fonte e respostas sintéticas), cobrindo cada linha da tabela de erros.
- Teste com relógio simulado da fila (critérios 5 e 6).
- Conferência manual das 5 contas e das 10 rotas aproximadas (critérios 2 e 3) e da aba de rede (critérios 7 e 8).
- Texto em português do Brasil com acentos, frases curtas.
