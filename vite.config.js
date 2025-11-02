import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/', // для собственного домена
  plugins: [react()],
})
// $env:Path += ";F:\Program\nodejs22"