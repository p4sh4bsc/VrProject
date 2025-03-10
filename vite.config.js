import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    outDir: 'build'
  },
  server: {
    open: true
  }
});
