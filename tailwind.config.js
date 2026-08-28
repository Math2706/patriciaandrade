/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'matte-gold': {
          DEFAULT: '#BFA87E',
          50: '#FBF9F5',
          100: '#F4EFE6',
          200: '#DFD4C0',
          300: '#CFBE9F',
          400: '#BFA87E',
          500: '#AA9164',
          600: '#8C7449',
          700: '#6C5834',
          800: '#4D3E24',
          900: '#2F2514',
        },
        'champagne-soft': '#DFD4C0',
        'graphite': {
          DEFAULT: '#1A1918',
          50: '#F9F8F5',
          100: '#F2F0EC',
          200: '#E2DFD8',
          300: '#C0BCB3',
          400: '#969188',
          500: '#706C65',
          600: '#4F4C47',
          700: '#33312E',
          800: '#242220',
          900: '#1A1918',
          950: '#121110',
        },
        'canvas': '#F9F8F5',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'editorial': '0 20px 40px -15px rgba(26, 25, 24, 0.05)',
        'editorial-hover': '0 25px 50px -12px rgba(191, 168, 126, 0.15)',
        'gold-glow': '0 0 35px -5px rgba(191, 168, 126, 0.25)',
      },
      letterSpacing: {
        'ultra-wide': '0.2em',
        'luxury': '0.15em',
      }
    },
  },
  plugins: [],
}
