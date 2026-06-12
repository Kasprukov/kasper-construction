import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from a GitHub Pages project subpath (username.github.io/<repo>/).
// Override at build time with: BASE=/my-repo/ npm run build
const base = process.env.BASE || '/kasper-construction/'

export default defineConfig({
  base,
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: { quietDeps: true },
    },
  },
})
