import { defineConfig } from 'vite'
import adonisjs from '@adonisjs/vite/client'
import react from '@vitejs/plugin-react';
import path from 'path';
// import inertia from '@adonisjs/inertia/client'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './inertia'),
      // '@/i18n': path.resolve(__dirname, './inertia/i18n.ts'),
      // '@/app': path.resolve(__dirname, './inertia/app'),
      // '@/assets': path.resolve(__dirname, './inertia/assets'),
      // '@/components': path.resolve(__dirname, './inertia/components'),
      // '@/contexts': path.resolve(__dirname, './inertia/contexts'),
      // '@/layouts': path.resolve(__dirname, './inertia/layouts'),
      // '@/locales': path.resolve(__dirname, './inertia/locales'),
      // '@/styles': path.resolve(__dirname, './inertia/styles'),
      // '@/helpers': path.resolve(__dirname, './inertia/helpers'),
      // '@/css': path.resolve(__dirname, './inertia/css'),
    },
  },
  plugins: [
    tailwindcss(),
    adonisjs({
      /**
       * Entrypoints of your application. Each entrypoint will
       * result in a separate bundle.
       */
      entrypoints: ['resources/js/app.js'],

      /**
       * Paths to watch and reload the browser on file change
       */
      reload: ['resources/views/**/*.edge'],
    }),
    react({
      babel: {
        plugins: ['babel-plugin-macros', 'babel-plugin-styled-components'],
      },
    }),
    // inertia({
    //   ssr: {
    //     enabled: false,
    //   }
    // })
  ],
})