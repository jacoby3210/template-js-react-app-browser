import react from '@vitejs/plugin-react'
import { resolve } from 'path';
import { defineConfig } from 'vite'
import { viteConsolePro } from 'vite-plugin-console-pro'
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
		react(), 
		viteConsolePro({exclude: ["node_modules"]}),
		viteStaticCopy({targets: [{src: './sys/manifest.json', dest: ''},]})
	],
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'index.html'),
        background: resolve(__dirname, 'sys/background.js'),
        content: resolve(__dirname, 'sys/content.js'),
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
    outDir: 'dist',
  },
})
