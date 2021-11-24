module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "hero-background": "url(../../public/background.jpg)",
      },
      colors: {
        brand: "#FF6363",
        "brand-50": "#FFE6E6",
        "brand-100": "#FFBDBD",
        "brand-200": "#FF9B9B",
        "brand-300": "#FF6363",
        "brand-400": "#FF3F3F",
        "brand-500": "#FF1F1F",
        "brand-600": "#E60000",
        "brand-700": "#9B0000",
        "brand-800": "#630000",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
