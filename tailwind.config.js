/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fff5f7',
          100: '#ffe3e9',
          200: '#ffc7d4',
          300: '#ff9ab3',
          400: '#ff6d92',
          500: '#ff4081',
          600: '#f91d6f',
          700: '#d4145a',
          800: '#b01450',
          900: '#92174a',
        },
        rosegold: {
          50: '#fdf8f6',
          100: '#f8ece7',
          200: '#f1d9cd',
          300: '#e7bfaa',
          400: '#dda185',
          500: '#d4876b',
          600: '#c76e5a',
          700: '#a6584c',
          800: '#884a43',
          900: '#6f3f3a',
        },
        cream: {
          50: '#fdfcfb',
          100: '#faf7f4',
          200: '#f5efe8',
          300: '#ebe1d5',
          400: '#dcc9b3',
          500: '#cab08f',
          600: '#b79570',
          700: '#9b7b5c',
          800: '#7f654e',
          900: '#695341',
        },
        lavender: {
          50: '#faf8ff',
          100: '#f3efff',
          200: '#e9e2ff',
          300: '#d8c9ff',
          400: '#c1a6ff',
          500: '#aa82ff',
          600: '#9562f7',
          700: '#824ee3',
          800: '#6d41be',
          900: '#5a389b',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        cursive: ['Dancing Script', 'cursive'],
        elegant: ['Cormorant Garamond', 'serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}
