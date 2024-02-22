import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import richSvg from 'vite-plugin-react-rich-svg'

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    richSvg({
      include: (path) => /.*\.svg$/.test(path),
      componentLoaderOptions: {
        svgrConfig: {
          icon: true,
          ref: true
        }
      }
    })
  ]
})
