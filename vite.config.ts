/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.includes('-')
        }
      }
    })
  ],
  build: {
    lib: {
      entry: './src/main.ce.ts',
      name: 'diabolocom-web-components',
      fileName: 'diabolocom-web-components',
    }
  },
  define: {
    'process.env': process.env,
  },
  test: {
    environment: "happy-dom",
  },
})
