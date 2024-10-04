/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'azulEscuro': '#171E45',
        'azulClaro': '#1A245A',
        'brancoTexto': '#E3E3E3',
        'verdeContraste': '#07E7B1',
        'brancoDescricao': '#A8B4F2'
      }
    },
  },
  plugins: [],
}