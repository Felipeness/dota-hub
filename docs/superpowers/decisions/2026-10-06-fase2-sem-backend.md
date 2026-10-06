# Decisão técnica: fase 2 sem backend, busca ao vivo no navegador

Data: 06/10/2026. Spec: `docs/superpowers/specs/2026-10-06-dota-hub-fase2-3-design.md`. Substitui, para a fase 2, `docs/superpowers/decisions/2026-10-06-fase2-3-stack.md` (AWS). A fase 3 foi cancelada pelo Felipe na mesma data.

## Escolha

| Parte | Escolha |
|---|---|
| Onde roda | Só no PC do Felipe: `npm run dev` ou `npm run build` + `npm run preview` dentro de `app/`. Nada publicado. |
| Quem chama o OpenDota | O próprio app, com `fetch` direto para `https://api.opendota.com/api`, sem chave. |
| Cache | IndexedDB do navegador, um banco `dota-hub-ao-vivo` com uma loja `respostas` (chave = caminho da consulta), índice em `apagarEm`. API nativa, sem biblioteca. |
| Limite da fonte | Fila no app: 200 ms entre o início de duas chamadas, no máximo 50 chamadas em qualquer janela de 60 s, pausa crescente (5, 10, 20, 40, 60 s) a cada 429 seguido, pausa até a meia-noite UTC no 429 de limite diário. Espera de até 15 s acontece em silêncio (com aviso na tela quando é pausa da fonte); acima disso a consulta falha na hora com o tempo que falta. |
| Validação | zod 4 (já no app) nas respostas do OpenDota e no que volta do IndexedDB. |
| Testes | vitest + Testing Library (já no app), respostas reais gravadas em `app/src/live/fonte/amostras/`, `fake-indexeddb` (dependência só de desenvolvimento) para o cache. |
| Código | Tudo em `app/src/live/` (TypeScript strict). O pacote `api/` do plano antigo não existe mais. |

## Conferência da fonte (06/10/2026, chamadas reais)

- **CORS liberado.** `curl -I -H "Origin: http://localhost:5173" https://api.opendota.com/api/players/321580662/wl` respondeu `200` com `Access-Control-Allow-Origin: http://localhost:5173` (a fonte devolve a origem pedida) e `Access-Control-Allow-Credentials: true`. A pré-checagem (`OPTIONS` com `Access-Control-Request-Headers: accept`) respondeu `204` com `Access-Control-Allow-Methods: GET,...` e `Access-Control-Allow-Headers: accept`. O app manda só `GET` com o cabeçalho `accept`, então nem precisa de pré-checagem.
- **429 também tem CORS.** Em chamadas seguidas, a 22ª respondeu `429` com `Access-Control-Allow-Origin`, corpo `{"error":"minute rate limit exceeded"}` e sem `Retry-After`. O navegador consegue ler o status e o corpo; o app distingue limite por minuto e por dia pelo texto do corpo.
- **Cabeçalhos de limite não chegam ao app.** A resposta traz `X-Rate-Limit-Remaining-Minute` e `X-Rate-Limit-Remaining-Day`, mas não há `Access-Control-Expose-Headers`, então o JavaScript do navegador não lê esses cabeçalhos. Por isso a espera é calculada pelo app (espera crescente), não lida da fonte.
- **Limites observados.** O contador por minuto foi de 40 restantes a `-1` em 21 chamadas (coerente com 60 por minuto). O restante do dia estava em 2.567, então o limite diário atual é maior que os 2.000 citados no plano antigo; o app não conta o dia, só reage ao 429 diário.
- **Conta e time inexistentes.** `/players/4294967200` respondeu `404` com `{"error":"Not Found"}`. `/teams/1` respondeu `200` com corpo vazio. O cliente trata corpo vazio como `null`, e o schema do time aceita `null` e `{}` como "não encontrado".
- **Cookie.** A fonte manda `Set-Cookie` de sessão. O app chama com `credentials: "omit"`: nada de cookie vai nem volta.

## Por quê

- **No navegador, sem serviço próprio**: o app roda num PC só, para uma pessoa. A fonte aceita chamadas de qualquer origem e não exige chave no nível gratuito. Um serviço intermediário só existiria para guardar segredo, juntar limite de vários visitantes ou esconder a origem, e nenhum dos três existe aqui. Sem serviço não há custo, deploy, conta de nuvem nem processo a mais para subir junto com o app.
- **IndexedDB e não `localStorage`**: as respostas passam de centenas de KB (lista de times, detalhes de partida), o `localStorage` tem cerca de 5 MB, é síncrono e só guarda texto. O IndexedDB guarda objetos sem serializar, é assíncrono e tem índice para apagar o que venceu. A API nativa cobre o uso (ler, gravar, apagar por índice) em cerca de 40 linhas; `idb` ou `idb-keyval` seriam dependência para economizar pouco código.
- **Cache como ele estava no plano antigo**: a chave é o caminho da consulta (`/players/7/wl`), o valor é a resposta já validada e reduzida pelo schema (só os campos usados), com `buscadoEm`, `validoAte` e `apagarEm` (7 dias). Dentro da validade não chama a fonte. Fora dela, chama; se a fonte falhar, pedir espera ou não houver internet, serve o guardado marcado como vencido. Conta que sumiu (404) nunca é servida do guardado.
- **Fila no cliente**: com um só usuário e um só navegador, o limite da fonte (por endereço de internet) é o limite do app. O intervalo de 200 ms evita rajada (uma conta faz 4 ou 5 chamadas em paralelo), o teto de 50 em 60 s fica 10 abaixo do limite da fonte, e a espera crescente cobre o caso em que outra coisa no mesmo PC (o projeto de análise, outra aba) gastou o limite.
- **Espera máxima silenciosa de 15 s**: deixa as duas primeiras pausas (5 e 10 s) acontecerem sozinhas com o aviso na tela, e transforma qualquer espera maior em mensagem com contagem regressiva, para a tela não ficar "carregando" por um minuto.
- **Serviços num contexto do React**: a fila e o cache são criados uma vez, no `ProvedorAoVivo` na raiz do app, e não em variável de módulo. Os testes passam serviços montados sobre respostas gravadas.
- **Sem fotos e logos**: o OpenDota devolve URLs de avatar e logo em servidores da Steam. Carregar essas imagens mandaria o endereço do PC para outro servidor a cada busca, o que quebra a regra de privacidade (só a fonte recebe chamadas). As telas mostram nome, sem imagem.

## Riscos e limites conhecidos

- **A fonte pode fechar o CORS ou exigir chave.** Se isso acontecer, todas as consultas viram "A fonte de dados não respondeu" (o navegador bloqueia a resposta e o app vê erro de rede). O caminho seria um proxy local no `vite.config.ts` (só no modo de desenvolvimento) ou um serviço pequeno; não está no plano.
- **Erro de rede com internet ligada vira "fonte fora do ar".** O navegador não diz se a falha foi DNS, CORS ou queda da fonte. O app usa `navigator.onLine` para separar "sem conexão" do resto.
- **Limite diário presumido em UTC.** O app pausa até a meia-noite UTC. Se a fonte contar o dia de outro jeito, a primeira chamada depois da pausa recebe 429 de novo e a pausa se renova; nada passa do limite.
- **Várias abas.** Cada aba tem a própria fila. Duas abas fazendo busca ao mesmo tempo podem somar até 100 chamadas por minuto, acima do limite da fonte; a espera crescente segura o resto. Uso esperado é uma aba.
- **Guardado por navegador.** Outro navegador ou janela anônima começa vazio. O navegador pode apagar o IndexedDB se faltar espaço; o app segue funcionando sem guardado e registra o motivo no console.
- **Endereço de internet visível para a fonte.** É o mesmo que abrir o site do OpenDota. A resposta da fonte inclusive devolve o endereço no cabeçalho `X-IP-Address`; o app não lê nem guarda.
- **Fontes do Google.** O visual da fase 1B carrega fontes do Google no `index.html`. Isso não é da busca ao vivo e fica como está; se o Felipe quiser o app sem nenhuma chamada a terceiros, as fontes podem ser baixadas para `app/public/`.
- **Medição de tempo.** O critério 1 é medido por script Node com o mesmo código (`npx tsx`), porque o navegador não tem como rodar 40 buscas cronometradas sem uma ferramenta a mais. O cache em memória do script é mais rápido que o IndexedDB; a leitura do IndexedDB fica em poucos ms e não muda a conclusão.
