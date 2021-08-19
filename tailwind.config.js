const colors = require("tailwindcss/colors")

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    screens: {
      xs: "350px",
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
      "2xl": "1720px",
      "3xl": "2024px",
      "4xl": "2548px",
      "5xl": "2960px",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      serif: ["Raleway", "serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      gray: colors.trueGray,
      blue: colors.sky,
      yellow: colors.orange,
      purple: colors.purple,
      red: colors.rose,
    },
    extend: {},
    variants: {
      extend: {},
    },
    plugins: [],
  },
}
