import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // ✅ Indispensable pour que Netlify serve correctement les assets

  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/Images',
          dest: 'assets'
        }
      ]
    })
  ],
  server: {
    host: '0.0.0.0',
  }
});