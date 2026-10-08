---
id: assinatura-temporal
titulo: Assinatura temporal
patch: 7.41
categoria: estrategia
fontes:
- C:/Users/felip/Desktop/dota-tier1/work/CONTRATO_HUB.md (campo assinatura_temporal)
- C:/Users/felip/Desktop/dota-tier1/work/BRIEF_EQUIPE.md (pedido de 'assinatura temporal')
- app/src/times/TimeAtlasPage.tsx (componente AssinaturaTemporal, linha 242, consumindo time.assinatura_temporal)
sinonimos:
- assinatura temporal
---
## Básico
Resumo, janela por janela de 5 minutos, do que o time costuma fazer naquele trecho da partida.

## Avançado
É uma seção do perfil de cada time que narra o padrão de jogo em cada bloco de 5 minutos (0-5, 5-10, ... até 30+), escrita pelo analista a partir dos replays da equipe, por exemplo dizer que entre 15 e 20 min o time costuma preparar o primeiro Roshan. O texto de cada janela vem do campo assinatura_temporal do arquivo da equipe, produzido na análise forense de cada time. Não é calculado por fórmula, é a leitura do analista sobre os dados daquele trecho do jogo.
