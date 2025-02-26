import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://pacuco-server.vercel.app/',
        changeOrigin: true,
      },
    }
  },
  optimizeDeps: {
    include: ['simple-datatables'],
  },
})
