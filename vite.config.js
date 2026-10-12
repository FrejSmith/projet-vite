import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'

// Projet "multi-pages" : chaque exercice a son propre index.html.
// Cette liste sert surtout pour "npm run build" (en dev, Vite sert déjà les dossiers).
const page = (chemin) => fileURLToPath(new URL(chemin, import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        accueil: page('./index.html'),
        exo1: page('./Exo1/index.html'),
        exo2: page('./Exo2/index.html'),
        exo3: page('./Exo3/index.html'),
      },
    },
  },
})
