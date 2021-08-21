module.exports = {
  darkMode: 'class',
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
