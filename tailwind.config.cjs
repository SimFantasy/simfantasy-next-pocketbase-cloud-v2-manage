/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    fontFamily: {
      apple: ['Homemade Apple', 'Helvetica', 'Arial', 'sans-serif'],
      sans: [
        'Montserrat',
        'ui-sans-serif',
        'system-ui',
        'Helvetica',
        'Arial',
        'sans-serif'
      ]
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio')
  ]
}
