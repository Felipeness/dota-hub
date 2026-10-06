# Dota Hub: design das fases 2 e 3

Data: 06/10/2026. Autor: Felipe (Ness). Status: aguardando revisão.

## Objetivo

**Fase 2, busca ao vivo:** digitar o nome ou o número de uma conta, ou o nome de um time, e o app buscar na hora os dados públicos de partidas (OpenDota): estatísticas básicas, heróis mais jogados, últimas partidas e a rota aproximada de cada partida no mapa. O que já foi buscado fica guardado por um tempo para não gastar o limite da fonte. Erros e limites aparecem para o usuário com uma mensagem clara.

**Fase 3, publicação:** o app vira um site com link aberto, que qualquer amigo abre no navegador do celular ou do PC, com a busca ao vivo funcionando. O custo mensal tem estimativa, teto e alarme. Quando sai um patch novo, o app avisa que os dados estão desatualizados e o Felipe publica os dados novos com um comando.

Sucesso: o Felipe manda o link para um amigo, o amigo digita a própria conta e vê os números e as rotas dele no mapa em poucos segundos, sem pedir ajuda, e o custo do mês fica abaixo do teto.

## Decisões tomadas com o Felipe

| Tema | Decisão |
|---|---|
| Quem usa | Felipe e amigos. Link aberto, sem login. |
| Fonte da busca ao vivo | OpenDota (dados públicos), a mesma dos projetos de análise. |
| Rota aproximada | Calculada pelas posições de lane que a fonte publica para partidas analisadas (primeiros 10 minutos). Não é a rota segundo a segundo dos replays da fase 1. |
| Publicação | Site estático para as telas e um serviço pequeno só para a busca ao vivo. A escolha técnica está em `docs/superpowers/decisions/2026-10-06-fase2-3-stack.md`. |
| Conta de nuvem | Conta pessoal do Felipe, separada de qualquer conta de trabalho. |
| Custo | Teto de US$ 5 por mês. Acima do teto, a busca ao vivo para sozinha e o resto do site continua no ar. |
| Domínio | Sem domínio próprio nesta fase; o link é o endereço padrão do provedor. |

## Fora do escopo

Login e contas de usuário; histórico guardado por usuário; pedir à fonte que analise uma partida que ainda não foi analisada; busca de partida por número de partida avulsa; replays segundo a segundo de partidas novas; domínio próprio; mapa 3D detalhado.

## Fase 2: busca ao vivo

### Telas e jornadas

1. **Busca ao vivo** (nova tela e atalho na busca global): uma caixa só. Número de conta vai direto para a conta. Texto procura contas pelo nome e times pelo nome, e mostra as duas listas (até 10 de cada), com foto, nome e a data da última partida.
2. **Conta**: nome, foto, medalha quando pública; partidas, vitórias e taxa de vitória (todas e últimas 20); os 10 heróis mais jogados com partidas e vitória; as últimas 20 partidas (herói, resultado, abates, mortes e assistências, duração, lane, data). Tocar numa partida abre a rota aproximada dela no mapa.
3. **Rota aproximada da partida**: o mapa da fase 1 com manchas onde o jogador ficou nos primeiros 10 minutos (mais forte onde ficou mais tempo), a lane principal escrita ("safe lane", "mid", "offlane", "selva") e o aviso "rota aproximada: posições de lane dos primeiros 10 minutos". Partida sem análise mostra "esta partida não foi analisada pela fonte; a rota não está disponível" no lugar do mapa.
4. **Time**: nome, logo, vitórias e derrotas, jogadores atuais (com link para a conta de cada um) e as últimas 20 partidas (adversário, resultado, campeonato, data).

Toda tela de busca ao vivo mostra "dados de <hora>" quando o resultado veio guardado, e o botão "atualizar" depois que a validade passou.

### Cache e limite da fonte

- Cada resultado buscado fica guardado com validade própria: perfil e totais da conta, 1 hora; busca de contas por nome, 1 hora; dados do time e jogadores do time, 1 hora; últimas partidas (da conta e do time) e heróis da conta, 10 minutos; detalhes de uma partida, 7 dias (partida terminada não muda); lista de times e nomes de heróis, 1 dia.
- Dentro da validade, a resposta vem do guardado, sem chamar a fonte.
- Fora da validade, chama a fonte; se a fonte falhar e houver um resultado guardado ainda não apagado (até 7 dias), mostra o guardado com o aviso "a fonte não respondeu; mostrando dados de <hora>".
- O sistema nunca passa do limite da fonte: tem um orçamento próprio por minuto e por dia, abaixo do limite publicado da fonte, e para de chamar quando o orçamento acaba.
- Cada visitante tem um limite de buscas por minuto, para um só visitante não gastar o orçamento de todos.

### Estados de erro e situações de borda

| Situação | O que o usuário vê |
|---|---|
| Texto vazio ou com menos de 2 letras | "Digite pelo menos 2 letras ou o número da conta." |
| Conta não existe | "Conta não encontrada." com sugestão de buscar pelo nome. |
| Conta existe mas sem partidas públicas | O perfil aparece e, no lugar das partidas, "Esta conta não mostra partidas públicas. No Dota, ative 'Expor dados públicos de partidas'." |
| Nenhum resultado por nome | "Nada encontrado para <texto>." |
| Limite do visitante atingido | "Muitas buscas seguidas. Tente de novo em <n> segundos." com contagem regressiva. |
| Orçamento da fonte esgotado | "A busca ao vivo atingiu o limite da fonte. Volta a funcionar em <n> minutos." Resultados guardados continuam aparecendo. |
| Fonte fora do ar ou lenta (mais de 4 s) | Com guardado: o guardado com aviso. Sem guardado: "A fonte de dados não respondeu. Tente de novo em alguns minutos." |
| Resposta da fonte fora do formato esperado | "A fonte respondeu algo inesperado; avisamos o Felipe." e o erro fica registrado. |
| Busca ao vivo desligada pelo teto de custo ou sobrecarregada | "A busca ao vivo está pausada agora. O resto do app funciona normalmente." |
| Sem internet no celular | "Sem conexão." e as telas da fase 1 já abertas continuam funcionando. |

### Critérios de sucesso da fase 2 (mensuráveis)

1. Busca de uma conta que não está guardada responde em até 4 s em 95% das vezes; guardada, em até 1 s (medido em 20 buscas de contas diferentes e 20 repetidas).
2. Uma conta pública aparece com partidas, vitórias, 10 heróis e 20 partidas que batem com a página da conta na fonte (conferido em 5 contas: a do Felipe e 4 de amigos ou profissionais).
3. A lane principal da rota aproximada bate com a lane registrada pela fonte em pelo menos 9 de 10 partidas analisadas conferidas.
4. Cada linha da tabela de erros acima tem um teste e aparece na tela com a mensagem da tabela.
5. Num teste de carga com 200 buscas seguidas, o sistema faz zero chamadas acima do orçamento da fonte e responde com a mensagem de limite.
6. Nenhuma credencial aparece no código entregue ao navegador nem nas respostas (varredura do site publicado e das respostas).

## Fase 3: publicação

### O que é publicado

- O site com as telas das fases 1 e 2, aberto por um link, só com conexão segura.
- O serviço da busca ao vivo, no mesmo endereço do site (o navegador fala com um endereço só).
- Um comando de publicação que gera os dados, roda os testes, monta o site e publica; e um comando para voltar à versão anterior.

### Custo

- Estimativa de uso: até 10 pessoas, 3.000 páginas e 5.000 buscas ao vivo por mês. Custo estimado: abaixo de US$ 1 por mês.
- Teto: US$ 5 por mês, só deste projeto (separado do resto da conta por etiqueta).
- Alarmes por e-mail ao Felipe em 40%, 80% e 100% do teto e quando a previsão do mês passar do teto.
- Acima do teto, a busca ao vivo é desligada sozinha; o site estático continua no ar. Religar é um comando.
- Limite de vazão no serviço da busca, para um ataque não gerar custo alto antes do alarme chegar.

### Atualização quando o patch muda

- O app compara o patch dos dados (rodapé da fase 1) com o patch atual do jogo (consultado na fonte uma vez por dia) e, se forem diferentes, mostra a faixa "Saiu o patch <novo>. Os dados deste app são do <antigo>."
- O Felipe roda os projetos de análise no patch novo, depois o comando de publicação; o site novo fica no ar em até 15 minutos depois do comando.
- A versão anterior fica guardada e volta em até 10 minutos com o comando de voltar.

### Estados de erro e situações de borda

- Publicação com teste falhando: o comando para antes de publicar e diz o teste.
- Publicação interrompida no meio: o site continua na versão anterior inteira (nunca meio novo, meio velho).
- Arquivo de dados que falta no site publicado: a seção mostra "dados indisponíveis" (mesmo comportamento da fase 1).
- Consulta do patch atual falhando: a faixa não aparece e o resto segue normal.
- Busca desligada pelo teto: a mensagem da tabela da fase 2.

### Critérios de sucesso da fase 3 (mensuráveis)

1. O link abre no celular de um amigo com 4G, na primeira visita, em menos de 3 s até a primeira tela, só com conexão segura (endereço sem conexão segura redireciona).
2. Um comando publica uma versão nova em até 15 minutos; outro volta à anterior em até 10 minutos (cronometrado uma vez cada).
3. O custo do primeiro mês, medido no relatório de custo da conta filtrado pelo projeto, fica abaixo de US$ 1 no uso estimado e nunca passa de US$ 5.
4. O alarme de custo chega ao e-mail do Felipe num teste com teto baixo, e o desligamento automático pausa a busca em até 5 minutos depois do alarme (teste com alarme simulado); o site continua respondendo.
5. 100 buscas seguidas de um mesmo visitante recebem a mensagem de limite depois do limite por minuto; o custo dessas buscas não aparece como pico no relatório.
6. Com o patch dos dados diferente do patch atual, a faixa de patch novo aparece em até 1 dia.
7. Varredura do site publicado e do repositório não acha credencial nem chave.

## Organização (o que existe e como se liga)

- **App (fase 1)**: ganha as telas de busca ao vivo e conta com o serviço por um endereço relativo do mesmo site.
- **Serviço da busca ao vivo**: recebe a busca, aplica os limites, consulta o guardado, chama a fonte quando precisa e devolve uma resposta no formato do app. Não guarda nada além do cache e dos contadores de limite.
- **Cache**: resultados da fonte por chave de consulta, com validade e prazo de apagar.
- **Contadores de limite**: por visitante (sem guardar o endereço do visitante em claro, apagados em minutos) e da fonte (por minuto e por dia).
- **Publicação**: infraestrutura descrita em arquivos versionados no repositório (sem segredos), um comando de publicar, um de voltar e um de religar a busca.
- **Controle de custo**: orçamento do projeto, alarmes por e-mail e desligamento automático da busca.

### Entidades

- **Conta**: id público, nome, foto, medalha pública, totais (partidas, vitórias), heróis mais jogados, últimas partidas, se tem dados públicos.
- **Partida da conta**: id, herói, lado, resultado, abates, mortes, assistências, duração, data, lane registrada, se foi analisada.
- **Rota aproximada**: partida, conta, manchas (posição no mapa e peso), lane principal, aviso de aproximação.
- **Time**: id, nome, logo, vitórias, derrotas, jogadores atuais (conta e nome), últimas partidas (adversário, resultado, campeonato, data).
- **Resultado guardado**: chave da consulta, conteúdo, quando foi buscado, validade, prazo de apagar.
- **Contador de uso**: de quem (visitante anônimo ou fonte), janela (minuto ou dia), contagem, prazo de apagar.
- **Versão publicada**: data, patch dos dados, identificação da versão anterior para voltar.

Relações: uma Conta tem Partidas; uma Partida analisada tem uma Rota aproximada por conta; um Time tem Contas de jogadores e Partidas; toda resposta da fonte vira um Resultado guardado; toda chamada à fonte e toda busca de visitante passa por um Contador de uso.

## Requisitos não funcionais

- **Desempenho**: critérios 1 da fase 2 e 1 da fase 3. Toda chamada à fonte tem tempo máximo de 4 s.
- **Custo**: teto de US$ 5 por mês com alarme e desligamento automático; estimativa abaixo de US$ 1.
- **Segurança**: nenhuma chave, senha ou credencial no repositório, no site ou nas respostas; o serviço só aceita as buscas definidas (entrada validada, tamanho máximo do texto de 64 caracteres, número de conta só com dígitos); conexão sempre segura; o serviço não devolve detalhe interno de erro.
- **Limite de uso**: por visitante (até 20 buscas por minuto) e da fonte (orçamento abaixo do limite publicado da fonte, por minuto e por dia).
- **Privacidade**: só dados públicos da fonte; o endereço do visitante não é guardado em claro e o contador dele some em minutos; nenhum rastreador de terceiros no site.
- **Observabilidade**: cada busca registra operação, duração, se veio do guardado, código de erro e versão, sem dado pessoal. Erro de formato da fonte e serviço falhando avisam o Felipe por e-mail.
- **Rastreabilidade**: o rodapé mostra a data da publicação e o patch dos dados.

## Qualidade e testes

- Testes automáticos da busca sem chamar a fonte de verdade (respostas gravadas da fonte), cobrindo cada erro da tabela.
- Teste de carga simples dos limites (critério 5 da fase 2).
- Antes da primeira publicação, o Felipe vê a lista de recursos e o custo estimado e aprova.
- Conferência manual das 5 contas e das 10 rotas aproximadas (critérios 2 e 3 da fase 2).
- Texto em português do Brasil com acentos, frases curtas.
