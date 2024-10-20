import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'; 
import EnvironmentPlugin from 'vite-plugin-environment';

export default defineConfig({
  plugins: [
    vue(),
    // Плагин для адекватного считывания env файлов на vite
    EnvironmentPlugin('all', {prefix: ''})
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
});
