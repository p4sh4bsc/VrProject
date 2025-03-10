import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  optimizeDeps: {
    include: ["@babylonjs/core", "@babylonjs/loaders"],
  },
  
  server: {
    https: {
      key: fs.readFileSync(path.resolve(__dirname, 'localhost-key.pem')),
      cert: fs.readFileSync(path.resolve(__dirname, 'localhost.pem')),
    },
    host: '0.0.0.0',
    port: 3000,
  },
});