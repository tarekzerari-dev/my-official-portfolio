import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    port: 5173
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        mainAr: resolve(__dirname, 'index-ar.html'),
        mainFr: resolve(__dirname, 'index-fr.html'),
        ecours: resolve(__dirname, 'ecours.html'),
        ecoursAr: resolve(__dirname, 'ecours-ar.html'),
        healthtrack: resolve(__dirname, 'healthtrack.html'),
        healthtrackAr: resolve(__dirname, 'healthtrack-ar.html'),
        lmcs: resolve(__dirname, 'lmcs.html'),
        lmcsAr: resolve(__dirname, 'lmcs-ar.html'),
        sanad: resolve(__dirname, 'sanad.html'),
        sanadAr: resolve(__dirname, 'sanad-ar.html'),
      }
    }
  }
});
