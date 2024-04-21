import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base: process.env.NODE_ENV === 'production' ? '/react-gh-pages-sample/' : '/',
  plugins: [react()],
  server: {
    port: 4040,
    host: '0.0.0.0',
    open: true,
    cors: true,
    // https://cn.vitejs.dev/config/server-options.html#server-proxy
    proxy: {
      '/api': {
        target: 'https://jsonplaceholder.typicode.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      // Proxying websockets or socket.io: ws://localhost:5173/socket.io -> ws://localhost:5174/socket.io
      '/socket.io': {
        target: 'ws://localhost:5174',
        ws: true
      }
    }
    // https: {
    //   key: fs.readFileSync('RootCA-key.pem'),
    //   cert: fs.readFileSync('RootCA.pem')
    // }
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  }
})
