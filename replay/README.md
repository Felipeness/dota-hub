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
    "niveis": [40, 95],                         // niveis[i] = segundo em que chegou ao nível i+2
    "lh": [0, 4, 9]                             // last hits (com neutros) nos minutos 0, 1, 2… (= lh_t do OpenDota)
  }],
  "wards": [{ "t": 30, "fim": 390, "tipo": "obs", "time": 2, "x": 520, "y": 480, "slot": 4 }],
  "torres": [{ "t": 698, "nome": "npc_dota_goodguys_tower1_bot" }]
}
```

- Posição do herói no segundo `t`: soma `xy` até o índice `t - t0`, divide por `escala`. Normalizado para o minimapa
  (0 a 1, origem embaixo à esquerda): `(g - 57) / 142`.
- `fim` some quando a ward dura até o fim do jogo; `slot` some quando não deu para achar quem colocou.
- Um jogo de 50 min dá ~170 KB de JSON e ~43 KB em gzip.

## Validação (9046905170, Medusa)

Contra o OpenDota: duração igual, as 14 torres com o mesmo nome e tempo exato, mortes dentro de 1 s do `kills_log`
(as diferenças de contagem são reencarnações de aegis e mortes para creep), `lh` com diferença máxima de 5 em 51
minutos, wards 47 obs e 72 sentries iguais ao `obs_placed`/`sen_placed`. Medusa às 10:00 em (176.75, 98), lane de baixo.
