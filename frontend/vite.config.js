import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: mode === 'development' 
          ? 'http://localhost:8080' 
          : 'https://pacuco-server.vercel.app',
        changeOrigin: true,
        secure: false,
      },
      '/administracion': {
        target: mode === 'development' 
          ? 'http://localhost:8080' 
          : 'https://pacuco-server.vercel.app',
        changeOrigin: true,
        secure: false,
      },
      '/login': {
        target: mode === 'development' 
          ? 'http://localhost:8080' 
          : 'https://pacuco-server.vercel.app',
        changeOrigin: true,
        secure: false,
      },
      '/register': {
        target: mode === 'development' 
          ? 'http://localhost:8080' 
          : 'https://pacuco-server.vercel.app',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  define: {
    'import.meta.env.VITE_API_URL': JSON.stringify(
      mode === 'development' 
        ? 'http://localhost:8080' 
        : 'https://pacuco-server.vercel.app'
    ),
  },
  optimizeDeps: {
    include: ['simple-datatables'],
  },
}));
