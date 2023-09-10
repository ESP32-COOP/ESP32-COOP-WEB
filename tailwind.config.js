/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors:{
        'coop-blue': '#313F53',
        'coop-blue-100': '#E2EBFF',
        'coop-blue-50': '#F2F6FF',
      }
    },
  },
  plugins: [],
}

