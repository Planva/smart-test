import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react(),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      plugins: [
        {
          name: 'generate-sitemap',
          closeBundle: () => {
            // Execute the sitemap generation script
            import('./generate-sitemap.js');
          }
        }
      ]
    }
  }
});