import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Fontes servidas pelo próprio app: a busca ao vivo só fala com o app e com o OpenDota (spec fase 2, critério 8).
import '@fontsource/saira-condensed/500.css'
import '@fontsource/saira-condensed/600.css'
import '@fontsource/saira-condensed/700.css'
import '@fontsource/ibm-plex-sans/400.css'
import '@fontsource/ibm-plex-sans/500.css'
import '@fontsource/ibm-plex-sans/600.css'
import '@fontsource/jetbrains-mono/500.css'
import './styles.css'
import App from './App.tsx'

const root = document.getElementById('root')
if (!root) throw new Error('elemento #root ausente no index.html')

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
