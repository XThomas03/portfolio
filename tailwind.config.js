/** @type {import('tailwindcss').Config} */
// Se eliminó la importación del plugin que ya no se usa

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'river-red': '#E41B17',
        'bayern-red': '#DC052D',
        'custom-black': '#000000',
        'custom-gray': '#A9A9A9',
        'custom-white': '#FFFFFF',
        'dark-bg': '#0f172a',
        'dark-surface': '#1e293b',
        'dark-text': '#f1f5f9',
        'dark-text-secondary': '#cbd5e1',
      },
      // Se eliminó la animación 'blob'
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s infinite',
      },
      // Se eliminaron los keyframes de 'blob'
      keyframes: {
        // (Aquí puedes dejarlo vacío o eliminar la clave 'keyframes' por completo)
      },
    },
  },
  // Se eliminó el plugin de animation-delay
  plugins: [],
};
