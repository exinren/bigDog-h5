import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from "path"
// const path = import('path')
// const __dirname = resolve()
function resolve(dir) {
	return path.join(__dirname, "../",dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    })
  ],
  server: {
    port: 3001,
    strictPort: true,
    CORS: true,
    proxy: {
        '/api': {
          target: 'http://localhost:8080',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, '')
        },
    },
    disableHostCheck: true,
  },
  resolve: {
    alias: {
      '@': resolve('src'),
      '@utils': "./utils"
		}
  }
})
