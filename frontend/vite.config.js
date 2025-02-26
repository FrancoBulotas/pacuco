import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    }
  },
  optimizeDeps: {
    include: ['simple-datatables'],
  },
})

// export default defineConfig({
//   plugins: [react()],
//   define: {
//     'import.meta.env.VITE_API_URL': JSON.stringify('https://pacuco-server.vercel.app'),
//   },
//   optimizeDeps: {
//     include: ['simple-datatables'],
//   },
// })