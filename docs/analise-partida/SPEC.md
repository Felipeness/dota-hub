# Análise pós-jogo (motor de regras determinístico)

Documento de design, não de implementação. Nada aqui foi escrito ou editado no
código do Dota Hub por esta tarefa; é a base para as próximas fases do que já
existe.

## Estado atual (o que já existe em `~/Desktop/dota-hub`)

A pesquisa anterior mostrou que uma primeira versão já está no código, não
precisa ser recriada do zero:

- `app/src/live/partida/achados.ts`: motor puro. Tipos `Achado`, `Peso`,
  `Categoria`. Funções `analisarPartida(detalhe, pro)` e
  `achadosDeBuild(detalhe, meuHeroi, inimigos, itens)`. Constante
  `O_QUE_NAO_VEMOS`. 10 regras já implementadas (Aegis ativa, buyback seguido
  de morte, buyback perto do Roshan, ouro não gasto ao morrer, mortes
  repetidas pro mesmo herói, mortes no farm 8-20min, resultado de lane,
  item core atrasado contra pro, contagem de Roshan, build contra draft).
- `app/src/live/partida/AnalisePosJogo.tsx`: renderiza a lista de achados,
  cruzando com `confronto/carregar.ts` para montar herói próprio e inimigos.
- `app/src/live/partida/achados.test.ts`: 8 testes table-driven.
- Integrado dentro de `PartidaPage.tsx` (não existe rota própria `/analise`
  nem `/analise/:matchId` hoje — a análise aparece embutida na página de
  detalhe da partida existente, depois de `BuildDaPartida`).
- Fonte OpenDota (fila, cache IndexedDB, espelho de constantes):
  `app/src/live/fonte/opendota.ts`, schema em `app/src/live/fonte/schemas.ts`.
- Confronto 1x1 determinístico mecânica→item: `app/src/confronto/mecanicas.ts`
  + `respostas.ts` + `porQueItem.ts`.
- Comparação com pro por herói: `content/pro_dados/<slug>.json` (timing
  mediano de item). Comparação por posição (agregada, sem cruzar com item):
  `app/public/data/pro_posicoes.json`.

Este SPEC assume esse ponto de partida e descreve o que falta para chegar ao
nível pedido: rota própria, placar por área comparado a pro por **herói +
posição**, e as extensões de dado que a pesquisa já validou como possíveis.

## Objetivo

Dar a um jogador BR Divine/Ancient tentando subir pra Immortal uma análise
pós-jogo tão boa ou melhor que a do Dotaflix, mas:

- 100% no navegador, sem LLM e sem backend — regras determinísticas sobre o
  JSON do OpenDota.
- Cada achado é auditável: mostra o cálculo e cita a fonte (dado do jogo,
  pro data, mecânica do item/habilidade com texto oficial, patch note).
- Fala claramente o que a análise **não** consegue concluir com os dados
  disponíveis, em vez de inventar.

## Arquitetura

```
app/src/analise/
  carregar.ts     -- busca a partida (GET, POST /request + polling se não analisada)
  modelo.ts        -- tipo Achado, Peso, Categoria, PlacarDeArea
  motor.ts         -- interface Regra, agrega achados de todas as famílias
  registro.ts      -- import.meta.glob("./regras/*/index.ts") monta o registro
  regras/
    objetivos-e-aegis/index.ts
    mortes-e-visao/index.ts
    build/index.ts
    economia-e-farm/index.ts
    lutas/index.ts
  relatorio.ts     -- placar por área, "o que não vemos", ordenação final
  componentes/
    AnalisePosJogo.tsx
    PlacarPorArea.tsx
    AchadoCard.tsx
```

Nota de reuso (ponytail: código já existe em `live/partida/achados.ts` com
quase as mesmas regras, só num arquivo único por função, não por família de
diretório). Mover pra `app/src/analise/regras/*/` com `import.meta.glob` só
vale a pena no dia em que uma família ganhar 2+ contribuidores concorrentes
editando o mesmo arquivo for virar atrito real; até lá, functions num único
`achados.ts` bem nomeadas (como já está) são mais fáceis de ler de cima a
baixo do que 5 diretórios com 1 arquivo cada. Se for migrar, a interface
abaixo é o contrato a manter; a divisão em pastas é opcional.

### Interface `Regra`

```ts
interface Contexto {
  detalhe: DetalheDaPartida;    // já existe, live/partida/detalhe.ts
  pro: DadosPro | null;          // content/pro_dados/<slug>.json, já existe
  proPorPosicao: ProPorPosicao | null; // NOVO, ver seção de dados estáticos
  meuHeroi: Heroi | null;
  inimigos: readonly Heroi[];
  itens: ReadonlyMap<string, Item>;
}

interface Regra {
  id: string;
  familia: "objetivos-e-aegis" | "mortes-e-visao" | "build" | "economia-e-farm" | "lutas";
  avaliar(ctx: Contexto): Achado[];
}
```

Famílias de regras não editam um arquivo compartilhado: cada família só
exporta sua lista de `Regra[]`, e `motor.ts` concatena. Isso é o que o
`import.meta.glob` automatiza SE o projeto for pra pastas; com funções num
arquivo só, o equivalente é: cada função de regra não lê nem escreve estado
de outra, só do `Contexto` — já é verdade no código atual.

### Modelo do Achado

```ts
type Categoria = "erro" | "acerto" | "contexto";
type Peso = "leve" | "pesou" | "pesou_muito";

interface Evidencia {
  numeros?: Readonly<Record<string, number | string>>; // ex. { goldLost: 928, minuto: 46.1 }
  posicaoNoMapa?: { x: number; y: number } | null; // normalizado 0-1, null se não há dado (fora de teamfight)
}

interface Achado {
  id: string;
  tipo: Categoria; // já é "categoria" no código atual, mesmo campo
  minuto: number | null; // null para achados sem instante único (contagens)
  titulo: string;
  oQueAconteceu: string; // já embutido em "titulo" hoje; separar é melhoria futura, não bloqueante
  oQueFazer: string | null;
  porque: string;
  fontes: readonly string[]; // hoje é string única; virar array é extensão mínima
  peso: Peso;
  evidencias: Evidencia;
}
```

Diferença do tipo atual: `fonte: string` → `fontes: string[]` (um achado pode
ter mais de uma fonte, ex. dado do jogo + Liquipedia) e `evidencias` explícita
em vez de números embutidos em prosa. Ambas são extensões aditivas, não
quebram os 8 testes existentes se o campo novo vier com default.

## Famílias de regras

### objetivos-e-aegis
Roshan (quem matou, quantos cada lado), Aegis ativa (morte do próprio time
dentro da janela de 5 min pós-Roshan inimigo), buyback gasto perto de
Roshan próprio (acerto) ou seguido de morte em até 3 min (erro). Já
implementado em `achados.ts` (`mortesComAegisInimigaAtiva`,
`contagemDeRoshan`, `buybackSeguidoDeMorte`, `buybackPertoDoRoshan`).
Fonte: `objectives[]` (`CHAT_MESSAGE_ROSHAN_KILL`, `CHAT_MESSAGE_AEGIS`),
`buyback_log`. Mecânica citada: Aegis of the Immortal expira em 5 min
(Dota 2 Wiki / Liquipedia: Roshan, estável no patch 7.41 e sub-patches
7.41c/e/f segundo PCGamesN e dota2protips).

### mortes-e-visao
Onde o jogador morreu (posição via `deaths_pos` de teamfight, só quando a
morte cai dentro de uma janela de teamfight — limite real, ver seção
"não vê"), mortes repetidas pro mesmo herói (3+, padrão de rota/visão
explorado), mortes na janela de farm 8-20 min (2 pesa leve, 3+ pesa),
resultado de lane (ouro aos 10 min contra o adversário direto). Já
implementado (`mortesRepetidasParaMesmoHeroi`, `mortesNoFarm`,
`resultadoDaLane`); posição de morte via teamfight ainda não está
conectada ao achado (dado existe em `detalhe.ts:112-116`, falta expor no
`Achado.evidencias.posicaoNoMapa`). Extensão: usar `obs_log`/`sen_log` e os
`*_left_log` (não usados hoje) para "sua ward durou X segundos" / "destruída
por Y" — dado disponível, regra nova a escrever.

### build
Cruza as mecânicas de todos os 5 heróis do draft inimigo
(`confronto/mecanicas.ts` roda por par e precisa ser chamado 5x e agregado,
já é o que `achadosDeBuild` faz) contra `purchase_log`: item indicado e
comprado = acerto citando a mecânica e o timing; item indicado e ausente =
erro com a prova textual da habilidade/item (`porque`, igual
`respostas.ts` já extrai). Compara também contra o timing mediano de pro do
mesmo item (`content/pro_dados/<slug>.json.itens[].minuto_mediano`) e,
quando disponível, contra o timing mediano por herói+posição (dado novo,
ver "Dados estáticos a gerar"). Já implementado em parte
(`itemCoreAtrasado`, `achadosDeBuild`); falta o cruzamento por posição.

### economia-e-farm
Ouro perdido ao morrer (campo direto `deaths_log[].gold_lost`, não precisa
estimar via `gold_t` — já corrigido em relação à hipótese inicial da
pesquisa), GPM/XPM final (derivado: `gold_t[final]`/duração), LH@10/LH@20
contra benchmark de pro por herói+posição, participação em abates (KP%,
calculável via `kills`/`assists` do jogador sobre `kills` somado do time).
Já implementado em parte (`ouroNaoGastoAoMorrer` usa a estimativa antiga via
`gold_t`; trocar pelo campo direto `deaths_log[].gold_lost` é correção
pendente, não feature nova — e remove a necessidade do aviso de estimativa
nesse achado específico).

### lutas
Participação e resultado de teamfights (dano, cura, gold/xp delta por
fight), contagem geral — sem afirmar vantagem numérica (5v4 etc, dado que
o OpenDota não expõe, ver "não vê"). Família ainda sem regra própria no
código atual; é a lacuna mais clara a preencher numa próxima fase.

## Placar por área (comparação com pro)

Cada área (Lane, Farm, Sobrevivência, Impacto, Visão, Objetivos) recebe um
selo contra a distribuição de pro do mesmo herói **e posição**:

- `valor >= p75` → selo "ponto forte"
- `p25 <= valor < p75` → selo "dentro da faixa de pro na posição"
- `valor < p25` → selo "abaixo do pro na posição"

Cada selo cita o `n` da amostra (ex. "pos1, n=466 partidas pro 7.40/7.41");
amostra com `n < 10` vem com aviso de amostra pequena em vez de afirmação
categórica. Corte por p25/p75 em vez de só a mediana, porque farm de carry
tem variância alta (decisão já validada na pesquisa 4).

Áreas sem benchmark de pro confiável mostram só o número da partida com
aviso explícito do motivo (ex. "mortes até 20 min": o explorer do OpenDota
não guarda `deaths_log` agregado por herói+posição em `player_matches`, só
`kills_log` — então "abates até 20" tem benchmark, "mortes até 20" não).

## Dados estáticos novos a gerar no export

Hoje `content/pro_dados` é só por herói e `app/public/data/pro_posicoes.json`
é só por posição (sem cruzar com herói para métricas detalhadas). Para o
placar por área por herói+posição, gerar `app/public/data/pro_por_posicao.json`
via `export/dota_export` com a consulta validada na pesquisa 4 (explorer
OpenDota, patches 7.40/7.41, só ligas), em lotes de ~20-30 `hero_id` por
chamada (testado: 2-5s por lote, nunca bate o timeout de ~15s do explorer;
rodar tudo numa chamada só funciona às vezes por cache de plano, mas não é
confiável):

```sql
with base as (
  select pm.match_id, pm.hero_id, pm.player_slot, pm.lane_role, pm.gold_per_min, pm.xp_per_min,
    pm.tower_damage, pm.obs_placed, pm.sen_placed, pm.camps_stacked, pm.lh_t,
    (pm.player_slot < 128) as is_radiant
  from player_matches pm
  join match_patch mp on mp.match_id = pm.match_id
  join matches m on m.match_id = pm.match_id
  where mp.patch in ('7.40','7.41') and m.leagueid is not null and pm.lane_role in (1,2,3)
    and pm.hero_id between :inicio and :fim  -- lote de 20-30 ids
),
posicionado as (
  select *,
    case
      when lane_role = 2 then 'pos2'
      when lane_role = 1 and row_number() over (partition by match_id, is_radiant, lane_role order by gold_per_min desc) = 1 then 'pos1'
      when lane_role = 1 and row_number() over (partition by match_id, is_radiant, lane_role order by gold_per_min asc) = 1 then 'pos5'
      when lane_role = 3 and row_number() over (partition by match_id, is_radiant, lane_role order by gold_per_min desc) = 1 then 'pos3'
      when lane_role = 3 and row_number() over (partition by match_id, is_radiant, lane_role order by gold_per_min asc) = 1 then 'pos4'
      else null
    end as posicao
  from base
)
select hero_id, posicao, count(*) n,
  percentile_cont(array[0.25,0.5,0.75]) within group (order by gold_per_min) gpm_p25_p50_p75,
  percentile_cont(array[0.25,0.5,0.75]) within group (order by xp_per_min) xpm_p25_p50_p75,
  percentile_cont(array[0.25,0.5,0.75]) within group (order by tower_damage) tower_p25_p50_p75,
  percentile_cont(array[0.25,0.5,0.75]) within group (order by coalesce(lh_t[11],0)) lh10_p25_p50_p75,
  percentile_cont(array[0.25,0.5,0.75]) within group (order by coalesce(obs_placed,0)) obs_p25_p50_p75,
  percentile_cont(array[0.25,0.5,0.75]) within group (order by coalesce(sen_placed,0)) sen_p25_p50_p75,
  percentile_cont(array[0.25,0.5,0.75]) within group (order by coalesce(camps_stacked,0)) stacks_p25_p50_p75
from posicionado
where posicao is not null
group by hero_id, posicao
order by hero_id, posicao;
```

(`lh_t[11]` = minuto 10, array do Postgres é 1-indexado). Validado: 596
linhas reais para os 127 heróis atuais. Usar p25/p50/p75 agregados em array
em vez de 3 queries separadas, pra manter o export num só round-trip por
lote.

Schema do OpenDota `benchmarksFonte` em `app/src/live/fonte/schemas.ts` hoje
só valida `gold_per_min`, `xp_per_min`, `last_hits_per_min`; ampliar para
`tower_damage`, `hero_damage_per_min`, `kills_per_min`, `deaths_per_min` é
extensão de schema, não de fonte (a API já devolve esses campos).

Extensão mínima de schema em `partidaFonte` para usar o campo direto de
ouro perdido: adicionar `gold_lost`/`gold_fed` ao objeto de `deaths_log`
(hoje só tem `{time, key}` via `noTempo`).

## Rotas

`/analise/:matchId`: tela dedicada com o relatório completo (placar por
área, lista de achados por família, build vs draft, "o que não vemos").
Link de entrada a partir da partida ao vivo (`PartidaPage.tsx`, onde a
análise já aparece embutida hoje) e a partir do perfil da conta
(`partidasRecentesFonte`, lista de partidas recentes). `/analise` sem id:
busca por match id digitado, reusando o fluxo de "partida não analisada" já
existente (GET, se vazio faz POST `/request/{id}` e faz polling do GET
até `version` aparecer — formato de resposta do POST confirmado:
`{"job":{"jobId":...}}`, sem campo de progresso).

## O que esta análise não vê

Lista fixa, sempre visível (hoje já existe como `O_QUE_NAO_VEMOS` em
`achados.ts`, mantida e ampliada):

1. Perda de torre (OpenDota só marca objetivo de Roshan, não de torre).
2. Qual habilidade específica causou cada morte (só o herói matador).
3. Morte fora de teamfight não tem posição no mapa (`deaths_pos` vazio).
4. Presença perto de Roshan antes do kill: sem campo direto, só inferência
   fraca via teamfight concomitante no mesmo instante.
5. Vantagem numérica real na luta (5v4, 5v3): teamfights não listam quem
   estava vivo e presente.
6. Se a luta foi dentro ou fora do high ground (sem zona de mapa marcada).
7. Posição de wards inimigas (só vê as wards do próprio jogador).
8. Stacks de camp a tempo (só vê quando o item neutro foi coletado, não
   quando o stack foi feito).
9. TP scroll comprado mas não necessariamente usado.
10. `CHAT_MESSAGE_AEGIS_STOLEN`: formato não confirmado empiricamente (não
    apareceu nas partidas de teste).
11. `gold_reasons`/`xp_reasons`: exigem tabela de tradução (dotaconstants)
    que não existe hoje no espelho `content/` do Hub — não usar sem ela.
12. `life_state` (tempo morto total): unidade incerta, não validada contra
    partida de referência conhecida — não exibir em número ao usuário sem
    validar.
13. Mortes até 20 min comparado a pro: sem benchmark confiável (explorer não
    tem `deaths_log` agregado por herói+posição).
14. Custo de buyback em ouro: não vem pronto, precisa calcular por fórmula
    de nível (não implementado).

## Critérios de aceitação (partida 9046905170 contra a referência Dotaflix)

Partida: Medusa, pos1, derrota 16/9/14 em 50:46. Referência: análise do
Dotaflix da mesma partida (ver resumo no histórico de pesquisa).

O motor de regras deve, no mínimo, achar os mesmos pontos que o texto livre
do Dotaflix sustenta com dado:

- [ ] **16:06 "morreu com a Manta no bolso"** → regra `ouroNaoGastoAoMorrer`
      aponta ouro não gasto na morte, idealmente nomeando o item comprado
      depois (Manta em 16:10 no registro real de compras).
- [ ] **28:33 e 49:51 "brigou contra a Aegis do Ursa"** → regra
      `mortesComAegisInimigaAtiva` cobre ambas (Aegis até 31:23 cobre 28:33;
      para 49:51 depende de haver outro Roshan/Aegis do Ursa perto do fim —
      conferir contra o `objectives[]` real da partida).
- [ ] **Mortes no farm 8-20 min (meta ~2, partida teve mais)** → regra
      `mortesNoFarm` reporta a contagem e o peso.
- [ ] **46:10 "luta... buyback gasto"** → se o buyback do `buyback_log`
      estiver nessa janela seguido de morte em até 3 min, regra
      `buybackSeguidoDeMorte` dispara.
- [ ] O motor **não afirma** "perdeu a T1 safe" nem "numericamente
      inferior" (sem dado de torre / presença viva) — ambos aparecem em
      "o que não vemos", nunca como achado inventado.
- [ ] O motor vai **além** do Dotaflix em pelo menos: (a) cita fonte e
      cálculo em cada achado (Dotaflix é prosa de LLM sem isso); (b) cruza
      build com o draft inimigo via `achadosDeBuild` (Dotaflix admite não
      saber as habilidades do oponente); (c) quando disponível, aponta
      posição de morte via teamfight (Dotaflix admite não saber onde a
      Medusa estava).
- [ ] Os 8 testes de `achados.test.ts` continuam passando, mais um teste
      novo por regra adicionada nesta fase (posição de morte, cruzamento
      por posição no placar de área).

## Fora de escopo nesta fase

Família `lutas` completa (presença/participação por teamfight), rota
dedicada `/analise/:matchId` como tela própria (hoje embutida em
`PartidaPage`), geração do `pro_por_posicao.json`, tradução de
`gold_reasons`/`xp_reasons`. Citados aqui como próximo passo, não
bloqueiam a correção e extensão do que já existe.
