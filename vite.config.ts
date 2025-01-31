import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/FF2F_v2/', // Ensure this is the correct base path
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
