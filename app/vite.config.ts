import react from '@vitejs/plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'
import { replayLocal } from './plugins/replayLocal.ts'

const raizDoApp = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    react(),
    // Só no dev: gera a rota real de uma partida pelo replay (leitor Go do projeto dota-tier1, ao lado deste repositório).
    replayLocal({
      raizDoApp,
      leitor: process.env.DOTA_REPLAY_LEITOR ?? path.resolve(raizDoApp, '../../dota-tier1/tools/replay/replay.exe'),
      pastaDosReplays: process.env.DOTA_REPLAYS ?? 'D:/dota-replays/hub',
    }),
  ],
  server: {
    // Mesma rota do site publicado; a Lambda só aceita chamadas assinadas pelo CloudFront.
    proxy: { '/api/replay': { target: 'https://d22phpj0gnvpfs.cloudfront.net', changeOrigin: true } },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/setupTests.ts'],
  },
})
