import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, '/src/components'),
      '@providers': path.resolve(__dirname, '/src/providers'),
      '@utils': path.resolve(__dirname, '/src/utils'),
      '@pages': path.resolve(__dirname, '/src/pages'),
      '@services': path.resolve(__dirname, '/src/services'),
      '@constants': path.resolve(__dirname, '/src/constants')
    }
  }
})
