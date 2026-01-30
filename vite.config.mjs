// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  // Project root directory
  root: './',
  
  // Directory to serve as static assets
  publicDir: 'public',
  
  // Build configuration
  build: {
    // Output directory
    outDir: 'dist',
    
    // Rollup configuration
    rollupOptions: {
      // Multi-page application setup
      input: {
        main: './index.html',
        journeys: './pages/safari-journeys.html',
        way: './pages/the-africape-way.html',
      },
      
      // Output configuration
      output: {
        // Preserve directory structure
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: ({name}) => {
          if (/\.(gif|jpe?g|png|svg)$/.test(name)) {
            return 'assets/images/[name]-[hash][extname]';
          }
          if (/\.css$/.test(name)) {
            return 'assets/css/[name]-[hash][extname]';
          }
          return 'assets/[name]-[hash][extname]';
        }
      }
    },
    
    // Minify assets
    minify: true,
    
    // Source maps for production
    sourcemap: false,
  },
  
  // Development server configuration
  server: {
    port: 3000,
    open: true, // Open browser automatically
    host: true, // Allow external access
  },
  
  // Plugin configuration
  plugins: [],
})