import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/bys/',
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    reportCompressedSize: false, // Disable to fix kbbrotliCompress: 101 on Windows
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          three: ['three'],
          animations: ['gsap', 'framer-motion'],
        },
      },
    },
  },
});
