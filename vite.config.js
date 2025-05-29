import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
  },
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      src: '/src',
    },
  },
});
