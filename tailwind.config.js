module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "['./src/**/*.html', './src/**/*.js']",
  ],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#E8A49C',
          DEFAULT: '#3C4CAD',
          dark: '#252B42',
        },
        gray: require('tailwindcss/colors').trueGray,
        green: require('tailwindcss/colors').green,
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
  purge: ['./src/**/*.{js,ts,jsx,tsx}'],
};
