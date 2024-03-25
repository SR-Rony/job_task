/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#235940',
        'secoundary':'#6C737F',
        'bg_primary':'#f3f4f6'
      },
    },
  },
  plugins: [],
}

