
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11', 'Safari 13'],
      polyfills: true
    })
  ],
  base: './', // Ensures assets are loaded correctly on GitHub Pages subpaths
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'terser'
  }
});
