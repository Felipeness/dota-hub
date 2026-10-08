---
id: elo-esperado
titulo: Elo esperado
patch: 7.41
categoria: estatistica
fontes:
- Termo de uso comum no jogo (definição, sem número no texto)
- dota-tier1/work/sintese/chaves.md (seção Elo, linha 13)
- dota-tier1/work/CONTRATO_CHAVES.md (linha 39)
- app/public/data/glossario.json (id elo-esperado)
- app/public/data/times_atlas/team-spirit.chaves.json (estilos_contra)
- dota-tier1/work/PLANO.md (seção Fontes e Critério Tier 1, linha 17)
- dota-tier1/work/CONTRATO_CHAVES.md (estilos_contra[].esperado_elo, excesso_pp)
- dota-tier1/work/PLANO.md (Elo próprio sobre o OpenDota)
sinonimos:
- esperado
- esperado pelo Elo
- esperado_elo
- Elo
- Elo pré-jogo
- Elo da partida
- winrate esperado
links:
- winrate
---
## Básico
A chance de vitória prevista pela força dos dois times. Ganhar acima do esperado mostra desempenho melhor que o previsto.

## Avançado
Cada time tem um Elo calculado sobre todas as partidas profissionais do OpenDota desde 01/01/2026 (K=32); a diferença de Elo entre os dois lados de uma partida vira uma 'chance esperada de vitória' (coluna esperado_radiant em data/tier1/elo_partida.csv). Um exemplo real: o Team Spirit venceu 65% dos jogos contra o cluster C2 Contato enquanto o Elo previa 55%, um excesso de +9,6 pp. É a mesma lógica usada em estilos_contra (esperado_elo) e no contexto de favorito/azarão dos bans.

Como o datdota (fonte tradicional de Elo de Dota) bloqueou o acesso via scraping (Cloudflare 'Access Denied'), o Hub calcula o próprio Elo com o sistema padrão K=32 sobre todas as partidas profissionais do OpenDota desde 01/01/2026 (o patch 7.40 serve só para semear o cálculo, não para contar como amostra de verdade). O valor de cada time antes de cada partida específica fica em data/tier1/elo_partida.csv e dá a 'chance esperada de vitória' usada em 'esperado', 'azarão/favorito' e no critério de entrada no Tier 1 (Elo ≥ 1650).

Calculado a partir do Elo de cada time (construído sobre todos os jogos profissionais do patch). 'Casa e farm: 48% com 55% esperado' quer dizer que, contra times daquele estilo, o time deveria vencer 55% pelo Elo mas venceu só 48%, pior que o esperado.
