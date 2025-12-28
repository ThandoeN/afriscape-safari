// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  // Configure which files should be scanned for Tailwind classes
  content: [
    "./index.html",
    "./pages/**/*.html",
    "./components/**/*.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      // Custom colors 
      colors: {
        'safari-dark': '#1a472a',    // Dark green for headers
        'safari-green': '#2e8b57',   // Primary green
        'safari-gold': '#d4af37',    // Gold for accents
        'safari-light': '#f8f8f8',   // Light background
        'safari-gray': '#666666',    // Gray for secondary text
        'safari-text': '#333333',    // Dark gray for body text
      },
      
      // Custom breakpoints
      screens: {
        'sm': '640px',
        'md': '768px',  
        'lg': '1024px',
        'xl': '1280px',
      },

      // Custom fonts (we'll use Google Fonts)
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'opensans': ['Open Sans', 'sans-serif'],
      },
      
      // Custom background images
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.jpg')",
        'hwange': "url('/images/hwange.jpg')",
        'victoria-falls': "url('/images/victoria-falls.jpg')",
      },
      
      // Custom spacing
      spacing: {
        '128': '32rem',
      },
      
      // Custom animations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
      
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  
  plugins: [],
}