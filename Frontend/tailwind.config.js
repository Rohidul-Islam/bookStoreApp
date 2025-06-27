/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'Poppins', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        jaini: ['Jaini', 'cursive'],
      },
      colors: {
        primary: {
          light: '#a7bfff',
          DEFAULT: '#6366f1',
          dark: '#312e81',
        },
        accent: {
          light: '#fbc2eb',
          DEFAULT: '#ff5f6d',
          dark: '#833ab4',
        },
        glass: 'rgba(255,255,255,0.15)',
        glassDark: 'rgba(30,41,59,0.35)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
        glow: '0 0 8px 2px #a7bfff',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [
    require('daisyui'),
    require('tailwind-scrollbar'),
  ], 
}