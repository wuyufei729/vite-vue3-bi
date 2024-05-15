import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@',                                   // 别名
        replacement: resolve(__dirname, './src'),      // 别名对应地址
      }
     
    ]
  },
  server: {
      port: 4000,
      host: '0.0.0.0',
      open: true,
      cors: true,
      proxy: {
          '/huanxiang': {
              target: 'http://localhost:5000',
              changeOrigin: true,
              //rewrite: (path) => path.replace(/^\/fps/, '')
          }
      }
  },
  build:{
    assetsDir: 'static/img',
    rollupOptions: {
      output: {
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      }
    }
  },
  
})
