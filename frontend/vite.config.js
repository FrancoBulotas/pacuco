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

// export default defineConfig({
//   plugins: [react()],
//   define: {
//     'import.meta.env.VITE_API_URL': JSON.stringify('https://pacuco-server.vercel.app'),
//   },
//   optimizeDeps: {
//     include: ['simple-datatables'],
//   },
// })