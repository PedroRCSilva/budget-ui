import { createRoot } from 'react-dom/client'
import { RootProvider } from './providers'

const rootElement = document.getElementById('root')
if (rootElement) {
  createRoot(rootElement).render(<RootProvider />)
}
