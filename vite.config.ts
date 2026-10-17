import path from "path"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Contact details read by src/lib/site.ts. Fail fast rather than ship broken CTAs.
const REQUIRED_ENV = ["VITE_CONTACT_EMAIL", "VITE_CONTACT_PHONE", "VITE_WHATSAPP_NUMBER"]

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const missing = REQUIRED_ENV.filter((key) => !env[key])
  if (missing.length) {
    throw new Error(`Missing env vars: ${missing.join(", ")}. See .env.example.`)
  }

  return {
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }
})
