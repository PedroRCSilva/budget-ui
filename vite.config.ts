import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig(()=>{
  
  return {
  plugins: [react(), tailwindcss()],
  server: {
    host: true
  },
  resolve: {
    alias: {
      '@components': path.join(__dirname, '/src/components'),
      '@providers': path.join(__dirname, '/src/providers'),
      '@utils': path.join(__dirname, '/src/utils'),
      '@pages': path.join(__dirname, '/src/pages'),
      '@services': path.join(__dirname, '/src/services'),
      '@constants': path.join(__dirname, '/src/constants'),
      '@hooks': path.join(__dirname, '/src/hooks'),
      '@models': path.join(__dirname, '/src/models'),
      '@lib': path.join(__dirname, '/src/lib')
    }
  }
}})
