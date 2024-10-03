/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundSize: {
        '120': '120%',
        '150': '150%',
      }
    },
  },
  variants: {
    backgroundSize: ['hover'],
  },
  plugins: [],
}

