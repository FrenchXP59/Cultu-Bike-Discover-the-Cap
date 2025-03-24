import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/Images',   // Dossier source contenant vos icônes
          dest: 'assets'       // Les images seront copiées dans "assets/Images" dans le build
        }
      ]
    })
  ],
  server: {
    host: '0.0.0.0',
  }
});