/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'imagemEntrada': "url('/src/assets/image/imageEtrada.png')",
        'imagemSolucao': "url('/src/assets/image/solucaoImg.png')",
        'imagemNossaSolucao': "url('/src/assets/image/nossaSolucaoImg.png')",
        'imagemPorqueSolucao': "url('/src/assets/image/porqueSolucaoImg.png')",
        'noticia1': "url('/src/assets/image/noticia1.png')",
        'azulGradient': 'radial-gradient(circle, rgba(127,150,255,1) 0%, rgba(0,0,255,1) 50%, rgba(21,21,177,1) 100%);',
      }
    },
    colors: {
      'azulMahindra': '#0000FF',
      'branco': '#ffffff',
      'preto': '#000000',
      'correta': '#45CB4B',
      'errada': '#F15858'
    },
    keyframes: {
      animationLine: {
        '0%': {'stroke-dashoffset': 2000},
        '100%': {'stroke-dashoffset': 0}
      },
      animationAparece: {
        '0%': {'opacity': 0},
        '100%': {'opacity': 1}
      }
    },
    animation: {
      animationLine: 'animationLine 5s ease-in fowards'
    }
  },
  plugins: [],
}