/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EDE8F5',
        secondary: '#ADBBDA',
        accent: '#3D52A0'
      },
      fontFamily: {
        textfont: ['hind', 'Helvetica'],
        pixelfont: ['pixel', 'Helvetica']
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeOutDown: {
          '0%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(20px)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out forwards',
        fadeOutDown: 'fadeOutDown 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}
