/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'if-bg': '#0a0a0a',
        'if-card': '#141414',
        'if-dark': '#1f1f1f',
        'if-accent': '#b22222',
        'if-muted': '#9ca3af',
      },
      fontFamily: {
        bebas: ['"Bebas Neue"', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      maxWidth: {
        content: '1280px',
        copy: '768px',
      },
    },
  },
  plugins: [],
}
