import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'public'),
  base: '/',
  build: {
    outDir: '../dist', 
    emptyOutDir: true, 
    assetsDir: 'static',
    copyPublicDir: true,
  },
  server: {
    port: 3000,
  },
  publicDir: path.resolve(__dirname, 'statx'), 
});

