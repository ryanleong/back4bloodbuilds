module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Teko: ["Teko", "sans-serif"],
        sans: ["Oxygen", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      outline: ["focus-visible"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
