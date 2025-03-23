import { defineConfig } from 'vite';

export default defineConfig({
  root: './',
  base: '/adwin-test-layout/',
  build: {
    outDir: 'dist',
  },
  server: {
    open: true,
  },
});
