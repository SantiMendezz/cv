import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',  // Cambia esto si se despliega en subdirectorio
  plugins: [react()],
})