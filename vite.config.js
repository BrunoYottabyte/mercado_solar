import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      // mode: 'development',
      registerType: 'autoUpdate',
      // strategies: 'injectManifest',
      includeAssets: ['favicon.svg'],
      devOptions: {
        enabled: true,
        // type: 'module',
        // navigateFallback: 'index.html'
      },
      manifest: {
        name: 'MR Sistemas',
        short_name: 'MR',
        description: 'Padaria',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'pwa-192x192.png', // <== don't add slash, for testing
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png', // <== don't remove slash, for testing
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png', // <== don't add slash, for testing
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ]
      }
    })
  ],
	build: {
    rollupOptions:{
			external: ['/^node:.*/','./swiper/react', './swiper/css', './axios-progress-bar', './use-react-router-breadcrumbs', './axios-progress-bar/dist/nprogress.css' ,'./react-lottie', './moment', './moment/locale/pt-br', './moment/moment', './react-datepicker', './react-datepicker/dist/react-datepicker.css', './currency.js'],
		},
		
    sourcemap: true, 
    chunkSizeWarningLimit: 10000,
    outDir: './build',

  }
})
