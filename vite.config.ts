import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'generate-sitemap',
      closeBundle: () => {
        // Execute the sitemap generation script
        import('./generate-sitemap.js');
      }
    }
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});