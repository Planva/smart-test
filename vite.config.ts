import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'generate-sitemap',
      buildStart: () => {
        // Generate sitemap at build start
        import('./generate-sitemap.js');
      },
      writeBundle: () => {
        // Generate sitemap again after bundle is written
        import('./generate-sitemap.js');
      }
    }
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});