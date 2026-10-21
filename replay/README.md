# replay — trajetos dos heróis a partir do replay

Lê o replay (`.dem`, ou `.dem.bz2` que hoje vem em zstd) com [manta](https://github.com/dotabuff/manta) v1.5.1
e devolve a posição de cada herói por segundo num JSON pequeno para o navegador. Código copiado e enxugado de
`Desktop/dota-imortal/tools/replay` (lá estão as armadilhas do 7.41: offset do relógio, `m_nPlayerID` × 2).
A v1.5.0 do manta não lê o build 6962 (`nextByte: insufficient buffer`); a v1.5.1 lê.

- `trajetos/`: o parser (`trajetos.Ler(r, match)`).
- `cmd/trajetos`: CLI local, `go run ./cmd/trajetos -replay X.dem.bz2 -match ID -out ID.json[.gz]`.
- `cmd/lambda`: a função que gera sob demanda (`GET <function url>/?match=ID`).
- `infra.sh`: cria ou atualiza a função, o papel IAM e a Function URL (idempotente).

## Formato (`data/replays/<id>.json`, v1)

```jsonc
{
  "v": 1, "match": 9046905170, "build": 6962,
  "escala": 4,        // coordenadas = grade do OpenDota × escala (1 unidade = 32 do mundo)
  "t0": -89,          // segundo da primeira amostra (relativo à buzina do 0:00, sem pausas)
  "duracao": 3046,    // segundo da última amostra
  "herois": [{
    "slot": 3, "heroi": "medusa", "time": 2,   // slot do OpenDota; time 2 = Radiant, 3 = Dire
    "xy": [646, 280, 1, 0, -2, 3],              // x0,y0 e depois dx,dy a cada segundo
    "mortes": [[612, 640]],                     // [morreu, voltou) em segundos; reencarnação de aegis aparece como 5 s
    "visto": [[300, 312]],                      // [de, até) em que o time inimigo provavelmente via o herói (estimativa)
    "niveis": [40, 95],                         // niveis[i] = segundo em que chegou ao nível i+2
    "lh": [0, 4, 9]                             // last hits (com neutros) nos minutos 0, 1, 2… (= lh_t do OpenDota)
  }],
  "wards": [{ "t": -59, "fim": 301, "tipo": "obs", "time": 2, "x": 514, "y": 472, "slot": 0,
              "destruida": true, "por": 3 }],   // destruida/por só quando foi dewardada (por = slot de quem matou)
  "smokes": [{ "t": 977, "slot": 130, "time": 3, "x": 348, "y": 642,
               "herois": [{ "slot": 129, "ini": 977, "fim": 1022 }] }],  // quem ficou com o modificador e até quando
  "mortes": [{ "t": 698, "vitima": 3, "assassino": 130, "x": 640, "y": 300 }],  // feed de kills; "por" no lugar de
                                                // "assassino" quando foi creep/torre; "aegis": true quando reencarnou
  "torres": [{ "t": 698, "nome": "npc_dota_goodguys_tower1_bot" }],
  "totais": { "wards": 119, "smokes": 12, "mortes": 99 }
}
```

- Posição do herói no segundo `t`: soma `xy` até o índice `t - t0`, divide por `escala`. Normalizado para o minimapa
  (0 a 1, origem embaixo à esquerda): `(g - 57) / 142`.
- `fim` some quando a ward/smoke dura até o fim do jogo; `slot` some quando não deu para achar quem colocou.
- A ward some do mapa na morte (`fim`), não quando a entidade é apagada (~7,7 s depois).
- O combat log da transmissão não traz posição de morte: `x, y` da morte é a posição da vítima naquele segundo.
- Kill de invocação (zumbi do Undying etc.) vai para o herói dono, como no OpenDota.
- `visto` usa raio de visão de toda unidade viva do time, sem árvores, high ground nem true sight; herói invisível ou
  em smoke conta como não visto.
- Um jogo de 50 min dá ~185 KB de JSON e ~49 KB em gzip.

## Validação (9046905170, Medusa)

Contra o OpenDota: duração igual, as 14 torres com o mesmo nome e tempo exato, mortes dentro de 1 s do `kills_log`
(as diferenças de contagem são reencarnações de aegis e mortes para creep), `lh` com diferença máxima de 5 em 51
minutos, wards 47 obs e 72 sentries iguais ao `obs_placed`/`sen_placed`, dewards por jogador iguais ao
`observer_kills`/`sentry_kills` (mais 1 sentry morta por creep), 12 smokes iguais ao `item_uses`, os 93 kills do
`kills_log` com o mesmo assassino e vítima dentro de 1 s. Medusa às 10:00 em (176.75, 98), lane de baixo.

## Lambda (`cmd/lambda`, `infra.sh`)

`GET https://<function-url>.lambda-url.us-east-2.on.aws/?match=<id>` devolve o JSON (gzip).
Se `s3://dota-hub-968000946695/data/replays/<id>.json` existe, lê de lá (~30 ms); senão pede o `replay_url` ao
OpenDota, baixa da Valve (só `replayN.valve.net`), lê em streaming sem gravar o `.dem`, grava no S3 e devolve
(~6 a 10 s, 120 MB de memória). O mesmo arquivo sai pelo CloudFront em
`https://d22phpj0gnvpfs.cloudfront.net/data/replays/<id>.json`; o `deploy.sh` do app não apaga essa pasta.

Erros em JSON `{code, message}`: 400 `match_invalido`, 404 `replay_indisponivel` (expirou ou o OpenDota não tem o
salt), 502 `upstream`, 500 `interno`. Logs JSON no CloudWatch (14 dias) com `operation`, `match`, `durationMs`, `bytes`.

Custo: cada partida nova gasta ~10 GB-s (US$ 0,00013) e ~50 KB no S3; dentro do free tier da Lambda fica em US$ 0.
A reserva de 2 execuções simultâneas não entra enquanto a conta tiver limite de 10 (a AWS exige 10 livres); até lá
o teto é o da conta.
