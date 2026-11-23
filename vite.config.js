import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()],
  // o json-server grava no db.json toda vez que salva algo, e o Vite não precisa ficar olhando esse arquivo
  server: {
    watch: { ignored: ['**/db.json'] },
  },
})
