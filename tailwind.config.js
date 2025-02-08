/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        prim:"#15ABAB",
        sec:"#F3F3F3"
      },
    },
  },
  plugins: [],
}

