module.exports = {
  purge: ['./index.html', './assets/**/*.{js,jsx,ts,tsx,vue}', './**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Custom colors can be added here
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};