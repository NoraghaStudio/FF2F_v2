import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Remove the /ff2f/ base to serve from root
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});