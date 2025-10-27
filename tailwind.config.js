/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
        fontFamily: {
            sans: ['Poppins', 'sans-serif']
        },
        colors: {
            primary: '#111111',
            primaryHover: '#0E0E0E',
            secondary: '#333333',
            secondaryHover: '#2B2B2B',
            background: '#E5E5E5',
            accent: '#B4952F',
            accentHover: '#D4AF37',
            backgroundTile: '#F0F0F0',
            backgroundWhite: '#FFFFFF',
            green: "#2E8B57",
            blue: "#2F4F9D"

        },
    },
  },
  plugins: [],
}

