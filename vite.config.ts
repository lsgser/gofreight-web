import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub Pages project site; use root path in dev for simpler local URLs.
  base: command === 'build' ? '/gofreight-web/' : '/',
}))
