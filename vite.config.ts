import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// Node.js path moduli

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), svgr({ include: '**/*.svg?react' })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // @ ni src ga bog'lash
    },
  },
});
