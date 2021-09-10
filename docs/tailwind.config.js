module.exports = {
  darkMode: 'class',
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{ts,tsx}'],
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};
