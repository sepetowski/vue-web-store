/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#212121',
        foreground: '#fafafa',
        'mutated-300': '#424242',
        'mutated-200': '#666',
        'mutated-100': '#8c8c8c',
        primary: '#3DD68C'
      }
    }
  },
  plugins: []
}
